import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useParams, useNavigate, NavLink } from 'react-router-dom'

const CatEdit = ({ cats, updateCat }) => {
    const navigate = useNavigate()

    const { id } = useParams()
    let currentCat = cats?.find((cat) => cat.id === +id)
    console.log("Current cat: ", currentCat)
    const [editCat, setEditCat] = useState({
        name: currentCat?.name,
        age: currentCat?.age,
        enjoys: currentCat?.enjoys,
        image: currentCat?.image,
        id: currentCat?.id
    })
    const handleChange = (e) => {
        setEditCat({...editCat, [e.target.name]: e.target.value})
    }
    const handleSubmit = () => {
        updateCat(editCat, currentCat.id)
        navigate("/catindex")
    }
    return (
        <>
        <div className="edit-background">
        <div className='home-buttons'>
        <NavLink to={"/"} className="nav-link"><Button color="success">Home</Button></NavLink>
        </div>
        <Form>
            <FormGroup>
                <div className="edit-label">
                <Label for="name">Name</Label>
                </div> 
                <div className='edit-input'>
                <Input 
                    id="name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={editCat.name}/>
                 </div>
            </FormGroup>
            <FormGroup>
                <div className="edit-label">
                <Label for="age">Age</Label>
                </div>
                <div className='edit-input'> 
                <Input
                    id="age"
                    type="text" 
                    name="age" 
                    onChange={handleChange} 
                    value={editCat.age}/>
                </div>     
            </FormGroup>
            <FormGroup>
                <div className="edit-label"> 
                <Label for="enjoys">Enjoys</Label>
                </div>
                <div className='edit-input'> 
                <Input 
                    id="enjoys"
                    type="text" 
                    name="enjoys" 
                    onChange={handleChange} 
                    value={editCat.enjoys}/>
                </div> 
            </FormGroup>
            <FormGroup>
                <div className="edit-label"> 
                <Label for="image">Image</Label>
                </div>
                <div className='edit-input'> 
                <Input 
                    id="image"
                    type="text" 
                    name="image" 
                    onChange={handleChange}
                    value={editCat.image}/>
                </div> 
            </FormGroup>
            <div className="home-buttons">
            <Button color="success"onClick={handleSubmit} name="submit">
                Submit Updated Cat
            </Button>
            <NavLink to={"/catindex"} className="nav-link-index"><Button color="success">Back to Your Felines!</Button></NavLink>
           </div>
            <br/>
        </Form>
        </div>
        </>
    )
}

export default CatEdit