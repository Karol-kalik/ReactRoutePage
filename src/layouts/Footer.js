import React from 'react';
import { Route } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
      <h1>Footer</h1>
      <Route path="/" exact render={() => (<p style={{fontSize:"15px"}}>Jesteś na stronie głównej</p>)} />
      <Route path="/:page" exact render={(props) => (<p style={{fontSize:"15px"}}>Jesteś na stronie {props.match.params.page}</p>)} />
    </div>
   );
}

export default Footer;