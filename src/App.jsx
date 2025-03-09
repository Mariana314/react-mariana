import { Routes, Route } from "react-router-dom";
import { Header } from './Components/Layouts/Header/Header'
import { Home } from './Components/Pages/Home/Home'
import { AboutMe } from "./Components/Pages/AboutMe/AboutMe";
import { NotFound } from "./Components/Pages/NotFound/NotFound";

export const App = () => {
  return (
 <>
 <Header />
 <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/aboutMe" element ={<AboutMe />} />
    <Route path="*" element ={<NotFound />} />

 </Routes>
 </>
  )
}