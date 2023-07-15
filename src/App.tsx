import { BrowserRouter } from "react-router-dom"
import Footer from "./components/UI/footer/Footer"
import Header from "./components/UI/header/Header"
import {FC} from 'react';
import "./sass/style.scss"
import AppRouter from "./components/AppRouter"

const App:FC = () => {

  return (
    <div className="container">
    <BrowserRouter>
        <Header/>
        <AppRouter/>
        <Footer/>
    </BrowserRouter>
    </div>

  )
}

export default App
