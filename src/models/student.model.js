import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default {
    getStudents: async () => {
        return await prisma.student.findMany({
            include: {
                user: true,
                grades: true
            }
        })
    },
    createStudent: async ({ value }) => {
        const { id_user } = await prisma.user.findUnique({
            where: {
                id_user: value.id_user
            },
            select: {
                id_user: true
            }
        });

        if (id_user) return await prisma.student.create({ data: value }); 
    
        return false;
    },
    updateStudent: async ({ id, value }) => {
        const { id_user } = await prisma.user.findUnique({
            where: {
                id_user: value.id_user
            },
            select: {
                id_user: true
            }
        });

        if (id_user) return await prisma.student.update({ where: { id_student: id }, data: value }); 

        return false;
 
    },
    deleteStudent: async ({ id }) => {
        return await prisma.student.delete({
            where: {
                id_student: id
            }
        })
    }
}