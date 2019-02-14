import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card">
        <img className="img-thumbnail img-responsive" alt={props.name} src={props.image} 
        onClick={() => props.clickPicture(props.id)}/>
    </div>
  );

  export default Card;