import React from "react";
import { Row, Col } from 'react-bootstrap';
import Player from './player';
import playersData from './players';

const PlayerList = () => {
    return (
      <Row>
        {playersData.map((player) => (
          <Col lg={3} md={4} sm={6} xs={12} key={player.id}>
            <Player
             Messi={player.name}
              Forward={player.position}
              Inter Miami={player.team}
              Argentinian={player.nationality}
               Dix ={player.numero}
              image={player.image} />
             <Player
              Lamine Camara={player.name}
              Mildfielder={player.position}
              Fc Metz={player.team}
              Senegalese={player.nationality}
               Vingt-cinq ={player.numero}
              image={player.image} />
              <Player
              Rashford={player.name}
              Forward={player.position}
              Manchester={player.team}
              England={player.nationality}
               Dix ={player.numero}
              image={player.image}  />
              
              <Player
              
              Pape Gueye={player.name}
              Mildfielder={player.position}
              Olympique de Marseille={player.team}
              Senegalese={player.nationality}
            Vingt-quatre ={player.numero}
              image={player.image} />





          </Col>
        ))}
      </Row>
    );
  };
  
  export default PlayerList;
  