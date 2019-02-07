import React from "react"
import ReactDOM from "react-dom"
import Navbar from './nav'

if (typeof window !== 'undefined') {
ReactDOM.render( <Navbar />, document.getElementById("root"))
}