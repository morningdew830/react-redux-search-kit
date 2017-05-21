
import React from 'react';
import { Col,Checkbox } from 'react-bootstrap';
import '../style/styles.css';

export default class ProductTypeFilter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      types: []
    }
  }

  onChangeProductTypeFilter(label, e) {
    const i = this.state.types.indexOf(label)
    if (e.target.checked === true) {
      if (i === -1)
        this.state.types.push( label )
    } else {
      if (i !== -1)
        this.state.types.splice( i, 1 )
    }
    this.props.onChangeProductTypeFilter(this.state.types);
  }

  render() {
    const { searchItems } = this.props;
    const ProductTypeTab = searchItems.map((item, index) =>
       <li key={index} >
        <div className="layout">
          <Checkbox validationState="success" onChange={(e) => this.onChangeProductTypeFilter(item.label, e)}>
            { item.label } ({ item.qty })
          </Checkbox>
        </div>
      </li>
    );

    return (
       <div className="dropdown-checkbox-content">
        <ul className="dropdown-checkbox-menu productTypeFilterList productTypeFilterTopBar">
          { ProductTypeTab }
        </ul>
      </div>
    );
  }
}
