import React from 'react';
// import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './SolarSistem.css';

class SolarSystem extends React.Component {
  render() {
    return (
    // <Title headline="Planetas" />
      <section className="hero-section">
        <div className="hero">
          <div className="container">
            <div data-testid="solar-system" className="carousel">
              {planets.map((planet) => (<PlanetCard
                key={ planet.name }
                planetName={ planet.name }
                planetImage={ planet.image }
              />
              ))}
            </div>
          </div>
        </div>
      </section>

    );
  }
}

export default SolarSystem;
