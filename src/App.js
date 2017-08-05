import React, { Component } from 'react';
import * as actions from './reducers';
import { connect } from 'react-redux';

import PurchaseOrder from './purchase_order/PurchaseOrder';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handlePrintContent = this.handlePrintContent.bind(this);
  }
  handleOpenModal (e) {
    e.preventDefault();

    this.props.openModal();
  }
  handleCloseModal (e) {
    e.preventDefault();

    this.props.closeModal();
  }
  handlePrintContent (e) {
    e.preventDefault();

    window.print();
  }
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Webular React</h2>
        </div>
        <div className='open-modal-container'>
          <button onClick={this.handleOpenModal} className='btn btn-success'>
            Open Purchase Order
          </button>
        </div>
        <PurchaseOrder isOpen={this.props.isOpen} handleCloseModal={this.handleCloseModal} handlePrintContent={this.handlePrintContent}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isOpen: state.modal
})

export default connect(mapStateToProps, actions)(App);
