import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

const Navigation = () => {
    return (
        <div><Routes>
            <Route exact path={'/'} element={<Home />} />
        </Routes></div>
    )
}

export default Navigation