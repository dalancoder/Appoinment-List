import {Col, Row, Container} from 'react-bootstrap';
import { TiDelete } from "react-icons/ti";

const AppointmentList = ({appointments, handleDelete, handleDoubleClick,handleAddApp
}) => {
    console.log(appointments);
  return (
   <Container>
   <h3>Appointment List</h3>
   {
    appointments.map(({id, patient, day, consulted, doctor})=>(
        <div key={id} className={consulted? "consultedTrue" : "consultedFalse"}>
                  <Row onDoubleClick={()=>handleDoubleClick(id)}>
        <Col>
            <h3>{patient}</h3>
            <h4>{doctor}</h4>
        </Col>
        <Col>
            <h4>{new Date(day).toLocaleDateString("tr")}</h4>
            <h6>{new Date(day).toLocaleTimeString("tr")}</h6>
        </Col>
        <Col>
        <TiDelete
        type="button"
        onClick={()=>handleDelete(id)}
        className="text-danger fs-1"
        />
        </Col>
    </Row>
      
        </div>
    ))
   }
    
   </Container>
  )
}

export default AppointmentList