import { Route, Routes } from 'react-router'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import AddProduct from './Components/AddProduct'
import EditProduct from './Components/EditProduct'
import SignIn from './Components/Auth/SignIn'
import SignUp from './Components/Auth/SignUp'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/edit-product/:id' element={<EditProduct />} />
      </Routes>
    </>
  )
}

export default App
