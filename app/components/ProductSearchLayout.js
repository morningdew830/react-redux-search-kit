
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
    const { products, priceRange, activePage } = this.props
    let totalCount = 0
    if (products) {
      if (products.products) {
        totalCount = this.getNumberOfPages(products.search_found_text)
      }
    }

    return (
      <Col xs={12} md={12} className="product-list-pane">
        <Col xs={3} md={3} className="sidebar-prodcuct">
          <SearchSidebar
              products={ products }
              priceRange={ priceRange }
              onChangeFilters={ (filters) => this.onChangeFilters(filters) }/>
        </Col>
        <Col xs={9} md={9} >
          <ProductListLayout 
              totalCount={ totalCount }
              products={ products ? products.products : null } 
              activePage={ activePage || 1 }
              onChangePage={ (filters) => this.onChangePage(filters) } />
        </Col>
      </Col>
    );
  }
}
