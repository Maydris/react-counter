import React, { useState } from "react"; 

const App = () => { 
	const [counter, setCounter] = useState(0); 
	const [initialCount, setInitialCount] = useState(0); 

	const handleInitialCountChange = (event) => { 
		setInitialCount(Number(event.target.value)); 
	}; 

	const handleReset = () => { 
		setCounter(initialCount); 
	}; 

	const handleClick1 = () => { 
		setCounter(counter + 1); 
	}; 

	const handleClick2 = () => { 
		setCounter(counter - 1); 
	}; 

	return ( 
		<div style={styles.container}> 
			<h1 style={styles.heading}> 
				Geeksforgeeks 
			</h1> 
			<h2 style={styles.header}> 
				Counter App 
			</h2> 
			<div style={styles.counterValue}> 
				{counter} 
			</div> 
			<div style={styles.buttons}> 
				<button style={styles.button} 
						onClick={handleClick1}> 
					Increment 
				</button> 
				<button style={styles.button} 
						onClick={handleClick2}> 
					Decrement 
				</button> 
			</div> 
			<div style={{ margin: "1.5rem" }}> 
				<input 
					type="number"
					value={initialCount} 
					onChange={handleInitialCountChange} 
					style={{ padding: "1rem", 
							fontSize: "1rem", 
							borderRadius: "8px" }} 
				/> 
				<button 
					onClick={handleReset} 
					style={{ 
						padding: "1rem", 
						fontSize: "1rem", 
						marginLeft: "1rem", 
						borderRadius: "5px", 
						cursor: "pointer", 
						color: "#fff", 
						background: "blue", 
						border: "none", 
						outline: "none", 
						boxShadow: "0px 0px 20px 0px grey", 
					}} 
				> 
					Set Initial Count 
				</button> 
			</div> 
		</div> 
	); 
}; 

const styles = { 
	container: { 
		display: "flex", 
		flexDirection: "column", 
		alignItems: "center", 
		justifyContent: "center", 
		height: "100vh", 
		background: "#f8f8f8", 
	}, 
	header: { 
		fontSize: "1.4rem", 
		margin: "1rem 0", 
		color: "#333", 
		textTransform: "uppercase", 
	}, 
	heading: { 
		color: "green", 
		fontSize: "2rem", 
	}, 
	counterValue: { 
		fontSize: "3rem", 
		fontWeight: "bold", 
		margin: "1rem 0", 
		color: "#007bff", 
	}, 
	buttons: { 
		display: "flex", 
		justifyContent: "center", 
	}, 
	button: { 
		fontSize: "1rem", 
		padding: "1rem", 
		margin: "0.5rem", 
		borderRadius: "5px", 
		cursor: "pointer", 
		color: "#fff", 
		background: "green", 
		border: "none", 
		outline: "none", 
		transition: "background 0.3s", 
		boxShadow: "0px 0px 20px 0px grey", 
	}, 
}; 

export default App;
