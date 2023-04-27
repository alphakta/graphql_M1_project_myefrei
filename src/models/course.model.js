import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default {
    getCourses: async () => {
        return await prisma.courses.findMany({
            include: { courses_teacher: true, grades: true }
        })
    },
    createCourse: async ({ value }) => {
        console.log(value)
        return await prisma.courses.create({ 
            data: value,
            include: { courses_teacher: true, grades: true }
        });
    },
    updateCourse: async ({ id, value }) => {
        return await prisma.courses.update({
            where: {
                id_courses: id
            },
            data: value,
            include: { courses_teacher: true, grades: true }
        });
    },
    deleteCourse: async ({ id }) => {
        return await prisma.courses.delete({
            where: {
                id_courses: id
            },
            include: { courses_teacher: true, grades: true }
        })
    }
}