import React from 'react';

export default (props) => {
	// Team tiers

	const TIER_A = 5;
	const TIER_B = 10;
	const TIER_C = 15;
	const TIER_CUAUH = 20;

	// Team total goals

	let teamTotalGoals = null;
	for (let player of props.data) {
		teamTotalGoals += parseInt(player.goles);
	}

	// Team quota

	let teamGoalQuota = null;
	props.data.forEach((player) => {
		switch (player.nivel) {
			case 'A':
				teamGoalQuota += TIER_A;
				break;
			case 'B':
				teamGoalQuota += TIER_B;
				break;
			case 'C':
				teamGoalQuota += TIER_C;
				break;
			case 'Cuauh':
				teamGoalQuota += TIER_CUAUH;
				break;
			default:
				console.log('');
		}
	});

	// Team's Percentaje Achieved

	const teamPercentageAchieved = teamTotalGoals * 100 / teamGoalQuota;

	// Dynamically determine player TIERS

	const playerTier = (player) => {
		if (player.nivel === 'A') {
			return TIER_A;
		} else if (player.nivel === 'B') {
			return TIER_B;
		} else if (player.nivel === 'C') {
			return TIER_C;
		} else {
			return TIER_CUAUH;
		}
	};

	// Calculate Percentage Achieved and adding it as a property
	// Add the fixed salary plus the variable bonus to obtain each players full salary

	props.data.forEach((player) => {
		player.quotaPercentage = Math.round(player.goles * 100 / playerTier(player));
		const variableBonusPercentage = (teamPercentageAchieved + player.quotaPercentage) / 2;
		player.variableBonus = Math.floor(variableBonusPercentage * player.bono / 100);
		// Complete Salary
		player.sueldo_completo = player.variableBonus + player.sueldo;
	});

	// Printing DATA and JSON string as requested

	console.table(props.data);
	console.log(JSON.stringify(props.data));

	// Render Table with Data
	const renderTableData = () => {
		return props.data.map((element) => {
			return (
				<tr key={element.nombre}>
					<td>{element.nombre}</td>
					<td>{element.nivel}</td>
					<td>{element.sueldo}</td>
					<td>{element.bono}</td>
					<td>{element.equipo}</td>
					<td className="salary">{element.sueldo_completo}</td>
				</tr>
			);
		});
	};

	return (
		<div className="ui container">
			<table className="ui celled table">
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Nivel</th>
						<th>Sueldo sin Bono</th>
						<th>Bono</th>
						<th>Equipo</th>
						<th>Sueldo con Bono</th>
					</tr>
				</thead>
				<tbody>{renderTableData()}</tbody>
			</table>
		</div>
	);
};
