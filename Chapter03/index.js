var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var win = null;

app.on('ready' , ()=>{
    win = new BrowserWindow({
        webPreferences : {nodeIntegration : true}
    });
    win.loadFile('index.html');

    win.webContents.openDevTools();

    win.on('closed' , ()=>{
        win = null;
    });
});

let {ipcMain} = require('electron')
ipcMain.on('msg_render2main' , (event , param1 , param2)=>{
    console.log(param1);
    console.log(param2);
    console.log(event.sender);
})

ipcMain.on('msg_render2main' , (event , param1 , param2)=>{
    win.webContents.send('msg_main2render' , param1 , param2);
})
app.on('window-all-closed' , ()=>{
    app.quit();
})


ipcMain.on('msg2_render2main' , (event , param1 , param2)=>{
    console.log('msg2_render2main');
    event.sender.send('msg2_main2render' ,param1, param2);
})
