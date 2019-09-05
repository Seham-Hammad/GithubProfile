import React from 'react';

import User from './components/User';
import Repos from './components/Repos';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import SpinnerPage from "./components/SpinnerPage";
import './App.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const style = {
  Paper: {padding:20, marginTop:10, marginBottom:10}
}

class App extends React.Component{
state = {
      name: undefined,
      id: undefined,
      repo: undefined,
      organization: undefined,
      avatar_url: undefined,
      loading:false

    
  }

  getUsers = async(e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const api_call = await fetch(`http://api.github.com/users/${name}`);
    const data = await api_call.json();
    console.log(data);
    if (name) {
      this.setState({
        name: data.name,
        id: data.id,
        repo: data.public_repos,
        organization: data.company,
        bio: data.bio,
        loading: true
      })
      setTimeout(() => {
        this.setState({ loading: false });
      }, 2000)
    }
     
  }
  
  render() { 
    const { loading } = this.state;
       
    return (
        
      <React.Fragment>
       
        
        < Header />
        
        {loading && <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>}
        {loading && <span>loading data</span>}
        
         
          <Form className="Form" getUsers={this.getUsers} />
          <Grid container sm>
            <Grid item sm>
              <Paper style={style.Paper}>
                <User
                  name={this.state.name}
                  id={this.state.id}
                  organization={this.state.organization}
                  bio={this.state.bio}
                />
              </Paper>
            
                
            </Grid>
            <Grid item sm>
              <Paper style={style.Paper}>
                <Repos repo={this.state.repo} />
              </Paper>
            </Grid>
          </Grid>
   
        </React.Fragment>
      );
    }
  }

export default App;


/**
* npm install -g create-react-app
create-react-app my-app
cd my-app
git init
heroku create -b https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "react-create-app on Heroku"
git push heroku master
heroku open*/