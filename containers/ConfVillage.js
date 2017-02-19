import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions/index'

import MakeVillageForm from '../components/village/MakeVillageForm'
import MasterOption from '../components/MasterOption'

class ConfVillage extends Component {
  // constructor(props, context) {
  //   super(props, context)
  //   this.state = {
  //     friends: this.props.client.gameData.friends || [],
  //     members: new Set([this.props.client.accountData.id])
  //   }
  // }

  // renderSubmit() {
    // return this.props.searchUser.isFetching ? <Loading /> : <input type="submit" value="検索" />;
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   console.log("make village submit");
  //   // this.props.dispatch(actions.fetchSearchUser());
  //
  //   const target = e.target;
  //   const villageId = target.villageId.value.trim();
  //   const master = target.master.value;
  //   console.log("villageId=", villageId);
  //   console.log("master=", master);
  //
  //   // this.props.dispatch(actions.searchUser({
  //     // id: target.id.value.trim()
  //   // }));
  // }

  // setMembersState(e) {
  //   const target = e.target;
  //   const memberId = target.value;
  //
  //   const hasMember = this.state.members.has(memberId);
  //   if (hasMember) {
  //     if (this.state.members.delete(memberId)) {
  //       this.setState({members: this.state.members})
  //     }
  //   } else {
  //     this.setState({members: this.state.members.add(memberId)})
  //   }
  // }
  // <form onSubmit={this.handleSubmit.bind(this)}>
  //   <ul>
  //     <li>
  //       <p>VillageID</p>
  //       <p><input type="text" name="villageId" required /></p>
  //       <p>Member Invite</p>
  //           {this.state.friends && this.state.friends.map((v,i) => {
  //             return (
  //               <label key={i}>
  //                 <input
  //                   type="checkbox"
  //                   value={v}
  //                   onClick={this.setMembersState.bind(this)}
  //                 />
  //                 {v}
  //               </label>
  //             )
  //           })}
  //       <p>Master Select</p>
  //       <p>
  //         <select name="master">
  //             {this.state.members && Array.from(this.state.members).map((v,i) => {
  //               return (
  //                 <MasterOption
  //                   value={v}
  //                   key={i}
  //                 />
  //               )
  //             })}
  //         </select>
  //       </p>
  //       <p><input type="submit" value="村を作成" /></p>
  //     </li>
  //   </ul>
  // </form>

  render() {
    return (
      <div>
        <h2>ConfVillage</h2>
      </div>
    )
  }
}

ConfVillage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  village: PropTypes.object.isRequired
};

function select({ village }) {
  return { village };
}

export default connect(select)(ConfVillage);
