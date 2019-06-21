// import packages
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// import actions

class {YOUR_CONTAINER_NAME} extends Component {
  render() {
    return (
      <div>
        <h4>Container (container.js)</h4>
      </div>
    );
  }
}

// functions mapStateToProps & mapDispatchToProps
function mapStateToProps(state) {
  return {
    {YOUR_NEW_PROPS}: state.{YOUR_STATE_VALUE}
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ {YOU_ACTION_1, {YOU_ACTION_2} }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)({YOUR_CONTAINER_NAME});
