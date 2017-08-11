import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';
import { getAll } from '../data/pets';
const ALL_PETS = getAll();

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
    this.getPets()
  }

  adoptPet = (petId) => {
    this.setState({...this.state,
      adoptedPets: [...this.state.adoptedPets, petId]
    })
  }

  onChangeType = (type) => {
    this.setState({...this.state,
      filters: {type: type}
    })
  }

  getPets = () => {
    let petPath = (this.state.filters.type === "all") ? '/api/pets': `/api/pets?type=${this.state.filters.type}`
    fetch(`${petPath}`).then((response)=>{
      return response.json();}).then((data)=>{
        this.setState({
          pets: data
        })
      })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType={this.onChangeType} onFindPetsClick={this.getPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
