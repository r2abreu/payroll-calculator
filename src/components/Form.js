import React from 'react';
export default (props) => {
	return (
		<div className="ui container" id="formContainer">
			<div className="ui form">
				<form
					onSubmit={(event) => {
						props.onSubmit(event);
					}}
				>
					<div className="field">
						<label htmlFor="data">
							Ingresa los datos referentes a los jugadores de tu equipo en formato JSON.
							<textarea value={props.data} name="data" id="textArea" rows="18" />
						</label>
					</div>
					<input className="ui button" type="submit" value="Calcular" />
				</form>
			</div>
		</div>
	);
};
