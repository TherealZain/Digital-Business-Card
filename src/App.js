import React from 'react'
import Info from "./Components/info.js"
import About from "./Components/About.js"
import Interests from "./Components/Interests.js"
import Footer from "./Components/Footer.js"


export default function App() {
    return (
        <div className = "wholeApp">
        <Info/>
        <About/>
        <Interests/>
        <Footer/>
        </div>
    )
    
    
    
}