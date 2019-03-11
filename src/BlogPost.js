import React, {
  Component
} from 'react'

class BlogPost extends Component {
  render() {
    // const blogTitle = this.props.blogTitle
    const { post } = this.props
    return (
      <div className="container">
        <h2 className="blog-title">{post.title}</h2>
        <h4 className="author-title">Author: {post.author}</h4>
        <div className="post-flex">
          <p>{post.body}</p>
        </div>
        <h3>Comments:</h3>
        <div className="comment-flex">
          {post.comments}
        </div>
      </div>
    )
  }
}

export default BlogPost