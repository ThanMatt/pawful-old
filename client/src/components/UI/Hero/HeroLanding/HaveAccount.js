import React from 'react';
import {Link} from 'react-router-dom';
const HaveAccount = () => {
  return (

    <div id="have-account">
      <div className="field has-text-centered">
        <label className="has-text-black">Have an account?</label>
        <div className="control">
          <Link to="/login" className="button is-white is-inverted is-outlined is-rounded is-fullwidth is-medium">Log In</Link>
        </div>
      </div>
    </div>
  );
}

export default HaveAccount;