/**
 * popup.js - Scripts of popup.html
 */
const STORAGE_KEY = 'AdsBlockerOptions';

let container = document.querySelector('.container');

let options = [
    {
        name: "active",
        desc: "启用插件",
        value: true
    },
    {
        name: "blockSidebar",
        desc: "屏蔽搜索结果页右侧推荐",
        value: true
    }
];

function getOptions() {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get([`${STORAGE_KEY}`], function(items){
            resolve(items[STORAGE_KEY]);
        });
    });
}

function setOptions() {
    chrome.storage.local.set({
        [STORAGE_KEY]: options
    }, () => {
        console.log('Options saved.');
    });
}

function renderOptions() {
    let optHtml = options.map((opt, idx) => (
        `
        <div class="menu-block">
            ${opt.desc}
            <label class="ui-switch">
                <input type="checkbox"
                    data-option-name="${opt.name}" data-index="${idx}"
                    ${opt.value?'checked':''}>
            </label>
        </div>
        `
    )).join('');

    container.innerHTML = container.innerHTML + optHtml;
}

function bindEvent() {
    let inputs = Array.from(container.querySelectorAll('input[type="checkbox"]'));
    inputs.map((checkbox) => {
        checkbox.addEventListener('change', (e) => {
            let optionName = checkbox.dataset.optionName;
            let optionValue = checkbox.checked;
            let optionIndex = checkbox.dataset.index;

            console.log('option "%s" now change to "%s"', optionName, optionValue);

            options[optionIndex].value = optionValue;

            setOptions();
        });
    });
}

getOptions().then((savedOptions) => {
    options = savedOptions || options;

    renderOptions();
    bindEvent();
});