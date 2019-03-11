import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';

import BlogPost from './BlogPost'
class App extends Component {
  render() {
    const { posts } = this.props



    return (
      <div>
        <h1 className="title">Ned's Blog</h1>
        {
          posts.map((post, index) =>
            <BlogPost key={index} post={post} />
          )
        }
        {/* <BlogPost post={posts[0]} />
        <BlogPost post={posts[1]} />
        <BlogPost post={posts[2]} /> */}
      </div>
    );
  }
}

export default App;