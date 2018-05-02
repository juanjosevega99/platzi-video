import React, { Component } from 'react';
import RegularError from '../components/regular-error';

class HandleError extends Component {
	state= {
		HandleError: false,
	}
	componentDidCatch(error, info) {
		this.setState({
			HandleError: true,
		})
		// envía este error a un servicio como sentry
	}
	render() {
		if (this.state.HandleError) {
			return (
				<RegularError />
			)			
		}
		return this.props.children
	}
}

export default HandleError