import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  // const [filter, setFilter] = useState('');
  constructor() {
    super();

    this.state = {
      planetSearch: '',
      filteredPlanets: planets,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (value) {
    this.setState({
      planetSearch: value,
    });
    let planetSearch = this.state.filteredPlanets.filter(planet => planet.name.includes(value))
    this.setState({
      filteredPlanets: planetSearch,
    });
    if (value == '' || planetSearch == '') {
      this.setState({
        filteredPlanets: planets,
      });
    }
  }
  
  render() {
    const { planetSearch, filteredPlanets } = this.state
    return (
      <div data-testid="solar-system" id="cards">
        <Title headline="Planetas" />
        <div id="planetas">
          { filteredPlanets.map((planet) => (
            <PlanetCard
              key={ `${planet.name}` }
              planetName={ `${planet.name}` }
              planetImage={ `${planet.image}` }
            />)) 
          }
        </div>
          <input
            nome="search"
            type="text"
            placeholder="Filtrar..."
            onChange={ e => this.handleChange(e.target.value) }
            value={planetSearch}
          />
      </div>
    );
  }
}

export default SolarSystem;
