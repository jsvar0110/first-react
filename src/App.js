import './App.css';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark Mode has been Enabled", "success")
      document.title = 'Textutils-Dark Mode';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been Enabled", "success")
      document.title = 'Textutils-Light Mode';
    }
  }

  return (
    <>
      {/* // <BrowserRouter> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container  my-3 ">
          <TextForm showAlert={showAlert} heading="Enter Your Text to Analyze below" mode={mode} />
            {/* <Route exact path='/' element={ }/> */}
          {/* <Routes> */}
            {/* <Route exact path='/about' element={<About/>}/> */}
      
          {/* </Routes> */}
        </div>
      {/* // </BrowserRouter> */}
    </>
      );
}

      export default App;
