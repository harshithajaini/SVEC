import React,{useState} from 'react'

export default function FormRenderingInFunctions() {

    let initialData={
        uname:"",
        pwd:""
    }

    let [values,updateValues]=useState(initialData);
    const changeUserName=(event)=>{
        updateValues({
           ...values, uname:event.target.value
        })

    }
    const changePwd=(event)=>{
        updateValues({
            ...values, pwd:event.target.value
        })
    }
    const submitUserData=(event)=>{
        event.preventDefault()
        console.log(`${values.uname} ${values.pwd}`)
    }
    return (
        <div>
            <form onSubmit={submitUserData} method='get'>

                <label>Name:</label>
                <input type="text "value={values.uname}
                onChange={changeUserName}
                />
                <br></br>
                <label>Password:</label>
                <input type="password"value={values.pwd}
                onChange={changePwd}
                />
                <br></br>

                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
