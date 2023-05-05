import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function (el) {
    this.init(el);
    this.inputEl = el.querySelector('[type=text]');
    this.resetEl = el.querySelector('[type=reset]');
    this.showResetButton(false);
}

FormView.showResetButton = function (isShow = true) {
    this.resetEl.style.display = isShow ? 'block' : 'none';
}

export default FormView;