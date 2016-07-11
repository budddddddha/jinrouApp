import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

class Index extends Component {
  static get contextTypes() {
    return {
      router: PropTypes.object.isRequired
    }
  }

  handleOnClick(villageId) {
    console.log("click");
    console.log("villageId=",villageId);
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
    const { auth } = this.props

    return (
      <div id="user_only_index">
        <h2>user_only_index</h2>
        <p>{auth.user.name}</p>
        <ul>
          {this.createVillageLi(auth.gameData.villages)}
        </ul>
      </div>
    )
  }
}

Index.propTypes = {
  auth: PropTypes.object.isRequired
};

function select({ auth }) {
  return { auth };
}

export default connect(select)(Index);
