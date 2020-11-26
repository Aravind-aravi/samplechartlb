import { Entity, model, property } from '@loopback/repository';

@model({
  settings: {
    postgresql: { schema: 'porklogic', table: 'sows' },
  },
})

export class Sows extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  activity_mts: number;

  @property({
    type: 'number',
    required: true,
  })
  wellness_score: number;

  
  @property({
    type: 'number',
    required: true,
  })
  wellness_score_size: number;

  @property({
    type: 'string',
    required: true,
  })
  wellness_score_group: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  pig?: string;

  @property({
    type: 'date',
    required: true,
  })
  date: string;

  @property({
    type: 'string',
    required: true,
  })
  age: string;

  @property({
    type: 'number',
    required: true,
  })
  weight_lbs: number;

  @property({
    type: 'number',
    required: true,
  })
  temperature_f: number;

  @property({
    type: 'number',
    required: true,
  })
  heart_rate: number;




  constructor(data?: Partial<Sows>) {
    super(data);
  }
}

export interface SowsRelations {
  // describe navigational properties here
}

export type SowsWithRelations = Sows & SowsRelations;
