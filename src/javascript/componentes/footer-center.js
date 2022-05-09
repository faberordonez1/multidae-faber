class footerCenter extends HTMLElement{
    constructor(){
        super();
    }
    
    connectedCallback(){
        let menuHome = `
                        <footer>
                        <div class="container">
                            <div class="footer-col-1">
                                <h2>MULTIDAE</h2>
                                <a href="https://www.paypal.com/donate/?token=yV1V-4pSTNgqz462Zf4R08irjQ8ZJDKQg2_9KxJ1TPzJ-xzUItWTdlMoOZjDI0t3pjze1PUScN7lh7h5"
                                    class="btn-donar" target="_blank">Donate</a>
                                Want to Help?
                            </div>
                            <div class="footer-menu">
                                <ul>
                                    <li><a href='index.html'>Home</a></li>
                                    <li><a href="pages/login.html">Login/Register</a></li>
                                    <li><a href="pages/inlogin.html">Toggle Security</a></li>
                                    <li><a href="index.html">Enforce TLS</a></li>
                                </ul>
                            </div>
                            <div class="footer-menu footer-menu2">
                                <ul>
                                    <li><a href="pages/set-up-database.html">Reset DB</a></li>
                                    <li><a href="pages/show-log.html">View Log</a></li>
                                    <li><a href="pages/captured-data.html">View Captured Data</a></li>
                                </ul>
                            </div>
                            <div class="footer-col-2">
                                <div>
                                    <a href="http://www.youtube.com/user/webpwnized" target="_blank">
                                        <i class="fa fa-youtube-play" aria-hidden="true"></i>
                                        Video Tutorials
                                    </a>
                                </div>
                                <div>
                                    <a href="https://twitter.com/webpwnized" target="_blank">
                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                        Announcements
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.sans.org/reading-room/whitepapers/application/introduction-owasp-mutillidae-ii-web-pen-test-training-environment-34380"
                                        target="_blank"
                                        title="Whitepaper: Introduction to OWASP Mutillidae II Web Pen Test Training Environment">
                                        <i class="fa fa-file-o" aria-hidden="true"></i>
                                        Getting Started
                                    </a>
                                </div>
                            </div>
                        </div>
                    </footer>
                    <div class="footer-copy">
                        <div class="container">
                            <i>Browser: Mozilla/5.0 </i>
                            <i>SO (X11;Ubuntu; Linux x86_64; rv:98.0)</i>
                            <i>PHP Version: 8.1.4</i>
                            Gecko/20100101 Firefox/98.0<br>
                        </div>
                    </div>`;

        let menuOthers =  `
                        <footer>
                        <div class="container">
                            <div class="footer-col-1">
                                <h2>MULTIDAE</h2>
                                <a href="https://www.paypal.com/donate/?token=yV1V-4pSTNgqz462Zf4R08irjQ8ZJDKQg2_9KxJ1TPzJ-xzUItWTdlMoOZjDI0t3pjze1PUScN7lh7h5"
                                    class="btn-donar" target="_blank">Donate</a>
                                Want to Help?
                            </div>
                            <div class="footer-menu">
                                <ul>
                                    <li><a href='index.html'>Home</a></li>
                                    <li><a href="pages/login.html">Login/Register</a></li>
                                    <li><a href="pages/inlogin.html">Toggle Security</a></li>
                                    <li><a href="index.html">Enforce TLS</a></li>
                                </ul>
                            </div>
                            <div class="footer-menu footer-menu2">
                                <ul>
                                    <li><a href="pages/set-up-database.html">Reset DB</a></li>
                                    <li><a href="pages/show-log.html">View Log</a></li>
                                    <li><a href="pages/captured-data.html">View Captured Data</a></li>
                                </ul>
                            </div>
                            <div class="footer-col-2">
                                <div>
                                    <a href="http://www.youtube.com/user/webpwnized" target="_blank">
                                        <i class="fa fa-youtube-play" aria-hidden="true"></i>
                                        Video Tutorials
                                    </a>
                                </div>
                                <div>
                                    <a href="https://twitter.com/webpwnized" target="_blank">
                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                        Announcements
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.sans.org/reading-room/whitepapers/application/introduction-owasp-mutillidae-ii-web-pen-test-training-environment-34380"
                                        target="_blank"
                                        title="Whitepaper: Introduction to OWASP Mutillidae II Web Pen Test Training Environment">
                                        <i class="fa fa-file-o" aria-hidden="true"></i>
                                        Getting Started
                                    </a>
                                </div>
                            </div>
                        </div>
                    </footer>
                    <div class="footer-copy">
                        <div class="container">
                            <i>Browser: Mozilla/5.0 </i>
                            <i>SO (X11;Ubuntu; Linux x86_64; rv:98.0)</i>
                            <i>PHP Version: 8.1.4</i>
                            Gecko/20100101 Firefox/98.0<br>
                        </div>
                    </div>`


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

window.customElements.define("footer-center", footerCenter)