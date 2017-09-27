import _ from 'underscore'
import React, { Component } from 'react'
import './App.css'
import data from './data.js'
import Products from './Products.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.products
    };
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Kata 2- Add and remove objects</h2>
      </div>
      <div className='add-product'>
        <form>
          <label for="name">Product Name</label>
          <input id="name" type="text" />

          <label for="description">Description</label>
          <input id="description" type="text" />

          <button type="submit">Add Product</button>
        </form>
      </div>
      <div className='products-container'>
        <Products products={this.state.products} />
      </div>
    </div>
  }
}

export default App
