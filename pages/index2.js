import React, { useState } from 'react';
import { Router, Route, Link, useHistory } from "react-router-dom";

const toMainpage = () => {
    return (
        <div>
            <button>
                <Link to="/index.js">Back to the Homepage</Link>
            </button>
        </div>
    );
};
export default toMainpage();