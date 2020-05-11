import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const $modal = document.getElementById('modal-container.js')

class ModalConainer extends Component {
	render () {
		return createPortal(this.props.children, $modal)
	}
}

export default ModalConainer