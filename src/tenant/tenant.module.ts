import { Module } from '@nestjs/common';
import { TenantService } from './tenant/tenant.service';

@Module({
  providers: [TenantService]
})
export class TenantModule {}
