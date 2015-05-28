;(function(){
	$.fn.mbg = function(options){
		var settings = $.extend({
			messageWidth: 200,
			messageHeight: 50,
			bubbleWidth: 20,
			bubbleHeight: 50,
			bubblePosition: 50,
			borderWidth: 2,
			borderRadius: 10,
			bgColor: "FFFFFF",
			borderColor: "FFA609"
		}, options);
		var makeid = function(){
			var text = "";
		    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		    for( var i=0; i < 5; i++ )
		        text += possible.charAt(Math.floor(Math.random() * possible.length));
		    return text;
		};
		return this.each(function(){
			var $this = $(this);
			var rcn = makeid();
			var messageWidth = settings.messageWidth;
			var messageHeight = settings.messageHeight;
			var bubbleWidth = settings.bubbleWidth;
			var bubbleHeight = settings.bubbleHeight;
			var bubblePosition = settings.bubblePosition;
			var borderWidth = settings.borderWidth;
			var borderRadius = settings.borderRadius;
			var bgColor = settings.bgColor;
			var borderColor = settings.borderColor;
			if(bubblePosition=="middle"){
				bubblePosition = "50%";
			}else if($.isNumeric(bubblePosition)){
				bubblePosition =  bubblePosition+"%";
			}else{
				alert("bubblePosition数据异常，只能是middle或是数字");
			}
			$this.html("<div class='mb-wrapper mb-wrapper-"+rcn+"'><div class='mb-body mb-body-"+rcn+"'></div><div class='mb-bubble mb-bubble-"+rcn+"'></div><div class='mb-mask mb-mask-"+rcn+"'></div></div>")
			$(".mb-wrapper-"+rcn).css({
				"width": (messageWidth+borderWidth*2)+"px",
				"position": "relative"
			});
			$(".mb-body-"+rcn).css({
				"width": messageWidth+"px",
				"height": messageHeight+"px",
				"background-color": "#"+bgColor,
				"border": borderWidth+"px solid #"+borderColor,
				"border-radius": borderRadius+"px"
			});
			$(".mb-bubble-"+rcn).css({
				"width": "0",
				"height": "0",
				"border-left": bubbleWidth/2+"px solid transparent",
				"border-right": bubbleWidth/2+"px solid transparent",
				"border-top": bubbleHeight+"px solid #"+borderColor,
				"position": "absolute",
				"margin-left": "-"+bubbleWidth/2+"px",
				"left": bubblePosition
			});
			$(".mb-mask-"+rcn).css({
				"width": "0",
				"height": "0",
				"border-left": (bubbleWidth/2-borderWidth)+"px solid transparent",
				"border-right": (bubbleWidth/2-borderWidth)+"px solid transparent",
				"border-top": bubbleHeight+"px solid #"+bgColor,
				"position": "absolute",
				"margin-left": "-"+(bubbleWidth/2-borderWidth)+"px",
				"left": bubblePosition,
				"top": messageHeight+"px"
			});
		});
	};
})(jQuery);
