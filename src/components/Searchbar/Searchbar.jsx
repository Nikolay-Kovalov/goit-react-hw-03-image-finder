
import { Component } from "react";
import { Bar, ButtonLabel, SearchForm, SearchFormButton, SearchFormField } from "./Searchbar.styled";

export class Searchbar extends Component {
  state = {
    inputValue: " ",
  }

  handleInputChange = (evt) => {
    this.setState({
      inputValue: evt.currentTarget.value
      .toLowerCase()})
  }
  
  handleSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.inputValue.trim() === '') {
      alert('Enter name')
      return;
    }
    this.props.onSubmit(this.state.inputValue)
    this.setState({ inputValue: ''})

  }

  render() {
      
        return (
    <Bar>
  <SearchForm onSubmit={this.handleSubmit}>
    <SearchFormButton type="submit" >
      <ButtonLabel>Search</ButtonLabel>
    </SearchFormButton>

    <SearchFormField
      type="text"
                autocomplete="off"
                value={this.state.inputValue}
                onChange={this.handleInputChange}
      autoFocus
      placeholder="Search images and photos"

    />
  </SearchForm>
</Bar> 
        )
    }
}