import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from "./todos/entities";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TodosModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: parseInt(process.env.DB_PORT || "5432"),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      synchronize: true, // DEV ONLY!
      entities: [
        Todo
      ],
      // logging: true,
      // subscribers: [],
      // migrations: [],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
