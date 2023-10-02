import './App.css'
import './i18n'
import { useTranslation } from 'react-i18next'
import { useDemoStore } from './store'

function App() {

  const { count, inc } = useDemoStore()
  const { t } = useTranslation()
  return (
    <>
      <div> {t('hello')}</div>
      react + ts + zustand + i18n + vite + ahook

      <div>
        demo
        <div>
          <span>{count}</span>
          <button onClick={inc}>one up</button>
        </div>
      </div>
    </>
  )
}

export default App
