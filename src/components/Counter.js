import React, { Component } from 'react';
import {connect} from 'react-redux';

//zaten sayfanın sonunda export default işlemini yapacağın için classının başına koymana gerek yok
class Counter extends Component {
  render() {
    return (
      <div> 
          <h1>this.props.counter</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return { counter: state.counterReducer}
    
}

export default connect(mapStateToProps)(Counter);