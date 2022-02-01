import React from 'react';
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/test1">Test1</Link>
      <Link to="/test2">Test2</Link>
      <Link to="/test2/test2-1">Test2-1</Link>
      <Link to="/test2/test2-2">Test2-2</Link>
    </div>
  );
};

export default Header;
