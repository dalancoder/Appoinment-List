import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DrModal from './DrModal';


const Doctor = ({doctorData,handleAddApp}) => {
    const [show, setShow] = useState(false);
    const [drName, setDrName] = useState("")

    const handleClose = () => setShow(false);
    const handleShow = (name) =>{
      setShow(true);  
      setDrName(name)
    } 

  return (
    <Container className='d-flex flex-wrap justify-content-center'>
    <Row >
 {
        doctorData.map(({img, name, id, dep})=>(

               <Col key={id} xs={12} sm={6} md={4} lg={3}>
               <div className='doctorDiv'>
                <img onClick={()=>handleShow(name)} className='doctor-img' src={img} alt="" />
               </div>
                 
        <h5>{name}</h5>
        <h6>{dep}</h6>
            </Col>
        )     
        )      
    }
      </Row>
      <DrModal
        handleClose={handleClose}
        show={show}
        drName={drName}
        handleAddApp={handleAddApp}

      />
   
    </Container>
  )
}

export default Doctor