import React from 'react';
import LinkButton from '../../linkButton';

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

              <LinkButton
                className="has-text-black is-info is-fullwidth is-medium"
                label="Register"
                path="/register"
              />

              <LinkButton
                className="is-white is-outlined is-inverted is-fullwidth is-medium"
                label="Log In"
                path="/login"
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroLanding;