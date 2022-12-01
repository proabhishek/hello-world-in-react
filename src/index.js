import React from "react"
import ReactDOM from "react-dom"
import "./style.css"

// JSX
const Start=()=>{
       return (
            <div className="bg">
                {/* <h1 style={{textAlign: "center"}}> Hello World </h1> */}
                <h1> Hello WOrld</h1>
                <p> I am a para </p>
            </div>
       )
}



ReactDOM.render(<Start />, document.getElementById("root"))

