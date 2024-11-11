import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    console.log("Auth state:", this.props.auth); // Add this inside renderContent
    switch (this.props.auth) {
      case null:
        return (
          <li>
            <a href="/auth/google"> Login With Google </a>
          </li>
        );
      case false:
        return (
          <li>
            <a href="/auth/google"> Login With Google </a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout"> Log out </a>
          </li>
        );
    }
  }

  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            SurveyApp
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth ? state.auth.auth : null };
}

export default connect(mapStateToProps)(Header);
