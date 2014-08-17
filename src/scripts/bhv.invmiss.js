module.exports = {
	init: function(){
		var _this = this;
		_this.kinetic = 1;
		_this.w = 5;
		window.setTimeout(function(){
			console.log(_this);
		},1000);
		_this.fill = 'orange';
		_this.stroke = 'red';
	},
	tick: function(delta){
		this.posInc(0-delta/10,0);
	}
};