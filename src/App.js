import Name from './components/Name.js'; 
import Price from "./components/Price.js"
import Description from "./components/Description.js"
import Image from './components/Image.js'; 
import React from 'react';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function App() {
  
  return (
   <div>
     <Card style={{ width: '18rem', }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Image />
      <Card.Body>
        <Card.Title><Name /></Card.Title>
        <Card.Text><Description />
        </Card.Text>
        <Button variant="primary"><Price /></Button>
      </Card.Body>
    </Card>
    

    

    </div>
  );
}

export default App;
