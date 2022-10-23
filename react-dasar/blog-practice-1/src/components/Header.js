import React from "react";
import { connect } from "react-redux";
import { fetchPostAndUsers } from "../actions";

class Header extends React.Component {
  componentDidMount() {
    this.props.fetchPostAndUsers();
  }
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }
    return <div>{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.find((user) => user.id === ownProps.userId),
  };
};

export default connect(mapStateToProps, { fetchPostAndUsers })(Header);
