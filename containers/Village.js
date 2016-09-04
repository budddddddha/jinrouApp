import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions/index'

import MemberList from '../components/village/MemberList'

import io from 'socket.io-client';

class Village extends Component {
  constructor(props, context) {
    super(props, context)
    console.log("const");
    const village = io('/socket/village');
    village.emit('client_to_server_join', { villageId: this.props.params.villageId });
    village.emit("client_to_server_broadcast", {value : "入った"});
    village.on('server_to_client', function(data) {
      console.log("data.value=", data.value);
    })

  }

  componentDidMount() {
    console.log("componentDidMount");
    console.log("this.props=",this.props);
    this.props.dispatch(actions.fetchVillage({
      villageId: this.props.params.villageId,
      authId: this.props.auth.user.id
    }))
  }

  render() {
    console.log("render Village");
    const villageId = this.props.params.villageId
    const { village } = this.props;
    return (
      <div>
        <h2>Village</h2>
        <p>部屋情報</p>
        <p>villageId: {villageId}</p>
        <p>viID: {village.id}</p>
        <MemberList
          members={village.members}
        />
      </div>
    )
  }
}

Village.propTypes = {
  dispatch: PropTypes.func.isRequired
  // auth: PropTypes.object.isRequired
};

function select({ auth, village }) {
  return { auth, village };
}

export default connect(select)(Village);

// function mapStateToProps(state) {
//   return {
//   }
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//   }
// }
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Village)
