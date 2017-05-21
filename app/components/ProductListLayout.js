
import React from 'react'
import { Row, Col, Pagination } from 'react-bootstrap'
import ProductListItem from './ProductListItem'
import '../style/styles.css'
const ITEMS_PER_PAGE = 9

export default class ProductListLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPages: 0
    }
  }

  componentWillReceiveProps(nextProps) {

  }

  onChangePage(selectedPage) {
    this.props.onChangePage(selectedPage)
  }

  render() {
    const { totalCount, products, activePage } = this.props
    const productListItems = products ? products.map((product, index) =>
      <ProductListItem product={product} key={index} />
    ) : [];
    const numberOfPages = (totalCount % ITEMS_PER_PAGE) === 0 ? (totalCount / ITEMS_PER_PAGE) : (totalCount / ITEMS_PER_PAGE) + 1

    return (
      <div className="searchResultsContent gridview">
        <div className="row">
          {productListItems}
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
