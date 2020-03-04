import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Icon, Image, Menu, Segment, Sidebar, Input, Dropdown, Header, Divider, List, Label } from 'semantic-ui-react';
import AssignmentHome from './Component/Assingment/Home';
import Home from './Component/Home'

class App extends Component {
  // state = {
  //   collapsed: false,
  // };

  // onCollapse = collapsed => {
  //   console.log(collapsed);
  //   this.setState({ collapsed });
  // };
  render() {
    return (
      <Router>
        <div>
          <Menu secondary>
            <Image src='Canyon.png' style={{ width: '11%' }} />
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item>
              <Dropdown item text='Ravi'>
                <Dropdown.Menu>
                  <Header as='h2'><b>Welcome</b></Header>
                  <Divider />
                  <Dropdown.Item>My Profile</Dropdown.Item>
                  <Divider />
                  <Dropdown.Item>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          </Menu>
          <Sidebar.Pushable as={Segment} style={{ minHeight: '100vh', display: 'flex', flexFlow: 'column nowrap' }}>
            <Sidebar as={Menu} animation='push' width='thin' visible={true} icon='labeled' vertical>
              <Link to='/'>
                <Menu.Item name='home' text='sdd'>
                  <Icon name='home' />
                  {/* Home */}
                </Menu.Item>
              </Link>
              <Link to='/assignment'><Menu.Item name='gamepad'>
                <Icon name='gamepad' />
                Assignment
        </Menu.Item></Link>
              <Menu.Item name='camera'>
                <Icon name='camera' />
                Channels
        </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
              <Segment raised style={{ paddingRight: '5%', overflowY: 'scroll' }}>
                <Switch>
                  <Route exact path="/"><Home /></Route>
                  <Route path="/assignment"><AssignmentHome /></Route>
                  {/* <Route path="/register_1"><Register1 /></Route>
                  <Route path="/register_2"><Register2 /></Route>
                  <Route path="/register_3"><Register3 /></Route> */}
                </Switch>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </Router>
    );
  }
}

export default App;
