import FormView from "../views/FormView.js";

const tag = '[MainController]';

export default {
    init() {
      console.log(tag, 'init()');

      FormView.setup(document.querySelector('form')).on('@submit', e => {
          console.log(tag, e.detail.input);
      });
    },
}