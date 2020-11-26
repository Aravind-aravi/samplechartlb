import {Entity, model, property} from '@loopback/repository';

@model()
export class Chartentity extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  country: string;

  @property({
    type: 'number',
    required: true,
  })
  litres: number;


  constructor(data?: Partial<Chartentity>) {
    super(data);
  }
}

export interface ChartentityRelations {
  // describe navigational properties here
}

export type ChartentityWithRelations = Chartentity & ChartentityRelations;
