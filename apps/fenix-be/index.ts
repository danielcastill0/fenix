import Fastify from 'fastify'
import cors from '@fastify/cors'
import { Queue } from '@repo/bull-mq';

const fastify = Fastify({
    logger: true
})

fastify.register(cors, { origin: true })

// Declare a route
fastify.post('/event', async function handler(request, reply) {
    try {
        const body = request.body;
        const queue = new Queue('Employees', { connection: { host: 'localhost', port: 6379 } })
        queue.add('item', body)
        return reply.code(200).send({ statusCode: 200, redis: 'ok' })
    } catch (error) {
        return reply.send({ error: error.message })
    }
})

// Run the server!
const start = async () => {
    try {
        await fastify.listen({ port: 4000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()