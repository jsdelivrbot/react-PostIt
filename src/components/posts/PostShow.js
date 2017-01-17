import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadPost, deletePost } from '../../actions/index';
import { Link } from 'react-router';

class PostShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };


  componentWillMount() {
    this.props.loadPost(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(() => { this.context.router.push('/'); });
  }

  render() {

    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>
    }
    return  <div>
      <Link to="/"> Back To Index </Link>
      <button className="btn btn-danger pull-xs-right"
        onClick={this.onDeleteClick.bind(this)}>
        Delete
      </button>
      <h3>{post.title}</h3>
      <h5>{post.categories}</h5>
      <p>{post.content}</p>
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.posts.post
  };
}

export default connect(mapStateToProps, { loadPost, deletePost })(PostShow);
