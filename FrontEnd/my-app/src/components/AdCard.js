import React from "react";
import changeImgUrl from "../service/ImageUrl";


const AdCard = (props) => {
    let imgUrl = props.adData.imageUrl;
    let compUrl = `https://www.${props.adData.company[0].url}`
   

    return (

        <>
            <div className="card text-center" style={{ "width": "25rem" }}>
                <p className="card-text fw-5 fs-5" style={{ "color": "blue" }}>{props.adData.primaryText}</p>
                <img src={changeImgUrl(imgUrl)} className="card-img-top" alt="" style={{ "width": "100%", "height": "25rem" }} />
                <div className="card-body">
                    <h5 className="card-title">{props.adData.headline}</h5>
                    <p className="card-text">{props.adData.description}</p>
                    <p className="card-title" style={{ "color": "white", "background": "blue" }}>{props.adData.company[0].name}</p>
                    <a href={compUrl} className="btn btn-primary">{props.adData.CTA}</a>
                </div>
            </div>

        </>
    )
}


export default AdCard;