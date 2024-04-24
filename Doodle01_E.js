(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.HKcard = function() {
	this.initialize(img.HKcard);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,513,912);


(lib.westcard = function() {
	this.initialize(img.westcard);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,513,912);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol52 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFBBCC").s().p("EgnsANHIAA6NMBPZAAAIAAaNg");
	this.shape.setTransform(254.05,83.925);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,508.1,167.9);


(lib.Symbol51 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFEDD").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape.setTransform(178.25,97.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFEC2").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_1.setTransform(182.25,92.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBFEF9").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_2.setTransform(181.25,94.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDFEC4").s().p("AgEgEIAJAAQAAAEgDADQgCACgEAAIAAgJg");
	this.shape_3.setTransform(178.25,86.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBFEF6").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_4.setTransform(185.25,89.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(36,36,36,0.149)").s().p("ABQBzIAAgKQAFAAACACQADADAAAFIgKAAgAhXhrQgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_5.setTransform(179.75,110.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCFEE5").s().p("AAFAFIAAgJIAKAAIAAAJIgKAAgAgOAFIAAgJIAKAAIAAAJIgKAAg");
	this.shape_6.setTransform(175.25,98.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCFEDE").s().p("AgEAFIAAgJQAEAAADADQACABAAAFIgJAAg");
	this.shape_7.setTransform(166.25,90.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(41,42,42,0.173)").s().p("AhFC0IAAgKIAKAAIAAAKIgKAAgABQCgIAAgKIAAipIAKAAIAACpIAAAKIgKAAgAAgggQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAgbhlQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAhWirQgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_8.setTransform(168.75,104);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FBFEEA").s().p("AgEAFIAAgJQAEAAACACQADACAAAFIgJAAg");
	this.shape_9.setTransform(161.25,84.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FCFEC4").s().p("AgEAFIAAgJQAEAAADACQACACAAAFIgJAAg");
	this.shape_10.setTransform(163.25,86.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FCFED8").s().p("AgEAFIAAgJQAEAAADACQACACAAAFIgJAAg");
	this.shape_11.setTransform(162.25,85.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEFDCC").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_12.setTransform(176.25,91.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFDC7").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_13.setTransform(175.25,92.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEFADA").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_14.setTransform(176.25,90.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FCFEE7").s().p("AhKAeIAAgKQAFAAACACQADADAAAFIgKAAgABBgTIAAgKIAKAAIAAAKIgKAAg");
	this.shape_15.setTransform(177.25,93);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FBFEF5").s().p("AAPAZIAAgKIAKAAIAAAKIgKAAgAgYgOIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_16.setTransform(171.25,96.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FCFECB").s().p("AgEAFIAAgJQAEAAACADQADABAAAFIgJAAg");
	this.shape_17.setTransform(167.25,91.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FDFEC3").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_18.setTransform(174.25,89.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEFCD2").s().p("AgWAgQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAgOgOIAKAAQAAAFgDACQgCADgFAAIAAgKgAAPgYIAAgKIAKAAIAAAKIgKAAg");
	this.shape_19.setTransform(176.25,88.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FCFEB6").s().p("AAoAjIAKAAQAAAFgDADQgCACgFAAIAAgKgAAUAFIAAgJIAKAAIAAAJIgKAAgAhPgEIAAgKQAFAAADACQACADAAAFIgKAAgABGgsIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_20.setTransform(171.75,88.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEFCD0").s().p("AgTAjIAAgKIAKAAIAAAKIgKAAgAAKAPIAAgKIAKAAIAAAKIgKAAgAAAgiIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_21.setTransform(175.75,87.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FDFEC2").s().p("AAFAZIAKAAQAAAFgDACQgCADgFAAIAAgKgAgOAFIAAgJIAKAAIAAAJIgKAAgAgEgYIAAgKIAJAAIAAAKIgJAAg");
	this.shape_22.setTransform(176.25,86.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E5FA91").s().p("AgEAFIAAgJQAEAAACADQADABAAAFIgJAAg");
	this.shape_23.setTransform(176.25,80.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F1FC9C").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_24.setTransform(175.25,79.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CAF682").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_25.setTransform(175.25,78.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EBF286").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_26.setTransform(176.25,77.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FEEF99").s().p("AgEAFIAAgJQAEAAACACQADACAAAFIgJAAg");
	this.shape_27.setTransform(176.25,76.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BFF47F").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_28.setTransform(175.25,75.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FAFEAC").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_29.setTransform(174.25,75.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F7FDA5").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_30.setTransform(174.25,76.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EFFCF9").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_31.setTransform(176.25,72.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D3F793").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_32.setTransform(175.25,74.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F3FCFC").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_33.setTransform(175.25,73.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FBFEF7").s().p("ABQBQIAAgKIAKAAIAAAKIgKAAgAhZhFIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_34.setTransform(168.75,91);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FCFEBA").s().p("AgxA8IAAgKQAFAAACADQADACAAAFIgKAAgACCAKIAAgKIAKAAIAAAKIgKAAgAiLgxIAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_35.setTransform(172.75,87);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FCFECD").s().p("ACMAjIAAgKIAKAAIAAAKIgKAAgAiSgbQgDgCAAgFQAFAAACADQADACAAAFQgFAAgCgDg");
	this.shape_36.setTransform(172.75,83.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FBFEF3").s().p("AgEAFIAAgJQAEAAADACQACACAAAFIgJAAg");
	this.shape_37.setTransform(156.25,78.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FBFEFA").s().p("AAoA8IAAgKIAKAAIAAAKIgKAAgAgxgxIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_38.setTransform(159.75,83);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FCFECC").s().p("AgEgEIAJAAQAAAEgCADQgDACgEAAIAAgJg");
	this.shape_39.setTransform(155.25,75.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FBFEEF").s().p("AAoBQIAAgKQAFAAADADQACACAAAFIgKAAgAgxhFIAAgKIAKAAIAAAKIgKAAg");
	this.shape_40.setTransform(160.75,82);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(31,31,31,0.129)").s().p("ACCCbIAKAAQAAAFgDACQgCADgFAAIAAgKgAArCYQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAC+BVIAKAAQAAAFgDADQgCACgFAAIAAgKgAgRBSQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAhMANQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAiIg4QgDgDAAgFIAKAAIAAAKQgFAAgCgCgAjFh/QgCgCAAgFIAKAAIAAAKQgFAAgDgDgAjHiaIAAgKIAKAAIAAAKIgKAAg");
	this.shape_41.setTransform(165.75,83.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(16,16,16,0.071)").s().p("AgEgEIAJAAQAAAEgCADQgDACgEAAIAAgJg");
	this.shape_42.setTransform(199.25,76.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F6FDFE").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_43.setTransform(177.25,71.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(47,48,48,0.196)").s().p("ABkBpIAKAAQAAAFgCADQgDACgFAAIAAgKgAguBnQgDgDAAgFIAKAAIAAAKQgFAAgCgCgACgAjIAKAAQAAAFgDACQgCADgFAAIAAgKgAhqAhQgDgDAAgFIAKAAIAAAKQgFAAgCgCgADcgiIAKAAQAAAFgDACQgCADgFAAIAAgKgAinglQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAjihrQgDgCAAgFIAKAAIAAAKQgFAAgCgDg");
	this.shape_44.setTransform(171.75,84.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(10,10,10,0.047)").s().p("AiaC+IAAgKIAKAAIAAAKIgKAAgAAZgxIAKAAQAAAFgCACQgDADgFAAIAAgKgABVh3IAKAAQAAAFgDACQgCADgFAAIAAgKgACRi9IAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_45.setTransform(178.25,102);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FBFEED").s().p("AhFBVIAAgKIAKAAIAAAKIgKAAgAA8hKIAAgKIAKAAIAAAKIgKAAg");
	this.shape_46.setTransform(186.75,87.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FBFEF8").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_47.setTransform(194.25,78.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(33,33,33,0.137)").s().p("Ag7EEIAAgKQAFAAADACQACADAAAFIgKAAgAhZDwIAAgKIAKAAIAAAKIgKAAgAgnh3IAKAAQAAAFgCADQgDACgFAAIAAgKgAAUi9IAKAAQAAAFgDACQgCADgFAAIAAgKgABQkDIAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_48.setTransform(194.75,97);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FBFEFB").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_49.setTransform(190.25,83.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FCFEDB").s().p("AhFBVIAAgKIAKAAIAAAKIgKAAgAA8hKIAAgKIAKAAIAAAKIgKAAg");
	this.shape_50.setTransform(185.75,88.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FCFEC6").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_51.setTransform(191.25,81.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FAFEFF").s().p("AB9DwIkDAAIAAgKIAAgUQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFIAKAAQCMgJg2jGQgBgCgFAAIAAgKIgKAAIAAgKIAKAAIAAAKIAKAAIAKAAIAJAAIAKAAIAKAAIAAAKIgKAAIAAAKIAAAJIAACqIAAAKQAcASA0gIIAKAAIAKAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAIAAAUIAAAKIgKAAgAAZgdIAAgKIAKAAIAAAKIgKAAgAAjgnIAAgKIAKAAIAAgKIAKAAIAAAKIgKAAIAAAKIgKAAgAAjgnIAAAAgAg2gxIAAgKIAKAAIAAAKIgKAAgAhAg7IAAgKIAKAAIAAAKIgKAAgABVhjIAAgKIAKAAIAAAKIgKAAgABfhtIAAgKIAKAAIAAgKIAKAAIAAAKIgKAAIAAAKIgKAAgAhohtIAAgKIgKAAIAAgKIgKAAIAAgKIAKAAIAAAKIAKAAIAAAKIAKAAIAAAKIgKAAgAB9ifIAKAAQAAAFgDADQgCACgFAAIAAgKgACHifIAAgKIAKAAIAAAKIgKAAgAiQifIAAgKIgKAAIAAgKIAKAAIAAAKIAKAAIAAAKIgKAAgACRipIAAgKIAKAAIAAAKIgKAAgACRipIAAAAgACbizIAAgKIAKAAIAAAKIgKAAgAikizIAAgKIAKAAIAAAKIgKAAgACvjRIAAgKIAKAAIAAAKIgKAAgAC5jlIAKAAQAAAFgDACQgCADgFAAIAAgKgAjCjbIAAgKQgFAAgDgDQgCgCAAgFIAKAAIAAAKIAKAAIAAAKIgKAAgADDjlIAAgKIAKAAIAAAKIgKAAgADDjlIAAAAg");
	this.shape_52.setTransform(175.25,102);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FAFEFD").s().p("AAtAyIAKAAQAAAFgCADQgDACgFAAIAAgKgAiQAAIAAgJIAKAAIAAAJIgKAAgACHgxIAAgKIAKAAIAAAKIgKAAg");
	this.shape_53.setTransform(177.25,88);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FCFEB7").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_54.setTransform(190.25,82.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FBFEFC").s().p("AheBVIAAgKIAKAAIAAAKIgKAAgABVAjIAAgKIAKAAIAAAKIgKAAgAi4gYIAAgKIAKAAIAAAKIgKAAgACvhKIAAgKIAKAAIAAAKIgKAAg");
	this.shape_55.setTransform(177.25,85.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FCFEE1").s().p("ABzA3IAAgKIAKAAIAAAKIgKAAgAjCgEIAAgKQAFAAACADQADACAAAFIgKAAgAC5gsIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_56.setTransform(176.25,80.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FCFED4").s().p("AhyBuIAAgKQAFAAADADQACACAAAFIgKAAgAh8BkIAAgKQAFAAADACQACADAAAFIgKAAgAgEAyIAAgKIAJAAIAAAKIgJAAgABzhjIAAgKIAKAAIAAAKIgKAAg");
	this.shape_57.setTransform(183.25,87);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FBFEF2").s().p("AgdA3IAAgKIAKAAIAAAKIgKAAgAAUgsIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_58.setTransform(191.75,79.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F8FEA7").s().p("AgEgEIAJAAQAAAEgCACQgDADgEAAIAAgJg");
	this.shape_59.setTransform(184.25,80.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FAFEAA").s().p("AAoAPIAKAAQAAAFgCACQgDADgFAAIAAgKgAgvgQQgCgDAAgFIAKAAIAAAKQgFAAgDgCg");
	this.shape_60.setTransform(178.75,79.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#C2F480").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_61.setTransform(183.25,80.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C4F580").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_62.setTransform(184.25,79.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FBFEAF").s().p("AgEgEIAJAAQAAAEgDACQgCADgEAAIAAgJg");
	this.shape_63.setTransform(185.25,79.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F0FC9A").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_64.setTransform(185.25,78.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FDFDC4").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_65.setTransform(179.25,83.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#C0F480").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_66.setTransform(181.25,81.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E2FA8D").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_67.setTransform(182.25,81.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FCFEB1").s().p("AAZAFIAKAAQAAAFgCACQgDADgFAAIAAgKgAgVACQgDgCAAgEIAKAAIAAAJQgFAAgCgDgAgYgEQgFAAgDgDQgCgCAAgFIAKAAIAAAKIAAAAg");
	this.shape_68.setTransform(178.25,81.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F9FEA9").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_69.setTransform(180.25,82.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F7FBAF").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_70.setTransform(177.25,81.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FEFAD9").s().p("AgEgEIAJAAQAAAEgDACQgCADgEAAIAAgJg");
	this.shape_71.setTransform(177.25,82.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFADA").s().p("AgTAyIAAgKIAAgKIAAgKIAAgKQAFAAACgCQADgDAAgFIAAgJIAAgKQAFAAACgCQACgDAAgFIAAgKQAFAAACgDQADgCAAgFIAKAAIAAAKIAAAKIAAAKIgKAAIAAAKIAAAJIAAAKIgKAAIAAAKIAAAKIgJAAIAAAKIAAAKIgKAAg");
	this.shape_72.setTransform(176.75,87);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FEFBCC").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_73.setTransform(179.25,82.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#DAF58F").s().p("AgEAFIAAgJQAEAAACADQADABAAAFIgJAAg");
	this.shape_74.setTransform(178.25,81.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C4F37F").s().p("AgBADQgDgDAAgEIAJAAIAAAJQgFAAgBgCg");
	this.shape_75.setTransform(177.25,78.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E5F284").s().p("AAFAeIAAgKIAKAAIAAAKIgKAAgAgOgTIAAgKIAKAAIAAAKIgKAAg");
	this.shape_76.setTransform(177.25,76);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#C8F37F").s().p("AgEgEIAJAAQAAAEgDADQgCACgEAAIAAgJg");
	this.shape_77.setTransform(179.25,78.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFEF99").s().p("AAFAFIAAgJIAKAAIAAAJIgKAAgAgOAFIAAgJQAFAAACACQADACAAAFIgKAAg");
	this.shape_78.setTransform(178.25,77.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D7F382").s().p("AgEgEIAJAAQAAAEgCADQgDACgEAAIAAgJg");
	this.shape_79.setTransform(181.25,75.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E3F286").s().p("AgEgEIAJAAQAAAEgCADQgDACgEAAIAAgJg");
	this.shape_80.setTransform(180.25,77.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FEEF97").s().p("AAPAPIAAgKIAKAAIAAAKIgKAAgAgYgOIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_81.setTransform(178.25,75.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#DBF382").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_82.setTransform(177.25,72.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F5F28B").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_83.setTransform(178.25,72.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#C6F37F").s().p("AgEAFIAAgJQAEAAADACQACACAAAFIgJAAg");
	this.shape_84.setTransform(181.25,74.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E9F286").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_85.setTransform(179.25,72.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFEF9C").s().p("AgEAZQAAgFgDgDQgCgCgFAAQAAgFgDgDQgCgCgFAAIAAgJQAFAAACgCQADgDAAgFQAFAAACgDQADgCAAgFIAJAAIAKAAIAAAKQAAAFADADQACACAFAAIAAAJIgKAAIAAAKIgKAAIAAAKIgJAAg");
	this.shape_86.setTransform(178.25,75.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFEF9A").s().p("AANAIQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAgTgJIAKAAQAAAFgDACQgCACgFAAIAAgJg");
	this.shape_87.setTransform(178.75,74);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F5F18B").s().p("AgEAFIAAgJQAEAAADADQACABAAAFIgJAAg");
	this.shape_88.setTransform(180.25,73.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FCFEE3").s().p("AgEB9IAAgKIAJAAIAAAKIgJAAgACvhyIhGAAIAAgKIBGAAIAKAAIAAAKIgKAAgAgOhyIgKAAIigAAIAAgKICqAAIAKAAIAAAKIgKAAg");
	this.shape_89.setTransform(175.25,86.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#DFF98B").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_90.setTransform(185.25,77.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FCFEB3").s().p("AAUBzIgKAAIgKAAIgJAAIgKAAQAAgFgCgCQgDgDgFAAQAAgFgCgDQgDgCgFAAQAAgFgDgDQgCgCgFAAQAAgFgDgDQgCgCgFAAIAAgKQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAQAAgFgCgCQgDgDgFAAIAAgKQAAgFgCgDQgDgCgFAAQAAgFgCgCQgDgCgFAAQAAgFgCgDQgDgCgFAAQAAgFgDgDQgCgCgFAAQAAgFgDgDQgCgCgFAAIAAgKQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAQAAgFgDgCQgCgDgFAAQAAgFgCgDQgDgCgFAAQAAgFgCgDQgDgCgFAAIAAgKQAFAAADgCQACgDAAgFIAKAAICgAAIAKAAIAAAKIAAAKQAAAFACADQADACAEAAIAAAKIAAAKQAAAFACACQADADAFAAQAAAFADACQACADAFAAIAAAKIgKAAIAAAKIAAAKIAAAKIgKAAIAAAJIAAAKIgJAAIAAAKIAAAKIAAAKQAAAFACACQADADAEAAQAAAFACADQADACAFAAQAFAAACgCQADgDAAgFIAAgKIAAgKQAFAAACgDQADgCAAgFIAAgKIAAgKQAFAAACgCQADgDAAgEIAAgKQAFAAACgCQADgDAAgFIAAgKIAKAAQAFAAADgDQACgCAAgFIAKAAQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFQAFAAACgDQADgCAAgFIAAgKIAAgKIAAgKIAAgKIBGAAIAKAAIAKAAIAAAKIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAJIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAg");
	this.shape_91.setTransform(174.75,86.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D5F888").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_92.setTransform(185.25,76.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#E0F98D").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_93.setTransform(185.25,75.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#BCF47F").s().p("AAAAyIgJAAQAAgFgDgCQgCgDgFAAIgKAAQAAgFgDgCQgCgDgFAAIAAgKIAAgKIgKAAIAAgKIAAgJIAKAAIAAAJIAAAKIAKAAQAAAFADADQACACAFAAIAKAAQAFAAACgCQACgDAAgFQAFAAADgCQACgDAAgFIAAgJQAFAAADgCQACgDAAgFQAAgFgCgDQgDgCgFAAQAAgFgCgCQgDgDgFAAIAAgKIAKAAIAKAAIAKAAQAAAFACACQADADAFAAQAAAFACACQADADAFAAIAAAKIAAAKIAAAJIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAg");
	this.shape_94.setTransform(179.75,77);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#C7F5A0").s().p("AgCACQgCgCAAgEIAJAAIAAAJQgFAAgCgDg");
	this.shape_95.setTransform(183.25,72.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F3FCC6").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_96.setTransform(185.25,74.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#C4F599").s().p("AgCACQgCgCAAgEIAJAAIAAAJQgFAAgCgDg");
	this.shape_97.setTransform(184.25,73.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F4FDFD").s().p("AgEAFIAAgJQAEAAADADQACABAAAFIgJAAg");
	this.shape_98.setTransform(184.25,72.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F5F6B6").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_99.setTransform(182.25,71.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FCFCFA").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_100.setTransform(184.25,68.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F9FEFE").s().p("AAUAyIAAgKIAAgKQAAgFgDgDQgCgCgFAAQAAgFgDgCQgCgDgFAAIgJAAIhGAAIgKAAIAAgKQAAgEgDgCQgCgDgFAAIAAgKIAAgKQAFAAACgDQADgCAAgFIAAgKICzAAIAKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKQgFAAgBACQgHAOgRADIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAg");
	this.shape_101.setTransform(193.75,73);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FAFDFE").s().p("AgEgEIAJAAQAAAEgCADQgDACgEAAIAAgJg");
	this.shape_102.setTransform(184.25,69.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FBFCFB").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_103.setTransform(183.25,71.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FDF8E5").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_104.setTransform(183.25,70.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(39,39,39,0.161)").s().p("AiLEiIAAgKIAKAAIAAAKIgKAAgAhtEOIAAgKIAKAAIAAAKIgKAAgAAeA8IAKAAQAAAFgDACQgCADgFAAIAAgKgABagJIAKAAQAAAFgCADQgDABgFAAIAAgJgAhhgLQgCgDAAgFIAKAAIAAAKQgFAAgDgCgACWhPIAKAAQAAAFgCADQgDACgFAAIAAgKgAichRQgDgDAAgFIAKAAIAAAKQgFAAgCgCgADSiVIAKAAQAAAFgDACQgCADgFAAIAAgKgAjZiYQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAEOjbIAKAAQAAAFgCACQgDADgFAAIAAgKgAkVjeQgCgCAAgFIAKAAIAAAKQgFAAgDgDgABkkhIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_105.setTransform(174.75,94);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(170,164,131,0.678)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_106.setTransform(184.25,66.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(115,113,106,0.463)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_107.setTransform(184.25,67.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#D2F7BC").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_108.setTransform(179.25,71.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#E1F6AE").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_109.setTransform(181.25,71.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FEF7D5").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_110.setTransform(181.25,70.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FDFBF6").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_111.setTransform(181.25,69.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#C3F597").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_112.setTransform(180.25,71.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#E5FAEB").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_113.setTransform(178.25,71.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FAFEFE").s().p("AAKCWIAAgKIAKAAIAAAKIgKAAgACCBkIAAgKIAKAAIAAAKIgKAAgAgdBkIAAgKIAKAAIAAAKIgKAAgAgnBaIAAgKIAKAAIAAAKIgKAAgACqAyIAAgKIAKAAIAAAKIgKAAgAhPAoIAAgKIAKAAIAAAKIgKAAgADcAAIAAgJIAAgKIAKAAIAAAKIAAAJIgKAAgAh3AAQAAgEgDgCQgCgDgFAAIAAgKIAAgKIAKAAQAAAFADACQACADAFAAIAAAKIAAAJIgKAAgAifgxQAAgFgCgDQgDgCgFAAQAAgFgDgDQgCgCgFAAQAAgFgDgDQgCgCgFAAQAAgFgCgEQgDgGgFgFQAAgFgDgCQgHgIgKgFQAAgFgCgCQgDgDgFAAIAAgKIAAgKIFJAAIAKAAIAAAKIAAAKIAAAKIgKAAIgKAAIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIipAAIgKAAIAAAKIgKAAIAAAKIAAAKIAAAKIgKAAg");
	this.shape_114.setTransform(169.75,83);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(147,143,125,0.588)").s().p("AgEgEIAJAAQAAAEgCADQgDACgEAAIAAgJg");
	this.shape_115.setTransform(182.25,67.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FBFDFD").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_116.setTransform(181.25,68.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(44,45,45,0.184)").s().p("ACHEnIAAgKIAAgUQgFAAgCgCQgDgDAAgFIAKAAIAAAKIAKAAIAAAUIAAAKIgKAAgAiQEnIAAgKIAAgKIAAgKIAKAAIAAAUIAAAKIgKAAgAiGD/IAKAAQAAAFgCADQgDACgFAAIAAgKgAB2D9QgDgDAAgFIAKAAIAAAKQgFAAgCgCgAh8D1IAKAAQAAAFgCADQgDACgFAAIAAgKgAAPDrIAKAAIBGAAIAKAAIAAAKIgKAAQgPADgNAAQggAAgUgNgAhoDrQB7gGgqiuIgBgKIAAgKQAFAAABACQA2DHiMAJIAAgKgAAPA3IAAgKIAAgKIAKAAIAAAKIAAAKIgKAAgAAZAjIAAgKIAKAAIAAAKIgKAAgAgiAjIAAgKIgKAAIAAgKIAKAAIAAAKIAKAAIAAAKIgKAAgAAjAZIAAgKIAKAAIAAAKIgKAAgAAjAZIAAAAgAAtAPIAAgKIAKAAIAAAKIgKAAgAg2APIAAgKIgKAAIAAgJIAKAAIAAAJIAKAAIAAAKIgKAAgAA3AFIAAgJIAAgKIAKAAIAAAKIAAAJIgKAAgAA3AFIAAAAgAhKgEIAAgKIAAgKIgKAAIAAgKIgKAAIAAgKIgKAAIAAgKIAKAAIAAAKIAKAAIAAAKIAKAAIAAAKIAKAAIAAAKIAAAKIgKAAgABBgOIAAgKQAFAAADgCQACgDAAgFIAKAAIAAAKQAAAFgCADQgDACgFAAIgKAAgABBgOIAAAAgABVgiIAAgKIAKAAIAAAKIgKAAgABfgsIAAgKIAKAAIAAAKIgKAAgABfgsIAAAAgABpg2IAAgKIAKAAIAAAKIgKAAgAhyg2IAAgKIgKAAIAAgKIAKAAIAAAKIAKAAIAAAKIgKAAgABzhAIAAgKIAAgKIAKAAIAAAKIAAAKIgKAAgABzhAIAAAAgAiGhKIAAgKIAAgKIAKAAIAAAKIAAAKIgKAAgAB9hUIAAgKQAFAAACgCQADgDAAgFIAKAAIAAAKQAAAFgCACQgDADgFAAIgKAAgAiQheIAAgKIAKAAIAAAKIgKAAgACRhoIAAgKIAKAAIAAAKIgKAAgACRhoIAAAAgAiahoIAAgKIgKAAIAAgKIAKAAIAAAKIAKAAIAAAKIgKAAgACbhyIAAgKIAKAAIAAAKIgKAAgAClh8IAAgKIAKAAIAAAKIgKAAgAClh8IAAAAgAiuh8IAAgKIAKAAIAAAKIgKAAgACviGIAAgKIAAgKIAKAAIAAAKIAAAKIgKAAgAi4iGIAAgKQAFAAACADQADACAAAFIgKAAgAjCiQIAAgKIAAgKIgKAAQgFAAgDgDQgCgCAAgFIAAgKIAKAAQAAAFACACQADADAFAAIAAAKIAKAAIAAAKIAAAKIgKAAgAC5iaIAAgKQAFAAACgDQADgCAAgFIAKAAIAAAKQAAAFgDACQgCADgFAAIgKAAgAC5iaIAAAAgADNiuIAAgKIAKAAIAAAKIgKAAgADXi4IAAgKIAKAAIAAAKIgKAAgADXi4IAAAAgAjgi4IAAgKQAFAAADACQACADAAAFIgKAAgADhjCIAAgKIAKAAIAAAKIgKAAgAjqjCIAAgKQAFAAACACQADADAAAFIgKAAgADrjMIAAgKIAAgKQARgDAHgPQABgCAFAAIAAAKQAAAFgCACQgIAIgKAFIAAAKIgKAAgAj0jMIAAgKQAFAAACACQADADAAAFIgKAAgAj+jWIAAgKIAAgKQAFAFADAGQACAEAAAFIgKAAgAkIjqQgFAAgDgDQgCgCAAgFIAAgKQAKAFAHAIQADACAAAFIgKAAgAEJj0IAAgKIAKAAIAAAKIgKAAgAETj+IAAgKIAKAAIAAAKIgKAAgAkcj+IAAgKQAFAAADADQACACAAAFIgKAAgAEdkIIAAgKIAAgKIgKAAIi0AAIAAgKIC0AAIAKAAIAAAKIAKAAIAAAKIAAAKIgKAAgAEdkIIAAAAgAkmkIIAAgKIAAgKIAKAAIAAgKIFTAAIAKAAIAAAKIgKAAIgKAAIlJAAIAAAKIAAAKIgKAAg");
	this.shape_117.setTransform(175.25,96.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(147,144,125,0.588)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_118.setTransform(184.25,61.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(122,120,110,0.486)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_119.setTransform(185.25,64.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(150,146,126,0.6)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_120.setTransform(183.25,64.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(73,72,70,0.294)").s().p("AgJAUIAAgKIAJAAIAAAKIgJAAgAAAgJIAAgKIAKAAIAAAKIgKAAg");
	this.shape_121.setTransform(182.75,65);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(71,70,69,0.286)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_122.setTransform(184.25,60.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(62,62,60,0.251)").s().p("AgEgEIAJAAQAAAEgDADQgCACgEAAIAAgJg");
	this.shape_123.setTransform(187.25,59.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(130,128,116,0.522)").s().p("AgJAUIAAgKIAJAAIAAAKIgJAAgAAAgJIAAgKIAKAAIAAAKIgKAAg");
	this.shape_124.setTransform(186.75,60);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(144,141,123,0.576)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_125.setTransform(185.25,58.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(119,117,108,0.475)").s().p("AgEAFIAAgJQAEAAACACQADACAAAFIgJAAg");
	this.shape_126.setTransform(187.25,57.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FEF5C2").s().p("AgYBBIAAgKIAAgKIAAgKQAFAAADgCQACgDAAgFIAAgKIAKAAIAAAKIAAAKIAAAKIAAAKIgKAAIAAAKIgKAAgAgEAFIAAgJIAAgKQAEAAADADQACACAAAFIAAAJIgJAAgAAFgYIAAgKIAKAAIAAAKIgKAAgAAPg2IAAgKIAKAAIAAAKIgKAAg");
	this.shape_127.setTransform(184.25,64.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(56,56,55,0.227)").s().p("AAAAUIAKAAQAAAFgDACQgCADgFAAIAAgKgAgJgTIAAgKIAJAAIAAAKIgJAAg");
	this.shape_128.setTransform(185.75,60);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(173,167,132,0.69)").s().p("AgJAtIgKAAIAAgKIAKAAIAJAAIAAAKIgJAAgAAAAZQAAgFgCgCQgCgDgFAAIAAgKIAJAAIAKAAIAAAKIAAAKIgKAAgAAKgEIgKAAIAAgKIAAgKIAKAAIAKAAIAAAKIAAAKIgKAAgAAKgiIAAgKIAKAAIAAAKIgKAAg");
	this.shape_129.setTransform(184.75,61.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(80,80,81,0.325)").s().p("AhUDDIAAgKIAKAAIAAAKIgKAAgAAPClIAAgKIAKAAIAAAKIgKAAgABLBpIAAgKIAKAAIAAAKIgKAAgABNhhQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAASidQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAhUi4IAAgKIAKAAIAAAKIgKAAg");
	this.shape_130.setTransform(-45.8,107.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(22,22,22,0.094)").s().p("AxGEsIAKAAQAAAFgDADQgCACgFAAIAAgKgA1SELQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAO7D6IAKAAIEEAAIAKAAIAKAAIAAAFQhCAFg9AAQhVAAhOgKgA1wDtQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAumBQIAAgKIAKAAIAAAKIgKAAgAR5gdIAKAAQAAAFgCACQgDADgFAAIAAgKgAS1hjIAKAAQAAAFgCACQgDADgFAAIAAgKgAPShmQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAv2h3IAAgKQAFAAACADQADACAAAFIgKAAgATxipIAKAAQAAAFgCADQgDACgFAAIAAgKgAOWirQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAUtjvIAKAAQAAAFgCADQgDACgFAAIAAgKgANajxQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAVpk1IAKAAQAAAFgCACQgDADgFAAIAAgKg");
	this.shape_131.setTransform(65.225,101);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(20,20,20,0.086)").s().p("AgiDhIAAgKIAKAAIAAAKIgKAAgAj7AqQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAD/gsIAAgKIAKAAIAAAKIgKAAgAkIhKIAAgKIAKAAIAAAKIgKAAgAC5jWIAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_132.setTransform(-53.8,111.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(8,8,8,0.039)").s().p("AuwEdIAKAAQAAAFgDACQgCADgFAAIAAgKgAyoDBQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAzcgOIAAgKIAKAAIAAAKIgKAAgAregsIAAgKQAFAAACADQADACAAAFIgKAAgATWhNQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAzIhKIAAgKIAKAAIAAAKIgKAAgASaiTQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAs4iuIAAgKQAFAAACACQADADAAAFIgKAAgARejZQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAQikeQgDgDAAgFIAKAAIAAAKQgFAAgCgCg");
	this.shape_133.setTransform(44.225,104.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(90,90,90,0.365)").s().p("AC5AUIAAgKIAKAAIAAAKIgKAAgAjCgJIAAgKIAKAAIAAAKIgKAAg");
	this.shape_134.setTransform(-53.8,106);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(40,40,40,0.165)").s().p("ABzB9IAAgKIAKAAIAAAKIgKAAgAgiBpIAAgKQAFAAADACQACADAAAFIgKAAgAhyAFIAAgJQAFAAACACQADACAAAFIgKAAgAh8gsIAAgKIAKAAIAAAKIgKAAgAh8hAIAAgKIAKAAIAAAKIgKAAgAhyh8IAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_135.setTransform(-60.8,113.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(130,129,130,0.525)").s().p("ABzCbIAAgKIAKAAIAAAKIgKAAgAhAB9IAAgKQAFAAADACQACADAAAFIgKAAgAheBfIAAgKQAFAAACADQADACAAAFIgKAAgAhyBBIAAgKQAFAAACADQADACAAAFIgKAAgAh8AtIAAgKIAKAAIAAAKIgKAAgAhyh8IAKAAQAAAFgDACQgCADgFAAIAAgKgAheiaIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_136.setTransform(-59.8,110.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(100,100,100,0.404)").s().p("AAAC+IAAgKIAKAAIAAAKIgKAAgAhFCWIAAgKQAFAAADACQACADAAAFIgKAAgAhPCMIAAgKQAFAAACACQADADAAAFIgKAAgAiBAoIAAgKIAKAAIAAAKIgKAAgAhPiBIAKAAQAAAFgDADQgCACgFAAIAAgKgAB6isQgCgCAAgFIAKAAIAAAKQgFAAgDgDgABGizIAAgKIAKAAIAAAKIgKAAgAAyizIAAgKIAKAAIAAAKIgKAAg");
	this.shape_137.setTransform(-60.3,107);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(109,109,110,0.443)").s().p("AgsCqIAAgKIAKAAIAAAKIgKAAgACbgJIAAgKIAKAAIAAAKIgKAAgACbgdIAAgKIAKAAIAAAKIgKAAgACRhPIAAgKIAKAAIAAAKIgKAAgAikipIAKAAQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_138.setTransform(-50.8,110);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(50,50,50,0.204)").s().p("AAoCvIAAgKIAKAAIAAAKIgKAAgACCBVIAAgKIAKAAIAAAKIgKAAgACEhNQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAiLikIAKAAQAAAFgCACQgDADgFAAIAAgKgAAqinQgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_139.setTransform(-50.3,107.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(119,119,120,0.482)").s().p("AhKDDIAAgKIAKAAIAAAKIgKAAgABfBBIAAgKIAKAAIAAAKIgKAAgAhAi4IAAgKIAKAAIAAAKIgKAAgAhoi4IAAgKIAKAAIAAAKIgKAAg");
	this.shape_140.setTransform(-45.8,107.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(69,69,70,0.282)").s().p("AhFBpIAAgKIAKAAIAAAKIgKAAgAhFBBIAAgKIAKAAIAAAKIgKAAgAA8hoIAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_141.setTransform(-66.3,99.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(140,139,140,0.565)").s().p("AB4CqIAAgKIAKAAIAAAKIgKAAgACCCgIAAgKIAKAAIAAAKIgKAAgAipCMIAAgKQAFAAACADQADACAAAFIgKAAgAC0AKIAAgKIAKAAIAAAKIgKAAgAi9gnIAAgKIAKAAIAAAKIgKAAgACEhlQgCgDAAgFIAKAAIAAAKQgFAAgDgCgACChtQgFAAgCgCQgDgDAAgFIAKAAIAAAKIAAAAgAiBiBIAKAAQAAAFgCADQgDACgFAAIAAgKgAAUifIAAgKIAKAAIAAAKIgKAAgAgnifIAAgKIAKAAIAAAKIgKAAg");
	this.shape_142.setTransform(-53.3,105);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(150,148,150,0.604)").s().p("Ag3C4IAKAAIAUAAIAKAAIAAAKIgKABIgNABQgPAAgCgMgAAOC4IAUAAIAKAAIAKAAQAAAFgBAAQgTAFgUAAIAAgKgABACuIAKAAIAKAAQAAAFgCABQgIAEgKAAIAAgKgAhKC2QgGgDgFgFIAKAAIAKAAIAAAKQgFAAgEgCgABUCkIAKAAIAKAAIAAgKQAFgFAGgDQAEgCAFAAIAKAAQAAAFgDADQgIALgTABQAAAFgCABQgIAEgKAAIAAgKgAhVCuQgFAAgEgCQgGgDgFgFIAKAAIAKAAIAAAKIAAAAgAhpCkQgFAAgEgCQgGgDgFgFIAKAAIAKAAIAAAKIAAAAgAiFCXQgCgCAAgFIAKAAIAAAKQgFAAgDgDgACGCGIAKAAQAAAFgDACQgCADgFAAIAAgKgAiHCQQgFAAgDgDQgCgCAAgFIAKAAIAAAKIAAAAgACQB8IAAgKQAFAAACgDQADgCAAgFIAKAAIgBAKQgCARgRADIAAgKgAiRCGQgFAAgDgDQgCgCAAgFIAKAAIAAAKIAAAAgAijB5QgCgCAAgFIAKAAIAAAKQgFAAgDgDgAilByQgFAAgBgCQgEgIAAgKIAKAAIAAAKIAAAKIAAAAgACkBeIAAgKIAKAAQAAAFgCAEQgDAGgFAFIAAgKgAivBeQgFAAgBgCQgEgIAAgKIAKAAIAAAKIAAAKIAAAAgACuBKIAAgKIAKAAQAAAFgCAEQgDAGgFAFIAAgKgAi/A+QgEgNAAgPIAKAAIAAAKIAAAKIAAAKQgFAAgBgCgAC4AsIAAgKIAAgUIAKAAIABAKQAGAbgRADIAAgKgAC4gZIAAgKIAAgKIAAgKQAQgBgFAVIgBAKIgKAAgAjDgjIAAgKIAAgUIAKAAIAAAKIAAAKIAAAKIgKAAgACuhBIAAgKIAAgKQAFAFADAGQACAEAAAFIgKAAgAi5hLIAAgKIAAgKIAKAAIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIgKAAgACkhVIAAgKIAAgKQAFAFADAGQACAEAAAFIgKAAgACahpQAAgFgCgEQgDgGgFgFIAAgKQARADACARIABAKIgKAAgACGiHIAAgKQAFAAACACQADADAAAFIgKAAgAB8iRQgFAAgEgCQgGgDgFgFIAAgKQATAAAIALQADAEAAAFIgKAAgABeilIgKAAIAAgKQAKAAAIAEQACABAAAFIgKAAgAhfilIgKAAIAAgKIAKAAIAKAAIAAAKIgKAAgABKivIgKAAIAAgKQAKAAAIAEQACABAAAFIgKAAgAhLivIgKAAIAAgKIAKAAIAKAAIAAAKIgKAAgAA2i5IgKAAIgKAAIAAgKQAPAAANAEQACABAAAFIgKAAgAgti5IgKAAIgKAAIAAgKIAUAAIAKAAIAAAKIgKAAgAhBi5IAAAAg");
	this.shape_143.setTransform(-53.6717,107.6283);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(84,180,183,0.729)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_144.setTransform(-65.8,71.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(15,15,15,0.067)").s().p("AjTDzQgDgDAAgFIAKAAIAAAKQgFAAgCgCgACHDNIAKAAQAAAFgDACQgCADgFAAIAAgKgADNA3IAAgKIAKAAIAAAKIgKAAgADNAPIAAgKIAKAAIAAAKIgKAAgACRiGIAAgKQAFAAACADQADACAAAFIgKAAgAiQjqIAAgKIAKAAIAAAKIgKAAg");
	this.shape_145.setTransform(-48.8,104.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(79,183,187,0.745)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_146.setTransform(-62.8,78.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(55,56,57,0.231)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_147.setTransform(-62.8,79.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(62,65,65,0.263)").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_148.setTransform(-63.8,77.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(90,170,173,0.69)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_149.setTransform(-63.8,76.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(38,39,39,0.161)").s().p("AgCADQgCgDAAgEIAJAAIAAAJQgFAAgCgCg");
	this.shape_150.setTransform(-64.8,75.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(100,147,148,0.592)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_151.setTransform(-64.8,74.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(6,6,6,0.031)").s().p("ABaEiIAKAAQAAAFgCADQgDACgFAAIAAgKgADSDSIAKAAQAAAFgDACQgCADgFAAIAAgKgAjYCyQgDgDAAgFIAKAAIAAAKQgFAAgCgCgAhji9IAAgKIAKAAIAAAKIgKAAgAhrkkQgCgCAAgFIAKAAIAAAKQgFAAgDgDg");
	this.shape_152.setTransform(-55.3,103);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(98,120,121,0.482)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_153.setTransform(-65.8,72.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(101,145,146,0.58)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_154.setTransform(-60.8,64.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(99,152,153,0.608)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_155.setTransform(-65.8,70.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(25,25,25,0.106)").s().p("AzDFPIAAgKIAKAAIAAAKIgKAAgAzrFPIAAgKIAKAAIAAAKIgKAAgAxfEnIAKAAQAAAFgDADQgCACgFAAIAAgKgAvTBLIAAgKIAKAAIAAAKIgKAAgAvngYIAAgKQAFAAACADQADACAAAFIgKAAgA0xi4IAAgKIAKAAIAAAKIgKAAgA1Fk6IAAgKIAKAAIAAAKIgKAAgAU8lEIAAgKQAFAAADACQACADAAAFIgKAAg");
	this.shape_156.setTransform(69.725,100.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(59,62,62,0.251)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_157.setTransform(-63.8,67.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(95,114,114,0.455)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_158.setTransform(-62.8,66.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(99,148,149,0.592)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_159.setTransform(-61.8,65.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(11,11,11,0.051)").s().p("Ag0EGQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAhbD9QgDgDAAgFIAKAAIAAAKQgFAAgCgCgAj7BwQgDgCAAgFIAKAAIAAAKQgFAAgCgDgAD1AjIAAgKIAKAAIAAAKIgKAAgAD1gYIAAgKIAKAAIAAAKIgKAAgAj0h8IAAgKIAKAAIAAAKIgKAAgABLj+IAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_160.setTransform(-52.8,107.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(35,36,36,0.149)").s().p("AgEgEIAJAAQAAAEgDACQgCADgEAAIAAgJg");
	this.shape_161.setTransform(-44.8,79.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(98,150,152,0.608)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_162.setTransform(-44.8,78.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(89,101,102,0.408)").s().p("AgEgEIAJAAQAAAEgDADQgCACgEAAIAAgJg");
	this.shape_163.setTransform(-42.8,74.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(18,18,18,0.078)").s().p("AAtEdIAAgKIAKAAIAAAKIgKAAgACbDrIAKAAQAAAFgCADQgDACgFAAIAAgKgADDDNIAKAAQAAAFgDACQgCADgFAAIAAgKgADrCbIAKAAQAAAFgDADQgCACgFAAIAAgKgAj0BBIAAgKIAKAAIAAAKIgKAAgAjCiGIAAgKIAKAAIAAAKIgKAAgAC5iuIAAgKQAFAAADACQACADAAAFIgKAAgAiQi4IAAgKIAKAAIAAAKIgKAAgABzkcIAKAAQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_164.setTransform(-55.8,105.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(66,197,202,0.804)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_165.setTransform(-43.8,75.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(100,126,128,0.51)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_166.setTransform(-43.8,76.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(72,193,197,0.784)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_167.setTransform(-42.8,73.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(62,199,204,0.812)").s().p("ABVAeIAAgKIAKAAIAAAKIgKAAgAheAeIAAgKQAFAAACACQADADAAAFIgKAAgAhoAKIAAgKQAFAAADACQACADAAAFIgKAAgABfAAIAAgJIAKAAIAAAJIgKAAgAhygJIAAgKQAFAAADADQACACAAAFIgKAAgABpgTIAAgKIAKAAIAAAKIgKAAg");
	this.shape_168.setTransform(-53.8,75);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(71,76,76,0.306)").s().p("AgEgEIAJAAQAAAEgDACQgCADgEAAIAAgJg");
	this.shape_169.setTransform(-41.8,72.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(34,34,34,0.141)").s().p("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");
	this.shape_170.setTransform(-54.3,107);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#F0F9FC").s().p("ABGAFIiVAAIAAgJICVAAIAKAAIAAAJIgKAAg");
	this.shape_171.setTransform(-54.3,79.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(65,68,68,0.278)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_172.setTransform(-45.8,79.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#4EF8FE").s().p("ABLAoIgKAAIiVAAIAAgKQAAgFgDgDQgCgCgFAAIAAgKQAAgFgCgDQgDgCgFAAIAAgJQAAgFgCgCQgDgDgFAAIAAgKIAAgKIAKAAIDHAAIAKAAIAKAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAAJIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAg");
	this.shape_173.setTransform(-53.8,75);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(100,130,132,0.525)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_174.setTransform(-41.8,71.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(97,118,118,0.471)").s().p("AAUAjIAAgKQAFAAACADQADACAAAFIgKAAgAgdgYIAAgKQAFAAADADQACACAAAFIgKAAg");
	this.shape_175.setTransform(-44.3,67.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(95,169,170,0.675)").s().p("ABaAjIAAgKIAKAAIAAAKIgKAAgAhjgOIAKAAQAAAFgDADQgCACgFAAIAAgKgAA0gQQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAhZgOIAAAAgAhZgYIAKAAQAAAFgDADQgCACgFAAIAAgKgAAegYIhjAAIAAgKIBjAAIAKAAIAAAKIgKAAg");
	this.shape_176.setTransform(-52.3,67.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("rgba(98,157,158,0.627)").s().p("AgEAFIAAgJQAEAAACACQADACAAAFIgJAAg");
	this.shape_177.setTransform(-42.8,69.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(95,171,172,0.682)").s().p("AhZAAIAKAAQAAAFgDADQgCACgFAAIAAgKgABSgBQgCgDAAgFIAKAAIAAAJQgFAAgDgBg");
	this.shape_178.setTransform(-54.3,67);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("rgba(51,53,53,0.216)").s().p("AgEAFIAAgJQAEAAACACQADACAAAFIgJAAg");
	this.shape_179.setTransform(-44.8,66.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(94,169,170,0.675)").s().p("AhtAPIAAgKIAAgJIAKAAIAAAJIAAAKIgKAAgABoADQgEgHAAgKIAKAAIAAAKIAAAJQgFAAgBgCg");
	this.shape_180.setTransform(-54.3,69.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("rgba(13,13,13,0.059)").s().p("AAeEnIAKAAQAAAFgCACQgDADgFAAIAAgKgAgnkmIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_181.setTransform(-40.3,97.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#8FFEFF").s().p("ABfAeIjHAAIAAgKIAAgKQAFAAADgCQACgDAAgFQAFAAACgBQADgDAAgFQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFIAKAAIBjAAIAKAAIAKAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAQAAAFACADQADABAFAAQAAAKAEAIQABACAFAAIAAAKIgKAAg");
	this.shape_182.setTransform(-53.8,68);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("rgba(93,171,172,0.682)").s().p("AhjAPIAKAAQAAAFgCADQgDACgFAAIAAgKgABcANQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAA8gOIAAgKIAKAAIAAAKIgKAAgAg7gOIAAgKIAKAAIAAAKIgKAAg");
	this.shape_183.setTransform(-54.3,66.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("rgba(91,104,104,0.416)").s().p("AgEAFIAAgJQAEAAADACQACACAAAFIgJAAg");
	this.shape_184.setTransform(-45.8,65.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#F6F4F9").s().p("AgEA8IAAgKIAJAAIAAAKIgJAAgAgBgWQgDgCAAgFIAJAAIAAAKQgFAAgBgDgAgBg0QgDgCAAgFIAJAAIAAAKQgFAAgBgDg");
	this.shape_185.setTransform(378.95,102);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("rgba(48,48,49,0.2)").s().p("AgCACQgCgCAAgEIAJAAIAAAJQgFAAgCgDg");
	this.shape_186.setTransform(372.95,91.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(41,41,42,0.173)").s().p("AgCACQgCgCAAgEIAJAAIAAAJQgFAAgCgDg");
	this.shape_187.setTransform(371.95,90.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FAF8FB").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_188.setTransform(379.95,92.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FBF9FC").s().p("A/nEJIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAQAAgFgBAAQgTgFgUAAQAAgFgCgBQgIgEgKAAQAAgFgCgBQgIgEgKAAQAAgFgCgBQgIgEgKAAQAAgFgCgBQgIgEgKAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgDQgDgCgFAAQAAgFgCgEQgDgGgFgFQAAgFgCgDQgDgCgFAAQAAgFgCgEQgDgGgFgFIABgJQAGgWgRABIABgKQAGgVgRABIAAgKIAAgKIAAgKIAAgnIAAgKIAAgKQARACgGgWIgBgKQARABgGgWIgBgJQAFgFADgGQACgEAAgFQARgDADgRIAAgKQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFQAKAAAIgEQACgBAAgFQAFAAADgCQACgDAAgFQAKAAAIgEQACgBAAgFQAWAGgBgQIgBgKIAAgKIAAgKICWAAIAKAAQAAAKAEAIQABACAFAAQgCAbAWADIAKAAQAFAFAGADQAEACAFAAQAFAFAGADQAEACAFAAQAAAFADACQACADAFAAQAAAFADACQACADAFAAQAAAFADACQACADAFAAQAAAFADACQACADAFAAQAAAFADACQACADAFAAQAAAKAEAIQABACAFAAQAAAKAEAIQABACAFAAQAAAKAEAIQABACAFAAQAAAKAEAIQABACAFAAIAAAKQAAAPAFAOQAAABAFAAIAAAKIAAAKIAAAJIAAAKIAAAKIAAAKIAAAKIgKAAIAAAUIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIgUAAIAAAKIgKAAgEgjDgAiIAAAKIAAAKIAAAKIAAAJIAAAKIAAAKIAAAKIAAAKQAAAPAFANQAAACAFAAIAAAKQAAAKAEAIQABACAFAAQAAAKAEAIQABACAFAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAQAFAFAGADQAEACAFAAQAFAFAGADQAEACAFAAQAFAFAGADQAEACAFAAIAKAAQADARAbgGIAKgBIAKAAIAKAAIAKAAQAUAAATgFQABAAAAgFIAKAAQAKAAAIgEQACgBAAgFQAKAAAIgEQACgBAAgFQAUAAAIgMQACgDAAgFQAFAAADgCQACgDAAgFQARgDADgRIAAgKQAFgFADgGQACgEAAgFQAFgFADgGQACgEAAgFIAAgKQARgDgGgbIgBgKIAAgKIAAgKIAAgJIAAgKIABgKQAGgVgRABIAAgKQAAgFgCgEQgDgGgFgFQAAgFgCgEQgDgGgFgFIAAgKQgDgRgRgDQAAgFgCgDQgDgCgFAAQAAgFgCgDQgIgMgUAAQAAgFgCgBQgIgEgKAAQAAgFgCgBQgIgEgKAAQAAgFgBAAQgOgFgPAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgUAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIAAAKIgKAAIAAAUgEAj2gCaIAKAAQAAAFgDACQgCADgFAAIAAgKg");
	this.shape_189.setTransform(151.075,106.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#F9F7FA").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_190.setTransform(382.95,88.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("rgba(46,46,47,0.192)").s().p("AgEAFIAAgJQAEAAADADQACABAAAFIgJAAg");
	this.shape_191.setTransform(382.95,73.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("rgba(60,60,61,0.251)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_192.setTransform(372.95,81.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("rgba(24,24,24,0.102)").s().p("AAoDrIAKAAQAAAFgDADQgCACgFAAIAAgKgAgxh8IAAgKIAAhuIAKAAIAAAKIAABkIAAAKIgKAAgAAAikIAAgKIAKAAIAAAKIgKAAg");
	this.shape_193.setTransform(374.45,98.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("rgba(63,62,64,0.263)").s().p("AAjDwIAAgKIAAh4IAKAAIAAAKIAABuIAAAKIgKAAgAgsjlIAAgKIAKAAIAAAKIgKAAg");
	this.shape_194.setTransform(374.95,97);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("rgba(48,48,48,0.2)").s().p("AgsAeIAAgKIAAgnIAKAAIAAAnIAAAKIgKAAgAAjgTIAAgKIAKAAIAAAKIgKAAg");
	this.shape_195.setTransform(376.95,76);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("rgba(32,32,32,0.133)").s().p("Egg3AExIAAgKIAKAAIAAAKIgKAAgA+XD1IAKAAQAAAFgCADQgDACgFAAIAAgKgA9bC5IAKAAQAAAFgCADQgDACgFAAIAAgKgEgi5gCuIAAgKIAKAAIAAAKIgKAAgA+1i4IAAgKQAFAAADACQACADAAAFIgKAAgEAiwgEmIAAgKQAFAAACADQADACAAAFIgKAAg");
	this.shape_196.setTransform(155.075,103.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FDFDFE").s().p("AgPDDIATAAIAKAAQAAAFgCABQgKAEgFAAQgKAAgCgKgAA2C5IAKAAQAAAFgDACQgCADgFAAIAAgKgAg/DAQgCgCAAgFQAFAAACACQADADAAAFQgFAAgDgDgABUCvIAKAAIAAgKIAKAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAIAAgKgAhnCsQgCgCAAgFQAFAAACACQADADAAAFQgFAAgDgDgAB8CRIAKAAQAAAFgDACQgCADgFAAIAAgKgAiFCYQgCgCAAgFQAFAAACACQADADAAAFQgFAAgDgDgACGCHIAKAAQAAAFgDACQgCADgFAAIAAgKgAiPCOQgCgCAAgFQAFAAACACQADADAAAFQgFAAgDgDgACQCHIAAAAgACQB9IAKAAIAAgKIAKAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAIAAgKgAiZCEQgCgCAAgFQAFAAACACQADADAAAFQgFAAgDgDgAitBmQgCgCAAgFQAFAAACACQADADAAAFQgFAAgDgDgACuBVIAKAAQAAAFgDACQgCADgFAAIAAgKgAi3BSQgCgCAAgFQAFAAACACQADADAAAFQgFAAgDgDgAC4BBIAKAAQAAAFgDACQgCADgFAAIAAgKgAi/A/QgEgIAAgKQAFAFADAGQACAEAAAFQgFAAgBgCgADCAZIAAgKIAKAAQAAAFgCAEQgDAGgFAFIAAgKgAjJANQgEgNAAgOIAKAAIAAATIAAAKQgFAAgBgCgADGgQQgEgNAAgPQAQgBgFAVIgBAKQgFAAgBgCgAjDgiIAAgKIAAgUIAKAAIABAJQAFAVgOAAIgCAAgAC6hDQgCgCAAgFQAFAAACACQADADAAAFQgFAAgDgDgAi5heIAKAAQAAAFgDACQgCADgFAAIAAgKgACmhrQgCgCAAgFQAFAAACACQADADAAAFQgFAAgDgDgAivhyIAKAAQAAAFgDACQgCADgFAAIAAgKgACSiJQgCgCAAgFQAFAAACACQADADAAAFQgFAAgDgDgACIiTQgCgCAAgFQAFAAACACQADADAAAFQgFAAgDgDgAhziuIAKAAQAAAFgDACQgCADgFAAIAAgKgABgixQgCgCAAgFQAFAAACACQADADAAAFQgFAAgDgDgAhfi4IAKAAQAAAFgDACQgCADgFAAIAAgKgABLi6QgGgDgFgFQAKAAAIAEQACABAAAFQgFAAgEgCgAhLjCIAKAAQAAAFgDACQgCADgFAAIAAgKgAAOjMQAPAAANAEQACABAAAFIgKABIgJABQgMAAABgMgAgtjMIAUAAIAKAAQAAAFgCAAQgNAFgPAAIAAgKg");
	this.shape_197.setTransform(406.0688,98.5161);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FEFDFE").s().p("AAoDIIgeAAIgKAAIgTAAIgKAAIgeAAQAAgFgCgCQgDgDgFAAQgFAAgEgCQgLgDgKgFQAAgFgDgCQgCgDgFAAQgFAAgEgCQgGgDgFgFQAAgFgCgDQgDgCgFAAQAAgFgCgDQgDgCgFAAQAAgFgCgDQgDgCgFAAQAAgFgCgEQgDgGgFgFQAAgFgDgCQgCgDgFAAIAAgKQAAgFgDgCQgCgDgFAAIAAgKQAAgFgCgEQgDgGgFgFIAAgKIAAgUIAAgKIAAgTIAAgKIAAgKQAQABgFgVIgBgKIAAgKIAAgKQAFAAACgDQADgCAAgFIAAgKQAFAAACgDQADgCAAgFIAAgKQAagNASgYQABgDAFAAQAFAAACgDQADgCAAgFIAKAAQAFAAACgDQADgCAAgFIAKAAQAFAAADgDQACgCAAgFIAKAAIAKAAQAPAAANgEQACgBAAgFIATAAIAKAAQgBAQAWgFIAJgBIAKAAIAKAAQAFAFAGADQAEACAFAAIAKAAQAAAFADACQACADAFAAQARADAHAPQABACAFAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAQAFAFADAGQACAEAAAFQAAAFADACQACADAFAAQAFAKADALQACAEAAAFQAAAFADACQACADAFAAIAAAKIAAAKQAAAPAEANQABACAFAAIAAATIAAAKIgKAAIAAAKIAAAKIAAAUIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKQAAAFgDACQgCADgFAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKQgFAAgEACQgGADgFAFIgKAAIAAAKIgKAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAg");
	this.shape_198.setTransform(406.45,98);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FAF9FC").s().p("AgEAyIAAgKIAAhZIAJAAIAABZIAAAKIgJAAg");
	this.shape_199.setTransform(429.95,88);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("rgba(19,19,19,0.082)").s().p("EgljADmIAAgKQAFAAADADQACACAAAFIgKAAgEAnoADGQgCgDAAgFIAKAAIAAAKQgFAAgDgCgEgh9ABkIAAgKIAKAAIAAAKIgKAAgEgnvAAyIAAgKIAKAAIAAAKIgKAAgAh4g0QgCgCAAgFIAKAAIAAAKQgFAAgDgDgAdoiEQgCgCAAgFIAKAAIAAAKQgFAAgDgDgAdcifIAAgKIAKAAIAAAKIgKAAgAfojbIAAgKIAKAAIAAAKIgKAAg");
	this.shape_200.setTransform(181.075,103);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("rgba(51,51,51,0.212)").s().p("AExDXIAAgKIAKAAIAAAKIgKAAgAk6jCIAAgKIAAgKIAKAAIAAAKIAAAKIgKAAg");
	this.shape_201.setTransform(403.95,100.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("rgba(59,58,59,0.243)").s().p("AFADwIAKAAQAAAFgDADQgCACgFAAIAAgKgAkXDwIAAgKIAKAAIAAAKIgKAAgAlJgxIAAgKIAKAAIAAAKIgKAAgAk1jvIAAgKIAKAAIAAAKIgKAAg");
	this.shape_202.setTransform(406.45,98);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("rgba(7,7,7,0.035)").s().p("AA3EJIAAgKIAKAAIAAAKIgKAAgABzD1IAKAAQAAAFgDACQgCADgFAAIAAgKgAj0DhIAKAAQAAAFgDADQgCACgFAAIAAgKgAkGDpQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAjACPQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAETB9IAKAAQAAAFgDADQgCACgFAAIAAgKgAkag4QgCgDAAgFIAKAAIAAAKQgFAAgDgCgAEJi4IAAgKIAKAAIAAAKIgKAAgAiujMIAAgKIAKAAIAAAKIgKAAgAiQjqIAAgKIAKAAIAAAKIgKAAgADNj0IAAgKQAFAAACACQADADAAAFIgKAAgAkSj+IAAgKIAKAAIAAAKIgKAAg");
	this.shape_203.setTransform(401.95,100.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("rgba(9,9,9,0.043)").s().p("EAjOAEYIAAgKIAKAAIAAAKIgKAAgEAi6AEYIAAgKIAKAAIAAAKIgKAAgEgmBAEEIAAgKQAFAAADADQACACAAAFIgKAAgEAlkADcIAKAAQAAAFgDADQgCACgFAAIAAgKgEAm+AB4IAKAAQAAAFgDADQgCACgFAAIAAgKgEAnIABkIAKAAQAAAFgDACQgCADgFAAIAAgKgEgh6AAmQgDgDAAgFIAKAAIAAAKQgFAAgCgCgEgnRgATIAKAAQAAAFgCACQgDADgFAAIAAgKgEgmBgBZIAKAAQAAAFgCACQgDADgFAAIAAgKgEAmggCzIAAgKQAFAAACADQADACAAAFIgKAAgAeOizIAAgKIAAgyIAKAAIAAAyIAAAKIgKAAgAf8jHIAAgKIAKAAIAAAKIgKAAgEAgGgDRIAAgKIAKAAIAAAKIgKAAgEAgugDvIAAgKIAKAAIAAAKIgKAAgEAhqgENIAAgKIAKAAIAAAKIgKAAg");
	this.shape_204.setTransform(181.075,99);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("rgba(56,55,56,0.231)").s().p("AgEBaIAAgKIAAifIAAgKIAJAAIAACpIAAAKIgJAAg");
	this.shape_205.setTransform(434.95,112);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#F8F6FA").s().p("AgFAPIAAgKIAAgTQAPgBgFAVIgBAJIgJAAg");
	this.shape_206.setTransform(435.0688,101.4978);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("rgba(12,12,12,0.055)").s().p("AAAEdIAAgKIAKAAIAAAKIgKAAgABGETIgeAAIgKAAIAAgKIAoAAIAKAAIAAAKIgKAAgAgdETIgKAAIgeAAIAAgKQAZAAAYAFQABAAAAAFIgKAAgABkEJIgKAAIgKAAIAAgKIAUAAIAKAAIAAAKIgKAAgAhPEJQgFAAgEgCQgfgNgegPIAAgKQAoAPAmATQACABAAAFIgKAAgAFAD1IAKAAQAAAFgCADQgDACgFAAIAAgKgAB4D/IgKAAIAAgKIAKAAIAKAAIAAAKIgKAAgABuD/IAAAAgACMD1IgKAAIAAgKIAKAAIAKAAIAAAKIgKAAgACWDrIAAgKIAKAAIAAgKQAKgFALgDQAEgCAFAAIAAAKQgFAAgEACQgGADgFAFIgKAAIAAAKIgKAAgACWDrIAAAAgAifDhQgFAAgCgCQgcgcgZgeIAAgKQAjAeAhAgQACADAAAFIgKAAgAC+DNIAAgKIAKAAIAAAKIgKAAgADIDDIAAgKIAKAAIAAgKIAKAAIAAgKIAAgKQAFgFAGgDQAEgCAFAAIAAgKIAAgKIAKAAIAAAKIAAAKIgKAAIAAAKQAAAFgCADQgDACgFAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAgADIDDIAAAAgAjlCbQAAgFgCgEQgDgGgFgFIAAgKQARADACARIABAKIgKAAgAD6B9IAAgKIAAgKIAKAAIAAAKIAAAKIgKAAgAj5B9QAAgFgCgEQgDgGgFgFIAAgKQAbgGgGAaIgBAKIgKAAgAEEBpIAAgKIAAgUQARgDgCgbIAFAAIAAAKIABAJQAGAXgRgCIAAAKIAAAKIgKAAgAEEBpIAAAAgADeinQgCgCAAgFIAKAAIAAAKQgFAAgDgDgADciuQgFAAgDgDQgWgWgUgZIAKAAQAUAPASASQACACAAAFIAAAKIAAAAgAjRi4IAKAAIAAgKIAKAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAIAAgKgAi9jMIAKAAIAAgKIAKAAQAAAFgDADQgCACgFAAQAAAFgDACQgCADgFAAIAAgKgAipjgQAFgFAGgDQAEgCAFAAIAKAAQAAAFgCAEQgIALgUAAIAAgKgACgjgQgRgDgDgRIAKAAQAFAFAGADQAEACAFAAIAAAKIgKAAgAiLj0QAUgKAUgIQAFgCAFAAIAKAAQAAAFgCABQgcAOgeAKIAAgKgACMj0QgFAAgEgCQgGgDgFgFIAKAAIAKAAIAAAKIAAAAgAlJj0IAAgKQAFAAADADQACACAAAFIgKAAgAB4j+IgKAAQgggDgSgRIAKAAQAcgCAOAJQADADAFAAIAAAKIAAAAgAhPkSIAKAAIAKAAIAKAAQAAAFgBAAQgOAFgPAAIAAgKgAA8kSIgKAAIhjAAIAAgKIBjAAIAKAAIAAAKIAAAAg");
	this.shape_207.setTransform(405.45,98.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#F9F7FB").s().p("AgBACQgDgCAAgEQAEAAACADQADABAAAFQgFAAgBgDg");
	this.shape_208.setTransform(432.95,98.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FDFCFD").s().p("AAFETIgJAAIgKAAIgKAAIgKAAQAAgFgBAAQgYgFgZAAQAAgFgCgBQgmgTgogPQAAgFgCgDQghgggjgeIgBgKQgCgRgRgDIABgKQAGgagbAGIAAgKIAAgKIAAg8IAAgKIAAgJIAAgKIAAgKIAAgKIAAgKQAFAAACgCQADgDAAgFIAAgKQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFQAFAAADgDQACgCAAgFIAAgKIAAgKQARgNgGglIgBgKQAFAAACgDQADgCAAgFQAFAAACgDQADgCAAgFQAFAAACgDQADgCAAgFQAFAAACgCQADgDAAgFQAUAAAIgLQACgEAAgFQAegKAcgOQACgBAAgFQAPAAAOgFQABAAAAgFIBjAAIAKAAQASARAgADIAKAAQAFAFAGADQAEACAFAAQADARARADIAKAAQAUAZAWAWQADADAFAAQAAAFACACQADADAFAAIAKAAIAAAKIAABaIAAAKIAAAKQAAAFACADQADACAFAAIAAAKQAAAFADACQACADAFAAQAAAFADACQACADAFAAQAAAEADACQACADAFAAQAAAFADACQACADAFAAIAAAUIAAAKIgKAAIgFAAQACAbgRADIAAAUIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKQgFAAgEACQgGADgFAFIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKQgFAAgEACQgLADgKAFIAAAKIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgUAAIAAAKIgKAAIgoAAIAAAKIgKAAgAjRANQAAACAFAAIAAAUIAAAKQAAAKAEAIQABACAFAAIAAAKQAAAFADACQACADAFAAIAAAKQAAAFADACQACADAFAAQAFAFADAGQACAEAAAFQAAAFACADQADACAFAAQAAAFACADQADACAFAAQAAAFACADQADACAFAAQAFAFAGADQAEACAFAAQAAAFADACQACADAFAAQAKAFALADQAEACAFAAQAAAFACACQADADAFAAIAeAAIAKAAQADARAYgLQACgBAAgFIAeAAIAKAAQAFAAACgDQADgCAAgFIAKAAIAKAAQAFAAACgDQADgCAAgFQAFAAACgDQADgCAAgFQAFgFAGgDQAEgCAFAAQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFIAAgKQAFAAACgDQADgCAAgFQAFAAACgDQADgCAAgFIAAgKQAFAAACgCQADgDAAgFIAAgKIAAgUQAFgFADgGQACgEAAgFIAAgKIAAgTIABgKQAFgVgQABIAAgKIAAgKQAAgFgDgCQgCgDgFAAQAAgFgCgEQgDgLgFgKQAAgFgDgDQgCgCgFAAQAAgFgCgEQgDgGgFgFQAAgFgDgDQgCgCgFAAQAAgFgCgDQgDgCgFAAQgFAAgBgCQgHgPgRgDQAAgFgDgCQgCgDgFAAIgKAAQAAgFgCgBQgIgEgKAAIgKAAIgKAAQAAgFgBAAQgOgFgPAAIgJAAIgUAAIgKAAIgUAAIAAAKIgKAAIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKIgKAAIgKAAIAAAKQgFAAgBADQgSAYgaANIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIAAAKIAAAKIgKAAIAAAUIAAAKIAAAKIAAAKIgKAAQAAAOAFANg");
	this.shape_209.setTransform(406.95,98.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#F9F8FB").s().p("AgBACQgDgCAAgEQAEAAACADQADABAAAFQgFAAgBgDg");
	this.shape_210.setTransform(431.95,97.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#F7F4F9").s().p("AgEAFIAAgJQAEAAACACQADACAAAFIgJAAg");
	this.shape_211.setTransform(430.95,95.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FCFBFD").s().p("AD3BEQgCgDAAgFIAKAAIAAAKQgFAAgDgCgAj+AyIAKAAQAAAFgDADQgCACgFAAIAAgKgAjgAKIAKAAQAAAFgCACQgDADgFAAIAAgKgAjWgTIAAgyIAKAAIABAKQAGAlgRANIAAgKg");
	this.shape_212.setTransform(404.95,88);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("rgba(17,17,17,0.075)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_213.setTransform(429.95,81.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FBFAFC").s().p("AECBXQgDgCAAgFQAFAAACADQADACAAAFQgFAAgCgDgADkA6QgDgDAAgFIAKAAIAAAKQgFAAgCgCgADXAeIAAgKIAKAAIAAAKIgKAAgAkIgJIAKAAQAAAFgCACQgDACgFAAIAAgJgADXhPIAAgKIAKAAIAAAKIgKAAg");
	this.shape_214.setTransform(407.95,91);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("rgba(29,29,29,0.122)").s().p("EgjwAEnIAAgKIAKAAIAAAKIgKAAgEgi0AEdIAAgKIAKAAIAAAKIgKAAgEglvAEHQgDgDAAgFIAKAAIAAAKQgFAAgCgCgEgnTACtQgDgDAAgFIAKAAIAAAKQgFAAgCgCgEggKAB9IAKAAQAAAFgCACQgDADgFAAIAAgKgEggAABpIAAgKIAKAAIAAAKIgKAAgEgn+ABBIAAgKIAKAAIAAAKIgKAAgEgn+AAFIAAgJIAKAAIAAAJIgKAAgEggAgAiIAAgKIAKAAIAAAKIgKAAgEggUgBUIAAgKQAFAAADACQACADAAAFIgKAAgEgm4gCQIAAgKIAKAAIAAAKIgKAAgEgmugCaIAAgKIAKAAIAAAKIgKAAgEAn1gEcIAAgKIAKAAIAAAKIgKAAg");
	this.shape_215.setTransform(175.575,104.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("rgba(43,43,44,0.18)").s().p("AgEAFIAAgJIAJAAIAAAJIgJAAg");
	this.shape_216.setTransform(431.95,74.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("rgba(14,14,14,0.063)").s().p("AEnD/IAAgKIAKAAIAAAKIgKAAgAkwD/IAAgKIAKAAIAAAKIgKAAgADhiuIAAgKIAAgUIAKAAIAAAUIAAAKIgKAAgAD/j0IAAgKIAKAAIAAAKIgKAAg");
	this.shape_217.setTransform(406.95,98.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("rgba(54,53,54,0.224)").s().p("AkpD4QgCgDAAgFIAKAAIAAAKQgFAAgDgCgAEijvIAAgKIAKAAIAAAKIgKAAg");
	this.shape_218.setTransform(404.45,98);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#F6F3F8").s().p("AE7D1QAAgFgCgDQgDgCgFAAIAAgKIAAgKIAAiqIABgJQAFgWgQABQAAgFgDgCQgCgDgFAAQAAgFgDgBQgCgDgFAAQAAgFgDgCQgCgDgFAAIAAgKQAAgFgDgDQgCgCgFAAIAAgKIAAgKIAAgKIAAhaIAAgKIAAgKIAAgKIAAgUQAFgFADgGQACgEAAgFQAFAAACgCQADgDAAgFQAFAAACgCQADgDAAgFIAKAAIAUAAIAKAAQAAAFACADQADACAFAAQAAAPAFANQAAACAFAAIAAGZIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAgAkcD1QAAgFgDgDQgCgCgFAAIAAgKQAHiTgRh6IAAgKIAAgKQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgCQgDgDgFAAQAAgFgCgEQgDgGgFgFIAAgKIAAgKIAAhkQAFAAACgCQADgDAAgFIAKAAIAAAoIAAAKIAAAKIAAAKIAAAKQADARAZgLQACgBAAgFIAAgKIAAgKIAAgyQAFAAACgCQADgDAAgFIAKAAQgSBOAwAHIAAgFQASgXgHgvIgBgKIAKAAQAAAjAFAiIAFABIAAAyIAAAKIAAAKIgKAAIAAAKIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIAAAKIAAAKIAAAKIgKAAQAAAFADACQACADAFAAIAAAKIAAAJIgKAAQAAAFADACQACADAFAAIAAA8IAAAKIgKAAIAAAKIAAB4IAAAKIAAAKIgKAAIAAAKIgKAAg");
	this.shape_219.setTransform(404.95,98.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("rgba(68,67,68,0.282)").s().p("AFFD6IAAgKIAKAAIAAgKIAAgKIAKAAIAAAKIAAAKIgKAAIAAAKIgKAAgAExD6IAAgKQAFAAADACQACADAAAFIgKAAgAkSD6IAAgKIAKAAIAAAKIgKAAgAkmD6IAAgKQAFAAACACQADADAAAFIgKAAgAkwDwIAAgKIAAkDIAAgKQARB6gHCTIAAAKIgKAAgAk6g7IAAgKQAFAAADADQACACAAAFIgKAAgAlEhFIAAgKQAFAAADADQACACAAAFIgKAAgAlOhPIAAgKQAFAAADADQACACAAAFIgKAAgAlYhZIAAgKIAAgKQAFAFADAGQACAEAAAFIgKAAgAlEifIAKAAIAKAAIAKAAQAAAFgCABQgKAEgGAAQgKAAgCgKgAkSjvIgKAAIAAgKIAKAAIAAAKIAKAAQAAAoAFAoIAFAAIAKAAIAAgKIAAgKIAAg8IAKAAIAAgKIAKAAIAAAKIgKAAIABAKQAHAvgSAXIAAAFQgwgHAShOgAjbiqQgFgiAAgjIAKAAIAAAyIAAAKIAAAKIgFgBgAFUjJQgFgNAAgPIAKAAIAAAKIAAAKIAAAKQgFAAAAgCgAD/jRIAAgKIAKAAQAAAFgCAEQgDAGgFAFIAAgKgAEJjlIAKAAQAAAFgDADQgCACgFAAIAAgKgAFPjlQgFAAgDgCQgCgDAAgFIAKAAIAAAKIAAAAgAETjvIAKAAQAAAFgDADQgCACgFAAIAAgKgAkmjvIAKAAQAAAFgDADQgCACgFAAIAAgKgAlYjvIAKAAIAAgKIAKAAIAAAKIgKAAQAAAFgDADQgCACgFAAIAAgKgAFFjvIgKAAIgUAAIAAgKIAUAAIAKAAIAAAKIAAAAgAkcjvIAAAAg");
	this.shape_220.setTransform(404.95,98);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("rgba(37,37,37,0.153)").s().p("AgEAFIAAgJQAEAAADADQACABAAAFIgJAAg");
	this.shape_221.setTransform(437.95,73.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("rgba(27,27,27,0.114)").s().p("EgmIAEgQgDgDAAgFIAKAAIAAAKQgFAAgCgCgEgmwAEMQgDgDAAgFIAKAAIAAAKQgFAAgCgCgEgnYADtQgDgCAAgFIAKAAIAAAKQgFAAgCgDgEgnbADmQgFAAgCgDQgDgCAAgFIAKAAIAAAKIAAAAgEghBACgIAKAAQAAAFgCADQgDACgFAAIAAgKgEgohgAdIAAgKIAKAAIAAAKIgKAAgAeOhZIAAgKIAKAAIAAAKIgKAAgEghLgBZIAAgKQAFAAADACQACADAAAFIgKAAgEgnvgB3IAAgKIAKAAIAAAKIgKAAgEgnRgCVIAAgKIAKAAIAAAKIgKAAgEgibgCpIAAgKQAFAAADACQACADAAAFIgKAAgEAoYgEXIAAgKQAFAAACACQADADAAAFIgKAAg");
	this.shape_222.setTransform(180.075,103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#999999").s().p("Egk3AGZIgKAAIgKAAIgLAAIgKAAIgLAAIgKAAQgFAAgDgDQgCgDAAgEIgLAAIgVAAQgFAAgDgDQgCgDAAgFIgLAAQgFAAgCgDQgDgCAAgGIgKAAQgGABgCgDQgDgDAAgFIgKAAQgFAAgDgCQgDgDAAgFIgKAAQgFAAgDgCQgCgEAAgEQgGgBgCgCQgDgCAAgGQgFAAgDgDQgCgCAAgGQgFAAgDgCQgDgDAAgFQgFAAgCgDQgDgCAAgFQgFAAgDgCQgCgEAAgFIAAgKQgGAAgCgCQgDgDAAgFQgFAAgDgDQgCgCAAgFIAAgLQgFAAgDgDQgDgCAAgGIAAgKIAAgKQgFgBgCgCQgDgDAAgEIAAgLIAAgLIAAgKIgKAAIAAgLIAAgKIAAgKIAAgqIAAgKIAAgKIAAgLIAKAAIAAgKIAAgLIAAgKIAKAAIAAgLIAAgKIAAgKIALAAIAAgLIAAgJIAKAAIAAgLQAFAAADgCQADgDAAgFIAAgKIAKAAIAAgLIAKAAIAAgKIALAAIAAgKIAKAAIAAgLIALAAIAAgLIAKAAIAKAAIAAgKIALAAIAKAAIAAgKIALAAIAAgKIAKAAQAFAAADgEQACgCAAgFIAAgLIAAgKIAAgLIAAgJQgFAAgCgDQgDgDAAgFIAAgKQgFAAgDgDQgCgDAAgFIAAgLQgGAAgCgCQgDgDAAgFIAAgKIAAgKIAAgLIALAAIAAgKIAAgLIAKAAIAAgKIAKAAIAAgLIALAAIAAgKIAKAAIAAgKIALAAIAKAAIBoAAIALAAIAKAAQAFAAADACQACADAAAFQAGAAACACQADADAAAFQAFABADACQACACAAAGQAFAAADADQADACAAAFIAAALQAFAAACADQADACAAAFQAFAAADADQACADAAAFIAAAKQAAAFgCADQgDACgFAAIAAAKQAAAGgDACQgCADgFAAIAAALIAAAKQAAAFgDADQgDADgFAAIAAAJQAAAGgCACQgDADgFAAIAAAKQAFAAADADQACACAAAGQAFALAIAHQADACAFABQAFAAADACQACADAAAFIALAAQAFAAADADQACADAAAEIALAAQAFABACACQADADAAAFQAFAAADADQACACAAAGQAGAAACACQADADAAAFQAFAAADACQACADAAAFQAFAAADADQADADAAAFIAAAKIAKAAIAAAKQAFAAADADQACADAAAFIAAAJQAGAAACADQADADAAAFIAAAKQAFAAADACQACADAAAFIAAALQAFAAADADQADACAAAFIAAALIAAAKIAAALIAAAKIAKAAIAAAKIAAAKIAAALIAAALIAAAKIAAAKIAAAKIgKAAIAAALIAAAKIAAALIAAALIgLAAIAAAKIAAAKQAAAFgCADQgDADgFgBIAAALQAAAFgDACQgCADgGABIAAAKQAAAFgCADQgDACgFAAQAAAGgDACQgCACgFAAIAAALQAAAFgDACQgDADgFAAQAAAFgCADQgDACgFAAQAAAGgDACQgCADgGAAQAAAGgCACQgDACgFABIgKAAQAAAEgDAEQgDACgFAAQAAAFgCADQgDACgFAAIgLAAQAAAFgCADQgDADgFgBIgKAAQAAAGgDACQgDADgFAAIgKAAQAAAFgDADQgCADgGAAIgKAAIgKAAIgLAAQAAAEgCADQgDADgFAAIgLAAgEgnLgATQgDACgFAAQAAAFgCADQgDADgFAAQAAAFgDABQgCADgGAAQAAAGgCACQgDACgFABIAAAKQAAAFgDADQgCADgFgBQAAAFgDADQgDADgFAAIAAAKIAAALQAAAFgCACQgDADgFAAIAAALIAAAKIAAAKIAAAKIAAALIAAALIAAAKIAAAKIAAAKIAAALIAAAKQAFAAADADQACACAAAGIAAALIAAAKQAFAAADACQADADAAAFIAAAKQAFABACACQADACAAAGQAFAAADADQACACAAAGQAGAAACACQADADAAAFQAFAAADADQACACAAAFQAFAAADACQADAEAAAEIAKAAQAFABADACQACACAAAGIALAAQAFAAADACQACADAAAFIALAAIAKAAQAFAAADADQADACAAAFIAUAAIALAAIAKAAIALAAIAKAAIAVAAIAKAAIAAgKIALAAIAKAAIAKAAIAAgKIALAAIAKAAIAAgLIALAAQAFgEAGgEQAEgCAFAAIAAgKIALAAIAAgKIAKAAIAAgLQAFAAADgDQADgCAAgGIAAgKIAKAAIAAgKIAAgKIAKAAIAAgLIAAgLIAAgKIALAAIAAgLIAAgUIAAgKIAAgLIAAgLIAAgKIAAgKIAAgKQgFgBgDgCQgDgDAAgFIAAgKIAAgLQgFAAgCgDQgDgCAAgFIAAgLQgFABgDgDQgCgDAAgFQAAgFgCgEQgEgGgFgGQgFAAgDgDQgCgBAAgFQgFAAgDgDQgDgDAAgFQgFAAgEgCQgGgDgFgFQgGAAgCgCQgDgDAAgFIgKAAQgFgBgDgCQgDgCAAgGIgKAAQgFAAgDgCQgCgDAAgFIgLAAIgKAAIgLAAIgKAAIgKAAIgLAAIgKAAIgLAAIgKAAIgKAAIgLAAQAAAFgDADQgCACgFAAIgLAAQAAAGgCACQgDACgFABIgLAAQAAAFgCADQgDACgFAAIgKAAQAAAFgDADgAi6E1IAAgLIAAgKIAAgLIAAgKIAKAAIAAgKIAKAAIAAgKIALAAIAKAAQCBgHgti1IgBgKQgFAAgCgDQgDgDAAgFQgFAAgDgDQgCgCAAgFQgGAAgCgDQgDgDAAgFQgFABgDgDQgCgDAAgFQgFAAgDgCQgDgDAAgEIAAgLQgFAAgCgDQgDgCAAgFQgFAAgDgDQgCgCAAgGQgGAAgCgCQgDgDAAgFQgFAAgDgDQgCgCAAgGQgFABgDgDQgDgCAAgGQgFAAgCgCQgDgDAAgFIAAgKQgFAAgDgDQgCgDAAgFQgGAAgCgDQgDgCAAgGQgFAAgDgCQgCgDAAgFQgGAAgCgCQgDgDAAgFQgFgBgDgCQgCgDAAgEQgFAAgDgDQgDgDAAgFIAAgKQgFAAgCgDQgDgDAAgFQgFAAgDgDQgCgCAAgGQgGABgCgDQgDgDAAgFQgFAAgDgCQgCgDAAgFQgFAAgDgCQgDgEAAgEQgFgBgCgCQgDgCAAgGIAAgLQgFAAgDgCQgCgDAAgFQgGAAgCgDQgDgCAAgFQgFAAgDgCQgCgEAAgEQgFgBgDgCQgDgCAAgGIAAgKIAAgKIAAgLIALAAIFhAAIAKAAIAAgLIAKAAIAAgKIAAgKIAAgKIALAAIAAgLIAAgLIAAgKIAKAAIAAgLIAAgKIAAgKIALAAIAKAAQAFAAADACQACADAAAFIAAAKQAAAGgCACQgDADgFAAIAAAKIAAALQAAAFgDACQgCAEgFAAIAAAKIAAAKQAAAFgDADQgDADgFgBIAAALIC7AAIALAAQAFAAADADQACACAAAGIAAAKIAAAKQAAAGgCACQgDACgFABQAAAEgDAEQgCACgGAAQAAAFgCACQgDADgFAAQAAAFgDADQgHAIgLAFIAAALQAAAEgCAEQgDACgFAAQAAAFgDADQgCACgGAAQAAAFgCADQgDADgFgBQAAAGgDACQgCADgFAAQAAAFgDADQgDADgFAAQAAAEgCADQgDADgFAAIAAALQAAAEgDADQgCACgGABQAAAFgCADQgDACgFAAQAAAFgDADQgCACgFAAQAAAGgDACQgDADgFAAQAAAFgCADQgDADgFAAQAAAFgDACQgCADgGAAIAAAKQAAAGgCACQgDADgFgBQAAAGgDACQgCADgFAAQAAAFgDADQgDACgFAAQAAAGgCACQgDADgFAAQAAAFgDACQgCADgGAAQAAAGgCACQgDACgFABIAAAJQAAAFgDADQgCADgFgBQAAAFgDADQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCADQgCADgGAAIAAAKIAACxIAAALIBIAAIALAAIAKAAIAAAKIAKAAQAGAAACACQADADAAAFQAFAAADACQACADAAAFIAAAVIAAALIAAAFQhEAFg+AAQhZAAhRgKgEAkYAE/IgKAAIgLAAIgKAAIAAgKIgKAAIgLAAIgKAAIgfAAIAAgLIgLAAQgFAAgEgCQgggNgggQIAAgKIgKAAQgFgBgDgCQgcgdgbgeQgFAAgCgDQgDgDAAgFQAAgFgCgEQgDgHgFgFIAAgLIgLAAQAAgEgCgFQgDgGgFgFIAABzIAAAKIAAAKQAAAGgDACQgCADgGgBQAAAFgCAEQgDACgFAAIgKAAQgGAAgCgCQgDgEAAgFQgFABgDgDQgCgCAAgGIAAgKIAAkOQgFAAgDgDQgDgCAAgFIAAgLIAAgKQgFAAgCgDQgDgCAAgGQgFABgDgDQgCgCAAgGQgGAAgCgCQgDgDAAgFIAAgKIAAgLIgKAAIAAgLIAAgKIAAhzIAKAAIAAgKIALAAIAKAAQAFAAADADQACACAAAFIAAAqIAAAKIAAALIAAALIAAAKIALAAIAAgKIAAgLIAAg0IAAgLIAKAAIAAgKIALAAIAKAAQAFAAADADQACACAAAFQAAArAGApIAFAAIAKAAIAAgKIAAgLIAAg/IAAgKIALAAIAKAAQAFAAADADQACACAAAFIAAA0IAAALIALAAIAAgLIAKAAIAAgKIALAAIAAgKIAKAAIAAgKIALAAQAFgFAGgEQAEgCAFAAIAAgLIALAAIAqgTIAKgBIAAgKIAKAAIALAAIAKAAIAKAAIAAgLIBoAAIALAAIAAALIAKAAQAdgDAOALQAEACAFAAIAAAKIALAAIAKAAIAAAKIAKAAQAGAGAGADQAEACAFAAQAFAAADADQADACAAAGQAUAPATATQACACAAAFQAFAAADADQADACAAAGIAKAAIAAgLIAAgVIAKAAIAAgKIAAgKIAAgLIALAAIAAgLIAKAAIAAgKIALAAIAKAAIAVAAIAKAAQAGAAACADQADACAAAFQAFABADADQACACAAAFIAAALIAAAKIAAAKIAAGqIAAALIAAAKIAAAKQAAAGgCACQgDADgFgBQAAAFgDAEQgCACgGAAIgKAAIAAgLIgKAAQgGABgCgDQgDgCAAgGIAAgKIAAgKIAAinIAAgLIgKAAIAAALIABAJQAFAXgRgBIAAALIAAAKQAAAFgCADQgDACgFAAIAAAKQAAAGgDACQgCADgGAAIAAALQAAAEgCADQgDADgFAAQAAAFgDADQgCADgFAAIAAAJIgLAAIAAALIgKAAIAAAKIgLAAIAAALIgKAAIAAALQgFAAgEACQgHACgFAGQAAAFgCADQgDACgFAAIgLAAIAAAKIgKAAIgKAAIAAALIgLAAIgKAAIAAAKIgLAAIgKAAQAAAGgDACQgCADgFAAIgLAAIgfAAIgKAAIAAAKIgLAAg");
	this.shape_223.setTransform(180.775,91.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_223).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol51, new cjs.Rectangle(-85.3,50.7,532.1999999999999,83.3), null);


(lib.Symbol50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFBBCC").s().p("Egm2AFsIAAt1MBNtAAAIAAN1Qy6CezbAAQzaAAz+ieg");
	this.shape.setTransform(248.65,52.225);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,497.3,104.5);


(lib.Symbol49 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.HKcard();
	this.instance.setTransform(855,120,2.4443,2.4443);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol49, new cjs.Rectangle(855,120,652.0999999999999,1159.2), null);


(lib.Symbol48 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAEB1QgEgEAAgGQgBgJAEgHQAEgIAIgBQAGgBAEAEQAEADABAHQABAIgEAHQgFAIgIABIgCAAQgEAAgEgCgAACA5QgCgDAAgEIgBgHQgDgagEgXQgHgsgMgtIgCgLQgBgFACgDQABgDAEgBQAEgBADADQACACACAFIAKAuQAGAdAGAjIACARQAEAagBAHQgBAHgGABIgBAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape.setTransform(211.0021,1.4819);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Ag3BOQgWgOgEgcQgDgQAGgUQAFgTAMgSQAOgVASgMQARgMASgDQAXgEARAHQARAIACAOQADASgYANQgYAMhTAUIgDAPQgBAHABAGQADAXASALQAQALAZgEQAUgDAQgKQARgJAKgOIAIgLQAFgIAEgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAADgBAFIgGAKQgOAUgTALQgSALgaAEQgJACgJAAQgVAAgPgKgAAIhHQgUAEgRAPQgRAPgLAZQA4gOAZgKQAagLgCgJQgBgJgLgEQgHgDgJAAIgMABg");
	this.shape_1.setTransform(198.7672,7.235);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AhfCIQgDgDgBgGIgBgGIgHg3QgNhOgOhBIgBgIQgBgFACgEQADgDAFgBQAKgCAWAgIALAOQATAZAZAnQAZAnAbAwQAVg4AchxIAJgkQAFgSADgFQADgFAFgBQAFAAADACQADACAAAGIAmDVQABAFgCAEQgCADgEAAQgDABgCgDQgDgDgBgEIghjAQgmCQgNAoQgNAogHAAQgEABgDgEQgFgDgGgMIgDgIQg/hogug7IANBFIAHAqIAGAoIAEAeIACAMQABAGgCADQgBADgFABIgBAAQgDAAgCgCg");
	this.shape_2.setTransform(172.8557,7.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgpB3QgCgDgBgGIgBgFIgFgnIgCgKIgCgLIgCgDIgCgCIABgBIACgDQgMhDgMhAIgDgMQgBgGACgDQACgDADAAQAIgCADASIABABIABAGIASBnIADARQAZgcAVgUQAXgUAGgCQAEAAACABQABABAAAAQABAAAAABQABAAAAABQAAABAAAAQABAGgLAIIgCACQgPAKgPAPQgOAOgQATQAkAUAmAQQAmAPABAEQAAADgBACQgCADgDAAQgHABghgOQgigOgqgYIACAKIACAIIABALIACALIAAADIADAOQABAJgBAEQgBAEgEABIgCAAQgDAAgCgBg");
	this.shape_3.setTransform(140.3646,13.7742);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("Ag3BOQgUgMgEgaQgDgQAEgSQAFgRAJgQQAQgYAVgOQAVgPAYgEQAPgDAKAFQALAFACALQAAAFgCAEQgCADgDABQgGABgDgHIgBgDQgDgFgFgBQgGgCgIABQgPADgOAJQgOAIgLANQgQASgGASQgHASADASQADATAPAJQAOAKAXgEQAQgDAOgIQAPgIARgQIAJgIQAIgJADgBQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAABAAABQAAADgCAEQgCAFgGAGQgRASgUALQgTAMgUADIgQABQgUAAgOgIg");
	this.shape_4.setTransform(123.4657,19.5447);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAIBMQgCgDgCgIIgCgNQgIg4gLg1IgCgJQgBgEACgDQABgDAEgBQAEAAACACQACADACAHIABADQAKA2ALBDQACALgCAEQAAADgFABIgBAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAgBg");
	this.shape_5.setTransform(109.9075,21.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AAOB0QgDgDgCgNIgLg+IgOhXIgIgxQgCgLABgDQABgEAFAAQADgBADACQADADABAEIAAADIAFAlQANBUAPBOIACAMQABAFgBADQgCADgDABIgCAAQgDAAgCgCg");
	this.shape_6.setTransform(102.0379,18.9992);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("Ag+BsQgigZgHgwQgEgaAEgZQAFgaANgWQAPgYAVgQQAWgQAYgEQAOgCAPABQAQACAPAGQAMAEAGAFQAGAEABAEQAAAEgCADQgCADgEAAQgDABgIgFIgFgCQgOgIgPgDQgPgCgPACQgUAEgSANQgRANgNAVQgMAVgEAWQgFAVAEAVQAGApAcAWQAdAVAlgGQAUgDAPgJQAOgKAOgRIAKgQQAGgLAEgBQAEAAADACQACACAAADQABAEgEAIQgDAJgHAJQgQAVgSALQgSALgZAEQgLACgKAAQghAAgYgSg");
	this.shape_7.setTransform(87.2409,21.3112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#666666").ss(3,1,1).p("AEWgSIBCBBIjpDoIhChBQhsgKh8hLQhKg+BYgPIBhAdIkAj/QgqhwB0A3IBkBjIBPBQAAAj0QAthcBvCcIB6CiAhajIIBSBSAhajIQARhIBJAcIBPBPAieiEQgHhJBLAFAAtDWIDpjo");
	this.shape_8.setTransform(34.707,30.1935);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAtDWQhsgKh8hLQhKg+BYgPIBhAdIkAj/QgqhwB0A3IBkBjIBPBQIhPhQQgHhJBLAFIBSBSIhShSQARhIBJAcIBPBPIhPhPQAthcBvCcIB6CiIjpDoIDpjoIBCBBIjpDog");
	this.shape_9.setTransform(34.707,30.1935);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol48, new cjs.Rectangle(-1.2,-24.6,230.2,84.2), null);


(lib.Symbol45 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DFBED4").s().p("EAkmAFqQACgBgCgGQgGgNgNgFIgGgDQg8gOAGAnIAIAIQzsACz0AAIAfgLIgcgZIAwhAQgegRgvAGIgjAAQh9ABhPBdIBKASInvAAIBHgSIi/gRQgHgHgEgJIgDgIQgLgsAlgXIh7hxQgGARgEAWIgEATQgeBkhXA4IBkAZIjVAAIhNgvIgGgrIBEhAIBBAZIAdg5QAFgLADgLQAxilk+luQEPC4AUAlQATAmAeAtQAdAtAkBHQAHANAKANQANgeACAhQAAAJADAIQAsB3B+gsIBbhfQhBDEEgBbQCcgsBdiSQATgdAggRQBGgoBRgIQAPgCAPgEQCVgXBJCAQABAWgHAVIgFAQQgmBqhyAHIDgAJQNNAaNGg+QADABADgGQgegthIAHQiSANiOghIhIgZQg3gVhphUQigjNDMknQgtDhAUAbQAVAbAFAoQAGAnApAUQApAWAdAVIASANQCEBaCPADQg0hZhXhBQgegXgQgkQgrhhAnhmIALgcIAMgeQBBhHAuAsQg7AAgRBhQgQBhBHBcQBHBaA/ArIAXAOQAqAcAcAkQAtAHAuACIAcAAQCSADBqheIANiLIA6AeIgqC/QAKAKANABIAFgCQBegeBEhMIA7AlIgsATQAEAPAJAPIAGAHQBDA+BagZICmCAIACAvImAAEQAKgCAGgGgAb9FgIFKgCIgpgMQhBgXhAAAQhQAAhQAlgEAiEAFSICWhjQg3gyhPAaIgDACQhEBBhngNgA8/FyIh0iKIgfgNIhMCAIg2gXQgHgvgUgoIgQggIgJgOQgrhChMgWQAUAqATArQAhBJgWA0QgmAJgkgNQgUgHgNgUIgEgHIgHgMIgFgMQgPgmgjgGIgEACQgFADgEAEIgFAFIgCADQAAg1gmgoII3k5IBqASQE/BNAPCxIiMCLIBPCNgA91CVQBMBYBaBEQANAKAOgEIgThOIhHg4ICWAOIkphzQAQAoAcAhgA+NhVQgUALAAAQQAAAPAUAMQAUALAcAAQAcAAAUgLQAUgMAAgPQAAgQgUgLQgUgLgcAAQgcAAgUALgEgqVAFyIAAhrIAmgGQAbAKAjAaQAdAXC0A2gAdRAwQiTgjgNihQgIhrBighIBxBIQiDg2gUByQAGCSCMAHIAPgDIA4g+IAlA6QgYBAhJAAQgWAAgbgGg");
	this.shape.setTransform(278.05,208.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6C3DA").s().p("EAqZAPEIgWijIgFCSIgTgLIg2iVIgDBzIgjgVIgKhcIg6AyIhpg+IBhhkIB8gJIALBAQABAEAKhGQArksg2krIgoGtIAAgpIg0gBIgBBTIg1ANQhGAhhfgdQhpgegthhQhog8kiktIF3B+IBmADQArhuhkhdQhOhJhgggQiMgsn6hLQKbgNDpCgIFPiCIAWA4QBIjIg6jYQgEgSgGgQIgkDqIjcBiQj1A5kEg5QDkgrCVhQQCUhPmpiaQETg8BXAwQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAQBzgqA5hxIgDgCQgigJApgBQAvgDAvAEIAnBoQAshVgIhrIAUCUIgCjWIAUgJIAEeagEAl2gAdICaC6IAGgSQALgigIgkQgWhlhlAAQgTAAgVADgEgqqgO7IARGdIAtgoIgRk7QAMgLAJACQBIATBFAjIABA2IAngcIBiAqIhGD0QAZBjhAA9IgHAEQANAdBEAUQArAPAogUQAViJCJAgQAwiKCJBNQBvA9AhB2QA5hshxhYIg2goIgGgLQCnBKCsBVQh6D+iYDpQgsBDg4A7QiuAWhDCXICtgcQCXi+ClhKIBukLIBug5QEXgUCGB9QjIgthXASQjHAvhpCtQArgQBCgdQClhHENgXQioA4gFB+QjziDkXDbQhhDsh/ATQh/ATiDAyIhmDYQBhAOBOg8IBBiGIAnBZInbERIhJgsIgGBhgEgqOAMcQAggRAZgUIADgBQBqhagcieQgFgGgBgFQgZh+h5gPgEgmfADYQAeAGAHAdQANA3ATA1QARAxA0AFQBOhcgFh5QgDhCgugoIgHgBIgIABQgFgsgZgiQhgiCikg1QgBAlAQAiQARAnAqAKQASAEASABQAZAiAHApQAKA4gzAZQgxAagVAtIBEBYIAZg9IATAEgEgitgCZQBVC4AEC8IBohTIAbhSIBMhFIAHhhQgPhlhggcQgjgLgdAAQhbAAglBjgEgqPAAoQABgLAFgDQACgCAHAFIBNABIg2hfIAthJIhggPgEgqcgHJIAOCSIC4hAIgFg2IiFhvgEgiAgKYIB0AqIg9Arg");
	this.shape_1.setTransform(280.075,124.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DFC3DA").s().p("AhSg/ICjBgIACAfg");
	this.shape_2.setTransform(540.525,233.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6C3DA").s().p("EgqgAK5QhLAAAAhKIAAgyIerz2IaBAAIerTxIAAA3QAAARgEAOQgOArg5AAg");
	this.shape_3.setTransform(279.575,179.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ECAFCD").s().p("EgrrAJGQQepzNKpcIBDAgI+rT2gANBppIBIgiQM9JeQmJzIAABBg");
	this.shape_4.setTransform(279.575,171.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCD3E0").s().p("AOJhTIY7r+QDihvBGi9MAAAAj7Qwmp0s9pdgEgrrgR9QBGC9DlBvIY9MAQtKJbweJ0g");
	this.shape_5.setTransform(279.575,115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ECAFCD").s().p("AiaDJQg7gcggg1Qghg1AEhBQAEhBAogvQAkgrBLggQBkgrBRAEQAwADArASQAtATAeAiQAdAhAMAtQALAsgIArQgIAsgZAlQgaAmgmAXQgYAQgiAMQgVAIgqAMQg2AQgiADIgUABQg0AAgwgYg");
	this.shape_6.setTransform(381.7675,126.9773);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ECAFCD").s().p("Al1E3Qg3gaggg3Qghg3AEg8QAEg9AngyQAngxA6gTQAMgEAqgKQAigHATgKQAdgOAggjIAzg+QA0g4BHghQBHghBNgDIArABIAsACIA7AAQAiACAYAGQA1AOAnArQAnAqALA2QAKA2gSA3QgTA1gpAlQgoAlg3AQQg2AQg3gJIgYgEQgOgBgJAEQgNAFgMAPIgSAcQgeAyg9AnQgrAchKAeQhXAjg5AIQgYADgWAAQg4AAgsgVg");
	this.shape_7.setTransform(150.9932,139.7381);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ECAFCD").s().p("AqQIxQgygXgfgrQgegrgFg3QgFg3AWgwQAVgrAsgnQAfgbA4giQBpg/CFg+QBlguCSg7QAqgRAQgIQAggPAWgQQAUgQAYgZIApgsQAngqBFg7QBchOAUgSQBZhTAVgRQBDgyA/gKQA0gIA0ATQA0AUAiApQAiApAJA2QAJA3gTAxQgRAtgpArQgaAbg3ArQiIBuhDBBIhRBQQgwAwgkAcQhbBHi7BKQjTBUhMAwIh0BMQhFAog6AEIgQABQgsAAgrgUg");
	this.shape_8.setTransform(81.5492,182.7383);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ECAFCD").s().p("AFbH7Qg9gFgqgmQgRgOgWgcQgagigKgKQgVgWgygjQhGgygngVQgYgMgqgTIhCgeQiDhBiSiTQgogogXgdQghgngUgmQgyhfAThWQALgxAignQAignAvgSQAvgRAzAHQA0AHAnAeQAaATAZAhIArA8QAhAvAZAZQArArBJAqQA0AdBrA0QBEAkB5BMQAsAaAYARQAkAaAYAaQApAqAVA2QAWA4gDA4QgDA7gfAyQgfA0gyAbQgrAXgyAAIgSgBg");
	this.shape_9.setTransform(498.6444,192.676);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ECAFCD").s().p("AHtIsQgqgOgxgkQg3gtgdgVQg4gpg+gcQgWgKgxgTQgvgSgYgLQg6gchDguQgngchOg9IjhixQgjgcgVgMQgggUgegGIgggEIgggDQgpgFgkgWQgkgWgYgiQgYgigIgqQgJgpAIgoQAShTBVhIQBYhLBUAGQA2AEA8AqQARAMBRBGQAyAqBeBCQBqBJAnAhQAnAeBLA/QBDA0A5AXQAUAJAqANQAqANAUAIQAsASA4AnIBdBFIBiBFQA1AqAXAuQAcA1gJBAQgIA/gpAtQgoAtg+AQQgdAHgcAAQgfAAgfgJg");
	this.shape_10.setTransform(437.5564,159.9417);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ECAFCD").s().p("ABRDzQhMgEg0goIgUgPQgMgJgKgEQgMgEgeABQhdAGg2gUQg7gWglg4Qglg3ACg+QABg/Apg1QAog2A8gTQAdgJAogCQAUgBAzAAQBUAAAeADQA/AHArAYIARAJQAKAFAIABQAIACALgCIAUgEQBAgNA/AfQA/AeAfA7QAfA6gLBEQgLBGgwAtQgsAshYAbQhEAVg4AAIgMAAg");
	this.shape_11.setTransform(402.389,134.0789);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol45, new cjs.Rectangle(0,0,559.2,249.5), null);


(lib.Symbol44 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.westcard();
	this.instance.setTransform(0,0,2.4513,2.4513);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol44, new cjs.Rectangle(0,0,653.9,1162.5), null);


(lib.Symbol41 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgxAgmNMBiBAAAMAAABMbMhiBAAAg");
	this.shape.setTransform(313.65,244.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9EAB7B").s().p("EgxAAmOMAAAhMbMBiAAAAMAAABMbg");
	this.shape_1.setTransform(313.65,244.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,629.3,491.2);


(lib.Symbol40 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE2E3").s().p("Ag3DaIgdgJIghgLIgpgqIAAgrIAXgXIAXAAIAYAZIgYAYIgWAAIAAgJIASAAIAQgPIgQgPIgQAAIgRAQIAAAlIAmAlIA5ATIA5AAIA5gTIATglIAAjYIAKgdIAKggIA8g8IggA/IAADtIgKAUIgKAVIgqApIg8AUgAgTAUIgiAAIgaAaIAAgzIAXgWIAlAAIAAgRIAIgTIALgWIAMgMIAQgQIAACpIgJATIgLAXIgMAMIgPAPgAhMjNIA9AAIAWAHIAkAMIA/gfIg9A8Ig9AAIg6gTIg/Afg");
	this.shape.setTransform(105.8,74.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE2E3").s().p("AiSCzIAKgHIARgLIAUgFIA8gPIA7AAIA9AUIgDAIIAlg5QAHgIANgUIATg6IAAgkIgSgSIgLgFIgbgOIhgAAIggAxIBbAAIAWAXIAAAWIgcA6IAAgkIgkgSIhLAAIgSASIgVAVIgpAUIgaAAIAAgjIAaAZIAkgSIAIgIIAXgXIgyAAIgqgVIgUgpIAAgfIALAMIAQAOIAMAHIAZALIBNAAIAggxIgzAAIgcgJIghgMIgWgUIgVgrIAVgpIAWgWIA9gUIBPAAIAdAGIA7AQIgeAdIgGAGIgJAJIgGAJIgFAJIgYAiIBwAAIApAVIAWAqIAAAqIgVAaIgoA2IgKAPIgRAZIg2BRIg9gVIhiAAIggAJIhHARgAh0i6IgRARIAAAlIARARIA6ATIBLAAIAlg2IgKgKIgEgEIgQgJIgZgNIgMgGIgQgFIgdgIg");
	this.shape_1.setTransform(62.25,75.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("Ag7DoIgfgLIghgLIgtgsIAAguIAYgYIAZAAIAaAaIgaAaIgXAAIAAgKIATAAIARgQIgRgQIgRAAIgSASIAAAmIAoAoIA9AUIA8AAIA8gUIAUgnIAAjmIALgfIALghIBAhBIgiBEIAAD7IgKAVIgMAXIgrArIhBAWgAgVAWIgjAAIgcAbIAAg2IAYgYIAnAAIAAgRIAKgUIALgYIANgNIARgQIAACzIgKAUIgMAYIgMANIgRAQgAhRjaIBCAAIAXAIIAmANIBDgiIhBBBIhAAAIg+gVIhEAhg");
	this.shape_2.setTransform(109.275,76.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("AibC+IALgIIARgLIAWgFIBAgRIA/AAIBAAVIgDAJIAog8IAUgfIAUg9IAAgmIgTgTIgLgGIgdgOIhmAAIgiA1IBhAAIAYAXIAAAYIgfA+IAAgnIgmgTIhQAAIgTAUIgWAVIgsAWIgbAAIAAglIAbAaQARgHAVgMIAKgJIAYgYIg1AAIgtgWIgWgsIAAghIANANIAQAPIAOAHIAaANIBRAAIAjg1Ig2AAIgegKIgjgMIgXgWIgWgtIAVgrIAYgYIBBgVIBUAAIAdAHIBAAQIggAfIgGAHIgKAJIgGAKIgGAJIgZAkIB2AAIAtAWIAWAtIAAAsIgVAcIgrA5IgLARIgRAaIg6BWIhBgWIhnAAIgjAJIhMATgAh7jGIgSATIAAAnIASASIA+AUIBQAAIAmg5IgKgLIgFgEQgEgDgNgHIgagOIgNgFIgRgGIgfgJg");
	this.shape_3.setTransform(63.125,77.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C01831").s().p("AgIAGIgBgBIgCgFQAGgKAQAJIABABIgBACQgHAEgJAAIgDAAg");
	this.shape_4.setTransform(114.425,137.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAA1BB").s().p("AgWAHQAWgcAVAVIACABIAAABQgaABgTAHIAAgDg");
	this.shape_5.setTransform(117.025,138.5458);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B12725").s().p("AgGADIAAgCQAFgBgFgFQAMgFABAKIAAADIgCABQgDADgCAAQgDAAgDgEg");
	this.shape_6.setTransform(111.375,138.5534);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F1A39C").s().p("AgPAHQAPgNANgBIADAAQgMAMgTADg");
	this.shape_7.setTransform(116.6,133.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E3B8B6").s().p("AgLAAIATAAIAEAAIAAAAIgXACIAAgCg");
	this.shape_8.setTransform(94.4,143.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E8B7B8").s().p("AgOAAIAZAAIAEAAIgBAAQgOABgOAAIAAgBg");
	this.shape_9.setTransform(90.05,143.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFB7B8").s().p("AgPgBQAPAAAQABIAAABIgDAAIgKABQgKAAgIgDg");
	this.shape_10.setTransform(83.8,143.7286);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AA4B4A").s().p("AgGAAIACAAIABgCIADABQAKAEgEAAIgMgDg");
	this.shape_11.setTransform(88.6899,134.5363);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A03C3D").s().p("AgLgEQALACAJADIADAAIgBACIgCABIgDAAIgDABQgLAAgDgJg");
	this.shape_12.setTransform(87.125,134.1045);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BA534F").s().p("AgGAAQAJgGADAJIgBAAIgDAAIgDAAQgEAAgBgDg");
	this.shape_13.setTransform(83.45,134.5746);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A13F3A").s().p("AgLAAIAAAAIAAgDQAcAHgGAAIgWgEg");
	this.shape_14.setTransform(83.9875,133.505);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A8453F").s().p("AAGADQgJgBgFgEIAQABIABABIAAADIgDAAg");
	this.shape_15.setTransform(81.925,133.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E9AAA3").s().p("AiAA4IA5gNIABgCQgcACgJgIIACAAQAuACATgMIAAgBIACAAQgKgTgMAQIABAAQgFAGgRgIIgJgFQgFgEAEgBQABgHAcADIAGABQAzgJAjgLIAAgCQANAGAHgMIABgDIAXgBIAAgCQAEgOATAAIADAAQAOgTAPgDIAAACQgeAagjAVQgkATgfAXIgDAAQgsAWhAAPIgDAAIAAABQgGAAgFgJg");
	this.shape_16.setTransform(107.325,127.5013);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FDB6A0").s().p("AgEAAIAAgBIAJADIgJgCg");
	this.shape_17.setTransform(118.1625,119.6337);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC7872").s().p("AgHAAQAPgJAAAHQAAAIgMAAQgEAAABgGg");
	this.shape_18.setTransform(119.5813,114.818);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEDACF").s().p("AgGgBQAaADgZAAg");
	this.shape_19.setTransform(117.1313,115.575);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FDDACD").s().p("AgRAJIACgEIABgCIAAgDQANgDAJgHIADgBQAMgBgIAGIgMAKQgFAIgHAAQgEAAgEgDg");
	this.shape_20.setTransform(120.3311,112.7861);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEDACB").s().p("AgHgGQAWACgKAIQgDADgCAAQgFAAgCgNg");
	this.shape_21.setTransform(108.2743,118.0564);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FABAB1").s().p("AgJAAQAlgKggAOIgEABQgCAAABgFg");
	this.shape_22.setTransform(110.2071,121.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B34F4A").s().p("AgHAAIAAAAQAUABgGAAIgOgBg");
	this.shape_23.setTransform(104.2125,123.6114);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEDDCE").s().p("AglASQAQgSATADIACgBQAAgBAAAAQAAAAAAgBQABAAABAAQAAAAABAAQAFgUAbACIAAACQAHAQgKADIgDAAQgiANggADg");
	this.shape_24.setTransform(103.3941,119.1413);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FEDACD").s().p("AgRgDIgBgCQAQABAQgEQAJgBgHASIghgMg");
	this.shape_25.setTransform(109.3363,117.1195);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFD6C8").s().p("AgFABQAYgGgYAHg");
	this.shape_26.setTransform(119.1375,110.9169);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F1B7AD").s().p("AgSgDQAIAAAHgCIACgBIAAADIAAADQAGAFAIgFIADAAIADAAIgBABQgMAGgHAAQgMAAgFgKg");
	this.shape_27.setTransform(119.525,107.6265);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEDDD4").s().p("AgKAHIAKgMQAJgDACAEQACACgIACIgIAFQgEACgCAAIgBAAg");
	this.shape_28.setTransform(115.545,106.5683);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B4192E").s().p("AgEAAIAAAAIAIABIgIgBg");
	this.shape_29.setTransform(130.8625,132.3231);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F0AA9E").s().p("AgJAAIgBgBIAVADIgUgCg");
	this.shape_30.setTransform(123.6313,130.4207);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BB1B2D").s().p("AgzASIgBgCQASgIANgIQAIgDAVAEQgIgFANgMIABgCQAVgCASAHIgEAAQgIgBACAIIgBABQgrAQgwAIIgCgBg");
	this.shape_31.setTransform(124.6525,134.9515);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C52D3D").s().p("AhQATQAYgRAZgCIAAgBQAKgPAJAJIACABQAUgQAYAAIAHgIQAWACASAFIABACQgWAPgcAHIgDAAQgCgGAIAAIAEAAQgSgGgVACIAAACQgNALAIAGQgWgGgHAFQgNAHgTAIIABADIACAAIAAACIgJACQgKAAACgMgAAsgRQASADgSgEg");
	this.shape_32.setTransform(126.0405,134.1168);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CB3D4C").s().p("AgPAMQAMgZATgBQgFAFgCgDIgBABQADAGgFAHQgHANgHAAQgEAAgDgDg");
	this.shape_33.setTransform(136.325,129.0445);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B75051").s().p("AgFADIAAgDQADgEAFgBIADAAIgBADQgEAFgGADIAAgDg");
	this.shape_34.setTransform(129.825,119.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFD7C8").s().p("AgEAAQAUgCgUADg");
	this.shape_35.setTransform(122.7875,113.6357);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E49D99").s().p("AgfAjIgBgGQAmghAbgfIAAACIAAACQgdAkgiAeIgBAAg");
	this.shape_36.setTransform(123.875,117.05);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FECFC9").s().p("AgJgEQAhAHgYABIgBABQgHAAgBgJg");
	this.shape_37.setTransform(127.0092,99.5513);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E6A09A").s().p("AgFAJIgBgGQAGgGAHgFIAAABIAAACQgEAHgGAFIAAACIgCAAg");
	this.shape_38.setTransform(128.225,112.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F4B4A8").s().p("AgNAHIAAgCQANgMAMABIADAAQgGANgSAAIgEAAg");
	this.shape_39.setTransform(126.35,109.9329);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FEE5D9").s().p("AgXAOQAUgRAXgNIACgBQAGAMgOAGIAAABQgNADgGAHIgBACIgCABQgEADgEAAQgEAAgDgEg");
	this.shape_40.setTransform(121.7546,106.1065);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F0B7AC").s().p("AieBNQAjgJAggOQAKgCAJgDIACgBIAGgHQAVgMAUgOIASABIAUgSIABgBQAbADAggGIADAAQAQgWgXAHIgCABQAUgbALAPIABADQAagDgFAPIgBACQgkACAMAQIAEgBIgBACIgCAEQALAJALgOIAMgKQAHgGgMABIAAgBIAgAEIAAADQgHAegnANIgCAAQgCAPgOAIIgCAAQgbAPgVgGQAJgDAFgFIABgBQgTgGATgDQAHgHgJgFQgTgLgIARQAJAGgEACQgpAUghAZIgCgBQgWgCgNADQgMAAAFgEQAHgEgUgHIgBACIgDABQAHATgYgKIgEAFQgIADgGAAQgRAAgHgagAhaBQIAAACQAggEAjgMIADgBQAKgDgHgRIgBgBQgagCgFAVQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAIgBACIgGgBQgQAAgNAPgAABA4QAKgJgWgCQACATAKgIgAgLAmIAiANQAGgTgJACQgRADgOAAIAAABgABOAdQAaAAgagEgABlATQgBAGAEAAQANAAAAgJQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAgBAAQgDAAgKAFgACHAIIAAABIALgDIgLACgABigSIAAACIANgFIgNADgAAqgnIAPgQQADABAEgDIAJgFQAIgDgCgCQgCgEgIADIAGgIQARgLAPgOIACgBIAVACQABAAABAAQABABAAAAQAAAAAAAAQAAAAgBAAQgeAGgBAdIAAABQgWgNAIAYIgBABQgdAIgYAMIAJgIg");
	this.shape_41.setTransform(108.7,112.8798);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F4BCB3").s().p("AgWAUIgDAAIgDAAIABgCQAHgGANgDIAAgCQANgHgGgLIgBABQgYANgUARIAAgCIAAgEIAAgCQARgYAZgNIACgGIABgDQAdAFAKARIACABQALAGgKAFIgBAAQgXAXgUALIgCABQAOgjggAUg");
	this.shape_42.setTransform(123.9939,105.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E5A79E").s().p("AgBAIQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBgBAAAAQAFgTAEAJQAFAOgIAAIgCgBg");
	this.shape_43.setTransform(132.1475,104.4304);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C73C48").s().p("AgFADQAWgSgUAVg");
	this.shape_44.setTransform(151.0319,107.2598);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C6374F").s().p("AgGgDQAXAEgRACIgBABQgFAAAAgHg");
	this.shape_45.setTransform(153.1357,101.8016);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F0A89E").s().p("AgCAAIgBgBIAHADIgGgCg");
	this.shape_46.setTransform(11.4189,103.1083);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B34F4D").s().p("AgHgBIgBgCIARAHIgQgFg");
	this.shape_47.setTransform(38.9063,113.7447);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A72420").s().p("AAAAEIgDgFQAJgMgEATIAAAAIgCgCg");
	this.shape_48.setTransform(23.9071,122.2089);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#872F31").s().p("AAGADIAAgDQgGgJgCANIAAgBQgPgSgNgTIgBgDQAeABAPAbQAPAYADAUQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBABQgdgKAGgZg");
	this.shape_49.setTransform(27.6,109.875);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#8B2D32").s().p("AgFgIIgCgBQgIgHgCgNQATAGgCAMQgDALARgFQAFgBgBAGIgBACIgCABQgIAMAHAPQgSgLgBgbg");
	this.shape_50.setTransform(22.6923,101.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E4ABA3").s().p("AgGgCQAYACgTADQgFgBAAgEg");
	this.shape_51.setTransform(27.6821,100.85);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C5615F").s().p("AAAgCIgBgCQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAJgIgCAYIgBADQgCAAgBgNg");
	this.shape_52.setTransform(34.3924,103.8143);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FAADA1").s().p("AAAAKIgDAAIAAgDIAAgDIAAgOQALAVgHAAIgBgBg");
	this.shape_53.setTransform(35.8219,103.0776);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B35248").s().p("AgJgBIAAgBIATAFIgTgEg");
	this.shape_54.setTransform(61.7438,129.92);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B34D48").s().p("AgLgBIgBgBIAZAFIgYgEg");
	this.shape_55.setTransform(72.1313,129.62);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#AB1423").s().p("AgIAAIgBgBIATADIgSgCg");
	this.shape_56.setTransform(81.1188,142.0331);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B41F21").s().p("AgIAAIAAgCQAUgCgEAGIgCABIgDAAIgCAAQgFAAgEgDg");
	this.shape_57.setTransform(71.1577,140.9309);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C41B23").s().p("AgFAAQAYgCgYADg");
	this.shape_58.setTransform(63.6875,139.2269);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C85B58").s().p("AADACQgHgBgHgDQAdAFgIAAIgHgBg");
	this.shape_59.setTransform(70.0358,134.8222);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B14D45").s().p("AgEAFIgCAAQgLgEgJgFIAAgCQASAHAgABIAEAAQgMAFgKAAIgKgCg");
	this.shape_60.setTransform(67.25,130.5696);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#C65954").s().p("AgWgFIAAgBIAtAMIAAABQgagCgTgKg");
	this.shape_61.setTransform(66.525,133.825);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B85350").s().p("AgIAAQAOgLADALIgCABQgEAFgDAAQgEAAgEgGg");
	this.shape_62.setTransform(77.825,134.8007);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#C45D5A").s().p("AgXAAIgBgBQAYgFAYAIIABACIgHAAQgSAAgXgEg");
	this.shape_63.setTransform(80.875,135.6327);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B6544D").s().p("AgGABIAAgCIAAgFQAHADAFAFIABACIgCABQgDACgCAAQgEAAgCgGg");
	this.shape_64.setTransform(74.525,133.828);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B65250").s().p("AgFACIAAgCIAFgDIADAAIABAAQAFAHgGAAQgDAAgFgCg");
	this.shape_65.setTransform(76.1149,134.3642);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#AB4940").s().p("AAJAFQgLgEgIgGQAUAEABAHg");
	this.shape_66.setTransform(73.2,132.225);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#A43D3D").s().p("AhpgZIgBgCQBeAgB1AWIACABQhzgEhhgxg");
	this.shape_67.setTransform(83.0125,127.425);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#B25046").s().p("AgHAAIAAgBIAPADIgPgCg");
	this.shape_68.setTransform(76.0875,127.7337);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#B41C20").s().p("AAMAGIgCAAQgNgEgNgEIAAgDQAhABAAAKIgBAAIgEAAg");
	this.shape_69.setTransform(54.8254,137.4375);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#AE1F22").s().p("ABoA5QgHgDgKgCIgDAAQhQghhBggIgBgCIgqghIgBgDIgCgDQAPgHARAGIACABIBBA4IADABQALgBAGAMIACABQACgHAYANQAgATAkATg");
	this.shape_70.setTransform(35.8,128.7185);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#C75F5A").s().p("AgVgDQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAZACASAIIACABIgFAAQgPAAgYgJg");
	this.shape_71.setTransform(60.975,133.6958);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#B41D1E").s().p("AANAJIgDAAIgZgJIgBAAQgHgDgBgHQAQAAAOAIIAMAGQAKAHgFAAIgKgCg");
	this.shape_72.setTransform(50.1169,135.6824);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CB6C5E").s().p("AgLgEIAAgDIAEAAIACAAQAKACAHALIAAACQgKgBgNgLg");
	this.shape_73.setTransform(56.35,130.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E08077").s().p("AgGgBIADAAIADAAIAHABIAAABIAAABIgFAAQgGAAgCgDg");
	this.shape_74.setTransform(53.575,128.6985);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C76560").s().p("AAqAVQgfgLgagQIgDAAQgSAAgLgPQAZAIASABIAEAAIABAAIAAACIgBABQAKAJARAGIABABIgDAAIgEAAQAEAHALgCIAAgCQAFAFAGACIABACIgDAAIAAADIgDgBg");
	this.shape_75.setTransform(50.7,127.725);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#A8493E").s().p("AgdgJIAAgCQAgAIAaAOIABABQgdgEgegRg");
	this.shape_76.setTransform(59.05,127.575);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#D87B75").s().p("AABABIgGgBQAFgCACACQAGACgCAAIgFgBg");
	this.shape_77.setTransform(47.0756,118.9188);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#AB4D45").s().p("AgOgEIgBgCQASADALAKIACAAIgBAAQgPAAgOgLg");
	this.shape_78.setTransform(42.55,121.0259);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#B24D4C").s().p("AgHgDIgBgBIARAJIgQgIg");
	this.shape_79.setTransform(41.8063,115.307);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#AE4944").s().p("ACIBHIgBgBQAbAAAOAOIADAAIgCAAQgPAAgagNgAgeAHQhXgfg9g7QAkAdAwAQQgLgOAdACIAAgBQAQATAbAIIABACQgEAAANAEQAQAEAOAOIAJgCIADAAQAKAJAQgBIADAAQAhAPAgARIgBAAQABAQASALQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQhJgZhZgjgAhbglIAHACQALADgKgFIgDgBIgFABg");
	this.shape_80.setTransform(55.625,122.6283);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#AB423F").s().p("AgXgEQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAZADAVAHIADAAIgKABQgTAAgTgKg");
	this.shape_81.setTransform(40.225,104.6531);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#B1494A").s().p("Ag8gTIAAgCQAbACARAEIACAAQAOAFAOAKIABACQAXABAXARIAAACQg+gLg7geg");
	this.shape_82.setTransform(78.7,125.375);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#AF544C").s().p("AgGgEIADAAIADAAIAAACQAHAHgBAAIgMgJg");
	this.shape_83.setTransform(64.8575,120.2389);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F3A299").s().p("AgHAAQAggDggAEg");
	this.shape_84.setTransform(41.7875,50.0529);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F2ADA2").s().p("AgBAFQgFgBACgIQATAJgPAAIgBAAg");
	this.shape_85.setTransform(36.2992,92.6262);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EBABA0").s().p("AgFAQIAAACQgBAOgNgcQgHgPgFgUQAWgDAHAWIABAHQABAFADgHQARAHgIAHQgEAFAKgBQAFAAABgDIAIAOIAAAHIAAADQgVgNgQgDg");
	this.shape_86.setTransform(38.925,97.626);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FDAFA9").s().p("AgEgDIgBgCIAKALIgJgJg");
	this.shape_87.setTransform(35.1003,98.258);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EEA8A0").s().p("AgDADIgFgIQAgAAgaALg");
	this.shape_88.setTransform(33.1451,88.074);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F1ACA3").s().p("AgHAGQAIgbAHAPQABADgCAEQgGALgDAAQgDAAgCgGg");
	this.shape_89.setTransform(34.8417,89.244);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#883234").s().p("AgJACQAUAHgGgTQgDgIAIAJIAAADIAAADQgDASgGAAQgEAAgGgNg");
	this.shape_90.setTransform(21.075,96.6188);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#952827").s().p("AgFgEIAIAAIADAAIAAADIAAACIgCABQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgCAAgDgJg");
	this.shape_91.setTransform(27.6,90.5672);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F4AFA4").s().p("AgIgCQAHgJAEgCIAGAcQgLgFgGgMg");
	this.shape_92.setTransform(36.325,86.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#873131").s().p("AgBAJIgBgEIgCgOQAQATgMAAIgBgBg");
	this.shape_93.setTransform(19.6909,93.1051);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#8D2D32").s().p("AAGAQQgHgNgFgPIgBgDQAPANAAASg");
	this.shape_94.setTransform(18.8,90.25);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#B73638").s().p("ABzDqIACAAQAEgHgUACIAAADIgDgBQhLgKhAgTIAFAAQAAgLgiAAIAAADIgDAAQgLAAgDgGQAUAHgPgMIgMgHQgPgIgQAAQABAHAHADIABABIgDAAQgWgGgQgLQAKABAIAEIAEABQgkgSghgTQgXgOgCAHIgCgBQgGgMgNABIgCAAIhBg6IgCAAQgRgHgPAHIACAEIABACQgHACgCgBQiYhug5jLQAUAHAAAbIAAADIAdAyQARAdAGAaQAWALAKAYIAAADIBMBJIADABQgHgSgJgQIABAAQALgFAGARQAIATANgIQABASAQAEIADABQAfAlAeAYIAAAGQALgJASAPIAAACQAdAMAgAYIAAACQAKAAAIACIADABIATAPIABACQAbABAWASIAAACIBlAcQA0AOA6AEQAeAJAoAFIADABQAMgFAfAGIAAACQAggKAYACIAAgBQAVAMAcgDQAfgEAzgKIBLgQQAkgVApADIgDADIgKANIgBgCQgRgJgGALIACAFIABAAIAAACQgJAAgFAEIAAgDQgBgLgOAFQAFAFgEACIgBACQhMAghzAIQgXACgWAAQhNAAhMgTgADIDyQAmAHgngJIABACgAAcDWIAAACIAMgDIgMABgAluArIAEAFQAAABABABQAAAAAAAAQABABAAAAQAAAAAAgBQADgMgDAAQgCAAgEAFg");
	this.shape_95.setTransform(60.225,117.754);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#B2514B").s().p("AABAMQAAgOgGgOQATAQgNASIAAgGg");
	this.shape_96.setTransform(3.2654,90.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#B64F4C").s().p("AgBgcIABgDQgIABACgSIAAgDQAPAMgFAgQgBAFAAAIQABAZAEAVQgTgtAKgjg");
	this.shape_97.setTransform(1.5875,80.525);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#97202B").s().p("AgCgEQAAgKgGgEQANgSAEArIAAARQgLgIAAgUg");
	this.shape_98.setTransform(17.4375,85.374);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#94252E").s().p("AAAAGQgDgCAAgFIAAgGQAJAPgDAAIgDgCg");
	this.shape_99.setTransform(17.5096,75.7737);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#B9504A").s().p("AgDABQAMgVgJAXQgBAGgBAAQgBAAAAgIg");
	this.shape_100.setTransform(2.1106,68.4508);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#BB4E46").s().p("AgPAYIAAgCQACgNANgLQAJgJgFgOQAAgBAGAAQARAZgbAMIgBACQgEAOgFAAQgCAAgDgDg");
	this.shape_101.setTransform(3.9829,63.5254);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#F7B2A7").s().p("AgFAAIALgEIgBAJQgHgCgDgDg");
	this.shape_102.setTransform(36.375,67.825);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#AC413C").s().p("AgoB1QgKgZAAgVQAihHAlhCQADgFACgHQAGgXAPgPIAEgBQgDATgCAUQgTA2geAqQgOATgKAIIgCAAQAHATgLAWIAAADIAAADIgDAAIgJAAQAFAOAFgIIACAAQAFABgCAHIAAADIgCAAQgCgFgFAFIAAAGIAAADIgBgBg");
	this.shape_103.setTransform(31.575,80.925);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#F7AEA1").s().p("AgJABQAQgWACASQABADgEADQgFAIgDAAQgEAAgDgKg");
	this.shape_104.setTransform(36.9531,59.1563);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F5A79C").s().p("AgIAEQAbgYgRAXQgCAGgDAAQgDAAgCgFg");
	this.shape_105.setTransform(34.8711,58.9126);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F7A69E").s().p("AgHAAQAXgQgNAUQgCADgCAAQgDAAgDgHg");
	this.shape_106.setTransform(33.6284,56.978);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F3AAA0").s().p("AgZAVIAAgBQAOgdAXAEIgBgDQAAgIgIACQAPgVADAeQAAAFAFAAQgPAYgVAAQgHAAgIgDg");
	this.shape_107.setTransform(38.05,51.8208);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#B24A4B").s().p("AgGAGQAJgUADAGQAEAIgGAFQgFAFgDAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAgBg");
	this.shape_108.setTransform(34.13,36.6062);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FBA89B").s().p("AgIACQATgTgCAQQgBAEgHAEIgDACQgEAAgCgHg");
	this.shape_109.setTransform(38.6591,40.5168);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FCA49C").s().p("AgVASQASgUAXgQIACgBQgLAXggAQg");
	this.shape_110.setTransform(35.275,40.675);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FECAC3").s().p("AgDACIAAgDQANADgJAAIgEAAg");
	this.shape_111.setTransform(24.8188,44.1583);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#B54A4D").s().p("AgNAAQALgCADgLIACgBQAKAAABAGIABADQgHAFgDAHQgFAIgEAAQgGAAgDgPg");
	this.shape_112.setTransform(36.6,34.0987);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#A53D3E").s().p("Ag4FQQgQgPgHADIAAgDQgBgKgKgFIgBgCIhChVIgBgCIgUgvIAAgCIgUgbIAAgDQgDgKADgFIgBAAQgEgMgJgFIAAgDQABgIAEgMQgOAKgBgTQAAgeABgIQgGAAAAgDIAAgDQARAEgLgMIgCAAQgGgtgEg4QAIgqgFgZIAAgDQAKgFAGggIACAAQgDgMAAgUIAAgDQAOgjADgaIAAgDQA0g8AmhKIAAgDQAjgkAYgjIACgBQAQAHgTANIgDAAQgDAPgGAAIABAAQgNAIAEAMIAAADQgHABgNALIAAACQgQAbgSAlIgBAAQgCAfgYAfIAAACQADAfgRAZIgBACIAAAmIAAADQgLgCgCAWQgBAQABAWQAAALgHgIQgBALAMANIAAACQgLBrAiBaIABACQgJgJADAIQAHAUgWgHQAPAdAFgjIABgDIATAyIABADQgSAHACgMQADgMgTgHQACANAHAHIADABQAAAcATALQgHgPAJgMIACgBQAeA2AtAoIAAACQAOAUgKAFIgBABIgDAAIgOAAQAOAYAPAOQAFAFgEADQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAABQAYACAMAaQABABgBAAQAAAAAAAAQgBAAgBgBQgBgBgBgBQAHAKARAOIABACQAZAKASALIAAACQgKAKAWgBIADAAQAtAjA5AVQAYAIAFAJQAKgHANALQADACAAAFQi1gyhthtgAhaDqIgBADQgFAZAdAKQAAgBABAAQABAAAAgBQAAAAABAAQAAgBAAAAQgEgUgPgZQgPgbgegBIAAADQAOATAPATIAAABQABgIADAAQACAAADAEgAiyBHIABAFQAPABgSgUIACAOgAjAAZQAGAQAIANIACAAQgBgTgPgNIAAADgAjPgdQAGAEAAAKQAAAUAMAIIAAgQQgDgfgIAAQgDAAgEAFgAjJhsQAAAGADACQAKAHgNgVIAAAGg");
	this.shape_113.setTransform(37.3286,86.475);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FECCC5").s().p("AgTATIgBgJIAoghIAAACQAFAPgUAGQgEACACAIQgJAHgNAHIAAAAQgBAAABgFg");
	this.shape_114.setTransform(31.9922,33.0771);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#CC3E40").s().p("AhmCXQgDAAAAgGQAGgFADgKIAAgCIARgbIAAgCQAQgGAEgSIAAgDQAVgOAPgUIACAAQA0hnBJhVIACAAQgNApgcAZIgCABQgEAfgTAQIgBACQgIAcgSARIgDAAQAFAKgHAGIgBACQgHALgKAIIgCABQgEAVgQAMIAAACQgEAUgRALIgDABQgKAYgTADIAAACQgHgRgEAWQAAAAAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAIgDAAg");
	this.shape_115.setTransform(15.85,44.8393);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#D2403F").s().p("AgtA+IAAgCQAXgjARggQAJgRAOABQgEgNAIgLIABgCQAQgIAGgGIACAAQgBATgTAWIgBACQgHgIgDAUIACAAQgNAFAAARIABADQgQAOgNARIgCABQADAPgNAAIgKgCg");
	this.shape_116.setTransform(30.8,23.0547);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#CA4643").s().p("AgJAAQAbgPgLAJQgEAEAAAFQAAAHgDAAQgCAAgHgKg");
	this.shape_117.setTransform(36.1451,15.184);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F6A99D").s().p("AgagCIgBgCQAfgGAXAPIAAACQgbgDgagGg");
	this.shape_118.setTransform(69.55,29.3311);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#F6A89D").s().p("AgIgBIAAgCIARAHIgRgFg");
	this.shape_119.setTransform(81.3938,29.2447);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F2A098").s().p("AgJABQAngFgnAGg");
	this.shape_120.setTransform(50.6375,30.7917);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FAA49D").s().p("AgTAIIAAgCQAQgJAVgEIACAAQgSAPgTAAIgCAAg");
	this.shape_121.setTransform(47.925,33.7028);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FCA098").s().p("AgIAEQAOgNADAGIgDADQgGAGgEAAIgEgCg");
	this.shape_122.setTransform(41.875,35.3504);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#F6A29A").s().p("AgHABQAfgIgfAKg");
	this.shape_123.setTransform(51.65,32.1673);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F8ADA2").s().p("AhFAOQA/giBMAHIAAACQhKAKhBAQg");
	this.shape_124.setTransform(59.55,28.341);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#F6B1A7").s().p("AhlAFIgBgCQAwAGAcgVIACgBQAMAIAMgKIABgBQAfABAZAFQAVAEgKgEQgOgMAkAMQAGACAHAEQgOAEghAAIgxgBQgLANgagIIgCgBQgSAOgSAAQgRAAgQgMg");
	this.shape_125.setTransform(67.825,32.2884);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#F7B1A5").s().p("AguAFIgBgCQAKgFANgEIAAgBIBIAHIAAAAQgdAIgbAAQgUAAgSgDg");
	this.shape_126.setTransform(57.65,30.842);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FED1C6").s().p("Ag3ApQAMgUAWgKIABgCQgBgRANgQIACAAQAegHAYgPIAAgCQAPAAgMAGIgDAAQgrA1g5AlIgBABQgCAAAAgIg");
	this.shape_127.setTransform(40.1793,25.2613);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FED0C4").s().p("AgwAfQgIgCACgKQAdAAAJgcIAAgDQAkgUAhADIADAAQgeASgdASQgZARgUAHg");
	this.shape_128.setTransform(48.1952,17.6309);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#C34543").s().p("Ah7A/IAAgCQAKgVAQABIADAAQAKgjAZgGIADAAQAHgQAHABIAAACQADgLAIgFIABgCQBEgkBAADIAAABQgOAHAdAGQARADgXACQgJABAFAIQACAEgHgCQgdAKgRgGIgDgBQgNAbgWgGIgDAAQgIgHAAAMQgBAEgFgBQgGAJgTAGQgRAFgHALQgJAGgRAFIgDABQgRAYgSAAQgFAAgGgCg");
	this.shape_129.setTransform(48.7158,7.3168);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FED1C8").s().p("AgpAEQAhgUAvgCIABACIACABQAEALgdAJIggAMQgHACgGAAQgNAAAAgPg");
	this.shape_130.setTransform(59.1246,12.4806);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#C24A46").s().p("AgMAAQAQgMAJAPIgCABQgCACgEAAQgGAAgLgGg");
	this.shape_131.setTransform(60.275,0.9927);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#C44747").s().p("AhRAPQgBgKgFgNQANAIANgNIgCAEQgBADADAFIADgBQAPACgFgKQAFAEAKgJQAAAAAAgBQABAAABAAQAAAAABAAQAAgBABAAIADAAIAAACIBWgCIAAACQAIABAEAGIACAAQATgJgHAMQgCAJgHAAQgSACgQgGQgKAAAGgDIAEgCQgVgCAMAKQAYAFghgBQgZgBgDAJQgGgBgCgDIgBABQgSAHgQgKIgDAAQgRAEgPAEIAAgCg");
	this.shape_132.setTransform(70.3845,2.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFE2E3").s().p("AHoDTIAAgBQAAgGgZANQgIAFgIgHQAWgMAWgKIADgBQAVgdAZgNIAAgBQgEgTALAJIACABQAIgRASgGIADgBQANgUARgRIACAAQAAgLADgHIAAgCQAJgDAEgIIACgCQAUgwAeg2QAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAABAAQgCgPALgQIACgBQAHghAPgtQAFgQgGgHIARgCQACALANACQAHAHgOACIABADQAIAQgHAIIgBACQAHAVgJAfQgvCVhjBhQg3A1hGAQQAGgIARgHgAqmg2QghgYgMgwIgEgLQgKgqgIgvQAJAaASAUIACABQAAAWAHAVIgBAAQAPALAMAbIACAAQAGAcgDARg");
	this.shape_133.setTransform(78.9667,107.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#F1AEA6").s().p("AgCgEIAAgDIAFAPIgFgMg");
	this.shape_134.setTransform(136.2064,94.9519);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#EFA9A5").s().p("AgCAHQgEgBgDgGIABgHQAdAPgQAAIgHgBg");
	this.shape_135.setTransform(130.4632,94.9035);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#EBACA7").s().p("AgFAOQACgJgRABQgPACgGAFQgSAPgMgIIAAgDIADgCIACgBIADAAQAOgGAJgKIACAAQAHAIAJgOIAAgCQAkAEgbgRIAAgBQAVgEAVAFIADAAQAWgOABALIgCABQgeANAdgCQAHgDAAAEQAEgLABAEIABACQAOAKgPAIIgBgBQgWgLAOAXIgCgDQgBgCAAgBQgBgBAAAAQAAAAAAAAQAAABAAABQAFAMgPAIQAFgMgLABQgbABABAKIAAAFIgEABQgGAAgEgSgAgIAAQAYgBgggHQAAAIAIAAg");
	this.shape_136.setTransform(127.7564,100.0296);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#CD5E5F").s().p("AgEAAQARAAgRABg");
	this.shape_137.setTransform(125.65,95.67);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FCC2BA").s().p("AgXAWIAIAAQATgUgTAHIAAgBQAUgeAdgYIACgBIAAADQgXAsgiAfIAAADIgCAAIgMAOIAMgag");
	this.shape_138.setTransform(124.725,93.125);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#9D262A").s().p("AixCfQgfgRgbgUQgbgVghgNQhGgbhMgSIgBgCQgWgZAAgtIgDAAQgogZgKg4IAAgDIAAgGQAFgFACAFIACAAQAVAnAZASQAGAEADAGQAMAUABAgIACAAIAAACQAXAXAuACQAQAAAIAKQAUACAUAJQAUAJBMA3QA4ApARAGIgJAAIgDAAIgDAAIgDAAIgNABIgKgBgAnFgIQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIABACQAEAUABgKQABgSgFAAIgEACgAGcgxQASgDADgRIACAAQAEAKgDgJIAEgDQATgJANgbQAQghAcgTIACAAQgfBVhGAwIAAADIgCABIgDACIAAADIgCAAQgBAFgGgCIAAADIgCAAQgPANgSAMQAZgeATghgAHKhRIAAABQAPgBgJAAIgGAAg");
	this.shape_139.setTransform(79.375,103.825);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#E49A94").s().p("AgkA1QASgqAKgsQANgIANAFIACgDQAAgTAPAJQACABAAAEQAAAHgFABIgDABIgJACQABAIACAHIAAACIgCABQgcAXgVAfIAAABQATgHgTAUIgIAAg");
	this.shape_140.setTransform(126.075,90.0436);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FDBEB5").s().p("AgCAIQgCgHgBgIIAIgBIADgBIgBACQgBALgGAGIAAgCg");
	this.shape_141.setTransform(128.675,87.35);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#F1B1A7").s().p("AAcAvQgEgJgTgDIgCAEQgCAGgBgHQgCgPgDACQgNALgLgYQAQgFgDgSQgBgFADAHIAOAbQAGgGgBgJIAAgCQgQgVgCgTIABAAQAEgSAJAbQAHAUADgPQASATgCAVIgCAAQgGgVgLgDIAAACQAJAdANAZg");
	this.shape_142.setTransform(134.275,89.169);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#ECAEA3").s().p("AASAmQgNgpgZgcIgBgDQAKgNANAXQAIANAFAQIAEAOQAAABAAAAQAAABAAAAQgBAAAAAAQAAgBgBgBIgBACQALANgJAFg");
	this.shape_143.setTransform(135.5226,84.2503);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#EFA89F").s().p("AgFgGIgBgCIANARIgMgPg");
	this.shape_144.setTransform(132.2252,70.7382);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#F4B0A9").s().p("AgEAEQgCgDACgHQAVAJgSAEg");
	this.shape_145.setTransform(135.2902,61.775);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#F0ABA4").s().p("AAoA2QgXgugngkQgOgNgLgPQAhgLAGAUIACAAQgKAPATAVQAbAbASAmIAAADIgBAAQgBABAAAAQAAABgBABQAAAAAAAAQgBABAAAAQgCAAgCgHg");
	this.shape_146.setTransform(134.9,71.6695);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#EB9D96").s().p("AAFALIgCAAQgDgKgGgGIAAgDIAAgCQAKAHADAOg");
	this.shape_147.setTransform(129.9,72.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#EEAEA8").s().p("AApA3QgMgNgFABQgCABgDgIIgCgKQgMAJgFgMIgCAAQgTgpgYgiIgBgDQAcAZAJAcIABACQARAIABgCQACgEAAgHQgHgJAUAOQAUAQABAVQgPgNANAcQAAABABAAQAAABAAABQAAAAAAABQgBAAAAAAIgDgBg");
	this.shape_148.setTransform(133.9,74.4863);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#F8A6A0").s().p("AgDAAQADgDACgHQABgDAAAAQABgBAAAAQAAABgBABQAAACgBADQgEALAEAKIgCABIgDgPg");
	this.shape_149.setTransform(125.5317,67.5488);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#AF4441").s().p("AAtDOQAHgRgCgQQgGgpALgFIgBgCQgNgFACgWIgCgBQgRgbgTgkIgBAAQAZgSgGgWIgBAFQAEgfAAg0IgBgDQgIgKADgNQgEAJgBgEQgUhKhAgeQAfgEAcAdQBBBGgaB2IgGAeQAEAKAIAHIACAAQAHAHADAKIACABQAQAdAEAoQAGAygXAUIgGADQgBAAAAgBQAAAAAAAAQgBgBABgBQAAgBAAgBg");
	this.shape_150.setTransform(125.5281,66.6675);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#F0A299").s().p("AgEgEIgBgCIALANIgKgLg");
	this.shape_151.setTransform(131.8688,53.901);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#BF6260").s().p("AAAAEQgCgEAAgGQAHANgCAAIgDgDg");
	this.shape_152.setTransform(137.1391,55.6518);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#B65558").s().p("AgBgDIgBgDIAFANIgEgKg");
	this.shape_153.setTransform(138.5064,61.1579);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#B05155").s().p("AAAAIQgDgHAAgJIADAAQAHAIgFAGIAAADIgCgBg");
	this.shape_154.setTransform(135.156,53.525);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#B45452").s().p("AAAAFQgDgEgBgHIAFAAIADAAIAAACQACAJgFACIgBgCg");
	this.shape_155.setTransform(142.7786,68.775);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FDCDC1").s().p("AgCgBIAAgCIAFAHIgFgFg");
	this.shape_156.setTransform(142.0814,56.8339);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#C06461").s().p("AgFADIALgNIACgBIADABIAAADIgBAAQgEAQgQADIAFgJg");
	this.shape_157.setTransform(121.725,97.65);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#F8A8A0").s().p("AgCgCIAAgCQgTgGgEgVIAAgDQAgAbASAoIABACQgXgLgFgag");
	this.shape_158.setTransform(124.025,53.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#F9B2A6").s().p("AgbgJIAAgBIgBgCQAnABARAWIABACQgbgGgdgQg");
	this.shape_159.setTransform(118.2,49);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#F8A099").s().p("AgFAAIAAAAQAOABgEAAIgKgBg");
	this.shape_160.setTransform(117.0563,46.6614);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#F9A39B").s().p("AgGgCQAXADgQACIgBAAQgEAAgCgFg");
	this.shape_161.setTransform(116.341,38.9817);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#F9A199").s().p("AgGgCIgBgCIAPAJIgOgHg");
	this.shape_162.setTransform(109.4127,34.214);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#B94D50").s().p("AgIABQAJgTAHATIABADIgDABQgEAEgCAAQgFAAgDgIg");
	this.shape_163.setTransform(114.725,26.6753);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#F8B3A6").s().p("AA1AVQg4gMg3gbIgBgCQAKgCAUACIADAAQAoAWAtATIABABIgHgBg");
	this.shape_164.setTransform(79.15,30.025);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#F5A69C").s().p("AAPAHIgBgCQgPgEgPgFIAAgCQAYgGAKAUg");
	this.shape_165.setTransform(86.25,30.6571);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#F4ABA4").s().p("AgYgFIgsgkIgBgCQAXgBATAPIACABQACAIAGAEIABACQAXANATAGIADABQAOAWAYAMIADAAIgFAEQgqgfgvgSg");
	this.shape_166.setTransform(100.475,35.8184);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#F3ADA2").s().p("ABJgTIgBgCQgrgGgdAGIgCAAQAEAIATgFIACAAQAMARAZAEIABABQhGgXhSARQhAANg3AcQgJAFgHgFQBQg5B3gGIgBgDQAUgGgagCIgDAAQgYANglgCQgFAAAIgDQAPAAAEgLIACAAQC2gQB2BeIAAACQhIgchRghg");
	this.shape_167.setTransform(70,26.3908);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#F9A19A").s().p("AgUgKIgBgCQAUAIAWAPIABACQgYgIgSgPg");
	this.shape_168.setTransform(102.075,26.65);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#F9A39C").s().p("AgbgQIAAgCQAnAMAQAYIAAABQgbgMgcgXg");
	this.shape_169.setTransform(103.625,30.125);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#F3A79C").s().p("AgdgNIgBgCQAOAEAQACIABAAQAAAHAPACIADAAQAEAIAHAGIAAACQgegNgdgQg");
	this.shape_170.setTransform(95.7,23.15);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#EFA9A2").s().p("AgHAAIgMgGQAdADAKAFIAAACQgBADgEAAQgHAAgPgHg");
	this.shape_171.setTransform(89.175,20.2574);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#F4A69D").s().p("ABHAhQg5glhHgVQgYgHgXgKQAbAGAGgFIACgBQAQAKAcANIACAAQAegCAIATIADAAQAOgFAQARIABACQAOgEAJANIABADQASADANAMIAAACQgDACgFAAQgLAAgOgKg");
	this.shape_172.setTransform(89.75,23.2526);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FECFC1").s().p("AgVgEIgBgCQAXgBADABQAMADAHAKIgJABQgSAAgRgMg");
	this.shape_173.setTransform(89.725,10.9981);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FECEC2").s().p("AAeAGIgCAAQgFACgNgCIgDAAQgngSgmgJIAAgBQAXgDAaAIIADAAQASAPAZACQAiACAMAVIgIABQgRAAgQgSg");
	this.shape_174.setTransform(100.625,14.3479);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#B45255").s().p("AgEADQALgRgDAOIAAADIgCAAQgBABAAABQgBAAAAABQAAAAAAAAQAAABgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBgBgBg");
	this.shape_175.setTransform(133.23,49.153);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#F2A79F").s().p("AAAAHIgTgaQAXAOAQAVIAAACQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgHAAgJgNg");
	this.shape_176.setTransform(126.925,47.9266);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#F5A9A4").s().p("AgFgDQASgHgLAMQgDAEgCAAQgDAAABgJg");
	this.shape_177.setTransform(126.3234,44.5814);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#F6A59C").s().p("AgEAEQgDgDADgHQAPAGgHAFQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgCAAgCgDg");
	this.shape_178.setTransform(123.9547,44.8691);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#F8A49C").s().p("AAJAJQgLgJgLgIIgBgDQAOACAOAPIgCAEIgCACQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_179.setTransform(120.8036,42.4639);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FED7C9").s().p("AgFAJQgIgNgNgKQgNgLgDgUQAOgMARAYQAUAfAaAXQANALgIARIgCABQgYgLgTgeg");
	this.shape_180.setTransform(130.9406,36.3139);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#A33839").s().p("Ag+JyQhzgGhYgaQAAgFgDgCQgNgKgKAGQgFgJgYgIQg5gUgtgkIgDAAQgWABAKgJIAAgCQgSgMgZgKIgBgCQgRgOgIgKQABABACABQABABAAAAQABABAAgBQAAAAgBgBQgMgagYgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAEgDgFgFQgPgOgOgYIAOAAIADAAQAzA/BPAfIAWAIQAVAGAKAOIgDAAQgSAAgZgIQALAOASAAIADAAQAaARAgAMIADAAQAOAMAJACIAAgCQgGgNgMgCIgCAAIgBgBQgHgDgEgEIgBgCIgIgBIAAgBQgRgHgMgJIACgBIABgDQBVAkBZAgIAAACQAUACAVgBIAAgBQgSgEgNgIIgBgCQAbAAARAUIADAAQAEAKAIgHIACAAIABACIACABQARAGgHgMIgBAAIgBgBQgEgDgBgFIBDAOIADABQAAAEAIgBIADAAQAPAJAZAAIADAAQAJgEAHgGIABgCQAVADAIgEIAAgCQAMAHARgIIAAgCQBAgPAsgWIADAAQAggXAkgVQAjgUAegaQAGABAAgFIAAgDQAigeAdglIABgCIAFgEIABgCIAAgDQAHgFAEgHIAAgCQBkiBAIjRIAAgCIAAgDIABAAQgFhfgUhSIgBAAQgLgPgIgiIABgCQAEgHgIgIIAAgDQgJgMgFgRIAAgDQADgPgMASIgBgCQgKgPgBgPIgCgBIg4hLIAAACIhxhnIAAgBQgKAEgHgJQgkgZg0gUQgygTgwgUIgDAAQhmgSh/AGIgDACQgyANgqANQgvAPguAPIABACQgiAWgjAVQgmAXgiAZIAAgDQgCgGgJAAIAAgDQAegbAkgXIAAgCQAMgCAGgGIADgBQARgdAagFIADAAQAwgmA8gLIADAAQAPgKARgIIACAAQAVgFAdgCIABgEIACgEQAbgFAZAFIADAAQAMgKAOAGIAAABQAsgGArAEIADAAQABAHANAAIAAACQAtgFATAVIACABQAPgKAPAVIACABQAdABAKAVIACAAQAhAGAeAVQAEADAGAAQAUAJARASQAEADgBAIQAFANAKgKIADgBQAKALAGAHIABACQAWABABARIAGACQADABADADQADAHAGAEIADAAQATANAJARIABADQAVAPARATIANAQQALAPANABQAHAUAQAZIAAgBQAUALABAaIAAAEQAIADAEAYQAAADAFAAIAGgBQAAAVAGALQAJASAFAUQAAAQAHAMQAAAAABAAQAAAAAAAAQAAAAAAAAQABABAAAAQgEAWAPASIABADIgDAAIgGAAQAAAJAFADIABACQAOBJgDBQQgBAggGAWQgKAiAAAiIgBACIgOASIABADQACAPgGARIgBABQgGAMgKAIIAAADQgGAhgUATIgCAGQgCAYgFgNIgCABQgPAjggAiIgDAAQgGABgDAFIAAADIAAACIgCABQgNAUgRAOIgCABQgPAHgSANIAAACQgLADAGAHIgDAAQgaAQggAKIgBACQgJAKgRACIAAgCQgKAMgQAEIgCABQgHAEgLgCQgKANgcALQgZAJgPgEQhMAnheAAIgbgBgAhYJMIAAACQAbAGAWgCIAAgBQgQgGgRAAIgQABgAhnJHQAIAJAIgIIACgBQgCgGgEAAQgEAAgIAGgAjmI3QATAKAbADQAHAEAIABQAYACgngHIAAgCIgugNIAAACgAkdI3QAeAMAQgCIgDgBQgSgJgagCQAAABABAAQAAAAAAABQAAAAAAAAQAAAAAAAAgAH+idQAJAXgKgaIABADgAHyjMQAIAJgLgUQAAAHADAEg");
	this.shape_181.setTransform(87.3007,76.5501);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#B65151").s().p("AAEAGQgGgEgDgGQAKgFAAAMIABADIgCAAg");
	this.shape_182.setTransform(121.4,31.9671);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FED2C5").s().p("ACbC+IgDgBIgCAAQgDgIgBgJIAAgDQgKgjgTgoIgDAAQgHgBgEgRQAlADAGAxIAAADQAXAZgJAUQgBACAIgDQADAPgMAAIgDAAgAhRiFIgBgCQgugVgmgdIAAgCQAPgGARALIACABQA8AoAyAyIABADQgkgRgYgcg");
	this.shape_183.setTransform(125.09,36.0128);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFCBC0").s().p("AgEAAIgBgCIALAFIgKgDg");
	this.shape_184.setTransform(124.3378,28.2773);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#F4B5AD").s().p("AI5C5IAAgDIACABQAQACgEgRQgIADABgCQAJgUgWgZIAAgDQgGgxgmgDQAFARAHABIADAAQATAoAJAjIABADQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQgdg8geg6QgZgSgSgYQgGgHgIgEQgggOAQgTQAAgFgBgDQgKgTgPgOQh6hqiygvQhegZiDAKQhAAFglASIgBADQgJAUgoAAQhPAjg5A4QgIAJgKAHQhtBXhACDQgRAigKgdQAah0BPg+IADgBQAPgcATgZIAAgCIAMgIIADgBQgEgeAhgJIAAgBQADAAAMgGIACAAQACgQAGgNIABgDQAOgNALgOIABgCQAfgJAggVIABgCQAIgCAKgBIACAAQALgIAPgFIABgCQAMgCACACIADAAQBggcB3AIQDsARCUBvIAyAmIAHAIIgBADQBEAvA0A/QAUAXAOAJQAQASgRAIIABAAQATgIADAdQABAEAPABQAJAQAIAZIAGAAQgEALAJAJIgCAAIACAjIABAAQAKAWADAbQABAJgDACIgFABQgGgPgFAPQARAIgRAcQgBACADAIQgBAKgIAEIgDABQgLg8gUgzgAJIDHQAMAOgNgQIABACgApNBMQAQABgQgFIAAAEgAGwgxQADAUANALQANAKAIANQAUAeAYALIACgBQAIgRgNgLQgagXgVgfQgLgQgKAAQgFAAgFAEgAoWgaIAAAJQAAAGABgBQANgHAJgHQgCgHAFgCQATgHgEgQIAAgBIgpAhgAmAigQgYAOgeAHIgCABQgNAPAAATIAAACQgXAKgMAUQABAIACgBQA6gmAsg1IADgBQALgFgOAAIgBACgAGUhVQAYAKgZgMIABACgAD5jCIABACQAmAdAtAVIABACQAZAcAjARIAAgDQgygyg8goIgDgBQgLgHgKAAQgGAAgFACgAlwjLIgBADQgJAdgcAAQgDAKAIACIABAAQATgHAagRQAdgTAegSIgDAAIgIgBQgdAAggASgADKjZQAUAXAVgGQgMgVgigDQgagCgSgPIgDAAQgagIgXADIAAABQAmAJAoATIADAAQANACAFgCIACAAgAkcjuQAAAWAagJIAhgLQAdgLgEgLIgCgBIgBgCQgwADghAUgAAokIIABACQAUAQAZgDQgHgMgMgCIgOgBIgNAAg");
	this.shape_185.setTransform(83.4393,36.7274);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#CC0000").s().p("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UAHAQQANAcABgOIAAgCQARADAVANgAm1EEQAVAUgWgXIABADgAI/DhQAMAcgMgfIAAADgAH+DmQAEAGADABQAeADgkgSIgBAIgAJMDcQgNgZgJgfIAAgBQALACAHAXIABgBQACgWgSgSQgDAPgHgUQgJgcgEASIgCAAQADAUAQAVIABADQABAJgHAGIgOgcQgEgHABAFQAEATgQAFQALAYAMgLQAEgDACAQQABAGADgGIABgDQAUACAEAKIABAAIAAAAgAmnDUQATAAgWgKQgCAJAFABgAruDBIABAGQAMgRgUgSQAHAOAAAPgAm7CzQAFAPAKgUQACgFgBgDQgCgFgDAAQgFAAgGASgAnNCcIAFAJIABACQAagLgdAAIgDAAgAIlBZIABACQAaAdANApIAAACQAJgFgLgOIABgBQABAAAAABQABAAAAAAQAAAAAAgBQAAAAAAgBIgEgNQgFgSgIgNQgJgOgHAAQgEAAgEAFgAHbgSIABAAQATAkARAbIACAAQgCAWANAGIABABQgLAFAGAqQACAPgHASQgCAHAJgFQAXgVgGgxQgEgpgQgdIABAAQgCgPgLgHIAAADIAAADIgCgBQgIgGgEgLIAGgdQAah4hChFQgcgegfAEQBAAfAVBKQABADAEgJQgDAOAIAKIABACQAAA1gEAfIABgFQAGAWgZASgAmtCKQAGAOAMAEIgGgdQgFADgHAIgAsBA5QgLAkAUAtQgDgVgBgZQgBgJABgFQAFgggPgMIgBADQgBASAHgBIAAADgAJTBQQAHAEgDgHQgNgbAPANQgBgVgUgQQgUgQAGAJQABAIgCAFQgBACgSgJIgBgDQgJgbgcgYIABACQAYAiATApIACABQAGAMAMgKIACAKQADAJACgBIACgBQAFAAAJAMgAIUgSQAaAhgbgjIABACgAr+ggQAAAOAEgMQAFgNgBAAQgCAAgGALgAHZg2QgCAHgEAEIADAPIADgBQgFgKAFgMIACgHIgCAEgAmqgpQAEAEAHACIACgKIgNAEgACZpKQCyAvB6BqQAQAOAJATQABADAAAFQgQATAgAOQAIAEAGAIQASAYAZASQAeA6AdA8QAAAAABABQAAAAAAAAQAAAAAAAAQABAAAAAAQABAJADAIIACAAIAAADQAUAzALA8IADgBQAIgEABgKQgDgIABgCQARgcgRgIQ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");
	this.shape_186.setTransform(78.4004,71.9357);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#930000").s().p("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gCgBQgLgSgcgEIgCADIgDAGQgZANgRAYIAAADIgCABQgHACgIAAQAJATAcgOIABgCIACgBQAMgHAGAAQAKAAgKAXgALQFkIACADQALgMgBAAIgMAJgAITFKQABAAAAABQABABAAAAQABAAAAABQAAAAABAAQANADgHgRQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgDAAgFAOgAmVFDQAYANAZgDIgDgBQgVgHgagEQAAABABAAQAAAAAAAAQAAAAAAABQAAAAAAAAgAqgE3QAOAGgPgHIABABgArRDcIADAMQAMAwAhAYIAAABQAEgRgHgcIgBAAQgMgcgQgKIACAAQgIgVAAgWIgCgBQgRgVgKgZQAIAvALApgALqEuQASgCgYgFQAAAIAGgBgAn8EkQATgEgYgCQAAAFAFABgAlqEhIAAgDIAAgHIgIgOQgBADgFAAQgKABAEgFQAIgHgRgIQgEAHgBgFIgBgHQgHgWgWADQAFAUAHAQQANAcABgOIAAgCQARADAVANgAm1EEQAVAUgWgXIABADgAI/DhQAMAcgMgfIAAADgAH+DmQADAGAEABQAeADgkgSIgBAIgAJMDcQgNgZgJgfIAAgBQALACAHAXIABgBQACgWgSgSQgDAPgHgUQgJgcgEASIgCAAQADAUAQAVIABADQABAJgHAGIgOgcQgEgHABAFQAEATgQAFQALAYAMgLQAEgDACAQQABAGADgGIABgDQAUACAEAKIABAAIAAAAgAmnDUQATAAgWgKQgCAJAFABgAruDBIABAGQAMgRgUgSQAIAOgBAPgAm7CzQAFAPAKgUQACgFgBgDQgCgFgDAAQgFAAgGASgAnNCcIAFAJIABACQAagLgdAAIgDAAgAIlBZIABACQAaAdANApIAAACQAJgFgLgOIABgBQABAAAAABQABAAAAAAQAAAAAAgBQAAAAAAgBIgEgNQgFgSgIgNQgJgOgHAAQgEAAgEAFgAHbgSIABAAQATAkARAbIACAAQgCAWANAGIABABQgLAFAGAqQACAPgHASQgDAHAKgFQAXgVgGgxQgEgpgQgdIABAAQgCgPgLgHIAAADIAAADIgCgBQgIgGgEgLIAGgdQAah4hChFQgcgegfAEQBAAfAVBKQABADAEgJQgDAOAIAKIABACQAAA1gEAfIABgFQAGAWgZASgAmtCK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");
	this.shape_187.setTransform(79.3504,77.0857);

	this.timeline.addTween(cjs.Tween.get(this.shape_187).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(0,0,157.8,149), null);


(lib.Symbol39 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1E7E4").s().p("EgnBAOEIAAn0QBEisDJhiMAgWgPhQCihICiBJMAgUAPgQDKBiA+CpIAAH3g");
	this.shape.setTransform(279.775,125.3436);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBA8DA").s().p("EAnEAQ1IAAn3Qg+ipjKhjMggUgPfQiihKiiBIMggWAPhQjJBjhECsIAAH0IjlAAQhHgCAAhJIAApxQBGi+DihuMAkPgRZQC2hRC1BTMAkNARXQDiBuBGC+IAAJxQAABJhJACg");
	this.shape_1.setTransform(279.575,107.6686);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(0,0,559.2,215.4), null);


(lib.Symbol36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCD3E0").s().p("AUeCVQgTgmgegtQgdgtgkhHQgHgNgKgNQgNAegCghQAAgJgDgIQgsh3h+AsIhbBfQBBjEkghbQicAshdCSQgTAdgfARQhHAohRAIQgPACgPAEQiVAXhJiAQgBgWAHgVIAFgQQAmhqBygHIjggJQtNgatGA+QgDgBgDAGQAeAtBIgHQCSgNCOAhIBIAZQA3AVBpBUQCgDNjMEnQAtjhgUgbQgVgbgFgoQgGgngpgUQgpgWgdgVIgSgNQiFhaiOgDQA0BZBXBBQAeAXAQAkQArBhgnBmIgLAcIgMAeQhBBHgugsQA7AAARhhQAQhhhHhcQhHhag/grIgXgOQgqgcgcgkQgtgHgugCIgcAAQiSgDhqBeIgNCLIg6geIAri/QgLgKgNgBIgFACQheAehEBMIg7glIAsgTQgEgPgJgPIgGgHQhDg+haAZIimiAIgCgvIGAgEQgKACgGAGQgCABACAGQAGANANAFIAGADQA8AOgGgnIgIgIQTsgCT0AAIgfALIAcAZIgwBAQAeARAvgGIAjAAQB9gBBPhdIhKgSIHvAAIhHASIC/ARQAHAHAEAJIADAIQALAsglAXIB7BxQAGgRAEgWIAEgTQAehkBXg4IhlgZIDWAAIBNAvIAHArIhFBAIhBgZIgdA5QgFALgEALQgwClE+FuQkPi4gUglgEgkZgDuQA3AyBPgaIADgCQBEhBBnANIiehFgEghGgFdIApAMQCSA1CPhDgA97DZQCDA2AUhyQgGiSiMgHIgQADIg3A+Iglg6QAghTByAZQCTAjANChQAIBrhiAhgAcUClQk/hNgPixICMiLIhPiNIE9AAIB0CKIAfANIBMiAIA2AXQAHAvATAoIARAgIAJAOQArBCBMAWQgUgqgTgrQghhJAWg0QAmgJAkANQAUAHANAUIAEAHIAHAMIAFAMQAPAmAjAGIAEgCQAFgDAEgEIAFgFIACgDQAAA1AmAoIo3E5gAcuAgQgUAMAAAPQAAAQAUALQAUALAcAAQAcAAAUgLQAUgLAAgQQAAgPgUgMQgUgLgcAAQgcAAgUALgAeihLQgQgogcghQhMhYhahEQgNgKgOAEIATBOIBHA4IiWgOgEAoygEkQgdgXi0g2IE1AAIAABrIgmAGQgbgKgjgag");
	this.shape.setTransform(279.5,45.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ECAFCD").s().p("Ai2KtMgkNgRXQjihuhGi+QBKCWDiBuMAkNARXQC1BTC2hRQRdn4SyphQDbhrBJiZQg+CTjqCZQxWIsy6ItQhaAohaAAQhbAAhbgqg");
	this.shape_1.setTransform(279.575,142.6733);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFDDE6").s().p("AiyP3MgkNgRXQjihuhKiWIAApxQAAhLBLAAMBVBAAAQBLAAAABLIAAJxQhJCZjbBrQyyJhxdH4QhaAohaAAQhbAAhcgqg");
	this.shape_2.setTransform(279.575,105.6814);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,559.2,215.4), null);


(lib.Symbol34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE2E3").s().p("AguC2IgZgIIgagJIgigjIAAgkIASgSIAUAAIAUATIgUAVIgSAAIAAgHIAOAAIAOgOIgOgMIgNAAIgPAOIAAAeIAgAfIAwARIAwAAIAvgRIAQgeIAAi0IAHgYIAJgbIAygzIgaA1IAADFIgJARIgIASIgjAiIgyARgAgRARIgbAAIgWAWIAAgrIATgSIAeAAIAAgOIAIgQIAJgSIAKgLIANgNIAACNIgHAQIgKATIgJAKIgOAMgAhAirIA0AAIASAGIAdAKIA1gaIgzAzIgyAAIgxgRIg1Abg");
	this.shape.setTransform(295.9,185.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE2E3").s().p("Ah6CVIAJgGIAOgIIARgFIAygMIAxAAIAzAQIgDAGIAfgvQAGgGALgRIAPgxIAAgdIgPgPIgIgEIgXgMIhQAAIgbApIBMAAIATATIAAASIgYAxIAAgfIgegOIg/AAIgOAPIgSARIgiARIgWAAIAAgdIAWAUQAMgFARgKIAIgGIATgTIgqAAIgjgSIgRghIAAgbIAKAKIANAMIAKAGIAVAJIA/AAIAcgpIgrAAIgXgIIgcgJIgSgRIgRgkIARgiIASgSIAzgRIBCAAIAYAFIAxANIgZAZIgFAEIgHAIIgFAIIgFAHIgTAdIBdAAIAjARIARAjIAAAiIgRAWIghAtIgJANIgOAVIgtBDIgzgRIhRAAIgbAHIg8APgAhgibIgOAOIAAAfIAOAOIAwARIA/AAIAeguIgIgIIgEgDIgNgIIgUgLIgLgFIgNgEIgYgHg");
	this.shape_1.setTransform(259.575,186.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AgxDBIgagIIgcgKIglglIAAgmIAUgUIAVAAIAVAWIgVAVIgTAAIAAgIIAQAAIANgNIgNgOIgPAAIgPAPIAAAgIAhAhIA0ARIAyAAIAygRIARggIAAi/IAIgaIAKgcIA1g2IgcA4IAADSIgJARIgKATIgkAkIg2ASgAgRASIgdAAIgYAXIAAgtIAUgUIAhAAIAAgOIAIgRIAJgUIALgLIAOgNIAACVIgIARIgKAUIgKALIgOANgAhDi2IA2AAIATAHIAgALIA4gcIg2A1Ig1AAIg0gRIg4Acg");
	this.shape_2.setTransform(298.725,186.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("AiCCfIAKgHIAOgJIATgFIA1gNIA0AAIA2ARIgDAHIAhgyIARgZIARgzIAAggIgQgPIgJgFIgYgMIhVAAIgcArIBQAAIAUAUIAAAUIgZAzIAAggIgggQIhDAAIgQAQIgSATIgkASIgXAAIAAgfIAXAWIAfgQIAIgIIAUgUIgsAAIglgSIgTgkIAAgcIALALIANAMIAMAGIAWAKIBDAAIAegrIguAAIgZgJIgdgKIgTgSIgTgmIASgkIAUgTIA2gTIBGAAIAZAHIA0ANIgaAaIgFAGIgIAIIgFAIIgFAHIgVAfIBjAAIAlASIASAlIAAAlIgSAXIgjAwIgKANIgOAWIgwBIIg2gSIhWAAIgdAHIg/AQgAhmilIgQAQIAAAgIAQAPIAzASIBDAAIAggxIgJgIIgEgEQgDgDgLgFIgWgMIgLgEIgOgFIgagHg");
	this.shape_3.setTransform(260.225,187.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DFBED4").s().p("EAkmAFqQACgBgCgGQgGgNgNgFIgGgDQg8gOAGAnIAIAIQzsACz0AAIAfgLIgcgZIAwhAQgegRgvAGIgjAAQh9ABhPBdIBKASInvAAIBHgSIi/gRQgHgHgEgJIgDgIQgLgsAlgXIh7hxQgGARgEAWIgEATQgeBkhXA4IBkAZIjVAAIhNgvIgGgrIBEhAIBBAZIAdg5QAFgLADgLQAxilk+luQEPC4AUAlQATAmAeAtQAdAtAkBHQAHANAKANQANgeACAhQAAAJADAIQAsB3B+gsIBbhfQhBDEEgBbQCcgsBdiSQATgdAggRQBGgoBRgIQAPgCAPgEQCVgXBJCAQABAWgHAVIgFAQQgmBqhyAHIDgAJQNNAaNGg+QADABADgGQgegthIAHQiSANiOghIhIgZQg3gVhphUQigjNDMknQgtDhAUAbQAVAbAFAoQAGAnApAUQApAWAdAVIASANQCEBaCPADQg0hZhXhBQgegXgQgkQgrhhAnhmIALgcIAMgeQBBhHAuAsQg7AAgRBhQgQBhBHBcQBHBaA/ArIAXAOQAqAcAcAkQAtAHAuACIAcAAQCSADBqheIANiLIA6AeIgqC/QAKAKANABIAFgCQBegeBEhMIA7AlIgsATQAEAPAJAPIAGAHQBDA+BagZICmCAIACAvImAAEQAKgCAGgGgAb9FgIFKgCIgpgMQhBgXhAAAQhQAAhQAlgEAiEAFSICWhjQg3gyhPAaIgDACQhEBBhngNgA8/FyIh0iKIgfgNIhMCAIg2gXQgHgvgUgoIgQggIgJgOQgrhChMgWQAUAqATArQAhBJgWA0QgmAJgkgNQgUgHgNgUIgEgHIgHgMIgFgMQgPgmgjgGIgEACQgFADgEAEIgFAFIgCADQAAg1gmgoII3k5IBqASQE/BNAPCxIiMCLIBPCNgA91CVQBMBYBaBEQANAKAOgEIgThOIhHg4ICWAOIkphzQAQAoAcAhgA+NhVQgUALAAAQQAAAPAUAMQAUALAcAAQAcAAAUgLQAUgMAAgPQAAgQgUgLQgUgLgcAAQgcAAgUALgEgqVAFyIAAhrIAmgGQAbAKAjAaQAdAXC0A2gAdRAwQiTgjgNihQgIhrBighIBxBIQiDg2gUByQAGCSCMAHIAPgDIA4g+IAlA6QgYBAhJAAQgWAAgbgGg");
	this.shape_4.setTransform(278.05,277.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6C3DA").s().p("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");
	this.shape_5.setTransform(279.575,207.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A72420").s().p("AAAADIgCgDQAHgKgDAPIAAAAIgCgCg");
	this.shape_6.setTransform(227.4909,225.122);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F0A89E").s().p("AgBAAIgBgBIAFADIgEgCg");
	this.shape_7.setTransform(217.05,209.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B24D4C").s().p("AgGgCIAAgBIANAHIgNgGg");
	this.shape_8.setTransform(242.4188,219.3629);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B34F4D").s().p("AgGgBIAAgBIANAFIgNgEg");
	this.shape_9.setTransform(240,218.0324);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#872F31").s().p("AAEACIABgCQgFgIgCAMIAAgCQgMgOgLgQIgBgCQAZAAAMAWQANAVADAQQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgYgIAEgVg");
	this.shape_10.setTransform(230.575,214.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E4ABA3").s().p("AgFgBQAUABgPACQgFgBAAgCg");
	this.shape_11.setTransform(230.6257,207.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8B2D32").s().p("AgEgHIgCAAQgGgHgCgKQAPAGgBAKQgCAIAOgFQAEAAgBAFIgBACQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgIALAGAMQgPgKAAgWg");
	this.shape_12.setTransform(226.485,208.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#883234").s().p("AgIABQARAGgFgPQgDgHAIAHIAAADIgBACQgCAPgFAAQgDAAgGgLg");
	this.shape_13.setTransform(225.125,203.7618);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#873131").s().p("AgBAIIAAgEIgCgLQANAPgKAAIgBAAg");
	this.shape_14.setTransform(223.9591,200.8528);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#952827").s().p("AgEgDIAGAAIADAAIAAADIAAABIgBABQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQgCAAgDgHg");
	this.shape_15.setTransform(230.55,198.7392);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#AB423F").s().p("AANAFQgLAAgJgDIgFgCIgHgDIgBgBIAGABQARADAPAEIADABIgIAAg");
	this.shape_16.setTransform(241.1,210.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FAADA1").s().p("AAAAIIgCAAIAAgDIAAgCIAAgLIAFAMIAAABQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBAAIgBgBg");
	this.shape_17.setTransform(237.4161,209.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C5615F").s().p("AAAgCIgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgBQAEgCAAAIIAAAJIgBACQgBAAgBgLg");
	this.shape_18.setTransform(236.225,209.7707);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FDAFA9").s().p("AgDgCIgBgCIAJAJIgIgHg");
	this.shape_19.setTransform(236.8129,205.1514);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F2ADA2").s().p("AgBAEQgEgBABgGQAQAHgMAAIgBAAg");
	this.shape_20.setTransform(237.8131,200.4514);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EBABA0").s().p("AgDANIAAACIgBADIgFgBIgGgMIgBgCIgCgEIgGgRIgCgHIAIgBQAMABAFAPIAAAGQABAEACgGQAOAHgGAFQgDAEAIAAQAEgBABgCIAGALIAAAHIAAACQgRgMgMgCg");
	this.shape_21.setTransform(240,204.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EFB7B8").s().p("AgMAAQAMAAANAAIAAABIgCAAIgIAAQgJAAgGgBg");
	this.shape_22.setTransform(277.425,243.0455);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#AB1423").s().p("AgHAAIAAgBIAPADIgPgCg");
	this.shape_23.setTransform(275.2063,241.6385);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BA534F").s().p("AgFAAQAHgFAEAHIgCAAIgDAAIgCABQAAAAgBAAQgBgBAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_24.setTransform(277.15,235.4213);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#AA4B4A").s().p("AgFAAIACAAQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIACAAQAIADgDAAIgKgCg");
	this.shape_25.setTransform(281.5257,235.3913);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B41F21").s().p("AgGAAIAAgBQAQgCgDAFIgCAAIgCABIgCAAQgEAAgDgDg");
	this.shape_26.setTransform(266.8792,240.7286);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C85B58").s().p("AAEACIgBAAIgBAAQgFgBgGgCIAKABQANACgGAAIgEAAg");
	this.shape_27.setTransform(265.9488,235.6361);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B85350").s().p("AgGAAQALgJADAJIgCABQgDAEgDAAQgDAAgDgFg");
	this.shape_28.setTransform(272.45,235.6133);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C45D5A").s().p("AgTAAIAAgBQATgEAUAHIAAABIgGAAQgPAAgSgDg");
	this.shape_29.setTransform(275,236.3034);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B65250").s().p("AgEACIAAgCIAEgCIACAAIACAAQADAFgEAAIgHgBg");
	this.shape_30.setTransform(271.0256,235.2476);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B6544D").s().p("AgFABIAAgCIAAgEQAGACAEAEIABACIgCABQgDACgBAAQgDAAgCgFg");
	this.shape_31.setTransform(269.7,234.808);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#AB4940").s().p("AAIAEQgJgDgHgFQAQADABAGg");
	this.shape_32.setTransform(268.6,233.475);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B25046").s().p("AgGAAIAAgBIANADIgNgCg");
	this.shape_33.setTransform(271,229.7092);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B34D48").s().p("AgJAAIAAgCIATAEIAAABIgTgDg");
	this.shape_34.setTransform(267.65,231.275);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A43D3D").s().p("AhXgUIgBgCQBPAbBiASQhfgDhRgog");
	this.shape_35.setTransform(276.7,229.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A03C3D").s().p("AgJgDQAJACAIACIACAAQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgBABIgDAAIgCAAQgJAAgDgHg");
	this.shape_36.setTransform(280.2,235.0303);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A8453F").s().p("AAFACQgHAAgEgEIANACIAAAAIAAACIgCAAg");
	this.shape_37.setTransform(275.875,234.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A13F3A").s().p("AgJAAIAAAAIAAgCQAXAFgFAAIgSgDg");
	this.shape_38.setTransform(277.5875,234.527);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B1494A").s().p("AgxgQIgBgBQAXABAOAEIACAAQALAEAMAIIAAABQAUABASAPIABABQg0gJgwgZg");
	this.shape_39.setTransform(273.175,227.75);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C41B23").s().p("AgEAAQAUgBgUACg");
	this.shape_40.setTransform(260.675,239.2979);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B41C20").s().p("AAKAFIgCAAQgLgDgKgEIAAgCQAbABAAAIg");
	this.shape_41.setTransform(253.2504,237.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B41D1E").s().p("AALAHIgCAAIgVgHIgBAAQgGgCAAgGQANAAALAGIAKAGQAIAFgEAAIgIgCg");
	this.shape_42.setTransform(249.3398,236.3411);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E08077").s().p("AgFgBIACAAIADAAIAGABIAAAAIAAACIgEAAQgFAAgCgDg");
	this.shape_43.setTransform(252.225,230.5161);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#AE1F22").s().p("ABXAwIgPgEIgDgBQhCgbg1gbIgBgBIgjgcIgCgCIgBgDQANgGANAGIACAAIA2AvIADAAQAJAAAFAKIACAAQACgFATALIA5Afg");
	this.shape_44.setTransform(237.4,230.5435);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#AB4D45").s().p("AgLgDIgBgCQAPADAJAIIABAAQgMAAgMgJg");
	this.shape_45.setTransform(243.025,224.125);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B35248").s().p("AgHAAIgBgCIARAFIgQgDg");
	this.shape_46.setTransform(259.0313,231.5203);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C65954").s().p("AgSgEIAAgBIAlAKIAAABQgVgCgQgIg");
	this.shape_47.setTransform(263.025,234.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B14D45").s().p("AgDAEIgCAAIgQgHIgBgCQAQAGAaABIADAAQgJAEgIAAIgJgCg");
	this.shape_48.setTransform(263.625,232.0645);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C75F5A").s().p("AgRgDIgCgBIAQACIAKACIALAEIACABIgFAAQgMAAgUgIg");
	this.shape_49.setTransform(258.4,234.691);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CB6C5E").s().p("AgIgDIAAgDIACAAIACAAQAIACAGAKIAAABQgIgBgKgJg");
	this.shape_50.setTransform(254.55,231.925);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C76560").s().p("AAjASQgagKgWgNIgCAAQgPAAgJgMQAVAHAPAAIACAAIACAAIgBACIgBABQAJAHAOAFIAAABIgCAAIgCAAQADAFAJgBIAAgBQAEADAGACIAAABIgCAAIAAADIgDAAg");
	this.shape_51.setTransform(249.85,229.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#A8493E").s().p("AgYgHIAAgCQAbAHAUALIACABQgZgDgYgOg");
	this.shape_52.setTransform(256.8,229.575);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#AF544C").s().p("AgEgDIACAAIACAAIAAACIAFAFIgJgHg");
	this.shape_53.setTransform(261.6433,223.4642);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D87B75").s().p("AAAABIgEgBQAEgBABABQACAAAAAAQABABABAAQAAAAAAABQAAAAAAAAIgFgBg");
	this.shape_54.setTransform(246.8132,222.3696);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#AE4944").s().p("ABxA7IAAgBQAVAAANAMIACAAIgBAAQgMAAgXgLgAgZAGQhJgagygxQAdAYAoANQgIgMAYACIAAgBQANAQAXAHIAAABQgDABALADQANADAMAMQAFgBACAAIADAAQAGAGAMAAIADAAIADAAIAfAPIAYALIgCAAQABAOAPAJIABABQg9gUhKgdgAhLgfIAFACQAJACgIgEIgDgBIgDABg");
	this.shape_55.setTransform(253.95,225.476);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F0AA9E").s().p("AgIAAIAAgBIARADIgRgCg");
	this.shape_56.setTransform(310.6563,231.946);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FDB6A0").s().p("AgDAAIAAgBIAHADIgHgCg");
	this.shape_57.setTransform(306.075,222.9592);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CB3D4C").s().p("AgMAKQAKgUAPgBQgEAEgBgDIgBABQACAFgEAGQgGAKgFAAQgDAAgDgCg");
	this.shape_58.setTransform(321.225,230.7974);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B4192E").s().p("AgDAAIAAAAIAHABIgHgBg");
	this.shape_59.setTransform(316.6875,233.54);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#BB1B2D").s().p("AgrAQIAAgDIAagMQAGgDARADQgGgEALgKIAAgBQASgCAPAFIgDAAQgHAAACAGIgBACIgfAJIgCAAQgUAHgXADIgCAAg");
	this.shape_60.setTransform(311.5031,235.7233);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#C52D3D").s().p("AhDAPQAUgOAWgBIAAgBQAIgNAHAIIACABQARgNAUAAIAFgHQATABAPAFIAAACQgSAMgXAFIgCABQgCgGAHABIADAAQgPgGgSACIAAACQgKAJAGAFQgSgFgGAEIgaANIAAACIACAAIAAACIgIACQgIAAABgLgAAlgOQAPACgPgDg");
	this.shape_61.setTransform(312.6436,235.0526);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C01831").s().p("AgIAEIgBgEQAFgIANAHIABABIgBABQgGAEgJAAIgCgBg");
	this.shape_62.setTransform(302.975,238.0545);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FAA1BB").s().p("AgSAGQARgWAQAPIACABIAAAAIACABIAAABIgGAAIgNABIgSAFIAAgCg");
	this.shape_63.setTransform(305.15,238.7409);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B12725").s().p("AgFADIAAgCQAEgBgEgDQAKgFABAJIAAACIgCAAQgDADgBAAQgDAAgCgDg");
	this.shape_64.setTransform(300.425,238.7402);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F1A39C").s().p("AgMAFQAMgKALgBIACAAQgJAKgQADg");
	this.shape_65.setTransform(304.775,234.875);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#B73638").s().p("ABgDEIACgBQAEgGgSACIAAADIgDgBQg+gIg0gQIADAAQAAgJgcgBIAAADIgCAAQgKAAgDgFQARAGgMgKIgKgGQgMgHgNAAQAAAHAGACIABABIgDgBQgSgEgNgKIAOAEIAEACIg6ggQgTgLgCAGIgBgBQgGgKgKABIgCAAIg2gwIgCgBQgNgFgNAGIABADIABACQgGABgBgBQhzhSgyiSIgHgWIgDgLQASAGAAAXIAAACIAMAWIALAUQAOAXAFAUIABADQAGADAEAEIABAAQAKAIAFAOIABACIA/A9IACABQgGgPgIgNIABAAQAJgEAGAOQAHAQAKgHQABAPAOADIACABQAaAfAZAUIAAAFQAJgHAOAMIABACQAYAKAbAUIAAABQAJAAAFACIADABQAJAFAIAHIAAACQAXABARAPIABABIBUAYQAsAMAwADQAYAHAiAFIADAAQAJgEAbAFIAAACQAagJAUACIAAgBQASALAWgDQAagEArgIIA/gNQAegSAiADIgCADIgJAKIAAgCQgPgHgEAJIABAEIABABIAAABQgIAAgEAEIAAgDQgBgJgMAEQAFAEgEACIgBACQg/AahgAHIgmABQhAAAg/gPgACnDKQAgAGgggHIAAABgAAYCzIAAABIAKgCIgKABgAkxAkIAEAFQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQACgKgCAAQgBAAgEAEg");
	this.shape_66.setTransform(257.75,221.3942);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E8B7B8").s().p("AgLAAIAUAAIADAAIgBAAIgWABIAAgBg");
	this.shape_67.setTransform(282.65,243.025);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E3B8B6").s().p("AgJAAIAQAAIADAAIAAAAIgTABIAAgBg");
	this.shape_68.setTransform(286.275,242.775);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FABAB1").s().p("AgHAAQAfgJgbAMIgDABQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAgBABgBg");
	this.shape_69.setTransform(299.4455,224.5218);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#B34F4A").s().p("AgGAAIAAAAIAMABIgMgBg");
	this.shape_70.setTransform(294.4375,226.29);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E9AAA3").s().p("AhrAvIAwgLIAAgBQgXABgHgGIABAAQAnABAQgKIAAgBIABAAQgIgPgKAMIABAAQgEAFgOgGIgIgEQgFgDAFgBQABgGAWACIAGABIATgEIAagFIAagIIAAgBQALAFAGgKIABgCIAQgBIABAAIACgBIAAgBQAAgEADgCQAGgGAKAAIACAAQAMgQANgCIAAABQgVASgWAPIgMAHQgdAQgaASIgDABQglASg1ANIgCAAIgBAAQgEAAgFgHg");
	this.shape_71.setTransform(297.05,229.5266);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FEDACB").s().p("AgGgEQATABgIAGQgDACgCAAQgEAAgCgJg");
	this.shape_72.setTransform(297.8414,221.6447);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FEDDCE").s().p("AgfAPQAOgPAPADIACgBQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAAAAAQAFgQAWABIAAACQAGANgIACIgDABQgcAKgbADg");
	this.shape_73.setTransform(293.7741,222.5441);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FEDACD").s().p("AANAHIgbgKIgBgBQANABANgDQAHgCgDANIAAAAIgBABIgBABg");
	this.shape_74.setTransform(298.7239,220.8679);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#B75051").s().p("AgEADIAAgDQACgDAEgBIADAAIgBACQgDAFgFACIAAgCg");
	this.shape_75.setTransform(315.825,222.775);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E5A79E").s().p("AgBAHQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAEgPADAHQAFALgHAAIgCAAg");
	this.shape_76.setTransform(317.7445,210.2768);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E6A09A").s().p("AgEAIIgBgFIALgKIAAABIAAACQgEAGgFADIAAADIgBAAg");
	this.shape_77.setTransform(314.475,216.675);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#E49D99").s().p("AgaAdIgBgEIAbgZIAbgcIAAABIAAACIgWAZQgNAPgQAOIgCAAg");
	this.shape_78.setTransform(310.85,220.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFD7C8").s().p("AgDAAQAQgBgQACg");
	this.shape_79.setTransform(309.95,217.9479);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FEDACF").s().p("AgDACIgBAAIgBgDIAEABQAIAAgBABIgGABIgDAAg");
	this.shape_80.setTransform(305.2303,219.575);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CC7872").s().p("AgGAAIAFgCQAIgEAAAEIgBADQgDAEgGAAQgEAAABgFg");
	this.shape_81.setTransform(307.2639,218.9625);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FDDACD").s().p("AgOAHIACgCIAAgDIAAgCQALgCAIgHIACAAQALgBgHAFIgKAIIgCADQgEAEgEAAQgEAAgDgDg");
	this.shape_82.setTransform(307.89,217.2497);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFD6C8").s().p("AgEAAQAUgEgUAGg");
	this.shape_83.setTransform(306.8875,215.704);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FEDDD4").s().p("AgIAGIAIgKQAHgCACADQACACgHABIgGAEIgGACIAAAAg");
	this.shape_84.setTransform(303.8972,212.0723);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F1B7AD").s().p("AgFAFQgGgCgEgFIAMgCIADgBIAAADIAAABIAAABQADADAGgCIACgBIACAAIADAAIgBAAIgBABQgJAFgFAAIgFgBg");
	this.shape_85.setTransform(307.225,212.9618);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F4B4A8").s().p("AgLAGIAAgCQALgKAJABIADAAQgEALgPAAIgEAAg");
	this.shape_86.setTransform(312.9,214.8786);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FEE5D9").s().p("AgTAMQAQgOATgLIACgBIACADQAAAEgCADQgBADgFACIgBABQgKADgFAFIgBACIAAAAIgCABIgCABIgEABQgDAAgDgDg");
	this.shape_87.setTransform(309.105,211.6731);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FECFC9").s().p("AgDADQgDgBgBgFIAHACQARADgRACIgDgBg");
	this.shape_88.setTransform(313.45,206.225);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F0B7AC").s().p("AiEBAQAdgHAbgMQAIgBAIgDIACgBIAFgGQARgKARgLIAOABIARgQIABgBQAUADAXgDIAHgCIABAAQAKgLgGgCQgCgBgHACIgCAAQANgQAJADQACABACADIABACQAHgBAEABQAJABgDAJIAAAAIAAACIgBAAIgIABIgDAAQgIACgCAEQgBACACADIABACIADgBIgBADIgBACQAHAHAJgIIACgDIAJgIQAIgFgLABIAAgBIAbAEIAAABIgBABQgDASgTALQgHAEgJADIgCAAIAAACQgBAGgDAEQgDAEgGADIgCAAQgXAMgQgFQAGgCAFgEIABgBQgQgFAQgCIACgDQACgEgGgEQgQgIgGAOIADACQABABAAABQABAAAAABQAAAAAAAAQAAABgBAAQgiARgbAVIgCgBIgPgBQgIAAgHACQgKAAAFgDQAFgEgQgGIgBACIgCABQAFAQgUgJIgDAEQgHADgEAAQgPAAgGgWgAhLBDIAAABQAbgDAdgKIADgBQAIgDgGgNIgBgCQgWgBgEARQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAAAABIgCABIgFgBQgNAAgLANgAABAuQAIgHgSgBQACAQAIgIgAgJAgIAbAKIABABIAAgCIABAAIAAgBQADgNgGABQgOADgMAAIAAABgABBAYIABAAIAEAAIAGAAQABgBgJgCIgEAAgABZAOIgFACQgBAFADAAQAIAAADgEIABgDQAAgBgBAAQAAgBAAAAQAAAAgBAAQAAgBgBAAIgGADgABxAGIAAABIAJgCIgJABgABSgPIAAACIAKgEIgKACgAAjghIAMgNQACABAFgDIAHgEQAHgCgCgCQgCgDgHADIAGgHQAOgKANgLIACgBIARACQAAAAABAAQABAAAAAAQAAAAAAAAQAAABgBAAQgYAEgCAZIAAABQgSgLAGAUIAAABQgYAHgUAKIAHgIg");
	this.shape_89.setTransform(298.2,217.3282);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#CD5E5F").s().p("AgDAAQAOAAgOABg");
	this.shape_90.setTransform(312.325,202.975);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#C06461").s().p("AgEACIAKgKIABgBIACABIAAACIgBAAQgDAOgOACIAFgIg");
	this.shape_91.setTransform(309.05,204.625);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F4BCB3").s().p("AgCAaQACgLAAgCQgDgFgOAHIgCABIgCABIgCAAIAAgBIAAgBQAGgFALgDIAAgBQAFgDABgDQACgCgBgEIASgQQAIAEAFAIIAAAAIACABQAJAFgJAEIAAAAIgDADIgPANQgKAHgIAFIgCABIACgDgAgmAPIAAgDIAAgDQAHgJAIgHIgPAXIAAgBgAAAgbIAAgBIAAAEIAAgDg");
	this.shape_92.setTransform(310.9564,211.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#EBACA7").s().p("AgBAWIgCgJIgBgBQACgIgNABIgBAAQgNACgFAEIAAABIgIAFQgKAEgHgFIAAgCIADgCIACAAIACgBQALgEAHgIIABgBIACABQAFAGAIgMIAAgBIADAAIALAAQAFgBgDgEIgGgEIgDgCIAAgBIAGgBIAHAAIARABIAGABIACAAQASgMABAKIgCAAQgZALAZgBQAGgDAAADQADgJABAEIAAABQAMAJgMAGIgBgBQgSgJALATIgCgDQgCgFABAEQAEAKgNAGQAFgKgKABQgVABAAAIIAAAFIgEABQgDAAgCgFgAgKAAIAEAAQARgBgRgEIgHgCQAAAGADABg");
	this.shape_93.setTransform(314.0939,206.6074);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EFA9A5").s().p("AgBAGIgCAAQgCgBgBgDIgBgBIABgGIAFACIAGAEIACABQAFAEgHAAIgGAAg");
	this.shape_94.setTransform(316.3479,202.325);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F1AEA6").s().p("AgBgDIAAgDIADANIgDgKg");
	this.shape_95.setTransform(321.15,202.3704);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#9D262A").s().p("AiTCFQgagOgXgRQgWgSgbgKQgbgLgbgIIgYgIIgdgHIgFgCIgBAAIgKgCIAAgCQgHgHgEgJQgHgPAAgTIgBgIIgCAAIgNgKQgWgVgHgkIAAgBIAAgCIAAgFQADgDACACIABABIABAAIAKAQQANAUAQAMQAFADADAFQAKAQABAbIABAAIAAACQATATAnABQANABAGAIQARACARAHQAQAHBAAvQAvAiAOAFIgIAAIgCAAIgCAAIgDAAIgLABIgIgBgAl4gIIgBABQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABIABABQADARABgIIAAgJQAAgGgDAAIgCAAgAFRgcIAHgNQAPgCACgPIACAAQADAJgCgIIADgCQAJgEAHgJQAGgHAFgKIABgDIAHgLQAMgSARgMIABAAIgIATIgFALQgQAegWAYIgJAJQgLAKgNAJIAAACIgCABIgCABIAAADIgCAAQgBAEgFgCIAAADIgCAAQgMALgPAKQARgTANgVgAF+hCQAPgCgPAAg");
	this.shape_96.setTransform(273.725,209.775);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FCC2BA").s().p("AgTASIAHAAQAKgKgDgBQgBgBgGACIAAgBQAQgZAYgUIACgBIAAACQgHANgHAMIgGAIIgFAGQgKAMgMALIAAADIgCAAIgKAMIAKgWg");
	this.shape_97.setTransform(311.575,200.85);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FDBEB5").s().p("AgBAGQgDgFAAgGIAGgCIADAAIgBACQgBAIgEAFIAAgCg");
	this.shape_98.setTransform(314.85,196.025);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#E49A94").s().p("AgeAsIADgHQANggAHghQALgGALAEIACgCQAAgQAMAHQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQgBAGgDABIgDABIgHABQAAAHACAGIAAACIgCABQgXASgSAaIAAACQAGgCACAAQADACgLAKIgGAAg");
	this.shape_99.setTransform(312.7,198.2803);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F1B1A7").s().p("AAYAnQgDgFgJgDIgIgCIAAACIgBABQgCAFgBgFQgBgNgDACQgGAFgFgDQgEgDgEgHIAAgBIgBgCIACAAQALgFgCgOQgBgBAAAAQAAgBABAAQAAABAAAAQABABABACIAFAHIABADIADAGIACAGQAEgDAAgFIAAgEIAAgDIgBAAQgFgHgEgIQgEgJgBgJIABAAIACgFQAEgDAEAPIABABIAAACIAGAHIACgFQAGAHADAHQAEAHAAAGIAAAGIgBABQgDgNgGgEQgDgCgDgBIAAABIACAEIAJAYIACAGIAGALg");
	this.shape_100.setTransform(319.525,197.5669);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#ECAEA3").s().p("AAPAgIAAgCQgLgggVgXIgBgCQACgDADgBQAHgDAHAOIAEAHIAIASIADALQAAABAAAAQAAABgBAAQAAAAAAgBQAAAAgBAAIgBABQAGAGAAAFQgBACgDACg");
	this.shape_101.setTransform(320.5635,193.4493);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#F8A6A0").s().p("AgCAAQACgDACgGQABgCAAAAQAAgBAAAAQAAABAAABQgBACgBACQgCAJADAIIgCACIgCgNg");
	this.shape_102.setTransform(312.2192,179.5309);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#EB9D96").s().p("AAEAKIgBgBQgDgHgDgEIgBgCIAAgDIAAgCIACACQAGAHABAKg");
	this.shape_103.setTransform(315.875,183.575);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#EEAEA8").s().p("AAiAtQgKgKgEABQgCABgCgHIgCgJQgKAIgEgKIgCAAIgDgGQgMgbgQgXIgFgHIAAgCIAFAFQATATAHAUIAAACQAOAHABgCQACgEgBgFQgFgIARAMQARANABASQgNgLALAXQAAABAAABQABAAAAABQAAAAgBAAQAAABAAAAIgDgCg");
	this.shape_104.setTransform(319.225,185.3029);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F4B0A9").s().p("AgEAEQgBgDABgGQASAIgPADg");
	this.shape_105.setTransform(320.3585,174.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F9A199").s().p("AgFgBIgBgCIANAHIgMgFg");
	this.shape_106.setTransform(298.7877,151.7323);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F4ABA4").s().p("AgUgEIgkgeIgBgBQATgCAQANIACABQABAGAFAEIABACQATALAQAEIACABQAMATAUAJIACABIgDACQgkgZgngPg");
	this.shape_107.setTransform(291.325,153.0672);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#B05155").s().p("AAAAHQgCgGAAgHIACAAQAGAGgEAFIAAACIgCAAg");
	this.shape_108.setTransform(320.2477,167.825);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#BF6260").s().p("AAAAEQgCgEAAgFQAGALgCAAIgCgCg");
	this.shape_109.setTransform(321.9235,169.6021);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#F0A299").s().p("AgDgDIgBgBIAJAJIgIgIg");
	this.shape_110.setTransform(317.5188,168.1444);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#B45255").s().p("AgDADQAJgOgDALIAAADIgCAAQAAABAAAAQgBABAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_111.setTransform(318.65,164.1973);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#F8A099").s().p("AgEABIAAgBQAMABgEAAIgIAAg");
	this.shape_112.setTransform(305.1563,162.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#F9B2A6").s().p("AgWgIIgBgBIAAgBQAgABAPASIAAACQgXgFgXgOg");
	this.shape_113.setTransform(306.125,164.075);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#F2A79F").s().p("AAHANIgEgDIgDgEIgQgWQATAMAOARIAAACIgEACQgDAAgDgEg");
	this.shape_114.setTransform(313.4,163.1563);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#AF4441").s().p("AAmCsQAFgOgCgNQgCgPABgJQABgNAFgCIgBgBQgKgEABgRIAAgCIgCgBIgHgLIgFgJIgLgVIgBAAIgGgMIgBAAQAVgPgFgRQACgRAAgWIAAgbIAAgCQgFgHAAgIIAAgFIgBADQAAABgBABQAAABgBAAQAAAAAAAAQgBAAAAgBIgDgLQgKgegUgVQgBABAAAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIgSgPIgRgJQAagDAYAYQAMAOAJARQAFAIADAKQAIAVABAZQABAPgCAQQgBAQgEAPIgFAYQACAHAFAFIACACIABABIACAAIACACQAEAFACAHIACABIAFAKIAFANQAFAPACAUIABAIQABAdgMAQIgFAFIgFACQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBABgBg");
	this.shape_115.setTransform(312.233,178.7801);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#F6A59C").s().p("AgDAEQgCgDACgGQAMAFgGAEQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_116.setTransform(310.9173,160.6125);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F8A8A0").s().p("AATAbQgPgIgEgSIgBgDIgBgCQgOgEgEgPIAAgDIgBgCIAJAIQAUAUANAbIABACIgDgCg");
	this.shape_117.setTransform(310.975,168.075);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F5A9A4").s().p("AgEgCQAPgGgJAJQgCAEgCAAQgDAAABgHg");
	this.shape_118.setTransform(312.8893,160.37);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#F9A39B").s().p("AgFgCQATADgNABIgBABQgDAAgCgFg");
	this.shape_119.setTransform(304.568,155.7021);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F8A49C").s().p("AAHAHIgSgOIAAgCQALACAMAMIgCADIgCACQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_120.setTransform(308.3042,158.6143);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#B65151").s().p("AADAFQgEgEgDgEQAHgEABAKIABACIgCAAg");
	this.shape_121.setTransform(308.8,149.8717);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FED7C9").s().p("AgEAHQgHgKgLgJQgJgHgDgNIgBgFQAMgKAOAUQAQAZAWATQAIAIgBAKIgCAGIgCABQgVgKgPgZg");
	this.shape_122.setTransform(316.7368,153.4972);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FCA098").s().p("AgHAEQAMgLADAFIgDACQgFAFgDAAIgEgBg");
	this.shape_123.setTransform(242.475,152.6836);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FAA49D").s().p("AgQAGIAAgBQANgHASgEIACAAQgPANgPAAIgDgBg");
	this.shape_124.setTransform(247.525,151.3033);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#F2A098").s().p("AgHABQAggEggAFg");
	this.shape_125.setTransform(249.775,148.8864);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#F6A29A").s().p("AgGABQAagGgaAHg");
	this.shape_126.setTransform(250.6125,150.0242);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#F6B1A7").s().p("AhHAMIgKgGIgDgCIgBgBIAMAAQARgDATgBQAIgEAHgFIADgBQAJAHAKgJIABAAQAaABAVAEIAMABIgDgBQgEgDABgBQAAgDAVAHQAGABAFAEQgMADgbAAIgpgBQgJALgWgHIgBAAIgCAAQgOALgPAAQgHAAgHgCg");
	this.shape_127.setTransform(264.1,150.1417);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#F6A89D").s().p("AgGgBIgBgBIAAAAIADABIAAAAIAMAEIgOgEg");
	this.shape_128.setTransform(275.4327,147.5875);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#F5A69C").s().p("AAMAGIAAgCQgNgDgMgEIgBgCQAVgFAIARg");
	this.shape_129.setTransform(279.475,148.7694);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#F8B3A6").s().p("AAuASIgCAAQgogJglgQIgPgIIgBgBQAIgCAPACIABAAIADAAIACABQAhARAkAQIAAAAIgDAAg");
	this.shape_130.setTransform(273.55,148.2375);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#F6A99D").s().p("AgSgBIgDgBIgBgBIALgBIACAAQAMgBALAFQAEABAFADIAAABQgWgCgTgEg");
	this.shape_131.setTransform(265.55,147.6673);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FECFC1").s().p("AgSgEIAAgBQATgBADABQAJACAGAJIgHAAQgPAAgPgKg");
	this.shape_132.setTransform(282.375,132.3689);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#F7B1A5").s().p("AgSAHIgVgDIAAgBQAIgFALgDIABgBIAhADIAaADIAAAAQgYAHgXAAIgLAAg");
	this.shape_133.setTransform(255.625,148.919);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#F3ADA2").s().p("AA9gQIgBgBQgkgGgYAFIgCABQAEAGAPgEIACAAQAKAOAVADIABABQg6gThFAOQg1ALguAXQgIAEgFgEQBCgvBkgFIgBgCQAQgGgVgCIgDAAQgUALgegBQgFAAAHgCQAMAAAEgKIABAAQBYgIBHAYQASAGARAIQAeAOAaAVIABACQg9gXhDgcg");
	this.shape_134.setTransform(265.925,145.2107);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#F8ADA2").s().p("Ag5ALQA0gbA/AFIAAACQg8AIg3AOg");
	this.shape_135.setTransform(257.2,146.8305);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FED0C4").s().p("AgoAaQgHgBACgJQAYAAAIgXIAAgCQAegSAbADIACAAIgwAeIgIAGIgOAHIgQAHg");
	this.shape_136.setTransform(247.7265,137.8844);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FED1C8").s().p("AgiADQAbgQAogCIAAABIACABQADAJgYAIIgaAKQgHACgEAAQgLAAAAgNg");
	this.shape_137.setTransform(256.867,133.6082);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#C24A46").s().p("AgKAAQANgKAIAMIgBABQgDACgDAAQgFAAgJgFg");
	this.shape_138.setTransform(257.8,124.0207);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#C44747").s().p("AhDAMQgBgHgEgLQAKAGAMgLIgCAEQgBACADAFIACgCQAMACgEgIQAFADAIgIIADgBIADAAIAAABIBHgBIAAABQAHACADAFIACAAQAPgIgFAKQgCAHgFABQgQABgNgFQgJAAAGgDIADgBQgSgCALAJQATADgbAAQgVgBgCAHQgFgBgCgBIgBAAQgPAGgNgJIgDAAIgaAHIAAgCg");
	this.shape_139.setTransform(266.2375,125.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFCBC0").s().p("AgDAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAJAFIgIgDg");
	this.shape_140.setTransform(311.2378,146.7703);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#B94D50").s().p("AgGABQABgCACgCQAFgJAFANIAAACIAAAAIgCABQgDADgCAAQgEAAgCgGg");
	this.shape_141.setTransform(303.225,145.4514);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#F9A19A").s().p("AgQgIIgBgCQAQAHATAMIAAACQgUgHgOgMg");
	this.shape_142.setTransform(292.675,145.425);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#F9A39C").s().p("AgWgNIAAgCQAhAKAMAUIAAABQgWgKgXgTg");
	this.shape_143.setTransform(293.95,148.325);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#F4A69D").s().p("AA7AcQgwgfg6gSQgVgFgSgJQAWAGAFgFIACgBQANAJAXAKIACABQAZgCAHAQIACAAQALgFAPAOIAAADQALgEAIALIAAACQAQADALAKIAAACIgHABQgJAAgMgIg");
	this.shape_144.setTransform(282.4,142.5883);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#F3A79C").s().p("AgYgKIgBgDQAMAEANACIABAAQgBAGAOABIACAAQADAHAGAEIAAACQgZgKgYgNg");
	this.shape_145.setTransform(287.35,142.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#EFA9A2").s().p("AgGAAIgKgFQAYADAJAEIAAACQgBACgEAAQgGAAgMgGg");
	this.shape_146.setTransform(281.9,140.0911);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FECEC2").s().p("AAZAFIgCAAQgEABgKgBIgDAAQgggPgggHIgBgCQAVgCAVAHIACAAQAPAMAVACQAcACAKARIgHABQgNAAgOgPg");
	this.shape_147.setTransform(291.45,135.1681);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#F1ACA3").s().p("AgGAFQAGgWAHAMQAAACgBADQgFAKgDAAQgCAAgCgFg");
	this.shape_148.setTransform(236.6063,197.632);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#F4AFA4").s().p("AAAAHQgEgEgCgFQAGgHADgCIAEAWIAAABQgEgCgDgDg");
	this.shape_149.setTransform(237.825,195);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#EEA8A0").s().p("AgCADIgDgGIgBgBIABAAQAYAAgUAJg");
	this.shape_150.setTransform(235.1918,196.625);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#AC413C").s().p("AghBiQgIgVgBgSIADgEIAQgiQAVgnAUglIAEgKQAFgTAMgNIAEAAQgDAQgBAQQgRAtgYAjIgJALQgGAIgGAEIgBAAQAEALgDANIgEAKIAAACIAAADIgDAAIgHAAQAEAMAEgHIACAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQgBABAAABIAAACIgBAAIgBgBQgCgCgDADIAAAFIAAACIgBAAg");
	this.shape_151.setTransform(233.875,190.675);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#F7B2A7").s().p("AgEAAIAJgDIgBAHQgFgBgDgDg");
	this.shape_152.setTransform(237.875,179.75);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#97202B").s().p("AgCgDQAAgJgEgDQAKgOADAjIAAAOQgJgGAAgRg");
	this.shape_153.setTransform(222.0875,194.3918);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#8D2D32").s().p("AAFAOQgGgMgEgMIgBgDQAMAMABAPg");
	this.shape_154.setTransform(223.225,198.45);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#94252E").s().p("AAAAFQgCgCAAgDIAAgFQAHALgDAAIgCgBg");
	this.shape_155.setTransform(222.1525,186.388);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#B2514B").s().p("AABAKQAAgIgBgFIgEgLIADADQAMAMgKAOIAAgFg");
	this.shape_156.setTransform(210.2801,198.325);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#B64F4C").s().p("AADAlQgFgRgBgQIAAgCIAAgCIAAgBQgBgMADgKIABgCQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAQgDgDABgLIAAgCIAFAFQAGALgDAVIAAAFIAAAFIAAAKIABANIACAPIgDgGg");
	this.shape_157.setTransform(208.8714,190.35);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#B9504A").s().p("AgCABQAJgRgHATIgBAFQgBAAAAgHg");
	this.shape_158.setTransform(209.3031,180.2631);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#BB4E46").s().p("AgMAUIgBgCQACgLALgIQAIgIgFgLQAAgCAFAAQAPAWgXAJIgBACQgDAMgEAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_159.setTransform(210.8731,176.178);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#F7AEA1").s().p("AgHABIAFgFQAJgKABAMQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBABIgBABQgEAHgCAAQgEAAgCgJg");
	this.shape_160.setTransform(238.355,172.53);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#F5A79C").s().p("AgGADQAWgTgOATQgCAEgCAAQgDAAgBgEg");
	this.shape_161.setTransform(236.6266,172.3251);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#F7A69E").s().p("AgFAAQATgNgLAQQgDADgBAAQgCAAgCgGg");
	this.shape_162.setTransform(235.5952,170.702);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#F3A299").s().p("AgGAAQAbgCgbADg");
	this.shape_163.setTransform(242.4,164.9357);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#F3AAA0").s().p("AgUASIgBgCQAMgXATADIgBgDQAAgGgGABQAMgRACAZQABAEAEAAQgNAUgRAAQgGAAgGgCg");
	this.shape_164.setTransform(239.275,166.4165);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FECAC3").s().p("AgCACIAAgDQALADgJAAIgCAAg");
	this.shape_165.setTransform(228.2439,160.0278);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FBA89B").s().p("AgHACQAQgQgCAOQgBADgFADIgDABQgDAAgCgFg");
	this.shape_166.setTransform(239.8063,156.9819);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FCA49C").s().p("AgRAQQAPgSASgNIACgBQgFALgKAIIgHAGIgNAIg");
	this.shape_167.setTransform(236.975,157.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#B24A4B").s().p("AgFAFQAIgQACAEQADAHgFAFQgDAEgDAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_168.setTransform(236.0063,153.7229);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#A53D3E").s().p("AgvEZQgNgNgGACIAAgDQgBgHgIgEIgBgCIg3hHIAAgCIgRgoIAAgBIgRgWIAAgDQgCgIACgEIgBAAQgDgKgIgFIAAgCQABgHAEgKQgMAIgBgPQAAgZABgGQgFgBAAgCIAAgDQAOAEgJgLIgCAAQgEgbgCggIgCgZIADgRQACgXgCgPIAAgDQAIgEAFgbIABAAQgCgKAAgRIAAgCQALgeADgVIAAgDQAXgbAUgdQARgaAPgdIAAgDQAdgeAVgdQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAOAGgRALIgCAAQgDAMgEABQgKAGADALIAAABQgGABgLAKIAAABQgNAXgPAeIgBABQgCAWgPAWIgFAHIAAACQADAagPAUIAAADIAAAfIAAACQgKgBgBASQgBAOABASQAAAKgGgHQgBAJAKAKIAAACIgCAcQgBAWACAUQAEAxARAtIAAACQgHgIACAIQAGAQgSgGQAMAYAFgdIAAgDIAQAqIABACQgPAGACgJQACgKgQgGQACAKAGAHIACAAQAAAXAQAKQgGgMAIgLQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAaAtAlAhIAAACQALAQgIAEIAAABIgDAAIgMAAQAMAUAMAMQAEADgCADQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAABQAUABALAWQAAABAAAAQAAABgBgBQAAAAgBgBQgBAAgBgCQAGAJAOALIABACIAXALIAMAHIABABIAAABQgIAHASAAIACAAQAmAdAvASQAUAGAEAHQAJgFALAKQACABAAAEQiXgqhbhagAhLDDIgBACQgEAVAYAJQABgBAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQgDgQgNgWQgNgVgZgBIABACQALAQAMAPIAAACQABgHADAAQABAAADADgAiUA7IAAAFQANABgPgRIACALgAigAVQAFANAHALIABAAQAAgPgNgMIAAADgAisgYQAEADAAAJQAAARAKAGIAAgOQgCgZgGAAQgDAAgDAEgAinhaQAAAFACABQAJAHgLgRIAAAEg");
	this.shape_169.setTransform(238.6792,195.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FECCC5").s().p("AgQAQIAAgIIAhgbIAAACQAEAMgRAFQgDACABAGQgHAGgLAGIAAAAIAAgEg");
	this.shape_170.setTransform(234.239,150.7775);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#B54A4D").s().p("AgLAAQAKgBACgKIABAAQAIgBACAGIAAACQgFAEgDAGQgEAHgDAAQgFAAgDgNg");
	this.shape_171.setTransform(238.075,151.647);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FED1C6").s().p("AguAiQAKgQATgJIAAgBQAAgPAKgNIACAAQAUgFARgJIAIgEIAAgCQAMAAgJAFIgDAAQgLAPgNAMIgSARIgUAQIgWAPIAAABQgCAAAAgHg");
	this.shape_172.setTransform(241.0599,144.2625);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#D2403F").s().p("AglA0IgBgCQAUgdAPgaQAGgPAMABQgDgKAHgKIAAgBQAOgHAEgFIACAAQgBAPgPATIgBACQgGgHgDAQIACAAQgKAFAAAOIAAACQgNAMgLAOIgCABQADAMgLAAIgIgBg");
	this.shape_173.setTransform(233.225,142.4422);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#CC3E40").s().p("AhVB+QgCAAAAgFQAFgEACgIIAAgCIAOgXIAAgCQAOgFADgOIAAgDQARgLANgRIACAAQArhWA9hHIABAAQgKAjgYAUIgCABQgDAagQANIgBACQgGAXgQAOIgCAAQAEAIgFAFIgBACQgGAJgIAHIgCABQgDARgOALIAAABIgBAHIgLAQIgFADIgCABQgJAUgPACIgBACQgGgOgDASQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgDAAg");
	this.shape_174.setTransform(220.775,160.5893);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#C34543").s().p("AhmA1IgBgCQAJgRAOAAIACAAQAIgcAVgFIACAAQAHgOAFABIAAABQADgJAHgDIAAgCQA5gfA1ADIAAABQgLAGAXAFQAPACgTACQgIABAEAHQACADgGgCQgYAJgOgGIgDAAQgKAWgTgFIgCAAQgHgFAAAKQgBACgEAAQgFAHgQAFQgOAEgGAKQgHAFgOAEIgDAAQgOAVgPAAQgFAAgEgCg");
	this.shape_175.setTransform(248.1638,129.2923);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#CA4643").s().p("AgHAAQAWgMgJAHQgEADABAEQAAAGgDAAQgCAAgFgIg");
	this.shape_176.setTransform(237.6897,135.8679);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#C73C48").s().p("AgEACQASgPgQASg");
	this.shape_177.setTransform(333.4945,212.654);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#C6374F").s().p("AgFgCQATACgOADQgFAAAAgFg");
	this.shape_178.setTransform(335.2714,208.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#DBAFCD").s().p("EgkVAGPIHokuInoE8gAfMmaIAJgCQCiBqCfBtg");
	this.shape_179.setTransform(232.6,265.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFE2E3").s().p("AGXCwIAAgBQAAgEgVAKQgHAEgGgGQASgKASgJIADAAQARgYAVgLIAAgBQgDgQAJAIIACAAQAHgOAPgFIACAAQAKgSAPgNIACAAQgBgJADgGIAAgCQAHgDAEgGIABgBQARgpAZgtQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQgCgNAKgOIABAAQAGgcAMglQAFgOgGgGIAPgCQACAKAKACQAGAGgMABIABADQAHAOgGAGIgBABQAGASgIAaQgmB8hTBRQguAtg7ANQAFgHAPgGgAo2gtQgbgUgKgnIgDgLIgHgcIgIgtQAHAVAPASIACAAQAAASAGASIgBAAQANAIAKAXIABABQAFAUgCAPIgBACg");
	this.shape_180.setTransform(273.414,213.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#ECC3DA").s().p("AdiHpIAqAMIlLADQCPhECSA1gAcqGkQBnANBEhAIADgDQBPgaA3AzIiWBigA+LHIQhahEhMhYQgcghgQgoIEpB0IiWgPIBHA4IAUBOIgJABQgKAAgJgHgABKjjIAIgGIAOgBQgJAGgNACgAFynEQATgPgSASgAGCn2QAUADgPACQgFAAAAgFg");
	this.shape_181.setTransform(296.825,262.45);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#F0ABA4").s().p("AAhAtQgTgmghgeQgKgLgKgMIAAAAIAAAAQAcgKAFARIABAAQgIAMAQASQAWAWAPAgIAAACIgBAAQgBABAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgCAAgCgGg");
	this.shape_182.setTransform(320.05,182.9622);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#B45452").s().p("AAAAEQgDgDAAgGIAEAAIACAAIAAACQACAHgEACIgBgCg");
	this.shape_183.setTransform(326.6058,180.55);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#A33839").s().p("AgzIKQhggFhKgVQABgEgDgCQgLgJgIAFQgEgHgUgHQgwgRglgeIgDAAQgSABAIgIIAAgBIAAAAIgNgIIgXgKIAAgCQgPgMgHgIQABABABABQABABABAAQAAAAAAAAQAAAAAAgBQgKgWgUgCQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQADgDgEgDQgNgMgLgUIAMAAIACAAQAqA0BDAaIASAHQARAFAJAMIgDAAQgPgBgVgGQAJAMAPAAIADAAQAWAOAaAKIADAAQALAKAIABIAAgBQgFgLgKgCIgCAAIAAgBQgGgCgEgEIAAgBIgHgBIAAgBQgPgFgJgJIABAAIABgCQBHAdBKAbIAAACQARABARAAIAAgBQgOgDgMgIIAAgBQAWAAAPAQIACABQADAIAHgFIACgBIAAACIACABQAOAFgFgKIgCAAIAAgCQgEgBgBgEIA4ALIADABQAAAEAHgCIACAAQAMAIAVgBIADAAQAGgCAFgEIACgCQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIALABQAJAAAEgCIAAgCQAKAHAOgIIABgBQA0gNAlgSIADgBQAbgSAdgRIAMgHQAXgPAUgSQAFACAAgEIAAgDQAQgOAPgQIAWgaIAAgCIAEgDIABgCIAAgCQAGgEADgGIABgCQAOgSAMgVIANgZQALgWAKgZIAFgSIAEgLIACgJIADgMIAAgBIADgLIAFgcIACgRIABgFIABgLIABgGIACgpIAAgCIAAgDIABAAQgEhOgQhFIgCAAQgJgNgGgcIAAgCQAEgGgHgGIAAgCQgHgLgFgOIABgCQACgMgKAOIgBgCQgIgMgBgNIgBAAIgvg/IAAACIhehWIAAgBQgJADgGgHQgegVgrgRIhSggIgDgBQhUgOhqAFIgCABQgqALgjALIhOAaIABABIg1AiIgEACQggATgcAVIgBgCQgBgGgIABIAAgDQAZgWAegUIAAgBQAKgDAFgEIADgBQAOgYAWgFIACAAQAoggAygJIACAAQANgIAOgGIACAAQARgFAYgBIABgEIACgDQAXgEAVAEIACAAQAKgIAMAFIAAABQAlgFAjACIADAAQABAHAKAAIAAABQAmgEAQASIACABQAMgIANARIABAAQAYACAJARIABAAQAcAFAZARQADADAFAAQARAIAOAOIABACQACADAAAEQAEALAIgIIACAAIAOAPIABABQASABABAOIAFACIAFADQACAGAGADIACABQAPAKAIAOIABACIAUARIALAMIALANQAKANALABQAFAOAKARIAEAHIAAgCIAAAAQARAKAAAWIAAABIAAABIABABIAIARIABAFQAAAAAAABQAAABABAAQAAAAABABQAAAAABAAIACAAIAEgCIACARQABAHADAEQAHAOAEARQAAAOAGAJIABABQgDATANAPIAAACIgCAAIgFAAQAAAHAEAEIABABQALA8gCBDIAAABQgBAUgDAQIgCAIQgIAdAAAcIgBACIgLAPIAAADQACAMgFAOIgBABQgFAKgIAGIAAADQgFAbgRAQIgBAFQgCAVgEgLIgCAAQgNAdgaAdIgDAAQgFABgCAEIAAACIAAACIgCABQgKARgPAMIgCAAQgMAGgPALIAAABQgJADAFAFIgCABQgXANgaAIIgBACQgIAIgNACIAAgBQgJAJgNAEIgCABQgGADgJgBQgIAKgXAJQgWAIgMgDQgxAYg6AGIgHABIgeABIgUgBgAhJHrIAAABQAXAFASgBIAAgBQgOgFgOAAIgNABgAhVHmQAGAIAHgHIACgBQgCgFgDAAQgEAAgGAFgAi/HZQAQAJAWACQAGADAGABIABAAIABAAQAOABgRgDIgLgCIAAgBIgmgLIAAABgAjtHZQAZAKANgCIgCAAIgKgEIgLgDIgQgCIABABgAGgipQAHAHgKgRQAAAGADAEg");
	this.shape_184.setTransform(280.3454,187.0283);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#930000").s().p("ABPGAIgYAAIAAgBIgbgBQi0gWiUg2Qigg6hhh5QADgHgGgIQhGhggTiCQAXBoA6BPQAGAIgDAHQBhB5CgA6QCUA3C0AVQAJAEAPgCIADAAIAYAAIADAAIAXgBIABgBIAMAAIACAAIAUgBIAAgCQBZgFBGgZIAAgBIATgFIgIAHIAAABQANgCAJgHIAGAAIAAgBQBRgPA+gjIAAgBIAAgCQAIgJAJgVIACAAQArgqAhg0IAAgCQAUg2Afg4IgBgCQgCgKAKgIQAUhFgFhNIAAgHIgCgZIAEAYQAEAXACAcQAFBNgUBEQgKAIACALIAAACQgeA4gUA2IAAACQghA0grApIgCABQgJAVgIAJIAAACIAAABQg+AjhRAOIgCAAQgSgSgTAXIAAADIAAABQhGAZhaAFIgCAAIgRAAIAAADIgCAAIgMAAIgDAAIgVAAIAAACIgDAAgAJVBSIACACQAJgKgBAAIgKAIgAJrAlQAPgDgUgDQAAAGAFAAgAJyj5QAFgFgBgKQgFgegBgeQgCgfgDgcQAKAvACA3QACAeAFAeQABAIgDAFQgFgXgFgSg");
	this.shape_185.setTransform(274.0913,209.025);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FDCDC1").s().p("AgBgBIgBgCIAFAHIgEgFg");
	this.shape_186.setTransform(326.0314,170.6021);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FED2C5").s().p("ACBCeIgCAAIgCAAIgDgOIgBgDQgIgdgPgiIgDAAQgGAAgEgOQAZACAIAZIAAABIAEAPIAAADQASAUgHARQgBACAHgDQADAMgKAAIgDAAgAhEhuIgBgCQgmgSgfgYIgBgCQANgFAOAKIACAAQAyAiAqAqIAAACQgdgOgVgXg");
	this.shape_187.setTransform(311.861,153.2259);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#F4B5AD").s().p("AHbCaIgBgCIACAAQAOACgEgOQgGADAAgCQAIgRgTgUIAAgDIgDgPIAAgBQgIgZgZgCQAEAOAGAAIACAAQAQAiAIAdIAAADQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAQgYgygagxQgUgOgQgVQgFgFgGgDQgagNANgPIgBgFIAAgCQgIgQgNgMQhmhYiUgnQhOgVhtAJQgtADgdALIgLAEIAAADQgIARghAAQhCAdgwAvQgHAHgIAGIgcAZIgFAEIgJAJIAAAAIAAAAQgjAjgcAoQgYAdgPAmIAAACIAAAAIAAAAQgPAcgIgYQAFgTAGgSQAGgJADgMIAEgKQANgbASgVIAGgHIALgLIAQgPIACAAIAHgMIABgCQAJgQALgOIABgCIAKgHIACAAQgDgaAbgHIAAgBQADAAAKgFIACAAQABgNAFgLIABgDIAIgHIANgPIABgCQAYgHAagQIACgCIABgBIAAgBIAPgCIACAAQAHgFAJgEIAGgCIAAAAIAAgBQAKgCACABIACABQANgEANgDIAWgEQAtgIAyAAIAIABIAdABIAJABQC+APB5BbIAqAfIAFAHIAAADQA4AnAsA0QAQATAMAHQANAPgOAHIABAAQAQgHACAZQABADAMABQAIAOAHAUIAFAAQgEAJAIAIIgCAAIACAaIAAADIABAAIACAFIACAFIABAFQAEAMABAOQABAGgBACIgBABIgEABQgFgNgFANQAPAHgOAXQgBACACAHQgBAIgGADIgDABQgJgygQgrgAHnCmQAKALgLgNIABACgAnrBAQANAAgNgEIAAAEgAFogoIABAFQADAMAJAIQALAJAHAKQAQAZAVAJIACAAIACgHQABgKgIgHQgWgTgRgZQgJgOgIAAQgFAAgEAEgAm9gVIAAAHIAAAEQALgFAIgGQgBgHADgBQARgGgEgNIAAgBIgiAcgAlAiFIgHAEQgSAJgUAEIgCABQgLANABAPIgBACQgTAIgKARQABAHACgBIAWgPIATgQIAUgSQAMgNAMgOIACgBQAKgEgMAAIgBACgAFRhHQAUAJgVgKQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAgADQiiIAAACQAgAYAmASIABACQAUAXAeAOIgBgCQgpgqgygiIgDAAQgIgGgJAAQgFAAgEABgAkzipIAAACQgIAZgYAAQgCAIAHABIAAAAIAQgGIAOgIIAIgFIAxggIgCAAIgHAAQgYAAgbAPgACoi1QARAUASgFQgLgSgcgCQgWgDgOgMIgDAAQgVgHgUADIAAABQAgAHAhAQIADAAQAKACAEgCIACAAgAjtjGQAAASAWgHIAcgKQAXgJgDgJIgBgBIgBgBQgoACgcARgAAhjcIABACQARANAVgDQgGgJgKgCIgLgBIgMAAg");
	this.shape_188.setTransform(277.1083,153.8235);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#CC0000").s().p("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BIAAACQAEAHAEADQAFADAGgFQADgCABANQACAFACgFIABgBIAAgCIAIACQAJACADAGIABAAIAAAAgAlgCxQAPAAgSgIQgBAHAEABgApzCTQACAHAAAHIABAFQAJgNgMgNIgEgDIAEAKgAlxCVQAEANAJgRQABgEAAgCQgDgFgCAAQgEAAgFAPgAl/CDIADAGIABACQAWgJgaAAIgBAAIABABgAHOBGQgCABgCADIABACQAVAXALAiIABABIAAACQADgCAAgDQAAgEgFgHIABgBQAAABAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIgDgMIgHgTIgEgGQgHgMgGAAIgDAAgAGZiDQAAAIAFAHIAAACIAAAbQAAAWgCARQAFASgVAPIABAAIAGAMIABAAIALAUIAFAJIAHALIACABIAAACQgBARAKAEIABABQgFACgBANQgBAJACAPQACANgFAOQgDAGAIgEIAFgFQAMgQgBgdIgBgIQgCgUgFgPIgFgNIgFgKIABAAQgBgLgHgGIgDgCIAAACIAAADIgCAAIgBgBIgCgCQgFgFgCgHIAFgYQAEgQABgQQACgQgBgPQgBgZgIgVQgDgKgFgIQgJgRgNgOQgYgYgaADIARAJIASAPQAAABAAAAQAAABABAAQAAAAAAAAQAAAAABgBQAUAVALAeIADALQABABAAAAQAAAAABAAQAAAAAAgBQABgBAAgBIABgDIAAAFgAllBzQACAGAFAEQADAEAEABIAAgBIgEgXQgEACgGAHgAqBAvQgDALAAAMIAAABIAAADIAAACQACAPAGARIADAHIgCgPIgBgNIgBgKIAAgFIABgHQADgVgHgKIgFgGIgBADQAAALADADQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIAAACgAHxBDQAFADgCgGQgLgWANAKQgBgRgRgNQgRgNAFAHQABAHgCAEQgBABgPgHIAAgCQgHgUgTgSIgFgFIAAACIAFAGQAQAWAMAcIADAGIACABQAFAKAKgIIACAIQACAHACgBIABAAQAEAAAJAKgAp+gbQgBAMAEgKQAEgLgBAAIgGAJgAGLgtQgCAGgDADIACANIADgBQgEgIADgKIACgGIgBADgAljgiQADADAHACIABgIIgLADgACAnoQCUAnBmBYQANAMAIAPIAAACIABAFQgNAQAaAMQ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");
	this.shape_189.setTransform(272.924,183.1847);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#DFC3DA").s().p("AhSg/ICjBfIACAgg");
	this.shape_190.setTransform(540.525,303.05);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#ECAFCD").s().p("AdAI/QifhtiihqIgJABIqom1IkBB4IgFgZIgCgHIDRhgQNCmFNvm+QDPhmBMiOIAJgQQgHAPgIAPQhCB7i6B/IgdATQsAGBsvGCQM5JZQeJvIAABBgEgrrARbQQbpyNJpbI48r+QjihuhGi9IAHANQBOCNDXBqIb2NXIgGAWIAAARIh1g4I2/O3InoEtg");
	this.shape_191.setTransform(279.575,188.05);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FCD3E0").s().p("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");
	this.shape_192.setTransform(279.575,154.05);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFDDE6").s().p("AJFOnQADgFgBgIQgFgegCgeQgCg3gKgvQgUiNhXhHQhbhJhehFQg/guhXgVQghgJgegNQhdgnh5ANIgCAAQhxgShHAuQhCAqgoBGQgnBFgtBAQgXAigZAhQhIBeg2BmIAAACQgCATgGAVI72tXQjXhphOiNIgHgNIAApxQAAhLBLAAMBVBAAAQBLAAAABLIAAJxIgJARQhMCOjPBkQtvG+tCGFIjRBhIgBgLgAZAh4Qk+luAximQADgLAFgLIAdg5IBBAZIBFhAIgHgrIhNgvIjVAAIBlAZQhYA4gdBkIgFATQgEAWgGARIh7hxQAlgXgLgsIgDgIQgEgJgHgHIi/gRIBHgSInvAAIBKASQhPBdh9ABIgjAAQgvAGgegRIAxhAIgdgZIAfgLQz0AAzsACIAIAIQAGAng8gOIgGgDQgNgFgGgNQgBgGABgBQAHgGAJgCImAAEIADAvIClCAQBagZBDA+IAGAHQAKAPADAPIgrATIA6AlQBFhMBdgeIAFgCQANABALAKIgrDAIA6AeIANiMQBrheCSADIAbAAQAvACAtAHQAbAkArAcIAWAOQA/ArBHBbQBIBcgRBhQgQBhg8AAQAvAsBAhHIAMgeIAMgcQAmhmgrhhQgQgkgegYQhWhBg0hZQCOADCEBaIASANQAdAVApAWQApAVAGAnQAGAoAUAbQAUAbgtDhQDMknigjOQhohUg4gVIhIgZQiOghiSANQhIAHgegtQADgGADABQNGg+NNAaIDhAJQhzAHgmBqIgFAQQgHAVACAWQBICACVgXQAPgEAPgCQBRgIBHgoQAggRASgdQBdiSCdgsQEfBbhBDEIBbhfQB/gsArB3QADAIABAJQABAhANgeQAKANAHANQAkBIAeAtQAdAtATAmQAUAlEPC4IAAAAgA8LjJQBighgIhrQgMiiiUgjQhygZggBUIAlA6IA4g+IAPgDQCMAHAHCSQgUByiEg2gAZRrPIiLCLQAOCyFABNIBqASII2k6QgmgoAAg1IgCADIgFAFQgEAEgFADIgEACQgigGgQgmIgFgMIgHgMIgEgHQgMgUgVgHQgjgNgnAJQgVA0AgBJQATArAUAqQhMgWgrhCIgJgOIgQggQgUgogHgvIg2gXIhMCAIgegNIh0iKIk+AAgEAoygMPQAiAaAbAKIAngGIAAhrIk2AAQC0A2AeAXgActmUQgUgLAAgQQAAgPAUgMQAUgLAcAAQAcAAAUALQAUAMAAAPQAAAQgUALQgUALgcAAQgcAAgUgLgAZ5qpICVAOIhGg4IgUhOQAOgEANAKQBbBEBLBYQAcAhAQAogEgkZgLZICVhjICeBFQhngNhEBBIgDACQgbAJgYAAQgvAAgjghgEggegM8IgpgMIFKgCQhQAmhQAAQhAAAhBgYg");
	this.shape_193.setTransform(279.575,94.6125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,559.2,319.1), null);


(lib.Symbol33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E45E8E").s().p("AkKgwQgIgYAAgbQAAg+AsgsQAsgsA+AAQA+AAAsAsQALALAHAMQAIgMALgLQAsgsA+AAQA+AAAsAsQAsAsAAA+IAAAHQgBAKgCAKIgCANIAAADIgDAJQgPBMj8DdQj9jegNhMg");
	this.shape.setTransform(27.5,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,55,50), null);


(lib.Symbol28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#960000").s().p("AhLAUQglgPgcgVIAAgSQBGAqBGABQAbgBAcgGQAVgEAVgJQANgFAfgSIAAASQglAbglAOQggAKgjABQgngBgkgPg");
	this.shape.setTransform(555.375,547.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#960000").s().p("ABhAMQgUgJgWgEQgbgGgcAAQhGAAhGAqIAAgTQAcgUAlgPQAkgQAnAAQAjAAAgAMQAlANAlAaIAAATQgfgRgNgGg");
	this.shape_1.setTransform(555.375,446.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#960000").s().p("AiHB0QBHgyAahIIASAIQggBShDAwgAAZAEIAQgMQA8AyAjBNIgSANQgjhSg6gugAh/hBIB3AAIAAhCIATAAIAABCIB1AAIAAATIj/AAg");
	this.shape_2.setTransform(555.225,526.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#960000").s().p("AAIB4QAaglAAg2IAAiUIBeAAIAADeQAAALgHAGQgHAHgLAAIgVAAIgHgTIAWAAQAMAAAAgKIAAhEIg4AAQAAA+gbAogAA1ANIA4AAIAAgyIg4AAgAA1g2IA4AAIAAguIg4AAgAh/B3QAmgYATghIAOAMQgSAggnAagAgoBKIAMgMQAYAKARAZIgNAPQgNgXgbgPgAh2AiIAbAAIAAhyIgaAAIAAgTIAaAAIAAggIASAAIAAAgIA4AAIAAggIASAAIAAAgIAYAAIAAATIgYAAIAAByIAYAAIAAASIiPABgAhJAiIA4AAIAAgcIg4AAgAhJgKIA4AAIAAgaIg4AAgAhJg2IA4AAIAAgaIg4AAg");
	this.shape_3.setTransform(554.525,496.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#960000").s().p("AiFB5IAAgSIB/AAIAAgcIhJAAIAAgRIBJAAIAAgaIhCAAQgPATgTARIgQgMQAkgaAMgnIATAGIgIARIA4AAIAAgWIATAAIAAAWIBaAAIAAASIhaAAIAAAaIBKAAIAAARIhKAAIAAAcIB6AAIAAASgAhWh5ICtAAIAABoIitAAgAhDgjICIAAIAAgaIiIAAgAhDhOICIAAIAAgZIiIAAg");
	this.shape_4.setTransform(555.225,466.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#960000").s().p("AB2CwIAAgbIilAAIAAAbIgZAAIAAiQIBUAAIAAiGIAZAAIAAAyICOAAIAAAXIiOAAIAAA9IBrAAIAACQgAgvB9IClAAIAAhFIilAAgAiyCfQAogyAAhMIAAiwICOAAIAAggIAaAAIAAAgICLAAIAAAYIkYAAIAACbQAABTgtA5g");
	this.shape_5.setTransform(405.7,670.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#960000").s().p("AB/CpIAAgcIilAAIAAAcIgZAAIAAkJIBAAAIAAgvIhXAAIAAgYIEKAAIAAAYIhrAAIAAAvIBQAAIAAEJgAgmB1IClAAIAAgkIilAAgAgmA6IClAAIAAiCIg2AAIAABAQAAAKALAAIAGAAQAEABADgIQADgHgBgNIAXAKQABATgIAMQgJAMgNAAIgNAAQgfgBAAggIAAhDIgXAAQAABJgmAqIgUgRQAggZABhJIgnAAgAAahgIAXAAIAAgvIgXAAgAizCQQA3hCALhHIAYAKQgQBRg0A7gAiuhGIARgRQAoAQAaAlIgTASQgZgkgngSgAiciUIAQgUQAhAMAdAjIgSASQgZghgjgMg");
	this.shape_6.setTransform(405.625,631.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#960000").s().p("Ah1CZQA0gLAYgbQAYgbACg1IhOAAIAAgYIB6AAIAAgbIAaAAIAAAbIB9AAIAAAYIiqAAQgBAQgDATICHAAQgGBJgIAQQgJARgaAAQgSAAgYgDIgJgaQAlAEAMAAQAKAAAEgHQAEgIAEgrIhvAAQgXBDhQAQgAizCfQAVgWAMgkQALgkAAghIAAi7QCVACCLgWIAJAYQh9AUiRAAIAAASIEEAAIAABYIkEAAIAAA1QAAAogNApQgNApgZAagAhsgxIDpAAIAAgoIjpAAg");
	this.shape_7.setTransform(405.725,590.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#960000").s().p("ABtCaIj3APIgIgWIAxgCQAbgcAPgdIhoAAIAAgWIBGAAIAAh2QgcAVgtARIgRgVQBLgaAzg3IhqAAIAAgWIB5AAQANgSAIgTIAXAJQgGAQgIAMICpAAIAAAWIhpAAQA0A6BIATIgOAWQgogNgjgWIidAAIAAAXICiAAIAAAXIiiAAIAAAYICiAAIAAAVIiiAAIAAAbIDiAAIAAAWIi8AAQgSAfgSAYICYgIQgQgMgZgOIAVgNQAzAcAgAnIgVANQgLgPgKgHgAg8hKIB8AAQgXgUgQgWIguAAQgNATgaAXg");
	this.shape_8.setTransform(405.825,551);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#960000").s().p("Ag3CwIgKgZIAoAAQAHAAAEgFQAFgFAAgGIAAiHIhmAAIAAiKIBWAAQARgQAIgVIAYALQgJASgIAHIBtAAIAACLIhlAAIAAAYQAPAUAZAYQAigSAbgoIAUAPQgaAngjAUQAlAfBGASIgMAXQhqgegxhHIAABQQAAApgnAAgAhWgXICxAAIAAgkIixAAgAhWhRICxAAIAAgjIixAAgAi1CGQBggbAeg5IhfAAIAAgYIB7AAIAAAVQAAAGgLASQgMASgQAPQgQAOgYANQgYANgjAMg");
	this.shape_9.setTransform(405.875,510.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#960000").s().p("AiyCaQArgwAXhiIAYAOQgVBagxA8gAhhCeIAAgZIAaAAIAAhtIDfAAIAABtIAbAAIAAAZgABVCFIArAAIAAhVIgrAAgAATCFIAqAAIABhVIgrAAgAgvCFIAqAAIABhVIgrAAgAgzidIC3AAIAACZIi3AAgAgagcICGAAIAAhqIiGAAgAiwhBIARgUQAnAMAgAoIgSASQgYgfgugTgAgWg8QAxgMADg2IAYAGQgBANgEALQAdAQAXAWIgSATQgRgVgbgNQgVAZgYALgAiUiaIARgRQAuATAVAhIgVAUQgVgkgqgTg");
	this.shape_10.setTransform(405.75,470.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#960000").s().p("ABcB1IATgPQArAUAbAnIgSAPQgXgmgwgVgAgjChQA1gSAagpIAUAPQghArguAQgAhDCRQggAAAAgeIAAhLIgfAAIAAATIgaAAIAAiAIAZAAIAABVIAgAAIAAhyQgbAFgsACIgKgXQAsgCAlgGIAAg1IAZAAIAAAvQAbgFAagOIAQAVQgaANgrAKIAAB3IAgAAIAAhVIAaAAIAACAIgaAAIAAgTIggAAIAABGQAAALAMAAIATAAQAFAAADgEQADgEAEgbIAYALQgFAcgIAKQgIAKgSAAgAAMBaIAAjAIAwAAQAIgSAFgPIhJAAIAAgYICvAAIAAAYIhMAAQgEAOgJATIBBAAIAADAgAAkBCIBbAAIAAgjIhbAAgAAkAJIBbAAIAAghIhbAAgAAkgvIBbAAIAAggIhbAAg");
	this.shape_11.setTransform(405.725,430.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#960000").s().p("AiTCnIAAj2QgMAEgMABIgIgXQBFgIA1ghIAOASQgXAQgiAMIBaAAIAAg1IihAAIAAgWIFWAAIAAAWIifAAIAAA1IB0AAQgdgNg3gNIALgVQBDAOA6AlIgMAUIgTgMIAADWQAAASgGAGQgHAIgQAAIgjAAIgHgWIAkAAQAMAAAAgNIAAjJIhyAAIAADiIgWAAIAAjiIhyAAIAADtgAhxB5QAagOAQgVQgTgPgWgLIAOgPQAYALAPAMQAIgPAFgOIASAIQgFASgLARQAPAPALASIgSANQgJgQgLgLQgQATgZAQgAAWB1QAagPARgUQgUgQgWgKIAOgQQAXALAQANQAIgOAGgPIASAIQgHATgJAQQAOAPALARIgSAOQgIgQgMgMQgPAUgZAPgAhxAUQAagPAQgUQgTgPgWgLIAOgQQAWALARANQAIgOAFgPIASAIQgFASgLASQAPAPALAPIgSAPQgJgQgLgLQgQASgZARgAAWASQAagPARgTQgUgQgWgLIAOgQQAXALAQAOQAIgOAGgQIASAIQgHAUgJAPQAOAQALAQIgSAOQgIgQgMgLQgPASgZAQg");
	this.shape_12.setTransform(405.875,391.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#960000").s().p("AAPCwIAAiBIhIAAIAABeIgZAAIAAhlQgoAagqAQIgPgVQBjgoApgtIh8AAIAAgYICQAAQANgSAKgSIAWAKIgPAaICpAAIAAAYIi5AAQgUAXgfAZIBHAAIAAgiIAZAAIAAAiIBjAAIAABUQAAAggggBIgbAAIgIgWIAfAAQALAAAAgKIAAg8IhJAAIAACBgAiGhOQBJgJA7gdQg/gQgvgCIAPgUQBAAFA6AQQAegTAcgXIAVAOQgdAYgWAOQA5ATAoAbIgSATQg7gkgvgNQhCAohQALg");
	this.shape_13.setTransform(405.675,350.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#960000").s().p("AgKCwIAAjCIhfAAIAACZIgaAAIAAixIB5AAIAAg7IinAAIAAgYICmAAIAAgyIAYAAIAAAyIClAAIAAAYIilAAIAAA7IB4AAIAACEQAAAmghAAIgeAAIgJgYIAjAAQAMAAAAgMIAAhuIhfAAIAADCg");
	this.shape_14.setTransform(405.85,310.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#960000").s().p("ABECwIAAiAIg1AAIAABhIgZAAIAAh4IBOAAIAAgfIhCAAIAAiEIA1AAQAGgRADgTIAcAFQgDANgIARIBNAAIAACEIhBAAIAAAgIBOAAIAABQQAAApgggBIgVAAIgKgXIAXAAQAPAAAAgPIAAg7Ig1AAIAACAgAAcgdIBpAAIAAggIhpAAgAAchVIBpAAIAAgfIhpAAgAiqCMIBLgPIAAh1Ig2AAIAAgWIA2AAIAAgpIgjAAIgSATIgUgRQA+g1ARhFIAXAJIgEAPQApATAWAbIgSASQgSgXgjgTQgNAagTAYIBIAAIAAAYIggAAIAAApIAvAAIAAAWIgvAAIAABvIAwgKIAAAXIiIAegAiYAmIAUgKQATAdABAoIgVAGQgBgngSgagAg9BWQAQgZADgjIAVAIQgDAjgQAbg");
	this.shape_15.setTransform(404.75,270.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#960000").s().p("AiSCwIAAh+ICIAAIAAgWIhvAAIAAhzID2AAIAABzIhwAAIAAAWICJAAIAABbQAAAiglAAIgnAAIgIgWIAuAAQANAAAAgMIAAhFIhwAAIAAAiIA4gDQgJgMgGgEIAVgJQAYAWAPAdIgUALQgGgLgFgHIi1ALIgKgVIBigEIAAgkIhvAAIAABogAANAGIBWAAIAAgYIhWAAgAhgAGIBWAAIAAgYIhWAAgAANgoIBWAAIAAgYIhWAAgAhggoIBWAAIAAgYIhWAAgAA5hgIAAgbIhxAAIAAAbIgZAAIAAgaIhgAAIAAgXIBfAAIAAgeIAaAAIAAAeIBxAAIAAgeIAZAAIAAAeIBgAAIAAAWIhgAAIAAAbg");
	this.shape_16.setTransform(405.85,230.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#960000").s().p("AinCaQB/gSBDgdQgMgVgegVIAXgNQAcAUAMAZQBBgjAZgxIhqAAQgnAmhgAlIgUgTQB4gpBBhSIAVAMQgIAPgPAQIBsAAIAAAaQAAAFgTAaQgLAOgNANQgNANgUAOQgUAOgbANQgcANgZAIQgaAIgoAHIhNAOgAifAAQBUgSArgUQgNgSgdgRIAXgPQAXANAVAbQAugYAngnIhxAAQgkAZg4ATIgTgVQBggcAwg7IAWAMQgMARgMAKIB0AAIAAAaQhOBeixAkg");
	this.shape_17.setTransform(405.325,190.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#960000").s().p("Ag+CxIAAjGIDRAAIAACkQAAANgJAJQgKAJgPAAIgYAAIgJgZIAcAAQAGAAAEgEQAEgEAAgGIAAg4IglAAIAAA/IgZAAIAAg/IgkAAIAABHIgYAAIAAhHIglAAIAABigABUA3IAmAAIAAg0IgmAAgAAYA3IAkAAIAAg0IgkAAgAglA3IAlAAIAAg0IglAAgAiACxIAAjXQgMATgOAQIgZgPQA4g4AhhlIAWAKQgHATgOAhIgOAfIAAEDgAhjg2QArgSAkgiQAkggAQglIAWAJIgDAGQA3BHBKAhIgTAUQgagMgigbIAAARIh3AAIAAgRQghAZgfAQgAgNhSIBrAAQgmgigRgVQgSAbgiAcg");
	this.shape_18.setTransform(405.85,151);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#960000").s().p("AinCaQB/gSBDgdQgMgVgegUIAXgOQAcAVAMAXQBBgiAZgxIhqAAQgnAmhgAkIgUgSQB4gpBBhSIAVANQgIAOgPAQIBsAAIAAAaQAAAFgTAaQgLAOgNANQgNANgUAOQgUAOgbANQgcANgZAIQgaAIgoAHIhNAOgAifAAQBUgSArgUQgNgSgdgRIAXgPQAXANAVAbQAugYAngnIhxAAQgkAZg4ATIgTgVQBggcAwg7IAWAMQgMAQgMAKIB0AAIAAAbQhOBeixAkg");
	this.shape_19.setTransform(405.325,110.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#960000").s().p("AhRA2QgagVAAgiQAAgeAQgSQARgTAbgCIACAbQgUADgKAMQgKALAAAQQAAASAOANQAOANAYAAQAXAAAMgMQANgNAAgUQAAgMgGgLQgGgKgIgGIADgZIBuAVIAABqIgaAAIAAhVIg5gLQANATAAAUQAAAcgTAUQgTATgeAAQgeAAgVgRg");
	this.shape_20.setTransform(366.175,672.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#960000").s().p("AhqBEIBBgZIAAhYIhBgZIAAgdIDVBSIAAAdIjVBZgAgSAjIA6gXQAcgKARgFQgVgEgUgHIg+gXg");
	this.shape_21.setTransform(366.475,654.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#960000").s().p("AhrAoIAAgbICnAAQgJgJgJgPQgJgPgFgNIAaAAQAKAXAPAQQAPAQAOAHIAAARg");
	this.shape_22.setTransform(366.525,634.675);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#960000").s().p("AhNBjQgRgVgIgWQgIgWAAgYQAAgeAOgaQANgaAZgNQAagNAgAAQAeAAAbANQAcANANAZQANAYAAAfQAAAYgIASQgHATgNALQgOALgWAFIgHgaQAQgEAKgIQAJgHAGgNQAGgNgBgRQAAgSgFgOQgHgPgJgIQgJgJgMgFQgUgIgXAAQgcAAgUAKQgTAKgJATQgKATAAAUQAAASAHASQAIARAIAKIAnAAIAAhAIAZAAIAABbg");
	this.shape_23.setTransform(366.5,607.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#960000").s().p("AhJA+QgRgJgJgPQgKgPABgTQAAggAYgVQAYgVA3AAQA+AAAcAXQAZAUgBAhQABAZgOARQgPAQgZADIgCgaQAPgEAIgGQALgLAAgQQAAgLgHgKQgJgMgSgHQgRgHgggBQAOAKAHAOQAIANAAAOQAAAbgUASQgSATggAAQgTAAgSgJgAg+giQgMAGgHAKQgGALAAAKQAAARAOAMQANAMAXAAQAWAAANgMQAMgMAAgSQAAgRgMgMQgMgNgWAAQgNAAgNAGg");
	this.shape_24.setTransform(366.35,587.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#960000").s().p("AhqBDIAAiFIDVAAIAAAdIi8AAIAABog");
	this.shape_25.setTransform(366.475,571.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#960000").s().p("AAGAQQgPAAgLgGQgKgGgFgMIALgHQAEAJAHADQAHADAMABIAAgOIAeAAIAAAdg");
	this.shape_26.setTransform(355.125,549.775);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#960000").s().p("AhqBUIAAgcICohxIioAAIAAgbIDVAAIAAAeIinBvICnAAIAAAbg");
	this.shape_27.setTransform(366.475,534.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#960000").s().p("Ag6BZQgagNgNgYQgNgYAAgcQAAgdAPgYQAOgYAZgMQAagNAcAAQA0AAAfAdQAeAdAAAsQAAAegOAYQgPAYgZAMQgZANggAAQggAAgagOgAg/g0QgXAVAAAfQAAAgAXAVQAWAUApAAQAaAAAUgIQATgJALgRQAKgSAAgVQAAgdgUgWQgVgVgwAAQgmAAgWAUg");
	this.shape_28.setTransform(366.5,512.475);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#960000").s().p("AAGAQQgPAAgLgGQgKgGgFgMIALgHQAEAJAHADQAHADAMABIAAgOIAeAAIAAAdg");
	this.shape_29.setTransform(355.125,488.125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#960000").s().p("AhOBpIAAgaIBhAAQAPAAAHgCQAHgDAEgHQAFgHAAgJQgBgQgKgLQgLgLgYAAIhZAAIAAgZIBkAAQARAAAJgGQAJgHAAgPQgBgLgFgJQgGgKgMgEQgLgEgVAAIhPAAIAAgaICaAAIAAAXIgWAAQALAHAIANQAGAMAAAPQAAASgGALQgIAKgNAEQAbATAAAdQAAAXgMANQgNAMgaAAg");
	this.shape_30.setTransform(363.7,471.575);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#960000").s().p("AhNAsQAIgEALgBQgMgPgFgOQgFgMAAgQQAAgZAMgOQANgOATAAQAMAAAJAGQAKAEAFAJQAFAIADALIAEAXQAEAfAFAPIAHAAQAQABAHgIQAJgKAAgTQAAgTgHgIQgHgJgQgEIADgaQARADAKAIQAKAIAGAQQAFAPAAATQAAAUgEAMQgFANgHAFQgHAGgLADQgHACgRgBIgjAAQgkABgKABQgKACgJAEgAg1gjQgHAJAAAPQAAAOAHAMQAHAMALAGQAJADASAAIAIAAQgFgOgEgcQgCgQgDgGQgDgHgGgEQgFgEgHAAQgLABgHAHg");
	this.shape_31.setTransform(363.525,450.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#960000").s().p("AhqA/IAAgaIBiAAQATAAAJgJQAJgIAAgQQAAgLgGgKQgGgKgKgFQgKgEgSAAIhVAAIAAgaIDVAAIAAAaIhNAAQAWASAAAbQAAASgHANQgHAMgMAGQgMAFgWAAg");
	this.shape_32.setTransform(366.475,433.975);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#960000").s().p("AhqAgIBPgzIgSgSIg9AAIAAgbIDVAAIAAAbIh5AAIA+A9IAAAjIg4g7IhiBAg");
	this.shape_33.setTransform(366.475,419.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#960000").s().p("AAvAhQAFgJAAgKQABgJgGgGQgFgHgKgDQgNgEgRAAIhQAAIAAgaICaAAIAAAXIgYAAQARAKAGAHQAEAHAAAJQABANgJAOg");
	this.shape_34.setTransform(363.7,406.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#960000").s().p("AhNAsQAIgEALgBQgMgPgFgOQgFgMAAgQQAAgZAMgOQANgOATAAQAMABAJAFQAKAEAFAJQAFAJADAKIAEAXQAEAfAFAPIAHAAQAQAAAHgGQAJgLAAgTQAAgTgHgIQgHgJgQgEIADgaQARAEAKAHQAKAJAGAPQAFAPAAATQAAAUgEAMQgFANgHAFQgHAGgLADQgHABgRAAIgjAAQgkAAgKACQgKACgJAEgAg1gjQgHAJAAAPQAAAOAHAMQAHAMALAGQAJADASAAIAIAAQgFgOgEgbQgCgRgDgHQgDgGgGgEQgFgEgHAAQgLABgHAHg");
	this.shape_35.setTransform(363.525,392.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#960000").s().p("AhqBmIAAgbICyAAIiyg+IAAgZIC2g+Ii2AAIAAgbIDVAAIAAAqIiXAzIgfAJIAiAMICUAzIAAAmg");
	this.shape_36.setTransform(366.475,371.425);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#960000").s().p("AAGAQQgPAAgLgGQgKgGgFgMIALgHQAEAJAHADQAHADAMABIAAgOIAeAAIAAAdg");
	this.shape_37.setTransform(355.125,346.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#960000").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape_38.setTransform(357.25,338.125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#960000").s().p("AgGBHIAAhzQgZACgOANQgOANAAATQAAAOAIAKQAIALAQAGIgDAbQgYgHgNgRQgNgSAAgbQAAghAVgUQAVgUAmAAQAmAAAWAUQAVAVAAAfQAAAfgVAUQgVAUgnAAIgGgBgAAPAsQAUgCAJgIQAQgNAAgUQAAgRgNgMQgMgNgUgBg");
	this.shape_39.setTransform(363.525,325.475);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#960000").s().p("AhNAMIAAgXICbg7IAAAbIhcAiIggAJIAeAKIBeAiIAAAbg");
	this.shape_40.setTransform(363.525,309.725);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#960000").s().p("AhqBEIBBgZIAAhZIhBgYIAAgeIDVBTIAAAeIjVBXgAgSAiIA6gWQAcgLARgDQgVgFgUgHIg+gXg");
	this.shape_41.setTransform(366.475,292.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#960000").s().p("AhOA/IAAgaIBdAAQAQAAAIgDQAIgEAFgHQAEgIABgLQAAgQgLgMQgLgMgeAAIhTAAIAAgaICaAAIAAAYIgWAAQAZAQAAAgQAAAOgEAMQgGALgIAHQgIAFgLADQgIABgSAAg");
	this.shape_42.setTransform(363.7,265.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#960000").s().p("AgGBHIAAhzQgZACgOANQgOANAAATQAAAOAIAKQAIALAQAGIgDAbQgYgHgNgRQgNgSAAgbQAAghAVgUQAVgUAmAAQAmAAAWAUQAVAVAAAfQAAAfgVAUQgVAUgnAAIgGgBgAAPAsQAUgCAJgIQAQgNAAgUQAAgRgNgMQgMgNgUgBg");
	this.shape_43.setTransform(363.525,248.725);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#960000").s().p("AhoBDIAAgYIATAAQgXgPAAgcQAAgSAKgQQALgPASgJQATgIAXAAQAYAAARAHQAUAIAJAQQAKAPAAATQAAANgFALQgHALgJAHIBNAAIAAAagAhIgbQgPANABAQQgBARAOAMQAPAMAdAAQAfAAAPgMQAPgMAAgSQAAgRgPgMQgOgLgeAAQgdAAgQAMg");
	this.shape_44.setTransform(366.3,231.525);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#960000").s().p("AAvAhQAFgJAAgKQABgJgGgGQgFgHgKgDQgNgEgRAAIhQAAIAAgaICaAAIAAAXIgYAAQARAKAGAHQAEAHAAAJQABANgJAOg");
	this.shape_45.setTransform(363.7,219.925);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#960000").s().p("AhNAsQAIgEALgBQgMgPgFgNQgFgNAAgPQAAgaAMgOQANgNATAAQAMAAAJAEQAKAGAFAIQAFAJADAKIAEAXQAEAgAFAPIAHAAQAQgBAHgGQAJgLAAgTQAAgSgHgJQgHgJgQgFIADgZQARAEAKAHQAKAJAGAPQAFAPAAATQAAAUgEANQgFAMgHAGQgHAGgLACQgHACgRAAIgjAAQgkAAgKABQgKABgJAGgAg1giQgHAHAAAQQAAAOAHAMQAHAMALAFQAJAFASAAIAIAAQgFgPgEgbQgCgQgDgIQgDgGgGgEQgFgEgHABQgLgBgHAJg");
	this.shape_46.setTransform(363.525,205.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#960000").s().p("AhqBPIAAgbICiguIAagGIgagGIiigtIAAgdIDVg5IAAAdIiLAhQgWAFgWAEIAnAJICQApIAAAiIhrAeQgpAMgjAFIAvALICIAhIAAAdg");
	this.shape_47.setTransform(366.475,182.925);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#960000").s().p("Ag8A+QgXgHgNgQQgMgPAAgYQAAgeAVgSQAbgVA8AAQAmAAAXAIQAXAIANAPQAMAQAAAWQABASgIAMQgGANgOAJQgNAIgSAFQgTAFggAAQglAAgXgIgAhGgeQgRANAAARQAAASARAMQASANA0AAQA1AAASgNQARgMAAgSQAAgSgQgKQgTgOg1AAQg0AAgSAMg");
	this.shape_48.setTransform(366.35,151.95);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#960000").s().p("Ag8A+QgXgIgNgPQgMgPAAgYQAAgeAVgSQAbgVA8AAQAmAAAXAIQAXAHANAQQAMAQAAAWQABASgIANQgGANgOAIQgNAIgSAFQgTAFggAAQglAAgXgIgAhGgdQgRAMAAARQAAASARANQASAMA0AAQA1AAASgMQARgNAAgSQAAgRgQgLQgTgOg1AAQg0AAgSANg");
	this.shape_49.setTransform(366.35,135.25);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#960000").s().p("AhRA2QgagVAAgiQAAgeAQgSQARgTAbgCIACAbQgUADgKAMQgKALAAAQQAAASAOANQAOANAYAAQAXAAAMgMQANgNAAgUQAAgMgGgLQgGgKgIgGIADgZIBuAVIAABqIgaAAIAAhVIg5gLQANATAAAUQAAAcgTAUQgTATgeAAQgeAAgVgRg");
	this.shape_50.setTransform(366.175,118.675);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#960000").s().p("AhaAzQgSgTAAggQAAgfASgTQATgUAcAAQAVAAAOALQAOALAEATQAHgQAKgIQAMgIAPAAQAYAAAPARQARARgBAbQAAAcgQARQgQARgYAAQgOAAgMgIQgKgIgHgQQgGAUgNALQgOAKgVAAQgbAAgTgUgAhBglQgLAFgFALQgGAKAAALQAAATAMANQAMAMATAAQATAAANgNQAMgMAAgTQAAgSgMgMQgMgMgTAAQgLAAgLAFgAAegYQgKAKAAAOQAAAQAKAJQAKAKANAAQAPAAAKgKQAKgKAAgPQAAgOgJgKQgKgKgOAAQgPAAgKAKg");
	this.shape_51.setTransform(366.35,101.875);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#960000").s().p("AAKCEIAAhSIg5AAIAAA6IgTAAIAAhMIBMAAIAAgcIgvAAIAAgrIgzAAIAABcQAAAtgdAiIgQgLQAagdAAgmIAAiiIBrAAIAAgXIAUAAIAAAXIBqAAIAAASIjXAAIAAAhIA0AAIAAgYIATAAIAAAYIBMAAIAAgYIASAAIAAAYIA6AAIAAASIg5AAIAAArIgwAAIAAAcIBRAAIAAAwQAAAMgIAIQgIAHgNAAIgTAAIgFgSIAYAAQAJAAAAgJIAAgeIg9AAIAABSgAgSgNIBMAAIAAgaIhMAAg");
	this.shape_52.setTransform(9.7,96.075);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#960000").s().p("AiHBtQBAgcAkgoQAigpABgsIAAg/Ig2AAIAAgSIBHAAIAABAQgBAsAgAsQAfAtA5AkIgOARQgkgTgfglQghgkgLghQgQArgfAdQggAeg3AYg");
	this.shape_53.setTransform(9.85,66.65);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#960000").s().p("AAbCEIgHgTIAhAAQAJAAAAgIIAAhJIhnAAIAAgTIBmAAIAAgZIATAAIAAAZIAvAAIAAATIgvAAIAABJQAAAbgYAAgAgXA3IAOgMQAZAMARAeIgPANQgSgfgXgMgAhGBhIAAgUIglAAIAAAUIgTAAIAAjKIBLAAIAADKgAhrA7IAlAAIAAg/IglAAgAhrgWIAlAAIAAhAIglAAgAgogVIAAgTIBFAAIAAgoIg6AAIAAgTIA5AAIAAggIATAAIAAAgIA6AAIAAATIg6AAIAAAoIBGAAIAAATg");
	this.shape_54.setTransform(10.425,36.075);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#960000").s().p("AiHB0QBHgyAahIIASAIQggBRhDAxgAAZAEIAQgLQA8AxAjBNIgSAMQgjhRg6gugAh/hBIB3AAIAAhCIATAAIAABBIB1AAIAAATIj/ABg");
	this.shape_55.setTransform(9.775,6.05);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#960000").s().p("ABHBeQgOgUgIgbQgSA3g+AeIgMgQQA4gZAQgsIg8AAIAAgRIA/AAQAEgXgBgQIgdAAQgKATgOAMIgRgKQAbgVAJgnIARAFIgFARIBfAAIAAARIg1AAQABAWgEARIBIAAIAAARIg4AAQASA0AyARIgNAQQgmgSgOgUgAhmCEIAAiaQgGANgKANIgRgJQAjgxAVhOIASAIQgEAQgKAZIgIAXIAADAgAg+BQIAAigIASAAIAACggAgfg3IAAgRIBtAAIAAgdIhcAAIAAgSIBvAAIAAAuIAcAAIAAASg");
	this.shape_56.setTransform(41.85,96.05);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#960000").s().p("AgqCEIgHgTIAYAAQAHAAAAgHIAAhxIASAAIAABwQAAARgFAFQgGAFgLAAgAAKAoIATgFQAcAkAEAiIgTAGQgFgkgbgjgAhpBkQAhgXAUguIARAIQgPArgnAdgAAvAjIAUgGQAgAjALAoIgTAFQgLgpghghgAiGAkQA3gWAYggIhAAAIAAgTIBFAAIAAgmIgyAAIAAgTIAyAAIAAglIATAAIAAAlIBCAAIAAglIAUAAIAAAlIA4AAIAAATIg4AAIAAAmIBGAAIAAATIhCAAQAgArAsALIgOASQg5gWgbgyIhGAAQgaAsg/AcgAgfglIBDAAIAAgmIhDAAg");
	this.shape_57.setTransform(41.8,66.075);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#960000").s().p("AAbCEIgHgTIAhAAQAJAAAAgIIAAhJIhnAAIAAgTIBmAAIAAgZIATAAIAAAZIAvAAIAAATIgvAAIAABJQAAAbgYAAgAgXA3IAOgMQAZAMARAeIgPANQgSgfgXgMgAhGBhIAAgUIglAAIAAAUIgTAAIAAjKIBLAAIAADKgAhrA7IAlAAIAAg/IglAAgAhrgWIAlAAIAAhAIglAAgAgogVIAAgTIBFAAIAAgoIg6AAIAAgTIA5AAIAAggIATAAIAAAgIA6AAIAAATIg6AAIAAAoIBGAAIAAATg");
	this.shape_58.setTransform(42.425,36.075);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#960000").s().p("AiFB2IAAgTIBPAAIAThsIg8AAIAAgTIA/AAIANhHIheAAIAAgSIDkAAIAAASIhzAAIgLBHIBlAAIgPB/IA7AAIAAATgAghBjIBYAAIAOhsIhUAAg");
	this.shape_59.setTransform(41.8,5.925);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#960000").s().p("ABaCEIAAgTIhbAAIAAATIgTAAIAAhzICBAAIAABzgAgBBgIBbAAIAAgXIhbAAgAgBA3IBbAAIAAgVIhbAAgAiGB2QAkgZASgkQgOgLgJgEIgFALIgPgIQAWgyAHg0IgdAAIAAgSIAgAAQAIglABgTIATAEQgCAXgHAcIAoAAQgFBPgUAwQAQALAQAPIgOAPQgLgOgPgKQgWAogiAYgAhgAZQALAGANAJQAOgcAHhGIgYAAQgJAzgMAggABJgEQgTgSgIgfIgyAAIAAApIAzgNIAAASIhKATIgHgPIAMgEIAAhoQBRgBAtgTIAMAPQgbAKgfAGQgBAMACARIA+AAIAAASIg5AAQAIAXAOAMQAOAMAGAAQAFAAABgDQACgEAEgcIARAIQgDAggIAGQgHAIgIAAQgRAAgTgRgAgEheIAAAXIAtAAQgCgMABgOQgTADgZAAg");
	this.shape_60.setTransform(73.8,96.075);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#960000").s().p("Ag9CDIAAgTIgnAAIAAATIgTAAIAAhjIBNAAIAABjgAhkBeIAmAAIABgsIgnAAgAgiB5IAAgSIA5AAQgIgQgPgQIARgJQARAUAKAVIAFAAQAOgTAHgVIASAIQgHARgLAOIA3AAIAAATgAgHA1IAAg/IBnAAIAAA/gAALAjIBCAAIAAgcIhCAAgAh3ANIAAgRIBMAAIAAARgABQgsIAAAOIhHAAIAAgNQgLAUgZAUIgOgNQAYgTAMgPQgJgPgQgMIALgMQANAIALAOQAIgNAEgWIgyAAIAAgRIBHAAQgFAsgSAcIA9AAQgcgpgEgmIARgEQACARAHAQQAOgMAIgOIAOAMQgKAQgTAOQAEAJAHAJQAPgNAJgMIAOALQgOATgOAJQAWAYAOAJIgMANQgZgPgRgagAh3grIBMAAIAAASIhMABgAiFhRIBiAAIAAASIhiAAgAh0h2IBIAAIAAASIhIAAg");
	this.shape_61.setTransform(73.85,66.05);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#960000").s().p("AAbCEIgHgTIAhAAQAJAAAAgIIAAhJIhnAAIAAgTIBmAAIAAgZIATAAIAAAZIAvAAIAAATIgvAAIAABJQAAAbgYAAgAgXA3IAOgMQAZAMARAeIgPANQgSgfgXgMgAhGBhIAAgUIglAAIAAAUIgTAAIAAjKIBLAAIAADKgAhrA7IAlAAIAAg/IglAAgAhrgWIAlAAIAAhAIglAAgAgogVIAAgTIBFAAIAAgoIg6AAIAAgTIA5AAIAAggIATAAIAAAgIA6AAIAAATIg6AAIAAAoIBGAAIAAATg");
	this.shape_62.setTransform(74.425,36.075);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#960000").s().p("AiEBlIAAgVIEJAAIAAAVgAhVAGIAAgSICqAAIAAASgAhmhkIDNAAIAAAUIjNAAg");
	this.shape_63.setTransform(73.8,6.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#960000").s().p("AAoB/IgGgVQAlAGAKAAQANAAAFgKQAFgKADg2QADg0AAg2IhMAAQgSAngUAWIgRgLQAUgSANgfQAOggAEggIASAFQgEAYgFAQIBZAAQgCCbgHAfQgGAggdAAQgRAAgbgFgAhNCEIAAhnIgqACIgEgSIAPAAQAcgjADgHQgNgOghgPIALgQIAKAGQAUggAMgfIASAJQgNAfgWAgQAJAFALAKQAPgWAMgZIASAJQgcA0glArIAwgBQgDgMgJgMIAQgGQARAVAHAhIgSAFQgBgGgDgIIgZACIAABngAh/BwQAPggAEggIARAFQgBAbgRAogAgtA1IARgFQALAXAFAnIgSAEQgDgfgMgegAAMgIIAPgKQAhAWAQAiIgQANQgQgkgggXg");
	this.shape_64.setTransform(44.475,481.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#960000").s().p("ABIBHQgYAmgnAXIgLgPQAmgYAagpQgRgggFgpQgIARgGAKIgQgKQARgdAJgaQAIgaAEguIASADQgBAdgIAcIBKAAIAAASIgQAAQgHA7gZAvQATAlAjAdIgPANQghgggRgdgABJAgQATgnAFguIgsAAQAFAwAPAlgAhEB7IgFgWQAfAJAGAAQAFAAAEgDQAEgCAEgVQAEgWADghQACgiAAgWIhQAAQgMAbgUAVIgOgMQAegeAJgwIAOAFIAAgVIgtAAIAAgSIAsAAIAAgcIATAAIAAAcIAcAAIAAgcIATAAIAAAcIAlAAIAAASIglAAIAAAaIgTAAIAAgaIgbAAIAAAZIgQAAIgEAPIBbAAQAAAtgFAzQgDAzgIANQgJANgSAAQgJAAgXgFgAhnBPIAAhPIBBAAIAABPgAhVA+IAdAAIABguIgeAAg");
	this.shape_65.setTransform(45.05,451.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#960000").s().p("AhTCEIAAhnIgrACIgEgSIAPAAQAcgjADgHQgNgOgggPIALgQIAJAGQAVgfAMggIASAJQgOAfgWAgQAJAFAMAKQAPgXAMgYIARAJQgbA0gmArIAzgCQgDgJgJgPIAQgGQAOAWAKAgIgTAGQgBgIgCgGIgbACIAABngAiGBwQAQggAEgfIAQADQgBAbgRApgAgSB0IAAgSIBAAAIAAjHIg5AAIAAgSICHAAIAAASIg7AAIAADHIBGAAIAAASgAg0AyIARgEQAKAPAJAfIgSAEQgFgXgNgXg");
	this.shape_66.setTransform(-2.625,409.15);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#960000").s().p("AgJCEIAAgcIh9AAIAAgPIB9AAIAAgPIhiAAIAAgNIBiAAIAAgRIhQAAIAAgNIBQAAIAAgOIh5AAIAAgOIB5AAIAAgNIhRAAIAAgOIBQAAIAAgOIASAAIAAAOIBXAAIAAAbIAgAAIAAAOIggAAIAAAbIhXAAIAAAQIBgAAIAAAOIhgAAIAAAPIB8AAIAAAPIh7gBIAAAdgAAIAfIBEAAIAAgOIhEAAgAAIADIBEAAIAAgOIhEAAgAiDgXQAVgLABgWIAAhAQAwAAA4gLIAHAOQgyAJgrADIAAAMIBXAAIAAAtIhYAAQgFAXgTAOgAhbg9IBEAAIAAgSIhEAAgABAgvQgSALgcAEIgLgQQAbgCARgIIgUgXQgIAOgJAIIgNgMQAbgWAJgmIARAHQgCAJgFAGIBGAAIAAAPIgPAAQgHAYgQANQAXAOAhAEIgLARQghgIgbgRgABBhDQAOgLAGgQIgrAAQAMASALAJg");
	this.shape_67.setTransform(-2.3,380.175);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#960000").s().p("AgCAzIgEAAQgYAyhbAZIgNgRQBTgTAXgnIhYAAIAAgSIBfAAQAEgRACgYIhMAAIAAhkIATAAIAABRICaAAIAAA8IAjAAIAAASIhiAAQAlAvBPALIgLARQhbgOgjg9gAgBAhIBAAAIAAgqIg7AAQgBASgEAYgAgtg0IAAhJIB9AAIAABJgAgbhHIBXAAIABgkIhYAAg");
	this.shape_68.setTransform(-2.425,351.725);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#960000").s().p("AhwB+IAAjoIgUAAIAAgTIEBAAIAAATIjaAAIAADGIDiAAIAAATIjiAAIAAAPgAAdBKIAAhNIBNAAIAABNgAAvA4IAoAAIAAgrIgoAAgAhFBKIAAhNIBNAAIAABNgAgyA4IAnAAIAAgrIgnAAgAgwgXIAAhAICDAAIAABAgAgegoIBfAAIAAgeIhfAAg");
	this.shape_69.setTransform(-2.5,322.75);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#960000").s().p("AAHB8QAjglgDhRIASACQAAAggEAfQAJAOAKAIIAAh0IgcAAIAAgTIBTAAQAAAegGAWIgRgDQAEgPAAgQIgSAAIAAAyIAgAAIAAASIggAAIAAA6QAEACAHAAIAjAAIgHATIgbAAQggAAgXgfQgGAUgRAUgAhTB5QAtgqAAg+IAAhOIgXAAIAAgSIAjAAIAAg0IASAAIAAA0IAhAAIAAASIgtAAIAAAoIAnAAIAAAcQAAAmgDAbQgCAbgDAHQgDAIgHAFQgGAFgLAAQgGAAgJgDIgFgUQAIADAIAAQAJAAAEgEQAEgEACgdQACgdgBgpIgUAAIAAARQAABJgwAtgAiHBEIAlgOIAAhAIgaAAIAAgTIAaAAIAAg5IgeAAIAAgTIBLAAIAAATIgbAAIAAA5IAaAAIAAATIgaAAIAAA4IAcgLIAAAUIhGAcgAANgmQAegkAGg5IASAFQgBARgFARIBGAAIAAASIhLAAQgLAdgQARg");
	this.shape_70.setTransform(29.525,382.175);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#960000").s().p("AhuCEIAAheIBnAAIAAgRIhTAAIAAhWIC3AAIAABWIhTAAIAAAQIBmAAIAABEQAAAagbAAIgdAAIgHgQIAjAAQAJAAAAgJIAAg0IhTAAIAAAaIAqgDQgHgJgFgDIAQgGQASAQALAWIgOAIQgFgJgDgFIiJAIIgHgPIBKgDIAAgbIhTAAIAABOgAAKAEIBAAAIAAgRIhAAAgAhHAEIBAAAIAAgRIhAAAgAAKgeIBAAAIAAgSIhAAAgAhHgeIBAAAIAAgSIhAAAgAArhIIAAgUIhVAAIAAAUIgTAAIAAgUIhIAAIAAgRIBIAAIAAgWIASAAIAAAWIBWAAIAAgWIATAAIAAAWIBIAAIAAARIhIAAIAAAUg");
	this.shape_71.setTransform(29.55,352.175);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#960000").s().p("AhwB+IAAjoIgUAAIAAgTIEAAAIAAATIjZAAIAADGIDiAAIAAATIjhAAIAAAPgAAcBKIAAhNIBOAAIAABNgAAvA4IAoAAIAAgrIgoAAgAhEBKIAAhNIBLAAIAABNgAgyA4IAoAAIAAgrIgoAAgAgwgXIAAhAICDAAIAABAgAgdgoIBdAAIAAgeIhdAAg");
	this.shape_72.setTransform(29.5,322.75);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#960000").s().p("AgcCEIAAj7IBHAAIAABbIg1AAIAACggAgKgrIAkAAIAAgXIgkAAgAgKhSIAkAAIAAgWIgkAAgAiAB3QAhgbARggQgHgGgJgGIgEAHIgPgHQAPgtAFg1IgYAAIAAgSIAYAAQADgnAAgYIASABQAAAZgCAlIAnAAQABBHgWA2QAPAPAIAOIgNAOQgLgRgIgJQgUAigdAXgAhZAeQAHAEAMAJQAQgjABg6IgWAAQgFAvgJAhgABXCAIgGgQIAVAAQAKAAAAgJIAAiDIg1AAIAAhbIBGAAIAADgQAAAXgZAAgABLgrIAlAAIAAgXIglAAgABLhSIAlAAIAAgWIglAAgAAqByIAAg/QgNAYgaASIgJgLQAjgdAJghIgmAAIAAgQIAqAAIAAgWIARAAIAAAWIApAAIAAAQIgpAAIAAAHQAbASAVAfIgPAKQgNgYgUgOIAABCg");
	this.shape_73.setTransform(60.9,412.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#960000").s().p("AgIB/IAAgyIh9AAIAAgRIB9AAIAAgNIARAAIAAANIB9AAIAAARIh9gBIAAAzgAAuAgQgOAMgOAGIgOgNQAhgHALgeIAPAIIgHALQAcAGAYARIgMAOQgXgSgbgGgAhsAnQAsgHALggIAPAHQgCAGgEAEQATAGASANIgKAOQgOgPgWgGQgRAQgcAKgAhrgCIAAgRIBiAAIAAgOIASAAIAAAOIBjAAIAAARgAh5gsQAwgIAggTIAHAQQgiATgvAIgABdggIAAhNIhYAAIAAgRIBqAAIAABegAAEg1QArgDAcgQIAHAQQgcAOgrAFgAgXgnIAAhGIhgAAIAAgRIByAAIAABXgAh5hPQAvgGAhgSIAHAQQgkATgtAFgAAEhUQApgDAegQIAHAQQgdAOgqAFg");
	this.shape_74.setTransform(61.6,382.675);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#960000").s().p("AgICEIAAhDIhnAAIAAgSIBnAAIAAgvIh9AAIAAgSIBcAAQgNgbgRgUIASgHQAUAYAMAeIApAAQAXghAGgYIAUAHQgIAYgSAaIBbAAIAAASIh9AAIAAAuIBnAAIAAATIhmAAIAABDgAh3hiIBuAAIAAghIASAAIAAAhIBtAAIAAASIjtABg");
	this.shape_75.setTransform(61.525,352.175);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#960000").s().p("AhCBzQAggJARgVQARgVAAgzIgpAAIAAhwQAggLAcgUIANANQgUAQgiAOIAAAcIAtAAIAAATIgtAAIAAAkIByAAIAAgkIguAAIAAgSIAuAAIAAgkIgyAAIAAgSIBFAAIAAB9IgrAAIAABUQAAAIAIAAIAVAAQAJAAADgIQAEgJAFgbIASAHQgFAkgIAKQgHAJgSAAIgZAAQgYAAAAgXIAAhXIgfAAQAAAwgNAaQgNAagtATgAhcCEIAAibQgKAQgSAPIgPgLQA1g4AShIIAQAIQgEASgKAbIgKAaIAAC4g");
	this.shape_76.setTransform(61.475,322.125);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#960000").s().p("AgtBvQA1gjAAhIIAAiBIBrAAIAADaQAAAbgaAAIgaAAIgHgSIAgAAQAIAAAAgJIAAhBIhGAAQgHA+gyAkgAAbALIBFAAIAAg0IhFAAgAAbg7IBFAAIAAgwIhFAAgAhyBXIAAjIIBYAAIAADCIgTAAIAAgQIgyAAIAAAWgAhfAuIAyAAIAAg9IgyAAgAhfghIAyAAIAAg+IgyAAg");
	this.shape_77.setTransform(92.975,382.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#960000").s().p("AhWCEIAAiqIgvAAIAAgTIAvAAIAAg6IAUAAIAAA6IAuAAIAAhKIAUAAIAABKIA1AAIAAhKIATAAIAABKIA+AAIAAATIg9AAIAABZIhcAAIAAhZIgvAAIAACDIC3AAIAAATIi2AAIAAAUgAAAAgIA1AAIAAhGIg1AAg");
	this.shape_78.setTransform(93.55,352.175);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#960000").s().p("AhCBzQAggJARgVQARgVAAgzIgpAAIAAhwQAggLAcgUIANANQgUAQgiAOIAAAcIAtAAIAAATIgtAAIAAAkIByAAIAAgkIguAAIAAgSIAuAAIAAgkIgyAAIAAgSIBFAAIAAB9IgrAAIAABUQAAAIAIAAIAVAAQAJAAADgIQAEgJAFgbIASAHQgFAkgIAKQgHAJgSAAIgZAAQgYAAAAgXIAAhXIgfAAQAAAwgNAaQgNAagtATgAhcCEIAAibQgKAQgSAPIgPgLQA1g4AShIIAQAIQgEASgKAbIgKAaIAAC4g");
	this.shape_79.setTransform(93.475,322.125);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#960000").s().p("AEFFgIAAgzIhIAAIAAAzIgwAAIAAk8ICnAAIAAE8gAC8D/IBJAAIAAitIhJAAgAAuFgIAAgzIhEAAIAAAzIgwAAIAAk8ICjAAIAAE8gAgWD/IBEAAIAAitIhEAAgAlQFgIAAqfIEBAAIAAAxIhiAAIAACGIBQAAIAADbIhQAAIAAChIBYAAIAAAxIjGAAIAAA7gAkgD0IBAAAIABihIhBAAgAkgAkICPAAIABh8IiQAAgAkgiIIBAAAIABiGIhBAAgAgbgNIAAioIElAAIAACogAAVg8IDEAAIAAhLIjEAAgAh7i9QBhhDAahfIAxAPQgIAhgPAWIE3AAIAAAvIlRAAQgiAwgzAgg");
	this.shape_80.setTransform(163.675,106.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#960000").s().p("AlpEvQEPhMAAjpIjVAAIAAgzIEZAAIAAklIAyAAIAAEkIEZAAIAAAzIjNAAIAAEFQAAAKAIAHQAHAIAKAAICEAAQATAAANglQAOglADgmIA0ARQgRCRhAgBIicAAQgeAAgUgSQgUgTAAghIAAkJIhcAAQgDEKkfBdgABsiEQBahUAmhTIAsAaQgrBahZBSgAkhkKIAtgbQBFA7BEBlIgsAeQg/hlhLg+g");
	this.shape_81.setTransform(162.075,26.65);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#960000").s().p("ABHBeQgPgUgHgbQgSA3g+AfIgMgRQA4gYAQgtIg8AAIAAgSIA/AAQAEgVAAgRIgeAAQgKATgOAMIgRgKQAcgVAIgmIARAEIgFAQIBfAAIAAASIg1AAQAAAWgCAQIBIAAIAAASIg5AAQATA0AxARIgMARQgngTgOgUgAhmCFIAAiaQgGANgJANIgRgLQAigwAVhOIASAHQgEARgKAZIgIAXIAADBgAg+BQIAAihIASAAIAAChgAgfg3IAAgRIBuAAIAAgdIhdAAIAAgSIBvAAIAAAuIAcAAIAAASg");
	this.shape_82.setTransform(249.15,188.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#960000").s().p("AgpCEIgHgTIAXAAQAHAAAAgHIAAhxIASAAIAABwQAAARgFAFQgFAFgMAAgAAKAoIAUgFQAaAkAFAiIgTAGQgFgkgbgjgAhpBkQAhgXAUguIAQAIQgPArgmAdgAAwAjIATgGQAhAjALAoIgUAFQgMgpgfghgAiHAkQA4gWAXggIg/AAIAAgTIBGAAIAAgmIg0AAIAAgTIA0AAIAAglIATAAIAAAlIBBAAIAAglIATAAIAAAlIA5AAIAAATIg5AAIAAAmIBHAAIAAATIhCAAQAhArArALIgNASQg5gWgcgyIhGAAQgZAshAAcgAgeglIBBAAIAAgmIhBAAg");
	this.shape_83.setTransform(249.1,158.625);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#960000").s().p("AgJCEIAAgTIhUAAIAAATIgSAAIAAjJIAiAAIAAggIgxAAIAAgSICYAAIAAASIg3AAIAAAgIAmAAIAADJgAhdBfIBUAAIAAgYIhUAAgAhdA1IBUAAIAAgiQgDAFgFAAIgKAAQgTAAAAgUIAAg3IgOAAQABA8gUAaIgOgKgAhdAWQAQgTAAg2IgQAAgAgdABQAAAHAEAAIADAAQACAAACgGIACgJIAHAEIAAgwIgUAAgAg8hFIAOAAIAAggIgOAAgAA6CAIgDgVQAWAFAKAAQAHAAAEgGQADgGAEg0QADg0ABg9IgzAAQgLAmgUAbIgQgKQAkgxAFhIIARAEQgBAXgEAVIBAAAQgBA8gDA8QgFA9gCAMQgDALgIAFQgJAGgLAAQgIAAgUgEgAAsgDIASgIQAVAYAIAfIgRAIQgJgkgVgTg");
	this.shape_84.setTransform(315.75,366.075);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#960000").s().p("ABICEIAAgQIiPAAIAAAQIgTAAIAAhJIC1AAIAABJgAhHBjICPAAIAAgYIiPAAgAiFApIAAgRIBaAAQgKgPgGgFIgbAAIAAg1ICtAAIAAA0IgYAAQgHANgHAIIBVAAIAAARgAgWAYIAvAAQAKgKAGgKIhLgBQAHAJAFAMgAhDgMICGAAIAAgUIiGAAgAhhg/IAAgRIBZAAIAAgTIhxAAIAAgQIBxAAIAAgQIARAAIAAAPIBzAAIAAARIhzAAIAAATIBcAAIAAARg");
	this.shape_85.setTransform(316.3,336.075);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#960000").s().p("AgSCEIAAiZICJAAIAAB/QAAAZgYAAIgTAAIgGgSIAWAAQAIAAABgKIAAgXIgqAAIAAAoIgSAAIAAgoIgpAAIAAA0gAA7A/IAqAAIAAgaIgqAAgAAAA/IApAAIAAgaIgpAAgAA7AUIAqAAIAAgYIgqAAgAAAAUIApAAIAAgYIgpAAgAhhCEIAAilQgIARgPASIgOgNQArg1AOhDIATAHIgNAkIgIAWIAADGgAhKBqQAJgRAGggQAHgggBhVIAuAAIAAgfIgoAAIAAgRIAoAAIAAgXIAQAAIAAAXIA2AAIAAgXIASAAIAAAXIAoAAIAAARIgoAAIAAAfIA2AAIAAARIioAAQgBBtgVAwgAAJg8IA2AAIAAgfIg2AAg");
	this.shape_86.setTransform(316.25,306.075);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#960000").s().p("ABIBIQgYAlgmAWIgNgOQAmgYAbgoQgRgigFgoQgIARgGAKIgQgLQASgcAIgaQAJgaADgvIASADQgBAdgIAdIBKAAIAAASIgQAAQgHA8gZAvQATAkAjAdIgPANQghgggRgcgABJAgQATgnAFguIgsAAQAFAxAPAkgAhEB7IgFgWQAeAJAIAAQAEgBAEgCQAEgCAEgWQAEgVACghQACgiABgVIhQAAQgMAagUAVIgOgMQAegeAJgwIANAGIAAgXIgtAAIAAgSIAtAAIAAgbIATAAIAAAbIAcAAIAAgbIATAAIAAAbIAlAAIAAASIglAAIAAAaIgTAAIAAgaIgbAAIAAAaIgQAAIgEAQIBbAAQAAAsgFAyQgDA0gIANQgIANgSAAQgKgBgXgEgAhnBQIAAhQIBBAAIAABQgAhVA/IAdAAIABgvIgeAAg");
	this.shape_87.setTransform(316.2,276.05);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#960000").s().p("AiEB8IAAgSIBhAAIAAiXIhSAAIAAgTIDuAAIAAASIhRAAIAACYIBdAAIAAASgAgRBqIAmAAIAAiYIgmAAgAAwBDQAhgoALgxIARAJQgRA1gcAlgAhrgNIAPgKQAjArALAvIgRAKQgJgugjgsgAAShOQAggWANgXIAOAKQgJAVgiAZgAhRhwIANgLQAdAOAWAeIgQAMQgVgdgbgQg");
	this.shape_88.setTransform(316.3,245.325);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#960000").s().p("AA4BXQgegsgLhlIiNAAIAAgSICLAAIgDg2IAUgBQAAAVADAhIBcAAIAAASIhaAAQAGBRAYArQAYArAMAAQAFAAAEgKQADgLACgUIATAHQgEAZgGARQgGAQgNAAQgUAAgdgtgAiFBaIBFgPIAAhLIgyAAIAAgRIB1AAIAAARIgwAAIAABGIA9gOIABASIiPAigAAvhwIAOgMQAbAHAUAVIgNANQgSgUgegJg");
	this.shape_89.setTransform(316.425,216.05);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#960000").s().p("AhhCEIAAieQgIATgOAQIgPgKQAjgvAZhTIASAGQgFASgJAYIgJAWIAADBgAgtCEIgGgSIAZAAQAJAAAAgIIAAgWIgtAIIgIgPIA1gJIAAgaIgoAAIAAgPIAoAAIAAgQQgVADgOAAIgJgQQAtAAApgNIAJAPQgQAGgSACIAAATIAsAAIgCgkIATAAIABAkIBAAAIAAAPIg+AAQADAXAFALQAQgLARgQIANAMQgMAMgZASQARATAHAAQAIAAAEgeIASAGQgEAXgGAKQgGALgLAAQgUAAgYgdQgUAOgbAHIgJgPQAagIAVgNQgHgRgDgbIgtAAIAAAXIAlgGIAAAQIglAGIAAAaQAAAMgGAGQgGAHgNAAgABGAAIAJgLQARAFAVAOIgKAOQgOgNgXgJgAg8giIBVAAIAAgTIg+AAIAAgQIA+AAIAAgTIhMAAIAAgPIAxAAQgIgKgOgHIAPgLQANAKAPASIAdAAQAOgLAMgRIASAJQgIALgLAHIAwAAIAAAQIhOAAIAAATIBAAAIAAAPIhAAAIAAAUIBVAAIAAAPIi8ABg");
	this.shape_90.setTransform(316.3,186.075);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#960000").s().p("AhoB+IAAh+IgcAAIAAgTIAcAAIAAhqIDRAAIAABqIAcAAIAAASIgbAAIAABeQAAANgHAIQgHAHgMABIgXAAIgHgTIAWAAQAPAAAAgQIAAhYIgtAAIAABlIgTAAIAAhlIgsAAIAABlIgTAAIAAhlIgtAAIAAB/gAApgTIAtAAIABhYIguAAgAgVgTIAsAAIAAhYIgsAAgAhVgTIAtAAIAAhYIgtAAg");
	this.shape_91.setTransform(316.325,156.65);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#960000").s().p("Ag1CEIAAgUIguAAIAAAUIgTAAIAAhjIBUAAIAABjgAhkBeIAvAAIAAgrIgvAAgAgZB1IAAgSIBGAAIAAhOIg6AAIAAgSIA6AAIAAhEIg+AAIAAgSIA+AAIAAgwIATAAIAAAwIBCAAIAAARIhCAAIAABFIA4AAIAAASIg4AAIAABOIBGAAIAAASgAh2ANIAAgRIBTAAIAAARgAh2gYIAAgTIBTAAIAAATgAiFg+IAAgTIBsAAIAAATgAhzh2IBPAAIAAASIhPABg");
	this.shape_92.setTransform(316.3,126.025);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#960000").s().p("ABaCEIAAgTIhbAAIAAATIgTAAIAAhzICBAAIAABzgAgBBgIBbAAIAAgXIhbAAgAgBA3IBbAAIAAgVIhbAAgAiGB2QAkgZASgkQgNgLgKgEIgFALIgPgIQAWgyAHg0IgdAAIAAgSIAhAAQAGglADgTIASAEQgDAXgFAcIAmAAQgEBPgTAwQAQALAOAPIgMAPQgLgOgPgKQgXAogiAYgAhhAZQANAGANAJQAMgcAIhGIgXAAQgKAzgNAggABJgEQgTgSgIgfIgyAAIAAApIAzgNIAAASIhJATIgIgPIAMgEIAAhoQBRgBAtgTIANAPQgbAKghAGQAAAMADARIA8AAIAAASIg4AAQAIAXAOAMQANAMAIAAQAEAAABgDQACgEADgcIASAIQgEAggGAGQgIAIgJAAQgQAAgTgRgAgEheIAAAXIAtAAQgBgMAAgOQgUADgYAAg");
	this.shape_93.setTransform(316.3,96.075);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#960000").s().p("ABcCEIAAgUIhOAAIAAAUIgSAAIAAhtIBzAAIAABtgAAOBeIBOAAIAAg1IhOAAgAhVCEIAAhnIgpACIgEgRIAPgBQAUgXALgTQgRgQgcgNIALgQIAJAGQAVgfAMggIASAJQgNAfgXAgQALAGAKAJQAMgRAOgeIARAJQgcA3gkAoIAugBQgDgMgJgMIARgGQAOASAKAjIgSAGQgCgHgDgHIgYACIAABngAiFBxQAPggAEggIARADQgCAbgQApgAg1A0IAQgEQALAYAFAmIgSAEQgDgfgLgfgAgMgEIAAgSIA3AAIAAgxIhEAAIAAgSIBEAAIAAgqIAUAAIAAAqIBIAAIAAASIhIAAIAAAxIA4AAIAAASg");
	this.shape_94.setTransform(316.2,66.05);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#960000").s().p("AAQCEIgGgSIApAAQAIAAAAgKIAAh+IhNAAIAAgSICaAAIAAASIg6AAIAAB8QAAAegaAAgAhPCEIAAh2QgHAGgMAIIgWANIgPgQQAqgXAQgQQAQgRAVgfIAQALQgQAagUAWIAACHgAh9g4QAqgdAfguIAOAMQgbAtgsAfgAgLhlIAAgSICAAAIAAASg");
	this.shape_95.setTransform(316.175,36.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#960000").s().p("AgICKIAAgpIh7AAIAAgQIB7AAIAAgcIhPAAIAAgMQgQALgZALIgIgNQAtgUAbgdIhGAAIAAgNIAZAAIgEhrQArgIAVgIIAGAOQgeAJgXAEIAAARIAvAAIAAAPIguAAIABAWIAtAAIAAAPIgtAAIABAbIC7AAIABgbIguAAIAAgPIAvAAIAAgWIgvAAIAAgPIAwAAIAAgVIgwAAIAAgOIBAAAIgDByIAXAAIAAANIhHAAQAaAdAxAQIgIAOQgQgDgcgQIAAAMIhNAAIAAAcIB4AAIAAAQIh4AAIAAApgAAIAOIAAAZIBLAAQgbgSgOgUIhUAAQgSAVgYARIBMAAIAAgZgAgqgcQAMgUAIgYIANAHQgIAWgMAWgAgGgmIAJABQANgBADgEQADgEAAggIg0AAIAJg7IAPACIgBAJIAsAAIAAAOIguAAIgDAUIAyAAQgBA0gGAJQgGAIgaABg");
	this.shape_96.setTransform(319.825,5.55);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#960000").s().p("AiGB5QAPgZAJgcQAHgcAAgqIAAhjIBnAAIAAgeIATAAIAAAdIBmAAIAAASIjMAAIAABcQAABNgjAvgAhQB7IAAgSIBcAAIAAgsIhLAAIAAgSIBLAAIAAh2IATAAIAAB2IBPAAIAAASIhPAAIAAAsIBmAAIAAASgABPgOQgLAYgRASIgPgNQASgQAHgTQAHgTABgfIASADQgBAUgDANQAfAXAWAeIgPAMQgVgdgVgQgAhNARQAnghAAg0IAQADQABAXgFARQATAOAOAZIgNAOQgLgWgQgNQgJASgWATg");
	this.shape_97.setTransform(478.3,546.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#960000").s().p("ABMBZQgTAZggASIgOgPQAigTAUgYQgSghgGgmIgHAAIAAgRIBPAAQgDAygXAmQANAUAkAYIgPAOQgfgWgOgVgABMA4QAMgZAGgcIgjAAQADAUAOAhgAgxCEIAAj6IBLAAIAABYIg5AAIAAAgIA2AAIAAASIg2AAIAAAkIA6AAIAAASIg5AAIAAA6gAgfgwIAmAAIAAg0IgmAAgAheCEIAAieQgJAPgQASIgQgKQAvg1APhLIAQAHQgCAQgIAZIgIAXIAADAgAAlgjIAAgSIA5AAIAAgvIg2AAIAAgSIBIAAIAABTg");
	this.shape_98.setTransform(478.325,516.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#960000").s().p("AAbCEIgHgTIAhAAQAJAAAAgIIAAhJIhnAAIAAgTIBmAAIAAgZIATAAIAAAZIAvAAIAAATIgvAAIAABJQAAAbgYAAgAgXA3IAOgMQAZAMARAeIgPANQgSgfgXgMgAhGBhIAAgUIglAAIAAAUIgTAAIAAjKIBLAAIAADKgAhrA7IAlAAIAAg/IglAAgAhrgWIAlAAIAAhAIglAAgAgogVIAAgTIBFAAIAAgoIg6AAIAAgTIA5AAIAAggIATAAIAAAgIA6AAIAAATIg6AAIAAAoIBGAAIAAATg");
	this.shape_99.setTransform(478.925,486.125);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#960000").s().p("AiHBzQBHgxAahIIASAJQggBRhDAwgAAZAEIAQgMQA8AyAjBNIgSANQgjhRg6gvgAh/hBIB3AAIAAhCIATAAIAABCIB1AAIAAATIj/AAg");
	this.shape_100.setTransform(478.275,456.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#960000").s().p("Ag3B/QBFgmAPg6Ig6AAIAAhPIgNAKIgMgKQArgjAbg3IAPAGQgFALgHALIBJAAIAAAQQgLARgSAXIA5AAIAABVIg2AAIAABPQAAAEAEACQAEACAOAAQAMAAAGgBQAFgCADgRQACgRAAgJIAPAGQgBAbgGAOQgGAPgUAAQgbAAgHgCQgGgBgFgEQgDgFAAgNIAAhOIgEAAQgIAggYAeQgYAdgiARgAAxAQIA2AAIAAg1IgyAAQgBAigDATgAgNAQIAtAAQAEgZAAgcIgxAAgAgXg2IBCAAQARgUAMgUIg+AAQgQAXgRARgAiCB+IAAjwIBLAAIAADkIgQAAIAAgPIgsAAIAAAbgAhzBUIAsAAIAAhVIgsAAgAhzgRIAsAAIAAhSIgsAAg");
	this.shape_101.setTransform(482.175,425.725);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#960000").s().p("AiIBtQA5gWABg9IATAEQAAAIgDAQQAYAaAfAKIAAhQIhxAAIAAgRIDxAAIAAARIhuAAIAAAgIBZAAIAAASIhZAAIAAAkQAPADAMAAIBjAAIgKASIhZAAQhBAAgpgrQgQAggoATgAhRgZIAAhkIClAAIAABkgAg+grIB/AAIAAgYIh/AAgAg+hUIB/AAIAAgXIh/AAg");
	this.shape_102.setTransform(478.325,396.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#960000").s().p("ABICEIAAgQIiPAAIAAAQIgTAAIAAhJIC1AAIAABJgAhHBjICPAAIAAgYIiPAAgAiFApIAAgRIBaAAQgKgPgGgFIgbAAIAAg1ICtAAIAAA0IgYAAQgHANgHAIIBVAAIAAARgAgWAYIAvAAQAKgKAGgKIhLgBQAHAJAFAMgAhDgMICGAAIAAgUIiGAAgAhhg/IAAgRIBZAAIAAgTIhxAAIAAgQIBxAAIAAgQIARAAIAAAPIBzAAIAAARIhzAAIAAATIBcAAIAAARg");
	this.shape_103.setTransform(478.3,348.175);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#960000").s().p("AiGB2QAdgXAOg2IATAAQAHASAOAQQBig5AphQIjFAAIAAgSIBjAAIAAgzIASAAIAAAyIBnAAIAAASQgrBahpA8QAYASAcAAIB4AAIgJASIhxAAQgcAAgagPQgZgPgOgaQgLAlgaAcg");
	this.shape_104.setTransform(478.325,318.125);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#960000").s().p("ABaCEIAAgTIhbAAIAAATIgTAAIAAhzICBAAIAABzgAgBBgIBbAAIAAgXIhbAAgAgBA3IBbAAIAAgVIhbAAgAiGB2QAkgZASgkQgNgLgKgEIgFALIgPgIQAWgyAHg0IgdAAIAAgSIAhAAQAGglADgTIASAEQgDAXgFAcIAmAAQgEBPgTAwQAQALAOAPIgMAPQgLgOgPgKQgXAogiAYgAhhAZQANAGANAJQAMgcAIhGIgXAAQgKAzgNAggABJgEQgTgSgIgfIgyAAIAAApIAzgNIAAASIhJATIgIgPIAMgEIAAhoQBRgBAtgTIANAPQgbAKghAGQAAAMADARIA8AAIAAASIg4AAQAIAXAOAMQANAMAIAAQAEAAABgDQACgEADgcIASAIQgEAggGAGQgHAIgKAAQgQAAgTgRgAgEheIAAAXIAtAAQgBgMAAgOQgUADgYAAg");
	this.shape_105.setTransform(478.3,288.175);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#960000").s().p("ABcCEIAAgVIhOAAIAAAVIgSAAIAAhtIBzAAIAABtgAAOBdIBOAAIAAg0IhOAAgAhVCEIAAhnIgpACIgEgSIAPAAQAUgYALgRQgRgRgcgNIALgPIAJAFQAVggAMgfIASAIQgNAggXAgQALAGAKAJQAMgSAOgdIARAJQgcA3gkAoIAugCQgDgLgJgMIARgGQAOASAKAkIgSAFQgCgGgDgIIgYACIAABngAiFBwQAPgfAEghIARAFQgCAbgQAogAg1A1IAQgFQALAYAFAmIgSAFQgDgggLgegAgMgEIAAgSIA3AAIAAgxIhEAAIAAgRIBEAAIAAgrIAUAAIAAAqIBIAAIAAASIhIAAIAAAwIA4AAIAAATg");
	this.shape_106.setTransform(478.2,258.15);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#960000").s().p("ABDBjIANgNQAeAKAaAXIgPANQgTgVgjgMgAgYB3QAogLAXgWIAMANQgeAZgiAIgAhFCEIAAhEQgWAhgcASIgPgOQArgaARgnIgzAAIAAgTIA5AAIAAgVQgTACgfAAIgJgRQBKABAogPIAMAPQgMAFglAHIAAAXIAyAAIAAASIgyAAIAAAFQAgAPAWAZIgNANQgQgUgZgNIAABIgAAJBPIAAiWIAmAAQAHgPACgOIg+AAIAAgTICLAAIAAASIg5AAQgDAPgFAOIAvAAIAACXgAAcA9IBEAAIAAgbIhEAAgAAcAQIBDAAIABgZIhEAAgAAcgcIBEAAIAAgZIhEAAgAhWgkQgbAAAAgZIAAhGIAUAAIAAAlQAngHAagTIANAPQggAWguAGIAAAOQABAJAIAAIAqAAQAHAAADgGQAFgHADgOIARAIQgGAYgHAHQgGAGgPAAg");
	this.shape_107.setTransform(457.3,197.625);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#960000").s().p("ABcCDIAAgNIg2AAIAAANIgTAAIAAhKIBbAAIAABKgAAmBnIA2AAIAAgfIg2AAgAg3CAIgIgSQAYAGAGAAQAIAAACgFQABgFADgdIgjAAQgTAvgwAHIgMgSQAWgCANgHQAOgHAKgUIgmAAIAAgPIAqAAQADgMAAgIIg/AAIAAgQIBYAAQgJgPgKgHIgaAAIAAgwICwAAIAAAwIgbAAQgIARgEAFIBUAAIAAAQIi2AAIgCAUIAyAAQAAAqgGAOQgGANgSAAQgKAAgPgDgAgUAaIAvAAQAIgKAFgMIhLAAQAKALAFALgAhFgLICMAAIAAgTIiMAAgAhjg7IAAgRIBaAAIAAgRIhuAAIAAgQIBuAAIAAgWIATAAIAAAWIBuAAIAAAQIhuAAIAAARIBZAAIAAARg");
	this.shape_108.setTransform(457.225,167.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#960000").s().p("AiGByQBHgKA5gkQgegKgegHIgLAPIgVgHQAagjAbhBIhOAAIAAgTIBXAAQAOggANgnIARAIQgLAigMAcICLAAIAAATIguAAQgPBBghAmQA0AVA1AgIgMASQg9glgvgTQgzAohXAQgAg7AiQAzANASAGQAhggAOg/IhQAAQgMAggYAsg");
	this.shape_109.setTransform(457.25,137.65);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#960000").s().p("AgSAQIgtAAIAABTIBJgPIAAATIhyAXIgLgRIAhgHIAAhWIg0AAIAAgRIA0AAIAAh8ICyAAIAAATIifAAIAAAVICPAAIAAASIiPAAIAAAXICPAAIAAASIiPAAIAAAYIDDAAIAAASIiCAAQAOAhAUARQAYgOATgaIASAKQgVAZgbARQAkAWAyAIIgMASQhugUgfhag");
	this.shape_110.setTransform(457.425,108.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#960000").s().p("AhxCEIAAiRIBiAAIAAB0QAAAKgGAHQgHAHgKAAIgVAAIgGgSIAXAAQAJAAAAgIIAAgWIg9AAIAAA1gAheA+IA9AAIAAgWIg9AAgAheAXIA9AAIAAgUIg9AAgAAjB/QgNAAgHgHQgHgHAAgMIAAiLIBWAAIAAgUIhWAAIAAhJIATAAIAAAUIBiAAIAAARIhiAAIAAATIBWAAIAAA1IhWAAIAAATIBTAAIAAAQIhTAAIAAATIBTAAIAAAQIhTAAIAAAUIBSAAIAAAQIhSAAIAAARQAAAIAKAAIBAAAQAHAAADgHQAEgHABgSIASAHQgEAegKAHQgJAGgIAAgAiFggIAAgRIAqAAQgDgQgOgQIARgEQAOASAFASIATAAQAJgOAGgVIARAGQgGARgJAMIAlAAIAAARgAh6hpIAzAAIAAgaIATAAIAAAaIAuAAIAAAQIh0ABg");
	this.shape_111.setTransform(489.35,197.625);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#960000").s().p("AAEA4QgMAhgeASQgeARg6ACIgKgRQBigCAWgzIhSAAIAAgSIBYAAQAFgNABgOIh4AAIAAgRID6AAIAAARIhvAAQgBAPgFAMIBcAAIAAASIhMAAQAWApBaAMIgIARQhggLgdg7gAhah9IC1AAIAABjIi1ABgAhHgrICPAAIAAgYIiPAAgAhHhVICPAAIAAgWIiPAAg");
	this.shape_112.setTransform(489.3,168.225);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#960000").s().p("AAgB7IgHgXQAgAGAWAAQAFAAAFgEQAEgEAEgSQAEgSACgYIhbAAQghBOhdAKIgKgTQBVgGAfg/IhZAAIAAgTIBfAAQABgGABgYIhTAAIAAhyIC+AAIAAByIhYAAQAAASgCAMIBsAAQgCAfgGAfQgGAegKAIQgKAHgNAAQgUAAgagDgAAUgdIBEAAIAAgfIhEAAgAhAgdIBCAAIAAgfIhCAAgAAUhOIBDAAIABgdIhEAAgAhAhOIBBAAIABgdIhCAAg");
	this.shape_113.setTransform(488.2,138.225);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#960000").s().p("AgSAQIgtAAIAABTIBJgPIAAATIhyAXIgLgRIAhgHIAAhWIg0AAIAAgRIA0AAIAAh8ICyAAIAAATIifAAIAAAVICPAAIAAASIiPAAIAAAXICPAAIAAASIiPAAIAAAYIDDAAIAAASIiCAAQAOAhAUARQAYgOATgaIASAKQgVAZgbARQAkAWAyAIIgMASQhugUgfhag");
	this.shape_114.setTransform(489.425,108.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#960000").s().p("AAWCoIgJgZIAuAAQAPAAAAgPIAAkOIhbAAIAAgZIDDAAIAAAYIhPAAIAAEVQAAAOgIAKQgJAKgOAAgAhBCnIAAgbIhDAAIAAAbIgaAAIAAiEIB3AAIAACEgAiEB0IBDAAIAAg5IhDAAgAieAJIAAgYIB2AAIAAAYgAiegpIAAgZIB2AAIAAAZgAixhcIAAgYICgAAIAAAYgAiZiNIAAgZIBvAAIAAAZg");
	this.shape_115.setTransform(555.075,52.275);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#960000").s().p("AhRCwIAAgbIg0AAIAAAbIgZAAIAAiEIBmAAIAACEgAiFB9IA0AAIAAg5Ig0AAgAguClIAAgWIBhAAIAAgbIhJAAIAAgVIBJAAIAAgZIhRAAIAAgWIBRAAIAAgXIhOAAIAAhIIBOAAIAAgXIgtAAIAAgvIgwAAIAAgWIAwAAIAAgjIAXAAIAAAjIBCAAIAAgjIAXAAIAAAjIAyAAIAAAWIgyAAIAAAvIgsAAIAAAXIBPAAIAABIIhPAAIAAAXIBTAAIAAAWIhTAAIAAAZIBJAAIAAAVIhJAAIAAAbIBoAAIAAAWgABKADIA3AAIAAgdIg3AAgAgEADIA3AAIAAgdIg3AAgAAdhbIBCAAIAAgaIhCAAgAieARIAAgXIBmAAIAAAXgAieghIAAgYIBmAAIAAAYgAixhTIAAgZICQAAIAAAZgAiaidIBgAAIAAAYIhgAAg");
	this.shape_116.setTransform(555.025,11.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#960000").s().p("ABOCiQAKABAeAAQAKAAAIgFQAGgFAEgIQADgIADgbQAEgbABgnIkBAAQgdAjglAeIgMgUQBhhOAfhvIhwAAIAAgWIB1AAQAJgpADgWIAVAFQgDAXgHAjICZAAQgGAkgJAmIAqAAQgEAhgIAmIAhAAQAAAogEAnQgFAngEALQgFALgHAIQgJAHgOAEQgOAEgeAAgAhUAXIDPAAIAJgyIi6AAQgLAWgTAcgAgtgwICLAAIALg0IiFAAQgGAYgLAcgAiBCnQAagmATg5IAUAFQgSA6gbArgAglBMIAVgEQAJAsAEA4IgYAEQADgpgNg7gAASBLIAUgHQAOAkAKAuIgVAIQgHgrgQgogABLBIIATgJQAQAbANAlIgUAJQgJgdgTgjgAiBisIASgMQAVAVAPAWIgTAMQgOgVgVgWg");
	this.shape_117.setTransform(472.05,10.875);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#960000").s().p("AgJB/QgdAAAAgfIAAhYIhdASIgDgTIBggSIAAhzIAUAAIAABvICPgbIADATIiSAbIAABaQAAAOAOAAIBhAAQAKAAAEgGQAEgGAFgfIATAGQgDAWgFANQgFANgHAEQgHAEgNAAg");
	this.shape_118.setTransform(539.125,347.825);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#960000").s().p("AglB0QAigUAPggQARgfABgoQABgogBg1IgqAAIAAgTICLAAIABBJQAABDgEArQgFAsgGAJQgIAKgPgBQgPAAgYgEIgFgWQAiAHAGAAQAHAAAEgFQAEgGAEgvQADgwAAg1IAAgwIg6AAIAABhQgCAagGAaQgIAZgQAUQgPAUgaASgAhLCEIAAh2QgSAQgVANIgNgRQAigUAYgYQAZgZAIgSIhSAAIAAgSIArAAIAAg0IATAAIAAA0IApAAIAAASQgKAegfAcQAHACAIAFQAUgLAMgXIAPAMQgLAVgUALQAOAIAOASIgLAPQgXgZgZgOIAAB0g");
	this.shape_119.setTransform(538.25,318.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#960000").s().p("AhnBuQAcgTAQgaQARgaAAgcIAAiIICSAAIAADfQAAAXgaAAIggAAIgIgTIAjAAQAMAAAAgLIAAg9IhsAAQgMA8g1AkgAgWALIBrAAIAAgxIhrAAgAgWg5IBqAAIABgxIhrAAg");
	this.shape_120.setTransform(537.3,288.85);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#960000").s().p("AgJB/QgdAAAAgfIAAhYIhdASIgDgTIBggSIAAhzIAUAAIAABvICPgbIADATIiSAbIAABaQAAAOAOAAIBhAAQAKAAAEgGQAEgGAFgfIATAGQgDAWgFANQgFANgHAEQgHAEgNAAg");
	this.shape_121.setTransform(539.125,257.825);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#960000").s().p("AAACEIAAhXIiEAAIAAgSIAuAAIAAhFIBWAAIAAgsIhGAAQgVAlgaAZIgQgMQAqgmARg5IASAIIgHATIC0AAIAAASIhhAAIAAArIBSAAIAAASIhSAAIAAA0IByAAIAAASIhyAAIAABXgAhDAbIBDAAIAAg0IhDAAg");
	this.shape_122.setTransform(539.075,228.275);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#960000").s().p("AiGBxQASgWAJghQAKghAAghIAAh1IDYAAIAAASIjFAAIAABPIDGAAIAAASIhXAAQAFAaAMAYQAggNAQgZIAPANQgaAdgdAMQAfAqAuAMIgMAQQgmgLgfgjQgfgkgIg2IgpAAIAABsIBAgOIAAATIhmAXIgIgSIAcgFIAAhxIgiAAQAABRgpA3gAgzhNICVAAIAAASIiVABg");
	this.shape_123.setTransform(539.075,198.875);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#960000").s().p("AgJB+IAAhnIhgAAIAAiUIDTAAIAACUIhgAAIAABngAAKAFIBNAAIAAgvIhNAAgAhWAFIBNAAIAAgvIhNAAgAAKg9IBNAAIAAgtIhNAAgAhWg9IBNAAIAAgtIhNAAg");
	this.shape_124.setTransform(539.1,168.875);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#960000").s().p("ABMB+IAAgPIh0AAIAAAPIgTAAIAAhrICaAAIAABrgAgoBdIB0AAIAAgVIh0AAgAgoA4IB0AAIAAgUIh0AAgAiHBxQAZgeAAg1IAAibIDuAAIAAASIjbAAIAACDQAABFgcAggAA9AMIAAg5QgRAkgcARIgMgMQAXgNAQgcIgWAAIAAgQIAoAAIAAgPQgPACgSAAIgIgPQAtAAApgNIAKANQgNAFgYAFIAAASIAqAAIAAAQIgYAAQAKAWAdAVIgNANQgfgYgNggIAAA5gAgrAMIAAgjQgOAXgUAKIgKgNQAbgPARgbIgpAAIAAgQIApAAIAAgQQgRACgNABIgJgQQAqgBApgKIAJAOIgiAIIAAASIAlAAIAAAQIglAAIAAAHQAVAHAMAMIgJAMQgKgJgOgFIAAAhg");
	this.shape_125.setTransform(539.225,138.875);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#960000").s().p("AAAA8IglAAIAAAwIAygIIAAARIhcAPIgIgRIAfgEIAAgzIgiAAQgEAtgcAaIgOgKQAcgZAAguIAAhDIDnAAIAAAPIjVAAIAAAuIDXAAIAAAQIhnAAQAOARAQALQAbgLAOgLIAMALQgQALgWAJQAfAQAnAEIgNAPQhNgLgvg9gAhLAdIAAgQICvAAIAAAQgAhoggIAAhTIBAAAIAAgQIASAAIAAAQIAtAAIAAgQIASAAIAAAQIBAAAIAABTgAApgwIAuAAIAAgSIguAAgAgWgwIAtAAIAAgSIgtAAgAhWgwIAuAAIAAgSIguAAgAAphRIAuAAIAAgSIguAAgAgWhRIAtAAIAAgSIgtAAgAhWhRIAuAAIAAgSIguAAg");
	this.shape_126.setTransform(539.1,108.275);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#960000").s().p("ABBB8IAAgeIiBAAIAAAeIgUAAIAAj3ICpAAIAAD3gAhABLICBAAIAAhRIiBAAgAhAgZICBAAIAAhQIiBAAg");
	this.shape_127.setTransform(571.275,409.025);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#960000").s().p("AgJCEIAAiHIh8AAIAAgVIB8AAIAAhrIAUAAIAABqIB7AAIAAAWIh7AAIAACHg");
	this.shape_128.setTransform(571.1,378.25);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#960000").s().p("AhnBvQAcgUAQgaQAQgaAAgbIAAiJICTAAIAADfQAAAYgZgBIgiAAIgIgSIAkAAQALgBAAgLIAAg9IhrAAQgMA8g1AkgAgXAMIBrAAIAAgyIhrAAgAgXg5IBrAAIAAgxIhrAAg");
	this.shape_129.setTransform(569.3,348.85);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#960000").s().p("AA5AgQgWg2AAhQIhSAAIAAgXIBoAAQgCBSAUA2QATA3ArAqIgPASQgrgmgWg4gAiIBtQAggeASgmQARglAGheIAWAEQgGBMgIAeQgIAegQAZQgQAZgYAZg");
	this.shape_130.setTransform(571.125,318.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#960000").s().p("AAACEIAAhXIiEAAIAAgSIAuAAIAAhFIBWAAIAAgsIhGAAQgVAlgaAZIgQgMQAqgmARg5IASAIIgHATIC0AAIAAASIhhAAIAAArIBSAAIAAASIhSAAIAAA0IByAAIAAASIhyAAIAABXgAhDAbIBDAAIAAg0IhDAAg");
	this.shape_131.setTransform(571.075,288.275);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#960000").s().p("ABbB+IAAgkIi1AAIAAAkIgVAAIAAj7IDfAAIAAD7gAhaBIIC1AAIAAiyIg6AAIAABmQAAAIAJAAIAPAAQAFAAACgDQACgCAEgUIARALQgFAUgEAHQgHAGgLAAIgWAAQgXAAAAgZIAAhoIgiAAIAAA5QAAAkgOAPQgNAQghAKIgLgMgAhaAMQAcgGALgMQAMgNAAgbIgBg8IgyAAg");
	this.shape_132.setTransform(571.1,258.825);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#960000").s().p("AiFBRIAAgUIELAAIAAAUgAhjg9IAAgTIDHAAIAAATg");
	this.shape_133.setTransform(571.1,228.175);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#960000").s().p("AgZCBIAAg/IhFAAIAAgSIC0AAIAAAqQAAAYgZAAIgbAAIgEgRIAdAAQAIAAAAgJIAAgWIhJAAIAAA/gAA1AQIAAAMIhrAAIAAgMQgfAPgoAKIgKgSQAlgFAjgRQAkgQATgUIAAgsIhbAAIAAAjIgTAAIAAgzIBuAAIAAgQIheAAIAAgRIDNAAIAAAQIhdAAIAAAQIBuAAIAAA0IgTAAIAAgjIhbAAIAAAoIAFAFIgDAEQA3AuBFAHIgLASQgdgGgrgTgAgtALIBXAAQgZgNgRgPQgTAPgaANgAAegZIAAgOIA7AAIAAAOgAhYgZIAAgOIA5AAIAAAOgAAehDIA4AAIAAAOIg4ABgAhVhDIA1AAIAAAOIg1ABg");
	this.shape_134.setTransform(571.05,198.575);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#960000").s().p("AiFBRIAAgUIELAAIAAAUgAhjg9IAAgTIDHAAIAAATg");
	this.shape_135.setTransform(571.1,168.175);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#960000").s().p("ABMB+IAAgPIh0AAIAAAPIgTAAIAAhrICaAAIAABrgAgoBdIB0AAIAAgVIh0AAgAgoA4IB0AAIAAgUIh0AAgAiHBxQAZgeAAg1IAAibIDuAAIAAASIjbAAIAACDQAABFgcAggAA9AMIAAg5QgRAkgcARIgMgMQAXgNAQgcIgWAAIAAgQIAoAAIAAgPQgPACgSAAIgIgPQAtAAApgNIAKANQgNAFgYAFIAAASIAqAAIAAAQIgYAAQAKAWAdAVIgNANQgfgYgNggIAAA5gAgrAMIAAgjQgOAXgUAKIgKgNQAbgPARgbIgpAAIAAgQIApAAIAAgQQgRACgNABIgJgQQAqgBApgKIAJAOIgiAIIAAASIAlAAIAAAQIglAAIAAAHQAVAHAMAMIgJAMQgKgJgOgFIAAAhg");
	this.shape_136.setTransform(571.225,138.875);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#960000").s().p("ABIBeIioAOIgIgUIAegCQAjgxAWhUIASAGQgZBWgcAnIB0gIQgQgcgTgTIATgIQAiAjAYA9IgTAJQgFgOgKgSgAAihsIgwAAIAAgRIBDAAQANA+BFAzIgPAOQhCgzgUg7gAiHgMQBCguARg4IASAIQgOA3hHA1g");
	this.shape_137.setTransform(571.1,108.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(-15.7,-18.6,607.5,733.2), null);


(lib.Symbol27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CBA909").ss(3,1,1).p("EgtVAAAMBarAAA");
	this.shape.setTransform(321.6238,247.75,1.0482,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CBA909").ss(3,1,1).p("EgtVAAAMBarAAA");
	this.shape_1.setTransform(321.5738,177.15,1.0482,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAABlQAAgDADgDIAAgDIABgFIAAgFIAFgJIgBgDIAAgKIgBgEIAJgSIgIgFIAAgFQAAgCACgEIAAgKIgDABIgBAAIAAgDIAAgEIgIAAIgKABIgFgBIgDAAIgGAAIgDABIgFgIIgDAHQgBABAAAAQAAAAgBAAQAAABAAAAQgBAAgBAAIgKgCQgCgEgBAAIgGAFIgCABIgHgBIgDAAIgEAAIgDABIgBAAIgKAAIABgIIAEgCIAGgFIADgCIAGgGIAEgCIAHgGIAHgDIAGgFIAFgDIAGgGIAHgEIAGgHIAEgCIACgFIAFgDIAEgIIADgGIAEgFIABgCIAFgGIADgEIAFgJQACgFAFAAIAEACIAAADIAAADQABABAAAFIABAHIAAADIgBAIIABAFIgBAEIAAAGIgBAFIACALIgBANIgEANIADAHIAGAAIACADQADgEABAAIAGABIADAAIAGgBIAFAAQAGAAAJgDIAJgDIACABQADgEADAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQABADgHADQgCADgFADIAAAEIgDACQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgDAAIgBAAQgCAAgFgFQgDgEgDAAIgIAEQgIAFgBAAIgIgBIgBAAQAAAAAAAAQgBAAAAABQgBAAAAAAQAAABAAABQgCADAAAFIAAAOIgBALIACAEIgEACIABAFIgCACIAAAAIAFADIABANIABADIAAAFIAAAIIAAAFIgBAAIgBADIgGADIgGAFIgDAAQgDAHgEAAQgDAAAAgGgAgOgFIAEABIADAEIABAAQADgEABgBQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAIACAAIACgCIAAgBIAGAAIABgLIgBgLQAAgCADgEIAAgDIgDgFQgCgDAAgEIABgJQAAgFgDAAQgEAAgBAHQgDABgEAEIgKALIgCADIgQAPIgDAEIgLAJQgDAFAAADIACADIAHgJIAHACIAGAAIAHACIAAAAIAFgCIAAAAIADADg");
	this.shape_2.setTransform(617.8,212.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAwBmIgFgBIgEgBIgKgCIgFABIgCAAIgGgBIgFAAIgFgBIgBAAIgFAAIgEABIgFAAIgEgBIgEgDIgBACIgCgBIgBAAIAAACIgCAAIgCAAIgCAAIgCAAIgFAAIAAgEIgFgBIAAAEIgBABIgDAAIgIACIgHABIgIABQgEAAgBgDIAAgCIAGgFQABgBAFgBQABgGACgBQABgCAGgBIABgCIACgCIgBgFQAKgJAFgHIADgEIAFgJIAFgGIADgEIADgFIADgGIACgGIABgDIABgFIACgCIAGgNIAJgOIACgFIACgFIAAgGIABgJIABgDIgCgFIgDgHIgHgFIABgHIgGgDIAAAEQgUgSgKAAQgGAAgHAIIgDAEIgDAHQAAAAgBAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgHgEIACgGIADgFIAEAAIABgCQACAAADgDIAEgCIAFgFQAHgDAKAAIALABQACAFACAAQACAAABgEIADAFQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAIABAAIADgCIAHADIAFADIAAACQAKAGAFAIIABADIAAAJIACAFIgDAGIgCABIAAAGIgBAGIgGAJIgGAMIgKAPIgFAKIgBABIgGAJIgCAGIgEAFQgMATgBADIAAAAIgGAJIgDAHIgDACIAAAEIAEABIAEAAIAEgBIAAAAIAIABIAFACIAKgBIAIABIAEABIACAAIAFgBIABAAIACABIAIABIAEgBIAGABIAEAAIAHABIAGgCQADgBADgEIAEACIABAEQAAACgDAEIgEAJIgEAAIgGAEQgEAFgCAAIgBgBg");
	this.shape_3.setTransform(599.55,212.5023);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJBeIgPgEIAAABIgBAAIgEgBIgBgBIAAgCIgFACQgCgDgEgBIAAgBIgDAAIgDgEIgHgGIgCgBQgCgEAAgDIAAgCQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAgBAAIgCACIgHgJIgEgMIgEgHIgBgEIgBgDIAAgFIgBgGIAAgGIAAgEIABgCIABgBIAEgBIgCgFIABgDIgDACIgBgHQABgHACgDQACgDAEgCIAAgBIgBgCQAAgEAJgPQAFgMAEAAIABABIAFgEIgCgDIAEgDIAMgJIAJgGIAAAAIAAgCIAEADIAFgEIALgIIABABIACAAIADgBIALAAIAGgBIAIAFIAEAAIABABQABAHADAAQABgEABgBIAOAEIgBAFIAFABQADAEAFAFIAIALIgBAGQAEABAEANQACAFAAAEIgDABIACAEIACABIABALIAAADIgCAIIABAEIgDALQgHAAAAAFQAAACACADIABAEIgCAIIgGAPIgGAHIgFAGIgRALIgDAFIgFAAQgBADgEACIgIAFIgCAAIgHACIAAAAIAAAAIgIgCQAAAAgBAAQAAABgBAAQAAAAgBABQAAABgBAAIgFgBgAgJBLIAJABIAHABIAJgDQANgCABgCIAHgGIAFgDIAEgHIAHgHIAAgDIACgHIAEgDIAAgEIACgHIAAgCIgCgFIAEgEIgDgEIAAgIIAAgIIAAgFQAAgLgBAAIgEgLIACgGQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAgBAAQgCAAgCADQgBgDgDgEIAAgDIgBgEIgGABQgDAAgCgEIAAgDQAAgBAAAAQAAgBgBgBQAAAAAAAAQgBgBAAAAIgEgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgFgDIgCgCIgIABIgJgCIgDAAIgPACIgCACIgFABIgDACQgKAEgCADIgFAFIgEAEIgGAKIgFAGIgBAFIgEAJIgCAMIgDAKQAAAPABAFIAJAPIAPAQIgBADQAAABAAAAQAAABAAAAQAAABABABQAAAAAAABQABAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIAFgCQADAEAEABIAKAFIgVAFIAUACIAGgCIgBgBIAAgBIAHAEg");
	this.shape_4.setTransform(581,213.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAwBmIgFgBIgEgBIgKgCIgFABIgCAAIgGgBIgFAAIgFgBIgBAAIgFAAIgEABIgFAAIgEgBIgEgDIgBACIgCgBIgBAAIAAACIgCAAIgCAAIgCAAIgCAAIgFAAIAAgEIgFgBIAAAEIgBABIgDAAIgIACIgHABIgIABQgEAAgBgDIAAgCIAGgFQABgBAFgBQABgGACgBQACgCAFgBIABgCIACgCIgBgFQAKgJAFgHIADgEIAFgJIAFgGIADgEIADgFIACgGIADgGIABgDIACgFIABgCIAHgNIAIgOIACgFIACgFIAAgGIABgJIAAgDIgBgFIgDgHIgHgFIABgHIgGgDIAAAEQgUgSgKAAQgGAAgHAIIgDAEIgDAHQAAAAgBAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgHgEIACgGIADgFIAEAAIABgCQACAAADgDIAEgCIAFgFQAHgDAKAAIALABQACAFACAAQACAAABgEIADAFQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAIABAAIADgCIAGADIAGADIAAACQAKAGAFAIIACADIAAAJIABAFIgDAGIgDABIABAGIgBAGIgGAJIgGAMIgKAPIgFAKIgBABIgGAJIgCAGIgEAFQgMATgBADIAAAAIgGAJIgDAHIgDACIAAAEIAEABIAEAAIAEgBIAAAAIAIABIAGACIAJgBIAIABIADABIADAAIAFgBIABAAIACABIAIABIAFgBIAFABIAEAAIAHABIAGgCQADgBADgEIAEACIABAEQAAACgDAEIgEAJIgFAAIgFAEQgEAFgCAAIgBgBg");
	this.shape_5.setTransform(562.75,212.5023);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLAuIgEgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBIAAgBIABgBQAFgEABAAIABABIAEAAIACgEQAEAAADgEIABgEIAEgEIAAgEIACgJIAAgFIACgEIgBgBIgBgDQgBgLgFgBIgCgEIgCgBIgCgEIgHABIgBgBQABgEAIgIIAHgHQAFAAADADIAFAGIAAAEIABAFIACAEIAAADIABAHIgCAGIgBACIAAADIABAFIgEAKIgEAHIAAABIABABIAAABIABABIgFAGQgDAGgFAFQgDAEgCAAg");
	this.shape_6.setTransform(542.7,223.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdClIACgGIgBgFIACgFIAAgKIABgFIAAgIQABgCAEgEQgDgDgBgDIABgIIAAgJIAAgLIADgDIAAgDIAAgEIgCgDIgBAAIABgEIAAgcIABgHIAAgHIgBgHIAAgIIgBgEIACgHIABgEQAAAAAAAAQABAAAAgBQABAAABAAQABAAABAAIAAgDIgGABIgBgHIABgFIAAgEIgDgCIAAgFIAAgiQAAgDAHgCQAFgDAAgCQAAgBgFgEIgHgFQAEgCgBgCIgBgGIAAgBIAAgFQgEgGAAgHIACgGIgBgFIgBgBQAAgFAOgHIABgCIgOgDQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgCQgFgDgKAAIgKAAIAAAAIgIABIgLgBIgEABQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgFAAIgHgEIgDACIgDACIgGACIgHgBIgIABIgHAAIgGAAIgJgCIgCAAIgJABIAAgBIAAAAIACgFIACgDIAQgJQAEgDAHAAQAGAAAIAFIAGABIANACIATACIAHABIAAAAIADAAIAOgBIAHAAIAVACIAHgCIACgBIAEABIAIACIAGACQAHgEADAAIAMACIAFgBIAGACIAEgBIALABIAIgBIAEAAIAFABIAHACIABgBIACgEIAHAAIAKgCIABAAIAEAIIACgEIAGgBIAJgFIABAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIADAIIAJgJIAEgBIADgCQADAAABADIgEAEIAAADIgEACIgEAGIgDACQgFACgDAAIgDAAIgGgBIgDAAIgGAAIgHgBIgHgBIgMACIgFAAIgRgBIgGABIgKgGIgFAGIgDgBIgFAAIgGgBIgDABIgEAAIgKgBIgEAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBABAAAAIABABIgFAHIgEAIIgFAHIgCAEQAAAFAJAEQAEACAAACIAAADIgCAFIgDAAIAAAFIAFADIAAAFIAAAHIAAAEIAAARIABAJIAAAJIABAGQAAAAgBABQAAABAAAAQAAABgBAAQAAABAAAAIgCAAIgDADIAAABIgBABIAEADIAAAGIAEACQgNAIAAAHQAAAHAMAFQgBABAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAAHIAAAFIAAADIACABIgBAKIAAABIAAAGIABALIABAFIgCAJIAAAEIgBABQgEAAgBAEIABADIAFgBIABAFIAAADIAAAEIAAACIAAAPIgBAQIAAAGIACAJIgCAIIgFACIgEACIgDADIgEAAIgLAIQgDgDAAgDg");
	this.shape_7.setTransform(524.45,211.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJCtIgFAAQgEAAgDgCQgDAEgEAAIgFgDIgDgBIgKABIgDgBQgDgGgEAAQgDAAgCAEIgGgDQgEgCgEAAIgGgDIgHgCIAAgEQgEgBgBgCIgCgFIgCABIgBAFIgLgEIgTgRIAAAAIgBgDIgEgEIgGgKIgGgIIAEgJIACgFIAGgJIABgEIACAAIACABIACAEIADAEIgBAGIABAFIAAAFQACAIADAEIADgBIAAAAIABAAIADAJQABADACACIAMAKIAUAJIAFAEIAHABIAHAEIAXAEIARABIAIAAIADAAIACgBIAEACQADgCALgBIAFACIACAAQACAAADgFIACgBIACABIACAAIALgEIAEgBIAGgDIAOgFIAMgIIAHgIIAGgKIAEgDIADgFIADgFIABgEQgBgCAFgIIACgGIAFgBQACgBAAgEIAAAAIgEAAIACgIIgCgEIACgEIACgKIAEgNIAAgKIAEAAIAAgCIgFABQgBgGgGgSIACgDIAAgCIAGAAQALAAAAgCQAAgDgSAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgDgCIgMgGQgEgDgDgBIgMgDIgEgBIgJgDIAAAAIAAgBIgBAAIAAABIgBABIgMgDIgDABIgHABIgCgCQgBgDgDAAIgFADIgDABIgFAAIgEgBIgKAAIgGgNQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQgEAAgEAPQAAgNgDgEIgCgBIgCgBQgMATgBAAIgGgDQgIgBgDgCIgFgCIgDgBIgCAAIgFAAIgEgCQgJgFgDgCQgGgGgGgLQgEgGAAgEIABgFQgDgEAAgEIACgEIACgLIAEgJIANgRIAHgFIAIgIIAFgCIAFgDIAZgMIALgGIAPgFIATgGIAGgBIAcgDIANgCIAHABIAIAAIAEACIATAEIABAHIgFAEIgDACIgEADIgFgCIgFAAIgJgDIgFAAIgFgGQgDgFgHAAQgGAAgDADQgCACgCAFIgDgDIgCAAQgHAAgGADIgOADIgMAFIgHgCIgGACIAAAEIgQAHIgCAEQgJABgFAIIgFgBQgCAAgDAGQgHACgEAHQgHAKAAAIIABANQAAADAEAEQAJAJADABIAHACQAIAEADAHIACACIADABIADgCIACAAIACAAQAAgDABgCIADABIAHgBIAMADIAEAAIACgBIAKADIABAFIAEAAIACAAIgBgDQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIAGAAIAkAAIABACIgBAEIADADQACAAACgEIAEABIAIgEIADABQAKACADABIAGAEIATAHIADACIAEADQAHAEABACIACAEIgBAFIAAACIAFAAQAEAIAAAIIACAPIAAAFIAAADIAAAGIAAADQAAACgCAFIgBACIABAFIgCAEIAAAEIgGANIgBAFIgEAHIAAABIAAABIABAEIgFAHIgIALIgFAJIgEADIgGAIIgHAIQAAABgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgDgBIACgDIgIAGIABAFQgIAGgNAHQgLAGgEAAIgJACIgTAFIgKABIgEABIgFAAIgGABIgGgCg");
	this.shape_8.setTransform(493.425,211.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhYCqIACgEIgEgBIgEACIgKgIIgIgKIgIgGIgCgKIgDgEIgCgEIAAgDQAEABACACIACgIIgBgBIAAABIgEAAIgCgCIgBAAIgEAAIgBgGIgDgDIgBgEIgCgFQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBIgDgFIAAgIIgBgIIABgQIAAgEIACgDQABgCAAgEQABgDgEgDIABgLQAAgFAGgFIAAgFIADAAIABgBIgGgHQAJgFACgEQACgDADgBQgOgDAAgBIADgFIAAgFIACgJIABgEIAFgIIAEABIACgGIgDgKIADgGIACgLIACgDIAGgSIABgDIABgEIAEgHIADgHIAGgQIACgFIACgFIgBgDIABgBIgEAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAgBAAIgBgDQAIgIALgFQANgGAFAAIADABQABAFgHAOIgJASIgCAFIgEACQAAAAABAAQABABAAAAQABAAAAABQAAAAAAABIgCAFIgFAIIgDAGIgDAIIAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAIgDAFIgDACQAAAFABADIAFgCIAAABIAAADIgCAHIABAEIgFAHIgJAgQgCAJgDADIgDAAIABAFIAEACIAAACIgDAEIgBADIAAAGIgBALIgDATIAAADIAAAGIAAACIgBAIIgCABIAAADIgBAIIACACIAEAAIABAEIgBADIAAAFQABAHABAGIADAKIABAEIgCAJIAFABIACAEIAEABQAEANAGAGQAEAEAIAFIAFAFQADACAEAAIAFgBIABAEIAFABIAJgCIADAAIAEAAIAGAAIACABIAGgDIAEgBIAJgDIACgDQAEgBADgEIAFACQACgFAFAAIACAAIADgEIAGgCQAGgGAEgCIACACIAGgCQAAgBABgBQAAgBAAAAQAAgBABAAQAAAAAAAAIAFgDIAGgEIAGgCIAHgEQACgHAEAAIADAAIAAgFQABAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBQAIgJADgBIAFgCIAGgJIAHgJIgCgEIABgHIAAgBIAAgFIgBgFIACgOIAAgQQAEgDAAgCIgCgDIAAgDIgBAAIgBgGIABgEQABgDABgEIgHgCQACgGAAgIIgBgNIgBgMIABgOQAEgDAAgDIAAgCIgFgFQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAMgGIgNgEIABgKIgBgGIgBgJIgCgRIACgIIgEgDQgBgBAAAAQgBgBAAgBQAAAAAAAAQgBgBAAAAIABgDIAHgEIAOgKIADAAIAGgCQADAEAAACIgCATIgBAJIACALIAAACIAAAMIgDAJIAAADIADAFIAAACIgBAEIgBAFIgEADQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABIAAACIABAAIAEgBIABABIgBAFIAEAAIABAZIABAKQgCAHAAAMQAAADACADIAAADIAAACIAAAGIAAAQIABAEIAAABIAAAEIgBAJIABAYIAAABIgBAHQgFACAAADQAAAEACACIAFACQABAAAAABQABAAAAAAQAAABAAAAQAAABAAABIgBAFIAAABIABALQgGAFgDABIAAAAIAHAFIAAAEIACABIABAFIACAJIABAHIACABIABAKIgEADIgFAFIgFADIgMAHIgDABIgFgBIAAgBIACgIIABgIIgDgOIAAgEIACgJIABgIIAAgGIgBgMIgCgCIgEACIgOAJIgJAFIgJAHIgNAIIgEACIgCAEIgGACIgMAIIgOAHQgKAFgCAAIgDAAIABAFQgGACgGAFQgGAEgDAAQgCAAgDgDIgHAEIgDAEIgDgBIgMAEIgKgJQgBAAgCAJQgCgDgGAAIgCAFQgHgBgNgFg");
	this.shape_9.setTransform(461.25,212.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKCpIgDABIgEAAIgDACIgRAAIgGAAIgLgBIgFgDIgFgBIgBACQgRgFgEgFIgJgJQAAgFgDgDIgDAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgJgLIgGgIIACgIQgBgFgEgBIgDABIgFgJIgBgDIgGgVQgCgHgBgFIAAgBIABgDIgBgHIgBgPIAAgGIgBgEIABgEIAFgBIgCgLIgDAAIABgOIABgFIAEgQIADgJIAHAAIABgGQgFAAgBgDQAAgDAKgSIADgEIAGgJIAEgHIADgEIAFACIADgBIgBgIIAIgJQAFgHAGgEIAEgFIAEgCIADgEIANgJIAKgKQADAEACABQADgCABgCIABgEIAKgFIAGgDIAJgDIAFgDIAIgBIAUgFIAFgCIAEgBIADAAIAGAAIAGgCIABgBIAOAIQAEgHABAAIAMABIANAAQAHACAFABIACACIABAAIADgCQAAAAABAAQAAAAABABQAAAAABABQAAAAABABIgCADIgDADIgGAEQgFAEgBAAIgKgCIgHgCIgKgBIgHgFIgCABIgDACIgCAAIgHgCIgFgFIgGAGQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgGgBIgKAEIgHgCIgIADQgBABgHAAIgBAFIgNAFIgKAHIgJAGIgDADIgFgBIgCAAQgBAGgDADIgEAEIgEACIgCACQgBACgFAFIgDgCIAAAEIgFAFIgEAHIgHAKIgGAMIgEABIgCAEIgBAAIgBAAIgBACIACAAIAAADIgDAGIgGARIgDADIABAKIgDAKQgBAEgBAHQgFABgBADQAGAEAAACIAAABIgBANIABAIQgFADAAAEQAAACACADIADgBIACAJIABAFIgPAEIgCAAQAAABAOABIAEACQABAJADAHIgCANQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAABAAIADgCIAEAFQADAHAAABIABAHQAAAAABABQAAAAAAABQABAAAAABQABAAAAAAQAFAEADADQADAEAEAFIADADIADADIAEACIAEABIABADIABgCQAGAIAIAFIAIAEIAGADQAEAAAGgJQAFAEAHABIAFgBIADgBIADAAIACAAIARAAIAGgBIAGABIADAAIAJgBIADgEIAOgCIALgBIAEACIABAAQADAAACgGIAFAAIALgCIAIgBIANgEIgBgCQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIANgEIgNgJIAMgJIgNgSIABgBQABgEAAgGIgCgNIAAgTIAAgCQAAgGACgBIAKgEIABgBIgBAAQgFgDgGAAIgCAAQgBgKgFgDIgDgCIgEABIgCgCIgEABIgQABIgFgBIgDABQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAgDAEgEIAFgDIAFAAIAGAAIAJADIAAAAQADAAADgDIAJABIADAAIADAAIAGAAIABAAIAKgBIAEAHIAAABIgCAKIAAACIACANIgBAPIgCAKIgBAGIgDAAIgCAJIAAAGIgEABIANAMIAAACIgCAEIgDACIADAGIADAAIABAEIAAAHIAAABIABAHIABADIgBAEIAAACIAAADIgFABIgDAFIgNAAIgOADIgHgBIgCACIgTAEIgCAAIgDAAQgCgBgIAEIgMAAIgIADIgIABIgNADIgGAAQgOADgLABQgDgDgBAAgACEBWIAFgDIgBABIgDADIgBgBgACEBWIAAAAgACKBPIADACIgEACIABgEg");
	this.shape_10.setTransform(428.8,210.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhYCqIABgEIgDgBIgDACIgLgIIgIgKIgHgGIgEgKIgCgEIgCgEIAAgDQADABADACIADgIIgBgBIgBABIgFAAIgBgCIgBAAIgEAAIgBgGIgDgDIgBgEIgBgFQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIgCgFIgBgIIgCgIIACgQIAAgEIACgDQABgCAAgEQAAgDgDgDIABgLQAAgFAFgFIABgFIADAAIABgBIgGgHQAIgFADgEQACgDADgBQgOgDAAgBIADgFIAAgFIACgJIABgEIAFgIIAEABIABgGIgCgKIACgGIADgLIACgDIAFgSIACgDIACgEIADgHIACgHIAHgQIACgFIABgFIAAgDIABgBIgEAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIgCgDQAJgIALgFQAMgGAGAAIACABQAAAFgGAOIgKASIgBAFIgEACQAAAAABAAQABABAAAAQABAAAAABQAAAAAAABIgBAFIgHAIIgCAGIgCAIIgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBIgBAAIgCAFIgDACQAAAFACADIADgCIABABIgBADIgBAHIABAEIgFAHIgJAgQgDAJgCADIgCAAIABAFIACACIAAACIgCAEIgBADIAAAGIgBALIgDATIgBADIABAGIAAACIgBAIIgCABIAAADIAAAIIABACIAEAAIABAEIAAADIAAAFQAAAHABAGIADAKIAAAEIgBAJIAFABIACAEIADABQAFANAGAGQAEAEAIAFIAEAFQAEACAEAAIAFgBIACAEIAEABIAJgCIAEAAIADAAIAHAAIACABIAFgDIAEgBIAJgDIACgDQAEgBADgEIAGACQACgFAEAAIACAAIADgEIAGgCQAGgGAEgCIACACIAGgCQAAgBAAgBQABgBAAAAQAAgBAAAAQABAAAAAAIAEgDIAHgEIAHgCIAGgEQABgHAFAAIAEAAIAAgFQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBQAIgJACgBIAGgCIAFgJIAHgJIgBgEIABgHIAAgBIAAgFIgBgFIABgOIAAgQQAGgDAAgCIgDgDIAAgDIgCAAIgBgGIACgEQACgDAAgEIgHgCQADgGgBgIIAAgNIgCgMIACgOQADgDAAgDIgBgCIgEgFQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAMgGIgNgEIABgKIgCgGIAAgJIgCgRIABgIIgDgDQgBgBAAAAQgBgBAAgBQAAAAAAAAQAAgBAAAAIABgDIAFgEIAPgKIADAAIAGgCQADAEAAACIgCATIgBAJIABALIABACIgBAMIgCAJIAAADIACAFIABACIgBAEIgBAFIgEADQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABIAAACIAAAAIAFgBIABABIgBAFIAEAAIABAZIABAKQgCAHAAAMQAAADACADIABADIAAACIgBAGIAAAQIABAEIABABIgBAEIAAAJIAAAYIAAABIgBAHQgFACAAADQAAAEACACIAFACQABAAAAABQABAAAAAAQAAABAAAAQAAABAAABIgBAFIAAABIABALQgGAFgDABIAAAAIAHAFIABAEIABABIABAFIABAJIACAHIADABIABAKIgGADIgEAFIgGADIgLAHIgDABIgFgBIAAgBIACgIIABgIIgDgOIAAgEIACgJIAAgIIAAgGIgBgMIgBgCIgEACIgOAJIgJAFIgJAHIgNAIIgEACIgCAEIgGACIgMAIIgPAHQgIAFgDAAIgDAAIABAFQgGACgGAFQgGAEgEAAQgBAAgDgDIgHAEQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAABIgEgBIgMAEIgKgJQgBAAgBAJQgDgDgFAAIgDAFQgIgBgMgFg");
	this.shape_11.setTransform(395.7,212.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AB9CcQgBgDgCgFIgFgPIABgCIgDgGIAAgFIgBgCIABgGIgEgFIADgEIABgCIAAgDIgIABIgFgJIgDgLIgCgGIgCgOQgEgGgFAAQgGAAgBAOIgBAAQgCAAgDgCQgEgEgFgBIgGgDQgGgDgDAAIgJACIgFgBIgEABIgFAAIgEABIgHAAIgHAAIgCAAIgJgCIgFABIgFgCIgHACIgJACIgFgGQgEABgGADIgHABIgCABIgEgBIgHgBIgIACQgDABgEAAIgDAFIgGAKIgHAOIgDgBIgBACIAAAFIABACIgDAFIgIARIgFAJIgBACIgJAGIAAACQAAACAEADIgDAIIgFADQgCACgDAGIgFADIgEACIgDgCIgBAAIgDAAQgDgEgDgBIABgCIAEgDIAGgJIAFgEIADgDIgBgEQAAgDAEgEIAHgIIAJgSIADgBIABgBIgBgEIABgCIAEgGIAQgbIAAgCIgCAAIgCAAIgCAAIgCAAIgBgFIACgEIACgIIAEgFIAEABIAIACIAAAAIAAgDIAAgFIACgCIAEgHIAGgIIABgEIAGgHIADgIIAJgQIALgWIADgFIABgEIAFgHIAAgBIAAgDIADgFIACgGIAEAFIABgDIgBgEIACgGIACgFIABgEIABgEIAEgIIACgGIAGAAIAAgCIgFgCIAAgDIAEgFIgCgBIAAgBIAFgHIACgIIAAgDIAAgBIAAgDIAAgDIALgKIAEACIACgEQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIADABQAAgDADgCQADgDACAAQAEAAABANIACALQABAGADAHIACAMIAAAEIgGAEIADAEIAGADQAEABADAJIACAIIgCAEIADADIAFAFIACAGIADAJIABAFQAFAGAAAGIAAAFIAEAGIAGAOIgDADIACAFIADAAIgBAFQARAPAAAQQABAFAGAMIAJAVIADAHIAKAYIAAAGQAKAFAAAGQgBACgFACIADAEIAEACQABAAADAGIAEAMIAJAQQgEACAAADIABADIgIADIgFAAQgCABgJAEQgEgKgBgFgAggAoQAEgBAHADIAKABQADAGAFAAIAJgGIAEABIAJAAIAEACIAEgBIAFABIAEgBIAEACIAJgDIAHAAIAOgCIAMABQABAAAAAAQABAAAAAAQAAAAAAgBQABAAAAgBIgCgGIgBgEQgDgCgBgDIgGgNIgCgGIgDgFIABgHIgBgGIgGAAIgCgEIgBgFIgEgFIgDgIIgCgEIgEgMQgDgFABgEIADgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgCAAIgDgFIgDgHIgBgGIgCgFIgDgHIgFgGIgDgLIgDgFIgEgJQgEADgCADQgCAFAAAGIgBAAIgFALIgKATIgDAJQgDACgBADQgDAIgFACIAAAEIgBABIgBAAIgFAAIgCADIAFACIgGAOQgHAQgGAFQgCAAgBAFQAAADgBACIgEAJIgEAEIgCAGIgEAIIgCAHIAEgDIADADIAGgBIABAEIAJgBg");
	this.shape_12.setTransform(364.2,211.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkBfIABgJIAAgDIABgDIABgDIAAgCIgCgDIABgFIAAACIAAgCIAAgGIAAgCIAAgBIAAgEIAAgJIAAgGIAAgDIADgDIABgBIgBgEIgCABIgBgNIAAgSIAEgBIgCgFIgDgCIABgFIAAgDIgBgMQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAIAGgFQgCgCgFAAIAAgFIABgEIgCgEIAAgEIAAgEIAAgGIABgFIgDgJIAAgDIgCgCIAEgEIAHgEQACgBADAAIACABIgFADIgEAEIAIAJIAAACIgBAEIgBACIgBABIgBABIAAACIAAADIACgBIACgBIgBAUIABADIAAADQAAACgDADIABADIACACIAAADIgBAGIABAEIAAAHIgBAEIABAEIAAACIAAADIAAACIgBAMIABAFQAGgEAHgIIAEABIAGgDIAEgBIADACIABADIACAAIABgDQABAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAIAGAAIAKACIAEAEQABACACABIgBAEIADABQADADAAADIgBAIIgBAFIgBABIABAFIgCADIAAABIADADIgBACIAAADIAAAHIABABIgCAEIABAIIAAAKIAAABQgCACgDAAIgEACIgEACIgEgDIADgHQACgEAAgEIgCgGIABgBIAAgEIACgKIgCgBIABgOIABgBIAAgBIgBgFIAAgBIABgCIAAAAIgCgEIgCgDIgEgBIgEgDIgFAAIgHgBIgCAAIgDABIgJABIgBAAIgGAEIgDABIgIAIQAAADAGACIAAADIgBAMIgDABIAAABIADAGIABAKIABADIgBAFIAAADIAAACIAAACIgBADIgGACIgFAEg");
	this.shape_13.setTransform(322.6,199.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLA9IgDgEIAAgDIgBgEIAAgEIAAgHQAAgEACgCIgBgFIAAgUQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAAAIAAgDIgDgBIAAgBIAAgBIABgKIgHgBIgFABIgCAAIgDABQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgDAEgDQABgEACAAIAFABIAGgCIAAgDIAAgRIgBgFIgBgDIgBgCQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABgBQAEgEAFgBQABgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAIABABQABAAAAAAQAAABAAAAQAAABAAABQAAAAAAABIAAASIgCAFIgCADIAAAFIADAAIgBAGIAKADIADAAIAGgBIAHgBIAGgDIADABIAAAFQgBABgGAFIgCABIgBACIgDABIgCgBIgEgCIgDgBIgDgDIgFAFIgEgBIgCABIABAKIAAAEQgEABAAADIABACIAEAAIgBAPIgCAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAIABADIACgBQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAIAAAFIAAABIAAAGIABAEIAAADIABABIgBADQADACAEAAQAEAAADgCIADgCIAFgGIAFgDIADABIAAACIgCAIIgGACIgNAGIgDABIgEACIgCgBIgBgBIgBACIgDABQgCAAgEgEg");
	this.shape_14.setTransform(313.875,203);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJBeIgOgEIgBABIgBAAIgEgBIgBgBIAAgCIgFACQgCgDgEgBIAAgBIgDAAIgDgEIgHgGIgCgBQgCgEAAgDIAAgCQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAgBAAIgDACIgGgJIgEgMIgDgHIgCgEIgBgDIAAgFIgCgGIABgGIAAgEIABgCIABgBIAEgBIgBgFIAAgDIgDACIgBgHQAAgHADgDQABgDAFgCIAAgBIgCgCQACgEAHgPQAHgMACAAIACABIAFgEIgBgDIADgDIAMgJIAJgGIAAAAIAAgCIAEADIAFgEIAMgIIAAABIACAAIADgBIALAAIAFgBIAJAFIAFAAIAAABQAAAHAEAAQABgEABgBIAOAEIgBAFIAFABQADAEAFAFIAHALIgBAGQAFABAEANQABAFAAAEIgCABIACAEIACABIABALIAAADIgCAIIABAEIgDALQgHAAAAAFQAAACACADIACAEIgDAIIgFAPIgHAHIgFAGIgRALIgDAFIgEAAQgCADgFACIgHAFIgCAAIgHACIAAAAIgBAAIgHgCQgCAAgCADIgFgBgAgJBLIAJABIAGABIAJgDQAOgCACgCIAGgGIAFgDIAEgHIAGgHIABgDIACgHIAEgDIAAgEIABgHIAAgCIgBgFIAEgEIgDgEIAAgIIAAgIIAAgFQAAgLgBAAIgEgLIACgGQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAgBAAQgBAAgDADQgBgDgDgEIAAgDIgBgEIgFABQgEAAgCgEIAAgDQAAgBAAAAQAAgBgBgBQAAAAAAAAQgBgBAAAAIgEgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgFgDIgDgCIgHABIgJgCIgDAAIgPACIgCACIgEABIgEACQgKAEgCADIgFAFIgEAEIgGAKIgEAGIgCAFIgFAJIgBAMIgDAKQAAAPACAFIAIAPIAOAQIgBADQAAABABAAQAAABAAAAQAAABABABQAAAAAAABQABAAAAAAQAAABAAAAQAAAAABAAQAAAAABAAIAEgCQACAEAFABIAKAFIgUAFIATACIAGgCIgBgBIAAgBIAHAEg");
	this.shape_15.setTransform(300.85,213.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFBiIAAgDIAAgGIAAgGIAEgDQAAgBAAAAQAAgBgBAAQAAgBAAgBQgBAAAAgBIgBgBQAAgCADgFQgCgDAAgEIAAgHIADgHIAAgFIgBgHIAAgCQAAgEABgBIACgCIABgDIgDgLIAAgHIAAgEIgCgHQgBgDAAgGIACggIABgGIgCgNIgFgBIgBABIgKAAIgBgDIABgEIAJgFQADgBACgCIAMgNQAEgDADAAIAFACIgBAJIAAACQAAAIgJAEIgLAGIAPAIIAFAGIgBAAQgEABAAAEQAAAFAFABIAAACQAAAEgDACIAAAFIAAAEIgBALIADAKIgBAIIAAACIACAIIgCAIIgBAEIABACIABAJIAAAFIAAABIAAADIgBADIAAACQgEADAAADQAAADAEADIAAADIABAMIAAAEIAAAFIABABIgBACIgMAHIgIACIgDgBg");
	this.shape_16.setTransform(281.825,212.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGCsIACgFIgCgEQAAgHADgKIABgEIgBgPIABgEIACgBIAAgFQAHgBAAgDIAAgDIgEABIgBgCIgEgCIABgLIABgOQABgBABgEIAAgBIgDAAIgBgJIAAgGIAAgEIAAgEIABgJIgBgHQgBgFgDgDIgEgCIgBgDIgBgEIgCgEIgEgEIACgFIgCgGIgCgBIgIAAIAAABIgDgGIgFgIIgDgIIgEAAIgCgDQgDgEAAgEIgDABIgHgKIgDgGIgEgGIgFgIIgCgFIgCgDQgBgBAAgFQgFgBgDgEIgGgJIgEgGIAAgDIAAgGIgGgCIgDgHIgEgEIgFgHIgFgIIAAAAIAAgBQAEgDAAgDQgEgDgCAAIgDACQgGgGgCgGIAAgBIAGgFIAHgIIAMgIQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABIADAEIgBACIAAADQACACACADIAHALIAAAEIAAAGIAFAEQADADADAFIAAACIAAABIgCAGIACADIABAAIADgCIADAIIAEAAIAFAJIAHAMQAGAKAAACQAAACgCAEIAHAEIABgBIABAAIADAEQABAFABAAIAEACIAGAIIAJANQADAGADACIAFADIAOAUIAAABIAAACIACAAQABAAAEgCIAHgHIADgGIADgDIAFgKIAOgRIACgHIAEgFIAEgHIAGgKIACgGIAIgMIAEgLIAIgOIAAgGIAEgIIAHgKIAEgNIADgIIADABQABgFADABIAEABIAAABQAGgFAKgCIAAAIIgBABIgCABQgDACgGAMQgEAHgGAEQAAADgCADIABAFIgFAGQgEAEgDAGIgDAEIgHANIgEADIgEAGIAAABIAAADIgCAGIgBAAIgDABIgCAEIgCACIAAAFQAAAEgIAMIgDAIIgGAGIgEAFQgDAFgCAAIgCABQgDADAAAEIAAAEIgEAEIgEAFIgDAGQgBACAAAQIgBAJIAAAEIABAHIgFADIgCAGIAEAFQABAAAAAAQABABAAAAQAAABAAABQAAAAAAABIAAANIAAADIABAJIgBAEIAAAHIgBAOIAAAEIACAIIABAAIAAADIAAAHIgBACIABAPIgBAHIgDAAIgHAEIgMAFIgEAFQgCAAgCgDg");
	this.shape_17.setTransform(239.325,210.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AB9CcQgBgDgCgFIgFgPIABgCIgDgGIAAgFIgBgCIABgGIgEgFIADgEIABgCIAAgDIgIABIgFgJIgDgLIgCgGIgCgOQgEgGgFAAQgGAAgBAOIgBAAQgCAAgDgCQgEgEgFgBIgGgDQgGgDgDAAIgJACIgFgBIgEABIgFAAIgEABIgHAAIgHAAIgCAAIgJgCIgFABIgFgCIgHACIgJACIgFgGQgEABgGADIgHABIgCABIgEgBIgHgBIgJACQgCABgEAAIgCAFIgHAKIgHAOIgDgBIgBACIAAAFIABACIgDAFIgIARIgFAJIgBACIgJAGIAAACQAAACAEADIgDAIIgFADQgCACgDAGIgFADIgEACIgDgCIgBAAIgDAAQgDgEgDgBIABgCIAEgDIAGgJIAFgEIADgDIgBgEQAAgDAEgEIAHgIIAJgSIADgBIABgBIgBgEIABgCIAEgGIAQgbIAAgCIgCAAIgCAAIgCAAIgCAAIgBgFIACgEIACgIIAEgFIAEABIAIACIAAAAIABgDIgBgFIACgCIAEgHIAGgIIABgEIAGgHIADgIIAJgQIALgWIAEgFIAAgEIAFgHIAAgBIAAgDIADgFIACgGIAEAFIABgDIgBgEIACgGIACgFIABgEIABgEIAEgIIACgGIAGAAIAAgCIgFgCIAAgDIAEgFIgCgBIAAgBIAFgHIACgIIAAgDIAAgBIAAgDIAAgDIALgKIAEACIABgEQABgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIADABQAAgDADgCQADgDACAAQAFAAAAANIACALQABAGADAHIACAMIAAAEIgGAEIADAEIAGADQAEABADAJIACAIIgCAEIADADIAFAFIACAGIADAJIABAFQAFAGAAAGIAAAFIAEAGIAGAOIgDADIACAFIADAAIgBAFQARAPAAAQQABAFAFAMIAKAVIADAHIAKAYIAAAGQAKAFAAAGQgBACgFACIADAEIAEACQABAAADAGIAEAMIAJAQQgEACAAADIABADIgIADIgFAAQgCABgJAEQgEgKgBgFgAggAoQAEgBAHADIAKABQADAGAFAAIAJgGIAEABIAJAAIAEACIAEgBIAFABIAEgBIAEACIAJgDIAHAAIAOgCIAMABQABAAAAAAQABAAAAAAQAAAAAAgBQABAAAAgBIgCgGIgBgEQgDgCgBgDIgGgNIgCgGIgDgFIABgHIgBgGIgGAAIgCgEIgBgFIgEgFIgDgIIgCgEIgEgMQgDgFABgEIADgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgCAAIgDgFIgDgHIgBgGIgCgFIgDgHIgFgGIgDgLIgDgFIgEgJQgEADgBADQgDAFAAAGIgBAAIgFALIgKATIgDAJQgDACgBADQgDAIgFACIAAAEIgCABIAAAAIgFAAIgCADIAFACIgGAOQgHAQgGAFQgCAAgBAFQAAADgBACIgEAJIgEAEIgCAGIgEAIIgCAHIAEgDIADADIAGgBIABAEIAJgBg");
	this.shape_18.setTransform(210.3,211.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiECoQgDAAAAgFIAAgCIAIgDIAJgFQAAgFADgDIgBgJIACgNIAAAAIAAgEIgBgDIACgLIABgCIgCgHIANgEIgNgXIABAAQAFgBAAgEIgBgFIgDABQgCgBgBgFIABgEIAAgZIgBgDIAAgDQABgDACgEIgDgDIAAgEIADgEQgDgCAAgEIAAgBIAAgEIgBgPIAAgEIABgDIAEAAQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBIgCgDIgDgDQgEgBAAgDIABgKIgBgjIABgBIABAAIABgIQABgCgFgCIgDgQIgBgHIgBgJIgBgRIgEAAIgCgBIgDACIgHABIgBgEQABgEAEgCIADgDQADAAAFgFIAEAAIAEABIAIgBIAIADIABAAIADgBIABAAIAdgBQABAAAAAAQAAAAABAAQAAAAABABQAAAAABABIAEABIADgCIASABIABAAQACADACAAQADAAACgDIAHAAIAWADIAGAAIAJACQAAABAAABQAAAAABABQAAAAAAAAQABABAAAAIAHABQABgEACAAIADABIAGAAQABAAAEADIAGADIAEgBIAOAHQAOAEACABIACACIADAAIAFAEIAHAGIAHAFIAKAHIgBAGQAAAEACAAIAFgBIAIAJQAEAFAAABIABAFIAEAMIAAAIIADALIAAANIACAGIgBAOIgCAPIgEAMIgCAAIAAABIABAEIAAABIgBAGIgBAEQgDAJgCgBQgCABgBgGIgEAGIABADIAAADIACAFIgHANIgDAGIgBACIgHAIIgBADIgFAGIgDADIgCgBIgDAAIgCgDQgCAEAAABIABAFIgJAJIgFAEQgFgCgFgBIgBACIADAGIgLAJIgLAHIgEAEQgEgDgDAAQgBAFgCACIgKADIgCABIgGAGIgEAAIgEADIgGADIgCABIgOAGQgEAAgGACIgPAGIgLABIgDABIgDABIgGABIgEAAIgGACIgJAAIgMABIgDAAIgHAAIgXABIgCAAIgBAAgAhZCZIAGAAIADACIACgEIADAAIAPAAIAEABIADgEIAGgBIACAAQAIAAACgBIAFgCIAGgDQAOgFADgDIAFgBIAJgFIADAAIAIgFIAHgCIAAgDIAEgCQAGgCAIgHIAHgDIAPgPIAJgIIAFgHIAHgIIADgFQABgCAJgNIACgEIADgIQACgEAAgFIADgLQADgJAAgCIABgHIABgJIABgJQAGgCgBgHQABgGgGgCIgCgNIAAgFIgCgHIAAgHIgFgIIgGgKIAAgFIgCgCIgDAAIgGgEIABgFIgBgDIgFgBIgEABIAAAAIgKgIIgHgEIgFgFIgEgCIgMgHIgFgBIgDgCIgIgBIgHgCIgMgDIgIgCIgOgDIgDgDIgCgCIgFACIgCABIgGgBIgGAAIgQgBIgOAAIgIAAIgBAAIgBAAIgDgBIgGgBIgCAAIgEABIgBAEIAAAGIgBAGIgCAKIgCgBIgCADIABACIABACIADAAQACAEAAAHIACAEIgBAMIABAGIgDAGIABAGIAAANIAAADIAAAGIABAHIgBADIgDgBIgBADQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIACAAIAEABIgFAGQgIAFAAAFIAOAWIgCANIgEACIABABIAEABIAAACIAAAZQAAAYABABIAAACIgBAHIAAACIACAPIAAACIgBADIgHgCIgBAFQgBAGAHgBIABAAIABAIIABAMIABANQgFAEgCAFIgEABIAAABIABABIABgBg");
	this.shape_19.setTransform(178.7,211.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhyCjIABgBIAFgMIABgJIADgZIgCgCIgBgBIANgHQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgFgNgIIADgBIABgHIAAAAIgCgEIgBgJIACgWIAAgZIADgEIACgGIgFgDIgBgMIAAgDIABgNIAAAAIgCgQIACgCIADgDIAAgDIgEgDIAAgGIAAgNIADgFIgCgFIAAgDIgDgBIAAgBIAIgPIABgOIAEgGIgNgPIAAgMQAAgEgDAAIgEABIgCgDQAAgDADgCIACgBIAEAAIAHgFIAIgEQACAAACAEIACAAIAFABIADgDIAIABIAGABIAQgCIAAAAIADAAIAeACIAEABIAHAAIACAAIAEgCIALABIAIACIAGAAIAEACIAGAAIAFAAQAGABAHADQAEACAAAEIAAABIgDAAIAAAEIADACIABgBIAAgCIACgEIACACIACABQAFAEAAACIgCAOQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAIgDAHQgDAEgEADIgCACIgLANQgHAFAAABQgCABgBADIgFAEIgDgBIgEADQgDACgDAEIgFAFIgFACIgCACIgFgBIgCAFQgFABgDADIABABQgDAFgDABIgHADQAAAAAAAAQgBAAAAABQgBAAAAAAQAAABgBABIgIAGIAEABIAGANIAFAHIADAEIgDACIACACIACAAQADAAADAEIACAEIAEAFQgDADAAACIABACIAHABIACAEIAEAEIAGAMQACAEALAPIAFAIIAGAJIACAGIAAADIAAAAIAAADIAJAGQADACAEAGIAMASIABAHIAIAGIACgBIACABIACAFIAGAEIADADIAGgCIAFAAIACgBIACADIgBADIgHAEIgFADIgFABIgKAEIgFACIgEADIgDgEIgFgDIgHgOQgBgBAAgGIgKgGIADgHIgHgGIgJgPIAAgEIgIgGQgIgJgBgLQgCgEgFgDQgEgCgGgMQgDgBgCgCIgEgIQAAgEgCgDQgDgFgCAAIgDAAIgFgJIgLgQQgFgHgFgEQgKgLgDAAIgUAJIgBAAIgEgBIgCAHIAAACIAAAEIAAAEIABAIIgBAGIAAAEIAAAHIAAAPIABAFIAAAOIABAIIgBAEQgBACAAADIgEACIABAJIAEABIgBAFIABAFIAAACIAAAEIAAADIAAAHQgEACAAAEQAAADAEABIAAADIAAALQAAACgCAEQgBADgDACIgEACIgDAEIgFgBQgFAIgHAAIgFgCgAhRhMIABAQIAAAGIAAAJIgBAOIgDABIAAADIABAAIAEABIAEgDIAGgBIADABIADgBIAAgBIAMgEIAEgBIAJgGIAKgHIAegSIANgHIAHgIIAGgFIAFgGIAFgCIAFgHIAEgEIABgGIAAgDIgBgDIAAgCIADgDIAAAAIgFgDIgDgFIAAgCIAAgBIgBgDIAAgCIgFgBIAAACIgFgCIgIgCIgFgDIgEABIgIgEIgLAAQgCAAgDgCIgKABIgFACIgHgDIgGgCQgFAAgJAGQgDACgCAAIgBgBIgGgJIgFADQgIAAgBABQgCACgBADIAAANIgDAIIgCgBIgBADIAAAAIACAEIAEAGIAAAKIABADIgBADIgBAGIgEAEQAAAEgCADIABAAIADgBg");
	this.shape_20.setTransform(151.575,211.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhYCqIACgEIgEgBIgDACIgLgIIgIgKIgIgGIgCgKIgDgEIgCgEIAAgDQAEABACACIACgIIgBgBIAAABIgEAAIgCgCIgBAAIgEAAIgBgGIgDgDIgBgEIgCgFQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBIgCgFIgBgIIgBgIIABgQIAAgEIACgDQABgCAAgEQABgDgEgDIABgLQAAgFAGgFIAAgFIADAAIABgBIgGgHQAJgFACgEQADgDACgBQgOgDAAgBIADgFIAAgFIACgJIABgEIAFgIIAEABIACgGIgDgKIADgGIACgLIACgDIAGgSIABgDIACgEIADgHIADgHIAGgQIACgFIACgFIgBgDIABgBIgEAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAgBAAIgBgDQAIgIALgFQANgGAFAAIADABQABAFgHAOIgJASIgCAFIgFACQABAAABAAQABABAAAAQABAAAAABQAAAAAAABIgCAFIgFAIIgDAGIgDAIIAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAIgDAFIgDACQAAAFABADIAFgCIAAABIAAADIgCAHIABAEIgFAHIgJAgQgCAJgDADIgDAAIABAFIAEACIAAACIgDAEIgBADIAAAGIgBALIgDATIAAADIAAAGIAAACIgBAIIgCABIAAADIgBAIIACACIAEAAIABAEIgBADIAAAFQABAHABAGIADAKIABAEIgCAJIAFABIACAEIAEABQAEANAGAGQAEAEAIAFIAFAFQADACAEAAIAFgBIABAEIAFABIAJgCIADAAIAEAAIAGAAIACABIAGgDIAEgBIAJgDIACgDQAEgBADgEIAFACQACgFAFAAIACAAIADgEIAGgCQAGgGAEgCIACACIAGgCQAAgBABgBQAAgBAAAAQAAgBABAAQAAAAAAAAIAFgDIAGgEIAGgCIAHgEQACgHAEAAIAEAAIAAgFQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBQAIgJADgBIAFgCIAGgJIAHgJIgCgEIABgHIAAgBIAAgFIgBgFIACgOIAAgQQAEgDAAgCIgCgDIAAgDIgBAAIgBgGIABgEQABgDABgEIgHgCQACgGAAgIIgBgNIgBgMIABgOQAEgDAAgDIAAgCIgFgFQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAMgGIgNgEIABgKIgBgGIgBgJIgCgRIACgIIgEgDQgBgBAAAAQgBgBAAgBQAAAAAAAAQAAgBAAAAIAAgDIAHgEIAOgKIADAAIAGgCQADAEAAACIgCATIgBAJIACALIAAACIAAAMIgDAJIAAADIADAFIAAACIgBAEIgBAFIgEADQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABIAAACIABAAIAEgBIABABIgBAFIAEAAIABAZIABAKQgCAHAAAMQAAADACADIAAADIAAACIAAAGIAAAQIABAEIAAABIAAAEIgBAJIABAYIAAABIgBAHQgFACAAADQAAAEACACIAFACQABAAAAABQABAAAAAAQAAABAAAAQAAABAAABIgBAFIAAABIABALQgGAFgDABIAAAAIAHAFIAAAEIACABIABAFIACAJIABAHIACABIABAKIgEADIgFAFIgFADIgMAHIgDABIgFgBIAAgBIACgIIABgIIgDgOIAAgEIACgJIABgIIAAgGIgBgMIgCgCIgEACIgOAJIgJAFIgJAHIgNAIIgEACIgCAEIgGACIgMAIIgOAHQgKAFgCAAIgDAAIABAFQgGACgGAFQgGAEgDAAQgCAAgDgDIgHAEIgDAEIgDgBIgMAEIgKgJQgBAAgBAJQgDgDgGAAIgCAFQgHgBgNgFg");
	this.shape_21.setTransform(120.6,212.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgdClIACgGIgBgFIACgFIAAgKIABgFIAAgIQABgCAEgEQgDgDgBgDIABgIIAAgJIAAgLIADgDIAAgDIABgEIgDgDIgBAAIABgEIAAgcIABgHIAAgHIgBgHIAAgIIgBgEIACgHIABgEQAAAAAAAAQABAAAAgBQABAAABAAQABAAAAAAIAAgDIgFABIgBgHIABgFIAAgEIgDgCIAAgFIAAgiQAAgDAHgCQAFgDAAgCQAAgBgFgEIgHgFQADgCAAgCIgBgGIAAgBIAAgFQgEgGAAgHIACgGIgBgFIgBgBQAAgFAOgHIACgCIgPgDQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgCQgFgDgLAAIgJAAIAAAAIgIABIgLgBIgEABQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgDAAIgIgEIgDACIgDACIgGACIgHgBIgIABIgHAAIgGAAIgJgCIgCAAIgJABIAAgBIAAAAIACgFIADgDIAPgJQAFgDAGAAQAGAAAIAFIAGABIANACIATACIAHABIAAAAIADAAIAOgBIAHAAIAVACIAHgCIACgBIAEABIAJACIAFACQAHgEADAAIAMACIAFgBIAGACIAEgBIALABIAIgBIAEAAIAFABIAHACIABgBIACgEIAHAAIAKgCIABAAIAEAIIACgEIAGgBIAJgFIABAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIADAIIAJgJIAEgBIADgCQADAAABADIgEAEIAAADIgEACIgEAGIgDACQgEACgEAAIgDAAIgHgBIgCAAIgGAAIgHgBIgGgBIgNACIgFAAIgRgBIgHABIgJgGIgFAGIgDgBIgEAAIgHgBIgCABIgFAAIgKgBIgDAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIABABIgEAHIgFAIIgEAHIgDAEQAAAFAJAEQAEACAAACIAAADIgCAFIgDAAIAAAFIAFADIAAAFIAAAHIAAAEIAAARIABAJIAAAJIAAAGQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgCAAIgDADIAAABIgBABIAEADIAAAGIADACQgMAIAAAHQAAAHAMAFQgBABAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAAHIAAAFIAAADIABABIAAAKIAAABIAAAGIAAALIACAFIgCAJIAAAEIgBABQgEAAgBAEIABADIAFgBIAAAFIABADIgBAEIAAACIABAPIgBAQIAAAGIABAJIgBAIIgFACIgEACIgCADIgFAAIgLAIQgDgDAAgDg");
	this.shape_22.setTransform(89.4,211.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AB9CcQgBgDgCgFIgFgPIABgCIgDgGIAAgFIgBgCIACgGIgFgFIADgEIABgCIAAgDIgIABIgFgJIgDgLIgCgGIgCgOQgEgGgFAAQgGAAAAAOIgCAAQgCAAgDgCQgEgEgFgBIgHgDQgFgDgEAAIgIACIgFgBIgFABIgEAAIgEABIgHAAIgHAAIgCAAIgJgCIgFABIgFgCIgHACIgJACIgFgGQgFABgFADIgHABIgCABIgEgBIgHgBIgIACQgDABgEAAIgCAFIgHAKIgHAOIgDgBIgBACIAAAFIABACIgDAFIgIARIgFAJIgBACIgJAGIAAACQAAACAEADIgDAIIgFADQgCACgDAGIgFADIgEACIgCgCIgCAAIgDAAQgDgEgDgBIABgCIAEgDIAGgJIAEgEIAEgDIgBgEQAAgDAEgEIAHgIIAJgSIADgBIABgBIgBgEIABgCIAEgGIAQgbIAAgCIgCAAIgCAAIgCAAIgCAAIgBgFIACgEIACgIIAEgFIAFABIAHACIAAAAIABgDIgBgFIACgCIADgHIAHgIIABgEIAGgHIADgIIAJgQIAKgWIAFgFIAAgEIAEgHIABgBIgBgDIAEgFIACgGIAEAFIABgDIgCgEIADgGIADgFIAAgEIABgEIAEgIIACgGIAGAAIgBgCIgEgCIAAgDIAEgFIgCgBIAAgBIAFgHIACgIIAAgDIAAgBIAAgDIAAgDIALgKIAEACIACgEQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIACABQABgDADgCQADgDACAAQAEAAABANIACALQABAGADAHIACAMIAAAEIgGAEIACAEIAHADQADABAEAJIACAIIgBAEIACADIAFAFIACAGIADAJIAAAFQAGAGAAAGIAAAFIAEAGIAGAOIgDADIACAFIADAAIgBAFQARAPAAAQQAAAFAHAMIAJAVIADAHIAKAYIAAAGQAKAFgBAGQAAACgEACIACAEIAEACQABAAADAGIAEAMIAIAQQgDACAAADIABADIgIADIgFAAQgCABgJAEQgEgKgBgFgAggAoQAEgBAHADIAKABQADAGAFAAIAJgGIAEABIAJAAIAEACIAEgBIAFABIAEgBIAEACIAJgDIAHAAIAPgCIALABQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBIgBgGIgBgEQgDgCgBgDIgGgNIgCgGIgDgFIABgHIgCgGIgFAAIgCgEIgBgFIgEgFIgDgIIgCgEIgEgMQgDgFABgEIADgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgDAAIgCgFIgDgHIgBgGIgDgFIgCgHIgFgGIgDgLIgDgFIgEgJQgEADgBADQgDAFAAAGIgBAAIgFALIgKATIgDAJQgDACAAADQgDAIgGACIAAAEIgBABIgBAAIgFAAIgCADIAFACIgGAOQgHAQgHAFQgBAAgBAFQABADgCACIgEAJIgEAEIgBAGIgFAIIgCAHIAEgDIADADIAGgBIABAEIAJgBg");
	this.shape_23.setTransform(58.55,211.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJCtIgFAAQgEAAgDgCQgDAEgEAAIgFgDIgDgBIgKABIgDgBQgDgGgEAAQgDAAgCAEIgGgDQgEgCgEAAIgGgDIgHgCIAAgEQgEgBgBgCIgCgFIgCABIgBAFIgLgEIgTgRIAAAAIgBgDIgEgEIgGgKIgGgIIAEgJIACgFIAGgJIABgEIACAAIACABIACAEIADAEIgBAGIABAFIAAAFQACAIADAEIADgBIAAAAIABAAIADAJQABADACACIAMAKIAUAJIAFAEIAHABIAHAEIAXAEIARABIAIAAIADAAIACgBIAEACQADgCALgBIAFACIACAAQACAAADgFIACgBIACABIACAAIALgEIAEgBIAGgDIAOgFIAMgIIAHgIIAGgKIAEgDIADgFIADgFIABgEQgBgCAFgIIACgGIAFgBQACgBAAgEIAAAAIgEAAIACgIIgCgEIACgEIACgKIAEgNIAAgKIAEAAIAAgCIgFABQgBgGgGgSIACgDIAAgCIAGAAQALAAAAgCQAAgDgSAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgDgCIgMgGQgEgDgDgBIgMgDIgEgBIgJgDIAAAAIAAgBIgBAAIAAABIgBABIgMgDIgDABIgHABIgCgCQgBgDgDAAIgFADIgDABIgFAAIgEgBIgKAAIgGgNQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQgEAAgEAPQAAgNgDgEIgCgBIgCgBQgMATgBAAIgGgDQgIgBgDgCIgFgCIgDgBIgCAAIgFAAIgEgCQgJgFgDgCQgGgGgGgLQgEgGAAgEIABgFQgDgEAAgEIACgEIACgLIAEgJIANgRIAHgFIAIgIIAFgCIAFgDIAZgMIALgGIAPgFIATgGIAGgBIAcgDIANgCIAHABIAIAAIAEACIATAEIABAHIgFAEIgDACIgEADIgFgCIgFAAIgJgDIgFAAIgFgGQgDgFgHAAQgGAAgDADQgCACgCAFIgDgDIgCAAQgHAAgGADIgOADIgMAFIgHgCIgGACIAAAEIgQAHIgCAEQgJABgFAIIgFgBQgCAAgDAGQgHACgEAHQgHAKAAAIIABANQAAADAEAEQAJAJADABIAHACQAIAEADAHIACACIADABIADgCIACAAIACAAQAAgDABgCIADABIAHgBIAMADIAEAAIACgBIAKADIABAFIAEAAIACAAIgBgDQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIAGAAIAkAAIABACIgBAEIADADQACAAACgEIAEABIAIgEIADABQAKACADABIAGAEIATAHIADACIAEADQAHAEABACIACAEIgBAFIAAACIAFAAQAEAIAAAIIACAPIAAAFIAAADIAAAGIAAADQAAACgCAFIgBACIABAFIgCAEIAAAEIgGANIgBAFIgEAHIAAABIAAABIABAEIgFAHIgIALIgFAJIgEADIgGAIIgHAIQgBABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgDgBIACgDIgIAGIABAFQgIAGgNAHQgLAGgEAAIgJACIgTAFIgKABIgEABIgFAAIgGABIgGgCg");
	this.shape_24.setTransform(27.175,211.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgPA7IgLgBIgIgDIgEgDQgJgGgCgCQgEgFAAgFIADgDIAEgEIAGgEIABAAQAEAEAAAEIgBAEQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABIAFACIADACIAEAEIAFACIAFACIAFAAIAEABIAJgCQAEAAACgBIAFgCIAGgDQADgCAEgIQAFgHAAgKIgBgEIgIgMIgEADIgJgCIgJABQgCgDgCgCIgCADIgIACIgDAAIgBAAIgFgBIgBABIgCgDIgEABIgEgBIgDgBQgLgEAAgJQAAgHAGgJIAIgHIADgDIAHgEIAQgJQAKgEAHAAIANADIAIgCIAIABQABABAAAAQABABAAAAQAAAAABABQAAAAAAABIgCADIgHAEIgIAEIgOgBIgDgFIAAAAIgDADIgEAAIgCAAIgCgBIgEACIgEgCIgKAGQgDACgDAEQgCAEAAAEQAAAAAAAAQAAABAAAAQABABAAAAQABABAAABIAGACIAFADIAAACQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACAAADgEIAGABIAHgBIAFAAIAHgBIAHACIAFAAIAGADQAIAEADADIADAEIABAFIACAKIgBAGQAAAIgFABIgDgBIgDAJIgJAKQgHABgFADIgDACIgDABIgMADIgGgBIgIACg");
	this.shape_25.setTransform(498.675,9.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgSA5IgDgBIgDgCIgMgEIgFgEIgFgDQgFgDAAgBIgDgFIgFgFIACgEIgEgIQgBgCAAgKIACgKIADgHIAFgFIADgHIAMgLIAKgGIALgIIAEgBIALgDIAHgBIAJgDQAIAAADAIIAEgDIAEADIADACIANAMQADAEABADIACAHIADAFIgCABIgDgBIgHACIgEgBIgFABIgJgHIgHAGIgKgBIgFAAIgBAAIgMAAIgFAAIgHABIgHABIgGAAIgMADIgCAHQAAACgDACIAFAEIADANIADABIgBAGIAEABQACAGACACQACACAFABQACAEABABQABABAEAAIADAEIADAAIAIAEIADAAIAHgBIAKgBIAHgCIAHgBIAJgFIAIgGIAEgHQABAAAAgBQAAAAABAAQAAgBABAAQABAAABAAIAEACIgCAHIgIAOIgDgBIgGADQgCACgEAAIgMADIgIABIgFABIgIgBIgFABIgCAAIgGABIgKgBgAgEgqIgIACIgLAEIgFAFIgEADIAAABIAAAAIALAEIADAEIAGgHIACgBIAHACIAAAAIAHgCIAFAAIACADIAFgBIAIgCIAIABIABgCIAAgBIgCgDIgCgCIgEgFIgFgCIgCgDIgPgBIgDAAg");
	this.shape_26.setTransform(484.25,9.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgOBdIAAgFIACgHIAAgHIACgOIAAgDQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIABAAIABgDIgBgFIgBgEIgCgCIAAgFIAAgCIAAgCIACgEQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgBIAAgBIAAgDQAJgCAAgBIAAgBQgDgCgDAAIgFAAIAAgCIgBgOQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBgBAAQAAgCAEgEQALgHAFgDIAFAFIgCAKIgCAHIAAAEIgCAEQAAADADAEIgBACIAAAHIAAABIAAAEIgBAcIADAKIAAAGIABAFQAAADgDADIgFAEIgIAGIgCAAIgEgBgAgNhBQAAgFAHgGIAEgEIACgDIAHgJIADgBIAEACQADACAAADQAAACgDACIgNALIgDACIgFAEIgFACQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_27.setTransform(473.7,6.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgKB8IAAgEIgBgFIAAgCIABgEIAAgEIABgEIgBgDIAMgIIgLgIIAAgCIABgFIACgEIgDgFIgBgCIADgGIABgIIgDgBIAAgFIAAgFIABgGIABgDIgBgLIAAgEIACgHIABgHIgDgDIAAggIACgDIADgFIgFgDIABgFQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAgBAAIAAgFIgBgGIACgFIABgBIgBgDIgBgDIAAgBIAKgHIgHgKIgFgJIAAgFIABgFIAEgCIAFgDQADgBAEgEIABAAQADAAAAAEIAAACIAAABIABAFIAAAMIAAAMIgDAEIgBAFIADABIABAFQAAADgDADIAAAFQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAIAAAEIgBATIAAASIgDAGIAAADIACAHIAAABQAAABgDADIADAHIABABIAAAJIABAhIgDACIABAFIgBAHIAAAEIAEABIAAABIACAXIAAAHIABAEIgDAFIABACIgIAEIgDACIgDAAQgDADgCAAIgCAAg");
	this.shape_28.setTransform(467.225,3.175);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgOBdIAAgFIACgHIAAgHIABgOIAAgDQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAIABAAIABgDIgBgFIgBgEIgDgCIABgFIAAgCIAAgCIACgEQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgBIAAgBIgBgDQAKgCAAgBIAAgBQgCgCgDAAIgGAAIAAgCIgBgOQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgCADgEQALgHAFgDIAFAFIgDAKIgBAHIAAAEIgCAEQAAADADAEIgBACIAAAHIAAABIAAAEIgBAcIACAKIABAGIAAAFQAAADgCADIgFAEIgIAGIgDAAIgDgBgAgNhBQgBgFAJgGIADgEIACgDIAHgJIAEgBIADACQACACAAADQAAACgCACIgNALIgDACIgFAEIgFACQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_29.setTransform(461.35,6.125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AA4A5IgBgHIACgIIAAgCIgBgHIAAgBIABgLIABgGIADgHIgDgEIgBAAIAGgEIACgBIgIgFQADgFABgFIgEgEQgBgLgCgDIgIgLQgBgCgHAAIgGABIgFADIgDABIgCADQgFACgBACIgFAGIAAAKQgBABAAAAQgBABAAAAQgBABAAAAQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAQAAABABAAIABAJIAAAKIAAAFIgEAAIgBABIADAEIABAEIAAACIAAAFIAAAAQACAJAAAIQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAABIgGADIgIAEIgBAAIgBgFIAAgFIAAgOIABgIIAAAAIADgCIgBgFIgCgFIgBgEIAAgCIAAgHQAFgDAAgCQAAgDgFgBIAAgPIgDgLQgCgCgEAAIAAAAIgEABIAAgBIgDgDIgEACIgHABIgIAEIgFAAQgEAFgCAGIgBADIAAAHIgBAFIABAFIgBAHIgEADIAEAGIABAIIgBAEIABACIAAALIABALIgMAHIgDABIgEgBIAAgBIAAgGIAAgIIAAgHIAAgDIACgFIABgBQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBgBAAIgBgEIAEgHIAAgFIgCAAIgBgGIAAgMIACAAIAAAAIAAgEQAAgGgCgDIgBgJQAAgDgCgGIgEgBQABgDACgCQAEgEAHgEIADgCIADACIACACIABAFIAAAEIAAAHIAAAAIAGgCIADgEQABAAABAAQABAAAAAAQABAAAAgBQABAAAAAAIACgDIAKgEIAKgEIAAAAQADABAAAFIAFAAIAAgEIAGgCIAEgBQADABAEAEIADAKQAAAAABAAQAAABAAAAQAAAAABAAQAAABAAAAIAEgFQACgCAEgCIAMgFIAFAAIAEgBIAIAAIAFgBIAFACIAFACQAFACABACIABADQgBABAAAAQgBAAAAAAQAAABAAAAQAAAAAAABIAAACIADAAIABAJIABAEIAAAPIAAADIgCAGIgBACIACAHIAAACIAAAEIAAABIABAKIgDADIAAADIABAAIACABIAAAFIgBADQAAADADAFQgEACgGADIgIAGIgEgBg");
	this.shape_30.setTransform(448.175,9.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgfA3IgHAAIgEgDIgIgEQgCgBgCgEIgDgBIgBgFIgBgHIABgEIAEgHIAKgJQACgCAIgDIAEgDIADABIAEgEIAJgCIAHgDIAIgBIAEgBIADgBIADgBIAFAAIAMgBQAFAAABgBQADgCAAgDIgBgFIAHgKIgJgDIgEAAIgIgJIgKgCIgFAAIgEgBIgDAAIgDgDQgDABgBACIgFADQgIADgEAEIgDACIgDADIgDAAIgGgBIgGgCIgEgEIAEgCIAEgDIAHgCIAEgCIAJgDIAGgCIAGAAIAGgCIADgBIAFAAIAJAAIAIACIADABIAIABQACAAAEADQgBABgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABAAIADgBIAEgCQACACAAADIAEADIAAACIgBAFIAEAJIABAAIABAHIABALQgEACAAACQAAABAEACIAAADIAAAGIAAACIABANQgCACAAADQAAACACAEIABACIABAFIgCADIgFACIgFADIgEABIgFACIgEgCIADgJIgNAEIgEAAIgEABIgFAAIgGADIgDAAIgLADIgGgBIgGACIgLgCgAgbAsIAGACIACACIAFABIABAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAIAEABIADgCIAEABIAIgDIADgCIADABIAGgDIAHgCIACgFIAGgCIABgEQACgCABgDIgDgCIAAgEIAAgDIAAgHIAAgBIABgFIgEgBIgGAAIgGAAIgEAAIgDAAIgEgCIgEABIgIABIgCAAIgDgBIgGACIgHADQgKAEgDAEIgDAEIgGADIAAACIABABIABAIIACADIgCAFIgBADIABACIAEgDIAHAEg");
	this.shape_31.setTransform(430.65,10);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AggB4IABgFIABgEIAAgEIADgJIgBgJQAEgCAAgCIgCgHIgBgHIAAgGIAAgYQAAgGACAAIAFgCIAAgDIgBgBIgDAAIgCAAIgFgGIgHgCIgEgBQgDABgIAHIAAgCIAFgIQADgFADABIAIABIAGgEIAAgGIAAgOQAAgEADgGIgEgEIAAgOIAAgLIAAgHQAAgDACgEIAEgHIAAgCIgDgBQABgJAJgMQADgEADgDIAKgIIANgIIADgCIAEgBIAIgCIAFACIACAAIACAAIAEgBQAFAAAFAFIADAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgDAEIgDAEIgIAEIgKgGQgFgDgFAAQgEAAgJAEQgEACgBAEQgDAGgEAMIgCADIgCAIIgCAGQAAAAAAAAQAAABAAAAQABAAAAAAQABABAAAAIgBAGIAAAHIAAALIgCAGIgBADQAAADADAEQABACAAAUQAAACgFAEIAAABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQACABABAIIAFADIAFADIAJACIAKgEIALgDIAIgEIAFAAQADACAAADIgKAHIgEAEIgCABIgFgBIgGgBIgIABIgFAAIgIgBIgGgBIgDACQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIABAGIABAPIgBABQgBABAAAAQgBAAAAABQgBAAAAABQAAAAAAABQAAACADADIABAFIACATIgCABIgCAAIgDACIADAEQAAAAABABQABABAAAAQAAABAAAAQAAAAAAABIAAAFIAAAAIABAHIgCABIAAAEIgLAEIgGACIAAgCIgDACIgDgCg");
	this.shape_32.setTransform(418.475,3.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgsA2IADgIIAAgCIgBgGIABgDIADgBIAAgCQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBgBIAAgDIgBgHIABgIQAFgCAAgDIAAgCIgDAAIgDgBIAAgFIAAgEIAAgDIAAgBIAAgEIAAgCIACgGIgCgDIgBgJQAAgCgDgEQABgCACgDIAHgEIAIgEQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAIAAADIABAEIAAACIABAEIAIgFIAHgCIAGgDIADgCIADgCIADABIABAAIAKgDIAEAAIAEAAIADADIACAAIAEgCIABAAQAAAAABABQAAAAABAAQAAAAABABQABAAAAAAQADACABAFIgJAHQgDAEgCAAQgCAAgEgEIgEAAIgHgCIgHgCQgBADgEABIgEAAIgGABIgCAAIgKAIQgFADAAAIIAAABIAAAFIAAAEQAAABgDAEQACACAAACIAAACIACABIABADIAAAbIAAABIgEACQgIACAAABIAJACIADgBIABAGQAAAEgDACIgIABIgGAEIgCABQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAgBg");
	this.shape_33.setTransform(402.775,9.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgOBdIAAgFIACgHIAAgHIABgOIAAgDQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAIABAAIABgDIgBgFIgBgEIgDgCIABgFIAAgCIAAgCIACgEQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgBIAAgBIgBgDQAKgCAAgBIAAgBQgCgCgDAAIgGAAIAAgCIgBgOQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgCADgEQALgHAFgDIAFAFIgDAKIgBAHIAAAEIgCAEQAAADADAEIgBACIAAAHIAAABIAAAEIgBAcIACAKIABAGIABAFQAAADgDADIgFAEIgIAGIgDAAIgDgBgAgNhBQgBgFAJgGIADgEIACgDIAHgJIAEgBIADACQADACAAADQAAACgDACIgNALIgDACIgFAEIgFACQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_34.setTransform(393.5,6.125);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgSA5IgDgBIgDgCIgMgEIgFgEIgGgDQgEgDABgBIgDgFIgGgFIACgEIgDgIQgBgCAAgKIABgKIADgHIAFgFIADgHIALgLIALgGIALgIIAEgBIALgDIAGgBIAKgDQAIAAADAIIAEgDIADADIAEACIAMAMQAEAEABADIACAHIACAFIgBABIgDgBIgGACIgFgBIgEABIgKgHIgHAGIgKgBIgGAAIgBAAIgLAAIgGAAIgGABIgHABIgGAAIgMADIgBAHQgBACgDACIAFAEIADANIACABIAAAGIAFABQABAGACACQADACAEABQACAEABABQABABAEAAIACAEIAEAAIAIAEIADAAIAIgBIAJgBIAHgCIAHgBIAJgFIAHgGIAGgHQAAAAAAgBQABAAAAAAQAAgBABAAQABAAAAAAIAFACIgDAHIgHAOIgEgBIgEADQgDACgEAAIgMADIgIABIgFABIgJgBIgEABIgCAAIgFABIgLgBgAgEgqIgIACIgLAEIgGAFIgDADIAAABIAAAAIALAEIADAEIAGgHIABgBIAHACIABAAIAHgCIAFAAIACADIAEgBIAIgCIAIABIABgCIAAgBIgBgDIgCgCIgEgFIgFgCIgCgDIgPgBIgDAAg");
	this.shape_35.setTransform(382.25,9.625);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ag1B6IADgLIAAgEIACgEIABgEIgBgCIgCgEIABgHIAAADIAAgDIAAgHIAAgDIAAgBIAAgGIAAgLIAAgIIAAgDIAEgEIABgCIAAgFIgEABQgCgHAAgJIABgYIAFAAQgCgDAAgEIgEgCIABgHIgBgFIgBgOQAAgEADgCQAHgFAAgBQgDgDgIAAIABgGIACgFQAAgDgDgCIAAgGIAAgFIgBgHIABgGIgDgNIAAgDIgDgDQABgCAFgDIAKgFQAEgCADAAIAEACIgIAEIgFAFIALALQAAAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIgCAFIgBADIgDABIgBACIgBACIABAEIADgBIADgCIgBAaIAAAEIAAADQAAADgDAEQAAABAAAAQAAABAAABQAAAAAAAAQABABAAAAIACADIABADIgBAIIAAAFIABAJIgBAFIABAGIgBACIABAFIAAABIgCAQIACAGQAIgEALgLIAGABIAHgDIAHgBQABAAAAAAQAAAAABAAQAAABABAAQABABAAAAIABADIAEAAIACgDQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAABAAIAIAAIAPACIAFAFQABACAFACIgCAFQACABADAAQADAEAAAEIgBAKQAAAFgCACIgBACIACAFIgDAEIgBABIAEAEIAAADIAAADIAAAJIAAACIgCAFIACAKIgBANIAAACQgDACgFAAIgFADIgFADIgGgFIAEgIQACgGAAgFIgCgHIAAgCIABgFQACgFABgIIgCgBIABgRIAAgCIAAgBIgBgHIABgCIAAgCIgCgFQgBgCgCgCIgFgBIgHgEIgGAAIgKgBIgDAAIgGABIgMABIgCABIgIAEIgFACQgLAJAAACQAAADAKACIgBAEIgCAQQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAABIAAAAQAEAFABADQABAEAAAIIABAFIgBAHIABAEIAAACIAAADIgCADIgJADIgHAFg");
	this.shape_36.setTransform(366.775,3.325);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgQBPIgEgGIgBgDIgCgGIAAgEIABgKQAAgFADgCIgBgHIgBgaQADgCABgCIgBgCIgEgCIgBgBIABgCIABgOIgJgBIgHABIgEAAIgEACQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAgDAGgDQABgGADAAIAIAAIAJgBIAAgDIAAgXIgDgHIgBgDIgBgCQABgDADgDQAGgFAIgCQACgDACAAIACAAQABADAAADIgBAXIgCAHQgBACgDACIABAGIAEAAIgBAIIAOADIAFAAIAJgCIAKAAIAJgDIAEAAIgBAGQgBACgIAFIgDACIgCAEIgEAAIgDAAIgGgEIgEgBIgEgDIgHAGIgGgBIgDACIABALIAAAGQgFABAAADIAAAEIAGABIAAASIgFAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAABIABADIAEgBQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABIAAAGIAAAAIAAAJIACAGIAAACIABACIgBAEQAFADAFgBQAFAAAFgCIAEgDIAIgGQAGgGABAAIAEABIAAAFIgCAJIgJADIgSAIIgGABIgGACIgCgCIgCAAIgBADIgEAAQgEAAgFgEg");
	this.shape_37.setTransform(354.2,7.35);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("Ag1B6IADgLIAAgEIACgEIABgEIgBgCIgCgEIABgHIAAADIAAgDIAAgHIAAgDIAAgBIAAgGIAAgLIAAgIIAAgDIAEgEIABgCIAAgFIgEABQgCgHAAgJIABgYIAFAAQgCgDAAgEIgEgCIABgHIgBgFIgBgOQAAgEADgCQAHgFAAgBQgDgDgIAAIABgGIACgFQAAgDgDgCIAAgGIAAgFIgBgHIABgGIgDgNIAAgDIgDgDQABgCAFgDIAKgFQAEgCADAAIAEACIgIAEIgFAFIALALQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIgCAFIgBADIgDABIgBACIgBACIABAEIADgBIADgCIgBAaIAAAEIAAADQAAADgDAEQAAABAAAAQAAABAAABQAAAAAAAAQAAABABAAIACADIABADIgBAIIAAAFIABAJIgBAFIABAGIgBACIABAFIAAABIgCAQIACAGQAIgEALgLIAGABIAHgDIAHgBQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAIABADIAEAAIACgDQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAIAAIAPACIAFAFQABACAFACIgCAFQACABADAAQADAEAAAEIgBAKQAAAFgCACIgBACIACAFIgDAEIgBABIAEAEIAAADIAAADIAAAJIAAACIgCAFIACAKIgBANIAAACQgDACgFAAIgFADIgFADIgGgFIAEgIQACgGAAgFIgCgHIAAgCIABgFQACgFABgIIgCgBIABgRIAAgCIAAgBIgBgHIABgCIAAgCIgCgFQgBgCgCgCIgFgBIgHgEIgGAAIgKgBIgDAAIgGABIgMABIgCABIgIAEIgFACQgLAJAAACQAAADAKACIgBAEIgCAQQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAABIAAAAQAEAFABADQABAEAAAIIABAFIgBAHIABAEIAAACIAAADIgCADIgJADIgHAFg");
	this.shape_38.setTransform(334.575,3.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgQBPIgEgGIgBgDIgBgGIAAgEIAAgKQAAgFACgCIAAgHIgBgaQAEgCgBgCIAAgCIgEgCIAAgBIAAgCIABgOIgJgBIgIABIgCAAIgFACQAAAAgBgBQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAgDAGgDQABgGADAAIAIAAIAJgBIAAgDIAAgXIgCgHIgCgDIgBgCQAAgDAEgDQAGgFAIgCQACgDACAAIABAAQACADAAADIgBAXIgCAHQAAACgEACIACAGIADAAIgBAIIAOADIAFAAIAJgCIAJAAIAJgDIAFAAIgBAGQAAACgJAFIgDACIgCAEIgEAAIgDAAIgGgEIgEgBIgEgDIgHAGIgGgBIgDACIABALIAAAGQgFABgBADIABAEIAGABIAAASIgFAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAABIABADIAEgBQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABIAAAGIAAAAIAAAJIACAGIAAACIABACIgBAEQAFADAFgBQAGAAAEgCIAEgDIAIgGQAGgGACAAIADABIAAAFIgCAJIgJADIgSAIIgGABIgFACIgDgCIgCAAIgBADIgEAAQgEAAgFgEg");
	this.shape_39.setTransform(322,7.35);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgOBdIAAgFIADgHIAAgHIABgOIAAgDQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAIACAAIABgDIgBgFIgBgEIgCgCIAAgFIAAgCIAAgCIABgEQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgBIAAgBIAAgDQAJgCAAgBIAAgBQgDgCgDAAIgFAAIAAgCIgBgOQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBgBAAQAAgCAFgEQAJgHAHgDIADAFIgBAKIgBAHIAAAEIgDAEQAAADADAEIAAACIAAAHIAAABIAAAEIgBAcIACAKIAAAGIABAFQgBADgCADIgFAEIgIAGIgCAAIgEgBgAgNhBQAAgFAHgGIAEgEIACgDIAHgJIADgBIAEACQACACABADQgBACgCACIgNALIgDACIgFAEIgFACQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_40.setTransform(313.7,6.125);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgkA2IgFgLIgCgJIgCgEIgBgEIgDgEIgFgIIACgIIgBgEIgFgCIgDgFIgDgDIgBgGIgCgDIgDgEIgLgWIAAgCQAAgGAKgCQAEgEADAAIAEABIAHAYIgDAFIAAABQAAABAAABQABAAAAABQABAAAAABQABAAABAAIAGgCIADAHIgBAGIACAHIACAFIADADIADAIIABAEIADAJIAGAGQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAgBIACgEIACgEIABgHIADgHIAEgMIACgDIAAgDIAAgFIABgGIAFgDIgEgGIABgHIgBgGIgBgCIABgCIADgBIADgCIAJgDIAEACIACABIADAQIABAEIgBADIgBACQAAADAFADIAHASIAFALIAHASIAEAFIAFgGIgCgEIACgGIAEgLIAEgIIAAgDIADgLIABgIIABgJQABgLABgBQACgDAFgDQAEgDADAAIADACIgCALIgDALIgBAEIgCAFIgBAGIgEADIABAFIgEAKIgBADIgGAUIgDAGIAAAIIgBAHIgKAHIgEAGIgBAAIgBgBIgHgGQgBgFgBgCIgDgDIADgDIgDgEIgEgCIgCgDIgCgFIgBgFIgCgFIgEgGIABgCIADAAIABgBIgCgEIgGgDIgDgGIgDgGIgCADIgDAPIgDAHIgBADIgHAUIgBAGIgCAFIgCAGIgEACIgDACIgJAEIgCgEg");
	this.shape_41.setTransform(300.675,9.775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgsA2IADgIIAAgCIgBgGIABgDIADgBIAAgCQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBgBIAAgDIgBgHIABgIQAFgCAAgDIAAgCIgDAAIgDgBIAAgFIAAgEIAAgDIAAgBIAAgEIAAgCIACgGIgCgDIgBgJQAAgCgDgEQABgCACgDIAHgEIAIgEQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAIAAADIABAEIAAACIABAEIAIgFIAHgCIAGgDIADgCIADgCIADABIABAAIAKgDIAEAAIAEAAIADADIACAAIAEgCIABAAQAAAAABABQAAAAABAAQAAAAABABQABAAAAAAQADACABAFIgJAHQgDAEgCAAQgCAAgEgEIgEAAIgHgCIgHgCQgBADgEABIgEAAIgGABIgCAAIgKAIQgFADAAAIIAAABIAAAFIAAAEQAAABgDAEQACACAAACIAAACIACABIABADIAAAbIAAABIgEACQgIACAAABIAJACIADgBIABAGQAAAEgDACIgIABIgGAEIgCABQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAgBg");
	this.shape_42.setTransform(281.725,9.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgSA5IgDgBIgDgCIgMgEIgFgEIgGgDQgDgDAAgBIgEgFIgEgFIABgEIgEgIQgBgCAAgKIADgKIACgHIAFgFIADgHIALgLIALgGIALgIIAEgBIALgDIAHgBIAJgDQAIAAADAIIAFgDIACADIAEACIANAMQADAEABADIADAHIACAFIgBABIgFgBIgFACIgFgBIgEABIgKgHIgHAGIgKgBIgGAAIAAAAIgMAAIgFAAIgHABIgHABIgGAAIgMADIgCAHQAAACgDACIAFAEIADANIACABIAAAGIAEABQACAGACACQADACAFABQAAAEACABQABABAEAAIADAEIACAAIAJAEIADAAIAHgBIAKgBIAHgCIAHgBIAJgFIAIgGIAEgHQABAAAAgBQAAAAABAAQABgBAAAAQABAAABAAIADACIgBAHIgJAOIgCgBIgGADQgCACgEAAIgNADIgHABIgFABIgIgBIgFABIgCAAIgGABIgKgBgAgEgqIgIACIgLAEIgFAFIgEADIAAABIAAAAIALAEIADAEIAGgHIABgBIAIACIAAAAIAHgCIAFAAIADADIAEgBIAIgCIAIABIABgCIAAgBIgCgDIgBgCIgFgFIgFgCIgDgDIgOgBIgDAAg");
	this.shape_43.setTransform(267.55,9.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("Ag1B6IADgLIAAgEIACgEIABgEIgBgCIgCgEIABgHIAAADIAAgDIAAgHIAAgDIAAgBIAAgGIAAgLIAAgIIAAgDIAEgEIABgCIAAgFIgEABQgCgHAAgJIABgYIAFAAQgCgDAAgEIgEgCIABgHIgBgFIgBgOQAAgEADgCQAHgFAAgBQgDgDgIAAIABgGIACgFQAAgDgDgCIAAgGIAAgFIgBgHIABgGIgDgNIAAgDIgDgDQABgCAFgDIAKgFQAEgCADAAIAEACIgIAEIgFAFIALALQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIgCAFIgBADIgDABIgBACIgBACIABAEIADgBIADgCIgBAaIAAAEIAAADQAAADgDAEQAAABAAAAQAAABAAABQAAAAAAAAQAAABABAAIACADIABADIgBAIIAAAFIABAJIgBAFIABAGIgBACIABAFIAAABIgCAQIACAGQAIgEALgLIAGABIAHgDIAHgBQABAAAAAAQABAAAAAAQAAABABAAQABABAAAAIABADIAEAAIACgDQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAIAIAAIAPACIAFAFQABACAFACIgCAFQACABADAAQADAEAAAEIgBAKQAAAFgCACIgBACIACAFIgDAEIgBABIAEAEIAAADIAAADIAAAJIAAACIgCAFIACAKIgBANIAAACQgDACgFAAIgFADIgFADIgGgFIAEgIQACgGAAgFIgCgHIAAgCIABgFQACgFABgIIgCgBIABgRIAAgCIAAgBIgBgHIABgCIAAgCIgCgFQgBgCgCgCIgFgBIgHgEIgGAAIgKgBIgDAAIgGABIgMABIgCABIgIAEIgFACQgLAJAAACQAAADAKACIgBAEIgCAQQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBABIAAAAQAEAFABADQABAEAAAIIABAFIgBAHIABAEIAAACIAAADIgCADIgJADIgHAFg");
	this.shape_44.setTransform(252.075,3.325);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgQBPIgEgGIgBgDIgCgGIAAgEIABgKQAAgFACgCIgBgHIAAgaQAEgCAAgCIgBgCIgEgCIgBgBIABgCIABgOIgJgBIgIABIgDAAIgEACQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgDAGgDQABgGADAAIAHAAIAKgBIAAgDIgBgXIgCgHIgBgDIAAgCQgBgDAEgDQAGgFAIgCQACgDACAAIABAAQACADAAADIgBAXIgCAHQAAACgDACIABAGIADAAIgBAIIAOADIAFAAIAJgCIAJAAIAJgDIAFAAIgBAGQgBACgIAFIgDACIgDAEIgDAAIgDAAIgGgEIgEgBIgEgDIgIAGIgFgBIgDACIABALIAAAGQgGABABADIAAAEIAFABIAAASIgDAAQgBAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAABIACADIADgBQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABIgBAGIAAAAIABAJIACAGIABACIAAACIAAAEQAEADAGgBQAEAAAFgCIAEgDIAIgGQAGgGABAAIAEABIgBAFIgCAJIgJADIgSAIIgEABIgGACIgDgCIgCAAIgCADIgDAAQgEAAgFgEg");
	this.shape_45.setTransform(239.5,7.35);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgSA5IgDgBIgDgCIgMgEIgFgEIgFgDQgFgDAAgBIgCgFIgGgFIACgEIgEgIQgBgCABgKIABgKIADgHIAFgFIADgHIAMgLIAKgGIALgIIAEgBIALgDIAHgBIAJgDQAIAAADAIIAEgDIAEADIADACIAMAMQAEAEABADIACAHIACAFIgBABIgDgBIgHACIgEgBIgFABIgJgHIgHAGIgKgBIgFAAIgBAAIgMAAIgFAAIgHABIgHABIgGAAIgMADIgBAHQgBACgDACIAFAEIADANIADABIgBAGIAEABQACAGACACQACACAFABQABAEACABQABABAEAAIACAEIAEAAIAIAEIADAAIAHgBIAKgBIAHgCIAHgBIAJgFIAHgGIAFgHQABAAAAgBQAAAAABAAQAAgBABAAQABAAAAAAIAFACIgCAHIgIAOIgEgBIgEADQgDACgEAAIgMADIgIABIgFABIgJgBIgEABIgCAAIgGABIgKgBgAgEgqIgIACIgLAEIgFAFIgEADIAAABIAAAAIALAEIADAEIAGgHIACgBIAGACIABAAIAHgCIAFAAIACADIAFgBIAIgCIAHABIACgCIAAgBIgCgDIgCgCIgEgFIgFgCIgCgDIgPgBIgDAAg");
	this.shape_46.setTransform(226.3,9.625);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgTBtIgEAAIgDgGIgDAGIgGgFIgGAFIAAAAIgDgBIgEgDIgHAAIgEgBIgDgDIgEgCIgDgDIgGgDQgCAAgCgGQgDgFAAgEQAAgEADgGIADgFQAEgBACgCQADgEADgBIAMgFIABADIgBADIgFAEIgCADQgDAEAAAEIAAACQgBABAAAAQgBABAAAAQgBABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABAAQAAAAAAABIABAAIADAAQACAEAEADIAIAFIADAEIAKACIADAAIACgBIAGAHIACgDIABgDIAUABIABAAIAFgCIATgEIAKgEIAFAAIADgEIAJgFIAFgDIACgEIACgDIAAgGIACgIIAAgCIABgEQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBAAgBgBIgEgKIgCgDIAAgEQgIgEgMgCIgDAAIgBAAIgFgBIgDgBIgFABIgDAAIgGgDIAAAAIgHADIgDABIgFABIgHgIIgFAHIgDgBIgCAAIgDAAQgCADgDAAIgIgBIgJgEQgHgEAAgCIgBgFIgBgFQAAgDAEgEIAHgGIAFgDIAEgDIAHgBIAEgDIAAAAIgDgBIgFAAIgCABQgDgBgGgDIgCgCIgBgEQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAIgEgCIgCgDIgDgFIABgHIABgIIACgEIABgCIgBgFIAHgIIAIgGIAHgHIADgCIADgBIABgBIARgEIAFgBIAFgBIALABIAKABQADgEAFgBIADgBIAGABIAEAAIAKAAIAGACQAAAAABAAQAAAAABgBQAAAAAAAAQAAgBAAAAIAAgDIAKgFIACAAIAEgBIABACQAAAIgLAEIgBAEIgEADQgDADgCAAIgGABIgCgBIgEgGIgBgBQgDAAgDAHIADADIAFAEIABAEIACACIAAAEIABABIgFADIAAACQABAAABAAQAAABABAAQAAABAAAAQAAABAAAAQAAADgGAIIgEADIgIAHIgCADIgEADIgCACIgMAFIgKADIgFACIAAACQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAIgJABIgJADIgMADQgGADgCAEIgBABQABACAKACQADACABACIAGgBIAJABIAAAAIAEAAIACgBIAGAIQABAAAAABQAAAAABAAQAAABAAAAQABAAAAAAIABgBIADgHQAGgEAEAAIAGABIAHgBQABAAACAEIACAAIACgDIAEgBIAHABIAEABIAEABIANAGIAAACIADAEIAFgBQAEACABACIABADIACAGIABAGIABAFIgCAIQAAAEgDAHIgGAHIgCAFIgDAEIgCABIgDACIgFAEIgFAEIgJAFIgJAEIgEACIgGABIgFADIgCAAIgEABIgLABIgMADgAgShUIgEABIgEACIgDABIgFAFIgEAFIgBAGIgBAKIABADIAEAEIAAADQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAFABIAGAFQAFADAKAAIAHgCIACAAIALgEIAEAAQADgEAFgEIACgBIABgFIACgFIAAgKQgBgGgGgEIgEgGQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAIgGgBIgDgCIgEgBIgBgBIgGACIgFAAIgIACg");
	this.shape_47.setTransform(210.625,14);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AghA4IgDgDIgFgBQgDgBgJgFIgFgDIgBgEIgCgCIgDgCIgBgCQgDgFAAgFQAAgCADgCQgBgDgDgBIAAgBIABgOIAEgKIAHgNIAGgFIADgFIACgCIALgGIAHgGIASgHQAJgDAPAAIAJABIABADIADACQACgBACgDQAIACAGAEIAFAEIADAFQADAEAHAAIAEAJIACAJIABALIgCAAIAAACIgDADQABACADACIgBAJIgCAFIgHAQQgIAJgHACIgIAEIgHAEIgHADIgOABIgJADIgLAAIgEAAIgRgCgAgVAtQAFACAFAAIAJAAIADABIAFABIAHgBIAJgCIAJgGIAHgDIAGgIIADgIIAEgEIABgDIgCgEIAAgBIAAgCQABgHABgDIgDgJIgCgIIAAgGIgBAAIgEAAIgGgKIgDgEIgDgBIgIgDQgBgFgDAAIgFABIgFgBIgJAAIgIAEIgDgCIgDADIgGADIgBACIgSAOIgBABQAAAEgBABIgDAGQgBAEgDACIAAADQAAADgFABIACADIADAEQAAACgEACIAAACIABABIADgBIACAHIAIANIAAABIgCAEQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAIADgBIANAGg");
	this.shape_48.setTransform(194.575,9.925);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgbCJIABgEIAAgFIABgEIABgIIAAgEIABgHIAEgFQgDgDAAgCIABgGIAAgIIAAgJIACgDIAAgCIABgEIgDgCIAAAAIAAgEIAAgXIABgGIABgGIgBgFIgBgHIAAgDIACgGIAAgDQAAAAABAAQAAgBAAAAQABAAABAAQAAAAABgBIAAgDIgEACIgCgFIABgFIABgDIgDgCIAAgEIAAgcQAAgDAGgCQAFgCAAgCQAAgBgGgCIgFgFQAAAAABgBQABAAAAgBQAAAAABAAQAAgBAAAAIgCgGIAAgBIAAgDQgDgFAAgGIACgFIgCgFIAAgBQAAgEANgFIABgCIgNgCQgBgBAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAIABgCQgFgBgKgBIgIgBIgBAAIgHABIgLAAIgDABQgBAAAAgBQgBAAAAgBQgBAAAAAAQgBAAAAAAIgBAAIgDAAIgIgCIgCABIgDABIgFACIgHgCIgIABIgHAAIgFAAIgIgBIgBAAIgJABIAAgBIAAAAIACgDIACgEIAPgIQAEgCAGAAQAFABAIAEIAFABIANACIASAAIAGABIADAAIAMgBIAHAAIAUACIAGgCIACAAIAEABIAIABIAGACQAFgDAEgBIALACIAEAAIAGABIAEgBIAKABIAIgBIADAAIAFABIAHACIAAgBIACgEIAHABIAKgBIAAAAIADAHIADgFIAFgBIAIgDIABAAIACABIADAHIAIgIIADgBIAEgCQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABIgDACIgBADIgDACIgEAEIgEADQgDABgDAAIgDAAIgHgBIgCAAIgFABIgGgBIgHgBIgLABIgFABIgQgBIgGABIgKgFIgEAFIgDgBIgEgBIgHAAIgBAAIgEABIAAAAIgKgBIgDAAIgEABIABABIgFAGIgEAHIgEAFIgCAFQAAADAJAEQADABAAABIgBADIgBAFIgDAAIABAEIADACIABAEIAAAGIAAAEIAAAOIAAAHIABAIIAAAEQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgCAAIgDACIAAABIAAABIADADIAAAEIADACQgLAHAAAFQAAAGALAFIgBAEIAAAGIAAAEIAAACIABABIgBAIIABAHIAAAJIACAEIgDAHIAAADQgEACAAADIABACIADgBIABAFIABADIgBACIAAACIABANIgCANIAAAFIACAIIgBAFIgFADIgDACIgDABIgEABIgLAHQgCgDAAgDg");
	this.shape_49.setTransform(171.825,6.25);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AghAyIgFgKIgCgIIgBgEIgCgEIgDgDIgEgIIABgIIgBgDQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBAAAAIgDgFIgCgCIgCgGIgBgDIgDgEIgKgVIAAgBQAAgFAJgDQAEgDADAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAIAHAWIgDAFIAAABQAAABAAABQABAAAAABQAAAAABAAQAAAAABAAIAGgBIADAGIgBAGIACAGIACAFIACACIAEAIIABAEIACAIIAGAGQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAgBIABgDIACgEIABgHIADgHIAEgKIABgDIAAgDIABgEIABgGQABgCAEgBQgBgDgDgDIAAgGIgBgGIAAgCIAAgCIADgBIADgCIAIgCIAEABIACACIADAPIABADIgBAEIgBABQAAACAFADIAGARIAFAKIAHASIADAEIAEgGIgBgDIACgGQACgEABgGIAEgHIAAgDIADgKIABgIIABgIIACgLQACgEAEgDQAEgBADAAIACABIgBAJIgDALIgBAEIgCAFIgBAFIgDADIAAAFIgDAKIgBACIgGASIgCAGIgBAIIgBAGIgJAHQgBABgDAEIgBAAIgBAAIgGgGQgBgFgBgCIgCgCIACgDIgDgEIgDgCIgDgCIgBgGIgBgEIgCgFIgDgGIAAgCIADABIABgBQgBgEgBAAIgGgDIgCgFIgDgGIgCADIgDANIgDAIIAAACIgHASIgBAHIgCAEIgBAGIgEACIgDACQgFABgDADIgCgFg");
	this.shape_50.setTransform(436.275,467.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgeA0IgDgCIgGgBQgCgBgIgFIgFgDIgCgDIgBgCIgCgCIgBgCQgDgEAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQgBgDgDgBIAAgBIABgNIAEgKIAGgLIAHgFIACgEIACgDIAKgFQADgCAEgEIAQgGQAIgDAPAAIAIABIABADIADACQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABgBQAHACAGAEIAEADIADAFQADAEAGAAIAFAIIABAJIACAKIgDAAIAAABIgCAEQAAABADACIAAAIIgCAFIgHAPQgIAJgGACIgHADIgHAEIgHADIgNABIgIACIgKAAIgEAAIgPgCgAgUAqQAFACAFAAIAIAAIADABIAEABIAHgBIAIgBIAJgGIAGgDIAFgIIAEgHIAEgEIAAgCIgCgFIABgDIABgJIgCgIIgCgHIgBgGIAAAAIgEAAIgGgJIgDgEIgCgBIgHgDQgCgFgDAAIgEACIgFgBIgIAAIgHADIgDgCIgDADIgGADIgBABIgQAOIgCABIAAAFIgDAFQgBAEgDACIABACQAAADgFABIABADQAEADAAABQAAABgFADIAAABIABABIADgBIACAHIAHAMIAAABIgBAEQAAAAAAABQAAAAABAAQABABAAAAQABAAABAAIACgCIAMAGg");
	this.shape_51.setTransform(420.125,467.425);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgKBzIAAgDIAAgEIAAgDIABgDIAAgEIABgEIgBgCIALgIIgKgHIAAgCIABgFIABgDIgCgGIgBgBIADgGIABgHIgDgCIAAgEIgBgFIACgFIABgCIgCgMIAAgDIADgHIABgGIgEgDIAAgdIADgEIACgEIgFgDIACgFIgDgCIgBgGIAAgFIACgFIAAAAIAAgDIgBgDIgBgBIAKgGIgGgKQgFgHgBgBIABgFIABgEIAEgCIAEgDQADgCAEgDIAAAAQABAAABAAQABAAAAABQABAAAAABQAAABAAABIAAAAIgBABIAAABIACAFIgBALIAAAMIgCAEIgBAEIADAAIAAAGQAAADgCACIgBAFQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAIAAAEIgBARIAAASIgCAEIAAADIABAHIAAABQAAABgCADIACAGIACABIAAAJIAAAeIgCACIAAAFIgBAGIAAAEIAFABIgBABIADAWIAAAFIABAFIgEAEIACACIgIAFIgDABIgCABQgDACgDAAIgCgBg");
	this.shape_52.setTransform(409.4,461.15);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgKBzIAAgDIAAgEIAAgDIABgDIAAgEIABgEIgBgCIALgIIgKgHIAAgCIABgFIABgDIgCgGIgBgBIACgGIACgHIgDgCIAAgEIgBgFIACgFIAAgCIgBgMIAAgDIACgHIACgGIgEgDIAAgdIADgEIACgEIgFgDIABgFIgCgCIgBgGIAAgFIACgFIAAAAIAAgDIgBgDIgBgBIAKgGIgGgKQgGgHABgBIABgFIAAgEIADgCIAGgDQACgCAEgDIABAAQAAAAABAAQABAAAAABQABAAAAABQAAABAAABIAAAAIgBABIAAABIACAFIgBALIAAAMIgCAEIgBAEIADAAIAAAGQABADgDACIAAAFQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAAAEIgBARIAAASIgBAEIgBADIACAHIAAABQAAABgDADIADAGIABABIAAAJIAAAeIgCACIABAFIgBAGIAAAEIAEABIgBABIADAWIgBAFIACAFIgEAEIABACIgIAFIgCABIgCABQgEACgCAAIgCgBg");
	this.shape_53.setTransform(403.8,461.15);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgeA0IgDgCIgGgBQgCgBgIgFIgFgDIgCgDIgBgCIgCgCIgBgCQgDgEAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQgBgDgDgBIAAgBIABgNIAEgKIAGgLIAHgFIACgEIACgDIAKgFQADgCAEgEIAQgGQAIgDAPAAIAIABIABADIADACQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABgBQAHACAGAEIAEADIADAFQADAEAGAAIAFAIIABAJIACAKIgDAAIAAABIgCAEQAAABADACIAAAIIgCAFIgHAPQgIAJgGACIgHADIgHAEIgHADIgNABIgIACIgKAAIgEAAIgPgCgAgUAqQAFACAFAAIAIAAIADABIAEABIAHgBIAIgBIAJgGIAGgDIAFgIIAEgHIAEgEIAAgCIgCgFIABgDIABgJIgCgIIgCgHIgBgGIAAAAIgEAAIgGgJIgDgEIgCgBIgHgDQgCgFgDAAIgEACIgFgBIgIAAIgHADIgDgCIgDADIgGADIgBABIgQAOIgCABIAAAFIgDAFQgBAEgDACIABACQAAADgFABIABADQAEADAAABQAAABgFADIAAABIABABIADgBIACAHIAHAMIAAABIgBAEQAAAAAAABQABAAAAAAQAAABABAAQABAAABAAIACgCIAMAGg");
	this.shape_54.setTransform(393.075,467.425);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgeBwIABgFIABgDIABgEIACgJIAAgIQADgCAAgCIgBgGIgCgHIAAgFIAAgXQAAgFACAAIAFgDIAAgCIgCgBIgCABIgCgBIgFgGIgGgBIgEgBQgDAAgHAHIgBgBIAFgIQADgEADAAIAHABIAGgEIAAgGIAAgNQAAgDADgGIgEgDIAAgOIAAgKIAAgHQAAgCACgDIAEgHIgBgCIgCgBQABgJAIgLIAGgHIAJgHIAMgHIADgCIAEgBIAIgCIAEACIACAAIACAAIADgBQAFAAAEAEIAEAAIgBAEIgDADIgDAEQgCACgFABIgJgFQgFgDgFAAQgEAAgIAEIgFAFQgDAGgDALIgCADIgCAIIgCAFQAAAAAAAAQAAABAAAAQABAAAAABQABAAAAAAIgBAGIAAAGIAAAKIgCAGIAAADIACAGQABACAAATQAAABgFAEIAAABIAEACQACABABAGIAFAEIAFACIAIACIAJgEIAKgCIAHgEIAGgBQACADABADIgKAGIgEAEIgCABIgFgBIgFgBIgHABIgFAAIgIgBIgFgBIgDACQgBAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABIABAGIABANIgBACQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAACADADIABAEQAAAOACAEIgCACIgCgBIgCACIACADIACAEIAAAAIAAAEIAAABIABAGIgCABIAAAEIgLAEIgFABIAAAAIgDABIgDgCg");
	this.shape_55.setTransform(380.575,461.175);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgeA0IgDgCIgGgBQgCgBgIgFIgFgDIgCgDIgBgCIgCgCIgBgCQgDgEAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQgBgDgDgBIAAgBIABgNIAEgKIAGgLIAHgFIACgEIACgDIAKgFQADgCAEgEIAQgGQAIgDAPAAIAIABIABADIADACQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABgBQAHACAGAEIAEADIADAFQADAEAGAAIAFAIIABAJIACAKIgDAAIAAABIgCAEQAAABADACIAAAIIgCAFIgHAPQgIAJgGACIgHADIgHAEIgHADIgNABIgIACIgKAAIgEAAIgPgCgAgUAqQAFACAFAAIAIAAIADABIAEABIAHgBIAIgBIAJgGIAGgDIAFgIIAEgHIAEgEIAAgCIgCgFIABgDIABgJIgCgIIgCgHIgBgGIAAAAIgEAAIgGgJIgDgEIgCgBIgHgDQgCgFgDAAIgEACIgFgBIgIAAIgHADIgDgCIgDADIgGADIgBABIgQAOIgCABIAAAFIgDAFQgBAEgDACIABACQAAADgFABIABADQAEADAAABQAAABgFADIAAABIABABIADgBIACAHIAHAMIAAABIgBAEQAAAAAAABQAAAAABAAQABABAAAAQABAAABAAIACgCIAMAGg");
	this.shape_56.setTransform(361.525,467.425);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgGBOQgEAAgFgFQgCgCgBgCIgBgEIgCgFIAAgEIABgJQAAgFACgCIgBgGIgBgYQAEgCAAgCIgBgDIgEgBIAAgBIAAAAIABgCIAAgMIgIgBIgHAAIgDABIgEABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAgDAGgDQABgFADAAIAGAAIABAAIAIgBIAAgDIAAgVQAAgEgCgDIgBgDIgBgCQAAgCAEgDQAFgEAIgCQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAIACABQABACAAADIgBAWIgCAGQAAACgDACIABAGIADAAIgBAHIAOADIAEAAIAIgBIAJgBIAIgDIAFAAIgBAGQgBACgIAFIgCACIgCACIgEABIgDgBIgFgDIgEAAIgEgDIgHAFIgFgBIgDABIABALIAAAGQgFABAAADIABADIAFABIAAARIgEgBQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABAAAAIABAEIADgBQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIAAAFIAAAJIACAFIABADIAAABIAAADQAEADAFAAQAEAAAFgCIAEgDIAHgGIAHgFIADABIAAAEIgCAIIgIAEIgRAGIgFACIgFACQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAIgCgBIgBAEIgDAAg");
	this.shape_57.setTransform(348.925,465.025);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgwAzIgBgCIAAgDIABgEIAAgKIABgGIAAgCIgBgFIAAgCIABgCIgBgGIAAgDIABgFIAEgBIgBgBIgEgBIAAgEIAAgEIAAgCIgBgLIADgCIgDgEIgBgEQAAgCgDgEQABgEAGgDQAGgGADAAQABAAABABQABAAAAAAQABAAAAABQAAAAAAABIABAIIADAGQAFgGABAAIAFgDQAGgFABABQABAAAAAAQAAAAABAAQAAABABAAQAAABABAAQAHgFAHAAIACABIADAAIAGgCIAIACIAHABIADACIADABQADAAAFAIQADAEAAAPIgHABQgBABAAAAQgBABAAAAQgBAAAAAAQAAABAAAAIAJAFQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIgCAHIAAABIACAFIAAAEIACAHIAAAHIABAIIgBAFIACAFIgGADIgGADIgGAEQgEgEAAgDIADgLIAAgCIAAgCIADgCIAHgBIgBgBQgEgCgHgBIACgIIAEgDQAEgEAAgCIgJgFIAAgDIgBgIIABgBIABgDIgCgEIAAgHIgCgEQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgBIgEgCIgEgGQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAQgCAAgEADQgFAEgEAAIgEgBIgDADIAAAAQgDgGgDAAIgBABIgEABQgDAAgFADIgIAGQgCAEAAADIAAAJIAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgGAEIgBACQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABIAGACIABADIgBADIABAKIgDAEIAAACQAAACADACIgBABIABAFQAAAHACAFIgDAEIgEAAIgCABIgCABIgDABQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgCgCg");
	this.shape_58.setTransform(330.775,467.35);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgeA0IgDgCIgGgBQgCgBgIgFIgFgDIgCgDIgBgCIgCgCIgBgCQgDgEAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQgBgDgDgBIAAgBIABgNIAEgKIAGgLIAHgFIACgEIACgDIAKgFQADgCAEgEIAQgGQAIgDAPAAIAIABIABADIADACQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABgBQAHACAGAEIAEADIADAFQADAEAGAAIAFAIIABAJIACAKIgDAAIAAABIgCAEQAAABADACIAAAIIgCAFIgHAPQgIAJgGACIgHADIgHAEIgHADIgNABIgIACIgKAAIgEAAIgPgCgAgUAqQAFACAFAAIAIAAIADABIAEABIAHgBIAIgBIAJgGIAGgDIAFgIIAEgHIAEgEIAAgCIgCgFIABgDIABgJIgCgIIgCgHIgBgGIAAAAIgEAAIgGgJIgDgEIgCgBIgHgDQgCgFgDAAIgEACIgFgBIgIAAIgHADIgDgCIgDADIgGADIgBABIgQAOIgCABIAAAFIgDAFQgBAEgDACIABACQAAADgFABIABADQAEADAAABQAAABgFADIAAABIABABIADgBIACAHIAHAMIAAABIgBAEQAAAAAAABQABAAAAAAQAAABABAAQABAAABAAIACgCIAMAGg");
	this.shape_59.setTransform(315.675,467.425);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgNBXIABgFIACgGIAAgHIABgNIAAgCQAAgBAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIACABIAAgEIgBgEIAAgEIgCgCIAAgEIAAgCIAAgCIABgEIgBgEIAAgBIAAgBIAAgCQAIgCABgBIgBgBQgCgCgDAAIgFAAIAAgCIgBgMQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAgBgBQAAgCAFgDQAIgHAGgCIAFAEIgDAKIAAAGIAAAEIgDADQAAADADAEIgBACIABAGIAAACIgBADIgBAaIACAKIABAFIABAFQgBADgCACIgFAEIgHAGIgCAAIgEgBgAgMg9QgBgFAIgFIAEgEIABgCIAHgJIADgBIADACQADACAAADQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAIgMAKIgCADIgGADIgEACQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_60.setTransform(305.05,463.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgGBOQgEAAgFgFQgCgCgBgCIgBgEIgCgFIAAgEIABgJQAAgFACgCIgBgGIgBgYQAEgCAAgCIgBgDIgEgBIAAgBIAAAAIABgCIAAgMIgIgBIgHAAIgDABIgEABQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAgDAGgDQABgFADAAIAGAAIABAAIAIgBIAAgDIAAgVQAAgEgCgDIgBgDIgBgCQAAgCAEgDQAFgEAIgCQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAIACABQABACAAADIgBAWIgCAGQAAACgDACIABAGIADAAIgBAHIAOADIAEAAIAIgBIAJgBIAIgDIAFAAIgBAGQgBACgIAFIgCACIgCACIgEABIgDgBIgFgDIgEAAIgEgDIgHAFIgFgBIgDABIABALIAAAGQgFABAAADIABADIAFABIAAARIgEgBQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABAAAAIABAEIADgBQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAAFIAAAJIACAFIABADIAAABIAAADQAEADAFAAQAEAAAFgCIAEgDIAHgGIAHgFIADABIAAAEIgCAIIgIAEIgRAGIgFACIgFACQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAgBAAAAIgCgBIgBAEIgDAAg");
	this.shape_61.setTransform(297.125,465.025);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("Ag4BuIgDgBIAFgDQABgBAAgEIAFgJIgKgMIAAAAIACgDIgBgIIACgBIACgEIgCgCIgCgBQAIgEAAgBQAAgBgHgDIgBAAQAHgDAAgBIgFgKQgCgDAAgDIACgRIACgCIgBgIQgEgCAAgDIABgLIAAgHIAAgUIACgFIgBgFIABgBQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBgBIAAgEIAAgEIAAgEIAAgBIgBgGIABgBIAAgCIgCgOIgEgDIABgDIADgDIAGgFIAJgFQACAAADAFIgBACIABADIAMgGIADAAIAGgCQAFAAADACQACgEAKgBIARAAIADAAIACAAQACAAADADIAHADQAIADADADIABADIABADIAGgBQAFAFABAFQADAHABAKIAAACIAAACIABAFIAAABIgCAGIgEAGIgEAHIgFAGIgFgCQgCAIgEACIgEAAIgDABQAAAGgTAHIgIADIgIAAIgCAAIgEACIgDgCIgLgCIABgCIgDgGIgBADIgCAEIgDABIgBAAIgBAAIgCAAIgBAAIgEgBIgBAFIABAJIAAADIgBADIgEACIgBACIgBADIgCACIAHAEIAAACIACAGIAAAMIgDABIAAADIABAGIABACIgBACIADAAIAAAIIABAKIABADIgBACIgEACIAEACIAAACIABAEIAAAGIgEAEIgCAEIgDAAQgFAEgEAAgAAMgLIAEgCIAGgEIAEgDIAFgEIAFgEIAGgHQACgBADgKIACgIIAAgCIgBgFIABgDQgDgCgBgCIgCgGIgFgGIgCgCIABgDQgCgDgDAAIgFABIgEgDQgFgEgBAAIgGAAIgCgBIgIgCIgSACIgKADIgEAAIgEACQgEABgBABIgBAFIABADQgHABgEACIAHACIAAABIACABIABAAIAAAGIAAACIAAAEIAAAFIgCAFIACAFIAAAHIABAHIgBACIAAADIAEACIAIAFIABABIADgBIADAAIAFABIAFAAIAJADIABAAIAJgBg");
	this.shape_62.setTransform(284.175,473.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAEA1IgEABIgCAAIgFAAIgKgBIgCAAIgDgCIgMgEIgEgEIgFgDQgEgCAAgCIgDgEIgEgFIABgDIgDgIQgBgCAAgJIABgKIADgFIAEgGIADgHIALgKIAKgFIAKgHIAEgBIAKgEIAGAAIAJgDQAIAAACAIIAFgDIADADIACABIAMALIAFAHIACAHIACAEIgBABIgEgBIgFACIgFgBIgEABIgJgGIgGAFIgKgBIgFAAIgBAAIgKAAIgGAAIgGABIgGACIgGgBIgLADIgBAHIgDADIAEAFIADALIACABIAAAGIAEABQABAFACACQACACAFABQABAEABAAQABABAEAAIADAEIACAAIAIADIADABIAHgCIAJAAIAGgCIAHgBIAIgFIAHgFIAFgGQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIADACIgBAGIgIANIgDgBIgEADQgDABgDAAIgMAEIgHABIgFABgAgEgnIgHACIgKAEIgGAFIgDACIAAABIAKAEIADADIAGgHIABAAIAHACIAAAAIAHgCIAEAAIADACIADAAIAIgCIAIAAIAAgBIAAgBIgBgDIgCgCQgDgEgBABIgEgDIgDgDIgNgBIgDAAg");
	this.shape_63.setTransform(268.775,467.15);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAAA3IgCAAIgHgCIgKgDIgDAAIgFgCIgEgBIgDgBQgGgHAAgCIAAgCIAAAAIgFABIAAgBIgDgGQgDgDAAgDIgBgEIABgFQgDgCgBgCIAHgDQAEgDgBgDQABgDgKgCIAHgMIADgGIAGgEIACgEIAFgEIAGgFIAEgCIADgCIADgCIAEgDIAHgDIAIgCIAFgBIAEADIAHgCIABAAIAGABIACABIAEAAIAHgBIAFABIgCAFQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAABIgCADIgFAEIgCABIgDAAIAAAAIgFAAIgEAAIgDAAIgJgDIgCAAIgEAAIgKACIgGABIgFAFIgGACIgBAEQgCACgDAAIABACIgFAGQgBACABAOQAAAEADAIIgDAGIAGABIAHALIAEABIACAEIAFADIAEACIAHADIAFABIAEABIAGAAIADAAQADAAAGgDIACABIADgCIAFgEQAEAAADgCIAEgEIADgCQADgEABAAIACACIgBAJIgEAGIgJAEIgEABIgEACIgFAAIgJACIgDADIgBAAg");
	this.shape_64.setTransform(255.4,467.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAEA1IgEABIgCAAIgFAAIgKgBIgCAAIgDgCIgMgEIgEgEIgFgDQgEgCAAgCIgDgEIgEgFIABgDIgDgIQgBgCAAgJIABgKIADgFIAEgGIADgHIALgKIAKgFIAKgHIAEgBIAKgEIAGAAIAJgDQAIAAACAIIAFgDIADADIACABIAMALIAFAHIACAHIACAEIgBABIgEgBIgFACIgFgBIgEABIgJgGIgGAFIgKgBIgFAAIgBAAIgKAAIgGAAIgGABIgGACIgGgBIgLADIgBAHIgDADIAEAFIADALIACABIAAAGIAEABQABAFACACQACACAFABQABAEABAAQABABAEAAIADAEIACAAIAIADIADABIAHgCIAJAAIAGgCIAHgBIAIgFIAHgFIAFgGQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIADACIgBAGIgIANIgDgBIgEADQgDABgDAAIgMAEIgHABIgFABgAgEgnIgHACIgKAEIgGAFIgDACIAAABIAKAEIADADIAGgHIABAAIAHACIAAAAIAHgCIAEAAIADACIADAAIAIgCIAIAAIAAgBIAAgBIgBgDIgCgCQgDgEgBABIgEgDIgDgDIgNgBIgDAAg");
	this.shape_65.setTransform(241.325,467.15);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AhjB/IAAgCIAFgJIABgHIADgTIgCgCIgBAAIALgGQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBQAAgDgMgHIADgBIABgFIgBgDIgBgHIACgSIAAgTIABgDQACgCABgDIgFgCIAAgJIAAgDIAAgJIAAgBIgBgMIABgCIADgCIAAgCIgEgDIABgFIgBgKIADgDIgCgEIAAgDIgCAAIgBgBIAIgMIAAgLIAEgEIgMgMIAAgJQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAIgEAAIgBgCQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBIACgBIAEAAIAGgDIAHgDIADADIACgBIAEABIADgCIAHABIAFAAIAOgBIADAAIAaABIADABIAHAAIABAAIAEgCIAJACIAIABIAEAAIAEABIAFAAIAEABIAMADQADABAAADIAAABIgCAAIAAADIADACIAAgBIAAgCIACgCIACABIABABQAEADAAACIgBAKQABAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIgCAFIgGAGIgBABIgKAKIgHAFIgCADIgFADIgCAAIgEACQgCABgDADIgEAFIgEABIgDACIgDgBIgCAEQgFABgCACIABAAQgDAEgDACIgGABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABIgHAEIADABIAFALIAFAFIACADIgCABIACACIABAAQADAAADADIABADIAEAEIgDAEIABABIAGABIACADIADAEIAFAJIAMAPIAEAGIAFAHIACAFIAAACIAAACIAIAFIAGAGIAKAOQACACAAAEIAGAEIACgBIAAAAIABABIADAEIAFADIADADIAEgCIAFAAIACgBIABADIgBACIgFACIgFADIgEABIgJADIgEABIgDADIgEgDIgEgCIgGgLIgBgFIgIgGIACgFQgDgDgDgCIgIgLIAAgEQgEgBgCgDQgIgHgBgJQgBgDgFgCQgDgCgFgJQgDAAgCgCIgEgGQABgEgCgCQgDgEgCAAIgCAAIgFgHIgJgMIgJgJQgIgIgDAAIgSAHIAAAAIgEgBIgCAGIAAABIAAAEIAAACIABAGIgBAFIAAADIAAAGIABALIABAEIAAALIAAAGIgBADIgBAEIgDACIAAAGIAEABIgBAEIABAFIAAABIAAADIAAACIAAAGQgDABAAADQAAABAAABQABAAAAABQABAAAAAAQABAAABAAIgBADIAAAIIgBAFQgBACgDACIgEACIgCADIgFgBQgEAGgGAAIgEgBgAhGg7IAAAMIAAAFIAAAHIAAALIgDABIAAACIABAAIADABIAEgCIAFgBIACABIADgBIABgCIAKgCIADgBIAIgFIAJgFIAagOIALgGIAGgGIAFgEIAFgEIAEgCIAEgGIAEgDIABgEIAAgCIgBgDIAAgCIADgBIAAgBIgFgCIgCgEIAAgCIAAAAIgBgCIAAgCIgEgBIgBACIgEgCIgHgCQgCAAgCgCIgDABIgIgDIgJAAIgEgCIgJABIgFABIgGgCIgFgBQgEAAgIAEIgFACIgBgBIgEgHIgFACIgIABQAAABgBAAQAAAAAAABQgBAAAAABQAAABAAAAIgBALIgCAFIgCAAIAAACIAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAIAEAFIAAAIIAAACIgBADIgBAEIgCADQAAADgCACIAAABIADgCg");
	this.shape_66.setTransform(224.125,464.375);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgpBiIgNgDQAAgDADgDIAGABIAEgDIAFgBQACAAAFgGIADAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQADgCAAgDIASgPIAEgEIADgFIADgCIADgEIAFgDQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIAEgEIABgGIAEgFIABgEIAEgJIAAgHIABgEIAAgDIAAgEIgCgDIAEgCIAAgCIgDgKIAAABIgCAJIAAADIgCgDIgHgGIgCgFIgDAAIgBgBIgCAAIgFgCIgGgCIgDgBIgGgBIgFgBIAAAAIAAgCIgCgEIgCAFIgEAAQgGAAgDADIgEAEIgEACIgFACIgEgCIAAAAIADgFQACgDACgBIACgDIAEgDIACgCIACgEIACgBIACgEQAAgCAGgJIADgKIACgGIAAgDQAFAAABgCIABgDQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAIAEAAIAAABIAGgBIAEAHIAFgHIAEgBQABAAAAAAQABABABAAQAAAAABAAQAAABAAAAIACAGIAAABIAGgKIAFAAIAFAAIADgBIAGgDIAEgBIABAEIgFAIIgEAHIgDABIgGAEIgFgCIgLAAIgCgHIgCgBIgJAHIgEgGIgCABIgCABQgCAAgBAGIAAgEIgBAFIgEABIgCAFIgHAPIAEABIANACIADABIAJAAIAIABIgBACIAEgCIAEADIAFAAIAAACQAAADABADIACAAIADgCIACgBIADAEIAHAGQACADAAACIAAADIAAABIABAGIgBAEIAAAEIgCAFIAAACIgCAFIgDADIgCAGIgDAFIgDAFIgDAEIgCAEIgDADIgDAEIgHAJIgHAGIgFAFIgGAHIgEADIAAADIgFAEQgCAEgEACIgCABIgBABIgLAIIgGAEIgCACIgCABIgDgBg");
	this.shape_67.setTransform(472.975,423.075);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("ABtB6IgDgGIgDgMIAAgCIgDgFIAAgDIgBgDIACgEIgEgEIACgDIABgBIAAgCIgHAAIgEgHIgCgIIgCgFIgDgLQgCgEgFAAQgFAAgBAKIgBAAIgEgBQgEgDgEgCIgGgCIgIgBIgHAAIgEAAIgFAAIgDAAIgEABIgGAAIgGAAIgCAAIgHgBIgFAAIgEgBIgHABIgHACIgEgEQgFAAgEACIgGABIgCABIgEgBIgGAAIgHABIgGABIgCAEIgFAIIgHALIgCgBIgBACIAAADIAAACIgDAEIgGANIgEAGIgBACIgIAFIAAACQAAAAAAAAQAAABAAAAQABABAAAAQABABABAAIgCAHIgFACQgCACgCAEIgFADIgDABIgCgBIgCgBIgCAAQgDgCgDgBIABgCIAEgDIAGgGIADgDIADgDIAAgCQAAgDADgDIAHgHIAHgNIADgBIAAgBIAAgDIAAgCIAEgEIANgVIABgCIgCAAIgCAAIgBAAIgDAAIAAgEIABgDIADgFIADgFIAEAAIAGADIAAgBIABgCIgBgDIADgCIACgGIAGgGIABgEIAFgFIADgGIAIgMIAJgRIADgEIABgDIAEgGIAAAAIAAgCIACgFIADgEIADAEIAAgCIgBgEIACgEIADgEIAAgEIABgCIADgHIACgEIAGAAIgBgCIgEgCIAAgCIAEgDIgCgCIAAgBQACgBACgEIACgGIAAgCIAAgBIAAgCIAAgDIAKgIIADADIABgEIACgCIACAAQABgDACgBQADgCACAAQAEAAABAKIABAJQABAEADAGIACAJIAAADIgGADIACAEIAHACQACAAADAIIACAFIgCAEIADADIAEAEIACADIACAIIABAEQAEAEABAFIAAAEIADAEIAGAMIgDACIACAEIACAAIAAADQAOAMAAANIAGANIAIAQIADAGIAJASIgBAFQAJAEAAAEQAAACgEACIACACIADACIAEAFIADAJIAIANQgDABAAADIAAACIgGADIgFAAIgKADIgEgLgAgcAfQAEAAAFACIAJABQADAEAEAAIAHgEIAFABIAIAAIADAAIAEAAIAEAAIADAAIAEABIAIgBIAGgBIAMgBIAKABQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAAAIgCgGIAAgCIgEgFIgFgKIgCgEIgDgFIABgFIgBgFIgFABIgCgEIgBgDIgDgEIgDgHIgCgCQAAgFgDgFIgCgGIADgCQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgBAAIgCgEIgEgFIAAgGIgDgDIgCgFIgEgFIgDgIIgCgFIgEgGQgDABgBADQgDAEAAAEIAAAAIgFAKIgIAPIgDAGQgDABAAADQgDAGgFACIABADIgCABIgFgBIgBACIAEADIgFALQgHAMgFAEQgBAAAAAAQAAAAAAABQgBAAAAABQAAABAAAAIgBAFIgEAGIgDAEIgCADIgEAIIgBAEIADgCIADACIAFAAIABADIAIgBg");
	this.shape_68.setTransform(451.925,420.45);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgEBMIAAgCIAAgFIAAgEIADgDIgCgDIAAgBQAAgCADgDQgCgDAAgDIAAgGIACgFIAAgEIAAgFIAAgCIAAgEIACgBIABgDIgDgIIAAgFIAAgEIgBgFQgCgDAAgEIADgZIAAgEIgBgLIANAHIAEAEIAAAAQgDABAAADQAAAEAEABIAAACQAAADgDABIAAAEIAAADIAAAJIACAHIgBAGIAAACIABAGIgBAGIgBADIABACIABAHIAAADIAAABIgBADIAAACIAAACQgDACAAADQAAACADACIAAACIABAKIAAADIAAADIAAACIAAABIgKAGIgIABIgCgBgAgBg0IgFAAIAAAAIgKAAIAAgCIAAgDIAIgEIAFgDIAKgJQADgDADAAIAEABIAAAIIAAACQAAAGgIADIgKAEIAAAAg");
	this.shape_69.setTransform(429.675,421.325);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgJCEIgCAAIgEABIgDABIgOAAIgFAAIgKgBIgEgDIgFgBIgBADQgOgEgEgFIgIgHIgCgGIgDABIgFgBIgHgJIgFgGIABgHQAAgEgEAAIgDABIgDgHIgBgCIgGgRQgCgGAAgDIAAgBIAAgDIgBgFIAAgLIgBgGIgBgCIACgDIAEgCIgCgIIgEAAIACgKIABgEIADgNIADgHIAGAAIABgEQgFAAABgDQgBgCAJgOIACgEIAFgGIAEgGIADgDIAEACIADgBIgBgHIAHgHIAKgIIADgDIADgDIADgCIALgIIAJgHIAEAEQABgBABAAQAAAAABgBQAAAAAAAAQABgBAAAAIABgDIAJgEIAEgDIAIgCIAFgCIAHgBIASgFIADgBIAEAAIADAAIAEAAIAGgCIABAAIALAGIAGgGIAKABIALAAIALACIACACIABAAIACgCIADADQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgDACIgFADQgEADgCAAIgIgBIgGgCIgJgBIgHgDIgBABIgCABIgBgBIgHgBIgEgEIgGAFQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAIgFgBIgJADIgGgCIgHADIgHABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgLAEIgJAGIgIAEIgDADIgEgBIgCABQgBAEgCACIgEADIgDABIgCACIgFAFIgEgBIABAEIgEADIgDAFIgHAJIgFAJIgEAAIgCAEIAAAAIgBAAIgBABIACAAIAAADIgDAEIgFANIgCADIABAHIgEAIIgCAIQgDABgBADQAEADAAACIgBAKIABAGQgDADAAADIABAEIADgBIABAHIABADIgNAEIgBAAIALACIAFABQAAAIADAFIAAAAIgCAJQAAABAAAAQAAAAAAAAQABABAAAAQAAAAABAAIACgCIAEAEIADAGIABAGIACACIAHAGIAHAGIACADIACACIAEABIADACIABACIABgCQAGAGAHAEIAGADIAGADQADAAAGgHQADADAHAAIAEAAIADgCIACABIABAAIAQAAIAFgBIAFABIADAAIAHgBIADgCIAMgCIAJgCIAFACIABAAQACAAABgEIAFAAIAKgCIAHgBIALgDIAAgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIALgDIgLgHIALgHIgLgOIAAAAQABgEAAgEIgBgKIgBgPIAAgCQAAgEACgBIAJgEIABAAIgBAAQgFgDgEAAIgDAAQgBgHgEgDIgCgBIgEABIgCgCIgDABIgPABIgDgBIgDABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAgCAEgDIAEgDIAEAAIAFAAIAIADIABAAIAFgDIAIABIACAAIADAAIAGABIAJgCIACAGIAAAAIgBAIIAAACIABAKIAAAMIgBAHIgBAGIgDAAIgCAGIAAAFIgDABIALAJIgBABIgBAEIgCABIACAEIACABIACADIgBAFIAAABIABAFIACADIgCADIAAACIAAACIgEABIgCADIgMABIgMACIgGgBIgCACIgRADIAAAAIgCAAIgBgBIgJADIgKABIgIABIgHABIgLADIgFAAIgWADIgEgCgABzBDIAFgCIABgDQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIgDACIgBAAIgEACIAAAAg");
	this.shape_70.setTransform(401.85,419.975);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgYBiIgLgEIgDgBIgEgCIAAgDIgGgFIgCgDIgFgHIACAAQgEgHAAgFIADgGIAAgBIgBgFIABgHIgBgEIABgDIADgGIACgDIACgEIACgCIADgCIgBgEIABgEIAGgHIAEgJQADgGAGgDIAEgFIAEgIIADgEIAIgJIACgDIABAAQABgDADgDQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIACgCIAHgIIAGgGIACgDIAEgCIAGgGIAEgFIAEgEIAJgGIAGgDQACAAACADIgCADIgCAHIgGABQgDABgDAEQgFABgEAEIgDAEIgFADQgCAEgFAGQgEAEgEACIgBAEIgNAQIgHAIIgEAHIgDAEQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABIgEAEIAAAAIgFAHIAAACQgCAEgBAEIABAEIgEAOIABACIgCADIgCAKIABACIAAABIgCAGIAEADIADAJIAEAGQAEABABACIAAABQABABAAAAQAAABAAAAQAAABABAAQAAAAAAABIAFgBIADACIAFABIADACIACgBIADABIAAAAIABgBIAEgBIAPgIIACgDIAJgJIACgHQABAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAIgDgEIACgCIgBgCIAAgBIAAgCIgCgDQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBgBIABgFIAAgEQABgFgCgEIgBACIgFALIgDgHIgEgBIABgEIgBgCIgCAAIgEACIAAAAIgFgBIgGABIgGgCQgGAAgDADIgCgBIgBAAIgEABQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgCAOgJIAMgDIAGAAIAGAAIAEAAIACABIADADIAFgCQAFAAACAEIABAEIADAEIAEAAIAEANIABAEIAAACIAAAFIgBAIIgEAIIgFAFIgDAHQgDADgEABQgEAJgQAIIgFADIgKADIgFACIgHABIgGgBg");
	this.shape_71.setTransform(380,419.975);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAxCGIgJgBIgXACIgJgBIgFABQgDAAgBgDIgFgEIgOAFIgEAAIgDgBIgDAAIgLgBIABAAIgGAAIgBACIgDgCIgFgBQgEADgGAAIgHAAQgEACgDAAIgFgBIgKgCIAEgEIAGgFIAAgCIABgCIAJgMIAGgGIgMgDIAMgHIgLgLIAAgFIAAgEIACgHIAAgFQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAIABgBIADABIAAgBIAAgBIgDgEIAAgEIgEABIgBgBIABgEIAAgGIAAgMIgBgHIABgGIACAAIACgHQgFAAAAgCIABgCIAAgGIAAgEIAAgEIAAgCIgBgCIABgCIADAAIAAgCIgCgBIAAgBIABgDIACgDIABAAIABgCIgDgBIABgEIgEABQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAgBAAgBIABgGIgBgLIAAgFIAAgEIAAgCIABgIIgBgCIAAgMIABAAIAAgEIgCgEIAAgCIgCgDIAAgFIgBgGIgCgEIgCAAIgCgFIAEgCIAHgBIACgCIADgBIACgCIACgBQAHgDADAAQABAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAAEIABADIgCAFIAAAEIABAHIAAAAIAAABIgDAAIgCAAIAAABQgBACgDACIADAEIAEAAIACADIABAAIABABIgHAHIgBAJIgHAHIACAGIABASIAFACQAEACAAACIAAAAIgBACIgCABQADADAAAHQAAADgEACIACAEQACAEAAACIgBAFIAAABIAAACIAAAPIAAADIAAAHIAAACIAAACIAAgBIgDADQAAAEADADIAAABIAAAUIABACIAAACIgDALIAAAHIgBACIgBADIgBAGIAEAAIABAEIAAAWQAAABAAAAQAAABAAAAQABABAAAAQABAAABAAIAEADIACgBIAFABIAFABIAJACIAIAAIAEAGIAMgFIAFAAIACABIAEABIAFgBIACAAIAGABIAHgBIAGABIAEAAIAGgBIAHgBIANgBIAEgBIADgBIAEAHIABAAQAAAAABAAQAAgBAAAAQABgBAAAAQABgBAAgBIABgGIAGgCIALgEIABABQAAAEgBABIgCADIgFAHIgFAFIgDAAIgCACIgIgGIgTAHg");
	this.shape_72.setTransform(362.275,420.175);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgJAjIgEAAIgEgBIAAgBIABgBIAFgDIABAAIAAABIADAAIABgDIAHgDIABgEIADgDIABgDQAAgEABgDIAAgDIABgEIAAAAIgBgCQgCgJgDgCIgCgCIgCgBIgBgDIgGAAIgBgBQAAgCAIgGIAFgHQAFABACACIAFAFIAAADIABAEIABADIAAADIABAFIgCAFIgBACIABABIAAAFIgDAHIgEAFIAAABIABABIAAABIABAAIgEAFQgDAFgEAEIgEACg");
	this.shape_73.setTransform(341.625,430);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("ABaB/QgBgFgCAAQgCAAgDACQgDAAgCgEIgDgGIgBgDIgFgIIABgEIgIgDIgFgJIgGgGIABgEIgCgGIgGgFIgEgFIACgDIAAgBIAAgBIgDAAIgBgDIgDgCIgCgCQgFgCgBgEIAAgDIgDgBIgBgDIgQgUIAAgBIAGgEIAAgCIgDgBIgEACIgGgHIgGgFIgGgIIgBgCIgCgFIgDgFIgCAAIgCAAIgCgEIgGgIIgCgBIgFgGIgKgNIAAgBIAAgBIADAAQgDgFgDgCIgCACQgEgCgBgCIAAgDIgJgHIgLgNIgBACQgDAEgBgBIgIAEIAIAEQAEACAAACIgBADIgCAKIgBAHIgCAEIACAEIACAHIAAAKIABAJIgCAGIgCAAIABAEIAAADQAAABAEADIgBAGIAAACIABAQIgBAEIgEAAIABAEIABADIAAADIAAAFIABADIAAAHIAAAEIgDABIAAABIAAAIIADAAIACAHIAAAMIABAGIABANIAAADIAAADIABAGIgCAFIgBgBIgQAJIgEACIgBgDIACgLIAAgEIABgGIAAgGIABgCIACgEIAGgDIACgGIAAgBIgHgFQgBAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAAAIABgDIgBgDIAAgFQAAgCADgEIgEgCIABgPIABgGIAAgFIAAAAIgBgMIgBgJIAAgDIADgEIgBgCIAAgCIAAgCIgCgIIAAgFIAAgCIAAgGIABgHIAAgGIACgEIAAgBQgGAAAAgEIAAgCIAAgDIAAgIIACgCIABgCQAAAAABgBQABAAAAAAQABAAAAgBQAAAAABgBIAAgCIgCgHIgDACIgCgBQAKgDAAgBIgLgFIABgLIgCgMIAAgCIgDgBIgBgCIAAgBIABgCIAEgDIACgCIADgCIAIgIIAGgEIACAEIAEAAIAAADQAAADADAEIAAAFIAAACIACAAIADACIADACIACAFIAEAEIACAFIAEgBIAGALQAHAJADADQAEAEABADIACAGIAOASIADADIgBAEIABADIADADIADABIADADIABAAIAAAAIADADIAGAJIAEAEIAEAGIADAEIAEAFIAFAHIACAFQABABAEACIAGAGIACABIAAAAIADADQACABAHALIALAMIAFAGIgBAEIAFAFIANAPIAFAEIABgCIAAAAIAAgCIgBgEIABgRIABgHIAAgCIgBgKQAAgDACgDQgEgHAAgFIABgFIAAgBIgCgIIABgKIgBgGIABgGIAAgBIgBgEIAAgDIAAgEIACgDIgBgCIAAgCIAAAAIABgDIAAgBIAAAAIAAgRIAAgLIAAgNIgCgJIACgEIAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQgBAAgBgBIABgEIgBgGIgBgEIAAgGIACgCIAAgCIgEgDIABgDIAJgGIAJgEQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIABAHIgDARIABAVIgCALQAAADACADIgBACIAAAYIABACQgBABgBAAQAAAAgBABQAAAAAAABQAAAAAAABIADALIAAAAIgEABQgEACAAACIAHAPIAAAAIAAAIIAAALIgBADIABAEIAAAIIACAIIgBACIgCAAIAAACQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIABADIAAAGIAAAFIABAFIABAEIgIAOIAIAEIgUAFIAVAJIgCAJIABAGIAAABQABACgGAEQgGAEgEABIgBgFg");
	this.shape_74.setTransform(325.8,420.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgnCHIgFAAIgEgBIgFgBQAAAAgBAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIABAAIgCgDIgGABIAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAgBIgCgJIgBgDIgBgBQgBAAgBANIgLgGIgLgHIgBgDIgDgCIgBgEIgCgEIgFgCIgCABQgCAAgDgEIgEgGIgBgFIgDgDIgBgBIgCgFIgHgKIgCgIIACgDIACAAIgBgEIgDgCQgDgBgBgGIgBgIQgBgFAAgOIAAgBIAAgEIAAgJQABgDACgDIADABQABAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgCgEgDIABgEIACgHQAFgPAHgMIAHgMIAKgOIABABIACgCIAAgCQAAgCADgDIAJgIIADgEIABgBIAEACIACgEIgBgCQAEgDAEAAIACgFIAJgFQAEgBABgCQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAIACgDIAHgDIAFgCIAEgCQAGgDAFgBIAOgBIAGgBIAFAAIAFgBIAEAAIADAAIAJABIAHACIANgBIABAAIADAEQABABAGAAIAHACIADABIADABIACABIACAEIACgCIAHADQACABABAEIAEgCIAMAJIAFAEIABACIACAEIgCAEIABAAIAAAEIADgCQACAAADAEIACAAIADAEIADAGIAEAHQgBAAAAABQAAABgBAAQAAABAAAAQAAABAAAAIAAABQAFAEABADQABACAAAJIACAIIAAAEIABAIIAAACIgDADQgBAAAAAFQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIADADIABACIABACIAAADIgBADIAAABIABAJIgDAKIgBACIgBAEIgCAJIgDADIABADQgBAAgBAAQAAABAAAAQgBAAAAABQAAAAAAAAIAAACIgEAHQgJAMgHAHIgIAKIgFAEIgGAFIgFAEIgWAOIgEACIgjAQIgFABIgaAIIgCAAIgWACgAgDB8IAHgCIAFgBIAHgDIAJAAIAEgCIAMgGIAEABQAAAAABAAQAAAAABAAQAAgBAAAAQABgBAAgBIgBgDQAAgBAEgCIAGgDIAHgEIADACQADgEADgCIAAgDIANgKIAEgDIAFgHIAFgEIADgHIAEgGIAFgKIAAgEQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIACACIACACIACgDIABAAQABAAAAAAQABAAAAgBQAAAAABAAQAAAAAAgBIgBgDIgGACIgBgEIABgHIAAgFIAMgDIgNgFIAGgBIAGgLIAAAAQgDgDgEAAIgGABQAFgBAAgDQAAgEgFgDIAAgEIgBgJIgBgIIgCgDIgDgOIgCgEIgCgEIgDgEQgEgKgFgEIABgEIgBgEIgGABIgGgHIgEgEIgLgGQgEgCgCgEIgCABIgEgCIgCAAQgEAAgHgEIABgEQAAgDgFgBIgCADIgCACIgIgCIgIgCIgGABIgBgHIAAAHIgEgCIgIACIgDAAIgFAAIgFgBIgGABIgHACIgIADIgGABIgDAEIgDgBIAAADIgIAEIAAACQgGADgGAFQgJAHgEACIgDAFIgJAKIgDAFQgCACgGALIgGAOIgCADIgBAHIgCADIAAAFIgDAGIAAABIAAABIAAAFIAAAUIAAABIAAABIABADIAAACIAAAGIABADQADADAAAEIABAFIAAAEIAFAHIAAABIgBADIACACIgBABIADABQACAFADACIABADIADAEIgDAEQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQAAAAABAAIAFgBIABADIAEACIAJAHIgBAFQAAAAAAABQAAAAAAAAQAAABABAAQAAABAAAAQACACADAAIACgBIAGAFIABADIACABIAFACIAFADIAGADIAKACIAJACIAFACIACgBIACAAIADAAIACAAIADgBQACADACAAgAhuA4IABAAIAAAAIgCgBIgBAAgAhwA3IgBAAg");
	this.shape_75.setTransform(297.275,420.025);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgJAjIgEAAIgEgBIAAgBIABgBIAFgDIABAAIAAABIADAAIABgDIAHgDIABgEIADgDIABgDQAAgEABgDIAAgDIABgEIAAAAIgBgCQgCgJgDgCIgCgCIgCgBIgBgDIgGAAIgBgBQAAgCAIgGIAFgHQAFABACACIAFAFIAAADIABAEIABADIAAADIABAFIgCAFIgBACIABABIAAAFIgDAHIgEAFIAAABIABABIAAABIABAAIgEAFQgDAFgEAEIgEACg");
	this.shape_76.setTransform(272.675,430);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AA0A1IAAgGIABgIIAAgDIAAgFIAAgCIAAgJIABgGIACgGIgDgEIAAgBIAGgDIACgBIgIgFQACgDABgGIgDgDIgCgOIgIgJQgCgDgFAAIgGABIgFADIgCABIgDACIgFAEIgFAGIAAAJQAAABgBAAQgBABAAAAQgBAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAABABAAQAAABABAAIAAAIIABAJIAAAFIgEAAIAAABIACAEIABADIAAADIAAAEQACAHAAAJQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgFAEIgIACIgBAAIgBgDIAAgGIAAgLIABgJIABAAIACgCIgBgEIgBgFIgCgEIAAgCIAAgGQAFgDAAgCQAAgCgFgBIAAgPIgDgJQgCgDgDAAIgEABIAAgBIgCgDIgEACIgGABIgIAEIgFAAQgDAFgCAFIgBADIAAAGIgCAGIACAEIgCAHIgDACIAEAGIAAAHIAAAEIAAACIABAJIABAMIgMAFIgDABIgDAAIAAgBIAAgFIAAgHIAAgIIgBgCIADgFIAAgBQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAgFIADgGIABgFIgCAAIgCgFIABgLIABAAIABgBIAAgDQAAgGgCgCIgBgJIgDgIIgCgBQAAgDACgCIAKgHIAEgCIACACIABACIABADIABAFIgBAGIABAAIAFgBIADgEIAEgBIACgDQAGgDADgBQAGgBADgCIABAAQADAAAAAFIAFAAIAAgDIAGgCIADgBQADAAADAEIADAKQABAAAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIAEgEIAFgEIAMgFIAEABIAEgBIAHAAIAFgBIAFACIAFABIAGAEIAAAEQgBAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABIABABIADAAIABAJIABAEIAAAOIAAACIgCAGIgBACIACAGIAAACIAAAEIAAABIABAKIgDACIAAACIABAAIACACIAAAEIAAADQAAADABAEQgCADgHACIgIAFIgDAAg");
	this.shape_77.setTransform(261.05,423.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgdA0IgGgBIgEgCQgFgCgDgCQgBgBgBgDIgEgCIgBgEIgCgHIACgDIAFgIIAIgIIAJgEIAEgDIADAAIAEgCIAIgCIAHgEIAGgBIAFgBIACAAIADAAIAFAAIALgCIAGgBQACgCAAgEIgBgDIAIgJIgJgEIgEAAIgHgIIgKgCIgFAAIgDgBIgDAAIgDgCQgCABgCABIgEADQgHADgFADIgCACIgCADIgEABIgFgCIgGgCIgDgDIAEgCIADgDIAGgBIAEgDIAJgCIAFgDIAGAAIAGgCIACAAIAFAAIAIAAIAHACIAEAAIAHACQACAAADADQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAIAEgBIADgCQACADAAADIAEABIAAACIAAAGQABAGACACIAAAAIABAGIAAALQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQABABAAAAQABABABAAIAAADIAAAFIgBADIACALQgCADgBACQABACACADIABADIACAEIgDADIgEACIgFADIgEABIgFABIgDgBIACgJIgLAEIgEAAIgEABIgFAAIgFADIgDAAIgKACIgGAAIgGABIgKgBgAgZApIAFACIACACIAFABIABAAIAEgCIAEACIACgCIAEABIAHgDIAEgBIACAAIAGgCIAFgDIAEgDIAEgDIABgEQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBIgDgDIAAgDIAAgCIAAgGIAAgCIABgFIgDgBIgGAAIgFAAIgEAAIgDAAIgEgCIgDABIgIABIgCAAIgDAAIgFABIgHADQgIAEgEADIgDAFIgFABIgBACIABACIABAHIADAEIgDADQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAAAIABADIAFgEQAEAEACAAg");
	this.shape_78.setTransform(244.7,423.95);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgxByIACgKIAAgFIACgDIABgEIAAgCIgDgDIAAAAIABgIIAAADIAAgDIAAgGIAAgCIABgBIgBgGIABgKIAAgIIAAgCIADgEIABgCIAAgEIgDAAQgCgGAAgJIABgVIAEgBQgCgDAAgEIgDgBIABgHIgBgEIgCgOQAAgDADgCQAHgEgBgBQgDgDgGAAIAAgGIADgFQgBgCgDgCIAAgGIAAgFIAAgGIABgGIgDgMIAAgDIgDgDQABgCAEgCIAKgFQADgCAEAAIADACIgHAEIgGAFIALAKIABADIgCAEIgBADIgCABIgBACIgBACIABADIADgBIADgBIgCAYIAAADIABAEQAAADgDADQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABABIACACIAAADIgBAHIABAGIAAAIIgBAEIABAGIAAACIAAAEIAAACQgBAHAAAHIABAGQAHgEAKgKIAHABQACgCAFgBIAGgBIAEACIABADIADAAIACgDIACgCIAIABQAMABABABIAFAFQABACAEABIgCAFIAFABQADAEAAAEIAAAJQgBAFgBABIgCACIACAFIgDAEIAAABIAEADIgBADIAAADIABAJIAAABIgDAFIACAKIAAALIAAACQgDACgFAAIgFADIgFACIgFgEIADgHQADgGAAgFIgDgGIABgCIABgGIADgLIgDgBIACgQIAAgCIAAgBIgBgGIABgBIAAgDIgCgEIgDgEIgFgCIgHgDIgFAAIgJgBIgDABIgGAAIgLABIgBAAIgIAFIgFACIgKAKQAAADAJABIgBAFIgBAPIgEABIAAABQADADABAEIABALIABAEIgBAHIABADIAAADIAAACIgCACIgIAEIgGAEg");
	this.shape_79.setTransform(230.6,417.75);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAhByIgLgDIgFgDIAAgDIAAgBIgDgCIgBAAIgFABIgDgCIgGgGIgHgGIgFgBIgNgMIgGgEQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAIAAADIABAOIABAMIAAADIAAADIgCACIgGABIgKAEIgCgEIADgTIAAgTIADAAIACgEQgEgDAAgCQAAgCAEgGIgEgCQAHgDAAgCQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAgBgBAAQgFgDAAgBIAAgBIAAgDIAAgFIAAgFIAAgEIAEgDIAAgBIgEgDIgBgWIgBgJQAEgDAAgDQAAgCgEgCIAAgCIgCgSIABgKIAAgDQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBIAAgCIgBgDIAAgFIgBgLIAAgDIAAgHIAAgEIgBAAIACgFIAAgBIgBgEIANgIIAIgDIABABIgCAHIAAABIAAABIAAABIABASQAAABgHADQgEACAAADQAAAEALAIIgEABIAAAMIACAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAAAIAAAEIAAACIABAHIAAAlIgBAHIgBACQAAAEAEAEIgBADIAAADIAAAJIABABIgIALIAIAFIgCAIIACAFIAHgEIAIgGIANgOIAFgFIACgDIAJgJIAJgKQAGgGAEgBIAGADIAAADQAAAEgEADQgBACgFABQgCAEgCAAIgFABIAAAEQAAADgFAEIgEACIgDADIgDAAIgCAEIgEADIgKAJIgCADQAGAHADACQAKAGAAABQAAABAAAAQAAABABABQAAAAAAAAQABABAAAAIAAABQAAABAAAAQAAAAABABQAAAAAAAAQAAABABAAIAEAEIAEgCIARAHIAAADQAAAAABABQAAAAABABQABAAAAAAQAAAAABAAIAEgBIADACQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABIADgBIABAAIADABIAEgCIABABIAAABIgCAGQgCAEgFADIgHABIgEABIgGgCg");
	this.shape_80.setTransform(217.525,417.675);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgpAzIADgIIAAgBIgBgHIABgCIADgBIAAgCQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBgBIAAgDIgBgHIABgHQAFgBAAgDIgBgDIgCABIgDgBIAAgFIAAgDIAAgEIAAgBIAAgCIAAgDIACgFIgCgDIgBgJQAAgBgDgEIADgFIAHgEIAHgEQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABIABACIABAEIAAACIABADIAHgDIAGgDIAGgDIADgBIADgCIADABIAAAAIAKgEIAEAAIADABIADADIACAAIAEgCIAAAAQABAAAAAAQABAAAAAAQABABABAAQAAAAABABQACACABAEIgJAGIgEAEQgCAAgEgEIgEAAIgGgBIgGgCQgCACgDABIgEAAIgFACIgCgBIgKAHQgEAEAAAHIAAABIAAAFIAAADQAAACgDADQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAIAAABIACABIAAAEIABAZIAAABIgEACIgIACIAJACIACgBIACAGQAAADgDADIgHABIgGADIgCAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_81.setTransform(206.725,423.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgdA0IgGgBIgEgCQgFgCgCgCQgCgBgBgDIgEgCIgBgEIgCgHIACgDIAFgIIAIgIIAJgEIAEgDIADAAIAEgCIAIgCIAGgEIAHgBIAFgBIACAAIADAAIAFAAIALgCIAHgBQABgCAAgEIgBgDIAIgJIgIgEIgFAAIgHgIIgKgCIgFAAIgDgBIgDAAIgCgCQgDABgCABIgEADQgIADgEADIgCACIgCADIgEABIgFgCIgGgCIgDgDIAEgCIADgDIAGgBIAEgDIAJgCIAFgDIAGAAIAGgCIACAAIAFAAIAIAAIAHACIAEAAIAHACQACAAADADQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAIAEgBIADgCQACADAAADIAEABIAAACIAAAGQABAGACACIAAAAIABAGIAAALQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQABABAAAAQABABABAAIAAADIAAAFIgBADIACALQgCADgBACQABACACADIABADIACAEIgDADIgEACIgFADIgDABIgGABIgDgBIACgJIgLAEIgFAAIgDABIgFAAIgFADIgDAAIgKACIgGAAIgGABIgKgBgAgZApIAFACIACACIAFABIACAAIADgCIAEACIADgCIACABIAIgDIAEgBIACAAIAGgCIAFgDIAEgDIAEgDIABgEQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBIgDgDIAAgDIAAgCIAAgGIAAgCIABgFIgDgBIgGAAIgFAAIgEAAIgDAAIgEgCIgDABIgIABIgBAAIgEAAIgFABIgHADQgIAEgEADIgDAFIgFABIgBACIABACIABAHIACAEIgCADQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAAAIABADIAFgEQAEAEACAAg");
	this.shape_82.setTransform(193.3,423.95);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("ABfCBIADgJIAAgDIgBgEQAAgDAEgBIgBgEQgEgEAAgCIABgDIACgKIgDgJIAAAAIABgLIgCgLIgBgDIAEgBIgBgFIgDgCIgCgHIgBgIIAAgFIAAgBIAAgBIACgFIgBgEIgBgDIAAgCIgBgNIgBgGIABgLIgBgFIAKgEIgKgCIACgDQgBgFgEgCQAAgDAFgBIAGgBIgLgGIAAgHIgCgDIgCAAIAAADIgDAGIAAAEIgEADIAAACIgDAHIgBAFIgDAEIgBAFIgDAEIAAAFIgCACIAAAFIgGANIgDAIIgDADIgBAEIgDABIgCALIgEACIAAAEQABAHgGAEIABACIgBACIgEAFIgCAGIgEAKIgCAEIgCAFIgCAEIgBADIgEAHIgGATIgEAAIgBAAIgDAAIgBgBIgGgLIgFgHIgDgGIgBgGIgCAAIgEgLIgGgLQgDgDAAgEIACgEIAAgBIgCgDIgEABIgEgHIgDgGIgBgCIgBgEIgFgJIgCgCIgEgLIgGgMIAAAAIACgBIgCgEIgCgFQgBgGgCAAIgBAAIgDAAQgHgOAAgCIAAgDIgDgEIgBgDIgBgFQgCgDgBgDIgCgFIgBgBQgEgIgEAAIgCAAIABAHIABAFIAAAHIABAHIAAADIgBADIABAJIgBAFIgBABIAAAFIgBAAIAAAEQAEAAAAACIgBAEIAAADIAAAKIAAAFIAAAFIgCAEIABAHIgCABIAAADIACAGIAAABIgBADIAAAFIAAADIAAAGIgBAHIAAAKIABAHIgCADQgHADABACQAAACACADIADgDIABAAIABAAIgBADIACAEIAAABQAAACgGACQgGACABACQAAACADABIAIADIAAAEIAAACIgEADIABACIAAACIgJADIgFACIgJADIgBAAIAAgBIAAgBIACgEIAHgEIADgEIADgEIACgDIgLgGIABgCQACgBAAgFIAAgIIABgEIAAgCIgBgDIABgDIgBgFIADgLIgCgHQAEgCABgDIgDgDIAAgKIAAgFIABgJIgBgDIAFgBIAAgBIgCgDIgCgFIADgCIABgEIgCgEIAHgFIgJgDIAFgLQgCgEgEAAIABgIIAAgDIAAgEIAAgJQAAgDACgDQgDgFAAgDIABgFIgCgDIAAgCIABgIIAAgDIgCAAIABgLIACgGIgDgHIgEgBIACgDQAEgFAGgEIAJgGIACAAIAHAJIACAFIACABIABAFIACAHQgIABAAACQAAADAFACIAGgDIAAAAQABAHABAEIADAEIgBAFQAAACAEACIABAGIABABIgBADQAFADABACQgBADgFADIACAGIABABQAEgEABAAIADAAIABABIAAACIAAABIAAABIABADQAFAJABAEIACAGIAAABIgBADIgCAAIAAABIABADIACgBIADABIABAFIADACQABADACAEQADADADAKIACAEQADAEABAGIABACIgBADIACADIACADIAEABIACAIIADABIAGAMIAGAOIACAEIADAGIACAAIAFgIIAEgIIACgDIACgEIAAgEIAGgIIAEgDIABgCIAAgBIgBgFIACgEIACgEIAEABIABgDIAAgDIgBgDIABgEIAHgQIACgIIAFgEIgCgEIAGgPIADgJIAFgJQABgCADAAIgCgGIAAgBIABgGIAAgCIAPgWIAAgFIAEgGIAHgFIABgBIABgBQgBgBgMgBIgCAAIgFgHIACgEIADgBIAEgDIAFgCIAGgEIAIgCIABAKIACADIAAACIAAAEIAAAIIAAAFIgCAEIABAEIAAACIABADIgDAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABQAAACAEAAIgCAFIAAAAIADAAIAAABIAAAFIAAAEIABALIAAAAQAAACgDAFIAAAEIAAADIAFAAIABABIgBAIIAAAIIABAYIABADIAAAFIgBADIgDAAIAAABIgBAEQACADADAAIABAGIACALIABAGIABACIgCAGIgBAEIAFAEIAAAEIAAADIAAADIABAEIgEABIgCAFIAEACQACABAAAEIABAEIABADIADAKIABAOIgGAGQgIAGgIAAIgDABIgCAAIgDgBg");
	this.shape_83.setTransform(172.2,420.275);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgJAjIgEAAIgEgBIAAgBIABgCIAFgCIABAAIAAABIADAAIABgDIAHgEIABgDIADgDIABgEQAAgDABgDIAAgEIABgDIAAAAIgBgDQgCgIgDgCIgCgCIgCgBIgBgDIgGAAIgBgBQAAgCAIgGIAFgGQAFAAACACIAFAFIAAADIABADIABAEIAAADIABAGIgCADIgBACIABACIAAAEIgDAIIgEAFIAAACIABABIAAAAIABABIgEAEQgDAFgEAEIgEADg");
	this.shape_84.setTransform(607.725,383.95);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAAALIgGgGIgDgEIgGgBIAAgBIADgCIAIgGIAEgEQAEAEADACIAGADQABABAAAAQABABAAAAQAAABABAAQAAABAAAAIgDAFQgBADgKAGIgCgDg");
	this.shape_85.setTransform(602.075,381.725);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAEA0IgEABIgCAAIgFABIgKgBIgCgBIgDgBIgMgEIgEgEIgFgDQgEgCAAgBIgDgFIgEgFIABgEIgDgHQgBgCAAgJIABgJIADgHIAEgFIADgGIALgKIAKgHIAKgHIAEAAIAKgDIAGgBIAJgDQAIAAACAHIAFgCIADACIACACIAMAMIAFAGIACAGIACAFIgBABIgEgBIgFACIgFgBIgEABIgJgGIgGAGIgKgCIgFABIgBgBIgKAAIgGABIgGABIgGAAIgGAAIgLADIgBAHIgDADIAEAFIADALIACABIAAAFIAEABQABAGACACQACACAFAAQABAFABABQABABAEAAIADADIACAAIAIAEIADAAIAHgBIAJgCIAGgCIAHAAIAIgFIAHgFIAFgHQAAAAABAAQAAAAAAgBQABAAABAAQAAAAABAAIADABIgBAHIgIANIgDgBIgEADQgDABgDABIgMACIgHABIgFACgAgEgnIgHACIgKAEIgGAEIgDADIAAABIAKAEIADADIAGgGIABgBIAHACIAAAAIAHgBIAEgBIADADIADgBIAIgCIAIABIAAgBIAAgCIgBgDIgCgBQgDgFgBAAIgEgCIgDgDIgNAAIgDgBg");
	this.shape_86.setTransform(591.925,377.55);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgEA0IgCgDIgBgFIgDgDIgCgFIgDgGIgDgHIgCgDIAAgFIgBgDQAAAAgBAAQAAgBAAAAQgBAAgBAAQAAgBgBAAIAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAgBQAAgDgEgCIgEgBIgCgFIgCgGIAAgBIABgEIgEgDIgGgHIgIgOIADgDIAFgDIAEgDIACgCQAFAAABACIAEALIAAADIACAFIABAEIAEACIACAGIACAHIABAEIACACIACAFIACABIAEAJIgBAEIAEADIACADIADAFIACAEIABABQABAAAAAAQABgBAAAAQABgBAAAAQAAgBABgBQABgDAFgIIABgDIACgEIAEgJQADAAACgCIgCgGQAAgCAGgLIABgDIgBgFIAEgHIACgHQAAgCAFgDIAKgCIABABIgEAKQgEAGAAADIgEAHIgCAEIgGARIgDAEIgCADIgBADIgBADIgJAQIgEAJIgDADIACAEIgEADIgIAFIgCACIgCAAg");
	this.shape_87.setTransform(579.025,377.925);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("ABtB5IgDgGIgDgLIAAgCIgDgFIAAgDIgBgCIACgFIgEgEIACgDIABgCIAAgCIgHABIgEgHIgCgJIgCgEIgDgKQgCgGgFAAQgFAAgBALIgBAAIgEgCQgEgCgEgBIgGgDIgIgCIgHABIgEAAIgFAAIgDAAIgEABIgGAAIgGAAIgCAAIgHgCIgFABIgEgBIgHABIgHACIgEgFQgFABgEACIgGABIgCABIgEgBIgGAAIgHABIgGABIgCAEIgFAIIgHAKIgCAAIgBACIAAADIAAACIgDAEIgGANIgEAGIgBADIgIAEIAAABQAAACADADIgCAGIgFADQgCABgCAEIgFADIgDABIgCgBIgCAAIgCAAQgDgDgDgBIABgCIAEgCIAGgHIADgCIADgEIAAgCQAAgDADgDIAHgHIAHgOIADAAIAAgBIAAgCIAAgCIAEgFIANgVIABgBIgCgBIgCAAIgBAAIgDAAIAAgEIABgDIADgGIADgEIAEABIAGACIAAgBIABgCIgBgDIADgDIACgFIAGgFIABgFIAFgEIADgHIAIgLIAJgSIADgEIABgDIAEgGIAAgBIAAgCIACgDIADgFIADAEIAAgDIgBgDIACgEIADgEIAAgDIABgEIADgGIACgEIAGAAIgBgCIgEgCIAAgCIAEgEIgCgBIAAAAQACgCACgEIACgFIAAgEIAAgBIAAgBIAAgCIAKgIIADACIABgEIACgCIACAAQABgCACgCQADgCACAAQAEAAABAKIABAJQABAFADAFIACAJIAAADIgGADIACAEIAHABQACABADAHIACAHIgCADIADADIAEAEIACADIACAHIABAFQAEAEABAFIAAAEIADAFIAGALIgDACIACAEIACAAIAAADQAOAMAAANIAGANIAIAQIADAGIAJATIgBADQAJAFAAAEQAAACgEACIACADIADABIAEAFIADAKIAIAMQgDACAAACIAAACIgGADIgFAAIgKADIgEgMgAgcAfQAEAAAFACIAJABQADAEAEAAIAHgEIAFABIAIAAIADAAIAEAAIAEAAIADAAIAEABIAIgBIAGgBIAMgBIAKABQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIgCgEIAAgEIgEgDIgFgKIgCgFIgDgFIABgFIgBgFIgFACIgCgFIgBgDIgDgFIgDgFIgCgDQAAgGgDgEIgCgGIADgCQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgBAAIgCgDIgEgFIAAgFIgDgEIgCgFIgEgFIgDgJIgCgDIgEgHQgDACgBACQgDAFAAADIAAAAIgFAJIgIAPIgDAHQgDABAAADQgDAFgFADIABADIgCABIgFgBIgBADIAEACIgFAKQgHANgFAEQgBAAAAAAQAAAAAAABQgBAAAAABQAAABAAAAIgBAFIgEAHIgDADIgCADIgEAHIgBAGIADgCIADACIAFgBIABADIAIgBg");
	this.shape_88.setTransform(559.725,374.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgwAzIgBgCIAAgCIABgGIAAgKIABgEIAAgEIgBgDIAAgDIABgDIgBgEIAAgEIABgEIAEgCIgBgBIgEgBIAAgEIAAgEIAAgCIgBgMIADgBIgDgFIgBgDQAAgCgDgEQABgFAGgCQAGgFADAAQABAAABAAQABAAAAAAQABAAAAABQAAAAAAAAIABAIIADAIQAFgIABABIAFgDQAGgEABgBQABAAAAABQAAAAABAAQAAABABAAQAAABABABQAHgGAHAAIACABIADAAIAGgCIAIACIAHABIADACIADABQADABAFAGQADAFAAAQIgHABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABAAAAIAJAFQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIgCAHIAAABIACAEIAAAFIACAHIAAAHIABAHIgBAGIACAFIgGAEIgGACIgGAEQgEgEAAgCIADgLIAAgEIAAgCIADAAIAHgCIgBgBQgEgCgHgCIACgHIAEgEQAEgCAAgEIgJgDIAAgEIgBgHIABgCIABgEIgCgDIAAgGIgCgFQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgBgBIgEgBIgEgHQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQgCgBgEADQgFAFgEAAIgEgCIgDADIAAABQgDgHgDAAIgBAAIgEACQgDAAgFAEIgIAFQgCAEAAACIAAAJIAAABQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgGAFIgBABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAIAGAEIABACIgBACIABALIgDAEIAAABQAAADADADIgBAAIABAEQAAAJACAEIgDAEIgEAAIgCABIgCAAIgDACQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgCgCg");
	this.shape_89.setTransform(533.025,377.75);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAEA0IgEABIgCAAIgFABIgKgBIgCgBIgDgBIgMgEIgEgEIgFgDQgEgCAAgBIgDgFIgEgFIABgEIgDgHQgBgCAAgJIABgJIADgHIAEgFIADgGIALgKIAKgHIAKgHIAEAAIAKgDIAGgBIAJgDQAIAAACAHIAFgCIADACIACACIAMAMIAFAGIACAGIACAFIgBABIgEgBIgFACIgFgBIgEABIgJgGIgGAGIgKgCIgFABIgBgBIgKAAIgGABIgGABIgGAAIgGAAIgLADIgBAHIgDADIAEAFIADALIACABIAAAFIAEABQABAGACACQACACAFAAQABAFABABQABABAEAAIADADIACAAIAIAEIADAAIAHgBIAJgCIAGgCIAHAAIAIgFIAHgFIAFgHQAAAAABAAQAAAAAAgBQABAAABAAQAAAAABAAIADABIgBAHIgIANIgDgBIgEADQgDABgDABIgMACIgHABIgFACgAgEgnIgHACIgKAEIgGAEIgDADIAAABIAKAEIADADIAGgGIABgBIAHACIAAAAIAHgBIAEgBIADADIADgBIAIgCIAIABIAAgBIAAgCIgBgDIgCgBQgDgFgBAAIgEgCIgDgDIgNAAIgDgBg");
	this.shape_90.setTransform(518.625,377.55);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgdBwIgCgEIgFACIgCgBIAAgDIgBgCIgFABIgDgBIgIgHIAAgDQABgDgDgCIgDgDIAAgCIgDgLIABgGIABgHIACgDIAGgPIAFgDIAEABIACgBIgCgHIAEgCIAIgIIADgDIAFgDIAEABIACACIAHgEIAAgDIAGgCIAFgDIAFgBIADgBIAEACIAFAEIADgEIAFABIAJADIAEACIACAAQABAAADgCIgCgEIAAgHIgBgDIAIgGIgFgGQgDgDAAgJIADgCIgBgFIgCgIIAAgFIAAgKIABgHIgCgHIABgDIACgCIgBgBIgDgBIgBAAIgBgBIALgHIgDgEIgBgGQAAgCgEgCQgHgCAAgBIABgCIALgDQADgEAKgBIABAHIAAACIAAAGIAAAEIgBACIAAAGIAAAEIAAAGIAAACIgBAFIAAAKIgDAFIAEAIIgBAFIAAAEIgBAEIABAGIAAADIAAACIgEAAIgBAFIAAACQAEADABACIgBAIIAAABIABAHIAAADIAAABIAAACIAAADIgCAEIAAAHIABADIAAAIIABAJIAAADIAAAGIAAAHIACAMIAAAFIABAKIABAGQACACAAADIAAABIgKACIgKABIgBgBIgHADIgMADQgOADgGAAIgMACQgMAAgIgCgAgbAeIgEACQgFAFAAAEQgEACgCAFIgFAFIAAAGIABAGIAAADIACADIABAEIADAFIAAADIACACIACAEIAFAGIAFAFIADADIAEACIAFAEQACgBACgGQAFACADAAIALAAIAGAAIAMgDQAHgBABgCIAGgGIgBgDIABgEIAAgKIAAgJIgBgHIAEgBIgBgFIAAgDIgCAAIAIgHIgIgKIAAgCIgBgBIAAgGIgEgBIgDACIgCAAQgEAAgCgBIgEgEIgKgEIgFgDIgGAIIAAAAIgBAAIgHABIgDAAQgEAAgEAFIgEgBIgEAEg");
	this.shape_91.setTransform(503.45,371.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgpAzIADgIIAAgCIgBgFIABgDIADgBIAAgCQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBgBIAAgDIgBgHIABgHQAFgCAAgCIgBgCIgCAAIgDgBIAAgFIAAgDIAAgEIAAgBIAAgCIAAgCIACgHIgCgCIgBgJQAAgCgDgDIADgEIAHgFIAHgDQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABIABABIABAFIAAACIABADIAHgDIAGgCIAGgEIADgCIADgBIADABIAAAAIAKgDIAEAAIADAAIADADIACAAIAEgCIAAAAQABAAAAAAQABAAAAAAQABABABAAQAAABABAAQACACABAEIgJAGIgEAEQgCAAgEgEIgEAAIgGgCIgGgBQgCADgDAAIgEAAIgFACIgCgBIgKAHQgEAEAAAIIAAAAIAAAEIAAAFQAAABgDADQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAIAAACIACAAIAAAEIABAYIAAACIgEACIgIACIAJACIACAAIACAFQAAAEgDACIgHABIgGADIgCABQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_92.setTransform(492.275,377.65);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgdAzIgGAAIgEgCQgFgBgCgDQgCgBgCgDIgDgCIgBgFIgBgFIABgFIAEgHIAJgIIAJgEIAFgDIACABIAEgDIAHgDIAHgCIAHgBIAFgCIADAAIACgBIAGAAIAKgBIAHgBQACgCAAgEIgBgDIAHgJIgIgDIgFAAIgHgJIgKgCIgEAAIgFgBIgCAAIgCgDQgEABgBACIgEADQgHADgFADIgCACIgCADIgEABIgFgCIgGgBIgDgEIADgDIAEgBIAGgCIAEgDIAJgCIAFgCIAGAAIAGgCIACAAIAFgBIAIAAIAHACIAEAAIAHACQACAAADACQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIADgBIAEgBQACACAAACIADACIABADIgBAFQACAGACACIAAAAIABAGIABALQgBAAgBAAQAAABgBAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQABABAAAAQABABABAAIAAADIAAAFIAAADIABALQgDADABACQgBACADADIABADIABADIgCAEIgEACIgFADIgDAAIgGACIgDgCIACgJIgLAFIgFABIgDABIgFgBIgFADIgDAAIgKACIgGgBIgFACIgLgCgAgZApIAGACIABACIAFABIACABIADgDIADACIAEgCIACABIAIgDIADgBIAEAAIAEgCIAGgDIADgEIAGgBIAAgFQADgBAAgDIgDgDIAAgDIAAgCIAAgHIAAgBIABgFIgDgBIgGAAIgFAAIgEAAIgDAAIgEgCIgDABIgIABIgBAAIgEAAIgEACIgIACQgJAEgDAEIgDADIgFACIAAACIABACIAAAIIACADIgCADQAAABAAAAQAAABAAAAQgBABAAAAQAAAAABABIAAACIAEgDQAFADACAAg");
	this.shape_93.setTransform(478.85,377.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("Ag9CEIgCgRIgCgKIgDgBIgFgPIgBgEIACgIIgCgBIgDgBIgCAAIgCgEIgBgGIAAgDIABgFIgDgBIgCgGIgDgJIgDgIIAAgEIABgDIAAgCQgBgCgDgBIgCgHIgDgFIAAgDIACgCIABgEIgBgDIgCABIgCgBIgDAAIgDgNIgDgMIAAgGQAAgGgGgBIgCgJIgGgPIgBgFIACgCIgFgLIgBgBQgDgGgCgJIgFgMIABgDIADgCIADgDIAEgEIACgBIAGgEIACAAIADgDIADAGIABALIACAGIgBADIABAGIAAAAIgCADIABAEQAAAAABAAQABAAAAABQABAAAAAAQAAAAAAABIABADIAAAEIAEABQAAAKADAKQgDAEAAACIACACIABACIABAAIABABIABAFQAAACgCACIAAAGIABAAIAFABIACAGIACADIAHAaIACAHIgBADQADADACAEIACADIABAFIABAGIgLAEIANAIIAEAAIABAKIAGAPIACAKIACAAIADAFIAAAAIACgFIACgIIABgHIAGgSIABgDIABgFIADgJIABgDIADgFIADgQIADgDIAAgBIAEgTQABgFAEgKIADgMQAGgSAAgIIgBgFIAJgGIADgFIAGgEIgCgBQgGgDgIgBIAGgJQgDgDABgBIABgHIADgDIAEgEIAHgFIACgBIAAAAIABAAIAFAFQgNAFAAADQAAACAGAGIAGAJIAFAFIgCAEQAAAEADAEIAFAEIABAGIAEANIACANIAEAEIgBAAQgHABAAABIAAACQACACgBAFIAIAIIADAGIADAEIAAABIgCAAIgBABIABADIADAIIACAAQADADADAKIACAIIABAGIACAGIACAJIAAACIgCAEIACAEIADABIACgBIACALIAEAHIADgDQACgBAAgEIgBgFIACgCIAEgKIgBgDIABgFIACgGIABgDIACgEIADgJIADgOIADgLQABgCADgDQAAgEAEgRIAEgPIACgFIgCgHIADgIIABgKIACAAIAEgBQAAgDgFgCIACgKIAAgHIACgDIABgIQADgKAIgBQADgEACgBIAEgBIAAADIAAADIgBAIIgBAEIgBAHIgEAHIAAADIgBAEIAAACIAAACIgBAEIAAACIgDABIABAFIAAAAIgCAGIgEABIgCACIAAABIABADIACAEIgCAFIgCADIgEAPIgDAJQAAADgCABIAAADIAAAEIgBAEIgDADIAAACIgEARIgDAMIgEAJQgDACAAADQAAAAAAABQAAAAAAAAQABABAAAAQABABAAAAIgBAIIABAHIgCACIgFAOIgBAHIgBAJIABADIgDACQgBABAAAAQAAAAAAABQgBAAAAABQAAABAAABIACAFIgBAGIABAFIAAAGIAAAEIgEACQgFACgBADIgCAAIgDgGIgDgIIgBgEQgEgEgBgEIAAgCIgBgHIABgDIAAAAIgBgBIgDgEQgCgCgDgPIgBgPIgDgCIgDgLIgDgMIgBgHIgGgMIgBgIIgBgDQAAgBABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIgBgBIgCABQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgFgMgBgIQABAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgCgDIAAAAIABgEIgHACIgDgGIgGgSIgBgEIgBgEIgBgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBIgEAFIgBALIgCAFIAAAFIgBACIAAAFIgEAGIgCAKIgDAIQgBAHgBAFIgFARIgEASIgEAMIgDAEIgDALIACABIgGATIgBAIIgBAFIgBADIAAADIgBAGIgCADIgBAFQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAIAEAIIgEAGIgDAFIgHADIgEACIgEgCg");
	this.shape_94.setTransform(457,374);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgIBJIgNgDIAAABIgBAAIgEgBIAAgBIAAgBIgEABIgGgDIAAAAIgDgBIgDgDIgEgFIgDAAIgCgGIAAgBIgBgCIgDACIgGgHIgEgKIgDgFIgBgDIgBgCIAAgEIgBgFIABgEIAAgEIAAgBIABgBIADgBIgBgEIAAgCIgCACIgBgGQABgFACgDQABgCAFgBIAAgBIgCgCQAAgDAIgLQAFgJACAAIADAAIACgDIAAgCIACgDIALgHIAIgEIAAgBIAAgBIAEACIAEgDIAKgGIAAABIABAAIAEgBIAJAAIAFgBIAIAEIAEAAIAAABQAAAFADAAIACgEIAMAEIAAADIADABIAIAHIAGAJIAAAEQAEABACAKIADAHIgEABIADADIACABIABAIIAAADIgCAGIABADIgEAIQgFABAAADQAAABAAAAQAAABAAAAQAAABABABQAAAAABABIABADIgCAFIgGAMIgFAGIgEAEIgPAJIgCAEIgEAAIgGAEIgGADIgDAAIgEACIgBAAIgHgBQAAAAgBAAQAAAAgBAAQAAABgBAAQAAABgBAAIgEgBgAgHA6IAHABIAFABIAIgDIAOgCIAFgFIAEgDIAEgFIAGgFIAAgCIACgGIADgCIAAgEIACgFIAAgBIgCgFIAEgDIgDgDIAAgGIAAgGIAAgEQAAgIgBAAIgEgJIACgFQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAgBAAIgDACIgEgFIAAgEIgBgCIgEABQgEAAgCgEIAAgCQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgEgBIgDgCIgDgCIgDgBIgGAAIgIgBIgDAAIgNABIgBACIgFABIgCABQgJADgCADIgEADIgFAEIgDAHIgGAFIAAAEIgFAHIgBAJIgCAIQAAAMABAEIAHALIANAMIgBADIACAEIACABIADgCQACADAEABIAKAEIgSAEIARABIAEgBIAAgBIAAgBIAHADg");
	this.shape_95.setTransform(428.25,375.675);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgIBJIgNgDIAAABIgBAAIgEgBIAAgBIgBgBIgDABIgGgDIAAAAIgDgBIgCgDIgGgFIgCAAIgBgGIAAgBIgCgCIgEACIgFgHIgEgKIgCgFIgBgDIgBgCIgBgEIgBgFIABgEIAAgEIAAgBIABgBIADgBIgBgEIAAgCIgCACIAAgGQAAgFACgDQABgCAFgBIAAgBIgCgCQABgDAGgLQAGgJACAAIACAAIAEgDIgBgCIADgDIAKgHIAIgEIAAgBIAAgBIAEACIAFgDIAJgGIABABIAAAAIAEgBIAKAAIAEgBIAIAEIADAAIABABQAAAFAEAAIABgEIAMAEIgBADIAFABIAIAHIAFAJIgBAEQAFABACAKIACAHIgCABIACADIABABIACAIIgBADIgBAGIAAADIgDAIQgFABgBADQAAABABAAQAAABAAAAQAAABABABQAAAAABABIABADIgDAFIgEAMIgHAGIgDAEIgPAJIgCAEIgFAAIgEAEIgHADIgCAAIgGACIgBAAIgGgBQAAAAgBAAQAAAAgBAAQAAABgBAAQAAABAAAAIgFgBgAgHA6IAHABIAFABIAIgDIANgCIAGgFIAEgDIAEgFIAGgFIABgCIABgGIADgCIAAgEIABgFIABgBIgCgFIAEgDIgEgDIABgGIAAgGIAAgEQAAgIgBAAIgDgJIABgFQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAgBAAIgEACIgDgFIABgEIgCgCIgFABQgDAAgBgEIAAgCQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgEgBIgCgCIgFgCIgCgBIgGAAIgIgBIgDAAIgMABIgCACIgFABIgCABQgJADgCADIgEADIgEAEIgFAHIgEAFIgBAEIgFAHIgBAJIgCAIQAAAMABAEIAIALIAMAMIgBADIACAEIABABIAFgCQACADADABIAJAEIgSAEIARABIAGgBIAAgBIAAgBIAGADg");
	this.shape_96.setTransform(412.2,375.675);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgpBiIgNgDQAAgDADgDIAGABIAEgDIAFgBQACAAAFgGIADAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQADgCAAgDIASgPIAEgEIADgFIADgCIADgEIAFgDQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIAEgEIABgGIAEgFIABgEIAEgJIAAgHIABgEIAAgDIAAgEIgCgDIAEgCIAAgCIgDgKIAAABIgCAJIAAADIgCgDIgHgGIgCgFIgDAAIgBgBIgCAAIgFgCIgGgCIgDgBIgGgBIgFgBIAAAAIAAgCIgCgEIgCAFIgEAAQgGAAgDADIgEAEIgEACIgFACIgEgCIAAAAIADgFQACgDACgBIACgDIAEgDIACgCIACgEIACgBIACgEQAAgCAGgJIADgKIACgGIAAgDQAFAAABgCIABgDQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAIAEAAIAAABIAGgBIAEAHIAFgHIAEgBQABAAAAAAQABAAABABQAAAAABAAQAAABAAAAIACAGIAAABIAGgKIAFAAIAFAAIADgBIAGgDIAEgBIABAEIgFAIIgEAHIgDABIgGAEIgFgCIgLAAIgCgHIgCgBIgJAHIgEgGIgCABIgCABQgCAAgBAGIAAgEIgBAFIgEABIgCAFIgHAPIAEABIANACIADABIAJAAIAIABIgBACIAEgCIAEADIAFAAIAAACQAAADABADIACAAIADgCIACgBIADAEIAHAGQACADAAACIAAADIAAABIABAGIgBAEIAAAEIgCAFIAAACIgCAFIgDADIgCAGIgDAFIgDAFIgDAEIgCAEIgDADIgDAEIgHAJIgHAGIgFAFIgGAHIgEADIAAADIgFAEQgCAEgEACIgCABIgBABIgLAIIgGAEIgCACIgCABIgDgBg");
	this.shape_97.setTransform(395.575,377.025);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgNBPIgGAAIgFgDIgFABQgDAAgJgFIgEgFIgEgCQgCgGAAgGIgDgJIAAgBIACgGIABgDIACgDIACgGIAEgEIADABIABgDIgBgCIABgEIAEgEQAEgFAEgCIAGgDIAEABIABgBIAAgCIAFgFIgEgCIgDgBIgFgHQgBAAAAAAQAAAAgBgBQAAAAgBAAQgBAAgBAAIABgEIgDgGIAAgCIAAgEIAFAAIABgEIgEgCIAEgEQAEgGAEgEIAOgNIAIgFIACgBQAEgDADAAIADgBIACAAIACABIAIADIAEgCQACACADACIAGADIgBAHIADAAIACAAIABAGIAAABIgBABQABACABADIgBAGIgGALIgGAFQgBAAgBAFIgKAHIgBABIABABIAHADIAHADIABAEIADACIAEADIACAEIgBAEIAAABQAAAFAFACIAAAGQAAAFgCACIgCAFIgBADIgFAGIgEAEIgFADIgFAGIgGAEIgDAEIgEACQgEADgEABIgDADIgDABIgIADIgDAAIgFAAgAgIBCIAEAAIACgDIAEABIAEAAQACAAADgDQADAAACgDIAFgBIAEgFIAEgDIAEgKIADABQABAAABAAQAAgBABAAQAAAAAAgBQABgBAAAAQgBgCgEgBIAAgDIAAgFIgBgEIAAgFIgDgBIgHgIIABgEQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAIAAgBIgEABIAAAAIgHgDIgDgCIgBAAIAAAAIgIAAIgBADIAAgBIgPAFIgGAEIgGAGIgCAFIgEAHIAAAHIgBADIABAFIgCADIACAEIAEABIAGAHQAEADAHABIACACIACAAQACADABABgAAQgJQAFgKADgDIACgFIAEgBQABgBACgFIAAgIIABgFIgCgCIgFgGIgDgDIgEgDIgHgEIgDAEIgDAAIgEABIgDABQgIACgCAIIgCADIgBAFQgBADAGAIQgMADAAABQAAABAMACIACAAIAEgCIAFACIAAACIAAABIAEgBg");
	this.shape_98.setTransform(379.7,375.425);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgJAjIgEAAIgEgBIAAgBIABgCIAFgCIABAAIAAABIADAAIABgDIAHgEIABgDIADgDIABgEQAAgDABgDIAAgEIABgDIAAAAIgBgDQgCgIgDgCIgCgCIgCgBIgBgDIgGAAIgBgBQAAgCAIgGIAFgGQAFAAACACIAFAFIAAADIABADIABAEIAAADIABAGIgCADIgBACIABACIAAAEIgDAIIgEAFIAAACIABABIAAAAIABABIgEAEQgDAFgEAEIgEADg");
	this.shape_99.setTransform(362.825,383.95);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgdAzIgGAAIgEgCQgFgBgCgDQgCgBgCgDIgDgCIgBgFIgBgFIACgFIADgHIAJgIIAJgEIAFgDIACABIADgDIAIgDIAHgCIAHgBIAFgCIADAAIACgBIAGAAIAKgBIAHgBQACgCAAgEIgBgDIAGgJIgHgDIgFAAIgHgJIgKgCIgEAAIgFgBIgCAAIgCgDQgEABgBACIgEADQgHADgFADIgCACIgCADIgEABIgFgCIgGgBIgDgEIADgDIAEgBIAGgCIAEgDIAJgCIAFgCIAGAAIAGgCIACAAIAEgBIAJAAIAHACIAEAAIAHACQACAAADACQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAIACgBIAEgBQACACAAACIADACIABADIgBAFQACAGACACIAAAAIABAGIABALQgDABgBACQAAAAABAAQAAABAAAAQABABAAAAQABABABAAIABADIgBAFIAAADIABALQgCADAAACQAAACACADIABADIABADIgCAEIgEACIgFADIgDAAIgGACIgDgCIACgJIgLAFIgFABIgDABIgFgBIgFADIgDAAIgKACIgGgBIgFACIgLgCgAgZApIAGACIACACIAEABIACABIADgDIADACIAEgCIACABIAIgDIADgBIAEAAIAEgCIAHgDIACgEIAGgBIAAgFQACgBABgDIgCgDIAAgDIAAgCIAAgHIgBgBIABgFIgDgBIgGAAIgFAAIgEAAIgDAAIgEgCIgDABIgIABIgBAAIgEAAIgEACIgIACQgJAEgDAEIgDADIgFACIAAACIABACIABAIIABADIgBADQgBABAAAAQAAABAAAAQgBABAAAAQAAAAABABIABACIADgDQAFADACAAg");
	this.shape_100.setTransform(352.75,377.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("Ag4BuIgDgBIAFgCQABgCAAgEIAFgJIgKgLIAAgBIACgDIgBgIIACgCIACgCIgCgCIgCgDQAIgDAAgBQAAgBgHgCIgBAAQAHgFAAAAIgFgKQgCgDAAgEIACgRIACgBIgBgJQgEgBAAgDIABgLIAAgGIAAgWIACgDIgBgGIABgCQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAIAAgGIAAgDIAAgFIAAAAIgBgGIABgCIAAgCIgCgNIgEgEIABgDIADgBIAGgGIAJgEQACAAADADIgBADIABAEIAMgHIADgBIAGgBQAFAAADACQACgFAKAAIARABIADAAIACAAQACAAADADIAHACQAIADADADIABADIABADIAGgBQAFAFABAEQADAIABAKIAAADIAAABIABAFIAAABIgCAFIgEAIIgEAGIgFAFIgFgBQgCAHgEACIgEAAIgDABQAAAIgTAGIgIACIgIAAIgCABIgEABIgDgBIgLgBIABgCIgDgHIgBADIgCAFIgDABIgBAAIgBAAIgCAAIgBAAIgEgBIgBAEIABAJIAAADIgBACIgEADIgBADIgBADIgCABIAHAFIAAABIACAGIAAAMIgDABIAAACIABAHIABABIgBADIADgBIAAAIIABAKIABAEIgBADIgEAAIAEADIAAADIABADIAAAHIgEADIgCADIgDACQgFADgEAAgAAMgLIAEgCIAGgDIAEgEIAFgEIAFgFIAGgFQACgCADgJIACgIIAAgEIgBgEIABgDQgDgCgBgDIgCgGIgFgFIgCgDIABgCQgCgDgDAAIgFABIgEgDQgFgEgBAAIgGAAIgCgCIgIAAIgSAAIgKADIgEABIgEACQgEAAgBACIgBAEIABAEQgHAAgEADIAHACIAAABIACABIABAAIAAAFIAAADIAAAEIAAAEIgCAGIACAFIAAAGIABAIIgBABIAAAEIAEACIAIAEIABADIADgCIADAAIAFACIAFAAIAJADIABAAIAJgBg");
	this.shape_101.setTransform(338.075,383.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgHCGIgGAAQgDAAgCgCQgDAEgDAAIgFgDIgCAAIgKAAIgCAAQgCgFgFABQAAAAAAAAQgBAAAAAAQgBABAAAAQgBABAAAAIgGgCQgDgBgDAAIgGgDIgGgCIAAgDIgDgBQgBAAAAgBQAAAAAAAAQgBgBAAgBQAAgBgBgBIgCABIAAAEIgKgDIgRgNIAAAAIgBgDIgCgEIgHgHIgEgGIADgHIABgEIAGgGIABgEIABAAIACABIACADIADADIgBAFIABADIAAAEQABAHADADIACgCIACABIADAHQAAABAAAAQAAABAAAAQABABAAAAQABABAAAAIAKAHIARAHIAGAEIAFABIAGACIAUAEIAPAAIAIAAIACAAIACAAIADABIAMgCIAFABIACAAQABAAACgDIACgBIACAAIACAAIAKgCIADgBIAGgDIAMgEIAJgGIAHgFIAGgIIACgDIADgEIADgDIABgEQgBgBAEgHIACgEIAFgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIAAAAIgDAAIACgGIgCgDIACgEIABgIIADgJIABgIIADAAIAAgCIgFABIgFgSIACgDIAAgCIAEABQAKAAAAgCQAAgCgPAAQgBABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgCgCIgLgEIgGgDIgLgCIgDgBIgHgCIgBAAIAAgBIgBgBIAAABIAAABIgMgDIgCABIgGABIgCgBQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAIgFADIgDABIgDgBIgEAAIgJAAIgFgKQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAgBgBAAQgCAAgFAMQAAgKgCgDIgCgBIgBgBIgLAOIgGgCQgHAAgDgBIgEgCIgDAAIgBgBIgFAAIgDgCIgLgFQgFgFgFgIQgEgFAAgDIABgEQgDgDAAgEIACgDIABgIIAEgHIAMgNIAGgEIAHgGIAEgCIAFgDIAVgJIAKgEIAOgEIAQgFIAEgBIAagCIALgBIAGAAIAHABIAEAAIAQAFIABAEIgFAEIgCACIgEACIgEgCIgEAAIgIgCIgFAAIgDgFQgEgEgGAAQgFAAgDACIgDAGIgDgCIgCAAQgGAAgEACIgOADIgKADIgFgCIgGACIAAAEIgOAFIgBADQgIABgFAFIgEAAQgDAAgBAFQgGABgEAGQgHAHAAAHIABAJQABAEADACQAIAIADAAIAGACQAHADADAGIABAAIADABIACgBIACAAIACAAIABgEIACABIAHgBIAKADIADgBIACAAIAJACIABADIADABIACAAIgCgDQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAABAAIAFAAIAfAAIABACIgBADIADACQABAAADgEIACACIAHgEIAEABQAIABADACIAFADIARAFIADACIADACQAGADABACIACADIgBADIAAACIAEAAQAEAHAAAGIACALIAAAFIAAABIAAAFIAAACIgCAGIgBABIABAEIgCADIgBAEIgEAKIgBADIgEAGIAAABIAAABIAAACIgEAGIgGAJIgEAHIgEACIgFAGIgHAGIgBACIgDgBIABgCIgHAFIABADIgSAKIgNAGIgIABIgRADIgIABIgEABIgFAAIgFABIgEgCg");
	this.shape_102.setTransform(316.1,374.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgrBSIgCAAIgFgBIgFgFIgCADQgEgBgEgDIgGgFIgFgHIABgGIAAgBIAAgBIgGgDIAAgBIAAgCIAAgCQABAAAAAAQABAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAQgBAAAAAAIgCAAIgBgFIACgEIABgDIABgDIADgIIADgDIACgDIACgCIACgCQACgCAEgDQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIACgCIADgDQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAHgCAEgFQgHgCAAgEIAAgDIgFABIgEgEIgEgFIABgEIgDgCIADgGIgBAAIAAgCQAAgDADgEIADAAIACgDIAEgEIAEgEIADgBIACgDIAFgBIADgDIAHgCIADgCIADgBQAIgEACAAIAFAGIAFgGQABgBAAAAQAAAAABAAQAAgBABAAQABAAAAAAQAEAAAEAFIAEACIABAEIACAFQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAAAAAIgGgFIgHgEIgDgBQgBAAgBAHIgCgCIgCADIgBAAIgEgBIgBgBIgDABIgEABIgEgBIgEABIgFACIgCABIgEACIgHAGIgFAEIgBAEIgCAGIADADQACACABADIADACIAGADIAJACIADAAIAFACIALAAIAEAAIAGgCIAIAAIAFgCIAEACIgDAHQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIgIAEIgDACIgDgDIgEgCIgCACQgDgGgBAAIgCAGQgDgGgCAAIgCABIgGAHIgDgBIgFACIACADIgBAAIgCAAIgDABIgEADIgHADIgDAEIgEAEQgCADgEABIgDAIIgCAFIgBAHIgBADIACADIACAIIABACQABADADACIACAEIAEADIAIAIIAHADIAFAAIAFACIAFAAIAEAAIACAAIAGAAIADgCIAEgBIAEgCIAGgCIADgBIABAAIACgDIAKgGIAFgHQAFgGAAgIQAAgEgFgDIgEgDIgCgCIgDgCIgFgEIgFgCIgFgCIgCAAIgBgBIgFABIgGABQgBABgFAIIgCAEIABAEQAAADgEAAIgCAAIgFgDQAAgBgBAAQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgDACgCIAIgHIAFgFIAIgDIAEgCIAEgBIACgBIAEgBIAEAAIAFABIACAAIAEACIAGADQABAHADAAIABgBIAAgDIAEACIAJAFIADABIAEgBIAFgCIAGgEQAEgCAAgHIAAgEQABgCgEgEQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQABgBAHgCIADAEQAFABABABIABADIAEABIAAAEQgBAHgCADIgEADQgCAEgGAEIgCABIgEABIgEACIgJADQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIACAEIgDADIgBAHIgGgBQAAADACACIgFAFIgDADIgFADIgDADIgBAAIgEACIAAAAIgCABIgFACQgDADgIADIgHACIgEACIgLABIgMACIgFgBQgBAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIgEgBg");
	this.shape_103.setTransform(288.125,375.525);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AAEA0IgEABIgCAAIgFABIgKgBIgCgBIgDgBIgMgEIgEgEIgFgDQgEgCAAgBIgDgFIgEgFIABgEIgDgHQgBgCAAgJIABgJIADgHIAEgFIADgGIALgKIAKgHIAKgHIAEAAIAKgDIAGgBIAJgDQAIAAACAHIAFgCIADACIACACIAMAMIAFAGIACAGIACAFIgBABIgEgBIgFACIgFgBIgEABIgJgGIgGAGIgKgCIgFABIgBgBIgKAAIgGABIgGABIgGAAIgGAAIgLADIgBAHIgDADIAEAFIADALIACABIAAAFIAEABQABAGACACQACACAFAAQABAFABABQABABAEAAIADADIACAAIAIAEIADAAIAHgBIAJgCIAGgCIAHAAIAIgFIAHgFIAFgHQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIADABIgBAHIgIANIgDgBIgEADQgDABgDABIgMACIgHABIgFACgAgEgnIgHACIgKAEIgGAEIgDADIAAABIAKAEIADADIAGgGIABgBIAHACIAAAAIAHgBIAEgBIADADIADgBIAIgCIAIABIAAgBIAAgCIgBgDIgCgBQgDgFgBAAIgEgCIgDgDIgNAAIgDgBg");
	this.shape_104.setTransform(265.175,377.55);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgpAzIADgIIAAgCIgBgFIABgDIADgBIAAgCQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBgBIAAgDIgBgHIABgHQAFgCAAgCIgBgCIgCAAIgDgBIAAgFIAAgDIAAgEIAAgBIAAgCIAAgCIACgHIgCgCIgBgJQAAgCgDgDIADgEIAHgFIAHgDQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABIABABIABAFIAAACIABADIAHgDIAGgCIAGgEIADgCIADgBIADABIAAAAIAKgDIAEAAIADAAIADADIACAAIAEgCIAAAAQABAAAAAAQABAAAAAAQABABABAAQAAABABAAQACACABAEIgJAGIgEAEQgCAAgEgEIgEAAIgGgCIgGgBQgCADgDAAIgEAAIgFACIgCgBIgKAHQgEAEAAAIIAAAAIAAAEIAAAFQAAABgDADQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAIAAACIACAAIAAAEIABAYIAAACIgEACIgIACIAJACIACAAIACAFQAAAEgDACIgHABIgGADIgCABQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_105.setTransform(254.525,377.65);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgGBOQgEAAgFgFIgDgEIgBgEIgCgFIAAgEIABgJQAAgFACgCIgBgGIgBgYQAEgCAAgCIgBgDIgEgBIAAgBIAAAAIABgCIAAgMIgIgBIgHAAIgDABIgEABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAgDAGgDQABgFADAAIAGAAIABAAIAIgBIAAgDIAAgVQAAgEgCgDIgBgDIgBgCQAAgCAEgDQAFgEAIgCQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAIACABQABACAAADIgBAWIgCAGQAAACgDACIABAGIADAAIgBAHIAOADIAEAAIAIgBIAJgBIAIgDIAFAAIgBAGQgBACgIAFIgCACIgCACIgEABIgDgBIgFgDIgEAAIgEgDIgHAFIgFgBIgDABIABALIAAAGQgFABAAADIABADIAFABIAAARIgEgBQAAAAgBAAQAAABgBAAQAAAAAAAAQAAABAAAAIABAEIADgBQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIAAAFIAAAJIACAFIABADIAAABIAAADQAEADAFAAQAEAAAFgCIAEgDIAHgGIAHgFIADABIAAAEIgCAIIgIAEIgRAGIgFACIgFACQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAIgCgBIgBAEIgDAAg");
	this.shape_106.setTransform(243.875,375.425);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgwAzIgBgCIAAgCIABgGIAAgKIABgEIAAgEIgBgDIAAgDIABgDIgBgEIAAgEIABgEIAEgCIgBgBIgEgBIAAgEIAAgEIAAgCIgBgMIADgBIgDgFIgBgDQAAgCgDgEQABgFAGgCQAGgFADAAQABAAABAAQAAAAABAAQABAAAAABQAAAAAAAAIABAIIADAIQAFgIABABIAFgDQAGgEABgBQABAAAAABQAAAAABAAQAAABABAAQAAABABABQAHgGAHAAIACABIADAAIAGgCIAIACIAHABIADACIADABQADABAFAGQADAFAAAQIgHABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABAAAAIAJAFQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIgCAHIAAABIACAEIAAAFIACAHIAAAHIABAHIgBAGIACAFIgGAEIgGACIgGAEQgEgEAAgCIADgLIAAgEIAAgCIADAAIAHgCIgBgBQgEgCgHgCIACgHIAEgEQAEgCAAgEIgJgDIAAgEIgBgHIABgCIABgEIgCgDIAAgGIgCgFQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgBIgEgBIgEgHQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQgCgBgEADQgFAFgEAAIgEgCIgDADIAAABQgDgHgDAAIgBAAIgEACQgDAAgFAEIgIAFQgCAEAAACIAAAJIAAABQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgGAFIgBABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAIAGAEIABACIgBACIABALIgDAEIAAABQAAADADADIgBAAIABAEQAAAJACAEIgDAEIgEAAIgCABIgCAAIgDACQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgCgCg");
	this.shape_107.setTransform(231.675,377.75);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AAEA0IgEABIgCAAIgFABIgKgBIgCgBIgDgBIgMgEIgEgEIgFgDQgEgCAAgBIgDgFIgEgFIABgEIgDgHQgBgCAAgJIABgJIADgHIAEgFIADgGIALgKIAKgHIAKgHIAEAAIAKgDIAGgBIAJgDQAIAAACAHIAFgCIADACIACACIAMAMIAFAGIACAGIACAFIgBABIgEgBIgFACIgFgBIgEABIgJgGIgGAGIgKgCIgFABIgBgBIgKAAIgGABIgGABIgGAAIgGAAIgLADIgBAHIgDADIAEAFIADALIACABIAAAFIAEABQABAGACACQACACAFAAQABAFABABQABABAEAAIADADIACAAIAIAEIADAAIAHgBIAJgCIAGgCIAHAAIAIgFIAHgFIAFgHQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIADABIgBAHIgIANIgDgBIgEADQgDABgDABIgMACIgHABIgFACgAgEgnIgHACIgKAEIgGAEIgDADIAAABIAKAEIADADIAGgGIABgBIAHACIAAAAIAHgBIAEgBIADADIADgBIAIgCIAIABIAAgBIAAgCIgBgDIgCgBQgDgFgBAAIgEgCIgDgDIgNAAIgDgBg");
	this.shape_108.setTransform(217.275,377.55);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgNCGIgDAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAABgBAAIgGAAQgDgEgCAAIgGAAIgCAAQgFAAgIgEIgNgGIgPgJIgBgCIADAAIAAgCQAAgFgDAAIgEACIgFgDIgJgHIgDgEIgBgBIgFgHQgLgPgDgSIACgCIAAgCIgDgCIgBgGIgBgDIgBgDIAAgFIgBgGIABgDIgBgFQAAgDACgDIABgFQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIABgGIAEgNIAGgBIgCgFIgBgCIAEgLQABgGACgFIAFgHIACABIACAAIADgBIACgBIABgCIgDgBIgBgFQAAgBAEgEIACgDIADgEIADgEIABgBIAEgFIAFgEIABABIAEgCIAAgEIARgOIAFgCIADgDIAEgBIAGgDIAEABIACgFIAFABIABgCIAGgCIAJgDIAFgBIAFgBIACgDIADABIAHgCIAFgBIAEABIACAAIASgBQAFABAEAEIAEAEQADAAACgGQAEADADAAIACAAIAEgBIAEABIAXAHIAAAEIgCADQgGAGgBAAIgFgCIgSgHIgBgEIgEAAIgDABIgIgDIgEgCIgBgCIgGACIgHAAIgLAAIgEAAIgJACIgIABIgIACIgFACIgHADIgFAEQgPAGgFAHIgIADIgBAEIgHAGIgDADIgFAGIgDABIgBgBIAAACIgGAMIgGAGIgDAIIgDAHIgCAEIgEAJIgCAJIgCAJQgBABgEABQAAAEADACIgBAEIABAHIAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgLAEIgBABIAAACIADAEIABADIAHAGIACAGIABAFIgBAAIABAEIACABIACAEIABAEIABAFIACAFIAEAMQAAAAAAAAQAAAAAAABQgBAAAAAAQgBAAgBAAIACADIAEABIACABIAGAHIAEADIADAEIAHAFQABADACACQACACAEABIAGAEIAFACIAEACIAFACIADACIADACIADgBIAQAEIARAAIACABIAEABIACgCIACgBIACABIABAAIALgCIAMgCIAGABQACAAAFgDIAGgCIAIgDIADABIAMgDIAMgEIACgDIAFgCQAEgDAEAAIADABIACgEIAEgDIAFgCIADABQAAAHgDAEIgCAGIgBACIgMACIgGACIgIACIgGABIgGACIgGABIgKADIgEgBIgGAAIAAABQAAABAAAAQAAABgBAAQAAAAAAABQgBAAgBAAIgBAAIgDgBIgBABIgRADQgFACgHAAIgLAAIAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgJABQgDAAgHgDg");
	this.shape_109.setTransform(196.525,373.975);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAEA0IgEABIgCAAIgFABIgKgBIgCgBIgDgBIgMgEIgEgEIgFgDQgEgCAAgBIgDgFIgEgFIABgEIgDgHQgBgCAAgJIABgJIADgHIAEgFIADgGIALgKIAKgHIAKgHIAEAAIAKgDIAGgBIAJgDQAIAAACAHIAFgCIADACIACACIAMAMIAFAGIACAGIACAFIgBABIgEgBIgFACIgFgBIgEABIgJgGIgGAGIgKgCIgFABIgBgBIgKAAIgGABIgGABIgGAAIgGAAIgLADIgBAHIgDADIAEAFIADALIACABIAAAFIAEABQABAGACACQACACAFAAQABAFABABQABABAEAAIADADIACAAIAIAEIADAAIAHgBIAJgCIAGgCIAHAAIAIgFIAHgFIAFgHQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIADABIgBAHIgIANIgDgBIgEADQgDABgDABIgMACIgHABIgFACgAgEgnIgHACIgKAEIgGAEIgDADIAAABIAKAEIADADIAGgGIABgBIAHACIAAAAIAHgBIAEgBIADADIADgBIAIgCIAIABIAAgBIAAgCIgBgDIgCgBQgDgFgBAAIgEgCIgDgDIgNAAIgDgBg");
	this.shape_110.setTransform(168.875,377.55);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AAAA2IgCABIgHgDIgLgCIgCAAIgFgBIgEgBIgDgCQgGgHAAgCIAAgCIAAgBIgFABIAAAAIgDgHQgDgDAAgBIgBgGIABgDQgDgDgBgCIAHgEQAEgBgBgFQABgCgKgBIAHgNIADgGIAGgEIACgDIAFgFIAGgFIAEgCIADgDIADgBIAEgDIAHgCIAIgDIAFgBIAEADIAHgCIABAAIAGABIACABIAEAAIAHgCIAFACIgCAEQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgCAFIgFACIgCACIgDAAIAAAAIgFAAIgEgBIgDAAIgJgBIgCAAIgEgBIgKABIgGACIgFAGIgGABIgBAEQgCABgDABIABADIgFAGQgBABAAAOQABADADAKIgDAFIAGACIAHALIAEAAIACADIAFAEIAEADIAHACIAFAAIAEABIAGABIADAAQADAAAGgDIACABIADgCIAFgDQAEgBADgDIAEgDIADgCQADgEABAAIACABIgBAKIgEAFIgJAFIgEACIgEACIgFgBIgJACIgDACIgBABg");
	this.shape_111.setTransform(155.5,377.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgwAzIgBgCIAAgCIABgGIAAgKIABgEIAAgEIgBgDIAAgDIABgDIgBgEIAAgEIABgEIAEgCIgBgBIgEgBIAAgEIAAgEIAAgCIgBgMIADgBIgDgFIgBgDQAAgCgDgEQABgFAGgCQAGgFADAAQABAAABAAQABAAAAAAQABAAAAABQAAAAAAAAIABAIIADAIQAFgIABABIAFgDQAGgEABgBQABAAAAABQAAAAABAAQAAABABAAQAAABABABQAHgGAHAAIACABIADAAIAGgCIAIACIAHABIADACIADABQADABAFAGQADAFAAAQIgHABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABAAAAIAJAFQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIgCAHIAAABIACAEIAAAFIACAHIAAAHIABAHIgBAGIACAFIgGAEIgGACIgGAEQgEgEAAgCIADgLIAAgEIAAgCIADAAIAHgCIgBgBQgEgCgHgCIACgHIAEgEQAEgCAAgEIgJgDIAAgEIgBgHIABgCIABgEIgCgDIAAgGIgCgFQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgBgBIgEgBIgEgHQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQgCgBgEADQgFAFgEAAIgEgCIgDADIAAABQgDgHgDAAIgBAAIgEACQgDAAgFAEIgIAFQgCAEAAACIAAAJIAAABQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgGAFIgBABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAIAGAEIABACIgBACIABALIgDAEIAAABQAAADADADIgBAAIABAEQAAAJACAEIgDAEIgEAAIgCABIgCAAIgDACQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgCgCg");
	this.shape_112.setTransform(141.525,377.75);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAEA0IgEABIgCAAIgFABIgKgBIgCgBIgDgBIgMgEIgEgEIgFgDQgEgCAAgBIgDgFIgEgFIABgEIgDgHQgBgCAAgJIABgJIADgHIAEgFIADgGIALgKIAKgHIAKgHIAEAAIAKgDIAGgBIAJgDQAIAAACAHIAFgCIADACIACACIAMAMIAFAGIACAGIACAFIgBABIgEgBIgFACIgFgBIgEABIgJgGIgGAGIgKgCIgFABIgBgBIgKAAIgGABIgGABIgGAAIgGAAIgLADIgBAHIgDADIAEAFIADALIACABIAAAFIAEABQABAGACACQACACAFAAQABAFABABQABABAEAAIADADIACAAIAIAEIADAAIAHgBIAJgCIAGgCIAHAAIAIgFIAHgFIAFgHQAAAAABAAQAAAAAAgBQABAAABAAQAAAAABAAIADABIgBAHIgIANIgDgBIgEADQgDABgDABIgMACIgHABIgFACgAgEgnIgHACIgKAEIgGAEIgDADIAAABIAKAEIADADIAGgGIABgBIAHACIAAAAIAHgBIAEgBIADADIADgBIAIgCIAIABIAAgBIAAgCIgBgDIgCgBQgDgFgBAAIgEgCIgDgDIgNAAIgDgBg");
	this.shape_113.setTransform(127.125,377.55);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgpAzIADgIIAAgCIgBgFIABgDIADgBIAAgCQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBgBIAAgDIgBgHIABgHQAFgCAAgCIgBgCIgCAAIgDgBIAAgFIAAgDIAAgEIAAgBIAAgCIAAgCIACgHIgCgCIgBgJQAAgCgDgDIADgEIAHgFIAHgDQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABIABABIABAFIAAACIABADIAHgDIAGgCIAGgEIADgCIADgBIADABIAAAAIAKgDIAEAAIADAAIADADIACAAIAEgCIAAAAQABAAAAAAQABAAAAAAQABABABAAQAAABABAAQACACABAEIgJAGIgEAEQgCAAgEgEIgEAAIgGgCIgGgBQgCADgDAAIgEAAIgFACIgCgBIgKAHQgEAEAAAIIAAAAIAAAEIAAAFQAAABgDADQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAIAAACIACAAIAAAEIABAYIAAACIgEACIgIACIAJACIACAAIACAFQAAAEgDACIgHABIgGADIgCABQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_114.setTransform(116.475,377.65);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAEA0IgEABIgCAAIgFABIgKgBIgCgBIgDgBIgMgEIgEgEIgFgDQgEgCAAgBIgDgFIgEgFIABgEIgDgHQgBgCAAgJIABgJIADgHIAEgFIADgGIALgKIAKgHIAKgHIAEAAIAKgDIAGgBIAJgDQAIAAACAHIAFgCIADACIACACIAMAMIAFAGIACAGIACAFIgBABIgEgBIgFACIgFgBIgEABIgJgGIgGAGIgKgCIgFABIgBgBIgKAAIgGABIgGABIgGAAIgGAAIgLADIgBAHIgDADIAEAFIADALIACABIAAAFIAEABQABAGACACQACACAFAAQABAFABABQABABAEAAIADADIACAAIAIAEIADAAIAHgBIAJgCIAGgCIAHAAIAIgFIAHgFIAFgHQAAAAABAAQAAAAAAgBQABAAABAAQAAAAABAAIADABIgBAHIgIANIgDgBIgEADQgDABgDABIgMACIgHABIgFACgAgEgnIgHACIgKAEIgGAEIgDADIAAABIAKAEIADADIAGgGIABgBIAHACIAAAAIAHgBIAEgBIADADIADgBIAIgCIAIABIAAgBIAAgCIgBgDIgCgBQgDgFgBAAIgEgCIgDgDIgNAAIgDgBg");
	this.shape_115.setTransform(103.275,377.55);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgeBwIABgFIABgDIABgEIACgJIAAgIQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBIgBgGIgCgHIAAgFIAAgXQAAgFACAAIAFgDIAAgCIgCgBIgCABIgCgBIgFgGIgGgBIgEgBQgDAAgHAHIgBgBIAFgIQADgEADAAIAHABIAGgEIAAgGIAAgNQAAgDADgGIgEgDIAAgOIAAgKIAAgHQAAgCACgDIAEgHIgBgCIgCgBQABgJAIgLIAGgHIAJgHIAMgHIADgCIAEgBIAIgCIAEACIACAAIACAAIADgBQAFAAAEAEIAEAAIgBAEIgDADIgDAEQgCACgFABIgJgFQgFgDgFAAQgEAAgIAEIgFAFQgDAGgDALIgCADIgCAIIgCAFQAAAAAAAAQAAABAAAAQABAAAAABQABAAAAAAIgBAGIAAAGIAAAKIgCAGIAAADIACAGQABACAAATQAAABgFAEIAAABIAEACQACABABAGIAFAEIAFACIAIACIAJgEIAKgCIAHgEIAGgBQACADABADIgKAGIgEAEIgCABIgFgBIgFgBIgHABIgFAAIgIgBIgFgBIgDACQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIABAGIABANIgBACQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAACADADIABAEQAAAOACAEIgCACIgCgBIgCACIACADIACAEIAAAAIAAAEIAAABIABAGIgCABIAAAEIgLAEIgFABIAAAAIgDABIgDgCg");
	this.shape_116.setTransform(91.525,371.575);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgwAzIgBgCIAAgCIABgGIAAgKIABgEIAAgEIgBgDIAAgDIABgDIgBgEIAAgEIABgEIAEgCIgBgBIgEgBIAAgEIAAgEIAAgCIgBgMIADgBIgDgFIgBgDQAAgCgDgEQABgFAGgCQAGgFADAAQABAAABAAQABAAAAAAQABAAAAABQAAAAAAAAIABAIIADAIQAFgIABABIAFgDQAGgEABgBQABAAAAABQAAAAABAAQAAABABAAQAAABABABQAHgGAHAAIACABIADAAIAGgCIAIACIAHABIADACIADABQADABAFAGQADAFAAAQIgHABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABAAAAIAJAFQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIgCAHIAAABIACAEIAAAFIACAHIAAAHIABAHIgBAGIACAFIgGAEIgGACIgGAEQgEgEAAgCIADgLIAAgEIAAgCIADAAIAHgCIgBgBQgEgCgHgCIACgHIAEgEQAEgCAAgEIgJgDIAAgEIgBgHIABgCIABgEIgCgDIAAgGIgCgFQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgBIgEgBIgEgHQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQgCgBgEADQgFAFgEAAIgEgCIgDADIAAABQgDgHgDAAIgBAAIgEACQgDAAgFAEIgIAFQgCAEAAACIAAAJIAAABQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgGAFIgBABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAIAGAEIABACIgBACIABALIgDAEIAAABQAAADADADIgBAAIABAEQAAAJACAEIgDAEIgEAAIgCABIgCAAIgDACQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgCgCg");
	this.shape_117.setTransform(79.225,377.75);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgeA0IgDgCIgGgBQgCgBgIgFIgFgDIgCgDIgBgCIgCgCIgBgCQgDgEAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQgBgDgDgBIAAgBIABgNIAEgKIAGgLIAHgFIACgEIACgDIAKgFQADgCAEgEIAQgGQAIgDAPAAIAIABIABADIADACQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABgBQAHACAGAEIAEADIADAFQADAEAGAAIAFAIIABAJIACAKIgDAAIAAABIgCAEQAAABADACIAAAIIgCAFIgHAPQgIAJgGACIgHADIgHAEIgHADIgNABIgIACIgKAAIgEAAIgPgCgAgUAqQAFACAFAAIAIAAIADABIAEABIAHgBIAIgBIAJgGIAGgDIAFgIIAEgHIAEgEIAAgCIgCgFIABgDIABgJIgCgIIgCgHIgBgGIAAAAIgEAAIgGgJIgDgEIgCgBIgHgDQgCgFgDAAIgEACIgFgBIgIAAIgHADIgDgCIgDADIgGADIgBABIgQAOIgCABIAAAFIgDAFQgBAEgDACIABACQAAADgFABIABADQAEADAAABQAAABgFADIAAABIABABIADgBIACAHIAHAMIAAABIgBAEQAAAAAAABQABAAAAAAQAAABABAAQABAAABAAIACgCIAMAGg");
	this.shape_118.setTransform(64.125,377.825);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgNCGIgDAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAABgBAAIgGAAQgDgEgCAAIgGAAIgCAAQgFAAgIgEIgNgGIgPgJIgBgCIADAAIAAgCQAAgFgDAAIgEACIgFgDIgJgHIgDgEIgBgBIgFgHQgLgPgDgSIACgCIAAgCIgDgCIgBgGIgBgDIgBgDIAAgFIgBgGIABgDIgBgFQAAgDACgDIABgFQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIABgGIAEgNIAGgBIgCgFIgBgCIAEgLQABgGACgFIAFgHIACABIACAAIADgBIACgBIABgCIgDgBIgBgFQAAgBAEgEIACgDIADgEIADgEIABgBIAEgFIAFgEIABABIAEgCIAAgEIARgOIAFgCIADgDIAEgBIAGgDIAEABIACgFIAFABIABgCIAGgCIAJgDIAFgBIAFgBIACgDIADABIAHgCIAFgBIAEABIACAAIASgBQAFABAEAEIAEAEQADAAACgGQAEADADAAIACAAIAEgBIAEABIAXAHIAAAEIgCADQgGAGgBAAIgFgCIgSgHIgBgEIgEAAIgDABIgIgDIgEgCIgBgCIgGACIgHAAIgLAAIgEAAIgJACIgIABIgIACIgFACIgHADIgFAEQgPAGgFAHIgIADIgBAEIgHAGIgDADIgFAGIgDABIgBgBIAAACIgGAMIgGAGIgDAIIgDAHIgCAEIgEAJIgCAJIgCAJQgBABgEABQAAAEADACIgBAEIABAHIAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgLAEIgBABIAAACIADAEIABADIAHAGIACAGIABAFIgBAAIABAEIACABIACAEIABAEIABAFIACAFIAEAMQAAAAAAAAQAAAAAAABQgBAAAAAAQgBAAgBAAIACADIAEABIACABIAGAHIAEADIADAEIAHAFQABADACACQACACAEABIAGAEIAFACIAEACIAFACIADACIADACIADgBIAQAEIARAAIACABIAEABIACgCIACgBIACABIABAAIALgCIAMgCIAGABQACAAAFgDIAGgCIAIgDIADABIAMgDIAMgEIACgDIAFgCQAEgDAEAAIADABIACgEIAEgDIAFgCIADABQAAAHgDAEIgCAGIgBACIgMACIgGACIgIACIgGABIgGACIgGABIgKADIgEgBIgGAAIAAABQAAABAAAAQAAABgBAAQAAAAAAABQgBAAgBAAIgBAAIgDgBIgBABIgRADQgFACgHAAIgLAAIAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgJABQgDAAgHgDg");
	this.shape_119.setTransform(42.625,373.975);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgNA3IgKgBIgIgDIgFgDIgKgHQgDgFAAgEIACgDIAEgEIAGgEIABABQADADABADIgBAFQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABABAAIAEADIADACIADADIAGACIAEACIAGAAIACABIAJgCIAFgBIAFgDIAGgCIAHgJQAEgHAAgJIgBgEIgHgLIgEACIgIgBIgJABQgCgDgBgBIgDACIgHACIgCAAIgBAAIgGgBIAAAAIgDgBIgDAAIgEgBIgCgBQgKgEAAgIQgBgHAGgHIAHgHIAEgDIAFgEIAPgIQAKgEAHAAIALADIAIgCIAIABQAAABABAAQAAAAABABQAAAAAAAAQAAABAAAAIgBADIgHAEIgHAEIgNgBIgDgFIgBAAIgDADIgDAAIgCAAIgCAAIgDAAIgEAAIgJAFQgDACgCADQgDAEAAADQAAABAAAAQAAAAABABQAAAAAAABQABAAABABIAEACIAGADIAAACQAAABAAAAQAAABAAAAQAAAAABABQAAAAABAAQACAAADgEIAFABIAHgCIAEABIAHgBIAGACIAGgBIAEAEQAIAEAEADIACADIABAFIABAJIAAAFQgBAJgEAAIgDgBQgCAHgBABIgHAKQgHABgFADIgDACIgDAAIgLADIgFgBIgJACg");
	this.shape_120.setTransform(519.3,331.775);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AAEA1IgEABIgCAAIgFAAIgKgBIgCAAIgDgCIgMgEIgEgEIgFgDQgEgCAAgBIgDgFIgEgFIABgEIgDgHQgBgCAAgKIABgJIADgFIAEgGIADgHIALgKIAKgGIAKgGIAEgBIAKgEIAGAAIAJgDQAIAAACAIIAFgEIADAEIACABIAMALIAFAHIACAHIACAEIgBABIgEgBIgFACIgFgBIgEABIgJgGIgGAFIgKgBIgFAAIgBAAIgKAAIgGAAIgGABIgGABIgGAAIgLADIgBAGIgDAEIAEAEIADAMIACACIAAAEIAEABQABAGACACQACACAFABQABAEABAAQABABAEAAIADAEIACAAIAIADIADABIAHgBIAJgBIAGgCIAHgBIAIgFIAHgFIAFgGQAAgBABAAQAAAAAAgBQABAAABAAQAAAAABAAIADACIgBAGIgIANIgDgBIgEADQgDACgDgBIgMAEIgHABIgFABgAgEgnIgHACIgKAEIgGAFIgDACIAAABIAKAEIADADIAGgHIABAAIAHACIAAAAIAHgCIAEAAIADACIADAAIAIgCIAIAAIAAAAIAAgCIgBgDIgCgCQgDgEgBABIgEgDIgDgDIgNgBIgDAAg");
	this.shape_121.setTransform(505.875,331.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgGBOQgEAAgFgFQgCgCgBgCIgBgEIgCgFIAAgEIABgJQAAgFACgCIgBgGIgBgYQAEgCAAgCIgBgDIgEgBIAAgBIAAAAIABgCIAAgMIgIgBIgHAAIgDABIgEABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAgDAGgDQABgFADAAIAGAAIABAAIAIgBIAAgDIAAgVQAAgEgCgDIgBgDIgBgCQAAgCAEgDQAFgEAIgCQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAIACABQABACAAADIgBAWIgCAGQAAACgDACIABAGIADAAIgBAHIAOADIAEAAIAIgBIAJgBIAIgDIAFAAIgBAGQgBACgIAFIgCACIgCACIgEABIgDgBIgFgDIgEAAIgEgDIgHAFIgFgBIgDABIABALIAAAGQgFABAAADIABADIAFABIAAARIgEgBQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABAAAAIABAEIADgBQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAAFIAAAJIACAFIABADIAAABIAAADQAEADAFAAQAEAAAFgCIAEgDIAHgGIAHgFIADABIAAAEIgCAIIgIAEIgRAGIgFACIgFACQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAIgCgBIgBAEIgDAAg");
	this.shape_122.setTransform(494.025,329.375);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgNBWIABgEIACgGIAAgHIAAgNIAAgCQAAgBABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIACAAIABgDIgCgEIAAgEIgDgBIABgFIAAgCIAAgCIABgEIgBgEIAAgBIAAgBIgBgCQAKgCgBgCIAAAAQgCgBgDgBIgFAAIAAgCIgBgNQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAgDAEgDQAJgHAFgCIAEAEIgCAKIAAAGIAAAEIgDADQAAADADAEIgBABIABAHIAAACIgBADIAAAaIABAKIAAAFIABAFQAAADgCACIgFAEIgHAFIgDABIgDgCgAgMg9QAAgFAHgFIADgEIACgCIAGgJIAEgBIADACQACACAAADQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgMAKIgDADIgFADIgEACQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_123.setTransform(486.25,328.25);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgQA0IgBAAIgFACIgEgFIgGABIgCABIgIgEQgDgBgCgEQgDgFAAgEIACgEIgDgCIAAgPQACgDAAgCIgCgEIAAgJIAAgGIACgEIAAgCIgDABIABgLIAAgEIgBgDIAAgFIgCgEQAAAAABAAQAAgBAAAAQABAAABgBQAAAAABAAIAKgEIABAAIADgCIADABIACAFIgBAEIgBAKIAAAGIgCAKQAAAEADAHIgEACIABAEIABABIgBAEIgBALIACAEIAAAFIAAAFQAAAHAFADIAOAFIAHABQAHAAABgCIAGgFIADgCQAAABABAAQABAAAAABQABAAAAAAQABAAAAAAIACAAIACgEIAEgCIAFgIIAEgDIACgGIACgGIAAgEIAAAAIABgFIgDgBIAAgBIAAgUIgCgLIAAAAQAAgCADgDIgBgCIgCAAIAAgEIAAgCIABgFIADABIAIgDIAGgCIACAJIgBAQIAAAJIgCAMIgDAAIgBAEIAAACIAEAAIABACIAAAEIAAABIAAAFIAAACIgCAKIADADIAAAGQAAAEACACIAEADIgCADIgIADIgHAEQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQgCgCAAgEIAAgEIgEAAIgCAAIgEADIgCABIgFADIgEACQgJAEgIAAIgGACIgFgCg");
	this.shape_124.setTransform(475.725,331.725);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgHCHIgGAAQgDAAgCgDQgDAEgDAAIgFgCIgCgBIgKABIgCgBQgCgEgFAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBABAAAAIgGgCQgCgCgEABIgGgDIgFgCIAAgDIgEgBQgBAAAAgBQAAAAgBAAQAAgBAAgBQAAgBgBgBIgCABIAAAEIgKgDIgRgOIAAAAIgBgCIgCgEIgGgGIgGgHIAEgIIACgDIAFgHIABgCIABgBIACABIACADIADADIgBAFIABADIAAAFQABAFADAEIACgBIABAAIAEAHQAAABAAAAQAAABAAAAQABABAAAAQABABAAAAIAKAIIARAHIAGADIAFAAIAGADIAUAEIAQABIAHAAIACAAIACgBIADABIAMgCIAEACIADAAQABgBACgDIACgBIACAAIACAAIAKgDIADAAIAGgCIAMgFIAJgGIAHgFIAGgIIADgDIACgEIADgDIABgEQgBgBAEgHIACgEIAFgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBABAAIgBgBIgDAAIACgGIgCgDIACgEIACgIIACgKIABgHIADAAIAAgCIgFABIgGgTIADgCIAAgBIAEAAQAKAAAAgBQAAgDgPAAQgBABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAIgCgDIgLgEIgGgDIgLgCIgDgBIgHgCIgBAAIAAgBIgBAAIAAAAIgBABIgLgCIgCABIgGAAIgCgBQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAIgFADIgCABIgFAAIgDgBIgJAAIgFgKQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAgBgBAAQgCAAgFAMQAAgLgCgCIgCgCIgBAAIgMAPIgFgDQgHAAgDgCIgEgCIgDAAIgBAAIgFAAIgDgCIgLgGQgFgDgFgJQgEgFAAgDIABgEQgDgDAAgDIACgEIABgIIAEgHIAMgNIAGgEIAGgGIAFgCIAFgCIAWgJIAJgFIANgEIARgFIAFgBIAZgCIALgBIAGAAIAHABIAEABIAQADIABAGIgFACIgCACIgEADIgEgCIgEAAIgIgDIgFABIgDgEQgEgFgGAAQgFAAgDACIgEAGIgCgCIgCAAQgGAAgEACIgOACIgKAEIgGgBIgEABIAAADIgPAGIgBACQgIABgFAHIgEgBQgCAAgCAEQgGACgEAFQgHAJAAAGIABAKQABACADADQAIAIADAAIAGACQAHADACAFIACABIADABIACgBIACAAIACAAIABgEIACABIAHgBIAKACIADAAIACAAIAJABIABAFIADAAIACAAIgBgCQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAFAAIAfAAIABACIgBADIADACQABAAADgDIACABIAHgDIADABQAKAAACACIAFACIARAGIACABIAEACQAGAEABACIACADIgBAEIAAABIAEABQAEAGAAAFIACAMIAAAEIAAACIAAAFIAAACIgCAGIgBABIABAEIgCADIgBAEIgEAJIgBAEIgEAGIAAAAIAAABIAAAEIgDAFIgHAIIgEAIIgEACIgFAGIgHAHIgBABIgEgBIACgCIgHAFIABADIgSAKIgNAGIgIAAIgRAFIgIABIgEABIgFAAIgFAAIgEgBg");
	this.shape_125.setTransform(454.6,328.25);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AA0A1IgBgGIACgIIAAgDIgBgGIAAgBIABgKIABgFIADgGIgEgFIAAAAIAGgDIACAAIgIgHQACgDACgFIgEgDIgCgOIgIgKQgCgCgGAAIgFABIgFADIgCABIgDACIgFAEIgFAGIAAAKQAAAAgBAAQgBABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAABABAAQAAAAABABIAAAIIACAKIgBAEIgEgBIgBABIADAGIABACIAAACIAAAFQADAHAAAKQAAAAgBAAQAAABAAAAQAAABgBAAQAAABgBAAIgFAEIgIADIgBAAIgBgEIAAgGIABgLIAAgJIABAAIACgDIgBgDIgBgFIgCgEIAAgBIABgHQAEgCAAgDQAAgCgEgBIgBgPIgDgKQgCgCgDAAIgEABIAAgBIgCgDIgEACIgGABIgJADIgEABQgDAEgCAGIgBAEIAAAGIgBAEIABAGIgBAGIgEACIAEAFIAAAIIAAAFIAAABIABAJIABALIgLAHIgEAAIgDAAIAAgBIAAgFIAAgIIAAgGIgBgEIADgEIAAAAQAAgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIAAgFIADgHIABgDIgCAAIgCgHIABgKIABAAIABAAIgBgFQAAgEgBgDIgBgJIgCgIIgEgBQABgEACgBIALgIIADgBIABACIACABIABAFIABAEIAAAGIAAAAIAEgBIAFgEIADgCIACgCQAGgDADAAQAHgCACgCIABAAQAEAAAAAGIADAAIAAgFIAHgCIADAAQADAAADAFIADAJQABAAAAAAQAAAAAAABQAAAAABAAQAAAAABAAIADgEIAGgEIALgFIAEABIAEgCIAIAAIADAAIAGACIAEABIAHAEIAAADQgBABAAAAQgBAAAAAAQAAABAAAAQAAAAAAABIABACIACAAIABAIIABAEIAAAPIAAABIgCAGIgBACIACAHIAAABIAAAEIAAAAIAAALIgCACIAAACIABAAIABABIAAAGIAAACQAAADACAFQgCACgHACIgIAFIgDAAg");
	this.shape_126.setTransform(426.4,331.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgdAzIgGAAIgEgCQgFgBgDgCQgCgCAAgEIgDgBIgCgEIgCgGIADgFIAEgGIAIgJIAJgFIAEgCIADABIADgDIAJgDIAHgDIAHAAIAEgCIACAAIADAAIAFAAIALgCIAGgBQACgCAAgDIgBgFIAHgJIgIgDIgEAAIgHgIIgKgCIgFAAIgDAAIgDAAIgDgEQgDABgBADIgEACQgHADgFAEIgCABIgCADIgEAAIgFgBIgGgCIgDgDIAEgDIACgCIAHgBIAEgCIAJgDIAFgDIAGAAIAGgBIACAAIAEgBIAJAAIAHACIADAAIAIABQACAAADAEQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAAAABABQAAAAAAABQAAAAABAAQAAAAABAAIADgBIADgBQACABAAADIAEADIAAACIAAAFQABAGABABIABAAIABAHIAAAKQgDACAAACQAAAAABAAQAAABAAAAQABABAAAAQABABABAAIABADIgBAFIgBADIACALQgDACAAADQAAACADADIABADIACADIgCAEIgFACIgFACIgEABIgFACIgDgCIACgJIgMAFIgDABIgEABIgFgBIgGACIgCAAIgKADIgGgBIgGACIgKgCgAgZApIAFACIADADIAEAAIABABIAFgCIADABIACgCIAEABIAHgDIADgCIADABIAGgCIAGgCIADgFIAEgCIABgEQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBIgCgDIAAgDIAAgDIAAgFIgBgCIABgFIgDgBIgGAAIgFAAIgEAAIgDAAIgEgCIgDABIgIABIgCAAIgDAAIgFACIgGACQgKAEgDADIgDAEIgFADIgBABIABACIACAIIACACIgCAEQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAAAIACADIADgDQAFADACAAg");
	this.shape_127.setTransform(410.05,331.85);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgxByIACgLIAAgDIACgFIABgDIAAgBIgCgEIAAgBIAAgGIAAACIAAgCIAAgGIAAgDIABgBIgBgFIABgLIAAgIIAAgCIADgEIABgCIAAgEIgDABQgCgHAAgIIABgXIAEAAQgBgDgBgDIgDgDIABgFIgBgFIgBgNQAAgEACgCQAHgFAAAAQgEgEgGAAIABgFIACgFQAAgDgEgBIAAgGIAAgFIAAgGIABgGIgEgLIABgEIgDgDQABgCAEgCIAKgFQADgBAEAAIAEABIgIADIgGAGIALAKIABACIgCAFIgBADIgCABIgBACIgBACIABADIADgBIADgBIgCAYIAAADIABADQAAAEgEADQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAAAIADAEIAAACIgBAIIABAFIAAAHIgBAGIABAFIAAACIAAAEIAAACQgCAHAAAHIACAGQAIgEAJgKIAHABQACgCAFgBIAGgBQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAIABADIAEAAIACgDIACgBIAIAAQAMABABABIAFAFQABACAEABIgCAFIAFABQADADAAAFIgBAJQAAAEgBACIgCABIACAGIgCADIgBACIAEAEIgBACIAAAEIABAIIAAABIgDAFIACAJIAAAMIAAACQgDACgFAAIgFADIgFADIgFgFIAEgIQACgFAAgFIgCgHIAAgBIABgFIACgMIgCgBIACgRIAAgBIAAgBIgBgHIABgBIAAgCIgCgEIgDgEIgFgBIgHgDIgFAAIgJgCIgDABIgFAAIgMACIgCAAIgHAEIgFABIgKALQAAADAJABIAAAFIgCAOIgEABIAAABQAEAFAAACIACAMIABAEIgCAHIABADIAAACIAAADIgCADIgIACIgGAGg");
	this.shape_128.setTransform(395.95,325.65);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AAhByIgLgDIgFgDIAAgDIAAgBIgDgCIgBAAIgFABIgDgCIgGgGIgHgGIgFgBIgNgMIgGgEQgBAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAIAAADIABAOIABAMIAAADIAAADIgCACIgGABIgKAEIgCgEIADgTIAAgTIADAAIACgEQgEgDAAgCQAAgCAEgGIgEgCQAHgDAAgCQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAgBgBAAQgFgDAAgBIAAgBIAAgDIAAgFIAAgFIAAgEIAEgDIAAgBIgEgDIgBgWIgBgJQAEgDAAgDQAAgCgEgCIAAgCIgCgSIABgKIAAgDQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBgBIAAgCIgBgDIAAgFIgBgLIAAgDIAAgHIAAgEIgBAAIACgFIAAgBIgBgEIANgIIAIgDIABABIgCAHIAAABIAAABIAAABIABASQAAABgHADQgEACAAADQAAAEALAIIgEABIAAAMIACAAQAAABABAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAAEIAAACIABAHIAAAlIgBAHIgBACQAAAEAEAEIgBADIAAADIAAAJIABABIgIALIAIAFIgCAIIACAFIAHgEIAIgGIANgOIAFgFIACgDIAJgJIAJgKQAGgGAEgBIAGADIAAADQAAAEgEADQgBACgFABQgCAEgCAAIgFABIAAAEQAAADgFAEIgEACIgDADIgDAAIgCAEIgEADIgKAJIgCADQAGAHADACQAKAGAAABQAAABAAAAQAAABABABQAAAAAAAAQABABAAAAIAAABQAAABAAAAQAAAAABABQAAAAAAAAQAAABABAAIAEAEIAEgCIARAHIAAADQAAAAABABQABAAAAABQABAAAAAAQAAAAABAAIAEgBIADACQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIADgBIABAAIADABIAEgCIABABIAAABIgCAGQgCAEgFADIgHABIgEABIgGgCg");
	this.shape_129.setTransform(382.875,325.575);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgpAzIADgIIAAgBIgBgGIABgDIADgBIAAgCQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAIAAgEIgBgGIABgIQAFgBAAgEIgBgCIgCABIgDgBIAAgFIAAgDIAAgEIAAgBIAAgDIAAgBIACgHIgCgCIgBgJQAAgCgDgDIADgFIAHgEIAHgEQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAIABADIABAEIAAACIABADIAHgEIAGgCIAGgDIADgCIADgBIADAAIAAAAIAKgDIAEAAIADABIADACIACABIAEgCIAAAAQABAAAAAAQABAAAAABQABAAABAAQAAABABAAQACACABAEIgJAHIgEADQgCAAgEgEIgEAAIgGgBIgGgCQgCACgDABIgEABIgFABIgCgBIgKAIQgEACAAAJIAAAAIAAAEIAAAFQAAABgDADQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAIAAABIACABIAAAEIABAYIAAACIgEACIgIACIAJACIACgBIACAHQAAACgDACIgHACIgGADIgCABQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_130.setTransform(372.075,331.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgdAzIgGAAIgEgCQgFgBgDgCQgCgCAAgEIgDgBIgCgEIgCgGIACgFIAFgGIAIgJIAJgFIAEgCIADABIADgDIAJgDIAHgDIAHAAIAEgCIACAAIADAAIAFAAIALgCIAGgBQACgCAAgDIgBgFIAHgJIgIgDIgEAAIgHgIIgKgCIgFAAIgDAAIgDAAIgDgEQgDABgBADIgEACQgHADgFAEIgCABIgCADIgEAAIgFgBIgGgCIgDgDIAEgDIACgCIAHgBIAEgCIAJgDIAFgDIAGAAIAGgBIACAAIAFgBIAIAAIAHACIADAAIAIABQACAAADAEQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAAAABABQAAAAAAABQAAAAABAAQAAAAAAAAIAEgBIADgBQACABAAADIAEADIAAACIAAAFQABAGABABIABAAIABAHIAAAKQgDACABACQAAAAAAAAQAAABAAAAQABABAAAAQABABABAAIAAADIAAAFIgBADIACALQgCACgBADQABACACADIABADIACADIgCAEIgFACIgFACIgEABIgFACIgDgCIACgJIgMAFIgDABIgEABIgFgBIgGACIgCAAIgKADIgGgBIgGACIgKgCgAgZApIAFACIACADIAFAAIABABIAFgCIADABIACgCIAEABIAHgDIAEgCIACABIAGgCIAFgCIAEgFIAEgCIABgEQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBIgDgDIAAgDIAAgDIAAgFIAAgCIABgFIgDgBIgGAAIgFAAIgEAAIgDAAIgEgCIgDABIgIABIgCAAIgDAAIgFACIgGACQgKAEgDADIgDAEIgFADIgBABIABACIABAIIADACIgDAEQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAAAIABADIAFgDQAEADACAAg");
	this.shape_131.setTransform(358.65,331.85);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("ABgCBIACgJIAAgDIgBgEQAAgDADgBIAAgEQgEgEAAgCIABgDIACgKIgDgJIAAAAIABgLIgCgLIAAgDIADgBIgBgFIgDgCIgCgHIgBgIIAAgFIAAgBIAAgBIACgFIgBgEIgBgDIgBgCIgBgNIAAgGIAAgLIAAgFIAKgEIgKgCIABgDQAAgFgEgCQAAgDAEgBIAHgBIgKgGIgBgHIgCgDIgCAAIgBADIgCAGIAAAEIgEADIAAACIgDAHIgBAFIgCAEIgCAFIgDAEIgBAFIgBACIAAAFIgHANIgCAIIgDADIAAAEIgEABIgCALIgEACIABAEQAAAHgGAEIABACIgBACIgDAFIgEAGIgDAKIgCAEIgCAFIgCAEIgCADIgCAHIgHATIgDAAIgCAAIgDAAIgBgBIgGgLIgFgHIgDgGIgBgGIgCAAIgEgLIgGgLQgCgDAAgEIABgEIAAgBIgBgDIgFABIgDgHIgEgGIgBgCIgBgEIgEgJIgDgCIgEgLIgHgMIABAAIACgBIgCgEIgCgFQgCgGAAAAIgBAAIgEAAQgHgOAAgCIAAgDIgDgEIgBgDIgBgFQgDgDAAgDIgCgFIgCgBQgDgIgEAAIgCAAIABAHIABAFIAAAHIABAHIAAADIgBADIABAJIgBAFIgCABIABAFIgBAAIAAAEQAEAAAAACIgBAEIAAADIAAAKIAAAFIAAAFIgCAEIABAHIgCABIAAADIACAGIAAABIgBADIAAAFIAAADIAAAGIgBAHIAAAKIABAHIgCADQgHADAAACQABACACADIADgDIABAAIABAAIgBADIABAEIABABQAAACgGACQgFACAAACQAAACADABIAIADIgBAEIAAACIgDADIABACIAAACIgJADIgFACIgJADIgBAAIAAgBIAAgBIACgEIAGgEIAEgEIADgEIABgDIgKgGIABgCQABgBAAgFIABgIIABgEIAAgCIgBgDIABgDIgBgFIADgLIgCgHQAFgCAAgDIgDgDIAAgKIAAgFIABgJIAAgDIADgBIAAgBIgBgDIgBgFIACgCIABgEIgCgEIAHgFIgIgDIADgLQgBgEgEAAIACgIIAAgDIgBgEIAAgJQAAgDACgDQgDgFAAgDIABgFIgCgDIAAgCIABgIIABgDIgDAAIABgLIACgGIgDgHIgEgBIACgDQAEgFAFgEIAKgGIACAAIAHAJIACAFIADABIAAAFIACAHQgIABAAACQAAADAFACIAFgDIABAAQAAAHADAEIACAEIgBAFQAAACAEACIABAGIABABIgBADQAGADAAACQAAADgGADIADAGIABABQADgEABAAIAEAAIAAABIAAACIAAABIAAABIABADQAGAJAAAEIACAGIAAABIAAADIgDAAIAAABIABADIADgBIACABIAAAFIAEACQABADACAEQADADADAKIADAEQACAEABAGIAAACIAAADIACADIADADIADABIACAIIADABIAGAMIAGAOIABAEIAEAGIACAAIAEgIIAFgIIACgDIABgEIABgEIAGgIIADgDIACgCIAAgBIgCgFIADgEIACgEIADABIACgDIAAgDIgBgDIABgEIAGgQIADgIIAFgEIgBgEIAFgPIAEgJIADgJQABgCAFAAIgDgGIAAgBIACgGIAAgCIANgWIABgFIAFgGIAGgFIACgBIAAgBQgBgBgMgBIgCAAIgFgHIACgEIADgBIAEgDIAFgCIAHgEIAIgCIABAKIABADIAAACIAAAEIAAAIIAAAFIgBAEIAAAEIAAACIABADIgDAAQgBAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABQABACAEAAIgCAFIABAAIACAAIAAABIAAAFIAAAEIABALIAAAAQAAACgDAFIAAAEIABADIADAAIACABIgBAIIAAAIIABAYIABADIAAAFIgBADIgDAAIAAABIgBAEQADADACAAIABAGIACALIABAGIABACIgCAGIgBAEIAFAEIAAAEIAAADIgBADIACAEIgEABIgCAFIADACQADABAAAEIABAEIACADIACAKIABAOIgHAGQgHAGgIAAIgDABIgCAAIgCgBg");
	this.shape_132.setTransform(337.55,328.175);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AhgBtIgGgBIAIgIIAGgGIADgEIAEAAIAFgGIAHgHIADgEIAJgJQABgDAEgBIAAgEIALgKIAEgEIAGgGIAEgDIABgFIALgMQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAIAFgFIgBgBIAGgIIAGgHIAGgFIAGgEIgCgCIACgDIAGgCIAAgCIAAgDIACgDQAEgCABgCIADAAIAFgJIAHgJIAFgFIACgBIABgBQACgEABgCIAAgCIAHgKIAHgKIAEgFIABAAIACgCIAAgCIACABIABgCIgBgCIgBgBQAEgGAHAAIAEgBIAGgBQACAAADADIgDAEIgGAGIgGAGIgCAEQgCAFgGAFIgIAIIgMAQIgFAFIgEAHIgFAEIgGAIIgGAEIgEAIIgEADIgFADIAAACQAAAAgBAAQAAABAAAAQAAABgBAAQAAABgBAAIgCgBQgCAAgCAFIACABIgEAEIgLAOQgDADgBAEIgEgBIgEAEIABACIgBACIgEAAQAAAAgBAAQgBABAAAAQgBABAAAAQAAABAAABIAAABIgDAFIgDAEIgGAIIgGACIgDAHIgKAKIgEAFIgGAIIgDgBIgGALIgDADIgCADIgDADIgCADIgIABIgBABIgFgBg");
	this.shape_133.setTransform(313.2,330.25);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgeA0IgDgCIgGgBQgCgBgIgFIgFgDIgCgDIgBgCIgCgCIgBgCQgDgEAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQgBgDgDgBIAAgBIABgNIAEgKIAGgLIAHgFIACgEIACgDIAKgFQADgCAEgEIAQgGQAIgDAPAAIAIABIABADIADACQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABgBQAHACAGAEIAEADIADAFQADAEAGAAIAFAIIABAJIACAKIgDAAIAAABIgCAEQAAABADACIAAAIIgCAFIgHAPQgIAJgGACIgHADIgHAEIgHADIgNABIgIACIgKAAIgEAAIgPgCgAgUAqQAFACAFAAIAIAAIADABIAEABIAHgBIAIgBIAJgGIAGgDIAFgIIAEgHIAEgEIAAgCIgCgFIABgDIABgJIgCgIIgCgHIgBgGIAAAAIgEAAIgGgJIgDgEIgCgBIgHgDQgCgFgDAAIgEACIgFgBIgIAAIgHADIgDgCIgDADIgGADIgBABIgQAOIgCABIAAAFIgDAFQgBAEgDACIABACQAAADgFABIABADQAEADAAABQAAABgFADIAAABIABABIADgBIACAHIAHAMIAAABIgBAEQAAAAAAABQABAAAAAAQABAAAAABQABAAABAAIACgCIAMAGg");
	this.shape_134.setTransform(298.475,331.775);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgGBOQgEAAgFgFIgDgEIgBgEIgCgFIAAgEIABgJQAAgFACgCIgBgGIgBgYQAEgCAAgCIgBgDIgEgBIAAgBIAAAAIABgCIAAgMIgIgBIgHAAIgDABIgEABQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAgDAGgDQABgFADAAIAGAAIABAAIAIgBIAAgDIAAgVQAAgEgCgDIgBgDIgBgCQAAgCAEgDQAFgEAIgCQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAIACABQABACAAADIgBAWIgCAGQAAACgDACIABAGIADAAIgBAHIAOADIAEAAIAIgBIAJgBIAIgDIAFAAIgBAGQgBACgIAFIgCACIgCACIgEABIgDgBIgFgDIgEAAIgEgDIgHAFIgFgBIgDABIABALIAAAGQgFABAAADIABADIAFABIAAARIgEgBQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABAAAAIABAEIADgBQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAAFIAAAJIACAFIABADIAAABIAAADQAEADAFAAQAEAAAFgCIAEgDIAHgGIAHgFIADABIAAAEIgCAIIgIAEIgRAGIgFACIgFACQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAgBAAAAIgCgBIgBAEIgDAAg");
	this.shape_135.setTransform(285.875,329.375);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgwAzIgBgCIAAgDIABgEIAAgKIABgFIAAgDIgBgFIAAgCIABgCIgBgGIAAgDIABgFIAEgBIgBgBIgEgBIAAgEIAAgEIAAgCIgBgMIADgBIgDgEIgBgEQAAgCgDgEQABgFAGgCQAGgFADgBQABAAABABQAAAAABAAQAAAAABABQAAAAAAAAIABAIIADAHQAFgGABAAIAFgDQAGgFABABQABAAAAAAQAAAAABAAQAAABABAAQAAABABABQAHgGAHAAIACAAIADABIAGgCIAIABIAHACIADACIADABQADAAAFAIQADAEAAAQIgHABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABAAAAIAJAFQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIgCAHIAAABIACAFIAAAEIACAHIAAAIIABAHIgBAFIACAFIgGADIgGADIgGAEQgEgEAAgDIADgKIAAgDIAAgDIADgBIAHgBIgBgBQgEgCgHgBIACgHIAEgFQAEgCAAgDIgJgFIAAgDIgBgHIABgBIABgFIgCgDIAAgHIgCgDQgBgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgBgBIgEgCIgEgGQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAQgCABgEACQgFAEgEABIgEgBIgDACIAAAAQgDgGgDAAIgBAAIgEACQgDABgFACIgIAGQgCADAAADIAAAJIAAABQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgGAEIgBACQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABIAGACIABADIgBADIABAKIgDAEIAAABQAAADADADIgBAAIABAFQAAAHACAFIgDADIgEABIgCABIgCABIgDACQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgCgCg");
	this.shape_136.setTransform(273.675,331.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgeA0IgDgCIgGgBQgCgBgIgFIgFgDIgCgDIgBgCIgCgCIgBgCQgDgEAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQgBgDgDgBIAAgBIABgNIAEgKIAGgLIAHgFIACgEIACgDIAKgFQADgCAEgEIAQgGQAIgDAPAAIAIABIABADIADACQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABgBQAHACAGAEIAEADIADAFQADAEAGAAIAFAIIABAJIACAKIgDAAIAAABIgCAEQAAABADACIAAAIIgCAFIgHAPQgIAJgGACIgHADIgHAEIgHADIgNABIgIACIgKAAIgEAAIgPgCgAgUAqQAFACAFAAIAIAAIADABIAEABIAHgBIAIgBIAJgGIAGgDIAFgIIAEgHIAEgEIAAgCIgCgFIABgDIABgJIgCgIIgCgHIgBgGIAAAAIgEAAIgGgJIgDgEIgCgBIgHgDQgCgFgDAAIgEACIgFgBIgIAAIgHADIgDgCIgDADIgGADIgBABIgQAOIgCABIAAAFIgDAFQgBAEgDACIABACQAAADgFABIABADQAEADAAABQAAABgFADIAAABIABABIADgBIACAHIAHAMIAAABIgBAEQAAAAAAABQAAAAABAAQABAAAAABQABAAABAAIACgCIAMAGg");
	this.shape_137.setTransform(258.575,331.775);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgpAzIADgIIAAgBIgBgGIABgDIADgBIAAgCQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBgBAAIAAgEIgBgGIABgIQAFgBAAgEIgBgCIgCABIgDgBIAAgFIAAgDIAAgEIAAgBIAAgDIAAgBIACgHIgCgCIgBgJQAAgCgDgDIADgFIAHgEIAHgEQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAIABADIABAEIAAACIABADIAHgEIAGgCIAGgDIADgCIADgBIADAAIAAAAIAKgDIAEAAIADABIADACIACABIAEgCIAAAAQABAAAAAAQABAAAAABQABAAABAAQAAABABAAQACACABAEIgJAHIgEADQgCAAgEgEIgEAAIgGgBIgGgCQgCACgDABIgEABIgFABIgCgBIgKAIQgEACAAAJIAAAAIAAAEIAAAFQAAABgDADQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAIAAABIACABIAAAEIABAYIAAACIgEACIgIACIAJACIACgBIACAHQAAACgDACIgHACIgGADIgCABQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_138.setTransform(247.175,331.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgeA0IgDgCIgGgBQgCgBgIgFIgFgDIgCgDIgBgCIgCgCIgBgCQgDgEAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQgBgDgDgBIAAgBIABgNIAEgKIAGgLIAHgFIACgEIACgDIAKgFQADgCAEgEIAQgGQAIgDAPAAIAIABIABADIADACQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABgBQAHACAGAEIAEADIADAFQADAEAGAAIAFAIIABAJIACAKIgDAAIAAABIgCAEQAAABADACIAAAIIgCAFIgHAPQgIAJgGACIgHADIgHAEIgHADIgNABIgIACIgKAAIgEAAIgPgCgAgUAqQAFACAFAAIAIAAIADABIAEABIAHgBIAIgBIAJgGIAGgDIAFgIIAEgHIAEgEIAAgCIgCgFIABgDIABgJIgCgIIgCgHIgBgGIAAAAIgEAAIgGgJIgDgEIgCgBIgHgDQgCgFgDAAIgEACIgFgBIgIAAIgHADIgDgCIgDADIgGADIgBABIgQAOIgCABIAAAFIgDAFQgBAEgDACIABACQAAADgFABIABADQAEADAAABQAAABgFADIAAABIABABIADgBIACAHIAHAMIAAABIgBAEQAAAAAAABQAAAAABAAQABAAAAABQABAAABAAIACgCIAMAGg");
	this.shape_139.setTransform(233.275,331.775);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgZCAIABgEIAAgFIABgDIAAgHIABgFIABgFIADgGIgCgEIAAAAIABgGIAAgIIAAgIIACgCIgBgCIABgFIgCgCIAAAAIAAgCIAAgXIABgEIAAgGIAAgFIgBgGIAAgDIABgGIABgCQAAgBAAAAQAAAAABAAQAAgBABAAQABAAAAAAIAAgDIgEABIgBgEIABgFIAAgDIgCgBIAAgEIAAgaQgBgCAGgDQAFgCAAgCIgFgDIgFgEQAAgBABAAQAAgBABAAQAAAAAAAAQAAgBAAAAIgBgFIAAgBIAAgEQgEgEAAgGIADgEIgCgFIgBAAQABgEAMgGIABAAIgMgDQgBgBAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgBQgEgCgJAAIgIgBIgBAAIgGABIgLAAIgCAAIgEgBIgBAAIgDAAIgHgDIgCABIgCABIgGACIgGgBIgHABIgGAAIgGAAIgGgBIgCAAIgJABIAAgBIAAgBIACgDIADgDIANgHQADgCAGAAQAFAAAIAFIAEAAIANACIAQABIAGAAIADAAIAMAAIAFAAIAUABIAFgBIABgBIAFABIAHABIAFACQAGgDADAAIAJABIAFAAIAFABIAEgBIAKABIAHgBIADAAIAFABIAFABIABAAIACgDIAGAAIAJgBIAEAGIACgEIAFgBIAHgDIABAAIACABIADAGIAHgHIADgBIADgCQABABABAAQAAAAABAAQAAABAAAAQABAAAAABIgDADIgBACIgDACIgDAEIgEACIgGACIgDgBIgFgBIgEABIgDAAIgHgBIgGgBIgKACIgFAAIgPgBIgGABIgIgFIgEAFIgDgBIgEAAIgGgBIgCABIgDAAIgJAAIgDgBIgEABIAAACIgDAFIgFAHIgDAEIgCAEQgBAEAJADQABAAABABQAAAAABAAQAAABAAAAQAAAAAAABIAAADIgBADIgDAAIABAFIADABIAAAEIAAAFIAAAEIAAAOIAAAGIABAHIAAAFQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAIgBABIgDACIAAABIgBABIAEACIAAAEIACACQgLAHABAEQAAAGAKAEIgBAEIAAAGIAAACIAAAEIABABIgBAHIAAABIABAEIAAAJIABAFIgCAGIAAADIAAABQgEAAABACIAAABIAAADIADgCIABAFIABACIgBACIAAADIABALIgCAMIAAAFIACAIIgBAFIgEACIgEACIgCACIgDAAIgLAGQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_140.setTransform(212,328.35);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgwAzIgBgCIAAgDIABgEIAAgKIABgFIAAgDIgBgFIAAgCIABgCIgBgGIAAgDIABgFIAEgBIgBgBIgEgBIAAgEIAAgEIAAgCIgBgMIADgBIgDgEIgBgEQAAgCgDgEQABgFAGgCQAGgFADgBQABAAABABQABAAAAAAQABAAAAABQAAAAAAAAIABAIIADAHQAFgGABAAIAFgDQAGgFABABQABAAAAAAQAAAAABAAQAAABABAAQAAABABABQAHgGAHAAIACAAIADABIAGgCIAIABIAHACIADACIADABQADAAAFAIQADAEAAAQIgHABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABAAAAIAJAFQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIgCAHIAAABIACAFIAAAEIACAHIAAAIIABAHIgBAFIACAFIgGADIgGADIgGAEQgEgEAAgDIADgKIAAgDIAAgDIADgBIAHgBIgBgBQgEgCgHgBIACgHIAEgFQAEgCAAgDIgJgFIAAgDIgBgHIABgBIABgFIgCgDIAAgHIgCgDQgBgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgBgBIgEgCIgEgGQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAQgCABgEACQgFAEgEABIgEgBIgDACIAAAAQgDgGgDAAIgBAAIgEACQgDABgFACIgIAGQgCADAAADIAAAJIAAABQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgGAEIgBACQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABIAGACIABADIgBADIABAKIgDAEIAAABQAAADADADIgBAAIABAFQAAAHACAFIgDADIgEABIgCABIgCABIgDACQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgCgCg");
	this.shape_141.setTransform(185.625,331.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgeA0IgDgCIgGgBQgCgBgIgFIgFgDIgCgDIgBgCIgCgCIgBgCQgDgEAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQgBgDgDgBIAAgBIABgNIAEgKIAGgLIAHgFIACgEIACgDIAKgFQADgCAEgEIAQgGQAIgDAPAAIAIABIABADIADACQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABgBQAHACAGAEIAEADIADAFQADAEAGAAIAFAIIABAJIACAKIgDAAIAAABIgCAEQAAABADACIAAAIIgCAFIgHAPQgIAJgGACIgHADIgHAEIgHADIgNABIgIACIgKAAIgEAAIgPgCgAgUAqQAFACAFAAIAIAAIADABIAEABIAHgBIAIgBIAJgGIAGgDIAFgIIAEgHIAEgEIAAgCIgCgFIABgDIABgJIgCgIIgCgHIgBgGIAAAAIgEAAIgGgJIgDgEIgCgBIgHgDQgCgFgDAAIgEACIgFgBIgIAAIgHADIgDgCIgDADIgGADIgBABIgQAOIgCABIAAAFIgDAFQgBAEgDACIABACQAAADgFABIABADQAEADAAABQAAABgFADIAAABIABABIADgBIACAHIAHAMIAAABIgBAEQAAAAAAABQAAAAABAAQAAAAABABQABAAABAAIACgCIAMAGg");
	this.shape_142.setTransform(170.525,331.775);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgGBOQgEAAgFgFIgDgEIgBgEIgCgFIAAgEIABgJQAAgFACgCIgBgGIgBgYQAEgCAAgCIgBgDIgEgBIAAgBIAAAAIABgCIAAgMIgIgBIgHAAIgDABIgEABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAgDAGgDQABgFADAAIAGAAIABAAIAIgBIAAgDIAAgVQAAgEgCgDIgBgDIgBgCQAAgCAEgDQAFgEAIgCQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAIACABQABACAAADIgBAWIgCAGQAAACgDACIABAGIADAAIgBAHIAOADIAEAAIAIgBIAJgBIAIgDIAFAAIgBAGQgBACgIAFIgCACIgCACIgEABIgDgBIgFgDIgEAAIgEgDIgHAFIgFgBIgDABIABALIAAAGQgFABAAADIABADIAFABIAAARIgEgBQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABAAAAIABAEIADgBQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIAAAFIAAAJIACAFIABADIAAABIAAADQAEADAFAAQAEAAAFgCIAEgDIAHgGIAHgFIADABIAAAEIgCAIIgIAEIgRAGIgFACIgFACQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAIgCgBIgBAEIgDAAg");
	this.shape_143.setTransform(157.925,329.375);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgJBzIAAgDIgBgEIAAgCIABgFIAAgDIABgEIAAgDIAKgHIgKgHIAAgCIABgFIABgDIgCgGIAAgBIACgGIABgHIgDgCIAAgEIAAgFIABgFIABgDIgBgLIAAgDIABgGIABgHIgCgCIAAgeIACgEIACgEIgEgDIABgFIgDgCIAAgGIAAgFIACgEIAAgBIgBgDIgBgDIAAgBIAJgHIgGgJQgGgHAAgCIABgEIABgFIAEgBIAEgDQAEgCACgDIABAAQABAAABAAQABAAAAABQABAAAAABQAAABAAABIAAAAIAAACIAAAAIABAFIAAAMIgBALIgCAEIgBAEIADAAIABAGQgBACgCADIgBAFQAAAAABABQAAAAAAAAQAAABABAAQAAABABAAIAAAEIgBARIAAARIgDAGIgBACIACAHIAAABQAAABgDADIADAGIACABIAAAIIABAgIgDABIAAAFIgBAGIAAAEIAFABIAAABIACAWIgBAGIABAEIgCAFIABABIgIAFIgDABIgCABQgDACgCAAIgCgBg");
	this.shape_144.setTransform(150.05,325.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgNBWIABgEIABgGIAAgHIABgNIAAgCQAAgBABgBQAAAAAAAAQAAgBABAAQAAAAABAAIABAAIABgDIgBgEIgBgEIgDgBIABgFIAAgCIAAgCIABgEIgBgEIAAgBIAAgBIgBgCQAJgCAAgCIAAAAQgCgBgDgBIgFAAIAAgCIgBgNQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAgDADgDQAJgHAGgCIAFAEIgDAKIgBAGIAAAEIgCADQAAADADAEIgBABIAAAHIAAACIAAADIgBAaIACAKIAAAFIABAFQAAADgCACIgFAEIgHAFIgDABIgDgCgAgMg9QAAgFAHgFIADgEIACgCIAGgJIAEgBIADACQACACAAADQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgMAKIgDADIgEADIgFACQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_145.setTransform(144.55,328.25);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AhtCBIACgIIAAgFIACgKIAAgQQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAIACgCIABgCIAAgEIgCAAIgBgEIABgFIAAgHIACgHIAEgBIgBgJIgDAAIgBgKIgBgJIABgJIAAgGIAAgFIAAgGQAAgDADAAIAAgFIAAgEIgEgDIABgHIAAgDIgBgHIAAgDIAAAAIAAgPIAAgCIABgCIACAAIAAgDIgDgGIAAgCQAAgCACgEIgDgBIgBgEIADgBIAAgEQgDgCAAgDIgBgHIAAgEIABgCIgBgFIABgDIgCgDIgBgEIgDgBIgDgCIACgCIAGgDQAGgEAEgBQAGgCAFgEIAAgBIADACQAAABAAAAQgBABAAAAQAAABgBABQAAAAgBABIAEABQgGAEAAACIgEALIgEADIALAEIgBABIAAAAIgDgBIAAADIADABIABACIAAAVIAAADIAAADIAAABIgCAEQABAAABABQAAAAABABQAAAAAAABQAAAAAAAAIAAAEIAKgDQAGAAAHADIAFAFIAIACIAPgFIAAAAQABADACABIADgCIADAAIACgBIACAAIACgBIAAgBIADABIAEABIAFgBIALAAIAEAAIADAAIAJAAIAEgCIAEABIAEgBIAEAAIAFgCIAEACIADAAIADABIAEABIAFgFQABgBAJAAIAGAAIADAAIAFAAIAEAAQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBIACgFIgEgHIACgFIgBgGIABgCIgCgDIABgEIAAAAQAAAAAAgBQAAAAAAAAQgBgBgBAAQAAAAgBgBIAAgBIABgEIAAgFQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBgBIABgBIAAgDQgFgBAAgCIABgDIAEgCIAGgDIAEgDIAEgBIAHgCIACAAIAAASIgCAIIgDAAIgBAEIAAADIADACIABABIACADIgBAGIAAABIAAAGQAAALgBAEQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAIgDAFIgBAHIADAAIAAAbIgCAFIgBADIADADIgBADIAAADIgCABIgBAAQAAABAAABQAAABAAAAQABABAAAAQAAAAAAABIADABIgBAIIAAACIABAHIgBAEIgDgBIAAABIACACIACAWQgEACAAACQAAAFAEADIgBAFIABAHIAAADIAAAFIAAAEIAAADIAAABIgKAEIAKAEIAAAEIABACIgBABQgLAEAAAEQAAAEAJADQAGACAAACIgEADIgJAEIgDABIgHAFIgEABQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAAAIAAgJIgBgDIAEgFIAAgIIAAgFQABgFADgBIAIgFQgKgDAAgBIAKgGIgJgJQACgEAAgDIgBgDIgBgDIABgYIAAgBQADgDAAgCIgBgDIgBgDIgEgBIABgGIABgSIAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIABgFQgBgBAAAAQgBgBAAAAQAAgBgBgBQAAAAAAgBIAAgEIAAgEIAAgGIABgGQABgGAEgBIABgDIgBAAIgEgCIgNABIgFAAIgJgBIgGAAIgJAAIgCABIgGAAIgGABIgEgCIgFgDIgEADQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgKAAIgDAAIgKABIgOABIgEgBIgHADIgKgBIgEgHIgGAHIgGgBIgEABIgEAAIgHAAIgEAAIgHAAIgCAAIgDABIAAAUIABAKIAAAEIAAABIAAABIAAAHIAAABIgBACIAAAFIAAADIABAJQAAADgDAHIACAEIABABIAAACIABACIAAAGIgDADIAAAJIAAAGIAAADIAEADIgCAKIAAAEIAAAJIAAAZIAAACIgCABIACADIgEACQgEAEgGADIAAgBIAAAAQgFAAAAABIgCADIgFAAIAAgGg");
	this.shape_146.setTransform(127.425,327.65);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgwAzIgBgCIAAgCIABgGIAAgJIABgGIAAgCIgBgEIAAgDIABgCIgBgGIAAgDIABgEIAEgCIgBgBIgEgBIAAgEIAAgEIAAgCIgBgLIADgCIgDgEIgBgEQAAgCgDgEQABgEAGgDQAGgGADABQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABIABAIIADAGQAFgGABAAIAFgDQAGgEABAAQABAAAAAAQAAAAABAAQAAABABAAQAAABABAAQAHgFAHAAIACABIADAAIAGgCIAIACIAHABIADACIADABQADAAAFAHQADAFAAAPIgHABQgBABAAAAQgBABAAAAQgBAAAAAAQAAABAAAAIAJAFQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIgCAHIAAABIACAEIAAAFIACAHIAAAHIABAIIgBAFIACAFIgGADIgGADIgGAEQgEgEAAgDIADgLIAAgCIAAgCIADgBIAHgCIgBgBQgEgCgHgBIACgIIAEgDQAEgEAAgDIgJgDIAAgEIgBgIIABgBIABgDIgCgEIAAgGIgCgFQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgBgBIgEgCIgEgGQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAQgCAAgEADQgFAFgEgBIgEgBIgDADIAAAAQgDgGgDAAIgBABIgEABQgDAAgFADIgIAGQgCADAAAEIAAAJIAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgGAFIgBABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAIAGADIABADIgBACIABALIgDAEIAAACQAAACADACIgBABIABAFQAAAHACAFIgDAEIgEAAIgCABIgCABIgDABQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgCgCg");
	this.shape_147.setTransform(459.175,285.65);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgeA0IgDgCIgGgBQgCgBgIgFIgFgDIgCgDIgBgCIgCgCIgBgCQgDgEAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQgBgDgDgBIAAgBIABgNIAEgKIAGgLIAHgFIACgEIACgDIAKgFQADgCAEgEIAQgGQAIgDAPAAIAIABIABADIADACQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABgBQAHACAGAEIAEADIADAFQADAEAGAAIAFAIIABAJIACAKIgDAAIAAABIgCAEQAAABADACIAAAIIgCAFIgHAPQgIAJgGACIgHADIgHAEIgHADIgNABIgIACIgKAAIgEAAIgPgCgAgUAqQAFACAFAAIAIAAIADABIAEABIAHgBIAIgBIAJgGIAGgDIAFgIIAEgHIAEgEIAAgCIgCgFIABgDIABgJIgCgIIgCgHIgBgGIAAAAIgEAAIgGgJIgDgEIgCgBIgHgDQgCgFgDAAIgEACIgFgBIgIAAIgHADIgDgCIgDADIgGADIgBABIgQAOIgCABIAAAFIgDAFQgBAEgDACIABACQAAADgFABIABADQAEADAAABQAAABgFADIAAABIABABIADgBIACAHIAHAMIAAABIgBAEQAAAAAAABQABAAAAAAQABABAAAAQABAAABAAIACgCIAMAGg");
	this.shape_148.setTransform(444.075,285.725);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgeA0IgDgCIgGgBQgCgBgIgFIgFgDIgCgDIgBgCIgCgCIgBgCQgDgEAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQgBgDgDgBIAAgBIABgNIAEgKIAGgLIAHgFIACgEIACgDIAKgFQADgCAEgEIAQgGQAIgDAPAAIAIABIABADIADACQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABgBQAHACAGAEIAEADIADAFQADAEAGAAIAFAIIABAJIACAKIgDAAIAAABIgCAEQAAABADACIAAAIIgCAFIgHAPQgIAJgGACIgHADIgHAEIgHADIgNABIgIACIgKAAIgEAAIgPgCgAgUAqQAFACAFAAIAIAAIADABIAEABIAHgBIAIgBIAJgGIAGgDIAFgIIAEgHIAEgEIAAgCIgCgFIABgDIABgJIgCgIIgCgHIgBgGIAAAAIgEAAIgGgJIgDgEIgCgBIgHgDQgCgFgDAAIgEACIgFgBIgIAAIgHADIgDgCIgDADIgGADIgBABIgQAOIgCABIAAAFIgDAFQgBAEgDACIABACQAAADgFABIABADQAEADAAABQAAABgFADIAAABIABABIADgBIACAHIAHAMIAAABIgBAEQAAAAAAABQAAAAABAAQABABAAAAQABAAABAAIACgCIAMAGg");
	this.shape_149.setTransform(428.225,285.725);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgwAzIgBgCIAAgCIABgGIAAgJIABgGIAAgCIgBgEIAAgDIABgCIgBgGIAAgDIABgEIAEgCIgBgBIgEgBIAAgEIAAgEIAAgCIgBgLIADgCIgDgEIgBgEQAAgCgDgEQABgEAGgDQAGgGADABQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABIABAIIADAGQAFgGABAAIAFgDQAGgEABAAQABAAAAAAQAAAAABAAQAAABABAAQAAABABAAQAHgFAHAAIACABIADAAIAGgCIAIACIAHABIADACIADABQADAAAFAHQADAFAAAPIgHABQgBABAAAAQgBABAAAAQgBAAAAAAQAAABAAAAIAJAFQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIgCAHIAAABIACAEIAAAFIACAHIAAAHIABAIIgBAFIACAFIgGADIgGADIgGAEQgEgEAAgDIADgLIAAgCIAAgCIADgBIAHgCIgBgBQgEgCgHgBIACgIIAEgDQAEgEAAgDIgJgDIAAgEIgBgIIABgBIABgDIgCgEIAAgGIgCgFQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgBgBIgEgCIgEgGQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAQgCAAgEADQgFAFgEgBIgEgBIgDADIAAAAQgDgGgDAAIgBABIgEABQgDAAgFADIgIAGQgCADAAAEIAAAJIAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgGAFIgBABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAIAGADIABADIgBACIABALIgDAEIAAACQAAACADACIgBABIABAFQAAAHACAFIgDAEIgEAAIgCABIgCABIgDABQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgCgCg");
	this.shape_150.setTransform(413.175,285.65);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgpAzIADgIIAAgBIgBgHIABgCIADgBIAAgCQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBgBIAAgDIgBgGIABgIQAFgBAAgDIgBgDIgCABIgDgBIAAgFIAAgDIAAgEIAAgBIAAgCIAAgDIACgFIgCgDIgBgJQAAgBgDgEIADgFIAHgEIAHgEQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABIABACIABAEIAAACIABADIAHgDIAGgDIAGgDIADgBIADgCIADABIAAAAIAKgEIAEAAIADABIADADIACAAIAEgCIAAAAQABAAAAAAQABAAAAAAQABABABAAQAAAAABABQACACABAEIgJAGIgEAEQgCAAgEgEIgEAAIgGgBIgGgCQgCADgDAAIgEAAIgFACIgCgBIgKAIQgEADAAAHIAAABIAAAFIAAADQAAACgDADQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAIAAABIACABIAAAEIABAZIAAABIgEACIgIACIAJACIACgBIACAGQAAAEgDACIgHABIgGADIgCAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_151.setTransform(402.525,285.55);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AAEA0IgEABIgCAAIgFABIgKgBIgCgBIgDgBIgMgEIgEgEIgFgDQgEgCAAgCIgDgEIgEgFIABgDIgDgIQgBgCAAgJIABgJIADgGIAEgGIADgGIALgLIAKgFIAKgIIAEAAIAKgDIAGgBIAJgDQAIAAACAHIAFgCIADACIACACIAMALIAFAHIACAHIACAEIgBABIgEgBIgFACIgFgBIgEABIgJgGIgGAGIgKgCIgFAAIgBAAIgKAAIgGAAIgGACIgGABIgGgBIgLADIgBAHIgDADIAEAFIADALIACABIAAAGIAEABQABAFACACQACACAFABQABAEABAAQABACAEAAIADADIACAAIAIADIADABIAHgCIAJgBIAGgBIAHgBIAIgFIAHgFIAFgHQAAAAABAAQAAAAAAgBQABAAABAAQAAAAABAAIADABIgBAHIgIANIgDgBIgEADQgDACgDAAIgMADIgHAAIgFACgAgEgnIgHACIgKAEIgGAFIgDACIAAABIAKAEIADADIAGgHIABAAIAHACIAAAAIAHgCIAEAAIADADIADgBIAIgCIAIAAIAAgBIAAgBIgBgDIgCgBQgDgFgBAAIgEgCIgDgDIgNgBIgDAAg");
	this.shape_152.setTransform(389.325,285.45);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgGBOQgEAAgFgFQgCgCgBgCIgBgEIgCgFIAAgEIABgJQAAgFACgCIgBgGIgBgYQAEgCAAgCIgBgDIgEgBIAAgBIAAAAIABgCIAAgMIgIgBIgHAAIgDABIgEABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAgDAGgDQABgFADAAIAGAAIABAAIAIgBIAAgDIAAgVQAAgEgCgDIgBgDIgBgCQAAgCAEgDQAFgEAIgCQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAIACABQABACAAADIgBAWIgCAGQAAACgDACIABAGIADAAIgBAHIAOADIAEAAIAIgBIAJgBIAIgDIAFAAIgBAGQgBACgIAFIgCACIgCACIgEABIgDgBIgFgDIgEAAIgEgDIgHAFIgFgBIgDABIABALIAAAGQgFABAAADIABADIAFABIAAARIgEgBQAAAAgBAAQAAABgBAAQAAAAAAAAQAAABAAAAIABAEIADgBQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAAFIAAAJIACAFIABADIAAABIAAADQAEADAFAAQAEAAAFgCIAEgDIAHgGIAHgFIADABIAAAEIgCAIIgIAEIgRAGIgFACIgFACQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAIgCgBIgBAEIgDAAg");
	this.shape_153.setTransform(377.475,283.325);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgeBwIABgFIABgDIABgEIACgJIAAgIQADgCAAgCIgBgGIgCgHIAAgFIAAgXQAAgFACAAIAFgDIAAgCIgCgBIgCABIgCgBIgFgGIgGgBIgEgBQgDAAgHAHIgBgBIAFgIQADgEADAAIAHABIAGgEIAAgGIAAgNQAAgDADgGIgEgDIAAgOIAAgKIAAgHQAAgCACgDIAEgHIgBgCIgCgBQABgJAIgLIAGgHIAJgHIAMgHIADgCIAEgBIAIgCIAEACIACAAIACAAIADgBQAFAAAEAEIAEAAIgBAEIgDADIgDAEQgCACgFABIgJgFQgFgDgFAAQgEAAgIAEIgFAFQgDAGgDALIgCADIgCAIIgCAFQAAAAAAAAQAAABAAAAQABAAAAABQABAAAAAAIgBAGIAAAGIAAAKIgCAGIAAADIACAGQABACAAATQAAABgFAEIAAABIAEACQACABABAGIAFAEIAFACIAIACIAJgEIAKgCIAHgEIAGgBQACADABADIgKAGIgEAEIgCABIgFgBIgFgBIgHABIgFAAIgIgBIgFgBIgDACQgBAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABIABAGIABANIgBACQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAACADADIABAEQAAAOACAEIgCACIgCgBIgCACIACADIACAEIAAAAIAAAEIAAABIABAGIgCABIAAAEIgLAEIgFABIAAAAIgDABIgDgCg");
	this.shape_154.setTransform(367.825,279.475);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgdA0IgGgBIgEgCQgFgCgCgCQgCgBgBgDIgEgCIgBgEIgBgHIABgDIAFgIIAIgIIAJgEIAFgDIACAAIAEgCIAIgCIAGgEIAHgBIAFgBIACAAIADAAIAGAAIAKgCIAHgBQACgCgBgEIAAgDIAHgJIgIgEIgFAAIgHgIIgKgCIgEAAIgFgBIgCAAIgCgCQgDABgCABIgEADQgIADgEADIgCACIgCADIgEABIgFgCIgGgCIgDgDIADgCIAEgDIAGgBIAEgDIAJgCIAFgDIAGAAIAGgCIACAAIAFAAIAIAAIAHACIAEAAIAHACQACAAADADQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIADgBIAEgCQACADAAADIADABIABACIgBAGQACAGACACIAAAAIABAGIAAALQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQABABAAAAQABABABAAIAAADIAAAFIgBADIACALQgDADABACQgBACADADIABADIABAEIgCADIgEACIgFADIgDABIgGABIgDgBIACgJIgLAEIgFAAIgDABIgFAAIgFADIgDAAIgKACIgGAAIgGABIgKgBgAgZApIAGACIABACIAFABIACAAIADgCIAEACIADgCIACABIAIgDIAEgBIADAAIAEgCIAGgDIADgDIAFgDIABgEQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBIgDgDIAAgDIAAgCIAAgGIAAgCIABgFIgDgBIgGAAIgFAAIgEAAIgDAAIgEgCIgDABIgIABIgBAAIgEAAIgFABIgHADQgIAEgEADIgDAFIgFABIAAACIAAACIABAHIACAEIgCADQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAAAIABADIAFgEQAEAEACAAg");
	this.shape_155.setTransform(355.2,285.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AAEA0IgEABIgCAAIgFABIgKgBIgCgBIgDgBIgMgEIgEgEIgFgDQgEgCAAgCIgDgEIgEgFIABgDIgDgIQgBgCAAgJIABgJIADgGIAEgGIADgGIALgLIAKgFIAKgIIAEAAIAKgDIAGgBIAJgDQAIAAACAHIAFgCIADACIACACIAMALIAFAHIACAHIACAEIgBABIgEgBIgFACIgFgBIgEABIgJgGIgGAGIgKgCIgFAAIgBAAIgKAAIgGAAIgGACIgGABIgGgBIgLADIgBAHIgDADIAEAFIADALIACABIAAAGIAEABQABAFACACQACACAFABQABAEABAAQABACAEAAIADADIACAAIAIADIADABIAHgCIAJgBIAGgBIAHgBIAIgFIAHgFIAFgHQAAAAABAAQAAAAAAgBQABAAABAAQAAAAABAAIADABIgBAHIgIANIgDgBIgEADQgDACgDAAIgMADIgHAAIgFACgAgEgnIgHACIgKAEIgGAFIgDACIAAABIAKAEIADADIAGgHIABAAIAHACIAAAAIAHgCIAEAAIADADIADgBIAIgCIAIAAIAAgBIAAgBIgBgDIgCgBQgDgFgBAAIgEgCIgDgDIgNgBIgDAAg");
	this.shape_156.setTransform(335.225,285.45);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgxByIACgKIAAgFIACgDIABgEIgBgCIgCgDIAAAAIABgIIAAADIAAgDIAAgGIAAgCIAAgBIAAgGIAAgKIAAgIIABgDIAEgDIABgCIgBgEIgEAAQgBgGAAgJIAAgVIAGgBQgCgDgBgEIgDgBIAAgHIAAgEIgCgOQABgDACgCQAGgEAAgBQgCgDgHAAIAAgGIACgFQAAgCgCgCIAAgGIAAgFIgBgGIABgGIgDgMIAAgDIgDgDQACgCAEgCIAJgFQAEgCADAAIADACIgHAEIgFAFIAKAKIABADIgBAEIgCADIgCABIgBACIgBACIAAADIAEgBIADgBIgBAYIAAADIAAAEQAAADgEADQAAABABAAQAAABAAAAQAAABAAAAQAAAAABABIACACIABADIgCAHIABAGIABAIIgCAEIABAGIAAACIABAEIAAACQgCAHAAAHIABAGQAIgEAKgKIAFABQAEgCADgBIAHgBIADACIACADIADAAIACgDIABgCIAJABQAMABABABIAEAFQACACAFABIgCAFIAEABQADAEAAAEIgBAJQAAAFgCABIgBACIACAFIgDAEIAAABIADADIAAADIAAADIAAAJIAAABIgCAFIACAKIgBALIABACQgEACgEAAIgEADIgGACIgEgEIACgHQACgGAAgFIgCgGIABgCIABgGIADgLIgDgBIABgQIABgCIAAgBIgBgGIAAgBIABgDIgCgEIgDgEIgFgCIgGgDIgGAAIgJgBIgDABIgGAAIgKABIgCAAIgIAFIgFACIgKAKQAAADAJABIgBAFIgBAPIgEABIAAABQADADACAEIAAALIABAEIgBAHIABADIAAADIAAACIgBACIgJAEIgHAEg");
	this.shape_157.setTransform(320.75,279.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgGBOQgEAAgFgFQgCgCgBgCIgBgEIgCgFIAAgEIABgJQAAgFACgCIgBgGIgBgYQAEgCAAgCIgBgDIgEgBIAAgBIAAAAIABgCIAAgMIgIgBIgHAAIgDABIgEABQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAgDAGgDQABgFADAAIAGAAIABAAIAIgBIAAgDIAAgVQAAgEgCgDIgBgDIgBgCQAAgCAEgDQAFgEAIgCQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAIACABQABACAAADIgBAWIgCAGQAAACgDACIABAGIADAAIgBAHIAOADIAEAAIAIgBIAJgBIAIgDIAFAAIgBAGQgBACgIAFIgCACIgCACIgEABIgDgBIgFgDIgEAAIgEgDIgHAFIgFgBIgDABIABALIAAAGQgFABAAADIABADIAFABIAAARIgEgBQAAAAgBAAQAAABgBAAQAAAAAAAAQAAABAAAAIABAEIADgBQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAAFIAAAJIACAFIABADIAAABIAAADQAEADAFAAQAEAAAFgCIAEgDIAHgGIAHgFIADABIAAAEIgCAIIgIAEIgRAGIgFACIgFACQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAgBAAAAIgCgBIgBAEIgDAAg");
	this.shape_158.setTransform(309.025,283.325);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgwAzIgBgCIAAgCIABgGIAAgJIABgGIAAgCIgBgEIAAgDIABgCIgBgGIAAgDIABgEIAEgCIgBgBIgEgBIAAgEIAAgEIAAgCIgBgLIADgCIgDgEIgBgEQAAgCgDgEQABgEAGgDQAGgGADABQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABIABAIIADAGQAFgGABAAIAFgDQAGgEABAAQABAAAAAAQAAAAABAAQAAABABAAQAAABABAAQAHgFAHAAIACABIADAAIAGgCIAIACIAHABIADACIADABQADAAAFAHQADAFAAAPIgHABQgBABAAAAQgBABAAAAQgBAAAAAAQAAABAAAAIAJAFQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIgCAHIAAABIACAEIAAAFIACAHIAAAHIABAIIgBAFIACAFIgGADIgGADIgGAEQgEgEAAgDIADgLIAAgCIAAgCIADgBIAHgCIgBgBQgEgCgHgBIACgIIAEgDQAEgEAAgDIgJgDIAAgEIgBgIIABgBIABgDIgCgEIAAgGIgCgFQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgBgBIgEgCIgEgGQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAQgCAAgEADQgFAFgEgBIgEgBIgDADIAAAAQgDgGgDAAIgBABIgEABQgDAAgFADIgIAGQgCADAAAEIAAAJIAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgGAFIgBABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAIAGADIABADIgBACIABALIgDAEIAAACQAAACADACIgBABIABAFQAAAHACAFIgDAEIgEAAIgCABIgCABIgDABQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgCgCg");
	this.shape_159.setTransform(290.875,285.65);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgNBXIABgFIABgGIAAgHIACgNIAAgDQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIABABIABgEIgBgEIgBgEIgCgCIAAgEIAAgCIAAgCIABgEIgBgDIAAgCIAAgBIAAgDQAIgBABgBIgBgBQgCgCgDAAIgFAAIAAgCIgBgMQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAgBgBQAAgCAEgDQAJgHAGgCIAFAEIgDAKIgBAGIAAAEIgCADQAAAEADADIgBACIAAAHIAAABIAAADIgBAaIACAJIAAAGIACAFQAAADgDACIgFAEIgHAGIgCAAIgEgBgAgMg9QAAgFAHgGIADgDIACgCIAGgJIAEgBIADACQACACAAADQAAABAAAAQAAAAAAABQAAAAgBABQAAAAgBAAIgMALIgDACIgEADIgFACQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_160.setTransform(281,282.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AA0A1IgBgGIACgIIAAgDIgBgFIAAgCIABgJIABgGIADgGIgEgEIAAgBIAFgDIADgBIgIgFQADgEABgFIgEgDIgDgOIgHgJQgBgDgHAAIgFABIgFADIgDABIgCACIgGAEIgDAGIAAAJQgBABgBAAQgBABAAAAQgBAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAABABAAQAAABABAAIABAIIABAJIgBAFIgEAAIgBABIAEAEIAAADIAAADIAAAEQACAHABAJQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAIgGAEIgHACIgBAAIgBgDIAAgGIABgLIAAgJIABAAIACgCIgBgEIgBgFIgCgEIAAgCIABgGQAEgDAAgCQAAgCgEgBIgBgPIgCgJQgDgDgDAAIgEABIAAgBIgDgDIgDACIgHABIgIAEIgEAAQgEAFgCAFIAAADIAAAGIgBAGIABAEIgBAHIgEACIAEAGIAAAHIAAAEIAAACIABAJIAAAMIgKAFIgEABIgEAAIAAgBIAAgFIAAgHIAAgIIAAgCIADgFIAAgBQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAgFIADgGIABgFIgDAAIgBgFIABgLIABAAIABgBIgBgDQAAgGgCgCIgBgJIgBgJIgEAAQABgDACgCIALgHIACgCIACACIADACIAAADIABAFIAAAGIAAAAIAEgBIAFgEIADgBIACgDQAGgDADgBQAHgBACgCIACAAQADAAAAAFIADAAIAAgDIAHgCIADgBQADAAADAEIAEAJQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAIADgEIAGgEIAKgFIAFABIAEgBIAIAAIADgBIAGACIAEABIAGAEIAAAEQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAAAIABACIACAAIABAJIABAEIAAAOIAAACIgDAGIAAACIACAGIAAACIAAAEIAAABIAAAKIgCACIAAACIABAAIABACIAAAEIAAADQAAADADAEQgEADgFACIgIAFIgEAAg");
	this.shape_161.setTransform(262.8,285.65);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("Ag4BuIgDgBIAFgDQABgBAAgEIAFgJIgKgMIAAAAIACgDIgBgIIACgBIACgDIgCgDIgCgCQAIgDAAgBQAAgBgHgDIgBAAQAHgDAAgBIgFgKQgCgDAAgDIACgSIACgBIgBgIQgEgBAAgEIABgLIAAgHIAAgVIACgDIgBgGIABgBQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBgBIAAgEIAAgEIAAgEIAAgBIgBgGIABgCIAAgBIgCgOIgEgEIABgCIADgDIAGgFIAJgFQACAAADAFIgBACIABADIAMgGIADAAIAGgCQAFAAADACQACgEAKgBIARAAIADAAIACAAQACAAADAEIAHACQAIADADADIABADIABADIAGgBQAFAFABAEQADAIABAKIAAACIAAACIABAFIAAABIgCAGIgEAHIgEAGIgFAGIgFgCQgCAIgEACIgEAAIgDABQAAAGgTAHIgIADIgIAAIgCAAIgEACIgDgCIgLgBIABgDIgDgGIgBADIgCAEIgDACIgBAAIgBAAIgCAAIgBAAIgEgCIgBAFIABAJIAAADIgBADIgEACIgBACIgBAEIgCABIAHAEIAAACIACAGIAAAMIgDABIAAADIABAGIABACIgBACIADAAIAAAIIABAKIABADIgBADIgEABIAEACIAAACIABAEIAAAGIgEAEIgCADIgDABQgFAEgEAAgAAMgLIAEgCIAGgEIAEgDIAFgEIAFgFIAGgGQACgBADgKIACgIIAAgDIgBgEIABgDQgDgCgBgCIgCgHIgFgFIgCgDIABgCQgCgDgDAAIgFABIgEgDQgFgEgBAAIgGAAIgCgBIgIgBIgSABIgKACIgEABIgEACQgEABgBABIgBAEIABAEQgHABgEACIAHACIAAABIACABIABAAIAAAGIAAACIAAAEIAAAEIgCAGIACAFIAAAHIABAHIgBACIAAADIAEACIAIAFIABABIADgBIADAAIAFABIAFAAIAJAEIABAAIAJgCg");
	this.shape_162.setTransform(246.025,291.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgkBfIgGABIgCgDQAAgFALgCIACgBIAEAAIAJgFIADAAIAEgCIAEgCIAIgHIAAAAIACgCQABgBAEAAIgBgEIAKgJIABAAIABgBIgBgDIACgDIACgFIAGgIIACgIIABgDIABgEIABgDIAAgCIAAgBIgBgCIAAgBIABgGIgCgDIgBgDIgBgEIAMgEIgGgCIgCgDIgEgCIgCAAIAAgCQgCgKgBAAIgDAMIgJgFQAAgEgBgCIgBAAIgCACIgCAAIgCACQgCgCgCAAIgCAAIgEAAIgDAAIgGAAIgEACIgFAEIgEACIgEABIgFACIgEgBIACgDQACgFABAAIAEgCIADgFIAGgDIAEgEIACgEQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABgBIABgGIABgEIAFgFIABgEIAEgJIABgCQgCgCgDAAIgHAAIgCgBIgLgBIgNgCIgFADIgEACQgBAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAgCAFgDIADgDIAIgDIADgDIADABIAEABIADAAIAJAAIAGAAIAIAAIAFABIAGAAIAKgFIACADIgCAGIgBAEIgCAGIgKAOIgJAPIgDADQADACADAAIACAAIAEAAIAFABIAHABIAFADIADAAIAHADIAJAEIAFAIQACACABAEIgEAEIACADQACACAAAJIgCAIQAAAFgCAFIgCADIgCACIgFAJIgDAGIgDAGIgFAEIgBAEIgHAGIgGAIIAAACIgBAAQgDADgFABIgCADIgDADIgBABQgKAIgHABQgCAEgDADIgCAAIgIADIgEgDg");
	this.shape_163.setTransform(223.4,284.75);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgGBOQgEAAgFgFQgCgCgBgCIgBgEIgCgFIAAgEIABgJQAAgFACgCIgBgGIgBgYQAEgCAAgCIgBgDIgEgBIAAgBIAAAAIABgCIAAgMIgIgBIgHAAIgDABIgEABQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAgDAGgDQABgFADAAIAGAAIABAAIAIgBIAAgDIAAgVQAAgEgCgDIgBgDIgBgCQAAgCAEgDQAFgEAIgCQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAIACABQABACAAADIgBAWIgCAGQAAACgDACIABAGIADAAIgBAHIAOADIAEAAIAIgBIAJgBIAIgDIAFAAIgBAGQgBACgIAFIgCACIgCACIgEABIgDgBIgFgDIgEAAIgEgDIgHAFIgFgBIgDABIABALIAAAGQgFABAAADIABADIAFABIAAARIgEgBQAAAAgBAAQAAABgBAAQAAAAAAAAQAAABAAAAIABAEIADgBQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAAFIAAAJIACAFIABADIAAABIAAADQAEADAFAAQAEAAAFgCIAEgDIAHgGIAHgFIADABIAAAEIgCAIIgIAEIgRAGIgFACIgFACQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAgBAAAAIgCgBIgBAEIgDAAg");
	this.shape_164.setTransform(205.225,283.325);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("ABtB6IgDgGIgDgMIAAgCIgDgFIAAgDIgBgDIACgEIgEgEIACgDIABgBIAAgCIgHAAIgEgHIgCgJIgCgEIgDgLQgCgEgFAAQgFAAgBAKIgBAAIgEgBQgEgDgEgCIgGgCIgIgBIgHAAIgEAAIgFAAIgDAAIgEABIgGAAIgGAAIgCAAIgHgBIgFAAIgEgBIgHABIgHACIgEgEQgFAAgEACIgGABIgCABIgEgBIgGAAIgHABIgGABIgCAEIgFAIIgHALIgCgBIgBACIAAADIAAACIgDAEIgGANIgEAGIgBACIgIAFIAAABQAAABAAAAQAAABAAAAQABABAAAAQABABABAAIgCAHIgFACQgCACgCAEIgFADIgDABIgCgBIgCgBIgCAAQgDgCgDgBIABgCIAEgDIAGgGIADgDIADgDIAAgCQAAgDADgDIAHgHIAHgNIADgBIAAgBIAAgDIAAgCIAEgEIANgVIABgCIgCAAIgCAAIgBAAIgDAAIAAgEIABgDIADgFIADgFIAEAAIAGADIAAgBIABgCIgBgDIADgCIACgGIAGgGIABgEIAFgFIADgGIAIgMIAJgRIADgEIABgDIAEgGIAAAAIAAgCIACgFIADgEIADAEIAAgCIgBgEIACgEIADgEIAAgEIABgCIADgHIACgEIAGAAIgBgCIgEgCIAAgCIAEgDIgCgCIAAgBQACgBACgEIACgGIAAgCIAAgBIAAgCIAAgDIAKgIIADADIABgEIACgCIACAAQABgDACgBQADgCACAAQAEAAABAKIABAJQABAEADAGIACAJIAAADIgGADIACAEIAHACQACAAADAIIACAFIgCAEIADADIAEAEIACADIACAIIABAEQAEAEABAFIAAAEIADAEIAGAMIgDACIACAEIACAAIAAADQAOANAAAMIAGANIAIAQIADAGIAJASIgBAFQAJAEAAAEQAAACgEACIACACIADACIAEAFIADAJIAIANQgDABAAADIAAACIgGADIgFAAIgKADIgEgLgAgcAfQAEAAAFACIAJABQADAEAEAAIAHgEIAFABIAIAAIADAAIAEAAIAEAAIADAAIAEABIAIgBIAGgBIAMgBIAKABQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAAAIgCgGIAAgCIgEgFIgFgKIgCgEIgDgFIABgFIgBgFIgFABIgCgEIgBgDIgDgEIgDgHIgCgCQAAgFgDgFIgCgGIADgCQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgBAAIgCgEIgEgFIAAgGIgDgDIgCgFIgEgFIgDgIIgCgFIgEgGQgDABgBADQgDAEAAAEIAAAAIgFAJIgIAQIgDAGQgDABAAADQgDAGgFACIABADIgCABIgFgBIgBACIAEADIgFALQgHAMgFAEQgBAAAAAAQAAAAAAABQgBAAAAABQAAABAAAAIgBAFIgEAGIgDAEIgCADIgEAIIgBAEIADgCIADACIAFAAIABADIAIgBg");
	this.shape_165.setTransform(186.525,282.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgTBtIgEAAIgDgGIgDAGIgGgGIgGAGIAAAAIgDgBIgEgDIgHAAIgEgCIgDgCIgEgCIgDgDIgGgDQgCAAgCgGQgDgFAAgEQAAgEADgGIADgFQAEgBACgCQADgEADgBIAMgGIABAEIgBADIgFAEIgCADQgDAEAAAEIAAACQgBABAAAAQgBABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAABAAQAAAAAAABIABAAIADABQACADAEADIAIAFIADAEIAKACIADAAIACgBIAGAHIACgDIABgDIAUABIABAAIAFgCIATgEIAKgDIAFgBIADgEIAJgFIAFgEIACgDIACgDIAAgGIACgIIAAgCIABgEQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBAAgBgBIgEgKIgCgDIAAgEQgIgEgMgCIgDAAIgBAAIgFgCIgDAAIgFAAIgDABIgGgDIAAAAIgHADIgDABIgFABIgHgIIgFAHIgDgBIgCgBIgDAAQgCAEgDAAIgIgBIgJgEQgHgEAAgCIgBgFIgBgGQAAgDAEgDIAHgGIAFgDIAEgDIAHgBIAEgCIAAgBIgDgBIgFAAIgCABQgDgBgGgDIgCgCIgBgEQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAgBIgEgBIgCgDIgDgFIABgHIABgIIACgEIABgCIgBgFIAHgIIAIgGIAHgHIADgBIADgBIABgCIARgEIAFgBIAFgBIALABIAKABQADgDAFgCIADgBIAGABIAEAAIAKAAIAGACQAAAAABAAQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgDIAKgEIACgBIAEgBIABACQAAAHgLAFIgBAEIgEADQgDADgCAAIgGAAIgCAAIgEgGIgBgBQgDAAgDAHIADADIAFAEIABAEIACACIAAAEIABABIgFADIAAACQABAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAEgGAGIgEAFIgIAGIgCADIgEADIgCACIgMAFIgKADIgFACIAAADQAAAAAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgJABIgJADIgMADQgGAEgCADIgBABQABACAKABQADADABACIAGAAIAJAAIAAAAIAEAAIACAAIAGAHQABAAAAABQAAAAABAAQAAABAAAAQABAAAAAAIABgBIADgHQAGgEAEAAIAGABIAHgBQABAAACAEIACAAIACgDIAEgBIAHABIAEABIAEABIANAGIAAACIADAEIAFgBQAEACABACIABADIACAGIABAGIABAGIgCAHQAAAFgDAGIgGAHIgCAFIgDAEIgCABIgDACIgFADIgFAGIgJAEIgJAEIgEACIgGABIgFADIgCAAIgEABIgLABIgMADgAgShUIgEABIgEACIgDABIgFAFIgEAFIgBAGIgBAKIABADIAEAEIAAAEQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAIAFACIAGAFQAFACAKAAIAHgBIACAAIALgEIAEAAQADgEAFgDIACgCIABgFIACgFIAAgKQgBgGgGgEIgEgFQgBgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgGgCIgDgBIgEgBIgBgBIgGACIgFAAIgIACg");
	this.shape_166.setTransform(477.225,143.95);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgzA3QgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgCIACgFIAAgMIABgFIAAgDIgBgEIAAgDIAAgCIAAgGIAAgDIABgFIAEgCIgBgBIgFgBIAAgFIABgEIAAgCIgCgMIAEgCIgEgFIAAgDIgEgHQABgFAHgDQAGgFAEAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIAAAIQAAACAEAGQAFgHACAAIAFgDQAFgFACAAQACAAACADQAIgGAHAAIADABIADAAIAHgCIAIACIAHABIADADIADAAQAFABAFAIQACAEAAARIgGABQgBABgBAAQgBAAAAABQgBAAAAAAQAAABAAAAIAJAFQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAADgDAFIAAABQAAACADADIgBAFIADAHIAAAIIABAHIgBAHIACAFIgGAEIgHADIgGAEQgEgFgBgCIAEgMIAAgDIAAgCIADgBQAHgBAAgBIgBgBIgMgEQABgGACgCIAEgEQADgDAAgDQABgBgKgDIAAgEIgBgIIABgBIACgFIgDgDIAAgHIgCgEQgDgDABgCIgBgBIgEgCIgEgHQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgCAAgEADQgFAFgEAAIgGgBIgCACIAAABQgDgHgEAAIgBAAIgFACIgHAEQgIAEgBACQgDADAAAEIABAJIAAABIgBADIgHAFIgBABQAAABAAAAQAAAAABABQAAAAABABQAAAAABAAIAGADIACADIgBADIABALIgEAEIAAACQAAADAEACIgBABIABAFQAAAIACAFQgCADgCABIgEAAIgCABIgDABIgCACQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgCgCg");
	this.shape_167.setTransform(462.05,139.775);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgOBdIABgFIACgHIAAgHIABgOIAAgDQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAIACAAIABgDIgBgFIgBgEIgCgCIAAgFIAAgCIAAgCIABgEQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgBIAAgBIAAgDQAJgCAAgBIAAgBQgCgCgEAAIgFAAIAAgCIgBgOQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBgBAAQAAgCAFgEQAJgHAHgDIADAFIgBAKIgBAHIAAAEIgDAEQAAADADAEIAAACIAAAHIAAABIAAAEIgBAcIACAKIAAAGIABAFQgBADgCADIgFAEIgIAGIgCAAIgEgBgAgNhBQAAgFAHgGIAEgEIACgDIAHgJIADgBIAEACQACACAAADQAAACgCACIgNALIgDACIgFAEIgFACQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_168.setTransform(451.5,136.075);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgeB4IgDgFIgFADQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgDIgDgCIgEABIgDgBIgJgHIABgDQAAgDgDgDIgEgDIAAgDIgCgMIABgFIABgHIACgFIAHgPIAEgEIAFABIABgBIgBgIIAEgCIAIgIIAEgDIAEgCIAGABIACABIAHgEIAAgDIAGgDIAGgDIAFAAIAEgBIAEABIAFAEIADgEIAGACIAKACIAEACIABAAQADABADgDIgDgDIgBgIIAAgDQAJgGAAgBIgFgGQgEgEAAgJIAEgCIgCgGIgDgJIAAgEIAAgLIABgHIgBgIIABgDIACgCIgBgCQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIgBgBIAMgIIgDgDIgBgHQgBgDgFgBQgHgDAAgBIACgCIALgCQADgFALgBIABAHIAAACIgBAHIAAAEIAAADIAAAGIAAAEIAAAGIgBADIAAAFIAAAKIgDAGIADAIIAAAGIAAAEIgBAFIABAFIAAAEIAAACIgEABIgCAEIAAADQAGADAAACIAAAJIgBABIABAIIAAADIAAABIAAACIAAADIgCAFIAAAHIAAACIABAJIABAKIAAADIAAAHIAAAHIACANIAAAFIACALIABAHQACACAAACIAAADIgKABIgMACIgCgCQgDADgEAAIgMADQgPAEgHAAIgNACQgNAAgHgCgAgcAgIgGACQgFAGAAADQgEAEgDADIgDAHIgBAHIABAFIABAEIABADIABAEIACAGIAAADQABAAABABQAAAAABAAQAAABABAAQAAABAAAAIACADIAEAHIAGAEIADAFIAFABIAFAEQACAAACgHQAGACADAAIAMAAIAGAAIANgCQAIgCABgCIAFgHIgBgDIABgEIAAgMIAAgJIgBgHIAGgCIgCgEIAAgCIgDgBIAJgIIgJgKIAAgDIgBgCIAAgEIgCgCIgFACIgCAAQgEAAgCgCIgFgEIgKgDIgFgEIgHAHIAAAAIgBAAQgCABgFACIgEgBQgEABgEAFIgFAAIgDADg");
	this.shape_169.setTransform(439.45,133.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgfB4IgCgFIgGADQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgDIgCgCIgFABIgDgBIgJgHIAAgDQAAgDgCgDIgEgDIAAgDIgCgMIAAgFIABgHIADgFIAGgPIAGgEIAEABIABgBIgBgIIAEgCIAIgIIAEgDIAFgCIAFABIACABIAGgEIAAgDIAHgDIAGgDIAFAAIAEgBIADABIAGAEIADgEIAGACIAKACIADACIACAAQADABADgDIgCgDIgBgIIgBgDQAJgGAAgBIgFgGQgEgEAAgJIAEgCIgCgGIgDgJIAAgEIAAgLIACgHIgCgIIABgDIADgCIgCgCQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIgBgBIALgIIgCgDIgBgHQgBgDgFgBQgGgDAAgBIACgCIAKgCQADgFALgBIACAHIAAACIgBAHIAAAEIAAADIAAAGIAAAEIAAAGIgCADIgBAFIABAKIgDAGIADAIIgBAGIABAEIgBAFIABAFIAAAEIgBACIgDABIgBAEIAAADQAEADABACIgBAJIAAABIAAAIIABADIAAABIgBACIAAADIgBAFIAAAHIAAACIAAAJIABAKIAAADIABAHIAAAHIACANIAAAFIACALIABAHQACACAAACIAAADIgLABIgKACIgCgCQgEADgDAAIgNADQgPAEgHAAIgNACQgNAAgIgCgAgdAgIgEACQgGAGAAADQgEAEgDADIgDAHIgBAHIABAFIAAAEIABADIACAEIADAGIAAADQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAIABADIAFAHIAGAEIAEAFIADABIAGAEQADAAABgHQAFACAEAAIAMAAIAGAAIANgCQAIgCABgCIAFgHIgBgDIABgEIAAgMIAAgJIgBgHIAGgCIgBgEIAAgCIgEgBIAJgIIgJgKIAAgDIgBgCIAAgEIgCgCIgFACIgCAAQgEAAgCgCIgFgEIgKgDIgGgEIgGAHIAAAAIgBAAQgCABgFACIgEgBQgEABgFAFIgEAAIgEADg");
	this.shape_170.setTransform(422.65,133.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgSA5IgDgBIgDgCIgMgEIgFgEIgFgDQgFgDAAgBIgCgFIgGgFIACgEIgDgIQgBgCAAgKIABgKIADgHIAFgFIADgHIAMgLIAKgGIALgIIAEgBIALgDIAGgBIAKgDQAIAAADAIIAEgDIAEADIADACIAMAMQAEAEABADIACAHIACAFIgBABIgDgBIgHACIgEgBIgFABIgJgHIgHAGIgKgBIgFAAIgCAAIgLAAIgGAAIgGABIgHABIgGAAIgMADIgBAHQgBACgDACQAFADAAABIADANIADABIgBAGIAEABQACAGACACQADACAEABQABAEACABQABABAEAAIACAEIAEAAIAIAEIADAAIAIgBIAJgBIAHgCIAHgBIAJgFIAHgGIAGgHQAAAAAAgBQAAAAABAAQAAAAABgBQABAAAAAAIAFACIgCAHIgIAOIgEgBIgEADQgDACgEAAIgMADIgIABIgFABIgJgBIgEABIgCAAIgFABIgLgBgAgEgqIgIACIgLAEIgFAFIgEADIAAABIAAAAIALAEIADAEIAGgHIACgBIAGACIABAAIAHgCIAFAAIACADIAFgBIAHgCIAIABIABgCIAAgBIgBgDIgCgCIgEgFIgFgCIgCgDIgPgBIgDAAg");
	this.shape_171.setTransform(406.65,139.575);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgkA2IgFgLIgCgJIgCgEIgBgEIgDgEIgFgIIACgIIgBgEIgFgCIgDgFIgDgDIgBgGIgCgDIgDgEIgLgWIAAgCQAAgGAKgCQAEgEADAAIAEABIAHAYIgDAFIAAABQAAABAAABQABAAAAABQABAAAAABQABAAABAAIAGgCIADAHIgBAGIACAHIACAFIADADIADAIIABAEIADAJIAGAGQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAgBIACgEIACgEIABgHIADgHIAEgMIACgDIAAgDIAAgFIABgGIAFgDIgEgGIABgHIgBgGIgBgCIABgCIADgBIADgCIAJgDIAEACIACABIADAQIABAEIgBADIgBACQAAADAFADIAHASIAFALIAHASIAEAFIAFgGIgCgEIACgGIAEgLIAEgIIAAgDIADgLIABgIIABgJQABgLABgBQACgDAFgDQAEgDADAAIADACIgCALIgDALIgBAEIgCAFIgBAGIgEADIABAFIgEAKIgBADIgGAUIgDAGIAAAIIgBAHIgKAHIgEAGIgBAAIgBgBIgHgGQgBgFgBgCIgDgDIADgDIgDgEIgEgCIgCgDIgCgFIgBgFIgCgFIgEgGIABgCIADAAIABgBIgCgEIgGgDIgDgGIgDgGIgCADIgDAPIgDAHIgBADIgHAUIgBAGIgCAFIgCAGIgEACIgDACIgJAEIgCgEg");
	this.shape_172.setTransform(389.425,139.725);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgsA2IADgIIAAgCIgBgGIABgDIADgBIAAgCQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBgBIAAgDIgBgHIABgIQAFgCAAgDIAAgCIgDAAIgDgBIAAgFIAAgEIAAgDIAAgBIAAgEIAAgCIACgGIgCgDIgBgJQAAgCgDgEQABgCACgCIAHgFIAIgEQAAAAABAAQAAAAABAAQAAABABAAQAAABABAAIAAACIABAFIAAACIABAEIAIgFIAHgBIAGgFIADgBIADgCIADABIABAAIAKgDIAEAAIAEABIADACIACAAIAEgCIABAAQAAAAABABQAAAAABAAQAAAAABABQABAAAAAAQADACABAFIgJAHQgDAEgCAAQgCAAgEgEIgEAAIgHgCIgHgCQgBADgEABIgEAAIgGACIgCgBIgKAIQgFADAAAIIAAABIAAAFIAAAEQAAABgDAEQACADAAABIAAACIACAAIABAFIAAAaIAAABIgEACQgIACAAABIAJACIADgBIABAGQAAAEgDACIgIABIgGAEIgCABQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAgBg");
	this.shape_173.setTransform(370.475,139.65);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgOBdIAAgFIACgHIAAgHIACgOIAAgDQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIABAAIABgDIgBgFIgBgEIgCgCIAAgFIAAgCIAAgCIACgEQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgBIAAgBIAAgDQAJgCAAgBIAAgBQgDgCgDAAIgFAAIAAgCIgBgOQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBgBAAQAAgCAEgEQALgHAFgDIAFAFIgCAKIgCAHIAAAEIgCAEQAAADADAEIgBACIAAAHIAAABIAAAEIgBAcIADAKIAAAGIABAFQAAADgDADIgFAEIgIAGIgCAAIgEgBgAgNhBQAAgFAHgGIAEgEIACgDIAHgJIADgBIAEACQADACAAADQAAACgDACIgNALIgDACIgFAEIgFACQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_174.setTransform(361.2,136.075);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgSA5IgDgBIgDgCIgMgEIgFgEIgFgDQgFgDAAgBIgCgFIgGgFIACgEIgEgIQAAgCAAgKIABgKIADgHIAFgFIADgHIAMgLIAKgGIALgIIAEgBIALgDIAGgBIAKgDQAIAAADAIIAEgDIAEADIADACIAMAMQAEAEABADIACAHIACAFIgBABIgDgBIgHACIgEgBIgFABIgJgHIgHAGIgKgBIgFAAIgCAAIgLAAIgGAAIgGABIgHABIgGAAIgMADIgBAHQgBACgDACQAFADAAABIADANIADABIgBAGIAFABQABAGACACQADACAEABQABAEACABQABABAEAAIACAEIAEAAIAIAEIADAAIAIgBIAJgBIAHgCIAHgBIAJgFIAHgGIAGgHQAAAAAAgBQAAAAABAAQAAAAABgBQABAAAAAAIAFACIgCAHIgIAOIgEgBIgEADQgDACgEAAIgMADIgIABIgFABIgJgBIgEABIgCAAIgFABIgLgBgAgEgqIgIACIgLAEIgFAFIgEADIAAABIAAAAIALAEIADAEIAGgHIACgBIAGACIABAAIAHgCIAFAAIACADIAFgBIAHgCIAIABIABgCIAAgBIgBgDIgCgCIgEgFIgFgCIgCgDIgPgBIgDAAg");
	this.shape_175.setTransform(349.95,139.575);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("Ag1B6IADgLIAAgEIACgEIABgEIgBgCIgCgEIABgHIAAADIAAgDIAAgHIAAgDIAAgBIAAgGIAAgLIAAgIIAAgDIAEgEIABgCIAAgFIgEABQgCgHAAgJIABgYIAFAAQgCgDAAgEIgEgCIABgHIgBgFIgBgOQAAgEADgCQAHgFAAgBQgDgDgIAAIABgGIACgFQAAgDgDgCIAAgGIAAgFIgBgHIABgGIgDgNIAAgDIgDgDQABgCAFgDIAKgFQAEgCADAAIAEACIgIAEIgFAFIALALQAAAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIgCAFIgBADIgDABIgBACIgBACIABAEIADgBIADgCIgBAaIAAAEIAAADQAAADgDAEQAAABAAAAQAAABAAABQAAAAAAAAQABABAAAAIACADIABADIgBAIIAAAFIABAJIgBAFIABAGIgBACIABAFIAAABIgCAQIACAGQAIgEALgLIAGABIAHgDIAHgBQABAAAAAAQAAAAABAAQABABAAAAQABABAAAAIABADIAEAAIACgDQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAIAAIAPACIAFAFQABACAFACIgCAFQACABADAAQADAEAAAEIgBAKQAAAFgCACIgBACIACAFIgDAEIgBABIAEAEIAAADIAAADIAAAJIAAACIgCAFIACAKIgBANIAAACQgDACgFAAIgFADIgFADIgGgFIAEgIQACgGAAgFIgCgHIAAgCIABgFQACgFABgIIgCgBIABgRIAAgCIAAgBIgBgHIABgCIAAgCIgCgFQgBgCgCgCIgFgBIgHgEIgGAAIgKgBIgDAAIgGABIgMABIgCABIgIAEIgFACQgLAJAAACQAAADAKACIgBAEIgCAQQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAABIAAAAQAEAFABADQABAEAAAIIABAFIgBAHIABAEIAAACIAAADIgCADIgJADIgHAFg");
	this.shape_176.setTransform(334.475,133.275);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgQBPIgEgGIgBgDIgBgGIAAgEIAAgKQAAgFADgCIgBgHIgBgaQADgCAAgCIAAgDIgEgBIAAgBIAAgCIABgOIgJgBIgHABIgDAAIgFABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAgDAGgDQABgGADAAIAIAAIAJgBIAAgEIAAgWIgCgHIgCgDIgBgCQAAgDAEgDQAGgFAIgCQACgDACAAIACABQABACAAADIgBAXIgCAHQAAACgEACIABAGIAEAAIgBAIIAOADIAFAAIAJgBIAKgBIAJgDIAEAAIgBAGQAAACgJAFIgDACIgCAEIgEAAIgDAAIgGgEIgEgBIgEgDIgHAFIgGAAIgDACIABALIAAAGQgFABgBADIABADIAGACIAAASIgFAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAABIABADIAEgBQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABIAAAGIAAAAIAAAJIACAGIAAADIABABIgBAEQAFADAFAAQAGgBAEgCIAEgDIAIgGQAGgGACAAIADABIAAAFIgCAJIgJADIgSAIIgGABIgGACIgCgCIgCAAIgBADIgEAAQgEAAgFgEg");
	this.shape_177.setTransform(321.9,137.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AghA4IgDgDIgFgBQgDgBgJgFIgFgDIgBgEIgCgCIgDgCIgBgCQgDgFAAgFQAAgCADgCQgBgDgDgBIAAgBIABgOIAEgKIAHgNIAGgFIADgFIACgCIALgGIAHgGIASgHQAJgDAPAAIAJABIABADIADACQACgBACgDQAIACAGAEIAFAEIADAFQADAEAHAAIAEAJIACAJIABALIgCAAIAAACIgDADQABACADACIgBAJIgCAFIgHAQQgIAJgHACIgIAEIgHAEIgHADIgOABIgJADIgLAAIgEAAIgRgCgAgVAtQAFACAFAAIAJAAIADABIAFABIAHgBIAJgCIAJgGIAHgDIAGgIIADgIIAEgEIABgDIgCgEIAAgBIAAgCQABgHABgDIgDgJIgCgIIAAgGIgBAAIgEAAIgGgKIgDgEIgDgBIgIgDQgBgFgDAAIgFABIgFgBIgJAAIgIAEIgDgCIgDADIgGADIgBACIgSAOIgBABQAAAEgBABIgDAGQgBAEgDACIAAADQAAADgFABIACADIADAEQAAACgEACIAAACIABABIADgBIACAHIAIANIAAABIgCAEQAAABABAAQAAABAAAAQABAAABAAQAAAAABAAIADgBIANAGg");
	this.shape_178.setTransform(301.525,139.875);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgQBPIgEgGIgBgDIgCgGIAAgEIABgKQAAgFADgCIgBgHIgBgaQADgCAAgCIAAgDIgEgBIgBgBIABgCIABgOIgJgBIgHABIgEAAIgEABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAgDAGgDQABgGADAAIAIAAIAJgBIAAgEIAAgWIgDgHIgBgDIgBgCQABgDADgDQAGgFAIgCQACgDACAAIACABQABACAAADIgBAXIgCAHQgBACgDACIABAGIAEAAIgBAIIAOADIAFAAIAJgBIAKgBIAJgDIAEAAIgBAGQgBACgIAFIgDACIgCAEIgEAAIgDAAIgGgEIgEgBIgEgDIgHAFIgGAAIgDACIABALIAAAGQgFABAAADIAAADIAGACIAAASIgFAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAABIABADIAEgBQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABIAAAGIAAAAIAAAJIACAGIAAADIABABIgBAEQAFADAFAAQAFgBAFgCIAEgDIAIgGQAGgGABAAIAEABIAAAFIgCAJIgJADIgSAIIgGABIgGACIgCgCIgCAAIgBADIgEAAQgEAAgFgEg");
	this.shape_179.setTransform(288.05,137.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgRA3IgBAAIgGACIgEgEIgBgBIgFACIgCABQgDAAgGgFIgGgFQgDgFAAgFIACgEIgDgCIAAgRQADgCAAgCIgCgFIAAgJIAAgIQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAAgCIgEABIABgNIAAgEIgBgDIAAgFIgCgEQABgBAEgCIAKgDIABgBIADgBIAEABIACAFIgBAEQgCADAAAIIABAHIgDAKQAAAEAEAHIgFACIABAFIABABIgBAFIgBALIADAFIgBAFIABAGQAAAHAEADQACACAOADIAIABQAHAAABgCIAGgFIAEgCQAAABABAAQAAAAABAAQAAABABAAQABAAAAAAIACAAIADgFIADgCIAGgIIAEgDIADgGIACgHIAAAAIgBgEIABgGIgCgBIgBgBIAAgWIgCgLIAAgBQAAgBAEgEIgCgCIgCAAIAAgEIAAgCIABgFIAEABIAIgDIAGgDIADAKIgBAQIAAAKIgDAOIgDgBIgBAEIAAADIAFAAIAAACIAAAEIAAACIAAAEIAAACIgBAMIADADIAAAHQAAAEACACIADADQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgIADIgIAFQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQgCgDAAgEIAAgEIgFgBIgCAAIgEAEIgDABIgEADIgFACQgKAEgJABIgGABIgFgCg");
	this.shape_180.setTransform(268.4,139.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AghA4IgDgDIgFgBQgDgBgJgFIgFgDIgBgEIgCgCIgDgCIgBgCQgDgFAAgFQAAgCADgCQgBgDgDgBIAAgBIABgOIAEgKIAHgNIAGgFIADgFIACgCIALgGIAHgGIASgHQAJgDAPAAIAJABIABADIADACQACgBACgDQAIACAGAEIAFAEIADAFQADAEAHAAIAEAJIACAJIABALIgCAAIAAACIgDADQABACADACIgBAJIgCAFIgHAQQgIAJgHACIgIAEIgHAEIgHADIgOABIgJADIgLAAIgEAAIgRgCgAgVAtQAFACAFAAIAJAAIADABIAFABIAHgBIAJgCIAJgGIAHgDIAGgIIADgIIAEgEIABgDIgCgEIAAgBIAAgCQABgHABgDIgDgJIgCgIIAAgGIgBAAIgEAAIgGgKIgDgEIgDgBIgIgDQgBgFgDAAIgFABIgFgBIgJAAIgIAEIgDgCIgDADIgGADIgBACIgSAOIgBABQAAAEgBABIgDAGQgBAEgDACIAAADQAAADgFABIACADIADAEQAAACgEACIAAACIABABIADgBIACAHIAIANIAAABIgCAEQAAABABAAQAAABAAAAQABAAABAAQAAAAABAAIADgBIANAGg");
	this.shape_181.setTransform(252.025,139.875);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgcBrQgNAAgKgIIgEgBIgCgEIgGgDIgCgCIgCgGIACgJQACgEADAAIABAAIAEAJIAFAGIAGAJIAFABIALAEIADAAIAFAAIADACIAEgCIADABIALgEIAGgDIAJgGIAGgGIAGgEQAEgDADgIIAEgLIAEgFIgBgGIADgPIAAgCIAAgFIACgKIACgHIgCgFIgBgPIAAgFIABgEIABgDIAAgCIgCgBIgHAEIgEAEIgEADIgEADIgFACIgGAGIgDACIgMAHIgHACIgLACQgDAAgKgEQgHgBgEgHIgDgGIgBgEQAAgCAEgDQgDgDAAgFQAAgEAFgJIgBgEIABgEIADgTIAAgFIADgMIgBgDIgDAAIgCgCIAAgBIAFgFIAIgDIANgHQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIgCAGQgCADgBAIIgEAPIgBAJQgCACgEAAIgCAEQAAACAGAAIgBAIIgCAJIgBAKIgBAEIACAFIADAFIAJAEQADAEABAAQADAAACgDQAHgBADgCIAQgLIAIgIIAIgFIAGgMIACgDIAAgFIgBgCIABgCIAAgFIAAgDIgCgFIABgKIgBgEIgBgFIgEgHQAAgDAGgBIAEgEIABAAIAFAAIAFgBIADAEIgNAGIAKADQAAAAABABQABAAAAABQAAAAABABQAAAAAAABQAAACgEADIgGAGIgBAAQAAABAIAEQADADABACIAAADIABAJIgCAGQAAAFAEAEIgBAIIAAAHIgCAIIgCAFIAAADIADACIgBAIIAAABIABAGIgCAEIAAAEIAAAEIABAGIgCAFIgBAFIgDAFIAAACIABAEIgDAFIgDAHIgEAEIgEAFIgCAEIgDADIgJAMIgGAFIgEADIgEADIgCABIgFACIgEACIgDABIgJAEIgEABIgJACIgKgCg");
	this.shape_182.setTransform(234.875,145.125);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgSA5IgDgBIgDgCIgMgEIgFgEIgFgDQgFgDAAgBIgCgFIgGgFIACgEIgEgIQgBgCAAgKIACgKIADgHIAFgFIADgHIAMgLIAKgGIALgIIAEgBIALgDIAHgBIAJgDQAIAAADAIIAEgDIAEADIADACIANAMQADAEABADIACAHIADAFIgCABIgEgBIgGACIgEgBIgFABIgJgHIgHAGIgKgBIgFAAIgBAAIgMAAIgFAAIgHABIgHABIgGAAIgMADIgCAHQAAACgDACQAFADAAABIADANIADABIgBAGIAEABQACAGACACQACACAFABQACAEABABQABABAEAAIADAEIADAAIAIAEIADAAIAHgBIAKgBIAHgCIAHgBIAJgFIAIgGIAEgHQABAAAAgBQAAAAABAAQAAAAABgBQABAAABAAIAEACIgCAHIgIAOIgDgBIgGADQgCACgEAAIgMADIgIABIgFABIgIgBIgFABIgCAAIgGABIgKgBgAgEgqIgIACIgLAEIgFAFIgEADIAAABIAAAAIALAEIADAEIAGgHIACgBIAHACIAAAAIAHgCIAFAAIACADIAFgBIAIgCIAIABIABgCIAAgBIgCgDIgCgCIgEgFIgFgCIgCgDIgPgBIgDAAg");
	this.shape_183.setTransform(214.25,139.575);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgQBPIgEgGIgBgDIgCgGIAAgEIABgKQAAgFADgCIgBgHIgBgaQADgCABgCIgBgDIgEgBIgBgBIABgCIABgOIgJgBIgHABIgEAAIgEABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAgDAGgDQABgGADAAIAIAAIAJgBIAAgEIAAgWIgDgHIgBgDIgBgCQABgDADgDQAFgFAJgCQACgDACAAIACABQABACAAADIgBAXIgCAHQgBACgDACIABAGIAEAAIgBAIIAOADIAFAAIAJgBIAKgBIAJgDIAEAAIgBAGQgBACgIAFIgDACIgCAEIgEAAIgDAAIgGgEIgEgBIgEgDIgIAFIgFAAIgDACIABALIAAAGQgFABAAADIAAADIAGACIAAASIgFAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAABIABADIAEgBQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAABIAAAGIAAAAIAAAJIACAGIAAADIABABIgBAEQAFADAFAAQAFgBAFgCIAEgDIAIgGQAGgGABAAIAEABIAAAFIgDAJIgJADIgSAIIgEABIgHACIgCgCIgCAAIgCADIgDAAQgEAAgFgEg");
	this.shape_184.setTransform(201.55,137.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgOBdIAAgFIACgHIAAgHIABgOIAAgDQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAIABAAIABgDIgBgFIgBgEIgDgCIABgFIAAgCIAAgCIACgEQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgBIAAgBIgBgDQAKgCAAgBIAAgBQgCgCgDAAIgGAAIAAgCIgBgOQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgCADgEQALgHAFgDIAFAFIgDAKIgBAHIAAAEIgCAEQAAADADAEIgBACIAAAHIAAABIAAAEIgBAcIACAKIABAGIABAFQAAADgDADIgFAEIgIAGIgDAAIgDgBgAgNhBQgBgFAIgGIAEgEIACgDIAHgJIAEgBIADACQADACAAADQAAACgDACIgNALIgDACIgFAEIgFACQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_185.setTransform(193.25,136.075);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgEA4QgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIgCgFIgDgEIgBgEIgEgHIgEgIIgBgCIgBgGIgBgDIgEgCIAAgBQABAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgDgEgDQAAAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAIgCgFIgDgHIAAgBIABgFIgDgDQgEgCgDgFIgIgPIACgEIAGgCIAEgDIACgDQAFAAABACIAFAMIAAAEIACAFIABAEIAEACIACAGQADAGAAACIABAFIACACIACAFIACACIAFAJIgBAEIAEADIACAEIADAFIACAEIACABQACAAABgEIAHgMIABgDIACgFIAFgJQADgBACgBIgCgHQAAgCAGgLIABgEIgBgEIAFgIIABgIQABgCAGgDIAJgDIABABIgEAMIgEAJIgEAIIgCADIgHATIgCAEIgDADIgBAEIgBADIgKASIgEAJQAAAAAAAAQAAAAgBABQAAAAgBABQAAAAgBABIABAFIgEACQgFACgDADIgCADIgCAAg");
	this.shape_186.setTransform(183.625,139.95);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("Ag0A3QAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgCIABgFIAAgMIACgFIAAgDIgCgEIABgDIAAgCIAAgGIgBgDIACgFIAEgCIgBgBIgFgBIAAgFIAAgEIAAgCIgBgMIAEgCIgEgFIAAgDIgDgHQAAgFAHgDQAHgFADAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIAAAIQAAACAEAGQAGgHAAAAIAGgDQAFgFACAAQACAAACADQAIgGAHAAIADABIADAAIAGgCIAJACIAHABIADADIAEAAQAEABAFAIQACAEAAARIgHABQAAABgBAAQgBAAAAABQgBAAAAAAQAAABAAAAIAJAFQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAADgDAFIAAABQAAACADADIgBAFIACAHIABAIIABAHIgBAHIACAFIgGAEIgHADIgGAEQgEgFgBgCIADgMIAAgDIABgCIADgBQAHgBAAgBIgCgBIgLgEQABgGACgCIAEgEQAEgDgBgDQAAgBgJgDIAAgEIgBgIIABgBIABgFIgCgDIAAgHIgCgEQgCgDAAgCIgBgBIgEgCIgEgHQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgDAAgDADQgFAFgEAAIgGgBIgCACIAAABQgEgHgDAAIgBAAIgFACIgIAEQgHAEgBACQgCADgBAEIABAJIAAABIgBADIgHAFIgBABQAAABAAAAQAAAAABABQAAAAABABQAAAAABAAIAGADIABADIAAADIAAALIgDAEIAAACQAAADADACIAAABIAAAFQABAIACAFQgCADgCABIgEAAIgCABIgDABIgCACQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgDgCg");
	this.shape_187.setTransform(169.9,139.775);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgPCRIACgFIABgEIACgGIgCgDQACgFABgKIADgFIAAgBIgCgDIAAgCIAAgHIAAgSIABgFIACgCIAAgFQADgDAAgDIAAgCIAAgBIgBgEIgBgHIAAgDIAAgGIABgIIgBgHIABgIIAAgBIAAgDIAAgPIAAgBIAAgCIgBgGIAAgCQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBIAAgJQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAAAIABgOIAAgCIAAgBIgBgXQAAgIAFgEQAAgFgCgCIgEABIAAgDIABgKIgBgCQgBgCAAgLIAAgFIgEgEIgCAAIgBgCIABgBIAEgDIAEgDIADgBIAGgCIABgEQAGAAAEgDIABAGIgBACIAAAFIAAAXIAAAKIgCACIgBADIAAAHIADABIAAAEIgDAVIACADIgCAQIgBAHIAEABIgCANIABAJIgBADIgEAEIACAGIAEABIgBABIAAAYIABAGIAAAIIAAAGQAAACgGAEQAAABAAABQAAABAAAAQAAABABAAQAAAAAAABIADACIABADIABADIAAABIAAAFIAAAeIgDADIADABIAAAcIAAADIgCAAIgGADIgHACIgDAEQgEACgDAAIgFgCg");
	this.shape_188.setTransform(157.85,135.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(-2.9,-18,644.8,507.3), null);


(lib.Symbol24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape.setTransform(351.4521,223.5792,0.0941,0.0941,60.0004);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_1.setTransform(351.4518,223.5915,0.1121,0.1121,60.0007);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_2.setTransform(351.7,224,0.1014,0.1014,-46.0789,0,0,-2.7,27.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_3.setTransform(351.7,223.85,0.1014,0.1014,-120.983,0,0,-2.8,21.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_4.setTransform(351.65,223.95,0.1014,0.1014,23.9117,0,0,6.6,29.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_5.setTransform(351.75,224,0.1014,0.1014,174.0167,0,0,-0.5,15.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_6.setTransform(351.75,223.9,0.1014,0.1014,98.9126,0,0,4.4,18.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_7.setTransform(351.7944,223.5994,0.1663,0.1663,59.9975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_8.setTransform(399.7194,174.3948,0.0941,0.0941,59.997);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_9.setTransform(399.8201,174.3585,0.1121,0.1121,59.9978);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_10.setTransform(400.1,174.9,0.1015,0.1015,-46.0846,0,0,-1.3,26.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_11.setTransform(400.05,174.8,0.1015,0.1015,-120.9889,0,0,-3.7,21.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_12.setTransform(400.05,174.95,0.1015,0.1015,23.9205,0,0,6,29.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_13.setTransform(400.1,174.9,0.1015,0.1015,174.0014,0,0,-2.2,14.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_14.setTransform(400.1,174.8,0.1015,0.1015,98.9269,0,0,5.9,18.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_15.setTransform(400.2128,174.5664,0.1663,0.1663,59.9956);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_16.setTransform(487.4176,159.4087,0.1355,0.1355,29.9969);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_17.setTransform(487.3822,159.5367,0.1614,0.1614,29.9988);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_18.setTransform(487.8,159.7,0.1462,0.1462,-76.0943,0,0,-2.5,24.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_19.setTransform(487.7,159.6,0.1462,0.1462,-151.0226,0,0,-2.2,19.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_20.setTransform(487.75,159.75,0.1462,0.1462,-6.0259,0,0,2.6,28.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_21.setTransform(487.7,159.7,0.1462,0.1462,143.9506,0,0,1.8,17.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_22.setTransform(487.65,159.75,0.1462,0.1462,68.9792,0,0,3.2,19.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_23.setTransform(487.6966,159.3058,0.2395,0.2395,29.9976);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_24.setTransform(519.4349,120.1243,0.1356,0.1356,29.9993);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_25.setTransform(519.4182,120.1532,0.1615,0.1615,29.9981);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_26.setTransform(519.95,120.4,0.1463,0.1463,-76.0971,0,0,-2.8,24.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_27.setTransform(519.7,120.3,0.1463,0.1463,-151.018,0,0,-3,20.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_28.setTransform(519.9,120.4,0.1463,0.1463,-6.0306,0,0,2.4,28);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_29.setTransform(519.85,120.3,0.1462,0.1462,143.9528,0,0,-0.1,17.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_30.setTransform(520,120.25,0.1462,0.1462,68.9724,0,0,2,17.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_31.setTransform(519.9326,119.9222,0.2395,0.2395,29.9971);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_32.setTransform(535.9899,120.5068,0.1824,0.1824);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_33.setTransform(535.9514,120.5446,0.2172,0.2172);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_34.setTransform(536.1,120.5,0.1968,0.1968,-106.0638,0,0,-1.7,21.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_35.setTransform(536,120.6,0.1968,0.1968,178.987,0,0,-0.6,19.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_36.setTransform(536.1,120.6,0.1968,0.1968,-36.0434,0,0,0.5,25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_37.setTransform(536,120.5,0.1968,0.1968,113.9535,0,0,-0.7,21.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_38.setTransform(536.05,120.55,0.1968,0.1968,38.9561,0,0,1.7,21.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_39.setTransform(536.1125,120.0155,0.3221,0.3221);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_40.setTransform(450.2914,250.9618,0.1823,0.1823);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_41.setTransform(450.2452,250.9985,0.2171,0.2171);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_42.setTransform(450.5,251,0.1967,0.1967,-106.0461,0,0,-3.2,22);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_43.setTransform(450.4,251.05,0.1967,0.1967,179.0133,0,0,-0.3,19.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_44.setTransform(450.6,251,0.1966,0.1966,-36.0215,0,0,1.5,25.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_45.setTransform(450.45,250.95,0.1967,0.1967,113.9485,0,0,-0.6,19.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_46.setTransform(450.45,250.95,0.1966,0.1966,38.9459,0,0,2.2,21.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_47.setTransform(450.4063,250.4695,0.322,0.322);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_48.setTransform(391.6431,273.3737,0.2076,0.2076,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_49.setTransform(391.6838,273.3204,0.2472,0.2472,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_50.setTransform(391.6,273.3,0.224,0.224,73.9527,0,0,-0.1,20.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_51.setTransform(391.75,273.25,0.224,0.224,-0.9913,0,0,1.1,21.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_52.setTransform(391.4,273.2,0.2239,0.2239,143.9703,0,0,1.7,23.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_53.setTransform(391.45,273.4,0.224,0.224,-66.0613,0,0,-1.1,22);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_54.setTransform(391.45,273.3,0.2239,0.2239,-141.0542,0,0,1.8,21.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_55.setTransform(391.3857,273.9335,0.3667,0.3667,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_56.setTransform(603.0387,270.7824,0.2686,0.2686);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_57.setTransform(602.9686,270.8162,0.3199,0.3199);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_58.setTransform(603.25,270.8,0.2899,0.2899,-106.0585,0,0,-1.7,21.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_59.setTransform(603.2,270.85,0.2899,0.2899,178.9927,0,0,-1.3,20.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_60.setTransform(603.2,270.85,0.2898,0.2898,-36.0374,0,0,0.7,24.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_61.setTransform(603.2,270.8,0.2899,0.2899,113.9365,0,0,-1.6,21.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_62.setTransform(603.15,270.8,0.2898,0.2898,38.9481,0,0,1.5,21.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_63.setTransform(603.1412,270.057,0.4743,0.4743);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_64.setTransform(536.8051,260.7315,0.2686,0.2686);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_65.setTransform(536.7363,260.7656,0.3199,0.3199);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_66.setTransform(537.1,260.75,0.2899,0.2899,-106.0626,0,0,-1.4,22.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_67.setTransform(537.05,260.95,0.2899,0.2899,178.9898,0,0,-1.6,20);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_68.setTransform(537.1,260.85,0.2899,0.2899,-36.0362,0,0,1.1,24.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_69.setTransform(537.15,260.7,0.2899,0.2899,113.9395,0,0,-2.1,20.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_70.setTransform(537.15,260.75,0.2899,0.2899,38.949,0,0,1.9,20.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_71.setTransform(537.1266,260.0057,0.4744,0.4744);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_72.setTransform(379.6691,242.291,0.2076,0.2076,75.0005);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_73.setTransform(379.6488,242.6018,0.2473,0.2473,75.0007);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_74.setTransform(379.85,242.55,0.224,0.224,-31.0555,0,0,-0.6,22.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_75.setTransform(379.9,242.7,0.224,0.224,-106.0092,0,0,-2.3,21.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_76.setTransform(379.9,242.65,0.224,0.224,38.95,0,0,2.5,24.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_77.setTransform(380,242.85,0.2241,0.2241,-171.0675,0,0,-2.2,19.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_78.setTransform(379.9,242.7,0.224,0.224,113.9427,0,0,2,20);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_79.setTransform(380.4643,242.586,0.3667,0.3667,75.0008);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_80.setTransform(486.7176,183.2958,0.1823,0.1823,-30.0013);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_81.setTransform(486.517,183.3612,0.2171,0.2171,-29.9996);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_82.setTransform(486.95,183.25,0.1967,0.1967,-136.0688,0,0,-1.9,22.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_83.setTransform(486.9,183.4,0.1967,0.1967,148.9882,0,0,-0.9,19);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_84.setTransform(487,183.35,0.1967,0.1967,-66.0596,0,0,1.6,26.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_85.setTransform(486.85,183.25,0.1967,0.1967,83.9763,0,0,-2.4,19.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_86.setTransform(487,183.35,0.1967,0.1967,8.9333,0,0,3.4,22);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_87.setTransform(486.561,182.8211,0.322,0.322,-29.9988);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_88.setTransform(413.4986,186.3697,0.1356,0.1356);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_89.setTransform(413.6485,186.3922,0.1615,0.1615);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_90.setTransform(413.75,186.5,0.1463,0.1463,-106.0341,0,0,-2.4,22.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_91.setTransform(413.65,186.6,0.1463,0.1463,179.026,0,0,-0.7,18.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_92.setTransform(413.75,186.4,0.1463,0.1463,-36.0379,0,0,1.8,24.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_93.setTransform(413.75,186.35,0.1463,0.1463,113.9449,0,0,1.2,20);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_94.setTransform(413.8,186.4,0.1463,0.1463,38.9547,0,0,2.6,20.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_95.setTransform(413.6875,186.0261,0.2395,0.2395);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_96.setTransform(564.4715,210.7807,0.2686,0.2686);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_97.setTransform(564.354,210.8149,0.3199,0.3199);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_98.setTransform(564.5,210.85,0.29,0.29,-106.0667,0,0,-1.3,21.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_99.setTransform(564.5,210.85,0.29,0.29,178.9839,0,0,-0.8,20.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_100.setTransform(564.55,210.9,0.2899,0.2899,-36.0376,0,0,0.3,23.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_101.setTransform(564.45,210.75,0.2899,0.2899,113.9453,0,0,-1.4,22);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_102.setTransform(564.5,210.8,0.2899,0.2899,38.9523,0,0,1,21.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_103.setTransform(564.5443,210.055,0.4744,0.4744);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#664327").s().p("ANTJBQlji5mQgbQhngGhoAOQiKARiKAXQifAbihAWQj0AghZDVQARjTDvgrIIPhkQoyhjo3AxQDnh5EQBJQj0ijkagHQgzgBg1ABICXgiIADgHQDvAnDdCHQAhAUAfAXQKWBBKSBJQCeATCSBEQFICaD7EHQlspXp5kRQgugUgwgQIgIACQpPjLp0gmIAcgGQBRgBBRAIIBKABQhsiJiThIQgbgNgSggQDJBTB8CqQHOA5G6CRIABgRQgSgEgOgMQhEg/g9hDIgNACIgCgRQiQiSjSgfQDNAICPCBQgfjShYjBIAUgHQBsDOAUDnQEID8FTCPQAoAQAlAZQg5pUkhoOQgUgigIgoQgHgcgCgfQFFJhCZKlQARBQBEAyQCcB1COCEQBdBWBcBXQBcBYgNBkIAAAcQg4AlgHACIgRAEIgUAGQjakolYizg");
	this.shape_104.setTransform(488.6998,219.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_104).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(337.3,106.5,302.90000000000003,218.39999999999998), null);


(lib.Symbol20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#472E15").s().p("AETCWQiZgRglhWIgsjEIC8AAIBVDCQAuBphOAAIgHAAgAkkCGQgGgDgDgDQgmguAMhDIADgDIBmiYQAOAFAVAFQBJAIBJgbQAdAxgdBUQizCYg7AAQgHAAgGgCg");
	this.shape.setTransform(216.7841,380.8359);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD6B6").s().p("AgKAMIAAhJIAbBBIgiA6IAHgyg");
	this.shape_1.setTransform(267.1,202.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFDDBE").s().p("AkJDyQAvghAtgCQhHAhAOAJQgYgCgLgFgAEJj5QgWAvgVA0QgRg8A8gng");
	this.shape_2.setTransform(97.4,147.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE5D1").s().p("ARCMNIAmgpIAAgCQgvAbgaiRIgJghIBXg2IAFgDIgIgtICJASQAQBJgQA8QggBDhRBOQgoAbgQAAQgQAAAIgbgARvKkIgHAxIAjg5IgchDgAt5GIIgLgJQhRgrhAgkQirhmgmg4QgXgtAEhGQAclTBzjfQAMA4BYDWIhoE6IB1CDICDCVQBpg0AwAMQAuALgZAPIgMAIQguACguAhQALAFAYACQAbACArgJQA2gJggA4QgPAmhAAQQhWgOgjg5gAI8CSIg8ghQgShXAShWICcgpIBoBiQAnBKgnBLQg6AvhRADgAl/gaIg1ibIBkkrQAiBjAUD0IgDAIIAIgIIB8geQgLAmgGAkQgKAsARAfIiKAkIgKAAQgxAAgXgsgAlIgeQAVg0AWgvQg8AnARA8gAAjisQASgYATgeIAJgUIghhjQAJgeAQAMIAqA3IAMgbIAHgQQAhAEgeB7IgeBHgAu6puQBEgoBGhPIAAhCICZAAIAAA5QATAoBTA9IA3AiIjdF1g");
	this.shape_3.setTransform(152.5264,135.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003366").s().p("AhFBDIADilIAzhVIhDhAIBGhJIBfBcIhFAgIAuBDIAHCtIhFEVg");
	this.shape_4.setTransform(217.375,68);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFDCC2").s().p("Ah0AmIAtjIIBpgRIBTDLIh9Ccg");
	this.shape_5.setTransform(216.975,17.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Az3dSQiKhAAQhBQD7lvBZk4QBZk3gIkoQgTr7BMjNQBAAkBRArIALAIQAjA6BWAOQA/gQAQgmQAgg4g2AIQgrAKgbgCQgPgJBIgiIANAAQABgFgDgDQAagOgvgLQgvgNhpA1IiEiWQAhhyA6glIAIgBQhAivgwh2QhXjWgNg4QgFgQACgDQAxgKB5hNIAKAPIDjF8IDdl1IAIgPQBCA3BmAcIgGBDIhkErIg+C4QDeCqAjHVQAlFUADEjQADEjBKCsQCEGVE1FBIgDADQgMBDAmAuQADADAGADQhpBVhsATQmsBvmAAAQmBAAlUhvgATslIIgIgsQBMAEA5gIIALBCgAJlqsIgdgQIAAivIA5AAQgRBYARBXIAAAggAJI9qIAzhWIAWAeIBsCOIhGBJIBDA/IgzBWIgDCmgANG5VIguhDIBFggIhghcIB+icIALgQIA8BMIh1HNgAL98Ug");
	this.shape_6.setTransform(139.5922,217.2375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#05213C").s().p("AgINZIldgeIglgRIg8gdQIRBxGnh8IhXA2IlmAhgAHHHuQgRkaARjVQADDsAXD9IAGC+gAmoFcID1AjIAAghIAcARQAVA3gxAgQibAOgXAUQhIAdgkCMQAGh/Aji2gADJFGIAAgwIDVACIAAAmIhcAfgAmYB0QgCgyAAgxQAKBTDFBGgADyCNQgGgHAAgLQAAgLAGgIQAIgGALAAQAMAAAGAGQAIAIAAALQAAALgIAHQgGAHgMABQgLgBgIgHgAgcAZIArh7IggDzgAjgB+QgGgGAAgLQAAgLAGgIQAIgHALAAQALAAAHAHQAIAIAAALQAAALgIAGQgHAJgLAAQgLAAgIgJgADkhqQgGgHAAgLQAAgLAGgIQAIgGALAAQALAAAHAGQAIAIAAALQAAALgIAHQgHAHgLABQgLgBgIgHgAjghqQgGgHAAgLQAAgLAGgIQAIgGALAAQALAAAHAGQAIAIAAALQAAALgIAHQgHAHgLABQgLgBgIgHgAAKh3IFUoOIgpglIApgnIiYiHICrByIgUApIArBcIl+HqgAl1o6IA5h0Ig5gfIBthgIg/BcIAhAuIgoA1IFYH3gAnxpVQArCFAUCuIgZBJg");
	this.shape_7.setTransform(216.025,112.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#17324B").s().p("Ah7aqQgVgFgOgFQgZgLgDgOQhotBgvtuIAkASIFdAdIgaIxQgMJhAvHuQgRAKgSAGQg3AVg4AAQgRAAgRgCgABpaXQAstPgntBIFlggIAKAgIg5NZQgdGjgzFhQgRAxgeACgAmOhEIgJgFIgCAAQgFg0AFhDQAliMBHgdQAYgUCagOQAxgggUg4IAcAQIAAggIA9AgIA7AzQBRgDA7gwQAmhLgmhKIhphjIibApIg5AAIAACvIAAAgIj1gjQjDggiHg5QgegQgNgYQgSgfAKgtQAGgjAMgmQBCkeC3noIEThuIBUghIB7HaIBDD+IlYn4IAog0IgiguIBAhdIhuBhIA5AfIg5B0IGAHDIBGkVIB1nNICZCIIgpAnIApAlIlUIOIF9nqIgrhcIAVgpIishzIE7BtQCtEPALKUIgpHmIgjAGQg5AIhMgEIAIAsIAHAtIgEADQjdBBj7AAQjkAAj9g2gAIAlkIAgC5IgHi+QgWj+gDjtQgSDXASEZgAECoLIB4AXIBcgfIAAgmIjUgDgAiTqoQjFhGgJhTIgCgOQgGiUgQiSQgVitgriGIAmF8IgpBoIgGAPIgNAcIgpg3QgQgMgKAeIAiBiIgKAVQgTAegRAYIBHATIB3AgIDNA2IAAAAgAErrpQgGAIAAALQAAALAGAGQAIAIALAAQALAAAGgIQAIgGAAgLQAAgLgIgIQgGgGgLAAQgLAAgIAGgAAbs5IALB5IAij1gAinr3QgHAIAAALQAAALAHAGQAIAIALAAQALAAAGgIQAIgGAAgLQAAgLgIgIQgGgHgLAAQgLAAgIAHgAEdvhQgHAIAAALQAAALAHAHQAIAHALAAQALAAAGgHQAIgHAAgLQAAgLgIgIQgGgGgLAAQgLAAgIAGgAinvhQgHAIAAALQAAALAHAHQAIAHALAAQALAAAGgHQAIgHAAgLQAAgLgIgIQgGgGgLAAQgLAAgIAGg");
	this.shape_8.setTransform(210.3682,197.1164);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,285.7,415.7), null);


(lib.Symbol19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF5E3").s().p("AAdB3QAAggAjguQAWgeArgqQAkgiAAgEQAAgHgIAAQgHAAgUAGQgUAFgEAEQjeDShOAAQgGAAAAgGQAAgJANgDQAQgCAagMQAngRBNhBQBEg4AlgpIgCgTQAAgNAfgcQAfgbALAAQALgBAAAKQAAAJgMAUQA3AAAAArQAAAjhGBJQhGBLAAAIQAAAJAJABIAPgBQAHABAAAHQAAAKgcAAQgjABAAggg");
	this.shape.setTransform(467.775,67.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF5E3").s().p("AgoBTQAAgNADgPQgYAGhCAnQg7AhgeAAQgGAAAAgGQAAgKANgCQAdgEA1ggQA7ggAlgJQAWg1BEg6QBJg/A0AAQAnAAAAAhQAAArhRAyQg8Alg+AVQgHAPAAAQQAAAZARAIQAJADAYABQASABAAAHQAAANg7AAQg+AAAAg2gABYg8QgwA0gPAlQAtgXAxgjQBBgxAAgcQAAgMgLAAQgfAAg2A6g");
	this.shape_1.setTransform(440.975,68.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF5E3").s().p("ABOBnQAAgeAnguQATgYA0gwQAmgkAAgIQAAgGgJAAQgbAAhcBJQhMA8gkAnQgvAxgKAAQgIAAgGgHQgGgIAAgIQAAgLBChOIBOhdIh6BjIhbBGQhFAvglAAQgGAAAAgGQAAgJAOgDQASgDAYgLQAjgPBshYQBghNArgqQAHgHAQgKQAHgDAJAAQAIAAAJAFQAIAGAAAHQAAAJhNBmQCEhwA1AAQAjAAAAAhQAAAchOBJQhNBKAAAQQAAAPASABQARABAAAIQAAAJgjAAQgoAAAAgjg");
	this.shape_2.setTransform(404.775,68.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF5E3").s().p("ABOBnQAAgeAnguQATgYA0gwQAmgkAAgIQAAgGgJAAQgbAAhcBJQhMA8gkAnQgvAxgKAAQgIAAgGgHQgGgIAAgIQAAgLBChOIBOhdIh6BjIhbBGQhFAvglAAQgGAAAAgGQAAgJAOgDQASgDAYgLQAjgPBshYQBghNArgqQAHgHAQgKQAHgDAJAAQAIAAAJAFQAIAGAAAHQAAAJhNBmQCEhwA1AAQAjAAAAAhQAAAchOBJQhNBKAAAQQAAAPASABQARABAAAIQAAAJgjAAQgoAAAAgjg");
	this.shape_3.setTransform(363.525,68.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF5E3").s().p("AgoBTQAAgNADgPQgYAGhCAnQg7AhgeAAQgGAAAAgGQAAgKANgCQAdgEA1ggQA7ggAlgJQAWg1BEg6QBJg/A0AAQAnAAAAAhQAAArhRAyQg8Alg+AVQgHAPAAAQQAAAZARAIQAJADAYABQASABAAAHQAAANg7AAQg+AAAAg2gABYg8QgwA0gPAlQAtgXAxgjQBBgxAAgcQAAgMgLAAQgfAAg2A6g");
	this.shape_4.setTransform(329.575,68.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF5E3").s().p("AmtHOQgPgOAAgWQAAgyBThIQBKhDBsg3QBvg4BegSQBDhDCIiuQCWjBAWg8QAKgbAAgPQAAgSgRAAQhBAAiNA5QiPA5h0BlQh3BnAABKQAAA6A9gBQBVAAB4hBQByg+AZg8QADgFADgCQAMgBAAATQAAAbg1AyQgzAvhZApQhdAog/AAQgvAAggggQgggiAAgvQAAhbB3hjQBlhUCWg9QCOg7BXAAQBJAAAAA6QAABwleGcQAYACAAAVQAAAWgTAAQgEAAgBgCQgBgCABgEIABgFQAAgLgWABQiECPhSBEQifCIhdAAQgWAAgPgOgAjFDcQhyBBg+BBQg1A2AAAbQAAAYAfAAQAYAAAggPQAtgWCAh4QBghXBIhOQhXAXhwBAg");
	this.shape_5.setTransform(292.225,61.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF5E3").s().p("Ah9CaQAAgOBHhYQgsAFggAAQhSAAAAgwQAAgvA5grQA1goAyAAQBEAAAABDIgBAUIBghyQATgYANAAQARAAgBAQQAAAYiICTQBegIAnAAQA5AAAAASQAAAHggAAQhOAAhrAQIgyA/QgyA+gHAAQgOgFAAgOgAiAg1Qg+AjAAAbQAAAWA7AAQAoAAA+gMQAcgpAAgfQAAgigmAAQggAAg5Aig");
	this.shape_6.setTransform(207,65.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF5E3").s().p("AAREHQAAgpBAhBQBPhRAGgLQAAgGgGAAQgaAAhsBcQhQBEgxAxQgUAUgMAJQgHAAgHgJQgGgJAAgIQAAgLBChUIBMhgQgvAshFA3IhdBGQhFAwgmAAQgFAAAAgGQAAgJAJgDQAogKAegSQA5gjBwheIBghTQAfgaCLiiQB+iUAMAAQARAAAAAWQAAAPhgByIkbFNQCtibA7AAQAZAAAAAcQAAAdhSBSQhSBSAAAOQAAAOAaAAQAHAAAAAIQAAAJgYAAQgpAAAAgjg");
	this.shape_7.setTransform(134.825,52.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF5E3").s().p("ABEBnQAAgXAZgpIg7AyQgrAhgaAAQgpAAAAgqQAAgXALgcQiABlgxAAQgFAAAAgGQAAgKALgCQAtgGBQg/IA+gwIBihPQBEguAxgBQAkABAEAjQATgRAHgBQAQABAAANQAAAQhJBWQhKBVAAAOQAAALAQAAQAPABAAAHQAAAKggAAQggAAAAgcgAA4gaQhYBUAAAcQAAANAMAAQAbAABahTQBahTAAgcQAAgQgOAAQgdAAhYBVg");
	this.shape_8.setTransform(89.425,69.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF5E3").s().p("AAdB3QAAggAjguQAWgeArgqQAkgiAAgEQAAgHgIAAQgHAAgUAGQgUAFgEAEQjeDShOAAQgGAAAAgGQAAgJANgDQAQgCAagMQAngRBNhBQBEg4AlgpIgCgTQAAgNAfgcQAfgbALAAQALgBAAAKQAAAJgMAUQA3AAAAArQAAAjhGBJQhGBLAAAIQAAAJAJABIAPgBQAHABAAAHQAAAKgcAAQgjABAAggg");
	this.shape_9.setTransform(56.775,67.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF5E3").s().p("ABEBnQAAgXAZgpIg7AyQgrAhgaAAQgpAAAAgqQAAgXALgcQiABlgxAAQgFAAAAgGQAAgKALgCQAtgGBQg/IA+gwIBihPQBEguAxgBQAkABAEAjQATgRAHgBQAQABAAANQAAAQhJBWQhKBVAAAOQAAALAQAAQAPABAAAHQAAAKggAAQggAAAAgcgAA4gaQhYBUAAAcQAAANAMAAQAbAABahTQBahTAAgcQAAgQgOAAQgdAAhYBVg");
	this.shape_10.setTransform(24.775,69.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF5E3").s().p("Am4D9QAAg3BXgtQBKgoA+AAQATAAAAAMQABAIgVADQg6AJg3AZQhMAhAAAqQAAAzB2AAQBgAABvgmQBvgoBIg9QBHg7gBgeQAAgdhegLQibgTgUgEQhegWAAg7QAAhKBvhEQBag3CMgmQB7ghBKAAQBeAAABA7QAAAyhZBEQhVBCg1AAQgsAAAAgeQAAgZAyghQAvggAbAAQAIAAABAGIgyAbQgyAagBANQACADAGAAQAiAABQguQBUgxAAgfQAAgchDAAQhNAAiLAsQhfAehGAhQh7A6AAAvQAAAeBNAOICaAUQBaANAUAZQAWAdgBAeQAAA0hLBFQhPBIhxApQhqAmhxAAQiZAAAAhcg");
	this.shape_11.setTransform(-5.35,49.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-53.9,-10.5,545.9,127.6), null);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDB2B8").s().p("AAVAkQgMAAgIgGQgHgHgOgHIgGgEIgBgBIgJgFQgDAAgKgMQAdgHAFgEIAMgKQAHgFAIgCQALgDALAEQALADADAIQADAHgCAIIgFAIQACADAAAMQAAALgFAFQgFAEgNAAIgCAAg");
	this.shape.setTransform(5.0021,3.663);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,10,7.3), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F26951").s().p("EgjGAR5IgDgHQAAgKgDgKIAFgFQAHgRAOgKIAEABIgEADIAKgEIAfAAQAHAAAGADIABABIgFAAIgCABQgNAFgCAMIgHgFIADAPIgVANQgCAEABAEIATAiIAQAbgEgiKASdIgJgSIAHgLQAEgDAEgFQADgFABgFIANgkIACAIQABAMgBAMIgDAfQgDAOgLAIgEggYAQXIgagIIgFgVIgegGIgIAFIgpgDIgngSIgBgEQAOgEAPAAQATgCAQgIQAXgLAYAFIApAKQARAHAHAOIgQAGIAjARQASALAQANQAEACAEAGQgNAAgLAFQgIACgIAGQgJAKgFANIgFABgEAh2gIHIgSgIIgDgFQgKgQgBgRIABgDIABAFIACgLIAPgbQADgGAGgDIABgBIgCAEIAAACQgBAOAJAJIgJADIAOAFIACAZIAGAEIAnAAIAgAAIhQAaIgHAAgEAingIqIgFgLQgBgGgDgFQgCgFgFgEIgYgdIAHADQALAEAKAHQAOAIANALQAKAJAAAOIgEAGgEAgFgJoQAEgOAGgNQAIgRABgSQACgZARgTIAdgeQANgMARABIgDAQIAhgVQASgLAUgHQAEgCAGgBQgFALgDAMQgCAIADAJQAEAOAIALIgCAFIg4gBIgTATIgVgFIgVAXIAAAJIgWAjIgjAZgAbpwnIgDgDIgFgLIAEgOIAEgKIACgBIgBABIAFgDIAIgDQAIgFALABQgEAAgCAFQgDAEAAAHIgGgCIAFAIIgOARIAGAAIAiAdgAcLwnIAFgPIABgGIgBgYIAGAMIADAGQACAKAAAKQAAAIgCAHIgEABgAc7yHIgQABIgIgKIgTACIgEAFIgZAHIgbgCIgBgDIAIgEIAMgIQAFgDAEgFIAIgKQAEgFAFgCQAHgCAHgBIAPAAIARACIAKABIAGACIAGABIAHACIAHABIgeAHIAHABIASACIAHACIAGABIAGACIAGACIAGADIgNAHIgDAEIgDAFIgDAJIgDAIIgBABg");
	this.shape.setTransform(214.425,144.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F49E8D").s().p("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");
	this.shape_1.setTransform(220.975,148.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCD7CD").s().p("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");
	this.shape_2.setTransform(220.075,150.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC5944").s().p("A/1TrIAAgQIADgNIABgEIABgDIAAA8IgFgYgEghdAS4IgDABIgBAAIgbADIAagXIAMgJIAQgIIgLASQAMgOARgOIAOgKIAHADQADgJABgLIADguIAHgwIAKg3IgPgiIACgSIAeAyIACA6IAhAbIgJAEIgOAWIgbAwQgPAYgZASIg0AngEgkDAQ1QgDgJABgJQAAgFAEgDQAGgHgDgGIgDgQIAHAGIARAaQgBAFgDAFQgEAFgEADIgHALgEAglgJ+QgEgDgBgEQgCgJgJAAIgOgGIAJgCIAegDQAFADACAGQADAFABAGIAFALIgIAEQgJgDgIgFgEAjogLLIgDgRIABgQIAKASIgKgmQgBgIAAgKIAGgEIgQgOIglgbIgngcIgrglIglgDIgOgLIA6gBIgMgIIA/AhIAogNIgCAJIAOAXIAbAvQAPAZADAgIAIBAIgMgKIAGgQIgNAfIgFANgAccxPIgRAJIAKgSIAGgKIAGgIIgCANIAFgLIAFgLIAHgJIAFAAIgBgGIgDgNIgDgPIgGgVIgDgPIgDgSIgDgSIgFgFIAMgHIARAoIAFgfQAHAXAFAXQABAIgBAIIgDARIgEAQIgFATIgDAIIgFAIIgFAJIgLARIgGAIgAadx5IgFgNIACgHIgDgEIgFgIIAGACIAQAKIgBAHIgFAPgAcE0CIAIABIAFANg");
	this.shape_3.setTransform(224.9464,152.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D7C192").s().p("AgcgDIA5AAIgBABQgOAGgNAAQgOAAgPgHg");
	this.shape_4.setTransform(-13.5,286.6064);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ACB773").s().p("AgKAXIgDgYQAVgiAAAQQAAASABACIADAFIACADIgRAQg");
	this.shape_5.setTransform(-8.2,272.8831);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AAB079").s().p("AgIAxIAAgJIgHgGQABgIADgKQADgJgJg3QARAsADADQALAPgEAVIAIAFIgBAJg");
	this.shape_6.setTransform(-8.15,281.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4D5A3E").s().p("AgYAAIAFgOIAZAIIAQgBIADADIgDAEQgMAPgLAAQgMAAgLgPg");
	this.shape_7.setTransform(-10.225,267.4313);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B0BD82").s().p("AgbBQIgHgDIAJgaIgCgGQgCgFgEgDIgGgEIgLAIIgBgVIAkgkIADAhQAbgVAGgmIADgBIAbgoQACAUgBAEQgCADAAAHQAAAIgFAIIACAHIgaAaIACAGQAFAngYAfIgGgBIgCAHQgFACgEAAQgHAAgHgEg");
	this.shape_8.setTransform(-17.38,278.03);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#455237").s().p("AgNgDQAPgFAMAMIgFABIgGABQgKAAgGgJg");
	this.shape_9.setTransform(-19.575,269.0375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C3C87E").s().p("AAeAYQgPgFgJgFIgIgKIgEABIgEAEIgXgIIAAgZQAWABAUANIAEACQAcAhgJAAIgCgBg");
	this.shape_10.setTransform(-19.1715,263.2537);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#737D55").s().p("AAMAdIgEgBQgUgNgWgCIAAgOIAFgfIAIAFIABAXIAdABIADAKIAKABIANAZg");
	this.shape_11.setTransform(-19.075,259.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D0D786").s().p("AgBAKQgHgMADgOQAVAOgPATIgCgHg");
	this.shape_12.setTransform(-10.532,257.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B9C177").s().p("AgPgHIAagIIAsgkQgoAqgRAcQgSAcgiAFQAMghAbgag");
	this.shape_13.setTransform(-1.8,259.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DEE0A9").s().p("AgcAhIgDgIIgGgBIgEgPIAKgPQAHgPgDgQQAIAJgDAKQgGATABATIAjgkIAVAAQAUAGgKAUQgCAEAAAFIgDgKIgjAdg");
	this.shape_14.setTransform(-6.2693,240.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CED297").s().p("AggAKIAQAXIACgHQAAgVAFgUIgKAFIgEAPIgMgBIgBgJQgCgIgMgdIAGABIADAIIAbAEIAjgcIADAKQAAgFACgEQAKgVgUgGIAAgGIALAAQAIgHAIADQAGACACAGQgaBPg5BlQgFg2AFgfg");
	this.shape_15.setTransform(-4.975,247.38);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C7CA8D").s().p("AgLgFQALgDAJAIIADACIgJAFg");
	this.shape_16.setTransform(-20.375,243.6359);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C5CDC7").s().p("AgLACIAOgOIAKAHIgUASg");
	this.shape_17.setTransform(-2.1,234.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#748447").s().p("AgPAVIACgDQAPgRgGgVIAJAAIAFALIAGAZIgLAAIAAAFg");
	this.shape_18.setTransform(-3.875,236.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C6D1B5").s().p("AgOgCIAUgUIAFAAIAEAQIgIAEIgEAZg");
	this.shape_19.setTransform(-7.075,234);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BCC4AA").s().p("AgCgZIAFAAIgFAzg");
	this.shape_20.setTransform(-22.325,235.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BEC6B0").s().p("AABAIIgBAAQgEgCgDgDIADgLIAIAKIAFAHIgIgBg");
	this.shape_21.setTransform(-9.15,210.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D2DCC5").s().p("AgHAOIgFAAIAFgdIAAgBIACAAQASAKAAAUIgEACIgHABQgEAAgFgDg");
	this.shape_22.setTransform(-2.025,217.7721);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#91937F").s().p("AgUASIAZgjIALAAIAFAAIgkAjg");
	this.shape_23.setTransform(-6.45,212.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B2B6AA").s().p("AgHASIACgIIgEgHQgEgJAGgLIAMAIIAGgEIgNAfg");
	this.shape_24.setTransform(-1.4842,201.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B8BBB0").s().p("AAABXIgRgYIACgOIAKABQAEgHACgHQAEgJgDgLIgFgHQgfgtAVgzIALAFQAwBIguBPQgCADACAPIAAABg");
	this.shape_25.setTransform(-19.1897,200.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BAC2AA").s().p("AgSASIgHACQABgDgBgDQgKgmAcgZIAjgJQgRBFgWAvIAEgOIgHAPQgOgUAKgVg");
	this.shape_26.setTransform(-6.197,202.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BFC6B1").s().p("AgEANIgCgHIABgDIAFgSIgBgEIAIABIgBAmg");
	this.shape_27.setTransform(-3.7,194.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BDC4AC").s().p("AgFALIgRAAIgCAJIACgTIAfgUIANACIADAQIgBACIgZATg");
	this.shape_28.setTransform(-6.8,194.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B7BAAC").s().p("AgLgEIAOgLQASAOgRAPIgBACg");
	this.shape_29.setTransform(-18.6871,174.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A0A393").s().p("AgEAFIAEgTIABACQAIAPgJAMg");
	this.shape_30.setTransform(-10.6421,178.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BBBDB1").s().p("AgDgPIAKAKIgGAAIgHAVg");
	this.shape_31.setTransform(-22.2,189.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BFC7AF").s().p("AhOFcIgFgYIgHAOIgDgnQAaARgCAcIgDAMgAApjkIAAgSIAJAIIAAgRIAMgMIgHgBIATg9IAIgFIgCgIIAGgCQAGgEACgHQgEBFgnA7g");
	this.shape_32.setTransform(-12.7,198.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9CA88F").s().p("AAHAsQgQgggIgiIAQgVQAWAVgTAnIAGgEIADADQAOAQgRAMIgBAAg");
	this.shape_33.setTransform(-16.6465,170.525);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#9BA78F").s().p("AAGAiIAFgLIgGgCIgGAKIgDgSIADgCQAIgTgHgZIAFAAIALBDgAgIgHQgHgMABgOIAKAfIgEgFg");
	this.shape_34.setTransform(-13.7517,168.975);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A9B39D").s().p("AAXCPIAAAFIgFgCIgBgPIgdgjQAQgNgNgPIgDgDIgGADQASgngWgVIgQAVQgChcAchZIACAzQADAtAUA6IgFAAQAHAZgKAUIgCACIACASIAIgKIAFACIgFALIAKAAQAIAcAAAfQAAABAAAAQAAAAABABQAAAAABABQAAAAABAAIAFALIgFAKgAAAAcIADAFIgKgfQAAAOAHAMg");
	this.shape_35.setTransform(-14.5318,165.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B9C1A9").s().p("AgZgHIADgBIAEgPQAFgTANgRIAFABIANAcIADgOIAIACIgYBQIgDACIgIAHQgKAJgMAEg");
	this.shape_36.setTransform(-8.025,164.85);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DBCEA9").s().p("AADACIgZgDIAKAAIAkAAIAAADg");
	this.shape_37.setTransform(71.8,273.525);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#83906C").s().p("AgIAFIgDgEIgHgCIAcgIIABgKQANAPgJAPQgFAIgJABQgCgJgHgGg");
	this.shape_38.setTransform(42.8634,283.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C9CCA6").s().p("AgmAKIAggIIATgWIAFAAIgKALIAPgJIABACIgBABIACgBIAAAAIAAAGIgGAJIACAAIAQABIACAFIgpAQg");
	this.shape_39.setTransform(56.7,269.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B4BBA5").s().p("AgUADIAAgFIApAFg");
	this.shape_40.setTransform(73.1,266.25);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B6C4A0").s().p("AiMA8IAHgIIAAgGIgBAAIAHgHIgDALIANgVIADgDIAPgPIgQgLIAQgTQgHgDgKgfQBpgNAHANQBGANBLgNQhCArhqAQQgLADhDAlQgUAMgJACg");
	this.shape_41.setTransform(72.675,263.325);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A0AF8A").s().p("AgXAAIAHgEIgGgDQAAgEAEgDQACgDAEAAIAGACIAAgIIAKALQARANADAXQgfgCgQgWg");
	this.shape_42.setTransform(25.95,284.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#717969").s().p("AADAIQgIgIgFgLIAKAAQAEAAAEACQADABAAADIAAAIIgBAIIgHgDg");
	this.shape_43.setTransform(39.275,276.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#828979").s().p("AgWAAIAAgJIAtATg");
	this.shape_44.setTransform(42.675,276.925);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D5DEC9").s().p("AgegMIAYASIAbgLIAHABIACAHIgSAGIAAABQgIADgGAAQgUAAgIgZg");
	this.shape_45.setTransform(33.5,278.7266);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#DFC594").s().p("AgZgDIAzAAIgFAFIgMACIgEAAQgQAAgOgHg");
	this.shape_46.setTransform(2.375,286.6798);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#4A553B").s().p("AgmglIAyAhQAUAOAHAWIAAAGQgdgPgwg8g");
	this.shape_47.setTransform(-1.975,273.625);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#C7C987").s().p("AgbAwQgkgZgXgjIABgIQADgOgNgGIAAgFIAAgFQAIAEAIADQAdAKAhgBIAVAYIAEACIBXA4QhMABgNACIgIAAIgZgDg");
	this.shape_48.setTransform(11.45,281.475);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#9CA883").s().p("AgzAaIAFgNQAfAXALgfIAEAAQAVgEgBgVIAKgIIAGAGIALgGIgGgMIAEACQARAWgVAVIgPAAIgGAVQgEAAgDADQgDADAAAEIgEABQgLAEgKAAQgUAAgQgPg");
	this.shape_49.setTransform(22.6853,280.042);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F1F2E5").s().p("AgOgMIAEAAIAVAFQAAABAAAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIAAAPg");
	this.shape_50.setTransform(14.85,269.875);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3D4336").s().p("AgQADIAAAFIgCAAIACgPIAKAAIAZAPg");
	this.shape_51.setTransform(17.05,266.725);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D4DA9B").s().p("AgcAnIgOgQIgcgHIACgEIgNgNIASgQIAIAMIANgGIgGgbQAigCAaAUQARAOAQAOIgFAAIAfAaIALAFg");
	this.shape_52.setTransform(9.275,267.7864);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#4B593B").s().p("AAEgQIAAAfIgHACg");
	this.shape_53.setTransform(0.95,260.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B1BA87").s().p("AAHAyQhCACgrg0QhHgxBxgCIAZAAIAGAbIgNAGIgIgMIgSAQIANAOIgCADIAcAHIAOAQIBuAAIAjAJIgfAIQgdAJghAAQgPAAgPgCg");
	this.shape_54.setTransform(7.9683,269.084);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A6AD78").s().p("AgRAAIAEgPIAGAAQAAAIAHAHQAHAFALAAIgIALg");
	this.shape_55.setTransform(11.025,261.85);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A9BBAC").s().p("AgKAJIACgOIAGgGIADAAIACAHIAIAEIgIAAIgKAMg");
	this.shape_56.setTransform(5.35,250.975);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#A9B07B").s().p("AgEALQgLgIgPAAQAEgIAJAAQAXAAAKgXIALAEIgCAJIAGADIgaApQAAgLgJgHg");
	this.shape_57.setTransform(15.9,262.075);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#AAB278").s().p("AgUAKIgDgBIAvgUQgHAXgVAAQgHAAgJgCg");
	this.shape_58.setTransform(13.525,257.8375);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#89966F").s().p("AgKAAIAGgJIAJAEIAGAFIgBALg");
	this.shape_59.setTransform(36.225,270.65);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#919D79").s().p("AgYAIIACgBQAKgIgGgLIAAgFIAKAAIAhAXIgKABIgDAGIgKgFIgFAKg");
	this.shape_60.setTransform(35.5,268.825);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#7C856D").s().p("AgqAAQAsAHAhgWIAFAAQAGAMgJAHIgCABIgfAAIgEALg");
	this.shape_61.setTransform(29.5161,269.075);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#545C4A").s().p("AAFAHQgNgEgGgLIAGAAQAQACAHAPQgGAAgEgCg");
	this.shape_62.setTransform(26.15,271.575);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#7D8965").s().p("AgZADIAAAFIgGAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQACgBACgCQACgDgBgEQgBgDgDgBQgDgCgEABIAAgFIAkAFIAfAFIAKAGIgFAAIACAEIAIAFQgEAAgDADQgDADAAAEg");
	this.shape_63.setTransform(19.55,268.825);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#ADB999").s().p("AirA3QAUgWgRgWIgDgCIAFAMIgLAGIgFgGIgLAIIgHgTIgQAFQgNgNgCgQIAMgFIABgEIAMAJIAGAPIAFgCIAAgIQABgWgTgMQAAgEADgDQADgDAEAAQAFAAACADQADADAAAEQAGANAOADQAEACAGABQgHgRgRgCIAAgGQAdAMAcADIAAgEQAVAPAbAAIAEAAQAEALALAGQAJADAHAGIgLAAQAFALAJAIIAIAEIAAgIIAuALIAUgGIgagjIgEAAQglAAgegUIABgMIgGgFIACgGIAKgBIghgXIAAgFIAEgGIALgPIAOACIAMgNIAFAAQAMAIAOgDIAGAAIAeAbIgLAFIgJgFIgcAIIgEAMIAOgCQAIAJAJAHQAIAHAKAEIADABIAAALQAxAkA+AbQA5AYAwAvIABABQhAAAhBgYIgSAbIgMgDIgMABQgPADgNgFIgIAKQhtgBhXg9gAAABGIgdAIIAGAEIAEADQAGAHADAJQAJgCAEgHQAJgQgMgQgAhcAvIAAgBIASgHIgDgIIgGAAIgdAMIgXgUQAKAkAhgMg");
	this.shape_64.setTransform(44.05,275.05);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#414738").s().p("AgPAAIAAAGIgFAAQAAgFgDgCQgDgDgEAAIgIgEIgDgGIAFAAIAQABIAFAEIApAPIAQAFIAAAEQgdgDgcgMg");
	this.shape_65.setTransform(26.825,270.075);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#8E9E75").s().p("AgRAJIAYgVIAMAAIgBAHIggASg");
	this.shape_66.setTransform(27.1,255.25);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#A8B075").s().p("AgQACIAEAAQAXACANgSIAEADIAAAGQgUAVgegDIgCAAIgCACg");
	this.shape_67.setTransform(18.65,255.05);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#889576").s().p("AgnA0IgBgDIABgDIATgUIgCgKIgPgIIAJgfIgCgGIgOgBIgKAFIAEgHQAQgXAbgBIADABIACAPIA1gMIADAMIgkAUIgMgJIgGAEQAJAIAGAJQALAOACAUIgNgFIgFANQgIgEgIADQgLADgDAKIgCAGIgGAAIAAAFg");
	this.shape_68.setTransform(25,262.325);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#6C7859").s().p("AgGAnIgagQIAAgKIAagpIAAgKIAGAAIAJgFIANABIADAGIgJAgIAOAHIADAKIgUAUIgBADIABADIAMAFg");
	this.shape_69.setTransform(19.675,263.625);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#B6C5AD").s().p("AhFBQQgIgHAAgIQAAgHADgEQADgFAEAAIADABQAkALAJghIACgCIACgBQAeAEAUgWIAAgGIgEgDIgHgBQgfgOgigQQAUgHAIgRQAHgOgJgOQAYAKAMAVIAmgEIAIgQQANAdgMAbQgCADgDACIAPAMIgPAYIAAAFQgbACgRAXIgDAHIgGAAIAAAKIgGgDIADgJIgLgEQgJAXgYAAQgJAAgFAJQgLAAgHgGg");
	this.shape_70.setTransform(17.95,253.775);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#A5B69F").s().p("AhiCYQADgLALgDQAJgCAIADIAFgMIANAFQgCgUgLgQQgGgIgJgIIAGgFIAMAKIAkgUIgDgMIg2AMIgCgPIgDgCIAAgEIALAAIADAEIAhgTIABgHIALgEQAKgDAJgJQACgCgMgOQgEgOgCgiIgPAAQgMgBgIgKQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIAmAGQAggXA2hCQAGBWgDAPQgDAQAlAeQgKAQABADQABADAIAQQAAAOgIAMQgQAVgcAJIAIADIgIADIgKAQIgLAYQgUgCgHAEQgEAFgKAAIgYAAQgUAVgfgEIgMADIACgFg");
	this.shape_71.setTransform(32.8,251.75);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#6F9487").s().p("AgYAHIgBAAIgFAAIAugPIAPAFIgBABQgTALgUAAIgPgCg");
	this.shape_72.setTransform(28.825,241.872);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#A7BFB7").s().p("AgOgEIAKgKIAPAAIAEAAQgFAAgFAJQgFAHAAANg");
	this.shape_73.setTransform(24.6875,244.15);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#9DB6AE").s().p("AgUA4QgPAAgPgEIAAgqIAQgXIAWgVIANAtIAUhCQAOAeADACQAIAFADAJIACAJQAAAJgBAJIgCAJIgYAQQgUANgWAAIgCAAg");
	this.shape_74.setTransform(26.1813,234.3259);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#7B9A8F").s().p("AAPgQQgBAWgVAJIgHACg");
	this.shape_75.setTransform(19.025,241.175);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D4DED7").s().p("AgMgJIAJABIAGgDIAAgEIAKAAIgNAQIABgBIgDAKIgEAAIgGAGg");
	this.shape_76.setTransform(5.725,248.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#91ADA3").s().p("AhdAmIgCgGIADgKIgBABIAOgRIAHgKIgCgEIAFAAIAAAFIAugKIAHgJIALADIADgCIABgDQAKgLANAGIgOAIQAXABAOgTIAJgCQARgBAKANIAPAVIAAAFIgIAQIgmAEQgNgUgYgKQAJANgHANQgIASgTAGIgpgFIgDACQgMAHgRACg");
	this.shape_77.setTransform(15.075,246.6491);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#BAC0B0").s().p("AgPgGIAFgQIAaAfIgCANg");
	this.shape_78.setTransform(-0.75,227.65);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#778749").s().p("AgJANQAFgXAPgUQAGAVgKAYQgFAOgOACIADgSg");
	this.shape_79.setTransform(6.5411,230.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#B6C2BD").s().p("AgKALQADgQAOgFIAEAFIAAAFQgFALgMAAIgEAAg");
	this.shape_80.setTransform(0.75,232.2929);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#708144").s().p("AgDgLIAAgFIAHABIgFAgg");
	this.shape_81.setTransform(2.3,233.375);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#77874A").s().p("AANAfIgZgfIgFgPIACgHIADACIAZgKIAFA9g");
	this.shape_82.setTransform(-0.475,225.425);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#ACAEA1").s().p("AgDgWIALACIABAHQAAAXgRANg");
	this.shape_83.setTransform(11.5757,226.725);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#A9C0B9").s().p("AgLA5QgEgWgTgMIgDAAIgDACQgHgGAAgJIAAgGIAAgFIgEgEIAPgVIAGAAIAPgKIAYgjQgBA7gIAWIAxhRQgGA1ACADQAZBDhDANIgCAFIgKACIgCgPg");
	this.shape_84.setTransform(12.7665,235.875);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#929582").s().p("AgmAlIgFAAIABgCQAZgjAAgpIAFAAIgDAlIAOgFIADAAQgKAJAAAPIABAAIAAAGIABABQATAHAPgOIALAAIgLAQIAQAAIAAAKQgtgNglAJg");
	this.shape_85.setTransform(-0.475,207.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#78845B").s().p("AhHGOIg1AAIg+AAIABgJIgIgEQAEgWgLgQQgDgDgSgsQAJA4gDAJQgDAKgBAIIAHAGIAAAJIgQAAIg5AAIgQAAIACgIIAIACQAYgfgGgnIgCgHIAbgaIgCgIQAFgHAAgIQAAgHABgEQACgDgCgUIgbAoIgEABQgFAmgdAWIgCgiIgkAlIAAiHIAFgEQAGABAFADQAFADAFAEQAXgIAVAKQAoAfghgzIgMgSIAJACIAXAOQgUgSgBgDQgXhAAjg6QAAAcAPAaQgQATAFAcQABAHAEAHQAFAKAOAEIAKAOQgJgQACgBQACAAAIAQQAGAQABgVQABgVAGgMIAGAAIgEgQIAIgJIgDgHIgIAKIgCgJIgFgDIAJgDQAGgBAFgEQAFgDABgHIAVgFQAFgMAKgJIAFgGQANgNATgHIAPg+QAEAGAFAEIAMAGIAAAOIAAAaIgCAQIADACIALgMIAIAAQARgCAMgHIADgCIAoAFQAiARAgANIAHACQgNATgYgCIgEAAIgKANIgvAVQgEAAgDAFQgDAFAAAGIgFAAIgEAPIAbARIAHgLQAPAAALAIQAKAHAAALIAAAKIgKAAIgCAPIACAAQAEAAADABQADACABADQABAEgCADQgCADgCABIgWgGQgPgPgQgOQgcgUghACIgaAAQhxACBHAzQArAzBDgBQAyAFAqgMIAegJIgjgIIgLgGIAAgPIAGAAIAAgFIA5APQATAMgBAWIAAAIIgFADIgGgQIgMgJIgBAEIgMAFQACARANANIAQgFIAHATQACAVgWAFIgFAAQgLAfgfgXIgFANIgVgaIgzgVIgFAAQghABgdgJQgIgDgIgFIAAAFQgGgWgUgQIgzggQAxA9AcAOQANAHgDANIgBAIQAXAkAkAZgAjaEGIAEAZIAGACIASgQIgCgDIgCgFQgCgDABgSQAAgFgCAAQgFAAgQAXgAlLDdQAIAOAPgFIAFgBQgJgJgLAAIgIABgAj4DQQAWAgAYgfIADgEIgDgDIgQAAIgagHgAiBBwIgbAIQgbAbgLAhQAhgGATgcQASgcAngqgAh0CiIAIgDIAAgggAEZEnQAAgDgDgCQgEgBgEAAQgHgHgJgDQgLgGgEgLIgEAAQgbAAgVgPIgPgFIAEgKIAgAAIAUAKIAWALQAeAUAmAAIAEAAIAaAkIgUAGgACCDjIgFgFIgQgBIgKgFIAAgGIAFAAIANgDQAfAEATgVIAZAAIAaAFIAKAAIgEAGIAAAFIgLAAIAAAEIgFAAQgaASggAAIgUgBgAkIiXIAsAEIAIAfQgJAFgBAKQgDAVgTALgAjKitIgBgLQAAgugZglIApgaIgYAFQgHACgHADQABgRAWgTIAlgkQAlgIAuANIAFAUQghAQgmALIgCAAIAAABIgjAJIACABIAcAVIAFAAIAFAuIAFAPIgFAQQAAATgLAOQgKAOgPAAIgFAAIgVAVQgLgYAQgXgAhsiyIgFg+IgGgVIAlAKQAFAmgRAjIgLACgAhiloIALgQIgLAAQgPAOgUgHIgBgBIAFAAQAbgFAPgWIAKAHIgKAOQAEgBAIACQAJABADAEQADACgFADQgDADgOACg");
	this.shape_86.setTransform(12.25,246.45);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#9DA08E").s().p("AgWAQIAAgGIAogZIAGAAIAAAFQgPAVgaAFIgFAAg");
	this.shape_87.setTransform(1.05,207.75);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#BABDB0").s().p("AgQAaIAAgKQANgCADgDQAEgCgDgDQgBgDgJgCQgIgBgFAAIALgMIgLgIIAAgEIAFgGIABgPIAGgBQADADABAJQAAAJAOAFIAKALIgKAPIAPAJIgdAJIAFAIQgFAAgCAEQgEAFAAAGg");
	this.shape_88.setTransform(5.7,208.725);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#B6B7AB").s().p("AgJAJIAFgXQABAUANgIIgTARg");
	this.shape_89.setTransform(2.35,202.625);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#898C79").s().p("AgJANIAOgZIAFAAIAAAGIgPATg");
	this.shape_90.setTransform(0.325,204.875);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#A5B493").s().p("AghAaQgFgDAMADIgJgKIgCAAQgigSgDgmQAnAQAaAOQAaAMA6AHQgiARgKACQgKADgFAEQgEAEgmACIgHgPg");
	this.shape_91.setTransform(89.45,283.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#8C9A75").s().p("ABgBQIgCgEQgggwg3AFIAAgDIgLgCQgTgFgQgLIgaAAIgagOIhGAAIAAgKQAAgagNgVIgfgbIgGAAQgOADgMgIIBTgfIA4gDQAqgHAlgNQAKAeAHADIgQAVIAQAKIgQAQIgDADIgMAVIACgMIgJAGIgOAIIAKgLIgFAAIgUAYIggAIIAkAKIAqgQIAEgBQAvgZA0gJIApAAQBBgCAdARIgGAJIgMgBQADAHAGADQAIADAHgCQgeAJgXgWQgSARgXgMIgDACIgDAIIgFgGIgLAGIADAHIgbAKIACAFIAHACIAHgCQAJgBADAGIACADIglAAIAAgDQgwAEgigaQgdAPghABQCFAOB+A0QADAnAjASIACAAIAJAKQgNgCAFACIAIAPQhOgLhAg3gAgmguIABAAIgCACg");
	this.shape_92.setTransform(63.025,272.575);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#B0BA9C").s().p("AhTAYIgCgDQgEgIgJACIgGADIgHgDIgDgFIAcgKIgEgGIALgGIAFAGIADgIIADgCQAXAMASgRQAXAVAdgIQgHABgIgDQgFgCgEgIIAMACIAGgKIAzAXIAtAFQhGAPglgHQgTgEgSAMIACACIgZAHIgfAEg");
	this.shape_93.setTransform(82.6,270.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#909B83").s().p("AiBIAQgVgKgXAHQgEgEgGgDQgFgDgGgBIgFAEIAAggIAXAIIAEgEIAEAAIAJAJQAJAGAPAFQAOAFgfgnIAXAEIgNgZIgKgBIgDgLIgegBIgBgXIgIgFIgFAfIAAjQIAFg0IAPAPIAHAAQAKADAFAIQAVAIAUgIIgQg0IgkgQIgfgkIACiRIAOgDQgGgDgRgqQgRgqALhIIACgOIAIgUIAIgWIAFAAIAVAkIgLgFQgVAzAfAvIAGAGQADALgEAJQgDAHgEAHIgKgBIgCAOIgEAHIAIATIANgCIAAABIAAgBQAFANAJALQAHAJAIAFIAEgCQABgmAGglQAYiAg7hsQgIgEgHgDQgPgFgIgNIAFAAIACgkIAIAHQgEAPALAKQAGAGAIAEQAAgKgDgIQgMgbgBgcQALAGALgGIgPALIAPAUQAIBBAXA/QADAJABAJQAXgwAEg0IAAgEIAAgGIAKAKQgQA5gFA1QAuiQB4haIAeggIAMgKQgCC/iuArQgZAugFA0QgIBXgUBRQAXAMAMAXIAihBIAHABIgFgHIALgVIAHgQIgEAOIgRA7IAFAFIAFAAQgVARgCARQAHgDAIgCIAXgFIgpAbQAaAlgBAtIABALQgQAXALAYIASAaIAEgaIAIgFIgEgQQAPAAALgOQAKgNAAgUIAdAeIACgOIAFAAIADACIAMgCQARgjgGgmIglgKIAGAVIgaAKIgDgCIgCAHIgFguQAJAFAHgEIAFgBQgBgWgSgIQAlgLAhgQQAAgGADgFQADgEAEAAQAeAuBBgeIAqgXQgQBDhIAVQgGACgGAEQgYAAgXAFQALAhgLAjQAbgDAXgSQAQAigOAnIgFAAIgPAVIAEAEIgBAFIAAAHQAAAJAHAGIADgDIADAAQAUAMADAWIACAPQgPgMgTABIgHABIAPAKIgKAbIgFAAIABAEIgHALIgKAAIAAAEIgHADIgJgBIAAgQIgMgGQgFgEgEgGIgPA/QgTAHgNAOIgEAFQgJAJgGAMIgVAFQgBAHgFADQgFAEgFACIgJACIAEADIACAJIAIgKIADAHIgIAJIAEARIgGgBQgGAMAAAVQgBAWgHgRQgHgQgCAAQgDABAJAQIgKgNQgOgFgFgKQgEgHgBgHQgFgbAQgUQgPgaAAgcQgjA7AXA/QABADAUASIgXgOIgIgBIALARQAVAggIAAQgFAAgPgLgAhRGkIAEAGQAOgTgWgOQgDANAHAOgAg4GVQA5hlAahPQgCgHgGgBQgIgDgIAHIgFgaIATgTIgJgHIgPAPIgKAAQAHAWgQARIgCADIgkAlQgBgTAGgTQADgLgIgIQADAPgHAPIgKAQIAEAPQAMAeACAHIABALIAMABIAEgRIAKgEQgFAUAAAWIgCAHIgQgXQgFAeAFA2gAi9ELIAPANIAJgFIgDgCQgHgHgIAAIgGABgAhfDoQASgMADgVQABgKAJgFIgIgfIgsgEgAAuC8IAHghIgIgCIgFgFQgOAGgEARQAQACAHgPgABRCcIgDASQAPgCAFgOQAKgagGgUQgQAUgFAYgAgjAIIgCgBIAjgHIgFAdIgcgVg");
	this.shape_94.setTransform(-2.5661,216.3457);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#A4B190").s().p("Ag1AnQgugDgpgQIACgJQAWgCASgJQBxgyB+AHIghAaIgXgJQghACgZASQgXAOgGAZIAPAGQAcADAcgDIgDAGIh3gGg");
	this.shape_95.setTransform(300.7,15.1273);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#A9B698").s().p("AABAAQgRAGgTgKIgTgLIBpAAQAKAQgPAOIgBABg");
	this.shape_96.setTransform(319.1291,6.85);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#9CA68F").s().p("AAEAWQgPgWAHgXIAAAEQAOAQgEAVIAAAGIgCgCg");
	this.shape_97.setTransform(456.32,192.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#9FAA93").s().p("AAAAfIgFgCQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgHggAAgjIAQAhIAAAGQABAXAGAVIgEADg");
	this.shape_98.setTransform(451.4484,193.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#BAC2A9").s().p("AgLBTIgBgPIgDgDIgGAFIgKgIIACgQIAJAKQgBgoAOgkQAHADAGgDIAMgHIgDgJQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAgBQAOgVgMgaIAGABQAVBfg0BNg");
	this.shape_99.setTransform(446.0602,195.825);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#BBC791").s().p("AgZAXQABgEAEgFQADgDABgEIgIgDIgCgOIAZgBIAEgFQAIgIAAgLIANABIAEAEIghAxIgKACQgHADgCAGIgDAGIACgNg");
	this.shape_100.setTransform(453.025,176.925);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#A8B099").s().p("AgECeQgDhRABggQACgngKgnIACgFIgEgBIACgCIAFgCQgGgWgBgXIAAgHIgRghIAAgxIAGAAIAoAYIAOgYIAHALIgKAPIADAXQAAAFgBADQgCAEgDAAIAAgEQgGAXAPAXIACACQAJBUgcBRQgEAKgJA3IgDAUIgBgUg");
	this.shape_101.setTransform(453.675,202.225);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#B3B5A6").s().p("AgjA/IgEgXIALgQIgHgLQAIgWgLgaQgGgNgDgQIAiAnIAPABIAGAFIAjALIAFAGIgDALQgKAGgJAHQgHAFgFAHQgDAAgDgBQgDgCgCgCQgCgCgBgDQgDgIADgJIgIAAQACgJgJgFIgEgBIAGAgIgEAHIAIAOQACALgKAGQgEADgFAAQgEAAgFgCg");
	this.shape_102.setTransform(460.025,183.094);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#9CA091").s().p("AgUAJIABgHQADgJAJgFIAPAEIAGgEIAHALQgCADgEAEQgLALgOgLIgBAHg");
	this.shape_103.setTransform(463.775,167.425);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#5E6F36").s().p("AgFAIIAGgbQAAAAAAABQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIAAAFIgKAbg");
	this.shape_104.setTransform(454.7,160.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#BEC5B0").s().p("AgCAAIgGgCIAIgIIAJAIIgJANg");
	this.shape_105.setTransform(448.175,161.15);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#748153").s().p("AgEANQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBgBAAAAIACgDQAHgKgEgOIAEAAQAAABAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAIgKAbQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAg");
	this.shape_106.setTransform(455.575,157.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#D9DCD0").s().p("AgLgYIAQgRIAFAFIACAJIgHAOIgFAAQAEANgHAKIgCAEIgGAcg");
	this.shape_107.setTransform(455.325,157.55);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#BBBEB1").s().p("AgGgDIAAgKIAFACQAPALgLAOg");
	this.shape_108.setTransform(459.333,151.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#B0B3A6").s().p("AANBpIAMgCIgDgMIgCgFQgGgMgNgIIgLAEIg2hVIABgGQAEgWgLgQIAAgGIAMgcIAQgwIAIAPIADAAQAMAAAIAPQAIAOAAAVIgGAAIgNATQAKAYAZAIQALADAKABIAiAWIAAgWIACgGIABBNIgfgbQABAUAEAUQAHAsgSAjgAgEAQIgCAHIAIADIACgGQAOALALgMQAEgDADgFIgHgKIgGADIgRgDQgIAEgCALg");
	this.shape_109.setTransform(462.325,166.075);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#979B88").s().p("AAMAQQgLgBgJgDQgagHgLgYIAOgTIAFAAQAFAAADAFQADAFAAAHIAQARQARAMAWAIIAFAAIAAAXg");
	this.shape_110.setTransform(464.55,162.25);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#BBC692").s().p("AggAhIAIgCQA1gYgBg4QALAugMAvIgBgBIgpAHg");
	this.shape_111.setTransform(466.288,156.725);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#BFC7B0").s().p("AgZA0IAHgnIABgHIAIgkQAPAKgBASIgBAHIgJgDIgEALIADAEIgIAdIABAHQACAMgHAJIAAABgAAGgvIgDgKIALgGIAEgLIAGABIACAJQACAMgKAIg");
	this.shape_112.setTransform(444.0417,194.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#979F7D").s().p("AhZCLQgIgZgZgMQAOgjAVghQAshDBDgIIAUgyIAEgCQAdgOAFghIAFAAIAMAFQgFAVAQANIAFACQALAagFAbIgEgFIgNAAQAAALgIAHIgFAGIgZABIACAPIAIADQgBAEgDADQgEADgBAFIgCAMIAGAnIgGAAIgGgKIgOARIgBgHIAIgVQAFgLgHgKIgMgDQgJAYgSAQIgLALIgHgHIgJABQgTAcgeARIAPAFIgmAhIgBgCg");
	this.shape_113.setTransform(443.714,178.575);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#AFB7A4").s().p("AgzgdIAFAAQAYALAIAYIABADIg9BCgAAJgcQAegRATgcIAKgBIAHAGIgyAtg");
	this.shape_114.setTransform(436.175,191.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#AAB88F").s().p("AgxAtIAGgGQAPg1AtgeIAAABIAhARQgFAMgQAUQgQAVgpASg");
	this.shape_115.setTransform(410.45,153.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#BCC3AC").s().p("AAKhVIAWgBIgEgNIAHAIQAHANgOAHIgKgEIgDAHIADAEQgPAfATAcIgCAmIgTALQgXgPgIAZIAJAMQAPgRAVAJIABgGIAFgCIAHAGQAAAFgBAEQgDAOgQABIgEAHQgIAJgMgDIgEgJIgOAIIgDAIQgBhjAwhWg");
	this.shape_116.setTransform(444.7036,158.925);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#B6B8AC").s().p("AgJgKIAMABIACAAIAFADIgEAGIgIALQAGgKgNgLg");
	this.shape_117.setTransform(434.725,157.775);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#B7BAAE").s().p("AgEAPQAEgUgRAPIAAgTQAKgMgVgFIAdgIIABADIAQACIgSAPIAIABIAVgEIgTAYIAIACIAAAGIgSAUQAGgUgKAAg");
	this.shape_118.setTransform(431.925,152.475);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B5B9AC").s().p("AgLAPIAHgfIAFAAQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABIAEABIAGARQgMgKgCAVg");
	this.shape_119.setTransform(439.125,159.525);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#979A87").s().p("AgGAaQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAGgZABgRIAAAAIAAgBIAAAAIAKAAIgLAwIgEgBgAgIgaIAFAEIgEABg");
	this.shape_120.setTransform(440.05,155.625);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#919480").s().p("AgUAcIAEgGIgFgDIgCAAIAAgBIAKgHQASgMAJgaIAAgCIAEAEIAAAGIAAAGIAEgCIACACIAAAAIAAABIgsAqg");
	this.shape_121.setTransform(437.425,154.875);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#AEB0A2").s().p("AgMAIIAAgEIAFgGIAFgGIAPAEIgGAHIgGAGg");
	this.shape_122.setTransform(436.125,149.825);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#9C9F8D").s().p("AgbAOIAwggIAHAGIgBAOIgEgCIAAABIgDgBIgvATg");
	this.shape_123.setTransform(436.525,152.025);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#8E917C").s().p("AAfAZIgCgBIgFgEIAAgGIACgPIgHgGIgSAAIAGgIIgPgDIgFAFIgQAAIgRgCIAAgDIgDAAQA4gQArAbIgIAgg");
	this.shape_124.setTransform(436.75,150.8773);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FBFBF9").s().p("AATgFQgKAFgKADQgJACgIABg");
	this.shape_125.setTransform(445,141.675);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#6C8039").s().p("AAFANIAAgXIAAgWIABAEQAIAQgKAfIgNAOg");
	this.shape_126.setTransform(428.2278,136.775);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#B0B3A3").s().p("AgTAcQANgbAEgcIAFAAIAFAAIgFAOIAKACIADAQIAEAGQgOAQgTABIgGAAg");
	this.shape_127.setTransform(425.7,131.85);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#819158").s().p("Ag9A/IgBgLIgEgBQgQgDgKgRIAAgBQALgdAWgEIA0gOQAggIA/gmIAGAAIAAAGQgPARgTAKIgGABIhXBcQgPgIgNAIg");
	this.shape_128.setTransform(415.5,131.55);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#899766").s().p("AgVBhIgCABIgCACQAKgggIgPIgCgEIAAAWIgKgcIgEgGIgDgRIgKgBIAFgPQAUhKAoAJIADgNIgOgqIAGAAIAVAyQAPAQACAWQAAADADAFQADAGABAIQAAAIgEAQIgIAfQgRAug3AWIAKgUg");
	this.shape_129.setTransform(431.2778,128.625);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#64724A").s().p("AgQALIAQgVIARAAIgbAVg");
	this.shape_130.setTransform(429.8,109.15);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#6A7651").s().p("AhbAuIgDgOIARgEQALgDAFgKIACgEIABgEIATgKIACgLIAIAEIAMgEIAAABQABgDAEgBQALgDAOAAQAWgHAYgCQAOgDAAgPIAOAMIgIAXIAKAJIAGAAIgfAYIgCADIgaAMIgEABQgMAHgNACIgYACIgHAAIhDgCgAgFARQgOAKAIACQADgBACgDIAFgEIgEgFg");
	this.shape_131.setTransform(419.2,110.6861);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#ADBB80").s().p("AgFgPIAFgMIABAEQAJAZgFAag");
	this.shape_132.setTransform(469.1893,131.85);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#ADB49B").s().p("AgFgCIAAgKIAFgLIAGAAIAAAaIgGAAIgFAVg");
	this.shape_133.setTransform(457.475,147.05);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#61713B").s().p("AgJAtQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAHgOIgCgJIgFgEIgRAQIAHgQIAUgmIAGgWIAFAAIAGAmIAKARIgEAFIgEAAIgIgOIgPAvQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBgBg");
	this.shape_134.setTransform(456.9,152.025);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#929480").s().p("AgHgPIAFAAIAKAVIAAALg");
	this.shape_135.setTransform(456.075,145.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#8F9E6C").s().p("AgIAzQgDgEgFgBQAAgUgIgOQgIgOgLAAIAFgFQAKgPgQgLIgFgCIAAAKIgFgmIAFAAQAFAPANAMIAaAXQAKgLAPAAQATgCAQAHQABA4g2AYIgHACQAAgHgDgFg");
	this.shape_136.setTransform(463.5759,153.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#8A8D78").s().p("AgFAFIgGgEIAPgbIAIAKIgMAoIgIACg");
	this.shape_137.setTransform(448.175,144.95);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#8D907C").s().p("AgUAVIAlgpIAEAAQgFAbgYAMQgEACgEAAIgEAAg");
	this.shape_138.setTransform(444.125,147.2143);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#8B8D79").s().p("AhPAbIgKADIAYgZQAHgLAKgLQAbggApgFQAegCA7AOIAAAFIACAAIABABQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAIgvAgIi0A4gABAgVQAJgBAIgDQALgDALgGg");
	this.shape_139.setTransform(436.675,144.5375);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#C5CD9C").s().p("AgXAWQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBIgBgBIgCAAIAAgFQABgFADgEQATgWgCgdIAQAAQAYAWgHAFQgIAGAEA7IAHAFg");
	this.shape_140.setTransform(450.475,139.025);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#8C9A63").s().p("AgvgPIgFAUIgBgFQgDgQAOgLIAUATIApgZIAAgDIAQgSIAGAAIALAsQAGAcgJAcIgDAJIhdhGg");
	this.shape_141.setTransform(464.4773,135.725);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#AFB99C").s().p("AAAAZIAAgFQAGgTgMgOIAGgLIACAJQAHAUgEAUg");
	this.shape_142.setTransform(458.1012,137.65);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#5B6B34").s().p("AABBCQADgUgFgVIgDgJIgGALQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAIABgCQARgUgCgbIAFgmIAFAAIAAAmIAFAWQgOAKADARIABAFIAAAng");
	this.shape_143.setTransform(458.55,133.525);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#687744").s().p("AADAfIgKg9IAGAAIAJA9g");
	this.shape_144.setTransform(458.85,123.825);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#C0C7B1").s().p("AAOAvQADgogYgfQAAgCgDgCQgDgCgGAAIARgVIAFAEIAFABIAMA8IgGAmIAAgFg");
	this.shape_145.setTransform(457.2,125.475);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#E8EBE2").s().p("AgCgKIAFgFIAFAAIALAPIgLAAIgaAQg");
	this.shape_146.setTransform(461.05,116.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#868775").s().p("AgdArQgHgBATgYIAPgqQAigdAAAQIgCAEIACAAQgCAJgJAQIgZAeQgTAVgFABIgBgBg");
	this.shape_147.setTransform(443.1579,126.1087);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#B2BBA0").s().p("AgbBDQAMgWgQgVIgDADIADAeIgIACIAAglIgLg9IgJgNIAJgJIAGAAIAbgQIALAAQAHAIAKAHQATAKAUAKIAKgCQgPAagkgDIgFAFQAXATAFAdIgRAAIgHARIgCgPIgOgFIgDgHIgLAKIAKAQIgBAeg");
	this.shape_148.setTransform(463.675,124.75);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#6E7D41").s().p("AgOAoQgJgHgJgIIgKgRQAAgPALgNIAbglQAOgGAJAJQAnAqgYBGIgJACQgVgJgSgLg");
	this.shape_149.setTransform(466.2285,114.4207);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#90986D").s().p("AgXgGIApgDIAGAEIgPAPg");
	this.shape_150.setTransform(465.975,106.025);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#A2A579").s().p("AgKAOIgBAAIAFgCQATgHgIgSIAFAAQAIAbgXAAIgFAAg");
	this.shape_151.setTransform(468.6275,105.638);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#AFBC96").s().p("AgrAGIAEgCQAXgDACgbIAAgBIAAABQAKARAPADIAEABIABALQANgIAPAIIgFAEIgQAKQgLAGgMABIgIABQgWAAgNgWg");
	this.shape_152.setTransform(407.7,137.3397);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#BBC4A7").s().p("AgLAAIgEAIIgHAAIgDgDIABgEQAUgZAeASIgKAKIgQAKg");
	this.shape_153.setTransform(375.725,49.5689);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#95A17E").s().p("Ag8gfQAEgCAsgtQArgsBhA6IABAEQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAIgIAhIgEAAQgSgagfAEIgLAAQgcAggOAnIAEAAQAJAYAZAFIgIAKQgUAHgcACQgbAChnAYIgDABg");
	this.shape_154.setTransform(387.75,70.359);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#77835D").s().p("AgNAuQgZgFgJgYIgDAAQANgnAcggIAKAAQAggEASAaQABA7giAMQghAMgFAFg");
	this.shape_155.setTransform(394.8032,70.9789);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#525B4A").s().p("AgCAGIgLgFIACgBQAIgJALAFQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAAAAAAABQAAAAABABQAAAAAAAAQAAAAAAABIgEAGg");
	this.shape_156.setTransform(364.3,50.4888);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#798765").s().p("AgGgMIALAAQAGAAAFADQAFAEAAAEIgBABIgBACIgDAAIgKgGIgOAGIAAALIgMAAg");
	this.shape_157.setTransform(359.7,50.75);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#BDC7A4").s().p("AAAAJIgCAGIgLAAIAAggIAFADQAIACAJgFQALAQgLAPIgEAEg");
	this.shape_158.setTransform(353.8,50.125);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#C2CAB3").s().p("AgTBJIgDgBQgpgoAQgwIAJgGIgGgFQAjhJA+AkIgcgBIgCADIAEATIgCACQgWAmApAkQgIAFgKgCIgFgDIAAAhIAMAAQgPALgRAAQgJAAgLgEg");
	this.shape_159.setTransform(350.2274,45.0428);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#94A280").s().p("AATAUQgugJgvgGIACgBQAOgNgKgSIBzAAIAcAgIAAARQgTgIgPAKIgFAEQgIgGgJgCg");
	this.shape_160.setTransform(331.075,7.975);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#A3B18C").s().p("AjMAfIgBgBQAcgnApgSQAogSBrgRQA6gGA1ARQA1gEAyACIABAEIgLARIgMABQgQADgFAQQgjAFgdAUQgjAYgqAAQh4ACiKAVIgJAEg");
	this.shape_161.setTransform(340.8,26.4078);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#83926A").s().p("AjPApIgQgGQAHgZAXgOQAZgSAhgDIAXAJIAhgZQCOAACJAoQAJACAJABIAFAGIABAFQiYgiiPAuQgmANgqADIgcABIgcgBg");
	this.shape_162.setTransform(322.8,14.9625);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#849267").s().p("AgxgNIAAgRQAcALAWAUIAOAOIACAEIARgDIAMACIAEABIgWALg");
	this.shape_163.setTransform(343.55,11.55);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#BECBAA").s().p("AgNgWIAWAAIACACIADAIIgIAEIADAfg");
	this.shape_164.setTransform(343.275,7.55);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#7E8D65").s().p("AAhA8IgDgQIgOAQIgFgCQgsgUgxAFIgBgFIgFgGIAGAAQAKADABgJIAWgLIAVADIgKgHQgigagQgpIgCgIIgDgDIAhAAQAZALAZgFIAKgBIAhAVIgbAjQAJAOAOAGIAPAHIAyAvg");
	this.shape_165.setTransform(353.525,11.975);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#BDC5AE").s().p("AgmgEIBNAEIgLABQgNAEgNAAQgUAAgUgJg");
	this.shape_166.setTransform(399.95,30.0188);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#F0F2EB").s().p("AgRANIACgdIAhAIIgbAYg");
	this.shape_167.setTransform(385.475,43.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#636C57").s().p("AAUAOIgGgBIg2gPIAAgMIAFAAIALAGIBBAQQgHAHgIAAIgGgBg");
	this.shape_168.setTransform(365.4,47.0125);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#7B8371").s().p("AgUAFIgFgKIAFABQANADAIgJIAZANIgZAIg");
	this.shape_169.setTransform(369.425,48.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#656D5E").s().p("AgQABQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIAAgFIAWAAIAVAFIglAGQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_170.setTransform(367.3,50.025);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#D0D8C7").s().p("AABAOQgLgOAKgQIAFAAQgKAQAKARIgEgDg");
	this.shape_171.setTransform(365.687,38.95);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#C3CBB4").s().p("Ag8AWIgFAAIAbglIASgFQAKgDAFgJIAVAAIAGAAQALAaAZANQAFAEADAGIgFAIIg8ADIgGgQIgMgEIgKAZg");
	this.shape_172.setTransform(372.325,35.025);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#D1DAC5").s().p("AgSgDIgGAAIAAgFQAUgEASAJIALAFIgDAIg");
	this.shape_173.setTransform(376.45,32.101);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#B4BBA2").s().p("AgdgEIA7AAIgBACQgMAHgOAAQgPAAgRgJg");
	this.shape_174.setTransform(377.575,23.3265);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#C4A05E").s().p("AgdgCIAAAFQgDAAgBgDQgCgDAAgEIgLgcQAiAIAYAZIACAAIAhAmg");
	this.shape_175.setTransform(381.975,14.875);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#CCBE9D").s().p("AgMgNIAAgFIAPALIALAag");
	this.shape_176.setTransform(377,12.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#82926A").s().p("AgTABIgHgGIABgDIAHgFIgEgPIAJgCQAZgDAPAVIAAAGQgQAXgbAOg");
	this.shape_177.setTransform(400,16.975);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#85966B").s().p("AgFAEIgFgLIAGAAIAPAPg");
	this.shape_178.setTransform(402.175,8.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#84956A").s().p("AgbgHQAaAHAYgHIAEAFIgEACQgMAIgKAAQgPAAgNgPg");
	this.shape_179.setTransform(395.45,10.3561);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#B9BD83").s().p("AAZAmQg9gRgGg5IAugQQgDAVASALIAYANIAAA7QgHgLgLgDg");
	this.shape_180.setTransform(465.35,91.15);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#98A776").s().p("AAIFoIADhIQgQAOgZACIgEhCIAqAGIAFAFIAFhfIAAgEIgHAAIgBAAQgEg9AIgFQAHgGgWgWQADgDADgFQAWgpgYgcIgNADIgOgJIgcgdIgBgBIABgEIAKgUIAIgCIAKggQgJgKAAgRQAAgNAJgKIgWg9IADgCIAAgDQAEgugSgrIAbgsQAIACABAJQADAJgDAKIAYAUQAFANALAJQARAOgHAXIAHAHIAABeQAPAVgEAXIgDAAQgpAOARAvIgEAJIAEAIQACA1AXAtQABAEAHACQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQgQAegBAkIAAAGIgFAAIgFAAIAABjIgGARIAABCIAAALIgFAWg");
	this.shape_181.setTransform(451.65,128.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#8A9C6E").s().p("AAAgNIALAHQgBAIgIAFIgMAHg");
	this.shape_182.setTransform(450.825,90.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#BCC27C").s().p("AA2AhIgCgBQgGgDgGAAQgFgCgGAAIgFABIgDgQIgNAKQgEgEgEgDQghgMgYgZQgGgHgFgIQANgGAOAAQA4AAA1AVQAEAhgOAgIgBABg");
	this.shape_183.setTransform(462.811,81);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#B8C078").s().p("AgoAjQgIgLAFgLQAJgRAPgQIAsgQIAVADIgVAjIgMAHQgDAHgFAFQgMAQgUAAQgGAAgHgCg");
	this.shape_184.setTransform(456.125,64.7625);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#A7AF70").s().p("AABAoIABgEIgVgmIAGgWIAKgTIgFgIIAAgEIAIgCIADgCIAAgEIARAFIgBB6QgUgDACgVg");
	this.shape_185.setTransform(467.725,63);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#BDC594").s().p("AiJD/IgDgBQAHgWATgUQARgTAigWIgOATIAOgOIACgCIADgBIgLAUQA4gWAQguIAJgfQAEgQgBgJQgBgIgDgGQgDgFAAgDQgBgWgPgQQABAAABAAQAAgBABAAQAAAAAAAAQAAAAABgBQAggtg0g5IACgGQAKgVgGgYIAGAAIACAUQA4gsAUhIIADADQAOAAADgNIACgNIAGAaIADAAQAEAAAEgCQADgCAAgCQASAqgEAvIAAACIgDADIAWA9QgJAKAAANQAAAQAJALIgKAgIgIACIgKATQAAgPgjAcIgPArQgTAYAHABQAEACAWgXQBMAXghAQQgkARARAdIhBAWQgpAFgbAgQgJALgIAMIgYAZIgNABQgVAAgegLgABnAqQAIgQACgJIAcAeg");
	this.shape_186.setTransform(435.05,121.036);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#6D7B4D").s().p("AiQE2QAZgkATgkIAigeIgBgJQAHgGAFgGQAsgzgGg7IAAgFIAJgJQBDhMgLhWIgDgIQAHgIgCgMQgCgKgBgIIAAgPIABgQIAEgBIANgbIAngLQgDgaAJgZIAOgfIANgcQAIAFgBAJQgFBohEBbIgGAAQAGAYgKAVIgCAGIgFA3IgGAAIgFAAIgxB4IgFAAQgEAdgNAbIhIBdIACAOQADAdgQAYg");
	this.shape_187.setTransform(426.6016,118.025);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#C5CE7E").s().p("AgKAqQgCgWAPgQIgCgHQgDgOABgOQABgKADgJIADAEIAAACQAPAugXAxg");
	this.shape_188.setTransform(444.5392,87.775);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#BDC085").s().p("AgLAHQgGgDABgEQgBgDAGgDQAFgDAGAAQAIAAAFADQAEADABADQgBAEgEADQgFADgIAAQgGAAgFgDg");
	this.shape_189.setTransform(426.25,93.525);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#C9CB88").s().p("Ag3AyIgIgOIgfgJQgQAPgbgDQAegcAegRQA1ggA+gLQAkA0BAAMIAAACQgQAAgLAJQgMAKgdALQgagEg8AHIgnAAg");
	this.shape_190.setTransform(410.5,72.125);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#4C5144").s().p("AgWANIgCgFIArgVQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAIgsAVQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAg");
	this.shape_191.setTransform(403,63);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#BFC8A7").s().p("AgHgTQAXAMgLAXIgCAEg");
	this.shape_192.setTransform(409.0729,56.35);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#454C3C").s().p("ABLA1QgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBgBAAAAIAKgCIgHgHQhSg1hnANIAHgLQATADAWgFIAIgDIg8gSIAAgCQgRAAgGgOIAGAAIAhAFIAGgIIgLgHIAAgGIAFAAQAQAQAUALQAgATAkAOIAMACIAEAEQAVAVAdgCIAMACIAVALQAZANANAYIABACg");
	this.shape_193.setTransform(398,56.925);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#D3D5CD").s().p("AgNgFIAbAFQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgEACg");
	this.shape_194.setTransform(407.425,59.375);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#BEC78F").s().p("AgHAOIAAgNIgPgBIgBgEQgCgJgIgEQgGgDgHACIAAAFIgGgWIARABIAFAEQAaARAWASQAHAHAFAIIANAEIADACIADADIAEAHg");
	this.shape_195.setTransform(412.95,55.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#64734D").s().p("AgLAAIAXAAIgGAAIgBABg");
	this.shape_196.setTransform(438.75,73.325);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#586544").s().p("ACAFtIAFAAIARAhIAAAcIgWAngAhZHOIATgZIgVAFIgJgCIATgOIAQAAIgFAHIAAAEIAOABIAGgGIASAAIgxAhgAChGUIAAgbIgGAAIgFALIgLgXIAAgFQAAgkAQgfQANAPgGATIgBAFIAGAAIAFAAIgFBIgAggFBIBAgWQgRgdAkgRQAhgQhMgXIAagfIAnAFIANAJIAOgEQAZAegWAoQgDAFgFAEIgRAAQABAdgTAXQgDAEgBAFQg6gOgeACgACOEaQgXgtgCg2IgEgJIAEgIIALgLIAFAAQAFAAAEACQADABAAADQAZAggDAoIAAAFQACAbgSAVIgBACQgGgCgCgEgAifDdIAyh5IAFAAIAOAqIgDANQgpgJgTBLgAhiBkIAFg3QA1A5ghAuQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAgAiykWIgFgDQgMgQgwgDQAdgLALgKQALgJAQAAQAxgkA4AVIgCAFIAGAMQgXAFgIAUQgWABgLAVQgOAGgOAAQgJAAgKgDgADunQIAGAAIgGAXQgkA0gNAfIgaANQAYhEAzgzg");
	this.shape_197.setTransform(441.925,106.925);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#C2CA91").s().p("AAsBBIAAgGQABgIgEgHQgKgNgQgEQgHACgHgGIAEAWIgBACIg7gaIgEgKQgIgLgJgLIgLgMIAIgCQASAUAcAGIADgEIgNgFQAWgHALATQAcAAAYARIAKgUIgYgSQgtgCgogTIAIgBIADgLQAgARAdgCIAHgPIAFgBQASgEgGgSIALAGIARALQAHAtAKArQAAAFAEADIgRAIIgCAag");
	this.shape_198.setTransform(427.05,61.75);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#65704E").s().p("AgIAAIAAgKIAEACQALADACAKIgBAGg");
	this.shape_199.setTransform(432.925,54.975);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#B7C076").s().p("AgdgaIACgHQgBgWALgQIAgAiQgKAfASAVIADgPQAQAzgrAVQgQgwgMgyg");
	this.shape_200.setTransform(446.0401,60.45);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#DCE4D1").s().p("AgGAIIgGgFIAHgDIAEgDIAAgEIAOADIgOAMg");
	this.shape_201.setTransform(426.7,29.225);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#698D81").s().p("AgEgZIAEAAIAFAmIgCANg");
	this.shape_202.setTransform(434.25,27.725);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#6E7A55").s().p("AAwGRIADAAQAEgYgPgUIAAhfIgHgHQAHgXgRgOQgLgIgFgNIgYgUQADgLgDgJQgBgJgIgCIgbAsQAAADgEACQgCACgFAAIAyhIQgKgkAEgkIgDgBIgDgIQgBgIgGgDQgHgDgIAAIgMAbIgEgEQgDAJgBAKIgZAzIAThVIhOAkIBehTIhogRIAqgIIABgEIABgCIAGAAIAtgEIgZgeQgtg1AFhEIgMgMIADgKIgXgGIgTgWIAEgFIAHAAIAXASIAEgEQAJgLAAgNIAGACIABgEIgCgGQgDgDgEgDQgEgDgFgBIgDgLQgEgRgPgIQAJhKgUhIIAGAAIAQAAIAbAbIgFALIAEAEQAOAPgCAUIABAEIALACIARgJIAHAFIgDAEQgNAOAIATIADAFIgDAGQAMALAAAPQABASgMASIAHAGQAMAVgUANIgGACQAHAMgCANQgCARABARIgOAJIAKA0IArAdIAjAGIgCgGIAhiOQgSB8AEAKQADAKgGANQgGALAPgDIAIAIQAXgBAPgDQAOgCgLAJIgMALIBZABQhaAUgFADQgPAKgRAAIAFAwQAhgCAaAUQAHAHAGAJQAggFAggBIAVABIAEAFIgHAAIAAAEIgQAAIgvAQQAGA6A+ARQALADAHALIAABPIgGAAQAJATgUAHIgGACIgFAAIAPgRIgFgDIgrACIgngbQAYAqgEAwQgDAWgGAVIgQAbIgFAAIgJAJIAJANIgGAAIgGgBIgFgEIgRAWIgFAAIgLAKQgRgvApgNgAgOCSIAMgHQAIgEABgJIgKgIg");
	this.shape_203.setTransform(451.25,77.35);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FAFAF7").s().p("AgGALIABgPIgJgFIAPAAIAHgBIAHADIgDASg");
	this.shape_204.setTransform(416.925,46.575);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#6C7958").s().p("AArA/IgcgGIgLgCQgcACgVgWIAWgeIghgTIA1gHIASgwIALAAQAYAaADAjIAAAFIgFgFIgQAAIAFAVIALAnIAJAKIgBAFIgEADg");
	this.shape_205.setTransform(404.525,53.125);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#E5E8C0").s().p("AA/BOQgLgVgXAHIAOAFIgEAFQgcgHgRgUIgIADIgDgIIgEgCIgDgCIgMgFQgFgIgIgGQgXgTgZgQIgBgFQgDgjgYgaIANABIAKAHIA8gOIAJAFIgBAQIATABIADgTIgGgEIgHABIAAgFIALAAIAGAAQAAAcAKAaIAIARQA0AGAyAQQAGARgSAEIgFABIgGAPQgfADgfgSIgEALIgHABQAnATAuACIAZATIgKAUQgZgQgcAAg");
	this.shape_206.setTransform(419.7,54.425);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#9DAA87").s().p("AgRA2QAqAJADgVIALgMQAHAJALABIAIAAIgFgGIASgYQhHgKhCgdIABAKIAhAMIhBAHQgHgGgLAFIgHAEIgLgFQgBgPgOgKIgHgIIARAhIAAALIgLAAQgIAGAEALIAEAKIgLAAIgPAaIANAAIAAgLIAOgHIAKAHIAEAAIABgCIAAgBIALAAIALAFQgWAWgCAeIgDAOIg0AhQgVABgUgHIgMgFIhJgfIAtguIADABQAcALAZgSIACgGIAGAJIADgEQAMgQgMgQQgqgkAXgmIACgCIgEgTIACgDIAbABQg+gkgjBJIgFAAIgQgEIgOgFQgPgFgGgJIAIgIQANgLATgCIALgQIAWgGIALgRIAWgFIALgRQApgNAqgKQCRghCTAMQAigCAZAXIABABIgKAAIgnAyQBbAJBbAFIAAADIgmAAIAOATIgDAAQgSgDgQALQhPgbhAAhQATAsBBgHQAkgFAkADIAFgHIAIgBQAKAAAHAFIABACIgEAUIAAAEIAEAHIgKAAIgTAwIg1AHIAhAUIgXAeIgDgEIgMgCQgQgcgagSIgKgGIgCgNQgBgHgDgFIgDgFIgsAWIgGAAIAAAGIgsAAIAQAKIgFAAQAFAOARAAIAAACIgGAAIARAXIgGALQgpgEgfAaIg5AOIhqAsQA1iPArAJgABcgFIAIADIAcgZIghgIgAgqiAIgRAFIgcAmQgKARALAOIAFADQgMgRAMgRIAhALIAKgZIAMAEIAHAQIA7gDIAFgIQgEgGgFgEQgZgOgKgaIApAOIADgIIgLgGQgTgJgTAEIAAAFIgWAAQgFAJgLADg");
	this.shape_207.setTransform(374.45,45.8014);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#DEE7DD").s().p("AAEACIgPgDIAAgGQASgEAFAQIgCAEg");
	this.shape_208.setTransform(412.25,28.1201);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#CCAE6D").s().p("AgmgVQAfADAbASIACABQABAAAAAAQABAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAIALARg");
	this.shape_209.setTransform(413.775,33.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#73825A").s().p("AFVCMQgcgSgggDIgDgCQgbgSgeAIIhNgFIgGAAIgBgBQgagXgiACQgQgOgTgJQgagNgagJIg9AAQgQgCgQgDQhQgXhSgUIAOgQIADAQIA9AIIgygvIgPgGQgOgHgJgOIAbgkIghgUIgLAAQgZAFgZgKIDdAAIA9A3IAbAhQAAAFACADQACADACAAIAWArQAJACAFAIQAPAVAZACIA4AtIBjgDQABAAAAABQABAAAAAAQABAAABABQAAAAABAAQAUAGAZABIAmAJIABgJIAQAEIAGAHIAcAsIgCgBg");
	this.shape_210.setTransform(381.725,19.325);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#718259").s().p("AAmA5IgOgBIgEgIIAAgDIAEgUIgBgCQgHgFgKAAIgHABIgFAHQgkgDgkAFQhBAHgTgrQBAghBPAaQAQgKARACIADAAIgOgTIAmAAIAGAAQAnATApgRIADgCIAAgFIgLgRIAsALIgbBiIgMAAIAAAGIgQAAIg8AOg");
	this.shape_211.setTransform(404.65,40.45);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#536336").s().p("AgpgEIBTAAIgEACQgTAHgTAAQgUAAgVgJg");
	this.shape_212.setTransform(413.525,36.6765);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#C9D9D5").s().p("AgXAdIgDgLQgGgbAOgWIAvApIgxAWg");
	this.shape_213.setTransform(414.5224,22.725);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#A2BAB2").s().p("AgDAZIAAgxQALAVgGAWIAAAGg");
	this.shape_214.setTransform(423.589,7.675);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#668B7F").s().p("AgKgaIAGAAIAEAAIALAwQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAABgBAAg");
	this.shape_215.setTransform(423.725,12.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#A2B499").s().p("ADpDfQgUgJgSgMIgGgFIgUAFIADgLIACgBIABgBQABgEgBgEIgWAEIACgHIAJgEIgagCIgFAAIAbhjIgsgLQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQgBAAAAAAQgBAAAAAAIgcgtIADgDQgFgQgUADIAAAFIgBAKIgmgKQgrgZgygCQAAgDgDgCQglgfgvgVIgGABQgLAAgHgKIghgnIgCgOQgtgdgTgzIEVAAIgcATIAAAJIgGAAIAFAMIASAEQAOAEAFAPIAEAJIADAAIgBAKQgUAFgLASQgQgVgZADIgJACIADAPIgGAFIgBADIAHAHIADAeQAbgOARgYQgFAiAQAgIADACIADgBIATgVIgEgSIgDAAIAZgcQAZAAAMgRQgSgNgFgUIAZgLIAWgnIAVAFIAHALIAUgCIACADQAcAjATAtIACgDQABAAAAAAQABAAABAAQAAgBABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAjAhAXAqQAHALAGANIAAAAQgEAOADANIAHAcIgbgFIgDACQgQAIgOgLIAPgNIgPgEIAAAEIgEAEIgHAEIgGAAIANAPIAEABQAgBBASBGQABAEgCAFIAKADIAHATIghAZIgFABQgFAAgGgDgABFgfIADALIADACIAygWIgwgpQgOAWAGAcgAhGitIAEgDIgFgFQgZAHgZgHQAVAaAegSg");
	this.shape_216.setTransform(404.925,27.7583);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#568173").s().p("AgCAZIAAgxIAFAAIAAAxg");
	this.shape_217.setTransform(422.9,7.675);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#9AB3A9").s().p("AgCATQgEgDgEgTIAPgRIAGAAIAAAIQAAALgCAIQgCAJgDADQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAIgCgCg");
	this.shape_218.setTransform(440.875,23.8692);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#A9BFB6").s().p("AATBkQgUgggPgjIgJgWIgQgLQgPgcAIgfQAEgOAGgQIACgJIBCAAIAFAxQgTA+AfA7IAFAFIgGAAIgWAXg");
	this.shape_219.setTransform(431.8245,15.15);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#75844B").s().p("AgIAqQgBAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBIAAgrIACgEQAHgRgEgRIAFAAIACA+IAJgCQABALgGAIQgFAIgGAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_220.setTransform(443.65,16.275);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#A7BDB5").s().p("AgIABIgDgBIgNglQAGgMgHgNIgEgIIAKgBQAqAHAHAxIAAALIgGAAQAFARgIAQIgCAEIgFAAQgEAVgPAQIgDACg");
	this.shape_221.setTransform(440.625,12.325);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#778788").s().p("AAKAsIAChDIgEgFQgQgPgUAFQANgJALADQA0APgdBLg");
	this.shape_222.setTransform(467.5742,33.4625);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#BEC58C").s().p("Ag8CHIAGg3IgEAAIAAgKIgDgFIgFgBQAAgLADgKIApiAIgFgMIAOgYIgJgDIAAgFIAGgFIAGAAIAAADQAHAEAIgCQAMAAAIAEQAIAFAAAHIgFAEIgLgEQgcAcgKAmIgBAJIgNAZQgKARAHAVIAOgUIACAGIgTAxIADAJIAFACIARguQAHgDAGgHQADgDABgFQAEgKAAgNIAIADQAGAHACAKQADATgHASIgHACIAMADQAFgJAIgGQAFgEAFgCIAKgDIALANQACAdgLAcQgFAOgOAHIgFABIgFACQgGACgEADIgSAOg");
	this.shape_223.setTransform(461.9063,44.225);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#A1B8B4").s().p("AgEgFIAEgLIADACQAHAQgLAPg");
	this.shape_224.setTransform(456.9289,29);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#677A7D").s().p("AgDgHQAAgHgIgFQgIgEgMAAIARgRIAGAAQATgEARAPIADAEIgCBDg");
	this.shape_225.setTransform(465.6,33.6481);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#C6D2BA").s().p("AgSgTIgLgCIAQgRQALAGALgFIAAgBQAZgBgGAZIgDAJIgFAKIgDgCIguAkQARgegGgcg");
	this.shape_226.setTransform(454.3571,27.8731);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#8C9667").s().p("ABQEUQgMgKgPgDQhQgUhAgwIgGgDQgMgKgLgMIgTgXIAggYIABABQAbADAQgPIAfAIIAIAOIAmAAQA9gGAaAEQAwACAMAQIAFAEQAZAGAWgJQALgVAXgBQAIgVAWgEIgGgNIADgEQg5gVgwAjIAAgBQhAgNgkg0IgWghIgBgCQgNgXgZgNIAFgCQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAKAIIADgEIABgEIgJgLIADgDQAKgZgYgLIAAgFQAIgCAGADQAHAFADAJIABAEIAOABIAAANIA9AWIALAMQAKAKAHANIAFAJIA7AZIABgBIgEgWQAHAGAIgCQAPAEAKANQAEAGAAAJIAAAGIAZAIIACgZIARgIQgEgEgBgEQgKgrgHgtIABgGQgCgLgMgDIgDgCIAAALIgMgGQgygRg0gGIgIgQQgLgbAAgcIAZACIgIAEIgDAHIAXgEQAAAEAAAEIgBABIgDABIgDALIAUgFIAGAFQASAMAUAJQAJAEAHgCIAigZIgIgTIgJgDQABgFgBgEQgShGgghBIgEgBIgMgPIAFAAIAGAEIAFABQAOALAQgIIADgCIAbAFIAMAFIgFAAQATBJgIBKQAOAIAEARIADALQAFABAEADQAEACADAEIADAFIgCAFIgFgCQgBANgIALIgFAEIgWgTIgHABIgFAFIAUAWIAWAFIgCALIALAMQgEBDAtA1IAYAeIgtAEIgXgBIARADIgCAEIgpAIIBnAQIhdBVIBOgkIgUBVIAZgzQAAAOADAOIACAIQgQAQACAWIAIAJQAYgxgPgvIAAgCIANgbQAHgBAHAEQAHADABAHIACAJIAEABQgEAkAJAjIgxBIIgEAAIgFgaIgDANQgCAOgOgBIgEgCQgUBHg4AsIgDgTQBEhbAGhpQAAgJgHgFIgOAdIgNAfQgKAZADAZIgmAMIgOAbIgDAAIgBARIAAAOQAAAJACAKQACALgGAIIADAJIgRAAIgRAWIgKgJIAIgXIgOgMQAAAPgOADQgYACgWAHQgPAAgLADQgEABgBADIAAgBIgMAEIgIgEIgCALIgTALIgBAEIgCAEQgFAKgLADIgRAEQgMh8BFhmgACxEkQgGADAAAEQAAAEAGACQAFADAGAAQAIAAAFgDQAFgCAAgEQAAgEgFgDQgFgDgIAAQgGAAgFADgABwHnIAAgBIAEAFIgFAEQgCADgDABQgIgCAOgKgAifhtQgUgKgQgRIAsgWIAEAFQACAGABAGIACANIAKAHQAbASAPAcQglgOgggUgAjIhRIgRgWIAGAAIA8ARIgIAEQgNADgMAAIgQgCgAjkh3IgQgLIAsAAIALAHIgGAIgAnHiCQAAgFgFgDQgFgDgGAAIgFgLQgEgKAJgHIALAAIA3ARIAGALIgXAAIAAAFQgMgFgIAKIgCABgAnMi0IgSghIAIAHQANAKACAQgAATkSIgFAAIAAgCQhagFhcgKIAogxIAKAAIAGAAQAgAPAjgJIAKgBQAegIAaASIAEABIBOAsIAAAGgAEZlJQAFgMgMgFIgGgnIAWgWIAGAAQALADAFAMIABADIgiBBIACgFgAgvlsQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBIhjADIg4gsQgZgDgOgUQgGgJgKgBIgVgsIAAgGIBMAnQAIAKAKAAIAHgBQAuAVAlAfQADACAAADQAyACAsAaQgYAAgVgHgAHImMIgFgEQg1gMgpgRQAGAAAFgIQAGgIAAgLQABgCADgBQAkgNAagdIAGAAQAMAPgEATIgEAWIAcAxIAAABQgFADgFAAQgGAAgGgEgAE+m4IAFAAIADgCQARgQADgVIAFAAIAAAsIgFAAIAAARIgGAAIgRARg");
	this.shape_227.setTransform(407.4,63.675);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#7E8E54").s().p("AgwAvQABgDADgCIALgMIACgGQANglAXghIAGAAIAKAIIABgNIAVALIgBAIIAIAHIgGAMIgVARIgBAEIgGAAQgZAdgjANQgDABgCABIABgFg");
	this.shape_228.setTransform(449.775,12.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#86945E").s().p("AgLAWIAVg2IABADQAGAggcAeg");
	this.shape_229.setTransform(444.8688,8.525);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#A5B48D").s().p("AAHASIgHgHIAAgHIgUgLIAAANIgLgHIAQgcIAvACIgIAaQAAAMgHAJQgGALgKAAg");
	this.shape_230.setTransform(454.025,8.25);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#7E8F6C").s().p("ACfGMIgEgFIgUgBQghABggAFQgFgJgIgHQgagUggACIgFgxQAQAAAQgKQAEgDBagUIhZgBIANgLQALgJgPACQgOADgYABIgHgIQgQADAGgLQAGgNgDgKQgEgKASh8IghCOIACAGIgjgGIgqgdIgLg0IAOgJQgBgRADgRQABgNgGgMIAFgCQAVgNgNgVIgGgGQALgSgBgSQAAgOgLgLIACgGIgCgFQgJgTANgOIAEgEIgHgFIgSAJIgLgCIAAgEQABgUgOgPIgDgEIAEgLIgbgbIAhhCIgBgDQgEgMgLgDIgFgFQgfg7ATg/IARgRIALAAIANAmIADACIAABHIgFAAIAFAnQAFAUADAEQAEACADgDQAEgDACgJQACgJAAgLIAAgIIAAgRIAFAAQAAABAAABQAAAAAAABQAAAAABABQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQAqARA0AMIAFAFIgPAQIAJACQAHAdgQAeIAtgkIAEADIADAWQAMgOgHgRIgDgDIADgJQAGgZgaACIgcgyIAEgWQAEgTgMgPIABgDIAUgSQAKAAAGgLQAHgJAAgNIAKgSIAGAAIAJADIgDAOIAKAFIAGAlIgJANIALAJQgBAQgGAQQgEAJAGAIQgcAZAPAiQAEAKgEALIgJAwIATgDIAJADIgOAXIAFANIgpCAQgDAKAAAKIAFABIADAGIAAAKIAEAAIgGA3IA9AAIASgOQAEgDAGgDIAFgBIAFgBIgFAcIAQgGIAFAIIgKATIgGAAQgzAzgYBEIAagNQANgfAkg0IAWAmIgBAFQgDAUAVADIAABeQg1gWg5AAQgOAAgNAHQAFAIAGAHQAYAaAhAMQAFACAEAEIANgKIADAQIAFgBQAGABAFABQAGABAGACIACACIADALgAAUCpQgPAQgIARQgFAMAIAKQAbAHASgVQAFgFADgHIAMgHIAVgkIgVgCgAhYBwIgCAHQAMAzAQAwQAsgVgQgzIgDAPQgSgWAKgfIghgiQgLAQABAWg");
	this.shape_231.setTransform(452.139,45.85);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#8FA09F").s().p("AgVBZQgPgiAdgZQgHgIAEgJQAHgPABgQIgMgJIAJgNIgFglIgKgFIACgOIgIgDIAAgKQAKABAEAGQBUBthdBnQAEgLgEgKg");
	this.shape_232.setTransform(460.7738,16.25);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#7E8D8E").s().p("AAngxIALAHIhXBXIgGAAIgGAFg");
	this.shape_233.setTransform(464.625,26.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer_3
	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#737346").s().p("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");
	this.shape_234.setTransform(225.3215,146.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_234).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-24.3,5.1,497.1,282.09999999999997), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCANQgDgCAAgEQgBgFADgDQADgEAEAAQAEAAADADQAEACABAEQAAAFgDACQgDAFgEAAQgFAAgDgDgAgMgFQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAEABQACACABADQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape.setTransform(9.8631,5.7794,1.9644,1.9673,0,8.6146,5.4924);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AABAqIgMAAQgOgEgKgKQgPgPAAgUQAAgLAEgIQAWgRAbABQAVABASAFQAJANAAAQQAAAUgPAPQgNANgRACIgFgBg");
	this.shape_1.setTransform(9.4,5.5721);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AhaAPQAIgPAVgRQAHgGAJgEQASgJAagBIAJgBQAfgBAOAJQARAJAgAiIgLAJIAAgBIgBABQgEgPgZgNQgOgIgQgFQgSgFgUgBQgcgBgWARQgKAGgJAKQgSAVgHALQADgIAIgQg");
	this.shape_2.setTransform(10.5,3.8697);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AACAoQASgCANgNQAPgPAAgUQAAgQgJgNQAQAFAOAIQAZAOAEAOQgCAKgcAPQgaANgjAAIgFAAgAhFAjQgbgCgBgGQAAgCAEgGQAGgLATgUQAJgLAJgGQgDAIAAALQAAAUAPAPQAKAKAOAEIg3gEg");
	this.shape_3.setTransform(9.7472,5.8783);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,20.7,9.9), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCANQgDgCAAgEQgBgFADgDQADgEAEAAQAEAAADADQAEACABAEQAAAFgDACQgDAFgEAAQgFAAgDgDgAgMgFQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAEABQACACABADQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape.setTransform(8.1631,2.1294,1.9644,1.9673,0,8.6146,5.4924);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("ABNAHQgJgKgKgGQgWgRgcABQgUABgSAFQgQAFgOAIQgZANgEAPIgBgBIAAABIgLgJQAggiARgJQAOgJAfABIAJABQAaABASAJQAJAEAHAGQAVARAIAPQAIAQADAIQgHgLgSgVg");
	this.shape_1.setTransform(7.5,0.2197);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgjAcQgPgPAAgUQAAgQAJgNQASgFAVgBQAbgBAWARQAEAIAAALQAAAUgPAPQgKAKgOAEIgMAAIgFABQgRgCgNgNg");
	this.shape_2.setTransform(8.6,1.9221);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhDAbQgcgPgCgKQAEgOAZgOQAOgIAQgFQgJANAAAQQAAAUAPAPQANANASACIgFAAQgjAAgagNgAAnAZQAPgPAAgUQAAgLgDgIQAJAGAJALQATAUAGALQAEAGAAACQgBAGgbACIg3AEQAOgEAKgKg");
	this.shape_3.setTransform(8.2528,2.2283);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-2.7,-3.6,20.8,9.8), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#A2DAFF","#B1DAFF","#FADAFF"],[0.043,0.341,0.682,0.973],-4.2,-1.4,0,-4.2,-1.4,14.7).s().p("AgzA3QgPgTgOgMQgNgSgGgTQgLg8AygKQAygLAKBRQALhRAyALQAyAKgLA8QgGATgMASQgPAMgPATQgVASgfANQgegNgVgSg");
	this.shape.setTransform(78.25,8.5842);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#A2DAFF","#B1DAFF","#FADAFF"],[0.043,0.341,0.682,0.973],1,12.8,0,1,12.8,33.1).s().p("AhBBUQA0hgANi7QANC7A1BgQA1Bgh3AUQh2gUA1hgg");
	this.shape_1.setTransform(78.25,37.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#A2DAFF","#B1DAFF","#FADAFF"],[0.043,0.341,0.682,0.973],-3.3,11.5,0,-3.3,11.5,26.2).s().p("AiMBmQDbgaATg2QAUg1gUgbQgUgbgrAFQgqAEACAqQAFAVAXAMQAEABAEAAQAHAAAFgFQAFgGgBgHIAAgBQAAgGAFgFQAEgGAIAAQAHgBAFAFQAFAEABAHIAAABQABAUgOAQQgOARgVABQgVABgigiQgZgZAFgaQACgJAFgJQAnhKBKAZQAZAIAPARQAdAhgJBCQgEAdgQAWQgoA0htAJIgCAFQgsgNhAgJg");
	this.shape_2.setTransform(142.3713,59.7313);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFFFF","#A2DAFF","#B1DAFF","#FADAFF"],[0.043,0.341,0.682,0.973],-5.9,14.8,0,-5.9,14.8,31.9).s().p("AhiCcQA6gyAlgnQBKhOgGgmQgKg5gggNQgNgFgNACQgSABgUAPQgjAZAWAkQAPAPAbgCQAEAAAEgDIABAAQAEgEACgHQABgHgEgGIAAAAQgDgFABgIQACgHAEgEQAGgEAIACQAGABAEAFIABACQALARgEAVQgEAVgSAMQgHAEgKACQgRAAgdgHQgugMgBgqQgBgVAFgQQANgyA5gMQAKgCAJAAQA9gCAiBSQARAogXA0QgXA2hCBDIghAgIg+gHg");
	this.shape_3.setTransform(128.1853,53.1226);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFFFFF","#A2DAFF","#B1DAFF","#FADAFF"],[0.043,0.341,0.682,0.973],0.2,17.7,0,0.2,17.7,38.9).s().p("AgnDQIAAgGQCAkHgZg1QgYg0gigFQgggEgbAhQgbAiAfAdQASALAagJQAEgBABgEQAFgFAAgIQgBgHgEgFIgBAAQgFgDAAgIQAAgHAEgGQADgFAIgBQAHAAAFAEIABABQAPAOACAVQACAWgPAQQgOAQguAAQgxgBgLgnQgXhRBFgiQBEgjA+BQQAcAkgNBNQgRBbhLCXIAAAIIgsgCg");
	this.shape_4.setTransform(107.7231,46.9447);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","#A2DAFF","#B1DAFF","#FADAFF"],[0.043,0.341,0.682,0.973],1.8,10.9,0,1.8,10.9,25.1).s().p("AAfB3QhtgJgog0QgQgWgEgdQgJhCAdghQAPgRAZgIQBKgZAnBKIAHASQAFAagZAZQgiAigVgBQgVgBgOgRQgOgQABgUIAAgBQABgHAFgEQAFgFAHABQAIAAAEAGQAFAFAAAGIAAABQgBAHAFAGQAFAFAHAAQAEAAAEgBQAXgMAFgVQACgqgqgEQgrgFgUAbQgUAbAUA1QATA2DbAaQhAAJgsANg");
	this.shape_5.setTransform(14.1287,59.7313);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFFFF","#A2DAFF","#B1DAFF","#FADAFF"],[0.043,0.341,0.682,0.973],4.5,14.2,0,4.5,14.2,31.1).s().p("AAECDQhChDgXg2IgHgRQgNgqAOghQAihSA9ACQAJAAAKACQA5AMANAyQAEAPAAATIAAADQgBAqguAMQgdAHgRAAQgKgCgHgEQgSgMgEgVQgEgVALgRIABgCQAEgFAGgBQAIgCAGAEQAEAEACAHQABAIgDAFIgBAAQgDAGABAHQACAHAEAEIABAAQAEADAEAAQAbACAPgPQAWgkgjgZQgUgPgSgBQgNgCgNAFQggANgKA5QgGAmBKBOQAlAnA6AyIg+AHIghggg");
	this.shape_6.setTransform(28.3135,53.1226);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFFFFF","#A2DAFF","#B1DAFF","#FADAFF"],[0.043,0.341,0.682,0.973],2.5,18.6,0,2.5,18.6,39.8).s().p("AgEDSIAAgIQg+h7gWhTQgFgTgDgQIAAgBQgNhNAcgkQA+hQBEAjQBFAigXBRQgLAngxABQguAAgOgQQgPgQACgWQACgVAPgOIABgBQAFgEAHAAQAIABADAFQAEAGAAAHQAAAIgFADIgBAAQgEAFgBAHQAAAIAEAFQACAEAEABQAaAJASgLQAfgdgbgiQgbghggAEQgiAFgYA0QgZA1CAEHIAAAGIgsACg");
	this.shape_7.setTransform(48.7769,46.9447);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FFFFFF","#A2DAFF","#B1DAFF","#FADAFF"],[0.043,0.341,0.682,0.973],-11.6,27.6,0,-11.6,27.6,63.4).s().p("ABZEgQgogGgxggQgvAggpAGQgoAGghgTQhBgoA1hxQCAkHgYg1QgYg0gigFQghgEgcAhQgbAiAfAdQATALAZgJQAEgBADgEQAFgFAAgIQgBgHgFgFIgBAAQgFgDgBgIQABgHAEgGQAEgFAIgBQAGAAAFAEIABABQAQAOACAVQACAWgPAQQgOAQgwAAQgwgBgMgnQgWhRBFgiQA0gbAyApQAOAMAPATQA8BQiJETQhECvDEhkQDGBkhFivQiJkTA8hQQAPgTAPgMQAxgpA0AbQBFAigXBRQgLAngwABQgwAAgOgQQgPgQACgWQACgVAPgOIACgBQAFgEAGAAQAIABAEAFQAFAGAAAHQgBAIgFADIgBAAQgFAFgBAHQAAAIAFAFQADAEAEABQAZAJASgLQAggdgbgiQgcghghAEQgiAFgYA0QgZA1CBEHQA1BxhBAoQgZAPgeAAIgSgCg");
	this.shape_8.setTransform(78.25,37.4827);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FFFFFF","#A2DAFF","#B1DAFF","#FADAFF"],[0.043,0.341,0.682,0.973],-30.1,-3.9,0,-30.1,-3.9,100.8).s().p("AHwgCQiwgflAgEQk+AEiwAfQimAcgnA1IAAg6QAVgcBGgVQAtgNBAgJIAFgBIAhgEIA+gHQAvgFA1gDIABAAIAtgCIAAAAQBMgEBZgBIAAAAIBYgBIBZABIAAAAQBZABBMAEIAAAAIAtACIABAAQA1ADAvAFIA+AHIAiAEIAEABQBAAJAtANQBGAVAVAcIAAA6Qgng1ilgcg");
	this.shape_9.setTransform(78.25,75.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FFFFFF","#A2DAFF","#B1DAFF","#FADAFF"],[0.043,0.341,0.682,0.973],3.3,-39.5,0,3.3,-39.5,40.1).s().p("AAAADIAAgFIAAAFg");
	this.shape_10.setTransform(103.6875,67.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,156.5,82.9), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAIQgEgCgBgEQAAgDADgFQACgDAEAAQAEgCAEACQADAEABAEQAAAEgCACQgDAEgEACIgBAAQgDAAgDgDg");
	this.shape.setTransform(6.8264,3.1714);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDAFIgCgEIABgEQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQACgBACACQACABABADQAAAAAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgBAAIgDgBg");
	this.shape_1.setTransform(5.3563,1.635);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNAZIgHgDIgCgCQgFgFgDgMQgCgMAEgFIACgCQAGgEAHgBIAPgDIAJAAQADgBAFABIACABQAFACAEANQAEANgDAGIgCACQgEAFgDABQgIAFgJAAIgMABIgFAAg");
	this.shape_2.setTransform(6.6446,2.7625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhEAUQgCgJARgOQAIgIALgGQgFAFADAMQACAMAFAFIACACIAIADQgRAEgPABIgEAAQgLAAgCgHgAAXAKIABgCQADgGgEgNQgEgNgEgCQARABAPAFQAKADAGAFQAFAEABAFQACAKgTAEIglAFQAEgBAEgFg");
	this.shape_3.setTransform(7.2947,3.0863);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#660000").s().p("AhDAUQgCgHARgOQAQgPASgGIAQgDIAIAAQAXABATAFQAQAEAEAIQgGgFgKgDQgPgEgRgCIgCgBQgFgBgDABIgJAAIgPADQgIABgGAEIgBACQgLAGgIAIQgRAOACAKQgDgCgBgEg");
	this.shape_4.setTransform(6.7892,2.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,14.2,5.8), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCANQgDgCAAgEQgBgFADgDQADgEAEAAQAEAAADADQAEACABAEQAAAFgDACQgDAFgEAAQgFAAgDgDgAgMgFQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAEABQACACABADQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape.setTransform(7.4469,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAaIgMgHQgGgFAAgPQABgNADgEIACgBQAFgDADABIAIgCIAPgCQAJAAAGACIACABQAFAEABANQABAOgFAGIgGAFIgBAAIgIADIgMACIgJABIgCAAg");
	this.shape_1.setTransform(7.3071,2.5999);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhEAPQgBgLARgKQAOgJAQgFQgEAEAAANQAAAPAGAEIAMAHIgoACIgDABQgRAAAAgLgAAeAMQAFgGgBgOQgBgNgFgEQALAEALAFQAUALAAAIQgBAJgMACQgMACgVABIAGgFg");
	this.shape_2.setTransform(6.9473,2.854);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660000").s().p("AhEAPQgBgJARgKQASgKAWgGIAIgCIAPgCQAUACATAJQAUAKAAAHQAAAIgPADQgOACgRAAIgBAAIgBAAIgQABIgRACQgSADgTACIgDAAQgRAAAAgKg");
	this.shape_3.setTransform(7.2473,2.1293);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,-0.3,14.2,5.7), null);


(lib.Symbol47 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol48();
	this.instance.setTransform(102.95,77.15,1,1,0,0,0,54.8,44.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).wait(1).to({regX:106.4,regY:24.6,x:154.55,y:57.35,alpha:0.0295},0).wait(1).to({alpha:0.059},0).wait(1).to({alpha:0.0885},0).wait(1).to({alpha:0.118},0).wait(1).to({alpha:0.1475},0).wait(1).to({alpha:0.177},0).wait(1).to({alpha:0.2065},0).wait(1).to({alpha:0.236},0).wait(1).to({alpha:0.2655},0).wait(1).to({alpha:0.295},0).wait(1).to({alpha:0.3245},0).wait(1).to({alpha:0.354},0).wait(1).to({alpha:0.3835},0).wait(1).to({alpha:0.413},0).wait(1).to({alpha:0.4425},0).wait(1).to({alpha:0.472},0).wait(1).to({alpha:0.5015},0).wait(1).to({alpha:0.531},0).wait(1).to({alpha:0.5605},0).wait(1).to({alpha:0.59},0).wait(1).to({rotation:2.9998,x:155.45,y:60},0).wait(1).to({rotation:5.9996,x:156.3,y:62.8},0).wait(1).to({rotation:8.9993,x:157,y:65.65},0).wait(1).to({rotation:11.9991,x:157.55,y:68.45},0).wait(1).to({rotation:14.9989,x:157.9,y:71.35},0).wait(1).to({rotation:9.9993,x:154.75,y:64.15},0).wait(1).to({rotation:4.9996,x:151.1,y:56.95},0).wait(1).to({rotation:0,x:147.15,y:49.95},0).wait(1).to({regX:54.8,regY:44.4,x:102.95,y:77.15,alpha:0.5898},0).wait(1).to({regX:106.4,regY:24.6,rotation:2.9998,x:155.45,y:60,alpha:0.59},0).wait(1).to({rotation:5.9996,x:156.3,y:62.8},0).wait(1).to({rotation:8.9993,x:157,y:65.65},0).wait(1).to({rotation:11.9991,x:157.55,y:68.45},0).wait(1).to({rotation:14.9989,x:157.9,y:71.35},0).wait(1).to({rotation:9.9993,x:154.75,y:64.15},0).wait(1).to({rotation:4.9996,x:151.1,y:56.95},0).wait(1).to({rotation:0,x:147.15,y:49.95},0).wait(1).to({regX:54.8,regY:44.4,x:102.95,y:77.15,alpha:0.5898},0).wait(1).to({regX:106.4,regY:24.6,rotation:2.9998,x:155.45,y:60,alpha:0.59},0).wait(1).to({rotation:5.9996,x:156.3,y:62.8},0).wait(1).to({rotation:8.9993,x:157,y:65.65},0).wait(1).to({rotation:11.9991,x:157.55,y:68.45},0).wait(1).to({rotation:14.9989,x:157.9,y:71.35},0).wait(1).to({rotation:9.9993,x:154.75,y:64.15},0).wait(1).to({rotation:4.9996,x:151.1,y:56.95},0).wait(1).to({rotation:0,x:147.15,y:49.95},0).wait(1).to({alpha:0.5697},0).wait(1).to({alpha:0.5493},0).wait(1).to({alpha:0.529},0).wait(1).to({alpha:0.5086},0).wait(1).to({alpha:0.4883},0).wait(1).to({alpha:0.4679},0).wait(1).to({alpha:0.4476},0).wait(1).to({alpha:0.4272},0).wait(1).to({alpha:0.4069},0).wait(1).to({alpha:0.3866},0).wait(1).to({alpha:0.3662},0).wait(1).to({alpha:0.3459},0).wait(1).to({alpha:0.3255},0).wait(1).to({alpha:0.3052},0).wait(1).to({alpha:0.2848},0).wait(1).to({alpha:0.2645},0).wait(1).to({alpha:0.2441},0).wait(1).to({alpha:0.2238},0).wait(1).to({alpha:0.2034},0).wait(1).to({alpha:0.1831},0).wait(1).to({alpha:0.1628},0).wait(1).to({alpha:0.1424},0).wait(1).to({alpha:0.1221},0).wait(1).to({alpha:0.1017},0).wait(1).to({alpha:0.0814},0).wait(1).to({alpha:0.061},0).wait(1).to({alpha:0.0407},0).wait(1).to({alpha:0.0203},0).wait(1).to({alpha:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,281.7,100.9);


(lib.Symbol43 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguAmIAAgBIAAgEIAAgFIAAgFIgBgCIACgDIABAAQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBAAIAAgDIADgFIAAgDIgCAAIgBgEIABgHIABAAIAAgBIAAgDQAAgDgBgCIgBgGIgBgGIgDgBIACgDIAIgFIACgBIABABIACABIAAADIABADIgBAEIABABIADgCIADgCIACgBIACgCIAHgDIAGgCIABAAQAAAAABAAQAAAAAAABQAAAAABABQAAABAAABIADAAIAAgDIAEgBIACgBQACAAADADIACAHIABABIADgDIAEgCIAIgEIADAAIADgBIAFAAIADAAIAEABIADABIAEADIABACQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAABIABABIACAAIAAAGIABADIAAAKIAAACIgCAEIAAABIABAEIAAACIAAADIABAHIgCACIAAACIABAAIABAAIAAAEIgBACIACAFIgGADIgGAEIgDAAIAAgEIABgGIAAgCIAAgEIAAgBIAAgHIABgEIABgEIgCgEIAEgCIACAAIgGgEIACgHIgCgCIgCgKIgFgHQgBgBgEAAIgEABIgEABIgCABIgCACIgDADIgDAEIAAAHQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAABIACACIABAGIAAAHIAAADIgDgBIAAABIACAEIAAABIAAACIAAADQACAGAAAGQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBABIgEACIgFADIAAgBIgBgCIAAgEIAAgJIABgGIACgBIgBgDIgBgDIgBgDIAAgBIAAgFQABAAABgBQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBgBgBAAIAAgKIgCgHQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgDABIAAgBIgCgCIgCACIgFABIgFACIgEAAIgEAHIAAADIAAAEIgBADIABAEIgBAEIgCACIACAEIABAFIgBADIAAABIABAHIABAIIgIAFIgDAAIgCAAg");
	this.shape.setTransform(321.825,208.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAlIgBgCIgEAAIgIgEIgEgCIgBgDIAAgBIgCgCIgBgBQgCgDAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBIgDgCIABgKIADgHIAEgIIAFgDIABgDIABgCIAIgEIAFgEIAMgEQAFgDALAAIAFABIAAACIADABIADgCIAIAEIAEACIACAEQACADAEAAIAEAFIABAHIABAHIgCAAIAAABIgBACQAAABAAAAQAAAAAAAAQAAAAABABQAAAAABAAIAAAGIgCAEIgFAKQgGAHgEABIgFADIgFACIgFACIgJABIgFABIgHAAIgEABIgLgCgAgOAeIAHACIAFAAIADAAIACABIAGgBIAFgBIAHgEIAEgCIAEgGIACgFIADgDIABgBIgCgEIAAgCIACgGIgDgGIgBgFIAAgEIgBAAIgCAAIgEgGIgDgDIgBgBIgFgCQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAgBAAIgCABIgEgBIgFAAIgGACIgBgBIgDACIgEACIgBABIgLAKIgBABIgBADIgCADIgDAFIABABQAAADgDAAIAAACIADADQAAAAAAAAQAAABgBAAQAAAAgBABQgBAAAAABIAAABIABAAIABgBIACAGIAFAIIAAABIgBACQAAABAAAAQABAAAAAAQAAABABAAQAAAAABAAIABgBIAJAEg");
	this.shape_1.setTransform(309.8,208.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAlIgBgCIgFAAIgHgEIgEgCIgBgDIAAgBIgCgCIgBgBQgCgDAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBIgDgCIAAgKIAEgHIAEgIIAFgDIABgDIABgCIAIgEIAEgEIANgEQAFgDALAAIAFABIAAACIADABIADgCIAJAEIADACIACAEQACADAEAAIAEAFIABAHIABAHIgCAAIAAABIgCACQAAABABAAQAAAAAAAAQAAAAABABQAAAAABAAIAAAGIgCAEIgFAKQgGAHgDABIgGADIgFACIgFACIgJABIgGABIgGAAIgEABIgLgCgAgOAeIAHACIAFAAIADAAIACABIAGgBIAFgBIAHgEIAEgCIAEgGIACgFIADgDIAAgBIgBgEIAAgCIABgGIgCgGIgBgFIAAgEIAAAAIgDAAIgEgGIgCgDIgCgBIgFgCQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAAAIgDABIgEgBIgGAAIgEACIgCgBIgDACIgEACIAAABIgMAKIgCABIAAADIgCADIgCAFIAAABQAAADgDAAIAAACIADADQAAAAAAAAQAAABgBAAQAAAAgBABQgBAAAAABIAAABIABAAIACgBIABAGIAFAIIAAABIgBACQAAABAAAAQABAAAAAAQAAABABAAQAAAAABAAIACgBIAIAEg");
	this.shape_2.setTransform(298.45,208.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcAlIABgGIAAgBIAAgFIAAgCIACAAIAAgCIgBgDIAAgDIgBgEIAAgGQABAAABAAQABAAAAgBQABAAAAgBQAAAAAAAAIAAgCIgCABIgCgBIAAgEIAAgCIAAgCIAAgBIAAgCIAAgCIABgEIgBgBIAAgHIgCgEIACgDIAEgDIAFgDIADACIAAACIABACIgBACIACACIAFgDIAEgBIAEgCIACgBIADgBIACAAIAHgDIADAAIABABIACACIACABIADgCIABAAIACACQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIgFAFIgEADQgBAAgDgDIgCAAIgFgCIgEgBQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgCAAIgEABIgCAAIgGAFQgEACAAAFIAAABIAAADIAAADIgCADIACADIAAABIABABIAAACIABASIgBABIgCABIgGABIAHACIABAAIABAEQAAABAAAAQAAAAAAABQAAAAgBABQAAAAgBAAIgEACIgFACIgCABQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_3.setTransform(290.3,208.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGBTIAAgDIgBgDIAAgBIABgEIAAgCIABgDIgBgBIAHgGIgGgFIAAgBIAAgEIABgCIgBgEIgBgBIACgEIABgFIgCgCIAAgDIgBgDIABgEIABgCIgBgHIAAgDIACgEIAAgFIgCgCIAAgVIACgCIABgEIgDgCIABgDIgCgCIAAgEIAAgEIABgDIAAAAIAAgCIgBgCIAAgBIAGgFIgEgHIgEgGIABgDIAAgDIADgBIADgCQACgBACgDIABAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIAAABIAAABIABADIAAAIIAAAJIgCACIgBADIACABIABADQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAIAAAEIABACIAAADIAAAMIAAAMIgCAEIgBACIACAFIAAAAIgCADIACAEIABABIAAAGIAAAWIgCABIABAEIgBAEIAAADIADAAIAAABIACAQIgBAEIABADIgCAEIAAABIgFADIgCABIgBAAIgEACIgBAAg");
	this.shape_4.setTransform(284.025,204.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGBTIAAgDIgBgDIAAgBIABgEIAAgCIABgDIgBgBIAHgGIgGgFIAAgBIAAgEIABgCIgBgEIgBgBIACgEIABgFIgCgCIAAgDIgBgDIABgEIABgCIgBgHIAAgDIACgEIAAgFIgCgCIAAgVIACgCIABgEIgDgCIABgDIgCgCIAAgEIAAgEIABgDIAAAAIAAgCIgBgCIAAgBIAGgFIgEgHIgEgGIABgDIAAgDIADgBIADgCQACgBACgDIABAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAABIAAABIABADIAAAIIAAAJIgCACIgBADIACABIABADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIAAAEIABACIAAADIAAAMIAAAMIgCAEIgBACIACAFIAAAAIgCADIACAEIABABIAAAGIAAAWIgCABIABAEIgBAEIAAADIADAAIAAABIACAQIgBAEIABADIgCAEIAAABIgFADIgCABIgBAAIgEACIgBAAg");
	this.shape_5.setTransform(280.025,204.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVAlIgEgBIgDgBIgFgCQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIgDgBIgBgDIgBgEIACgEIACgEIAHgHIAGgCIADgDIACABIADgCIAFgBIAGgCIAFgBIADgBIABAAIACAAIAEAAIAIgCIAEgBQAAAAABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgDIAFgGIgGgCIgDAAIgFgHIgIgBIgDAAIgCAAIgCAAIgCgDIgCADIgEABIgIAFIgCABIgBACIgDABIgDgBIgFgBIgCgDIACgCIACgCIAGAAIACgCIAHgCIADgCIAFAAIAEgBIABAAIADgBIAGAAIAFABIACABIAGABIADACIgBADQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIADgBIACgBQAAAAABABQAAAAAAABQAAAAAAABQABAAAAAAIACACIAAACIAAAEIACAFIABAAIAAAEIABAIIgDACQAAAAABAAQAAABAAAAQAAAAABABQAAAAABABIAAACIAAADIAAACIABAIIgCAEIACADIAAACIACADIgCADIgEABIgDABIgCABIgFABIgCgBIACgGIgJADIgCAAIgCABIgFgBIgDACIgCAAIgHACIgEAAIgEABIgIgBgAgSAeIAEABIACACIADAAIABAAIADgBIACABIACgBIACAAIAFgBIADgCIACABIADgCIAFgCIACgCIADgCIABgEQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIgCgCIAAgCIAAgCIAAgEIAAgBIABgEIgDgBIgDAAIgFAAIgCAAIgCAAIgDgBIgDABIgFAAIgBAAIgCAAIgDABIgGACQgGADgDACIgCADIgDACIgBABIABABIABAGIACACIgCACIgBACIABADIADgDIAEADg");
	this.shape_6.setTransform(272.7,208.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfBgIABgDIgDAAIgDABIgDABIgIgBIgBgBIgDAAIgFgBIgFAAIgDAAIgDAAIgJgBIgBAAIgGABQgEAAAAgCIAAgBIAEgDIAIgDIABgCIABgCIAAgDIAIgCIgHgCQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIABgDIAAgGIAAgBIgCgFIAKgEIgKgDIACgBIAAgDIABgCIADgBIAAgCIgDgBIAAgFIAAgBIACgEIAAgBIgBgCIgBgDIgBgEIABgIIAAgEIAAgDIABgBIgCgBIAAgHIAAgGIAAgBIAAgFIADgBIACAAIgCgDIAAgBIgBgDIgCABIgCgFIABgDIAAgFIAAgDIgBgCIAAgEIgBgKIABgDIAAgDIABgBIAAgBIABgCIgDAAIAAgFIgBgCIgBgJIABgEIgFAAIgEABIgCAAIACgEIADgCIAAgBIACAAIAEgBIACABIABAAIAHgCIAEAAIAHgBIAAAAIAFABIADAAIADAAIADACIADABIABgCIAFgCIAIABIAMACIADAAIAHAAIACABIACABIADAAIAMAEIAGACQABACAAAEQAAAFgFAHIgDAFIgHAHIgEAAIAAAAIAAADIgDACIgHAEIgEABIgEABIgCACIADABIAGAAIAGACIAIACIAEACIAAADQAAAAAAAAQAAABABAAQAAAAAAABQABAAAAAAIADgEIAFABIAGADQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIACABIABABIABAAIABABIADgBQACAAAEACIALAIIAEAEIAAABIAAACIACgBIAJAFIABACIADACIACACIAEAGQgBAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIABABIADgBIADAFIACAIIACAGIAAAEIAAAEQAAACgDADIABACIAAACIAAABIAAACIgGAJIgCACIgCACIgEACIgBADQgCADgJADIgBgBIgEABIgDADQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAACIgHACIgJAEIgEABIgEABIgBABIgDgBIgDABIAAACIgDAAIgEABIgCACIgFgCIgCACIgBABQgFAAgBACIgCgDIgBAAIgCAAIgDADIgTAAgAgoBXIACABIADABIAUABIAPgCIABACIACgCIAEgBIAEgCIAEAAIAGgBIAHgDIADgBIABAAIADgBQALgFAFgEIAIgFIACgDIAEgEQAAgBAEgBIAAgCIAJgCQAAgBgJgBIACgEIABgFIAAgDIAAgBIACgBIgBgCIAAgFIgCgDIAAgDQAAgDgGgIIgJgKIAAgCIgBgBIgBAAIgCAAIgDgCIgFgDIgBgCIgBAAIgBgBIgFgDIgCgBIgCgBIgBgDIgBgBIgEABIAAABIgDgBIgFgDIgCgBIgIgCIgGgDIgEgDIgDACIgGgCIgDgBIgFgBIgCgBIgCAAIgEgBIgJgBIgFABIgIgBQgEAAgEAEIAAAIIAAABIAAADIAAAAIgDABIAAAEIACACIAAAEIAAADIAAAAIABAFIAAADIAAADIgBAGIAAACIABAEIAAAFIAAAFIAAAGIgCAAIABAFQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAIAAAHIAAACIgBABIAAAAIAAAAIAAABIgDAAIgCABIABADIADAAIABAEIAAABIAAADIAAABIABAIQAAACgCACIgCAAIgCABIAGACIAFABIAAACIADgCIAIADgAg7hAIAAARIgBACIADABIABAAIACAAIAEABIAJAAIgBADQAAAAAAABQAAABAAAAQABAAAAABQAAAAABAAIAEgFIAAgBIARgEIAFgCIAEgCIAEgCIAIgHIAEgEIACgFIABgEQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAgBAAIACgDIgCgBIgCACIgFgFIAAAAIgEgBIgBgBIgKgCIgEgBIgCAAIgCAAIgDAAIgEgBIgDAAIgEAAIgIABIgIABIgEAAIgDAAIgBADIgBALQAAABAAAAQAAAAAAABQAAAAgBABQAAAAgBABIABACIABAAIADADg");
	this.shape_7.setTransform(258.2,206.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguAmIAAgBIAAgEIAAgFIAAgFIgBgCIACgDIABAAQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBAAIAAgDIADgFIAAgDIgCAAIgBgEIABgHIABAAIAAgBIAAgDQAAgDgBgCIgBgGIgBgGIgDgBIACgDIAIgFIACgBIABABIACABIAAADIABADIgBAEIABABIADgCIADgCIACgBIACgCIAHgDIAGgCIABAAQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABIADAAIAAgDIAEgBIACgBQACAAADADIACAHIABABIADgDIAEgCIAIgEIADAAIADgBIAFAAIADAAIAEABIADABIAEADIABACQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAABIABABIACAAIAAAGIABADIAAAKIAAACIgCAEIAAABIABAEIAAACIAAADIABAHIgCACIAAACIABAAIABAAIAAAEIgBACIACAFIgGADIgGAEIgDAAIAAgEIABgGIAAgCIAAgEIAAgBIAAgHIABgEIABgEIgCgEIAEgCIACAAIgGgEIACgHIgCgCIgCgKIgFgHQgBgBgEAAIgEABIgEABIgCABIgCACIgDADIgDAEIAAAHQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAABIACACIABAGIAAAHIAAADIgDgBIAAABIACAEIAAABIAAACIAAADQACAGAAAGQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBABIgEACIgFADIAAgBIgBgCIAAgEIAAgJIABgGIACgBIgBgDIgBgDIgBgDIAAgBIAAgFQABAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBgBgBAAIAAgKIgCgHQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgDABIAAgBIgCgCIgCACIgFABIgFACIgEAAIgEAHIAAADIAAAEIgBADIABAEIgBAEIgCACIACAEIABAFIgBADIAAABIABAHIABAIIgIAFIgDAAIgCAAg");
	this.shape_8.setTransform(237.775,208.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAlIgEgBIgDgBIgFgCQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIgDgBIgBgDIgBgEIACgEIADgEIAGgHIAGgCIADgDIADABIACgCIAGgBIAEgCIAGgBIACgBIACAAIACAAIAEAAIAIgCIAEgBQAAAAABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgDIAFgGIgGgCIgDAAIgFgHIgHgBIgEAAIgCAAIgCAAIgCgDIgDADIgDABIgIAFIgBABIgCACIgDABIgDgBIgFgBIgCgDIACgCIADgCIAEAAIADgCIAGgCIAFgCIADAAIAFgBIABAAIADgBIAGAAIAFABIADABIAFABIAEACIgCADQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIADgBIACgBQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIADACIAAACIAAAEIACAFIABAAIAAAEIABAIIgCACQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABABIAAACIAAADIAAACIAAAIIgBAEIABADIABACIABADIgCADIgCABIgEABIgCABIgEABIgDgBIACgGIgIADIgDAAIgDABIgDgBIgEACIgCAAIgHACIgEAAIgEABIgIgBgAgRAeIADABIACACIADAAIABAAIADgBIACABIADgBIABAAIAFgBIADgCIACABIADgCIAFgCIACgCIADgCIABgEQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBIgCgCIABgCIAAgCIgBgEIAAgBIABgEIgDgBIgDAAIgFAAIgDAAIgBAAIgDgBIgDABIgFAAIgBAAIgDAAIgCABIgGACQgGADgDACIgCADIgDACIAAABIAAABIABAGIABACIgBACIgBACIABADIACgDIAGADg");
	this.shape_9.setTransform(226.1,208.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgjBRIACgHIAAgDIABgCIABgDIgBgBIgBgDIAAgDIAAgCIAAgEIABgCIAAgBIgBgEIABgHIAAgGIAAgCIADgCIAAgCIAAgDIgCABQgCgFAAgGIABgPIADgBIgCgEIgCgCIABgEIgBgDIgBgKQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBIAFgEQgCgCgFAAIAAgEIACgEQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBIAAgDIAAgEIgBgEIABgFIgCgIIAAgCIgCgCIAEgDIAGgEIAFgBIADABIgGADIgDADIAHAIIABABIgBAEIgBACIgCAAIgBACIAAABIAAADIADgBIACgBIgBARIAAADIAAACQAAAAAAABQgBAAAAABQAAAAAAABQgBABAAAAIAAADIACACIABACIgCAFIABAEIABAGIgCADIABAEIAAABIABADIgBABIgBALIABAEQAFgDAIgHIAEABIAFgCIAEgBIADABIAAACIADAAIABgCIACgBIAFABIAKABIADADIAEADIgBADIADABQACACAAADIAAAHQAAABAAAAQAAABgBABQAAAAAAABQAAAAAAAAIgCABIACAEIgCADIAAAAIACADIAAACIAAACIAAAGIAAABIgBAEIABAHIAAAIIAAABIgGACIgDACIgEACIgDgEIACgFIABgHIgBgFIAAgBIABgEQABgDABgFIgCgBIABgMIAAgBIAAAAIAAgFIAAgBIAAgBIgBgEIgCgCIgEgBIgEgDIgEAAIgHgBIgCABIgEAAIgHABIgCAAIgFADIgEABIgHAHQAAADAHABIgBADIgBALIgDAAIAAABQADADAAACIABAIIABAEIgBAEIAAACIAAACIABACIgCACIgGACIgEADg");
	this.shape_10.setTransform(216.025,204.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXBSIgHgCIgEgDIAAgCIAAgBIgCgBIgBAAIgDABIgCgCIgFgEIgFgEIgDgBIgKgJIgEgCQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAIAAACIABAKIABAJIgBABIAAADIgBABIgFABIgHADIgBgDIACgOIABgNIACAAIABgDQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAIACgGIgCgCQAFgBAAgCIgCgCIgEgEIAAgBIABgBIgBgDIAAgEIAAgDIADgCIAAgCIgDgBIgBgQIgBgGQAEgCAAgCQAAAAAAgBQgBAAAAgBQAAAAgBgBQgBAAAAAAIAAgCIgCgNIABgHIAAgCIgCgCIAAgBIgBgCIAAgEIAAgIIAAgCIAAgFIgBgDIABgDIAAgBIgBgDIAKgGIAFgCIABABIgBAFIAAAAIAAABIAAABIAAANIgEACQgBABgBAAQAAABgBAAQAAABAAAAQAAAAAAABQAAADAIAGIgDABIAAAIIABABIACABIgBACIAAABIABAGIAAAaIgBAEIAAADQAAACACADIAAACIAAADIAAAFIABABIgGAIIAFAEIgBAFIACAFIAEgEIAGgEIAKgKIADgEIACgCIAGgGIAGgHIAIgGIADADIABACQAAADgDACIgEACIgDADIgEABIAAADQAAABgEAEIgCABIgCACIgDAAIgBADIgDADIgHAFIgBADQAEAEADACIAGAGIACACIAAABIABACIADADIADgBIAMAEIAAACIACACIADgBIADACIACABIADAAIABAAIABAAIADgBIABABIgCAEQgBADgDACIgFABIgDABIgFgBg");
	this.shape_11.setTransform(206.675,204.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcAlIABgGIAAgBIAAgFIAAgCIACAAIAAgCIgBgDIAAgDIgBgEIAAgGQABAAABAAQABAAAAgBQABAAAAgBQAAAAAAAAIAAgCIgCABIgCgBIAAgEIAAgCIAAgCIAAgBIAAgCIAAgCIABgEIgBgBIAAgHIgCgEIACgDIAEgDIAFgDIADACIAAACIABACIgBACIACACIAFgDIAEgBIAEgCIACgBIADgBIACAAIAHgDIADAAIABABIACACIACABIADgCIABAAIACACQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIgFAFIgEADQgBAAgDgDIgCAAIgFgCIgEgBQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgCAAIgEABIgCAAIgGAFQgEACAAAFIAAABIAAADIAAADIgCADIACADIAAABIABABIAAACIABASIgBABIgCABIgGABIAHACIABAAIABAEQAAABAAAAQAAAAAAABQAAAAgBABQAAAAgBAAIgEACIgFACIgCABQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_12.setTransform(198.95,208.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAlIgEgBIgDgBIgFgCQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBIgDgBIgBgDIAAgEIABgEIACgEIAHgHIAGgCIADgDIACABIADgCIAFgBIAGgCIAEgBIAEgBIABAAIACAAIAEAAIAHgCIAFgBQAAAAABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgDIAFgGIgGgCIgDAAIgFgHIgIgBIgCAAIgDAAIgCAAIgCgDIgCADIgEABIgIAFIgCABIgBACIgDABIgEgBIgDgBIgDgDIADgCIABgCIAGAAIACgCIAHgCIADgCIAFAAIAEgBIABAAIADgBIAGAAIAGABIABABIAGABIADACIgBADQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIACgBIADgBQAAAAABABQAAAAAAABQAAAAAAABQABAAAAAAIACACIAAACIAAAEIACAFIAAAAIABAEIABAIIgDACQAAAAABAAQAAABAAAAQAAAAABABQAAAAABABIAAACIAAADIAAACIABAIIgCAEIACADIAAACIACADIgCADIgEABIgDABIgCABIgFABIgCgBIACgGIgJADIgCAAIgCABIgFgBIgDACIgCAAIgHACIgEAAIgEABIgIgBgAgSAeIAEABIACACIADAAIABAAIADgBIACABIACgBIACAAIAFgBIADgCIACABIAEgCIAEgCIACgCIADgCIABgEQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIgCgCIAAgCIAAgCIAAgEIAAgBIABgEIgDgBIgDAAIgFAAIgCAAIgCAAIgDgBIgDABIgFAAIgBAAIgCAAIgDABIgGACQgGADgDACIgCADIgDACIgBABIABABIABAGIACACIgCACIgBACIABADIADgDIAEADg");
	this.shape_13.setTransform(189.35,208.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABEBdIACgHIAAgCIgBgEQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAIAAgDQgDgDAAgCIAAgCIACgHIgCgGIAAgHIAAgBIgBgHIAAgDIACgBIgBgDIgCgBIgBgGIgBgFIAAgEIAAgBIACgDIgBgEIgBgCIAAgBIgBgJIgBgFIABgIIAAgDIAHgCIgHgCIABgDQAAgEgEAAIAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAIAEgBIgHgEIAAgFIgCgDIgBAAIgBADIgCAEIAAADIgCACIAAABIgCAFIgCAEIgBADIgBADIgCAEIgBACIgBACIAAAEIgEAJIgCAFIgCADIgBACIgCABIgCAJIgCAAIAAADQAAAFgEADIAAACIAAABIgCAEIgDAEIgCAHIgCAEIgBADIgBACIgCACIgCAFIgFAOIgCAAIgBAAIgCABIgBgCIgEgHIgDgGIgCgEIgBgEIgCAAIgDgIIgEgIQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAIABgEIgCgDIgDABIgCgFIgCgEIgBgCIgBgCIgDgHIgCgBIgDgIIgFgIIABAAIABgBIgBgDIgCgDIgBgFIgBAAIgCABQgGgLAAgCIABgCIgDgCIgBgCIAAgEIgCgEIgCgEIgBAAQgDgHgCABIgCAAIABAFIABAEIAAAEIAAAGIAAACIAAACIABAHIgBACIgBABIAAAEIgBABIAAABQABABAAAAQABAAAAAAQABAAAAABQAAAAAAAAIAAADIAAACIAAAHIgBAEIABADIgCADIABAFIgCAAIAAADIACAEIAAABIgBACIAAAEIAAACIAAAFIgBAEIAAAHIABAFIgCACQgEACAAACIACADIACgCIAAAAIABAAIAAACIABAEIAAAAQAAABgEACQgEABAAACQAAAAAAAAQAAABAAAAQABAAAAAAQABABABAAIAFACIAAACIAAACIgDACIABADIgBAAIgGACIgDACIgGADIgBgBIAAAAIAAgBIAAgBIACgCIAEgDIACgCIACgEIACgBIgIgGIAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAgGIABgCIAAgCIAAgCIAAgDIgBgDIACgIIgBgFQABAAABgBQAAAAABgBQAAAAAAgBQAAAAAAAAIgCgCIAAgIIAAgDIABgGIAAgCIACgBIABgCIgBgCIgCgDIACgBIABgDIgCgDIAGgDIgBAAIgGgDIADgHQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAgBAAIACgFIgBgDIAAgDIAAgGQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQgCgDAAgEIABgCIgBgDIAAgCIAAgFIABgDIgCAAIABgHIABgEIgCgFIgDgBIABgDIAHgFIAHgFIACAAIAFAHIABADIACABIAAAEIACAEQgGABAAACQAAAAAAABQAAAAABAAQAAABABAAQAAABABAAIAEgCIABABQAAAEABADIACADIAAAAIgBADQAAABAAAAQABAAAAABQABAAAAABQABAAABABIABADIAAABIAAACQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABgDADIABAFIABAAIADgDIACAAIAAABIABACIAAAAIgBABIABABIAFAKIABAFIAAAAIAAADIgCAAIAAAAIABACIABAAIACAAIABAEIACABIACAFIAFAJIABADIADAHIAAACIAAACIABACIACACIACAAIACAGIACABIAEAJIAFAKIABADIACADIABABIAEgGIADgFIABgCIABgDIABgDIAEgGIACgCIACgCIAAAAIgBgEIABgDIACgCIACAAIABgCIAAgCIAAgCIAAgDIAFgLIACgGIADgCIgBgEIAEgLIACgGIAEgGQAAAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAIgBgEIAAgBIAAgEIAAgCIAKgPIABgEIADgEIAFgEIABgBIAAAAQgBgBgIAAIgCAAIgDgFIABgDIACgBIADgCIADgBIAFgEIAGgBIABAIIAAABIAAACIABADIgBAFIAAAEIAAADIAAADIAAABIABACIgDAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIgBADIAAABIABAAIABAAIAAAEIAAACIABAJIAAAAIgDAFIAAADIABABIACAAIACABIgBAGIAAAFIABARIAAADIAAADIAAACIgDAAIAAABIgBAEIAEABIABAEIABAIIABAFIABABIgCAEIAAADIADADIAAADIAAACIAAACIABADIgDAAIgBAFIACABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIABAEIABACIABAHIABAJIgEAFQgGAEgFAAIgCABIgCAAIgCAAg");
	this.shape_14.setTransform(174.275,206);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABEBcIACgGIAAgDIgBgDQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAIAAgDQgDgCAAgCIAAgCIACgIIgCgGIAAgIIAAAAIgBgHIAAgDIACgBIgBgDIgCgBIgBgGIgBgGIAAgDIAAgBIACgDIgBgEIgBgCIAAgBIgBgJIgBgFIABgIIAAgDIAHgCIgHgDIABgCQAAgEgEAAIAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAIAEgBIgHgEIAAgFIgCgDIgBAAIgBADIgCAEIAAADIgCACIAAABIgCAFIgCADIgBAEIgBADIgCADIgBAEIgBABIAAAEIgEAIIgCAGIgCACIgBADIgCACIgCAIIgCABIAAACQAAAFgEADIAAACIAAABIgCAEIgDAEIgCAHIgCADIgBAEIgBACIgCACIgCAGIgFANIgCAAIgBAAIgCAAIgBgBIgEgIIgDgEIgCgFIgBgEIgCAAIgDgHIgEgJQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAIABgEIgCgDIgDABIgCgFIgCgEIgBgBIgBgDIgDgHIgCgBIgDgIIgFgIIABAAIABgBIgBgDIgCgDIgBgFIgBAAIgCAAQgGgJAAgDIABgBIgDgDIgBgDIAAgDIgCgEIgCgEIgBAAQgDgHgCAAIgCABIABAFIABADIAAAFIAAAFIAAADIAAACIABAHIgBADIgBAAIAAADIgBACIAAACQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIAAADIAAACIAAAHIgBAEIABADIgCADIABAFIgCAAIAAADIACAFIAAAAIgBACIAAAEIAAACIAAAEIgBAFIAAAHIABAFIgCACQgEADAAACIACACIACgCIAAAAIABAAIAAACIABAEIAAAAQAAAAgBABQAAAAAAAAQgBABgBAAQAAABgBAAQgEABAAACQAAAAAAABQAAAAAAAAQABAAAAABQABAAABAAIAFACIAAACIAAACIgDACIABADIgBAAIgGACIgDACIgGACIgBAAIAAgBIAAAAIAAgBIACgCIAEgDIACgDIACgDIACgBIgIgGIAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAgGIABgCIAAgCIAAgCIAAgCIgBgEIACgHIgBgGQABAAABgBQAAAAABgBQAAAAAAgBQAAAAAAAAIgCgCIAAgHIAAgEIABgGIAAgDIACgBIABgBIgBgBIgCgEIACgCIABgCIgCgCIAGgFIgBAAIgGgCIADgHQgBgDgDAAIACgGIgBgCIAAgCIAAgHQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQgCgEAAgCIABgDIgBgDIAAgCIAAgFIABgDIgCAAIABgHIABgEIgCgFIgDgBIABgDIAHgGIAHgEIACAAIAFAHIABADIACABIAAADIACAFQgGACAAABQAAAAAAABQAAAAABABQAAAAABAAQAAABABAAIAEgCIABAAQAAAFABADIACADIAAAAIgBADQAAAAAAABQABAAAAABQABAAAAABQABAAABAAIABAEIAAABIAAACQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBABIABAEIABABIADgDIACAAIAAABIABABIAAABIgBABIABACIAFAJIABAEIAAABIAAADIgCAAIAAAAIABACIABAAIACAAIABAEIACABIACAFIAFAJIABADIADAHIAAABIAAADIABACIACACIACAAIACAHIACAAIAEAJIAFAKIABADIACAEIABAAIAEgGIADgFIABgDIABgCIABgDIAEgGIACgCIACgCIAAAAIgBgEIABgCIACgDIACAAIABgCIAAgCIAAgCIAAgDIAFgMIACgFIADgDIgBgDIAEgKIACgHIAEgGQAAAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAIgBgEIAAgBIAAgEIAAgCIAKgPIABgEIADgEIAFgEIABAAIAAgBQgBgBgIAAIgCAAIgDgFIABgDIACgBIADgDIADgBIAFgDIAGAAIABAHIAAACIAAABIABADIgBAFIAAADIAAAEIAAADIAAABIABACIgDAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABABIgBACIAAABIABAAIABAAIAAAEIAAADIABAIIAAAAIgDAEIAAAEIABACIACAAIACAAIgBAGIAAAFIABARIAAACIAAAFIAAABIgDAAIAAABIgBAEIAEACIABADIABAIIABAFIABABIgCAEIAAADIADADIAAADIAAACIAAACIABADIgDABIgBADIACACQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIABADIABADIABAGIABAKIgEAFQgGAEgFAAIgCAAIgCABIgCgBg");
	this.shape_15.setTransform(328.625,172.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgxBfIACgGIAAgDIAAgFIADgDIgBgFIAAgBIABgEIAAgFIACgCQgBgEgCgBIABgDIAAgMIAAgDIgBgDIADgCIAAgDIAAgDIgCgBIAAgDIAAgIIACgEIgBgEIAAAAIAAgDIAAgEIABgEQAAgEgDgCIAAgCIABgDIgBgDIAAgDIgBgFIABgDIAAgCIAAgDIAAgDIgBgHIAAgDIgBgBIgBAAIAAgGIACgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIADgDIgEgGIgBgEIABgDIgCgEIAAgBIABgCIgCgCIgEABIAAgDQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIAHgDIAEgCIABAAIAFgCQAAAAABAAQAAAAABABQAAAAAAAAQABABAAABIAGgDIAIAAIAJACIAHABIAFABIAFAAQABAEACAAQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAgBIABAAIAFABIAGABIAFABIACABIAGACIAFACIADAAIADABIADABIABACIAEADIAAABIABACIgBAFIgBADIgBAEIgCABIAAgBIgBAAIgCACIgBAAQgBAAgBAAQAAABgBAAQAAAAAAABQAAAAAAABIABACIgCACIgDADIgDABIgFADIgEABIgFADIgEABIgFACIgEAAIgBAAIgBAAIgCABIgFABIgCABIgEAAIgDABIgKABIgEACIgDABIgIABIACADIgBAEIgBANIAAAAIgBAAIAAAAIAAADIABAMIABAFIAAANIAAADIAAAHIAAAIIgBABIgBAAIAAAEIACAAIABABIgBADIAAACIAAAEIAAAAIAAABIgCABIAAACIABADQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIAAAJIAAACIACAHIAAACIgBACIgFACIgBADIgEACIgIACIgCgDgAgbgnIADAAIAAACIABAAIACAAIABgBIANgCIAIgBIACAAIACgCIAEAAIACgBIADAAIADgBIAHgCQAFAAAGgHIACgDIACgGIABgDQABgDgEgDIgGgEIgIgDIgCAAIABgDIgDAAIgFABIgDgBIgGAAIgDgCIgCAAIgCABIAAAAIgFgBIgGgBQAAgFgCgCIAAgBQgCAAgDAHIgKgBIgBABIgBADIgBAIIAAABIAAACIgBADIAAABIAAAAIAAABIABAAIAAADIAAAKIAAAFIABABIAAADIAAACIAAABIAAADIABAAIADAAg");
	this.shape_16.setTransform(312.05,172.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFA0IgJgCIAAAAIgBAAIgDgBIgBAAIAAgBIgCABIgFgCIAAgBIgBAAIgCgCIgEgDIgCgBIgBgDIAAgCIgCgBIgBACIgFgGIgCgHIgCgDIAAgCIgBgCIgBgDIAAgDIAAgDIAAgDIAAgBIABAAIACgBIAAgCIAAgCIgCABIAAgEQAAgEACgBIADgDIAAgBIgBgBIAGgKQADgGACgBIACAAIACgCIAAgBIABgCIAIgFIAFgDIAAAAIABgBIADABIACgCIAIgEIAAAAIAAAAIACAAIAHAAIAEgBIAFADIADAAIAAAAQAAABABABQAAABAAABQAAAAABAAQAAABABAAIABgEIAJADIgBACIADABIAGAFIADAGIAAAEQADAAADAIIABAEIgCAAIABADIACAAIAAAGIAAACIgBAFIABABIgDAHQgBAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAIABADIABADIgCAEIgDAIIgEAEIgDAEIgKAGIgCADIgDAAIgEACIgFADIgBgBIgEACIAAAAIgFgBIgCACIgDgBgAgFApIAFABIAEABIAFgCIAKgCIAFgEIABgBIADgEIAFgEIABgBIAAgFIACgBIAAgCIABgFIAAAAIgBgDIADgCIgCgDIAAgEIAAgFIAAgCIgBgGIgCgGIABgEQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgDACQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAIABgDIgBgCIgEABQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgBIAAgBQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIgCgBIgCgBIgCgCIgCgBIgFAAIgGAAIgBgBIgJABIgBACIgDAAIgCACQgHACgBABIgDADIgDADIgDAFIgEAEIAAACIgDAFIgBAGIgCAGIABALIAFAIIAJAJIAAACIABACIABACIADgCIAEADIAHADIgNACIAMABIAEgBIAAAAIgBAAIAAgBIAFACg");
	this.shape_17.setTransform(295,173.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgGA0IgJgCIAAAAIAAAAIgDgBIAAAAIAAgBIgDABIgFgCIAAgBIgBAAIgCgCIgEgDIgCgBIgBgDIAAgCIgBgBIgCACIgFgGIgCgHIgCgDIAAgCIgCgCIAAgDIgBgDIABgDIAAgDIAAgBIABAAIADgBIgBgCIAAgCIgCABIgBgEQABgEACgBIADgDIAAgBIgBgBIAGgKQAEgGABgBIABAAIADgCIAAgBIACgCIAHgFIAFgDIAAAAIABgBIADABIADgCIAHgEIAAAAIABAAIABAAIAIAAIADgBIAGADIACAAIAAAAQAAABABABQAAABAAABQAAAAABAAQAAABABAAIABgEIAJADIgBACIADABIAFAFIAFAGIAAAEQACAAACAIIACAEIgDAAIACADIACAAIABAGIgBACIgBAFIABABIgDAHQgEAAAAACIABADIABADIgBAEIgEAIIgEAEIgDAEIgKAGIgCADIgDAAIgDACIgGADIgBgBIgEACIAAAAIgFgBIgCACIgEgBgAgFApIAFABIAEABIAFgCIAKgCIAFgEIACgBIACgEIAFgEIABgBIABgFIABgBIAAgCIABgFIAAAAIgBgDIADgCIgCgDIAAgEIAAgFIAAgCIgBgGIgCgGIACgEQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgDACQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAIABgDIgBgCIgDABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgBIAAgBQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIgCgBIgBgBIgEgCIgBgBIgEAAIgHAAIgBgBIgJABIgBACIgEAAIgBACQgHACgBABIgDADIgDADIgDAFIgDAEIgBACIgDAFIgBAGIgCAGIABALIAGAIIAJAJIgBACIABACIABACIADgCIAEADIAHADIgNACIAMABIAEgBIAAAAIAAAAIAAgBIAEACg");
	this.shape_18.setTransform(283.55,173.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAAAcIgEgEIgCgDIgEgBIAAgBIACgCIAFgEIADgCIAFADIAEADIACADIgCAEQAAACgHAEIgCgCgAAAgMIgEgEIgCgDIgEAAIAAgBIAAAAIAGgGIAEgDIAIAFIADADIAAABIgBADIgBACIgBABIgCABIgEADIgCgCg");
	this.shape_19.setTransform(275.675,175.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgRBGIgIgDIgCgBIgDgBIAAgCIgEgEIgCgCIgDgFIABAAQgCgFgBgDIACgFIAAgBIgBgDIABgFIgBgDIABgCIADgEIABgCIACgEIAAAAIADgCIgBgDIABgDIAFgFIACgGQACgEAFgDIACgDIAEgFIACgEIAFgGIACgCIABAAQAAgDACgBIABgDIABgBIAGgFIADgFQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAAAAAIADgCIAEgEIADgDIADgEIAGgDIAEgDQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIgBACIgCAEIgEABIgEAEQgEAAgDAEIgCADIgDABQgBADgFAFIgFAEIgCADIgIALIgEAGIgDAFIgDADIgCADIgBADIgBAAIgDAFIgBABIgCAGIABADIgDAKIABABIgBADIgBAGIAAACIAAABIgCAEIADACIACAHIADAEQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAIAAABIABADIADgBIAEABIACABIADACIABgBIACABIAAgBIAEgBIAJgFIADgDIAGgGIABgFQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAIgCgDIABgCIAAgBIAAgBIAAgBIgCgCIgCgDIABgEIAAgCIgBgHIgBABIgCAIIgDgFIgDgBIAAgCIgBgCIAAAAIgDABIAAABIgEgBIgEAAIgFgBQgDAAgCACIgCAAIgBAAIgDAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAJgGIAIgDIAFAAIAFAAIACAAIACABIADACIACgBQAEAAACACIABADQAAABAAAAQAAAAAAABQAAAAABABQAAAAAAAAIADAAIADAJIABADIAAACIAAADIgBAGIgDAGIgDADIgCAGIgGADQgCAGgMAFIgDACIgIADIgDABIgFABg");
	this.shape_20.setTransform(268.05,172.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAAA1IgBAAIgBADIgCAAQgDgBgDgDQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgBgCIAAgEIAAgDIAAgHQAAgCABgCIAAgFIgBgRQABAAAAgBQABAAAAgBQAAAAAAAAQAAgBAAAAIAAgBIgCgBIAAgBIAAgBIAAgBIAAgIIgGgBIgEAAIgCABIgEAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAgCAEgCQAAgBABgBQAAAAAAgBQABAAAAAAQAAgBABAAIAEAAIABAAIAGAAIAAgDIAAgPIgBgEIgBgCIgBgCQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQAEgCAGgCQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBAAAAIABABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAAPIgCAFIgCADIABAEIACAAIgBAEIAJADIAEAAIAFgBIAHgBIAGgCIADAAIgBAFQAAABgGADIgCACIgBABIgCABIgCgBIgFgCIgCAAIgDgCIgFADIgDAAIgCABIAAAIIAAAEQAAAAgBAAQgBAAAAABQgBAAAAAAQAAABAAAAIAAACIAEABIgBANIgCgBQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAABIAAACIACgBQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIAAAEIAAABIAAAFIABAEIABACIAAABIAAACQACACAEAAIAGgCIADgBIAFgFIAGgDIACAAIAAADIgCAGIgGADIgMAEIgDABIgEADIgCgDg");
	this.shape_21.setTransform(336.25,139.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AADAlIgDABIgBAAIgEAAIgHAAIgCAAIgCgCIgIgCIgDgDIgEgCIgDgCIgBgEIgEgEIABgCIgCgGIgBgIIABgFIACgFIADgEIADgFIAHgHIAHgEIAIgFIACgBIAIgCIADAAIAHgCQAFgBACAGIADgCIACACIACABIAJAIIADAFIACAEIABAEIgBABIgDgBIgDABIgEAAIgDAAIgGgEIgEAEIgHgBIgEAAIAAAAIgIAAIgDABIgFAAIgEAAIgFAAIgHACIgBAFIgDACIAEADIACAIIABABIAAAFIADAAQABAEABACIAFABIACAEIADAAIACADIACAAIAGADIABAAIAFgBIAHgBIAEgCIAFAAIAGgDIAFgEIADgFQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIADABIgCAFIgFAKIgCgBIgDACQgBAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAIgIACIgFAAIgDABgAgDgbIgFABIgHADIgEADIgCACIAAABIAAAAIAHACIACADIAEgFIABAAIAFABIAAAAIAFgBIADAAIACABIACAAIAFgBIAGAAIAAgBIABgBIgCgCIgBgBIgCgDIgEgCIgCgCIgJAAIgCAAg");
	this.shape_22.setTransform(327.475,141.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgMAlIAAAAIgEABIgCgDIgBAAIgEABIgBAAIgGgCIgEgEQgCgEAAgDIACgCIgCgBIAAgLIACgEIgCgDIAAgGIAAgEIABgDIAAgCIgCABIABgIIgBgDIAAgCIAAgDIgBgDIADgCIAGgCIABAAIADgCIABABIACAEIgBACIgBAIIABAEIgCAHQAAADADAFIgDABIAAADIABABIgBACIAAAIIABADIAAAEIAAADQAAAFADADIAKADIAFABQAGAAAAgCIAEgDIACgCIADACIACAAIABgDIADgCIAEgFIADgDIABgEIABgEIAAgDIABgDIgCgBIAAgBIAAgOIgBgIIAAAAIACgDIgBgCIgCAAIAAgDIAAgBIABgEIACABIAGgCIAEgBQACAFgBABIAAALIAAAHIgCAJIgBgBIgBADIAAACIADgBIAAACIAAACIAAABIAAAEIAAABIgBAHIACACIAAAFIABAEIADACIgCACIgFADIgFACIgCgBIgBgEIAAgDIgDAAIgCAAIgCACIgCABIgDACIgEABQgGADgGAAIgEABIgEgBg");
	this.shape_23.setTransform(317.175,141.525);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAaBNIABgFIACgEIABgDIgBgDIAAgBIAAgDIAAgEIADgDQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAAAgBgBIAAgFIAAgGIABgDIAAgDIgBgCIAEgDIgBgCIgCgEIAAgLIAAgDIACgEQgCgCgBgDQAEAAACgCIAAgBQABgDgFAAQgDAAgDACIgDABIgFABIgBAAIgDAAIgBAAIgBABIgEACIgDABIgJgBIgFAAIgDAAIgDgBIgIgDIgGgCQgEgCgCgDIAAgCIAAgBIABgCIgBgBIgCABIgBgDIgCgHIADgDQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIAAgFQABgEAFgIIADAAIABgDIADgEIADgDIABgBIAFgFQACgCADAAIADgDIAHgBIACgCIACgCIAFABIADAAIAEABIACAAIAEAAIADABIACABQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAAAIACAAIAFgBIAGgDIABAFIAAADIgBAIIAAADIAAADIAAABIgBACIgBAAIgBABQAAAAAAABQAAAAABABQAAAAABAAQAAABABAAIAAABIAAASIAAAAIABABQAAAAgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAIACAEIAAAAIABAAIgBACIABAEIgBAFIABAIIAAACIAAADIAAATIAAAAQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABIABADIAAADIABAFIAAAFIAAAEIAAAFIABAHIgBAFIABAGIAAAEIgBAEQAAACgFABIgEACIgDABIgDgCgAAGgFIACgBIAGgCIADgCIAGgCIAEgEIAAgCIACAAIACAAIgCgEIACgEIACgDIACgCIgCgDIgBgCIgCgDIgBgJIgBgIIgBgIIgCgCIgJACIgBAAIgDAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBIgFABIgDgBIgCAAIgGABIgGAEIgFAEIgIALIAAACIgCAAIAAACIAAACIABAGIACAJIACADIAAABIAAABIAFADQgJACAAABIABAAIAJABIADAAIAFABQACAAACADIADgBIADAAIAEgBg");
	this.shape_24.setTransform(306.35,145.525);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgiAkIgBgBIABgCIAAgDIAAgIIABgDIgBgCIAAgDIAAgCIAAgCIAAgDIAAgDIABgDIACgBIAAgBIgDAAIAAgDIAAgDIAAgBIgBgJIACgBIgBgDIgBgCIgCgFQABgDADgCQAFgDACAAIADABIAAAFIADAGIAEgFIADgCIAFgEQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAFgEAFAAIACAAIACABIAEgCIAFABIAGABIACACIACAAQADABADAFQACADAAALIgFABIgDABIAHAEQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIgCAFIAAABIACADIAAADIABAFIAAAGIABAEIgBAEIABAEIgDACIgFACIgEADQgCgDAAgCIABgHIABgDIAAgBIABgBIAGgBIgCgBIgHgCIACgFIACgDQABAAAAgBQABgBAAAAQAAgBAAAAQAAgBAAAAIgGgDIABgCIgBgGIABAAIAAgDIgBgDIAAgEIgCgDIgCgDIAAgBIgCgBIgDgFIgCgBIgEACQgEADgDAAIgCgBIgCACIAAABQgDgFgCAAIgBAAIgCABIgGADIgGAEIgBAEIAAAHIAAAAIgBACIgEAEIAAABIABACIAEABIABACIAAACIAAAHIgCADIAAABIACAEIAAAAIAAADIACAJIgDADIgDAAIgBABIgBAAIgCACIgCABIgCgCg");
	this.shape_25.setTransform(296.05,141.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgVAlIgEAAIgDgCIgFgDQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIgCgBIgCgDIgBgFIACgCIADgGIAGgFIAGgEIAEgCIACABIABgCIAHgBIAEgDIAGAAIACgBIACgBIACAAIAEAAIAIgBIAEAAQAAgBABAAQAAAAAAgBQAAAAAAgBQABAAAAgBIgBgDIAFgHIgGgCIgDAAIgFgFIgHgCIgEAAIgDgBIgBAAIgBgCIgEACIgDACIgIAFIgBABIgCACIgDAAIgDgBIgFgBIgCgCIACgCIADgBIAEgCIADgBIAGgCIAFgCIADAAIAFgBIABAAIADgBIAGABIAFABIADAAIAFABIAEACIgCACQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIADgBIACgBQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIADACIAAAAIAAAFIACAFIABAAIAAAFIABAHIgCACQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABAAIAAACIAAAEIAAACIAAAIIgBADIABAFIABABIABADIgCACIgCACIgEACIgDAAIgDABIgDAAIACgHIgIADIgDABIgDAAIgDAAIgEACIgCAAIgHABIgEAAIgEABIgIgBgAgRAdIADACIACACIADAAIABABIADgCIACABIADgCIABABIAGgCIACgBIACAAIADgBIAFgBIACgEIAEgBIAAgDQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBAAAAIgCgCIABgDIAAgBIgBgFIAAgBIABgDIgDgBIgEAAIgDAAIgEAAIgBAAIgDgBIgDABIgFAAIgBAAIgDAAIgCABIgGACQgGADgDADIgCACIgDACIAAABIAAABIABAFIABACIgBAEIgBACIABABIACgCIAGACg");
	this.shape_26.setTransform(285.6,141.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgfBgIABgDIgDAAIgDABIgEABIgHgBIgCgBIgCAAIgFgBIgFAAIgDAAIgEAAIgJgBIAAAAIgGABQgEAAAAgCIAAgBIAEgDIAHgDIACgCIABgCIAAgDIAIgCIgGgCQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAIABgDIAAgGIAAgBIgCgFIAKgEIgKgDIACgBIABgDIAAgCIACgBIAAgCIgBgBIgBgFIAAgBIACgEIAAgBIgBgCIgBgDIgBgEIABgIIAAgEIAAgDIABgBIgCgBIABgHIgBgGIABgBIgBgFIADgBIABAAIgBgDIAAgBIgBgDIgCABIgCgFIABgDIAAgFIAAgDIgBgCIAAgEIgBgKIABgDIAAgDIACgBIAAgBIAAgCIgDAAIgBgFIAAgCIgBgJIAAgEIgDAAIgGABIgBAAIACgEIADgCIAAgBIADAAIACgBIADABIACAAIAGgCIAEAAIAHgBIABAAIAEABIADAAIAEAAIACACIADABIABgCIAEgCIAJABIAMACIAEAAIAFAAIADABIACABIACAAIANAEIAFACQACACAAAEQABAFgGAHIgCAFIgIAHIgEAAIgBAAIAAADIgCACIgIAEIgDABIgFABIgBACIACABIAHAAIAGACIAIACIAEACIAAADQAAAAAAAAQAAABABAAQAAAAAAABQABAAAAAAIADgEIAEABIAHADQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIACABIABABIABAAIABABIADgBQACAAAEACIALAIIAEAEIgBABIABACIADgBIAIAFIABACIADACIACACIAEAGQgBAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIABABIADgBIADAFIACAIIADAGIgBAEIAAAEQAAACgEADIACACIAAACIAAABIAAACIgGAJIgCACIgDACIgCACIgCADQgCADgJADIgBgBIgEABIgCADQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIgBACIgHACIgJAEIgDABIgFABIgBABIgCgBIgEABIgBACIgCAAIgDABIgEACIgDgCIgCACIgDABQgEAAgBACIgDgDIAAAAIgDAAIgBADIgTAAgAgpBXIADABIAEABIATABIAPgCIABACIACgCIAFgBIADgCIAEAAIAFgBIAIgDIADgBIABAAIADgBQALgFAEgEIAJgFIADgDIADgEQABgBADgBIAAgCIAJgCQAAgBgJgBIACgEIABgFIABgDIAAgBIABgBIgBgCIAAgFIgCgDIAAgDQAAgDgGgIIgJgKIAAgCIgBgBIgBAAIgBAAIgEgCIgEgDIgCgCIgBAAIgCgBIgDgDIgCgBIgDgBIgBgDIgBgBIgDABIgBABIgDgBIgEgDIgCgBIgJgCIgGgDIgEgDIgEACIgFgCIgEgBIgDgBIgEgBIgCAAIgDgBIgIgBIgGABIgIgBQgEAAgFAEIABAIIAAABIAAADIgBAAIgCABIAAAEIACACIgBAEIAAADIAAAAIABAFIAAADIAAADIAAAGIgBACIABAEIABAFIAAAFIgBAGIgBAAIAAAFQABABABAAQAAABAAAAQABABAAAAQAAABAAAAIAAAHIAAACIgBABIAAAAIgBAAIAAABIgCAAIgCABIABADIADAAIABAEIAAABIAAADIgBABIACAIQAAACgDACIgBAAIgBABIAFACIAFABIAAACIADgCIAHADgAg8hAIAAARIAAACIADABIABAAIADAAIADABIAJAAIgBADQAAABAAAAQAAABAAAAQABAAAAABQAAAAAAAAIAFgFIAAgBIASgEIAEgCIAEgCIAEgCIAIgHIAEgEIACgFIACgEQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIABgDIgBgBIgEACIgDgFIgBAAIgEgBIgBgBIgKgCIgDgBIgEAAIgCAAIgCAAIgEgBIgDAAIgEAAIgIABIgHABIgGAAIgCAAIgBADIAAALQAAABgBAAQAAAAAAABQAAAAgBABQAAAAgBABIABACIABAAIACADg");
	this.shape_27.setTransform(271.1,139.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("ABEBcIACgGIAAgDIgBgDQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAIAAgDQgDgCAAgCIAAgCIACgIIgCgGIAAgIIAAAAIgBgHIAAgDIACgBIgBgDIgCgBIgBgGIgBgGIAAgDIAAgBIACgDIgBgEIgBgCIAAgBIgBgJIgBgFIABgIIAAgDIAHgCIgHgDIABgCQAAgEgEAAIAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAIAEgBIgHgEIAAgFIgCgDIgBAAIgBADIgCAEIAAADIgCACIAAABIgCAFIgCADIgBAEIgBADIgCADIgBAEIgBABIAAAEIgEAIIgCAGIgCACIgBADIgCACIgCAIIgCABIAAACQAAAFgEADIAAACIAAABIgCAEIgDAEIgCAHIgCADIgBAEIgBACIgCACIgCAGIgFANIgCAAIgBAAIgCAAIgBgBIgEgIIgDgEIgCgFIgBgEIgCAAIgDgHIgEgJQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAIABgEIgCgDIgDABIgCgFIgCgEIgBgBIgBgDIgDgHIgCgBIgDgIIgFgIIABAAIABgBIgBgDIgCgDIgBgFIgBAAIgCAAQgGgJAAgDIABgBIgDgDIgBgDIAAgDIgCgEIgCgEIgBAAQgDgHgCAAIgCABIABAFIABADIAAAFIAAAFIAAADIAAACIABAHIgBADIgBAAIAAADIgBACIAAACQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIAAADIAAACIAAAHIgBAEIABADIgCADIABAFIgCAAIAAADIACAFIAAAAIgBACIAAAEIAAACIAAAEIgBAFIAAAHIABAFIgCACQgEADAAACIACACIACgCIAAAAIABAAIAAACIABAEIAAAAQAAABgEACQgEABAAACQAAAAAAABQAAAAABAAQAAAAAAABQABAAABAAIAFACIAAACIAAACIgDACIABADIgBAAIgGACIgDACIgGACIgBAAIAAgBIAAAAIAAgBIACgCIAEgDIACgDIACgDIACgBIgIgGIAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAgGIABgCIAAgCIAAgCIAAgCIgBgEIACgHIgBgGQABAAABgBQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgCIAAgHIAAgEIABgGIAAgDIACgBIABgBIgBgBIgCgEIACgCIABgCIgCgCIAGgFIgBAAIgGgCIADgHQgBgDgDAAIACgGIgBgCIAAgCIAAgHQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQgCgEAAgCIABgDIgBgDIAAgCIAAgFIABgDIgCAAIABgHIABgEIgCgFIgDgBIABgDIAHgGIAHgEIACAAIAFAHIABADIACABIAAADIACAFQgGACAAABQAAAAAAABQAAAAABABQAAAAABAAQAAABABAAIAEgCIABAAQAAAFABADIACADIAAAAIgBADQAAAAAAABQABAAAAABQABAAAAABQABAAABAAIABAEIAAABIAAACQAAABABAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQgBAAAAABIABAEIABABIADgDIACAAIAAABIABABIAAABIgBABIABACIAFAJIABAEIAAABIAAADIgCAAIAAAAIABACIABAAIACAAIABAEIACABIACAFIAFAJIABADIADAHIAAABIAAADIABACIACACIACAAIACAHIACAAIAEAJIAFAKIABADIACAEIABAAIAEgGIADgFIABgDIABgCIABgDIAEgGIACgCIACgCIAAAAIgBgEIABgCIACgDIACAAIABgCIAAgCIAAgCIAAgDIAFgMIACgFIADgDIgBgDIAEgKIACgHIAEgGQAAAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAIgBgEIAAgBIAAgEIAAgCIAKgPIABgEIADgEIAFgEIABAAIAAgBQgBgBgIAAIgCAAIgDgFIABgDIACgBIADgDIADgBIAFgDIAGAAIABAHIAAACIAAABIABADIgBAFIAAADIAAAEIAAADIAAABIABACIgDAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABABIgBACIAAABIABAAIABAAIAAAEIAAADIABAIIAAAAIgDAEIAAAEIABACIACAAIACAAIgBAGIAAAFIABARIAAACIAAAFIAAABIgDAAIAAABIgBAEIAEACIABADIABAIIABAFIABABIgCAEIAAADIADADIAAADIAAACIAAACIABADIgDABIgBADIACACQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIABADIABADIABAGIABAKIgEAFQgGAEgFAAIgCAAIgCABIgCgBg");
	this.shape_28.setTransform(210.125,172.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgxBfIACgGIAAgDIABgFIACgDIgBgFIAAgBIAAgEIABgFIABgCQgBgEgBgBIAAgDIAAgMIABgDIgBgDIADgCIgBgDIAAgDIgBgBIAAgDIAAgIIACgEIgCgEIAAAAIABgDIAAgEIAAgEQAAgEgCgCIAAgCIAAgDIAAgDIAAgDIgBgFIABgDIAAgCIAAgDIAAgDIgBgHIAAgDIgBgBIAAAAIgBgGIACgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIADgDIgDgGIgCgEIACgDIgDgEIAAgBIABgCIgDgCIgCABIgBgDQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIAHgDIADgCIACAAIAFgCQAAAAABAAQAAAAABABQAAAAAAAAQABABAAABIAGgDIAIAAIAKACIAGABIAFABIAFAAQABAEACAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBIACAAIAEABIAGABIAEABIAEABIAFACIAGACIACAAIADABIADABIABACIADADIABABIABACIgBAFIgCADIgBAEIgBABIAAgBIAAAAIgDACIgBAAQgBAAgBAAQAAABgBAAQAAAAAAABQAAAAgBABIACACIgCACIgDADIgEABIgDADIgFABIgFADIgFABIgEACIgEAAIgBAAIgBAAIgCABIgGABIgBABIgDAAIgEABIgKABIgEACIgDABIgIABIACADIAAAEIgCANIAAAAIgBAAIAAAAIAAADIABAMIACAFIgBANIAAADIAAAHIABAIIgCABIgBAAIAAAEIADAAIAAABIAAADIgBACIABAEIAAAAIgBABIgCABIAAACIABADQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABIgBAJIAAACIACAHIAAACIgBACIgGACIgBADIgDACIgIACIgCgDgAgbgnIADAAIAAACIABAAIADAAIABgBIAMgCIAIgBIACAAIADgCIACAAIADgBIADAAIADgBIAHgCQAFAAAGgHIACgDIACgGIACgDQAAgDgEgDIgGgEIgHgDIgDAAIABgDIgEAAIgDABIgEgBIgGAAIgDgCIgCAAIgBABIgBAAIgGgBIgEgBQgBgFgCgCIAAgBQgCAAgCAHIgKgBIgCABIgBADIgBAIIAAABIAAACIgCADIAAABIAAAAIAAABIACAAIAAADIAAAKIgBAFIACABIAAADIAAACIAAABIAAADIACAAIACAAg");
	this.shape_29.setTransform(193.55,172.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgFA0IgJgCIAAAAIgBAAIgDgBIgBAAIAAgBIgCABIgEgCIAAgBIgCAAIgDgCIgDgDIgBgBIgCgDIAAgCIgCgBIgCACIgDgGIgDgHIgCgDIgBgCIgBgCIAAgDIAAgDIAAgDIAAgDIAAgBIABAAIACgBIgBgCIABgCIgCABIgBgEQABgEABgBIAEgDIAAgBIgBgBIAFgKQAEgGACgBIACAAIACgCIgBgBIACgCIAIgFIAGgDIAAAAIAAgBIACABIADgCIAHgEIABAAIAAAAIADAAIAGAAIAEgBIAFADIADAAIABAAQAAABAAABQAAABAAABQAAAAABAAQAAABABAAIABgEIAIADIAAACIADABIAFAFIAEAGIAAAEQADAAACAIIABAEIgBAAIABADIABAAIABAGIAAACIgBAFIAAABIgCAHQgBAAgBAAQgBAAAAABQgBAAAAAAQAAABAAAAIABADIACADIgCAEIgEAIIgEAEIgDAEIgLAGIgBADIgDAAIgEACIgEADIgCgBIgEACIgBAAIgEgBIgCACIgDgBgAgFApIAFABIAEABIAGgCIAJgCIAEgEIACgBIAEgEIADgEIABgBIABgFIADgBIAAgCIABgFIAAAAIgBgDIACgCIgCgDIAAgEIAAgFIAAgCIAAgGIgDgGIACgEQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBgBAAIgCACQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAIAAgDIgBgCIgEABQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgBIAAgBQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIgCgBIgDgBIgCgCIgCgBIgFAAIgFAAIgCgBIgJABIgCACIgCAAIgCACQgHACgBABIgDADIgDADIgDAFIgEAEIAAACIgDAFIgBAGIgBAGIAAALIAFAIIAJAJIAAACIABACIACACIACgCIAEADIAGADIgMACIAMABIAEgBIAAAAIgBAAIAAgBIAFACg");
	this.shape_30.setTransform(176.5,173.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgFA0IgJgCIAAAAIgBAAIgDgBIgBAAIAAgBIgCABIgFgCIAAgBIgBAAIgDgCIgDgDIgCgBIgBgDIAAgCIgCgBIgBACIgFgGIgCgHIgCgDIAAgCIgBgCIgBgDIAAgDIAAgDIAAgDIAAgBIABAAIACgBIgBgCIABgCIgCABIAAgEQAAgEABgBIAEgDIAAgBIgBgBIAGgKQADgGACgBIACAAIACgCIAAgBIABgCIAIgFIAGgDIAAAAIAAgBIADABIACgCIAHgEIABAAIAAAAIACAAIAHAAIAEgBIAFADIADAAIABAAQAAABAAABQAAABAAABQAAAAABAAQAAABABAAIABgEIAJADIgBACIADABIAGAFIADAGIAAAEQADAAADAIIABAEIgCAAIABADIABAAIABAGIAAACIgBAFIAAABIgCAHQgBAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAIABADIACADIgDAEIgDAIIgEAEIgDAEIgLAGIgBADIgDAAIgEACIgEADIgCgBIgEACIAAAAIgFgBIgCACIgDgBgAgFApIAFABIAEABIAFgCIAKgCIAEgEIACgBIAEgEIAEgEIAAgBIABgFIACgBIAAgCIACgFIAAAAIgCgDIADgCIgCgDIAAgEIAAgFIAAgCIgBgGIgCgGIABgEQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBgBAAIgCACQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAIAAgDIgBgCIgEABQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgBIAAgBQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIgDgBIgCgBIgCgCIgCgBIgFAAIgGAAIgBgBIgJABIgBACIgDAAIgCACQgGACgCABIgDADIgDADIgDAFIgEAEIAAACIgDAFIgBAGIgBAGIAAALIAFAIIAJAJIAAACIABACIABACIADgCIAEADIAHADIgNACIAMABIAEgBIAAAAIgBAAIAAgBIAFACg");
	this.shape_31.setTransform(165.05,173.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAAAcIgEgEIgCgDIgEgBIAAgBIACgCIAFgEIADgCIAFADIAEADIACADIgCAEQAAACgHAEIgCgCgAAAgMIgEgEIgCgDIgEAAIAAgBIAAAAIAGgGIAEgDIAIAFIADADIAAABIgBADIgBACIgBABIgCABIgEADIgCgCg");
	this.shape_32.setTransform(157.175,175.825);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgdBGIgKgCIACgFIAGABIACgCIAEgBIAEgDIACAAIAEgCQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAgBIAMgKIADgCIACgEIACgCIACgCIAEgCIABgEIACgDIABgDIADgFIABgCIACgHIAAgEIABgDIAAgCIAAgDIgBgDIADgBIAAgBIgCgIIgBABIAAAGIAAADIgCgDIgGgDIAAgEIgDgBIAAAAIgCAAIgEgBIgEgBIgCgBIgDgBIgFAAIAAgBIABgCIgCgCIgCADIgCAAQgFAAgCADIgCACIgDACIgEABIgDgBIAAgBIADgDIACgDIACgCIADgCIABgBIABgDIACgBIABgDIAFgIIABgHIACgEIAAgCQABAAABAAQABAAAAgBQABAAAAAAQAAAAABAAIABgDQAAAAAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAIADAAIAEAAIADAFIAEgFIADgBQAAAAABABQAAAAAAAAQABAAAAAAQAAABAAAAIABAEIABABIAEgHIAEAAIAEAAIABAAIAEgDIAEAAIABACIgFAGIgCAEIgCACIgFACIgDgCIgIAAIgCgEIgBgBIgHAFIgCgEIgCABIgBAAQAAAAAAAAQgBABAAAAQAAABAAABQAAAAgBABIAAgCIgBADIgCABIgCAEIgFAKIADABIAJABIACABIAGAAIAGAAIAAACIACgBIAEACIACAAIAAACIABADIABAAIADgBIACAAIACACIAEAFIACADIAAACIAAABIABAEIgBADIAAAEIgCADIAAABIgBAEIgCACIgBADIgCAFIgDADIgCADIgBADIgCACIgCADIgFAGIgGAFIgDADIgEAFIgDADIgBABIgCADQgCADgDACIgCAAIAAABIgIAGIgEACIgBACIgCAAIgCAAg");
	this.shape_33.setTransform(148.95,174.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgGBTIAAgDIgBgDIAAgBIABgEIAAgCIABgDIgBgBIAHgGIgGgFIAAgBIAAgEIABgCIgBgEIgBgBIACgEIABgFIgCgCIAAgDIgBgDIABgEIABgCIgBgHIAAgDIACgEIAAgFIgCgCIAAgVIACgCIABgEIgDgCIABgDIgCgCIAAgEIAAgEIABgDIAAAAIAAgCIgBgCIAAgBIAGgFIgEgHIgEgGIABgDIAAgDIADgBIADgCQACgBACgDIABAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAABIAAABIABADIAAAIIAAAJIgCACIgBADIACABIABADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIAAAEIABACIAAADIAAAMIAAAMIgCAEIgBACIACAFIAAAAIgCADIACAEIABABIAAAGIAAAWIgCABIABAEIgBAEIAAADIADAAIAAABIACAQIgBAEIABADIgCAEIAAABIgFADIgCABIgBAAIgEACIgBAAg");
	this.shape_34.setTransform(217.825,137.075);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgJA9IAAgDIABgEIABgFIAAgJIAAgCQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIABAAIAAgDIAAgDIgBgCIgCgBIABgEIAAgBIAAgBIABgDIgBgDIAAgBIAAgBIgBgBIAHgCIAAgBIgEgBIgEAAIAAgCIAAgJQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIADgDQAGgGAEgBIADADIgCAHIAAAEIAAADIgCACQAAADACACIgBABIABAFIAAABIgBACIAAATIABAGIAAAFIABADQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBABIgDACIgFAEIgCABIgCgCgAgIgrQgBgDAFgEIADgDIABgCIAEgFIADgCIACACQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgIAIIgCABIgDADIgEACIAAgCg");
	this.shape_35.setTransform(213.925,139.05);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgUAlIgFAAIgDgCIgFgDQAAAAgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBIgCgBIgBgDIgBgFIABgCIACgGIAHgFIAGgEIAEgCIABABIACgCIAGgBIAGgDIAEAAIAEgBIACgBIABAAIAEAAIAHgBIAFAAQAAgBABAAQAAAAAAgBQAAAAAAgBQABAAAAgBIgBgDIAFgHIgGgCIgDAAIgFgFIgHgCIgDAAIgEgBIgBAAIgBgCIgDACIgEACIgIAFIgCABIgBACIgDAAIgEgBIgDgBIgDgCIADgCIABgBIAGgCIACgBIAHgCIADgCIAEAAIAFgBIABAAIADgBIAGABIAGABIABAAIAGABIAEACIgCACQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIACgBIADgBQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABIACACIAAAAIAAAFIACAFIAAAAIABAFIAAAHIgCACQAAAAABAAQAAABAAAAQAAAAABABQAAAAABAAIAAACIgBAEIAAACIABAIIgBADIABAFIABABIACADIgDACIgDACIgDACIgDAAIgDABIgCAAIABgHIgJADIgCABIgDAAIgDAAIgEACIgCAAIgHABIgEAAIgEABIgHgBgAgSAdIAEACIACACIADAAIABABIADgCIACABIACgCIACABIAGgCIACgBIACAAIAEgBIAEgBIACgEIAEgBIAAgDQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBAAAAIgCgCIABgDIAAgBIgBgFIAAgBIABgDIgCgBIgFAAIgDAAIgDAAIgCAAIgDgBIgCABIgGAAIgBAAIgCAAIgEABIgEACQgHADgCADIgDACIgDACIgBABIABABIABAFIABACIgBAEIgBACIABABIADgCIAEACg");
	this.shape_36.setTransform(206.25,141.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAAA1IAAAAIgCADIgCAAQgCgBgEgDQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgCgCIgBgEIAAgDIABgHQAAgCACgCIgBgFIgBgRQABAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAIAAgBIgEgBIAAgBIAAgBIABgBIAAgIIgFgBIgGAAIgBABIgDAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAgCAEgCQAAgBABgBQAAAAAAgBQABAAAAAAQABgBAAAAIAFAAIAAAAIAGAAIAAgDIAAgPIgCgEIgBgCIAAgCQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQAEgCAGgCQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBABAAIABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAAPIgBAFIgDADIABAEIACAAIAAAEIAJADIADAAIAGgBIAGgBIAGgCIADAAIAAAFQgBABgFADIgCACIgCABIgDABIgBgBIgEgCIgDAAIgDgCIgFADIgDAAIgCABIABAIIAAAEQgBAAgBAAQgBAAAAABQgBAAAAAAQAAABAAAAIAAACIAEABIAAANIgDgBQAAAAgBAAQAAAAAAAAQAAABAAAAQgBAAAAABIABACIADgBQAAAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIAAAEIAAABIAAAFIABAEIAAACIAAABIAAACQAEACAEAAIAGgCIACgBIAFgFIAFgDIADAAIgBADIgBAGIgGADIgMAEIgDABIgEADIgCgDg");
	this.shape_37.setTransform(198.05,139.85);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAXBRIgHgCIgEgCIAAgCIAAgBIgCgBIgBAAIgDABIgCgCIgFgEIgFgFIgDgBIgKgIIgEgDQAAAAAAABQgBAAAAAAQAAAAAAAAQAAABAAAAIAAACIABAKIABAJIgBACIAAACIgBABIgFABIgHADIgBgDIACgNIABgPIACAAIABgCQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAIACgGIgCgCQAFgCAAgCIgCgCIgEgCIAAgBIABgDIgBgDIAAgDIAAgEIADgCIAAgBIgDgBIgBgPIgBgHQAEgDAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgBAAAAgBIAAgBIgCgMIABgIIAAgBIgCgDIAAgBIgBgDIAAgDIAAgIIAAgCIAAgFIgBgDIABgEIAAAAIgBgDIAKgGIAFgCIABABIgBAFIAAABIAAAAIAAABIAAANIgEADQgBAAgBAAQAAABgBAAQAAABAAAAQAAABAAAAQAAADAIAFIgDABIAAAJIABAAIACABIgBAEIAAABIABAFIAAAaIgBAFIAAABQAAADACADIAAACIAAACIAAAHIABABIgGAHIAFAEIgBAGIACADIAEgDIAGgEIAKgKIADgDIACgDIAGgGIAGgIIAIgEIADACIABACQAAADgDADIgEABIgDADIgEABIAAADQAAABgEADIgCACIgCACIgDABIgBACIgDACIgHAHIgBACQAEAEADACIAGAFIACADIAAABIABACIADACIADgBIAMAFIAAADIACABIADgBIADABIACABIADAAIABAAIABABIADgBIABAAIgCAFQgBAEgDABIgFABIgDABIgFgCg");
	this.shape_38.setTransform(190.125,137.15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgGAlIgIgBIgCgBIgDgBIgDAAIgBgCIgGgFIABgCIAAgBIgEABIAAAAIgCgFIgCgDIAAgEIAAAAIAAgDIgDgDIAFgDQAAAAABgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAgCgGgBIAFgIIACgFIAEgDIACgCIADgDIAFgEIACgBIACgCIACgBIADgCIAFgCIAFgCIAFAAIACACIAFgCIABAAIAEABIACAAIACABIAFgCIAEACIgBADIgDABIgBADIgEACIgCABIgBAAIgBAAIgDAAIgDAAIgDAAIgFgBIgCgBIgDAAIgGABIgFABIgEAEIgEABQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAIgDABIAAACIgDAFIAAALIACAIIgCAEIAEABIAFAIIADABIABACIAEACIADACIAEACIAEAAIAEABIADAAIACABIAHgCIACAAIABgBIAEgDIAFgCIADgCIACgCIADgDIACABIgBAHIgEAEIgGADIgCABIgDACIgEgBIgGACIgDACIgBAAIgJAAIgCAAIgFgCg");
	this.shape_39.setTransform(180.425,141.575);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgWAlIgCgCIgDAAIgIgEIgEgCIgBgDIAAgBIgCgCIgBgBQgCgDAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBIgDgCIABgKIADgHIAEgIIAFgDIABgDIABgCIAIgEIAFgEIAMgEQAFgDALAAIAFABIAAACIADABIACgCIAKAEIADACIACAEQACADAEAAIAEAFIABAHIABAHIgCAAIAAABIgBACQAAABAAAAQAAAAAAAAQAAAAABAAQAAABABAAIAAAGIgCAEIgFAKQgGAHgDABIgGADIgFACIgFACIgJABIgFABIgHAAIgEABIgLgCgAgOAeIAHACIAFAAIADAAIACABIAGgBIAFgBIAHgEIAEgCIAEgGIACgFIADgDIABgBIgCgEIAAgCIACgGIgDgGIgBgFIAAgEIgBAAIgCAAIgEgGIgDgDIgBgBIgFgCQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAgBAAIgCABIgEgBIgFAAIgGACIgBgBIgDACIgEACIAAABIgMAKIgBABIgBADIgCADIgDAFIABABQAAADgDAAIAAACIADADQAAAAAAAAQAAABgBAAQAAAAgBABQgBAAAAABIAAABIABAAIABgBIACAGIAFAIIAAABIgBACQAAABAAAAQABAAAAAAQAAABABAAQAAAAABAAIABgBIAJAEg");
	this.shape_40.setTransform(169.85,141.575);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgIBgIgDgBIgCACIgGAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAIAAAAIgDAAIgDABQgDAAgGgDIgJgFIgLgGIgBgCIADAAIAAgBQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAgBAAIgCACIgEgDIgGgEIgCgDIgBgBIgEgFQgHgLgDgNIACgBIAAgCIgCgBIgBgEIAAgCIgBgCIAAgEIgBgEIABgCIgCgEIACgEIABgEQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIABgEIACgKIAEAAIgCgEIAAgBIADgIQABgEACgDIACgGIACABIACAAIACgBIACgBIAAgBIgCAAIgBgEIADgEIABgCIACgCIADgEIAAgBIADgDIAEgDIAAABIADgCIABgCIAMgKIADgCIADgCIACAAIAEgDIADABIABgEIAEABIAAgCIAFgBIAHgCIADgBIADAAIACgCIADAAIAFgBIADgBIACABIABAAIAOgBQADABAEADIACACQACAAABgEQADACADAAIABAAIADAAIADABQANADADACIAAADIgCACQgDADgBAAIgEgBIgMgFIgBgDIgDABIgCAAIgGgCIgDgBIgBgCIgDACIgGAAIgIAAIgDgBIgGACIgGABIgFABIgEABIgEADIgEACQgLAFgEAFIgGACIAAADIgFAEIgDACIgDAEIgBABIgCAAIABABIgFAIIgEAFIgCAFIgDAFIgBADIgDAHIgBAGIgCAGQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIgBADIABAFIAAABIgBABIgIADIgBABIABABIACADIABACIAEAEIACAEIABAEIgBAAIABADIABABIABADIABAAIAAACIABAEIABAEIADAIQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAIABACIAEABIABABIAEAEIADADIACADIAFADQAAAAABABQAAAAAAABQAAAAAAABQABAAAAAAIAEADIAFACIADACIADACIAEABIACABIACACQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAIAMADIALAAIACAAIADACIACgCIABAAIABAAIAAAAIAIgBIAKgCIADABIAFgCIAFgCIAFgCIADABIAIgCIAIgDIACgCIAEgCQADgCACAAIADABQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAIADgCIAEgCIACABQAAAFgCADIgCAEIgBABIgIACIgEACIgGABIgEABIgFABIgEABIgHACIgDAAIgEgBIAAABQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAgBAAIAAAAIgCAAIgBAAIgMADIgJABIgIAAIAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgHABIgGgCg");
	this.shape_41.setTransform(154.45,138.825);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgiAkIgBgBIABgCIAAgDIAAgIIABgDIgBgCIAAgDIAAgCIAAgCIAAgDIAAgDIABgDIACgBIAAgBIgDAAIAAgDIAAgDIAAgBIgBgJIACgBIgBgDIgBgCIgCgFQABgDADgCQAFgDADAAIACABIAAAFIACAGIAGgFIACgCIAGgEQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAFgEAFAAIACAAIACABIAEgCIAGABIAEABIADACIACAAQADABADAFQACADAAALIgFABIgCABIAGAEQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIgCAFIAAABIACADIAAADIABAFIAAAGIABAEIgBAEIABAEIgDACIgFACIgEADQgDgDAAgCIACgHIABgDIAAgBIACgBIAEgBIgBgBIgHgCIACgFIADgDQAAAAAAgBQABgBAAAAQAAgBAAAAQAAgBAAAAIgGgDIABgCIgBgGIABAAIAAgDIgCgDIAAgEIgBgDIgCgDIAAgBIgCgBIgEgFIgBgBIgEACQgEADgDAAIgCgBIgDACIAAABQgCgFgCAAIAAAAIgDABIgGADIgGAEIgBAEIAAAHIAAAAIgBACIgEAEIAAABIABACIAEABIABACIAAACIAAAHIgCADIAAABIACAEIAAAAIAAADIABAJIgCADIgCAAIgCABIgBAAIgCACIgCABIgCgCg");
	this.shape_42.setTransform(119.55,208.525);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AADAmIgDABIgBAAIgEAAIgHgBIgCAAIgCgBIgIgDIgDgDIgEgCIgDgDIgBgDIgEgDIABgDIgCgFIgBgIIABgHIACgEIADgEIADgEIAHgHIAHgFIAIgFIACAAIAIgDIADAAIAHgDQAFABACAFIADgCIACACIACABIAJAJIADAEIACAFIABADIgBAAIgDgBIgDACIgEgBIgDABIgGgEIgEAEIgHgBIgEAAIAAgBIgIABIgDAAIgFAAIgEABIgFAAIgHADIgBAEIgDACIAEAEIACAIIABABIAAADIADABIACAFIAFACIACAEIADABIACACIACAAIAGACIABABIAFgBIAHgBIAEgBIAFgBIAGgEIAFgDIADgEQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAABAAIADACIgCAEIgFAJIgCAAIgDABQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAIgIACIgFABIgDABgAgDgcIgFACIgHADIgEADIgCACIAAAAIAAAAIAHAEIACACIAEgFIABgBIAFACIAAAAIAFgBIADgBIACADIACgBIAFgCIAGABIAAgBIABgBIgCgCIgBgBIgCgDIgEgCIgCgCIgJAAIgCgBg");
	this.shape_43.setTransform(109.275,208.35);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgUBQIgCgDIgDACIgBgBIgBgCIgBgCIgDABIgCgBIgGgEIAAgDQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgDgCIAAgCIgBgIIAAgEIABgFIABgDIAFgKIADgCIADAAIABAAIgBgFIADgCIAFgFIADgCIADgCIADABIACABIAEgDIAAgCIAFgCIADgCIADAAIADgBIACABIAEADIACgDIAEABIAHACIACABIABAAIAEgBIgCgCIAAgGIgBgBIAGgFIgDgEQgCgDAAgGIACgBIgBgEIgCgGIAAgDIAAgHIABgFIgBgFIAAgCIACgBIgBgCIgDAAIAAgBIAHgFIgCgCIAAgFQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBgBQgFgBAAgBIABgCIAHgCQACgCAIgBIAAAEIABACIgBAFIAAACIAAACIAAAEIAAADIAAAEIgBACIgBADIABAHIgCAEIACAGIgBADIABADIgBADIABAEIAAACIgBACIgCAAIgBADIAAACQAEACAAACIgBAFIAAABIABAFIAAACIAAAAIgBACIABACIgCADIAAAFIABACIAAAFIAAAHIABACIAAAFIAAAEIABAJIAAAEIABAHIABAEIABADIAAABQgBABgGABIgHABIgBgBIgFACIgIACIgPACIgIABIgOgBgAgTAVIgDACQgEAEABACIgFAFIgDAEIAAAFIABAEIAAACIABACIABADIACAEIgBACIADABIABADIADAEIAEADIACADIADABIADADQACAAABgFQAEACACAAIAIgBIAEAAIAIgCIAGgBIAEgFIAAgCIAAgDIAAgIIAAgGIgBgFIAEgBIgBgDIAAgCIgCAAIAGgFIgGgHIAAgCIAAgBIAAgDIgDgBIgDABIgBAAIgEgBIgDgDIgHgCIgEgCIgEAFIAAAAIAAAAIgFABIgDAAQgCAAgDAEIgDgBIgDACg");
	this.shape_44.setTransform(98.425,204.175);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgdAlIACgGIAAgBIgBgFIABgCIADAAIAAgCIgCgDIAAgDIgBgEIAAgGQABAAABAAQABAAAAgBQABAAAAgBQAAAAAAAAIAAgCIgCABIgCgBIAAgEIAAgCIAAgCIAAgBIAAgCIAAgCIACgEIgCgBIgBgHIgCgEIACgDIAGgDIAEgDIADACIAAACIABACIAAACIABACIAFgDIAEgBIAEgCIACgBIADgBIABAAIAHgDIADAAIADABIACACIABABIADgCIAAAAIAEACQAAAAAAAAQABABAAAAQAAABAAAAQAAABABAAIgHAFIgCADQgCAAgDgDIgDAAIgDgCIgGgBQAAABAAAAQAAABgBAAQAAAAgBAAQAAABAAAAIgDAAIgEABIgBAAIgIAFQgCACAAAFIAAABIAAADIAAADIgDADIACADIAAABIACABIAAACIAAASIAAABIgDABIgFABIAGACIACAAIABAEQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAAAIgGACIgEACIgCABQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_45.setTransform(90.45,208.45);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgVAlIgEgBIgDgBIgFgCQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIgCgBIgCgDIgBgEIACgEIADgEIAGgHIAGgCIAEgDIACABIABgCIAHgBIAEgCIAGgBIACgBIACAAIACAAIAEAAIAIgCIAEgBQAAAAABAAQAAAAAAgBQAAAAAAgBQABAAAAgBIgBgDIAFgGIgGgCIgDAAIgFgHIgHgBIgEAAIgCAAIgCAAIgBgDIgEADIgDABIgIAFIgBABIgCACIgDABIgDgBIgFgBIgCgDIACgCIADgCIAEAAIADgCIAGgCIAFgCIADAAIAFgBIABAAIADgBIAGAAIAFABIADABIAFABIAEACIgCADQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIADgBIACgBQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIADACIAAACIAAAEIACAFIABAAIAAAEIAAAIIgBACQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABABIAAACIgBADIAAACIABAIIgBAEIABADIABACIABADIgCADIgCABIgEABIgDABIgDABIgDgBIACgGIgIADIgDAAIgDABIgDgBIgEACIgCAAIgHACIgEAAIgEABIgIgBgAgRAeIADABIACACIADAAIABAAIADgBIACABIADgBIABAAIAGgBIACgCIACABIADgCIAFgCIACgCIAEgCIAAgEQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBIgCgCIABgCIAAgCIgBgEIAAgBIABgEIgDgBIgEAAIgDAAIgEAAIgBAAIgDgBIgDABIgFAAIgBAAIgDAAIgDABIgFACQgGADgDACIgCADIgDACIAAABIAAABIABAGIABACIgBACIgBACIABADIACgDIAGADg");
	this.shape_46.setTransform(80.85,208.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgGBeIgCAAIgDABIgBABIgLAAIgDAAIgHgBIgDgCIgEgBIAAACQgKgDgDgDIgGgFQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgCAAIgDgBIgFgGIgEgEIABgFQAAAAAAgBQgBgBAAAAQAAAAgBgBQAAAAgBAAIgCABIgDgFIAAgCIgEgMIgCgGIAAgBIAAgCIAAgDIgBgJIAAgEIAAgBIAAgDIADAAIgBgGIgCAAIABgIIABgCIACgJIACgFIAEAAIABgEQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgCAGgKIACgCIAEgFIACgEIADgCIACABIACgBIgBgFIAGgFIAHgGIACgCIADgCIABgBIAIgGIAHgFIADADIACgCIABgCIAGgDIAEgCIAGgCIACgBIAFgBIANgDIACgBIADAAIACAAIAEAAIADgCIABAAIAJAFIADgEIABAAIAGAAIAJAAIAHABIACACIAAAAIACgBIACABIgBACIgCABIgDACIgFADIgFgBIgFgCIgGAAIgFgCIgBAAIgBABIgBAAIgFgBIgDgDIgEAEIgCABIgDgBIgHACIgEgBIgFACIgEABIgBACIgJADIgGAEIgFADIgCACIgDAAIgCAAIgCAEIgDADIgCAAIgBACIgEADIgCAAIAAACIgDADIgDADIgEAGIgEAHIgCAAIgCADIAAAAIgBAAIAAABIABAAIAAACIgCACIgEAKIgBACIAAAFIgCAGIgBAFQgBABgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQABAAABABQAAAAABABQAAAAABAAQAAABAAAAIgBAIIABAEQgBABgBAAQAAAAgBABQAAAAAAABQAAAAAAABIABADIACAAIABAEIABADIgKACIAAAAIAIACIADAAQAAAGACAEIgBAGIABABIACgBIACADIACAFIABADIACACIAFAEIAEAFIACACIACABIACABIADABIAAABIABAAQAEAEAFADIAFACIAEACQACAAAEgFQADACAFAAIACAAIACgBIACAAIABAAIALAAIADAAIAEAAIACAAIAFAAIACgCIAJgBIAHgBIADABIAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQABgBAAAAIADAAIAHgBIAFgBIAIgCIAAgBIABgCIAIgDIgIgFIAIgEIgJgKIABgBIAAgFIgBgIIAAgKIAAgBQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIAGgDIAAAAQgDgCgEAAIgCAAQAAgFgDgCIgCgBIgCABIgCgBIgCAAIgKABIgDgBIgCABQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBABAAIADgCIADAAIAEAAIAFACIABAAIADgCIAGABIABAAIADgBIAEABIAAAAIAGgBIACAEIAAAAIAAAFIAAACIAAAHIAAAIIgBAGIAAAEIgDAAIgBAFIAAADIgCABIAIAGIAAABIgBACIgCABIACADIABABIABACIAAAEIAAABIAAADIABACIAAACIgBABIABACIgDABIgCACIgJAAIgIACIgEAAIgBABIgNACIgBAAIgCgBIgFACIgIABIgFABIgFABIgIABIgEABIgPACIgDgCgABSAwIADgBIAAAAIgDABgABSAwIAAAAgABWAsIACABIgDACIABgDg");
	this.shape_47.setTransform(65.675,205.775);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgiAkIgBgBIABgCIAAgDIAAgIIABgDIgBgCIAAgDIAAgCIAAgCIAAgDIAAgDIABgDIACgBIAAgBIgDAAIAAgDIAAgDIAAgBIgBgJIACgBIgBgDIgBgCIgCgFQABgDADgCQAFgDACAAIADABIAAAFIADAGIAEgFIADgCIAGgEQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAFgEAFAAIACAAIACABIAEgCIAFABIAGABIACACIACAAQADABADAFQACADAAALIgFABIgDABIAHAEQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIgCAFIAAABIACADIAAADIABAFIAAAGIABAEIgBAEIABAEIgDACIgFACIgEADQgCgDAAgCIABgHIABgDIAAgBIABgBIAGgBIgCgBIgHgCIACgFIACgDQABAAAAgBQABgBAAAAQAAgBAAAAQAAgBAAAAIgGgDIABgCIgBgGIABAAIAAgDIgBgDIAAgEIgCgDIgCgDIAAgBIgCgBIgDgFIgCgBIgEACQgEADgDAAIgCgBIgCACIAAABQgDgFgCAAIAAAAIgDABIgGADIgGAEIgBAEIAAAHIAAAAIgBACIgEAEIAAABIABACIAEABIABACIAAACIAAAHIgCADIAAABIACAEIAAAAIAAADIACAJIgDADIgDAAIgBABIgBAAIgCACIgCABIgCgCg");
	this.shape_48.setTransform(46.3,208.525);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AADAmIgDABIgBAAIgEAAIgHgBIgCAAIgCgBIgIgDIgDgDIgEgCIgDgDIgBgDIgEgDIABgDIgCgFIgBgIIABgHIACgEIADgEIADgEIAHgHIAHgFIAIgFIACAAIAIgDIADAAIAHgDQAFABACAFIADgCIACACIACABIAJAJIADAEIACAFIABADIgBAAIgDgBIgDACIgEgBIgDABIgGgEIgEAEIgHgBIgEAAIAAgBIgIABIgDAAIgFAAIgEABIgFAAIgHADIgBAEIgDACIAEAEIACAIIABABIAAADIADABIACAFIAFACIACAEIADABIACACIACAAIAGACIABABIAFgBIAHgBIAEgBIAFgBIAGgEIAFgDIADgEQABgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIADACIgCAEIgFAJIgCAAIgDABQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAIgIACIgFABIgDABgAgDgcIgFACIgHADIgEADIgCACIAAAAIAAAAIAHAEIACACIAEgFIABgBIAFACIAAAAIAFgBIADgBIACADIACgBIAFgCIAGABIAAgBIABgBIgCgCIgBgBIgCgDIgEgCIgCgCIgJAAIgCgBg");
	this.shape_49.setTransform(36.025,208.35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AhCBbIgDAAIgEgBIgCABIgDAAIgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAAgDIAEgGIADgDIAFgCQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIgBgCIACgDIACgEIAEAAIACgBIAAgBIgBgDIACgEQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAIABgDIACgDIAFgHIACAAQACgDABgCIAAgCIAIgKIABgCIADgEIAEgCQAAAAABgBQAAAAAAAAQAAgBAAAAQABAAAAgBIgBgDIAHgIIADgDIABgDIAGgHIACAAIACgDIgBgCIAAgCQAAgCAFAAIgBgGIAHgIIADgDIABgDQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAIACAAIABgCIABgBIgBgFIACgBIABgCIACgBIAEAAQABAAACgFQgBAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIACgFIADgEIACgBIAAgBQgBgEgBgBIgEAFIgWAAQgEAAgCgBIgDgCIgCADIgGAAIgCAAIgCAAIgGAAIgBAAIgBAAIgCAAIgEAAIgHAAIgBAAIgEAAIgCAAIAAAAIgEAAIgHgDIgCADIgJgBIgCAAIgFgBIgDgBIAAgBIADgCIAFgDIAFgDIAFABIAKABIAFABIAIAAIACACIADAAIAEgBIAHAAIAAADIACAAIAGgBIADAAIABgCIAJAAQACAEACgBQACABAEgDIACABIABgCIADAAIAEgBIAIAAIACAAIAFACIABgCIACABIADgBIACAAIAFgBIAFAAIAAACIACAAIAAACIgCACIgCADIgFAGIgFAGIgCABIgBgBQAAABgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQAAABAAAAIABADIgDADIABABIgNASIgCgCIgDAFIABACIgDADIgCgBIABADQAAACgCACIgFAFIgEAIIgCACIgDAEIgBADIgDAAIgDADIAAABIACACQAAACgEAEIgBABIgBACQgBACgFAFIgBAAIgCABIAAAFIgIALIgEABIACAEQgBAAgBABQAAAAgBAAQAAABAAAAQgBABAAABIgKANIgDgCIgBAAIABACIAAADIgBABIABACIgCADIgFAHIgBADQABABAAABQAAAAABABQAAAAAAAAQABABAAAAIAFAAIAEACIAFgEIAGABQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABAAIABAAIAGgBIADgBIABAAIACAAIAFACIAEAAQABAAAAAAQAAAAABAAQAAgBAAAAQABgBAAgBIABAAIADABIAFAAIADAAIACAAIAFABIAFgBIAAAAIAGAAIAEAAIAFgBIAFADIADgEIADAEIABAAQADAAACgCIACgCIABABIAEAAIANgEIAEgBIADgBIADAAIAAAEIgGAGIgDABIgCACIgCABIgEgBIgCABIgCgBIgGgBIgDABIgDgBIgDABIgEgBIgEAAIgDgBIgCABIgBACIgEgBIgJAAIgEAAIgJAAIgCgCIgEACIgCAAIgCAAIAAgBIgBAAIgFABIgPABIgCgBIgBACQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAgBIgCgCIgEAGIgJgBIgFAAIgFABIgFAAg");
	this.shape_50.setTransform(22.65,206.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("ABEBcIACgGIAAgDIgBgDQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAIAAgDQgDgCAAgCIAAgCIACgIIgCgGIAAgIIAAAAIgBgHIAAgDIACgBIgBgDIgCgBIgBgGIgBgGIAAgDIAAgBIACgDIgBgEIgBgCIAAgBIgBgJIgBgFIABgIIAAgDIAHgCIgHgDIABgCQAAgEgEAAIAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAIAEgBIgHgEIAAgFIgCgDIgBAAIgBADIgCAEIAAADIgCACIAAABIgCAFIgCADIgBAEIgBADIgCADIgBAEIgBABIAAAEIgEAIIgCAGIgCACIgBADIgCACIgCAIIgCABIAAACQAAAFgEADIAAACIAAABIgCAEIgDAEIgCAHIgCADIgBAEIgBACIgCACIgCAGIgFANIgCAAIgBAAIgCAAIgBgBIgEgIIgDgEIgCgFIgBgEIgCAAIgDgHIgEgJQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAIABgEIgCgDIgDABIgCgFIgCgEIgBgBIgBgDIgDgHIgCgBIgDgIIgFgIIABAAIABgBIgBgDIgCgDIgBgFIgBAAIgCAAQgGgJAAgDIABgBIgDgDIgBgDIAAgDIgCgEIgCgEIgBAAQgDgHgCAAIgCABIABAFIABADIAAAFIAAAFIAAADIAAACIABAHIgBADIgBAAIAAADIgBACIAAACQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIAAADIAAACIAAAHIgBAEIABADIgCADIABAFIgCAAIAAADIACAFIAAAAIgBACIAAAEIAAACIAAAEIgBAFIAAAHIABAFIgCACQgEADAAACIACACIACgCIAAAAIABAAIAAACIABAEIAAAAQAAABgEACQgEABAAACQAAAAAAABQAAAAABAAQAAAAAAABQABAAABAAIAFACIAAACIAAACIgDACIABADIgBAAIgGACIgDACIgGACIgBAAIAAgBIAAAAIAAgBIACgCIAEgDIACgDIACgDIACgBIgIgGIAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAgGIABgCIAAgCIAAgCIAAgCIgBgEIACgHIgBgGQABAAABgBQAAAAAAgBQABAAAAgBQAAAAAAAAIgCgCIAAgHIAAgEIABgGIAAgDIACgBIABgBIgBgBIgCgEIACgCIABgCIgCgCIAGgFIgBAAIgGgCIADgHQgBgDgDAAIACgGIgBgCIAAgCIAAgHQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQgCgEAAgCIABgDIgBgDIAAgCIAAgFIABgDIgCAAIABgHIABgEIgCgFIgDgBIABgDIAHgGIAHgEIACAAIAFAHIABADIACABIAAADIACAFQgGACAAABQAAAAAAABQAAAAABABQAAAAABAAQAAABABAAIAEgCIABAAQAAAFABADIACADIAAAAIgBADQAAAAAAABQABAAAAABQABAAAAABQABAAABAAIABAEIAAABIAAACQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBABIABAEIABABIADgDIACAAIAAABIABABIAAABIgBABIABACIAFAJIABAEIAAABIAAADIgCAAIAAAAIABACIABAAIACAAIABAEIACABIACAFIAFAJIABADIADAHIAAABIAAADIABACIACACIACAAIACAHIACAAIAEAJIAFAKIABADIACAEIABAAIAEgGIADgFIABgDIABgCIABgDIAEgGIACgCIACgCIAAAAIgBgEIABgCIACgDIACAAIABgCIAAgCIAAgCIAAgDIAFgMIACgFIADgDIgBgDIAEgKIACgHIAEgGQAAAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAIgBgEIAAgBIAAgEIAAgCIAKgPIABgEIADgEIAFgEIABAAIAAgBQgBgBgIAAIgCAAIgDgFIABgDIACgBIADgDIADgBIAFgDIAGAAIABAHIAAACIAAABIABADIgBAFIAAADIAAAEIAAADIAAABIABACIgDAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABABIgBACIAAABIABAAIABAAIAAAEIAAADIABAIIAAAAIgDAEIAAAEIABACIACAAIACAAIgBAGIAAAFIABARIAAACIAAAFIAAABIgDAAIAAABIgBAEIAEACIABADIABAIIABAFIABABIgCAEIAAADIADADIAAADIAAACIAAACIABADIgDABIgBADIACACQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIABADIABADIABAGIABAKIgEAFQgGAEgFAAIgCAAIgCABIgCgBg");
	this.shape_51.setTransform(97.525,172.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgxBfIACgGIAAgDIABgFIACgDIgBgFIAAgBIABgEIAAgFIABgCQgBgEgBgBIABgDIAAgMIAAgDIgBgDIADgCIgBgDIAAgDIgBgBIAAgDIAAgIIACgEIgCgEIAAAAIABgDIAAgEIAAgEQAAgEgCgCIAAgCIABgDIgBgDIAAgDIgBgFIABgDIAAgCIAAgDIAAgDIgBgHIAAgDIgBgBIAAAAIgBgGIACgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIADgDIgEgGIgBgEIABgDIgCgEIAAgBIABgCIgDgCIgCABIgBgDQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIAHgDIADgCIACAAIAFgCQAAAAABAAQAAAAABABQAAAAAAAAQABABAAABIAGgDIAIAAIAKACIAGABIAFABIAFAAQABAEACAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBIABAAIAFABIAGABIAEABIADABIAGACIAGACIACAAIADABIADABIABACIADADIABABIABACIgBAFIgBADIgBAEIgCABIAAgBIAAAAIgDACIgBAAQgBAAgBAAQAAABgBAAQAAAAAAABQAAAAAAABIABACIgCACIgDADIgEABIgDADIgFABIgFADIgFABIgEACIgEAAIgBAAIgBAAIgCABIgGABIgBABIgEAAIgDABIgKABIgEACIgDABIgIABIACADIgBAEIgBANIAAAAIgBAAIAAAAIAAADIABAMIABAFIAAANIAAADIAAAHIAAAIIgBABIgBAAIAAAEIACAAIABABIgBADIAAACIAAAEIAAAAIAAABIgCABIAAACIABADQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABIgBAJIAAACIACAHIAAACIgBACIgFACIgBADIgEACIgIACIgCgDgAgbgnIADAAIAAACIABAAIADAAIABgBIAMgCIAIgBIACAAIADgCIADAAIACgBIADAAIADgBIAHgCQAFAAAGgHIACgDIACgGIABgDQAAgDgDgDIgGgEIgHgDIgDAAIABgDIgEAAIgDABIgEgBIgGAAIgDgCIgCAAIgBABIgBAAIgGgBIgFgBQAAgFgCgCIAAgBQgCAAgCAHIgKgBIgCABIgBADIgBAIIAAABIAAACIgBADIAAABIAAAAIAAABIABAAIAAADIAAAKIgBAFIACABIAAADIAAACIAAABIAAADIABAAIADAAg");
	this.shape_52.setTransform(80.95,172.15);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgFA0IgJgCIAAAAIgBAAIgDgBIgBAAIAAgBIgCABIgEgCIAAgBIgCAAIgDgCIgDgDIgBgBIgCgDIAAgCIgCgBIgCACIgDgGIgDgHIgCgDIAAgCIgBgCIgBgDIAAgDIAAgDIAAgDIAAgBIABAAIACgBIgBgCIABgCIgCABIAAgEQAAgEABgBIAEgDIAAgBIgBgBIAFgKQAEgGACgBIACAAIACgCIAAgBIABgCIAIgFIAGgDIAAAAIAAgBIACABIADgCIAHgEIABAAIAAAAIADAAIAGAAIAEgBIAFADIADAAIABAAQAAABAAABQAAABAAABQAAAAABAAQAAABABAAIABgEIAIADIAAACIADABIAGAFIADAGIAAAEQADAAADAIIAAAEIgBAAIABADIABAAIABAGIAAACIgBAFIAAABIgCAHQgBAAgBAAQgBAAAAABQAAAAgBAAQAAABAAAAIABADIACADIgDAEIgDAIIgEAEIgDAEIgLAGIgBADIgDAAIgEACIgEADIgCgBIgEACIgBAAIgEgBIgCACIgDgBgAgFApIAFABIAEABIAGgCIAJgCIAEgEIACgBIAEgEIADgEIABgBIABgFIADgBIAAgCIABgFIAAAAIgBgDIACgCIgCgDIAAgEIAAgFIAAgCIAAgGIgDgGIABgEQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBgBAAIgCACQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAIAAgDIgBgCIgEABQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgBIAAgBQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIgDgBIgCgBIgCgCIgCgBIgFAAIgFAAIgCgBIgJABIgCACIgCAAIgCACQgGACgCABIgDADIgDADIgDAFIgEAEIAAACIgDAFIgBAGIgBAGIAAALIAFAIIAJAJIAAACIABACIACACIACgCIAEADIAGADIgMACIAMABIAEgBIAAAAIgBAAIAAgBIAFACg");
	this.shape_53.setTransform(63.9,173.55);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgFA0IgJgCIAAAAIgBAAIgDgBIgBAAIAAgBIgCABIgFgCIAAgBIgBAAIgCgCIgEgDIgCgBIgBgDIAAgCIgCgBIgBACIgFgGIgCgHIgCgDIAAgCIgBgCIgBgDIAAgDIAAgDIAAgDIAAgBIABAAIADgBIgBgCIAAgCIgCABIAAgEQAAgEACgBIADgDIAAgBIgBgBIAGgKQAEgGABgBIACAAIACgCIAAgBIABgCIAIgFIAFgDIAAAAIABgBIADABIACgCIAIgEIAAAAIABAAIABAAIAHAAIAEgBIAFADIADAAIAAAAQAAABABABQAAABAAABQAAAAABAAQAAABABAAIABgEIAJADIgBACIADABIAGAFIADAGIAAAEQADAAADAIIABAEIgCAAIABADIACAAIAAAGIAAACIgBAFIABABIgDAHQgBAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAIABADIABADIgCAEIgDAIIgEAEIgDAEIgKAGIgCADIgDAAIgEACIgFADIgBgBIgEACIAAAAIgFgBIgCACIgDgBgAgFApIAFABIAEABIAFgCIAKgCIAFgEIABgBIADgEIAFgEIAAgBIABgFIACgBIAAgCIABgFIAAAAIgBgDIADgCIgCgDIAAgEIAAgFIAAgCIgBgGIgCgGIABgEQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBgBAAIgCACQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAIABgDIgBgCIgEABQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgBIAAgBQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIgCgBIgCgBIgCgCIgCgBIgFAAIgGAAIgBgBIgJABIgBACIgDAAIgCACQgHACgBABIgDADIgDADIgDAFIgEAEIAAACIgDAFIgBAGIgCAGIABALIAFAIIAJAJIAAACIABACIABACIADgCIAEADIAHADIgNACIAMABIAEgBIAAAAIgBAAIAAgBIAFACg");
	this.shape_54.setTransform(52.45,173.55);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAAAcIgEgEIgCgDIgEgBIAAgBIACgCIAFgEIADgCIAFADIAEADIACADIgCAEQAAACgHAEIgCgCgAAAgMIgEgEIgCgDIgEAAIAAgBIAAAAIAGgGIAEgDIAIAFIADADIAAABIgBADIgBACIgBABIgCABIgEADIgCgCg");
	this.shape_55.setTransform(44.575,175.825);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgaBEIgFAAIAAgCQAAgDAHgBIACgBIACgBIAHgCIACgBIAEgBIACgCIAFgEIABAAIABgCIADgBIAAgCIAHgHIABAAIAAAAIAAgDIAAgCIACgDIAFgHIACgFIAAgDIABgCIAAgCIAAgBIAAgBIAAgBIAAgCIAAgEIgBgCIAAgCIgCgDIAKgCIgFgCIgCgCIgDgBIgBAAIAAgCQgBgGgBgBIgCAJIgHgEIgBgEIgBAAIgBACIgBAAIgBABIgDgBIgCAAIgCAAIgCAAIgFgBIgCACIgFADIgCABIgCABIgFABIgCAAIABgDQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABAAIADgBIABgFIAFgBIADgDIABgDIACgCIABgFIAAgDIAEgEIABgDIADgFIAAgDIgDgBIgFAAIgCgBIgIgBIgJgBIgDADIgDABQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAgCAEgCIACgBIAGgEIACgCIACABIADABIADgBIAGAAIAEABIAGAAIADABIAEgBIAIgDIABACIgCAFIAAADIgCADIgHAMIgGAJIgCADIAFABIABAAIACAAIAEABIAFAAIAEADIACAAIAEACIAGACIAEAHIADADIgDADIACADQABABAAAGIgCAGQAAADgBAEIgBACIgDACIgCAFIgDAFIgCAEIgDAEIgBADIgFADIgEAGIAAABIgBAAQgDADgDABIgBACIgCACIgBABQgHAFgFABQgBADgDABIgCABIgFACIgDgCg");
	this.shape_56.setTransform(36.45,174.35);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgSBIQgJAAgGgGIgDAAIgCgDIgEgCIgBgCIgBgDIABgGQAAgBABgBQAAAAAAAAQABgBAAAAQABAAAAAAIABAAIADAGIADAEIAEAGIAEABIAHACIACAAIACAAIADABIADgBIACABIAHgDIADgCIAHgEIADgEIAFgDQACgCACgFIADgHIADgDIgBgFIACgJIAAgCIAAgEIABgGIABgEIgBgEIgBgKIAAgDIABgDIABgCIgBgBIAAgBIgFADIgDADIgCABIgDADIgDABIgEAEIgCABIgIAFIgFABIgHABIgJgCQgEgBgDgEIgCgEIgBgDQAAAAABAAQAAgBAAAAQAAgBABAAQAAAAABgBQgDgCAAgEQAAgCAFgGIgBgDIAAAAIAAgDIACgMIAAgEIACgIIgBgCIgBAAIgBgBIAAgBIACgDIAGgCIAJgFIACABIABADIgCAEIgCAHIgDAKIgBAGIgDABIgBADQAAAAAAAAQAAABAAAAQABAAAAAAQABABABAAIAAAFIgBAGIgBAGIgBADIACADIABAEIAGACQAAABABABQAAAAABABQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBIAGgCIALgHIAGgGIAFgDIAEgIIABgCIAAgDIAAgCIAAgBIAAgDIAAgCIgBgEIAAgGIAAgDIAAgDIgDgFQAAgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAIADgDIABAAIAEAAIADgBIABADIgIAEIAGACQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAIgCAEIgEADIAAABQgBABAGACIACADIAAACIABAGIgCAEQAAADADADIAAAFIAAAFIAAABIgBAFIgCADIAAACIACABIAAAGIAAAAIAAAEIgBADIAAACIgBADIABAEIgBADIgBAEIgCADIAAABIABADIgCADIgBAFIgEADIgDADIgBADIgBABIgHAJIgEADIgCACIgDACIgBABIgDABIgDABIgDABIgFADIgDAAIgGACIgGgBg");
	this.shape_57.setTransform(109.55,145.075);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgiAkIgBgBIAAgCIABgDIAAgIIABgDIgBgCIAAgDIAAgCIAAgCIAAgDIAAgDIABgDIADgBIgBgBIgDAAIAAgDIAAgDIAAgBIgBgJIADgBIgDgDIAAgCIgDgFQABgDAFgCQAEgDACAAIADABIABAFIACAGIAEgFIAEgCIAEgEQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAFgEAFAAIABAAIACABIAFgCIAFABIAGABIABACIADAAQACABAEAFQACADAAALIgFABIgDABIAHAEQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIgCAFIAAABIACADIAAADIABAFIAAAGIABAEIgBAEIACAEIgFACIgDACIgFADQgDgDABgCIABgHIAAgDIAAgBIACgBIAGgBIgCgBIgHgCIABgFIADgDQABAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAIgHgDIAAgCIAAgGIAAAAIABgDIgBgDIAAgEIgCgDIgBgDIgBgBIgDgBIgCgFIgCgBIgEACQgEADgCAAIgEgBIgBACIAAABQgCgFgDAAIgBAAIgDABIgFADIgFAEIgCAEIAAAHIAAAAIAAACIgFAEIgBABIACACIAFABIAAACIAAACIAAAHIgBADIgBABIACAEIAAAAIAAADIACAJIgCADIgEAAIgBABIgCAAIgBACIgCABIgCgCg");
	this.shape_58.setTransform(100.15,141.525);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgVAlIgCgCIgFAAIgHgEIgDgCIgBgDIgBgBIgCgCIgBgBQgCgDAAgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIgDgCIAAgKIADgHIAFgIIAEgDIACgDIACgCIAHgEIAEgEIAMgEQAGgDAKAAIAHABIAAACIACABIADgCIAJAEIADACIACAEQACADAFAAIADAFIABAHIABAHIgCAAIAAABIgCACQAAABABAAQAAAAAAAAQAAAAABAAQAAABABAAIgBAGIgBAEIgFAKQgFAHgEABIgGADIgFACIgEACIgKABIgGABIgHAAIgDABIgKgCgAgOAeIAHACIAFAAIACAAIAEABIAFgBIAFgBIAHgEIAEgCIAEgGIADgFIACgDIAAgBIgBgEIAAgCIABgGIgBgGIgCgFIAAgEIAAAAIgDAAIgEgGIgCgDIgDgBIgEgCQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAAAIgEABIgDgBIgGAAIgEACIgDgBIgCACIgEACIAAABIgNAKIgBABIAAADIgCADIgCAFIAAABQAAADgEAAIABACIADADQAAAAAAAAQAAABgBAAQAAAAgBABQgBAAgBABIAAABIABAAIADgBIABAGIAFAIIAAABIgBACQAAABAAAAQABAAAAAAQAAABABAAQAAAAAAAAIADgBIAIAEg");
	this.shape_59.setTransform(89.35,141.575);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AguAmIAAgBIAAgEIAAgFIAAgFIgBgCIACgDIABAAQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAIAAgDIADgFIAAgDIgCAAIgBgEIABgHIABAAIAAgBIAAgDQAAgDgBgCIgBgGIgBgGIgDgBIACgDIAIgFIACgBIABABIACABIAAADIABADIgBAEIABABIADgCIADgCIACgBIACgCIAHgDIAGgCIABAAQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABIADAAIAAgDIAEgBIACgBQACAAADADIACAHIABABIADgDIAEgCIAIgEIADAAIADgBIAFAAIADAAIAEABIADABIAEADIABACQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAABIABABIACAAIAAAGIABADIAAAKIAAACIgCAEIAAABIABAEIAAACIAAADIABAHIgCACIAAACIABAAIABAAIAAAEIgBACIACAFIgGADIgGAEIgDAAIAAgEIABgGIAAgCIAAgEIAAgBIAAgHIABgEIABgEIgCgEIAEgCIACAAIgGgEIACgHIgCgCIgCgKIgFgHQgBgBgEAAIgEABIgEABIgCABIgCACIgDADIgDAEIAAAHQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAIACACIABAGIAAAHIAAADIgDgBIAAABIACAEIAAABIAAACIAAADQACAGAAAGQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAIgEACIgFADIAAgBIgBgCIAAgEIAAgJIABgGIACgBIgBgDIgBgDIgBgDIAAgBIAAgFQABAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBgBgBAAIAAgKIgCgHQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgDABIAAgBIgCgCIgCACIgFABIgFACIgEAAIgEAHIAAADIAAAEIgBADIABAEIgBAEIgCACIACAEIABAFIgBADIAAABIABAHIABAIIgIAFIgDAAIgCAAg");
	this.shape_60.setTransform(77.225,141.525);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AADAlIgDABIgBAAIgEAAIgHAAIgCAAIgCgCIgIgCIgDgDIgEgCIgDgCIgBgEIgEgEIABgCIgCgGIgBgIIABgFIACgFIADgEIADgFIAHgHIAHgEIAIgFIACgBIAIgCIADAAIAHgCQAFgBACAGIADgCIACACIACABIAJAIIADAFIACAEIABAEIgBABIgDgBIgDABIgEAAIgDAAIgGgEIgEAEIgHgBIgEAAIAAAAIgIAAIgDABIgFAAIgEAAIgFAAIgHACIgBAFIgDACIAEADIACAIIABABIAAAFIADAAIACAGIAFABIACAEIADAAIACADIACAAIAGADIABAAIAFgBIAHgBIAEgCIAFAAIAGgDIAFgEIADgFQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIADABIgCAFIgFAKIgCgBIgDACQgBAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAIgIACIgFAAIgDABgAgDgbIgFABIgHADIgEADIgCACIAAABIAAAAIAHACIACADIAEgFIABAAIAFABIAAAAIAFgBIADAAIACABIACAAIAFgBIAGAAIAAgBIABgBIgCgCIgBgBIgCgDIgEgCIgCgCIgJAAIgCAAg");
	this.shape_61.setTransform(65.725,141.35);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgcAkIABgFIAAgCIAAgEIAAgBIACgBIAAgCIgBgDIAAgCIgBgFIAAgFQABgBABAAQABAAAAgBQABAAAAgBQAAAAAAgBIAAgBIgCAAIgCgBIAAgDIAAgCIAAgDIAAgBIAAgBIAAgBIABgFIgBgCIAAgGIgCgEIACgDIAEgDIAFgDIADABIAAACIABAEIgBABIACACIAFgCIAEgBIAEgEIACgBIADgBIACABIAHgCIADAAIABAAIACACIACAAIADgBIABAAIACABQABABAAAAQAAAAABABQAAAAAAABQAAABAAABIgFAEIgEADQgBAAgDgEIgCABIgFgCIgEAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgCABIgEABIgCgBIgGAGQgEACAAAGIAAAAIAAADIAAADIgBAEIABACIAAABIABAAIAAAEIABARIgBABIgCABIgGACIAHABIABgBIABAFQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgEABIgFADIgCAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_62.setTransform(58.1,141.45);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AADAlIgDABIgBAAIgEAAIgHAAIgCAAIgCgCIgIgCIgDgDIgEgCIgDgCIgBgEIgEgEIABgCIgCgGIgBgIIABgFIACgFIADgEIADgFIAHgHIAHgEIAIgFIACgBIAIgCIADAAIAHgCQAFgBACAGIADgCIACACIACABIAJAIIADAFIACAEIABAEIgBABIgDgBIgDABIgEAAIgDAAIgGgEIgEAEIgHgBIgEAAIAAAAIgIAAIgDABIgFAAIgEAAIgFAAIgHACIgBAFIgDACIAEADIACAIIABABIAAAFIADAAIACAGIAFABIACAEIADAAIACADIACAAIAGADIABAAIAFgBIAHgBIAEgCIAFAAIAGgDIAFgEIADgFQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAABAAIADABIgCAFIgFAKIgCgBIgDACQgBAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAIgIACIgFAAIgDABgAgDgbIgFABIgHADIgEADIgCACIAAABIAAAAIAHACIACADIAEgFIABAAIAFABIAAAAIAFgBIADAAIACABIACAAIAFgBIAGAAIAAgBIABgBIgCgCIgBgBIgCgDIgEgCIgCgCIgJAAIgCAAg");
	this.shape_63.setTransform(48.675,141.35);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgJBgIgCgBIgDACIgEAAQgBgBAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAIgBAAIgEAAIgBABQgEAAgFgDIgKgFIgKgGIgBgCIACAAIAAgBQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIgDACIgDgDIgHgEIgCgDIgBgBIgEgFQgHgLgDgNIACgBIAAgCIgCgBIgBgEIgBgCIAAgCIAAgEIgBgEIABgCIgBgEIABgEIABgEQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgEIADgKIAEAAIgBgEIAAgBIACgIQAAgEACgDIAEgGIACABIABAAIACgBIABgBIABgBIgCAAIgBgEIADgEIACgCIABgCIACgEIABgBIADgDIAEgDIABABIACgCIAAgCIANgKIADgCIACgCIADAAIAEgDIADABIABgEIAFABIAAgCIAEgBIAHgCIADgBIAEAAIABgCIACAAIAFgBIADgBIAEABIABAAIAMgBQAFABACADIADACQACAAACgEQADACACAAIABAAIADAAIADABQANADAEACIAAADIgCACQgEADgCAAIgCgBIgOgFIgBgDIgCABIgCAAIgHgCIgBgBIgBgCIgFACIgFAAIgIAAIgDgBIgGACIgGABIgFABIgEABIgFADIgDACQgLAFgEAFIgFACIgBADIgFAEIgCACIgEAEIgCABIgBAAIAAABIgEAIIgFAFIgCAFIgBAFIgBADIgEAHIgCAGIgBAGQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIgBADIABAFIAAABIgBABIgHADIgBABIAAABIACADIABACIAEAEIACAEIABAEIgBAAIABADIABABIABADIAAAAIABACIABAEIACAEIADAIQAAAAgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAIABACIACABIACABIAEAEIADADIACADIAGADQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAAAIAFADIAEACIADACIAEACIACABIADABIACACQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAIALADIAMAAIABAAIADACIABgCIABAAIACAAIABAAIAHgBIAJgCIAFABIAEgCIAFgCIAGgCIACABIAIgCIAJgDIABgCIAEgCQADgCADAAIACABQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAIADgCIAEgCIABABQAAAFgBADIgBAEIgCABIgIACIgFACIgFABIgEABIgFABIgEABIgHACIgDAAIgEgBIAAABQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAgBAAIAAAAIgCAAIgBAAIgMADIgJABIgHAAIgBAAQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAIgHABIgHgCg");
	this.shape_64.setTransform(33.8,138.825);

	this.instance = new lib.Symbol27();
	this.instance.setTransform(189.45,74.8,1,1,0,0,0,162.2,74.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,122.3,369.9,102.50000000000001);


(lib.Symbol42 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_10 = function() {
		this.stop()
		this.parent.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// Layer_1
	this.seal_button = new lib.Symbol40();
	this.seal_button.name = "seal_button";
	this.seal_button.setTransform(65.45,60,0.8339,0.8339,0,0,0,78.3,71.9);

	this.timeline.addTween(cjs.Tween.get(this.seal_button).wait(1).to({regX:78.9,regY:74.5,x:65.9,y:62.15,alpha:0.8889},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.7,124.3);


(lib.Symbol38 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol39();
	this.instance.setTransform(279.6,107.7,1,1,0,0,0,279.6,107.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(0,0,559.2,215.4), null);


(lib.Symbol37 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol34();
	this.instance.setTransform(279.6,159.5,1,1,0,0,0,279.6,159.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:2.1477,x:279.55,y:159.55},0).wait(1).to({rotation:4.2954},0).wait(1).to({rotation:6.4431,x:279.6,y:159.5},0).wait(1).to({rotation:2.4657,y:159.55},0).wait(1).to({rotation:-1.5118,y:159.45},0).wait(1).to({rotation:-5.4893},0).wait(1).to({rotation:-3.6595,x:279.65},0).wait(1).to({rotation:-1.8298,x:279.6},0).wait(1).to({rotation:0,y:159.5},0).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.3,-29.6,589.9,378.3);


(lib.Symbol35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		//this.seal.gotoAndPlay(1)
	}
	this.frame_55 = function() {
		this.stop();
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.EN_Button.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			this.gotoAndPlay(56)
		}
		
		
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.HK_Button.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			this.gotoAndPlay(96)
		}
	}
	this.frame_95 = function() {
		this.stop();
		
		this.parent.gotoAndStop(1)
		this.parent.fing.gotoAndPlay(1)
	}
	this.frame_136 = function() {
		this.stop();
		
		this.parent.gotoAndStop(2)
		this.parent.fing.gotoAndPlay(1)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(54).call(this.frame_55).wait(40).call(this.frame_95).wait(41).call(this.frame_136).wait(1));

	// Invisible_Button
	this.HK_Button = new lib.Symbol52();
	this.HK_Button.name = "HK_Button";
	this.HK_Button.setTransform(284.9,-102.85,1,1,0,0,0,254.1,83.9);
	new cjs.ButtonHelper(this.HK_Button, 0, 1, 2, false, new lib.Symbol52(), 3);

	this.EN_Button = new lib.Symbol50();
	this.EN_Button.name = "EN_Button";
	this.EN_Button.setTransform(283.55,71,1,2.0386,0,0,0,248.7,44.1);
	new cjs.ButtonHelper(this.EN_Button, 0, 1, 2, false, new lib.Symbol50(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.EN_Button},{t:this.HK_Button}]},55).to({state:[]},1).to({state:[]},40).wait(41));

	// letter_front
	this.instance = new lib.Symbol45();
	this.instance.setTransform(279.6,194.8,1,1,0,0,0,279.6,124.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(96).to({_off:false},0).to({_off:true},5).wait(36));

	// card_EN
	this.EN_Card = new lib.Symbol44();
	this.EN_Card.name = "EN_Card";
	this.EN_Card.setTransform(277.6,137.4,0.4083,0.4083,-90,0,0,322.8,581.8);
	this.EN_Card._off = true;

	this.timeline.addTween(cjs.Tween.get(this.EN_Card).wait(96).to({_off:false},0).wait(1).to({regX:327,regY:581.3,x:277.35,y:135.7,alpha:0.6667},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(37));

	// Carn_HK
	this.instance_1 = new lib.Symbol49();
	this.instance_1.setTransform(278.95,52.1,0.4098,0.4098,-83.5651,0,0,1172.4,690.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(96).to({_off:false},0).wait(1).to({regX:1181,regY:699.6,rotation:-83.5646,x:283.05,y:22.9},0).wait(1).to({y:-2.5},0).wait(1).to({y:-27.25},0).wait(1).to({y:-51.3},0).wait(1).to({rotation:-64.4144,x:283.85,y:-55.15},0).wait(1).to({rotation:-40.3896,x:284.1,y:-53},0).wait(1).to({rotation:-17.0611,x:283.45,y:-50.95},0).wait(1).to({scaleX:0.4183,scaleY:0.4183,rotation:0,x:282.55,y:-45.85},0).wait(1).to({scaleX:0.4517,scaleY:0.4517,x:282.6,y:-30.15},0).wait(1).to({scaleX:0.4841,scaleY:0.4841,x:282.7,y:-15},0).wait(1).to({scaleX:0.5154,scaleY:0.5154,x:282.8,y:-0.3},0).wait(1).to({scaleX:0.5456,scaleY:0.5456,x:282.9,y:13.85},0).wait(1).to({scaleX:0.5748,scaleY:0.5748,x:283,y:27.55},0).wait(1).to({scaleX:0.6029,scaleY:0.6029,x:283.05,y:40.7},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:283.15,y:53.4},0).wait(1).to({scaleX:0.656,scaleY:0.656,x:283.2,y:65.55},0).wait(1).to({scaleX:0.6809,scaleY:0.6809,x:283.3,y:77.25},0).wait(1).to({scaleX:0.7048,scaleY:0.7048,x:283.35,y:88.4},0).wait(1).to({scaleX:0.7276,scaleY:0.7276,x:283.4,y:99.1},0).wait(1).to({scaleX:0.7493,scaleY:0.7493,x:283.45,y:109.35},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:283.5,y:119},0).wait(1).to({scaleX:0.7897,scaleY:0.7897,x:283.55,y:128.2},0).wait(1).to({scaleX:0.8082,scaleY:0.8082,x:283.6,y:136.9},0).wait(1).to({scaleX:0.8257,scaleY:0.8257,x:283.65,y:145.05},0).wait(1).to({scaleX:0.8422,scaleY:0.8422,x:283.7,y:152.8},0).wait(1).to({scaleX:0.8576,scaleY:0.8576,x:283.75,y:160},0).wait(1).to({scaleX:0.8719,scaleY:0.8719,x:283.8,y:166.7},0).wait(1).to({scaleX:0.8851,scaleY:0.8851,x:283.85,y:172.95},0).wait(1).to({scaleX:0.8973,scaleY:0.8973,y:178.65},0).wait(1).to({scaleX:0.9085,scaleY:0.9085,x:283.9,y:183.85},0).wait(1).to({scaleX:0.9186,scaleY:0.9186,y:188.55},0).wait(1).to({scaleX:0.9276,scaleY:0.9276,x:283.95,y:192.85},0).wait(1).to({scaleX:0.9355,scaleY:0.9355,y:196.55},0).wait(1).to({scaleX:0.9424,scaleY:0.9424,x:284,y:199.75},0).wait(1).to({scaleX:0.9483,scaleY:0.9483,y:202.5},0).wait(1).to({scaleX:0.953,scaleY:0.953,x:284.05,y:204.75},0).wait(1).to({scaleX:0.9568,scaleY:0.9568,y:206.5},0).wait(1).to({scaleX:0.9594,scaleY:0.9594,y:207.75},0).wait(1).to({scaleX:0.961,scaleY:0.961,y:208.45},0).wait(1).to({scaleX:0.9615,scaleY:0.9615,y:208.75},0).wait(1));

	// letter_top_flipped
	this.instance_2 = new lib.Symbol38();
	this.instance_2.setTransform(279.6,1,1,1,0,0,0,279.6,208.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(96).to({_off:false},0).wait(1).to({regY:107.7,y:-99.6},0).wait(40));

	// letter_inside
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1E2DA").s().p("AtCOEI5/sgIABvnMBOCAAAIAAA3IAACGIAAMqI6CMgg");
	this.shape.setTransform(279.725,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBA8DA").s().p("EAnEgE2IAAiGIAAg3IDfAAQBJACAABJIAAJwQhGC+jiBugEgrrADIIAApwQAAhJBHgCIDlAAIgBPnQjlhuhGi+g");
	this.shape_1.setTransform(279.575,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},96).wait(41));

	// seal
	this.instance_3 = new lib.Symbol37();
	this.instance_3.setTransform(279.6,159.5,1,1,0,0,0,279.6,159.5);

	this.seal = new lib.Symbol42();
	this.seal.name = "seal";
	this.seal.setTransform(273.2,185.7,1,1,0,0,0,65.8,62.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.seal}]},1).to({state:[]},1).to({state:[]},94).wait(41));

	// letter_top
	this.instance_4 = new lib.Symbol36();
	this.instance_4.setTransform(279.6,0.45,1,1,0,0,0,279.6,0);
	this.instance_4._off = true;
	var instance_4Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_4.filters = [instance_4Filter_1];
	this.instance_4.cache(-2,-2,563,219);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(1).to({regY:107.7,scaleY:0.9989,y:108},0).wait(1).to({scaleY:0.9955,y:107.6},0).wait(1).to({scaleY:0.9898,y:107},0).wait(1).to({scaleY:0.9819,y:106.15},0).wait(1).to({scaleY:0.9717,y:105.05},0).wait(1).to({scaleY:0.9592,y:103.7},0).wait(1).to({scaleY:0.9445,y:102.1},0).wait(1).to({scaleY:0.9275,y:100.3},0).wait(1).to({scaleY:0.9082,y:98.15},0).wait(1).to({scaleY:0.8867,y:95.85},0).wait(1).to({scaleY:0.8629,y:93.3},0).wait(1).to({scaleY:0.8368,y:90.45},0).wait(1).to({scaleY:0.8085,y:87.35},0).wait(1).to({scaleY:0.7779,y:84.1},0).wait(1).to({scaleY:0.745,y:80.55},0).wait(1).to({scaleY:0.7099,y:76.7},0).wait(1).to({scaleY:0.6725,y:72.7},0).wait(1).to({scaleY:0.6328,y:68.35},0).wait(1).to({scaleY:0.5909,y:63.85},0).wait(1).to({scaleY:0.5467,y:59},0).wait(1).to({scaleY:0.5002,y:54},0).wait(1).to({scaleY:0.4515,y:48.7},0).wait(1).to({scaleY:0.4005,y:43.25},0).wait(1).to({scaleY:0.3472,y:37.45},0).wait(1).to({scaleY:0.2917,y:31.4},0).wait(1).to({scaleY:0.2338,y:25.2},0).wait(1).to({scaleY:0.1738,y:18.7},0).wait(1).to({scaleY:0.1114,y:11.95},0).wait(1).to({scaleY:0.0468,y:4.95},0).to({_off:true},1).wait(106));
	this.timeline.addTween(cjs.Tween.get(instance_4Filter_1).wait(2).to(new cjs.ColorFilter(0.99900345,0.99900345,0.99900345,1,0.25412069,0.25412069,0.25412069,0), 0).wait(1).to(new cjs.ColorFilter(0.99598448,0.99598448,0.99598448,1,1.0239569,1.0239569,1.0239569,0), 0).wait(1).to(new cjs.ColorFilter(0.99091379,0.99091379,0.99091379,1,2.31698276,2.31698276,2.31698276,0), 0).wait(1).to(new cjs.ColorFilter(0.98385,0.98385,0.98385,1,4.11825,4.11825,4.11825,0), 0).wait(1).to(new cjs.ColorFilter(0.97473448,0.97473448,0.97473448,1,6.4427069,6.4427069,6.4427069,0), 0).wait(1).to(new cjs.ColorFilter(0.96362586,0.96362586,0.96362586,1,9.27540517,9.27540517,9.27540517,0), 0).wait(1).to(new cjs.ColorFilter(0.95049483,0.95049483,0.95049483,1,12.62381897,12.62381897,12.62381897,0), 0).wait(1).to(new cjs.ColorFilter(0.93534138,0.93534138,0.93534138,1,16.48794828,16.48794828,16.48794828,0), 0).wait(1).to(new cjs.ColorFilter(0.91813621,0.91813621,0.91813621,1,20.87526724,20.87526724,20.87526724,0), 0).wait(1).to(new cjs.ColorFilter(0.89893793,0.89893793,0.89893793,1,25.77082759,25.77082759,25.77082759,0), 0).wait(1).to(new cjs.ColorFilter(0.87771724,0.87771724,0.87771724,1,31.18210345,31.18210345,31.18210345,0), 0).wait(1).to(new cjs.ColorFilter(0.85447414,0.85447414,0.85447414,1,37.10909483,37.10909483,37.10909483,0), 0).wait(1).to(new cjs.ColorFilter(0.82920862,0.82920862,0.82920862,1,43.55180172,43.55180172,43.55180172,0), 0).wait(1).to(new cjs.ColorFilter(0.80192069,0.80192069,0.80192069,1,50.51022414,50.51022414,50.51022414,0), 0).wait(1).to(new cjs.ColorFilter(0.77261034,0.77261034,0.77261034,1,57.98436207,57.98436207,57.98436207,0), 0).wait(1).to(new cjs.ColorFilter(0.74127759,0.74127759,0.74127759,1,65.97421552,65.97421552,65.97421552,0), 0).wait(1).to(new cjs.ColorFilter(0.70792241,0.70792241,0.70792241,1,74.47978448,74.47978448,74.47978448,0), 0).wait(1).to(new cjs.ColorFilter(0.67254483,0.67254483,0.67254483,1,83.50106897,83.50106897,83.50106897,0), 0).wait(1).to(new cjs.ColorFilter(0.63514483,0.63514483,0.63514483,1,93.03806897,93.03806897,93.03806897,0), 0).wait(1).to(new cjs.ColorFilter(0.59572241,0.59572241,0.59572241,1,103.09078448,103.09078448,103.09078448,0), 0).wait(1).to(new cjs.ColorFilter(0.5543069,0.5543069,0.5543069,1,113.65174138,113.65174138,113.65174138,0), 0).wait(1).to(new cjs.ColorFilter(0.51083966,0.51083966,0.51083966,1,124.73588793,124.73588793,124.73588793,0), 0).wait(1).to(new cjs.ColorFilter(0.46535,0.46535,0.46535,1,136.33575,136.33575,136.33575,0), 0).wait(1).to(new cjs.ColorFilter(0.41783793,0.41783793,0.41783793,1,148.45132759,148.45132759,148.45132759,0), 0).wait(1).to(new cjs.ColorFilter(0.36833276,0.36833276,0.36833276,1,161.07514655,161.07514655,161.07514655,0), 0).wait(1).to(new cjs.ColorFilter(0.31677586,0.31677586,0.31677586,1,174.22215517,174.22215517,174.22215517,0), 0).wait(1).to(new cjs.ColorFilter(0.26322586,0.26322586,0.26322586,1,187.87740517,187.87740517,187.87740517,0), 0).wait(1).to(new cjs.ColorFilter(0.20762414,0.20762414,0.20762414,1,202.05584483,202.05584483,202.05584483,0), 0).wait(1).to(new cjs.ColorFilter(0.15,0.15,0.15,1,216.75,216.75,216.75,0), 0).wait(106));

	// letter_front
	this.instance_5 = new lib.Symbol45();
	this.instance_5.setTransform(279.6,194.8,1,1,0,0,0,279.6,124.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({_off:true},64).wait(36).to({_off:false},0).wait(36));

	// card_EN
	this.instance_6 = new lib.Symbol44();
	this.instance_6.setTransform(277.6,159.35,0.4083,0.4083,-90,0,0,335.1,581.9);

	this.EN_Card_1 = new lib.Symbol44();
	this.EN_Card_1.name = "EN_Card_1";
	this.EN_Card_1.setTransform(277.6,159.35,0.4083,0.4083,-90,0,0,290.9,581.8);
	this.EN_Card_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.EN_Card_1}]},52).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[]},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.EN_Card_1).wait(53).to({_off:false},0).wait(1).to({regX:327,regY:581.3,x:277.15,y:128.7},0).wait(1).to({x:277.05,y:123.4},0).wait(1).to({regX:309.4,regY:581.8,x:276.75,y:103.1},0).wait(1).to({regX:327,regY:581.3,x:276.2,y:48.45},0).wait(1).to({x:275.9,y:2.2},0).wait(1).to({x:275.6,y:-42.8},0).wait(1).to({x:275.35,y:-86.55},0).wait(1).to({x:275.6,y:-96.45},0).wait(1).to({x:276.05},0).wait(1).to({x:276.45},0).wait(1).to({x:276.8},0).wait(1).to({rotation:-78.1329,x:278.45,y:-96.3},0).wait(1).to({rotation:-58.6929,x:280.75,y:-95.5},0).wait(1).to({rotation:-39.8957,x:282.6,y:-94},0).wait(1).to({rotation:-21.7671,x:283.75,y:-92.05},0).wait(1).to({rotation:-4.2943,x:284.3,y:-90},0).wait(1).to({scaleX:0.4412,scaleY:0.4412,rotation:0,x:284.1,y:-72.9},0).wait(1).to({scaleX:0.4836,scaleY:0.4836,x:283.85,y:-51.55},0).wait(1).to({scaleX:0.5242,scaleY:0.5242,x:283.5,y:-31.1},0).wait(1).to({scaleX:0.5632,scaleY:0.5632,x:283.2,y:-11.5},0).wait(1).to({scaleX:0.6004,scaleY:0.6004,x:282.95,y:7.25},0).wait(1).to({scaleX:0.6359,scaleY:0.6359,x:282.65,y:25.1},0).wait(1).to({scaleX:0.6696,scaleY:0.6696,x:282.4,y:42.1},0).wait(1).to({scaleX:0.7016,scaleY:0.7016,x:282.2,y:58.25},0).wait(1).to({scaleX:0.7319,scaleY:0.7319,x:282,y:73.45},0).wait(1).to({scaleX:0.7604,scaleY:0.7604,x:281.75,y:87.85},0).wait(1).to({scaleX:0.7873,scaleY:0.7873,x:281.55,y:101.35},0).wait(1).to({scaleX:0.8124,scaleY:0.8124,x:281.4,y:114},0).wait(1).to({scaleX:0.8357,scaleY:0.8357,x:281.2,y:125.75},0).wait(1).to({scaleX:0.8574,scaleY:0.8574,x:281.05,y:136.65},0).wait(1).to({scaleX:0.8773,scaleY:0.8773,x:280.95,y:146.65},0).wait(1).to({scaleX:0.8954,scaleY:0.8954,x:280.8,y:155.8},0).wait(1).to({scaleX:0.9119,scaleY:0.9119,x:280.7,y:164.15},0).wait(1).to({scaleX:0.9266,scaleY:0.9266,x:280.6,y:171.5},0).wait(1).to({scaleX:0.9396,scaleY:0.9396,x:280.5,y:178.05},0).wait(1).to({scaleX:0.9508,scaleY:0.9508,x:280.4,y:183.7},0).wait(1).to({scaleX:0.9603,scaleY:0.9603,x:280.3,y:188.5},0).wait(1).to({scaleX:0.9681,scaleY:0.9681,x:280.25,y:192.4},0).wait(1).to({scaleX:0.9742,scaleY:0.9742,y:195.5},0).wait(1).to({scaleX:0.9785,scaleY:0.9785,x:280.2,y:197.65},0).wait(1).to({scaleX:0.9811,scaleY:0.9811,x:280.15,y:198.95},0).wait(1).to({scaleX:0.982,scaleY:0.982,y:199.4},0).to({_off:true},1).wait(41));

	// Carn_HK
	this.instance_7 = new lib.Symbol49();
	this.instance_7.setTransform(277.6,159.4,0.4098,0.4098,-90,0,0,1180.2,698);
	this.instance_7._off = true;
	var instance_7Filter_2 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_7.filters = [instance_7Filter_2];
	this.instance_7.cache(853,118,656,1163);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).wait(47).to({regX:1171.5,regY:689.4,x:277.65},0).wait(1).to({regX:1181,regY:699.6,rotation:-87.171,x:282.3,y:129.4},0).wait(1).to({rotation:-84.3421,x:282.7,y:103.25},0).wait(1).to({rotation:-81.5131,x:283.1,y:77.15},0).wait(1).to({rotation:-78.6842,x:283.6,y:51.15},0).wait(1).to({rotation:-75.8552,x:283.95,y:25.05},0).wait(3).to({regX:1169.4,regY:688,rotation:-75.8556,x:278.95,y:27.8},0).wait(1).to({regX:1181,regY:699.6,rotation:-77.7299,x:284.2,y:45.8},0).wait(1).to({rotation:-79.6047,x:283.75,y:67.35},0).wait(1).to({rotation:-81.4794,x:283.2,y:88.85},0).wait(1).to({rotation:-83.3542,x:282.7,y:110.35},0).wait(1).to({rotation:-85.2289,x:282.1,y:131.85},0).wait(1).to({rotation:-87.1037,x:281.6,y:153.4},0).wait(1).to({rotation:-88.9784,x:281,y:174.9},0).wait(1).to({rotation:-90.8532,x:280.5,y:196.4},0).to({_off:true},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(instance_7Filter_2).wait(48).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(0.875,0.875,0.875,1,31.875,3.875,3.125,0), 0).wait(1).to(new cjs.ColorFilter(0.75,0.75,0.75,1,63.75,15.75,12.5,0), 0).wait(1).to(new cjs.ColorFilter(0.625,0.625,0.625,1,95.625,35.625,28.125,0), 0).wait(1).to(new cjs.ColorFilter(0.5,0.5,0.5,1,127.5,63.5,50,0), 0).wait(1).to(new cjs.ColorFilter(0.375,0.375,0.375,1,159.375,99.375,78.125,0), 0).wait(1).to(new cjs.ColorFilter(0.25,0.25,0.25,1,191.25,143.25,112.5,0), 0).wait(1).to(new cjs.ColorFilter(0.125,0.125,0.125,1,223.125,195.125,153.125,0), 0).wait(1).to(new cjs.ColorFilter(0,0,0,1,255,255,201,0), 0).wait(72));

	// letter_front_2
	this.instance_8 = new lib.Symbol45();
	this.instance_8.setTransform(279.6,194.8,1,1,0,0,0,279.6,124.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(65).to({_off:false},0).to({_off:true},31).wait(41));

	// letter_top_flipped
	this.instance_9 = new lib.Symbol38();
	this.instance_9.setTransform(279.6,-0.1,1,0.0926,0,0,0,279.6,209.5);
	this.instance_9._off = true;
	var instance_9Filter_3 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_9.filters = [instance_9Filter_3];
	this.instance_9.cache(-2,-2,563,219);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(32).to({_off:false},0).wait(1).to({regY:107.7,scaleY:0.1826,y:-18.55},0).wait(1).to({scaleY:0.2712,y:-27.45},0).wait(1).to({scaleY:0.3584,y:-36.2},0).wait(1).to({scaleY:0.4441,y:-44.85},0).wait(1).to({scaleY:0.5283,y:-53.3},0).wait(1).to({scaleY:0.6111,y:-61.6},0).wait(1).to({scaleY:0.6925,y:-69.75},0).wait(1).to({scaleY:0.7724,y:-77.8},0).wait(1).to({scaleY:0.8509,y:-85.7},0).wait(1).to({scaleY:0.928,y:-93.45},0).wait(1).to({scaleY:1,y:-100.7},0).wait(52).to({_off:true},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(instance_9Filter_3).wait(32).to(new cjs.ColorFilter(0.68,0.68,0.68,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-73.50528,-73.50528,-73.50528,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-65.54112,-65.54112,-65.54112,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-57.70344,-57.70344,-57.70344,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-49.99632,-49.99632,-49.99632,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-42.41976,-42.41976,-42.41976,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-34.97376,-34.97376,-34.97376,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-27.65424,-27.65424,-27.65424,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-20.46528,-20.46528,-20.46528,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-13.40688,-13.40688,-13.40688,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-6.47904,-6.47904,-6.47904,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(41));

	// letter_inside
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1E2DA").s().p("AtCOEI5/sgIABvnMBOCAAAIAAA3IAACGIAAMqI6CMgg");
	this.shape_2.setTransform(279.725,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EBA8DA").s().p("EAnEgE2IAAiGIAAg3IDfAAQBJACAABJIAAJwQhGC+jiBugEgrrADIIAApwQAAhJBHgCIDlAAIgBPnQjlhuhGi+g");
	this.shape_3.setTransform(279.575,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},95).wait(41));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_4, startFrame:1, endFrame:1, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:2, endFrame:2, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:3, endFrame:3, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:4, endFrame:4, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:5, endFrame:5, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:6, endFrame:6, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:7, endFrame:7, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:8, endFrame:8, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:9, endFrame:9, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:10, endFrame:10, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:11, endFrame:11, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:12, endFrame:12, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:13, endFrame:13, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:14, endFrame:14, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:15, endFrame:15, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:16, endFrame:16, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:17, endFrame:17, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:18, endFrame:18, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:19, endFrame:19, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:20, endFrame:20, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:21, endFrame:21, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:22, endFrame:22, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:23, endFrame:23, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:24, endFrame:24, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:25, endFrame:25, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:26, endFrame:26, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:27, endFrame:27, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:28, endFrame:28, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:29, endFrame:29, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_4, startFrame:30, endFrame:30, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_7, startFrame:1, endFrame:1, x:853, y:118, w:656, h:1163});
	this.filterCacheList.push({instance: this.instance_7, startFrame:48, endFrame:48, x:853, y:118, w:656, h:1163});
	this.filterCacheList.push({instance: this.instance_7, startFrame:49, endFrame:49, x:853, y:118, w:656, h:1163});
	this.filterCacheList.push({instance: this.instance_7, startFrame:50, endFrame:50, x:853, y:118, w:656, h:1163});
	this.filterCacheList.push({instance: this.instance_7, startFrame:51, endFrame:51, x:853, y:118, w:656, h:1163});
	this.filterCacheList.push({instance: this.instance_7, startFrame:52, endFrame:52, x:853, y:118, w:656, h:1163});
	this.filterCacheList.push({instance: this.instance_7, startFrame:53, endFrame:53, x:853, y:118, w:656, h:1163});
	this.filterCacheList.push({instance: this.instance_7, startFrame:54, endFrame:54, x:853, y:118, w:656, h:1163});
	this.filterCacheList.push({instance: this.instance_7, startFrame:55, endFrame:55, x:853, y:118, w:656, h:1163});
	this.filterCacheList.push({instance: this.instance_7, startFrame:56, endFrame:56, x:853, y:118, w:656, h:1163});
	this.filterCacheList.push({instance: this.instance_7, startFrame:57, endFrame:57, x:853, y:118, w:656, h:1163});
	this.filterCacheList.push({instance: this.instance_7, startFrame:58, endFrame:58, x:853, y:118, w:656, h:1163});
	this.filterCacheList.push({instance: this.instance_7, startFrame:59, endFrame:59, x:853, y:118, w:656, h:1163});
	this.filterCacheList.push({instance: this.instance_7, startFrame:60, endFrame:60, x:853, y:118, w:656, h:1163});
	this.filterCacheList.push({instance: this.instance_7, startFrame:61, endFrame:61, x:853, y:118, w:656, h:1163});
	this.filterCacheList.push({instance: this.instance_7, startFrame:62, endFrame:62, x:853, y:118, w:656, h:1163});
	this.filterCacheList.push({instance: this.instance_7, startFrame:63, endFrame:63, x:853, y:118, w:656, h:1163});
	this.filterCacheList.push({instance: this.instance_7, startFrame:64, endFrame:64, x:853, y:118, w:656, h:1163});
	this.filterCacheList.push({instance: this.instance_9, startFrame:32, endFrame:32, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:0, endFrame:0, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:33, endFrame:33, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:34, endFrame:34, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:35, endFrame:35, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:36, endFrame:36, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:37, endFrame:37, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:38, endFrame:38, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:39, endFrame:39, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:40, endFrame:40, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:41, endFrame:41, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:42, endFrame:42, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:43, endFrame:43, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:44, endFrame:44, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:45, endFrame:45, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:46, endFrame:46, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:47, endFrame:47, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:48, endFrame:48, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:49, endFrame:49, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:50, endFrame:50, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:51, endFrame:51, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:52, endFrame:52, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:53, endFrame:53, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:54, endFrame:54, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:55, endFrame:55, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:56, endFrame:56, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:57, endFrame:57, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:58, endFrame:58, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:59, endFrame:59, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:60, endFrame:60, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:61, endFrame:61, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:62, endFrame:62, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:63, endFrame:63, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:64, endFrame:64, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:65, endFrame:65, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:66, endFrame:66, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:67, endFrame:67, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:68, endFrame:68, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:69, endFrame:69, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:70, endFrame:70, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:71, endFrame:71, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:72, endFrame:72, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:73, endFrame:73, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:74, endFrame:74, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:75, endFrame:75, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:76, endFrame:76, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:77, endFrame:77, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:78, endFrame:78, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:79, endFrame:79, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:80, endFrame:80, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:81, endFrame:81, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:82, endFrame:82, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:83, endFrame:83, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:84, endFrame:84, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:85, endFrame:85, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:86, endFrame:86, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:87, endFrame:87, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:88, endFrame:88, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:89, endFrame:89, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:90, endFrame:90, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:91, endFrame:91, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:92, endFrame:92, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:93, endFrame:93, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:94, endFrame:94, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_9, startFrame:95, endFrame:95, x:-2, y:-2, w:563, h:219});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.9,-371.4,642.1,1141.5);


(lib.Symbol30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol33();
	this.instance.setTransform(27.5,25,1,1,0,0,0,27.5,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:35.6},0).wait(1).to({x:43.75},0).wait(1).to({x:51.85},0).wait(1).to({x:60},0).wait(1).to({x:53.5},0).wait(1).to({x:47},0).wait(1).to({x:40.5},0).wait(1).to({x:34},0).wait(1).to({x:27.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87.5,50);


(lib.Symbol29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer_1
	this.instance = new lib.Symbol30();
	this.instance.setTransform(27.5,25,1,1,0,0,0,27.5,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:43.8,scaleX:1.2049,scaleY:1.2049,x:47.2,y:-32.9,alpha:0.8975},0).wait(1).to({scaleX:1.3988,scaleY:1.3988,x:50.3,y:-87.65,alpha:0.8006},0).wait(1).to({scaleX:1.5817,scaleY:1.5817,x:53.35,y:-139.3,alpha:0.7092},0).wait(1).to({scaleX:1.7534,scaleY:1.7534,x:56.1,y:-187.8,alpha:0.6233},0).wait(1).to({scaleX:1.9141,scaleY:1.9141,x:58.75,y:-233.2,alpha:0.5429},0).wait(1).to({scaleX:2.0637,scaleY:2.0637,x:61.15,y:-275.45,alpha:0.4682},0).wait(1).to({scaleX:2.2022,scaleY:2.2022,x:63.4,y:-314.6,alpha:0.3989},0).wait(1).to({scaleX:2.3296,scaleY:2.3296,x:65.5,y:-350.55,alpha:0.3352},0).wait(1).to({scaleX:2.4459,scaleY:2.4459,x:67.4,y:-383.45,alpha:0.2771},0).wait(1).to({scaleX:2.5512,scaleY:2.5512,x:69.1,y:-413.15,alpha:0.2244},0).wait(1).to({scaleX:2.6454,scaleY:2.6454,x:70.65,y:-439.8,alpha:0.1773},0).wait(1).to({scaleX:2.7285,scaleY:2.7285,x:72,y:-463.3,alpha:0.1357},0).wait(1).to({scaleX:2.8005,scaleY:2.8005,x:73.15,y:-483.65,alpha:0.0997},0).wait(1).to({scaleX:2.8615,scaleY:2.8615,x:74.2,y:-500.85,alpha:0.0693},0).wait(1).to({scaleX:2.9113,scaleY:2.9113,x:74.95,y:-514.9,alpha:0.0444},0).wait(1).to({scaleX:2.9501,scaleY:2.9501,x:75.6,y:-525.9,alpha:0.0249},0).wait(1).to({scaleX:2.9778,scaleY:2.9778,x:76.1,y:-533.7,alpha:0.0111},0).wait(1).to({scaleX:2.9944,scaleY:2.9944,x:76.35,y:-538.4,alpha:0.0028},0).wait(1).to({scaleX:3,scaleY:3,x:76.4,y:-540,alpha:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-615,165,665);


(lib.Symbol25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol24();
	this.instance.setTransform(348.55,252.05,1.1457,1.1457,0,0,0,641,326.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:488.7,regY:215.5,rotation:0.0012,x:174.05,y:125.25},0).wait(1).to({rotation:0.0046,x:174.1},0).wait(1).to({rotation:0.0105},0).wait(1).to({rotation:0.0187},0).wait(1).to({rotation:0.0293,x:174.15,y:125.2},0).wait(1).to({rotation:0.0422,y:125.15},0).wait(1).to({rotation:0.0574,x:174.2,y:125.1},0).wait(1).to({rotation:0.075,x:174.25,y:125.05},0).wait(1).to({rotation:0.095,x:174.3,y:124.95},0).wait(1).to({rotation:0.1173,x:174.35,y:124.9},0).wait(1).to({rotation:0.1419,x:174.4,y:124.85},0).wait(1).to({rotation:0.1688,y:124.75},0).wait(1).to({rotation:0.1982,x:174.5,y:124.7},0).wait(1).to({rotation:0.2298,x:174.55,y:124.6},0).wait(1).to({rotation:0.2638,x:174.65,y:124.45},0).wait(1).to({rotation:0.3002,x:174.75,y:124.4},0).wait(1).to({rotation:0.339,x:174.85,y:124.25},0).wait(1).to({rotation:0.38,x:174.9,y:124.1},0).wait(1).to({rotation:0.4234,x:175.05,y:124},0).wait(1).to({rotation:0.4691,x:175.15,y:123.85},0).wait(1).to({rotation:0.5172,y:123.7},0).wait(1).to({rotation:0.5676,x:175.3,y:123.55},0).wait(1).to({rotation:0.6205,x:175.45,y:123.4},0).wait(1).to({rotation:0.6756,x:175.55,y:123.25},0).wait(1).to({rotation:0.7331,x:175.7,y:123},0).wait(1).to({rotation:0.7929,x:175.85,y:122.85},0).wait(1).to({rotation:0.855,x:176,y:122.65},0).wait(1).to({rotation:0.9196,x:176.1,y:122.5},0).wait(1).to({rotation:0.9864,x:176.25,y:122.3},0).wait(1).to({rotation:1.0556,x:176.45,y:122.05},0).wait(1).to({rotation:1.1272,x:176.6,y:121.85},0).wait(1).to({rotation:1.2011,x:176.75,y:121.65},0).wait(1).to({rotation:1.2774,x:176.95,y:121.45},0).wait(1).to({rotation:1.3559,x:177.1,y:121.15},0).wait(1).to({rotation:1.4368,x:177.25,y:120.9},0).wait(1).to({rotation:1.5201,x:177.5,y:120.65},0).wait(1).to({rotation:1.6058,x:177.75,y:120.45},0).wait(1).to({rotation:1.6937,x:177.9,y:120.2},0).wait(1).to({rotation:1.784,x:178.05,y:119.9},0).wait(1).to({rotation:1.8767,x:178.3,y:119.6},0).wait(1).to({rotation:1.9717,x:178.5,y:119.3},0).wait(1).to({rotation:2.0691,x:178.8,y:119.05},0).wait(1).to({rotation:2.1688,x:179,y:118.75},0).wait(1).to({rotation:2.2708,x:179.2,y:118.45},0).wait(1).to({rotation:2.3752,x:179.45,y:118.15},0).wait(1).to({rotation:2.482,x:179.7,y:117.8},0).wait(1).to({rotation:2.5911,x:179.95,y:117.5},0).wait(1).to({rotation:2.7025,x:180.2,y:117.15},0).wait(1).to({rotation:2.8163,x:180.45,y:116.85},0).wait(1).to({rotation:2.9324,x:180.75,y:116.5},0).wait(1).to({rotation:3.0509,x:181.05,y:116.15},0).wait(1).to({rotation:3.1717,x:181.35,y:115.8},0).wait(1).to({rotation:3.2948,x:181.6,y:115.5},0).wait(1).to({rotation:3.4204,x:181.9,y:115.05},0).wait(1).to({rotation:3.5482,x:182.25,y:114.7},0).wait(1).to({rotation:3.6784,x:182.55,y:114.3},0).wait(1).to({rotation:3.811,x:182.9,y:113.95},0).wait(1).to({rotation:3.9458,x:183.2,y:113.5},0).wait(1).to({rotation:4.0831,x:183.5,y:113.15},0).wait(1).to({rotation:4.2227,x:183.9,y:112.75},0).wait(1).to({rotation:4.3646,x:184.2,y:112.35},0).wait(1).to({rotation:4.5089,x:184.55,y:111.95},0).wait(1).to({rotation:4.6555,x:184.95,y:111.55},0).wait(1).to({rotation:4.8045,x:185.3,y:111.1},0).wait(1).to({rotation:4.9558,x:185.65,y:110.65},0).wait(1).to({rotation:5.1095,x:186,y:110.2},0).wait(1).to({rotation:5.2655,x:186.45,y:109.8},0).wait(1).to({rotation:5.4239,x:186.85,y:109.35},0).wait(1).to({rotation:5.5845,x:187.3,y:108.9},0).wait(1).to({rotation:5.634,x:187.35,y:108.75},0).wait(1).to({rotation:5.4718,x:186.95,y:109.2},0).wait(1).to({rotation:5.3074,x:186.55,y:109.7},0).wait(1).to({rotation:5.1407,x:186.15,y:110.1},0).wait(1).to({rotation:4.9717,x:185.7,y:110.6},0).wait(1).to({rotation:4.8005,x:185.3,y:111.1},0).wait(1).to({rotation:4.6269,x:184.85,y:111.6},0).wait(1).to({rotation:4.4511,x:184.45,y:112.1},0).wait(1).to({rotation:4.2729,x:184,y:112.6},0).wait(1).to({rotation:4.0924,x:183.55,y:113.1},0).wait(1).to({rotation:3.9096,x:183.1,y:113.6},0).wait(1).to({rotation:3.7246,x:182.65,y:114.15},0).wait(1).to({rotation:3.5371,x:182.25,y:114.7},0).wait(1).to({rotation:3.3475,x:181.8,y:115.3},0).wait(1).to({rotation:3.1555,x:181.3,y:115.8},0).wait(1).to({rotation:2.9613,x:180.85,y:116.4},0).wait(1).to({rotation:2.7646,x:180.4,y:117},0).wait(1).to({rotation:2.5658,x:179.95,y:117.55},0).wait(1).to({rotation:2.3646,x:179.4,y:118.2},0).wait(1).to({rotation:2.1611,x:179,y:118.75},0).wait(1).to({rotation:1.9554,x:178.5,y:119.4},0).wait(1).to({rotation:1.7473,x:178,y:120},0).wait(1).to({rotation:1.537,x:177.55,y:120.6},0).wait(1).to({rotation:1.3243,x:177.05,y:121.3},0).wait(1).to({rotation:1.1094,x:176.55,y:121.9},0).wait(1).to({rotation:0.8921,x:176,y:122.55},0).wait(1).to({rotation:0.6726,x:175.55,y:123.25},0).wait(1).to({rotation:0.4507,x:175.1,y:123.9},0).wait(1).to({rotation:0.2265,x:174.6,y:124.55},0).wait(1).to({rotation:0,x:174.05,y:125.25},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,-10.1,348.5,260.8);


(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],0.1,-0.2,0,0.1,-0.2,9.5).s().p("AADApQgSgBgMgRQgDgDAAgDQgCgJALgIQAPgLAIABQAKAAAGAFQAHAFgBAHIAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgCACgDgBQgEAAgCgCQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBAAAAgBQgDgCgDAAIgDABQgKADgCAHQgBAOASACQATACAIgJQAKgJgJgRQgHgQhJgJIAMgHIALgDIAAACQAxADARARQAHAIACAKQAEAVgNALQgHAFgLAEIgOACIgFgBg");
	this.shape.setTransform(184.505,97.2232,1.7789,2.309,-3.9497);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],1.2,-4.5,0,1.2,-4.5,11.8).s().p("AgGAwQgHAAgIgDQgfgMALgaQAFgNAVAAQAUAAAGAGQAHAEgBAHQgBAHgGAFIgBAAIgFABQgDAAgBgCQgBAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQABgDACgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAIgCgBQgLgEgJAEQgNAKAMALQAMALAOgBQAPgCAKgRQAIgNgZgtIAQgGQAMAXAEARQAGAVgKANIgDADIgKAIQgOAKgOAAIgEAAg");
	this.shape_1.setTransform(155.9867,114.024,1.7789,2.309,-3.9497);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-4.3,-2.9,0,-4.3,-2.9,9.9).s().p("AgQAkQAHgNgKgSQgJgPgZgVIAWgNQBJAIAHAQQAJASgKAIQgIAJgTgBQgTgCABgNQACgHAKgEIAEAAQADAAADACQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABABAAQAAAAAAABQACACAEAAQADAAACgCQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAIAAgBQABgHgHgFQgGgGgKAAQgJgBgOAMQgLAJACAHQAAAEADADQALAQATACQgaAAgRARIAGgJg");
	this.shape_2.setTransform(181.4709,100.5571,1.7789,2.309,-3.9497);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-5.1,-4.1,0,-5.1,-4.1,11.4).s().p("AgdAPQgEgQgMgXQAagLAZgOIAKAIQAhAbgDAMQgEATgOAEQgGACgGgBQgIgBgIgFQgQgIAKgLQAGgFAMABIAEABQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABgBABQAAAAAAAAQAAAAgBABIAAAAIgBAEQABACADACQACABAEAAQACgBACgCQAGgGgCgGQgCgHgIgEIgIgCQgIAAgLACQgVAFgBAMQAAAHACAGQAGARAYADIAEABQgWgCgWARQAKgNgGgWg");
	this.shape_3.setTransform(168.5647,107.8126,1.7789,2.309,-3.9497);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-0.7,-0.5,0,-0.7,-0.5,8.8).s().p("AgBAvIgFAAIgEgBQgZgDgGgRQgCgGAAgHQABgNAVgEQAMgCAIAAIAHACQAIAEACAGQACAHgGAGQgCACgCABQgEAAgCgBQgCgCgBgCIABgEIAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQgBgBAAAAIgEgBQgMgBgHAFQgKAMAQAIQAJAFAIABQAFABAGgCQAOgEAEgUQADgLgggbIgKgIIAPgJQAZAUAJARQAKAQgHAOIgGAJIgFAFQgNAMgRAAIgBAAg");
	this.shape_4.setTransform(171.5358,104.8324,1.7789,2.309,-3.9497);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-2.9,2.2,0,-2.9,2.2,8).s().p("AgWAcIAAglIABAFQAFgbAVAEIABAAIAAAAQAMACADAIQADAFgCAIQgDAGgFAGIgNAKQgJAGgNAFg");
	this.shape_5.setTransform(138.6058,143.2197,1.7789,2.309,-3.9497);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-1.8,1.5,0,-1.8,1.5,12.1).s().p("AgYA+IAAghQAHg9AWggIAUgCQgyBQAYAZIAFAFIgBAAQgVgEgFAcIgBgGg");
	this.shape_6.setTransform(137.8286,126.5401,1.7789,2.309,-3.9497);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-0.8,1.5,0,-0.8,1.5,13.3).s().p("AglBEQgPgCgLgSQgKgQAzhQQAigGAjgNQAZAugIAMQgKARgPABQgPACgMgLQgMgLANgJQAJgEALADIADABQABABAAAAQAAABAAABQABAAAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQgCABgBADQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQACACADAAIAFgBIABAAQAGgGABgGQABgIgHgFQgGgFgVAAQgUAAgFANQgLAaAeALQAIADAHABQgRAEgDAVIgCgIQgFgOgVAAQgVAAgGAFQgGAFAAAIQABAHAGAEIABABQACABADAAQAEAAACgCQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBIgBAAQgCgCAAgCIABgEIAEgBQALgEAIAEQANAJgMAMQgLAKgNAAIgCAAg");
	this.shape_7.setTransform(149.992,120.5027,1.7789,2.309,-3.9497);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-1.7,-12,0,-1.7,-12,26.9).s().p("AgPA9QgDgIgMgCIAAAAIgGgGQgYgYAzhRIAWgEQgzBQAKAQQALASAPACQAOABAMgLQAMgMgNgJQgJgEgLAEIgDABIgBAEQABACABACIAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgBACgDAAQgDAAgCgBIgBgBQgGgEgBgHQgBgIAHgFQAGgFAUAAQAVAAAGAOIABAIQACAGgCAFQgEAMgSAHQgKAEgJAAQgJAAgJgEg");
	this.shape_8.setTransform(143.9602,124.6414,1.7789,2.309,-3.9497);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],0.8,-1.9,0,0.8,-1.9,8.1).s().p("AgOguIAdABIAABXIgBAFQgHg9gVggg");
	this.shape_9.setTransform(130.4033,122.9444,1.7789,2.309,-3.9497);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],1.7,2.2,0,1.7,2.2,8.1).s().p("AAAASIgNgKQgGgGgDgGQgCgIADgFQAEgIAMgCIAAAAIABAAQAVgEAFAbIABgFIAAAlIgBABQgOgFgIgGg");
	this.shape_10.setTransform(130.3447,143.7898,1.7789,2.309,-3.9497);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],0.3,-0.7,0,0.3,-0.7,9.4).s().p("AgDAsIAAAAIAEgFQAYgZgxhQIAUACQAVAgAHA9IABgFIAAAFIAAAhIgCAFQgEgbgWAEg");
	this.shape_11.setTransform(128.9149,127.2131,1.7789,2.309,-3.9497);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-0.8,-3.3,0,-0.8,-3.3,10.1).s().p("AgOAqIAAhXIAdgBQgWAggHA9g");
	this.shape_12.setTransform(135.7233,122.5194,1.7789,2.309,-3.9497);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],0.6,-12,0,0.6,-12,26.9).s().p("AgVA8QgSgGgEgMQgCgGACgGIACgIQAFgNAVgBQAUAAAHAGQAGAFgBAHQgBAHgGAFIgBAAQgCACgDAAQgDgBgBgCQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIAAAAQACgCAAgDIgCgEIgCgBQgLgDgJADQgNAKAMALQAMALAOgBQAPgCALgRQAKgRgyhOIAWADQAyBQgYAZIgFAFIgBAAQgMACgDAIQgJAEgJAAQgJAAgKgEg");
	this.shape_13.setTransform(122.4607,126.241,1.7789,2.309,-3.9497);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],2,-0.7,0,2,-0.7,11.3).s().p("AAMA5QgMgLANgKQAIgDALADIAEABIABAEQAAADgCACIgBAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABAAABQABAAAAABQAAAAAAABQABAAAAAAQACACAEABQADAAACgCIABAAQAGgFABgHQAAgHgGgFQgGgGgVAAQgVABgFANIgCAIQgDgVgRgEQAHAAAIgDQAegMgLgZQgFgOgUAAQgVAAgGAGQgHAFABAHQABAHAGAFIABAAIAFABQAEAAABgCQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAgBQgBgDgCgBQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAIADgBQALgEAJAEQAMAKgLALQgMAKgPgBQgPgCgKgQQgIgNAZgtQAjANAiAHQAzBOgKARQgLARgPACIgCABQgNAAgLgLg");
	this.shape_14.setTransform(115.9091,122.9708,1.7789,2.309,-3.9497);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],4.5,0,0,4.5,0,22.7).s().p("AAAAAIAAAAIAAAAg");
	this.shape_15.setTransform(131.7703,102.7144,1.7789,2.309,-3.9497);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-5.6,0,0,-5.6,0,22.8).s().p("AAAAAIABAAIAAAAIgBAAg");
	this.shape_16.setTransform(131.5485,102.7297,1.7789,2.309,-3.9497);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-2.3,-4.5,0,-2.3,-4.5,11.8).s().p("AgZAmIgKgJIgDgCQgKgNAGgWQAEgQAMgXIAQAHQgZAsAIAMQAKASAPABQAOACAMgLQAMgMgNgJQgJgEgLADIgDABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAABABQACABABADQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQgBACgDAAIgFgBIgBAAQgGgGgBgGQgBgIAHgEQAGgFAUAAQAVAAAFAMQALAbgfALQgIADgHABIgEAAQgOAAgOgKg");
	this.shape_17.setTransform(109.0797,117.3771,1.7789,2.309,-3.9497);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-1.1,-0.2,0,-1.1,-0.2,9.5).s().p("AgUAoQgMgEgGgFQgNgLADgVQACgKAHgIQASgRAwgDIABgCIAJACIANAIQhIAJgHAQQgKARAKAJQAJAJATgCQASgCgBgOQgCgHgLgDIgDgBQgDAAgCACQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAQgCACgDAAQgDABgCgCQgBgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAAAQgBgHAGgFQAHgFAJAAQAJgBAPALQALAIgCAJQgBADgCADQgMARgSABIgGABIgNgCg");
	this.shape_18.setTransform(78.4706,104.5415,1.7789,2.309,-3.9497);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],3.2,-2.9,0,3.2,-2.9,9.9).s().p("AgUAcQATgCAMgQQACgDAAgEQADgHgMgJQgOgMgJABQgKAAgGAGQgHAFABAHIAAABQAAAAABABQAAAAAAABQABAAAAAAQABABAAAAQACACADAAQAEAAACgCQAAgBABAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAAAAAQABgBAAAAQADgCADAAIAEAAQAKAEACAHQABANgTACQgTABgIgJQgKgIAJgSQAHgPBIgJIAWAOQgYAUgJAPQgKASAHANIAGAJQgRgRgaAAg");
	this.shape_19.setTransform(81.9342,107.4269,1.7789,2.309,-3.9497);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],4,-4.1,0,4,-4.1,11.4).s().p("AgJAjIADgBQAZgEAFgRQACgFAAgHQAAgNgVgEQgMgDgHABIgJACQgHAEgCAHQgCAGAFAGQACACADAAQADABADgCQADgBAAgDIAAgEIgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQgBgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAABgBIAEgBQAKgBAHAGQAKALgPAIQgIAFgIAAQgHABgFgCQgOgEgFgSQgDgNAhgaIALgIQAYAOAaALQgMAXgEAPQgFAXAJANQgWgSgVADg");
	this.shape_20.setTransform(95.723,112.9557,1.7789,2.309,-3.9497);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-0.4,-0.6,0,-0.4,-0.6,8.8).s().p("AgdAjIgFgGIgGgJQgHgNAKgRQAJgQAZgUIAPAJIgKAIQggAaADAMQAEATAOAEQAGACAFgBQAIAAAJgFQAQgIgKgMQgHgGgMABIgEABQAAABgBAAQAAABgBAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAIAAAAIABAEQgBADgCABQgCACgEgBQgCAAgCgCQgFgGABgHQACgGAIgEIAHgCQAIgBAMADQAVAEABANQAAAHgCAFQgGARgZAEIgEABIgFAAIgBAAQgRAAgNgMg");
	this.shape_21.setTransform(92.4109,110.3513,1.7789,2.309,-3.9497);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5E3608").s().p("AhrBzQhYgSAVhjQAGBqBNgDQBOgCBihSQBhhSgNg1QArBDiMBnQhLBDhIAAQgQAAgQgEg");
	this.shape_22.setTransform(79.1871,146.9681,2.4105,2.4105);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5E1B04").s().p("AAVhHQAWAYBLgoQhRBiibBNQCUhtgJgyg");
	this.shape_23.setTransform(91.4808,139.525,2.4105,2.4105);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3F1203").s().p("AisAeQAohSAbAWQgHAPgCAMIAAACQgvAuAkATQBWAuCJj0IBKAxQhLAogXgYQAJAyiTBtQCahNBShiQANA1hiBSQhiBShNACIgEABQhKAAgGhpg");
	this.shape_24.setTransform(78.6478,138.9896,2.4105,2.4105);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2B0C02").s().p("AhnBoQgkgTAvgvQgGAmAtgFQAxgLBiiqIAaARQh0DMhPAAQgPAAgNgHg");
	this.shape_25.setTransform(73.3885,129.3309,2.4105,2.4105);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5E3608").s().p("AhrBzQhYgSAVhjQAGBqBNgDQBOgCBihSQBhhSgNg1QArBDiMBnQhLBDhIAAQgQAAgQgEg");
	this.shape_26.setTransform(191.4494,136.8672,2.4104,2.4104,0,-4.281,175.719);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#5E1B04").s().p("AAVhHQAWAYBLgoQhRBiibBNQCUhtgJgyg");
	this.shape_27.setTransform(178.6348,130.3629,2.4104,2.4104,0,-4.281,175.719);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3F1203").s().p("AisAeQAohSAbAWQgHAPgCAMIAAACQgvAuAkATQBWAuCJj0IBKAxQhLAogXgYQAJAyiTBtQCahNBShiQANA1hiBSQhiBShNACIgEABQhKAAgGhpg");
	this.shape_28.setTransform(191.3916,128.871,2.4104,2.4104,0,-4.281,175.719);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2B0C02").s().p("AhnBoQgkgTAvgvQgGAmAtgFQAxgLBiiqIAaARQh0DMhPAAQgPAAgNgHg");
	this.shape_29.setTransform(195.915,118.847,2.4104,2.4104,0,-4.281,175.719);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgyAJQAUgLAfgNQAhgNAIAGIAkAWQgNgGgWgBQgdAAgpAQQgqARgDgBQgBAAgBAAQAAgBgBABQAAAAgBAAQAAAAgBAAQANgJAOgHg");
	this.shape_30.setTransform(110.9065,181.0767,3.0189,3.0189,0,-8.2697,171.7303);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFEDCC").s().p("AAAAAIAAAAIAAAAg");
	this.shape_31.setTransform(208.8574,173.6484,3.0189,3.0189,8.4691);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3F1203").s().p("AiVFxIgPgbQhii+gUhfIgCgOQgEhRAHBhQAqmXA8gxQA0g4BFAKQBEAJBhA6QA/AmAuB4IiwifIh7gJIB5AfICyCJQAZBAAUBXQAnDNgXBdQgXBdABAnQABAmAfAiQhyhvgdijQA4hEAEgTQADgTAAgSQgBgSgKggQgJghgBgYQgBgZhlgbQhlgciLh2QAjBKgpA0QgqA0ABBCQAABBAQAqQAPArAfAeQA4Cig0CAQAIgngUgmgAhwk/QCEAeCLBvIA/CJQAaCpgMC8IAWiIIgklXQjJikhgAAQgVAAgQAIgAkFgPIA0DHQgoj0AyiDIAgi+QhBCbgdDTgAAPi1QBBATBLAVIhwg4IiTg1g");
	this.shape_32.setTransform(139.5126,204.8494,3.0189,3.0189,8.4691);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5E1B04").s().p("ADzAAIg/iJQiLhviEgeQBagsD0DIIAkFXIgWCIQAMi7gaiqgADpheIAAAAIAAAAgAjwAZQAdjSBBibIggC+QgyCDAoD0gAkHBUIACAPQgehmAYirQA3i3A2ABQg8AxgqGXQgHhiAEBSgAAkiMIh3hEICTA0IBwA4QhLgUhBgUgADtixIiyiJIh5gfIB7AJICwCfIAEADg");
	this.shape_33.setTransform(135.0847,191.5827,3.0189,3.0189,8.4691);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgyAJQAUgLAfgNQAhgNAIAGIAkAWQgNgGgWgBQgdAAgpAQQgqARgDgBQgBAAgBAAQAAgBgBABQAAAAgBAAQAAAAgBAAQANgJAOgHg");
	this.shape_34.setTransform(173.5827,181.4955,3.0189,3.0189,6.0173);

	this.instance = new lib.Symbol2();
	this.instance.setTransform(171.7,195.05,3.0189,3.0189,8.4691,0,0,7.1,2.9);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(112.1,194.55,3.0189,3.0189,8.4691,0,0,7,2.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCCCC").s().p("AgIARIAJgnIAAAhIAIAMg");
	this.shape_35.setTransform(140.0392,213.2797,3.0189,3.0189,8.4691);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#990000").ss(1,1,1,3,true).p("Ag6gFQBDARAygdQgNAogmACQgiAFgggjQApgVAKAGQAIAGAJgIQAJgIAoAN");
	this.shape_36.setTransform(140.9215,245.9227,3.0189,3.0189,8.4691);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CC0000").s().p("Ag6gFIACABQAYAFAVAAIAAAAIABAAQAjAAAegQIABAAIAAgBIABAAIACgBQgNAognACIgHABQgeAAgcgfgAgLABQgVAAgYgFIgCgBQApgVAKAGQAIAGAJgIQAJgIAoANIgCABIgBAAIAAABIgBAAQgeAQgjAAIgBAAIAAAAg");
	this.shape_37.setTransform(140.9215,245.9227,3.0189,3.0189,8.4691);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFCCCC").s().p("Al1A5IgPgGQgCgPAPgkIgBgEIgmAkQgbAbgXgEIgTgGIABgSQABgHAcgkQAbgkAIgFQAKAFABACQADABgBALQgDAPgOAPIAlgYQAjgVALACQAKABADAHQABADgCAOQgDAPgRAVIAAADQAFgDA1grQAwghgIAvIAQgGQAHgDAJABQAOACAAADQgBAFACAGQgBAIhRAzIgLgFIgFgEQgBgCACgIQABgJAFgEIAJgIIgBgFQg5AygbAAIgEAAgAE5A2IgOgGQgDgPAPgkIgBgEIgmAkQgbAbgYgEIgSgGIABgSQABgHAcgkQAbgkAIgFQAKAFACACQACABgBALQgCAPgPAPIAlgYQAjgVALACQAKABACAHQABADgCAOQgCAPgRAVIAAADQAFgDA2grQAvghgIAvIAQgGQAGgDAJABQAPACAAADQgBAFACAGQgBAJhRAyIgLgFIgEgEQgBgCABgJQABgIAFgEIAJgIIgBgFQg5AygbAAIgEAAg");
	this.shape_38.setTransform(142.475,216.8889);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3F1203").s().p("AhoDeQhUifAFhiQADhhANhXIACgFQAPhTBYAFQBaAFBOAMQA7AJAPA0QAEARAAAWQAABYgxBYQgxBXg3CYQgZBKggAAQgjAAgrhSg");
	this.shape_39.setTransform(68.761,120.8844);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFEBDD").s().p("Ag6L/QlhikhZhlQiJh8ADh8QACh9AcjCQAbjGCUiJQCSiIhJjtQFrGfEyB+QExB+gEA6QgFA2AOAfQAMAfABB1QgBB2gkBMQglBKjSC/QjHCCiTAAQghAAgfgHgAlgDZQgPAlACAQIAPAFQAbAEA9g1IABAFIgJAIQgFADgBAJQgCAJABACIAFADIALAFQBRgyABgJQgCgHABgEQAAgDgOgCQgJgCgHAEIgQAFQAIgugwAhQg1AsgFACIAAgDQARgWADgPQACgNgBgEQgDgGgKgCQgLgBgjAVIglAXQAOgPADgPQABgKgDgCQgBgCgKgEQgIAFgbAkQgcAkgBAIIgBASIATAGQAXADAbgaIAmglgAFODWQgPAlADAQIAOAFQAbAEA9g1IABAFIgJAIQgFADgBAJQgBAJABACIAEADIALAFQBRgyABgJQgCgHABgEQAAgDgPgCQgJgCgGAEIgQAFQAIgugvAhQg2AsgFACIAAgDQARgWACgPQACgNgBgEQgCgGgKgCQgLgBgjAVIglAXQAPgPACgPQABgKgCgCQgCgCgKgEQgIAFgbAkQgcAkgBAIIgBASIASAGQAYADAbgaIAmglg");
	this.shape_40.setTransform(140.1968,195.0475);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2B0C02").s().p("AgeDmQg3iYgxhXQgxhYAAhYQAAhYBOgMQBOgMBagFQBagFAOBYQAOBXADBhQAFBihUCfQgrBSgjAAQggAAgZhKg");
	this.shape_41.setTransform(198.589,115.3351);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_1},{t:this.instance},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(36,67.8,199.2,279.8), null);


(lib.Symbol22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol23();
	this.instance.setTransform(146.3,275.6,1,1,0,0,0,146.6,275.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:137.6,regY:204.6,rotation:0.3861,x:137.75,y:204.6},0).wait(1).to({rotation:0.7722,x:138.25,y:204.5},0).wait(1).to({rotation:1.1583,x:138.7,y:204.45},0).wait(1).to({rotation:1.5445,x:139.2,y:204.4},0).wait(1).to({rotation:1.9306,x:139.65},0).wait(1).to({rotation:2.3167,x:140.2,y:204.3},0).wait(1).to({rotation:2.7028,x:140.65,y:204.25},0).wait(1).to({rotation:3.0889,x:141.15},0).wait(1).to({rotation:3.475,x:141.6,y:204.2},0).wait(1).to({rotation:3.8611,x:142.05},0).wait(1).to({rotation:4.2473,x:142.55,y:204.15},0).wait(1).to({rotation:4.6334,x:143.05},0).wait(1).to({rotation:5.0195,x:143.5,y:204.1},0).wait(1).to({rotation:5.4056,x:144.05},0).wait(1).to({rotation:5.7917,x:144.5},0).wait(1).to({rotation:6.1778,x:145,y:204.05},0).wait(1).to({rotation:6.5639,x:145.45},0).wait(1).to({rotation:6.9501,x:145.95},0).wait(1).to({rotation:7.3362,x:146.4,y:204},0).wait(1).to({rotation:7.7223,x:146.9,y:204.1},0).wait(1).to({rotation:8.1084,x:147.35,y:204.05},0).wait(1).to({rotation:8.4945,x:147.9},0).wait(1).to({rotation:8.1084,x:147.35},0).wait(1).to({rotation:7.7223,x:146.9,y:204.1},0).wait(1).to({rotation:7.3362,x:146.4,y:204},0).wait(1).to({rotation:6.9501,x:145.95,y:204.05},0).wait(1).to({rotation:6.5639,x:145.45},0).wait(1).to({rotation:6.1778,x:145},0).wait(1).to({rotation:5.7917,x:144.5,y:204.1},0).wait(1).to({rotation:5.4056,x:144.05},0).wait(1).to({rotation:5.0195,x:143.5},0).wait(1).to({rotation:4.6334,x:143.05,y:204.15},0).wait(1).to({rotation:4.2473,x:142.55},0).wait(1).to({rotation:3.8611,x:142.05,y:204.2},0).wait(1).to({rotation:3.475,x:141.6},0).wait(1).to({rotation:3.0889,x:141.15,y:204.25},0).wait(1).to({rotation:2.7028,x:140.65},0).wait(1).to({rotation:2.3167,x:140.2,y:204.3},0).wait(1).to({rotation:1.9306,x:139.65,y:204.4},0).wait(1).to({rotation:1.5445,x:139.2},0).wait(1).to({rotation:1.1583,x:138.7,y:204.45},0).wait(1).to({rotation:0.7722,x:138.25,y:204.5},0).wait(1).to({rotation:0.3861,x:137.75,y:204.6},0).wait(1).to({rotation:0,x:137.3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(35.7,67.1,218.10000000000002,288.6);


(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol8();
	this.instance.setTransform(120.25,171.7,0.7605,0.7605,90,0,0,223.8,157.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:224.2,regY:146.2,scaleX:0.7606,scaleY:0.7606,x:129.05,y:172},0).wait(1).to({scaleX:0.7607,scaleY:0.7607,y:171.95},0).wait(1).to({scaleX:0.7608,scaleY:0.7608},0).wait(1).to({scaleX:0.7609,scaleY:0.7609,y:172},0).wait(1).to({scaleX:0.761,scaleY:0.761,y:171.95},0).wait(1).to({scaleX:0.7611,scaleY:0.7611,y:172},0).wait(1).to({scaleX:0.7612,scaleY:0.7612,y:171.95},0).wait(1).to({scaleX:0.7613,scaleY:0.7613,y:172},0).wait(1).to({scaleX:0.7614,scaleY:0.7614,y:171.95},0).wait(1).to({scaleX:0.7615,scaleY:0.7615,y:172},0).wait(1).to({scaleX:0.7616,scaleY:0.7616,y:171.95},0).wait(1).to({scaleX:0.7617,scaleY:0.7617,y:172},0).wait(1).to({scaleX:0.7618,scaleY:0.7618},0).wait(1).to({scaleX:0.7619,scaleY:0.7619,y:171.95},0).wait(1).to({scaleX:0.762,scaleY:0.762,y:172},0).wait(1).to({scaleX:0.7621,scaleY:0.7621,x:129.1,y:171.95},0).wait(1).to({scaleX:0.7622,scaleY:0.7622,x:129.05,y:172},0).wait(1).to({scaleX:0.7623,scaleY:0.7623,y:171.95},0).wait(1).to({scaleX:0.7624,scaleY:0.7624,x:129.1},0).wait(1).to({scaleX:0.7625,scaleY:0.7625,y:172},0).wait(1).to({scaleX:0.7626,scaleY:0.7626,x:129.05,y:171.95},0).wait(1).to({scaleX:0.7627,scaleY:0.7627,y:172},0).wait(1).to({x:129.1,y:171.95},0).wait(1).to({scaleX:0.7628,scaleY:0.7628},0).wait(1).to({scaleX:0.7629,scaleY:0.7629,x:129.05,y:172},0).wait(1).to({scaleX:0.763,scaleY:0.763,y:171.95},0).wait(1).to({scaleX:0.7631,scaleY:0.7631,x:129.1,y:172},0).wait(1).to({scaleX:0.7632,scaleY:0.7632,x:129.05,y:171.95},0).wait(1).to({scaleX:0.7633,scaleY:0.7633},0).wait(1).to({x:129.1,y:172},0).wait(1).to({scaleX:0.7634,scaleY:0.7634,y:171.95},0).wait(1).to({scaleX:0.7635,scaleY:0.7635},0).wait(1).to({scaleX:0.7636,scaleY:0.7636,x:129.05,y:172},0).wait(1).to({scaleX:0.7637,scaleY:0.7637,x:129.1,y:171.95},0).wait(1).to({y:172},0).wait(1).to({scaleX:0.7638,scaleY:0.7638},0).wait(1).to({scaleX:0.7637,scaleY:0.7637,y:171.95},0).wait(1).to({scaleX:0.7636,scaleY:0.7636,x:129.05,y:172},0).wait(1).to({scaleX:0.7635,scaleY:0.7635},0).wait(1).to({x:129.1,y:171.95},0).wait(1).to({scaleX:0.7634,scaleY:0.7634},0).wait(1).to({scaleX:0.7633,scaleY:0.7633,x:129.05,y:172},0).wait(1).to({y:171.95},0).wait(1).to({scaleX:0.7632,scaleY:0.7632},0).wait(1).to({scaleX:0.7631,scaleY:0.7631,x:129.1,y:172},0).wait(1).to({y:171.95},0).wait(1).to({scaleX:0.763,scaleY:0.763,x:129.05},0).wait(1).to({scaleX:0.7629,scaleY:0.7629,y:172},0).wait(2).to({scaleX:0.7628,scaleY:0.7628,x:129.1,y:171.95},0).wait(1).to({scaleX:0.7627,scaleY:0.7627},0).wait(1).to({x:129.05,y:172},0).wait(1).to({scaleX:0.7626,scaleY:0.7626},0).wait(1).to({y:171.95},0).wait(1).to({scaleX:0.7625,scaleY:0.7625},0).wait(1).to({scaleX:0.7624,scaleY:0.7624,x:129.1,y:172},0).wait(1).to({y:171.95},0).wait(1).to({scaleX:0.7623,scaleY:0.7623,x:129.05},0).wait(2).to({scaleX:0.7622,scaleY:0.7622,y:172},0).wait(2).to({scaleX:0.7621,scaleY:0.7621,x:129.1,y:171.95},0).wait(1).to({x:129.05},0).wait(1).to({scaleX:0.762,scaleY:0.762,y:172},0).wait(2).to({scaleX:0.7619,scaleY:0.7619,y:171.95},0).wait(2).to({scaleX:0.7618,scaleY:0.7618,y:172},0).wait(1).to({x:129.1},0).wait(1).to({scaleX:0.7617,scaleY:0.7617,x:129.05},0).wait(1).to({y:171.95},0).wait(1).to({scaleX:0.7616,scaleY:0.7616},0).wait(1).to({y:172},0).wait(1).to({scaleX:0.7615,scaleY:0.7615},0).wait(2).to({y:171.95},0).wait(1).to({scaleX:0.7614,scaleY:0.7614},0).wait(2).to({scaleX:0.7613,scaleY:0.7613,y:172},0).wait(2).to({y:171.95},0).wait(1).to({scaleX:0.7612,scaleY:0.7612},0).wait(3).to({scaleX:0.7611,scaleY:0.7611,y:172},0).wait(3).to({scaleX:0.761,scaleY:0.761,y:171.95},0).wait(4).to({scaleX:0.7609,scaleY:0.7609,y:172},0).wait(4).to({scaleX:0.7608,scaleY:0.7608},0).wait(1).to({y:171.95},0).wait(3).to({scaleX:0.7607,scaleY:0.7607},0).wait(2).to({y:172},0).wait(3).to({scaleX:0.7606,scaleY:0.7606},0).wait(4).to({y:171.95},0).wait(4).to({scaleX:0.7605,scaleY:0.7605},0).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21.4,-17.7,215.5,379.59999999999997);


(lib.Symbol17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgyAJQAUgLAfgNQAhgNAIAGIAkAWQgNgGgWgBQgdAAgpAQQgqARgDgBQgBAAgBAAQAAgBgBABQAAAAgBAAQAAAAgBAAQANgJAOgHg");
	this.shape.setTransform(21.8074,53.2431,1,1,0,-16.7391,163.2609);

	this.instance = new lib.Symbol3();
	this.instance.setTransform(23.5,15.2,0.2779,0.2779,-10.0767,0,0,78.5,41.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F1203").s().p("AiVFxIgPgbQhii+gUhfIgCgOQgEhRAHBhQAqmXA8gxQA0g4BFAKQBEAJBhA6QA/AmAuB4IiwifIh7gJIB5AfICyCJQAZBAAUBXQAnDNgXBdQgXBdABAnQABAmAfAiQhyhugdikQA4hEADgTQAEgTgBgSQAAgSgKggQgJghgBgYQgBgZhlgbQhlgciLh2QAjBKgpA0QgqA0ABBCQAABBAPAqQAQArAfAeQA4Cjg0B/QAIgngUgmgAhwk/QCEAeCLBvIA/CJQAaCpgMC8IAWiIIgklXQjJikhgAAQgVAAgQAIgAkFgPIA0DHQgoj0AyiDIAgi+QhBCbgdDTgAAPi1ICMAoIhwg4IiTg1g");
	this.shape_1.setTransform(32.3273,59.6196);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E1B04").s().p("ADzAAIg/iJQiLhviEgeQBagsD0DIIAkFXIgWCIQAMi7gaiqgADpheIAAAAIAAAAgAjwAZQAdjSBBibIggC+QgyCDAoD0gAkHBUIACAPQgehmAYirQA3i3A2ABQg8AxgqGXQgHhhAEBRgAAkiMIh3hEICTA0IBwA4IiMgogADtixIiyiJIh5gfIB7AJICwCfIAEADg");
	this.shape_2.setTransform(30.2293,55.4998);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFEDCC").s().p("AAAAAIAAAAIAAAAg");
	this.shape_3.setTransform(53.525,46.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgyAJQAUgLAfgNQAhgNAIAGIAkAWQgNgGgWgBQgdAAgpAQQgqARgDgBQgBAAgBAAQAAgBgBABQAAAAgBAAQAAAAgBAAQANgJAOgHg");
	this.shape_4.setTransform(42.349,50.3168,1,1,-2.4513);

	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(42.4,54.85,1,1,0,0,0,7.1,2.9);

	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(22.85,57.6,1,1,0,0,0,7,2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCCCC").s().p("AgIARIAJgnIAAAhIAIAMg");
	this.shape_5.setTransform(32.9,62.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#990000").ss(1,1,1,3,true).p("Ag6gFQAqgVAJAGQAIAGAJgIQAJgIAoANQgNAogmACQgiAFgggjQBDARAygd");
	this.shape_6.setTransform(34.8,73.0172);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC0000").s().p("Ag6gFIACABQAYAFAVAAIAAAAIABAAQAjAAAegQIABAAIAAAAIABgBIACgBQgNAognACIgHABQgeAAgcgfgAgLABQgVAAgYgFIgCgBQAqgVAJAGQAIAGAJgIQAJgIAoANIgCABIgBABIAAAAIgBAAQgeAQgjAAIgBAAIAAAAg");
	this.shape_7.setTransform(34.8,73.0172);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCCCC").s().p("AicAlIgBgGQAAgCAIgOQAHgNACgCIAFACQAAAAAAAAQAAABAAAAQAAABAAAAQABABAAABQAAAFgFAFIALgJQALgIADAAQABAAABABQABAAAAAAQABAAAAAAQABAAAAAAIABAGQAAAFgFAIIAAABIARgSQAOgMgBAOIAGgCQABgCAEAAQAEAAAAABIABAEQAAADgXAUIgFgBIgBgBIAAgDQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBIACgDIAAgBQgSAUgJAAIgEgBQgCgFADgNIAAgBIgLAOQgHAKgJAAgABEADIgBgFQAAgDAIgNQAHgNACgCIAFABQAAABAAAAQAAAAAAABQAAAAAAABQABABAAAAQAAAFgFAGIALgKQALgIADAAQABAAABAAQABAAAAAAQABABAAAAQABAAAAABIABAFQAAAFgFAIIAAABIARgSQAOgNgBAQIAFgDQACgBAEAAQAEAAAAABIABADQAAADgXAVIgFgBIgBgBIAAgEQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAIACgDIAAgCQgSAUgJAAIgEAAQgCgFADgNIAAgBIgLAOQgHAJgJAAg");
	this.shape_8.setTransform(33.95,63.6535);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFEBDD").s().p("AAJD1Qh7gkgigdQgzgigFgpQgFgpgBhAQAAhCApg0QAqg0gkhKQCMB2BpAaQBqAbACATQABASAGAKQAFAJAGAmQAGAmgIAbQgJAag7BJQhEA8g2AAIgHAAgAiLBPQgIAOAAACIABAGIAGABQAIAAAIgKIAKgOIABABQgDANABAFIAFABQAJAAASgUIAAABIgCADQAAABgBAAQAAAAAAABQAAABgBAAQAAABAAABIABADIABABIAEABQAYgUAAgDIgBgEQAAgBgFAAQgDAAgCACIgFACQABgPgOANIgRASIAAgBQAEgIAAgFIAAgGQAAAAgBgBQAAAAgBAAQAAgBgBAAQgBAAgBAAQgDAAgLAJIgLAJQAEgFAAgFQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAAAgBAAIgEgCQgCACgHANgABVAtQgIANAAADIABAGIAGABQAIAAAIgKIAKgOIABABQgDANABAFIAFABQAJAAASgVIAAACIgCADQAAAAgBAAQAAABAAABQAAAAgBABQAAAAAAABIABAEIABABIAEABQAYgVAAgDIgBgDQAAgBgFAAQgDAAgCABIgFADQABgQgOANIgRASIAAgBQAEgIAAgFIAAgFQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBAAgBAAQgDAAgLAIIgLAKQAEgGAAgFQAAgBAAAAQAAgBAAgBQAAAAAAAAQAAgBgBAAIgEgBQgCACgHANg");
	this.shape_9.setTransform(32.9617,57.2867);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,61,104.2), null);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC497").s().p("AgSA3IgMgHIgHgBQgGgCgFgFIgFgGIgBgIIABgQIAHgHQAKAAAGAFQADAIAMgiIAMgmQAAANgFANIgKAZIgGASQgDAIACANQACAMAJAGQAIAGAbgLQgDgOAJgWIADgFQAkAEgPAjQgGANgLgGQgHgDgFAFQgRADgKAAQgIAAgFgCgAAdAOQgHASACAMIAAAFQAFgEAGACQAJAGAFgLQAMgegagBIgCAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAABgBABgAgsAIIgFAGIgBALIABAHIAEAEQADAEAEABQADABAIAFQgDgOABgJQABgJgDgCIgHgEIgEgCIgCABg");
	this.shape.setTransform(23.7728,55.346);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AB8BWQgrgCghgGQgggGgKg1QgEgTAAgNQgRgGgQAEIgIAgQgPAzghAEQggADgrgCQgrgCgRgYQgSgZACggQAAgJADgGIADg8IAQAoQAHgEAKgCQAkgIA7AKQA7AJAKAEQAAAAABAAQAAAAABABQAAAAAAABQABAAAAAAIAkACQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABgBQAKgDA8gEQA7gEAkALQAOAFAJAHIAsglIAAAOIghAsIABAKQgCAigTAWQgRAWgmAAIgHAAgABPgdQgzADgIADQgJACAIArQAJAsAbAFQAcAFAlABQAkACAQgTQARgTABgdQABgbgfgIQgWgHggAAIgbABgAi9gnQgfAGgCAcQgBAcAPAUQAOAVAlABQAlACAcgDQAbgCANgsQAMgqgJgCQgJgDgygIQgbgEgWAAQgSAAgOACg");
	this.shape_1.setTransform(26.2691,46.0578);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("ABYAeQgTgVhFgJQhGgIgXAFQgWAEANgQQAMgRAogEQAogFAcAHQAcAGAgAQQAfAOgBAYQAAANgGAAQgFAAgJgJg");
	this.shape_2.setTransform(36.5955,41.2323,0.7819,0.7819,0,6.1963,-173.8037);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("ABYAeQgTgVhFgJQhGgIgXAFQgWAEANgQQAMgRAogEQAogFAcAHQAcAGAgAQQAfAOgBAYQAAANgGAAQgFAAgJgJg");
	this.shape_3.setTransform(14.1728,40.5185,0.782,0.782);

	this.instance = new lib.Symbol5();
	this.instance.setTransform(35.5,46.35,0.5901,0.5901,0,0,0,10.4,5);

	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(15.85,47,0.5901,0.5901,0,0,0,9.9,4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A91616").s().p("AgKAfQghgGgOgIQgNgIgKgeIAIAAQAaAAAkgLQAKANAQgMQARAJAwAMIAAABIAAAAQgFAVgbAMQgSAJgWAAQgJAAgKgCgAg8AAIAAAAIAFABIAHADIAAAAIAEABIAOADIAUABIALAGIAPgFQAOABAMgDIALgDIAEgBIAIgEIANgIQgJAFgbgCIgWgCIgTAHIgOgJIgSABIgbAAQgIABgGgFg");
	this.shape_4.setTransform(23.825,69.7291);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKAAIgUAAIgPgDIgDgBIBiACIgIACQgMABgOAAIgQAEg");
	this.shape_5.setTransform(23.875,70.6625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#491616").s().p("AgxAJIAAAAIgHgDIgFgCIAAgBQgQgHgCgGQAHAEAQACIAYABIASgBIAOAHIATgFIAXACQAeABAIgFQgKAIgNAFIgBAAIgEABIgDABg");
	this.shape_6.setTransform(23.9125,69.2625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCCCC").s().p("ABQAcIAAAAIgHgCIAAgHIAEgIIABgBIAEgHQAJgNADgCIAFACQAAABAAAAQAAAAABABQAAAAAAABQAAABAAABQgBAFgFAFIANgIQAMgJAEAAQAEABABACIAAAGQAAAFgGAIIAAACIAVgSQAQgNgCARIAGgCQADgCADABQAFAAAAABIABAEQAAADgdAUIgEgCIgCgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBIACgFIADgDIgBgBQgVAVgKgBIgFgCQgBgGAEgOIAAgBIgNAPQgIAJgJAAIgBAAgAinANIgHgCIAAgHQAAgDAKgNQAJgNADgCIAEACQABAAAAABQAAAAAAAAQAAABAAABQAAAAAAABQAAAGgGAGIANgKQANgIAEAAQAEAAABADIAAAGQgBAGgGAIIAAABIAVgSQARgNgCARIAFgCQADgCADAAQAGABgBABIABAEIAAABQgBADgIAGIgUANIgEgCIgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAgBAAgBIACgEIAEgDIgBgBQgVATgKAAIgGgCQgBgGAFgNIgBgBIgNANQgIAKgIAAIgCAAg");
	this.shape_7.setTransform(25.275,56.8022);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFD6B6").s().p("ADggBIAAgrQAVgGAGAfQAHAfgkAiIACgvgAj7gXQACgYAHADIACAnIAAAXQgNAAACgpg");
	this.shape_8.setTransform(27.4365,46.552);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE5D1").s().p("Ah4EXQh2h9gFhHIAAAAIAAgPIAAhCQgegBAEhEQAEg8ASAWIAEgnQABgfANgiQAWACBXghQhhA+ATAQICchHQhfA/ARAIQCghAB0hLQAOBzAzAvIAAAsQAlgZAMAlQAEAjgUAwQgGAfgbgPIgCAAIgLArIAAAAIgeBsQgKAkiEBMQg5AXgnAAQgnAAgVgXgAA6BBIgFAHIgBACIgEAIIAAAHIAHABIABAAQAIABAJgKIANgPIABABQgFAOABAGIAGACQAKABAVgVIABACIgEADIgCAEQAAABAAABQAAABAAAAQAAABAAAAQAAAAABABIABABIAEABQAdgUAAgDIgBgFQABgBgGAAQgDgBgDACIgFACQACgQgRANIgVASIAAgBQAGgJABgGIAAgFQgBgDgEgBQgEAAgNAJIgNAJQAGgGAAgFQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAAAAAgBIgEgCQgDACgJAOgAi9AxQgJAOAAADIAAAHIAHACQAJABAJgLIANgOIAAACQgEANABAHIAFABQAKABAVgVIABACIgDACIgCAGQgBAAAAABQAAABAAAAQAAABABAAQAAAAAAAAIACABIAEACIATgOQAIgGABgDIABAAIgBgFQAAgBgFgBQgDAAgDACIgGACQACgQgQAMIgVASIAAgBQAGgIAAgFIAAgHQgBgCgEAAQgEAAgMAHIgNAKQAFgGABgGQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAAAIgFgDQgDACgJANgADdhVIAAAsIgCAuQAkgggHggQgFgagQAAIgGAAgAj+g/QgCAqANgBIAAgXIgCgoIgCAAQgGAAgBAWg");
	this.shape_9.setTransform(27.7467,50.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgIBkIicBHQgTgPBhg/QhXAigWgCQgTgDAcgdQADgKgfAHQgfAHAigZQAhgbhAAMQA7gzg7AfQAxg7A0goIg2AAQBRguBBgJIAHgDIgsgVQBZgdA2AdIgegdQCHAMBRBPQgVBWggAaQh0BLigA/QgRgHBfhAgAg4AeIhiA/ICShHgABUAPIhpBBICphQgAhvgRIhCAsIB7g8gABUgRIB9gkIAAgUgAAng6IhQApICOgtgAhghJIBiAAIgKgRgACfhcIgtgUIhZgFg");
	this.shape_10.setTransform(24.325,17.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4D4D4D").s().p("AhIAqIAxgIIiTBIgABEAbIBAgPIipBQgAh/gEIA5gRIh6A8gADCg8IAAATIh9AlgAAYgtIA9gFIiNAtgAhwg8IBZgSIAKASgAAJhpIBZAFIAtAUg");
	this.shape_11.setTransform(25.9,15.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgngYQAggZAUhYQATA0AHBNQAHBMgVBGQgygwgOhyg");
	this.shape_12.setTransform(47.3393,22.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_1},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,54.8,80.8), null);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(105.35,237.8,2.9071,2.9071,-4.4877,0,0,29.7,80.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:27.4,regY:40.4,scaleX:2.9072,scaleY:2.9072,rotation:-4.8306,x:88.9,y:122.5},0).wait(1).to({scaleX:2.9071,scaleY:2.9071,rotation:-5.1733,x:88.25,y:122.55},0).wait(1).to({rotation:-5.5159,x:87.6,y:122.7},0).wait(1).to({rotation:-5.8585,x:86.9,y:122.8},0).wait(1).to({rotation:-6.2012,x:86.2,y:122.9},0).wait(1).to({rotation:-6.5438,x:85.5,y:123},0).wait(1).to({rotation:-6.8864,x:84.85,y:123.15},0).wait(1).to({rotation:-7.2291,x:84.1,y:123.25},0).wait(1).to({scaleX:2.9072,scaleY:2.9072,rotation:-7.5717,x:83.45,y:123.35},0).wait(1).to({scaleX:2.9071,scaleY:2.9071,rotation:-7.9143,x:82.75,y:123.55},0).wait(1).to({rotation:-8.257,x:82.1,y:123.65},0).wait(1).to({rotation:-8.5996,x:81.35,y:123.85},0).wait(1).to({rotation:-8.9422,x:80.7,y:123.9},0).wait(1).to({rotation:-9.2849,x:80,y:124.1},0).wait(1).to({rotation:-9.6275,x:79.35,y:124.3},0).wait(1).to({rotation:-9.9701,x:78.7,y:124.4},0).wait(1).to({rotation:-10.3128,x:78,y:124.6},0).wait(1).to({rotation:-10.6554,x:77.3,y:124.7},0).wait(1).to({rotation:-10.998,x:76.65,y:124.9},0).wait(1).to({rotation:-11.3407,x:75.95,y:125.1},0).wait(1).to({rotation:-11.6833,x:75.3,y:125.25},0).wait(1).to({rotation:-11.3705,x:75.9,y:125.1},0).wait(1).to({rotation:-11.0576,x:76.55,y:124.9},0).wait(1).to({rotation:-10.7448,x:77.15,y:124.8},0).wait(1).to({rotation:-10.4319,x:77.75,y:124.65},0).wait(1).to({scaleX:2.9072,scaleY:2.9072,rotation:-10.1191,x:78.4,y:124.45},0).wait(1).to({scaleX:2.9071,scaleY:2.9071,rotation:-9.8063,x:79,y:124.35},0).wait(1).to({rotation:-9.4934,x:79.6,y:124.2},0).wait(1).to({scaleX:2.9072,scaleY:2.9072,rotation:-9.1806,x:80.25,y:124.05},0).wait(1).to({scaleX:2.9071,scaleY:2.9071,rotation:-8.8678,x:80.85,y:123.9},0).wait(1).to({scaleX:2.9072,scaleY:2.9072,rotation:-8.5549,x:81.45,y:123.8},0).wait(1).to({scaleX:2.9071,scaleY:2.9071,rotation:-8.2421,x:82.15,y:123.7},0).wait(1).to({rotation:-7.9292,x:82.75,y:123.5},0).wait(1).to({scaleX:2.9072,scaleY:2.9072,rotation:-7.6164,x:83.35,y:123.4},0).wait(1).to({scaleX:2.9071,scaleY:2.9071,rotation:-7.3036,x:84,y:123.25},0).wait(1).to({rotation:-6.9907,x:84.6,y:123.15},0).wait(1).to({rotation:-6.6779,x:85.2,y:123.1},0).wait(1).to({rotation:-6.365,x:85.8,y:122.9},0).wait(1).to({rotation:-6.0522,x:86.5,y:122.85},0).wait(1).to({scaleX:2.9072,scaleY:2.9072,rotation:-5.7394,x:87.1,y:122.75},0).wait(1).to({scaleX:2.9071,scaleY:2.9071,rotation:-5.4265,x:87.75,y:122.6},0).wait(1).to({rotation:-5.1137,x:88.35},0).wait(1).to({rotation:-4.8008,x:89,y:122.5},0).wait(1).to({rotation:-4.488,x:89.55,y:122.35},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.1,-0.9,192.29999999999998,246.6);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.leaf = new lib.Symbol12();
	this.leaf.name = "leaf";
	this.leaf.setTransform(5,3.6,1,1,0,0,0,5,3.6);

	this.timeline.addTween(cjs.Tween.get(this.leaf).wait(1).to({regY:3.7,rotation:12.4138,y:3.7},0).wait(1).to({rotation:24.8276,x:4.95},0).wait(1).to({rotation:37.2414,y:3.75},0).wait(1).to({rotation:49.6552,y:3.7},0).wait(1).to({rotation:62.069},0).wait(1).to({rotation:74.4828},0).wait(1).to({rotation:86.8966,x:4.9},0).wait(1).to({rotation:99.3103,x:4.95},0).wait(1).to({rotation:111.7241,x:4.9,y:3.65},0).wait(1).to({rotation:124.1379,x:4.95,y:3.6},0).wait(1).to({rotation:136.5517,x:4.9},0).wait(1).to({rotation:148.9655,x:4.95},0).wait(1).to({rotation:161.3793},0).wait(1).to({rotation:173.7931,x:5,y:3.55},0).wait(1).to({rotation:186.2069},0).wait(1).to({rotation:198.6207,y:3.6},0).wait(1).to({rotation:211.0345},0).wait(1).to({rotation:223.4483,y:3.55},0).wait(1).to({rotation:235.8621},0).wait(1).to({rotation:248.2759,x:5.05,y:3.6},0).wait(1).to({rotation:260.6897},0).wait(1).to({rotation:273.1034,x:5},0).wait(1).to({rotation:285.5172,y:3.65},0).wait(1).to({rotation:297.931,x:5.05,y:3.7},0).wait(1).to({rotation:310.3448,y:3.65},0).wait(1).to({rotation:322.7586,x:5.1},0).wait(1).to({rotation:335.1724,x:5.05},0).wait(1).to({rotation:347.5862,y:3.7},0).wait(1).to({rotation:360,x:5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-1.7,10.600000000000001,10.7);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol11();
	this.instance.setTransform(5,3.6,1,1,0,0,0,5,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:6.6,y:5.4},0).wait(1).to({x:8.5,y:7.1},0).wait(1).to({x:10.6,y:8.55},0).wait(1).to({x:12.8,y:9.75},0).wait(1).to({x:15.15,y:10.6},0).wait(1).to({x:17.65,y:10.85},0).wait(1).to({x:20.1,y:10.65},0).wait(1).to({x:22.6,y:10.1},0).wait(1).to({x:24.85,y:9.1},0).wait(1).to({x:26.7,y:7.4},0).wait(1).to({x:28.4,y:5.45},0).wait(1).to({x:30,y:3.6},0).wait(1).to({x:27.95,y:5.1},0).wait(1).to({x:25.9,y:6.55},0).wait(1).to({x:23.8,y:7.85},0).wait(1).to({x:21.6,y:9},0).wait(1).to({x:19.25,y:9.95},0).wait(1).to({x:16.85,y:10.6},0).wait(1).to({x:14.35,y:10.8},0).wait(1).to({x:11.85,y:10.45},0).wait(1).to({x:9.6,y:9.4},0).wait(1).to({x:7.7,y:7.75},0).wait(1).to({x:6.15,y:5.8},0).wait(1).to({x:5,y:3.6},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,14.6);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol10();
	this.instance.setTransform(3.1,4.75,1,1,0,0,0,5,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:17.5,regY:7.3,x:11.1,y:13.55,alpha:0.9881},0).wait(1).to({x:6.55,y:18.6,alpha:0.9764},0).wait(1).to({x:1.85,y:23.6,alpha:0.9648},0).wait(1).to({x:-2.9,y:28.5,alpha:0.9533},0).wait(1).to({x:-7.75,y:33.4,alpha:0.9419},0).wait(1).to({x:-12.7,y:38.2,alpha:0.9307},0).wait(1).to({x:-17.7,y:42.95,alpha:0.9195},0).wait(1).to({x:-22.75,y:47.65,alpha:0.9085},0).wait(1).to({x:-27.85,y:52.3,alpha:0.8976},0).wait(1).to({x:-33.05,y:56.9,alpha:0.8868},0).wait(1).to({x:-38.25,y:61.4,alpha:0.8762},0).wait(1).to({x:-43.55,y:65.9,alpha:0.8656},0).wait(1).to({x:-48.9,y:70.3,alpha:0.8552},0).wait(1).to({x:-54.25,y:74.65,alpha:0.8449},0).wait(1).to({x:-59.7,y:78.95,alpha:0.8348},0).wait(1).to({x:-65.15,y:83.2,alpha:0.8247},0).wait(1).to({x:-70.6,y:87.4,alpha:0.8148},0).wait(1).to({x:-76.15,y:91.5,alpha:0.805},0).wait(1).to({x:-81.65,y:95.6,alpha:0.7953},0).wait(1).to({x:-87.25,y:99.6,alpha:0.7857},0).wait(1).to({x:-92.8,y:103.55,alpha:0.7762},0).wait(1).to({x:-98.4,y:107.5,alpha:0.7669},0).wait(1).to({x:-104.05,y:111.35,alpha:0.7577},0).wait(1).to({x:-109.65,y:115.15,alpha:0.7486},0).wait(1).to({x:-115.25,y:118.9,alpha:0.7396},0).wait(1).to({x:-120.9,y:122.55,alpha:0.7308},0).wait(1).to({x:-126.55,y:126.2,alpha:0.7221},0).wait(1).to({x:-132.15,y:129.8,alpha:0.7135},0).wait(1).to({x:-137.75,y:133.3,alpha:0.705},0).wait(1).to({x:-143.4,y:136.8,alpha:0.6966},0).wait(1).to({x:-148.95,y:140.2,alpha:0.6884},0).wait(1).to({x:-154.55,y:143.6,alpha:0.6802},0).wait(1).to({x:-160.1,y:146.9,alpha:0.6722},0).wait(1).to({x:-165.65,y:150.15,alpha:0.6643},0).wait(1).to({x:-171.15,y:153.35,alpha:0.6566},0).wait(1).to({x:-176.65,y:156.5,alpha:0.6489},0).wait(1).to({x:-182.1,y:159.6,alpha:0.6414},0).wait(1).to({x:-187.55,y:162.65,alpha:0.634},0).wait(1).to({x:-192.95,y:165.65,alpha:0.6267},0).wait(1).to({x:-198.3,y:168.6,alpha:0.6196},0).wait(1).to({x:-203.6,y:171.5,alpha:0.6125},0).wait(1).to({x:-208.85,y:174.35,alpha:0.6056},0).wait(1).to({x:-214.1,y:177.15,alpha:0.5988},0).wait(1).to({x:-219.25,y:179.9,alpha:0.5921},0).wait(1).to({x:-224.4,y:182.55,alpha:0.5855},0).wait(1).to({x:-229.45,y:185.2,alpha:0.5791},0).wait(1).to({x:-234.5,y:187.8,alpha:0.5728},0).wait(1).to({x:-239.45,y:190.3,alpha:0.5666},0).wait(1).to({x:-244.35,y:192.8,alpha:0.5605},0).wait(1).to({x:-249.2,y:195.25,alpha:0.5545},0).wait(1).to({x:-253.95,y:197.6,alpha:0.5487},0).wait(1).to({x:-258.7,y:199.95,alpha:0.543},0).wait(1).to({x:-263.3,y:202.2,alpha:0.5374},0).wait(1).to({x:-267.9,y:204.45,alpha:0.5319},0).wait(1).to({x:-272.4,y:206.6,alpha:0.5265},0).wait(1).to({x:-276.85,y:208.75,alpha:0.5213},0).wait(1).to({x:-281.2,y:210.8,alpha:0.5162},0).wait(1).to({x:-285.45,y:212.85,alpha:0.5112},0).wait(1).to({x:-289.65,y:214.85,alpha:0.5063},0).wait(1).to({x:-293.8,y:216.75,alpha:0.5016},0).wait(1).to({x:-297.8,y:218.65,alpha:0.4969},0).wait(1).to({x:-301.75,y:220.45,alpha:0.4924},0).wait(1).to({x:-305.65,y:222.25,alpha:0.488},0).wait(1).to({x:-309.4,y:223.95,alpha:0.4837},0).wait(1).to({x:-313.1,y:225.65,alpha:0.4796},0).wait(1).to({x:-316.7,y:227.25,alpha:0.4756},0).wait(1).to({x:-320.2,y:228.85,alpha:0.4716},0).wait(1).to({x:-323.6,y:230.35,alpha:0.4679},0).wait(1).to({x:-326.95,y:231.85,alpha:0.4642},0).wait(1).to({x:-330.15,y:233.3,alpha:0.4606},0).wait(1).to({x:-333.3,y:234.65,alpha:0.4572},0).wait(1).to({x:-336.3,y:236,alpha:0.4539},0).wait(1).to({x:-339.25,y:237.3,alpha:0.4507},0).wait(1).to({x:-342.05,y:238.5,alpha:0.4476},0).wait(1).to({x:-344.8,y:239.7,alpha:0.4447},0).wait(1).to({x:-347.4,y:240.85,alpha:0.4418},0).wait(1).to({x:-349.95,y:241.95,alpha:0.4391},0).wait(1).to({x:-352.35,y:243,alpha:0.4365},0).wait(1).to({x:-354.65,y:243.95,alpha:0.4341},0).wait(1).to({x:-356.85,y:244.9,alpha:0.4317},0).wait(1).to({x:-358.95,y:245.8,alpha:0.4295},0).wait(1).to({x:-360.9,y:246.65,alpha:0.4274},0).wait(1).to({x:-362.8,y:247.45,alpha:0.4254},0).wait(1).to({x:-364.55,y:248.2,alpha:0.4235},0).wait(1).to({x:-366.2,y:248.9,alpha:0.4218},0).wait(1).to({x:-367.75,y:249.55,alpha:0.4202},0).wait(1).to({x:-369.2,y:250.15,alpha:0.4187},0).wait(1).to({x:-370.5,y:250.7,alpha:0.4173},0).wait(1).to({x:-371.7,y:251.2,alpha:0.416},0).wait(1).to({x:-372.8,y:251.65,alpha:0.4149},0).wait(1).to({x:-373.8,y:252.1,alpha:0.4139},0).wait(1).to({x:-374.65,y:252.45,alpha:0.413},0).wait(1).to({x:-375.4,y:252.75,alpha:0.4122},0).wait(1).to({x:-376.05,y:253,alpha:0.4115},0).wait(1).to({x:-376.55,y:253.25,alpha:0.411},0).wait(1).to({x:-376.95,y:253.4,alpha:0.4105},0).wait(1).to({x:-377.25,y:253.55,alpha:0.4102},0).wait(1).to({x:-377.4,y:253.6,alpha:0.4101},0).wait(1).to({x:-377.5,y:253.65,alpha:0.41},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-395,1.2,403.1,252.5);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(30,80,1,1,0,0,0,30,80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:27.4,regY:40.4,rotation:-0.3212,x:27.25,y:40.4},0).wait(1).to({rotation:-0.6425,x:27},0).wait(1).to({rotation:-0.9637,x:26.8,y:40.45},0).wait(1).to({rotation:-1.285,x:26.55},0).wait(1).to({rotation:-1.6062,x:26.35,y:40.5},0).wait(1).to({rotation:-1.9275,x:26.1,y:40.55},0).wait(1).to({rotation:-2.2487,x:25.9,y:40.5},0).wait(1).to({rotation:-2.57,x:25.6},0).wait(1).to({rotation:-2.8912,x:25.45,y:40.55},0).wait(1).to({rotation:-3.2125,x:25.2,y:40.6},0).wait(1).to({rotation:-3.5337,x:25},0).wait(1).to({rotation:-3.855,x:24.75},0).wait(1).to({rotation:-4.1762,x:24.6,y:40.65},0).wait(1).to({rotation:-4.4975,x:24.3,y:40.7},0).wait(1).to({rotation:-4.8187,x:24.1,y:40.75},0).wait(1).to({rotation:-5.14,x:23.9,y:40.8},0).wait(1).to({rotation:-5.4612,x:23.7},0).wait(1).to({rotation:-5.7825,x:23.4,y:40.85},0).wait(1).to({rotation:-6.1037,x:23.25},0).wait(1).to({rotation:-6.425,x:23,y:40.95},0).wait(1).to({rotation:-6.1573,x:23.2,y:40.85},0).wait(1).to({rotation:-5.8896,x:23.35,y:40.9},0).wait(1).to({rotation:-5.6219,x:23.55,y:40.8},0).wait(1).to({rotation:-5.3542,x:23.75,y:40.75},0).wait(1).to({rotation:-5.0865,x:23.95},0).wait(1).to({rotation:-4.8187,x:24.1},0).wait(1).to({rotation:-4.551,x:24.25,y:40.7},0).wait(1).to({rotation:-4.2833,x:24.45},0).wait(1).to({rotation:-4.0156,x:24.7,y:40.65},0).wait(1).to({rotation:-3.7479,x:24.85,y:40.6},0).wait(1).to({rotation:-3.4802,x:25,y:40.65},0).wait(1).to({rotation:-3.2125,x:25.2,y:40.6},0).wait(1).to({rotation:-2.9448,x:25.35,y:40.55},0).wait(1).to({rotation:-2.6771,x:25.55,y:40.5},0).wait(1).to({rotation:-2.4094,x:25.8},0).wait(1).to({rotation:-2.1417,x:25.95},0).wait(1).to({rotation:-1.874,x:26.1},0).wait(1).to({rotation:-1.6062,x:26.35},0).wait(1).to({rotation:-1.3385,x:26.5,y:40.45},0).wait(1).to({rotation:-1.0708,x:26.7},0).wait(1).to({rotation:-0.8031,x:26.85,y:40.4},0).wait(1).to({rotation:-0.5354,x:27.1},0).wait(1).to({rotation:-0.2677,x:27.25,y:40.35},0).wait(1).to({rotation:0,x:27.4,y:40.4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,0,61.199999999999996,81.9);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol17();
	this.instance.setTransform(35.1,83.1,1,1,0,0,0,36.1,80.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:30.5,regY:52.1,rotation:0.4862,x:29.75,y:54.4},0).wait(1).to({rotation:0.9725,x:29.95,y:54.35},0).wait(1).to({rotation:1.4587,x:30.2,y:54.4},0).wait(1).to({rotation:1.945,x:30.5,y:54.3},0).wait(1).to({rotation:2.4312,x:30.7,y:54.25},0).wait(1).to({rotation:2.9174,x:30.95},0).wait(1).to({rotation:3.4037,x:31.2,y:54.15},0).wait(1).to({rotation:3.8899,x:31.45},0).wait(1).to({rotation:4.3762,x:31.7,y:54.2},0).wait(1).to({rotation:4.8624,x:31.95,y:54.15},0).wait(1).to({rotation:5.3487,x:32.15,y:54.1},0).wait(1).to({rotation:5.8349,x:32.4},0).wait(1).to({rotation:6.3211,x:32.65},0).wait(1).to({rotation:6.8074,x:32.9,y:54.05},0).wait(1).to({rotation:7.2936,x:33.15},0).wait(1).to({rotation:7.7799,x:33.4},0).wait(1).to({rotation:8.2661,x:33.65,y:54},0).wait(1).to({rotation:8.7523,x:33.85},0).wait(1).to({rotation:9.2386,x:34.15},0).wait(1).to({rotation:9.7248,x:34.4},0).wait(1).to({rotation:10.2111,x:34.6,y:53.95},0).wait(1).to({rotation:10.6973,x:34.9,y:54},0).wait(1).to({rotation:10.2111,x:34.6,y:53.95},0).wait(1).to({rotation:9.7248,x:34.4,y:54},0).wait(1).to({rotation:9.2386,x:34.15},0).wait(1).to({rotation:8.7523,x:33.85},0).wait(1).to({rotation:8.2661,x:33.65},0).wait(1).to({rotation:7.7799,x:33.4,y:54.05},0).wait(1).to({rotation:7.2936,x:33.15},0).wait(1).to({rotation:6.8074,x:32.9},0).wait(1).to({rotation:6.3211,x:32.65,y:54.1},0).wait(1).to({rotation:5.8349,x:32.4},0).wait(1).to({rotation:5.3487,x:32.15},0).wait(1).to({rotation:4.8624,x:31.95,y:54.15},0).wait(1).to({rotation:4.3762,x:31.7,y:54.2},0).wait(1).to({rotation:3.8899,x:31.45,y:54.15},0).wait(1).to({rotation:3.4037,x:31.2},0).wait(1).to({rotation:2.9174,x:30.95,y:54.25},0).wait(1).to({rotation:2.4312,x:30.7},0).wait(1).to({rotation:1.945,x:30.5,y:54.3},0).wait(1).to({rotation:1.4587,x:30.2,y:54.4},0).wait(1).to({rotation:0.9725,x:29.95,y:54.35},0).wait(1).to({rotation:0.4862,x:29.75,y:54.4},0).wait(1).to({rotation:0,x:29.5,y:54.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,2.4,63.2,107.5);


(lib.Symbol31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer_1
	this.instance = new lib.Symbol29();
	this.instance.setTransform(98.95,59.85,3.5976,3.5976,0,0,0,27.5,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Symbol_29
	this.instance_1 = new lib.Symbol29();
	this.instance_1.setTransform(-80.05,500.3,4.0093,4.0093,0,0,0,27.5,25.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(16));

	// Symbol_29
	this.instance_2 = new lib.Symbol29();
	this.instance_2.setTransform(1.35,281.05,3.2358,3.2358,0,0,0,27.6,25.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).wait(13));

	// Symbol_29
	this.instance_3 = new lib.Symbol29();
	this.instance_3.setTransform(290.15,280.15,3.2,3.2,0,0,0,27.6,25.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).wait(9));

	// Symbol_29
	this.instance_4 = new lib.Symbol29();
	this.instance_4.setTransform(190,390,2.4048,2.4048,0,0,0,27.6,25.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(5));

	// Symbol_29
	this.instance_5 = new lib.Symbol29();
	this.instance_5.setTransform(-175.65,130.15,3.2,3.2,0,0,0,27.6,25.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-263.9,-29.7,641.8,629.8000000000001);


(lib.Symbol21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol14();
	this.instance.setTransform(88,123.85,1,1,0,0,0,88.6,123.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.4,-0.3,177.2,246.60000000000002);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_54 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(1));

	// Symbol_9
	this.instance = new lib.Symbol9();
	this.instance.setTransform(176.25,79.95,1,1,1.009,0,0,4.2,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55));

	// Symbol_9
	this.instance_1 = new lib.Symbol9();
	this.instance_1.setTransform(150.3,152.55,1,1,-5.2118,0,0,4.2,4.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).wait(41));

	// Symbol_9
	this.instance_2 = new lib.Symbol9();
	this.instance_2.setTransform(139.85,-25.7,1,1,-4.2021,0,0,4.3,4.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).wait(32));

	// Symbol_9
	this.instance_3 = new lib.Symbol9();
	this.instance_3.setTransform(118.65,60.85,1,1,-7.2081,0,0,4.2,4.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(31).to({_off:false},0).wait(24));

	// Symbol_9
	this.instance_4 = new lib.Symbol9();
	this.instance_4.setTransform(48.05,80.65,1,1,-12.419,0,0,4.2,4.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(43).to({_off:false},0).wait(12));

	// Symbol_9
	this.instance_5 = new lib.Symbol9();
	this.instance_5.setTransform(30.8,5.45,1,1,-7.2081,0,0,4.2,4.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(54).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24.4,-29.3,155.79999999999998,186.3);


(lib.Symbol32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(1));

	// Layer_3
	this.instance = new lib.Symbol31();
	this.instance.setTransform(-30,500,0.7848,0.7848,0,0,0,88.1,80.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).wait(1));

	// Symbol_31
	this.instance_1 = new lib.Symbol31();
	this.instance_1.setTransform(125.35,416.35,0.5613,0.5613,0,0,0,88.2,80.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(3));

	// Layer_2
	this.instance_2 = new lib.Symbol31();
	this.instance_2.setTransform(319.3,392.9,0.894,0.894,0,0,0,88,80);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).wait(7));

	// Layer_1
	this.instance_3 = new lib.Symbol31();
	this.instance_3.setTransform(110.15,191.05,1,1,0,0,0,88,80);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.1,81.3,516.6,473.7);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_33 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(33).call(this.frame_33).wait(1));

	// Layer_1
	this.instance = new lib.Symbol13();
	this.instance.setTransform(-25.45,36.8,1,1,0,0,0,138.4,113.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34));

	// Symbol_13
	this.instance_1 = new lib.Symbol13();
	this.instance_1.setTransform(104.4,163.05,1,1,0,0,0,138.4,113.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).wait(26));

	// Symbol_13
	this.instance_2 = new lib.Symbol13();
	this.instance_2.setTransform(-20.5,133.05,1,1,0,0,0,138.4,113.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).wait(14));

	// Symbol_13
	this.instance_3 = new lib.Symbol13();
	this.instance_3.setTransform(109.5,33.05,1,1,0,0,0,138.4,113.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).wait(5));

	// Symbol_13
	this.instance_4 = new lib.Symbol13();
	this.instance_4.setTransform(48.6,93.05,1,1,0,0,0,138.4,113.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(33).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.2,-3.7,145.10000000000002,137.5);


// stage content:
(lib.Doodle01_E = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		
		this.button.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
				this.button.visible = false
			this.envelope.gotoAndStop(1);
			this.fing.visible = false
			// End your custom code
		}
	}
	this.frame_1 = function() {
		this.stop();
		
		
		this.button2.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			var frameNumber = this.currentFrame;
			this.hearts.gotoAndPlay(1);
			if(frameNumber == 2){
				
				this.gotoAndStop(1);			
				
				}
			if(frameNumber == 1){
				
				this.gotoAndStop(2);
				
				}
			
		}
		
		/*createjs.Sound.registerSound("./sounds/bg_music.mp3","soung1ID");
		createjs.Sound.play("soung1ID"); */
		
		
		
		//this.audio1.paused = true; // pause     
		//this.audio1.paused = false; // resume
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2));

	// Button
	this.button = new lib.Symbol41();
	this.button.name = "button";
	this.button.setTransform(299.9,524.95,1.1802,2.5553,0,0,0,313.7,244.6);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.Symbol41(), 3);

	this.button2 = new lib.Symbol41();
	this.button2.name = "button2";
	this.button2.setTransform(299.9,524.9,1.1802,2.5553,0,0,0,313.7,244.6);
	new cjs.ButtonHelper(this.button2, 0, 1, 2, false, new lib.Symbol41(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button}]}).to({state:[{t:this.button2}]},1).wait(2));

	// Finger
	this.fing = new lib.Symbol47();
	this.fing.name = "fing";
	this.fing.setTransform(377.75,613.1,1,1,0,0,0,54.8,44.4);

	this.timeline.addTween(cjs.Tween.get(this.fing).to({_off:true},1).wait(2));

	// words_CN
	this.envelope = new lib.Symbol35();
	this.envelope.name = "envelope";
	this.envelope.setTransform(319.4,525.6,1,1,0,0,0,279.6,159.8);

	this.timeline.addTween(cjs.Tween.get(this.envelope).to({_off:true},1).wait(2));
	this.envelope.addEventListener("tick", AdobeAn.handleFilterCache);

	// Layer_5
	this.hearts = new lib.Symbol32();
	this.hearts.name = "hearts";
	this.hearts.setTransform(332.25,663.95,0.6934,0.6934,0,0,0,122.2,-688.4);
	this.hearts._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hearts).wait(1).to({_off:false},0).wait(2));

	// leaf
	this.movieClip_1 = new lib.Symbol15();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(863.85,-78.4,3.1783,3.1783,0,0,0,-7.6,18.4);
	this.movieClip_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1).to({_off:false},0).wait(2));

	// Flower
	this.instance = new lib.Symbol25();
	this.instance.setTransform(-19.25,1038.05,0.5947,0.5947,0,9.6934,-170.3066,348.6,252.2);

	this.instance_1 = new lib.Symbol25();
	this.instance_1.setTransform(475.75,1016.15,1,1,0,0,0,174.2,126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},2).wait(1));

	// emojis
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAA4QAAgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAIAAgCIABgDIAAgDIACgFIAAgBIAAgGIgBgCIAGgKIgFgDIAAgDIACgDIgBgFIgCAAIAAAAIAAgCIgBgCIgEAAIgGABIgDgBIgCAAIgDAAIgDABIgCgEIgDADIgCABIgGgBIgCgCIgEADIgBAAIgEAAIgDAAIgCAAIgCAAIgBAAIgGAAIABgEIACgBIAEgDIACgBIAEgDIACgBIAFgDIAEgCIADgDIAEgCIAEgDIAEgCIAEgEIACgBIACgDIACgCIADgEIACgEIACgCIABgBQAAAAAAgBQABAAAAAAQABgBAAAAQAAgBABgBIABgCIAEgFQABgCADAAIADABIgBABIABACIAAADIABAEIAAACIgBAEIABADIgBACIAAAEIgBACIACAGIgBAIIgCAHIACAEIADAAIABABIADgCIABAAIADABIACAAIAEgBIADAAIAJgCIAFgBIACABQAAgBABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAACgEACIgEADIAAACIgCABIgDABIgCAAIAAAAQgCAAgDgCIgDgCIgFACIgGACIgFgBIAAAAIgCACIgBAFIAAAIIAAAFIAAADIgCABIABACIgBABIAAABIACACIABAHIABACIAAACIAAAFIAAACIgBAAIgBACIgDACIgDACIgDABQgCADgCAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBgAgKgEIACACIACAAIACACIABAAIACgDIABAAIABAAIACgBIAAgBIADAAIABgGIgBgGIACgDIABgCIgCgDIgCgEIAAgFQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBABQAAAAAAABQgCABgCACIgGAHIgCABIgJAIIgDACIgGAGQgBAAAAABQAAABgBAAQAAABAAAAQAAABAAAAIABACIAEgFIAFABIADAAIAFABIAAAAIADgBg");
	this.shape.setTransform(439.325,959.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAbA4IgDAAIgGgBIgDAAIgBAAIgEAAIgDAAIgEgBIgDAAIgCABIgDgBIgDAAIgCgCIgBABIgBgBIgBABIAAABIgBAAIgBAAIgBAAIgCAAIgDAAIAAgDIgDAAIAAACIgBABIgBAAIgFABIgFABIgFAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIABgCIADgCQAAAAAAAAQAAgBABAAQABAAAAAAQABAAABgBIACgDIADgCIABgCIACAAIgBgDIAJgJIACgCQACgDACgCIADgDIACgDIABgDIACgCIABgEIABgCIABgCIABgCIAEgGIAFgIIABgDIABgDIAAgEIABgEIAAgCIgBgCIgBgEIgFgEIAAgDIgDgCIAAADQgMgLgGAAQgEAAgEAEIgCADIgCAEIgBAAIgFgCIACgDIACgDIABAAIABgBIAEgBIACgCIAEgDQADgBAHAAIAHAAQAAABAAABQABAAAAABQAAAAABAAQAAABAAAAIACgDIABADQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAIABAAIABgBIAEABIAEACIAAABQAGAEADAEIABABIAAAGIABADIgBADIgDAAIABAEIgBADIgDAFIgEAGIgGAJIgEAFIgBAAIgDAGIgBADIgCACIgIANIgBAAIgDAFIgCAEIgCABIAAACIADAAIACAAIACAAIABAAIAEABIAEABIAFgBIAGABIACAAIABAAIADAAIABAAIABAAIAFABIADgBIADABIADAAIAFAAIADgBQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBIADABIAAADIgCAEIgCAEIgDAAQgBAAAAABQAAAAgBAAQAAAAAAABQgBAAAAABIgFACg");
	this.shape_1.setTransform(427.975,959.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGA0IgJgCIAAAAIAAAAIgDAAIAAAAIAAgBIgDABIgEgDIAAAAIgCAAIgDgDIgDgDIgBAAIgCgFIAAgBIgCgBIgCABIgDgEIgDgIIgCgDIgBgDIgBgBIAAgDIgBgEIABgDIAAgBIAAgCIABAAIACgBIgBgDIABgBIgCABIgBgEQAAgEACgCIAEgCIAAAAIgBgCIAFgKQAEgGACAAIACAAIACgCIgBgCIACgCIAIgFIAGgDIAAgBIAAAAIACABIAEgCIAGgEIABAAIAAAAIADAAIAHAAIADgBIAGADIACAAIABABQAAABAAAAQAAABAAAAQAAABABAAQAAAAABAAIABgDIAIADIAAADIADAAIAFAFIAFAGIAAADQACABACAHIABAFIgCABIACACIABABIABAGIAAACIgBADIAAADIgCAFQgEABAAADIABACIACADIgCAEIgEAIIgEAEIgDADIgLAGIgBADIgDAAIgEADIgEADIgCgBIgEACIgBAAIgEgBIgCACIgEgBgAgFApIAFABIAEAAIAGgBIAJgCIAEgEIADgCIADgDIADgEIABgCIACgDIACgCIAAgDIABgDIAAgBIgBgEIACgCIgCgBIAAgFIAAgEIAAgDIAAgGIgDgGIACgDQAAgBgBAAQAAgBAAAAQAAAAgBAAQAAAAgBAAIgCABQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAgCIgBgCIgEABQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIAAgDQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAgBIgCAAIgDgBIgDgCIgBgBIgFABIgFgBIgCAAIgJABIgCABIgDAAIgBABQgGACgCADIgDACIgDACIgDAGIgDADIgBADIgDAFIgBAHIgBAFIAAALIAGAIIAJAJIgBACIABADIACAAIACAAIAEACIAGADIgMACIAMABIAEAAIAAgBIAAAAIAAAAIAEABg");
	this.shape_2.setTransform(416.45,960.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAbA4IgDAAIgGgBIgDAAIgBAAIgEAAIgDAAIgEgBIgDAAIgCABIgDgBIgDAAIgCgCIgBABIgBgBIgBABIAAABIgBAAIgBAAIgBAAIgCAAIgDAAIAAgDIgDAAIAAACIgBABIgBAAIgFABIgFABIgFAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIABgCIADgCQAAAAAAAAQAAgBABAAQAAAAABAAQABAAABgBIACgDIADgCIABgCIACAAIgBgDIAJgJIACgCQACgDACgCIADgDIACgDIABgDIACgCIABgEIABgCIABgCIABgCIAEgGIAFgIIABgDIABgDIAAgEIABgEIAAgCIgBgCIgBgEIgFgEIAAgDIgDgCIAAADQgMgLgGAAQgEAAgEAEIgCADIgCAEIgBAAIgFgCIACgDIACgDIABAAIABgBIAEgBIACgCIAEgDQADgBAHAAIAHAAQAAABAAABQABAAAAABQAAAAABAAQAAABAAAAIACgDIABADQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAIABAAIABgBIAEABIAEACIAAABQAGAEADAEIABABIAAAGIABADIgBADIgDAAIABAEIgBADIgDAFIgEAGIgGAJIgEAFIgBAAIgDAGIgBADIgCACIgIANIgBAAIgDAFIgCAEIgCABIAAACIADAAIACAAIACAAIABAAIAEABIAEABIAFgBIAGABIACAAIABAAIADAAIABAAIABAAIAFABIADgBIADABIADAAIAFAAIADgBQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBIADABIAAADIgCAEIgCAEIgDAAQgBAAAAABQAAAAgBAAQAAAAAAABQgBAAAAABIgFACg");
	this.shape_3.setTransform(405.075,959.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAZIgCAAIgDgBIAAAAIABgBIADgCIABAAIAAAAIACAAIABgCIAEgCIABgCIADgDIAAgCIABgFIAAgCIABgDIgBAAIAAgBQgBgGgDgCIgBgBIgBgBIgBgCIgEAAIgBgBIAGgGIADgEIAFACIADADIABACIAAADIABACIAAACIABAEIgCADIAAACIAAABIABADIgDAFIgCAEIAAABIAAAAIAAABIABAAIgDADIgFAHIgDABg");
	this.shape_4.setTransform(392.675,966.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AADAmIgDAAIgBAAIgEAAIgHAAIgCAAIgCgBIgIgDIgDgDIgEgCIgDgCIgBgEIgEgDIABgDIgCgGIgBgIIABgGIACgEIADgEIADgFIAHgHIAHgEIAIgFIACgBIAIgCIADAAIAHgCQAFgBACAGIADgCIACACIACABIAJAIIADAFIACAEIABAEIgBABIgDgBIgDABIgEAAIgDABIgGgFIgEAEIgHgBIgEAAIAAAAIgIAAIgDABIgFAAIgEABIgFAAIgHABIgBAFIgDACIAEADIACAIIABABIAAAFIADAAQABAEABABIAFACIACAEIADAAIACADIACAAIAGADIABAAIAFgBIAHgBIAEgCIAFAAIAGgDIAFgEIADgEQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAABAAIADACIgCAEIgFAJIgCgBIgDADQgBAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAIgIACIgFABIgDAAgAgDgbIgFABIgHADIgEADIgCACIAAABIAAAAIAHACIACACIAEgEIABAAIAFABIAAAAIAFgBIADAAIACABIACAAIAFgBIAGAAIAAgBIABgBIgCgCIgBgBIgCgDIgEgBIgCgDIgJAAIgCgBg");
	this.shape_5.setTransform(385.625,961.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgiAkIgBgBIABgCIAAgDIAAgIIABgDIAAgCIgBgDIABgCIAAgCIAAgDIAAgDIAAgDIACgBIAAgBIgDAAIAAgDIAAgDIABgBIgCgJIADgBIgCgDIgBgCIgDgFQACgDAEgCQAEgDADAAIACABIAAAFIACAGIAGgFIACgCIAGgEQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAFgEAFAAIABAAIADABIAEgCIAGABIAEABIACACIADAAQACABAEAFQACADAAALIgFABIgCABIAGAEQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIgCAFIAAABIACADIAAADIACAFIAAAGIAAAEIAAAEIABAEIgFACIgEACIgEADQgCgDgBgCIACgHIAAgDIAAgBIADgBIAEgBIgBgBIgHgCIABgFIAEgDQAAAAAAgBQABgBAAAAQAAgBAAAAQAAgBAAAAIgGgDIAAgCIAAgGIAAAAIABgDIgCgDIAAgEIgBgDIgBgDIgBgBIgCgBIgEgFIgBgBIgEACQgEADgCAAIgEgBIgCACIAAABQgCgFgBAAIgBAAIgEABIgFADIgGAEIgBAEIAAAHIAAAAIAAACIgFAEIgBABIACACIAEABIABACIAAACIAAAHIgBADIgBABQAAABAAAAQAAAAAAABQABAAAAABQABAAAAABIAAAAIAAADIABAJIgCADIgCAAIgCABIgCAAIgBACIgCABIgCgCg");
	this.shape_6.setTransform(375.4,961.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMAlIAAAAIgEABIgCgDIgBAAIgEABIgBAAIgGgCIgEgEQgCgEAAgDIACgCIgCgBIAAgLIACgEIgCgDIAAgGIAAgEIABgDIAAgCIgCABIABgIIgBgDIAAgCIAAgDIgBgDIADgCIAGgCIABAAIADgCIABABIACAEIgBACIgBAIIABAEIgCAHQAAADADAFIgDABIAAADIABABIgBACIAAAIIABADIAAAEIAAADQAAAFADADIAKADIAFABQAGAAAAgCIAEgDIACgCIADACIACAAIABgDIADgCIAEgFIADgDIABgEIABgEIAAgDIABgDIgCgBIAAgBIAAgOIgBgIIAAAAIACgDIgBgCIgCAAIAAgDIAAgBIABgEIACABIAGgCIAEgBQACAFgBABIAAALIAAAHIgCAJIgBgBIgBADIAAACIADgBIAAACIAAACIAAABIAAAEIAAABIgBAHIACACIAAAFIABAEIADACIgCACIgFADIgFACIgCgBIgBgEIAAgDIgDAAIgCAAIgCACIgCABIgDACIgEABQgGADgGAAIgEABIgEgBg");
	this.shape_7.setTransform(365.125,961.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgqBjIgFgBIgFgEIgBgBIgBgBIgBgFIACgBIgDgEIgCgCIAAgDIAAgDIAAgEIgBgCQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIACAGIgBACIABACIACABIABADIAIAIIACABIABACIACACIACACIAKgEIAFABIACgBIAAgCIAFgBIADgBIAFAAIAEgCIACgBIACgCIAEgBIgBgCIAFgCIADgBIAGgDIAJgHIACgBIABgEIADgEIABgCIAFgLIACgGIAAgDIAAgBQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAABAAQAFgEAAgDIgBgCIgEgCIgCgGIgCgCIABgCIAHgEIgGgCQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAAAIADgDIABgBIgDgBIAAgCIAAgDIgBgBIAAgDIAAgCIgBgFIACgEIABgEQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgBIgCgBIAAgBIAAgOIAAgEIgBgGIABgCIABgBIAHgFIgJgEIAAgEIABgBIgBgDIABgBIAAgBIgBgCIgBgEIgDgCIgCgCIAAgCIAEgBIAFgEIAEgCIACgCIACgBIADgBIADABIABACIgBAHIAAAIIgCACIAAACIAAABIACADIgJAHQAAAAAAAAQAAABABAAQAAAAABAAQAAABABAAQAGACAAACIgBACQAAAAgBAAQgBAAAAABQAAAAgBAAQAAABAAAAIABACIACAAIAAACIAAAFQgCACAAAEIAAACIACAAIABACIAAATIgBAFIAAABIABADIABAGIABADIgBADIABAFIABAJIgBADIAAABIAAADIgBAAIgCACIAAAEIABAAIABAAIABAFIgBAFIgBAEIgBABIgDgBIABACIAAADIAAADIgCACIgCAFIgDACIgDADQAAACgEAEIgGAFIgGAFIgFACIgGAEIgFACIgGADIgGACIgEADIgFABIgGABIgCABIgGABIgEAAIgHABIgIgBg");
	this.shape_8.setTransform(352.175,959.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWA1IABgFIAAgCIABgCIAAgBIAAgBIgBgCIAAgCIAAgBIAAgDIAAgBIABgBIgBgCIABgFIAAgDIAAgCIABgBIAAgBIAAgCIgBAAIgBgHIABgKIABAAIAAgDIgCgBIABgDIgBgCIAAgGIABgCIACgDQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIABgDIABgCIgCgCIAAgDIAAgCIAAgDIAAgDIgBgFIAAgCIgCgBIADgCIAEgCIAEgBIABABIgEABIgCADIAFAEIABACIgBACIAAABIgCABIgBAAIAAABIAAACIACgBIACAAIgBALIAAACIAAABIgCADIABACIABABIABACIgBADIAAACIABAEIgBACIAAADIAAAAIABACIAAABIgBAGIAAADIAJgGIACAAIADgBIADgBIACABIAAACIABAAIABgCIABAAIAEAAIAGABIACACIADACIgBACIACAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIAAAEIAAADIgBABIABACIgBACIgBAAIACACIAAABIAAACIAAAEIAAAAIgBACIABAFIAAAFIAAABIgEABIgDACIgCABIgCgCIABgEIABgFIgBgDIABgBIAAgCIABgFIgBgBIABgHIAAgBIAAgBIgBgDIABAAIAAgBIgBgCIgBgCIgCgBIgEgBIgCAAIgEgBIgCAAIgCABIgFAAIgBAAIgDACIgCABIgFAFQAAAAAAAAQABABAAAAQABAAAAABQABAAABAAIAAACIgBAHIgCAAIAAABIADADIAAAFIAAADIAAACIAAACIAAABIAAABIAAACIgFABIgCACg");
	this.shape_9.setTransform(338.65,952.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGAiIgCgCIAAgCIgBgCIAAgCIAAgEIABgEIAAgCIgBgMIACgBIAAgCIgCAAIAAgBIAAAAIAAgGIgDAAIgEAAIgBAAIgCABIgBgBIADgDQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAIADAAIAEgBIAAgBIAAgKIgBgDIgBgBIAAgBIACgDQACgCAEgBIABgBIABAAIAAADIAAAKIgBADIgBABIAAADIACAAIgBADIAGACIACAAIAEgBIAEAAIAEgCIACABIgBACQAAABgEACIgBABIgBABIgBABIgCgBIgCgBIgCAAIgCgCIgDADIgCgBIgBABIAAAFIAAACQAAAAgBAAQAAABgBAAQAAAAAAAAQAAABAAAAIAAABIADABIgBAIIgBgBIgBABIAAACIACAAIABABIAAACIAAABIAAADIAAADIAAABIAAABIAAABIAFABIAEgBIACgBIADgDIADgCIACABIAAABIgBAEIgEACIgIADIgCABIgDABIgBgBIAAgBIgBACIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_10.setTransform(333.225,954.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgFA0IgJgCIAAAAIgBAAIgDAAIgBAAIAAgBIgCABIgFgDIAAAAIgBAAIgCgDIgEgDIgCAAIgBgFIAAgBIgCgBIgBABIgFgEIgCgIIgCgDIAAgDIgBgBIgBgDIAAgEIAAgDIAAgBIAAgCIABAAIACgBIAAgDIAAgBIgCABIAAgEQAAgEACgCIADgCIAAAAIgBgCIAGgKQAEgGABAAIACAAIACgCIAAgCIABgCIAIgFIAFgDIAAgBIABAAIADABIACgCIAIgEIAAAAIAAAAIACAAIAHAAIAEgBIAFADIADAAIAAABQAAABABAAQAAABAAAAQAAABABAAQAAAAABAAIABgDIAJADIgBADIADAAIAGAFIADAGIAAADQADABADAHIABAFIgCABIABACIACABIAAAGIAAACIgBADIABADIgDAFQgEABAAADIABACIABADIgCAEIgDAIIgEAEIgDADIgKAGIgCADIgDAAIgEADIgFADIgBgBIgEACIAAAAIgFgBIgCACIgDgBgAgFApIAFABIAEAAIAFgBIAKgCIAFgEIABgCIADgDIAFgEIABgCIAAgDIACgCIAAgDIABgDIAAgBIgBgEIADgCIgCgBIAAgFIAAgEIAAgDIgBgGIgCgGIABgDQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgDABQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAgBgBIABgCIgBgCIgDABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIAAgDQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBgBIgCAAIgCgBIgCgCIgCgBIgFABIgGgBIgBAAIgJABIgBABIgDAAIgCABQgHACgBADIgDACIgDACIgDAGIgEADIAAADIgDAFIgBAHIgCAFIABALIAFAIIAJAJIAAACIABADIABAAIADAAIAEACIAHADIgNACIAMABIAEAAIAAgBIgBAAIAAAAIAFABg");
	this.shape_11.setTransform(325.15,960.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDA2IAAgBIABgDIAAgEIACgCIgBgCIgBgBIACgEIgBgDIAAgFIABgDIAAgDIAAgEIAAgBIAAgDIABgBIABgCIgCgFIAAgFIAAgCIAAgDIgBgFIABgSIAAgDIgBgIIgDAAIAAABIgHAAIAAgCIAAgDIAGgCIADgCIAHgHQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAIADABIAAAFIAAACQAAAEgFACIgHADIAJAFIADADIgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIAAACQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAIAAACIAAACIAAAHIACAFIgBAEIAAABIABAFIgBAEIgBADIABABIAAAFIABACIAAABIgBACIAAABIAAABQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAAAIACADIAAABIAAAHIABACIAAADIAAABIgBABIgHAEIgFABIgCgBg");
	this.shape_12.setTransform(313.275,959.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSBIQgJAAgHgGIgCAAIgCgDIgEgCIgBgCIgBgDIABgGQAAgBABgBQAAAAAAAAQABgBAAAAQABAAABAAIAAAAIADAGIACAEIAFAGIADABIAIACIACAAIACAAIADABIADgBIACABIAHgDIAEgCIAGgEIAEgEIADgDQADgCADgFIACgHIACgDIAAgFIACgJIAAgCIgBgEIACgGIACgEIgBgEIgCgKIAAgDIABgDIABgCIAAgBIgBgBIgFADIgCADIgDABIgDADIgDABIgFAEIgBABIgJAFIgDABIgIABIgIgCQgFgBgDgEIgCgEIAAgDQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQgCgCAAgEQAAgCADgGIgBgDIAAAAIABgDIACgMIAAgEIADgIIgCgCIgCAAIgBgBIAAgBIADgDIAGgCIAJgFIABABIABADIgBAEIgCAHIgCAKIgBAGIgEABIgBADQAAAAAAAAQAAABAAAAQABAAAAAAQABABABAAIgBAFIgBAGIgBAGIAAADIABADIACAEIAGACQABABAAABQAAAAABABQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAABgBIAGgCIAKgHIAGgGIAFgDIAEgIIACgCIgBgDIAAgCIABgBIgBgDIABgCIgCgEIAAgGIAAgDIgBgDIgCgFQAAgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIAEgDIAAAAIADAAIAEgBIACADIgJAEIAHACQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAAAIgDAEIgEADIAAABQAAABAFACIACADIAAACIABAGIgBAEQgBADADADIgBAFIABAFIAAABIgBAFIgCADIAAACIACABIAAAGIAAAAIAAAEIgBADIAAACIAAADIAAAEIgBADIgBAEIgCADIAAABIABADIgCADIgCAFIgCADIgEADIgBADIgCABIgGAJIgEADIgCACIgDACIgBABIgDABIgDABIgDABIgFADIgDAAIgGACIgGgBg");
	this.shape_13.setTransform(297.95,965.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGBRIgEgDIgDADIgLgDIgEAAIgFgBIgBgBIgIADIgBABIgCgCIAAAAIAAgDIAFgDIABgDIABgDIAAgDIAAgDQAAgFAEgBIABgDIgFgCIABgQIgBgDIADgBIABgCQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIAAgCIAAgCIgBgGIAFgFIgFgGIAAAAIACgEIgCgCIAAgLIgBgDIAAAAIABgBIAHgCIgIgDIAAgCIAAgCIABgGIgBgGQAAgDACgCIgBgDIgBgCIABgBQABgBAAAAQABAAAAgBQABAAAAgBQAAAAAAgBIgBgCIgDAAIAAgCIgBgDIAHgDIAAgDIACgEIgCgBIgCAAIgGgCIAAgBIABgCIAEgDIAFgBIAEgCIAEABIgBAEIgBAEIABADIABAAIgFAEIgBAEIgDADIAGAIIABADIAAABQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIAAABIADAFIAAACIgBAFIAAADIAAACIAAADIAAACIAAABIABACIgBABIgEADIAAAAIAAAEQABAAAAAAQAAABABAAQAAAAABAAQAAABABAAIAAACIAAAEIAAADIgCADIgBADQAAABABAAQAAAAAAAAQAAAAABAAQAAAAABAAIADACIACgDIACAAIAHgBIAHgCIAEACIACgBIAAgCIACABIAFAAIADABIABAAQAHgBAEADQADABACAFIACgBIACgBIACACIADADIABABIAEAGIADAKIAAAEQAAADgCADIgBABIgBACIgCAAIgBADIABAGIgCACIgEAFIgEAEIgEACIgDADIgEAEIgMAEIgDABIgBAAIgGABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAgAgLAMIgDABIgFACIgGACIgDACQgDACAAADIAAACIACADIACAGIACAFIgCAEIAAABIAAACIABADIABADIAAAFIAAAFIAAAGIAAABIgDADIAAABIADADIAFgFIADACIABAAIADgBIACABIAEACIAEAAIADAAIADAAIAIgDIAHgDIAFgGIACgCIABgCIACgEIADgGIAAgEIAAgBIAAgCIAIgEIgBgEIgBgEIAAgDIgEgBIgDgEIgEgDIgCgBIgCgBIgDgBIgFgCIgCgBIgGgBIgGAAIgHgCIgBAAIgBAAg");
	this.shape_14.setTransform(288,957.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgxBfIACgFIAAgEIAAgFIADgEIgBgEIAAAAIABgGIAAgEIACgCQgBgEgCgBIABgCIAAgNIAAgDIgBgDIADgDIAAgCIAAgCIgCgCIAAgDIAAgIIACgEIgBgEIAAgBIAAgCIAAgEIABgEQAAgDgDgDIAAgDIABgCIgBgCIAAgFIgBgDIABgEIAAgCIAAgDIAAgEIgBgFIAAgEIgBgCIgBAAIAAgFIACgEQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIADgDIgEgFIgBgGIABgCIgCgDIAAgCIABgDIgCgBIgEAAIAAgBQAAgBAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIAHgDIAEgCIABAAIAFgCQAAAAABAAQAAAAABABQAAAAAAAAQABABAAABIAGgCIAIgBIAJACIAHABIAFABIAFAAQAAABABABQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAgBIABAAIAFACIAGABIAFABIACAAIAGABIAFACIADAAIADACIADABIABACIAEACIAAACIABACIgBAFIgBADIgBAFIgCAAIAAAAIgBgBIgCACIgBAAQgBAAgBAAQAAABgBAAQAAAAAAABQAAAAAAAAIABADIgCACIgDADIgDAAIgFAFIgEAAIgFADIgEABIgFABIgEAAIgBAAIgBAAIgCACIgFACIgCABIgEgBIgDABIgKABIgEACIgDAAIgIACIACADIgBAEIgBAOIAAAAIgBgBIAAABIAAACIABAMIABAFIAAANIAAAEIAAAGIAAAHIgBACIgBAAIAAAEIACAAIABABIgBACIAAADIAAAEIAAAAIAAABIgCAAIAAADIABADQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIAAAJIAAABIACAIIAAACIgBADIgFABIgBADIgEABIgIADIgCgDgAgbgoIADAAIAAADIABAAIACgBIABgBIANgCIAIAAIACAAIACgCIAEAAIACgBIADABIADgBIAHgEQAFAAAGgFIACgFIACgEIABgEQABgEgEgCIgGgEIgIgCIgCgBIABgDIgDgBIgFADIgDgCIgGAAIgDgDIgCAAIgCABIAAAAIgFAAIgGgCQAAgEgCgDIAAAAQgCAAgDAHIgKgBIgBABIgBACIgBAJIAAABIAAACIgBADIAAABIAAAAIAAABIABAAIAAADIAAAKIAAAFIABAAIAAAEIAAACIAAABIAAACIABABIADgBg");
	this.shape_15.setTransform(420.05,925.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAEBdIgCgIIgDgKIgEgJIgDgEIAAgDIgBgDIgCgEIgCgDIgCgEIgBgCIABgBIABgCIAAgCIgBAAIgBgEIgDABIgBAAIgBAAIgBgEIgEgNIgCgHIgDgBIgBgEIgEgIIgBgFIABgCIgBgCIgCAAIgDgCIgBgEIgEgJIAAgCIAAgCIgDgCIgBgEIgDgFIADgBIAAgDIgBgBIgCAAIAAgIIgCgOIAAgDQgBAAgBAWIgFgKIgCgDIAAgCIgBgCIgDgHIgFgIIACgCIADgBIACgCIAEgCIADgDIACgBIACABIAFALIAAABIAAAFIgCAAIgBAEIABAAIABAAIABgBIABAAIAAACIACACIABAFIACAAIADAIIACAHIgCACIABACIACADIADABIADAJIACAFIACAEIADAHIgBADIgBABIABABIABAAIABABIABgCIABAAIABAEIAEAGIAFAMIABAGIgCADIACAEIADAAIABACIACADIABADIACAEIADAIIAEAJIABADIAFAFIgBADIACACIABgDIABgDIACgFIADgKIADgKIACgEIADgBIAAgBIgBgCIAAAAIABgEIACgFIADgLIACgFIAEgHIAAgCIABgBIABgHIADgIIAAgEIADgFIADgCIgBgCIAAgCIgBgDIAFgPIACgDIABgDIACgGIgBgEIACgEIABAAIAAgBIAAgBIAAgBIABgFIAAgDIABgDIAGgBIADgDIADgBQAAABABAAQAAAAABABQAAAAAAAAQAAABAAAAIAAACIgEAIQgBAFgEAJIgBAEIgFANIgBABIgEAQIgCACIgCAFIAAACIgBACIgCAKIgBAEIgCAEIgCABIgBABIgBAEIgCACIAAAAIACACIgBACIgCAIIgCAGIgBADIgCAFIgCAIIgFAOIgCADIgCACIAAABIAAABIACAAIgDAMIAAADIAAACIgBAEIgBAHIgDAAIAAADIgDACIgHADg");
	this.shape_16.setTransform(405.2,925.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFBgIgEAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgDACgDAAIgCgBIgCgBIgHAAIgBAAQgCgDgDAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABAAAAIgEgCIgFgBIgEgBIgFgBIAAgDIgCgBIgBgDIgDAAIAAADIgGgCIgNgJIAAgBIAAgBIgCgDIgEgFIgEgEIACgGIACgCIAEgFIAAgCIABAAIABAAIACACIACADIgBADIABACIAAADQABAFABACIACgBIABABIACAEIACADIAIAGIAMAFIADACIAFABIAEACIAOACIALABIAFAAIACAAIABgBIACABIAIgCIAEABIACABIACgDIABgBIABABIACAAIAHgCIADgBIADgBIAJgEIAHgEIAEgEIAFgGIACgBIABgDIACgDIABgCQAAgBADgFIABgDIADgBIABgCIAAgBIgCAAIABgEIgBgCIABgDIABgFIADgHIAAgFIACAAIAAgCIgDABIgFgNIACgCIAAgBIAEAAQAGAAAAgBQAAgCgLAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgCgBIgHgEIgFgCIgIgBIgCgBIgFgCIAAAAIgBAAIAAAAIgBABIgHgCIgCABIgEAAIgCgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgDABIgCABIgDAAIgDAAIgGgBIgEgHIgBgBQgDAAgCAIQAAgHgCgCIgCgBIAAAAIgJAKIgDgBIgHgCIgDgBIgDAAIgBgBIgCAAIgDgBIgHgEQgFgDgDgGQgCgDAAgDIAAgCQgBgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBIACgCIABgGIACgFIAJgKIADgDIAGgEIACgBIAEgCIAPgGIAHgEIAKgDIAMgDIADgBIASgBIAIgBIAEAAIAFABIACAAIAMADIABAEIgEACIgBABIgDACIgDgBIgCAAIgHgCIgDAAIgCgDQgDgDgEAAQgEAAgCABIgDAEIgBgBIgBAAQgEAAgEABIgJACIgHADIgFgBIgDABIAAACIgKAEIgBACQgGABgDAEIgDgBQAAAAgBAAQAAABgBAAQAAABgBAAQAAABgBABQgDABgEAEQgEAFAAAFIABAHQAAACACACQAGAFACABIAFABQAFACABAEIABABIADAAIACAAIAAgBIABABIABgDIACAAIAFAAIAHABIACAAIABAAIAHABIAAADIACAAIACAAIgBgCQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIADAAIAWAAIABACIgBACIADABIADgCIABABIAGgDIACABIAIACIADACIANAEIABABIACABIAGAEIABACIgBADIAAABIADAAQADAFgBAEIACAIIAAADIAAABIAAAEIAAABIgCAEIAAABIABADIgCACIAAACIgDAIIAAADIgDADIgBABIAAABIABACIgDAEIgEAGIgEAEIgCACIgEAFIgFAEIgBABIgCAAIABgCIgFADIAAADIgMAHIgJAEIgHABIgLADIgHAAIgCABIgEAAIgDAAIgDgBg");
	this.shape_17.setTransform(387.7,925.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhHBbIABgBIADgHIAAgFIADgOIgCgBIAAAAIAIgEIABgCQAAgDgIgFIACAAIAAgEIAAAAIgBgCIAAgFIABgNIAAgNIABgDIACgDIgDgCIgBgGIAAgCIABgHIgBgJIABgBIACgBIAAgCIgDgCIAAgDIAAgIIACgCIgCgDIABgCIgCAAIAAAAIAFgJIAAgIIADgDIgIgIIAAgHQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBAAAAAAIgCAAIgBgBIABgDIACgBIACAAIAEgCIAGgDIACADIABgBIADABIACgCIAFABIAEAAIAKgBIACAAQADABAPAAIADABIAEAAIABAAIADgBIAHABIAFAAIADABIADAAIADAAIADABIAIACQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAIAAABIgCAAIAAACIACABIABAAIAAgCIABgCIABABIABABQABABABAAQAAABAAAAQABABAAAAQAAAAAAABIgBAHQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAIgCAEIgEAEIgBABIgIAHIgEADIgCADIgDACIgCAAIgCABIgEADIgDADIgDABIgCACIgCgBIgCADIgEACIAAAAIgEAEIgEABIgCACIgFADIADABIADAIIAEADIABADIgBAAIABACIABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABIABABIACADQAAABgBAAQAAAAAAABQgBAAAAAAQAAABAAAAIABABIAEABIACACIACACIADAHIAJALIADAEIAEAFIABAEIAAABIAAAAIAAACIAFADIAFAEIAHAKIABAEIAFADIABAAIABAAIACADIADADIACABIAEgBIADAAIACAAIABABIgBACIgEACIgEACIgDABIgGABIgDABIgCACIgCgCIgDgBIgFgIIgBgEIgGgEIACgDIgEgEIgGgIIAAgCIgEgEQgGgFAAgGQgBgCgEgCQgCgBgEgGIgDgCIgCgEIgBgEQgBgBAAgBQgBAAAAgBQgBAAAAAAQAAAAgBAAIgCAAIgDgFIgHgJIgFgGQgHgGgCAAIgMAFIgBAAIgCAAIgBAEIgBABIAAACIAAACIABAEIAAADIgBACIABAFIAAAIIAAADIAAAIIABAEIgBACIgBADIgCABIAAAFIADAAIgBADIABADIAAABIAAACIAAACIAAAEQAAAAgBABQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAAAQABAAAAAAIAAACIAAAGIgBAEIgDACIgCACIgCACIgDgBQgDAFgFAAIgDgBgAgygqIAAAJIAAAEIABAFIgBAHIgCABIAAABIABAAIACABIADgCIADAAIACAAIACAAIAAgBIAIgCIACgBIAGgDIAGgEIASgKIAIgEIAEgEIAEgDIAEgDIADgBIADgEIACgDIABgDIAAgBIgBgCIABgBIABgCIAAAAIgDgBIgCgDIAAgCIAAAAIgBgCIABgBIgDgBIgBACIgDgBIgFgCIgDgBIgCAAIgFgCIgHAAIgDgBIgGABIgDAAIgFgBIgEgBQgCAAgGADIgDABIgBAAIgDgFIgEABIgFABIgCADIAAAHIgCAEIgBAAIgBACIABACIADADIAAAGIAAABIAAACIgBADIgCACQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIAAABIACgBg");
	this.shape_18.setTransform(371.075,926.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AADAmIgDABIgBAAIgEAAIgHgBIgCAAIgCgBIgIgDIgDgDIgEgCIgDgCIgBgEIgEgDIABgDIgCgFIgBgJIABgGIACgEIADgEIADgEIAHgIIAHgEIAIgFIACAAIAIgDIADAAIAHgDQAFAAACAGIADgCIACACIACABIAJAIIADAFIACAEIABAEIgBAAIgDgBIgDACIgEgBIgDACIgGgFIgEAEIgHgBIgEAAIAAgBIgIABIgDAAIgFAAIgEACIgFAAIgHACIgBAEIgDACIAEADIACAJIABABIAAADIADABIACAFIAFACIACAEIADABIACACIACAAIAGACIABABIAFgBIAHgBIAEgCIAFAAIAGgDIAFgEIADgEQABgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIADACIgCAEIgFAJIgCgBIgDACQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAIgIACIgFABIgDABgAgDgcIgFACIgHADIgEADIgCACIAAABIAAAAIAHADIACABIAEgEIABAAIAFABIAAAAIAFgBIADAAIACACIACgBIAFgBIAGAAIAAgBIABgBIgCgCIgBgBIgCgDIgEgBIgCgDIgJAAIgCgBg");
	this.shape_19.setTransform(352.925,928);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgKAnIgHgBQgFgBAAAAIgDgCIgHgGQgDgDAAgDIACgDIADgCIAEgCIABAAQACACAAACIgBADIABACIADACIACABIADACIADACIAEACIADAAIADABIAFgCIAEgBIAEgCIAEgBIAFgHQADgEAAgIIgBgCIgFgIIgDACIgGgBIgGAAIgCgCIgCACIgFAAIgCAAIAAAAIgEAAIgCgBIgDAAIgCAAIgCgBQgIgDAAgFQAAgGAEgEIAGgGIACgBIAEgEIALgFQAGgEAFAAIAJADIAFgBIAFABIACACIgBABIgEADIgGAEIgJgBIgCgEIgBAAIgBACIgDAAIgCAAIAAAAIgDABIgDgBIgGAEIgEADIgCAGIACACIAEABIADADIAAABQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQABgBAAAAIAEAAIAFgBIADABIAFgBIAFABIADAAIAEACIAHAFIACADIABACIABAHIAAADQgBAHgDAAIgCgBQgBAFgBABIgGAHQgFABgDACIgCACIgCAAIgIACIgDgBIgGABg");
	this.shape_20.setTransform(343.275,928.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUAlIgFgBIgDgBIgFgCQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBIgCgBIgBgEIgBgDIABgEIADgEIAGgHIAGgCIAEgCIABAAIACgCIAHgBIAEgCIAFgBIADgBIADAAIABAAIAEAAIAHgBIAFgCQAAAAABAAQAAAAAAgBQAAAAAAgBQABAAAAgBIgBgDIAFgHIgGgBIgDAAIgFgHIgHgBIgDAAIgEAAIgBAAIgBgDIgEADIgDABIgIAFIgCABIgBACIgDAAIgEAAIgDgBIgDgDIADgCIACgCIAEAAIADgCIAGgCIAFgCIADAAIAFgBIABAAIADgBIAGAAIAGABIACABIAFABIAEACIgCADQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIACgBIADgBQAAAAABABQAAAAAAABQAAAAAAABQABAAAAAAIACADIAAABIAAADIACAGIAAAAIABAEIAAAIIgCACQAAAAABAAQAAABAAAAQAAAAABABQAAAAABABIAAACIgBADIAAACIABAIIgBAEIABADIABACIACADIgDADIgDABIgDABIgDABIgDACIgCgCIABgGIgIADIgDAAIgDABIgDgBIgEACIgCAAIgHADIgEgBIgEABIgHgBgAgSAeIAEABIACACIADAAIABAAIADgBIACABIADgBIABAAIAGgBIACgCIACABIAEgCIAEgCIACgDIAEgBIAAgEQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBIgCgCIABgCIAAgCIgBgFIAAAAIABgEIgCgBIgFAAIgDAAIgEAAIgBAAIgDgBIgCABIgGAAIgBAAIgCAAIgEABIgEACQgHADgCACIgDADIgDACIgBABIABABIABAGIABACIgBACIgBACIABADIACgDIAFADg");
	this.shape_21.setTransform(333.5,928.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AADAmIgDABIgBAAIgEAAIgHgBIgCAAIgCgBIgIgDIgDgDIgEgCIgDgCIgBgEIgEgDIABgDIgCgFIgBgJIABgGIACgEIADgEIADgEIAHgIIAHgEIAIgFIACAAIAIgDIADAAIAHgDQAFAAACAGIADgCIACACIACABIAJAIIADAFIACAEIABAEIgBAAIgDgBIgDACIgEgBIgDACIgGgFIgEAEIgHgBIgEAAIAAgBIgIABIgDAAIgFAAIgEACIgFAAIgHACIgBAEIgDACIAEADIACAJIABABIAAADIADABIACAFIAFACIACAEIADABIACACIACAAIAGACIABABIAFgBIAHgBIAEgCIAFAAIAGgDIAFgEIADgEQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAABAAIADACIgCAEIgFAJIgCgBIgDACQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAIgIACIgFABIgDABgAgDgcIgFACIgHADIgEADIgCACIAAABIAAAAIAHADIACABIAEgEIABAAIAFABIAAAAIAFgBIADAAIACACIACgBIAFgBIAGAAIAAgBIABgBIgCgCIgBgBIgCgDIgEgBIgCgDIgJAAIgCgBg");
	this.shape_22.setTransform(323.475,928);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgGBTIAAgDIgBgDIAAgBIABgEIAAgCIABgDIgBgBIAHgGIgGgFIAAgBIAAgEIABgCIgBgEIgBgBIACgEIABgFIgCgCIAAgDIgBgDIABgEIABgCIgBgHIAAgDIACgEIAAgFIgCgCIAAgVIACgCIABgEIgDgCIABgDIgCgCIAAgEIAAgEIABgDIAAAAIAAgCIgBgCIAAgBIAGgFIgEgHIgEgGIABgDIAAgDIADgBIADgCQACgBACgDIABAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIAAABIAAABIABADIAAAIIAAAJIgCACIgBADIACABIABADQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAIAAAEIABACIAAADIAAAMIAAAMIgCAEIgBACIACAFIAAAAIgCADIACAEIABABIAAAGIAAAWIgCABIABAEIgBAEIAAADIADAAIAAABIACAQIgBAEIABADIgCAEIAAABIgFADIgCABIgBAAIgEACIgBAAg");
	this.shape_23.setTransform(316.325,923.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgxBfIACgFIAAgEIAAgFIADgEIgCgEIAAAAIABgGIABgEIACgCQgCgEgCgBIABgCIAAgNIABgDIgBgDIADgDIAAgCIAAgCIgCgCIAAgDIAAgIIACgEIgCgEIAAgBIABgCIAAgEIABgEQgBgDgDgDIABgDIAAgCIAAgCIgBgFIAAgDIABgEIAAgCIAAgDIgBgEIAAgFIAAgEIgBgCIgBAAIAAgFQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAIACgDIgCgFIgCgGIACgCIgDgDIABgCIABgDIgEgBIgDAAIAAgBQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIAHgDIADgCIACAAIAFgCQABAAAAAAQAAAAABABQAAAAAAAAQABABAAABIAGgCIAIgBIAJACIAHABIAFABIAFAAQAAABABABQAAABAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAgBIACAAIADACIAHABIAFABIADAAIAFABIAFACIADAAIAEACIACABIABACIAEACIABACIAAACIgBAFIgCADIgBAFIgBAAIAAAAIgBgBIgCACIgBAAQgBAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAIACADIgCACIgDADIgDAAIgFAFIgDAAIgGADIgEABIgFABIgDAAIgCAAIgBAAIgCACIgFACIgCABIgDgBIgEABIgKABIgEACIgDAAIgHACIABADIAAAEIgBAOIgBAAIAAgBIgBABIABACIABAMIABAFIgBANIAAAEIAAAGIABAHIgBACIgCAAIAAAEIADAAIAAABIAAACIgBADIABAEIAAAAIgBABIgCAAIAAADIABADQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABIgBAJIAAABIACAIIAAACIgBADIgGABIgBADIgDABIgIADIgCgDgAgcgoIAEAAIAAADIABAAIADgBIAAgBIANgCIAIAAIADAAIABgCIADAAIAEgBIACABIACgBIAIgEQAFAAAFgFIADgFIACgEIACgEQgBgEgDgCIgGgEIgHgCIgDgBIABgDIgEgBIgDADIgDgCIgHAAIgCgDIgDAAIgCABIAAAAIgGAAIgEgCQAAgEgCgDIgBAAQgCAAgDAHIgJgBIgCABIAAACIgCAJIAAABIAAACIgCADIAAABIAAAAIAAABIADAAIgBADIAAAKIAAAFIACAAIAAAEIAAACIAAABIgBACIACABIACgBg");
	this.shape_24.setTransform(308.15,925.3);

	this.instance_2 = new lib.Symbol51();
	this.instance_2.setTransform(436.3,669.15,0.4979,0.4979,0,0,0,162,82.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).wait(1));

	// Layer_10
	this.instance_3 = new lib.Symbol43();
	this.instance_3.setTransform(440.55,667.3,1,1,0,0,0,184.9,95.6);

	this.instance_4 = new lib.Symbol19();
	this.instance_4.setTransform(338.6,176.85,1,1,0,0,0,233,54.9);
	this.instance_4.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,8);

	this.instance_5 = new lib.Symbol26();
	this.instance_5.setTransform(319.6,356.3,1,1,0,0,0,319.6,247);

	this.jenner = new lib.Symbol21();
	this.jenner.name = "jenner";
	this.jenner.setTransform(208,687.2,0.6973,0.6973,0,0,0,88.7,123.5);

	this.instance_6 = new lib.Symbol18();
	this.instance_6.setTransform(295.7,569.05,3.0628,3.0628,0,0,0,121.2,171.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFE5D1").s().p("AgdACIgEgCIgCgBIAAgWIAHAHIAMgFQAOARAGAAQAIABAOgEQARgCgKAQQgFANgUAEQgagEgLgSg");
	this.shape_25.setTransform(89.7989,892.6913,2.2161,2.2161);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFF00").s().p("AgFALIgBgBQgEgDgBgEIgBgDIAAAAIADgFIADgFIABAAIADgBQAEgCAFAEQAEADABAFIABABIgBADQgBAEgDACIADgCQgDAEgFABIgDABQgDAAgCgCg");
	this.shape_26.setTransform(107.1924,869.6033,1.4295,1.4295,2.5029);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCCFF").s().p("AgGAIQgGANgEgEQgMgGAQgNIABACQABAEAEACIABABQAEADAEgBQAFgCADgDQAGALgMAOQgIAAgDgVgAAMAAIABgDIgBgCQgBgEgEgEQgFgDgEACIgDABQgCgLALgEQAJAEgCAMQARADAAAIQAAAIgRgDIgDABQADgCABgDgAgbgPQANgHAIAJIgDAFIgDAEIgCABQgLAAgCgMg");
	this.shape_27.setTransform(107.172,870.0952,1.4295,1.4295,2.5029);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2E2E2").s().p("Ag4A4IBCiyIA2gMIh/EegAgpiYIAyAdIgFAJIgBAAIg2Bog");
	this.shape_28.setTransform(96.565,896.3494,1.4295,1.4295,2.5029);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#BFBFBF").s().p("AgcAXIA3hnIABAAIAEgJIAAAAIABABIhBCyg");
	this.shape_29.setTransform(93.4212,891.3472,1.4295,1.4295,2.5029);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#254505").s().p("AgVAbQgMgIASgRQARgQAZgOQgDARgTAXQgOARgHAAQgDAAgCgCg");
	this.shape_30.setTransform(104.1192,873.9533,1.4295,1.4295,2.5029);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCC00").s().p("AgIAJQgEgEAAgFIAAAAIADgEQACgEACgBIgCABQADgDAEAAQAFAAAEADIABABQACAEAAADIAAACIAAACIgDAFIgFADIgBAAIgDAAQgEAAgEgDg");
	this.shape_31.setTransform(93.9941,864.6037,1.4292,1.4292,131.3012);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFCCFF").s().p("AgLAIQgQgGABgEQACgMARAHIADgBQgDACgCAEIgCACIAAABQAAAGADADQAEAEAEAAIAEAAQgBAKgOAHQgFgLAFgMgAAEAOIAFgEIADgEQAOABgBAOIgGABQgKAAgFgIgAANABQAAgDgDgDIgBgCQgEgDgFAAQgEAAgDADQABgUAJgDQAIADgCAUQAJgLAJAFQAFAIgTAJIAAgDg");
	this.shape_32.setTransform(94.156,864.7443,1.4292,1.4292,131.3012);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#254505").s().p("AgWAVQAAghAOglQAVATAJAoQAGApgWgBIgGAAQgWAAAAgdg");
	this.shape_33.setTransform(106.214,875.2414,0.6828,0.6828,72.628);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#254505").s().p("AgWAiQAAgiAOhIQAVA3AJAoQAGApgYAJQgagGAAghg");
	this.shape_34.setTransform(91.5248,870.1707,0.6827,0.6827,-26.6962);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#254505").s().p("AgSAQQAAghALgcQARAPAHAjQAIAfgYAJIgEABQgPAAAAgeg");
	this.shape_35.setTransform(96.7759,873.3239,0.6828,0.6828,2.0428);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3399FF").s().p("AgKAEIAAgKIAHAIIgBgSIAHARIACgMIADALQAIAMgNAFQgLAAgCgNg");
	this.shape_36.setTransform(115.0485,869.5925,2.9613,2.9613,64.7352);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3399FF").s().p("AgTAFIAHgaIAFAVIAIggIAFAgIAJgYIAFAZQAHAcgbAEQgZgGAGgWg");
	this.shape_37.setTransform(97.2525,843.7278,1.4295,1.4295,2.5029);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3366CC").s().p("AgTAAIADgOIALANIAFgZIAJAZIAIgUIADATQAEAbgWACQgSgEgDgXg");
	this.shape_38.setTransform(107.0009,851.7636,1.2147,1.4293,0,12.7233,-167.2797);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#66CCFF").s().p("AgMATIgRgWIAbAMIgRgcIAbATIgRgfIAYAXQAVASgIAVIgHABQgRAAgQgNg");
	this.shape_39.setTransform(113.5874,860.272,1.4561,1.4561,74.6811);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFF00").s().p("AgJAIQgDgEAAgEIAAgBQABgFAEgDIACgCIABAAIAFAAIAFABIAAAAIADADQAEAEgBAEQAAAFgFADIgBABIgDABQgDABgDgBIACACQgFgBgDgEg");
	this.shape_40.setTransform(107.1996,842.535,1.4295,1.4295,2.5029);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCCFF").s().p("AAAAPIgCgCQACACAEgBIAEgBIABgBQAEgEABgFQAAgEgDgEIgDgCQAIgHAKAJQABAJgMADQAFAQgHAFIgDABQgGAAgEgOgAgYAWQgEgJARgLQgOAAABgFQAAgNAUAIIgCACQgDACgBAEIAAACQAAAEADAEQADAEAEABQgFAIgKAAIgJgBgAAAAPgAACgJIgEAAQgIgKAKgJQALAJgDALIgGgBg");
	this.shape_41.setTransform(107.0323,842.1364,1.4295,1.4295,2.5029);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3366CC").s().p("AgTAAIADgOIALANIAFgZIAJAZIAIgUIADATQAEAbgWACQgSgEgDgXg");
	this.shape_42.setTransform(112.8346,854.8672,1.4292,1.4292,42.7464);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFF00").s().p("AgIAJQgEgEABgFIAAAAIACgEQABgDADgCIgDABQAEgEAEABQAFgBADAEIABABQADADAAAEIAAACIAAACIgEAFIgEADIgBAAIgDAAQgEAAgEgDg");
	this.shape_43.setTransform(99.3996,852.2993,1.4295,1.4295,2.5029);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFCCFF").s().p("AgLAIQgQgGABgFQACgMARAJQABgVAJgDQAIADgCAVQAJgMAJAFQAFAIgTAJIAAgCQAAgEgDgDIgBgBQgEgEgFAAQgEAAgDAEIADgCQgDACgCADIgCADIAAACQAAAFADADQAEAEAEAAIAEAAQgBAKgOAHQgFgLAFgMgAAEAOIAFgEIADgFQAOABgBAPIgGABQgKAAgFgIg");
	this.shape_44.setTransform(99.4077,852.0851,1.4295,1.4295,2.5029);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFCC00").s().p("AgBAMIgDAAIgBgBIgEgEIgDgFIABgBIAAgDQABgFAEgDQAFgCAEABIABAAIADACQADADABADIAAgDQACAEgBAEQgBAFgDADIgCABQgCACgEAAIgBgBg");
	this.shape_45.setTransform(102.9324,863.048,1.4295,1.4295,2.5029);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFCCFF").s().p("AgIALIADABQAEABADgDIACgBQADgCABgFQABgEgCgFQANgBAIAQQgEAIgUgGQAJALgFACQgDADgDAAQgFAAgFgPgAgaAUQgBgOALgFIADAFIAEAFQgDAKgJAAIgFgBgAgZgOQAHgGALAHQAIgPAIAEQAIADgKAOIAAAEQgBgEgDgCIgDgCIAAgBQgFgBgFADQgEADgBAFIAAADQgKgCAAgNg");
	this.shape_46.setTransform(103.5506,863.133,1.4295,1.4295,2.5029);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#66CCFF").s().p("AgMATIgRgWIAbAMIgRgcIAbATIgRgfIAYAXQAVASgIAVIgHABQgRAAgQgNg");
	this.shape_47.setTransform(90.8752,849.625,1.456,1.456,30.7243);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#3399FF").s().p("AgKAEIAAgKIAHAIIgBgSIAHARIACgMIADALQAIAMgNAFQgLAAgCgNg");
	this.shape_48.setTransform(90.1586,859.834,2.9617,2.9617,2.5076);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#336600").s().p("AgTCLIAAAAIAFgJIAUgyIgEAMIAGAFIABAAIADgGIAahaIAyg2IgfAtIg7CHIgFARIgFACgAAOB9IACAAIBHhIIg+BNIgTAJgAgiB/IgKjqIAQBpIADASIgCBkIgBAHIAAAEIgBAEgAgYB1IA2kGIgdCwIgBAFIgVBSgAg8BnIgbhuIAiBcIAAAAIAAACIADAag");
	this.shape_49.setTransform(102.3593,860.1412,1.4301,1.4301,2.503);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#4C9106").s().p("AgPBiIBBhoIAcgWIhNB8IgHAOIgOAFgAggBtIgHgGIAFgOIAVhSIACgFIAXgsIgpCQIgDAHgAg/BUIgDgaIAAgCIgLicIAVCSIgCAqgAgmgMIgDgTIANhTIABBnIgNBigAgEBEIgGgFIAEgMIAVhTIAGgyIAEA3IgZBZIgDAGg");
	this.shape_50.setTransform(104.0354,864.3656,1.4301,1.4301,2.503);

	this.instance_7 = new lib.Symbol6();
	this.instance_7.setTransform(89.85,796.6,2.0262,2.0262,6.5136,0,0,32.4,81.5);

	this.instance_8 = new lib.Symbol20();
	this.instance_8.setTransform(146.9,919.6,0.8175,0.8175,0,0,0,143,208);
	this.instance_8.cache(-2,-2,290,420);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D4D4D4").s().p("AgPgDQBAAHhAAAg");
	this.shape_51.setTransform(-866.475,501.65);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#5A633E").s().p("AstCrQlQhHAAhkQAAhjFQhHQFShGHbAAQHdAAFQBGQFSBHgBBjQABBklSBHQlQBGndAAQnbAAlShGg");
	this.shape_52.setTransform(150.65,1068.475);

	this.instance_9 = new lib.Symbol7();
	this.instance_9.setTransform(300.3,785.75,1.9633,1.9633,0,0,0,24.9,77);

	this.instance_10 = new lib.Symbol15();
	this.instance_10.setTransform(863.85,-78.4,3.1783,3.1783,0,0,0,-7.6,18.4);
	this.instance_10.compositeOperation = "darken";

	this.instance_11 = new lib.Symbol22();
	this.instance_11.setTransform(169.95,737.65,0.6503,0.6503,0,0,0,132.3,173.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],2.1,15.1,0,2.1,15.1,24.8).s().p("AA0CcQgugHgkgmQgkgnhDipQgSgvAegMQgUAiAwBTIABACQApBbBOAlQAZgOAPgDQAOgDAJAEIAUAGQALACACgcIAEgtQABgQgGgzQgGgzgLgmQAkAMAACBQAACAgWATQgQAPgeAAIgVgBg");
	this.shape_53.setTransform(179.4786,824.7159);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-4.9,6.3,0,-4.9,6.3,17.9).s().p("AhXAYIBDgrIASgLIAOgKIAQgNIASgLQAkgMAGAuIiABiQgzAAAEgsg");
	this.shape_54.setTransform(158.1353,920.035);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-3,7.6,0,-3,7.6,17.9).s().p("AhMAwIA1g8IANgOIAMgPIALgPIAOgRQAggVASAsIhhCAQgMADgJAAQgeAAgFghg");
	this.shape_55.setTransform(162,926.5482);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-4.3,-2.9,0,-4.3,-2.9,13.6).s().p("AAiA9IhphOQgEgoAmgDQAAAEAIAGIAQAMIAOAKIARAKIA0AiQALAtgsAAIgDAAg");
	this.shape_56.setTransform(203.2721,919.8024);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-5.1,-2.9,0,-5.1,-2.9,14.6).s().p("AhKgHQgJgmAlgJQAAAEAJAFIARAJIARAIIASAIIA4AaQATArgvAGg");
	this.shape_57.setTransform(205.7222,913.45);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#581F06").s().p("AAUAJIACgEIADAFgAgTABQgLgGANgEIARAEQgBACAAADIAAAFg");
	this.shape_58.setTransform(280.7463,924.5059,1.5675,1.5675);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6B2607").s().p("AgFAKQgCgBgCgDIgCgDIAAgFQAAgDADgCIACgDIAFgBIAEAEIAJAKIgCAEIgEACQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgEABIgEgCg");
	this.shape_59.setTransform(282.2387,924.8194,1.5675,1.5675);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFCC00").s().p("AANAPQgBAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgDgBgDgDIgCgFIgYgEIgEgDQgHgHAKgEIAEgBIAYAGIADgFIADgBIAEAEIgFABIgCADIgRgEQgNAEALAHIAQADIACACQACAEACABIAEABIAFAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAIADgDIAGACIABACIgCgBIgFADQgCADgDAAIgEABIgDgBg");
	this.shape_60.setTransform(279.8827,924.8586,1.5675,1.5675);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#581F06").s().p("AgegBIATgCIgBAFIACAFIgSACQgNgEALgGgAALAAIgCgFIAWgDIACACIABACIACACIgDAEIgWACQABgCgBgCg");
	this.shape_61.setTransform(294.4571,893.1943,1.5673,1.5673,2.4987);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#6B2607").s().p("AgCAMQgCAAgDgDIgDgCIgBgGIAAgEIACgEIAFgDIADgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAEACIADACIACAGQABACgBACIgDADIgDADIgFACIgDAAg");
	this.shape_62.setTransform(294.3288,893.2541,1.5673,1.5673,2.4987);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFCC00").s().p("AgEAQQgDAAgEgDIgDgEIgZADIgFgCQgJgEAJgGIADgCIAZgDIACgFIAHgEQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQADgBACACIAFACIAFAEIAegEIACACIACADIADAEIgFAFIgeADIgEAFQgBADgDABQgDACgDABIgFgBgAgJAJQADADADAAIADAAIAEgCIADgDIADgDIAWgDIADgDIgCgDIgBgCIgCgBIgWACIgDgCIgEgCQAAgBgBAAQAAAAAAAAQAAAAgBAAQgBAAAAAAIgEABIgFADIgBAEIgTACQgLAGANAEIASgCIACACg");
	this.shape_63.setTransform(294.6223,893.2702,1.5673,1.5673,2.4987);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#581F06").s().p("AgegBIATgCIgBAFIACAFIgSACQgNgEALgGgAALAAIgCgFIAWgDIACACIABACIACACIgDAEIgWACQABgCgBgCg");
	this.shape_64.setTransform(289.6404,868.5828,1.5674,1.5674,-8.0496);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#6B2607").s().p("AgCAMQgCAAgDgDIgCgCIgCgGIAAgEIACgEIAFgDIAEgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAEACIADACIACAGQABACgBACIgDADIgDADIgEACIgEAAg");
	this.shape_65.setTransform(289.5252,868.6651,1.5674,1.5674,-8.0496);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFCC00").s().p("AgEAQQgDAAgEgDIgDgEIgZADIgFgCQgJgEAJgGIADgCIAZgDIACgFIAHgEQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQADgBACACIAFACIAFAEIAegEIACACIACADIADAEIgFAFIgeADIgEAFQgBADgDABQgDACgDABIgFgBgAgJAJQADADADAAIADAAIAEgCIADgDIADgDIAWgDIADgDIgCgDIgBgCIgCgBIgWACIgDgCIgEgCQAAgBgBAAQAAAAAAAAQAAAAgBAAQgBAAAAAAIgEABIgFADIgBAEIgTACQgLAGANAEIASgCIACACg");
	this.shape_66.setTransform(289.8167,868.6272,1.5674,1.5674,-8.0496);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#581F06").s().p("AgegBIATgCIgBAFIACAFIgSACQgNgEALgGgAALAAIgCgFIAWgDIACACIABACIACACIgDAEIgWACQABgCgBgCg");
	this.shape_67.setTransform(284.7649,848.0816,1.5674,1.5674,-5.0176);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#6B2607").s().p("AgCAMQgCAAgDgDIgDgCIgBgGIAAgEIACgEIAFgDIADgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAEACIADACIACAGQABACgBACIgDADIgDADIgFACIgDAAg");
	this.shape_68.setTransform(284.6455,848.1577,1.5674,1.5674,-5.0176);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFCC00").s().p("AgEAQQgDAAgEgDIgDgEIgZADIgFgCQgJgEAJgGIADgCIAZgDIACgFIAHgEQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQADgBACACIAFACIAFAEIAegEIACACIACADIADAEIgFAFIgeADIgEAFQgBADgDABQgDACgDABIgFgBgAgJAJQADADADAAIADAAIAEgCIADgDIADgDIAWgDIADgDIgCgDIgBgCIgCgBIgWACIgDgCIgEgCQAAgBgBAAQAAAAAAAAQAAAAgBAAQgBAAAAAAIgEABIgFADIgBAEIgTACQgLAGANAEIASgCIACACg");
	this.shape_69.setTransform(284.9386,848.1352,1.5674,1.5674,-5.0176);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#581F06").s().p("AgegBIATgCIgBAFIACAFIgSACQgNgEALgGgAALAAIgCgFIAWgDIACACIABACIACACIgDAEIgWACQABgCgBgCg");
	this.shape_70.setTransform(286.7323,828.039,1.5674,1.5674,39.6924);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#6B2607").s().p("AgCAMQgCAAgDgDIgDgCIgBgGIAAgEIACgEIAFgDIADgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAEACIADACIACAGQABACgBACIgDADIgDADIgFACIgDAAg");
	this.shape_71.setTransform(286.5939,828.0091,1.5674,1.5674,39.6924);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFCC00").s().p("AgEAQQgDAAgEgDIgDgEIgZADIgFgCQgJgEAJgGIADgCIAZgDIACgFIAHgEQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQADgBACACIAFACIAFAEIAegEIACACIACADIADAEIgFAFIgeADIgEAFQgBADgDABQgDACgDABIgFgBgAgJAJQADADADAAIADAAIAEgCIADgDIADgDIAWgDIADgDIgCgDIgBgCIgCgBIgWACIgDgCIgEgCQAAgBgBAAQAAAAAAAAQAAAAgBAAQgBAAAAAAIgEABIgFADIgBAEIgTACQgLAGANAEIASgCIACACg");
	this.shape_72.setTransform(286.818,828.1993,1.5674,1.5674,39.6924);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#581F06").s().p("AgegBIATgCIgBAFIACAFIgSACQgNgEALgGgAALAAIgCgFIAWgDIACACIABACIACACIgDAEIgWACQABgCgBgCg");
	this.shape_73.setTransform(295.7323,815.389,1.5674,1.5674,39.6924);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#6B2607").s().p("AgCAMQgCAAgDgDIgDgCIgBgGIAAgEIACgEIAFgDIADgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAEACIADACIACAGQABACgBACIgDADIgDADIgFACIgDAAg");
	this.shape_74.setTransform(295.5939,815.3591,1.5674,1.5674,39.6924);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFCC00").s().p("AgEAQQgDAAgEgDIgDgEIgZADIgFgCQgJgEAJgGIADgCIAZgDIACgFIAHgEQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQADgBACACIAFACIAFAEIAegEIACACIACADIADAEIgFAFIgeADIgEAFQgBADgDABQgDACgDABIgFgBgAgJAJQADADADAAIADAAIAEgCIADgDIADgDIAWgDIADgDIgCgDIgBgCIgCgBIgWACIgDgCIgEgCQAAgBgBAAQAAAAAAAAQAAAAgBAAQgBAAAAAAIgEABIgFADIgBAEIgTACQgLAGANAEIASgCIACACg");
	this.shape_75.setTransform(295.818,815.5493,1.5674,1.5674,39.6924);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_76.setTransform(131.0852,942.8867,0.7401,1.2817,0,11.9636,-38.165);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_77.setTransform(127.3937,951.9394,1.2817,0.7401,0,-128.165,-78.0364);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_78.setTransform(127.0497,958.2931,0.4366,1.4143,0,-158.3788,-148.1804);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_79.setTransform(131.3793,953.501,1.3505,0.6054,0,158.3485,116.3511);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_80.setTransform(133.2158,945.8041,1.0977,0.9926,0,39.4652,95.5375);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_81.setTransform(129.4409,946.4343,1.3014,0.7046,0,-13.0716,-61.5716);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_82.setTransform(126.4287,957.4832,0.7046,1.3014,0,-151.5716,-103.0716);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_83.setTransform(128.4779,957.8649,0.8942,1.1794,0,-171.6407,133.577);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_84.setTransform(133.2721,948.4098,1.335,0.6389,0,59.5704,104.0971);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_85.setTransform(132.8906,943.1269,0.483,1.399,0,23.4667,49.3844);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_86.setTransform(121.9935,970.1614,0.7185,1.2443,0,11.9599,-38.1566);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_87.setTransform(118.3452,979.6152,1.2443,0.7185,0,-128.1566,-78.0401);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_88.setTransform(117.9446,985.6866,0.4238,1.373,0,-158.3766,-148.1805);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_89.setTransform(122.0241,981.0685,1.3111,0.5878,0,158.3533,116.3539);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_90.setTransform(124.2079,973.1315,1.0657,0.9637,0,39.4701,95.5369);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_91.setTransform(120.4158,973.9719,1.2636,0.6841,0,-13.0729,-61.5752);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_92.setTransform(117.1777,984.6647,0.6841,1.2636,0,-151.5752,-103.0729);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_93.setTransform(119.0647,985.2648,0.8681,1.1451,0,-171.6412,133.5777);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_94.setTransform(123.7464,975.5023,1.2961,0.6202,0,59.586,104.0953);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_95.setTransform(123.084,971.1431,0.4688,1.3582,0,23.4697,49.386);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_96.setTransform(111.5152,997.0801,0.74,1.2815,0,11.9646,-38.153);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_97.setTransform(107.5293,1007.0141,1.2815,0.74,0,-128.153,-78.0354);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_98.setTransform(107.1062,1013.3397,0.4367,1.4141,0,-158.3732,-148.1693);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_99.setTransform(111.3206,1008.4159,1.3504,0.6054,0,158.3485,116.3546);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_100.setTransform(113.3041,1000.5437,1.0977,0.9925,0,39.4705,95.5368);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_101.setTransform(109.7425,1001.3207,1.3014,0.7046,0,-13.0681,-61.5689);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_102.setTransform(106.5695,1012.3737,0.7046,1.3014,0,-151.5689,-103.0681);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_103.setTransform(108.4279,1012.5878,0.8941,1.1794,0,-171.6406,133.5824);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_104.setTransform(113.4461,1002.4847,1.3349,0.6388,0,59.5742,104.0984);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_105.setTransform(112.5455,998.2585,0.4829,1.3989,0,23.471,49.3873);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_106.setTransform(183.2044,982.3332,1.202,1.202,20.7128);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_107.setTransform(175.177,985.2244,1.202,1.202,-69.2872);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_108.setTransform(175.555,993.7166,1.2019,1.2019,-129.285);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_109.setTransform(183.9072,995.7493,1.202,1.202,155.7174);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_110.setTransform(187.8417,989.3023,1.2021,1.2021,95.7063);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_111.setTransform(179.458,982.6766,1.202,1.202,-18.2682);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_112.setTransform(173.9766,990.842,1.202,1.202,-108.2682);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_113.setTransform(178.8368,996.9107,1.2019,1.2019,-168.2795);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_114.setTransform(187.6001,992.6923,1.202,1.202,116.7261);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_115.setTransform(185.8878,985.0697,1.202,1.202,56.7217);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_116.setTransform(175.605,961.7437,1.2025,1.2025,-114.2781);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_117.setTransform(182.5597,967.1014,1.2026,1.2026,-174.288);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_118.setTransform(189.7073,962.1782,1.2026,1.2026,110.7143);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_119.setTransform(176.3523,956.5425,1.2025,1.2025,-63.2773);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_120.setTransform(178.3547,966.3755,1.2025,1.2025,-153.2773);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_121.setTransform(187.1302,966.1899,1.2025,1.2025,146.7297);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_122.setTransform(190.2235,957.4319,1.2025,1.2025,71.7313);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_123.setTransform(173.3643,1011.5506,1.2025,1.2025,-24.2787);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_124.setTransform(169.3506,1020.3357,1.2025,1.2025,-114.2787);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_125.setTransform(175.4097,1025.6514,1.2026,1.2026,-174.288);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_126.setTransform(183.3435,1021.0969,1.2026,1.2026,110.7143);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_127.setTransform(181.5989,1013.1592,1.2025,1.2025,50.7198);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_128.setTransform(170.4245,1015.4047,1.2025,1.2025,-63.2773);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_129.setTransform(172.1547,1024.9755,1.2025,1.2025,-153.2773);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_130.setTransform(181.0304,1024.7569,1.2025,1.2025,146.7297);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_131.setTransform(183.9235,1015.8319,1.2025,1.2025,71.7313);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_132.setTransform(178.1086,1011.2657,1.2026,1.2026,11.7208);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#581F06").s().p("AgegBIATgCIgBAFIACAFIgSACQgNgEALgGgAALAAIgCgFIAWgDIACACIABACIACACIgDAEIgWACQABgCgBgCg");
	this.shape_133.setTransform(187.744,839.3765,1.5675,1.5675,-5.9373);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#6B2607").s().p("AgCAMQgCAAgDgDIgCgCIgCgGIAAgEIACgEIAFgDIAEgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAEACIADACIACAGQABACgBACIgDADIgDADIgEACIgEAAg");
	this.shape_134.setTransform(187.6259,839.4544,1.5675,1.5675,-5.9373);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFCC00").s().p("AgEAQQgDAAgEgDIgDgEIgZADIgFgCQgJgEAJgGIADgCIAZgDIACgFIAHgEQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQADgBACACIAFACIAFAEIAegEIACACIACADIADAEIgFAFIgeADIgEAFQgBADgDABQgDACgDABIgFgBgAgJAJQADADADAAIADAAIAEgCIADgDIADgDIAWgDIADgDIgCgDIgBgCIgCgBIgWACIgDgCIgEgCQAAgBgBAAQAAAAAAAAQAAAAgBAAQgBAAAAAAIgEABIgFADIgBAEIgTACQgLAGANAEIASgCIACACg");
	this.shape_135.setTransform(187.9186,839.4272,1.5675,1.5675,-5.9373);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#581F06").s().p("AgegBIATgCIgBAFIACAFIgSACQgNgEALgGgAALAAIgCgFIAWgDIACACIABACIACACIgDAEIgWACQABgCgBgCg");
	this.shape_136.setTransform(185.3145,828.9141,1.5675,1.5675,-8.2252);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#6B2607").s().p("AgCAMQgCAAgDgDIgCgCIgCgGIAAgEIACgEIAFgDIAEgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAEACIADACIACAGQABACgBACIgDADIgDADIgEACIgEAAg");
	this.shape_137.setTransform(185.1996,828.9967,1.5675,1.5675,-8.2252);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFCC00").s().p("AgEAQQgDAAgEgDIgDgEIgZADIgFgCQgJgEAJgGIADgCIAZgDIACgFIAHgEQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQADgBACACIAFACIAFAEIAegEIACACIACADIADAEIgFAFIgeADIgEAFQgBADgDABQgDACgDABIgFgBgAgJAJQADADADAAIADAAIAEgCIADgDIADgDIAWgDIADgDIgCgDIgBgCIgCgBIgWACIgDgCIgEgCQAAgBgBAAQAAAAAAAAQAAAAgBAAQgBAAAAAAIgEABIgFADIgBAEIgTACQgLAGANAEIASgCIACACg");
	this.shape_138.setTransform(185.4909,828.9579,1.5675,1.5675,-8.2252);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#581F06").s().p("AgegBIATgCIgBAFIACAFIgSACQgNgEALgGgAALAAIgCgFIAWgDIACACIABACIACACIgDAEIgWACQABgCgBgCg");
	this.shape_139.setTransform(183.9709,818.4738,1.5675,1.5675);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#6B2607").s().p("AgCAMQgCAAgDgDIgDgCIgBgGIAAgEIACgEIAFgDIADgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAEACIADACIACAGQABACgBACIgDADIgDADIgFACIgDAAg");
	this.shape_140.setTransform(183.8453,818.5391,1.5675,1.5675);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFCC00").s().p("AgEAQQgDAAgEgDIgDgEIgZADIgFgCQgJgEAJgGIADgCIAZgDIACgFIAHgEQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQADgBACACIAFACIAFAEIAegEIACACIACADIADAEIgFAFIgeADIgEAFQgBADgDABQgDACgDABIgFgBgAgJAJQADADADAAIADAAIAEgCIADgDIADgDIAWgDIADgDIgCgDIgBgCIgCgBIgWACIgDgCIgEgCQAAgBgBAAQAAAAAAAAQAAAAgBAAQgBAAAAAAIgEABIgFADIgBAEIgTACQgLAGANAEIASgCIACACg");
	this.shape_141.setTransform(184.1392,818.5423,1.5675,1.5675);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#DF0000").s().p("Ag2JLIgvAAQCNguADyaQAIFyAdKZQALDeALATQhYg0hEAAg");
	this.shape_142.setTransform(292.675,1029);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#373737").s().p("ACyDAQAWhiBjhkIAAiZQBgASBWgQQg6FiiwAyQg6gLgLgsgAngByQDYgjBPh9QAVgygViWQA6AIBIAAQhOGbiVAYIgMACIgcABQhvAAgvhWg");
	this.shape_143.setTransform(282.975,1088.325);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],9.5,2.9,0,9.5,2.9,76.6).s().p("ABLn/IAAAAQBbgEDGh1IgWARQg3AphBAjQglATgoASIgsATQgOgJgJgQImDQ1QCXghAWgiQAeACE0u2QjUM9hRCBQgBAmkPBTQCnneEPqag");
	this.shape_144.setTransform(126.125,970.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-4.9,4.8,0,-4.9,4.8,18).s().p("Ah3ALIAPgEIAcgHIBMgZIATgGIASgGIASgHIAVgHIASgHIAaAuIgOAFIABABIiiBBQgkgSgcgeg");
	this.shape_145.setTransform(148.275,905.225);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-10.8,8.5,0,-10.8,8.5,35).s().p("Ai+BuQAkgGEYkSIBBBKIglAiIhmBZIgdAaIgWATIgxAsIg4AcIg3Abg");
	this.shape_146.setTransform(263.85,912.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#DF3100").s().p("AhWIwIA4p7QAXmpADi/IBwAAQgCBQADC0QgDSaiNAuQgjAAg1AYgAgErEQgVg2ATgDIBwAAIACA5gAAarqQgEAKAGAIIABAAQAIAEAHgHIADgBQABgMgMACIAAACQAEALgIgEQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAgIIAFgGIAHgCQALAEAGAJQAEAGAFAFIAYgBIgSgBQgOgFgFgNIgCgEIgDgCIgMgCQgIADgDAIgAAoreQAEgHgEAJIAAgCgAgJswIAMAMQAKADBMAHQAMACATAAQAcAFiUAJQgJgeAAgIg");
	this.shape_147.setTransform(286.0782,1008.375);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#E9D1BF").s().p("Ag5AFQBoALgcgdIgwgnQASAIAMAFQALAFAHAAIAhAfQAcAfhogNQATAaAVAMQgqgEgfgsg");
	this.shape_148.setTransform(293.1542,911.075);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFE5D1").s().p("AgdBuIgNgMIgQgPIgPgQIgRgSIgYgYQgXgagHgNQgWgcglAWIBnhaQAwgMAiAEIALADQAIABAHAEIAwAnQAdAfhogMQAeAsArAFQgXgNgSgZQBpAMgcggIgigfQA4AAAegUIA+BHQgPgJgeBEIgEAHQAWAghVA1IgMAFIgGABIgTAEQhLgHgJgDg");
	this.shape_149.setTransform(289.4,916.8404);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#7C0000").s().p("Am2PdQCwsUB9uQQAXhxAXh/IADgRIAegXIgTCkQhiQSi6MJIhNgDgAgjCuQALANAOANQgPGrAVFZQglADgkAEQAvkMgFoZgAr8OZQCJleBlm+QhvI+hWDwQgVgJgUgJgAEcObQhjgRAJgEIABgCIABAAQAKgDAGAAQAdgJA4gJQA2gKAWAVQAsiahbnFIAggVQA4GPAjDhQgEAEhIAAQAHAlg2AAQgSAAgYgEgAHBN2QAigfAkgDQAjgDAYgZQA8A9hIAHQgZADgWAAQgpAAgdgJgAHtrjQAFgVACgkQBYKABBDpIAAACQAYEBBXFZQAJAuguAqQiKpLhguZg");
	this.shape_150.setTransform(156.1313,1019.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-13.5,-19.2,0,-13.5,-19.2,79.4).s().p("AAWI9Qj/hBgHh6QBcougbmTIAgAqQADAtAHAiIAFARQAgEihfIVQgHBPD5BMQBOgEAnhpQAohpAKq7IAVgOQAIGxgdEUQgbD9iOAAQgNAAgOgDg");
	this.shape_151.setTransform(177.1213,988.9042);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],14,48,0,14,48,97.1).s().p("AhElsQgCgqgDgyIABgBQBFH9BKEjIABAOIACAYQgBAkABApQg7jShTpkg");
	this.shape_152.setTransform(213.025,967.85);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#8D0000").s().p("AAcIdQgOgNgLgNQghgsgIgzQBsomgknQIAoA1QAbGThcIuQAHB6D/BCQCnAZAekUQAdkUgJmxIAggWQABgBAAAAQABAAAAAAQAAAAAAgBQABAAAAAAIgTMcQgKBxhhBGIggAVQglAUgxARQisguhPhKgAi4qUIAAAAQkQKaioHeQEPhTABgmQBSiBDVs9IAIggIgDARQgWB/gXBxQiULrhyArIiAAuIh+AvIhOAcQCjnkFYrNgAIbnHQACgkgCgyQBVJlA7DSQACBAAHBIQhBjqhYp/g");
	this.shape_153.setTransform(152.175,985.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFEBDD").s().p("Ah1DbQgggPgHgcQgJgPgFgTIgFgRQgHgigDgtIgggqIgog0Igug9IBrhSIAFAKIAGANIALAXIAPAeIBHCSICTCiQAdAzhTgjQgfAWgkAAQgaAAgdgMgAB9DLQAWhYgWgbQgLA9gKAFQgkAUAPhEQA3hqAviUIALghIAGgSQADgQAFgPIBeAkIgTAnQgUAlgVAeIgBABQADAzACAoQABAygBAjQgCAlgFAVQgEAPgGAGQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIggAXIgVAOQgPAIgKAEQgKAEgHAAQgOAAAFgUg");
	this.shape_154.setTransform(181.325,930.948);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-1.2,5.1,0,-1.2,5.1,11.5).s().p("AhNAPIAIgrIAPACIAPACIAUADIATABIAYADIA2ABIAAAAQgsAegxAPQgVgDgpgLg");
	this.shape_155.setTransform(210.05,898.175);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#EFC000").s().p("AlWC6QAZAHChhwIhrBTIgHAEIgeAXIgMAAQgSAAgMgFgAiRBpQCxAEDSgkIgGASQiVAgjdAFgAnsAlIgDgVQAZgBAZAUIAbgGQgogggoABIgDgXQAnAAAoAaQAFAOAHAMQAdAfAkASIhnApIgZALQgLgsgIgvgAFYBPIhegkQB+AsAqgEQgGAIgLAJgAGvA3QgjgEgkgIQgxgOgzgYIgUgJQBsAuB6gFQgFAMgJAIIgZgCgAE3gYQAygPAsgfQAWglAQgyQAXgTAogJIAAAXQhUAKAIBSIAWgBQgIhBA+gJIAAAVQgogBAHAyIAPgDQgEgeAWAIIAAASIAAA4IgVAEQgoAGgpAAQguAAgvgIgAn4gvIgBgNQAdAAAkAPIAGARQglgRghgCgAFHhKQABhXhAAAIACgdQAvAHAWAhQAFAIAEAKQADAIACAKQACAIAAAJIABAQIAAAKIgZgDgAEghOQAEglgfACIACgXQAwAAgDA9IgUgDgAEBhSIACgQQASACgFAQIgPgCg");
	this.shape_156.setTransform(177.325,903.5985);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#BA0000").s().p("AnqE7IgDgTQAogBAoAhIgbAFQgZgTgZABgAnwERIgDgXQAhACAlASQAFAQAHAOQgogbgnAAgAn0DuIgBgLQALACAOAAQAQgFAPgHIAKAkQgkgPgdAAgAH/CHIAAARQg+AKAIBAIgWACQgIhSBUgLgAn+gZQAOABAOgGQAFBRALBEQgMAKgFAOQgGAXASAJQAHAEAJgBQADASAFARIgMADIgqAIQgNh2AEiDgAH/CuIAAAXQgWgHAEAeIgPADQgHgyAoABgAnbCoIgFgFQgDgZARgPIAEAZQgCACgBAEIABAEIAFACQABAIACAHIgEAAQgHAAgIgHgAHLBgQAJAHALAFIAMAAQgSgGgMgMIAEgbIANgBIAIgKQADgWgSgKQAEgmABgtQAKADAKABIAFAAQAHBRADBbQgoAJgXATQAGgVAFgYgAHrBsIAKgBQgBgDgDAAQgCAAgEAEgAHRA+IACgRQACAEgCAGIAAADQAGgFgBgJQgBgEgCgDIACgNQALALAAAQQgFALgJAAIgDAAgAn+goIAKAAIAAgJIgJAAQAEh1AQiAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABIAAATIgDgDQAAAGADAEIgBAPIgCARIACAHIAAACIgDAAIgBAIIAEAAIAAAQIAAABIgCAAIAAAMIACADIAAALIgCACQgCAEAAACIgBAbIACAFIAAgBIABADIACgCIABATIgEgCQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAIgDAAIgDADIAAACIgBACIgBAPIAEgCIABgFIgDgCIAEgEIACgEIAIAEIAAAHIgPAOIgCgCIgBAHIABAAIAGgCIALgJIABAPIgIACIgCAPIAKgHIABATQgIAFgHACIgMAEIAAgEgAH1g7IAAAAgAHdhLIABgYIACAEIAMAKIgLgSIgDgBIgCgrIAKATIADACIgDgUIgFgLIAEgCIgBgHIgEACIgDAAIgBACIgBgIIAEgDIADAAIAAgCIAAgIIgHADIAAgKIAAgBIAFgCIgBgHIgEACIgGhCQAUBeAMBvQgQgIgIgIgAnoktIAEggIgBAgIgDAAg");
	this.shape_157.setTransform(176.8029,873.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#6B2607").s().p("AAGB3IgCgCQgEgEAAgGIAAgGQAAgEACgEIAGgEQACgEAFAAIAIAAQADABADADIADADQAEAFABAGIAAAEQAAAFgEAFIgDACQgEAEgGABIgDABQgGgBgFgFgAgFAUIgJgEIgDgDQgDgFgBgFQgBgDACgEIADgHQACgDADgBIAIgDQADgBACACQAEAAAEADQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAEAEAAAGIABAEQgBAFgEAEQgBADgCACIgIADIgCAAIgDAAgAgVhXQgEAAgFgDIgEgEIgCgJQgBgEACgFQAAgCACgDIAIgFQACgCAEAAQAEAAACABIAHADIAEAEQACAEABAFQAAAFgBADQgBADgCACQgCAEgDABQgDACgEABIgGgBg");
	this.shape_158.setTransform(185.58,829.2188);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FAE7CD").s().p("AhMAOIgNgCQAXgFgPg1IClgTQgXBQAcAJQgVAMgNAPQgFAIgEAHQg9gog9gMg");
	this.shape_159.setTransform(178.1,803.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-10.1,16.5,0,-10.1,16.5,77.4).s().p("Ah4B7QkCgljQipQg5gvBhgMQhBAiCXBTIADACQB/BbD4AlIAEAFQARADARgCQAvAGA0AEIAQACIAxADIAWgDIAEgBQCVgYB1hKIAKgGIAFgEQBIgxBthuQiACRhCArQhaA6h0AcQgdAHgfAEQgqAGgtAAQhXAAhegXg");
	this.shape_160.setTransform(175.6318,837.6667);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#AB0000").s().p("AnEH1IBngqICjhCQAIAWAbAGQjGB1hbAEQgIgSgEgXgADsF6QAfgRgWgQQApALAVADQBXAPBXgNQgEAkgLAYIgXAAQhtAAhigrgAo3miIAhgDQBHAkFkicIAaAAIAxAEQhsCIjiBGIgCgPIgDgJIgKgJQghgHgJAfQgEAOAHALIgpALQgKgOgQgKQgGgDgFgGQgIgIgJACIgNgGIAAgTIgEgHIgNgCIgEgHIgJgJIABgBIABABIACAAIACgCIAJgMIABgFIgUAQIgBANIANAMIASAAIgDAaIAZAJQACgCAAgBQABgBABgBQAAAAAAAAQAAABgBABIAZAbIAKgCIAEAMIgNACQiXhTBBgjgAnrlmIAHgCIAXAAIAEgIIAJgCIgBgjIgcgDIgMALIgBABIgCAAIADARIAVgCIgQgDIADgMIAbgEIACAYIgIABIgGAHIgVAEIgMgPgAmdk+QgJgWASgQIADgBIAPABIALAIIAFAJIACAJIgNAEIAAgDIgFgKIAAgIIgSAIIALAAIAEANIgDADIgSAGIgDgBgAF+ldIABgCIgFABQgUgFgegMQg9gYiVhOIgDgFIgCgDIgDgDQgVgcgWghIAtAAIAEAAQC0A6BuAOQAvAEAzALQAzAJAgAYIgZANIAEgHIABgEQgIgEgLAPQgBAEgCADQgcAMgcALIgCgLIgPgBIAKALIgFAGIgEACIgGgdQAGgIAIgFIgDgCIgIACIgJAJIAEAkIguAQIgBgEIANgRQgTAEgCAUIgEABQgDABgFAAQgHAAgJgCgAHxmYIAAAFIAJAFQARgDAJgUIACgDIgHgHIgHgBQgTAAgEAYgAICmpQANgCgOAIIAHAAIgPANg");
	this.shape_161.setTransform(177.7097,865.225);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#D60000").s().p("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");
	this.shape_162.setTransform(165.775,924.875);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-2.2,8.5,0,-2.2,8.5,25.7).s().p("AhkCoIAGgdQAagEAfgTQAxgfAghBQAfhBgbgqQgXgggdgXIgBgBIAHgLQADgHAEgHQAvAYAfAvQAfAwgkBLQgkBMg5AjQgwAgglAAIgEgBg");
	this.shape_163.setTransform(250.035,830.9556);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#581F06").s().p("AGSJdIABgRIAThKIAPAQQgGAZgBAWIAAAVQACAnAaAQQg2gDgCgtgAHpFLQBEhHgliRQgQh2gQg5QhXkwAgg9QCEiWAyhNQgGAqg+BEQguAwgsBFQgeAAAUB5QAUB4AqCqQApCqAAgHIAHBFQAIBLg9AsQgHgEgIgCgAoMkvIADgBQAGgBAEgEQAMAoAFAwIgFABIgZhTgAo5k/IAcgIIgBAGQABAHAEAEIgbAHQgVgDAQgNgAn4lFQgBgGgEgFIAigLIAFACIADACQACACAAAEQgBADgDADIgjAKIAAgEgAojmYIAGAAIAIgDQAGAmAJAeIgIAAQgFAAgCAEQgIgggGglgApOmpIAcgIQgCAEABAEQABAFADAFIgaAGQgVgDAQgNgAoOmuQAAgGgEgEIAigKQABAAABAAQABABAAAAQABAAAAAAQABABAAAAIADABIACAFQgBAEgDADIgjAKIgBgFgAozoEIAGABQAEgBADgCQAEAnAGAiQgDgCgDABIgIACQgFghgEgngApeoZIAdgEQgCAFABAEIACAJIgcADQgUgHASgKgAocoYQgBgFgDgDIAjgFIACADIADADIADAFIgFAGIgjAEQABgDAAgFgAo8pVIAAgGIAEgBIAJgCIAEA2QgCgBgEAAQgEAAgCACIgFgug");
	this.shape_164.setTransform(239.7542,872.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#272727").s().p("ACQDxQCwgyA6liQgSCyASAvQAcBKhEBbQhVATg6AAQgdAAgWgFgAiej1IgmEAQA1gXAjAAQgJBcgWAbQiRBIhlAMQCUgZBPmbg");
	this.shape_165.setTransform(293.3083,1088.9611);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],0,-1.3,0,0,-1.3,27.4).s().p("ABMCMIgQgOIibiEIg+hHIgUgXIBbhQQDvEBAZBBIgaATIgcATg");
	this.shape_166.setTransform(319.35,913.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#630000").s().p("AnIBCIABgBIAAgCIABgCIAAgBIABgCIAAgBIALhTIA4gcIgIBWQgCALAAANQgkAYgPAAQgLAAACgOgAGOBCIgBgkIgCguIAdgoIASgXQAVBsgIAnQgDAEgEAAIgNAAQgXAAgOgGg");
	this.shape_167.setTransform(297.6356,929.2292);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#E3B600").s().p("Ak8DEIgagsIAIhXIAUBYQANA3BUgGIBiAAQgXgfAGgPQhcAOgQgsIgnhpIAVgTQARCpBrgoIAShWIARASIgTBKIgBAQQABAuA3ADIBvAAQDagBBvgOQAkABAMhCIAagTQgZhBjvkBIDCC7IBjBfIgdAoIACAvQgqA9gygBQiwAPiJgFIhvAAIgwgCIgPgBQgkgBg3AEQgQACgOAAQgvAAgSgagAhDDKIAAAAgAhfCTIAAgWQABgVAGgZIAQAPIgNAhIAVAFQCVgJgcgEQAuAABbgMQB9gRALgDIAQAOQAOAPhHAKQhdAQiZAEIhwAAQgTACAVA2QgagQgCgngAncAVQAygkAvglQBbhKBLhGIAUgZIAjAAQkZESglAGg");
	this.shape_168.setTransform(292.4,917.2312);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#AF0000").s().p("ACaOsQgdgFgdgJQBjAMBKgTIALADQAFAAgLgEIAbgJQAXAVAYgQQAJgFAFgJQAKgQAAgQIAPgMIAFAPIAQALQAIAEAOgEQAVgKAIgQQABgRgMgKIgPAOIALgHIAIAQQgJASgQAGQgJADgGgEQgJgFgGgFQgFgIAAgHQAOgQANgSQANgMAQgGIAFAAQAJAFAFAJQAIANAOADQAMADAKgEQgWAAgMgQQgKgNgNgIQgOAEgMAFQAKgTAJgVQAKgOAFgUQABgIAAgJIAAAAIgBgBQAHghADglIAQAAQASB4ASBgQhWBGhmAUQgoAHgqAAQgxAAgzgKgAE8ONIgFgDQAcgNAYgRQgCALgFAJQgDAHgEAEQgIAHgJAAQgIAAgIgFgAHZJ1QABgUAAgVIABAAIAFgIIgGABQAAgpgEgtQAIBGAKBAIgPAAgAFGqCQAVABAUgCIAIADIAHgEQB9gTBriKIiqDnIgSAXgAGzo0IAIgKIgUgVIAOgTIgMgaIgIgHQggAEABAgQAFAOAOAEIAKAAQAFAUAPAJgAG5paQAAANACgCQABgCAAgEIAJgGIAFAHIAHgIQgFgEgGgBgAplu1QAzC5AzBEQgLADgIAMIgLAQQgDATAQAOQAJAHADgBQAfgKABgeIgKgLQAgAeAggPQguAkgyAlQg7iGgcjigAGJpmQgCgVAZgEIAJAKIACASIgHgHIgQgDIAPAKIgKALgAoXqQQAJgVASgPQAGAHAGAFIgMADIgHAPIAFADIgBgDIAAgFQAHgKAKAIIABACIACAJQgDAJgHAHQgIAHgLACg");
	this.shape_169.setTransform(297.475,978.271);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#C70000").s().p("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gFgBQgMAFgNgEQgPgDgIACIAJAJIgfgHQgQgZgdgDQgKAEgJAGQgHADgBAHIAJAPQATgEAEgUIAAgBIgMgBIgJAMIACABQAIACABgIIgBgBIgCABQgCAAAJgFIACgBQAEAIgKAIQgLAHgGgIQABgTAVgCQAbADAOAVIgNAFIAFADQgDAEgNgCIgeAHIAQAHIgmAZIAhgZIgDAAQgYgEgJAbIgBAGQAEgBADgBQAKgCgPAKQgHAEADAFQAKAEAEgIQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAfgdArAQQgXAAgMAOIAEAIQAMANARgCIAGgFIACgGIgGgNIgRABQgCAEAAAGQABAGAGgDQAGACgCgFQAAgCAAgBQgBgBAAAAQAAgBgBAAQAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAQAAABAAAAIAAAAQgIgEANgBQAHABgBAHQAAAEgDAEIgbgJQAJgUAbAEQAiAIAdATQAVAOgEAaIgCAGQAGAbgBAhIAAADQAAAvgjAkIgKgRIgDgFIAOAAIgLgEIAKgBIgMgIIAHACQAFADABgHIgBgBIgEAAQgFgCACgFQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQgBgHgBgCQgEgGACAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAABQABgBAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIAAgCIgDgDIACgVIgEgHQgBgLAHgNQAOgTgGgUIgKgIIAHARQgCATgVAEIgTADIgGAAIANgWIgVAWIABgIQAJgLAKgJIABABIAGADQACgCADAAQAGgCgEgGQgEgFgFgBIgdAhIgBgBIgBgHIANgNIgRAMIgCAIQgFgJALgJIALgKQAHgFgDgHIgDgEQgEgEgDABIgDACIgEAMIAHAEIgSAcIAIANQgQgHAIgSQABgDADgCIgKAGIAAAGQgDgDgCgHIAFgRIgIARIAMAbIgRgPIAUAYQgKgEgIgFQgIgHgEgMIADgMIgEgDQgJgGgDALIACAKIAIADIAGAOIAJAIQAHAEAIABIAAAQIgLAQQgNAWgBAdIgDAJIABACIAMgZIASgOIgHAAIAGgEIALABIAIgOQAKgDACALIgmA/IAMgIIgHAPIgEAYQAKgBgIAMQgHAJAEAMQALgIABAOQADAOAGAMIACg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IgBATgApJqSIADAOQgcArgBAxIgSAHQAFhOAngjgAkEo6IABAGIgCALQgBgNACgEgAo8poIAKAZQgLAGABATIgVAHQABgmAUgTgAsfpAIgKgkIATgKQAOgKAHgNQAFgMANgLIAAgBQAUgDAQAIIACABQAEABAAAIQABAPgEAGIgLACQgFAAgEgCIgHgLQAFgHAGgDQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABIABACQgCAEgEABIgBgBIAAABIgBABIABADQACACAEAAIACgCQACgEAAgEIAAgGIAAgBQgIgCgCABIgNAPIAIAOIAWADIAGgIQAGgOgGgPQgWgPgYAJQgFACgDAEIgHAJQACghgbgTQgPgMgTAHIgDACQgKhEgGhSQAagJATggQASgiAAg5QAAg7gTgjQgTglgbgIIABggQA9AuBIAhIgBAAIgDAMQgEASgPAIQgMAGAFAKIACABIAOgJQgZAhAEApQAFATAQALQATAJARAEIAHAPQgDADgCgBQgEgEgDgGIgBAAIACAKQACAEgEAEQgHAHgEAGIgBABIACgBQAKgIAJgLIABAAQAGAAgIANQgNATgUANIAIgJIAIgMIAAgBIgvAsIAKgOIAAgBQgRASgTAKQgFgEgEACQgOAAgKgEIgBACIADAAIABACIACAFIADADQAhAHAagVQAHgEAHgIQAFgHAIgDQARgJANgJIAFgQIAMgNIgPAKIgDANQgIAIgLAFIACgCQANgMAHgMIAHgOIAPACIgOARQAMgBAFgPQAEgLAHgFIgFgJIADgCIABgCIgBgIIgIgIIgCgKIgQgeIgBABQAAAKAGAGIACACIgSgBIACACQAEABAEAAIADADIAAAHQAEACAHAHIADAEQAIAFAAAGQgIACgEgIQgCgFgEgDIgCABQAAADAHAFIAFAHIAAABIgDgBQgMgHgKgJIAAgKIgPgVIAAADIABAGQADAEAHAIQgDAAgDgCQgGgCgFgDIgBAAQgCAGAJAFQAEABADAEIAXASQAFAFALAHIgFALIgXgYIgCAAIgBABIAAAAIgDgDIgDgEIgDgEIgCgBIgDgBIgDgCIgLgZIgBABIADALIADALIgEgDQgJgGgDgMIgBgDIANgYIAAAXQAGgDACgHIAEgLIAIgOIgCgGQAHgHABgHIAAgCIABgCQABANAEAPIgGATIABgfIgBgCIgFAvQAVgZgCgfIAGgDIALgeQgIgCgDAKIgEAVIgEgmQgFABgEAHIgOAbIACgpQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAIgLANIAFgJIgJADIAEgUQAgAOAhAMQASDYAgCIQgHACgFAEIgOAIIgbACQgSgDgIgNQgLgQADgTIABgHQALgOAWAFQAGABAEAEQAIALgDAKQgDAAgDAFIgDACIgBAAIgCAAIAAABQAAACgDADQgEAHgJgFQgMgJADgLQAFgLAJAGIAEAKIgMACIAPACQAAgMgIgJIgLACIgHAPQADARAPAEIAJgCQAFgDACgGQACAAADgDIADgDIABABIABgCQAGgMgKgPIAAgBQgGgEgHgBQgTgDgNALQgFADgBAHQgEASAJAQQgOgSgUgRQgPgMgTACIgPANQgKAYANAVQARAOATgLIAIgDQAGgKgDgLIgBgIQgIgMgSAFIgIAFIgBAPIAQACIAAgFIgDgIIgCACIAAAAQABADgBADIAAADIgDgBIgFgCIAEgLIAMgFIAKAFQAEABgBAIIgCALIgBAHIgjADQgJgNABgRIADgNIAMgLQAQgCAOANIAsAoIANAJQAUAKAWgJIAQgGQAHgEADgFIAGAbQgfAbgOAkQhhglgfBcQgSgLgRgGgAkjoyIAAglIAJAAIAAAlgAkwpdIAJAHQAHASgLAQgAkZpKIAAgHIAJAEIAAAXgAkLpUIgGgUQAKgDgBARIgCAfgAlxpFIgBABIgBAAIgIABQAFgCAFAAgAlApNQABgPgFgMQgDgGgHgIQAKABAJANIAIAKIgHAagAlypQIgBgCQgDgFAAgFIACAAIABgBIgIgVIAOAFIABgCIgEgJIADAAIACgBIgLgDIACAIIgKgCIAFAVIgLgHIgEgHIADgBIgBgCQgFgDAJgGIgNgGIASgFIgSgGIAQAAQAWAGACAVQABASgHATIgSAHgAlMpkQADgLAEANIABAFIgEAWgAm5pRIgJAGIAAgKIgJAEIgFgIIACAMIgFgVIAKgDIgCALIAOgIIACAOIAKgHIAGAJIgGAIIgEACQgEAAAAgJgAnKpMQAHgGgEAIQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBgBgAkBpdIABgHIACAVgAkdpiIgKgZQAJAGAIAMQADAGABAGIAAAOgAmupfIgKAGIgCgPIgMAHIADgIQgSAFAFgHIAOgNIgCAKIAJgGIABAHIAHgEQgCAPAHAAIACABIADABIACAFIgEAJgAnhpgQgHgDgFgEIgHgFIAAgLIAJAKIgBgNIAMAHIgHgTIAWAEIgBgCIgBgCQAIgCAKAAIAAgBIAAgCIAAAAIgCgFIALACIgEgKIAEACIABAAIABAAIABgBIgBgBIgBgDIAJABIACgBIgCgDQgNgFAOACQAGACAGgBIgMgKIAPABIAIAKIgOACIAGAMIgOgBIAEAOIgRAAIABABIAAABIAHAAIgeALIgDAEQgIAKAEAPQgHgCgEgEgAkjpbQgKgCABgLQAAgLgEgLIACACQALAQABARgAgypeQADg+gwABIACgZQBAgBgCBYIgTgBgAhVpkQAFgPgSgDQAAgHACgHQAegCgEAlIgPgDgAgGp0QAjggATAeIgCAQQgUgZggAaIAAgPgAj/poIgGgTIAQAWgAmspqIgEACIACgOIgJAEIACgJIATgEIAEAOIgKALQABgFgFABgAkLpxQgHgKAHgBIACgBIADAVgAk4puQgHgDgGgIIgHgNIAJAAQAHgFAEAKIAJAZIgJgGgAlipyIgDgJIASAFIAFAOgAsyqLQAJAAAKgJIAGgNQgCgGgDgCQgDgGgFgDQgNgCgGALIgEgZIAEgDQAjgFANAgQALAagVAXQgGAIgKADIgHAGQgFgRgDgSgAkmp/IgBgIIAHgCQAKAFAEAQIABAEIAAABgAoOqGIAQAKIACgbIALAKIAEgRIATAMIgDgTIAUAEIgKgMIASAAIgGgGIASgCIgJgHIAQgCIgBgIIAWAGIgXAFIAOANIgWgCIAKAKIgRABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIACADQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBgBAAIgBAAIgBAAQgDAJAEAHIgHgEIAFAKIgRgBIgDAGIgSgEIAFAQIgMgIQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAFAPgJgNIgCAPgAmapyIgOgbQATgDgJAFIABABIABABIABAAIAGgCIAPAFIgTAFIASAIIgTAAIAKAHgAlmqAIgOgMIALABQATAAANAOIABACgAk+qOIgGgHQAQAFAIALQABAAAAABQABAAAAABQAAAAAAABQABAAAAABgAoSqLIgJgUIAFgIIAIALIAIgOIAIAGIACgOIAJAJIADgOIAMAKQgEgRASALIAAgBIgFgNIAQAFIABgCIAAgBIgBgCQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAIACgBIAAgBIgEgEIAJADIANAAQALAJgcgGIgBABIAIAJIgPAAIAEAIIgTgBIAFAHQAFAHgPgHIgCgDIAFAUIgVgNIAAASIgMgLIgCAbgAgJqFQgBgLgDgHQAug6AdA5QgHAIgDAMQgUgzgpAygAj/qGQAZgTAAgGIgBAAIgYAZIgBABIgIAAIAagaIgbAWIgEgJIATgLIgOAHQAKgMAQADQACgFAFACIAHAGIgGAHQgGAHgJAFIgGADIgFABIABgBgAkWqKIABAAQAHgCgFAGIAAAAIgDgEgAk/q8QATAIANAKQAGAEAEAOIAAgCIAHAOgAk2qVIAGgBIgSgQQgDgJALAFQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAJAFgBAFQAAAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAAAIgBABIAMAGQAEACAEAKIgMAAgAlcqUIAAgGIAXAIIADAEIgcACgAlnqNIgyAAIgGgNIAQAAIgHgLIANACIgRgJIABAAIABAAIABgBIAAAAIgCgCIgGgDIAOgDIgQgFIATgFIgQgHIAUACIgBgCIgYgEIAJgPIAFAAQADACABADQABAEgCAFIABACIASgVIgDAVIARgfIABAZIAOgmIACAaQAHgJgBgLIACgVQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAIACAgIAMgsIgBAeIAJgVQAEgNgBgMQgBgDACgEIADAUIAKg1IABgCQACAagKAeIgGAGQAGAMgJAKIgLALIgDACQgQAVgSAPIABACIgLADIgLAFIACADQAXgOAZAOIADAAIg/ANIAvgCIgIAIIgiADIAkABIAKgKIgBgDIgBgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAIATAPQgCACgFABIgnAHQgDgFgHADIAAABIABABQAEACADAEIgCABIAaABIAAAEIgDAFIgCABIgDgBgAs2qdIACAAQAEAAACgDQABAAgBgBIgCACIgEABIgDgBIgCgGIACgDIALgHQAEABAEAEQADABADAEQADAJgHAFQgIAGgJADQgDgHAAgIgAkSqbQgCgFAGgDIAOgGQAPgKAQADIANAMIgHAFIgLgGQgagEgOASIAAAAIgEgEgAleqeIgDAAIAVgDIAHgBIANAKgAipqlQACgEgFACQAEgCADACQACABABAFIgGACQgEAAADgGgAohqfIAAgBIAAABgAkRqyQADgDAAgDQAAgPgIgIQgEgCgBgEIAEgBIAOAQQABAWgOAPQgBgHAGgKgAoQqoIgDgHIgCABQgGANAAgHIgCgOIANgRIAEAMQAHgNADAMIAJgLIAGAGIADgKIAIAHIACgKIAHAHQgDACADAFQAFAJgKgFIgDAKIgMgNIgBAPIgKgIIgCAOIgGgFQgEAJgDAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAgAkdqpIAEgJIAAgOIgPgPQAHgFAHAKQAEAEAEAHQACAQgMAHIgBgBgAhcrRQAHh9gFjJIAPgHIAMAEIAdAdQgCAFgGgIQgIgJgKgGIgBAAIgSAAQARADAQAPIAGAGIAKABIAEAIIgCAGIgGAJQgBgFACgEQACgIgDgEQgIAPgDASQgBAJgFAHIAAACQgGAFAFAFIAZgpIAHAJIAAABIgQATIACgOIgSAgIABAKIgJAmIAJgEIAGgTIACgEQABATADASQAKgNgBgQIAOAjQADAKAIALQADAEADgBIgMgdQAJAGAHAFQABABAAAAQAAAAABAAQAAABAAAAQAAABABABQgBAAgBAAQgBAAAAAAQAAABAAAAQAAAAAAAAQAHADALgBIACAAIAUgCIAOAdIgBAEIgEAHQACgGgCgIIAAgCQgFABAAAKIgBAJQgDAMgJANIgCADIAAACQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAAAAAQADAAAHgJIgFAIQAIgDAAAGIABACQAKgUAEgWIAAgCIADgHQACgNAFALQAIgGgEgKQgFgKgHgGIgCAAQAAAEABAEQACADAAAEIAAgBQgFgFgEgGIAKgJIgQABIAIABQgOAJgMgFIAGgCIAAgDIgMAAIgcgWIABgGQgJgWgFgZQgBgFACgEIAJgBQAGgXASgNIABgBIAEgHQABgVgMgSQAAgBABAAQAAAAABAAQAAAAABABQAAAAABAAQAEADADgDQACgMgMgFIgBgBIgCgIQgKgEgGgJQAggQAYgQQAZgQAPgOIAKAnIAAAAQgQAIgPAaQgPAaABAuQABAwARAdQAQAcAWAHQgCAtgEAnIgDgCIgOABIgLAKQgQAOAHATIAGALIgaACQgGAIgBAIIAAAHQAEAGAFABQAGAEAHgDQAIgFgEgKIgEgCIABABIAAADQAEAFgFADIgKgCIgIgDQgDgFAEgGIAGgHIAYgBQAIAKAJAJQgEAYgHAVIgGAEQgyhCgzBFQgWghgvgHgAgNr5IgHAIQgEATAKANIABAAQAXAIARgSQAGgZgNgQQgTgKgSANQAGgdgTgYIgVgCQgWAPACAZQAHARAVgCQAVgOgJgXIAAABIgEgEIgLgBQgIAJgBAJQgBAFABADIADADQAIgDACgLIgCABIgHAIQgHgQASgEIADABIAFAGIgDATQgLAMgQgJQgIgJADgKQADgQAOgJIANAAQAYAUgJAgQgBAEgEAEIAAABQgQAUgYAIIgWADIACADQAdACASgSIAMgLIAWgSIAGgDQALABAHAGIACAGQADAOABAOQgOAKgQgBIgHgIIgEgGIABgNIABgBQADgJAMADIAAgBQAIAGgEAHIAAACIgBACQgEgBAAgHIgBABQAAAEABADQAEAGAFgEIAAgDQAEgIgFgGQgGgGgHABIgHABgAAWscQAAAKAIgGIAFgDIgEACIgDgDIgEgBIgCABgAlCquIgIgDQgNgBALgMIAAgBIgEgCIAKADIAMAPQgBABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgCgCgAkiqyIADgHIgIgOQgIADgHAGQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBgBIABAAIANgNIAOANIgEARQgBgCAAgDgAkvq1QgCgCAAgDQAAgBAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQACgCADgBQADABADACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAADgBACQgDACgDAAQgDAAgCgCgAjHrGIABgHIADgFIACANIgCAHgAQmsDIAghCIgmgdIAFgUIApAdIAlhQIATgIIAJACIAMALIADAeIATAFIgJgZIAaAQIAGgDIgRgbIAPAAIgSgQIgJADIgugZIgFiEIgSgFIgcAJIgDgVIAdgPIgKgJIgXAIIgDgLIAagRIAGgOQAZCIBtALIACA7QADBXgLAhIirCYgAlRrGIAdgEIgRAIgAOmrSIAAgKIgJgDIADgPIAOgCIAGgNIASAEIAKgUIAKgBIAPAEIAKgNIgDATIgSAAIgHAWIgIABIgMASIgKgBIgKAZgAnarIIgDABIgCAAIAEgKIAKAJQABABABABQABAAAAABQAAAAAAABQAAAAgBAAQgCAAgJgEgAnfrHgAi3rbQgFgGgGAGQgIAHgBAMIgCgEQgCgMAGgIIAXgIIgIgIIAcgiIggBKIAAAAQgCgKAJgJgAkBrTIAIACIgNAJQgEgIAJgDgAlrrIIAAAAIgBAAIABAAIAJgIQAIAJANgNQACgCAFgCIgNANIgLgBIgBABIABADgAnLrMIAFgEQAJgHAGgJIAFACIgEAGIgJAPIAAABgAmxrVIAOgGIgEAQIgMABIgCAAQgEAAAIgLgAjUrPIABgUIAVgKIAJAFIgUAEQgIAHAAAMQABAHgBAAQgBAAgCgFgAnTrQIAZgeIACACIgCAGIgBACQgEAIgFACQgGAFgDAHIACACgAQCsYIgSgUIgNAQIgvgBIANgKIASgCIAJgTIgHgNIgQAHIgEAKIgoAaIgGASIAGAIIgHALIgIACIgOgJIASgdIgHgIIAKgQIAbAHIgKhAIAZADIAGgHIAHABIgNASIAFAIIgSAVIAKAGIA2gjIAQACIgFAJIADARIAMAJIAXAnIgJAzIg1ASgAjorVIAQgZIgFgSIACgEIAFACIAGAMQgCADgBAEQgFARgOAJIANgGIgBAKgAlTrcIACgBIABAAIASgGIgIAGIgUALIAHgKgAjwrTIAAgCQgEgGgFgFIgBAAQgMABgHALIgBgCIAAgBIATgNIAGACQAHAFAAAJIgCABgAkFrVQAHgLAJAHIAFAGgAIIrmIAHgMIgJgNIABgLIgIgIIABgLIgIgIIAAgaIgLgIIAEgGQAEgLgIgMIAUAPIAFAPIAMAJIAAAKIAHAJQgEANAGAQQABACAEABQAEAHgGADIgDABIAFAKIgDARQAFALgEAAQgFAAgRgNgAI1rbIgRgDIAAgFIABgPIgFgLIAFgJIgEgGIAAAAIgEgCIACgKIgEgGIABgQIgHgFIAAgNIgLgIIAAgJIAGADIAcALIAAAGIAHAUQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIACADIACAGIABAFIADAOIACABQAAAAABgBQAAAAAAAAQABAAABAAQAAgBABAAIAEACIACAEQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAgBQAEgKgNABIgBgBIgDgGIgCgHIgGgEIAEgHIgCgFIgHgPIgBgLQASgBANgJIACAYIASgGIACALIgGAOIAHgCIACgCQACgCADgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABABIABACQADAKgFAGIASgKIAJAMIAAgCQgDgGgFgGQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgEACQgIgJgJgEIgGgOIgQAEIgBgSIAOgNIABACIADgEIAAgCIACgBIAEAMIAFgCIAGgGIgHAAIgHgKQgHgXASgOIAIAMIADgPIAGARIAAACIADgQIgJgHIgCAAIgDAHIgBgCIgDgBIgEAAIgHAKQADgYgCgWIATgFIgUABIADgWIAQgNQANBAAGBCQABASAAARQgCA5gwAcQgRAJgTAAIgGgBgAJerwQAEABgBAEIgBADIAAABIACABIABgBIABgBIABAAQABgIgGgEIgGgCQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABgBAAIAAAAQAAABgBAAQAAAAAAAAQAAAAAAABQABAAAAAAIAAABIABABIACgBIABgBIAEACgAJFr/IABAAIABABIABgBIgDgCIAAACgAJ8thQgJAEALAGIAAgFQAAgOAKAMQAAABAAABQAAAAAAABQABAAAAAAQAAgBAAAAQABgHgEgGQgIABgCAHgAmVrdIAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAgEABgEIABAAIAQgSQACAIgLAUgAmjrfQAGgQAKgOIABAAIgOAfgAjqrxIACAJIgGAIQAAgIAEgJgAl/rjIgDAAQAAgHADgDQAEgGAAgFQAAgEACgFQAJANgHAPIgEAFIgEgDgABTr0IgMgWQAEgNANgOIAQgBIADABIgBANIgGgDIgMAHIAEAWIAKAAIgFAbQgIgHgGgKgAlHroIAagLIgTALQgHADgHABgAjlr1IgBgIQAAAAAAgBQAAAAAAgBQABAAAAgBQAAgBABAAIAIASIgJAKQAEgHgEgJgAj5rtQAEAHgGgCQgGABgFACgAmxrpIgBABIgBgBIgBABQgKgMAJgMQAHgMAIgGIACAJIgOAhIAUgfQAJAFgJAJQgGAHgEAMQgCgFgHACgAj1rnIgDgIIAIgHQAGAIgKAHgAlurvIAAAAIgCAAIAAgfIAJAXQgBAOgCAAQgCAAgCgGgAICr5QAPAAgIALQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAgAk8r5IAUgPQgKAPgQAGgAmPr/IAJgfIADAGIgHAfIgDACQgCgDAAgFgAnkr/IAAgCIADAIgAmGr9IAJgbIAAgUQAHALABALIAAAUIgFgFQgEAIgEAGIgEgEgAltsSIAGgTIAJAbIgCANIgBACIgBAAIgBABgAiltcQAGgRABgSIABgRIAEgOIgCAGQgCAEgCgGIgBACQgBATgEASQgJA+gmAvIgHACIAIgOQAVgaAKgcQAPgrAAgtIACgCIANghQACAPgEAQIAHgaIAHgNQAFAUgRAuQgCAVgHAUQgGAagLAVIgRAfIgMAUIAohegABesBQgGgNAJgKQAFADACAFIgCARIgIgCgAmZsKIAIgUIgFAdgAIAsEIgCgFQgCgEAFAAQADAGgCAFIgCgCgAkxsRIAFgDIgMAQgAlUsOQgCgCgCgCIgBAAIgBABIgCgfIAKAeQAGgJgEgKQgGgKAFgLIALAZIgCgkIAJAXIgEAcIgGgJIgJAUIgCgHgAmtsuQADAEAAAFQACAHgCAJIgCADIgGAIgAi0sdQAJgXAMgZQAPgegBgjIgBgBIAKggQAIAdgQAXIABADIAHgIQgLApgSAoQgJASgNARQAEgHADgKgAmhsVQgHgFAEgEIAHgIIAAAagAobsSIgGgRQAFgCACAJQABAEADAEQABAAAAABQABABAAAAQAAABgBAAQAAAAAAAAIgGgBgAl5suIAEgaQAFAJgBAZIgBAUgAoosTIABgBIAAABgAmPtNQAKAKADAOIAAAFIAAAPIgGgEIgEAOgAkes/QAAARgKAMIgIAGgAmessIgGAJIgCgRIADgBQAFgMgCgOIABgDQAHAGACAMQABARgBAOgAQasqIAHgaIgVgFIAIgQIApAhIgLAUgAlmsrIgCAAIgJghIARAZIgGAJgANvsxIgPgnIARgHIAEAcIAIAHIgEARgAoNs4IAIgHIAHACIgVASgAk/tRIABgGQAEACACADQAHANgFAPIgEAIQgHgRACgSgAA0s0QABgCABgBQAAgBAAAAQAAAAgBACQgBACgBADgAlztQQgIAJAAgQIgEgmQAIADAEAOQAGAWAMATIADAGIABgCIAAgFQgBgFgGgCIgDgMIAPARIAFAIIgGALgAmKtQQgIgWgCgWIABgCQANAQAIAUQAGAPgEARQgBAEgCADgAshs3QAGACACACIgDAAQgNgDAIgBgAmss6QgEgRgCgZQgBgKAHAAIAGAMQADAJAAAQQgBAMgDAHgAlftZIAAgLIARAeQADAGABAIgAkmtVIAJgNIgLAjgAOEtJIgBgdIAMgGIAGAGIgOAIIAQAWIgHgCIgFAEgAlOtnQAPAPgIAPgAmWtOIgRgfIAFgOQAHAPAEAQQAFASgCAAIgCgEgABAtaQAGAHgDACIgEAGQAAgMABgDgAkHtUQgBgDABgDIAGgCIABAFQADAGAEgBIAAABQgDAEgDAAQgEAAgEgHgAkvtXQACgNAAANIAAADIgCADIAAgGgAAxtmQAFgCAFAKIgBADIAAAJgAk9uJIANAWIADAUIgGAKgAlVteIgGgIQgHgYgCgVIACgBIAXAnIAAABIgDAAIgCACIABATQgEgDgCgEgAlLuHIAPAmIgFAGgAlsttIAAgTQANAFgDAUIAAAAIgEAMgApDtiQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIADgCIADACQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIgDABIgDgBgAPgt1IADANIgSAEgAgPtzIgDgJIAMAYgAmZuVQAEgMAIAPIAFAKQAJAQgBATgAnztqQAAgJABAKIgBgBgAANtxIgOgQIAPANIANAHIgEABIgCABQgFAAgDgGgAQwuOIAsAPIgGASgAtPuAIANgSIgNAIIgBgPIAJgKIACgFIgCAAIABgCIgBgBIgKgFIgBgTIANgFIACgEIABgCIAAgDIgBgCIAAgDIAAgDIAAgFIgBgCIgBgBIgGABIgCAFIACADIAEgBIAAAGIAAAEIgLAGIABgbIANgBQACgDAAgCIABgbQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIgBABIgBgDQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAIgJAAQAAAAAAABQgBAAAAAAQAAABAAABQAAAAAAACIgCABIAAgQIABAAQACAAAEgDIgBgCIABgCIAAgCIgEgWIgDgDIABgPQACAFAEADIAJAKIADAAIgSgZIAAgTQASALANAXQATAjAAA3QAAA4gTAfQgMAWgRALIAAgTgAswvtIgIAIIgBAXIAKgXIAFgCQADgJgGgFIgEgCgAs6wmIgCAIIAHAQIgEAMQAAABABAAQAAABABAAQAAAAABAAQABAAAAAAIABgCQAOgOgOgQIgBAAIAAgMIgJgDgAgNt7IgNgcQgCgEgBgEIgBgJIAUAeIACABQAIAOAKANgAPrt7IAIgNIAPAWIALgLIgMgYIAMgEIAPARIgQAYIgVABgAl/uAIgOgjQADgIAIALQAQAWAFAZgAmwt7QAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIgRgbQAJgIAHALQAFAHAFAFQAGAFgCAGIgHAJIgBACQgDgDgCgEgAmbt2IgGgbQAMgFAAAWQgGAFABAGIgBgBgAiEuFIAAgCQACgLAAgLIgBgLIgBgNIAFgMQACAPAEANQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgIAsIAAgPgAoMt7IAAgDQAJACgHAEIgCABQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBABgBgAlHuJIgIgFQgDgMAJALIAEAHIABABQAAgJgJgHIgDgBIACAdIgQgcIgJgBIgFgHIgKgiQAUAPAGAXIAGAOIABAAIgGgoIAZAlIgDgQQAVAbgOgLIgDAXgAoluFIABgCQAEAEgFAHIgDABIADgKgAj5t8QABAAAAAAQABAAAAgBQAAAAAAgBQABAAAAgBIABgBQAEgBAAgEQgBgHABgBIAEADIAAAOgAPIuOIAWgRIAHACIALgDIgOgEIARgbIALATIARgTIgRAOIgIgTIAEgPIAFALIAZgEIAAACIgBABIgGACIAAABQAAAAgBAAQAAAAAAABQAAAAAAAAQABAAAAAAIAAABIACAAIAFgCIgBAGIAAABIABABIABAAIACgBIABgGIADAFIABABIACgBIABAAIAAAnIgVgNIg+AngAlxuIIgCgIQgMgOgEgRIABAAIAZAcIACAOIgFACQgEAAgBgFgAgmuhQAFgGgBAKIgDAagAk8udIAAgNIAIAigABeuiQgRgcAAgwQgCgvAQgbQAGgLAHgIIACAFIAFBCIgGADIgDADQgBAAAAABQAAAAAAABQAAAAAAABQAAAAABABIgDADIgBACIAEAIIACABIABABIACAAIACACIADABIABAIIgBACIAAABIgBAAQgCAEABADIADAFIABArIgGgCIAGAHIgBAYQgLgJgIgQgABavKIgFAMIALAFIADAPIAGgOIgEgGIgGgDIAAgPQgFgDgBAAQgEAAAFAJgABXwJQABAEAAAFIAAABIgLAUIAOAPIgGgOIAKgTIABgJIgEgHIAAgOQgKAGAFAMgABbwfQAIgBAHgPQACgEgDgFIgDgDgAqiuKIgGgDIgDgCQgHgHADgEIAPAQgAmtuUQgDgFgFgGIgLgGQAHgIAOAMQAEAFAEAIQgCAGgCgBQgDABgDgGgARIuRIgRgRIALglIALADIgJAKIABAZIAcACIgBAOgAgwutQAbgdATglIABACQgJAegQAYIgFAFIAKgYIgBgBIgCABQgFAVgPAQIgIAUgAgdusIAGgJQAHAOADAPgAnPudQgHgCgHgEIgOgHIgCgCIAXABQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAAAAAIARAQQgGgBgFgCgAmVufQgFgCgDABQgEAAgGgGIgJgQIAfASQAEADgDACIgCABIgDgBgArSuqQgBABAAgBIgCgOQAHAKANAGIABABIAGACIAEAGQgNgDgPgIgAnBufIgPgNIgIgGIACgCQAPgEAGAMIgCABIAAABIADALgAtRuoIAFADIgFAEIAAgHgAPGvPIAXgBIgMglIAcgIIgKA2IgaAkgAgjukIABgBIAAABgAh0umIgDgOIAGgTQADAVgGAOgAlpu8QgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAIABgFIgIgCIgEgJIAVARIgFABIAIAHIADARQgEgNgJgKgAmeu4QgCgRAMANIAKAHQAIAOgOgDIgBACgAl/uzIgVgYIAPAVIgQgLQgGgLAHABIAbAHIAGAagAnVu7QANgJANAIIAGAGIABABIAGALgArqvEIAMgTQgCAKAAAMIACAAIAAAAQADgJABAJIACAWgAnduwIAAABQgHgBAHAAgAn9uxQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgJgEgEgGIAmAKIgHgBIgEABIgEABIgGgBgAnsu3QgEgDgCgDQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAABgBIAXAAIgBAJQgBAEgFAAQgEAAgIgEgAo9u/IAggCIgDAHIgpAEgAqivBIACABIAEAIIgGgJgAmqu8IAAAAIgIACQgMgMgUAFIgWgHIAfgBIALAFIgIgMQARgDALAOQABAEAGAFIAAACIgHgCgAiEvQIAGgHIgBgJIACAHQAEAMgDAFQAGAAgBgGQgCgFADgGIADgCQACAFgBAHIgBAAQgDAKgDgBIgHAAIgEAIgAoMvAIgLgFIAgACQAFAFgHgDQgFACgGAAIgIgBgAQivEIgDgFIgBgCIgCgFIAAgDIAAgCQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIAAACIAAADIgVABIgGgGIACgiIAIAWIAJgKIgJAGIgJgYIAGgbIANAaIAGgRIAXAAIAIARIgEgTIgagEIgIAPIgIgVIgIgEIgGgZIAdAAIgOgBIgCgIIgPAFIgJgiIAHANIAMgGIAIAJIAvAJIAAAKIgHgJIgWgCIAFAGIATACIAFAEIgDBdIgIgCIADgSIgMAJIAJgEIgEASIALABIgNAagAmpvHIgIgIIAUABQACAFgBAEIgDgCIAAAAIgBABQgBAFgCAAQgCAAgEgGgAoKvSIAXABQAGgCAFAEIAAABIgDAIIgIACgAotvIIAfgKIACADIgoALgAo5vMQgDgDgEgBIAfgDIgNAHIgGACIgFgCgAmVvQIgEgOIAZAUgAiSvNIAEgOIgEAQgArovlIARgVIgSAugArYvgIAVgaIgCARIgCAAIgEAEIgQAYgAnnvSQgHgCABgDIAXABIAMADIgBABQgFAEgHAAQgHAAgJgEgAACvoQADAGgFAJQgCAHgEADIgCAAQgFAAAPgZgAHNvpQACAEAFgEQALgFAKgFIAEgHQAAgOgRgIQgVAHAJASIAJAFQAOgEgGgPIgBAAIgDADIACAIIgHADQgJgEADgLQAEgGAIAAIAKANQACAJgIAEIgVAHIAAACIgEgXIAeg8IAAAAQBBgqAIiuQAIiug7g7QAmgLAkgJQAsAiAEBcQADBdgsCkQgsClhRAaIAAAEIgEgagAHuwrIgCASIAHAIQAHACAGgCIAGgFIABgNQgNgMgFAPIADADQADAFACgGIAAgCQgJgBAKgCQAFgCABAHQgDAKgMgCQgJgEAFgKIALgLQAOAIAPgIQASgKgIgQQgDgGgEgFQgYAAABAZIANAGQAMgDgBgLQgCgHgKADIgCAEIAGAHIABAAQAAgBgBAAQAAgBAAAAQAAgBABAAQAAAAABAAQAGgEgGAHIgBAAQgMAHgCgMIABgDIAMgLIAIACQAHAKgHANIgSAHIgPgEgAI7yNQgBAHgDAHIgPABQgNAFgBAQIACAGQAIADAFAAIAFAAQAJgLgJgKQgJAEADAFQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAIABgDQACADgBAGIgFAEIgLgHQADgKAIgHIAOAAQAMgHAAgPQgBgMgLgEQgIgFgDAIQgIANAIAMIAIABQAIgEgCgGIgBgIIgKgBQgFAJAIAEIgDACQgIgQAMgGQALACgCAOgAJQz4QAIAJgCAJQgKAQgSAEIgIAJQgGANALAKIAOgEQADgCADgJQABgEgBgEQgOgGAAASQAIADgEgFIAAgEQAEgKADAMQgEAJgHACIgGgFQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgIIAHgHQATgEAKgRQACgMgIgMIgHgEQgIgGgKAJIgEAPIAKAOIAHABIAHgFQAFgNgIgHQgCgBgIAGQgFAIAKADIABgBQgDgGADgDIAEABIAAAJIgEAGIgLgIQgHgLALgHQADgCADAAQAEAAAFAFgAJa12QAMAKADAPQgPAUgVANQgIAEgEALIgDAHQANAcAcgMIAIgMIAAgOIgJgKIgQADQgEAFgCAHQgBABAAAAQAAAAAAABQAAAAABABQAAAAAAABIADADIAJAAIAIgLQgFgBgBADQgDAMgHgKIAAgBQAGgJAEgBIAMAGIAAAFIgBANIgPAIQgSgCgGgOQABgQARgJQAXgLAKgSQgCgRgOgLQgggHgGAbIAHAUQAIAHAOgCQALgFgCgOIgNgHIgIACIgCAIQAGAEAIACIAAgBQgKgBAEgHQACgCAEAAIACABIACADIACADIgIAJIgRgDIgGgKQgCgQAPgIQAFgBAGAAIAHAAgAJX3mQADAPgJAMIgXAcQgJAMAHAPQAFAMAOAAQAQgBAIgNIAEgGIAEgGQAEgNgGgIQgHgHgJABQgNAFgFAKQgGAOAIAGQAHACAGgMQAEgIgBgEQgFgCABAHQABAJgJAG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");
	this.shape_170.setTransform(213.175,956.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#970000").s().p("AEbDOQABgNACgLIAaAsQAXAhBHgJQh7EOhoJKQA7mYAtnsgAthBQQgPgHgIgMQAogSAkgTQBBgiA3gpIABAAQAIALAJACIgCABIACAAIAKAAIgBACIgNALQiZBogfAAIgDAAgAqQAWQDegGCVgeIgLAgQhsAbjtAGgAkPg/IgOgFQANgFAGgJIAFgSIAAAAQAzAYAwANQAkAJAkAEQgDAOgLAOIgHAAQgtAAhzgpgAqTgnIABAAIgBABgArOiUIgIgSIgKgZIgKgcIgDgOQgEgJgCgKIgGgbIAAgDIgBABQggiIgSjYQAuFNBKDHgAj+puQgSAPh8AYQglAHgzgCQh6gDjOg0QghgMgggOIAAAAIgBAAQhIghg9guQkIitCvgBQAVgBAbACIgiADQhgANA4AvQDRCqECAlQCNAiCAgRQAegFAdgGQB0gcBbg6QBCgrB/iTQAxAXi9CjQgPAOgZAQQgYAQghAQIgCgDIgCAAIACAFIgOAGIAAgBIAAABIgkASIgBAAIgLAGIgHACIgPAHQAFDJgHB9IgBAdIgCAZIgBAXQgCAHAAAHIgCAQIgIAtgAGXisIAHgEIABgMQgGgdgaAEIgGAGIgEgGIAQgQQgLACgJAHQgig2gXhUQgniKgEgzQAEhLAyglIgeA8IAEAXQAFAlgBgPQACAMgCAJIAEASQAXB2AQAyQAGAVAHASQAhBWAsAfIgUAZIgHgGgAGJi7IABgEIgEAAIgFgFIACgLQAHgCAGAHQADADADAGIABAMIgFAEIgJgKgAOQkVIABAAIAAgBICriYQALghgDhXIgCg7IgDgRIAAgDIgBgUIgBgJIgBgMQgegtgGiDQADjfBUgkIAZAAQAJAGACAUQh+AJAnFsIAAgDIACAPIABANQAFBCAIAwQAPBqAVAfQisCchbA4IgHgHIAFAIQgIAEgGAFIgFACIgTAJIgCgDIgBAFIgTAGgAFCw5IAOgHQAxAvgGCKQgGCIgyBsQBIlhhJhFg");
	this.shape_171.setTransform(229.583,914.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFCC00").s().p("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KAKIAGgagAnqA1IAAABIgPAEIAoANIABAAIADABIgHgOIgCABIgMgFIgDgDIgDAAIgCACgAnFAcIgBACIgEAkQAAABAAABQABAAAAABQAAAAAAABQABAAAAABIALg0IgIAJgAmQBBIAGgHIgCgEQgDAEgBAHgAnQAfQgJANAKAOIAEgaIgCgCIgBgBIgCACgAn7AlIAPAKIABAAQADAAACACQAIAGAHgEIgGgJIgCgCIgOgFgAnZAaIAAABIgBAFIgBADIAAABIABAAIAJgNIACgBIgBgHgAnuAVQABAFACAEIAMAGIgRgaIACALgAwDB+IAKgKIABgYIAVgjIADgqIAKgKIAXg0IACAFQgFAVgHAVQgFALgKAHIABAIQAHAZgTAGIAFAJIgEAGIgPAYIgCAXIgJAIQgDADgCAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBgAubB0IAQgYIABgPIAHgHIAZg3IAIgKIAAANIgbAwIgGAEIAAAYIgOARIgGAQgAGtArIADAAQAAAAABABQAAAAABAAQAAAAABAAQAAgBABAAQALgFAGgMQALgMAOAFIgBAAQAGADABAIQgDASgTgCIgDgDQgFgLAMACIABAAIgBAEQgCAAgCABQgBAAAAAAQgBAAAAAAQABABABAAQACAIAFgDQAEgCADgFIABgDIACgJIgDgEQgIAAgEAEQgMALgPANIgDABQgFAAAAgIgAKjAcQACgNANgEQARAAALALQAMANARABIgBABQgNACgIgIQgOgNgUgDQgLADgCAKQACAHAGAFQAUAEAAgOQgNgFAAAHQABAHgEgIQgBgFAEgCQAQgCADALQgCAJgIADIgFABQgRAAgFgSgAF+AoIABgKQgKAGgOgBQgFgEgBgJIADABIADAHQAEAAADgCQALgEAJgIQAMgDAFAJQADAPgNAIIgDABQgFAAgDgGgAGHAWIgDAEIAFABIgIAJQAAAFAEgCQAGgDAEgFIAAgDIgBgGIgEAAIgDAAgAMBArIgHgFQgHgHADgJQAHgPAPAAIAPALQgLgFgLgCQgKADgCAMQADARAQgEIAFgDQACAAACgEIgCgDQgDgDgGAEQgJACAEgMIABAAQARACABANQgGAJgLAAIgGgBgAJSAqIgCgBQgGgIAEgKQAEgIAHgCIAMACIAEACIABADQAGANANAFIASACIgXAAQgGgFgDgFQgGgKgLgEIgIACIgEAHIgBAHQAAABABABQAAAAAAABQABAAAAABQABAAAAAAQAIAEgEgKIAAgCQANgCgCALIgCACQgFAEgFAAIgFgBgAJcAkIAAABIADgEIgDADgAMtAhIgKgKQAKAHALADQgBAGgCAAQgDAAgFgGgANYAgQgJgCgCgKQAEgPAPgIIALADIABAAQANARASAFIACADQgJADgKgHIgRgTIgHgCQgMAHgFAMIAEAHIAIACIAHgGQgEgJgEAFQgEAGAFgLQAKgBABAOIgCABQgDAFgIAAIgDAAgAOiAaQgIgLABgMIARgKQADAAAEACQANAFAJAMIAOAAQAGgKAHAEIgMAKIgRAAIgFgHQgIgLgOgBQgMAHAAAJQAAAJAJABIAGgEQAFgCADgDIgDgDQgHgHgFAHIgCAAQgEgCAJgFQAIgBAHAGQABANgNAEgAFVABQgDgBAAgDIAAgEQAGgPAJANIAAABIgBABQgGgKgEAKQAAABAAABQAAABABAAQAAABAAAAQAAAAABAAQAFADAHADQACgEAEgDQABgDAAgGIgEgFQgFgGgGgCIgPABIgGgGQgJgIAFgHIALARQAKABAHgBIAGADQAIAEACALIgEANIgGAFIgJAAQgFgCgCgEgAtQg3IAAACQgDAdgVAXQADgdAVgZgAomgVIgaggQgSAGgKgPIATAGIAHgDIABAAQAJAFAJgKIACgDQABgEAAgKQgCgNAFgIIAMAOQACgSAJgQQAGAGAEALQAOgLAQAGQgBANgLAJQARADAFANQgTgBgNAMQAPABAAALQgIAOgQgGQgVgTgaAGIgCAAQALAUARAMIAAABQAMgDgEgMQgEgEgEACQgFABAGADIABABQgGAJgBgQIADgDIAIAAQAKAHgHAQgAoWg1QAIAJALABQAJAAAEgGQAAAAAAgBQgBAAAAgBQgBAAAAAAQAAAAgBAAQgUgHgRgKIgFACQgGgBgDAFQACACAGAAQAGABAIAGgAoYhIQACAEAEABQAFADAIABIADgCQAJgKARgBIgEgCQgEgDgDACQgKgDgNAAgAonhRIABAHIADAEIAAgCQgCgKgBAAIgBABgAonhcIABABQAHAIABALIAMgKIgCgYIgHAWIgBACIgMgNIABADgAnyhpQgGADgFAFQgKAKAFA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UgEACgUIgGgQIAKAHQAFAVgNATQgIANABALIAFAHIgDAUIADAEIAAACQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQgDAAAEAGQACACABAHQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAQgCAFAFACIAFAAIABABQgCAHgEgDIgIgCIANAIIgKABIALAEIgPgBIAEAGIAJARQAjgkAAgwIAAgCQACgigGgbIABgFQAFgagWgOQgdgUgigHQgagEgJATIAbAKQADgEAAgEQAAgIgGgBQgOACAJAEIAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAABQABAAAAABQAAABABABQABAGgGgDQgFAEgBgHQAAgFABgEIARgBIAHAMIgCAHIgHAFQgQACgNgOIgEgHQAMgOAXAAQgqgQggAcQAAABgBAAQAAABgBAAQAAABAAAAQgBAAAAABQgEAIgJgEQgDgGAHgEQAPgKgLADQgDABgEAAIABgFQAJgbAZADIACABIghAZIAngaIgRgGIAfgHQAMACADgEIgFgEIANgEQgOgWgbgCQgVACAAATQAGAIALgIQAJgHgEgIIgBABQgKAEADAAIACAAIABAAQgBAJgJgCIgBgBIAJgNIAMACIAAABQgFAUgSADIgKgOQACgHAHgDQAIgGAKgEQAdADARAZIAfAGIgKgJQAJgBAOACQAOAFAMgGIAEABQALAGgFgMIACgCQAUAHAPASIgGgSQAUAHATAVIgFgNQAZADAJAXIAAgLIAdAgIABgQQAPAXgBAfIAKgUQAPAXgKAXQACgGAAgKQAAgJgCgGQgCgIgDAAQgDAAgCAIQgCAGAAAJQAAAKACAGQACAHADAAQAAAAABAAQABAAAAgBQABAAAAAAQAAgBABgBIgBACIAJgJQADAXgNAUIAIgIIABAJQAAAJgGAIQgGAHAHAGIgCADQAJgEAWgQQAGgGAEAAQAKgEABgOQAAgEAEgDIgLgUIgJAGQAEgBADABIAGAFIgKAPIgNgGIABgSIAMgHIAQAIIAFAPQAOgOgCgXQgBgIgDgHQgKgVgTAEQgMAKADAPIAKABIgEgEIgBgDIAFgKQAIgJAJAIIAAAUQgNAKgRgKIgDgMQAEgQAQgGIAfATQAJgPgIgUQgJgZgSgMQgMgIgNAGQgRAIgFAOQAEAJAHAHQAFAEAHACIAPgKIgEgPIgRAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAAMAKgBIAAgBQgGgBAAgEQAAgEACgDQAIgCAAALIAAABIgEADIgIAEIgHgMIABgFQACgHAKAAIASAIIAAAOIgEAEQgKALgNgCQgWgHAFgZIAKgMQgWAPgVgLQgKgEgBgKIAIgPIAHgDIALAIIgKAQQgIgDABgKQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBIABgBQAHAAgCAHIgCACIgBgCQgDACADADIACACQADgFAAgEQAAgIgJADIgGAMIACAHQAJALAQgDQALgDAKgFQAKADAJgKQAUgEATAMQACgdAagJIALAFIAEAGIgNAZIgPgCIgDgLIAGgEIgCAEIAIALQAJgEAEgKQAFgKgJgFQgcAEgBAgIARAXQANAQgEASQgCAMgLAMIAEAhIgCADIgMAQIgFAFQgKARgJAHIAFADIACARIgOAKQgMgDgDgPIAIgJIAKACQAEAEgCAHIgCAEIgFAAQgEgCAAgEIACgBQACAHADgFQACgJgJABQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgCAGAIAIQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBIAJgLIgLgNIgHACQgTAQgPAUQgKANgRAKIAZgLIgLAVIgVAOIAQACIAFgNIANgFIAOACIAFgSIAFgCQAKgDAKgCIACgIIAXgPIgBgKIAUgWIACgNIAKgKIgBgSIALgNQgGgTALgPIgHgDIAAgWQAAgHAIgDIADgLIgQANIAVgoIgRAKQAJgGAHgKIgBgCIgJgPIAKACIAKAHIABgbIAEgBIABAPIgHAoIACgTIgIAWIgDAhQAJgaAJgYQAJgVgKgUIAEAAIAEAKIADgMIAIgBIAEAGIACgHIAIgBQAFAQACASQACAegBAfIgIAOIgCApIANgRIAAACQgBATgJAOQADgKACgMIgXAfQAJgRAEgUQAEgNgFgNIgFAYQgIAegLAdQgTAzgmAeQApgoARg1QgVAygnArIAOgBIABgCQAJgIAKgMQAGgKAGgLQANgaAKgdIACgBIghBjQATgeALgiQACgHAEgHQgLA0ghAsQAHAJAKADQAGACACAEQABAEAHACIAMgJIAOADIAHAMQgDANgQgGQgLgMAOgCIACABIgCACIgCACIACAGIAMgBIgKgNIgUALQAbAcgBAmQgBApgVAfQgKAPgDALIgEAfQAAAHgDAGIAHAGQAHAJgDAOIgOAJIgJgJQAAgEADgDQAFgIAHAEIAAAEQABAFgIgDIABAAQAGgCgHgBQgIADAEAEIABADQAIAGAHgLIgFgSIgGgFQgfAqg6ABQgOAAgNgJQgfgWAageQAsgKAEAnIgFAKIgRAGIgLgFIgIgLIAAgKIAMgLIANADQAGAJgHAHIgMAEIAQAEQAIgKgCgMQgRgTgVAJIgKAPQgCAoApgBQAagDAVgKQAhgUAGgmQgQAUgYAAQgVgHgCgXQgCgTAUgJQAUgMALAWIgHARQgNAEgHgHQgKgNAOgKIAKARIAIgCIgGgPIgGgCQgUgBgFATQgIAZAZAMQAZgCALgRQANgVAIgWQAFgOAGgOQgMAQgTABQgVgEgDgTIAKgVIAOgDIAOANIgIARIgOgDIgDgJQADgLAKABQADAMgKAEIAJACIAGgNQgIgMgOAFIgIASQADAPARAEQAXgDAJgVQANghgSggIgeAXIgMgOQACgUATABIABAPQgLAGgEgIIgCABIACAMQAEAAAEgCQAPgHAKgLIgWgUIgUgJQgIAEgIAJIACgEIgFgIQADAFgDAHIgBAAIgBAAIgNgVQgYgJgTARIAAACQAIAAAJgDQAOgCAQAIIAHAKIACAFQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAAAIgKgQQgYgKgVANIgGARQATgQAaAFIANALIgCADIgBABIgNgMQgPgDgQAKIgNAGQgGADACAFIADAEQAPgSAaAEIALAFIAGgEQgIASgRALIAXgBIATAQIgIAWQgLAJgOABQgQgQAMgOIAMgDIAHANIgLAJQgDgDABgCQADgLABAHIgBABQgCAHAJgIQgJgOgHAMIAIATIASgKIAHgOIgDgHIgPgLQgXgCgSAJIASAcIgLgBIACAjIgHgMQgHgHADAOIAEAKQAGARgOAKIAAgRIgSAsQgHgPgGAVQgDALgGALQgKAQgFgKIggAbQAIgQgGAHIgcAaIAGgRIgqAXIADgHIgjAJgAp2i5IAIgCIAAAAIAOgTIgGgDIAAgBQgBAEgPAVgAp8jOIgIAVIAJgBIAZgrIABgCIgbAZgAo0jAIgGAGIAPgJgApqi6IANgBQAGgCAGgDIgCgCQAAAAAAAAQAAgBAAAAQgBAAAAABQAAAAAAAAIgEgQgApJi/IAMgDIgBgJgAoTjMIgDAIIANgNgApOjGIANgLIgBgNgAopjIIARgKIAAABQAAAGAFgDQANgHANgMIAAgLQgDADgBAEQgGAJgDgKIAAgBIgQASQAAABgBAAQgBABAAAAQgBAAAAgBQAAAAgBgBgAo1jYQgDAJADAGIAEgCIAIgXIgGgKgApVjgQgEASAIADIAKgTIgDgFIgBgLQgIAEgCAKgAp9jeIgGARIAngpgAosjVIABAHIARgOIAHgXQADgJgFgHIgOAnIgBABIgBAAIgBABIgBgCQgDADgCAEgAo9jSIAJgcIgCAAQgJALACARgApVj6IgLAlIAWghIABgNgAn4jZIgBACQAMgFAEgKgAoPjwIgHAZIAPgTIgBgMgApFkEIgBAiQAFABADgCQAEgHAAgJQABgUAGgRgAoEkHIACAiIAMgZIgFgRgAnXkZQgFAdgTAVIAigiIAAgOIgBADQgCAFgDgCIgCgBIgBgLIgBAEgAnvj8IgHAVIAOgRIAAgQgAodkJIgIAMIgIALIAHALQAJgOAEgUIgBAAIgBgBIgCABgAnZjzIAAABIgBACIAHgIgAoTkMIADAXIAIgMIAAgigAo0j2IAIAAIANgdIABgfQgZAZADAjgAngkbIgEAeIAJgrgAn6kdIAIAeIALgbIgGgZIgGAVIgDgEIgDgDgAoFkqIAEAdIAAgmgAobkNIABgCQASgRgCgVIAIAAIAAglIAKATIADgFQAGgQgJgMIgOgIIAAAPIADAFIgIAAIAAAkIgBgDIgEgQQgQAcAFAigApGkRIADAAIALgHIgOAHgAnfkxQADAHAJAGIACARIADgfIgHgGIgDgUIgFALIgDAAQgEAAAFAQgAnKkiIAFAOIAIgGIgFgVIgIgEgAnvk/IAOAhQADgVgKgUIAAgBIgFACIgDgCQgGAGAHADgAm8kxQAAALADAFIAFgNIgEgKIgEAHgAn9k9IAKAZIABgTQAAgMgKgCgAmpkrIACgMIgCgFQgBAEABANgAnHk0IAIAAIAAgmIgIAAgAnPk3QALgPgHgSIgJgHgAm9lMIAJAUIAAgXIgKgEgAm1lrIAFAVIACAZIACgfQABgPgIAAIgCAAgAoglFIAJgBIABAAIAAgBQgFAAgFACgAnolqQAEALAAAQIAFAJIAHgaIgIgLQgIgMgLgBQAIAIADAGgAoYlUIACABIgOALIASgGQAIgTgCgSQgCgWgVgFIgRgBIATAGIgTAGIANAGQgJAFAGAEIABACIgDABIADAGIALAIIgEgVIAJABIgCgIIALAEIgCABIgCAAIAEAJIgBACIgOgFIAIAVIgCABIgCAAQAAAFADAFgAnxlmIAFAdIAEgWIgCgGQgCgGgCAAQgBAAgCAFgApVlMIAFgIIAFgJIgCgFIgEgBIgBgBQgIAAACgPIgHAEIgBgIIgJAHIADgKIgPAMQgEAIARgGIgCAJIALgHIACAPIAKgGIADANIgFgJIgLAHIgCgPIgNAJIABgLIgKADIAGAUIgDgLIAGAIIAJgEIAAAKIAIgGQABANAIgGgApulOQAAABABAAQAAAAABAAQAAAAAAABQAAAAAAAAQABgBAAgBQABgBAAAAQAAgBAAAAQAAAAAAAAIgEACgAmmlfIADANIgCgUgAnBlkIALASIgBgNQgBgHgDgGQgIgLgIgHgAqZluIAHAFQAGAEAGADQAFADAGADQgEgQAIgJIADgEIAfgLIgHAAIgBgCIgBgBIARAAIgEgNIAPABIgHgMIAPgCIgIgLIgPgBIALAKQgGACgFgCQgPgDAOAGIABADIgCABIgJgBIABACIABACIgBABIgBAAIgBAAIgEgDIAEAKIgLgBIADAFIAAAAIAAACIgBABQgKAAgIACIACABIABADIgWgEIAHATIgNgHIACANIgKgKgAnRlrQAAAMAKACIAAAAQgBgSgKgQIgDgBQAFAKgBALgAmjlrIAJAEIgPgWgApNloIALgLIgEgOIgUADIgCAKIAKgEIgCAOIADgDIACAAQADAAgBAFgAmwl/QgHACAHAKIAGAJIgDgVIgDAAgAnpl7QAFAIAIADIAJAGIgJgZQgEgKgIAEIgJAAgAoGl0IATAJIgEgNIgSgGgAnMmJIABAIIAWAQIAAgBIgBgFQgEgPgKgFgAqdlxIADgPQAIANgEgPQAAAAgBAAQAAgBAAAAQAAAAAAAAQABgBAAAAIAMAIIgGgQIATADIACgFIARABIgEgLIAHAFQgFgHADgJIABAAIACAAQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAIgBgCQAAgBgBAAQAAgBAAAAQAAAAAAgBQABAAAAAAIARgBIgKgKIAWACIgOgNIAWgFIgVgGIAAAIIgPABIAIAIIgSACIAHAGIgTAAIAKAMIgTgEIACATIgTgMIgDAQIgMgJIgBAaIgQgJgAo0l0IgKgHIASAAIgRgIIASgGIgOgEIgHACIgBAAIgBgBIAAgBQAJgFgUACIAPAcIAKAAgAoKmCIAeAEIgBgBQgNgOgTAAIgMgCgAnjmRIAVAOQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgJgLgPgGgArAmhIAKAUIASAHIABgaIANALIAAgSIAVANIgGgUIACACQAQAIgFgHIgFgHIASABIgEgIIAPAAIgIgJIABgBQAcAGgLgKIgMAAIgKgCIAEAEIAAABIgCABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAIABACIAAABIgCABIgPgEIAFANIgBABQgSgLAFARIgNgKIgCAOIgKgJIgCAOIgIgHIgHAPIgIgMgAmLmhQABAGgZASIgBACIAFgBIAGgDQAJgFAGgHIAFgHIgHgGQgEgCgDAEQgQgCgKAMIAOgHIgTALIAFAJIAagXIgZAbIAHAAIACgCIAXgZIABABgAm4mIQAGgGgHACIgCAAQADAFAAgBgAmzmOIgGgOIAAABQgFgNgFgFQgNgJgUgIgAnnmoIASAQIgGABIANAJIANgBQgEgJgFgDIgLgFIABgCQAAABAAAAQABAAAAAAQAAAAAAAAQABgBAAgBQABgEgKgGQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBIgGgBQgFAAACAGgAoBmWIgBAHIAbgCIgDgDIgXgIIAAAGgAo9mQIAxAAIAEABIACgBIACgEIAAgEIgagBIACgCQgCgEgEgBIgBgBIAAgCQAGgCADAFIAngHQAFgBADgDIgUgOQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAAAIAAADIABADIgJAKIgkgBIAhgDIAIgIIgvACIA/gNIgCgBQgagNgXANIgCgCIALgGIAMgCIgBgCQASgPAPgVIADgDIALgLQAJgKgFgLIAGgGQAKgegCgaIgBACIgKA1IgDgUQgCAEABADQABAMgEANIgJAVIABgfIgNAtIgBggQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAABIgBAVQABALgHAJIgDgaIgNAmIgCgZIgQAfIADgWIgTAWIgBgDQACgFgBgEQgBgCgDgCIgEAAIgKAPIAYAEIABABIgTgBIAPAHIgTAEIAQAGIgOADIAHADIACACIAAAAIgBABIgBAAIgBAAIARAJIgNgCIAGALIgQAAgAnxmjIgUADIACAAIAnAFIgOgJIgHABgAlNmnQgFAKALgGQgBgFgBgBQgDgCgEACIACAAQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABgArGmiIABAAIgBgBgAnAnXQABADAFADQAIAIgBAOQAAAEgCADQgHAJACAIQANgPAAgWIgPgRIgEACgAq1mrQAFAIAFgOIAHAEIABgOIAKAJIACgPIAMAMIADgKQAJAGgFgJQgDgFADgCIACAAIADgBQASAIgIgIIgKgJIgFAKIgGgHIgDAJIgIgHIgCALIgHgGIgIAKQgDgLgHANIgFgMIgMARIABANQABAIAFgNIADgBIACAGgAnNnRIAQAPIAAANIgFAJIACABQAMgGgDgQQgDgHgFgEQgEgHgFAAQgCAAgDACgAnxnBIAAABQgKALAMACIAIADQAGAEACgFIgLgPIgLgDgAnDm8IgEAIQAAADACACIAEgRIgOgNIgNANIgBAAQAAABABAAQAAAAABAAQAAAAAAAAQABAAAAgBQAHgGAIgDgAnTnBQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAAAQAAAEACACQACACADAAQADAAACgCQACgCAAgEQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQgCgDgDAAQgDAAgCADgAlrnPIgBAHIAEAIIADgIIgCgMgAn2nIIANAEIAQgIgAlbndQgJAIACALIAAAAIAghLIgcAjIAHAIIgXAIQgFAIACALIABAFQABgMAJgHQACgDADAAQADAAADADgAmqnKIANgJIgJgCQgIACAEAJgAoCnKIgCgEIABgBIALACIAOgNQgFABgDADQgMAMgIgIIgKAIIAAAAIAAAAIAAAAIAOAAIAAAAgApqnSIgFADIAMAFIAAgBIAIgPIAEgHIgFgCQgGAKgIAHgApVnXQgKANAHgCIAMgCIAEgPgAl3nlIgCAUQAFALgBgNQgBgMAJgHIATgFIgIgEgAp4nSIAIADIgBgBQADgIAFgEQAGgDADgHIABgCIACgGIgCgCIgZAegAmBoCIAEASIgPAYIANAFIABgKIgMAFQAOgJAFgQQAAgEADgDIgHgNIgEgBIgCAEgAn3neIgHAKIAUgLIAHgGIgSAGIgBAAIgBABgAmUnVIABgBQABgJgHgFIgHgCIgSANIgBAAIABACQAIgKALgBIABAAQAGAFAEAGIAAACIgGgGQgJgHgGAKIAVADgAo9ngQAAABAAAAQAAAAABAAQAAAAABAAQAAAAABAAIABAAIAEACQAMgVgDgHIgPASIgBAAQgCAEABADgApInhIADAAIAOgeIgBAAQgKAOgGAQgAmSnjIAGgHIgCgJQgEAIAAAIgAogn6QAAAFgEAGQgDADABAHIACAAIAEACIAFgFQAHgOgKgNQgCAEAAAFgAnrnrIgIAFQAIgCAHgDIATgKgAmLn/IABAIQAEAJgEAHIAJgKIgIgSQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAABgAmqnnQAFgCAFgBQAHACgFgHgApNnoQAEgMAHgHQAIgKgIgEIgUAeIANggIgBgJQgIAGgIAMQgIAMAKALIAAgBIACABIABgBIADAAQAEAAABAEgAmcnyIADAJIABAAQAKgHgGgIgAoUnyIACAAIAAABQAFAPABgXIgIgXgAngn8IgHAHQARgGAJgPgAo0oBQAAAEADAEIACgDIAHgeIgDgHgAqJoBIADAGIgDgJgAohoaIgJAbIAEADQAEgFAEgIIAEAEIAAgTQgBgLgGgLgAoSoUIAKAXIACgBIABAAIABgBIACgNIgKgcgAlBqSIgBARQgCASgGAQIgoBfIANgUIAQggQALgVAHgZQAHgUACgVQAQgugFgUIgHANIgGAaQADgQgBgPIgOAhIgBACQgBAtgPArQgKAbgUAbIgIANIAHgBQAlgwAKg9QADgSACgTIABgDQACAHABgEIACgGgAo+oNIAEAJIAEgdgAnVoTIgHAMIAMgQgAn9oUQADABABADIADAHIAJgUIAFAIIAEgbIgIgXIACAkIgMgZQgEALAFAKQAEAKgFAIIgLgdIADAfIABgBgApXoNIAGgIIACgDQACgIgBgIQgBgFgCgDgAk2qRIAAABQACAigQAfQgLAYgJAYQgDAJgFAIQANgRAJgSQASgoALgqIgGAJIgBgDQAQgXgIgdgApJohQgEAFAHAEIAEAKIAAgbIgHAIgArGolIAHAQQAJAFgEgHQgDgDgBgEQgCgHgEAAIgCAAgAoeowIAIAcIABgVQABgZgGgIgArMoWIABAAIAAgBIgBABgAowoZIAEgOIAFAEIAAgPIAAgFQgCgPgLgJgAnUoeIAHgGQAKgMAAgRgAo6ojQABgOgBgRQgCgMgIgGIgBADQADAOgGAMIgCABIABARIAHgJgAoMotIABAAIABABIAGgJIgRgZgAqyo6IgGANIAVgSIgHgCgAnkpTQgCARAHARIAEgHQAGgPgHgOQgDgDgEgBIgBAGgAn9o1IAFgLIgFgIIgPgRIAEALQAFADACAFIAAAEIgBADIgDgGQgMgUgGgVQgEgOgJgDIAEAmQABAQAHgJgAo4p+QABAWAIAWIAMAdQACgDAAgEQAEgSgFgOQgJgUgNgQIAAACgApXpmQADAYADASIAGAEQACgHABgNQABgPgDgJIgHgMQgHAAABAKgAoEpbIAVAhQAAgIgEgGIgRgegAnLpYIgCAXIAMgjgAnrpMQAHgPgPgPgApLpvIARAfQAFALgGgZQgEgQgHgPgAmrpcQgBADABACQAGANAHgJIAAgCQgEACgCgGIgCgGgAnTpZQgCAKAEgIIAAgCIgBgGIgBAGgAnYpYIAHgJIgEgUIgMgWgAoIqWQABAWAHAXIAHAJQACAEADADIgBgTIACgCIAEAAIAAgBIgYgnIgBAAgAnmpdIAGgGIgPgmgAoQpvIAGASIADgNIABAAQACgTgMgGgAroppQAAABAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAAAIADABIADgBQABAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAgBgBIgDgBIgDABgAo9qXIAYAvQABgSgIgRIgGgKQgEgHgDAAQgDAAgBAFgAqYpsIACABIgBgGIgBAFgAoyqlIAOAiIASAQQgEgZgRgWQgEgGgDAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABgBABgAplqbIARAbQAAABgBAAQAAAAAAABQAAAAAAAAQABABAAAAQABAEADADIABgCIAIgJQABgGgGgGQgFgEgEgHQgEgGgFAAQgDAAgEADgApGqTIAHAaIABACQgBgGAFgFQABgSgJAAIgEABgAkpq3IACANIAAALQAAAKgCAMIAAACIAAAPIAIgsQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQgEgNgCgOgAqxp9QgBAFADgCQAIgEgJgCIgBADgAnzqQIAIAFIAGAQIACgXQAOALgVgbIADAQIgZglIAHAoIgBAAIgHgPQgGgWgUgPIALAiIAEAHIAJABIAQAcIgCgdIADABQAKAHAAAJIgBgBIgEgHQgFgFgBAAQgCAAACAGgAmWqHQABADgEACIgCABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIAMAAIAAgOIgEgDQgCAAABAIgAoYqSIADAIQABAIAIgFIgCgPIgYgbIgCAAQAFARALAOgAngqfIAHAUIgHghgApkqoIALAHQAFAFADAGQAGALADgLQgDgIgFgFQgIgHgGAAQgEAAgCACgAqQqsIAPAHQAGAEAIACQAFACAFAAIgQgPQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIgYgCgAo5qhQAAAAABABQABAAAAAAQABAAAAAAQABAAAAgBQADgCgEgEIgegSIAJAQQAFAHAEAAIADgBIAGACgAp7q2IgBACIAHAGIAPANIACAAIgEgLIAAgBIADgCQgFgIgJAAIgIABgAkcq2IAEANIAAACQAGgOgDgUgAoXrIIAHACIAAAEQAAABAAABQAAAAAAABQABAAAAABQABAAAAAAQAKAJADANIgDgRIgIgGIAGgBIgWgRgApCq6IAMAQIABgCQAOADgIgOIgJgHQgGgGgCAAQgEAAACAKgAokq1IAMAJIgGgaIgagHQgIgBAGALIARALIgPgVgAp5q9IAnARIgGgLIgBgCIgHgFQgGgEgFAAQgHAAgHAFgAqBqxIgBgBQgHAAAIABgAqhqzQAGACADgCIAFgBIAHABIgmgKQADAGAKAEIACgBIACABgAqWq/QABADAEACQAQAJADgJIABgIIgYAAQAAABgBAAQAAABAAAAQgBAAABABQAAAAAAAAgArirCIgLAKIAogEIAEgIgApOq+IAHACIAAgCQgGgGgCgDQgKgPgRAEIAIAMIgMgGIgfACIAWAGQAVgEAMAMIAHgCgAkjrZIgFAGIAAASIAEgHIAHAAQADAAADgJIABAAQABgHgDgGIgCADQgEAGACAFQACAGgHAAQADgGgDgLIgCgHgAqxrCQAKADAKgFQAHADgFgEIghgCIALAFgApNrJQAHALABgKIABgBIABAAIACACQABgEgCgFIgTgBIAIAIgAqXrGIAIgCIACgIIABgBQgGgEgFABIgYAAgArRrKIgHAEIAogLIgCgDIgfAKgArlrSQAEABADADQAFADAGgDIAOgIgAo5rTIAUAGIgZgTgAk3rPIAAACIAFgRgAqLrUQARAHALgHIABgBIgNgDIgXgBQAAACAHADgAkwrpIABAAQAGAIgIAOIAJgJIgGgfgApYrbIASAGIgNgKIgKgEgAq4rXIAVgEIgagEgAlIriIABAEQgBAKAEgPIgMgJgAqRrfIAyAFIgMgIIgsgBgAkbrxIABAFIABgBQABgMgGgMIADAUgAklr6IgFgGIAGARIABgBQAGADgIgNgAO9j2IAHgbIgIgPIAGARIgTAOIgRgBIgVghQAMgUAYAAIACAAQAXAOAGAaIgGAYIAIAKIAEABQAEACAFgGQAKgOgHgNIgLAKQAEAIgHgFIAAgBIAJgRIAKAAIAGANQgDAUgPALQgVgBgFgRgAOdkqQgKAFgCAFIASAZIATgHQAHgMgPgKIgKAAQgFAGADAEQAGAKgHgEQgJgPAQgJIAIABQALAEgOgIIgDAAQgFAAgIAFgAJej/QA8grgIhMIgHhFQAAAIgoirQgqirgVh3QgUh5AfAAQAshFAugwQA+hEAGgrQgyBOiFCWQgfA9BWEwQARA5APB3QAlCRhEBHIgMgDQA3hOgUhzQgUhyg6jNQg6jMBDhHQBDhIBPh2QhGAFgqhNIAAgTIAAg6IAOANIAQAOQgMALAMAoQAcAtA9AQIAChEIATAEIARgFQgBAwAKAQQAvgBAzgzQAEgtgKgOIAOgKIAOgPIAAA8IAAAXQg+BCgTAFQgVAHgPAAQgGAAgGgBIixD7QgCBPBtG4QAVBSgMBGQgNAqgZAZQgMgEgSgJgAuxkTQANAJAOANIgPAEQgHgNgFgNgAESkBIgFgFQgJgMgCgNQgBgKAFgIQAPgWAYABIATAVIACABQAEAAADgCQAWgFAIgVIgRgTIgCAAQgTAIgHAQIAIAHQAFAAAAgFQADgOABAMIgHALIgOgGQgGgGAFgIIAIgLQAMgMANABIAZAXIAAADQgIAegcAFQgIAAgGgCQgKgIgJgMQgGgCgDADQgQAJgHARQgCAQAPANQABACAFAAIAUgNIgCgRIgOgFIgCAGQgKgHAKgEQALgGAHAIIAEAEIACAZIgBACQgKAOgOAAQgFAAgHgDgAu9kxIgGgRQAQAGATALQAehcBiAlQAOgkAfgbQACAKADAJQgmAjgFBNIgUAGIhMAaQglgdgfgQgAtxkSIAKAHQARgoApAKQAAgIACgIQgJgBgIAAQglAAgQAogAuPknIALAHQAeg2A8AOIAEgQQgTgGgQAAQgyAAgUA3gAkskJIgJgEQgGgTASgEIAAAAQACAEAAAFQABAGgIgBIADgIQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQgIAOAMADIALgRIgQgaIAOANIAHANIgFAMQgCAJgJAAIgCAAgArqmHIAJAcQgTAUgBAmIgTAHQABgxAdgsgANglRIAEgLIAUgRIgRgXIgGgIIAHAHIAYAVIgEANIgTAMQAEASAWALIAEAAQAIgMgIgKQgBgDgEgCIgKAJIADgOIARABQAGADABAJQABANgIALIgMAEgArXlRIAIASIgSAHQgBgUALgFgAF+lQIgLgUIgGgCIgGgPQgBgLAIgGIACgBQAKgIAKgCIgQARIgGAFIAFARIAUAUIAKgGIAGgEIgBgNQgDgFgEgDQgGgHgHACIgBALIgBAHIAFgCIAFgBIgBAFIgDACQgHAFgFgGQgGgDACgJQAAgFADgEIAFgGQAbgFAFAeIAAAMIgHAEIgQAJgAwFlcIgEgCIAEgBIAqgIIAMgEIAIgFQAJgDAGgIQAWgXgLgbQgNgfgjAEIgFAEQgRAPADAZIAFAEQAJAKAKgDQAKgCAHgGQAHgFgDgJQgDgEgDgCQgEgDgEgBIgLAGIgBAEIABAFIAEACIAEgCIACgBQABAAgBAAQgCAEgEAAIgDAAIgFgCIgBgEQABgFACgCQAGgKAOACQAEADADAFQAEADABAGIgFANQgKAJgKAAQgJABgHgFQgSgIAGgXQAFgPAMgJIACgCQATgHAQALQAbAUgDAgIAHgJQADgEAGgBQAYgJAVAPQAHAPgHAOIgFAIIgXgDIgIgPIAOgOQABgCAIADIAAABIABAGQAAAEgDADIgCADQgEAAgBgCIgCgEIABAAIABgBIABABQAEgBACgEIgBgDQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgGAEgFAGIAHAMQAFACAFAAIALgCQAEgHgBgPQAAgHgEgBIgCgCQgRgHgTADIAAABQgNALgFAMQgHANgOAKIgTAKQgPAHgQAEIgIABQgJAAgIgCgAh1lbIg1gCIAAgKQAggaAVAZIACgQQgUgfgkAgQAAgIgCgIQAqgyAUAyQADgLAGgJQgcg4gwA6QgEgKgFgJQAzhEAzBCIAGgEQgQAygWAlgANJlfQgNgFABgKIABgFIADADIAMALIAOgFIABgDQADgLgMAAIAAgBIAGgCIABAAQAJAAgDAEQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAIABAEIABABIgEAOQgHAGgIAAIgIgBgAMWl0IgagyIgogMIgKAIIgNAAIATgtIgCgGIALgLIAKAEIABgDIgYgOIACgpIgRgIIgUADIARgYIgNgWIgTgFIBHgnIgRgKIgSAVIgEgHIAGgYIAGgEIgLgBIgVAVIgGgJIAcgdIA0AkIAFhSIANgHIARAxIABg5IAQgBIgLgcIAZgMIgUgPIgDgMIAWgWIgwgXIAJgYIg4AWIgMgHIAOgjIg9gNIAVgcIgigrIASgXIgTg2IAsggIAPg9IAhAAIAAg4IAtAQIAbgvIAWAEIAOgpIApAIIAPgtIArALIAJgYIAEgJIApAOIAJADIgQAbIATAEQAPgSAUgJIAaAFQhkAygCDqQgCDRB2AjQhtgLgZiIIgFAOIgbAQIADAMIAYgJIAJAKIgdAOIADAWIAdgJIASAFIAECEIAvAZIAIgDIASAQIgOAAIARAbIgHADIgagRIAKAZIgUgEIgCgfIgMgKIgJgCIgTAIIglBQIgqgeIgEAVIAmAdIggBCIAOBEIAAABIgBAAIhBgLIgqAzIAGAIIgEAJIAEAOIgFAMgAMJnyIgOACIgDAPIAKADIAAAKIAJAPIAJgZIAKABIAMgSIAJgBIAGgWIASgBIADgSIgJANIgPgEIgKAAIgKAUIgSgDgANdoaIghBKIA2gTIAIgzIgXgmIgMgJIgDgSIAGgIIgQgCIg3AjIgJgGIARgVIgEgIIAMgSIgHgBIgFAHIgZgDIAKA/IgcgGIgJAQIAGAIIgRAdIANAJIAIgDIAIgKIgHgJIAHgRIAogaIAEgKIAQgIIAHAOIgKATIgRACIgNAKIAvABIANgQgANnpMIAVAGIgGAaIAYAGIAKgUIgpghgAK8paIAPAmIAJAHIAFgRIgIgIIgEgbgALepoIACAdIAGADIAFgFIAIADIgRgWIAPgIIgHgGgAMtpmIASgEIgEgNgAOypvIAFgSIgsgPgANGp9IAMALIAVAAIAQgYIgPgRIgLAEIAMAYIgMALIgPgWgAMkqQIAHAPIA/goIAUAOIAAgnIgBAAIgBAAIgCAAIgDgFIgBAFIgBABIgBABIgCgCIAAAAIABgGIgFACIgBAAIgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIABgBIAFgDIABgBIAAgBIgYAEIgGgLIgDAPIAHATIASgPIgSAUIgLgUIgRAbIAPAFIgMADIgHgCgAOTqkIARARIAXAAIACgOIgcgCIgBgZIAIgKIgKgDgAMtr4IALAlIgWACIADAsIAagkIAKg2gAN3rXIABABIAAAEIACAFIAAABIADAGIAHAEIANgZIgMgCIAFgRIgKAEIAMgJIgCASIAIACIAChdIgFgEIgTgCIgFgGIAWACIAHAJIAAgKIgvgJIgHgJIgMAGIgIgNIAKAhIAPgEIABAIIAOABIgdAAIAHAZIAHAEIAIAUIAIgOIAbADIAEAUIgJgRIgXAAIgFARIgNgaIgGAbIAJAYIAIgGIgIAKIgIgXIgCAjIAGAGIAVgBIAAgEIAAgBQAAAAAAAAQABgBAAAAQAAAAAAABQABAAAAAAIAAgBIABABgAOhrYIAmAGIADgMIgmgNgAOnr8IAnASIADgbIgjgBIgHgDgAMysiIAXAWIgDgfIgEgQgAOqsYIAVAIIARgFIgEgLIgkgHgAOstHQgFAEAAAFQAAAGAFAEQAGAEAIAAQAIAAAFgEQAFgEAAgGQAAgFgFgEQgFgEgIAAQgIAAgGAEgAMbtZIAgAPIgXgcgAOUtLIgGgqIgOAJIgOABIASgFIAJgJIgNghIgOgGIAIgDIgJgKIgHAGIgOgBIgDAJIgIgBIAQgOIANgBIgVgWIgLANIAHAFIgaAKIAbgfIgIgLIgHgCIgGgEIgbAVIAggIIABgJIAEAMIglAMIgIAOIgQAGIgCALIgOALIAEAKIAVALIgBgaIAXgIIgUAMIADAYIAVgDIAGgGIAHACIAOgMIgMAQIgLABIgIALIAQAHIAGAOIAKgHIAMAJIAGgCIALAJIAHgEIAKAGIAMgDIANALgALatrIAjgMIgMgEIgMgGgALCu1IAbAXIAdAQIAAgKIAHgIIAHgCIADgJIARgKIgOgLIgKALIgGgHIgIAAIgOAPIgLgIIAAAXIgFgcIAPAFIATgLIALAFIAIgJIgbAAIgMAHIADgHIAmgEIANgPIAIgBIAGgFIAIAAIADgNIgbAIIgFgIIghAWIgUABIgOANIgJgMIgQAFIAHAJIAPAEIgLgDgAOWuQIAWgNIglgTgAM+v6IB9BUQgIgqAAg1QABhFAJg1IgfAcIgIBXIAEAHIgDAOIgTgOIAAAJIAFAKIgSACIAVg+IgWgMgAMrvZIgFAIIgSAGIAHAPIANgSIAQgFIAHgLgAKcvVIARAUIgJgcgAK1vnIAOABIgMAIIACANIATgEIAGACIAJgIIAYABIANgOIAJAEIAPgKIADAHIAXgHIgFgQIgLAEIgIgDIgFAKIgTAIIgKgDIgNAMIgKgHIAvgOIAGgJIAYgCIAVghIgVAJIgGgEIgZAHIgDgHIgSACIgEAJIgHgEIgXAEIgFgOIgKAIIgCgRIgQAlIAIAAIAFAGIAIgEIAKAHIAYABIAbgTIAUgBIgMAJIgIAAIgGAJIgYAHIgKgEIgNAEIgJgJIgLAFIgHgHgAKVwYIARAcIAIgrgALbwhIABAHIA0gIIAEAFIAWgEQAAAAgBgBQAAAAAAAAQAAAAAAgBQABAAAAAAIAAACIAcgHIggADIAAgKIgJgFIgHAJIgFgKIgXgCIgHAHIgIgOIgHACIgNgDIgPAQIAFALIAJgBgAL6w7IAoADIAIAHIAAAHIAIgIIgNgWIgOAGIgFgJIgGADQgFgCgFgBIAAgBIgCABIgCABIgEgLIgSgCIgQARIAIgCIAHAIIAKgCgAL/xRIApAEIAQAbIAWgIIgFgOIgMgBIgKgKIgJgeIgJAHIAEgMIgcATIgJgRIgRAdIAPgBgAMuxzIAAAHIAHAEIADARIAXAOIAJARIANgQIgMgVIgLgEIAAgJIgIABIgCgTIgPgBIADgHIgHgKIgIgEIgPAGIgTAZIAhgHgALIxsIgDAjIAggmIgXgCgANJxuIAIACIABAKIAHABIAEgOIAFgIIgLgfIgUgMIAAgKIgZATIAUAWIAJgBgAObyPIAEAUIASgPIgFgOIgJgHIABgNIgVgUIgCgMIgQgHIgLARIANAEIAMAeIAIAAIAAAMIgXgdIABgJIgKgBIgGgMIgPAKIAEAMIAIAEIAGgCIAKAlIAegDIgFgHgAL1x/IAWgZIgagKgANGyoIAcAbIABANIAXgKIgPgSIACgNIgRgGIgFgNgAOryuIgEAOIAIAAIAGARIAMgGIACgMIgHgNIAHADIADAFQAKgsAUgdIgRgVIgOAQIAOASIgCAJIgUgcIgHACIAFAVIAHADIAJAPIgCASIgLggIgHgCIgFgVIgQAJIgDAKIAFAGIgJgCIABgKIgNAQIADAPIAPAPIAGgDgAMnyrIAagWIgKgGgANPzGIAqgdIgjgDgAOIzqIApgcIgigJgAPc0BIAJAQQAHgMAIgJgAPX0IIAEAGIABgKgAPI0dIgGAOIAZgPgAGcmuIgTgNIgSACIgCgBQgJgTgGgTQgRg0gNg1IALAIIABAaIAHAIIgBAKIAJAJIgCALIAJANIgGAMQAgAYgMgWIAEgRIgGgKIAEgBQAFgDgEgHQgEgBgBgDQgFgPAEgNIgHgJIgBgKIgMgJIgEgQIgUgOQAHALgDAMIgFAGIgBgGIACgLIgHgOIAAgCIAAgBIgDgDIAAAAIgHgeQAEACAEAEIALAAIAJgHIACAQIALAKIASgOIAAgIIACABIABAEQAEAIAFAGQAFAGAHAEIAEgHIAIgeIAMgFIAGgPQADgOgMgKIAJgLQAOgWgLgVQAQgKAEgUQAEgXAGgXIARhFQAEgPACgPIACANQAFA/ARA6QgCAEgBAGQgEAZAVALQgWAgAWAbQgDANAAAOQAAARAPAGQgJALgDARQgGAeAaANQgIALgJAKQgSAXAPAZQgNAHgKAKQgSASABAZQgGgIgKAAQgegBgQAbIgFgHgAFlpKIALAIIABANIAGAEIgBARIAEAGIgCAKIAFABIAAABIAEAGIgFAJIAFALIgBAPIgBAEIARAEQAXACAUgKQAwgcABg5QABgSgCgRQgGhCgNhAIgPANIgDAWIAUgBIgUAFQADAWgDAYIAHgKIAEgBIACACIABACIAEgHIACAAIAJAHIgEAQIAAgDIgFgRIgEAQIgHgMQgTAOAHAXIAHAKIAHAAIgFAGIgGACIgDgMIgDABIAAACIgDAEIgBgCIgOAMIACATIAPgEIAHAOQAJAEAHAJIAFgCQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAFAFADAHIAAACIgKgNIgRALQAFgGgDgKIgBgDQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgDAAgBADIgCACIgIACIAGgOIgBgLIgSAFIgCgXQgOAJgRABIABALIAHAPIABAFIgEAHIgBgEQAAAAgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAIgHgUIAAgHIgdgKIgGgDgAFinuQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAHgLgPgBgAFaoLIACAEIABACQACgEgCgHQgFAAACAFgAHGrWIASgNIAAgnIgKARIAAAAIgIAjgAs9m0IgOgJIgsgoQgNgNgQACIgMALIgDAMQgBASAJAMIAjgCIABgHIABgLQABgJgEgBIgJgEIgNAEIgEAMIAFACIADABIABgDQABgDgBgDIAAAAIACgCIADAIIAAAFIgQgCIABgPIAIgFQASgFAHAMIABAIQADALgGAKIgIADQgTAKgQgNQgNgVAKgZIAPgMQASgCAPAMQAUARAPARQgKgPAEgSQACgHAFgDQAMgLATADQAIABAFAEIAAABQAKAPgGAMIAAABIgCAAIgCACQgEAEgCAAQgBAFgGAEIgIACQgPgEgEgRIAIgPIALgCQAHAJAAAMIgPgCIAMgCIgEgKQgIgGgFAKQgEAMANAIQAIAGAEgHQADgDABgCIAAgBIACgBIAAAAIADgCQAEgEACAAQADgKgIgLQgEgEgGgBQgVgFgMAOIAAAGQgDAUAKAQQAJANARADIAcgCIANgJQAFgEAHgBIABgBIAAADQgCAFgHAEIgRAGQgKAEgKAAQgLAAgKgFgAiynTIgBAAQgKgOAEgSIAHgJIAIgBQAIAAAFAGQAFAGgDAIIgBADQgFADgEgFQgCgDAAgEIACgBQAAAHAEABIACgDIAAgBQAEgHgKgGIAAABQgLgDgEAJIgBABIgBANIAEAGIAIAHQAQABAOgKQgBgOgDgOIgCgFQgHgHgLAAIgHADIgWASIgMALQgSARgcgCIgCgCIAVgDQAYgIAQgVIAAAAQAFgFABgDQAIgggXgUIgNAAQgOAIgEARQgCAKAIAJQAPAJALgNIADgTIgEgFIgEgCQgSAFAIAQIAGgIIACgBQgCALgHACIgDgCQgBgEABgEQAAgKAIgIIAMABIAEADIAAgBQAJAYgWANQgVADgHgRQgBgZAWgQIAVADQATAXgHAdQAUgMASAKQANAQgFAZQgMAMgQAAQgGAAgIgCgAhEnfQgKgJgHgKIgYAAIgHAIQgEAFADAGIAJADIAJACQAGgDgEgFIgBgDIgBgBIAEACQAFAKgJAFQgGADgGgEQgGgCgEgFIAAgHQABgIAGgIIAagCIgFgLQgHgUAPgNIALgKIAOgBIAEACQASAKgDAWIgIAKIgNABIgKAAIgDgXIALgGIAGADQACACABAFQABAJgGAFIAAgDQACgGgCgEQgBgGgFgCQgJAKAFAMIAIADQALABAGgMQAAgQgLgLIgEgCIgQACQgNANgDAOIALAWQAGAKAJAHQAMAMASAGIgMAAQgLgFgJgHgAganUIgKABQAGgHAEAGgAG7npIAAgCIABgCQABgEgDgBQgEgDgCACIgBABIgBgBIgBgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBIABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAFACQAHAEgCAHIgBABIAAABIgCABIgCgBgAGioBIgBAAIAAgCIADACIgCABIAAgBgAGgoKIgEgCQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgBgBIgEgOIAAgFIgDgGIAHAEIACAHIACAGIACABQANgCgEALQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAIgCgEgArCoJIABgBIAAABgAiOoeIACgBIAEABIAEADIADgCIgEADIgFACQgEAAAAgGgAhzobQgBgGgIADIAGgIQgIAJgCAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgCIABgDQAKgNADgNIABgJQAAgJAFgBIAAACQACAIgDAGIAFgHIABgEIgOgdIgVACIgCAAQgKABgHgDQgBAAAAAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBAAAAgBQgJgFgIgHIANAeQgEABgDgFQgIgLgEgJIgNgjQAAAQgJANQgEgSgBgTIgBAEIgGATIgJADIAJglIgCgKIATghIgDAPIAQgTIAAgBIgHgJIgYAoQgGgEAHgGIAAgBQAEgIACgIQACgTAJgPQADAFgCAIQgCAEABAFIAFgJIADgGIgEgJIgLAAIgFgGQgQgPgSgDIASAAIABgBQAKAHAIAIQAGAJADgFIgdgdIgNgEIAHgDIACAAQARAGARAJQgKgQgOgEIAPACIAAgBIABgDQACABAEAFQADAEAFgDIANAKQABAAAAABQABAAAAAAQABAAAAAAQABAAABAAQgBgHgDgEIgCgEIgGgIIAAgLIAAgBIABABIAPAjIABgBQAKAAABAGIABAAIACgFIAAgMIgPgPQAIgBADAEQALAOAAgGIgEgEIgFgGQgJgGgFgJIgCgFIABAAIACADQAIAIAJAEIACAIIACACQAMAFgDAMQgDADgEgDQAAAAgBAAQAAgBAAAAQgBAAgBAAQAAAAgBAAQANATgCAVIgEAGIgBACQgRANgIAXIgIABQgDAEABAFQAGAYAKAXIgCAGIAdAWIALAAIAAADIgFACQAMAFAOgJIgJgBIARgBIgKAJQADAGAFAFIABABQgBgFgCgDQgBgDABgEIABAAQAHAGAFAKQAFAJgIAHQgGgLgCAMIgCAHIAAADQgEAWgKAUIgBgCgAhwo2IgBACIAEgGIgDAEgAhkpOIAEgFQADgCgHgHQgBADABALgAhyppIAJAUIgBgIIACgDQgFgJgEAAIgBAAgAi0p1IAJAOIgMgXgAiWpzQADAHAHgCIAEgBIgOgHIgPgOgAjCqhQABAEADAEIANAcIAXANQgKgNgIgOIgCgBIgUgeIAAAJgAjKqjIABAeIADgaQAAgGgBAAIgDACgAjUqvIgEAcIAHgVQAPgPAGgWIACAAIAAAAIgJAZIAFgGQAQgXAJgfIgBgBQgUAkgaAegAjCqvIARAVQgEgPgGgOgAjHqnIABAAIAAgBIgBABgAirrRQAEgDADgHQAGgKgDgFQgTAdAJgEgAjYsYQAPALALATIAHAcIgBgnIgQgMIgTgKQAAAAAAABQAAAAABABQAAAAABAAQAAABABAAgAiyriIAGgJQAHgIgGgGIgIgLgAidrjIALgMIgDgKQgBALgHALgAiosKQAMALAAAJIgBALIAHgQIgGgNQgFgKgIgEQgHAFAIAHgAi5sKIAFAAQAMAKAGANIABABQAAgFgEgFQgRgagWgOgAvJozIgDgCIgCgFIgCgDIgCAAIABgBQAKADAOABQADgCAGAEQASgKASgSIAAABIgKAOIAugtIAAABIgHANIgIAJQATgNAOgUQAHgMgFAAIgCAAQgIALgKAIIgDABIABgBQAFgHAGgGQAEgFgBgDIgCgLIABAAQACAGAEAEQACACAEgEIgIgOQgRgEgSgKQgQgKgGgTQgDgpAYghIgNAJIgCgCQgGgJANgGQAOgIAEgSIAEgMIAAAAIABgBIAAABIgEAUIAKgEIgFAKIALgNQAAAAAAAAQABgBAAAAQABAAAAABQABAAAAAAIgBAoIAOgaQADgIAFAAIAFAmIAEgVQACgKAJABIgLAfIgGADQABAfgUAZIAEgwIABACIgBAgIAHgTQgEgPgCgNIgBACIAAABQAAAHgHAIIABAGIgIAOIgEAKQgCAIgFACIAAgWIgOAYIACADQADAMAJAGIAEADIgEgLIgDgLIACgBIALAZIADABIACACIADABIACADIADAFIADADIABAAIABgBIACAAIAXAXIAFgLQgLgGgFgFIgXgSQgEgEgEgBQgIgGABgGIACAAQAFAEAGACQACACADAAQgHgIgCgEIgCgGIABgDIAOAVIAAAKQAKAIAMAIIADABIABgBIgFgHQgHgFAAgDIABgBQAEADACAFQAFAIAHgCQAAgHgIgEIgDgEQgGgHgFgCIAAgIIgCgCQgFAAgEgBIgCgCIATABIgDgCQgFgGAAgKIABgBIAPAeIADAKIAHAIIABAIIgBACIgDABIAFAKQgGAFgEALQgGAOgLACIAOgRIgQgCIgGAOQgHAMgOAMIgBACQAKgGAIgHIAEgNIAPgKIgMANIgGAPQgMAKgRAJQgIADgGAGQgHAJgHAEQgTAPgWAAQgIAAgJgCgAvBo1IADAAQgCgDgGgBQgHABAMADgAtPqRIADACIAFADIADAAIgPgRQgEAEAIAIgAtbqhIgEgHIgFgBIgCgBQgNgGgGgKIACAOQAAABAAgBQAPAHANAEgAuPrGIATAZIgDgWQgBgJgDAIIAAABIgBgBQAAgLABgKgAtErCIgDgBQALAQgIgPgAuMroIgCAaIATgugAt9riIgDATIARgZIAEgDIABAAIACgRgAtsrYIAEgKIAAgBIAAgDIgEAOgAtvsKQgKAMgBAQQgDASAYgnIABgoIgLATIgGADIgBABIgBABIgPAeIATgUQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAgAthsBQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAABIgBAPIAMgaQACgFAGgCIADAeQAGgUgGgQIgDgMgAt1sjIgCABQgUAUAHgCIAMgIQABgFAEgFIACgDIgEACgAqjpXIARgIQgDAGgKAFIgGAEQgCAAAEgHgAHXpjQADgHAIgBQADAGgBAGQAAABAAABQAAAAAAAAQAAgBAAAAQAAgBgBgBQgJgMgBANIAAAGQgKgGAIgEgAwOpkIAMgEQAHgCAIgFQARgLAMgWQASgfAAg4QAAg4gSgiQgNgYgSgLQgBAAAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIABgIIADABQAcAIASAlQATAjAAA7QAAA5gSAiQgSAfgaAKQgOAFgOAAIAAgLgAwOppIgBAAIAAgJIACAAIAJAAIAAAJgArPp6QgEgEAAgFQAAgEAEgEQADgEADAAQAEAAAEAEQADAEAAAEQAAAFgDAEQgEADgEAAQgDAAgDgDgArKqHIgCAKIACgBQAFgHgEgEIgBACgAv8qKIAIgDIAOgHIgOARIgKAIgAgfp8QgKAAgKgDQgWgHgQgcQgQgdgBgwQgBgvAPgZQAOgaAQgIIACAMQgGAIgHALQgQAaACAwQABAvAQAdQAJAQALAJQAIAHAQAIIgFAAgAwHqQIABgHIACABIAPgNIAEgFIgEgCIgIgEIgCAEIgEADIADADIgBAFIgEABIABgOIABgCIAAgCIADgDIADAAQAAAAABAAQABgBAAAAQABAAAAAAQAAAAABAAIAEACIAKAFIAAABIAAACIABAAIgCAFIgJAJIgLAKIgGACgAgvqgIgCgDIgHgHIAHABIADABIALASgAhDq7IgLgFIAEgNQgHgNANAIIAAAPIAFACIAEAHIgFAOgAgprBIgKgTIgCgEQgBgDACgEIAAAAIAAgBIABgCIABgCIADgBIAEgBIABAHIgEABIAFALIADAVIgDgDgAEtrWQBRgaAsikQArilgDhdQgEhbgsgjIASgEQAuAhAIBGQAIBGgsC6QgtC4hsA5QABgJgBgNgAv5rGIAAABIgCgFIABgcQAAgCACgDIACgDIABAAIAKgBIAAgYIgEAAIgCABIgBAAIAAAIIAEAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAAFgBABIgBAAIgCABIgBAAIgBABIgCAAIAAgDIgBgCIgCgCIAAgMIACAAIAAgCIABgBQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAIAIAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIABADIABgBQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAIAAAbQAAACgDADIgMABIgBAbIALgGIgBgEIAAgGIgEABIgBgEIABgEIAGgBIABABIABACIAAAFIABADIAAADIABABIAAAEIgCACIgCAEIgMAFIgCABgAvcrnIAIgJIgBgKIAEACQAGAGgEAJIgFACIgJAXgAlwrfQAAgHAEgDIAAABIgBAFQgBABAAABQAAABAAAAQAAABABgBQAAAAABgBIAEgEIgCgEQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIAIgFIACALIgHAJIgBAAQgEAAAAgEgAhWruIALgUIAAgBQAAgEgCgEQgEgMAJgHIABAPIAEAHIgBAJIgKATIAFANgAEorrIAAgCIAVgHQAIgEgCgJIgKgNQgHAAgEAGQgEALAKAEIAHgDIgCgIIADgDIABAAQAGAPgOAEIgKgGQgIgRAVgHQAQAIABAOIgFAGQgJAGgLAFIgFACQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAgAg2rrIgCgCIgDAAIgBgBIgBgCIgFgIIACgCIACgCQAAgBAAAAQgBgBAAgBQAAAAABAAQAAgBAAAAIADgDIAHgDIAEgCIABAHIgFACIAAABIgCACIgCAAIABAGIACACIABAAIAHgEIAAAIIAAACIgDABIgEADIgCgBgAvesEIAFgMIgHgQIABgIIgDgJIAJACIAAAMIABABQAOAPgOAPIgBABIgCABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAgAFOsUIgHgHIADgTIAOgIIAPAFIASgIQAHgMgHgKIgJgDIgLAMIgBADQACAMAMgHIABgBQAFgGgFAEQgBAAgBAAQAAAAAAABQAAAAAAABQAAAAABABIgBAAIgGgHIABgEQAKgDADAHQABALgNADIgMgGQgCgZAYAAQAEAFADAGQAIAQgRAKQgPAIgPgIIgLAKQgFALAKAEQAMACACgKQgBgHgEACQgLACAKABIAAACQgDAGgDgFIgCgEQAFgOANALIgBAOIgHAEQgCACgEAAIgHgCgAv2sYIgEAAIABgIIADAAIAAgCIgCgHIACgRIACACIAFAXIAAACIgCACIABABQgDAEgCAAgAg9s9IACADQADAFgBAEQgHAOgJACgAQZtLIgBAAIgHABIAAgBIABgBQgCACgFgBQgIgMAOgGQAAABABAAQAAAAABAAQAAABAAAAQABAAAAABQAIAKgBgMQAAgGgJgGQgLADgFAOQgDAMAIACIgHAAIgCgGIgBAAIACgOQAGgMANgDIAFAEQAEACACAEIADAFIgBAeQABAQAOAFIAEgCQAHgHgDgLQAAAAgBgBQgBAAAAAAQgBAAAAABQgBAAAAAAIABACIAAAIIAAABIgFACIgDgDIAAgJQgBgMAKAFQAHADACAEIAAAJIgBAFQgDAJgLAAQgWgGABgfgAQvs8IgBAFIABABIAAABIACgHIABgCIgBAAQgBAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAgAQStPIABADQAEgFAAgCIgDgEQgIgDAAALQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAgAn6tEIgHAIIgPgIIgKAJQgVAFgJgSIAZAGIAKgMIARAKIAKAAIAYALIAJgHIALgBIAKAIQAIAIgJgCIgPgHIgMAJgAm3s1QgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQAAgDAEAAQAEgCAGAAQAGAAAEACQAFAAAAADQAAABgFABQgEACgGAAQgGAAgEgCgAvms3IgKgKQgEgDgBgGQgDgEAAgFIADADIASAZIgDAAgApqs6IgEgEIgFgGIgRACIgOgNIAOAFIATgBIAPANIAqABIgQAEIgOACQgKAAgKgDgAF6wzQAHiJgygvQgFgMgvANQAogPAWgGQA6A7gHCuQgICuhCApQAyhrAGiJgAmDtDQAegMAhAAIAXgOIACAAIABAAIAGAAIANgIIAJANIgMgEIgNALIgGgIIggAVIgNgHIAAACQgNAJgNAAQgIAAgHgDgAnKtBQgYgFAFgTIAdgWIgZAYIALANIASAAIAAgPIgPABIALgJIAMAGIABATQgGAIgKAAIgHgBgApQtjIAXgNIgOAAIgJANQgHgDACgHIAEgGQAEgEADAAIAPgBIAGAKQAMANgLASIgGAHIgWAAgApNteQACAHAAAEQAAAJAJgDIAEgGIAGgDIAAgRIgHAEIgBAAgAQDv5QAJjuBbgpQAPAFAXAPIgGAAIgYAAQhVAjgCDgQAFCDAfAtQg9hHAEhpgArCthIgRAKIgRgRIARAJIAIgBIADgGIAJgCIAYAVIAJgGIALAKIABAAIgLgDIgRAHgAobtgIABgEQAEgFACAEQAHAPAUgFIgLgEQgHgWATgKIAHADIAEAFIAEAPIgCAKIgMgZIgGATIASAGIgDAFIgBABIABAAQgKAGgJAAQgOAAgMgOgAj1tsIAIAEIARgOIAPABQAAADgEACQgDACgGAAIgVANIgKgFIgVAOQAHgUASAAgAqItaQgRgGgHgPIABgTIAQgRIAMgDIgXAaIABAMIACAAQAJAQASgBIABAAIASgWIgDgLIgEgEIgPACIgIASIAEABQAWgEgMAJIgBABIgUgEQAAgQATgPIATAEIAEAKQACAFgBAEQgDAXgVAHIgNgBgAl5twIARgdIAJACIgTAYIAJANIALgLQgOAGAEgGIAPgHIACAIIgRATgAF3tmIgBgFQAAgQANgFIAQgBQADgHABgHQACgOgLgCQgMAGAHAQIAEgCQgJgFAGgIIAJABIABAHQADAHgIAEIgJgBQgIgNAIgMQADgIAJAEQALAFABALQAAAQgMAHIgOAAQgIAGgDAKIAKAHIAGgDQAAgGgBgDIgCACQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgDgEAJgEQAJAKgKALIgFAAQgFAAgIgEgArutkQgOgEgHgPIgnAHIgKgQIgVABIAVgKIASASIAggKIAVAbIAFAAIACAAIgBABIgBACIgGgBgAlIttIgDgRQAPgWAaAHQAIACgBAQIgLgOIgeAMIADAKIASgFIgRAPgAP6twQgPgGgDgOIABgMQANgIAGgOQgEgPgNgBQgGADgEAJIAAAJQABAJAHgBIAEgDQAFgHgJAAIgCgBQgCgOALAFIADAOIgDAGQgEAFgDAAIgEAAQgFAAgCgHQgFgPALgNQAFgFAIABQAMAIACARIgSAVIACAPIAQAMQANgFABgQIgQgBIACAEQACAFAFgDIABABIgIAAQgLgEAIgJQANgHAIAMIgDAKQgDALgMAGIgFgCgArft4QgIgWAOgLIACgHIAOgDIAJAEIgUAIIgEAcIAbgBIAIgIIgagBIAdgKIAFAGIAAAEQAAAHgKAGQgIACgCADgAjNt1IAFgJQAJgNAMAEIAKgNQATgGAUADIAFgCIAGgOIAFgCIAIgKIANgDIgDAKIgKADIgFAFIgFALIgBADIgKAGIgFABIgSgIIgDAHQgGAAgEADQgGAEAAAEIgJAIIgTAJgAjNt1gANYt7QALAEgMAAIABgEgACTt5IAVgYIAAgBQAIAAAFgEQAPgMABAJIgZAOQgFACgCAEQgEAMgKAAIgEAAgAkKuQIAPAMIAZgPIgEgTIgHgDIgOANIAAAFIAJAGIgQAAIgBgQIAZgSIAQAjQgKAUgXABgAtst/IgDgRIABAFIAIAGIAOgGIAMAMgAUPuFQgEgEgNACIgHgKIgBADQgFAIgFgEIgFgHIAHAAIAAgBQABgJAMAAIAGAMIAUgIQAIAWgHAAQgCAAgFgEgAsNuQQgSgSgIgaIAAgGQALgYAXAOIgaAJQAAAcAXATIAQgBIABgMIgJgMIgGgBIgFAJIABgQIAPACQAPAMgFAUIgFAGQgGADgEAAQgIAAgFgGgAjbudIgFgRIAEgGIABgGIAMgKIgJAXIAEALIAcgGIgCgQIgIgEIgIAPIgDgIIALgPIAOAGQAMAKgLARQgKAKgMAAQgIAAgKgEgAtHueQgPgHgMgVQABglAjAHIgQAFIgMAYIAPAUQAHAIAHgEIAFgSIgGgLIAAAIIgJgOIAEgCIAHAAQAQAMgGATQgEANgJAAQgEAAgEgCgAufunIgGgFIgLAGIgKAAIgNgRIgRgFIgDgHIgEgMIgKACIgZgbQAAgBABAAQAAgBgBAAQAAABgBABQAAABgCACIgZgJIADgaIgSAAIgNgMIABgNIAUgQIgBAFIgJAMIgCACIgCAAIgBgBIgBABIAJAJIAEAHIANACIAEAHIAAATIANAGQAJgCAIAIQAFAGAGADQAQAKAKAOIADAFIAYgBIgGAOIAJAHIAWgMIAEAKIAxARgATSupIgQgDIACgUIgKgDIADgQIACAFIADADQAAABAAAAQAAAAAAAAQABABAAAAQAAAAABAAIAEABIACAXIAPAAIgEASgACgunQAmgSAGgpQABgOAAgRQABgRgNgMIAAgOIAPATQADATABAUIAAARQgCAZgRAVQgKANgPAAIgIgBgADYvGIANgTIgEgJQgDgGAIgBQABAAAAABQABAAAAAAQAAAAABABQAAAAAAAAQAAABgBABQAAAAAAAAQAAABAAAAQABAAAAAAQAEAGgBAIIgNAQIgBAKIgQAMgAGOvLIAIgJQASgEAJgQQADgJgIgJQgIgJgHAGQgMAHAIALIAKAHIAFgGIAAgIIgEgBQgDADACAGIgBAAQgJgCAFgJQAIgFACABQAIAHgGANIgHAFIgHgBIgJgOIAEgPQAJgJAJAGIAGAEQAIAMgCAMQgKARgSADIgIAIIgBAIQAAABAAAAQABABAAAAQAAABABAAQAAABABAAIAGAFQAGgCAFgJQgDgNgFALIABAEQAEAFgJgEQABgRANAGQABAEgBAEQgDAJgCACIgOADQgMgJAHgNgAievFIgDgbQAHgQAOgDIAFgBIgBACIgRARIADAaIAHAKIATgGIABgMIgFgEIgSADIAKgKIAIgCQAQAHgCATIgFAHIgbAEgATvvGQgOgNgKgQQgDgFgCgEQgMgeAGgfIALgQIAKgEQgZAfAOApIADAHQAJAcAdARIADAJQgLgGgIgIgAgxvdIACAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAgBIABgNIAMgIIgFALIgBAMIgrAigACuvTIABgPIgEgbIANAZQgCADABAHQADASgRAKgAPfvNIgDgEQgBgGAEgEIAFgFQgDAGgCAHIAMAHQALgGgBgQIgMACQgBAPAEgNIABAAQAHALgOgCQgEgLAHgGIAPAAQACASgKALIgHABQgFAAgFgFgAupvNIgCgDQgHgLAEgOQAJgfAhAHIAKAJIADAJIACAPIABAPIgDgOIgCgJIgFgJIgLgIIgPgBIgDABQgSAQAJAWIADABQAIADAJgGIABgDIADgDIgEgNIgLAAIASgIIAAAIIAFAKIAAADIgBAEIgJAKgAhovfQgDgIgBgHIAAgEQACgUATgEIgNARIABAEIABAQIALgDIACgCQAEgFgPAEIALgMIAHAAIADAGIAAABQgEATgQAAIgJgCgAS/viIgKgPIADgUIgDgJIAIgTIgBAVIADAHIgDASIAJAHIgBAFIgEAFIgBAAgATpv8QABgIgEgIQgEgGABgIQAAgEAEgCIAEAPIABAFIADAEQAAADACACIALAPIAFAIgAPWv6IgCgLQAIgNANgHIAQAHIADATQgHAGgEAGIABgFIgRAHgAPYwDQABAKAJAEQAMABACgJQgDgFgFgCQADAGgGABQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQgDgQAPAIQAFAFAAAGIAEgOQgFgHgKgDQgKAFgHANgADxv5IgBgFIgDgFIAKgWIgOgGIAMgOIgBAKIALALIgKARIAHAGIgKANIgBgFgAgVv8IAdgYIgBAIIgTASIgZAGgAv6wQIAMAPIAVgEIAGgHIAIgBIgCgYIgbAEIgDAMIAQADIgVACIgDgRIACAAIABgBIAMgLIAcADIABAjIgJACIgEAIIgXAAIgHACgAg0wBIgBgEIgEgkIAJgJIAIgCIADACQgIAFgGAIIAGAdIAAABIAEgDIAFgGIgKgLIAPABIACALIAAAEIgLAKgAAawmQACgDABgEQALgPAIAEIgBAEIgEAHQgOASgVAHQAKgHAIgLgAGSwpIACgGQAEgLAIgEQAVgNAPgVQgCgOgNgKQgJgBgIACQgQAIADAPIAGALIAQADIAIgJIgBgEIgDgDIgCAAQgEAAgBACQgEAHAKABIgBABQgHgCgGgEIACgIIAHgCIANAGQADAPgMAEQgNADgIgHIgHgUQAGgbAfAGQAOALADARQgKATgYALQgQAIgBAQQAFAPASACIAPgJIACgMIgBgGIgMgFQgEABgFAJIgBABQAHAJAEgLQABgDAEABIgHALIgKAAIgCgDQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQADgHAEgFIAPgDIAKAKIAAAOIgIALQgJAEgHAAQgRAAgIgUgAgVwoIAAgFQAFgcAYAFIAHAHIgCADQgJAUgQADgAgEw+IgJATIAOgNIgGAAQAJgGgEAAIgEAAgAPbwvQAAgKAGgHQAOgOAMgOQADgQgPgJQgMACgDANQACAMAIAFQALgGgEgJIgDgCQgLADAMADIAAACQgCAGgHgGIgBgKIAJgCQAHABACAHQABALgNAGQgWgLALgVIAQgIQAMAGAEALQAAAGgEAGIgdAoIAAAGIAOAFQAEgBADgDQAPgIgHgNQgPgCAAAOIACgCQAEgMACANIgCACQgKAGgBgLQAFgMAOgBQAMAFgEALQgHAOgPAEQgPAAgDgKgAS6w4IAQgZQADgDAAgEQgBgSAMgDIgHAgQAAAEgDADQgIAEgDAIQgDAGgCAAQgCAAgCgEgADjxGIgOAEIgBgPIgTgBQAGgeAHAQIABAEIAGACIAGAEIACANIABgBQACgDAFACQATAFgMAFgAPpyIIgBgEQABgHAEgFQAKgNAHgNIgEAAQgGgEACgKQABgFADgDQACgCABgDQAJgEAFAHIAAgBIAIALQgMAVgSAPQgIAGgBAJIAIAJIAAAAIAEADIAFABQgCgGAGgEIAGgEQAJgHgJgEIgPAGIABAFIAKgIIgHALIgDABIgBABIgEgFIABgHIABgBQAEgEAFgEIANADIABAIIgGAMQgDAHgJAEgAQHy1IAIgLIgLgKQgIAAgDAKIADAKQAIADABgLIgEAEQgCACAAgIIAEgCIACAAQAIAAgGANgAGTyWQgGgPAJgNIAWgcQAKgMgDgOQgIgRgQgFQgSAGgIASIAAAHIAMAQIAPACIAKgKQAAgMgLgEIgEgBIgJAEQACAKALAFIAAACIgNgHIgEgMQAHgJAMAEQANAJAAALIgHALQgLAGgMgGQgKgHgFgMIAAgJQAMgYAZgBIAEACQAEAFAGADQAMAIgFASQgIAcgYARIgEAOQgCAKAJAGQAJABAJgFQAGAEAFgEQAOgLgCgSQgEgKgJACQgQAEgCARIACAGIABAAIACABQAJgFgCgJQgBgIAFADQACAEgEAHQgGANgHgCQgIgHAFgNQAFgKANgFQAJgBAIAGQAFAJgEANIgDAFIgEAHQgIANgRABQgNAAgGgMgAOTyUgAn2yrIgPAAIgigDIgxgEIgaAAIAWg8IAMACQA+AMA+AoQADgIAGgHIAwAAIgIgUIgoAUQAMgQAWgLIATgKQASA2gOAEIgEAAIgtAAIgBACIgGACIgIACIgFABIgOAAIgRAAgApTzPQgNAdBvgIIhhgjgAOwzDIgIAAIAEgMIgIAAIAAgJIAEAGIALABIgDALIAJATgAQJzTQgGgBAAgMQACgJAIgHQAMgHAUADQAXgGgCgVQgIgHgKACIgIAKIAHAKIAKgGIAAgEIAGAAIgCAFIgCAEIgEABQgNAHgGgLQgBgLAFgGQAQgLANAQIACALQgFAOgNAEQgRADgRAAQgKAEgCAMQgBAJALAAQARgCABgSIgKAFQADAKgLgDIACgHQAGgKAOAEQgCAZgWAAIgGAAgAQv0KIAHAAQAAACAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgCAAgEgFg");
	this.shape_172.setTransform(229.62,931.3028);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-4.2,-5.4,0,-4.2,-5.4,25.8).s().p("AgMCfQg2gTgShSQgShRAYg/QAZhBAkgTIANAVQgXAUgRArQgVA3APBGQAPBIAvAPQAmANAlgCQAEAOACARQgSADgSAAQgjAAgigMg");
	this.shape_173.setTransform(353.4893,829.7641);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#730000").s().p("AmygJQAugNAGAMIgOAGQghAOgZASQACgWASgPgAG5gbIAGAAQANADgIAXQgCgUgJgGg");
	this.shape_174.setTransform(301.4892,806.425);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#A60000").s().p("AEjIcIjCi7IATgHQgBAKAMAFQANAEAKgJIAEgOIAAgBIgCgDQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBABAAAAQADgEgJgBIgBAAQAGgFAIgEIARAYIgUAQIgDALIAfAgIANgDQAHgLgBgOQgBgIgFgEIgRAAIgEANIAKgJQAEADABACQAIALgIALIgEAAQgWgKgEgSIATgNIAEgNIgXgUQBbg5CsibQgVgggPhoQgIgxgGhCIgBgMIgBgPIAAACQgnlrB+gKIAAAAQAaAZAYAoQgkATgZBBQgYA/ASBSQASBSA2ATQA2ASA0gJQAbCKAQC1QgeBbgfBMIgWAcQhqCKh+ATQAOgNgIgUQgJgJgKAJQgGAGAFAGQAHAEgBgGQgCgGAJgBQAGAQgJAHIgBABIgPgFIAFggIgVgcIgSACIgQAVIADASIAkgBQgBgOgRgFIALARIgTABIgEgQIATgRIAUAYQABAJgGANQgDAHAFAJIALAEIgZABIgQAAgAD6G4IgGAaQAEASAVAAQAPgLADgUIgGgNIgKAAIgJASIAAABQAHAEgEgIIALgJQAIANgLAOQgFAGgEgDIgDAAIgJgLIAGgXQgFgagYgOIgCAAQgYgBgMAUIAWAiIAQAAIATgNIgFgSgAoSH5IgBgDQgHgFgFgHIAFgEIAmATQASgEAJgQQAGgGADgHQgBgYgVgMIgLABIgSAYIABAPIATAAIACgPIgIANIgFgCQgDgCgBgCIATgYQAOAEAEATIABAEQgGATgWAHQgQgLgQgCQgIAAgGACQgzhEgzi5QgHg6gGg/QAbiDAYhmQAmACAzghQA6gjAkhMQAlhMgggwQgfgvgvgYQAVgaAegWQAZgSAggPQBKBGhJFgIAAABQgxAkgEBMQAEAxAmCKQAXBVAjA1IgDACQgIAFABALIAGAPIAGACIALAVIAJACIAQgKIAHAGQhLBHhbBKQgLAFgLAAQgVAAgWgUgAnCGXQgGAIABAKQACANAKANIAEAFQAXAHANgTIABgBIgCgZIgEgFQgHgHgLAFQgKAFAKAGIACgFIAOAEIACARIgUANQgFAAgBgBQgPgOACgQQAHgQAQgKQADgCAHABQAIANALAHQAFADAIAAQAcgFAIgeIAAgDIgYgXQgOgBgLALIgJAMQgFAIAGAGIAPAFIAGgLQgBgLgCAOQgBAFgFAAIgIgIQAIgQASgHIACgBIASATQgJAVgWAGQgDABgEAAIgCgBIgTgVIgCAAQgXAAgNAVgADHGoQACgFAKgEQALgIAFADQAOAIgKgEIgJgCQgPAJAIAPQAHAEgGgKQgDgEAFgFIAKAAQAPAJgHANIgTAGgAlVFeIgGgQIAHgGIAEAHQgCAEgBAEQgBAKAFADQAGAFAGgFIADgCIAIAKIgKAHgAB3FZIASgKIAAABQAMABgDALIgBADIgOAFgAlIFaIAFAFIgGACg");
	this.shape_175.setTransform(301,859.97);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#F0BEA6").s().p("AgVBTQgxgNgqggIgQgNQAEiFAiAeIACgIIC0AIQAhgOAEB1IgNAKQglAahBAUIgQAGIgTgEg");
	this.shape_176.setTransform(301.7,791.15);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#F10000").s().p("ABCmVIBRIrIAcFeIgyD6gAhOq8IgoQVIgGCbIgyD6gAgiiVIAKpYIAxAAIgCAuIglMag");
	this.shape_177.setTransform(551.1699,186.2977,0.5352,0.5352);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#CC0000").s().p("AB9H0IgcleIhIuDIAyAAIBkXbgAhABbIAmsaIAaC4IAZQtIgxDIgAiuH0IAGibIBexGIgKJYIgMODg");
	this.shape_178.setTransform(553.8457,186.2977,0.5352,0.5352);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#ED0000").s().p("AA9ImIgawtIgai4IACguIAyAAIBIODIhRorIA7SDgAg8LuIAMuDIAUDwIAnKTgAhcq8IAEgxIAyAAIheRGg");
	this.shape_179.setTransform(551.9191,186.2977,0.5352,0.5352);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#A00000").s().p("AAyApIgyAAIgxAAIgyAAIAAhSQBjAIBkgIIAABSg");
	this.shape_180.setTransform(552.5078,143.94,0.5352,0.5352);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.rf(["#FF2A2A","#AF0000","#8B0000"],[0,0.369,0.894],-9.5,-49.3,0,-9.5,-49.3,128.2).s().p("AEqLgQk3AAjcjVQjejVAAkuQAAkuDejVQDGjAERgTQAdgCAfAAICdgPQgcAEgcAHIgBAAIgdAHIgVAHQjbBIiIC7QiODEgGD1QgGDzCHDMQCEDNDmBTIglALg");
	this.shape_181.setTransform(523.3686,89.5682,0.5352,0.5352);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.rf(["#FFBFBF","#E30000","#E30000","#8F0000"],[0.004,0.161,0.173,0.718],-4.1,-35.9,0,-4.1,-35.9,114.8).s().p("ADCLcIgngJQjlhUiGjNQiGjMAGj0QAFj0CPjEQCIi8DbhHIAVgHIAdgHIAAAAQAdgHAcgFIA/gFQgQADgPAMQgKAHgIAKQgtA0gkCGQg7DcAAE2QAAE2A7DcQAkCIBBBLQg5gDg5gKg");
	this.shape_182.setTransform(533.8652,89.7421,0.5352,0.5352);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.rf(["#FC3E3E","#E30000","#8F0000"],[0,0.38,0.718],-37.3,-23.5,0,-37.3,-23.5,105.2).s().p("AghLpQhAhMgkiIQg6jbAAk3QAAk1A6jcQAkiHAsg0QAJgKAJgHQAPgMAQgDIAHAAQAPADAPALQAKAHAKALQAsA0AkCHQA7DcAAE1QAAE3g7DbQgkCIhEBMIgeABIgggBg");
	this.shape_183.setTransform(552.9493,89.7688,0.5352,0.5352);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.rf(["#FC3E3E","#E30000","#8F0000"],[0,0.38,0.718],-25.9,-14.6,0,-25.9,-14.6,88.6).s().p("AjJIeQA7jcAAk2QAAk2g7jcQgkiGgsg0QgQgSgQgIQgPgLgPgDIARAAIBMAIIAOACQAfAFAdAIQCaAqB7BzQCxCkAxDwQAxDwhdDkQhdDhjKCAQg9AnhIAXIgJgBQhIAShHAFQA+hLAiiAg");
	this.shape_184.setTransform(571.5095,89.7153,0.5352,0.5352);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#990000").s().p("ACHIVQA7jbAAk3QAAk1g7jcQgkiGgsg1QgKgKgKgIQAQAIAQASQAsA0AkCGQA7DcAAE2QAAE2g7DcQgiCAg+BLIgUACQBEhNAkiIgAgtLpQhChMgkiIQg6jbAAk3QAAk1A6jcQAkiGAtg1QAJgJAJgHQAPgMARgDIAOAAQgQADgPAMQgJAHgJAJQgsA1gkCGQg6DcAAE1QAAE3A6DbQAkCIBABNIgOgBgADLLSQBIgXA9gnQDLiABdjhQBdjkgxjwQgxjwixikQh8hziagqQCiAoCCB4QCxCkAxDwQAxDxhdDjQhdDijLB/Qg9AnhIAYgAjNLSIgJAAQjlhTiGjNQiGjMAFj0QAGj0COjFQCJi7DbhIIAVgGIAdgHIABAAQAcgIAdgDIAPgCQgdAFgcAIIgBAAIgdAHIgVAGQjbBIiJC7QiODFgGD0QgFD0CGDMQCGDNDlBUIgGgBg");
	this.shape_185.setTransform(552.8401,89.7555,0.5352,0.5352);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.rf(["#FC3E3E","#E30000","#8F0000"],[0,0.38,0.718],-29.4,-14.4,0,-29.4,-14.4,87.1).s().p("AlILZQBIgYA9gnQDKiABdjhQBdjjgxjxQgxjwiwikQiBh4ijgoQgdgIgegFIgPgCICOANIAAAAQE4AADcDWQDdDVAAEtQAAEujdDVQjcDVk4AAg");
	this.shape_186.setTransform(582.0484,89.6083,0.5352,0.5352);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#C57600").s().p("Aj9MFIAIAAIAHABIAnAJQA5AKA5ADIAPABQAfABAggBIATgCQBHgFBHgRIAKAAIAOAEIAXAGQANAIALAKQAdAeAAAqIAAAgQmZgQhih0gAiQuGIBLgCIAyAAQBrABBsAJIAdAdQAPAPAHATQhOAJhAAAQi8AAg9hQg");
	this.shape_187.setTransform(554.9562,87.0262,0.5352,0.5352);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#E18700").s().p("AkQLdIABAAIAlgLQBiB0GaAQQAAAqgeAdQgdAdACAAQoDgFAajYgADcrTQoVhBAuidQBHgGBHgCQBSBrE2gkQAHARAAAUIAAAhQAAApgeAdQgLAMgNAHIAAAAg");
	this.shape_188.setTransform(553.9048,89.7421,0.5352,0.5352);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FF9900").s().p("AhIO9QhGgFhGgMIgfgeQgdgdAAgpIAAghQAAgpAdgeQALgLANgHQgaDYIEAGQhIAMhIAFQgyADgyAAQgxAAgygDgACDrvIhMgIIgRAAIgLgBIgLABIg+AFIgPABIieAPIgCgBQgLgHgLgKQgdgdAAgqIAAggQAAgqAdgdIAegdQgvCcIVBBg");
	this.shape_189.setTransform(551.0629,90.5181,0.5352,0.5352);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#580000").s().p("AgYG6IAAtzIAxAAIAANzIgxAAg");
	this.shape_190.setTransform(552.5479,14.9406,0.5352,0.5352);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#F10000").s().p("ABCmVIBRIrIAcFeIgyD6gAhOq8IgoQVIgGCbIgyD6gAgiiVIAKpYIAxAAIgCAuIglMag");
	this.shape_191.setTransform(95.4699,186.2977,0.5352,0.5352);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#CC0000").s().p("AB9H0IgcleIhIuDIAyAAIBkXbgAhABbIAmsaIAaC4IAZQtIgxDIgAiuH0IAGibIBexGIgKJYIgMODg");
	this.shape_192.setTransform(98.1457,186.2977,0.5352,0.5352);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#A00000").s().p("AAyApIgyAAIgxAAIgyAAIAAhSQBjAIBkgIIAABSg");
	this.shape_193.setTransform(96.8078,143.94,0.5352,0.5352);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#ED0000").s().p("AA9ImIgawtIgai4IACguIAyAAIBIODIhRorIA7SDgAg8LuIAMuDIAUDwIAnKTgAhcq8IAEgxIAyAAIheRGg");
	this.shape_194.setTransform(96.2191,186.2977,0.5352,0.5352);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.rf(["#FF2A2A","#AF0000","#8B0000"],[0,0.369,0.894],-9.4,-49.2,0,-9.4,-49.2,128.2).s().p("AEqLgQk3AAjcjVQjejVAAkuQAAkuDejVQDGjAERgTQAdgCAfAAICdgPQgcAEgcAHIgBAAIgdAHIgVAHQjbBIiIC7QiODEgGD1QgGDzCHDMQCEDNDmBTIglALg");
	this.shape_195.setTransform(67.6686,89.5682,0.5352,0.5352);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.rf(["#FFBFBF","#E30000","#E30000","#8F0000"],[0.004,0.161,0.173,0.718],-4.1,-35.8,0,-4.1,-35.8,114.8).s().p("ADCLcIgngJQjlhUiGjNQiGjMAGj0QAFj0CPjEQCIi8DbhHIAVgHIAdgHIAAAAQAdgHAcgFIA/gFQgQADgPAMQgKAHgIAKQgtA0gkCGQg7DcAAE2QAAE2A7DcQAkCIBBBLQg5gDg5gKg");
	this.shape_196.setTransform(78.1652,89.7421,0.5352,0.5352);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.rf(["#FC3E3E","#E30000","#8F0000"],[0,0.38,0.718],-37.3,-23.4,0,-37.3,-23.4,105.2).s().p("AghLpQhAhMgkiIQg6jbAAk3QAAk1A6jcQAkiHAsg0QAJgKAJgHQAPgMAQgDIAHAAQAPADAPALQAKAHAKALQAsA0AkCHQA7DcAAE1QAAE3g7DbQgkCIhEBMIgeABIgggBg");
	this.shape_197.setTransform(97.2493,89.7688,0.5352,0.5352);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.rf(["#FC3E3E","#E30000","#8F0000"],[0,0.38,0.718],-25.8,-14.6,0,-25.8,-14.6,88.7).s().p("AjJIeQA7jcAAk2QAAk2g7jcQgkiGgsg0QgQgSgQgIQgPgLgPgDIARAAIBMAIIAOACQAfAFAdAIQCaAqB7BzQCxCkAxDwQAxDwhdDkQhdDhjKCAQg9AnhIAXIgJgBQhIAShHAFQA+hLAiiAg");
	this.shape_198.setTransform(115.8095,89.7153,0.5352,0.5352);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#990000").s().p("ACHIVQA7jbAAk3QAAk1g7jcQgkiGgsg1QgKgKgKgIQAQAIAQASQAsA0AkCGQA7DcAAE2QAAE2g7DcQgiCAg+BLIgUACQBEhNAkiIgAgtLpQhChMgkiIQg6jbAAk3QAAk1A6jcQAkiGAtg1QAJgJAJgHQAPgMARgDIAOAAQgQADgPAMQgJAHgJAJQgsA1gkCGQg6DcAAE1QAAE3A6DbQAkCIBABNIgOgBgADLLSQBIgXA9gnQDLiABdjhQBdjkgxjwQgxjwixikQh8hziagqQCiAoCCB4QCxCkAxDwQAxDxhdDjQhdDijLB/Qg9AnhIAYgAjNLSIgJAAQjlhTiGjNQiGjMAFj0QAGj0COjFQCJi7DbhIIAVgGIAdgHIABAAQAcgIAdgDIAPgCQgdAFgcAIIgBAAIgdAHIgVAGQjbBIiJC7QiODFgGD0QgFD0CGDMQCGDNDlBUIgGgBg");
	this.shape_199.setTransform(97.1401,89.7555,0.5352,0.5352);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.rf(["#FC3E3E","#E30000","#8F0000"],[0,0.38,0.718],-29.3,-14.4,0,-29.3,-14.4,87.1).s().p("AlILZQBIgYA9gnQDKiABdjhQBdjjgxjxQgxjwiwikQiBh4ijgoQgdgIgegFIgPgCICOANIAAAAQE4AADcDWQDdDVAAEtQAAEujdDVQjcDVk4AAg");
	this.shape_200.setTransform(126.3484,89.6083,0.5352,0.5352);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#C57600").s().p("Aj9MFIAIAAIAHABIAnAJQA5AKA5ADIAPABQAfABAggBIATgCQBHgFBHgRIAKAAIAOAEIAXAGQANAIALAKQAdAeAAAqIAAAgQmZgQhih0gAiQuGIBLgCIAyAAQBrABBsAJIAdAdQAPAPAHATQhOAJhAAAQi8AAg9hQg");
	this.shape_201.setTransform(99.2562,87.0262,0.5352,0.5352);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#E18700").s().p("AkQLdIABAAIAlgLQBiB0GaAQQAAAqgeAdQgdAdACAAQoDgFAajYgADcrTQoVhBAuidQBHgGBHgCQBSBrE2gkQAHARAAAUIAAAhQAAApgeAdQgLAMgNAHIAAAAg");
	this.shape_202.setTransform(98.2048,89.7421,0.5352,0.5352);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FF9900").s().p("AhIO9QhGgFhGgMIgfgeQgdgdAAgpIAAghQAAgpAdgeQALgLANgHQgaDYIEAGQhIAMhIAFQgyADgyAAQgxAAgygDgACDrvIhMgIIgRAAIgLgBIgLABIg+AFIgPABIieAPIgCgBQgLgHgLgKQgdgdAAgqIAAggQAAgqAdgdIAegdQgvCcIVBBg");
	this.shape_203.setTransform(95.3629,90.5181,0.5352,0.5352);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#580000").s().p("AgYG6IAAtzIAxAAIAANzIgxAAg");
	this.shape_204.setTransform(96.8479,14.9406,0.5352,0.5352);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#860000").s().p("ApHLuIGyAAQBlAAgBhIIAAjaQABhKhlABIjHAAIAAhJIK7AAIAABJIjJAAQhkgBAABKIAADaQAABIBkAAIGyAAQj6DIlOAAQlMAAj7jIgAEsJdQgUAAgPgLQgOgLAAgOQAAgPAOgLQAPgLAUAAIEsAAQAVAAAOALQAPALABAPQgBAOgPALQgOALgVAAgApWJdQgVAAgPgLQgOgLAAgOQAAgPAOgLQAPgLAVAAIEsAAQAVAAAOALQAPALAAAPQAAAOgPALQgOALgVAAgAu1AAQAAk8C1jzIAUACIDIAAIAABIIjIAAQgqAAgdAVQgdAWAAAeQAAAeAdAVQAdAVAqABIDIAAIAABIIjIAAQhkAAAABJIAADZQAABJBkAAIDIAAIAABIIjIAAQgqAAgdAWQgdAVAAAeQAAAfAdAUQAdAWAqAAIDIAAIAABJIjIAAQhTgBgOAzQhojEAAjxgALuGDIjHAAIAAhJIDHAAQAqAAAdgWQAdgUAAgfQAAgegdgVQgdgWgqAAIjHAAIAAhIIDHAAQBkAAAAhJIAAjZQAAhJhkAAIjHAAIAAhIIDHAAQAqgBAdgVQAdgVAAgeQAAgegdgWQgdgVgqAAIjHAAIAAhIIDHAAIATgCQC1DzAAE8QAADwhnDEQgPgxhSAAgAlcCoIAAhIIDHAAQBlAAgBhJIAAjZQABhJhlAAIjHAAIAAhIIDHAAQAqgBAdgVQAegVgBgeQABgegegWQgdgVgqAAIjHAAIAAhIIDHAAQAqgBAdgVQAegVgBgfQABgdgegWQgdgVgqAAIjHAAIAAhJQAAgegdgVQgYgRgfgEQDEhlDsAAQDtAADFBlQgfAEgXARQgdAVAAAeIAABJIjJAAQgpAAgdAVQgeAWAAAdQAAAfAeAVQAdAVApABIDJAAIAABIIjJAAQgpAAgdAVQgeAWAAAeQAAAeAeAVQAdAVApABIDJAAIAABIIjJAAQhkAAAABJIAADZQAABJBkAAIDJAAIAABIgAEsgxQgUABgPgLQgOgLAAgPQAAgPAOgLQAPgLAUAAIEsAAQAVAAAOALQAPALABAPQgBAPgPALQgOALgVgBgApWgxQgVABgPgLQgOgLAAgPQAAgPAOgLQAPgLAVAAIEsAAQAVAAAOALQAPALAAAPQAAAPgPALQgOALgVgBgAInq/IAAhIQAsAhArAngAp9q/QArgoAughIAABJg");
	this.shape_205.setTransform(326.6017,119.9821,1.081,1.081);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#CC0000").s().p("ACWMfQhkAAAAhIIAAjaQAAhJBkAAIDIAAIAAhJIq7AAIAABJIDIAAQBkAAAABJIAADaQAABIhkAAImzAAQgtgkgqgqIgDgCIgDgEQhohqhBh6QAOgzBTAAIDIAAIAAhJIjIAAQgpAAgegVQgcgVAAgfQAAgeAcgVQAegVApAAIDIAAIAAhJIjIAAQhjAAAAhJIAAjZQAAhJBjAAIDIAAIAAhIIjIAAQgpAAgegWQgcgVAAgeQAAgeAcgWQAegVApAAIDIAAIAAhIIjIAAIgTgBQArg7A2g2IAhggIBZAAIAAhJQA5goA7gfQAfADAYARQAdAVAAAeIAABJIDIAAQApAAAdAVQAeAWAAAeQAAAegeAVQgdAWgpAAIjIAAIAABIIDIAAQApAAAdAVQAeAWAAAeQAAAegeAVQgdAWgpAAIjIAAIAABIIDIAAQBkAAAABJIAADZQAABJhkAAIjIAAIAABJIK7AAIAAhJIjIAAQhkAAAAhJIAAjZQAAhJBkAAIDIAAIAAhIIjIAAQgqAAgdgWQgdgVAAgeQAAgeAdgWQAdgVAqAAIDIAAIAAhIIjIAAQgqAAgdgWQgdgVAAgeQAAgeAdgWQAdgVAqAAIDIAAIAAhJQAAgeAdgVQAXgRAfgDQA8AfA5ApIAAABIAABHIBXAAIABAAIAIAIIAZAYQA2A2AsA7IgTABIjIAAIAABIIDIAAQApAAAdAVQAeAWAAAeQAAAegeAVQgdAWgpAAIjIAAIAABIIDIAAQBjAAABBJIAADZQgBBJhjAAIjIAAIAABJIDIAAQApAAAdAVQAeAVAAAeQAAAfgeAVQgdAVgpAAIjIAAIAABJIDIAAQBSAAAOAxQhCB/htBtQgrAqgtAkgAEJJQQgPALAAAPQAAAPAPAKQAPALAUAAIEsAAQAVAAAOgLQAPgKAAgPQAAgPgPgLQgOgLgVAAIksAAQgUAAgPALgAp6JQQgPALAAAPQAAAPAPAKQAPALAVAAIErAAQAVAAAPgLQAPgKAAgPQAAgPgPgLQgPgLgVAAIkrAAQgVAAgPALgAEJg+QgPALAAAPQAAAPAPALQAPAKAUAAIEsAAQAVAAAOgKQAPgLAAgPQAAgPgPgLQgOgKgVAAIksAAQgUAAgPAKgAp6g+QgPALAAAPQAAAPAPALQAPAKAVAAIErAAQAVAAAPgKQAPgLAAgPQAAgPgPgLQgPgKgVAAIkrAAQgVAAgPAKg");
	this.shape_206.setTransform(326.6557,114.6583,1.081,1.081);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#A30000").s().p("AqEM8QgygogvguIgCgDIgEgEQhzh1hHiHQhzjaAAkJQAAldDIkMQAwhAA7g8QASgSATgRQAwgtAzgkQA+gtBCgiQDYhwEFAAQEGAADZBwQBDAjA+AtQAyAlAvArIAJAJIAbAaQA8A8AwBAQDIEMAAFdQAAEIhyDaQhJCLh5B5QguAugyAoQkVDdlwAAQlvAAkVjdgAmwtQQg8Afg4ApQguAggsApIghAfQg2A2grA7Qi1DyAAE9QAADwBoDFQBAB6BoBqIAEAEIACACQAqArAuAjQD6DJFNAAQFNAAD7jJQAtgjAqgrQBthtBDh+QBnjFAAjvQAAk8i1jzQgsg7g2g2IgZgXIgIgIIAAAAQgrgngtghIAAAAQg4gpg9ggQjEhljtAAQjtAAjDBlg");
	this.shape_207.setTransform(326.6287,120.0362,1.081,1.081);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#EB9495").s().p("Aw6DMQm/hUAAh4QAAh2G/hVQHBhUJ5AAQJ6AAG+BUQHCBVgBB2QABB4nCBUQm+BTp6AAQp5AAnBhTg");
	this.shape_208.setTransform(209.95,1102.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.instance_8},{t:this.instance_7},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.instance_6},{t:this.jenner},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},1).to({state:[{t:this.shape_51},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]},1).wait(1));

	// words_CN
	this.instance_12 = new lib.Symbol28();
	this.instance_12.setTransform(328.2,592.4,1,1,0,0,0,295.9,342.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(2).to({_off:false},0).wait(1));

	// Card_BG
	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(1,1,1).p("Eg0VhhpMBorAAAQCWAAAACWMAAAC+nQAACWiWAAMhorAAAQiWAAAAiWMAAAi+nQAAiWCWAAg");
	this.shape_209.setTransform(320,525);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFF5").s().p("Eg0VBhqQiWAAAAiWMAAAi+nQAAiWCWAAMBorAAAQCWAAAACWMAAAC+nQAACWiWAAg");
	this.shape_210.setTransform(320,525);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#9EAB7B").s().p("Eg0WBa0MAAAi1nMBotAAAMAAAC1ng");
	this.shape_211.setTransform(315.15,561.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFBBCC").s().p("Eg0WBa0MAAAi1nMBotAAAMAAAC1ng");
	this.shape_212.setTransform(315.15,561.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_210},{t:this.shape_209}]}).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-548.1,431.2,1488.1,891.2);
// library properties:
lib.properties = {
	id: 'E75A3BCDBF8673409C37A4C6A47D6458',
	width: 640,
	height: 1136,
	fps: 24,
	color: "#9EAB7B",
	opacity: 1.00,
	manifest: [
		{src:"images/HKcard.png?1713926523451", id:"HKcard"},
		{src:"images/westcard.png?1713926523451", id:"westcard"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E75A3BCDBF8673409C37A4C6A47D6458'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;