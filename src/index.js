import express from 'express'
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema.js';
import userController from './controlleurs/user.controller.js'
import studentController from './controlleurs/student.controller.js'

const root = {
  // USER
  getUsers: () => userController.getUsers(),
  createUser: (value) => userController.createUser(value),
  updateUser: (id, value) => userController.updateUser(id, value),
  deleteUser: (id) => userController.deleteUser(id),
  // STUDENT
  getStudent: () => studentController.getStudent(),
  createStudent: (value) => studentController.createStudent(value),
  updateStudent: (id, value) => studentController.updateStudent(id, value),
  deleteStudent: (id) => studentController.deleteStudent(id),
  // COURSE
  // TEACHER
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
