import { buildSchema } from 'graphql';

export const schema = buildSchema(`

type Courses {
  id_courses: Int!
  module: String!
  ue: String!
  coef: Float!
  courses_teacher: [Courses_teacher]
  grades: [Grades]
}

type Grades {
  id_grades: Int!
  note: Float!
  id_courses: Int!
  id_student: Int!
  id_teacher: Int!
  courses: Courses
  student: Student
  teacher: Teacher
}

type Student {
  id_student: Int!
  num_student: String
  id_user: Int!
  grades: [Grades]
  user: User
}

type Teacher {
  id_teacher: Int!
  id_user: Int!
  courses_teacher: [Courses_teacher]
  grades: [Grades]
  user: User
}

type User {
  id_user: Int!
  username: String!
  password: String!
  email: String!
  first_name: String!
  last_name: String!
  gender: String
  date_of_birth: String!
  student: [Student]
  teacher: [Teacher]
}

type Courses_teacher {
  id_courses: Int!
  id_teacher: Int!
  courses: Courses
  teacher: Teacher
}

input UserInput {
  username: String
  password: String
  email: String
  first_name: String
  last_name: String
  gender: String
  date_of_birth: String
}

input StudentInput {
  num_student: String
  id_user: Int
}

input CourseInput {
  module: String!
  ue: String
  coef: Float
}

input TeacherInput {
  id_user: Int
}

type Query {
  getUsers : [User]
  getStudents: [Student]
  getCourses: [Courses]
  getTeachers: [Teacher]
}

type Mutation {
  createUser(value: UserInput ) : User
  updateUser(id: Int, value: UserInput) : User
  deleteUser(id: Int) : User

  createStudent(value: StudentInput ) : Student
  updateStudent(id: Int, value: StudentInput) : Student
  deleteStudent(id: Int) : Student

  createCourse(value: CourseInput ) : Courses
  updateCourse(id: Int, value: CourseInput) : Courses
  deleteCourse(id: Int) : Courses

  createTeacher(value: TeacherInput ) : Teacher
  updateTeacher(id: Int, value: TeacherInput) : Teacher
  deleteTeacher(id: Int) : Teacher
}
`)