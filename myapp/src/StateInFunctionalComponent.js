import React,{useState} from 'react'

export default function StateInFunctionalComponent() {
    // let [name,updateName]=useState("Ankitha")
    let [count,updateCount]=useState(0)
    return (
        <div>
            <h1 onMouseOver={()=>(updateCount(count+1))}
            onMouseLeave={()=>(updateCount(count))}>
                {count}
            </h1>
            <button onMouseOver={()=>(updateCount(count+1))}>Increment</button><br></br>
            <button onMouseOver={()=>(updateCount(count-1))}>Decrement</button><br></br>
            <button onMouseOver={()=>(updateCount(count=0))}>Reset</button><br></br>
        </div>
    )
}
