import React from 'react';
import { useNavigate } from 'react-router-dom';

const SinglePage = () => {
  const navigation = useNavigate();
  return (
    <div>
      <h2>Another Single page</h2>
      <button type="button" onClick={() => navigation(-1)}>Go back</button>
    </div>
  );
};
export default SinglePage;
