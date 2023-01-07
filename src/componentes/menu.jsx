import React from "react";
import "../css/styles.css";

function Menu(props ){
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-6 text-start">
                        <img src={require(`../images/${props.logoizq}`)} alt="Logo Sochi"/>
                    </div>
                    <div className="col-md-6 col-6 text-end">
                        <img src={require(`../images/${props.logoder}`)} alt="Logo Claro Sports"/>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Menu;