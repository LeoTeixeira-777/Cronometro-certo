import { func } from "prop-types";
import { useState } from "react";

function app() {

    const [dec, setDec] = useState(0);
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [ligado, setLigado] = useState(false);
 
    function start() {
        setLigado(true)
    }
    function pause() {
        setLigado(false)
    }
    function reset() {

    }
    function aumenta() {
        while(ligado == true){
            setTimeout(() => {setDec(dec + 1);} , 10);
        }
    }

    aumenta();

    return (
    <div className="app">
        <div className="timer">
            <p>{ `${min}: ${sec}: ${dec}` }</p>
        
        </div>


        <div className="control">
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={reset}>Reset</button>
        </div>
    </div>
)
}