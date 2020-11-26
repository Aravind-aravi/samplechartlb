import {DefaultCrudRepository} from '@loopback/repository';
import {Sows, SowsRelations} from '../models';
import {PorklogicDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SowsRepository extends DefaultCrudRepository<
  Sows,
  typeof Sows.prototype.pig,
  SowsRelations
> {
  constructor(
    @inject('datasources.porklogic') dataSource: PorklogicDataSource,
  ) {
    super(Sows, dataSource);
  }
}
