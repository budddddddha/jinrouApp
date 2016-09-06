import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../../actions/client';
import Loading from '../../components/Loading';

class Login extends Component {
  handleSubmit(e) {
    const target = e.target;

    e.preventDefault();

    this.props.dispatch(fetchUser({
      name: target.name.value.trim(),
      pass: target.password.value.trim()
    }));
  }

  renderSubmit() {
    return this.props.client.isFetching ? <Loading /> : <input type="submit" value="Send" />;
  }

  render() {
    const { client } = this.props;

    return (
      <div>
        <h1>Log in</h1>

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

          {client.error &&
            <p>{client.error}</p>
          }

          {this.renderSubmit()}
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  client: PropTypes.object.isRequired
};

function select({ client }) {
  return { client };
}

export default connect(select)(Login);
