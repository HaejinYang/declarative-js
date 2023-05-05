import View from "./View.js";

const tag = '[TabView]';

const TabView = Object.create(View);

TabView.setup = function (el) {
    this.init(el);
    this.recommendEl = el.querySelector('#recommend');
    this.recentEl = el.querySelector('#recent');
    this.on('click', e => this.onClick(e));

    this.focusRecommend();

    return this;
}

TabView.focusRecommend = function () {
    this.recentEl.classList.remove('active');
    this.recommendEl.classList.add('active');
}

TabView.focusRecent = function () {
    this.recentEl.classList.add('active');
    this.recommendEl.classList.remove('active');
}

TabView.onClick = function (event) {
    let changeEl = "";
    if (event.target === this.recentEl) {
        this.focusRecent();
        changeEl = "recent";
    } else if (event.target === this.recommendEl) {
        this.focusRecommend();
        changeEl = "recommend";
    } else {
        throw `${tag} onclick() not matched`;
    }

    this.emit('@change', {tabName: changeEl})
}

export default TabView;

