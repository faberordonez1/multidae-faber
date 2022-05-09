class backButton extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let boton = `			<div class="hero-index icons">
                            <div>
                                <a href="../index.html">
                                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                    Back
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <i class="fa fa-info-circle" aria-hidden="true"></i> Help
                                    Help Me!
                                </a>
                            </div>
                        </div>`

         this.innerHTML = boton;
    }
    
}

window.customElements.define("back-button", backButton);