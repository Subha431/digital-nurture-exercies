import React from "react";
import Post from "./Post";

class Posts extends React.Component{
    constructor(props){
        super(props);
        this.state={
            posts:[],
            hasError: false
        };
    }

    loadPosts = () => {
      const myurl = "https://jsonplaceholder.typicode.com/posts";

      fetch(myurl)
        .then((response) => response.json())
        .then((postList) => {
        this.setState({ posts: postList });
        })
      .catch((error) => {
        console.log('Having Error while loading the Posts:', error);
        this.setState({ hasError: true });
      });
    };

    componentDidMount(){
       this.loadPosts();
    }

    render(){ 
      if (this.state.hasError) {
        return <p style={{ color: 'red' }}>Could not display posts.</p>;
      }
      return (
       <div>
        <h2>Posts from API</h2>
        {this.state.posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
       </div>
      );
    }

    componentDidCatch(error, info) {
     alert("Something Went wrong during displaying the posts");
     console.log("Error in componentDidCatch:", error, info);
     this.setState({ hasError: true });
    }
}

export default Posts;