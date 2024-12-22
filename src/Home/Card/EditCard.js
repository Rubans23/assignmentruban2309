import React, { useState } from 'react';

function EditCard({ card, onSave, onClose }) {
  const [email, setEmail] = useState(card.email);
  const [name, setName] = useState(card.name);
  const [gender, setGender] = useState(card.gender);
  const [mobile, setMobile] = useState(card.mobile);
  const [location, setLocation] = useState(card.location);
  const [bankno, setBankno] = useState(card.bankno);
  const [password, setPassword] = useState(card.password);
  //newCard
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCard = { ...card, email, name, gender, mobile, location, bankno, password, };
    onSave(updatedCard);
  };

  return (
    <div className="edit-card">
      <h2>Edit Card</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label>
          Mobile:
          <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
        </label>
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </label>
        <label>
          Bank No:
          <input type="text" value={bankno} onChange={(e) => setBankno(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default EditCard;