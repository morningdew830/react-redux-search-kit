
import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { fetchProducts } from '../redux-stuff/actions/products'
import { Button } from 'react-bootstrap';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { searchParams: {} }
  }

  handleClick() {
    const { searchParams } = this.state
    this.props.dispatch(fetchProducts( searchParams ))
    browserHistory.push('/search-result-page')
  }

  getValue(e) {
    this.setState({ searchParams: { q: e.target.value } })
  }

  render() {
    return (
      <div className="text-center searchPageContent">
        <h1 className="searchTitle">SEARCH OUR SITE</h1>
        <div className="searchForm oSearchForm0">
          <div className="input-group">
            <input type="search" placeholder="Search" onChange={ (e) => this.getValue(e) } />
            <span className="input-group-btn">
              <button className="btn searchBtn" onClick={ () => this.handleClick() }>Submit</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const productsStateToProps = state => {
  return Object.assign({}, state);
}

export default connect(productsStateToProps)(SearchIndex)
