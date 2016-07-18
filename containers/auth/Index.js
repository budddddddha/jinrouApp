import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import actions from '../../actions/index'

class Index extends Component {
  static get contextTypes() {
    return {
      router: PropTypes.object.isRequired
    }
  }

  componentWillMount() {
    this.guestWillTransfer(this.props, this.context.router);
  }

  componentWillUpdate(nextProps) {
    this.guestWillTransfer(nextProps, this.context.router);
  }

  guestWillTransfer(props, router) {
    if (props.village.isEnter) {
      router.replace(`/village/${props.village.id}`);
    }
  }

  handleOnClick(villageId) {
    this.props.dispatch(actions.fetchVillage({
      id: villageId
    }))

  }

  createVillageLi(villages) {
    return (
      villages.map((v,i) => {
        // return <li key={i}><Link to={`/village/${v}`}>{v}</Link></li>
        return <li><button key={i} onClick={() => this.handleOnClick(v)}>{v}</button></li>
      })
    )
  }

  render() {
    const { auth, village } = this.props

    return (
      <div id="user_only_index">
        <h2>user_only_index</h2>
        <p>{auth.user.name}</p>
        <ul>
          {auth.gameData.villages && this.createVillageLi(auth.gameData.villages)}
        </ul>
      </div>
    )
  }
}

Index.propTypes = {
  auth: PropTypes.object.isRequired,
  village: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

function select({ auth, village }) {
  return { auth, village };
}

export default connect(select)(Index);
