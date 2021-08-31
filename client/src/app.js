import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Papa from 'papaparse';


const App = () => {
    const fileClick = () => document.getElementById('file-input').click();

    // TODO: Manage multiple file uploads
    const openFileElem = document.getElementById('file-input')
    let openFile = null;
    if (openFileElem !== null && openFileElem.files.length > 0) {
        openFile = openFileElem.files[0]
    }

    if (openFile) {
        Papa.parse(openFile, {
            header: true,
            complete: function(results) {
                // set state
                console.log(results.data);
            }
        });
    }

    return (
        <div className="app">
            <Container fluid className="m-4">
                <Row>
                    <Col>
                        <Button onClick={fileClick}>Open</Button>
                        <input id="file-input" type="file" name="name" style={{"display": "none"}} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

//<header className="App-header">
//</header>

export default App;
