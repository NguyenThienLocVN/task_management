import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrganizationsModule } from './organizations/organizations.module.js';
import { DepartmentsModule } from './departments/departments.module.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'task_admin',
      password: 'trinhthu2026!',
      database: 'task_management',

      autoLoadEntities: true,

      synchronize: true,
    }),

    OrganizationsModule,
    DepartmentsModule,
  ],
})
export class AppModule {}