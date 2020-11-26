import {DefaultCrudRepository} from '@loopback/repository';
import {Chartentity, ChartentityRelations} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ChartentityRepository extends DefaultCrudRepository<
  Chartentity,
  typeof Chartentity.prototype.id,
  ChartentityRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(Chartentity, dataSource);
  }
}
