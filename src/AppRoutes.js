import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { BackgroundColorChanger } from './Pages/BackgroundColorChanger'
import { Calculator } from './Pages/Calculator'
import { Index } from './Pages/Index'

export const AppRoutes = () =>{
    return (
    <div>
        <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/bgcolor'>
                <Route path=':name' element={<BackgroundColorChanger/>}/>
            </Route> 
        </Routes>
    </div>
    )
}
