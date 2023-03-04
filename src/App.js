import { useEffect, useState } from 'react';

import './App.css';
import SpellCard from './Components/Card';

class Spell {
  constructor(name, casting_time, ritual, range, comps, duration, concentration, desc, higherLevel, level, school) {
    this.name = name;
    this.casting_time = casting_time;
    this.ritual = ritual;
    this.range = range;
    this.comps = comps;
    this.duration = duration;
    this.concentration = concentration;
    this.desc = desc;
    this.higherLevel = higherLevel;
    this.level = level;
    this.school = school;
  }
}

class SpellsRepository {
  constructor() {
    this.spells = [];
  }

  newSpell(name, casting_time, ritual, range, comps, duration, concentration, desc, higherLevel, level, school) {
    let s = new Spell(name, casting_time, ritual, range, comps, duration, concentration, desc, higherLevel, level, school)
    this.spells.push(s);
  }
  getSpells() {
    return this.spells;
  }

  getNumberOfSpells() {
    return this.spells.length;
  }

}

const repo = new SpellsRepository();
function App() {
  const [x, setX] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const API_URL = "https://www.dnd5eapi.co/api/spells"
  const API_URL2 = "https://www.dnd5eapi.co"


  const indData = async (iresult) => {
    const spell_data = await fetch(`${API_URL2 + iresult.url}`)
    const ispell = await spell_data.json();
    repo.newSpell(ispell.name, ispell.casting_time, ispell.ritual, ispell.range, ispell.comps, ispell.duration, ispell.concentration, ispell.desc, ispell.higherLevel, ispell.level, ispell.school)
    setX(repo.spells);
    return ispell;
  }

  useEffect(() => {
  setTimeout(() => {
    

      
  
    const data = async () => {
      const response = await fetch(`${API_URL + "/?level=9"}`)
      const data = await response.json();
      const results = await data['results'];
      return results;

    }
    const load = async (result) => {
      await result.map((spell) => (
        indData(spell)
      ))
    }
    data().then(result => {
      load(result).then(setLoading(false));
      setX(repo.getSpells());
      console.log(repo);


      })
  }, 4000);
    }, []);



  if (isLoading) {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}>Loading the data {console.log("loading state")}</div>
    );
  }
  console.log(x);
  return (
      <div className="container">

        {
          x.map((spell) => (
            <SpellCard key={spell.name} name={spell.name}/>
          ))
        }
      </div>
    );
  } 
export default App;




