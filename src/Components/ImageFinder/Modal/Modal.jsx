import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Window } from './Modal.styled';

export class ModalWindow extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handlekeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClick();
    }
  };

  handleClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClick();
    }
  };

  render() {
    return (
      <Window onClick={this.handleClick} onKeyDown={this.handleKeyDown}>
        <Modal>
          <img src={this.props.largeImage} alt="" />
        </Modal>
      </Window>
    );
  }
}

ModalWindow.propTypes = {
  onClick: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
};

export default ModalWindow;
