import React from 'react';

class SearchBar extends React.Component {
  state = { keyword: "" };

  onInputChange = (event) => {
    this.setState({keyword: event.target.value});
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.keyword)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="search-field" >
            <label>Search Videos: </label>
            <input
              className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
              type="text"
              onChange={this.onInputChange}
              value={this.state.keyword}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;