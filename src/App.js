import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class App extends Component {

    render() {
        return (
            <div className="App">
                你点击了<span id="value">{this.props.n}</span>次
                <div>
                    <button id="add1" onClick={this.props.add1}>+1</button>
                    <button id="add2" onClick={() => this.props.add2()}>+2</button>
                    <button id="add3" onClick={() => this.props.add3()}>如果单数+1</button>
                    <button id="add4" onClick={this.props.add4}>两秒后+1</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        n: state.n
    }
}

function mapDispatchToProps(dispatch)  {
    return{
        add1: () => dispatch({type: 'add', payload: 1}),
        add2: () => dispatch({type: 'add', payload: 2})
    }
}
// bindActionCreators(()=>({type: 'add', payload: 1}),dispatchEvent);
export default connect(mapStateToProps,mapDispatchToProps)(App);
