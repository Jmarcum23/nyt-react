import React from "react";
//Export the button for the form
export const Button = props => 
    <button className="btn btn-success text-center"> 
        {props.children}
    </button>;