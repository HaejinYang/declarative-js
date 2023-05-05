import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function (el) {
    this.init(el);
    this.inputEl = el.querySelector('[type=text]');
    this.resetEl = el.querySelector('[type=reset]');
    this.showResetButton(false);
    this.registerOnSubmitHandler();
    this.registerOnKeyUpHandler();
    this.registerOnResetHandler();

    return this;
}

FormView.showResetButton = function (isShow = true) {
    this.resetEl.style.display = isShow ? 'block' : 'none';
}

FormView.registerOnKeyUpHandler = function () {
    this.on('keyup', e => {
        this.showResetButton(this.inputEl.value.length);
        const enter = 13;

        if (e.keyCode !== enter) {
            return;
        }

        this.emit('@submit', {input: this.inputEl.value});
    });
}

FormView.registerOnSubmitHandler = function () {
    this.on('submit', e => {
        console.log(tag, 'registerOnSubmitHandler()');
        e.preventDefault();
    });
}

FormView.clearInput = function () {
    this.inputEl.value = "";
}

FormView.registerOnResetHandler = function () {
    this.on('reset', e => {
        this.emit('@reset');
        this.showResetButton(false);
    })
}

export default FormView;