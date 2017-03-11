 $(document).ready(function(){

 	$(".contact-info").click(function () {
 		if ($(".contact-block").is(":hidden")) {

 			$(".contact-block").show("slow");

 		} else {

 			$(".contact-block").hide("slow");

 		}
 		return false;
 	});
 });