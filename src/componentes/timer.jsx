import React from "react";
import "../css/styles.css";
import "../js/main.js";

function Timer(props){
    return (
        <section className="content-video">
            <div className="container">
                <div className='row'>
                    <div className='col-12'>
                    <h2 className="mb-4">FALTAN</h2>
                    <p id="newtime"></p>
                    </div>
                </div>

                <div className='row justify-content-center'>
                    <div className='col-12' id="video-gallery">
                        <iframe title="YouTube Player" src={props.video + "?autoplay=1"} allow="autoplay; gyroscope;" id="videoPlayer"></iframe>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Timer;