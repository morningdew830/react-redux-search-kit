
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../style/styles.css';

export default class ProductListItem extends React.Component {
  
  render() {
    const { product } = this.props;  
    return (
      <div className="product col-md-12 col-sm-12 col-xs-12">
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
