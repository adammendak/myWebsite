import React from 'react';
import {Row} from 'reactstrap';
import MyPargraph from './myParagraph.jsx';
import MyPhoto from './myPhoto.jsx';

class HomePage extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <Row>
                    <MyPhoto/>
                    <MyPargraph />
                </Row>
            </div>
        )
    }
}




export default HomePage;
