import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import HomePage from "./home/homePage.jsx";
import AboutPage from "./about/aboutPage.jsx";
import ProjectsPage from "./projects/projectsPage.jsx";
import {Button, Container, Jumbotron} from 'reactstrap';
import Navigation from "./navigation.jsx";
import NotFound from "./errorPage.jsx";

class App extends React.Component {
    render() {
        return (
            <Container>
                <BrowserRouter>
                    <div>
                        <Navigation/>
                        <Jumbotron>
                            <Switch>
                                <Route exact path='/' component={HomePage} />
                                <Route path='/about' component={AboutPage} />
                                <Route path="/projects" component={ProjectsPage} />
                            </Switch>
                        </Jumbotron>
                    </div>
                </BrowserRouter>

            </Container>
        )
    }
}

export default App;