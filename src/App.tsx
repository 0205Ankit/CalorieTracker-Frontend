import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInSide from "./pages/SignInSide";
import SignUp from "./pages/SignUpSide";


export default function App() {

  return(
    <Routes>
     <Route path="/" element={<SignInSide/>}/>
     <Route path="/sign-up" element={<SignUp/>}/>
     <Route path="/home" element={<HomePage/>}/>
    </Routes>
  )
}