import { useState } from 'react'
import Test from './Test.jsx'
import { getFemaleStudent, getMaleStudent } from './student.js';
//import fromCymk from 'C:/Users/Lee/Documents/AI Slop/sttt.js';




function App() {

  const styling = {
    fontFamily: "Montserrat Poppins sans-serif",
    color: "white",
    padding: "10px",
    button:{
      color: "white",
      position : "fixed",
      bottom: "20px",
      transform: "translateX(-50%)",
      zIndex: "1",
      fontSize: "5px",
      
      add:{
        
      },

      remove:{
       
        backgroundColor: "red",
      }
    },



  }

  const [showMale, setShowMale] = useState([]);
  const [showFemale, setShowFemale] = useState([]);

  const addMale = () =>{ 
      setShowMale([...showMale, <Test key={showMale.length} student={getMaleStudent()} />]);
  }

  const removeMale = () =>{
    showMale.length > 0 && setShowMale(showMale => showMale.slice(0, -1));
  }


  const addFemale = () =>{ 
      setShowFemale([...showFemale, <Test key={showFemale.length} student={getFemaleStudent()} />]);
  }

  const removeFemale = () =>{
    showFemale.length > 0 && setShowFemale(showFemale => showFemale.slice(0, -1));
  }




  return (
    <>


    <div>

      <button style={{...styling.button, ...styling.button.add, left: "15%" }} onClick={()=> addMale()}>Click to See a male student!</button>


      <button style={{...styling.button, ...styling.button.remove, left: "35%" }} onClick={()=> removeMale()}>Click to Remove the last male student!</button>



      <button style={{...styling.button, ...styling.button.add, left: "55%" }} onClick={()=> addFemale()}>Click to See a female student!</button>


      <button style={{...styling.button, ...styling.button.remove, left: "80%" }} onClick={()=> removeFemale()}>Click to Remove the last female student!</button>

    </div>


    {showMale} {showFemale}

    {/* 
    <Test student={stu1} />
    <Test studen
  t={stu2} />
     */}
    
    </>
  )
}

export default App
