import React from 'react';
import styles from './OrderSummary.scss';
import PropTypes from 'prop-types';

class OrderSummary extends React.Component {
  render(){
    return (
      <h2 className={styles.component}>Total: <strong>{this.props.cost}</strong></h2>
    );
  }
}

OrderSummary.propTypes = {
  cost: PropTypes.text,
};



export default OrderSummary;