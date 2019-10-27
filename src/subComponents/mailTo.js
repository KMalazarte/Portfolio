var React  = require('react');
var Mailto = require('react-mailto');

var Component = React.createClass({
  render: function () {
    return (
      <Mailto email="kevin.malazarte@gmial.com" obfuscate={true}>
        Email me!
      </Mailto>
    );
  }
});
