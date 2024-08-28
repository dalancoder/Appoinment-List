import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const DrModal = ({handleClose, show, drName,handleAddApp}) => {
  

    const [patName, setPatName] = useState("");
    const [date, setDate]= useState("");

    const handleSubmit =(e)=> {
        e.preventDefault()
        const newAppointment = {
            id: new Date().getTime(),
            patient: patName,
            day: date,
            consulted: false,
            doctor: drName

        }
        handleAddApp(newAppointment)
       
console.log("Mustafa");
    }


   const handleName =(e)=>{
    setPatName(e.target.value)
   }
   const handleDate =(e)=>{
    setDate(e.target.value)
   }
   
  
  return (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Appointment for {drName} </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Patient Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
           required
           onChange={handleName}
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Day&Time</Form.Label>
          <Form.Control type='datetime-local'
          onChange={handleDate}
          required
           rows={3} />
        </Form.Group>
         <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button type="submit" variant="primary" onClick={handleClose}>
        Submit
      </Button>
    </Modal.Footer>
      </Form>
    </Modal.Body>
   
  </Modal>
  )
}

export default DrModal