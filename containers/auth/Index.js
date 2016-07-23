import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import actions from '../../actions/index'

import VillageList from '../../components/village/VillageList'

class Index extends Component {
  static get contextTypes() {
    return {
      router: PropTypes.object.isRequired
    }
  }

  componentWillMount() {
    this.villageWillTransfer(this.props, this.context.router);
  }

  componentWillUpdate(nextProps) {
    this.villageWillTransfer(nextProps, this.context.router);
  }

  villageWillTransfer(props, router) {
    if (props.village.isEnter) {
      router.replace(`/village/${props.village.id}`);
    }
  }

  enterVillage(villageId) {
    this.props.dispatch(actions.fetchVillage({
      id: villageId
    }))
  }

  render() {
    const { auth, village } = this.props

    return (
      <div id="user_only_index">
        <h2>user_only_index</h2>
        <p>{auth.user.name}</p>
        <VillageList
          villages={auth.gameData.villages}
          onClick={this.enterVillage.bind(this)}
        />
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
