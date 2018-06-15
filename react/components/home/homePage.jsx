import React from 'react';
import {Link} from 'react-router-dom'

class HomePage extends React.Component {
    render() {
        return(
            <div>
                <h1>Witaj!</h1>
                <p>jak widac strona jest jeszcze w powijakach i bede tutaj wrzucal swoje projekty i informacje o mnie</p>
                <p>strona jest napisana na reakcie i nodzie link do repozytorium <a href="https://github.com/adammendak/myWebsite">tutaj</a></p>
                <p>strone tez wrzucilem i bede rozwijal rownoczesnie w chmurze na Heroku <a href ="https://adammendak.herokuapp.com/">tutaj</a></p>
            </div>
        )
    }
}

export default HomePage;
