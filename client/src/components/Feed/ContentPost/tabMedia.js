import React from 'react';
import { Link } from 'react-router-dom';

const tabMedia = (props) => {
  return (
    <div className="tabs is-toggle is-toggle-rounded is-fullwidth has-text-centered">
      <ul>
        <li>
          <Link>
            <span className="icon is-small has-text-primary"><i className="fas fa-feather-alt"></i></span>
            <span className="has-text-black has-text-weight-bold">Wag tail</span>
          </Link>
        </li>
        <li>
          <Link>
            <span className="icon is-small has-text-primary"><i className="fas fa-comment"></i></span>
            <span className="has-text-black has-text-weight-bold">Comment</span>
          </Link>
        </li>
      </ul>
    </div>

  )
}

export default tabMedia;