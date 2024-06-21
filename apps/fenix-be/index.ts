import Fastify from 'fastify'
import cors from '@fastify/cors'


const fastify = Fastify({
    logger: true
})

fastify.register(cors, { origin: true })

// Declare a route
fastify.get('/', async function handler(request, reply) {
    return { hello: 'world' }
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