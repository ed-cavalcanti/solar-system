import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const cards = Planets.map((planet, i) => {
      const { name, image } = planet;
      return <PlanetCard key={ i } planetName={ name } planetImage={ image } />;
    });

    return (
      <div data-testid="solar-system" className="planetMainContainer">
        <div><Title headline="Planetas" /></div>
        <div className="planetsContainer">{ cards }</div>
      </div>
    );
  }
}

export default SolarSystem;
