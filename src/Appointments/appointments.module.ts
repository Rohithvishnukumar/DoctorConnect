
import { Module } from '@nestjs/common';
import { AppointmentsController } from './appointments.controller';
import { AppointmentsService } from './appointments.service';
import { AppointmentsRepository } from './appointments.repository';
import { DatabaseModule } from '../DataBase/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [AppointmentsController],
    providers: [AppointmentsService, AppointmentsRepository],
})
export class AppointmentsModule { }
