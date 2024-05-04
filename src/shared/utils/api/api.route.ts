// ========= USUARIO ========= \\
export const routeUsuarioRegistro = {
    route: '[POST].../v1/usuario',
    title: 'Registro Usuario'
};

export const routeUsuarioGetLista = {
    route: '[GET].../v1/usuario',
    title: 'Lista de usuarios'
};

export const routeUsuarioGet = {
    route: '[GET].../v1/usuario/:user',
    title: 'Obtener un usuario'
};

// ========= AUTH ========= \\
export const routeAuthRegistro = {
    route: '[POST].../v1/auth',
    title: 'Registro Auth'
};

export const routeAuthLogin = {
    route: '[POST].../v1/auth/login/:user/:password',
    title: 'Login Auth'
};

export const routeAuthForgot = {
    route: '[PATCH].../v1/auth/:user',
    title: 'Forgot Password'
};

// ========= CONTACTO ========= \\
export const routeContactoAdd = {
    route: '[POST].../v1/contacto/:user',
    title: 'Agregar Contactos'
};

export const routeContactoLista = {
    route: '[GET].../v1/contacto/:user',
    title: 'Lista Contactos'
};

// ========= CODE ========= \\
export const routeCodeAdd = {
    route: '[POST].../v1/code',
    title: 'Registro Auth'
};

export const routeCodeGet = {
    route: '[GET].../v1/code/:code',
    title: 'Obtener un code'
};

export const routeCodeLista = {
    route: '[GET].../v1/code/lista/:user',
    title: 'Lista Code'
};

export const routeCodeUpdate = {
    route: '[PATCH].../v1/code/:id',
    title: 'Update Code'
};

export const routeCodeDelete = {
    route: '[DELETE].../v1/code/:id',
    title: 'Delete Code'
};

// ========= EMPRESA ========= \\
export const routeEmpresaAdd = {
    route: '[POST].../v1/empresa',
    title: 'Registro Empresa'
};

export const routeEmpresaGet = {
    route: '[GET].../v1/empresa/:razon_social',
    title: 'Obtener una empresa'
};

export const routeEmpresaLista = {
    route: '[GET].../v1/empresa',
    title: 'Lista empresa'
};

export const routeEmpresaUpdate = {
    route: '[PATCH].../v1/empresa/:id',
    title: 'Update Empresa'
};

export const routeEmpresaDelete = {
    route: '[DELETE].../v1/empresa/:id',
    title: 'Delete Empresa'
};

// ========= PERSONA ========= \\
export const routePersonaAdd = {
    route: '[POST].../v1/persona',
    title: 'Registro persona'
};

export const routePersonaGet = {
    route: '[GET].../v1/persona/:attribute/:value',
    title: 'Obtener una persona'
};

export const routePersonaLista = {
    route: '[GET].../v1/persona',
    title: 'Lista personas'
};

export const routePersonaUpdate = {
    route: '[PATCH].../v1/persona/:id',
    title: 'Update persona'
};

export const routePersonaDelete = {
    route: '[DELETE].../v1/persona/:id',
    title: 'Delete persona'
};

// ========= TIPO SERVICIO ========= \\
export const routeTipoServicioAdd = {
    route: '[POST].../v1/tipo-servicio',
    title: 'Registro Tipo Servicio'
};

export const routeTipoServicioGet = {
    route: '[GET].../v1/tipo-servicio/:nombre',
    title: 'Obtener un Tipo Servicio'
};

export const routeTipoServicioLista = {
    route: '[GET].../v1/tipo-servicio',
    title: 'Lista Tipo Servicio'
};

export const routeTipoServicioUpdate = {
    route: '[PATCH].../v1/tipo-servicio/:id',
    title: 'Update Tipo Servicio'
};

export const routeTipoServicioDelete = {
    route: '[DELETE].../v1/tipo-servicio/:id',
    title: 'Delete Tipo Servicio'
};

// ========= SERVICIO ========= \\
export const routeServicioAdd = {
    route: '[POST].../v1/servicio',
    title: 'Registro Servicio'
};

export const routeServicioGet = {
    route: '[GET].../v1/servicio/:nombre',
    title: 'Obtener un Servicio'
};

export const routeServicioGetTipoServicio = {
    route: '[GET].../v1/servicio/tipo-servicio/:id_tipo_servicio',
    title: 'Obtener un Tipo Servicios por id_tipo_servicio'
};

export const routeServicioLista = {
    route: '[GET].../v1/servicio',
    title: 'Lista Servicios'
};

export const routeServicioUpdate = {
    route: '[PATCH].../v1/servicio/:id',
    title: 'Update Servicio'
};

export const routeServicioDelete = {
    route: '[DELETE].../v1/servicio/:id',
    title: 'Delete Servicio'
};

// ========= SUB SERVICIO ========= \\
export const routeSubServicioAdd = {
    route: '[POST].../v1/sub-servicio',
    title: 'Registro Sub Servicio'
};

export const routeSubServicioGetLista = {
    route: '[GET].../v1/sub-servicio/:id_servicio',
    title: 'Obtener un Sub Servicio'
};

export const routeSubServicioUpdate = {
    route: '[PATCH].../v1/sub-servicio/:id_servicio',
    title: 'Update Servicio'
};

export const routeSubServicioDelete = {
    route: '[DELETE].../v1/servicio/:id_servicio',
    title: 'Delete Servicio'
};

// ========= COTIZACION ========= \\
export const routeCotizacionFrxAdd = {
    route: '[POST].../v1/cotizacion-frx',
    title: 'Registro Cotización FRX'
};

