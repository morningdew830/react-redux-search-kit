
import React from 'react';
import { connect } from 'react-redux';
import { Col, FormGroup, FormControl } from 'react-bootstrap';
import { setLayout } from '../redux-stuff/actions/products';
import '../style/styles.css';


class ProductControlBar extends React.Component {
  constructor(props){
    super(props);
  }

  onChangeLayout(layout) {
    this.props.dispatch(setLayout(layout))
  }

  render() {
    return (
      <Col xs={12} md={12} className="product-control-bar osearch-result-controlbar">
       <div className="controlsPanelPrd oSearchResultTabs pull-left">
         <a href="#" data-value="products" className="reload_page_with_tab_data active">Products</a>
       </div>
      
       <div className="viewModePanel pull-right">
         <a href="#" className="grid-mode-icon active" onClick={() => this.onChangeLayout('grid')}></a>
         <a href="#" className="list-mode-icon" onClick={() => this.onChangeLayout('list')}></a>
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

const layoutStateToProps = state => {
  return Object.assign({}, state);
}

export default connect(layoutStateToProps)(ProductControlBar)
