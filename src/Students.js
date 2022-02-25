import React, { Component } from 'react';

export default class Students extends Component {
    state = {
        name: 'Rony',
        email: 'r.rizk@hotmail.com',
        students: []
    }


    AddStudent = () => {
        // setState is asynchronus
        this.setState({ name: 'Abdm' }, () => { alert(this.state.name) });// callback function, to assure the the state is updated
    }
    AddStudentWithParam = (x) => {
        // setState is asynchronus
        this.setState({ name: x }, () => { alert(this.state.name) });// callback function, to assure the the state is updated
    }

    render() {
        console.log('Render');
        return (
            <div>

                <span>{this.state.name}</span><br />
                <span>{this.state.email}</span><br />
                {/* <button onClick={() => { this.AddStudent() }}>Add a Student</button> */}
                <button onClick={this.AddStudent}>Add a Student</button>
                <button onClick={() => { this.AddStudentWithParam(Date().toString()) }}>see date</button>

                <ul>
                    <li>st1</li>
                    <li>st2</li>
                    <li>st3</li>
                </ul>
            </div>



        )
    }
}
