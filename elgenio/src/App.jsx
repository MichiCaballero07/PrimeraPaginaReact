import Footer from './components/Footer'
import './App.css'
import Header from './components/Header'
import Somos from './components/Somos'
import Hola from './components/Hola'
import  Header2  from './components/Header2'
import Servicios from './components/Servicios'
import useData from './assets/helpers/useData'



function App() {


  return (
    <>
      <Header/>
      <Header2/>
      <Somos/>
      
      <Servicios  data={useData}/>
      <Hola/>
      <Footer/>

    </>
  )
}

export default App
