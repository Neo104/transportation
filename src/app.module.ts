import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cars } from './car/cars.entity';
import { CarModule } from './car/car.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'Neo104',
      password: '',
      database: 'transportation',
      entities: [Cars],
      synchronize: true,
    }),
    CarModule,
  ],
})
export class AppModule {}
