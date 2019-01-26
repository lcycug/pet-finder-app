import React, { Component } from 'react'
import pf from 'petfinder-client'
import Pet from './Pet';
import AwesomeComponent from './AwesomeComponent';

const petfinder = pf({
  key: "ab0d1ccb1fb1add9508a07aaec64bf0b",
  secret: "66d642b3668e919e02900880ff518614"
})



export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pets: [],
      loading: true
    }
  }

  componentDidMount() {
    petfinder.pet.find({output: "full", location: "Seattle, WA"})
      .then(data => {
        let pets = data.petfinder.pets && data.petfinder.pets.pet ? 
          [...data.petfinder.pets.pet] : [];
        this.setState({pets, loading: false});
      })
  }

  render() {
    return (
      <div className="container">
        {this.setState.loading === true ? 
          <AwesomeComponent/> :
          this.state.pets.map(pet => <Pet {...pet}/>)
        }
      </div>
    )
  }
}
