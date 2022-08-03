import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Transaction } from './entities/transaction.entity';
import { Account } from '../accounts/entities/account.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Transaction,
      Account
    ])
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService]
})
export class TransactionsModule {}
