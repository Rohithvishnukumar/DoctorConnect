import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { DoctorsModule } from './doctors/doctors.module';

@Module({
  imports: [DatabaseModule, DoctorsModule],
})
export class AppModule {}
