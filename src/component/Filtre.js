import React from 'react'
import { Form } from 'react-bootstrap'

const FiltreByRate = ({inputSearsh,setInputSearsh}) => {

 
  return (
    <div>
           <Form.Control
    type="text"
    placeholder="Enter movie title "
    className="filtrename"
    style={{width:'850px'}}
    onChange={(e) => setInputSearsh(e.target.value)}
    value={inputSearsh}
    />
    </div>
  )
}

export default FiltreByRate