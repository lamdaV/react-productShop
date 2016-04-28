var React = require("react");
var NavBar = require("./nav/NavBar.jsx");

var navLinks = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "iOS",
    href: "/product/55"
  },
  {
    title: "React",
    href: "/product/67"
  }
];

var BasePage = React.createClass({

  render: function() {
    return (
      <div>
        <NavBar bgColor = "#563d7c" titleColor = "#fff" linkColor = "cyan" navData = {navLinks} brandName = "Join"/>

        <div className = "container">
          <div className = "row">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = BasePage;
