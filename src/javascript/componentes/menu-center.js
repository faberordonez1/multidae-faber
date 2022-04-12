class menuCenter extends HTMLElement{
    constructor(){
        super();
    }
    
    connectedCallback(){
        let menuHome = `
        <nav>
            <ul>
                <li><a href='index.html'>Home</a></li>
                <li><a href="pages/login.html">Login/Register</a></li>
                <li><a href="pages/inlogin.html">Toggle Security</a></li>
                <li><a href="index.html">Enforce TLS</a></li>
                <li><a href="pages/set-up-database.html">Reset DB</a></li>
                <li><a href="pages/show-log.html">View Log</a></li>
                <li><a href="pages/captured-data.html">View Captured Data</a></li>
            </ul>
        </nav>`;

        let menuOthers =  `
        <nav><ul>
            <li><a href='../index.html'>Home</a></li>
            <li><a href="login.html">Login/Register</a></li>
            <li><a href="inlogin.html">Toggle Security</a></li>
            <li><a href="../index.html">Enforce TLS</a></li>
            <li><a href="set-up-database.html">Reset DB</a></li>
            <li><a href="show-log.html">View Log</a></li>
            <li><a href="captured-data.html">View Captured Data</a></li>
        </ul>
    </nav>`


        var rutaAbsoluta = self.location.href;   
		var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
		var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
        if(rutaRelativa === '' || rutaRelativa ==='index.html'){
            this.innerHTML = menuHome
        }else{
            this.innerHTML = menuOthers;
        }
    }
}

window.customElements.define("menu-center", menuCenter)