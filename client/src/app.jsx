import React from "react";

import { connect } from "react-redux";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { getSavingsFile } from "./store/selectors.js";
import { parseSavingsFile } from "./store/thunks.js";


const App = (props) => {
    const [fileSet, setFileSet] = React.useState(false);
    const inputEl = React.useRef(null);

    const fileClick = () => document.getElementById('file-input').click();
    const fileUploadChange = () => setFileSet(true);

    React.useEffect(() => {
        console.log('file set use effect', inputEl.current)
        props.parseSavingsFile(inputEl.current.files[0]);
    }, [fileSet]);

    return (
        <div className="app">
            <Container fluid className="m-4">
                <Row>
                    <Col>
                        <Button onClick={fileClick}>Open</Button>
                        <input
                            id="file-input"
                            ref={inputEl}
                            onChange={fileUploadChange}
                            type="file"
                            name="name"
                            style={{"display": "none"}}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        savingsFile: getSavingsFile(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        parseSavingsFile: (files) => {
            console.log('does it get this far', files);
            dispatch(parseSavingsFile(files))
        },
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
