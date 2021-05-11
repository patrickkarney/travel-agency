import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import {Row, Col, Grid} from 'react-flexbox-grid';
import PageTitle from '../../common/PageTitle/PageTitle';
//import PropTypes from 'prop-types';

class OrderForm extends React.Component {
  render(){
    //const {cost} = this.props;    
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <PageTitle text='Trip options' />
            <OrderSummary  />
          </Col>
        </Row>
      </Grid>
    );
  }
}



export default OrderForm;