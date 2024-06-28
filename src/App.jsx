
import { useEffect } from 'react'
import './App.css'
import { getArticles, getBlogs } from './services/apiOperation/blogOperation'
import { Routes,Route } from 'react-router-dom'
import { Nav } from './components/layouts/Nav'
import Home from './components/pages/Home'




function App() {

 

  return (
   <>


    <Nav/>
   <Routes>
    <Route path="/" element={<Home/>}/>
   </Routes>
  
   </>
  )
}

export default App
