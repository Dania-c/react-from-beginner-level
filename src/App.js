import React from 'react'
import AddStudent from './AddStudent';
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
  StudentIsAdded = (s) => {
    this.setState({
      Students: [...this.state.Students, { id: 555, name: s }]
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


