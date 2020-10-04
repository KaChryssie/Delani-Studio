jQuery(function () {
     // design
     $(".design .title").on("click", function () {
        $(".design .title").addClass("hidden");
        $(".design .description").removeClass("hidden");
    })
    $(".design .description").on("click", function () {
        $(".design .description").addClass("hidden");
        $(".design .title").removeClass("hidden");
    })
    //   development
    $(".development .title").on("click", function () {
        $(".development .title").addClass("hidden");
        $(".development .description").removeClass("hidden");
    })
    $(".development .description").on("click", function () {
        $(".development .description").addClass("hidden");
        $(".development .title").removeClass("hidden");
    })

    //product-management
    $(".product-management .title").on("click", function () {
        $(".product-management .title").addClass("hidden");
        $(".product-management .description").removeClass("hidden");
    })
    $(".product-management .description").on("click", function () {
        $(".product-management .description").addClass("hidden");
        $(".product-management .title").removeClass("hidden");
    })

    
})