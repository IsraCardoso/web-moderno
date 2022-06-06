import React from "react";
import '././Button.css';

export default function Button({label}){
  return(
    <button className="button">{label}</button>
  )
}