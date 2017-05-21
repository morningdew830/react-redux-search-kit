
import React from 'react';
import { connect } from 'react-redux';
import TitleBarComponent from '../components/TitleBarComponent';
import ProductControlBarComponent from '../components/ProductControlBarComponent';
import SearchResultBar from '../components/SearchResultBar';
import ProductFilterBar from '../components/ProductFilterBar';
import ProductSearchLayout from '../components/ProductSearchLayout';
import {Col, Row} from 'react-bootstrap';
import { Button, Input } from 'rebass';
import '../style/styles.css'
import { fetchProducts } from '../redux-stuff/actions/products'

class HomeComponent extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      searchParams: {},
      products: {},
    }
  }

  componentWillReceiveProps(nextProps) {
    const { products, searchParams } = nextProps.products
    this.setState( { products, searchParams } )
  }

  onChangeKey(key) {
    const searchParams = Object.assign({}, this.state.searchParams, {q: key})
    this.props.dispatch(fetchProducts(searchParams))
    this.setState({searchParams})
  }

  onChangeFilters(filters) {
    let allParams = Object.assign({}, this.state.searchParams, filters)
    let searchParams = {}
    Object.keys(allParams).map(key => {
      if (allParams[key] !== '' && allParams[key] !== 0) {
        searchParams[key] = allParams[key]
      }
    })
    this.props.dispatch(fetchProducts(searchParams))
    this.setState({searchParams})
  }

  render() {
    console.log("Render: ++++++++++++++++++++", this.state)
    const { searchParams, products } = this.state
    let searchResultText = "Searching ... "
    if (products) {
      searchResultText = products.products && products.products.length > 0 ? products.search_found_text : products.nothing_found
    }
    return (
      <div className="searchResultContent">
        <div className="container">
          <TitleBarComponent/>
          <ProductControlBarComponent/>
          <SearchResultBar searchKey={ searchParams ? searchParams.q : '' } searchResultText={ searchResultText } onChangeKey={ (key) => this.onChangeKey(key) } />
          <ProductFilterBar products={ products } onChangeFilters={ (filters) => this.onChangeFilters(filters) } />
          <ProductSearchLayout products={ products } onChangeFilters={ (filters) => this.onChangeFilters(filters)} activePage={searchParams ? +searchParams.page : 1} />
        </div>
      </div>
    )
  }
}

const productsStateToProps = state => {
  return Object.assign({}, state);
}

export default connect(productsStateToProps)(HomeComponent)
