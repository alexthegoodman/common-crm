import { shell } from 'electron'

interface Args {
  string: string
}

const initGoogleAuth = async (events: Electron.IpcMainInvokeEvent, args: Args): Promise<void> => {
  console.info('initGoogleAuth called with args: ', args)

  try {
    // fetch url from api
    const data = await fetch('http://localhost:3000/api/auth/get-google-url')
    const json = await data.json()
    const url = json.url

    if (!url) {
      console.error('No url found in response')
      return
    }

    console.info('url fetched: ', url)

    // open it in primary browser
    shell.openExternal(url)
  } catch (error) {
    console.error(error)
  }
}

export default initGoogleAuth
