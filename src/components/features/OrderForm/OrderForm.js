import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import {Row, Col, Grid} from 'react-flexbox-grid';
import PageTitle from '../../common/PageTitle/PageTitle';
import PropTypes from 'prop-types';

class OrderForm extends React.Component {
  render(){
    const {tripCost, options} = this.props;    
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <PageTitle text={'Trip options'} />
            <OrderSummary tripCost={tripCost} options={options} />
          </Col>
        </Row>
      </Grid>
    );
  }
}
OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.any,
};


export default OrderForm;