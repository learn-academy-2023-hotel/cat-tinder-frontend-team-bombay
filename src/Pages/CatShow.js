import React from 'react'
import { useParams } from 'react-router-dom'

const CatShow = ({ cats }) => {
    const { id } = useParams()
    let currentCat = cats?.find((cat) => cat.id === +id)
    
    return (
       <>
        {currentCat && (
            <>
                <h1>Say hello to {currentCat.name}</h1>
                <img alt={`${currentCat.name}'s Profile`} src={currentCat.image} />
                <h3>{`${currentCat.name} enjoys ${currentCat.enjoys}!`}</h3>
            </>
        )}
       </>     
    )
}

export default CatShow