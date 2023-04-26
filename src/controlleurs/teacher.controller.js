import TeacherModel from '../models/teacher.model.js';

export default {
    getTeachers: () => TeacherModel.getTeachers(),
    createTeacher: (value) => TeacherModel.createTeacher(value),
    updateTeacher: (id, value) => TeacherModel.updateTeacher(id, value),
    deleteTeacher: (id) => TeacherModel.deleteTeacher(id)
}