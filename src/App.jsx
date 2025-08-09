import { useState } from 'react'
import './App.css'
import Todosection from './todosection'
import Deletedtasks from './deletedtasks'
import Addedtasks from './addedtasks'

function App() {

  return (
    <>
    <div class="container d-flex con-blue"> <h1>to do</h1> <button class="btn-dark"><i class="bi bi-bookmark-dash-fill"></i></button> <button class="btn-dark"><i class="bi bi-arrow-clockwise"></i></button></div>
    <Todosection/>
    </>
  )
}

export default App
