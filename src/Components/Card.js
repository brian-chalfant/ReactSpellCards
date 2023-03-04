// Importing combination
	import React from 'react';
import { useEffect, useState } from 'react';
import Hugs from '../Images/hug.gif'
import DoneSpellCard from './DoneSpellCard.jsx'

const SpellCard = ({ name, url }) => {
	const [spellData, setspellData] = useState([])
	const [isLoading, setLoading] = useState(true)
	
	const API_URL2 = "https://www.dnd5eapi.co"
	useEffect(() => {
		setTimeout(() => {
		load(url).then((result) => 
			setspellData(result)
		).then(setLoading(false))
		}, 500);
	}, []);
	if(isLoading){
		return(
			<div className="card-container">
				<div className="card-background">
					<div className="card-frame">
						<div className="frame-type-line">
							<h1 className="name">{name}</h1>
						</div>
							<img src={Hugs} alt="loading"></img>
					</div></div></div>


		)
	}
	{ console.log(spellData) }
  return(

		<DoneSpellCard props={spellData} />
	);

}

export default SpellCard;

const load = async(url) => {
const API_URL2 = "https://www.dnd5eapi.co"
const data = await fetch(API_URL2 + url);
const result = await data.json();
return result;


}




