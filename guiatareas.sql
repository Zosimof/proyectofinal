Create database guiatareas;
use guiatareas;
create table selecciones(
id int auto_increment primary key,
titulo varchar(255),
descripcion varchar(255),
tipo varchar(255)
)
select * from selecciones;
ALTER TABLE selecciones ADD COLUMN completed BOOLEAN DEFAULT FALSE;
DELETE from selecciones where id = 1;
CREATE TABLE completed_tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255),
  descripcion VARCHAR(255),
  tipo VARCHAR(255)
);
select * from completed_tasks;