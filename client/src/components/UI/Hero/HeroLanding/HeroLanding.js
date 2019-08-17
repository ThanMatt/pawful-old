import React from 'react';
import { Link } from 'react-router-dom';

const HeroLanding = () => {
  const titleStyle = {
    marginBottom: '13%',
    marginTop: '20%',
  }
  return (
    <div className="columns">

      <div className="column is-7">
        <div className="hero is-primary is-fullheight">
          <div className="hero-body">
            <p className="title has-text-white has-text-weight-bold is-1 has-text-centered">Claw drapes unwrap toilet paper.</p>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="hero is-medium">
          <div className="hero-body">
            <div className="landing container is-fluid">
              <p className="title has-text-black is-1 has-text-centered" id="title-card" style={titleStyle}>Pawful</p>

              <div className="field">
                <div className="control">
                  <Link to="/register" className="button is-medium is-info is-rounded has-text-weight-bold has-text-black is-fullwidth">
                    Register
                  </Link>
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <Link to="/login" className="button is-white is-inverted is-outlined is-rounded is-fullwidth is-medium">Log In</Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroLanding;