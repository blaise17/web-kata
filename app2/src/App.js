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

    this.addHandler = this.addHandler.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }

  addHandler(e) {
    var nameNode = e.target[0];
    var name = nameNode.value;

    var descriptionNode = e.target[1];
    var description = descriptionNode.value;

    var product = {
      name: name,
      description: description
    };
    var products = this.state.products.concat(product);

    this.setState({
      products: products
    });

    nameNode.value = "";
    descriptionNode.value = "";

    e.preventDefault();
  }

  removeProduct(productName) {
    var products = this.state.products.filter(p => p.name !== productName);

    this.setState({
      products: products
    });
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Kata 2- Add and remove objects</h2>
      </div>
      <div className='add-product'>
        <form onSubmit={this.addHandler}>
          <label htmlFor="name">Product Name</label>
          <input id="name" type="text" minLength="3" required />

          <label htmlFor="description">Description</label>
          <input id="description" type="text" />

          <button type="submit">Add Product</button>
        </form>
      </div>
      <div className='products-container'>
        <Products products={this.state.products} removeProduct={this.removeProduct} />
      </div>
    </div>
  }
}

export default App
