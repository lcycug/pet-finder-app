import React, { Component } from 'react'
import pf from 'petfinder-client'
import Pet from './Pet';

const petfinder = pf({
  key: "ab0d1ccb1fb1add9508a07aaec64bf0b",
  secret: "66d642b3668e919e02900880ff518614"
})



export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pets: []
    }
  }

  componentDidMount() {
    petfinder.pet.find({output: "full", location: "Seattle, WA"})
      .then(data => {
        let pets = data.petfinder.pets && data.petfinder.pets.pet ? 
          [...data.petfinder.pets.pet] : [];
        this.setState({pets});
      })
  }

  render() {
    return (
      <div className="container">
        {/* <pre><code>{JSON.stringify(this.state.pets)}</code></pre> */}
        {this.state.pets.map(pet => <Pet {...pet}/>)}
      </div>
    )
  }
}
