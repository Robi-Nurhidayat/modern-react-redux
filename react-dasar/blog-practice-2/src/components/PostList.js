import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import Header from "./Header";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <div key={post.id}>
          <div>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </div>
          <div>
            <Header userId={post.userId} />
          </div>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderPosts()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
