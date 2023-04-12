import { Col, Container, Row } from "react-bootstrap";
import "./home.css";

export default function Home({ user }) {
    return (
        <div className="homepage">
            <Container fluid>
                <Row>
                    <Col />
                    <Col xs={10} lg={8}>
                        <Row>
                            <h1 className="text-center p-5">Welcome, Sam!</h1>
                        </Row>
                    </Col>
                    <Col />
                </Row>
            </Container>
        </div>
    );
}