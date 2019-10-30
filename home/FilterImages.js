import Component from '../Component.js';

class FilterImages extends Component{

    renderHTML(){
        return `
        <select name="animals" id="animal-filter">
                <option value="narwhal">Narwhal</option>
                <option value="rhino">Rhino</option>
                <option value="unicorn">Unicorn</option>
                <option value="unilego">Unilego</option>
                <option value="triceratops">Triceratops</option>
                <option value="markhor">Markhor</option>
                <option value="mouflon">Mouflon</option>
                <option value="addax">Addax</option>
                <option value="chameleon">Chameleon</option>
                <option value="lizard">Lizard</option>
                <option value="dragon">Dragon</option>
                <option value="">All</option>
            </select>`;
    }

    onRender(select){
        const onFilter = this.props.onFilter;

        select.addEventListener('change', () => {
            onFilter(select.value);
        });
    }
}

export default FilterImages;