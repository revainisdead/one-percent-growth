import React from "react";

import { connect } from "react-redux";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { getSavingsFile } from "./store/selectors.js";
import { parseSavingsFile } from "./store/dispatches.js";

import { useMountEffect } from "./helpers.js";


const App = (props) => {
    const [fileData, setFileData] = React.useState(null);
    const [fileSet, setFileSet] = React.useState(false);
    const inputEl = React.useRef(null);

    const fileClick = () => document.getElementById('file-input').click();

    useMountEffect(() => {
        // TODO: Manage multiple file uploads

        //const openFileElem = document.getElementById('file-input')
        //let openFile = null;
        //if (openFileElem !== null && openFileElem.files.length > 0) {
        //    openFile = openFileElem.files[0]
        //}

        //setFileData(results.data);

        //if (inputEl !== null) {
        //    console.log('mount effect')
        //    props.parseSavingsFile(inputEl.current.files);
        //}
    }, []);

    React.useEffect(() => {
        console.log('file set use effect', inputEl.current)
        props.parseSavingsFile(inputEl.current.files[0]);
    }, [fileSet]);

    console.log('local state test', fileData);

    return (
        <div className="app">
            <Container fluid className="m-4">
                <Row>
                    <Col>
                        <Button onClick={fileClick}>Open</Button>
                        <input
                            id="file-input"
                            ref={inputEl}
                            onChange={() => setFileSet(true)}
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
