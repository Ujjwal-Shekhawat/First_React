import React from 'react';
import logo from './logo.svg';
import './App.css';
import Decor from './decor.js';
import {Button}  from 'antd';

import './index.css'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class Square extends React.Component {

  render() {
    return (
      <Button 
        //type="primary"
        //shape="circle"
        className={this.props.className} //put this to square to get amazing results
        style={{ padding: '0px', margin: '5px' }}
        onClick={this.props.onClick}
      >

        { this.props.value}

      </Button>
    );
  }
}

class CustomRendererForGrids extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Value: Array(15).fill().map(() => Array(15).fill(1)),
      className: "square"
    }
  }
  func(i, j) {
    // Expand upon this work is preety unsatisfactory
    const squares = this.state.Value.slice();
    squares[i][j] = ' ';
    //alert(i + " " + j); // Works as expected
    this.setState({squares: squares});
    
    // Testing Zone for new functions
    
    let x = i;
    let y = j;
    
    for(let i = x; i < 15; i++) {
      for(let j = y; j < 15; j++) {
        (squares[i][j] != ' ')? squares[i][j] = ' ': squares[i][j] = 1;
      }
      this.setState({squares: squares});

    }

  }

  createTable = () => {
    let x = [];
    for(let i = 0; i < 15; i++) {
      for(let j = 0; j < 15; j++) {
        x.push(<Square value={this.state.Value[i][j]} onClick={() => this.func(i, j)} className={this.state.className}/>);
      }
      x.push(<div />)
    }
    return x;
  }

  render() {
  return (<div>{this.createTable()}<desApp /></div>)
  };

}

function App() {
  return (
    <div className="App">
      <div>
                <Layout className="layout">

    <Content style={{ padding: '0px' }}>
      <div className="site-layout-content">
        <CustomRendererForGrids />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center', background: 'black', color: 'gray' }}>LEARNING REACT (MY FIRST REACT APP)</Footer>
  </Layout>
            </div>
    </div>
  );
}

export default App;
