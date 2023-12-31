function validation(){
    if(document.formfill.username.value==""){
        document.getElementById("result").innerHTML="Insira um nome de usuário válido*"
        return false;
    }
    else if(document.formfill.username.value.length<6){
        document.getElementById("result").innerHTML="O nome de usuário deve ter ao menos 6 caracteres*"
        return false;
    }
    else if(document.formfill.email.value==""){
        document.getElementById("result").innerHTML="Insira um email*"
        return false;
    }
    else if(document.formfill.senha.value==""){
        document.getElementById("result").innerHTML="Insira uma senha*"
        return false;
    }
    else if(document.formfill.Csenha.value==""){
        document.getElementById("result").innerHTML = "Confirme a senha"
        return false;
    }
    else if(document.formfill.senha.value.length<8){
        document.getElementById("result").innerHTML = "A senha deve ter no minimo 8 caracteres"
        return false;
    }
    else if(document.formfill.senha.value!==document.formfill.Csenha.value){
        document.getElementById("result").innerHTML = "A senhas não são iguais"
        return false;
    }
}