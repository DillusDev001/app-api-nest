-- ============================================= --
CREATE TABLE code(
    id INT PRIMARY KEY AUTO_INCREMENT,
    code VARCHAR(4) NOT NULL,
    type VARCHAR(50) NOT NULL,
    descripcion VARCHAR(500),
    var_string VARCHAR(50) DEFAULT '',
    var_number INT DEFAULT 0,
    count INT NOT NULL,
    user VARCHAR(50) NOT NULL,
    estado INT DEFAULT 1,
    UNIQUE(code)
);

-- ================== USUARIO ================== --
CREATE TABLE usuario(
    user VARCHAR(50) PRIMARY KEY NOT NULL,
    codigo VARCHAR(50) DEFAULT '',
    nombres VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    code VARCHAR(5) NOT NULL,
    celular VARCHAR(15) NOT NULL,
    telefono VARCHAR(15) NOT NULL,
    ci VARCHAR(15) NOT NULL,
    exp VARCHAR(3) NOT NULL,
    fec_ingreso VARCHAR(15) NOT NULL,
    fec_baja VARCHAR(15) DEFAULT '',
    banco VARCHAR(50),
    nro_cuenta VARCHAR(50),
    sexo VARCHAR(1) NOT NULL,
    est_civil VARCHAR(50) NOT NULL,
    fec_nac VARCHAR(15) NOT NULL,
    rol VARCHAR(15) NOT NULL,
    img VARCHAR(500) DEFAULT '',
    estado INT DEFAULT 1,
    fec_crea TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_mod VARCHAR(50) NOT NULL,
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE (ci, codigo)
);

CREATE TABLE auth(
    user VARCHAR(50) PRIMARY KEY,
    password VARCHAR(500) NOT NULL,
    pregunta VARCHAR(100) NOT NULL,
    respuesta VARCHAR(100) NOT NULL,
    FOREIGN KEY (user) REFERENCES usuario(user) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE contacto(
    user VARCHAR(50) NOT NULL,
    cont INT NOT NULL,
    nro_contacto VARCHAR(50) NOT NULL,
    nombre_contacto VARCHAR(50) NOT NULL,
    PRIMARY KEY(user, cont),
    FOREIGN KEY (user) REFERENCES usuario(user) ON UPDATE CASCADE ON DELETE CASCADE
);

-- =================== ROUTES ================== --
CREATE TABLE route(
    id_route INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(500)
);

CREATE TABLE autorizacion_route(
    user VARCHAR(50) NOT NULL,
    id_route INT NOT NULL,
    lectura BOOLEAN NOT NULL,
    escritura BOOLEAN NOT NULL,
    PRIMARY KEY (user, id_route),
    FOREIGN KEY (user) REFERENCES usuario(user) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_route) REFERENCES route(id_route) ON UPDATE CASCADE ON DELETE CASCADE
);

-- ================== CLIENTE ================== --
CREATE TABLE empresa(
    id_empresa INT PRIMARY KEY AUTO_INCREMENT,
    razon_social VARCHAR(50) NOT NULL,
    direccion VARCHAR(50) NOT NULL,
    telefono VARCHAR(50) NOT NULL,
    web VARCHAR(50) NOT NULL,
    ciudad VARCHAR(50) NOT NULL,
    pais VARCHAR(50) NOT NULL,
    nit VARCHAR(50) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    fec_crea TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_crea VARCHAR(50) NOT NULL,
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_mod VARCHAR(50) NOT NULL
);

CREATE TABLE persona(
    id_persona INT PRIMARY KEY AUTO_INCREMENT,
    nombre_persona VARCHAR(50) NOT NULL,
    celular VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    razon VARCHAR(50) NOT NULL,
    nit VARCHAR(50) NOT NULL,
    id_empresa INT DEFAULT 0,
    fec_crea TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_crea VARCHAR(50) NOT NULL,
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_mod VARCHAR(50) NOT NULL
);

-- ================= SERVICIOS ================= --
CREATE TABLE tipo_servicio(
    id_tipo_servicio INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(500)
);

