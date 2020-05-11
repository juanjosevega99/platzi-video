import React, { Component } from 'react';
import Search from '../components/search';
// Redux
import { connect } from 'react-redux'
import { searchAsyncMedia } from '../../actions/'

class SearchContainer extends Component {
  state = {
    inputValue: '' // --- valor por defecto
  }
  // --- los metodos deben crearse como arrow functions .. no como funciones estandar para poder usar internamente -this-
  handleSubmit = event => {
     event.preventDefault();
     console.log(this.input.value)
     this.props.searchAsyncMedia(this.input.value) // --- el Dispatch de Redux! .. simplificado
  }
  setInputRef = element => {
    this.input = element;
  }
  handleInputChange = event => {
    this.setState({
      inputvalue: event.target.value.replace(' ', '-')
    })
  }
  render() {
		return (
			<Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.inputvalue}
      />
		)
	}
}

const mapDispatchToProps = {
  searchAsyncMedia
}

export default connect(null, mapDispatchToProps) (SearchContainer) // --- Redux