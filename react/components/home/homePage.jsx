import React from 'react';
import {Row, Button} from 'reactstrap';

class HomePage extends React.Component {

    constructor(props) {
        super(props)
    }

    fetchMyCv = () => {
        console.log("dupa");
        fetch('http://localhost:3000/cv')
            .then(console.log("pobrane z reacta"));

    };

    render() {
        return(
            <div>
                <Row>
                    <div id={"myPhoto"}>
                        <img src={"./images/adamzdjecie.jpg"} alt={"moje zdjecie"}/>
                    </div>
                    <div id={"aboutMeParagraph"} className={"text-center", "ml-5"}>
                        <h1 className={"mb-3"}>Witaj na mojej stronie!</h1>
                        <p>jak widac strona jest jeszcze w powijakach i bede tutaj wrzucal swoje projekty i informacje o mnie</p>
                        <p>strona jest napisana na reakcie i nodzie link do repozytorium <a href="https://github.com/adammendak/myWebsite">tutaj</a></p>
                        <p>strone tez wrzucilem i bede rozwijal rownoczesnie w chmurze na Heroku <a href ="https://adammendak.herokuapp.com/">tutaj</a></p>
                        <Button color="info" className={"mt-2"} onClick={e => this.fetchMyCv(e)}>pobierz moje cv </Button>
                    </div>
                </Row>

            </div>
        )
    }
}

export default HomePage;
