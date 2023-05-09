import courseModel from '../models/course.model.js';

const validateCourse = (input) => {
    if (!input.module || input.module === '') {
        throw new Error('module est requis');
    }

    if (!input.ue || input.ue === '') {
        throw new Error('ue est requis');
    }

    if (!input.coef || input.coef === '') {
        throw new Error('coef est requis');
    }

    if(input.coef && input.coef < 0 || input.coef > 10){
        throw new Error(`${coef} doit être compris entre 0 et 10`)
    }
}

export default {
    getCourses: () => courseModel.getCourses(),
    getCourseById: ({ id }) => courseModel.getCourseById(id),
    createCourse: ({ value }) => {
        validateCourse(value)
        courseModel.createCourse(value)
    },
    updateCourse: async ({ id, value }) => {
        const course = await courseModel.getCourseById(id)
        if (!course) { throw new Error(`La matière avec l'id ${id} n'existe pas`) }

        const updatedCourse = { ...course, ...value }
        validateGrades(updatedCourse)
        courseModel.updateCourse(id, value)
    },
    deleteCourse: async ({ id }) => {
        const course = await courseModel.getCourseById(id)
        if (!course) { throw new Error(`La matière avec l'id ${id} n'existe pas`) }
        courseModel.deleteCourse(id)
    }
}