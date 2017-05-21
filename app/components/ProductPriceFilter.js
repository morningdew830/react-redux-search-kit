
import React from 'react';
import { Col, Checkbox } from 'react-bootstrap';
import InputRange  from 'react-input-range-vertical';
import 'react-input-range-vertical/dist/react-input-range.css'
import '../style/styles.css';

export default class ProductPriceFilter extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        values:{
          min:100, 
          max:700,
      }
    }
  }

  // handleUpdateValue(value) {
  //   this.setState({
  //     values:value,
  //   });
  // }
  onHideFilterPan(e) {
    this.props.hideFilterPan(e)
  }
  render() {
    return (
      <div className="dropdown-checkbox-content price-range-bar">
        <ul className="dropdown-checkbox-menu productTypeFilterList productTypeFilterTopBar">
          <li className="range-slider-bar">
            <InputRange
              maxValue={1000}
              minValue={0}
              value={this.state.values}
              onChange={ (e) => this.onHideFilterPan(e) }
            />
          </li>
        </ul>
      </div>
    );
  }
}
