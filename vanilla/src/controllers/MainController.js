import FormView from "../views/FormView.js";
import ResultView from "../views/ResultView.js";
import SearchModel from "../models/SearchModel.js";
import tabView from "../views/TabView.js";
import TabView from "../views/TabView.js";

const tag = '[MainController]';

export default {
    init() {
      console.log(tag, 'init()');

      FormView.setup(document.querySelector('form'))
          .on('@submit', e => this.onSubmit(e.detail.input))
          .on('@reset', e => this.onRestForm());

      ResultView.setup(document.querySelector('#search-result'));

      TabView.setup(document.querySelector('#tabs'))
          .on('@change', e => this.onChangeTab(e.detail.tabName))
    },

    search(query) {
      console.log(tag, 'search()', query);
      SearchModel.list("").then(data => {
          this.onSearchResult(data);
      });
      //search api
    },

    onSubmit(input) {
        console.log(tag, 'onSubmit()', input);
        this.search(input);
    },

    onRestForm() {
        console.log(tag, 'onRestForm()');
        ResultView.hide();
    },

    onSearchResult(data) {
        ResultView.render(data);
    },

    onChangeTab(tabName) {
    },
}