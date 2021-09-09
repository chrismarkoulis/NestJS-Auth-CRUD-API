import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root1234',
  database: 'nestjs',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};

export default config