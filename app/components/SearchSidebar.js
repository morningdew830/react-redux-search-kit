
import React from 'react';
import { Row, Col, Button ,Panel } from 'react-bootstrap';
import ProductPriceFilter from './ProductPriceFilter';
import ProductVendorFilter from './ProductVendorFilter';
import ProductTypeFilter from './ProductTypeFilter';
import ProductTagFilter from './ProductTagFilter';
import '../style/styles.css';

export default class SearchSidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        openPriceFlag : true,
        openVendorFlag: true,
        openProductTypeFlag:true,
        openTagFlag:true,
        filters: {},
    }
  }

  onChangePriceRange(priceRange) {
    const filters = Object.assign({}, this.state.filters, {pricerange: priceRange})
    this.props.onChangeFilters(filters)
  }

  onChangeVendorFilter(filteredVendors) {
    const filters = Object.assign({}, this.state.filters, {vendor: filteredVendors.join('|')})
    this.props.onChangeFilters(filters)
  }

  onChangeProductTypeFilter(filteredTypes) {
    const filters = Object.assign({}, this.state.filters, {product_type: filteredTypes.join('|')})
    this.props.onChangeFilters(filters)
  }

  onChangeProductTagFilter(filteredTags) {
    const filters = Object.assign({}, this.state.filters, {tags: filteredTags.join('|')})
    this.props.onChangeFilters(filters)
  }

  render() {
    const { openPriceFlag,
            openVendorFlag,
            openProductTypeFlag,
            openTagFlag } = this.state;

    const { products } = this.props
    let vendors = null, productTypes = null, productTags = null, priceRangeMinMax = null, priceRange = null
    if (products) {
      vendors = products.vendors
      productTypes = products.productTypes
      productTags = products.productTags
      priceRangeMinMax = products.priceRange
    }
    if (this.props.priceRange) {
      const _range = this.props.priceRange.split(',')
      priceRange = {
        min: _range[0],
        max: _range[1]
      }
    }
    vendors = vendors ? Object.keys(vendors).map(key => vendors[key]) : []
    productTypes = productTypes ? Object.keys(productTypes).map(key => productTypes[key]) : []
    productTags = productTags ? Object.keys(productTags).map(key => productTags[key]) : []

    return (
      <div>
        <div className="sidebar-price-filter">
          <div className="productFilterTitle" onClick={ () => this.setState({ openPriceFlag: !openPriceFlag })}>
            Price, $
          </div>
          { openPriceFlag
            ? 
            <div className="price-filter-wrapper">
              <ProductPriceFilter priceRangeMinMax={priceRangeMinMax} priceRange={priceRange} onChangePriceRange={ (e) => this.onChangePriceRange(e) }/>
            </div>
            :null
          }
        </div>
        <div className="product-vendor-filter">
          <div className="productFilterTitle" onClick={ ()=> this.setState({ openVendorFlag: !openVendorFlag })}>
            Vendor
          </div>
          { openVendorFlag
            ? 
            <div>
              <ProductVendorFilter searchItems={vendors} onChangeVendorFilter={ (filteredVendors) => this.onChangeVendorFilter(filteredVendors) } />
            </div>
            :null
          }
        </div>
        <div className="product-type-filter" >
          <div className="productFilterTitle" onClick={ ()=> this.setState({ openProductTypeFlag: !openProductTypeFlag })}>
            Product Type
          </div>
          { openProductTypeFlag
            ? 
            <div>
              <ProductTypeFilter searchItems={productTypes} onChangeProductTypeFilter={ (filteredTypes) => this.onChangeProductTypeFilter(filteredTypes) }/>
            </div>
            :null
          }
        </div>
        <div className="product-tag-filter" >
          <div className="productFilterTitle" onClick={ ()=> this.setState({ openTagFlag: !openTagFlag })}>
            Tags
          </div>
          { openTagFlag
            ? 
            <div>
              <ProductTagFilter searchItems={productTags} onChangeProductTagFilter={ (filteredTags) => this.onChangeProductTagFilter(filteredTags) }/>
            </div>
            :null
          }
        </div>
      </div>
    );
  }
}
