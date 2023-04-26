import { buildSchema } from 'graphql';

export const schema = buildSchema(`

type Course {
    id_courses: Int!
    module: String
    ue: String
    type: String
    coef: Float
    grades: [Grade]
    teachers: [Teacher]
  }
  
  type Grade {
    id_grades: Int!
    note: Float
    course: Course
    student: Student
    teacher: Teacher
  }
  
  type Student {
    id_student: Int!
    num_student: String
    grades: [Grade]
    user: User
  }
  
  type Teacher {
    id_teacher: Int!
    course: Course
    user: User
    grades: [Grade]
  }
  
  type User {
    id_user: Int!
    username: String
    password: String
    email: String
    first_name: String
    last_name: String
    gender: String
    date_of_birth: String
    student: [Student]
    teacher: [Teacher]
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
    type: String
    coef: Float
  }

    type Query {
        getUsers : [User]
        getStudents: [Student]
        getCourses: [Course]
    }

    type Mutation {
        createUser(value: UserInput ) : User
        updateUser(id: Int, value: UserInput) : User
        deleteUser(id: Int) : User

        createStudent(value: StudentInput ) : Student
        updateStudent(id: Int, value: StudentInput) : Student
        deleteStudent(id: Int) : Student

        createCourse(value: CourseInput ) : Course
        updateCourse(id: Int, value: CourseInput) : Course
        deleteCourse(id: Int) : Course
    }

`)