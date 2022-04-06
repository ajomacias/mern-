CREATE TABLE sec_apps ( 
  app_name varchar(128) NOT NULL, 
  app_type varchar(255) DEFAULT NULL, 
  description varchar(255) DEFAULT NULL, 
  PRIMARY KEY(app_name) 
);

CREATE TABLE sec_groups (
   group_id int AUTO_INCREMENT NOT NULL,
   description varchar(240) NOT NULL,
   PRIMARY KEY(group_id)
);

CREATE TABLE sec_groups_apps (
   _id int AUTO_INCREMENT,
   group_id int(11) NOT NULL,
   app_name varchar(128) NOT NULL,
   priv_access varchar(1) DEFAULT 'N',
   priv_insert varchar(1) DEFAULT 'N',
   priv_delete varchar(1) DEFAULT 'N',
   priv_update varchar(1) DEFAULT 'N',
   priv_export varchar(1) DEFAULT 'N',
   priv_print  varchar(1) DEFAULT 'N',
   PRIMARY key(_id),
   FOREIGN KEY (group_id) REFERENCES sec_groups(group_id) ,
   FOREIGN KEY (app_name) REFERENCES sec_apps(app_name) 
) ;

CREATE TABLE sec_users (
  _login int AUTO_INCREMENT NOT NULL,
  pswd varchar(255) NOT NULL,
  name varchar(64) DEFAULT NULL,
  email varchar(255) UNIQUE DEFAULT NULL,
  active varchar(1) DEFAULT NULL,
  activation_code varchar(32) DEFAULT NULL,
  priv_admin varchar(1) DEFAULT NULL,
  empresa varchar(100) NOT NULL,
  PRIMARY KEY(_login)
);

CREATE TABLE sec_users_groups (
  _id int AUTO_INCREMENT, 
  login int NOT NULL,
  group_id int NOT NULL,
  PRIMARY KEY(_id),
  FOREIGN KEY(login) REFERENCES sec_users(_login),
  FOREIGN KEY(group_id) REFERENCES sec_groups_apps(_id)
);

CREATE TABLE catalogos (
	id integer NOT NULL auto_increment,
	codigo varchar(20),
	nombre varchar(40) NOT NULL,
	tipo varchar(40) NOT NULL,
	CONSTRAINT catalogo_pk PRIMARY KEY (id)
);

CREATE TABLE proveedores (
	id integer NOT NULL auto_increment,
	categoria integer,
	nombre varchar(174) NOT NULL UNIQUE,
	telefono varchar(13) UNIQUE,
	ruc varchar(14) UNIQUE,
	correo varchar(200) UNIQUE,
	direccion varchar(200),
	CONSTRAINT proveedores_pk PRIMARY KEY (id),
    CONSTRAINT categoria_fk FOREIGN KEY(categoria) references catalogos(id) 
);

CREATE TABLE productos (
	id integer NOT NULL auto_increment,
  codigo varchar(40) NOT NULL UNIQUE,
	proveedor integer,
	nombre varchar(100) NOT NULL UNIQUE,
	precio decimal(19,4),
	detalle text,
	CONSTRAINT productos_pk PRIMARY KEY (id),
	CONSTRAINT proveedor_fk FOREIGN KEY(proveedor) references proveedores(id) 
);

CREATE TABLE producto_detalle (
	id serial NOT NULL,
	producto integer NOT NULL,
	fecha_caducidad date,
	cantidad integer,
	bodega boolean,
	CONSTRAINT producto_bodega_pk PRIMARY KEY (id),
    CONSTRAINT producto_fk FOREIGN KEY(producto) REFERENCES productos(id)
);

CREATE VIEW get_productos AS
SELECT pd.id,pd.codigo,pd.nombre,pd.detalle,pd.precio, pr.nombre as proveedor,pr.id as proveedorId FROM productos as pd 
JOIN proveedores as pr  ON pr.id=pd.proveedor;


CREATE VIEW productos_bodega AS 
SELECT pr.id as id_producto FROM productos as pr JOIN producto_detalle as prd ON pr.id = prd.producto
JOIN proveedor as pvr ON pvr.id=pr.proveedor JOIN catalogos as ct ON ct.id=pvr.categoria
WHERE prd.bodega > 0;

CREATE INDEX idx_codigo ON productos(codigo);