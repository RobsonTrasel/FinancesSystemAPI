import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';
import { InjectModel } from '@nestjs/sequelize'

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction) private transactionModel: typeof Transaction
    ) {}

  create(createTransactionDto: CreateTransactionDto) {
    return this.transactionModel.create({
      ...createTransactionDto
    });
  }

  findAll() {
    return this.transactionModel.findAll()
  }
}
