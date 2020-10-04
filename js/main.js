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

    //project1 name
    $(".p1").on("mouseover", function () {
        
        $(".p1 .name").removeClass("hidden");
    })
    $(".p1").on("mouseout", function () {
       
        $(".p1 .name").addClass("hidden");
    })
    

     
    //project2 name
    $(".p2").on("mouseover", function () {
       
        $(".p2 .name").removeClass("hidden");
    })
    $(".p2").on("mouseout", function () {
       
        $(".p2 .name").addClass("hidden");
    })

    //project3 name
    $(".p3").on("mouseover", function () {
       
        $(".p3 .name").removeClass("hidden");
    })
    $(".p3").on("mouseout", function () {
       
        $(".p3 .name").addClass("hidden");
    })

    //project4 name
    $(".p4").on("mouseover", function () {
       
        $(".p4 .name").removeClass("hidden");
    })
    $(".p4").on("mouseout", function () {
       
        $(".p4 .name").addClass("hidden");
    })

    //project5 name
    $(".p5").on("mouseover", function () {
       
        $(".p5 .name").removeClass("hidden");
    })
    $(".p5").on("mouseout", function () {
       
        $(".p5 .name").addClass("hidden");
    })

    //project6 name
    $(".p6").on("mouseover", function () {
       
        $(".p6 .name").removeClass("hidden");
    })
    $(".p6").on("mouseout", function () {
       
        $(".p6 .name").addClass("hidden");
    })

    //project7 name
    $(".p7").on("mouseover", function () {
       
        $(".p7 .name").removeClass("hidden");
    })
    $(".p7").on("mouseout", function () {
   
        $(".p7 .name").addClass("hidden");
    })

    //project8 name
    $(".p8").on("mouseover", function () {
       
        $(".p8 .name").removeClass("hidden");
    })
    $(".p8").on("mouseout", function () {
       
        $(".p8 .name").addClass("hidden");
    })

    $(".contact").on("submit", function(){
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
         alert(name + " we have received your message. Thank you fro reaching out to us");
         return false;
     })
})