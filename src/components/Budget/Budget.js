import React, { Component } from 'react';
import './Budget.css';
import { connect } from 'react-redux';

class Budget extends Component {
  render() {
    const {
      profit,
      marketExpanse,
      deliveryExpanse,
      farmExpanse,
    } = this.props.budget;
    const total = profit - (marketExpanse + deliveryExpanse + farmExpanse);
    return (
      <div className="budget">
        <h2>Бюджет</h2>
        <p>Всего получено денег: {profit}</p>
        <p>Расходы продавцов: {0 - marketExpanse}</p>
        <p>Расходы на ферме: {0 - farmExpanse}</p>
        <p>Расходы на доставку: {0 - deliveryExpanse}</p>
        <p>Итого: {total}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({ budget: state.budget });
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Budget);
