import { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

function Search() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = '/cocktails/' + name;
    }

    return (
        <form onSubmit={handleSubmit}>
            <Row>
                <Col xs="auto" >
                    <Form.Group>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col xs="auto" >
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Col>
            </Row>
        </form>
    )
}

export default Search