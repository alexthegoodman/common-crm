import Versions from './components/Versions'

declare global {
  interface Window {
    initGoogleAuth: any
  }
}

function App(): JSX.Element {
  const onInitClick = (): void => {
    window.initGoogleAuth({ test: 'test' })
  }

  return (
    <div className="container">
      <Versions></Versions>
      <button onClick={onInitClick}>Init Google Auth</button>
    </div>
  )
}

export default App
