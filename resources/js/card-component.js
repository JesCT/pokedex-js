class card extends HTMLElement{
    constructor(){
        super()
        this.num
    }

    static get observedAttributes(){
        return ['num']
    }

    attributeChangedCallback(nameAtr, oldValue, newValue){
        switch(nameAtr){
            case 'num':
                this.num = newValue
            break
        }
    }

    connectedCallback(){
        this.innerHTML = 
            `<div class="card">
                <div class="card-header bg-danger"></div>
                <div class="card-body">
                    <p id="n${this.num}">Loading...</p>
                    <img class="img-fluid" src="/resources/imgs/proceso.png" id="img${this.num}">
                </div>
            </div>`;
    }
}

window.customElements.define('card-component', card)