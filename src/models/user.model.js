import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default {
    getUsers: async () => {
        return await prisma.user.findMany({
            include: { student: true, teacher: true }
        })
    },
    findUserByEmail: async ({ email }, select) => {
        return prisma.user.findFirst({
            where: {
                email
            },
            select,
        });
    },
    getUserById: async (id) => {
        return await prisma.user.findUnique({
            where: { id_user: id },
            // include: { student: true, teacher: true }
        })
    },
    createUser: async (value) => {
        console.log(value)
        return await prisma.user.create({
            data: value,
            include: { student: true, teacher: true }
        });
    },
    updateUser: async (id, value) => {
        return await prisma.user.update({
            where: {
                id_user: id
            },
            data: value,
            include: { student: true, teacher: true }
        })
    },
    deleteUser: async (id) => {
        return await prisma.user.delete({
            where: {
                id_user: id
            },
            include: { student: true, teacher: true }
        })
    }
}