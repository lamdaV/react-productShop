var React = require("react");

var ProductPage = React.createClass({
  getInitialState: function() {
    return ({pid: ""});
  },

  componentDidMount: function() {
    this.setState({pid: this.props.params.productId});
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({pid: nextProps.params.productId})
  },

  render: function() {
    return (
      <div>
        <h1>Product Page</h1>
        <h4>Hi, I'm product number {this.state.pid}</h4>
      </div>
    );
  }
});

module.exports = ProductPage;
