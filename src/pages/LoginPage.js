import React from 'react';

const LoginPage = () => {
  return (
    <>
      <label htmlFor="">Login:<input type="text"></input></label>
      <label htmlFor="">Hasło:<input type="password"></input></label>
      <button>Zaloguj</button>
    </>
  );
}

export default LoginPage;