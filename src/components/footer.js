import React from 'react'
import '../index.css';
import * as GrIcons from "react-icons/gr";
import * as FaIcons from "react-icons/fa";

const footer = () => {
    return (
        <section className="bg-gray-900 text-white text-center pt-20 px-20 pb-20 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-20 mx-auto">
<div>
    <h3 className="text-2xl font-bold leading-8">Customer Service</h3>
    <ul>
        <li>About & Contact</li>
        <li>Customer Service</li>
        <li>Terms & Conditions</li>
        <li>Privacy</li>
    </ul>
</div>

<div>
     <h3 className="text-2xl font-bold leading-8">Customer Service</h3>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis beatae at, tenetur adipisci rem ea! Commodi a</p>
    <input className="border-gray-900 border-2 mt-5 px-2 py-2" placeholder="Enter your email"></input>
</div>

<div>
    <h3 className="text-2xl font-bold leading-8 mb-5">Connect</h3>
    <div className="text-2xl inline-block mr-3">
<GrIcons.GrFacebook/>
    </div>
    <div className="text-2xl inline-block mr-3">
<FaIcons.FaTwitterSquare/>
    </div>
    <div className="text-2xl inline-block">
<FaIcons.FaInstagramSquare/>
    </div>



</div>

        </section>
        
    )
}

export default footer
