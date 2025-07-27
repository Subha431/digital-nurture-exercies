import React from "react";

class Post extends React.Component {
  render() {

    const title = this.props.title;
    const body = this.props.body;

    return (
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    );
  }
}

export default Post;
