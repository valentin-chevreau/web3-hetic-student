import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Students } from '../api/students.js';

import Student from './Student.jsx';

class App extends Component {
    handleSubmit(event) {
        event.preventDefault();

        const firstname = ReactDOM.findDOMNode(this.refs.firstnameS).value.trim();
        const lastname = ReactDOM.findDOMNode(this.refs.lastnameS).value.trim();
        const classe = ReactDOM.findDOMNode(this.refs.classeS).value.trim();

        Students.insert({
            firstname,
            lastname,
            classe,
            createdAt: new Date(),
        });

        ReactDOM.findDOMNode(this.refs.firstnameS).value = '';
        ReactDOM.findDOMNode(this.refs.lastnameS).value = '';
        ReactDOM.findDOMNode(this.refs.classeS).value = '';
    }

    renderStudents() {
        return this.props.students.map((student) => (
            <Student key={student._id} student={student} />
        ));
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Students List</h1>

                    <form className="new-student" onSubmit={this.handleSubmit.bind(this)} >
                        <input
                            type="text"
                            ref="firstnameS"
                            placeholder="Prénom"
                        />
                        <input
                            type="text"
                            ref="lastnameS"
                            placeholder="Nom"
                        />
                        <input
                            type="text"
                            ref="classeS"
                            placeholder="Classe"
                        />
                        <input
                            type="submit"
                            ref="submit"
                            placeholder="Valider"
                        />
                    </form>
                </header>

                <ul>
                    {this.renderStudents()}
                </ul>
            </div>
        );
    }
}

App.propTypes = {
    students: PropTypes.array.isRequired,
};

export default createContainer(() => {
    return {
        students: Students.find({}, { sort: { createdAt: -1 } }).fetch(),
    };
}, App);
