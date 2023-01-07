import React from 'react';
import "../css/styles.css";

function Video(props ){

    const changeVideo = (name,demo) => (event) =>{
        document.getElementById('videoPlayer').src = name+'?autoplay=1';
        let allimg = document.getElementsByClassName('dem-imagen');
        for (let i = 0; i < allimg.length; i++) {
            allimg[i].classList.remove("d-none");
        }
        let allred = document.getElementsByClassName('circlered');
        for (let j = 0; j < allred.length; j++) {
            allred[j].classList.add("d-none");
        }
        let imagen = document.getElementById("img-"+demo);
        imagen.classList.add("d-none");
        let element = document.getElementById(demo);
        element.classList.remove("d-none");
        element.classList.add("d-block");
    }

    let visible,visible2 = "";
    if (props.active) {
        visible = 'd-none';
        visible2 = 'd-block';
    }
    else{
        visible = 'd-block';
        visible2 = 'd-none';
    }

    return (
        <div className="col-md-3 col-sm-6">
            <div className='vidlink' onClick={changeVideo(`${props.linkvideo}`,'cir'+props.id)}>
                <img src={require(`../images/${props.thumb}`)} alt="thumbs" id={"img-cir"+props.id} className={"dem-imagen " + visible}/>
                <div id={"cir"+props.id} className={"circlered " + visible2}>
                    <p>{props.descripcion}</p>
                </div>
                <p className='thumbs-video'>{props.titulo}</p>
            </div>
        </div>
    );
}

export default Video;