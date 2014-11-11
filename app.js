var gui = require('nw.gui');
var win = gui.Window.get();
var menubar = new gui.Menu({ type: "menubar" });

var menu = new gui.Menu();

menubar.createMacBuiltin("MongoDB GUI");
// Add some items
menu.append(new gui.MenuItem({ label: 'Connect' }));
menu.append(new gui.MenuItem({ type: 'separator' }));
menu.append(new gui.MenuItem({ label: 'Close' }));

menubar.append(new gui.MenuItem({ label: 'File', submenu: menu}));


win.menu = menubar;
