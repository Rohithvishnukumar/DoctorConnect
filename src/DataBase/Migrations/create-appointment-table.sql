create table Appointment(
id INT Primary key auto_increment,
doctor_id INT not null,
patient_id INT not null,
appointment_date DATETIME NOT NULL,
status ENUM('PENDING', 'CONFIRMED', 'CANCELLED') DEFAULT 'PENDING',

CONSTRAINT fk_doctor foreign key(doctor_id) REFERENCES Doctor(id) ON DELETE CASCADE,
CONSTRAINT fk_patient foreign key(patient_id) REFERENCES Patient(id) ON DELETE CASCADE
);
