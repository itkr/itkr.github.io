(function(global, document) {
	var ImageCard = function(element){
		var self = this;
		this.element = element;
		this.src = element.src;
		this.open = function(){
			if(document.documentElement.clientWidth >= 768){
				TINY.box.show({
					image: self.src,
					boxid: 'frameless',
					animate: true,
					openjs: function(){}
				});
			}else{
//				global.open(self.src);
				global.location.href = self.src;
			}
		};
		this.element.onclick = function(){
			self.open();
		};
	};

	function init(){
		var imageCardElements = document.getElementsByClassName("img-card");
		var len = imageCardElements.length;
		var i = 0;
		var _imageCard = null;
		for(i=0; i<len; i++){
			_imageCard = new ImageCard(imageCardElements[i]);
		}
	}
	global.onload = init;
})(this, this.document);
