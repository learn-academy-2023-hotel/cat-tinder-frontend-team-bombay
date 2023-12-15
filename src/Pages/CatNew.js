import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useNavigate, NavLink } from 'react-router-dom'


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
    <>
        <div className="edit-background">
        <div className='home-buttons'>
        <br/><br/>
        <NavLink to={"/"} className="nav-link"><Button color="success">Home</Button></NavLink>
        <NavLink to={"/catindex"} className="nav-link-index"><Button color="success">Check Out Other Felines!</Button></NavLink>
        </div>
    <Form >
      <FormGroup>
      <div className="edit-label">
        <Label for="name" > Name </Label>
      </div>
      <div className='edit-input'> 
        <Input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          value={newKitty.name}
        />
        </div>
      </FormGroup>

      <FormGroup>
      <div className="edit-label">
        <Label for="age"> Age </Label>
      </div>
      <div className='edit-input'> 
        <Input
          id="age"
          name="age"
          type="text"
          onChange={handleChange}
          value={newKitty.age}
        />
        </div>
      </FormGroup>

      <FormGroup>
      <div className="edit-label">
        <Label for="enjoys"> Enjoys </Label>
      </div>
      <div className='edit-input'> 
        <Input
          id="enjoys"
          name="enjoys"
          type="text"
          onChange={handleChange}
          value={newKitty.enjoys}
        />
        </div>
      </FormGroup>

      <FormGroup>
      <div className="edit-label">
        <Label for="image"> Image </Label>
      </div>
      <div className='edit-input'> 
        <Input
          id="image"
          name="image"
          type="text"
          onChange={handleChange}
          value={newKitty.image}
        />
      </div>
      </FormGroup>
      <div className="home-buttons">
      <Button color="success" onClick={handleSubmit}> Submit </Button>
    </div>
    <br/>
    </Form>
    </div>
    </>
  );
};

export default CatNew;
