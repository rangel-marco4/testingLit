import {LitElement, html, css} from 'lit';

class MyTest extends LitElement {
    render(){
        return html`<p>Hello World!</p>`;
    }
}

window.customElements.define("my-element", MyTest);