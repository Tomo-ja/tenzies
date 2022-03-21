

export default function Block(props){
	return(
		<div 
			id={props.id}
			className="block" 
			onClick={props.keepNumber}
			style={{"backgroundColor": `${props.held ? "#59E391" : "#fff"}`}}
			>
				{props.number}
		</div>
	)
}