CREATE TABLE servicio(
    id_servicio INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(500),
    id_tipo_servicio INT NOT NULL,
    fec_crea TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_crea VARCHAR(50) NOT NULL,
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_mod VARCHAR(50) NOT NULL,
    FOREIGN KEY (id_tipo_servicio) REFERENCES tipo_servicio(id_tipo_servicio) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE cuenta(
    id_cuenta INT NOT NULL PRIMARY KEY,
    id_servicio INT NOT NULL,
    banco VARCHAR(50) NOT NULL,
    nro_cuenta VARCHAR(50) NOT NULL,
    a_nombre VARCHAR(50) NOT NULL,
    img VARCHAR(50) NOT NULL,
    fec_crea TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_crea VARCHAR(50) NOT NULL,
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_mod VARCHAR(50) NOT NULL,
    FOREIGN KEY (id_servicio) REFERENCES servicio(id_servicio) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE sub_servicios(
    id_sub_servicio INT AUTO_INCREMENT,
    id_servicio INT NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(500),
    fec_crea TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_crea VARCHAR(50) NOT NULL,
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_mod VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_sub_servicio, id_servicio),
    FOREIGN KEY (id_servicio) REFERENCES servicio(id_servicio) ON UPDATE CASCADE ON DELETE CASCADE
);

-- ==================== FRX ==================== --
CREATE TABLE cotizacion_frx(
    cod_cotizacion VARCHAR(50) NOT NULL PRIMARY KEY,
    fec_solicitud VARCHAR(50) NOT NULL,
    fec_emision VARCHAR(50) NOT NULL,
    id_servicio INT NOT NULL,
    id_persona INT NOT NULL,
    observacion VARCHAR(500) NOT NULL,
    costo_total DECIMAL(10, 2) NOT NULL,
    descuento DECIMAL(10, 2) NOT NULL,
    total_pagar DECIMAL(10, 2) NOT NULL,
    fec_crea TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_crea VARCHAR(50) NOT NULL,
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_mod VARCHAR(50) NOT NULL,
    FOREIGN KEY (id_servicio) REFERENCES servicio(id_servicio) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_persona) REFERENCES persona(id_persona) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE muestra_frx(
    cod_cotizacion VARCHAR(50) NOT NULL,
    muestra_sec INT NOT NULL,
    costo_muestra DECIMAL(10, 2),
    cod_interno VARCHAR(50) NOT NULL,
    descripcion VARCHAR(50) NOT NULL DEFAULT '',
    observacion VARCHAR(50) NOT NULL DEFAULT '',
    fec_crea TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_crea VARCHAR(50) NOT NULL,
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_mod VARCHAR(50) NOT NULL,
    PRIMARY KEY (cod_cotizacion, muestra_sec),
    FOREIGN KEY (cod_cotizacion) REFERENCES cotizacion_frx(cod_cotizacion) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE parametro_frx(
    id_parametro INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    costo_directo DECIMAL(10, 2),
    costo_variable DECIMAL(10, 2),
    fec_crea TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_crea VARCHAR(50) NOT NULL,
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_mod VARCHAR(50) NOT NULL
);

CREATE TABLE muestra_parametro_frx(
    cod_cotizacion VARCHAR(50) NOT NULL,
    muestra_sec INT NOT NULL,
    parametro_sec INT NOT NULL,
    id_parametro INT NOT NULL,
    cantidad INT NOT NULL,
    costo_parametro_unitario DECIMAL(10, 2),
    costo_parametro_total DECIMAL(10, 2),
    observacion VARCHAR(500),
    fec_crea TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_crea VARCHAR(50) NOT NULL,
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_mod VARCHAR(50) NOT NULL,
    PRIMARY KEY (cod_cotizacion, muestra_sec, parametro_sec),
    -- FOREIGN KEY (cod_cotizacion) REFERENCES cotizacion_frx(cod_cotizacion) ON UPDATE CASCADE ON DELETE CASCADE,
    -- FOREIGN KEY (muestra_sec) REFERENCES muestra_frx(muestra_sec) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_parametro) REFERENCES parametro_frx(id_parametro) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE recepcion_frx(
    cod_cotizacion VARCHAR(50) PRIMARY KEY NOT NULL,
    fec_recepcion VARCHAR(50) NOT NULL,
    user_recepcion VARCHAR(50) NOT NULL,
    observaciones VARCHAR(50) DEFAULT '',
    user_asignado VARCHAR(50) DEFAULT '',
    fec_ini VARCHAR(50) DEFAULT '',
    fec_fin VARCHAR(50) DEFAULT '',
    estado INT DEFAULT 1,
    fec_crea TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_crea VARCHAR(50) NOT NULL,
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_mod VARCHAR(50) NOT NULL,
    FOREIGN KEY (cod_cotizacion) REFERENCES cotizacion_frx(cod_cotizacion) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE orden_frx(
    cod_cotizacion VARCHAR(50) PRIMARY KEY,
    desde_fecha VARCHAR(50) NOT NULL,
    hasta_fecha VARCHAR(50) NOT NULL,
    lugar VARCHAR(50) NOT NULL,
    asumido VARCHAR(50) NOT NULL,
    incertidumbre VARCHAR(50) NOT NULL,
    entrega VARCHAR(50) NOT NULL,
    mediante VARCHAR(50) NOT NULL,
    pago VARCHAR(50) NOT NULL,
    pago_hasta VARCHAR(50) NOT NULL,
    factura VARCHAR(50) NOT NULL,
    factura_hasta VARCHAR(50) NOT NULL,
    FOREIGN KEY (cod_cotizacion) REFERENCES cotizacion_frx(cod_cotizacion) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE documento_frx(
    cod_cotizacion VARCHAR(50) PRIMARY KEY NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    token VARCHAR(500) NOT NULL,
    FOREIGN KEY (cod_cotizacion) REFERENCES cotizacion_frx(cod_cotizacion) ON UPDATE CASCADE ON DELETE CASCADE
);

-- =================== COTIZACION GENERAL ================== --
CREATE TABLE cotizacion_general(
    cod_cotizacion VARCHAR(50) NOT NULL PRIMARY KEY,
    fec_solicitud VARCHAR(50) NOT NULL,
    fec_emision VARCHAR(50) NOT NULL,
    id_servicio INT NOT NULL,
    id_persona INT NOT NULL,
    precio_servicio DECIMAL(10, 2) NOT NULL,
    observacion VARCHAR(500) NOT NULL,
    costo_total DECIMAL(10, 2) NOT NULL,
    descuento DECIMAL(10, 2) NOT NULL,
    total_pagar DECIMAL(10, 2) NOT NULL,
    fec_crea TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_crea VARCHAR(50) NOT NULL,
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_mod VARCHAR(50) NOT NULL,
    FOREIGN KEY (id_servicio) REFERENCES servicio(id_servicio) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_persona) REFERENCES persona(id_persona) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE cotizacion_general_sub_servicios(
    cod_cotizacion VARCHAR(50) NOT NULL,
    id_sub_servicio INT NOT NULL,
    costo_sub_servicio DECIMAL(10, 2),
    observacion VARCHAR(500) NOT NULL,
    fec_crea TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_crea VARCHAR(50) NOT NULL,
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_mod VARCHAR(50) NOT NULL,
    PRIMARY KEY (cod_cotizacion, id_sub_servicio),
    FOREIGN KEY (cod_cotizacion) REFERENCES cotizacion_general(cod_cotizacion) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE orden_trabajo_general (
    cod_cotizacion VARCHAR(50) NOT NULL,
    fec_recepcion DATETIME,
    user_recepcion VARCHAR(50) NOT NULL,
    observaciones VARCHAR(50) NOT NULL,
    fec_crea TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_crea VARCHAR(50) NOT NULL,
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_mod VARCHAR(50) NOT NULL,
    FOREIGN KEY (cod_cotizacion) REFERENCES cotizacion_general(cod_cotizacion) ON UPDATE CASCADE ON DELETE CASCADE
);

-- =================== GASTOS ================== --
CREATE TABLE proveedor(
    id_proveedor INT PRIMARY KEY AUTO_INCREMENT,
    razon VARCHAR(50) NOT NULL,
    nit VARCHAR(50) NOT NULL,
    banco VARCHAR(50) NOT NULL,
    nro_cuenta VARCHAR(500) NOT NULL,
    beneficiario VARCHAR(50) NOT NULL,
    moneda VARCHAR(50) NOT NULL,
    fec_crea TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_crea VARCHAR(50) NOT NULL,
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_mod VARCHAR(50) NOT NULL
);

CREATE TABLE gasto(
    codigo_gasto VARCHAR(50) PRIMARY KEY,
    version VARCHAR(50) NOT NULL,
    fec_vigencia VARCHAR(50) NOT NULL,
    registro VARCHAR(50) NOT NULL,
    tipo_gasto VARCHAR(50) NOT NULL,
    area VARCHAR(50) NOT NULL,
    fec_emision VARCHAR(50) NOT NULL,
    id_proveedor INT NOT NULL,
    tipo_cambio DECIMAL(10, 2) NOT NULL,
    tipo_pago VARCHAR(50) NOT NULL,
    tiempo_credito VARCHAR(50) NOT NULL,
    descripcion VARCHAR(500),
    fec_entrega VARCHAR(50),
    sub_total DECIMAL(10, 2) NOT NULL,
    descuento INT NOT NULL,
    total_bs DECIMAL(10, 2) NOT NULL,
    total_sus DECIMAL(10, 2) NOT NULL,
    fec_crea TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_crea VARCHAR(50) NOT NULL,
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_mod VARCHAR(50) NOT NULL,
    FOREIGN KEY (id_proveedor) REFERENCES proveedor(id_proveedor) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE gasto_detalle(
    codigo_gasto VARCHAR(50) NOT NULL,
    sec INT NOT NULL,
    descripcion VARCHAR(500),
    cantidad INT NOT NULL,
    unidad_medida VARCHAR(50) NOT NULL,
    -- SERVICIO, UNIDAD, etc 
    precio_unidad DECIMAL(10, 2) NOT NULL,
    precio_total DECIMAL(10, 2) NOT NULL,
    fec_crea TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_crea VARCHAR(50) NOT NULL,
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_mod VARCHAR(50) NOT NULL,
    PRIMARY KEY (codigo_gasto, sec),
    FOREIGN KEY (codigo_gasto) REFERENCES gasto(codigo_gasto) ON UPDATE CASCADE ON DELETE CASCADE
);

/*
 INSERT INTO `code` (`id`,`code`,`type`,`descripcion`,`var_string`,`var_number`,`count`,`user`,`estado`) VALUES (1,'2450','Registro de Usuario','Registro de Usuario','Administrador',700001,1,'@admin',1);
 
 INSERT INTO `usuario` (`user`,`codigo`,`nombres`,`apellidos`,`code`,`celular`,`telefono`,`ci`,`exp`,`fec_ingreso`,`fec_baja`,`banco`,`nro_cuenta`,`sexo`,`est_civil`,`fec_nac`,`rol`,`img`,`estado`,`fec_crea`,`user_mod`,`fec_mod`) VALUES ('admin-dillus@ingenialab.com','LCD300987-70001','Diego Junior','Llusco Chui','+591','77255776','','4741134','LP','2024-01-01','','Banco Central de Bolivia','123','M','Soltero(a)','1987-09-30','Administrador','',1,'2024-04-16 23:19:31','admin-dillus@ingenialab.com','2024-04-16 23:19:31');
 
 INSERT INTO `auth` (`user`,`password`,`pregunta`,`respuesta`) VALUES ('admin-dillus@ingenialab.com','$2b$10$BkPQKoXB8mPxaqnfhhkMfO6y0kqGaxMg1ddz6PwDaqWX5AZfZ0AZC','¿Cómo se llama tu mamá?','Juanita');
 
 INSERT INTO `contacto` (`user`,`cont`,`nro_contacto`,`nombre_contacto`) VALUES ('admin-dillus@ingenialab.com',1,'71542079','Juana - Mamá');
 
 INSERT INTO `empresa` (`id_empresa`,`razon_social`,`direccion`,`telefono`,`web`,`ciudad`,`pais`,`nit`,`fec_crea`,`user_crea`,`fec_mod`,`user_mod`) VALUES (1,'Empresa 1','direccion','telefono','web','La Paz','Bolivia','12345','2024-04-17 17:32:21','@admin','2024-04-17 17:32:21','@admin');
 
 INSERT INTO `persona` (`id_persona`,`nombre_persona`,`celular`,`email`,`razon`,`nit`,`id_empresa`,`fec_crea`,`user_crea`,`fec_mod`,`user_mod`) VALUES (1,'Diego Junior Llusco Chui','77255776','string@email.com','string','4741134',1,'2024-04-16 19:10:42','string','2024-04-17 17:32:38','string');
 
 INSERT INTO `tipo_servicio` (`id_tipo_servicio`,`nombre`,`descripcion`) VALUES (1,'General','Servicio General');
 INSERT INTO `tipo_servicio` (`id_tipo_servicio`,`nombre`,`descripcion`) VALUES (2,'Específico','Servicio Específico');
 
 INSERT INTO `servicio` (`id_servicio`,`nombre`,`descripcion`,`id_tipo_servicio`,`fec_crea`,`user_crea`,`fec_mod`,`user_mod`) VALUES (1,'FRX','Servicio FRX',2,'2024-04-16 19:06:59','stringAdd','2024-04-16 19:06:59','stringAdd');
 
 INSERT INTO `cotizacion_frx` (`cod_cotizacion`,`fec_solicitud`,`fec_emision`,`id_servicio`,`id_persona`,`observacion`,`costo_total`,`descuento`,`total_pagar`,`fec_crea`,`user_crea`,`fec_mod`,`user_mod`) VALUES ('INGLAB-CTZ-LAB-160424-001','ayer','eyer',1,1,'',3000.00,0,3000.00,'2024-04-16 19:15:02','string','2024-04-16 19:16:42','string');
 
 INSERT INTO `muestra_frx` (`cod_cotizacion`,`muestra_sec`,`costo_muestra`,`cod_interno`,`descripcion`,`observacion`,`fec_crea`,`user_crea`,`fec_mod`,`user_mod`) VALUES ('INGLAB-CTZ-LAB-160424-001',1,100.00,'x','','','2024-04-16 23:13:00','@admin','2024-04-16 23:13:00','@admin');
 INSERT INTO `muestra_frx` (`cod_cotizacion`,`muestra_sec`,`costo_muestra`,`cod_interno`,`descripcion`,`observacion`,`fec_crea`,`user_crea`,`fec_mod`,`user_mod`) VALUES ('INGLAB-CTZ-LAB-160424-001',2,200.00,'x','','','2024-04-16 23:13:00','@admin','2024-04-16 23:13:00','@admin');
 
 INSERT INTO `parametro_frx` (`id_parametro`,`nombre`,`costo_directo`,`costo_variable`,`fec_crea`,`user_crea`,`fec_mod`,`user_mod`) VALUES (1,'Parámetro 0',100.00,50.00,'2024-04-16 17:23:47','admin-dillus@ingenialab.com','2024-04-16 17:23:47','admin-dillus@ingenialab.com');
 INSERT INTO `parametro_frx` (`id_parametro`,`nombre`,`costo_directo`,`costo_variable`,`fec_crea`,`user_crea`,`fec_mod`,`user_mod`) VALUES (2,'Parámetro 1',200.00,100.00,'2024-04-16 17:24:54','admin-dillus@ingenialab.com','2024-04-16 17:24:54','admin-dillus@ingenialab.com');
 */

/* 
 
    DROP TABLE code;
    DROP TABLE auth;
    DROP TABLE contacto;
    DROP TABLE autorizacion_route;
    DROP TABLE route;
    DROP TABLE usuario;
    
    
    DROP TABLE muestra_frx;
    DROP TABLE muestra_parametro_frx;
    DROP TABLE parametro_frx;
    DROP TABLE orden_frx;
    DROP TABLE recepcion_frx;
    DROP TABLE documento_frx;
    DROP TABLE cotizacion_frx;
    
    
    DROP TABLE orden_trabajo_general;
    DROP TABLE cotizacion_general_sub_servicios;
    DROP TABLE cotizacion_general;
    
    
    DROP TABLE sub_servicios;
    DROP TABLE cuenta;
    DROP TABLE servicio;
    DROP TABLE tipo_servicio;
    

    DROP TABLE gasto_detalle;
    DROP TABLE gasto;
    DROP TABLE proveedor;

    DROP TABLE empresa;
    DROP TABLE persona;
*/