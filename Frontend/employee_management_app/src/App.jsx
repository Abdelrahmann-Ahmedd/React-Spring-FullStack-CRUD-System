import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import ListEmployee from './Components/ListEmployee/ListEmployee'
import NewEmployee from './Components/NewEmployee/NewEmployee'
import UpdateEmployee from './Components/UpdateEmployee/UpdateEmployee'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ListEmployee />} ></Route>
          <Route path='/employees' element={<ListEmployee />} ></Route>
          <Route path='/new-employee' element={<NewEmployee />} ></Route>
          <Route path='/edit-employee/:id' element={<UpdateEmployee />} ></Route>
        </Routes>
        <Footer /> 
      </BrowserRouter>
    </>
  )
}

export default App
