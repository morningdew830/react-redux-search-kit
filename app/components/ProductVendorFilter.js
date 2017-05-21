
import React from 'react';
import { Col, Checkbox } from 'react-bootstrap';
import '../style/styles.css';

export default class ProductVendorFilter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      vendors: []
    }
  }

  onChangeVendorFilter(label, e) {
    const i = this.state.vendors.indexOf(label)
    if (e.target.checked === true) {
      if (i === -1)
        this.state.vendors.push( label )
    } else {
      if (i !== -1)
        this.state.vendors.splice( i, 1 )
    }
    this.props.onChangeVendorFilter(this.state.vendors);
  }

  render() {
    const { searchItems } = this.props;
    const vendorTab = searchItems.map((item, index) => 
      <li key={index} >
        <div className="layout">
          <Checkbox validationState="success" onChange={ (e) => this.onChangeVendorFilter( item.label, e) }>
            { item.label } ({ item.qty })
          </Checkbox>
        </div>
      </li>
    );
    return (
       <div className="dropdown-checkbox-content">
        <ul className="dropdown-checkbox-menu productTypeFilterList productTypeFilterTopBar">
         {vendorTab}
        </ul>
      </div>
    );
  }
}
