import React from 'react';

class ProjectsPage extends React.Component {
    render() {
        return(
            <div>
                <h1>strona o projektach</h1>
                <ul>
                    <li>
                        <a href="http://www.memo.adammendak.pl" target={"_new"}>Todo Serwis w nodzie napisany</a>
                        <p><a href="https://github.com/adammendak/MEAN_MemoService" target={"_new"}>link do repozytorium</a></p>
                    </li>
                </ul>

            </div>
        )
    }
}

export default ProjectsPage;