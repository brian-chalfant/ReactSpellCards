import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import DoneSpellCard from './Components/DoneSpellCard';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}


function App() {
  const [x, setX] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const API_URL = "https://api.open5e.com/spells/"


  const byLevel = async (param) => {
    const response = await fetch(`${API_URL + "?level_int="+param}`)
    const data = await response.json();
    const results = await data['results'];
    setX(results);
    return true;
  }



  useEffect(() => {
  setTimeout(() => {
  
    const data = async () => {
      setLoading(true);
      const response = await fetch(`${API_URL}`)
      const data = await response.json();
      const results = await data['results'];
      console.log(results);
      setX(results);
      setLoading(false);
    }
    data()
  }, 100);
    }, []);



  if (isLoading) {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}>Loading the data {console.log("loading state")}
        <input type="button" onClick={setLoading(false)}/>
      </div>
    );
  }
  console.log(x[0]);
  return (
      <div className="container">
      <ErrorBoundary>
        <div className="dashboard-header">
        <div className="dashboard">Level<br />
          <table>
            <tr>
              <td>
                <label htmlFor="any">Any</label>
              </td>
                <td>
                  <label htmlFor='0'>0</label>
                </td>
              <td>
                <label htmlFor='1'>1</label>
              </td>
              <td>
                <label htmlFor='2'>2</label>
              </td>
              <td>
                <label htmlFor='3'>3</label>
              </td>
              <td>
                <label htmlFor='4'>4</label>
              </td>
              <td>
                <label htmlFor='5'>5</label>
              </td>
              <td>
                <label htmlFor='6'>6</label>
              </td>
              <td>
                <label htmlFor='7'>7</label>
              </td>
              <td>
                <label htmlFor='8'>8</label>
              </td>
              <td>
                <label htmlFor='9'>9</label><br />
              </td>
            </tr>
            <tr>
              <td>
                  <input type="radio" id='any' name="level" value="Any" onClick={() => byLevel(1-9)} />
              </td>
                <td>
                  <input type="radio" id='0' name="level" value="0" onClick={() => byLevel(0)} />
                </td>
              <td>
                  <input type="radio" id='1' name="level" value="1" onClick={() => byLevel(1)} />
              </td>
              <td>
                  <input type="radio" id='2' name="level" value="2" onClick={() => byLevel(2)} />
              </td>
              <td>
                  <input type="radio" id='3' name="level" value="3" onClick={() => byLevel(3)} />
              </td>
              <td>
                  <input type="radio" id='4' name="level" value="4" onClick={() => byLevel(4)} />
              </td>
              <td>
                  <input type="radio" id='5' name="level" value="5" onClick={() => byLevel(5)} />
              </td>
              <td>
                  <input type="radio" id='6' name="level" value="6" onClick={() => byLevel(6)} />
              </td>
              <td>
                  <input type="radio" id='7' name="level" value="7" onClick={() => byLevel(7)} />
              </td>
              <td>
                  <input type="radio" id='8' name="level" value="8" onClick={() => byLevel(8)} />
              </td>
              <td>
                  <input type="radio" id='9' name="level" value="9" onClick={() => byLevel(9)} />
              </td>
            </tr>
          </table>
        </div>
        </div>

        {
          x.map((spell) => (
            <DoneSpellCard key={spell.name} spell={spell}/>
          ))
        }
        </ErrorBoundary>
      </div>
    );
  } 
export default App;




