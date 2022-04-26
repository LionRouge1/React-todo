import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Hello this is the about page</h1>
      <button type="button" onClick={() => navigate('/singlepage')}>Order</button>
    </div>
  );
};
export default About;
