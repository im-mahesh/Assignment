import React, { Component } from 'react';
import { Segment, Form, Header, Divider, Button, Message } from 'semantic-ui-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { connect } from 'react-redux';
import { addassignment } from '../../Action/assignmentAction';

class Add extends Component {
  state = { load: false, submit: false, error: false, duedate: new Date() };

  updateValue = (e) => this.setState({ [e.target.name]: e.target.value })

  selectHandle = (e, { name, value }) => this.setState({ [name]: value })

  handleChange = date => {
    this.setState({
      duedate: date
    });
  };

  handleSubmit = (e) => {
    // console.log(this.state);
    this.setState({ load: true });
    const { course, duedate, exam, programme, unit, rego, year, weight, marks, desc } = this.state;
    if (course && duedate && exam && programme && unit && rego && year && weight && marks && desc) {
      axios.post('http://167.172.242.107:8282/ps/assesments',
        {
          course: course,
          dueDate: duedate,
          examcode: exam,
          note: desc,
          program: programme,
          semester: rego,
          totalmarks: marks,
          units: unit,
          weight: weight
        }
      ).then((res) => {
        if (res.status === 200) {
          // console.log(res.data)
          this.props.addassignment(res.data);
          this.setState({ load: false, submit: true });
          setTimeout(() => {
            this.setState({ submit: false });
          }, 4000);
        }
      });
    } else {
      this.setState({ error: true, load: false });
      setTimeout(() => {
        this.setState({ error: false })
      }, 4000);
    }

  }

  render() {
    // console.log(this.state)
    const programme = [
      { text: 'Certificate Courses', value: 'Certificate Courses' },
      { text: 'CIB-Certificate in Business', value: 'CIB-Certificate in Business' },
    ];

    const course = [
      { text: 'CHRM - Cerificate in Human Resourse Management', value: 'CHRM - Cerificate in Human Resourse Management' },
      { text: 'CIA - Certificate in Accounting', value: 'CIA - Certificate in Accounting' },
    ];

    const unit = [
      { text: '1003 - Cerificate in Business', value: '1003 - Cerificate in Business' },
      { text: '1002 - Business Communication', value: '1002 - Business Communication' },
      { text: '1012 - Business Accounting', value: '1012 - Business Accounting' },
    ];

    const rego = [
      { text: 'Semester 1', value: 'Semester 1' },
      { text: 'Semester 2', value: 'Semester 2' },
    ];

    return (
      <Segment raised style={{ width: '92%' }}>
        <Header as='h2'>Assignments Setup
          <Header.Subheader>CHECK FOR ASSIGNMENTS SETUP</Header.Subheader>
        </Header><br></br>
        {this.state.error ?
          <Message color='red'>Fill All Fields</Message>
          : null
        }
        {this.state.submit ?
          <Message color='teal'>Record Created Successfully...!</Message>
          : null
        }
        <Divider />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Select
              fluid
              options={programme}
              label='Select Programme'
              name='programme'
              placeholder='Select Programme'
              onChange={this.selectHandle}
            />
            <Form.Select
              fluid
              options={course}
              label='Course List'
              placeholder='Course List'
              name='course'
              onChange={this.selectHandle}
            />
            <Form.Select
              fluid
              options={unit}
              label='Units List'
              placeholder='Units List'
              name='unit'
              onChange={this.selectHandle}
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Select
              fluid
              options={rego}
              label='Rego Period'
              placeholder='Rego Period'
              name='rego'
              onChange={this.selectHandle}
            />
            <Form.Input fluid label='Year' name='year' onChange={this.updateValue} placeholder='Year' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input fluid name='exam' onChange={this.updateValue} label='Exam Code' placeholder='Exam Code' />
            <Form.Input fluid name='weight' onChange={this.updateValue} label='Weight' placeholder='Weight' />
            <Form.Input fluid name='marks' onChange={this.updateValue} label='Total Marks' placeholder='Total Marks' />
            <div className="field"><label>Due Date</label><DatePicker label='Due Date' name='duedate' selected={this.state.duedate} onSelect={this.selectHandle} onChange={this.handleChange} /></div>
          </Form.Group>
          <Form.TextArea label='Description' name='desc' onChange={this.updateValue} placeholder='Description' />
          {this.state.load ?
            <Button loading primary>
              Loading
              </Button>
            :
            <Form.Field control={Button} primary>Submit</Form.Field>
          }
        </Form>
      </Segment>
    )
  }
}

// const mapStateToProps=state=>({
//   list:state.assignmentList.list,
// })

const mapDispatchToProps = dispatch => ({
  addassignment: (list) => dispatch(addassignment(list))
});

export default connect(null, mapDispatchToProps)(Add);