import {
   Entity,
   PrimaryGeneratedColumn,
   Column,
   CreateDateColumn,
   UpdateDateColumn,
 } from 'typeorm';
 
 @Entity('colors')
 export class ColorEntity {
   @PrimaryGeneratedColumn()
   id: number;
 
   @Column({ length: 100 })
   name: string;
 
   @Column({ length: 100 })
   color: string;
 
   @CreateDateColumn()
   created_at: Date;
 
   @UpdateDateColumn()
   updated_at: Date;
 }
 