import React from 'react';
import { Link } from 'react-router-dom';

const lowerLevel = (props) => {
  return (
    <div className="field">
      <div className="control">

        <div className="level is-mobile">

          <div className="level-left">
            <div className="level-item">
              <label className="checkbox has-text-black">
                <input type="checkbox" />
                Remember Me
              </label>
            </div>
          </div>

          <div className="level-right">
            <div className="level-item">
              <div className="buttons is-right">
                <Link className="button is-text is-right is-size-7">Forgot password?</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default lowerLevel