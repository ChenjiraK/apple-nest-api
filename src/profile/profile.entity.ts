import {
   Entity,
   PrimaryGeneratedColumn,
   Column,
   CreateDateColumn,
   UpdateDateColumn,
 } from 'typeorm';
 
 @Entity('profiles')
 export class Profile {
   @PrimaryGeneratedColumn()
   id: number;
 
   @Column({ length: 100 })
   firstname: string;
 
   @Column({ length: 100 })
   lastname: string;
 
   @Column({ unique: true })
   email: string;
 
   @Column({ nullable: true })
   password?: string;
 
   @Column({ nullable: true })
   image_url?: string;
 
   @Column({ type: 'date', nullable: true })
   birth_date?: Date;
 
   @Column({ nullable: true })
   gender?: string;
 
   @Column({ nullable: true })
   phone?: string;
 
   @Column({ default: false })
   is_accept_terms: boolean;
 
   @Column({ default: false })
   is_accept_privacy: boolean;
 
   @Column({ default: false })
   is_accept_marketing: boolean;
 
   @CreateDateColumn()
   created_at: Date;
 
   @UpdateDateColumn()
   updated_at: Date;
 }
 