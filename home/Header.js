import Component from '../Component.js';

class Header extends Component{
    renderHTML() {
        return `
        <header>
            <h1>Rhinos and Narwahls and Unicorns, Oh My!</h1>
            <img src="../assets/logo.jpg" alt="unicorn logo">
        </header>
        `;
    }
}

export default Header;