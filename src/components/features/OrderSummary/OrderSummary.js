import React from 'react';
import styles from './OrderSummary.scss';
import PropTypes from 'prop-types';

import calculateTotal from '../../../utils/calculateTotal';
import formatPrice from '../../../utils/formatPrice';

class OrderSummary extends React.Component {
  render(){
    const {tripCost, options} = this.props;
    return (
      <h2 className={styles.component}>Total: {formatPrice(calculateTotal(tripCost, options))}</h2>

    );
  }
}

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.any,
};



export default OrderSummary;