import { Module } from '@nestjs/common';
import { TenantService } from './tenant/tenant.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Account } from '../accounts/entities/account.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([Account])
  ],
  providers: [TenantService]
})
export class TenantModule {}
