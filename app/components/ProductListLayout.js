
import React from 'react'
import { connect } from 'react-redux';
import { Row, Col, Pagination } from 'react-bootstrap'
import ProductListItem from './ProductListItem'
import ProductGridItem from './ProductGridItem'
import '../style/styles.css'
const ITEMS_PER_PAGE = 9

class ProductListLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPages: 0,
    }
  }

  onChangePage(selectedPage) {
    this.props.onChangePage(selectedPage)
  }

  render() {
    const { totalCount, activePage } = this.props
    let products = this.props.products
    if (products && products.products && products.products.products) {
      products = products.products.products
    } else {
      products = null
    }
    const productListItems = products ? products.map((product, index) =>
      <ProductListItem product={product} key={index} />
    ) : [];
    const productGridItems = products ? products.map((product, index) =>
      <ProductGridItem product={product} key={index} />
    ) : [];
    const numberOfPages = (totalCount % ITEMS_PER_PAGE) === 0 ? Math.floor(totalCount / ITEMS_PER_PAGE) : Math.floor(totalCount / ITEMS_PER_PAGE) + 1
    let layoutClass = 'searchResultsContent '
    layoutClass += this.props.products.layout === 'list' ? 'listview' : 'gridview'

    return (
      <div className={layoutClass}>
        <div className="row">
          { this.props.products.layout === 'list' ? productListItems : productGridItems }
        </div>
        <div className="row">
          <Pagination
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
            items={numberOfPages}
            maxButtons={5}
            activePage={activePage}
            onSelect={(selectedPage) => this.onChangePage(selectedPage)} />
        </div>
      </div>
    );
  }
}

const layoutStateToProps = state => {
  return Object.assign({}, state);
}

export default connect(layoutStateToProps)(ProductListLayout)
