import React from 'react'
import './App.css';
import Students from './Students';

export default class App extends React.Component {
  state = {
    Students: [
      { id: 1, name: 'stud1' },
      { id: 2, name: 'stud2' },
      { id: 3, name: 'stud3' },
      { id: 4, name: 'stud4' }
    ]
  }

  render() {
    return (
      <>
        <Students AllStudents={this.state.Students} />
      </>
    );
  }
}


