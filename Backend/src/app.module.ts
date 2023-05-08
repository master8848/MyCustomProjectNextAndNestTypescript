import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { DepartmentModule } from './department/department.module';
import { TimesheetModule } from './timesheet/timesheet.module';
import { ClientModule } from './client/client.module';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';
import { ActivityModule } from './activity/activity.module';
import { SettingsModule } from './settings/settings.module';
import { EmailTempelateModule } from './email-tempelate/email-tempelate.module';
import { CustomFieldsModule } from './custom-fields/custom-fields.module';
import { OrganizationModule } from './organization/organization.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.DATABASEURL,
      synchronize: true,
      useUnifiedTopology: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver,
      playground: true,
    }),
    UsersModule,
    DepartmentModule,
    TimesheetModule,
    ClientModule,
    ProjectModule,
    TaskModule,
    ActivityModule,
    SettingsModule,
    EmailTempelateModule,
    CustomFieldsModule,
    OrganizationModule,
  ],
})
export class AppModule {}
