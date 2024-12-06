import { useState } from "react";
import './Calculator.css'

function Calculator() {
    const [value, setValue] = useState('');


    return (

        <div className="container">
            <h2 style={{color:"white"}}>Calculator</h2>
            <input type="text" value={value} />

            <div>
            <button className="icone" value="" onClick={e => setValue('')}>AC</button>
            <button className="icone" value="" onClick={e => setValue(value.slice(0, -1))}>DE</button>
            <button className="icone" value="%" onClick={e => setValue(value + e.target.value)}>%</button>
            <button className="icone" value="/" onClick={e => setValue(value + e.target.value)}>÷</button>
            </div>
            <div>
               
                <button className="number" value="7" onClick={e => setValue(value + e.target.value)}>7</button>
                <button className="number"  value="8" onClick={e => setValue(value + e.target.value)}>8</button>
                <button className="number"  value="9" onClick={e => setValue(value + e.target.value)}>9</button>
                <button className="icone" value="*" onClick={e => setValue(value + e.target.value)}>×</button>
                

            </div>

            <div>
                <button className="number"  value="4" onClick={e => setValue(value + e.target.value)}>4</button>
                <button className="number"  value="5" onClick={e => setValue(value + e.target.value)}>5</button>
                <button className="number"  value="6" onClick={e => setValue(value + e.target.value)}>6</button>
                <button className="icone" value="-" onClick={e => setValue(value + e.target.value)}>-</button>
                
            </div>

            <div>
                <button className="number"  value="1" onClick={e => setValue(value + e.target.value)}>1</button>
                <button className="number"  value="2" onClick={e => setValue(value + e.target.value)}>2</button>
                <button className="number"  value="3" onClick={e => setValue(value + e.target.value)}>3</button>
                <button className="icone" value="+" onClick={e => setValue(value + e.target.value)}>+</button>
                
            </div>

            <div>
                <button className="number" value="0" onClick={e => setValue(value + e.target.value)}>0</button>
                <button className="number"  value="." onClick={e => setValue(value + e.target.value)}>.</button>
                <button className="equal" onClvalue="=" onClick={e => setValue(eval(value))}>=</button>
               
            </div>
        </div>
    )
}
export default Calculator;