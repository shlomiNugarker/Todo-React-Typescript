import React from 'react'
import './assets/scss/global.scss'
import InputFeild from './cmps/InputFeild'

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Todo with Typescript</span>
      <InputFeild />
    </div>
  )
}

export default App
