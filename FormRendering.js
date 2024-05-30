import React, { Component } from 'react'

export default class FormRendering extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             uname:"",
             pwd:""
        }
    }
    changeUserName=(event)=>{
        this.setState({
            uname:event.target.value
        })

    }
    changePwd=(event)=>{
        this.setState({
            pwd:event.target.value
        })
    }
    submitUserData=(event)=>{
        event.preventDefault()
        console.log(`${this.state.uname} ${this.state.pwd}`)
    }
    
    render() {
        return (
            <div >
                <form onSubmit={this.submitUserData} method='get'>

                    <label>Name:</label>
                    <input type="text "value={this.state.uname}
                    onChange={this.changeUserName}
                    />
                    <br></br>
                    <label>Password</label>
                    <input type="password"value={this.state.pwd}
                    onChange={this.changePwd}
                    />
                    <br></br>
                    
                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}
