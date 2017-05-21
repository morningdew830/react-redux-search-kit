
import React from 'react';
import { Col, FormGroup, FormControl } from 'react-bootstrap';
import '../style/styles.css';

export default class ProductControlBarComponent extends React.Component {
  render() {
    
    return (
      <Col xs={12} md={12} className="product-control-bar osearch-result-controlbar">
       <div className="controlsPanelPrd oSearchResultTabs pull-left">
         <a href="#" data-value="products" className="reload_page_with_tab_data active">Products</a>
       </div>
      
       <div className="viewModePanel pull-right">
         <a href="#" className="grid-mode-icon active"></a>
         <a href="#" className="list-mode-icon"></a>
       </div>
       <FormGroup controlId="formControlsSelect" className="controllbar-search" bsSize="sm">
        <FormControl componentClass="select" placeholder="select" bsSize="sm">
          <option value="select">Relevance</option>
          <option value="select">Title: A-Z</option>
          <option value="select">Title: Z-A</option>
          <option value="select">Price High-Low</option>
          <option value="other">Price Low-High</option>
        </FormControl>
       </FormGroup>
      </Col>
    );
  }
}
