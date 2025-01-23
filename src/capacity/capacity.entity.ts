import {
   Entity,
   PrimaryGeneratedColumn,
   Column,
   CreateDateColumn,
   UpdateDateColumn,
 } from 'typeorm';
 
 @Entity('capacity')
 export class CapacityEntity {
   @PrimaryGeneratedColumn()
   id: number;
 
   @Column({ length: 100 })
   name: string;
 
   @CreateDateColumn()
   created_at: Date;
 
   @UpdateDateColumn()
   updated_at: Date;
 }
 