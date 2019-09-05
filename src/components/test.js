
import React from 'react';
import User from './components/User';
import Repos from './components/Repos';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const style = {
  Paper: {padding:20, marginTop:10, marginBottom:10}
}
    
class App extends React.Component {
  state = {
    name: undefined,
    id: undefined,
    repo: undefined,
    organization: undefined,
    avatar_url: undefined,

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
          repo:data.public_repos,
          organization:data.company,
          bio: data.bio
      })
    } else {
      this.setState({
        user: {
          name: undefined,
          id: undefined,
          repo:undefined,
          organization:undefined,
          bio: undefined
        }
      })
    }
  }
  
  render() { 
//const { user } = this.state;
    return ( 

    <>
        < Header />
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
              <Repos repo={this.state.repo}/>
            </Paper>
            </Grid>
        </Grid>
        
            
        
       
       
      </>
     );
  }
}

      

export default App;