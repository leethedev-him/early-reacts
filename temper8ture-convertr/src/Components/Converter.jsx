import { useState } from 'react'

function Converter() {

    const [display, setDisplay] = useState("0");
    const [celciusSwitch, setCelciusSwitch] = useState(true);

    const displayed = document.getElementById("displayer");


  const styles = {
    color: celciusSwitch? "#1b1d70": "#1b703e",
    backgroundColor:  celciusSwitch? "#dce1fc": "#e8fff1",
    border: `1px solid ${celciusSwitch? "#1b1d70": "#1b703e"}`,
  }


  function append(n) {
    if (display === '0' && n !== '.') setDisplay(n);
    else if (display.length < 16) {setDisplay(isNaN(display)? n: display + n ); }
    /*displayed.classNameList.remove('shrink','mini');
    if (display.length > 12) displayed.classNameList.add('mini');
    else if (display.length > 9) displayed.classNameList.add('shrink'); */
  }

  function appendDot() {
    if (isNaN(display)) setDisplay("0");
    if (!display.includes('.')) setDisplay(display +'.');
  }

  function clearAll() {
    setDisplay('0');
  }

  function toggleSign() {
    if (isNaN(display)) setDisplay("0");
  else setDisplay(String(parseFloat(display) * -1));
  }

  function del(){
    if (isNaN(display)) setDisplay("0");
    else setDisplay(display.length > 1 ? display.slice(0,-1) : '0');
  }
  /*
  F = (C * 9/5) + 32
  C = (F - 32) * 5/9

  
  */

  const toCelcius = (F) => {
    let r = ((parseFloat(F) - 32) * 5/9);
    return String(Math.round(r*100)/100) + "℃" 
  };
  const toFahrenheit = (C) => {
    let r = ((parseFloat(C) * 9/5) + 32);
    return String(Math.round(r*100)/100) +  "℉";
    }

  function calculate() {
    if (celciusSwitch && display.includes('℃')) setDisplay("0");
    else if (!celciusSwitch && display.includes('℉')) setDisplay("0");
    else setDisplay(celciusSwitch? toCelcius(display): toFahrenheit(display) )
    
  }


  // Keyboard support
  document.addEventListener('keydown', e => {
    if (e.key >= '0' && e.key <= '9') append(e.key);
    else if (e.key === '.') appendDot();
    else if (e.key === 'Enter' || e.key === '=') calculate();
    else if (e.key === 'Escape') clearAll();
    else if (e.key === 'Backspace') {
      setDisplay(display.length > 1 ? display.slice(0,-1) : '0');
    }
  });

  return  <>
        
<div className="calculator">
  <div className="calc-header">
    <span className="calc-label">Temper8ture Convertr</span>
    <div className="calc-dots">
      {/* <span></span><span></span><span></span> */}
    </div>
  </div>
 <div className="btn togglr" style={styles} onClick={()=> setCelciusSwitch(!celciusSwitch)}>{celciusSwitch? "Fahrenheit \u21D2 Celcius": "Celcius \u21D2 Fahrenhiet"}</div>
  <div className="display">
    <div className="display-value" id="displayer">{display}</div>
  </div>

  <div className="grid">
    {/* <!-- Row 1 --> */}
    <button className="btn btn-clr" onClick={() => clearAll()}>AC</button>
    <button className="btn btn-clr" onClick={() => del()}>DEL</button>
    <button className="btn btn-clr" onClick={() => toggleSign()}>+/−</button>

    {/* <!-- Row 2 --> */}
    <button className="btn btn-num" onClick={() => append('7')}>7</button>
    <button className="btn btn-num" onClick={() => append('8')}>8</button>
    <button className="btn btn-num" onClick={() => append('9')}>9</button>

    {/* <!-- Row 3 --> */}
    <button className="btn btn-num" onClick={() => append('4')}>4</button>
    <button className="btn btn-num" onClick={() => append('5')}>5</button>
    <button className="btn btn-num" onClick={() => append('6')}>6</button>

    {/* <!-- Row 4 --> */}
    <button className="btn btn-num" onClick={() => append('1')}>1</button>
    <button className="btn btn-num" onClick={() => append('2')}>2</button>
    <button className="btn btn-num" onClick={() => append('3')}>3</button>

    {/* <!-- Row 5 --> */}
    <button className="btn btn-num" onClick={() => append('0')}>0</button>
    <button className="btn btn-num" onClick={() => appendDot()}>.</button>
    <button className="btn btn-eq"  onClick={() => calculate()}>=</button>
  </div>
      <a href="https://wa.link/qj19pr" rel="nofollow" target="_blank" title="Text Me on WhatsApp"> <code className="marquee">Build by Prince Lee. Click to Connect. </code></a>

</div>

   </>
  
}

export default Converter