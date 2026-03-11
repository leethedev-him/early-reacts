import React, { useState } from 'react'

const MyCounter = () => {
    const styles = {
        card:{
            padding: "20px",
            borderRadius: "30px",
            textAlign: "center",
            boxShadow: "5px 5px 5px #838383",
            backgroundColor: "#dee7ff",
        },

        button:{
            fontSize: "40px",
            borderRadius: "10px",
            padding: "10px",
            color: "white",
            margin: "10px",
        },

        counterDisplay:{
            fontSize: "8em",
            margin: "0",
        }
    }



const [counter, setCounter] = useState(0);

const addNum = () => setCounter(counter + 1);

const remNum = () => {
    setCounter(counter > 0 ? counter - 1 : counter );
}



  return (
    <div style={styles.card}>
        <p>My Counter</p>
        <h2 style={styles.counterDisplay}>{counter}</h2>

        <button onClick={addNum} style={{...styles.button, backgroundColor: "blue"}}>+</button>
        <button onClick={()=> setCounter(0)} style={{...styles.button, backgroundColor: "#424242"}}>Reset</button>
        <button onClick={remNum} style={{...styles.button, backgroundColor: "red"}}>-</button>
        

    </div>
  )
}

export default MyCounter