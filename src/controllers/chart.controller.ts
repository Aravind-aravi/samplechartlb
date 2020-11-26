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
import {Chartentity} from '../models';
import {ChartentityRepository} from '../repositories';

export class ChartController {
  constructor(
    @repository(ChartentityRepository)
    public chartentityRepository : ChartentityRepository,
  ) {}

  @post('/chartentities', {
    responses: {
      '200': {
        description: 'Chartentity model instance',
        content: {'application/json': {schema: getModelSchemaRef(Chartentity)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Chartentity, {
            title: 'NewChartentity',
            
          }),
        },
      },
    })
    chartentity: Chartentity,
  ): Promise<Chartentity> {
    return this.chartentityRepository.create(chartentity);
  }

  @get('/chartentities/count', {
    responses: {
      '200': {
        description: 'Chartentity model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Chartentity) where?: Where<Chartentity>,
  ): Promise<Count> {
    return this.chartentityRepository.count(where);
  }

  @get('/chartentities', {
    responses: {
      '200': {
        description: 'Array of Chartentity model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Chartentity, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Chartentity) filter?: Filter<Chartentity>,
  ): Promise<Chartentity[]> {
    return this.chartentityRepository.find(filter);
  }

  @patch('/chartentities', {
    responses: {
      '200': {
        description: 'Chartentity PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Chartentity, {partial: true}),
        },
      },
    })
    chartentity: Chartentity,
    @param.where(Chartentity) where?: Where<Chartentity>,
  ): Promise<Count> {
    return this.chartentityRepository.updateAll(chartentity, where);
  }

  @get('/chartentities/{id}', {
    responses: {
      '200': {
        description: 'Chartentity model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Chartentity, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Chartentity, {exclude: 'where'}) filter?: FilterExcludingWhere<Chartentity>
  ): Promise<Chartentity> {
    return this.chartentityRepository.findById(id, filter);
  }

  @patch('/chartentities/{id}', {
    responses: {
      '204': {
        description: 'Chartentity PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Chartentity, {partial: true}),
        },
      },
    })
    chartentity: Chartentity,
  ): Promise<void> {
    await this.chartentityRepository.updateById(id, chartentity);
  }

  @put('/chartentities/{id}', {
    responses: {
      '204': {
        description: 'Chartentity PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() chartentity: Chartentity,
  ): Promise<void> {
    await this.chartentityRepository.replaceById(id, chartentity);
  }

  @del('/chartentities/{id}', {
    responses: {
      '204': {
        description: 'Chartentity DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.chartentityRepository.deleteById(id);
  }
}
