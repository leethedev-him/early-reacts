
import { useState, useEffect } from 'react'


function MyEffect() {


    const [count, setCount] = useState(0);
    const [myTitle, setMyTitle] = useState("Page Title")
    const [divColor, setDivColor] = useState("#D5DEE9");

    useEffect(() =>
        { 
            document.title = `Count: ${count}`
        }, [count])


    const increment = () =>  setCount((count) => count + 1);
    
    const decrement = () =>  {
        setCount((count) => count > 0 ? count - 1: count)
    
    };



    const styles = {
        divi:{
            backgroundColor: divColor,
            margin: "20px",
            padding: "10px",
            paddingLeft: "2px",
        },
    }


    function changeTitle(){
        document.title = myTitle;
    }

    function getTitle(e){
        if (e.target.value.trim() !== "")
            setMyTitle(e.target.value)
    }

    let col;

    const getColor = (e) => {
        col = e.target.value;
        return col;
    };


    const setColor = () => {
        setDivColor(col);

    };

  return (
    <div>
        <div style={styles.divi}>Count =  {count}</div>

        <button style={{margin: "20px"}} onClick={increment}>Add</button>
        <button onClick={decrement}>Reduce</button> <br/> <br/>


        <input onChange={getTitle} placeholder='Enter Page Title Text' />  <br/> <br/>

        <button onClick={changeTitle}>Set Page Title</button> <br/> <br/>

        <input onChange={getColor} type='color' value={"#D5DEE9"}/>  <br/> <br/>

        <button onClick={setColor}>Set Color</button> <br/> <br/>



    </div>
  )
}

export default MyEffect