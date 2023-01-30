import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './Missions.css';

class Missions extends React.Component {
  state = {
    modal: false,
    missionName: '',
    missionYear: '',
    missionCountry: '',
    missonDestination: '',
    missionImage: '',
    missionText: '',
    scrollPosition: 0,
  };

  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState({
        scrollPosition: window.scrollY,
      });
    });
  }

  handleModal = (mission) => {
    this.setState({
      modal: !this.state.modal,
      missionImage: mission.image,
      missionName: mission.name,
      missionYear: mission.year,
      missionCountry: mission.country,
      missonDestination: mission.destination,
      missionText: mission.text,
    });
    document.querySelector('body').style.overflow = 'hidden';
  };

  handleClose = () => {
    this.setState({
      modal: !this.state.modal,
    });
    document.querySelector('body').style.overflow = 'auto';
  };

  render() {
    const {
      modal,
      missionName,
      missionYear,
      missionCountry,
      missonDestination,
      missionImage,
      missionText,
      scrollPosition,
    } = this.state;
    return (
      <div>
        <div className="mission-title">
          <Title headline="Missões" />
          {modal && (
            <div className="modal-background" style={ { top: scrollPosition } }>
              <div className="modal-container">
                <div className="fechar" onClick={ () => this.handleClose() }>
                  <span>X</span>
                </div>
                <img className="modal-image" src={ missionImage } alt={ missionName } />
                <h1 className="modal-name">{missionName}</h1>
                <p className="modal-p">
                  <strong>Ano: </strong>
                  {missionYear}
                </p>
                <p className="modal-p">
                  <strong>País: </strong>
                  {missionCountry}
                </p>
                <p className="modal-p">
                  <strong>Destino: </strong>
                  {missonDestination}
                </p>
                <p className="modal-p">
                  <strong>Descrição: </strong>
                  {missionText}
                </p>
                <p className="modal-p">
                  fonte: wikipedia.
                </p>
              </div>
            </div>)}
        </div>
        <div data-testid="missions" className="mission-container">
          <div className="mission-box">
            {missions.map((mission) => (<MissionCard
              mission={ mission }
              key={ mission.name }
              handleModal={ this.handleModal }
            />))}
          </div>
        </div>
      </div>
    );
  }
}

export default Missions;
