import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { Button } from "reactstrap";

const CatShow = ({ cats, deleteCat }) => {
    const { id } = useParams()
    let currentCat = cats?.find((cat) => cat.id === +id)


    return (
       <>
        {currentCat && (
            <>
            <div className='show-background'>
                <div className='cat-name-style'>
                <h1 className='name-section'>Say hello to {currentCat.name}</h1>
                </div>
                <div className='pic-center'>
                <img className='cat-pic' alt={`${currentCat.name}'s Profile`} src={currentCat.image} />
                </div>
                <br/>
                <div className="status-style">  
                <h3 className="status-section">{`${currentCat.name} enjoys ${currentCat.enjoys}!`}</h3>
                </div>
                <div className='home-buttons'>
                <NavLink to={`/catedit/${currentCat.id}`} className="nav-link-edit"><Button color="success" outline>
                Edit Pawfile
                </Button>  
                </NavLink>
                <NavLink to="/catindex" className="nav-link-index"><Button color="success" outline onClick={ () => deleteCat(currentCat.id) }>Delete Pawfile</Button></NavLink>
                <NavLink to={"/catindex"} className="nav-link-all"><Button color="success" outline>Back to Your Felines!</Button></NavLink>
                <NavLink to={"/"} className="nav-link-home"><Button color="success" outline>Home</Button></NavLink>
                </div>
            </div>
            </>
        )}
       </>     
    )
}

export default CatShow