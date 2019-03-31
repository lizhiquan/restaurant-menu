$(document).ready(() => {
    $.ajax({
        url: "/ingredients?dish=gimbab",
        dataType: "json",
        type: "GET",
        success: function(data) {
            $("#p1").text(data['msg']);
            console.log("SUCCESS:", data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            $("#p1").text(jqXHR.statusText);
            console.log("ERROR:", jqXHR, textStatus, errorThrown);
        }
    });
});