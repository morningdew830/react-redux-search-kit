
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SearchSidebar from './SearchSidebar';
import ProductListLayout from './ProductListLayout';
import '../style/styles.css';

export default class ProductSearchLayout extends React.Component {
  constructor(props){
    super(props);
  }

  onChangeFilters(filters) {
    this.props.onChangeFilters(filters)
  }

  getNumberOfPages(search_found_text) {
    return +search_found_text.slice('Showing <b>'.length, search_found_text.indexOf('</b>'))
  }

  onChangePage(selectedPage) {
    this.props.onChangeFilters({page: selectedPage})
  }

  render() {
    const { products, activePage } = this.props
    let vendors = null, productTypes = null, productTags = null, totalCount = 0
    if (products) {
      vendors = products.vendors
      productTypes = products.productTypes
      productTags = products.productTags
      if (products.products) {
        totalCount = this.getNumberOfPages(products.search_found_text)
      }
    }
    vendors = vendors ? Object.keys(vendors).map(key => vendors[key]) : []
    productTypes = productTypes ? Object.keys(productTypes).map(key => productTypes[key]) : []
    productTags = productTags ? Object.keys(productTags).map(key => productTags[key]) : []
    
    return (
      <Col xs={12} md={12} className="product-list-pane">
        <Col xs={3} md={3} className="sidebar-prodcuct">
          <SearchSidebar
              vendors={ vendors } 
              productTypes={ productTypes } 
              productTags={ productTags } 
              onChangeFilters={ (filters) => this.onChangeFilters(filters) }/>
        </Col>
        <Col xs={9} md={9} >
          <ProductListLayout 
              totalCount={ totalCount }
              products={ products ? products.products : null } 
              activePage={ activePage }
              onChangePage={ (filters) => this.onChangePage(filters) } />
        </Col>
      </Col>
    );
  }
}
