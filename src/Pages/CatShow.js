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
                <h1>Say hello to {currentCat.name}</h1>
                <img alt={`${currentCat.name}'s Profile`} src={currentCat.image} />
                <h3>{`${currentCat.name} enjoys ${currentCat.enjoys}!`}</h3>
                <NavLink to={`/catedit/${currentCat.id}`} classname="nav-link">
                    Edit Cat Profile
                </NavLink>
                <NavLink to="/catindex" className="nav-link"><Button onClick={ () => deleteCat(currentCat.id) }>Delete Pawfile</Button></NavLink>
            </>
        )}
       </>     
    )
}

export default CatShow