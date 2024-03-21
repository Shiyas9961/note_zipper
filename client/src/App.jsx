import LandingPage from "./Pages/LandingPage"
import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import MyNotes from "./Pages/MyNotes"
import EditNote from "./Pages/EditNote"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<LandingPage/>} />
        <Route path="mynotes" element={<MyNotes/>} />
        <Route path="note/:id" element={<EditNote/>} />
      </Route>
    </Routes>
  )
}

export default App
