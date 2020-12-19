/* 
autenticavel = qualquer classe que tenha o metodo autenticar
*/

export class SistemaAutenticacao{
    static login (autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && 
                autenticar.autenticavel instanceof Function;
    }
}