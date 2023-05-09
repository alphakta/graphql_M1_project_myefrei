import teacherModel from '../models/teacher.model.js';

const validateTeacher = (input) => {
    const numStudentRegex = /^\d{8}$/
    if (!input.id_user || input.id_user === '') {
      throw new Error('id_user est requis');
    }
}

export default {
    getTeachers: () => teacherModel.getTeachers(),
    getTeacherById: ({id}) => teacherModel.getTeacherById(id),
    createTeacher: ({value}) => { 
        validateTeacher(value)
        teacherModel.createTeacher(value)
    },
    updateTeacher: async ({id, value}) => {
        const teacher = await teacherModel.getTeacherById(id)
        if (!teacher) { throw new Error(`Le professeur avec l'id ${id} n'existe pas`) }

        const updatedTeacher = { ...student, ...value }
        validateTeacher(updatedTeacher)
        teacherModel.updateTeacher(id, value)    
    },
    deleteTeacher: async ({id}) => {
        const teacher = await teacherModel.getTeacherById(id)
        if (!teacher) { throw new Error(`Le professeur avec l'id ${id} n'existe pas`) }
        teacherModel.deleteTeacher(id)
    }
}