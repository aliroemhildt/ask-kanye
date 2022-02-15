import React from 'react';
import Quote from './Quote';
import './App.css';
import kanyeImg from './assets/kanye.png';

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      quote: ''
    }
  }

  getQuote = () => {
    fetch('https://api.kanye.rest/')
      .then(response => response.json())
      .then(data => this.setState({quote: data.quote}))
  }

  render() {
    return (
      <main>
        <button
          onClick={() => this.getQuote()}
        >
          Ask Kanye
        </button>
        <div className="main-container">
          <div className="img-container">
            <img
              src={kanyeImg}
              alt='kanye face'
            />
          </div>
          <div className="quote-container">
            {this.state.quote &&
              <Quote quote={this.state.quote} />
            }
          </div>
        </div>
      </main>
    )

  }
}

export default App;
