import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion, url} = suggestionDetails

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }
  const clickedUrl = () => {
    window.location.replace(url)
  }

  return (
    <li className="suggestion-item" onClick={clickedUrl}>
      <p className="suggestion-text">{suggestion}</p>
      <button
        type="button"
        className="arrow-button"
        onClick={onClickSuggestion}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
