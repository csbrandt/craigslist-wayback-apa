var request = require('request');
var wayback = require('wayback-machine');
var parser  = require('craigslist-apa-parse');
var collector = exports;

collector.get = function(options, cb) {
   var section = (options.city === 'newyork' || options.city === 'boston') ? 'aap' : 'apa';
   wayback.getTimeline('https://' + options.city + '.craigslist.org/' + section + '/index.rss', function(err, timeline) {
      var mementos;
      var parsed = [];
      var amount = 0;

      if (err) {
         cb(err, null);
         return;
      }

      mementos = timeline.mementos.filter(function(snapshot) {
         return ((options.start) ? snapshot.time.getTime() >= options.start.getTime() : true) &&
         ((options.end) ? snapshot.time.getTime() <= options.end.getTime() : true);
      });

      mementos.forEach(function(snapshot) {
         request(snapshot.url, function(err, response, body) {
            if (err) {
               cb(err, null);
               return;
            }
            parser.parse(body, function(err, posts) {
               if (err) {
                  cb(err, null);
                  return;
               }

               Array.prototype.push.apply(parsed, posts);
               amount++;

               if (amount === mementos.length) {
                  cb(null, parsed);
               }
            });
         });
      });
   });
};
