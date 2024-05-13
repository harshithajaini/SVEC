import React from 'react'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import ClassComponent from './ClassComponent'
import FormRendering from './FormRendering'
import ListRendering from './ListRendering'
import StateInFunctionalComponent from './StateInFunctionalComponent'

export default function Home() {
    return (
        <div>
        <BrowserRouter>
        <Routes>
            <Route  path='Home' element={<Main />}></Route>
            <Route path='Login' element={<FormRendering/>} ></Route>
            <Route path='List' element={<ListRendering />}></Route>
            <Route path='/ClassComp' element={<ClassComponent />}></Route>
            <Route path='state' element={<StateInFunctionalComponent/>}></Route>
        </Routes>
        </BrowserRouter>
        </div>
    )
}


    function  Main() {
        return (
            <>
            <h1>:: Home Pages ::</h1>
            {/* <link>Login</link> */}
            <Link to="/login"><button>Login</button></Link>
            </>
        )
    }