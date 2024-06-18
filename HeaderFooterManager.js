class SpecialHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML='            <div class="header">
                <a href="https://bigdanshemporium.com/"><image src="Various-assets/bigdan.png" width="250" height="200" class="bigdan"></image></a>
                <input type="text" placeholder="What can we help you with?">
                <image class="search-icon" src="Various-assets/information.png" width="43" height="40"></image>
                <div class="navbar">
                    <ul>
                        <li>
                            <div class="dropdown">
                                <button><a href="#">Shop</a></button>
                                <div class="dropdown-content">
                                    <a href="#">Gummies</a>
                                    <a href="#">Edibles</a>
                                    <a href="#">CBD</a>
                                    <a href="#">Vapes</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <button><a href="#">About Us</a></button>
                        </li>
                        <li>
                            <button><a href="#">Locations</a></button>
                        </li>
                        <li>
                            <button><a href="#">Contact Us</a></button>
                        </li>
                        <li>
                            <button><a href="#">FAQ's</a></button>
                        </li>
                        <li>
                            <button><a href="#">Shipping & Returns</a></button>
                        </li>
                        <li>
                            <button><a href="#">Lab Tests</a></button>
                        </li>
                        <li>
                            <button><a href="#">Affiliate Program</a></button>
                        </li>
                        <li>
                            <button><a href="#">Franchising</a></button>
                        </li>                
                    </ul>
                </div>    
            </div>'
    }
}

class SpecialFooter extends HTMLElement{
    connectedCallback() {}
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)