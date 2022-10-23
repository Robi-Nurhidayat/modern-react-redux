import React from "react";
import { fetchPost } from "../actions/index";
import { connect } from "react-redux";
import Header from "./Header";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  renderItems() {
    return this.props.posts.map((post) => {
      return (
        <div key={post.id}>
          <div>
            <h4>{post.title}</h4>
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
    return <div>{this.renderItems()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPost })(PostList);
