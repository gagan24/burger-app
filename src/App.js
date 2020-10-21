import React, {Component} from 'react';
import Layout from "./components/Layout/Layout"
import BurgerBuiulder from "./containers/BurgerBuilder/BurgerBuilder"
import './App.css'; 

class App extends Component{
  render(){
    return (
      <div>
        <Layout>
          <BurgerBuiulder />
        </Layout>
      </div>
    )
  }
}

export default App;
