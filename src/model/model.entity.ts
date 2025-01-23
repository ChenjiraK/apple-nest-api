import {
   Entity,
   PrimaryGeneratedColumn,
   Column,
   CreateDateColumn,
   UpdateDateColumn,
 } from 'typeorm';
 
 @Entity('models')
 export class ModelEntity {
   @PrimaryGeneratedColumn()
   id: number;
 
   @Column({ length: 100 })
   name: string;
 
   @CreateDateColumn()
   created_at: Date;
 
   @UpdateDateColumn()
   updated_at: Date;
 }
 