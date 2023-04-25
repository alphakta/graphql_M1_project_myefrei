import studentModel from '../models/student.model.js';

export default {
    getStudent: () => studentModel.getStudent(),
    createStudent: (value) => studentModel.createStudent(value),
    updateStudent: (id, value) => studentModel.updateStudent(id, value),
    deleteStudent: (id) => studentModel.deleteStudent(id)
}