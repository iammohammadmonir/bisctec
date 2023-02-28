import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, content }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleChange = (project) => {
    setShowInfo(!showInfo);
  };

  return (
    <article className='question'>
      <header onClick={handleChange}>
        <h4>{title}</h4>
        <button className='btn'>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{content}</p>}
    </article>
  );
};

export default Question;
