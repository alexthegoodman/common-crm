import store from '../store'
import googleapis from 'googleapis'
import { Base64 } from 'js-base64'
const MailComposer = require('nodemailer/lib/mail-composer')

interface Args {
  string: string
}

const encode = (str: string): string =>
  Base64.encodeURI(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')

const sendTestEmail = async (events: Electron.IpcMainInvokeEvent, args: Args): Promise<void> => {
  const accessToken = store.get('accessToken')

  if (!accessToken) {
    console.error('No accessToken found in store')
    return
  }

  // send email with google api
  const oauth2Client = new googleapis.google.auth.OAuth2()
  oauth2Client.setCredentials({ access_token: accessToken })

  const gmail = googleapis.google.gmail({
    version: 'v1',
    auth: oauth2Client
  })

  const options = {
    to: 'neverfable@gmail.com',
    from: 'alexthegoodman@gmail.com',
    subject: 'Test email',
    text: 'This is a test email'
    // html: '<b>This is a test email</b>'
  }

  const mailComposer = new MailComposer(options)
  const message = await mailComposer.compile().build()

  const encoded = encode(message)

  const userId = 'me'

  try {
    const res = await gmail.users.messages.send({
      userId,
      requestBody: {
        raw: encoded
      }
    })

    console.info('res: ', res)
  } catch (error) {
    console.error(error)
  }
}

export default sendTestEmail
