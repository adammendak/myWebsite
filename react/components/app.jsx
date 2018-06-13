import React from 'react';
import {
    HashRouter,
    BrowserRouter,
    Route,
    Switch,
    NavLink
} from 'react-router-dom';
import HomePage from "./home/homePage.jsx";
import AboutPage from "./about/aboutPage.jsx";
import ProjectsPage from "./projects/projectsPage.jsx";
import {Button, Container, Jumbotron, Row} from 'reactstrap';
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
                <Button color="danger">test bootstrap button</Button>  -- to jest bardzo wazna rzecz wbrew pozorom
            </Container>
        )
    }
}

export default App;