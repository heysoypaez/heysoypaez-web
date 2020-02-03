import React from "react";

const inputStyles = {
	width: `100%`,
	border: 0,
	borderBottom: `1px solid gray`,
	margin: `10px 0`
}

const submitStyles = {
	width: `100%`,
	border: 0,
	margin: `10px 0`,
	background: `black`,
	color: `white`	
}

const ContactForm = (props) => (
	<form className="ContactForm">
		<input 
			type="text" 
			placeholder="Tu nombre" 
			title="Tu nombre"
			className="ContactForm__input" 
			style={inputStyles} />
		<input 
			type="email" 
			placeholder="Tu correo" 
			className="ContactForm__input" 
			title="Tu correo"
			style={inputStyles} />
		<textarea 
			placeholder="¿Qué me quieres decir?"
			title="¿Qué me quieres decir?" 
			rows="4"
			style={inputStyles} />
		<section>
			<input 
				type="submit" 
				title="Enviar"
				value="Enviar" 
				style={submitStyles}
				className="ContactForm__submit" />
		</section>
	</form>
)


export default ContactForm;


