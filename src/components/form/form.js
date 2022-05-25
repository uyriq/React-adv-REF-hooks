import React from 'react';
import formStyles from './form.module.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmit: false,
      value: ''
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className={formStyles.root}>
        <form
          className={formStyles.form}
          onSubmit={this.handleFormSubmit}
        >
          <input
            className={formStyles.input}
            type='email'
            placeholder={'Введите свой e-mail'}
          />
          <button
            className={formStyles.button}
            type={'submit'}
          >
            Подписаться
          </button>
        </form>
        <p className={formStyles.message}>
        </p>
      </div>
    );
  }
}

export default Form;
