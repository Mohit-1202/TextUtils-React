import './App.css'
import About from './components/About'
import Navbar  from './components/Navbar'
import TextForm from './components/TextForm'
import {useState} from 'react'
import Alert from './components/alert'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [mode, setMode] = useState(`light`,`green`,`grey`,`blue`)
  const DarkMode =()=>{
    if(mode===`light`){
      setMode (`dark`)
      document.body.style.backgroundColor=`grey`
      showAlert(" Dark mode has been enabled", "success")
    }else if(mode===`green`){
      setMode(`grey`)
     document.body.style.backgroundColor=`grey`
     showAlert(" Grey mode has been enabled", "success")
    }else if(mode===`blue`){
      setMode(`grey`)
    document.body.style.backgroundColor=`grey`
    showAlert(" Grey mode has been enabled", "success")
    }
    else{
      setMode(`light`)
       document.body.style.backgroundColor=`white`
       showAlert(" Light mode has been enabled", "success")
    }
  }
  const GreenMode =()=>{
    if(mode===`light`){
      setMode (`green`)
      document.body.style.backgroundColor=`#1D764E`
      showAlert(" Green mode has been enabled", "success")
    }else if(mode===`dark`){
      setMode(`green`)
     document.body.style.backgroundColor=`#1D764E`
     showAlert(" Green mode has been enabled", "success")
    }else if(mode===`blue`){
      setMode(`green`)
    document.body.style.backgroundColor=`#1D764E`
    showAlert(" Green mode has been enabled", "success")
    }
    else{
      setMode(`light`)
       document.body.style.backgroundColor=`white`
       showAlert(" Light mode has been enabled", "success")
    }
  }
  const BlueMode =()=>{
    if(mode===`light`){
      setMode (`blue`)
      document.body.style.backgroundColor=`#03254c`
      showAlert("Blue mode has been enabled", "success")
    }else if(mode===`dark`){
      setMode(`blue`)
     document.body.style.backgroundColor=`#03254c`
     showAlert(" Blue mode has been enabled", "success")
    }else if(mode===`green`){
      setMode(`blue`)
    document.body.style.backgroundColor=`#03254c`
    showAlert(" Blue mode has been enabled", "success")
    }
    else{
      setMode(`light`)
       document.body.style.backgroundColor=`white`
       showAlert(" Light mode has been enabled", "success")
    }
  }
  
  const Style = {
    backgroundColor: mode === 'light' ? 'white' : '#212529',
    color:mode === 'light' ? '#212529' : 'white',
  };
  const[alert,setAlert]= useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  
  return (
    <>
    <BrowserRouter>
      <Navbar title={"TextUtils"} mode={mode} DarkMode={DarkMode} GreenMode={GreenMode} BlueMode={BlueMode} Style={Style}/>
      <Alert alert={alert} />
          <Routes>
            <Route path="/About" element={<About/>}/>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
              />
              </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
