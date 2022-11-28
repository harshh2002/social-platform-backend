import { BaseEntity as _BaseEntity, Column } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export class BaseEntity extends _BaseEntity {
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ default: uuidv4(), primary: true })
  id: string;

  static create(...args: any[]): any {
    return new BaseEntity();
  }
}
