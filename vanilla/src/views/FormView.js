import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function (el) {
    this.init(el);
    this.inputEl = el.querySelector('[type=text]');
    this.resetEl = el.querySelector('[type=reset]');
    this.showResetButton(false);
    this.registerOnInputHandler();
    this.registerOnSubmitHandler();
}

FormView.showResetButton = function (isShow = true) {
    this.resetEl.style.display = isShow ? 'block' : 'none';
}

FormView.registerOnInputHandler = function () {
    this.on('input', e => {
        // 2. 검색어를 보이면 x버튼이 보이고, 없으면 x버튼을 숨긴다.
        this.showResetButton();
    });
}

FormView.registerOnSubmitHandler = function () {
    this.on('submit', e => {
        console.log(tag, 'registerOnResetHandler()');
        e.preventDefault();
        this.showResetButton(false);
        this.clearInput();
    });
}

FormView.clearInput = function () {
    this.inputEl.value = "";
}


export default FormView;