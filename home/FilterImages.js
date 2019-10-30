import Component from '../Component.js';

class FilterImages extends Component{

    renderHTML(){
        const images = this.props.images;
        const keywords = images.map(image => image.keyword);
        const uniqueKeywords = [...new Set(keywords)];
        const uniqueKeywordHTMLStrings = uniqueKeywords.map(keyword => `<option value="${keyword}">${keyword}</option>`);
        let optionsHTMLString = '';
        uniqueKeywordHTMLStrings.forEach(optionString => {
            optionsHTMLString += optionString;
        });

        return `
        <select name="animals" id="animal-filter"><option value="">All</option>${optionsHTMLString}</select>`;
    }

    onRender(select){
        const onFilter = this.props.onFilter;

        select.addEventListener('change', () => {
            onFilter(select.value);
        });
    }
}

export default FilterImages;