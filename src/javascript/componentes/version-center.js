class versionCenter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let menuHome = `<div class="head-version">
                            <div>
                                <h2>OWASP Mutillidae II: Keep Calm and Pwn On</h2>
                            </div>
                            <i>
                                Version: 2.8.78
                                <span>Security Level: 1
                                    (Client-Side
                                    Security)</span>
                                <span>Hints: Enabled</span>
                                <span>Not Logged In</span>
                            </i>
                        </div>`

        let menuOthers =`<div class="head-version">
                            <div>
                                <h2>OWASP Mutillidae II: Keep Calm and Pwn On</h2>
                            </div>
                            <i>
                                Version: 2.8.78
                                <span>Security Level: 1
                                    (Client-Side
                                    Security)</span>
                                <span>Hints: Enabled</span>
                                <span>Not Logged In</span>
                            </i>
                        </div>`;
        
        var rutaAbsoluta = self.location.href;   
		var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
		var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
        
        rutaRelativa ==='index.html'? this.innerHTML = menuHome : this.innerHTML = menuOthers;
    }
    
}

window.customElements.define("version-center", versionCenter);