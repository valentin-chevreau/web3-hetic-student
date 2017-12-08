import React, { Component, PropTypes } from 'react';

export default class Student extends Component {
    render() {
        return (
            <li>{this.props.student.firstname} {this.props.student.lastname}  -  {this.props.student.classe}</li>
        );
    }
}

Student.propTypes = {
    student: PropTypes.object.isRequired,
};
