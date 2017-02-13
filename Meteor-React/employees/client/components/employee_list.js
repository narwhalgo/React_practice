import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employee } from '../../imports/collections/employees';
import EmployeeDetail from './employee-detail';

const PER_PAGE = 20;

class EmployeeList extends Component {
  componentWillMount() {
    this.page = 1;
  }

  handleButtonClick(){
    Meteor.subscribe('employees', PER_PAGE * (this.page + 1));
    this.page +=1;
  }


  render(){
    return (
      <div>
        <div className='employee-list'>
          {this.props.employees.map(employee =>
            <EmployeeDetail employee={employee} key={employee._id}/>
          )}
        </div>
        <button onClick={this.handleButtonClick.bind(this)}
          className='btn btn-primary'>Load More</button>
      </div>
    );
  }
};

export default createContainer(() =>{
  Meteor.subscribe('employees', PER_PAGE);

  return {employees: Employee.find({}).fetch() };

}, EmployeeList)
