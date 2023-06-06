import React from "react";

const rout = [
    {key:'home', path:"/", element:React.lazy(()=>import('./Components/Home'))},
    {key:'about', path:"/about", element:React.lazy(()=>import('./Components/About'))},
    {key:'contact', path:"/contact", element:React.lazy(()=>import('./Components/Contact'))},
]

export default rout