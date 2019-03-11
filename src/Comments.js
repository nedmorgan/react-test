import React, {
  Component
} from 'react';
import './App.css';

class Comments extends Component {
  render() {
    const { comments } = this.props
    return (
      <div className="comment-flex">
        <textarea name="" id="" cols="30" rows="10">{comments}</textarea>
      </div>
    );
  }
}

export default Comments;