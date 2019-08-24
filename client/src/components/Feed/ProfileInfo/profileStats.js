import React from 'react';

const profileStats = (props) => {
  return (
    <div className="level">

      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Sniffers</p>
          <p className="title has-text-black is-size-4">69</p>
        </div>
      </div>

      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Pals</p>
          <p className="title has-text-black is-size-4">20</p>
        </div>
      </div>

      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Sniffed</p>
          <p className="title has-text-black is-size-4">20</p>
        </div>
      </div>

    </div>

  )
}

export default profileStats