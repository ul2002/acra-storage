[![Click here to lend your support to: ACRA - Application Crash Reports for Android and make a donation at www.pledgie.com !](https://pledgie.com/campaigns/18789.png?skin_name=chrome)](http://www.pledgie.com/campaigns/18789) [![Flattr this project](http://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=kevingaudin&url=http://acra.ch&title=ACRA%20-%20Application%20Crash%20Reports%20for%20Android&language=&tags=opensource%2Candroid&category=software&description=ACRA%20%28Application%20Crash%20Reports%20for%20Android%29%20is%20an%20open%20source%20android%20library%20for%20developers%2C%20enabling%20their%20apps%20to%20send%20detailed%20reports%20when%20they%20crash.)

ACRA-Storage
============

ACRA-Storage is a couchdb web application designed to store [ACRA](http://acra.ch) reports.

ACRA-Storage does not much itself. For reports analysis, and full documentation, see the [Acralyzer](http://github.com/ACRA/acralyzer) project.

Acralyzer and ACRA-Storage are Copyright 2013 Kevin Gaudin (kevin.gaudin@gmail.com) and licensed under the terms of the [GNU General Public License version 3](COPYING).


Components
==========

Acralyzer is the frontend analysis tools. It needs to be connected to a backend storage server.

The default storage endpoint for Acralyzer is [acra-storage](http://github.com/ul2002/acra-storage).

Both Acralyzer and acra-storage are [CouchApps](http://couchapp.org).
CouchApps are web applications made of HTML/Javascript files and served directly by a [CouchDB](http://couchdb.apache.org).

Requirements
==========
+ Git to fetch the projects repositories from Github.
+ cURL - Windows users can get it here
+ A CouchApp deployment tool, for example:
CouchApp: the original python command line tool. Instructions are provided to install it on Linux, Mac OS X, Windows (there is a simple installer for Windows)
Erica: the new generation of CouchApp deployment. Available only on Linux for the moment.
A CouchDB instance:
You can install one on your own server or your workstation for testing purposes. See http://couchdb.apache.org/#download.
The easiest way is to subscribe to a dedicated CouchDB hosting like IrisCouch or Cloudant. Both provide free service for low usage. Cloudant offers a more secured user management but a less recent CouchDB version (fully compatible with Acralyzer though). Because of this security layer, we would recommend using Cloudant as a free hosting service.
The build-couchdb project also provides an easy way to build couchdb from its sources.

Deploy acra-storage
==========
Deploy the first couchapp using the following command lines:

```
$ cd acra-storage
```
```
$ couchapp push http://[login]:[password]@[your.couchdb.host]:[port]/acra-storage
```


