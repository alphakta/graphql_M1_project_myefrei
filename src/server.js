// Modules
import express from 'express'
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema.js';
import { unless } from 'express-unless';

// Controlleurs
import userController from './controlleurs/user.controller.js'
import studentController from './controlleurs/student.controller.js'
import courseController from './controlleurs/course.controller.js';
import teacherController from './controlleurs/teacher.controller.js';
import course_teacherController from './controlleurs/course_teacher.controller.js';
import gradesController from './controlleurs/grades.controller.js';
import authenticationController from './controlleurs/authentication.controller.js';

// Middlewares
import jwtMiddleware from './middlewares/jwt.middleware.js';


const root = {
  // USER
  getUsers: () => userController.getUsers(),
  getUserById: (id) => userController.getUserById(id),
  createUser: (value) => userController.createUser(value),
  updateUser: (id, value) => userController.updateUser(id, value),
  deleteUser: (id) => userController.deleteUser(id),

  // STUDENT
  getStudents: () => studentController.getStudents(),
  getStudentById: (id) => studentController.getStudentById(id),
  createStudent: (value) => studentController.createStudent(value),
  updateStudent: (id, value) => studentController.updateStudent(id, value),
  deleteStudent: (id) => studentController.deleteStudent(id),

  // COURSE
  getCourses: () => courseController.getCourses(),
  getCourseById: (id) => courseModel.getCourseById(id),
  createCourse: (value) => courseController.createCourse(value),
  updateCourse: (id, value) => courseController.updateCourse(id, value),
  deleteCourse: (id) => courseController.deleteCourse(id),

  // TEACHER
  getTeachers: () => teacherController.getTeachers(),
  getTeacherById: (id) => teacherController.getTeacherById(id),
  createTeacher: (value) => teacherController.createTeacher(value),
  updateTeacher: (id, value) => teacherController.updateTeacher(id, value),
  deleteTeacher: (id) => teacherController.deleteTeacher(id),

  // COURSE_TEACHER
  getCourseTeacher: () => course_teacherController.getCourseTeacher(),
  getCourseTeacherById: (id) => course_teacherController.getCourseTeacherById(id),
  createCourseTeacher: (value) => course_teacherController.createCourseTeacher(value),
  updateCourseTeacher: (id, value) => course_teacherController.updateCourseTeacher(id, value),
  deleteCourseTeacher: (id) => course_teacherController.deleteCourseTeacher(id),

  // GRADES
  getGrades: () => gradesController.getGrades(),
  getGradesById: (id) => gradesController.getGradesById(id),
  createGrades: (value) => gradesController.createGrades(value),
  updateGrades: (id, value) => gradesController.updateGrades(id, value),
  deleteGrades: (id) => gradesController.deleteGrades(id),
}

export const launch = ({ protocol, port, host }) => {
  const app = express()
  app.use(express.json());

  /*
    * AUTHENTIFICATION
    * Activer / décommenter ces 3 lignes ci-dessous pour activer l'authentification
  */
  jwtMiddleware.unless = unless;
  app.use(jwtMiddleware.unless({ path: ['/login'] }));
  app.post('/login', authenticationController.loginUser);

  app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      rootValue: root,
      // J'utilisais Postman pour tester les requêtes GraphQL d'ou le graphiql: false 
      // mais vous pouvez le mettre à true pour tester les requêtes GraphQL depuis votre navigateur après s'être authentifier
      graphiql: false,
    })
  )

  app.listen(4000, () => {
    console.log(`Running a Authentification API Server at ${protocol}://${host}:${port}/login`)
    console.log(`Running a GraphQL API server at ${protocol}://${host}:${port}/graphql`)
  })
}


