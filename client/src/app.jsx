import React from "react";

import { connect } from "react-redux";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import moment from "moment";

import { getSavingsFile } from "./store/selectors.js";
import { parseSavingsFile } from "./store/thunks.js";

// load date value test
//console.log(moment("9/3/2021", "MM/DD/YYYY").format())


const App = (props) => {
    const { parseSavingsFile } = props;

    const [fileSet, setFileSet] = React.useState(false);
    const inputEl = React.useRef(null);

    const fileClick = () => document.getElementById('file-input').click();
    const fileUploadChange = () => setFileSet(true);

    const acceptFileExt = () => {
        const ext = [
            ".csv",
            ".xls",
            ".xlsx",
        ];

        return ext.join(", ");
    }

    React.useEffect(() => {
        //console.log('file set use effect', inputEl.current)
        parseSavingsFile(inputEl.current.files[0]);

        return () => {
            // Clean up loaded files
            inputEl.value = "";
        }
    }, [fileSet, parseSavingsFile]);

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
                            accept={acceptFileExt()}
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
