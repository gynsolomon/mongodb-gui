var gui = require('nw.gui');
var win = gui.Window.get();
var menubar = new gui.Menu({ type: "menubar" });
var mongodb = require('mongodb');

menubar.createMacBuiltin("MongoDB GUI");

var menu = new gui.Menu();
// Add some items
menu.append(new gui.MenuItem({ label: 'Connect' }));
menu.append(new gui.MenuItem({ type: 'separator' }));
menu.append(new gui.MenuItem({ label: 'Close' }));

menubar.insert(new gui.MenuItem({ label: 'File', submenu: menu}), 1);

win.menu = menubar;

var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    BSON = require('mongodb').pure().BSON,
    assert = require('assert');

var db = new Db('test', new Server('localhost', 27017));
// Establish connection to db
db.open(function(err, db) {

  // Use the admin database for the operation
  var adminDb = db.admin();

  // List all the available databases
  adminDb.listDatabases(function(err, dbs) {
		dbs.databases.forEach(function(database){
			var dbEl = $('<li />');
			var dbLink = $('<a />');
			dbLink.text(database.name);
			dbLink.attr('href', '#' + database.name);
			dbEl.append(dbLink);
			$('#sidebar').append(dbEl);
		});
    db.close();
  });
});
$.last = function(arr){
	return arr[ arr.length -1 ];
}

$(document).on('click', 'li', function(){
	var that = this;
	var href = $('a', this).attr('href');
	var dbName = href.substr(1);
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/' + dbName, function(err, db) {
  if(err) throw err;
  db.collectionNames(function(err, collections){
		collections.forEach(function(collection){
			$(that).append($('<li />').text($.last(collection.name.split('.'))));	
		});
  });
});
});
