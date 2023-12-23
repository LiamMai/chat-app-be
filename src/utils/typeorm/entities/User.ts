import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    private userId: string;

    @Column()
    private firstName: string;

    @Column()
    private lastName: string;

    @Column()
    private passwordHash: string;

    @Column()
    private email: string;

    @Column()
    private avatar: string;

}