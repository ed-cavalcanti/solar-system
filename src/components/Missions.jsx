import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    const cards = missions.map((mission, i) => {
      const { name: n, year: y, country: c, destination: d } = mission;
      return (
        <MissionCard key={ i } name={ n } year={ y } country={ c } destination={ d } />
      );
    });
    return (
      <div data-testid="missions" className="missions">
        <div><Title headline="Missões" /></div>
        <div className="missions-container">{ cards }</div>
      </div>
    );
  }
}

export default Missions;
