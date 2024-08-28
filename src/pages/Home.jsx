import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { doctorData } from '../helper/data';
import Doctor from '../components/Doctor';
import AppointmentList from '../components/AppointmentList';
import { appointmentData } from '../helper/data';

const Home = () => {
    const [appointments, setAppointments]=useState(appointmentData);

    //Burada AppointmentList içerisine gidecek fonksiyonları yazıyorum
    //yeni obje basacağım için onu appointments içerisine atıyorum
    const handleAddApp=(newAppointment)=>{
        setAppointments([...appointments, newAppointment])
    }
    //çift tıkla consulted ekleme fonksiyonumu yazıyorumve uniq olması sadece örtüşen id li kısmı silmesi için id parametresi geciyorum
    const handleDoubleClick =(id)=>{
        const updateList = appointments.map((item)=>item.id == id? {...item, consulted:!item.consulted}: item)
        setAppointments(updateList)

    }
    const handleDelete = (id)=>{
        const filteredList= appointments.filter((item)=>item.id !== id)
        setAppointments(filteredList)
    }

  return (
    <Container>
        <h1 className='text-center text-danger display-4 fw-normal'>CLARUS HOSPITAL</h1>
        <h3 className='text-center display-6 fw-normal' style={{color:"purple"}}>Our Doctors</h3>
        <Doctor doctorData={doctorData}
            handleAddApp={handleAddApp}
        />
        <AppointmentList
        appointments={appointments}
            handleDelete = {handleDelete}
            handleDoubleClick = {handleDoubleClick}
            handleAddApp = {handleAddApp}
        />
    </Container>
  )
}

export default Home;
