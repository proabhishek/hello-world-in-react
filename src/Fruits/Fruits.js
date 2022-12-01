// import React from "react"; 


const Fruits = ({props}) =>{

    //props =  {fruits_name: "Banana", para="Its a delicous fruit 2"}

    // let {fruits_name, para} = obj
    //   console.log(obj)
      return(
        <div>
            <button>{props.fruits_name}</button>
            <p>{props.para} </p>
         </div>
      )
}

export default Fruits