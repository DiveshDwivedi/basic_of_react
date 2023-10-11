import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";

export const ApiText = () => {

const [catfact, setCatFact] = useState('');

const fetchCatFact = () => {
    Axios.get('https://catfact.ninja/fact').then((res) => {
        setCatFact(res.data.fact);
    })
};

useEffect(() => {
    fetchCatFact();
}, []);

    return (
        <div>
            <button onClick={fetchCatFact}>change data</button>
            <p>{catfact}</p>
        </div>
    )
}