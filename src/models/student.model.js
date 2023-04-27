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
        const { num_student, id_user } = value;

        return await prisma.student.create({
            data: {
                num_student: num_student,
                user: {
                    connect: {
                        id_user: id_user
                    }
                }
            },
            include: {
                user: true
            }
        });
    },
    updateStudent: async ({ id, value }) => {
        const { num_student, id_user } = value;

        return await prisma.student.update({
            where: {
                id_student: id
            },
            data: {
                num_student: num_student,
                user: {
                    connect: {
                        id_user: id_user
                    }
                }
            },
            include: {
                user: true
            }
        });

    },
    deleteStudent: async ({ id }) => {
        return await prisma.student.delete({
            where: {
                id_student: id
            },
            include: {
                user: true
            }
        })
    }
}