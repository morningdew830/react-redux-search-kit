
import React from 'react';
import { Row, Col, FormGroup, FormControl } from 'react-bootstrap';
import '../style/styles.css';

export default class ProductListItem extends React.Component {
  
  render() {
    const { product } = this.props;  
    return (
      <div className="product col-md-4 col-sm-6 col-xs-12">
        <a href={product.link} className="viewLink">
        <div className="item clearfix">
          <span className="thumbnailImage">
            <img src={product.image} alt="" />
          </span>
          <span className="overhiddenText">
            <span className="title">{product.title}</span>
            <span className="description">{product.description}</span>
            <span className="price">{product.price}</span>
          </span>
          </div>
        </a>
      </div>
    );
  }
}
