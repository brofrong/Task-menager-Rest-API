import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm'
import { TaskModule } from './task/task.module'


@Module({
  imports: [
    TypeOrmModule.forRoot({}),
    TaskModule,
  ],
})
export class AppModule {}
