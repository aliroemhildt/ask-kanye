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
        <div className="button-container">
          <button
            onClick={() => this.getQuote()}
          >
            Ask Kanye
          </button>
        </div>
        <div className="quote-container">
          {this.state.quote &&
            <Quote quote={this.state.quote} />
          }
        </div>
        <div className="img-container">
          <img
            src={kanyeImg}
            alt='kanye face'
          />
        </div>
      </main>
    )

  }
}

export default App;
