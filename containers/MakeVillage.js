import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions/index'

import MakeVillageForm from '../components/village/MakeVillageForm'
import MasterOption from '../components/MasterOption'

class MakeVillage extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      friends: this.props.client.gameData.friends || [],
      members: new Set([this.props.client.accountData.id])
    }
  }

  static get contextTypes() {
    return {
      router: PropTypes.object.isRequired
    }
  }

  componentWillMount() {
    this.userWillTransfer(this.props, this.context.router);
  }

  componentWillUpdate(nextProps) {
    this.userWillTransfer(nextProps, this.context.router);
  }

  userWillTransfer(props, router) {
    if (props.village.isMade) {
      router.replace(`/village/${props.village.id}`);
    }
  }

  // renderSubmit() {
    // return this.props.searchUser.isFetching ? <Loading /> : <input type="submit" value="検索" />;
  // }

  handleSubmit(e) {
    e.preventDefault();
    console.log("make village submit");
    // this.props.dispatch(actions.fetchSearchUser());

    const target = e.target;
    const villageId = target.villageId.value.trim();
    console.log("villageId=", villageId);

    this.props.dispatch(actions.makeVillage({
      clientId: this.props.client.accountData.id,
      villageId: villageId,
      members: Array.from(this.state.members)
    }));
  }

  setMembersState(e) {
    const target = e.target;
    const memberId = target.value;

    const hasMember = this.state.members.has(memberId);
    if (hasMember) {
      if (this.state.members.delete(memberId)) {
        this.setState({members: this.state.members})
      }
    } else {
      this.setState({members: this.state.members.add(memberId)})
    }
  }

  render() {
    return (
      <div>
        <h2>MakeVillage</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <ul>
            <li>
              <p>VillageID</p>
              <p><input type="text" name="villageId" required /></p>
              <p>Member Invite</p>
                {this.state.friends && this.state.friends.map((v,i) => {
                  return (
                    <label key={i}>
                      <input
                        type="checkbox"
                        value={v}
                        onClick={this.setMembersState.bind(this)}
                      />
                      {v}
                    </label>
                  )
                })}
              <p><input type="submit" value="村を作成" /></p>
            </li>
          </ul>
        </form>
      </div>
    )
  }
}

MakeVillage.propTypes = {
  client: PropTypes.object.isRequired
};

function select({ client, village }) {
  return { client, village };
}

export default connect(select)(MakeVillage);
