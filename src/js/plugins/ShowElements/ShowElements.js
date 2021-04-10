

export default class ShowElements {
    constructor({ arrClassButtons, arrClassResultElems, classButtonOn, classButtonOff, classResultVisible, classResultInvisible }) {
        this._arrClassButtons = arrClassButtons;
        this._arrClassResultElems = arrClassResultElems;
        this._classButtonOn = classButtonOn;
        this._classButtonOff = classButtonOff;
        this._classResultVisible = classResultVisible;
        this._classResultInvisible = classResultInvisible;

        this._arrElemsButton = this._arrClassButtons.map((item) => {
            return document.querySelector('.' + item)
        })
      
        this._arrElemsResult = this._arrClassResultElems.map((item) => {
            return document.querySelector('.' + item)
        }); 
        
        this._arrElemsButton.forEach((item) => {
            if (!item) return false;
            item.addEventListener('click', e => {
                
               this._render(item, e);
            })
        });

    }

    _render(item, e) {

        item.classList.remove(this._classButtonOff);
        item.classList.add(this._classButtonOn);
        
        this._arrElemsButton.forEach((item, i, arr) => {
            if (item.contains(e.target)) {
           
                this._arrElemsResult[i].classList.remove(this._classResultInvisible);
                this._arrElemsResult[i].classList.add(this._classResultVisible);
    
            } else if (item.contains(e.target)) {
                item.classList.add(this._classButtonOff);
                this._arrElemsResult[i].classList.add(this._classResultInvisible);
                this._arrElemsResult[i].classList.remove(this._classResultVisible);
            } else {
                return false
            }
        })
    }
}

// Пример:

// import ShowElements from '../../../../js/plugins/ShowElements/ShowElements';

// let showPrices = new ShowElements({
//     arrClassButtons: [
//         'prices-choise__repair-fridge',
//         'prices-choise__repair-washmach',
//         'prices-choise__repair-dishwash'
//     ],
//     arrClassResultElems: [
//         'prices-result-fridge',
//         'prices-result-washmach',
//         'prices-result-dishwash'
//     ],
//     classButtonOn: 'prices-choise__item_selected',
//     classButtonOff: 'prices-choise__item_not-selected',
//     classResultVisible: 'prices_result_visible',
//     classResultInvisible: 'prices_result_invisible'
// });