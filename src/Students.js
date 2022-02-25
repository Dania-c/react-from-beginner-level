import React, { Component } from 'react';

export default class Students extends Component {


    sketchStudents = () => {
        return (
            <>
                {this.props.AllStudents.map((s) => { return (<li key={s.id}>{s.name}</li>) })}
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
