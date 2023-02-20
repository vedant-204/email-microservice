import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
class Subsciber {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public email: string;

  @Column()
  public name: string;
}

export default Subsciber;
