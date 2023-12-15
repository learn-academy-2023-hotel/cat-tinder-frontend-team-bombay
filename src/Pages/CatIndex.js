import React from 'react'
import { Card, CardBody, CardText, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'


const CatIndex = ({ cats }) => {
    return (
      <>
      <div className='index-background'>
      <div className='home-buttons'>
      <NavLink to={"/catnew"} className="nav-link-new"><Button color="success">Create Your Pawfile!</Button></NavLink>
      <NavLink to={"/"} className="nav-link"><Button color="success">Home</Button></NavLink>
      </div>
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
                    <img className='cat-pics'
                      alt={`${cat.name}`} src={cat.image}
                    />
                    <CardBody className="card-background">
                      <CardTitle className="name-section" tag="h2">{cat.name}
                      </CardTitle>
                      <CardSubtitle
                        className="age-section"
                        tag="h5"
                      >
                        Age: {cat.age}
                      </CardSubtitle>
                      <br/>
                      <CardText className='status-section'>
                        Today's thoughts: {cat.enjoys}
                      </CardText>
                      <NavLink to={`/catshow/${cat.id}`} className="nav-link">
                        <Button 
                          color="light" outline>
                          More about {cat.name}
                        </Button>
                      </NavLink>
                    </CardBody>
                  </Card>
                )
            })}
        </main>
        </div>
        </>
    )
}

export default CatIndex