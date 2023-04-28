import gradesModel from '../models/grades.model.js';

export default {
    getGrades: () => gradesModel.getGrades(),
    createGrades: (value) => gradesModel.createGrades(value),
    updateGrades: (id, value) => gradesModel.updateGrades(id, value),
    deleteGrades: (id) => gradesModel.deleteGrades(id)
}