
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
        priceFilterFlag: false,
        vendorFilterFlag: false,
        productTypeFilterFlag: false,
        tagFilterFlag: false,
        filters: {},
    }
  }

  onHidePriceFilterPan(e) {
    setTimeout(function() {
        this.setState({ priceFilterFlag : false });
    }.bind(this), 500);
  }

  onChangeVendorFilter(filteredVendors) {
    const filters = Object.assign({}, this.state.filters, {vendor: filteredVendors.join('|')})
    this.props.onChangeFilters(filters)
  }

  onChangeProductTypeFilter(filteredTypes) {
    const filters = Object.assign({}, this.state.filters, {product_type: filteredTypes.join('|')})
    this.props.onChangeFilters(filters)
  }

  onHideTagFilterPan(e) {
    setTimeout(function() {
        this.setState({ tagFilterFlag : false });
    }.bind(this), 500);
  }

  render() {
    const { openPriceFlag,
            openVendorFlag,
            openProductTypeFlag,
            openTagFlag } = this.state;

    const { vendors, productTypes, productTags } = this.props

    return (
      <div>
        <div className="sidebar-price-filter">
          <div className="productFilterTitle" onClick={ () => this.setState({ openPriceFlag: !openPriceFlag })}>
            Price, $
          </div>
          { openPriceFlag
            ? 
            <div className="price-filter-wrapper">
              <ProductPriceFilter hideFilterPan={ (e) => this.onHidePriceFilterPan(e) }/>
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
              <ProductTagFilter searchItems={productTags} hideFilterPan={ (e) => this.onHideTagFilterPan(e) }/>
            </div>
            :null
          }
        </div>
      </div>
    );
  }
}
