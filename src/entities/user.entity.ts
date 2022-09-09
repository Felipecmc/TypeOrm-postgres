import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("users")

export class User{
    @PrimaryGeneratedColumn("uuid")
    readonly id: number

    @Column({
        length: 50
      })
      email: string;

      @Column({
        length: 50
      })
      name: string;
    
      @Column()
      age: number;

      @Column({
        length: 100
      })
      password: string;

      @CreateDateColumn()
      created_at: Date;

      @UpdateDateColumn()
      updated_at: Date;
}