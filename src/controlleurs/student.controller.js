import studentModel from '../models/student.model.js';

export default {
    getStudents: () => studentModel.getStudents(),
    createStudent: ({value}) => {
        const { num_student } = value
        const regexMatch = /^[A-Z]\d{5}$/;
        const isValid = regexMatch.test(num_student)

        if(!isValid) throw new Error("Le format du/des données saisi(s) sont incorrect")
        
        studentModel.createStudent(value)
    },
    updateStudent: ({id, value}) => {
        const { num_student } = value
        const regexMatch = /^[A-Z]\d{5}$/;
        const isValid = regexMatch.test(num_student)

        if(!isValid) throw new Error("Le format du/des données saisi(s) sont incorrect")
        studentModel.updateStudent(id, value)
    },
    deleteStudent: ({id}) => studentModel.deleteStudent(id)
}