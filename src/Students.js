import React, { Component } from 'react';

export default class Students extends Component {

    state = {
        Students: [
            { id: 1, name: 'stud1' },
            { id: 2, name: 'stud2' },
            { id: 3, name: 'stud3' },
            { id: 4, name: 'stud4' }
        ]
    }

    sketchStudents = () => {
        return (
            <>
                {this.state.Students.map((s) => { return (<li key={s.id}>{s.name}</li>) })}
            </>
        )
    }


    render() {
        console.log('Render');
        return (
            <div>

                <ul>
                    {/* {this.state.Students.map((s) => { return (<li key={s.id}>{s.name}</li>) })} */}
                    {this.sketchStudents()}
                </ul>
            </div>



        )
    }
}
