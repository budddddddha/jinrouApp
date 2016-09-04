import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import actions from '../../actions/index'
import Loading from '../../components/layouts/Loading';

class Login extends Component {
  handleSubmit(e) {
    const target = e.target;
    e.preventDefault();
    this.props.dispatch(actions.fetchUser({
      id: target.id.value.trim(),
      pass: target.password.value.trim()
    }));
  }

  renderSubmit() {
    return this.props.auth.isFetching ? <Loading /> : <input type="submit" value="ログイン" />;
  }

  render() {
    const { auth } = this.props;

    return (
      <div>
        <h1>ログイン</h1>

        <form onSubmit={this.handleSubmit.bind(this)}>
          <ul>
            <li>
              <p>ID</p>
              <p><input type="text" name="id" required /></p>
            </li>
            <li>
              <p>Password</p>
              <p><input type="password" name="password" required /></p>
            </li>
          </ul>

          {auth.error &&
            <p>{auth.error}</p>
          }

          {this.renderSubmit()}
        </form>
        <Link to={'/signup'}>サインアップ</Link>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

function select({ auth }) {
  return { auth };
}

export default connect(select)(Login);
