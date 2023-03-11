import React from 'react';
 
 const DoneSpellCard = (props) => {
  console.log(props.spell.name);
  return(  
    <div className="card-container">
      <div className="card-background">
        <div className="card-frame">
          <div className="frame-type-line">
              <h1 className="name" key="{props.spell.name}">{props.spell.name.toUpperCase()}</h1>
          </div>
          <div className="spell-properties">
            <table className="SpellPropertiesTop">
              <thead>
                <tr>
                  <th>Casting Time</th>
                  <th>Range</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td> <span>{props.spell.casting_time} <span>{props.spell.ritual ? <p className="ritual">R</p> : ""} </span></span></td>
                  <td>{props.spell.range}</td>
                </tr>
              </tbody>
            </table>
            <table className="SpellPropertiesBottom">
              <thead>
                <tr>
                  <th>Components</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{props.spell.components}</td>
                  <td>{props.spell.duration} <span>{props.spell.concentration ? <p className="concentration">C</p> : ""} </span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="description">
            <p> {props.spell.desc}</p><br />
            <p className="border"></p>
            <p> {props.spell.higher_level}</p>
          </div>
          <div className="frame-header">
            <h1 className="type">{props.spell.level.toUpperCase()} {props.spell.school.toUpperCase()}</h1>
          </div>
        </div></div></div>)
  };

export default DoneSpellCard;