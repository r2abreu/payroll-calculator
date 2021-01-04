import React from 'react';
import Form from './Form';
import Table from './Table';

class App extends React.Component {
	state = { isActive: false };

	// Submit the form and update the state with the retrieved data

	onSubmit = (event) => {
		event.preventDefault();
		const textArea = document.getElementById('textArea');
		if (textArea.value) {
			// Parsing data
			const data = JSON.parse(textArea.value);
			this.setState({ isActive: true, data });
		} else {
			alert('Por favor, asegurate que el campo no se encuentra vacio');
		}
	};

	componentDidUpdate() {
		const formContainer = document.getElementById('formContainer');

		// Toggling visibility of form
		if (this.state.data) {
			if (formContainer.style.display === 'none') {
				formContainer.style.display = 'block';
			} else {
				formContainer.style.display = 'none';
			}
		} else if (!this.state.data) {
			console.log('no data available');
		}
	}

	render() {
		return (
			<div>
				<h1>Calculo de Nominas de Equipos</h1>
				<Form onClick={this.onClick} onSubmit={this.onSubmit} value={this.state.data} />
				{this.state.isActive ? <Table data={this.state.data} /> : null}
			</div>
		);
	}
}

export default App;
