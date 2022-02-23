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

  rotateImage = () => {
    const element = document.querySelector('img');
    let newElement = element.cloneNode(true);
    newElement.classList.add('img-rotate');
    element.parentNode.replaceChild(newElement, element);
  }

  getQuote = () => {
    fetch('https://api.kanye.rest/')
      .then(response => response.json())
      .then(data => {
        if (this.state.quote !== data) {
          this.setState({ quote: data.quote }, this.rotateImage);
        } else {
          this.getQuote();
        }
    })
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
            className='img'
            src={kanyeImg}
            alt='kanye face'
          />
        </div>
      </main>
    )

  }
}

export default App;
