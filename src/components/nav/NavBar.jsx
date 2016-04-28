var React = require("react");
var NavItem = require("./NavItem.jsx");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

var NavBar = React.createClass({
  render: function() {
    var navStyle = {
      WebkitBoxShadow: "0 0 4px rgba(0, 0, 0, 0.4)",
      MozBoxShadow: "0 0 0 4px rgba(0, 0, 0, 0.4)",
      boxShadow: "0 0 0 4px rgba(0, 0, 0, 0.4)",
      textShadow: "0 -1px 0 rgba(0,0,0,.15)",
      borderRadius: 0,
    };

    var titleStyle = {};
    var linkStyle = {};

    // Optional Props
    if (this.props.bgColor) {
      navStyle.background = this.props.bgColor;
    };

    if (this.props.titleColor) {
      titleStyle.color = this.props.titleColor;
    };

    if (this.props.linkColor) {
      linkStyle.color = this.props.linkColor;
    };

    var createLinkItem = function(item, index) {
      return (
        <NavItem key = {item.title + index} href = {item.href} title = {item.title} linkStyle = {linkStyle} />
      );
    }

    return (
      <div>
        <nav style = {navStyle} className = "navbar navbar-default">
          <div className = "navbar-header">

            {/*Navbar collapsable button*/}
            <button type = "button" className = "navbar-toggle collapsed" data-toggle = "collapse" data-target = "#nav-collapse" aria-expanded = "false">
              <span className = "sr-only">Toggle Navigation</span>
              <span className = "icon-bar"></span>
              <span className = "icon-bar"></span>
              <span className = "icon-bar"></span>
            </button>

            {/*Branding image*/}
            <Link style = {titleStyle} className = "navbar-brand" to = "/"> {this.props.brandName} </Link>
          </div>

          {/*Collapsed Items*/}
          <div className = "collapse navbar-collapse" id = "nav-collapse">
            <ul className = "nav navbar-nav">
              {this.props.navData.map(createLinkItem)};
            </ul>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = NavBar;
