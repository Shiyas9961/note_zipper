import { Fragment } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import LandingPage from "./Pages/LandingPage"

function App() {

  return (
    <Fragment>
      <Header/>
      <LandingPage/>
      <Footer/>
    </Fragment>
  )
}

export default App
