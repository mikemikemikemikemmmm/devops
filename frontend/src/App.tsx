import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const baseUrl: string = import.meta.env.VITE_BACKEND_URL
const isDev = import.meta.env.DEV
export default function App() {
  const [count, setCount] = useState(0)
  const [fetchResult, setFetchResult] = useState('')
  useEffect(() => {
    if (isDev) {
      return
    }
    const tryFetch = async () => {
      const result = await fetch(`${baseUrl}`)
      const jsonR = await result.json()
      setFetchResult(jsonR)
    }
    tryFetch()
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>
        {fetchResult}
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
