var Student = require('./student');

var Classroom = function (profName, rmNum) {
    this.students = [],
    this.classSize = this.students.length,
    this.profName = profName,
    this.rmNum = rmNum,

    this.addStudents = function (name, favSbj, GPA) {
        this.students.push(new Student(name, favSbj, GPA));
    };
};

module.exports = Classroom;