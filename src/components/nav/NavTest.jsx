var React = require("react");
var NavItem = require("./NavItem.jsx");

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
        <NavItem linkStyle = {linkStyle} key = {item.title + index} href = {item.href} title = {item.title} />
      );
    };

    return (
      <nav className ="navbar navbar-default" role="navigation">
  <div className ="navbar-header">
    <button type="button" className ="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
      <span className ="sr-only">Toggle navigation</span>
      <span className ="icon-bar"></span>
      <span className ="icon-bar"></span>
      <span className ="icon-bar"></span>
    </button>
    <a className ="navbar-brand" href="#">Brand</a>
  </div>

  <div className ="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul className ="nav navbar-nav">
      <li className ="active"><a href="#">Link</a></li>
      <li><a href="#">Link</a></li>
      <li className ="dropdown">
        <a href="#" className ="dropdown-toggle" data-toggle="dropdown">Dropdown <b className ="caret"></b></a>
        <ul className ="dropdown-menu">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li className ="divider"></li>
          <li><a href="#">Separated link</a></li>
          <li className ="divider"></li>
          <li><a href="#">One more separated link</a></li>
        </ul>
      </li>
    </ul>
    <form className ="navbar-form navbar-left" role="search">
      <div className ="form-group">
        <input type="text" className ="form-control" placeholder="Search" />
      </div>
      <button type="submit" className ="btn btn-default">Submit</button>
    </form>
    <ul className ="nav navbar-nav navbar-right">
      <li><a href="#">Link</a></li>
      <li className ="dropdown">
        <a href="#" className ="dropdown-toggle" data-toggle="dropdown">Dropdown <b className ="caret"></b></a>
        <ul className ="dropdown-menu">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li className ="divider"></li>
          <li><a href="#">Separated link</a></li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
    );
  }
});

module.exports = NavBar;
