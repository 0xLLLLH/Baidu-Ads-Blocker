var vm = new Vue({
            el: "body",
            data: {
                blockSidebar: true
            },
            created:function() {
            	var str = localStorage.getItem("blockSidebar");
            	if (str!=null)
            		this.blockSidebar = str == "true" ? true : false;
            	else
            		localStorage.setItem("blockSidebar",this.blockSidebar);
            },
            watch:{
            	blockSidebar: function () {
            		localStorage.setItem("blockSidebar",this.blockSidebar);
            	}
            }
        });