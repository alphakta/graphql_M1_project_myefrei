import gradesModel from '../models/grades.model.js';
import studentModel from '../models/student.model.js';

const validateGrades = (input) => {
    if (!input.note || input.note === '') {
      throw new Error('note est requis');
    }

    if(!input.id_courses || input.id_courses === '') {
        throw new Error('id_courses est requis');
    }

    if(!input.id_student || input.id_student === '') {
        throw new Error('id_student est requis');
    }

    if(!input.id_teacher || input.id_teacher === '') {
        throw new Error('id_teacher est requis');
    }

    if(input.note && input.note < 0 || input.note > 20){
        throw new Error(`${note} doit être compris entre 0 et 20`)
    }
}

export default {
    getGrades: () => gradesModel.getGrades(),
    getGradesById: ({id}) => gradesModel.getGradesById(id),
    createGrades: ({value}) => { 
        validateGrades(value)
        gradesModel.createGrades(value)
    },
    updateGrades: async ({id, value}) => {
        const grades = await gradesModel.getGradesById(id)
        if (!grades) { throw new Error(`La note avec l'id ${id} n'existe pas`) }

        const updatedGrades = { ...grades, ...value }
        validateGrades(updatedGrades)
        gradesModel.updateGrades(id, value)
    },
    deleteGrades: async ({id}) => {
        const grades = await gradesModel.getGradesById(id)
        if (!grades) { throw new Error(`La note avec l'id ${id} n'existe pas`) }
        gradesModel.deleteGrades(id)
    }
}