class Login{
    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static acessologado = null;
    static estilocss = null;
    static callback_ok = null;
    static callback_naook = null;

    static login = (callback_ok, callback_naook)=>{

        this.callback_ok = ()=>{callback_ok()}
        this.callback_naook = ()=>{callback_naook()}

        this.estilocss = 
            ".fundoLogin{display: flex;justify-content: center;align-items: center;width: 100%;height: 100vh;position: absolute;top: 0px;left: 0px;background-color: rgba(0, 0, 0, 0.75);}" +
            ".baseLogin{display: flex;justify-content: center;align-items: stretch;width: 70%;}" +
            ".elementosLogin{display: flex;justify-content: center;align-items: flex-start;flex-direction: column;width: 50%;background-color: #bbb;padding: 10px;border-radius: 10px 0px 0px 10px;}" +
            ".logoLogin{display: flex;justify-content: center;align-items: center;width: 50%;background-color: #ccc;padding: 10px;border-radius: 0px 10px 10px 0px;}" +
            ".logoLogin img{width: 700px;cursor: pointer;}" +
            ".campoLogin{display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;}" +
            ".botoesLogin{display: flex;justify-content: center;align-items: center;width: 100%;}" +
            ".botoesLogin button{cursor: pointer;background-color: #048;color: #fff;border-radius: 5px;padding: 10px 20px;width: 100px;margin: 20px;}"

        const styleEstilo = document.createElement("style");
        styleEstilo.setAttribute("rel", "stylesheet");
        styleEstilo.setAttribute("type", "text/CSS");
        styleEstilo.setAttribute("id", "id_estiloCSS");
        styleEstilo.innerHTML = this.estilocss;
        document.head.appendChild(styleEstilo);

        //HTML
        const fundoLogin = document.createElement("div")
        fundoLogin.setAttribute("id", "fundoLogin")
        fundoLogin.setAttribute("class", "fundoLogin")
        document.body.prepend(fundoLogin)

        const baseLogin = document.createElement("div")
        baseLogin.setAttribute("id", "baseLogin")
        baseLogin.setAttribute("class", "baseLogin")
        fundoLogin.appendChild(baseLogin)

        const elementosLogin = document.createElement("div")
        elementosLogin.setAttribute("id", "elementosLogin")
        elementosLogin.setAttribute("class", "elementosLogin")
        baseLogin.appendChild(elementosLogin)

        const campoLoginUsername = document.createElement("div")
        campoLoginUsername.setAttribute("class", "campoLogin")
        elementosLogin.appendChild(campoLoginUsername)

        const labelUsername = document.createElement("label")
        labelUsername.innerHTML = "Username";
        campoLoginUsername.appendChild(labelUsername)

        const inputUsername = document.createElement("input")
        inputUsername.setAttribute("type", "text")
        inputUsername.setAttribute("name", "f_username")
        inputUsername.setAttribute("id", "f_username")
        campoLoginUsername.appendChild(inputUsername)

        const campoLoginSenha = document.createElement("div")
        campoLoginSenha.setAttribute("class", "campoLogin")
        elementosLogin.appendChild(campoLoginSenha)

        const labelSenha = document.createElement("label")
        labelSenha.innerHTML = "Senha";
        campoLoginSenha.appendChild(labelSenha)

        const inputSenha = document.createElement("input")
        inputSenha.setAttribute("type", "password")
        inputSenha.setAttribute("name", "f_senha")
        inputSenha.setAttribute("id", "f_senha")
        campoLoginSenha.appendChild(inputSenha)

        const botoesLogin = document.createElement("div")
        botoesLogin.setAttribute("class", "botoesLogin")
        elementosLogin.appendChild(botoesLogin)

        const btn_login = document.createElement("button")
        btn_login.setAttribute("id", "btn_login")
        btn_login.innerHTML = "Login";
        btn_login.addEventListener("click", ()=>{
            this.verificaLogin()
        })
        botoesLogin.appendChild(btn_login)

        const btn_cancelar = document.createElement("button")
        btn_cancelar.setAttribute("id", "btn_cancelar")
        btn_cancelar.innerHTML = "Cancelar";
        btn_cancelar.addEventListener("click", ()=>{
            this.fechar();
        })
        botoesLogin.appendChild(btn_cancelar)

        const logoLogin = document.createElement("div")
        logoLogin.setAttribute("id", "logoLogin")
        logoLogin.setAttribute("class", "logoLogin")
        baseLogin.appendChild(logoLogin)

        const imgLogin = document.createElement("img")
        imgLogin.setAttribute("src", "logo_png_complete.png")
        imgLogin.setAttribute("title", "AIUP")
        logoLogin.appendChild(imgLogin) 
    }

    static verificaLogin = ()=>{
        let mat = document.getElementById("f_username").value;
        let pas = document.getElementById("f_senha").value;
        console.log(mat + " - " + pas)
        let endpoint = "https://bf4030b4-1616-49ed-bd46-2491f6e4c26f-00-3crsl37297hxx.riker.replit.dev/";
        endpoint += `?matricula=${mat}&senha=${pas}`;
        fetch(endpoint)
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            if(res){
                this.logado = true;
                this.matlogado = mat;
                this.nomelogado = res.nome;
                this.acessologado = res.acesso;
                this.callback_ok();
                this.fechar();
            }else{
                this.logado = false;
                this.matlogado = null;
                this.nomelogado = null;
                this.acessologado = null;
                this.callback_naook();
            }
        })
    }

    static fechar = ()=>{
        const fundoLogin = document.getElementById("fundoLogin");
        fundoLogin.remove();
        const id_estiloCSS = document.getElementById("id_estiloCSS");
        id_estiloCSS.remove();
    }
}
export {Login};