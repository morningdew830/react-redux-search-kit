
import React from 'react';
import { Row, Col, FormGroup, FormControl } from 'react-bootstrap';
import ProductListItem from './ProductListItem';
import '../style/styles.css';

export default class ProductListLayout extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        activePage: 1,
    },
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {

    this.setState({
      activePage: eventKey
    });
  }

  render() {
    const { products, pagination } = this.props
    const productListItems = products ? products.map((product, index) =>
      <ProductListItem product={product} key={index}/>
    ) : [];
    return (
     <div className="searchResultsContent gridview">
       <div className="row">
         {productListItems}
       </div>
       <div className="row" dangerouslySetInnerHTML={{ __html: pagination }}></div>
     </div>
    );
  }
}
