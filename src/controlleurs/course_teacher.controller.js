import course_teacherModel from '../models/course_teacher.model.js'

const validateCourseTeacher = (input) => {
    if (!input.id_courses || input.id_courses === '') {
        throw new Error('id_courses est requis');
    }

    if (!input.id_teacher || input.id_teacher === '') {
        throw new Error('id_teacher est requis');
    }

    if(input.id_teacher && input.id_teacher <= 0) {
        throw new Error('id_teacher ne peut pas être égal à 0 ou négatif');
    }

    if(input.id_courses && input.id_courses <= 0) {
        throw new Error('id_courses ne peut pas être égal à 0 ou négatif');
    }
}

export default {
    getCourseTeacher: () => course_teacherModel.getCourseTeacher(),
    getCourseTeacherById: ({id}) => course_teacherModel.getCourseTeacherById(id),
    createCourseTeacher: async ({value}) => {
        validateCourseTeacher(value)
        course_teacherModel.createCourseTeacher(value)
    },
    updateCourseTeacher: async ({id, value}) => {
        const courseTeacher = await course_teacherModel.getCourseTeacherById(id)
        if (!courseTeacher) { throw new Error(`La matière avec le professeur avec l'id ${id} n'existe pas`) }

        const updatedCourseTeacer = { ...courseTeacher, ...value }
        validateCourseTeacher(updatedCourseTeacer)
        course_teacherModel.updateCourseTeacher(id, value)
    },
    deleteCourseTeacher: async ({id}) => {
        const courseTeacher = await course_teacherModel.getCourseTeacherById(id)
        if (!courseTeacher) { throw new Error(`La matière avec le professeur avec l'id ${id} n'existe pas`) }
        course_teacherModel.deleteCourseTeacher(id)
    }
}