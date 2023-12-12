import React from 'react'
import { Card, CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap'
import { NavLink } from 'react-router-dom'


const CatIndex = ({ cats }) => {
    return (
        <main className='cat-index-cards'>
            {cats?.map((cat, index) => {
                return (
                    <Card
                    body
                    style={{
                      width: '18rem'
                    }}
                    key={index}
                  >
                    <img
                      alt={`${cat.name}`} src={cat.image}
                    />
                    <CardBody>
                      <CardTitle className="name-section" tag="h2">{cat.name}
                      </CardTitle>
                      <CardSubtitle
                        className="age-section"
                        tag="h5"
                      >
                        Age: {cat.age}
                      </CardSubtitle>
                      <CardText>
                        Think I'm cute? Click below!
                      </CardText>
                      <NavLink to={`/catshow/${cat.id}`} className="nav-link">
                        More about {cat.name}
                      </NavLink>
                    </CardBody>
                  </Card>
                )
            })}
        </main>
    )
}

export default CatIndex