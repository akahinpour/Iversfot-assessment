    $(".member-container .description").hide();
	  $( ".carousel-item" ).click(function() {
            if($(this).find(".member-container .title").is(":visible")){
                  $(this).find(".et_pb_module_inner").css("background-color","#0D233B");
                  $(this).find(".member-container .title").hide(1000);
                  $(this).find(".member-container .description").show(1000);
            } else{
                  $(this).find(".et_pb_module_inner").css("background-color","white");
                  $(this).find(".member-container .description").hide(1000);
                  $(this).find(".member-container .title").show(1000);
            }
});