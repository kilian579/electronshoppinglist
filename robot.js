const electron = require('electron');
const path = require('path');
const url = require('url');


const {app, remote, Menu, ipcMain} = electron;

function doSomething(){
  console.log("Oovo Java");
}

function createAddWindow(){
  addWindow = new remote.BrowserWindow({
    width: 300,
    height:200,
    title:'Add Shopping List Item'
  });
  addWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'addWindow.html'),
    protocol: 'file:',
    slashes:true
  }));
  // Handle garbage collection
  addWindow.on('close', function(){
    addWindow = null;
  });
}