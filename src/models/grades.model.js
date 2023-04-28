import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default {
    getGrades: async () => {
        return await prisma.grades.findMany({
            include: { courses: true, student: true, teacher: true }
        })
    },
    createGrades: async ({ value }) => {
        const { note, id_courses, id_student, id_teacher } = value;

        return await prisma.grades.create({
            data: {
                note: note,
                courses: {
                    connect: { id_courses: id_courses }
                },
                student: {
                    connect: { id_student: id_student },
                },
                teacher: {
                    connect: { id_teacher: id_teacher }
                }
            },
            include: { courses: true, student: true, teacher: true }
        });
    },
    updateGrades: async ({ id, value }) => {
        const { note, id_courses, id_student, id_teacher } = value;
        console.log(id, note, id_courses)

        return await prisma.grades.update({
            where: {
                id_grades: id
            },
            data: {
                note: note,
                courses: {
                    connect: { id_courses: id_courses }
                },
                student: {
                    connect: { id_student: id_student }
                },
                teacher: {
                    connect: { id_teacher: id_teacher }
                }
            },
            include: { courses: true, student: true, teacher: true }
        });

    },
    deleteGrades: async ({ id }) => {
        return await prisma.grades.delete({
            where: {
                id_grades: id
            },
            include: { courses: true, student: true, teacher: true }
        })
    }
}