(function(global, document) {
	var ImageCard = function(element){
		var self = this;
		this.element = element;
		this.src = element.src;
		this.open = function(){
			TINY.box.show({
				image: self.src,
				boxid: 'frameless',
				animate: true,
				openjs: function(){}
			});
		};
		this.element.onclick = function(){
			self.open();
		};
	};

	function init(){
		var imageCardElements = document.getElementsByClassName("img-card");
		var len = imageCardElements.length;
		var i = 0;
		var imageCard = null;
		for(i=0; i<len; i++){
			_imageCard = new ImageCard(imageCardElements[i]);
		}
	}
	global.onload = init;
})(this, this.document);
