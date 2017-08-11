import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  allPetsAreEqual = () => {
    return this.props.pets.map((pet)=>{
      return <Pet pet={pet} isAdopted={this.isAdopted(pet)} onAdoptPet={this.props.onAdoptPet}/>
    })
  }

  isAdopted = (checkPet) => {
    return this.props.adoptedPets.includes(checkPet.id)
  }

  render() {
    return (
      <div className="ui cards">
        {this.allPetsAreEqual()}
      </div>
    );
  }
}

export default PetBrowser;
