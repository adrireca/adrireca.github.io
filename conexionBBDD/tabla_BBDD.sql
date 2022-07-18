create table clientes(
	id int(4) primary key AUTO_INCREMENT,
    nombre varchar(30),
    apellidos varchar(50),
    email varchar(50),
    telefono varchar(12),
    fecha_consulta varchar(12),
   	hora_consulta varchar(10),
    asunto varchar(500)
);