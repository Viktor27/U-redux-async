import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount = () => {
    // console.log(this.props);
    this.props.fetchPosts();
  };

  render() {
    console.log(this.props.posts);
    return <div>Post Listttttt</div>;
  }
}
const mapStateToProps = state => {
  return { posts: state.posts };
};
export default connect(
  mapStateToProps,
  { fetchPosts: fetchPosts }
)(PostList);
