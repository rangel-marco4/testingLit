import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class MyTest extends LitElement {
    render(){
        return html`<p>Hello World!</p>`;
    }
}

window.customElements.define("my-element", MyTest);