import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {noOfLetters: 0, searchInput: ''}

  onChangeSearchInput = event => {
    // const {noOfLetters, searchInput} = this.state
    this.setState(prevState => ({
      noOfLetters: prevState.noOfLetters + 1,
      searchInput: event.target.value,
    }))
  }

  render() {
    const {noOfLetters, searchInput} = this.state
    return (
      <div className="bg-container">
        <div className="left-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="myInput" className="description">
            Enter the phrase
          </label>
          <input
            onChange={this.onChangeSearchInput}
            type="text"
            value={searchInput}
            className="search"
            id="myInput"
          />
          <p className="no-of-letters">No.of letters: {noOfLetters}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}
export default LettersCalculator
