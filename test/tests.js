// Generated by CoffeeScript 1.8.0
(function() {
  var collector, expect;

  collector = require('../');

  expect = require('expect.js');

  describe('collector', function() {
    var apa, error;
    apa = null;
    error = null;
    before(function(done) {
      this.timeout(30000);
      return collector.get({
        city: 'sfbay',
        start: new Date('jun 1 2014'),
        end: new Date('dec 31 2014')
      }, function(err, posts) {
        if (err) {
          return console.log(err);
        } else {
          done();
          return apa = posts;
        }
      });
    });
    it('should have no error', function() {
      return expect(error).to.not.be.ok();
    });
    it('should have posts', function() {
      return expect(apa).to.not.be.empty();
    });
    it('should have a date on each post', function() {
      var dates;
      dates = apa.filter(function(post) {
        return post.date;
      });
      return expect(dates.length).to.equal(apa.length);
    });
    it('should have a title on each post', function() {
      var titles;
      titles = apa.filter(function(post) {
        return post.title;
      });
      return expect(titles.length).to.equal(apa.length);
    });
    return it('should have a url on each post', function() {
      var urls;
      urls = apa.filter(function(post) {
        return post.url;
      });
      return expect(urls.length).to.equal(apa.length);
    });
  });

}).call(this);
