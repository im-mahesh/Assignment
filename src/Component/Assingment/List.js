import React, { Component } from 'react'
import axios from 'axios';
import moment from 'moment';
import { Segment, Icon, Table, Header, Divider, Button, Pagination, Modal, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addassignment } from '../../Action/assignmentAction'

class List extends Component {
  state = { data: null, deleteModal: false, id: null, deleted: false, delLoad: null }
  componentDidMount() {
    axios.get('http://167.172.242.107:8282/ps/assesments').then((res) => {
      if (res.status === 200) {
        this.props.addassignment(res.data);
        this.setState({ data: res.data });
      }
    });
  }

  deleteHandle = e => {
    this.setState({ deleteModal: true, id: e.target.id });
  }

  deleteRecord = e => {
    e.preventDefault();
    this.setState({ deleteModal: false, delLoad: true })
    axios.delete('http://167.172.242.107:8282/ps/assesments/' + this.state.id).then((res) => {
      if (res.status === 200) {
        this.props.addassignment(res.data);
        this.setState({ deleted: true, delLoad: false });
        setTimeout(() => {
          this.setState({ deleted: false });
        }, 4000);
      }
    });
  }

  render() {
    // console.log(this.props.list)
    // const data = this.state.data;
    let { list } = this.props;
    return (
      <div>
        <Segment raised style={{ width: '92%' }}>
          <Header as='h3'>Assignment List</Header>
          <Divider />
          {this.state.deleted ?
            <Message color='red'>Record Deleted...!</Message>
            : null
          }
          <Table singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>No</Table.HeaderCell>
                <Table.HeaderCell>Assignment</Table.HeaderCell>
                <Table.HeaderCell>Weight</Table.HeaderCell>
                <Table.HeaderCell>Marks</Table.HeaderCell>
                <Table.HeaderCell>Due Date</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {list ? list.map((value, i) => {
                return (<Table.Row key={i}>
                  <Table.Cell>{i + 1}</Table.Cell>
                  <Table.Cell>{value.course}</Table.Cell>
                  <Table.Cell>{value.weight}</Table.Cell>
                  <Table.Cell>{value.totalmarks}</Table.Cell>
                  <Table.Cell>{moment(value.dueDate).format('DD/MM/YYYY')}</Table.Cell>
                  <Table.Cell>{this.state.id === value.assId ? <Button loading color='red' size='mini'>Loading</Button> : <Button color='red' size='mini' onClick={this.deleteHandle} id={value.assId}>Delete</Button>} </Table.Cell>
                </Table.Row>)
              }) : null}
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='6'>
                  <Pagination

                    boundaryRange={0}
                    defaultActivePage={1}
                    ellipsisItem={null}
                    firstItem={null}
                    lastItem={null}
                    siblingRange={1}
                    totalPages={10}
                  />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Segment>
        <Modal open={this.state.deleteModal} basic size='small'>
          <Header icon='archive' content='Are you sure to Delete?' />
          <Modal.Actions>
            <Button basic color='green' onClick={() => this.setState({ deleteModal: false, id: null })} inverted>
              <Icon name='remove' /> No
            </Button>
            <Button color='red' onClick={this.deleteRecord} inverted>
              <Icon name='checkmark' /> Yes
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  list: state.assignmentList.list,
});

const mapDispatchToProps = (dispatch) => ({
  addassignment: (list) => dispatch(addassignment(list))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);