import { Module } from '@nestjs/common';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';
import { DatabaseModule } from 'src/database/database.module';
import { PatientsRepository } from './patients.repository';

@Module({
  imports:[DatabaseModule],
  controllers: [PatientsController],
  providers: [PatientsService,PatientsRepository]
})
export class PatientsModule {}
