import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCard } from "../../Store/cardsReducer"; // Ensure to import actions from your reducer
import "./Cardlist.css";
import "./Card.css";
import male from "./male.png";
import female from "./female.png";
//new comment
function Userpublic() {
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.cards.cards);
    const email = localStorage.getItem('email');
    const userCard = cards.find(c => c.email === email); 
    const [filteredCards, setFilteredCards] = useState([userCard]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentCard, setCurrentCard] = useState(null);
  
    useEffect(() => {
      if (userCard) {
        setFilteredCards([userCard]); 
      }
    }, [userCard, cards]); 
  
    const handleEditClick = (card) => {
      setCurrentCard(card);
      setIsEditing(true);
    };
  
    const handleSave = (updatedCard) => {
      dispatch(updateCard(updatedCard));
      setIsEditing(false);
    };
  
    const handleCloseEdit = () => {
      setIsEditing(false);
    };
  
    useEffect(() => {
      if (!isEditing) {
        setCurrentCard(null);
      }
    }, [isEditing]);
  
    return (
      <div className="cardlist-container">
        <div className="cardlist">
          {filteredCards.map((card) => (
            <Card key={card.id} card={card} onEdit={handleEditClick} />
          ))}
        </div>
  
        {isEditing && currentCard && (
          <EditCard card={currentCard} onSave={handleSave} onClose={handleCloseEdit} />
        )}
      </div>
    );
  }

function Card({ card, onEdit }) {
  let currentimg;
  if (card.gender === "male") {
    currentimg = male;
  } else {
    currentimg = female;
  }

  const handleEditClick = () => {
    onEdit(card);
  };
  

  return (
    <div className="card">
      <div className="innercard">
        <div className="color">
          <center className="cardname"><h2>Name: <span className="text-uppercase">{card.name}</span></h2></center>
        </div>
        <div className="carddetails">
          <p><span className="card_span">Email :</span> {card.email}</p>
          <p><span className="card_span">Gender :</span> {card.gender}</p>
          <p><span className="card_span">Phone :</span> {card.mobile}</p>
          <p><span className="card_span">Location :</span> {card.location}</p>
          <p><span className="card_span">Account No :</span> {card.bankno}</p>
          <p><span className="card_span">Password :</span> {card.password}</p>
          <p><span className="card_span">Access Level :</span> {card.access}</p>
        </div>
        <span><img className="cardimg" src={currentimg} alt="userimg" /></span>
        <button className='button-28' onClick={handleEditClick}>Edit</button>
      </div>
    </div>
  );
}
const divStyle = {
    display:'none',
  };
function EditCard({ card, onSave, onClose }) {
  const [email, setEmail] = useState(card.email);
  const [name, setName] = useState(card.name);
  const [gender, setGender] = useState(card.gender);
  const [mobile, setMobile] = useState(card.mobile);
  const [location, setLocation] = useState(card.location);
  const [bankno, setBankno] = useState(card.bankno);
  const [password, setPassword] = useState(card.password);
  const [access, setAccess] = useState(card.access);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCard = {
      ...card,
      email,
      name,
      gender,
      mobile,
      location,
      bankno,
      password,
      access,
    };
    onSave(updatedCard);
  };

  useEffect(() => {
    if (!card) {
      setEmail('');
      setName('');
      setGender('');
      setMobile('');
      setLocation('');
      setBankno('');
      setPassword('');
      setAccess('');
    } else {
      setEmail(card.email);
      setName(card.name);
      setGender(card.gender);
      setMobile(card.mobile);
      setLocation(card.location);
      setBankno(card.bankno);
      setPassword(card.password);
      setAccess(card.access);
    }
  }, [card]);

  return (
    <div className="edit-card">
      <h2>Edit Card</h2>
      <form onSubmit={handleSubmit} className="edit-form">
        <div className="edit-label">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="edit-label">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="edit-label">
          <label htmlFor="gender">Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} required id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="edit-label">
          <label htmlFor="mobile">Mobile:</label>
          <input type="text" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
        </div>
        <div className="edit-label">
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </div>
        <div className="edit-label">
          <label htmlFor="bankno">Bank No:</label>
          <input type="text" id="bankno" value={bankno} onChange={(e) => setBankno(e.target.value)} required />
        </div>
        <div className="edit-label">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>


        <div className="edit-label" style={divStyle}>
          <label htmlFor="access">Access Level:</label>
          <select id="access" value={access} onChange={(e) => setAccess(e.target.value)} required>
            <option value="admin">Admin</option>
            <option value="public">Public</option>
          </select>
        </div>


        <div className="edit-buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default Userpublic;
