const { app, BrowserWindow, BrowserView } = require('electron')
const path = require('path')
const windowWidth = 400
const windowHeight = 400

app.whenReady().then(() => {
    const win = new BrowserWindow({width: windowWidth, height: windowHeight})
    const view = new BrowserView()
    win.setBrowserView(view);
    win.setAlwaysOnTop("true");
    win.setAspectRatio(1);
    view.setBounds({ x: 0, y: 0, width: windowHeight, height: windowHeight})
    view.setAutoResize({width: true, height: true, horizontal: false, vertical: false})
    view.webContents.loadURL('https://www.life360.com/circles/#/')
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
