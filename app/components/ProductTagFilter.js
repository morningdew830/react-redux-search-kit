
import React from 'react';
import { Col, Checkbox } from 'react-bootstrap';
import '../style/styles.css';

export default class ProductTagFilter extends React.Component {
  constructor(props){
    super(props);
    
  }
  onHideFilterPan(e) {
    this.props.hideFilterPan(e);
  }
  render() {
    const { searchItems } = this.props;
    const ProductTagTab = searchItems.map((item, index) =>
       <li key={index} >
        <div className="layout">
          <Checkbox validationState="success" onChange={ (e) => this.onHideFilterPan(e) }>
            { item.label } ({ item.qty })
          </Checkbox>
        </div>
      </li>
    );

    return (
       <div className="dropdown-checkbox-content">
        <ul className="dropdown-checkbox-menu productTypeFilterList productTypeFilterTopBar">
          { ProductTagTab }
        </ul>
      </div>
    );
  }
}
