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
    }

    handleChange(event) {

      const firstname = "";
      const lastname = "";
      const classe = "";

      var inS = Students.insert({
           firstname,
           lastname,
           classe,
           createdAt: new Date(),
      });

      Students.remove(inS);
  }

    renderStudents() {
         var studentC = this.props.students.filter(function (lib) {
            return lib.classe == selectClasse.value;
         });
         return studentC.map((student) => (
            <Student key={student._id} student={student} />
         ));
    }

    render() {
        return (
            <div className="container">
                <header>
                       <form className="new-student" onSubmit={this.handleSubmit.bind(this)} >
                       <h1>Liste des étudiants
                       <select
                           ref="classeS"
                           placeholder="Classe"
                           id="selectClasse"
                           required
                           onChange={this.handleChange.bind(this)}
                       >
                          <option value="Web1">Web1</option>
                          <option value="Web2">Web2</option>
                          <option value="Web3">Web3</option>
                       </select></h1>
                        <input
                            type="text"
                            ref="firstnameS"
                            placeholder="Prénom"
                            required
                        />
                        <input
                            type="text"
                            ref="lastnameS"
                            placeholder="Nom"
                            required
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
