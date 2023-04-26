import express from 'express'
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema.js';
import userController from './controlleurs/user.controller.js'
import studentController from './controlleurs/student.controller.js'
import courseController from './controlleurs/course.controller.js';
import teacherController from './controlleurs/teacher.controller.js';

const root = {
  // USER
  getUsers: () => userController.getUsers(),
  createUser: (value) => userController.createUser(value),
  updateUser: (id, value) => userController.updateUser(id, value),
  deleteUser: (id) => userController.deleteUser(id),

  // STUDENT
  getStudents: () => studentController.getStudents(),
  createStudent: (value) => studentController.createStudent(value),
  updateStudent: (id, value) => studentController.updateStudent(id, value),
  deleteStudent: (id) => studentController.deleteStudent(id),

  // COURSE
  getCourses: () => courseController.getCourses(),
  createCourse: (value) => courseController.createCourse(value),
  updateCourse: (id, value) => courseController.updateCourse(id, value),
  deleteCourse: (id) => courseController.deleteCourse(id),

  // TEACHER
  getTeachers: () => teacherController.getTeachers(),
  createTeacher: (value) => teacherController.createTeacher(value),
  updateTeacher: (id, value) => teacherController.updateTeacher(id, value),
  deleteTeacher: (id) => teacherController.deleteTeacher(id),
  // GRADE
}

const app = express()
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
)

app.listen(4000, () => {
  console.log("Running a GraphQL API server at http://localhost:4000/graphql")
})
