import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientInput } from './dto/create-client.input';
import { UpdateClientInput } from './dto/update-client.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client) private clientRepo: Repository<Client>,
  ) {}

  async create(createClientInput: CreateClientInput): Promise<Client> {
    return this.clientRepo.save(
      this.clientRepo.create({ ...createClientInput, id: uuid() }),
    );
  }

  findAll() {
    return this.clientRepo.find();
  }

  findOne(id: string) {
    try {
      return this.clientRepo.findOneOrFail({ where: { id } });
    } catch (err) {
      throw new NotFoundException('Client not found');
    }
  }

  async update(id: string, updateClientInput: UpdateClientInput) {
    let Client;
    try {
      Client = await this.clientRepo.findOneOrFail({ where: { id } });
    } catch (err) {
      throw new NotFoundException('Client not found');
    }
    Client = { ...Client, ...updateClientInput };
    return this.clientRepo.save(Client);
  }

  async remove(id: string) {
    let Client;
    try {
      Client = await this.clientRepo.findOneOrFail({ where: { id } });
    } catch (err) {
      throw new NotFoundException('Client not found');
    }
    this.clientRepo.remove(Client);
    return Client;
  }
}
