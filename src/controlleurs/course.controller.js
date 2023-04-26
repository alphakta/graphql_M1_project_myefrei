import courseModel from '../models/course.model.js';

export default {
    getCourses: () => courseModel.getCourses(),
    createCourse: (value) => courseModel.createCourse(value),
    updateCourse: (id, value) => courseModel.updateCourse(id, value),
    deleteCourse: (id) => courseModel.deleteCourse(id)
}