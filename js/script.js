/**
 * Description :一个用于屏蔽百度推广和广告的插件。
 * @version 0.2
 * 
 * @author 0xLLLLH
 *
 */

var blocker = {
    blockList: [
        "#content_left>div:not(.c-container)",
        ".adTopImg",
        ".widget-sma",
        ".wgt-ads",
        ".ec-ad",
        ".cms-slide",
        ".left-top-ads"
    ],
    optionBlockList: [{
        optionName: "blockSidebar",
        optionRule: [
           "#content_right",
            ".result-op.xpath-log",
            ".rrecom-btn.rrecom-btn-hover"
        ]
    }],
    start: function () {
        this.bindObserver();
        this.block();
    },

    stop: function () {
        if (null!=this.observer) {
            this.observer.disconnect();
        }
    },

    block: function () {
        var ads = [];
        var i;
        for (i = 0;i < this.blockList.length; i++) {
            ads = ads.concat(
                Array.prototype.slice.call(document.querySelectorAll(this.blockList[i]))
            );
        }
        for (i = 0; i < this.optionBlockList.length; i++) {
            var option = this.optionBlockList[i];
            if (localStorage.getItem(option.optionName) != "false") {
                for (var j =0; j < option.optionRule.length; j++) {
                    ads = ads.concat(
                        Array.prototype.slice.call( document.querySelectorAll(option.optionRule[j]) )
                    );
                }
            }
        }
        
        for (i = 0;i < ads.length; i++) {
            console.log(ads[i]);
            ads[i].style.display = "none";
        }
    },

    bindObserver: function () {
        var _this = this;
        this.observer = new MutationObserver(function () {
            _this.block();
        });
        this.observer.observe(document, {
            childList: true,
            subtree:true,
            characterData:true
        });
    }
};

blocker.start();