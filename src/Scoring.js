import {Button, Col, Container, Form, Modal, Row, Table} from "react-bootstrap";
import {useState} from "react";

export default function Scoring({ user }) {

    const [showCompleteModal, setCompleteModal] = useState(false);
    const [showHoleModal, setHoleModal] = useState(false)

    const openCompleteModal = () => setCompleteModal(true);
    const closeCompleteModal = () => setCompleteModal(false);
    const openHoleModal = () => setHoleModal(true);
    const closeHoleModal = () => setHoleModal(false);

    const [player1score, setPlayer1Score] = useState([0,0,0,0,0,0,0,0,0]);
    const [player2score, setPlayer2Score] = useState([0,0,0,0,0,0,0,0,0]);

    const [player1wins, setPlayer1Wins] = useState(0);
    const [player2wins, setPlayer2Wins] = useState(0);

    const submitScore = (hole, p1, p2) => {
        const p1Score = [...player1score];
        p1Score[hole-1] = p1;
        setPlayer1Score(p1Score);
        const p2Score = [...player2score];
        p2Score[hole-1] = p2;
        setPlayer2Score(p2Score);

        if (p1 < p2) {
            const p1Wins = player1wins + 1;
            setPlayer1Wins(p1Wins);
        }
        if (p2 < p1) {
            const p2Wins = player2wins + 1;
            setPlayer2Wins(p2Wins);
        }
    }

    return (
        <Container fluid>
            <Row>
                <Col />
                <Col xs={12} lg={8}>
                    <h1 className="text-center p-5">Scoring</h1>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>9</th>
                            <th>Holes Won</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Sam Feifer</td>
                            {player1score.map((score) =>
                                <th>{score !== 0 ? score : ""}</th>
                            )}
                            <th>{player1wins}</th>
                        </tr>
                        <tr>
                            <td>Joe Napoli</td>
                            {player2score.map((score) =>
                                <th>{score !== 0 ? score : ""}</th>
                            )}
                            <th>{player2wins}</th>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col/>
            </Row>
            <Row>
                <Col />
                <Col xs={12} lg={8}>
                    <Button
                        className="m-1"
                        variant="outline-primary"
                        onClick={openHoleModal}
                    >
                        Score Hole
                    </Button>
                    <ScoreHoleModal show={showHoleModal} onHide={closeHoleModal} onSubmit={submitScore} />
                    <Button
                        className="m-1"
                        variant="outline-success"
                        onClick={openCompleteModal}
                    >
                        Mark Match as Completed
                    </Button>
                    <Modal show={showCompleteModal} onHide={closeCompleteModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Confirm Match Completion</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Match completion is not reversible. Are you sure?
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={closeCompleteModal}>
                                Cancel
                            </Button>
                            <Button
                                data-testid="confirm-completion"
                                variant="success"
                                onClick={closeCompleteModal}
                            >
                                Confirm Completion
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
                <Col />
            </Row>
        </Container>
    );
}

const ScoreHoleModal = ({show, onHide, onSubmit}) => {
    const [holeNumber, setHoleNumber] = useState("");
    const [player1Score, setPlayer1Score] = useState("");
    const [player2Score, setPlayer2Score] = useState("");

    const submitScores = () => {
        if(holeNumber > 0 && holeNumber < 10) {
            onSubmit(holeNumber, player1Score, player2Score);
        }
        setHoleNumber("");
        setPlayer1Score("");
        setPlayer2Score("");
        onHide();
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Score Hole</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="holenumber">
                        <Form.Label>Hole Number</Form.Label>
                        <Form.Control type="number" placeholder="Enter hole" value={holeNumber} onChange={(e) => setHoleNumber(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="golfer1score">
                        <Form.Label>Golfer 1</Form.Label>
                        <Form.Control type="number" placeholder="Enter score" value={player1Score} onChange={(e) => setPlayer1Score(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="golfer2score">
                        <Form.Label>Golfer 2</Form.Label>
                        <Form.Control type="number" placeholder="Enter score" value={player2Score} onChange={(e) => setPlayer2Score(e.target.value)} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={submitScores}>
                    Submit Scores
                </Button>
            </Modal.Footer>
        </Modal>
    )
}