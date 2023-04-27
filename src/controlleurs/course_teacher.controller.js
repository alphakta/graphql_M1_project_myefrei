import course_teacherModel from '../models/course_teacher.model.js'

export default {
    getCourseTeacher: () => course_teacherModel.getCourseTeacher(),
    createCourseTeacher: (value) => course_teacherModel.createCourseTeacher(value),
    updateCourseTeacher: (id, value) => course_teacherModel.updateCourseTeacher(id, value),
    deleteCourseTeacher: (id) => course_teacherModel.deleteCourseTeacher(id)
}