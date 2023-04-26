import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default {
    getTeachers: async () => {
        return await prisma.teacher.findMany({
            include: {
                grades: true,
                courses_teacher: true,
                user: true
            }
        })
    },
    createTeacher: async ({ value }) => {
        const { id_user } = await prisma.user.findUnique({
            where: {
                id_user: value.id_user
            },
            select: {
                id_user: true
            }
        });

        if (id_user) return await prisma.teacher.create({ data: value }); 
    
        return false;
    },
    updateTeacher: async ({ id, value }) => {
        const { id_user } = await prisma.user.findUnique({
            where: {
                id_user: value.id_user
            },
            select: {
                id_user: true
            }
        });

        if (id_user) return await prisma.teacher.update({ where: { id_teacher: id }, data: value }); 

        return false;
 
    },
    deleteTeacher: async ({ id }) => {
        return await prisma.teacher.delete({
            where: {
                id_teacher: id
            }
        })
    }
}