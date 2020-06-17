let {BrowserWindow} = require('electron');
console.log(BrowserWindow);
exports.makeWin =  ()=>{
    let win = new BrowserWindow({
        webPreferences : {nodeIntegration: true}
    });
    return win;
}

