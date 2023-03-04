import React from 'react';
 
 class DoneSpellCard extends React.Component {
  
  render() {  
    console.log(this.props);
    return(
    <div className="card-container">
      <div className="card-background">
        <div className="card-frame">
          <div className="frame-type-line">
              <h1 className="name">{this.props.name}</h1>
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
                    <td> <span>{this.props.casting_time} <span>{this.props.ritual ? <p className="ritual">R</p> : ""} </span></span></td>
                  <td>{this.props.range}</td>
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
                  <td>{this.props.comps}</td>
                  <td>{this.props.duration} <span>{this.props.concentration ? <p className="concentration">C</p> : ""} </span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="description">
            <p> {this.props.desc}</p><br />
            <p> {this.props.higherLevel}</p>
          </div>
          <div className="frame-header">
            <h1 className="type">LEVEL {this.props.level} {this.props.school}</h1>
          </div>
        </div></div></div>)
  };
};

export default DoneSpellCard;