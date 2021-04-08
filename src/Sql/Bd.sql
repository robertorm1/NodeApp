
create table perfil_usuario(
id_usuario serial primary key,
email_usuario varchar(50),
nombre_usuario varchar(50),
estatus_usuario boolean
)

create table cat_referencia(
id_referencia serial primary key,
nombre_referencia varchar(100)
)

create table datos_negocio(
id_negocio serial primary key,
nombre_dueño varchar(200),
direccion_negocio varchar(200),
nombre_local varchar(100),
url_foto varchar(300),
latitud double precision,
longitud double precision,
fk_referencia int,
fk_usuario int
);

ALTER TABLE datos_negocio
ADD CONSTRAINT referencia_negocio
FOREIGN KEY (fk_referencia) REFERENCES cat_referencia(id_referencia)
on update cascade
on delete cascade;

ALTER TABLE datos_negocio
ADD CONSTRAINT usuario_negocio
FOREIGN KEY (fk_usuario) REFERENCES perfil_usuario(id_usuario)
on update cascade
on delete cascade;