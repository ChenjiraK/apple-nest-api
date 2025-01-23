import {
   Entity,
   PrimaryGeneratedColumn,
   Column,
   CreateDateColumn,
   UpdateDateColumn,
 } from 'typeorm';
 
 @Entity('dashboard')
 export class Dashboard {
   @PrimaryGeneratedColumn()
   id: number;
 
   @Column({ length: 100 })
   name: string;

   @Column({ length: 100 })
   link: string;

   @Column({ length: 100 })
   image_url: string;
 
   @CreateDateColumn()
   created_at: Date;
 
   @UpdateDateColumn()
   updated_at: Date;
 }
 