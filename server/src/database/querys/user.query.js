
export class UserQuerys {

    static VIEW_GET_USERS_EMPRESA = `CREATE VIEW get_users_empresa AS
    SELECT us._login as id_user, us.name nombreUsuario, us.email, ap.empresa
    FROM sec_users as us JOIN acceso_empresas as ap ON us.empresa=ap.id;
    `
    static GET_USERS_BY_EMPRESA = `SELECT * FROM get_users_empresa WHERE empresa= ? `;
    
    static GET_USERS_AND_EMPRESA = `SELECT * FROM get_users_empresa`;

}