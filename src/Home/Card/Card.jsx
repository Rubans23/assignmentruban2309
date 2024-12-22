import React from 'react';
import male from "./male.png";
import female from "./female.png";
function Card({ card, onEdit }) {
  let currentImg;
  if (card.gender === "male") {
    currentImg = male;
  } else {
    currentImg = female;
  }
 //new card
  const handleEditClick = () => {
    onEdit(card);
  };

  return (
    <div className="card">
      <div className="innercard">
        <div className="color">
          <center className="cardname">
            <h2>Name: <span className="text-uppercase">{card.name}</span></h2>
          </center>
        </div>
        <div className="carddetails">
          <p><span className="card_span">Email :</span> {card.email}</p>
          <p><span className="card_span">Gender :</span> {card.gender}</p>
          <p><span className="card_span">Phone :</span> {card.mobile}</p>
          <p><span className="card_span">Location :</span> {card.location}</p>
          <p><span className="card_span">Account No :</span> {card.bankno}</p>
          <p><span className="card_span">Password :</span> {card.password}</p>
        </div>
        <span><img className="cardimg" src={currentImg} alt="userimg" /></span>
        <button onClick={handleEditClick}>Edit</button>
      </div>
    </div>
  );
}

export default Card;