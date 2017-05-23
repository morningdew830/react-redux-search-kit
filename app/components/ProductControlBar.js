
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

  onChangeSortOrder(e) {
    console.log("onChangeSortOrder", e.target.value)
    let filters = {
      sort_by: '',
      sort_order: '',
    }
    if (e.target.value !== '') {
      const items = e.target.value.split('&')
      filters.sort_by = items[0]
      filters.sort_order = items[1]
    }
    this.props.onChangeFilters(filters)
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
        <FormControl componentClass="select" placeholder="select" bsSize="sm" onChange={(e) => this.onChangeSortOrder(e)}>
          <option value="">Relevance</option>
          <option value="title&asc">Title: A-Z</option>
          <option value="title&desc">Title: Z-A</option>
          <option value="prices&asc">Price Low-High</option>
          <option value="prices&desc">Price High-Low</option>
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
