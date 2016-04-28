var React = require("react");
var ReactRouter = require("react-router");
var PropTypes = React.PropTypes;
var Link = ReactRouter.Link;

var NavItem = React.createClass({
  propTypes: {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    style: PropTypes.object
  },

  getInitialState: function() {
    return ({hover: false});
  },

  mouseOver: function(event) {
    this.setState({hover: true});
  },

  mouseOut: function(event) {
    this.setState({hover: false});
  },

  render: function() {
    return (
      <li className = {this.state.hover ? "active" : ""} onMouseOver = {this.mouseOver} onMouseOut = {this.mouseOut}>
        <Link style = {this.props.linkStyle} to = {this.props.href}>
          {this.props.title} 
        </Link>
      </li>
    );
  }
});

module.exports = NavItem;
