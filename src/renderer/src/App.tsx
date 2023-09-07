import Versions from './components/Versions'

declare global {
  interface Window {
    initGoogleAuth: any
  }
}

function App(): JSX.Element {
  const onInitClick = (): void => {
    window.initGoogleAuth()
  }

  const onEmailClick = (): void => {
    window.sendTestEmail()
  }

  return (
    <div className="container">
      <Versions></Versions>
      <button onClick={onInitClick}>Init Google Auth</button>
      <button onClick={onEmailClick}>Send Test Email</button>
    </div>
  )
}

export default App
