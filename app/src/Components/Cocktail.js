import { Form, Row, Col, Image } from 'react-bootstrap';

const DisplayCocktail = props => {
    return (
        <>
            <Row>
                <Col className="mt-4">
                    <Image src={props.image} width='100%' rounded />
                </Col>
                <Col className="mt-4">
                    <Form.Group>
                        <Form.Label>{props.name}</Form.Label>
                    </Form.Group>
                    <Form.Group className="mt-4">
                        <Form.Label>Ingredients</Form.Label>
                    </Form.Group>
                    <Form.Group className="mt-1">
                        <Form.Text>
                            {Object.entries(props.ingredients).map(([key, value], i) =>
                                <div key={key}>
                                    {value.name}: {value.measure}
                                </div>
                            )}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mt-4">
                        <Form.Label>Instructions</Form.Label>
                    </Form.Group>
                    <Form.Group className="mt-1">
                        <Form.Text>
                            {props.instructions}
                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>
        </>
    )
}

export default DisplayCocktail