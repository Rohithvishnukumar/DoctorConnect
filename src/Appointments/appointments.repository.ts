
import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../DataBase/database.service';
import { CreateAppointmentDto } from 'src/DTOs/create-appointment-dto';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

@Injectable()
export class AppointmentsRepository {
    constructor(private readonly databaseService: DatabaseService) { }

    async findConflictingAppointment(doctorId: number, dateTime: string): Promise<boolean> {
        const sql = `
      SELECT * FROM Appointment 
      WHERE doctor_id = ? 
      AND appointment_date = ? 
      AND status IN ('PENDING', 'CONFIRMED')
    `;
        const result = await this.databaseService.query<RowDataPacket[]>(sql, [
            doctorId,
            dateTime,
        ]);
        return Array.isArray(result) && result.length > 0;
    }

    async createAppointment(createAppointmentDto: CreateAppointmentDto) {
        const { patientId, doctorId, dateTime } = createAppointmentDto;
        const sql = `
      INSERT INTO Appointment (patient_id, doctor_id, appointment_date, status) 
      VALUES (?, ?, ?, 'PENDING')
    `;
        const result = await this.databaseService.query<ResultSetHeader>(sql, [
            patientId,
            doctorId,
            dateTime,
        ]);
        return {
            id: (result as ResultSetHeader).insertId,
            patientId,
            doctorId,
            dateTime,
            status: 'PENDING',
        };
    }

    async getAppointmentsByDoctor(doctorId: number) {
        const sql = `
      SELECT * FROM Appointment 
      WHERE doctor_id = ? 
      ORDER BY appointment_date ASC
    `;
        return this.databaseService.query(sql, [doctorId]);
    }

    async getAllAppointments() {
        const sql = `
      SELECT 
        a.id, 
        a.appointment_date, 
        a.status, 
        p.name AS patient_name, 
        d.name AS doctor_name 
      FROM Appointment a
      JOIN Patient p ON a.patient_id = p.id
      JOIN Doctor d ON a.doctor_id = d.id
    `;
        return this.databaseService.query(sql);
    }
}
