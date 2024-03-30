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
export const routeContactoAgregar = {
    route: '[POST].../v1/contacto/:user',
    title: 'Agregar Contactos'
};

export const routeContactoLista = {
    route: '[GET].../v1/contacto/:user',
    title: 'Lista Contactos'
};

// ========= CODE ========= \\
export const routeCodeGet = {
    route: '[GET].../v1/code/:code',
    title: 'Obtener un code'
};

export const routeCodeLista = {
    route: '[GET].../v1/code',
    title: 'Lista Code'
};

export const routeCodeUpdate = {
    route: '[PATCH].../v1/code/:id',
    title: 'Update Code'
};

// =========  ========= \\

// =========  ========= \\

/*export const x = {
    route: '',
    title: ''
};*/