import './Pages.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
        <header className="App-header">

    
            <Form className='w-25'>
                <Row>
                    <Col>
                        <Form.Group className="mb-2" controlId="formGroupEmail">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="name"/>
                        </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-2" controlId="formGroupPassword">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-2" controlId="formGroupEmail">
                    <Form.Label>Assunto</Form.Label>
                    <Form.Control type="name"/>
                </Form.Group>
                <Form.Group className="mb-2" controlId="formGroupPassword">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control className='h-25' type="text" />
                </Form.Group>
                <Button variant="dark" className='w-75 mt-5' type="submit">
                    Enviar
                </Button>
            </Form>


        </header>
    </div>
  );
}

export default App;
