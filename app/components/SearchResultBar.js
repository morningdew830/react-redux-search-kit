
import React from 'react';
import { Col, FormGroup, FormControl } from 'react-bootstrap';
import '../style/styles.css';

export default class SearchResultBar extends React.Component {
  constructor(props) {
    super(props);
  }

  onChangeKey(e) {
    this.props.onChangeKey(e.target.value)
  }

  render() {
    const { searchKey, searchResultText } = this.props
    return (
      <Col xs={12} sm={12} md={12} className="searchResultBar osearch-result-searchbar">
        <div className="searchResultsHeader osearch-no-product-found pull-left" dangerouslySetInnerHTML={{__html: searchResultText}}></div>
        <div className="searchField pull-right osearchTopRight">
           <FormGroup>
            <FormControl 
              type="text"
              placeholder="Search"
              value={ searchKey }
              onChange={(e) => this.onChangeKey(e)}
            />
          </FormGroup>
        </div>
      </Col>
    );
  }
}
