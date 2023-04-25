import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default {
    getUsers: async () => {
        return await prisma.user.findMany({
            include: {
                student: true
            }
        })
    },
    createUser: async ({ value }) => {
        console.log(value)
        return await prisma.user.create({ data: value });
    },
    updateUser: async ({ id, value }) => {
        console.log(id)
        console.log(value)

        return await prisma.user.update({
            where: {
                id_user: id
            },
            data: value
        })

    },
    deleteUser: async ({ id }) => {
        return await prisma.user.delete({
            where: {
                id_user: id
            }
        })
    }
}