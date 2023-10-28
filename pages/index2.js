import React, { useState } from 'react';
import { Router, Route, Link } from "react-router-dom";
import Home from "./index";


function navigateHome() {
<Router>
    <Route>
        <Route path ="./index.js" element ={<Comments/>}/>
    </Route>
</Router>
}

function pageFetch (){
    //Was auch immer ausgegeben wird kp von js syntax wird gleich gegoogelt
    return(
        <div>
            <p>

            </p>
            <button onClick={navigateHome}>Home</button>
        </div>
    );

}
export default pageFetch;