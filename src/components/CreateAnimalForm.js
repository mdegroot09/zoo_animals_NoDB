import React, {Component} from 'react'
import { networkInterfaces } from 'os';

export default class createAnimalForm extends Component {
  constructor() {
    super()

    this.state = {
      species: '',
      quantity: 0,
      imageUrl: ''
    }
  }

  handleChange = e => {
    let {value, name} = e.target
    this.setState({
      [name]: value
    })
  }

  handleClick = () => {
    let newAnimal = this.state
    this.props.createAnimal(newAnimal)
  }

  render(){
    return(
      <div style={{border: '1px solid black', margin: 20}}>
        <input 
          onChange={this.handleChange}
          name='species' 
          type='text' 
          placeholder="species"
          />
        <input 
          onChange={this.handleChange}
          name='imageUrl' 
          type='text' 
          placeholder="imarge url"
          />
        <input 
          onChange={this.handleChange}
          name='quantity' 
          type='number' 
          placeholder="quantity"
        />
        <button onClick={this.handleClick}>create animal</button>
      </div>
    )
  }
}