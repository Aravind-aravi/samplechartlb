import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Sows} from '../models';
import {SowsRepository} from '../repositories';

export class PorklogicController {
  constructor(
    @repository(SowsRepository)
    public sowsRepository : SowsRepository,
  ) {}

  @post('/sows', {
    responses: {
      '200': {
        description: 'Sows model instance',
        content: {'application/json': {schema: getModelSchemaRef(Sows)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sows, {
            title: 'NewSows',
            exclude: ['pig'],
          }),
        },
      },
    })
    sows: Omit<Sows, 'pig'>,
  ): Promise<Sows> {
    return this.sowsRepository.create(sows);
  }

  @get('/sows/count', {
    responses: {
      '200': {
        description: 'Sows model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Sows) where?: Where<Sows>,
  ): Promise<Count> {
    return this.sowsRepository.count(where);
  }

  @get('/sows', {
    responses: {
      '200': {
        description: 'Array of Sows model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Sows, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Sows) filter?: Filter<Sows>,
  ): Promise<Sows[]> {
    return this.sowsRepository.find(filter);
  }

  @patch('/sows', {
    responses: {
      '200': {
        description: 'Sows PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sows, {partial: true}),
        },
      },
    })
    sows: Sows,
    @param.where(Sows) where?: Where<Sows>,
  ): Promise<Count> {
    return this.sowsRepository.updateAll(sows, where);
  }

  @get('/sows/{id}', {
    responses: {
      '200': {
        description: 'Sows model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Sows, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Sows, {exclude: 'where'}) filter?: FilterExcludingWhere<Sows>
  ): Promise<Sows> {
    return this.sowsRepository.findById(id, filter);
  }

  @patch('/sows/{id}', {
    responses: {
      '204': {
        description: 'Sows PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sows, {partial: true}),
        },
      },
    })
    sows: Sows,
  ): Promise<void> {
    await this.sowsRepository.updateById(id, sows);
  }

  @put('/sows/{id}', {
    responses: {
      '204': {
        description: 'Sows PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() sows: Sows,
  ): Promise<void> {
    await this.sowsRepository.replaceById(id, sows);
  }

  @del('/sows/{id}', {
    responses: {
      '204': {
        description: 'Sows DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.sowsRepository.deleteById(id);
  }
}
