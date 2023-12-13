import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useNavigate } from 'react-router-dom'


const CatNew = ({ createKitty }) => {
    
    const navigate = useNavigate()

    const [newKitty, setNewKitty] = useState({
        name: "",
        age: "",
        enjoys: "",
        image: ""
    })

    const handleChange = (e) => {
        setNewKitty({...newKitty, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        createKitty(newKitty)
        navigate("/catindex")
    }


  return (

    <Form >
      <FormGroup>
        <Label for="name" > Name </Label>
        <Input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          value={newKitty.name}
        />
      </FormGroup>

      <FormGroup>
        <Label for="age"> Age </Label>
        <Input
          id="age"
          name="age"
          type="text"
          onChange={handleChange}
          value={newKitty.age}
        />
      </FormGroup>

      <FormGroup>
        <Label for="enjoys"> Enjoys </Label>
        <Input
          id="enjoys"
          name="enjoys"
          type="text"
          onChange={handleChange}
          value={newKitty.enjoys}
        />
      </FormGroup>

      <FormGroup>
        <Label for="image"> Image </Label>
        <Input
          id="image"
          name="image"
          type="text"
          onChange={handleChange}
          value={newKitty.image}
        />
      </FormGroup>

      <Button onClick={handleSubmit}> Submit </Button>
    </Form>
    
  );
};

export default CatNew;
