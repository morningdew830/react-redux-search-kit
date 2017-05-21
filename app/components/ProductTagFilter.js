
import React from 'react';
import { Col, Checkbox } from 'react-bootstrap';
import '../style/styles.css';

export default class ProductTagFilter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tags: []
    }
  }

  onChangeProductTagFilter(label, e) {
    const i = this.state.tags.indexOf(label)
    if (e.target.checked === true) {
      if (i === -1)
        this.state.tags.push( label )
    } else {
      if (i !== -1)
        this.state.tags.splice( i, 1 )
    }
    this.props.onChangeProductTagFilter(this.state.tags);
  }

  render() {
    const { searchItems } = this.props;
    const ProductTagTab = searchItems.map((item, index) =>
       <li key={index} >
        <div className="layout">
          <Checkbox validationState="success" onChange={ (e) => this.onChangeProductTagFilter(item.label, e) }>
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
