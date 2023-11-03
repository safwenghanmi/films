import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

const AddMovie = ({add}) => {
    const [show,setShow]=useState(false);
    const handelClose=()=>setShow(false);
    const handelShow=()=>setShow(true);

    const[title,settitle]=useState("")
    const[description,setdescription]=useState("")
    const[rate,setrate]=useState("")
    const[posteUrl,setposteUrl]=useState("")

    const handeltitle=(e)=>{settitle(e.target.value)}
    const handeldescription=(e)=>{setdescription(e.target.value)}
    const handelrate=(e)=>{setrate(e.target.value)}
    const handelposteUrl=(e)=>{setposteUrl(e.target.value)}

    const handelmovie=(e)=>{
        let newmovie={title,description,rate,posteUrl}
        add(newmovie)
        setShow(false)
    }
  return (
    <div>
          

          <Button variant="primary" onClick={handelShow}  >
            Add Movie
        </Button>

        <Modal show={show} onHide={handelClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label>Movie Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e)=>handeltitle(e)}/>
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter description" value={description} onChange={(e)=>handeldescription(e)} />
                <Form.Label>Rate</Form.Label>
                <Form.Control type="number" placeholder="Enter rate" value={rate} onChange={(e)=>handelrate(e)} />
                <Form.Label>PosterUrl</Form.Label>
                <Form.Control type="url" placeholder="Enter potser url" value={posteUrl} onChange={(e)=>handelposteUrl(e)} />
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handelClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handelmovie}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default AddMovie