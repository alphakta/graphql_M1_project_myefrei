import studentModel from '../models/student.model.js';

const validateStudent = (input) => {
    const numStudentRegex = /^\d{8}$/
    if (!input.num_student || input.num_student === '') {
      throw new Error('num_student est requis');
    }

    if(!input.id_user || input.id_user == '') {
        throw new Error('id_user est requis');
    }

    if(!numStudentRegex.test(input.num_student)){
        throw new Error(`Le format du numéro étudiant est incorrect "${input.num_student}"`)
    }
}

export default {
    getStudents: () => studentModel.getStudents(),
    createStudent: ({value}) => {
        validateStudent(value)
        studentModel.createStudent(value)
    },
    getStudentById: ({id}) => studentModel.getStudentById(id),
    updateStudent: async ({id, value}) => {
        const student = await studentModel.getStudentById(id)
        if (!student) { throw new Error(`L'étudiant avec l'id ${id} n'existe pas`) }

        const updatedStudent = { ...student, ...value }
        validateStudent(updatedStudent)
        studentModel.updateStudent(id, value)
    },
    deleteStudent: async ({id}) => {
        const student = await studentModel.getStudentById(id)
        if (!student) { throw new Error(`L'étudiant avec l'id ${id} n'existe pas`) }
        studentModel.deleteStudent(id)
    }
}