import React from 'react';

class ProjectsPage extends React.Component {
    render() {
        return(
            <div>
                <h1>strona o projektach</h1>
                <ul>
                    <li>
                        <a href="http://www.login.adammendak.pl"target={"_new"}>Autoryzacja JWT</a>
                        <p>front w reakcie strzelajacy do serwera autentykacyjnego napisanego w Javie. Przyklad autentykacji
                            za pomoca Json Web Tockenow.
                        </p>
                    </li>
                    <li>
                        <a href="http://www.memo.adammendak.pl" target={"_new"}>Todo Serwis w nodzie napisany</a>
                        <p><a href="https://github.com/adammendak/MEAN_MemoService" target={"_new"}>link do repozytorium</a></p>
                    </li>
                    <li>
                        <a href="https://productmanagement-adammendak.herokuapp.com" target={"_new"}>Sklep internetowy</a>
                        <p>in progress</p>
                        <p>na razie repozytorium produktow, moze sklep internetowy z tego bedzie, napisany w spring boocie i angularze</p>
                        <p>strona jest postawiona na heroku, po otwarciu linka trzeba poczekac kolo 30 sekund as aplikacje wstanie</p>
                    </li>
                </ul>

            </div>
        )
    }
}

export default ProjectsPage;