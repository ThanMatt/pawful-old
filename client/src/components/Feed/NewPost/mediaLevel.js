import React from 'react';

const mediaLevel = (props) => {
  return (
    <div className="field is-grouped is-grouped-right">
      <div className="control">
        <button type="submit" className={'button is-fullwidth has-text-black has-text-weight-bold is-rounded is-info ' + (props.loading ? 'is-loading' : null)}>Post</button>
      </div>
    </div>

  )
}

export default mediaLevel;