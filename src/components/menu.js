import React from "react";
import { Link } from "gatsby"

const MenuStyles = {
	display: `flex`,
	justifyContent: `space-around`
}

const MenuItemStyles = {
	listStyleType: `none`
}

const Menu = (props) => {
	
	return(
		<nav className="Menu" style={MenuStyles} >
			{props.items.map((item) => {
				if(item !== "Inicio") {
					let slug = item.replace(" ", "-")
					slug = slug.toLowerCase()
					return(
						<li style={MenuItemStyles} title={item} >	
							<Link to={`/${slug}`}>{item}</Link>
						</li>
					)
				}
				else {
					return (
						<li style={MenuItemStyles} title={item}>
								<Link to="/">{item}</Link>						
						</li>
					)
				}
			})}
		</nav>
	)
}

export default Menu;