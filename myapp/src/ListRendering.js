import React from 'react'

export default function ListRendering() {

// let emplist=["Akhil","Ankitha","Anitha","Kavya"]
 let emplist=[
     {
         name:"Akhil",
         salary:40000,
         email:"akhil01@gmail.com"

     },
     {
        name:"Kavya",
        salary:40000,
        email:"kavya02@gmail.com"

    },
    {
        name:"Anitha",
        salary:45000,
        email:"anitha5@gmail.com"

    }
     
 ]



    return (
        <div>
            <h1>
                
                List Rendering
                </h1>
                {/* {
                emplist.map(element=>
                   <h1> {element}</h1>
                )
                } */}
                {
                emplist.map(
                    
                    empdata=>(
                        <>
                        <p>{empdata.name} </p>
                        <p>{empdata.salary} </p>
                        <p>{empdata.email} </p>
                    </>
                )
                    
                )
}
            
        </div>
    )
}
