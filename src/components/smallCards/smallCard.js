import React, { useState } from 'react';
import "./smallCard.css";

function SmallCard({ title, description }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className='cardS' id='cardS' style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '10px' }}>
      <h3 className='cardTitle' id='cardTitle'>{title}</h3>
      <p className='cardDesc' id='cardDesc'>{description}</p>
      <input
        className='cardInp'
        id='cardInp'
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </div>
  );
}


export default SmallCard;
