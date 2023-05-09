import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default {
    getTeachers: async () => {
        return await prisma.teacher.findMany({
            include: { user: true, grades: true, courses_teacher: true }
        })
    },
    getTeacherById: async (id) => {
        return await prisma.teacher.findMany({
            where: { id_teacher: id },
            // include: { user: true, grades: true, courses_teacher: true }
        })    
    },
    createTeacher: async (value) => {
        const { id_user } = value;

        return await prisma.teacher.create({ 
            data: {
                user: {
                    connect: {
                        id_user: id_user
                    }
                }
            },
            include: { user: true, grades: true, courses_teacher: true }
        }); 
    },
    updateTeacher: async (id, value) => {
        const { id_user } = value;

        return await prisma.teacher.update({ 
            where: { 
                id_teacher: id 
            }, 
            data: {
                user: {
                    connect: {
                        id_user: id_user
                    }
                }
            }, 
            include: { user: true, grades: true, courses_teacher: true }
        }); 
    },
    deleteTeacher: async (id) => {
        return await prisma.teacher.delete({
            where: {
                id_teacher: id
            },
            include: { user: true, grades: true, courses_teacher: true }
        })
    }
}