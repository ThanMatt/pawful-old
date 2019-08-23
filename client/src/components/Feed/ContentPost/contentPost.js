import React from 'react';

const contentPost = (props) => {
  const styles = {
    marginTop: '2%'
  }
  return (
    <div className="card" style={styles}>
      <div className="card-content">
        <div className="media">

          <figure className="media-left">
            <p className="image is-64x64">
              <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="it u" />
            </p>
          </figure>

          <div className="media-content">
            <div className="content">
              <p>
                <strong>{props.username}</strong>
                <br />
                {props.content}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default contentPost;