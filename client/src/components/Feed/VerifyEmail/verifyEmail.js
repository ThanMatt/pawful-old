import React from 'react';
import Button from '../../UI/button'
const verifyEmail = (props) => {
  return (
    <div className="notification is-info" id="verify-alert">
      <p className="label has-text-black has-text-centered is-size-6">
        Don't forget to verify your email!
      </p>
      <Button
        className="is-light is-fullwidth has-text-black"
        label="Send Email Verification"
      />

    </div>
  )
}

export default verifyEmail