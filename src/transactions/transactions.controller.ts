import { Controller, Get, Post, Body, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { TenantGuard } from '../tenant/tenant.guard';
import { TenantService } from '../tenant/tenant/tenant.service';

@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('transactions')
export class TransactionsController {
  constructor(
    private readonly transactionsService: TransactionsService,
    private tenantSerice: TenantService

    ) {}

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.create(createTransactionDto);
  }

  @Get()
  findAll(@Req() req) {
    console.log(this.tenantSerice.tenant, req.user)
    return this.transactionsService.findAll();
  }
}
