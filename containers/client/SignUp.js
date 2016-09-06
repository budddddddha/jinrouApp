import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import actions from '../../actions/index'
import Loading from '../../components/layouts/Loading';

class SignUp extends Component {
  handleSubmit(e) {
    const target = e.target;

    e.preventDefault();

    const pass = target.password.value.trim()
    const pass_confirm = target.password_confirm.value.trim()

    if (pass === pass_confirm) {
      this.props.dispatch(actions.signup({
        id: target.id.value.trim(),
        pass: pass,
        name: target.name.value.trim(),
        mail: target.mail.value.trim()
      }));
    } else {
      this.props.dispatch(actions.passwordError('パスワードが一致しません'));
    }
  }

  renderSubmit() {
    return this.props.client.isFetching ? <Loading /> : <input type="submit" value="Send" />;
  }

  render() {
    const { client } = this.props;

    return (
      <div>
        <h1>SignUp</h1>

        <form onSubmit={this.handleSubmit.bind(this)}>
          <ul>
            <li>
              <p>ID</p>
              <p><input type="text" name="id" required /></p>
            </li>
            <li>
              <p>Name</p>
              <p><input type="text" name="name" required /></p>
            </li>
            <li>
              <p>E-mail</p>
              <p><input type="text" name="mail" required /></p>
            </li>
            <li>
              <p>Password</p>
              <p><input type="password" name="password" required /></p>
              <p><input type="password" name="password_confirm" required /></p>
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

SignUp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  client: PropTypes.object.isRequired
};

function select({ client }) {
  return { client };
}

export default connect(select)(SignUp);
