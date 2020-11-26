import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'porklogic',
  connector: 'postgresql',
  url: '',
  host: 'wellnessai.cc3echcrqjmr.us-east-1.rds.amazonaws.com',
  port: 5432,
  user: 'welnessmaster',
  password: '4AzM5q_FjE',
  database: 'wellnessai'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class PorklogicDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'porklogic';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.porklogic', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
