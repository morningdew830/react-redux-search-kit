
import React from 'react';
import { Col, Checkbox } from 'react-bootstrap';
import InputRange  from 'react-input-range-vertical';
import 'react-input-range-vertical/dist/react-input-range.css'
import '../style/styles.css';

export default class ProductPriceFilter extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        priceRange: {
          max: 0,
          min: 0
        }
      }
  }

  onChange(component, priceRange) {
    this.setState({
      priceRange: priceRange,
    })
  }

  onChangeComplete(component, priceRange) {
    this.props.onChangePriceRange(`${priceRange.min},${priceRange.max}`)
  }

  render() {
    let values = this.state.priceRange
    if (this.state.priceRange.max === 0) {
      values.max = this.props.priceRangeMinMax ? this.props.priceRangeMinMax.max_range : 0
    }
    return (
      <div className="dropdown-checkbox-content price-range-bar">
        <ul className="dropdown-checkbox-menu productTypeFilterList productTypeFilterTopBar">
          <li className="range-slider-bar">
            <InputRange
              maxValue={this.props.priceRangeMinMax ? this.props.priceRangeMinMax.max_range : 1000}
              minValue={this.props.priceRangeMinMax ? this.props.priceRangeMinMax.min_range : 0}
              value={values}
              onChange={ this.onChange.bind(this) }
              onChangeComplete={ this.onChangeComplete.bind(this) }
            />
          </li>
        </ul>
      </div>
    );
  }
}
