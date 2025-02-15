import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"


const MenuCard = ({ name, _id }) => {
    return (
        <Col lg={{ span: 3 }} md={{ span: 6 }}>
            <article className='CoasterCard mb-3'>
                <Card>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <div className="d-grid">
                        </div>
                    </Card.Body>
                    <Link to={`/${_id}`} className="btn btn-dark btn-sm">See details</Link>
                </Card>
            </article>
        </Col>
    )
}

export default MenuCard