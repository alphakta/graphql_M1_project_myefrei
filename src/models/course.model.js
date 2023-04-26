import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default {
    getCourses: async () => {
        return await prisma.courses.findMany({
            include: {
                teacher: true
            }
        })
    },
    createCourse: async ({ value }) => {
        console.log(value)
        return await prisma.courses.create({ data: value });
    },
    updateCourse: async ({ id, value }) => {
        return await prisma.courses.update({
            where: {
                id_courses: id
            },
            data: value
        });
    },
    deleteCourse: async ({ id }) => {
        return await prisma.courses.delete({
            where: {
                id_courses: id
            }
        })
    }
}