import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from './components/employee_list';

const App = () =>{
  return (
    <div>
      <EmployeeList />
    </div>
  );
};

//after meteor loads render my app
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
