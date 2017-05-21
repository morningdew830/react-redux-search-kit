
import React from 'react';
import { Col } from 'react-bootstrap';
import ProductPriceFilter from './ProductPriceFilter';
import ProductVendorFilter from './ProductVendorFilter';
import ProductTypeFilter from './ProductTypeFilter';
import ProductTagFilter from './ProductTagFilter';

import '../style/styles.css';

export default class ProductFilterBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      priceFilterFlag: false,
      vendorFilterFlag: false,
      productTypeFilterFlag: false,
      tagFilterFlag: false,
      filters: {},
    };
  }

  onShowPriceFilterPan() {
    const {priceFilterFlag} = this.state;
    this.setState({ 
      priceFilterFlag : !priceFilterFlag,
      vendorFilterFlag : false,
      productTypeFilterFlag : false,
      tagFilterFlag : false
    });
  }

  onHidePriceFilterPan(e) {
    setTimeout(function() {
        this.setState({ priceFilterFlag : false });
    }.bind(this), 500);
  }

  onShowVendorFilterPan() {
    const {vendorFilterFlag} = this.state;
    this.setState({ 
      vendorFilterFlag : !vendorFilterFlag,
      priceFilterFlag : false,
      productTypeFilterFlag : false,
      tagFilterFlag : false
    });
  }

  onHideVendorFilterPan(e) {
    setTimeout(function() {
        this.setState({ vendorFilterFlag : false });
    }.bind(this), 500);
  }

  onShowProductTypeFilterPan() {
    const {productTypeFilterFlag} = this.state;
    this.setState({ 
      productTypeFilterFlag : !productTypeFilterFlag,
      priceFilterFlag : false,
      vendorFilterFlag : false,
      tagFilterFlag : false
    });
  }

  onHideProductTypeFilterPan(e) {
    setTimeout(function() {
        this.setState({ productTypeFilterFlag : false });
    }.bind(this), 500);
  }

  onShowTagFilterPan() {
    const {tagFilterFlag} = this.state; 
    this.setState({ 
      tagFilterFlag : !tagFilterFlag,
      priceFilterFlag : false,
      vendorFilterFlag : false,
      productTypeFilterFlag : false
    });
  }

  onHideTagFilterPan(e) {
    setTimeout(function() {
        this.setState({ tagFilterFlag : false });
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

  onChangeProductTagFilter(filteredTags) {
    const filters = Object.assign({}, this.state.filters, {tags: filteredTags.join('|')})
    this.props.onChangeFilters(filters)
  }

  render() {
    const { priceFilterFlag,  
            vendorFilterFlag, 
            productTypeFilterFlag, 
            tagFilterFlag } = this.state;

    let vendors = null, productTypes = null, productTags = null
    if (this.props.products) {
      vendors = this.props.products.vendors
      productTypes = this.props.products.productTypes
      productTags = this.props.products.productTags
    }
    vendors = vendors ? Object.keys(vendors).map(key => vendors[key]) : []
    productTypes = productTypes ? Object.keys(productTypes).map(key => productTypes[key]) : []
    productTags = productTags ? Object.keys(productTags).map(key => productTags[key]) : []

    return (
      <Col xs={12} md={12} className="productFiltersBar osearch-result-productfilterbar">
        <div className="filtersByAll myDropdownCheckboxBasic dropdown-checkbox dropdown productTypeBox oSearchResultFilterCell open" >
          <div className="dropdown-checkbox-toggle filtersDropdown" data-toggle="dropdown" aria-expanded="true" onClick={ () => this.onShowPriceFilterPan() }>
            <span>Price<i className="countBox"></i><i className="resetIcon resetCheckedIcon resetProductTypeIcon"></i>
              <b className="caret"></b>
            </span>
          </div>
          { priceFilterFlag
           ?
            <ProductPriceFilter hideFilterPan={ (e) => this.onHidePriceFilterPan(e) }/>
          : null
          }
        </div>
        <div className="filtersByAll myDropdownCheckboxBasic dropdown-checkbox dropdown productTypeBox oSearchResultFilterCell open" >
          <div className="dropdown-checkbox-toggle filtersDropdown" data-toggle="dropdown" aria-expanded="true" onClick={ () => this.onShowVendorFilterPan() }>
            <span>Vendor <i className="countBox"></i><i className="resetIcon resetCheckedIcon resetProductTypeIcon"></i>
              <b className="caret"></b>
            </span>
          </div>
          { vendorFilterFlag
           ?
            <ProductVendorFilter searchItems={vendors} onChangeVendorFilter={ (filteredVendors) => this.onChangeVendorFilter(filteredVendors) } />
          : null
          }
        </div>
        <div className="filtersByAll myDropdownCheckboxBasic dropdown-checkbox dropdown productTypeBox oSearchResultFilterCell open" >
          <div className="dropdown-checkbox-toggle filtersDropdown" data-toggle="dropdown" aria-expanded="true" onClick={ () => this.onShowProductTypeFilterPan() }>
            <span>Product Type <i className="countBox"></i><i className="resetIcon resetCheckedIcon resetProductTypeIcon"></i>
              <b className="caret"></b>
            </span>
          </div>
          { productTypeFilterFlag
           ?
            <ProductTypeFilter searchItems={productTypes} onChangeProductTypeFilter={ (filteredTypes) => this.onChangeProductTypeFilter(filteredTypes) }/>
          : null
          }
        </div>
        <div className="filtersByAll myDropdownCheckboxBasic dropdown-checkbox dropdown productTypeBox oSearchResultFilterCell open" >
          <div className="dropdown-checkbox-toggle filtersDropdown" data-toggle="dropdown" aria-expanded="true" onClick={ () => this.onShowTagFilterPan() }>
            <span>Tags <i className="countBox"></i><i className="resetIcon resetCheckedIcon resetProductTypeIcon"></i>
              <b className="caret"></b>
            </span>
          </div>
          { tagFilterFlag
           ?
            <ProductTagFilter searchItems={productTags} onChangeProductTagFilter={ (filteredTags) => this.onChangeProductTagFilter(filteredTags) }/>
          : null
          }
        </div>
      </Col>
    );
  }
}
