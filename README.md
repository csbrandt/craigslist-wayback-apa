[![NPM](https://nodei.co/npm/craigslist-wayback-apa.png?downloads=true&stars=true)](https://nodei.co/npm/craigslist-wayback-apa/)

Fetch archived RSS feeds from the craigslist apa section on archive.org

Installation
-------------
    $ npm install craigslist-wayback-apa

Function
--------
get(options, cb)
> **options**:  *object*, request options
>   + city: where to collect apa feeds
>   + start: date to collect feeds from
>   + end: date to collect feeds to
>
> **cb**:  *Function(error, posts)*, callback function
> + error: *Error*, passed when issue encountered requesting feed
> + posts: *array*, JSON array of posts with the following schema,
>   + date
>   + title
>   + location
>   + price
>   + bedroom
>   + url


Running Tests
--------------
Install the development dependencies:

    $ npm install

Then run the tests:

    $ npm test

Code Coverage
--------------
Install the development dependencies:

    $ npm install

Then run coverage

    $ npm run coverage

View coverage reports

    $ firefox coverage/lcov-report/index.html

Browser Bundle
---------------
    $ npm run build
