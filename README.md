
Get acra-storage  from Github
==========
```
$ git clone https://github.com/ul2002/acra-storage.git
```

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


