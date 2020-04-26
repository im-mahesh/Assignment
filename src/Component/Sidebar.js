import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Icon, Image, Menu, Segment, Sidebar, Input, Dropdown, Header, Divider, List, Label } from 'semantic-ui-react';
import AssignmentHome from './Assingment/Home';
import Home from './Home'

export default class Sidebars extends Component {
  state = { menu: 'home' }
  handleMenu = menu => {
    this.setState({ menu: menu });
  }
  render() {
    const { menu } = this.state;
    return (
      <Router>
        <div>
          <Menu secondary>
            <Image src='Canyon.png' style={{ width: '12%' }} />
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
          <Sidebar.Pushable style={{ minHeight: '100vh' }}>
            <Sidebar as={Menu} animation='push' width='thin' visible={true} inverted vertical style={{ width: '14%' }}>
              <div >
                <Link to='/'>
                  <Menu.Item onClick={this.handleMenu} id='home' className={menu === 'home' ? 'active' : null} name='home' text='sddd'>
                    <Icon name='home' />
                    Home
                </Menu.Item>
                </Link>
                <Link to='/assignment' onClick={() => this.handleMenu('assignment')}>
                  <Menu.Item className={menu === 'assignment' ? 'active' : null} name='pencil alternate'>
                    <Icon name='pencil alternate' />
                    Assignment
                </Menu.Item>
                </Link>
                <Link to='/course'>
                  <Menu.Item onClick={this.handleMenu} id='course' className={menu === 'course' ? 'active' : null} name='camera'>
                    <Icon name='camera' />
                    Course Applications
                  </Menu.Item>
                </Link>
                <Link to='/payment'>
                  <Menu.Item onClick={this.handleMenu} id='payment' className={menu === 'payment' ? 'active' : null} name='camera'>
                    <Icon name='camera' />
                    Payment Batch
                  </Menu.Item>
                </Link>
                <Link to='/receipt'>
                  <Menu.Item onClick={this.handleMenu} id='receipt' className={menu === 'receipt' ? 'active' : null} name='camera'>
                    <Icon name='camera' />
                    Receipts and Refunds
                  </Menu.Item>
                </Link>
                <Link to='/accounts'>
                  <Menu.Item onClick={this.handleMenu} id='accounts' className={menu === 'accounts' ? 'active' : null} name='camera'>
                    <Icon name='camera' />
                    Student Accounts
                  </Menu.Item>
                </Link>
                <Link to='/grade'>
                  <Menu.Item onClick={this.handleMenu} id='grade' className={menu === 'grade' ? 'active' : null} name='camera'>
                    <Icon name='camera' />
                    Course Grades
                  </Menu.Item>
                </Link>
              </div>
            </Sidebar>
            <Sidebar.Pusher>
              <Segment raised style={{ minHeight: '100vh', marginLeft: '7%' }}>
                <Switch>
                  <Route exact path="/"><Home /></Route>
                  <Route path="/assignment"><AssignmentHome /></Route>
                </Switch>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </Router>
    )
  }
}
