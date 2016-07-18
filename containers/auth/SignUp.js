import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// import { fetchUser } from '../../actions/auth';
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
    }
  }

  renderSubmit() {
    return this.props.auth.isFetching ? <Loading /> : <input type="submit" value="Send" />;
  }

  render() {
    const { auth } = this.props;

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

          {auth.error &&
            <p>{auth.error}</p>
          }

          {this.renderSubmit()}
        </form>
      </div>
    );
  }
}

SignUp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

function select({ auth }) {
  return { auth };
}

export default connect(select)(SignUp);
