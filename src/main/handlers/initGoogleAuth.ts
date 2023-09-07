import { BrowserWindow } from 'electron'

interface Args {
  string: string
}

const initGoogleAuth = async (events: Electron.IpcMainInvokeEvent, args: Args): Promise<void> => {
  console.info('initGoogleAuth called with args: ', args)

  //   try {
  //     console.info('url', url)

  //     // open window to allow user to select account
  //     const authWindow = new BrowserWindow({
  //       width: 800,
  //       height: 600,
  //       show: false,
  //       webPreferences: {
  //         nodeIntegration: false
  //       }
  //     })

  //     authWindow.loadURL(url)
  //     authWindow.show()
  //   } catch (error) {
  //     console.error(error)
  //   }
}

export default initGoogleAuth
