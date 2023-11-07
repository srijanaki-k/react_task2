//calculator using react
//Task2
import React from "react";
import { useState } from "react";
import Keypad from "./keypad";

function App(){
    let [value,updatevalue] = useState("")
    function clear(){
        updatevalue("")
    }
    function equals(){
        let p = eval(value)
        updatevalue(p)
    }
    function input(inp){
       updatevalue(value+inp)
     
    }
    return(
    <>
    <div className="content">
        <h2>Calculator using reactjs</h2>
        <div className="zero">
        
        <input className="one"type ="text" value={value} />
        <Keypad className="two"input={input} clear={clear} equals={equals}></Keypad>
        </div>
        </div>
        </>
    )
}
export default App