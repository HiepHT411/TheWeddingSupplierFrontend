import React, { Component } from "react";

class dashboard extends Component {
  handleLogout() {
    localStorage.clear();
    window.location.href = "/";
  }

  render() {
    return (
      <div class="main">
        <h1>WELCOME TO DASHBOARD</h1>
        <btn class="btn btn-danger" onClick ={this.handleLogout}>Logout</btn>
        {/* <a
          href="javascript:void(0);"
          onClick={this.handleLogout}
          className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
          <i className="ti-power-off mR-10"></i>
          <span style={{ color: "white" }}>Logout</span>
        </a> */}
      </div>
    );
  }
}
export default dashboard;