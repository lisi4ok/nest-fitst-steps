import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'data/test.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Use only in development
    }),
    TasksModule,
  ],
})

export class AppModule {}