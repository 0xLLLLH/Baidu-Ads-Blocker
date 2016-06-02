/**
 * Created by 0xLLLLH on 16-6-2.
 */

$(blockAndRestore());

$(document).on("click","a",blockAndRestore);

function blockAndRestore() {
    console.log("blockAndRestore");
    block();
    restore();
}

/*
 以下是屏蔽项
 */

function block() {
    //屏蔽搜索结果页推广
    $("#content_left").children("div:not(.c-container)").hide();

    //屏蔽右侧推广
    $("#content_right").find("td>div:contains('推广')").hide();
}

/*
 以下是屏蔽后需要恢复的项
 */

function restore() {
    $(".hit_top_new").show();
}