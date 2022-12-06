
// import React from "react"

import Fruits from "./Fruits/Fruits"
import Vegetables from "./Vegetables/Vegetables"

let perosonInfo = [
    {name: "Abhishek", email: "abc@gmail.com", phone: "1234567890"},
    {name: "Rahul", email: "rahul@gamil.com", phone: "1234567890"},
    {name: "Raj", email: "raj@gmail.com", phone: "1234567890"}
]





const App=()=>{
    return (
         <div>
                {/* <h1>Hello Fruits</h1>
                <p> Welcome to the Fruit Sale</p> */}
                 {/* {
                    perosonInfo.map((person)=>{
                         return (
                            <Fruits 
                                name={person.name}
                                email={person.email}
                                phone={person.phone}
                            />
                         )
                    })
                 } */}
                <Vegetables name = "Abhsihek">
                    <p> This is the children of Vegetables</p>
                    <h3> Hello</h3>
                </Vegetables>

                <Vegetables 
                  name = "Anubhav"
                >
                    <h4> Hello Everyone</h4>
                </Vegetables>

                <Vegetables 
                  name = "Pankaj"
                >
                    <p> This is the children of Vegetables by Pankaj</p>
                </Vegetables>
                 
         </div>
    )
}


export default App


