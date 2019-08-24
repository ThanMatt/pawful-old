import React from 'react';
import Textarea from 'react-textarea-autosize';

const commentBox = (props) => {
  const textareaStyle = {
    borderRadius: '25px',
    resize: 'none'
  }
  return (
    <div className="media">
      <div className="media-left">
        <figure className="image is-50x50">
          <img src={'/uploads/' + props.icon} alt="it u" className="img" />
        </figure>
      </div>
      <div className="media-content">
        <Textarea
          cols="30"
          rows="1"
          className="textarea"
          placeholder='Write a comment'
          name="content"
          style={textareaStyle}
        />

      </div>
    </div>
  )
}

export default commentBox;
