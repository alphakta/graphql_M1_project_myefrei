import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default {
    getCourseTeacher: async () => {
        return await prisma.courses_teacher.findMany({
            include: { teacher: true, courses: true }
        })
    },
    createCourseTeacher: async ({ value }) => {
        const { id_teacher, id_courses } = value;

        return await prisma.courses_teacher.create({
            data: { 
                courses: { connect: { id_courses: id_courses }},
                teacher: { connect: { id_teacher: id_teacher }}
            },
            include: { teacher: true, courses: true }
        });         
    },
    updateCourseTeacher: async ({ id, value }) => {
        const { id_teacher, id_courses } = value;

        return await prisma.courses_teacher.update({
            where: {
                id_courses_id_teacher: {
                    id_courses: id.id_courses,
                    id_teacher: id.id_teacher,
                }
            },
            data: { 
                courses: { connect: { id_courses: id_courses }},
                teacher: { connect: { id_teacher: id_teacher }}
            },
            include: { teacher: true, courses: true }
        });
    },
    deleteCourseTeacher: async ({ id }) => {
        return await prisma.courses_teacher.delete({
            where: {
                id_courses_id_teacher: {
                    id_courses: id.id_courses,
                    id_teacher: id.id_teacher,
                }
            },
            include: { teacher: true, courses: true }
        })
    }
}