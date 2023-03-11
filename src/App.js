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
        <div>Level<br />
          1
          <input type="radio" id='1' name="level" value="1" />
          2
          <input type="radio" id='2' name="level" value="2" />
          3
          <input type="radio" id='3' name="level" value="3" />
          4
          <input type="radio" id='4' name="level" value="4" />
          5
          <input type="radio" id='5' name="level" value="5" />
          6
          <input type="radio" id='6' name="level" value="6" />
          7
          <input type="radio" id='7' name="level" value="7" />
          8
          <input type="radio" id='8' name="level" value="8" />
          9
          <input type="radio" id='9' name="level" value="9" />
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




