import React from 'react';
import {Button} from 'reactstrap';

class MyPargraph extends React.Component {

    render() {
        return (
            <div id={"aboutMeParagraph"} className={"text-center", "ml-2"}>
                <h1 className={"mb-3"}>Witaj na mojej stronie!</h1>
                <p>jak widac strona jest jeszcze w powijakach i bede tutaj wrzucal swoje projekty i informacje o
                    mnie</p>
                <p>strona jest napisana na reakcie i nodzie link do repozytorium <a
                    href="https://github.com/adammendak/myWebsite">tutaj</a></p>
                <p>strone tez wrzucilem i bede rozwijal rownoczesnie w chmurze na Heroku <a
                    href="https://adammendak.herokuapp.com/">tutaj</a></p>
                <a href="http://www.adammendak.pl/cv" download={"CV_Adam_Mendak.pdf"}><Button color="info" className={"mt-2"}>
                    pobierz moje cv </Button></a>
            </div>
        )
    }
}

export default MyPargraph;