const electron = require('electron');
const url = require('url');
const path = require('path');
const { BrowserWindow } = require('electron');

const { app, browserWindow, Menu,ipcMain } = electron;

let mainWindow;
let addWindow;


//Production mode
process.env.NODE_ENV = 'production';


//Listen for app to be ready
app.on('ready', function () {
    //Create new window
    mainWindow = new BrowserWindow({
        webPreferences: {nodeIntegration:true}
    });
    //Load html to new window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));

    //Quit app when mainWindow closed
    mainWindow.on('close', function () {
        app.quit();
    });
    //Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //Insert new template
    Menu.setApplicationMenu(mainMenu);

});

//Handle create add window
function createAddWindow() {
    addWindow = new BrowserWindow({
        width: 300,
        height: 200,
        title: 'Add Shopping List Items',
        webPreferences: {nodeIntegration:true}
    });
    addWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'addWindow.html'),
        protocol: 'file',
        slashes: true
    }));
    //Garbage collection handle
    addWindow.on('close',function(){
       addWindow = null;
    });
}

//catch item add
ipcMain.on('item:add',function(e,item){
   mainWindow.webContents.send('item:add',item);
   addWindow.close();
});

//Create menu template
const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Add Items',
                click() {
                    createAddWindow();
                }
            },
            {
                label: 'Clear Items',
                click(){
                    mainWindow.webContents.send('item:clear');
                }
            },
            {
                label: 'Quit',
                accelerator: process.platform == 'darwin' ? 'Command+Q' :
                    'Ctrl+Q',
                click() {
                    app.quit();
                }
            }
        ]
    }
];

//if mac, add empty object to menu
if(process.platform == 'darwin'){
    mainMenuTemplate.unshift({});
}

//Add developer tools item if not in production
if(process.env.NODE_ENV !== 'production'){
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu: [
            {
                label:'Toogle DevTools',
                accelerator: process.platform == 'darwin' ? 'command+I' : 
                'Ctrl+I',
                click(item,focusedWindow){
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    });
}