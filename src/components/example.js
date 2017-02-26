import React, { PropTypes, Component } from 'react'

export default class example extends Component {
  render() {
    const posts = this.props.posts ? this.props.posts : [];
   // console.log(posts)
  // alert(4);
    return (
      <ul>
        {posts.map((post, i) =>
          <li key={i}>{post.title}</li>
        )}
      </ul>
    )
  }
}

example.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired)
}