export const routeCotizacionFrxGet = {
    route: '[GET].../v1/cotizacion-frx/:cod_cotizacion',
    title: 'Búsqueda Cotización FRX'
};

export const routeCotizacionFrxGetNow = {
    route: '[GET].../v1/cotizacion-frx/now/:fec_solicitud',
    title: 'Búsqueda Cotización FRX Hoy'
};

export const routeCotizacionFrxGetLista = {
    route: '[GET].../v1/cotizacion-frx/find-by-id-tipo-servicio/:id_tipo_servicio',
    title: 'Obtener lista Cotización FRX'
};

export const routeCotizacionFrxUpdate = {
    route: '[PATCH].../v1/cotizacion-frx/:id_parametro',
    title: 'Update Cotización FRX'
};

export const routeCotizacionFrxDelete = {
    route: '[DELETE].../v1/cotizacion-frx/:id_parametro',
    title: 'Delete Cotización FRX'
};

// ========= MUESTRA ========= \\
export const routeMuestraFrxAdd = {
    route: '[POST].../v1/muestra-frx/:cod_cotizacion',
    title: 'Agregar Muestra FRX'
};

export const routeMuestraFrxLista = {
    route: '[GET].../v1/muestra-frx/:cod_cotizacion',
    title: 'Lista Muestra FRX'
};

// ========= PARAMETRO ========= \\
export const routeParametroAdd = {
    route: '[POST].../v1/parametro',
    title: 'Registro Parámetro'
};

export const routeParametroGet = {
    route: '[GET].../v1/parametro/:nombre',
    title: 'Búsqueda Parámetro'
};

export const routeParametroGetLista = {
    route: '[GET].../v1/parametro',
    title: 'Obtener Lista Parámetro'
};

export const routeParametroUpdate = {
    route: '[PATCH].../v1/parametro/:id_parametro',
    title: 'Update Parámetro'
};

export const routeParametroDelete = {
    route: '[DELETE].../v1/parametro/:id_parametro',
    title: 'Delete Parámetro'
};

// ========= MUESTRA PARAMETRO ========= \\
export const routeMuestraParametroFrxAdd = {
    route: '[POST].../v1/muestra-parametro-frx/:cod_cotizacion',
    title: 'Agregar Muestra FRX'
};

export const routeMuestraParametroFrxLista = {
    route: '[GET].../v1/muestra-parametro-frx/:cod_cotizacion',
    title: 'Lista Muestra FRX'
};

// ========= RECEPCION ========= \\
export const routeRecepcionAdd = {
    route: '[POST].../v1/recepcion',
    title: 'Registro Recepción'
};

export const routeRecepcionGet = {
    route: '[GET].../v1/recepcion/:cod_cotizacion',
    title: 'Búsqueda Recepción'
};

export const routeRecepcionGetLista = {
    route: '[GET].../v1/recepcion',
    title: 'Obtener Lista Recepción'
};

export const routeRecepcionUpdate = {
    route: '[PATCH].../v1/recepcion/:cod_cotizacion',
    title: 'Update Recepción'
};

export const routeRecepcionDelete = {
    route: '[DELETE].../v1/recepcion/:cod_cotizacion',
    title: 'Delete Recepción'
};

// ========= DOCUMENTO ========= \\
export const routeDocumentoAdd = {
    route: '[POST].../v1/documento',
    title: 'Registro Documento'
};

export const routeDocumentoGet = {
    route: '[GET].../v1/documento/:cod_cotizacion',
    title: 'Búsqueda Documento'
};

export const routeDocumentoGetLista = {
    route: '[GET].../v1/documento',
    title: 'Obtener Lista Documento'
};

export const routeDocumentoUpdate = {
    route: '[PATCH].../v1/documento/:cod_cotizacion',
    title: 'Update Documento'
};

export const routeDocumentoDelete = {
    route: '[DELETE].../v1/documento/:cod_cotizacion',
    title: 'Delete Documento'
};

// ========= COTIZACION GENERAL ========= \\
export const routeCotizacionGeneralAdd = {
    route: '[POST].../v1/cotizacion-frx',
    title: 'Registro Cotización FRX'
};

export const routeCotizacionGeneralGet = {
    route: '[GET].../v1/cotizacion-frx/:cod_cotizacion',
    title: 'Búsqueda Cotización FRX'
};

export const routeCotizacionGeneralGetNow = {
    route: '[GET].../v1/cotizacion-frx/now/:fec_solicitud',
    title: 'Búsqueda Cotización FRX Hoy'
};

export const routeCotizacionGeneralGetLista = {
    route: '[GET].../v1/cotizacion-frx/find-by-id-tipo-servicio/:id_tipo_servicio',
    title: 'Obtener lista Cotización FRX'
};

export const routeCotizacionGeneralUpdate = {
    route: '[PATCH].../v1/cotizacion-frx/:id_parametro',
    title: 'Update Cotización FRX'
};

export const routeCotizacionGeneralDelete = {
    route: '[DELETE].../v1/cotizacion-frx/:id_parametro',
    title: 'Delete Cotización FRX'
};

// ========= COTIZACION GENERAL SUB SERVICIO ========= \\
export const routeCotizacionGeneralSubServicioAdd = {
    route: '[POST].../v1/muestra-parametro-frx/:cod_cotizacion',
    title: 'Agregar Muestra FRX'
};

export const routeCotizacionGeneralSubServicioLista = {
    route: '[GET].../v1/muestra-parametro-frx/:cod_cotizacion',
    title: 'Lista Muestra FRX'
};


// =========  ========= \\

// =========  ========= \\

/*export const x = {
    route: '',
    title: ''
};*/