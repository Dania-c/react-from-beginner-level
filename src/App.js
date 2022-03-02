import React from 'react'
import AddStudent from './AddStudent';
import './App.css';
import Students from './Students';
import { v4 as uuidv4 } from 'uuid';
export default class App extends React.Component {
  state = {
    Students: [
      { id: uuidv4(), name: 'stud1' },
      { id: uuidv4(), name: 'stud2' },
      { id: uuidv4(), name: 'stud3' },
      { id: uuidv4(), name: 'stud4' }
    ]
  }
  StudentIsAdded = (s) => {
    this.setState({
      Students: [...this.state.Students, { id: uuidv4(), name: s }]
    })
    alert('A new student has been added' + s)

  }
  render() {
    return (
      <>
        <div style={{ backgroundColor: 'red', padding: '1rem' }}>
          <AddStudent StudentIsAdded={this.StudentIsAdded} />
          <Students AllStudents={this.state.Students} />
        </div>
      </>
    );
  }
}


