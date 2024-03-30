-- ============================================= --
CREATE TABLE code(
    id INT PRIMARY KEY AUTO_INCREMENT,
    code VARCHAR(4) NOT NULL,
    type VARCHAR(50) NOT NULL,
    descripcion VARCHAR(500),
    var_string VARCHAR(50) DEFAULT '',
    var_number INT DEFAULT 0,
    count INT NOT NULL,
    estado INT DEFAULT 1,
    UNIQUE(code)
);

-- ================== USUARIO ================== --
CREATE TABLE usuario(
    user VARCHAR(50) PRIMARY KEY NOT NULL,
    codigo VARCHAR(15) DEFAULT '',
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
    id_empresa INT,

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

CREATE TABLE sub_servicios(
    id_sub_servicio INT AUTO_INCREMENT,
    id_servicio INT NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(500),
    costo_directo INT NOT NULL,
    costo_variable INT NOT NULL,

    fec_crea TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_crea VARCHAR(50) NOT NULL,
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_mod VARCHAR(50) NOT NULL,

    PRIMARY KEY (id_sub_servicio, id_servicio),
    FOREIGN KEY (id_servicio) REFERENCES servicio(id_servicio) ON UPDATE CASCADE ON DELETE CASCADE
);

-- ==================== FRX ==================== --
CREATE TABLE cotizacion(
    cod_cotizacion VARCHAR(50) NOT NULL PRIMARY KEY,
    fec_solicitud VARCHAR(50) NOT NULL,
    fec_emision VARCHAR(50) NOT NULL,
    id_servicio INT NOT NULL,
    id_persona INT NOT NULL,
    costo_total DECIMAL(10, 2) NOT NULL,
    descuento INT,
    total_pagar DECIMAL(10, 2) NOT NULL,
        
    fec_crea TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_crea VARCHAR(50) NOT NULL,
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_mod VARCHAR(50) NOT NULL,

    FOREIGN KEY (id_servicio) REFERENCES servicio(id_servicio) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_persona) REFERENCES persona(id_persona) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE cotizacion_muestra(
    cod_cotizacion VARCHAR(50) NOT NULL,
    muestra_sec INT NOT NULL,
    costo_muestra DECIMAL(10, 2),
    cod_interno VARCHAR(50) NOT NULL,
        
    fec_crea TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_crea VARCHAR(50) NOT NULL,
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_mod VARCHAR(50) NOT NULL,

    PRIMARY KEY (cod_cotizacion, muestra_sec),
    FOREIGN KEY (cod_cotizacion) REFERENCES cotizacion(cod_cotizacion) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE  parametro(
    id_parametro INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    costo_directo DECIMAL(10, 2),
    costo_variable DECIMAL(10, 2),
        
    fec_crea TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_crea VARCHAR(50) NOT NULL,
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_mod VARCHAR(50) NOT NULL
);

CREATE TABLE muestra_parametro(
    cod_cotizacion VARCHAR(50) NOT NULL,
    muestra_sec INT NOT NULL,
    id_parametro INT NOT NULL,
    costo_parametro DECIMAL(10, 2),
    observacion VARCHAR(500),
        
    fec_crea TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_crea VARCHAR(50) NOT NULL,
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_mod VARCHAR(50) NOT NULL,

    PRIMARY KEY (cod_cotizacion, muestra_sec, id_parametro),
    -- FOREIGN KEY (cod_cotizacion) REFERENCES cotizacion(cod_cotizacion) ON UPDATE CASCADE ON DELETE CASCADE,
	-- FOREIGN KEY (muestra_sec) REFERENCES cotizacion_muestra(muestra_sec) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (id_parametro) REFERENCES parametro(id_parametro) ON UPDATE CASCADE ON DELETE CASCADE
);


CREATE TABLE recepcion(
    cod_cotizacion VARCHAR(50) PRIMARY KEY NOT NULL,
    fec_recepcion DATETIME,
    user_recepcion VARCHAR(50) NOT NULL,
    observaciones VARCHAR(50) NOT NULL,

    user_asignado VARCHAR(50),
    fec_ini DATETIME,
    fec_fin DATETIME,
    estado INT DEFAULT 1,
        
    fec_crea TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_crea VARCHAR(50) NOT NULL,
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_mod VARCHAR(50) NOT NULL,
    
    FOREIGN KEY (cod_cotizacion) REFERENCES cotizacion(cod_cotizacion) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE documento(
    cod_cotizacion VARCHAR(50) PRIMARY KEY NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    token VARCHAR(500) NOT NULL,
    FOREIGN KEY (cod_cotizacion) REFERENCES cotizacion(cod_cotizacion) ON UPDATE CASCADE ON DELETE CASCADE
);

-- =================== GASTOS ================== --
CREATE TABLE area(
    id_area INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(500)
);

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

CREATE TABLE tipo_gasto(
    id_tipo_gasto INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(500)
);

CREATE TABLE gasto(
    codigo_gasto VARCHAR(50) PRIMARY KEY,
    version VARCHAR(50) NOT NULL,
    area VARCHAR(50) NOT NULL,
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

CREATE TABLE unidad_medida(
    id_unidad_medida INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(500)
);

CREATE TABLE gasto_detalle(
    codigo_gasto VARCHAR(50) NOT NULL,
    sec INT NOT NULL,
    descripcion VARCHAR(500),
    cantidad INT NOT NULL,
    unidad_medida VARCHAR(50) NOT NULL, -- SERVICIO, UNIDAD, etc 
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

DROP TABLE code;
DROP TABLE auth;
DROP TABLE contacto;
DROP TABLE autorizacion_route;
DROP TABLE route;
DROP TABLE usuario;


DROP TABLE cotizacion_muestra;
DROP TABLE muestra_parametro;
DROP TABLE parametro;
DROP TABLE recepcion;
DROP TABLE documento;
DROP TABLE cotizacion;
DROP TABLE empresa;
DROP TABLE persona;


DROP TABLE sub_servicios;
DROP TABLE servicio;
DROP TABLE tipo_servicio;


DROP TABLE area;
DROP TABLE tipo_gasto;
DROP TABLE unidad_medida;
DROP TABLE gasto_detalle;
DROP TABLE gasto;
DROP TABLE proveedor;

*/
