import React, { Component } from 'react';

export default class Students extends Component {


    sketchStudents = () => {
        return (
            <>
                {
                    this.props.AllStudents.map((s) => {
                        return (
                            <li onClick={() => { this.props.getselectedStudent(s) }} key={s.id}>{s.name}
                                <button onClick={() => this.props.removeStudent(s)}>DEL</button>
                            </li>)
                    })}
            </>
        )
    }


    render() {
        console.log('Render');
        return (
            <div style={{ backgroundColor: 'yellow' }}>

                <ul>
                    {/* {this.state.Students.map((s) => { return (<li key={s.id}>{s.name}</li>) })} */}
                    {this.sketchStudents()}
                </ul>
            </div>



        )
    }
}
