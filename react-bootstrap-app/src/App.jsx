import { Route, Routes } from 'react-router'
import './App.css'
import ProductCRUD from './Components/Product'
import Header from './Components/Header'
import Contact from './Components/Contact'

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<ProductCRUD />} />
        <Route path='/about' element={<h1>About Page</h1>} />
        <Route path='/contact/:name/:age' element={<Contact />} />
        <Route path='/*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
