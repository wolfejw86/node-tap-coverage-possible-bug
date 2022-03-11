import { FastifyPluginAsync } from 'fastify'

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get<{Querystring: { hello?: string}}>('/', async  (request, reply) => {
    if (request.query.hello) {
      console.log('this will never run')
    }

    return { root: true }
  })
}

export default root;
