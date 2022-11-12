import React from "react";
// import {alerts} from "./Bienvenido.jsx"

export default class Botones extends React.Component{
    render(){
        return (
        <div>
            {/* <button onClick={() => alert(alerts.m1)}>Modulo 1</button>
            <button onClick={() => alert(alerts.m2)}>Modulo 2</button> */}
            <button onClick={() => alert(this.props.alerts.m1)}>Modulo 1</button>
            <button onClick={() => alert(this.props.alerts.m2)}>Modulo 1</button>
        </div>
    )}
}