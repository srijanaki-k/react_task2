
import './App.css'

function Keypad({input,clear,equals}){
    return(
        <>
        <div className="keypad">
        <div className='four'>
            <div className='row'>
                <button className="btn" onClick={()=>{
                     {input("7")}
                }}>7</button>
                <button className="btn" onClick={()=>{
                    {(input("8"))}
                }}>8</button>
                <button className="btn" onClick={()=>{
                    {(input("9"))}
                }}>9</button>
                
            </div>
            <div className='row'>
                <button className="btn" onClick={()=>{
                    {(input("4"))}
                }}>4</button>
                <button className="btn" onClick={()=>{
                    {(input("5"))}
                }}>5</button>
                <button className="btn" onClick={()=>{
                    {(input("6"))}
                }}>6</button>
                
            </div>
            <div className='row'>
                <button className="btn" onClick={()=>{
                    {(input("1"))}
                }}>1</button>
                <button className="btn" onClick={()=>{
                    {(input("2"))}
                }}>2</button>
                <button className="btn" onClick={()=>{
                    {(input("3"))}
                }}>3</button>
                
            </div>
            <div className='row'>
                <button className="btn" id='bn' onClick={()=>{
                    {(input("0"))}
                }}>0</button>
                <button className="btn" onClick={()=>{
                    {(input("."))}
                }}>.</button>
                <button className="btn" onClick={()=>{
                    {equals()}
                }}>=</button>
                
            </div>
            
            
        </div>
        <div className='lrow'>
            <button className="btnl" onClick={()=>{
                    {clear()}
                }}>C</button>
            <button className="btnl" onClick={()=>{
                    {(input("/"))}
                }}>/</button>
            <button className="btnl" onClick={()=>{
                    {(input("*"))}
                }}>*</button>
            <button className="btnl" onClick={()=>{
                    {(input("-"))}
                }}>-</button>
            <button className="btnl" id='bn1' onClick={()=>{
                    {(input("+"))}
                }}>+</button>
        </div>
        </div>
        </>
    )
}
export default Keypad
