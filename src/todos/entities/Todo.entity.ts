import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo{
  @PrimaryGeneratedColumn()
  todoId: number;

  @Column()
  text: string;

  @Column()
  isCompleted: boolean;
};