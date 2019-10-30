import Component from '../Component.js';
import Header from './Header.js';
import FilterImages from './FilterImages.js';
//import ImageList from './ImageList.js';
import animals from '../data/images.js';

class App extends Component{

    onRender(dom){

        const props = {
            animals: animals
        };

        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const filterImages = new FilterImages();

        // render FilterImages
        // render ImageList
    }

    renderHTML(){
        // generate skeleton for header, main, and footer
        return `
        <div>
        <main>
            <div id="filter">
            </div>
            <div class="animal-cards">
            </div>
        </main>
        </div>
        `;
    }
}

export default App;