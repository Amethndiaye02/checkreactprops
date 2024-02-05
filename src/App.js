// Player.js
import React from 'react';
import { Card, backgroundColor} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Player = ({ id, name, position, team, nationality, numero, image }) => {
  return (
    
    
    <Card style={{ width: '18rem', height: '105vh', color:'black',backgroundColor: 'blue', left: '400px',width: '500px' }}>
        <Card.Img variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title>Carte</Card.Title>
          <Card.Text>
          <strong></strong> {id}<br />
            <strong>Joueur 1</strong> {id}<br />
            <strong>Lionel Messi</strong> {name}<br />
            <strong>Forward</strong> {position}<br />
            <strong>Inter Miami</strong> {team}<br />
            <strong>Argentinian</strong> {nationality}<br />
            <strong>10</strong> {numero}


            <strong></strong> {id}<br />
            <strong>Joueur 2</strong> {id}<br />
            <strong>Lamine Camara</strong> {name}<br />
            <strong>Mildfielder</strong> {position}<br />
            <strong>Fc Metz</strong> {team}<br />
            <strong>Senegalese</strong> {nationality}<br />
            <strong>25</strong> {numero} 

            <strong></strong> {id}<br />
            <strong>Joueur 3</strong> {id}<br />
            <strong>Rashford</strong> {name}<br />
            <strong>Forward</strong> {position}<br />
            <strong>Manchester</strong> {team}<br />
            <strong>England</strong> {nationality}<br />
            <strong>10</strong> {numero}

            <strong></strong> {id}<br />
            <strong>Joueur 4</strong> {id}<br />
            <strong>Pape Gueye</strong> {name}<br />
            <strong>Mildfielder</strong> {position}<br />
            <strong>Olympique de Marseille</strong> {team}<br />
            <strong>Senegalese</strong> {nationality}<br />
            <strong>24</strong> {numero}

            
          </Card.Text>
        </Card.Body>
      </Card>
    
  );
};

export default Player;
