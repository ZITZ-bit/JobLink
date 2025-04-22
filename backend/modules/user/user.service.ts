import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getAll() {
    return [
      { id: 1, name: 'Andy', email: 'andy@ejemplo.com' },
      { id: 2, name: 'Lira', email: 'lira@ai.com' },
    ];
  }
}
