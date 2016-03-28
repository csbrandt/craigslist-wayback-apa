collector = require('../')
expect = require('expect.js')

describe 'collector', ->
   apa = null
   error = null

   before (done) ->
      @timeout(30000)
      collector.get
         city: 'sfbay'
         start: new Date('jun 1 2014')
         end: new Date('dec 31 2014')
      , (err, posts) ->
         if err
            console.log err
         else
            done()
            apa = posts

   it 'should have no error', ->
      expect(error).to.not.be.ok()

   it 'should have posts', ->
      expect(apa).to.not.be.empty()

   it 'should have a date on each post', ->
      dates = apa.filter (post) ->
         return post.date
      expect(dates.length).to.equal apa.length

   it 'should have a title on each post', ->
      titles = apa.filter (post) ->
         return post.title
      expect(titles.length).to.equal apa.length

   it 'should have a url on each post', ->
      urls = apa.filter (post) ->
         return post.url
      expect(urls.length).to.equal apa.length
