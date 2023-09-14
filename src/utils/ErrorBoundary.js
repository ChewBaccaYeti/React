import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static propTypes = {
    fallback: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
  };

  static getDerivedStateFromError(error) {
    console.error('An error occurred:', error);
    // Оновлюємо стан, щоб відобразити помилку
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('An error occurred:', error);
    console.error('Additional info:', info);
    // Додаткова обробка помилки, наприклад, відправка її на сервер
  }

  handleReload = () => {
    // Функція для оновлення сторінки
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={styles.errorContainer}>
          <h1 style={styles.errorText}>Something went wrong!</h1>
          <p style={styles.errorMessage}>
            We are sorry, but an error occurred while rendering this component.
          </p>
          <button style={styles.reloadButton} onClick={this.handleReload}>
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const styles = {
  errorContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
  },
  errorText: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'red',
  },
  errorMessage: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  reloadButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default ErrorBoundary;
