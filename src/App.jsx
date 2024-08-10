import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import {store} from './app/store'

function App() {
  

  return (
    <Provider store={store}>
    <div className='flex flex-col items-center w-[100vw] h-[100vh] bg-slate-700'>
      <h1 className='text-white text-2xl my-5'>Todo List</h1>
      <AddTodo/>
      <Todos/>
    </div>
    </Provider>
  )
}

export default App
