var vm = new Vue({
            el: "body",
            data: {
                blockSidebar: true
            },
            created:function() {
            	var _this = this;
            	chrome.storage.local.get(["blockSidebar"],function(items){
            		_this.blockSidebar = items.blockSidebar;
            		console.log(items);
            	});
            },
            watch:{
            	blockSidebar: function () {
            		chrome.storage.local.set({"blockSidebar":this.blockSidebar},function(){
            			console.log("blockSidebar: "+this.blockSidebar);
            		});
            	}
            }
        });