$(document).ready(() => {
    fetchBreakfast();

    $('#breakfast').click(function(e) {
        e.preventDefault();

        fetchBreakfast();
    });

    $('#lunch').click(function(e) {
        e.preventDefault();

        fetchDishes("lunch");
    });

    $('#dinner').click(function(e) {
        e.preventDefault();

        fetchDishes("dinner");
    });
});

function fetchBreakfast() {
    $.ajax({
        url: "/dishes",
        dataType: "html",
        type: "GET",
        data: { type: "breakfast" },
        success: function(data) {
            $("#dishes").html(data);

        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("ERROR:", jqXHR, textStatus, errorThrown);
        }
    });
}

function fetchDishes(type) {
    $.ajax({
        url: "/dishes",
        dataType: "json",
        type: "GET",
        data: { type: type },
        success: function(data) {
            var div = $("#dishes");
            let htmlStr = "";
            for(let i = 0; i < data.length; i++) {
                htmlStr += `<div class='dish-item'>
                <img src="${data[i].img}" alt="">
                <div class="item-desc">
                  <h6>${data[i].name}</h6>
                  <div class="price">$${data[i].price}</div>
                </div>
                </div>`
            }
            div.html(htmlStr);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            $("#p1").text(jqXHR.statusText);
            console.log("ERROR:", jqXHR, textStatus, errorThrown);
        }
    });
}