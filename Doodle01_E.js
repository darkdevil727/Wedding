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
// helper functions:

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


(lib.Symbol65 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-25.1,-6.4,0,-25.1,-6.4,366.2).s().p("EAu6ACwMhd+AAAQhLgCg1gzIgDgEIAAAAIgDgDID2kiMBaoAAAID3EhIgCACIgDADIgBAAIgEAEQgwAuhCAFIgRABIgEAAg");
	this.shape.setTransform(324.475,1123.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-0.9,20.7,0,-0.9,20.7,608.8).s().p("EgCUBTSMAADinGIDxj/IABACQAuAwAFBBIABASIAAAEMAAACrgQgCBJgxA1g");
	this.shape_1.setTransform(629.375,573.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],3.1,-261.4,0,3.1,-261.4,852).s().p("EgBjBX1QgtgwgFhCIgBgRIAAgEMAAAirgQABhLA0g2IADgDIAAAAID1EDMgADCnFIAAABIj1EkIgCgCg");
	this.shape_2.setTransform(19.6,573.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],28.7,7,0,28.7,7,369).s().p("EgtRACdIj2kBIAEgEQAxguBBgFIASgBIAEAAMBd9AAAQBLABA2A0IADADIAAAAIACADIjxD+g");
	this.shape_3.setTransform(324.5375,20.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol65, new cjs.Rectangle(4.5,5.3,639.8,1136), null);


(lib.Symbol56 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AmlHxQigiHA4jIQAYhXBOgzQAhDEBsCiQBpCeC0guQFMhWAulOQAUiPh2hcQiWhzi9AMQA/AkAeBDQAbA8ACA8QgEAHgJACQgfAHgegCIg2gIQixiKi2iGQg5gqA4g0QB3hvCVhRQA3gfA5giQAvAEAtALQAgAHAQAbIADAFQgBAmgUAgQgnA6hBAeIgeANQEgAECzDcQDaELibE1QgzBnhgBBQi4B8ivAAQjIAAi/iig");
	this.shape.setTransform(54.0627,65.8941);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol56, new cjs.Rectangle(0,0,108.1,131.8), null);


(lib.Symbol53 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#DBA909").ss(3,1,1).p("AyAkQMAkBAAAAyAERMAkBAAA");
	this.shape.setTransform(109.775,40.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol53, new cjs.Rectangle(-7,11.7,233.6,57.599999999999994), null);


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
	this.shape_52.graphics.f("#FAFEFF").s().p("AB9DwIkDAAIAAgKIAAgUQAFAAADgCQACgDAAgFQAFAAADgCQACgDAAgFIAKAAQCMgJg2jGQgBgCgFAAIAAgKIgKAAIAAgKIAKAAIAAAKIAKAAIAKAAIAJAAIAKAAIAKAAIAAAKIgKAAIAAAKIAAAJIAACqIAAAKQAcASA0gIIAKAAIAKAAQAAAFADADQACACAFAAQAAAFADADQACACAFAAIAAAUIAAAKIgKAAgAAZgdIAAgKIAKAAIAAAKIgKAAgAAjgnIAAgKIAKAAIAAgKIAKAAIAAAKIgKAAIAAAKIgKAAgAAjgnIAAAAgAg2gxIAAgKIAKAAIAAAKIgKAAgAhAg7IAAgKIAKAAIAAAKIgKAAgABVhjIAAgKIAKAAIAAAKIgKAAgABfhtIAAgKIAKAAIAAgKIAKAAIAAAKIgKAAIAAAKIgKAAgAhohtIAAgKIAKAAIAAAKIgKAAgAhyh3IAAgKIAKAAIAAAKIgKAAgAh8iBIAAgKIAKAAIAAAKIgKAAgAB9ifIAKAAQAAAFgDADQgCACgFAAIAAgKgACHifIAAgKIAKAAIAAAKIgKAAgAiQifIAAgKIAKAAIAAAKIgKAAgACRipIAAgKIAKAAIAAAKIgKAAgACRipIAAAAgAiaipIAAgKIAKAAIAAAKIgKAAgACbizIAAgKIAKAAIAAAKIgKAAgAikizIAAgKIAKAAIAAAKIgKAAgACvjRIAAgKIAKAAIAAAKIgKAAgAC5jlIAKAAQAAAFgDACQgCADgFAAIAAgKgAjCjbIAAgKQgFAAgDgDQgCgCAAgFIAKAAIAAAKIAKAAIAAAKIgKAAgADDjlIAAgKIAKAAIAAAKIgKAAgADDjlIAAAAg");
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
	this.shape_117.graphics.f("rgba(44,45,45,0.184)").s().p("ACHEnIAAgKIAAgUQgFAAgCgCQgDgDAAgFIAKAAIAAAKIAKAAIAAAUIAAAKIgKAAgAiQEnIAAgKIAAgKIAAgKIAKAAIAAAUIAAAKIgKAAgAiGD/IAKAAQAAAFgCADQgDACgFAAIAAgKgAB2D9QgDgDAAgFIAKAAIAAAKQgFAAgCgCgAh8D1IAKAAQAAAFgCADQgDACgFAAIAAgKgAAPDrIAKAAIBGAAIAKAAIAAAKIgKAAQgPADgNAAQggAAgUgNgAhoDrQB7gGgqiuIgBgKIAAgKQAFAAABACQA2DHiMAJIAAgKgAAPA3IAAgKIAAgKIAKAAIAAAKIAAAKIgKAAgAAZAjIAAgKIAKAAIAAAKIgKAAgAgiAjIAAgKIgKAAIAAgKIAKAAIAAAKIAKAAIAAAKIgKAAgAAjAZIAAgKIAKAAIAAAKIgKAAgAAjAZIAAAAgAAtAPIAAgKIAKAAIAAAKIgKAAgAg2APIAAgKIgKAAIAAgJIAKAAIAAAJIAKAAIAAAKIgKAAgAA3AFIAAgJIAAgKIAKAAIAAAKIAAAJIgKAAgAA3AFIAAAAgAhKgEIAAgKIAAgKIgKAAIAAgKIgKAAIAAgKIgKAAIAAgKIAKAAIAAAKIAKAAIAAAKIAKAAIAAAKIAKAAIAAAKIAAAKIgKAAgABBgOIAAgKQAFAAADgCQACgDAAgFIAKAAIAAAKQAAAFgCADQgDACgFAAIgKAAgABBgOIAAAAgABVgiIAAgKIAKAAIAAAKIgKAAgABfgsIAAgKIAKAAIAAAKIgKAAgABfgsIAAAAgABpg2IAAgKIAKAAIAAAKIgKAAgAhyg2IAAgKIAKAAIAAAKIgKAAgABzhAIAAgKIAAgKIAKAAIAAAKIAAAKIgKAAgABzhAIAAAAgAh8hAIAAgKIgKAAIAAgKIAAgKIAKAAIAAAKIAAAKIAKAAIAAAKIgKAAgAB9hUIAAgKQAFAAACgCQADgDAAgFIAKAAIAAAKQAAAFgCACQgDADgFAAIgKAAgAiQheIAAgKIgKAAIAAgKIgKAAIAAgKIgKAAIAAgKIAKAAIAAAKIAKAAIAAAKIAKAAIAAAKIAKAAIAAAKIgKAAgACRhoIAAgKIAKAAIAAAKIgKAAgACRhoIAAAAgACbhyIAAgKIAKAAIAAAKIgKAAgAClh8IAAgKIAKAAIAAAKIgKAAgAClh8IAAAAgACviGIAAgKIAAgKIAKAAIAAAKIAAAKIgKAAgAi4iGIAAgKQAFAAACADQADACAAAFIgKAAgAjCiQIAAgKIAAgKIgKAAQgFAAgDgDQgCgCAAgFIAAgKIAKAAQAAAFACACQADADAFAAIAAAKIAKAAIAAAKIAAAKIgKAAgAC5iaIAAgKQAFAAACgDQADgCAAgFIAKAAIAAAKQAAAFgDACQgCADgFAAIgKAAgAC5iaIAAAAgADNiuIAAgKIAKAAIAAAKIgKAAgADXi4IAAgKIAKAAIAAAKIgKAAgADXi4IAAAAgAjgi4IAAgKQAFAAADACQACADAAAFIgKAAgADhjCIAAgKIAKAAIAAAKIgKAAgAjqjCIAAgKQAFAAACACQADADAAAFIgKAAgADrjMIAAgKIAAgKQARgDAHgPQABgCAFAAIAAAKQAAAFgCACQgIAIgKAFIAAAKIgKAAgAj0jMIAAgKQAFAAACACQADADAAAFIgKAAgAj+jWIAAgKIAAgKQAFAFADAGQACAEAAAFIgKAAgAkIjqQgFAAgDgDQgCgCAAgFIAAgKQAKAFAHAIQADACAAAFIgKAAgAEJj0IAAgKIAKAAIAAAKIgKAAgAETj+IAAgKIAKAAIAAAKIgKAAgAkcj+IAAgKQAFAAADADQACACAAAFIgKAAgAEdkIIAAgKIAAgKIgKAAIi0AAIAAgKIC0AAIAKAAIAAAKIAKAAIAAAKIAAAKIgKAAgAEdkIIAAAAgAkmkIIAAgKIAAgKIAKAAIAAgKIFTAAIAKAAIAAAKIgKAAIgKAAIlJAAIAAAKIAAAKIgKAAg");
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
	this.shape_207.graphics.f("rgba(12,12,12,0.055)").s().p("AAAEdIAAgKIAKAAIAAAKIgKAAgABGETIgeAAIgKAAIAAgKIAoAAIAKAAIAAAKIgKAAgAgdETIgKAAIgeAAIAAgKQAZAAAYAFQABAAAAAFIgKAAgABkEJIgKAAIgKAAIAAgKIAUAAIAKAAIAAAKIgKAAgABQEJIAAAAgAhPEJQgFAAgEgCQgfgNgegPIAAgKQAoAPAmATQACABAAAFIgKAAgAFAD1IAKAAQAAAFgCADQgDACgFAAIAAgKgAB4D/IgKAAIAAgKIAKAAIAKAAIAAAKIgKAAgACMD1IgKAAIAAgKIAKAAIAKAAIAAAKIgKAAgACWDrIAAgKIAKAAIAAgKQAKgFALgDQAEgCAFAAIAAAKQgFAAgEACQgGADgFAFIgKAAIAAAKIgKAAgACWDrIAAAAgAifDhQgFAAgCgCQgcgcgZgeIAAgKQAjAeAhAgQACADAAAFIgKAAgAC+DNIAAgKIAKAAIAAAKIgKAAgADIDDIAAgKIAKAAIAAgKIAKAAIAAgKIAAgKQAFgFAGgDQAEgCAFAAIAAgKIAAgKIAKAAIAAAKIAAAKIgKAAIAAAKQAAAFgCADQgDACgFAAIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAgADIDDIAAAAgAjlCbQAAgFgCgEQgDgGgFgFIAAgKQARADACARIABAKIgKAAgAD6B9IAAgKIAAgKIAKAAIAAAKIAAAKIgKAAgAj5B9QAAgFgCgEQgDgGgFgFIAAgKQAbgGgGAaIgBAKIgKAAgAEEBpIAAgKIAAgUQARgDgCgbIAFAAIAAAKIABAJQAGAXgRgCIAAAKIAAAKIgKAAgAEEBpIAAAAgADeinQgCgCAAgFIAKAAIAAAKQgFAAgDgDgADciuQgFAAgDgDQgWgWgUgZIAKAAQAUAPASASQACACAAAFIAAAKIAAAAgAjRi4IAKAAIAAgKIAKAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAIAAgKgAi9jMIAKAAIAAgKIAKAAQAAAFgDADQgCACgFAAQAAAFgDACQgCADgFAAIAAgKgAipjgQAFgFAGgDQAEgCAFAAIAKAAQAAAFgCAEQgIALgUAAIAAgKgACgjgQgRgDgDgRIAKAAQAFAFAGADQAEACAFAAIAAAKIgKAAgAiLj0QAUgKAUgIQAFgCAFAAIAKAAQAAAFgCABQgcAOgeAKIAAgKgACMj0QgFAAgEgCQgGgDgFgFIAKAAIAKAAIAAAKIAAAAgAlJj0IAAgKQAFAAADADQACACAAAFIgKAAgAB4j+IgKAAQgggDgSgRIAKAAQAcgCAOAJQADADAFAAIAAAKIAAAAgAhPkSIAKAAIAKAAIAKAAQAAAFgBAAQgOAFgPAAIAAgKgAA8kSIgKAAIhjAAIAAgKIBjAAIAKAAIAAAKIAAAAg");
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
	this.shape_222.graphics.f("rgba(27,27,27,0.114)").s().p("EgmIAEgQgDgDAAgFIAKAAIAAAKQgFAAgCgCgEgmwAEMQgDgDAAgFIAKAAIAAAKQgFAAgCgCgEgnYADtQgDgCAAgFIAKAAIAAAKQgFAAgCgDgEgniADjQgDgCAAgFIAKAAIAAAKQgFAAgCgDgEgnbADmIAAAAgEghBACgIAKAAQAAAFgCADQgDACgFAAIAAgKgEgohgAdIAAgKIAKAAIAAAKIgKAAgAeOhZIAAgKIAKAAIAAAKIgKAAgEghLgBZIAAgKQAFAAADACQACADAAAFIgKAAgEgnvgB3IAAgKIAKAAIAAAKIgKAAgEgnRgCVIAAgKIAKAAIAAAKIgKAAgEgibgCpIAAgKQAFAAADACQACADAAAFIgKAAgEAoYgEXIAAgKQAFAAACACQADADAAAFIgKAAg");
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
	this.shape.graphics.f("#FFBBCC").s().p("Egm2ACoIAAt1MBNtAAAIAAN1Q0fImzaAAQzbAAyZomg");
	this.shape.setTransform(248.65,71.775);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,497.3,143.6);


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
	this.shape.graphics.f("#FF73A9").s().p("AghBwQAAgHAGgJQAHgJAGAAQAFAAAGADQAGAEAAADQAAASgIAHQgJAHgGAAQgNAAAAgRgAgJAsQgHgCgDgCQgCgTALgyQAJgrAAgQQAAgXAHgJQAJgIAGAAQAEAAAFADQAEAEAAAFQAAADgTBWQgIAigBAUQAAAMgDAGIgMgBg");
	this.shape.setTransform(219.125,67.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF73A9").s().p("Ag+BWQgPgRAAgeQAAgxAiguQAigtAnAAQANAAAJAJQAIAIAAAMQAAAbgbAZQgaAYgsAYQgJAFAAAHQAAAPAJAJQAIAIARAAQAkAAAogqQAFgFADAAQAGAAAAAJQAAASggAZQgfAZghAAQgcAAgQgQgAgOgzQgVAYgIAhQBJgrAAgbQAAgKgJAAQgQAAgTAXg");
	this.shape_1.setTransform(204.075,71.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF73A9").s().p("AiOCBQgFgHAAgFQAAgQAKgmIAPg6QAOg1ADgaQAEgaAAgPQAAgPAYAAQAFAAAGAJQAFAJACAGIAFAQIAYBBQAOAoADAFQADAFADAAQAHgCA3hKQA9hUAIABQAHAAAJAFQAIAFAAAFIgKBNQgEAcgDAmIgDAsQAAAJADALQADAKAAAGIgCANQgBAKgGABIgKACQgSAAAAgfQAAgcAMhsIABgMIACgLIABgPIAAgHQgSATgkAxQglAxgOAOQgOAOgKABQgHAAgHgLQgHgLgKghQgXhCgGgLIgEAUIgPBEQgSBPgDAaQAAADgGAEQgFADgDAAQgHAAgFgGg");
	this.shape_2.setTransform(177.225,68.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF73A9").s().p("AhZCTQgEgDAAgGQAAgGAEgXQAIgiAFg5QANiGAHgRQAHgSANAAQAFAAACAFQADAFAAAHQAAAPgLA8QgNA9gFA5IAggdQAagXALgLQAogoASAAQAOAAAAANQAAAPgOAHQgRAJgeAUQgcAVAAAIQAAAEAUAXQAVAXAPAKQAPALAOAAIAGAAQAGgBAAAHQAAAHgJAIQgKAIgQAAQgKAAgKgHQgLgHgbggQgUgZgGgFQgFgGgDAAQgCAAgLAKQgKAJgBAEQgBAFAAAgIAAAIQAAAGgGAGQgGAFgHAAQgIAAgEgFg");
	this.shape_3.setTransform(136.15,67);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF73A9").s().p("Ag6BYQgPgQAAgbQAAgtAkgzQAlgzAfAAQANABALAPQAKAPAAASQAAAKgFAIQgEAGgFABQgKgBgEgUQgEgWgKAAQgSAAgYAsQgZAqAAAeQAAAdAiAAQAZAAAjgYQAMgIAGgBQAGABAAAGQAAAOggAUQgfAUgdAAQgaABgOgPg");
	this.shape_4.setTransform(115.65,71.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF73A9").s().p("AgqB2QAAggANhGQAFgXAAgGQAAgLAEgIQAEgIAHAAQAJAAAFAFQAFAEAAAFQAAAGgDAIQgMAugDAUQgDAUAAAbQAAAOADAQIABAGQAAADgGAFQgGAFgGAAQgRAAAAgggAAFhmIgCgFQgEgMAAgIQAAgHAIgIQAIgHAKAAQAFAAAHAEQAGAEAAAEQAAAFgEAOQgFAOgJAFQgJAFgFAAQgEAAgCgIg");
	this.shape_5.setTransform(103.125,67.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF73A9").s().p("AgdCQQgDgMAAgZQAAg7AOhWQAOhXAHgPQAJgPAJAAQAMAAAAAQQAAAPgPA2QgKAigFAoQgFApAAAYQAAAdADAcIABAIQAAAJgFAGQgGAHgGAAQgKAAgEgMg");
	this.shape_6.setTransform(92.35,66.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF73A9").s().p("AhWB6QgagUAAgnQAAhGA9hEQA8hDA5AAQAWAAAMANQANANAAARQAAARgCAJQgCAJgJAHQgJAGgGAAQgEAAgDgEQgDgDAAgGIADgRQADgNAAgGQAAgSgQAAQgYAAgkAcQgiAdgZAqQgZAqAAAkQAAAYAOAQQAOAQAbAAQAPAAAVgIQAWgHASgOQASgMAEAAQAHAAAAAJQAAAIgUAQQgTARgaAJQgZAKgVAAQgfAAgZgVg");
	this.shape_7.setTransform(74.075,68.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFB9D4").ss(3,1,1).p("AEMggIBCBAIjpDpIhChCQhmAAhghQQhfhPBLgCIBhAcIjljlQg1huBpAeIBfBhQgHhKA8ARQAVhFA5AoIA/BHAgljoQBBhQBpB6ICHCeAhzjLIBRBWAioiSIBPBPAAjDHIDpjn");
	this.shape_8.setTransform(35.7216,31.6302);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAjDHIDpjnIBCBAIjpDpgAijB3QhfhPBLgCIBhAcIjljlQg1huBpAeIBfBhQgHhKA8ARQAVhFA5AoIA/BHIg/hHQBBhQBpB6ICHCeIjpDnQhmAAhghQgAhZhDIhPhPgAgih1IhRhWg");
	this.shape_9.setTransform(35.7216,31.6302);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Layer_3
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9FC7").s().p("AAjDHQhmAAhghQQhfhPBLgCIBhAcIjljlQg1huBpAeIBfBhQgHhKA8ARQAVhEA5AnQBBhQBpB6ICHCeIBCBAIjpDpg");
	this.shape_10.setTransform(33.7222,39.6317);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol48, new cjs.Rectangle(0.4,3.7,236.9,97.3), null);


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

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE2E3").s().p("Ag3DaIgdgJIgggLIgqgqIAAgrIAXgXIAXAAIAYAZIgYAYIgWAAIAAgJIASAAIAQgPIgQgPIgQAAIgRAQIAAAlIAmAlIA5ATIA5AAIA5gTIATglIAAjYIAKgdIAKggIA8g8IggA/IAADtIgKAUIgKAVIgqApIg8AUgAgTAUIgiAAIgaAaIAAgzIAXgWIAlAAIAAgRIAIgTIALgWIAMgMIAQgQIAACpIgJATIgLAXIgMAMIgPAPgAhMjNIA9AAIAWAHIAkAMIA/gfIg9A8Ig9AAIg6gTIg/Afg");
	this.shape.setTransform(104.9,81.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE2E3").s().p("AiSCzIALgHIAQgLIAUgFIA8gPIA7AAIA9AUIgDAIIAmg5QAGgIANgUIATg6IAAgkIgSgSIgLgFIgbgOIhgAAIggAxIBbAAIAWAXIAAAWIgcA6IAAgkIgkgSIhLAAIgSASIgVAVIgpAUIgaAAIAAgjIAaAZIAkgSIAIgIIAXgXIgyAAIgqgVIgUgpIAAgfIALAMIAQAOIAMAHIAZALIBNAAIAggxIgzAAIgcgJIghgMIgWgUIgUgrIAUgpIAWgWIA9gUIBPAAIAdAGIA7AQIgeAdIgGAGIgJAJIgGAJIgFAJIgYAiIBwAAIApAVIAWAqIAAAqIgVAaIgoA2IgKAPIgQAZIg3BRIg9gVIhiAAIggAJIhHARgAh0i6IgRARIAAAlIARARIA6ATIBLAAIAlg2IgKgKIgEgEIgQgJIgYgNIgNgGIgQgFIgdgIg");
	this.shape_1.setTransform(61.35,82.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("Ag7DoIgfgLIghgLIgtgsIAAguIAYgYIAZAAIAaAaIgaAaIgXAAIAAgKIATAAIARgQIgRgQIgRAAIgSASIAAAmIAoAoIA9AUIA8AAIA8gUIAUgnIAAjmIALgfIALghIBAhBIgiBEIAAD7IgKAVIgMAXIgrArIhBAWgAgVAWIgjAAIgcAbIAAg2IAYgYIAnAAIAAgRIAKgUIALgYIANgNIARgQIAACzIgKAUIgMAYIgMANIgRAQgAhRjaIBCAAIAXAIIAmANIBDgiIhBBBIhAAAIg+gVIhEAhg");
	this.shape_2.setTransform(109.275,83.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("AibC+IALgIIARgLIAWgFIBAgRIA/AAIBAAVIgDAJIAog8IAUgfIAUg9IAAgmIgTgTIgLgGIgdgOIhmAAIgiA1IBhAAIAYAXIAAAYIgfA+IAAgnIgmgTIhQAAIgTAUIgWAVIgsAWIgbAAIAAglIAbAaQARgHAVgMIAKgJIAYgYIg1AAIgtgWIgWgsIAAghIANANIAQAPIAOAHIAaANIBRAAIAjg1Ig2AAIgegKIgjgMIgXgWIgWgtIAVgrIAYgYIBBgWIBUAAIAdAIIBAAQIggAfIgGAHIgKAJIgGAKIgGAJIgZAkIB2AAIAtAWIAWAtIAAAsIgVAcIgrA5IgLARIgRAaIg6BWIhBgWIhnAAIgjAJIhMATgAh7jGIgSATIAAAnIASASIA+AUIBQAAIAmg5IgKgLIgFgEQgEgDgNgHIgagOIgNgFIgRgGIgfgJg");
	this.shape_3.setTransform(63.125,84.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E44488").s().p("ApChrQgTgzAAg6QAAiHBghgQBfhfCHAAQCHAABgBfQAYAYAQAaQARgaAYgYQBghfCHAAQCGAABgBfQBgBgAACHIAAAPQgCAXgEAVIgFAaIgBAHIgHAUQgeCnolHgQomnigciog");
	this.shape_4.setTransform(83.7,95.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(24,41.5,119.5,108.6), null);


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
	this.shape_52.graphics.f("#960000").s().p("AAKCEIAAhSIg4AAIAAA6IgUAAIAAhMIBMAAIAAgcIguAAIAAgrIg0AAIAABcQAAAtgdAiIgQgLQAagdAAgmIAAiiIBrAAIAAgXIAUAAIAAAXIBqAAIAAASIjWAAIAAAhIA0AAIAAgYIASAAIAAAYIBLAAIAAgYIATAAIAAAYIA6AAIAAASIg6AAIAAArIgvAAIAAAcIBRAAIAAAwQAAAMgIAIQgIAHgMAAIgTAAIgGgSIAYAAQAKAAAAgJIAAgeIg+AAIAABSgAgSgNIBLAAIAAgaIhLAAg");
	this.shape_52.setTransform(5.7,126.075);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#960000").s().p("AiHBtQBBgcAigoQAjgpAAgsIAAg/Ig2AAIAAgSIBHAAIAABAQAAAsAgAsQAgAuA4AjIgOARQgkgUgfgkQghgkgKghQgRArgfAdQgfAfg3AXg");
	this.shape_53.setTransform(5.85,96.65);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#960000").s().p("AiFB2IAAgSIA1AAIAAiLIASAAIAACLIA8AAIAAjIIhxAAIAAgSIDlAAIAAASIhhAAIAABXIBRAAIAAARIhRAAIAABgIB1AAIAAASg");
	this.shape_54.setTransform(5.8,65.95);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#960000").s().p("AAbCEIgHgTIAhAAQAJAAAAgIIAAhJIhnAAIAAgTIBmAAIAAgZIATAAIAAAZIAvAAIAAATIgvAAIAABJQAAAbgYAAgAgXA3IAOgMQAZAMARAeIgPANQgSgfgXgMgAhGBhIAAgUIglAAIAAAUIgTAAIAAjKIBLAAIAADKgAhrA7IAlAAIAAg/IglAAgAhrgWIAlAAIAAhAIglAAgAgogVIAAgTIBFAAIAAgoIg6AAIAAgTIA5AAIAAggIATAAIAAAgIA6AAIAAATIg6AAIAAAoIBGAAIAAATg");
	this.shape_55.setTransform(6.425,36.075);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#960000").s().p("AiHB0QBHgyAahIIASAIQggBRhDAxgAAZAEIAQgLQA8AxAjBNIgSAMQgjhRg6gugAh/hBIB3AAIAAhCIATAAIAABBIB1AAIAAATIj/ABg");
	this.shape_56.setTransform(5.775,6.05);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#960000").s().p("ABHBeQgOgUgIgbQgSA3g+AfIgNgRQA5gYAPgtIg7AAIAAgSIBAAAQADgVgBgRIgdAAQgKATgOAMIgRgKQAcgVAIgmIARAEIgFAQIBfAAIAAASIg1AAQABAWgDAQIBIAAIAAASIg4AAQARA0AxARIgLARQgmgTgPgUgAhmCFIAAiaQgFANgKANIgSgLQAjgwAVhOIARAHQgDARgJAZIgJAXIAADBgAg+BQIAAigIASAAIAACggAgfg3IAAgRIBuAAIAAgdIhdAAIAAgSIBvAAIAAAuIAcAAIAAASg");
	this.shape_57.setTransform(37.85,126.05);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#960000").s().p("AgpCEIgIgTIAYAAQAHAAAAgHIAAhxIASAAIAABwQAAARgFAFQgFAFgMAAgAALAoIATgFQAaAkAFAiIgUAGQgEgkgagjgAhpBkQAigXATguIAQAIQgPArglAdgAAwAjIATgGQAhAjALAoIgUAFQgMgpgfghgAiHAkQA4gWAXggIhAAAIAAgTIBHAAIAAgmIg0AAIAAgTIA0AAIAAglIASAAIAAAlIBCAAIAAglIAUAAIAAAlIA4AAIAAATIg4AAIAAAmIBGAAIAAATIhCAAQAgArAtALIgOASQg5gWgbgyIhHAAQgaAsg/AcgAgfglIBCAAIAAgmIhCAAg");
	this.shape_58.setTransform(37.8,96.075);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#960000").s().p("AgFCEIAAhVIh/AAIAAgSIB/AAIAAgrIhOAAIAAgTIBNAAIAAhiIATAAIAABiIBLAAIAAASIhLAAIAAArIB4AAIAAATIh3AAIAABVgAAlhbIAQgOQA6AWAWAvIgRAOQgRgrg+gagAiEgkQA+gcARgpIASALQgUArg9Adg");
	this.shape_59.setTransform(37.825,66.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#960000").s().p("AAbCEIgHgTIAhAAQAJAAAAgIIAAhJIhnAAIAAgTIBmAAIAAgZIATAAIAAAZIAvAAIAAATIgvAAIAABJQAAAbgYAAgAgXA3IAOgMQAZAMARAeIgPANQgSgfgXgMgAhGBhIAAgUIglAAIAAAUIgTAAIAAjKIBLAAIAADKgAhrA7IAlAAIAAg/IglAAgAhrgWIAlAAIAAhAIglAAgAgogVIAAgTIBFAAIAAgoIg6AAIAAgTIA5AAIAAggIATAAIAAAgIA6AAIAAATIg6AAIAAAoIBGAAIAAATg");
	this.shape_60.setTransform(38.425,36.075);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#960000").s().p("ABbB+IAAgkIi1AAIAAAkIgVAAIAAj7IDfAAIAAD7gAhaBIIC1AAIAAiyIg6AAIAABmQAAAIAIAAIAQAAQAGAAABgDQACgCAEgUIAQALQgEAUgFAHQgFAGgMAAIgWAAQgYAAAAgZIAAhoIgiAAIAAA5QAAAkgNAPQgNAQghAKIgLgMgAhaAMQAcgGAMgMQALgNAAgbIgBg8IgyAAg");
	this.shape_61.setTransform(37.8,6.625);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#960000").s().p("ABaCEIAAgTIhbAAIAAATIgTAAIAAhzICBAAIAABzgAgBBgIBbAAIAAgXIhbAAgAgBA3IBbAAIAAgVIhbAAgAiGB2QAjgZATgkQgNgLgKgEIgFALIgPgIQAWgyAIg0IgeAAIAAgSIAhAAQAGglADgTIASAEQgDAXgGAcIAnAAQgFBPgSAwQAQALAOAPIgMAPQgLgOgPgKQgXAoghAYgAhhAZQAMAGANAJQANgcAIhGIgXAAQgKAzgNAggABJgEQgUgSgIgfIgwAAIAAApIAygNIAAASIhKATIgHgPIAMgEIAAhoQBRgBAtgTIAMAPQgaAKghAGQAAAMADARIA8AAIAAASIg4AAQAIAXAOAMQANAMAIAAQADAAACgDQACgEADgcIASAIQgEAggGAGQgIAIgJAAQgQAAgTgRgAgDheIAAAXIAsAAQgBgMAAgOQgUADgXAAg");
	this.shape_62.setTransform(69.8,126.075);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#960000").s().p("Ag9CDIAAgUIgnAAIAAAUIgTAAIAAhjIBNAAIAABjgAhlBdIAoAAIAAgrIgoAAgAghB4IAAgSIA3AAQgHgQgPgPIAQgJQATAUAIAUIAGAAQAPgSAFgUIASAHQgGARgLAOIA2AAIAAASgAgGA2IAAhAIBmAAIAABAgAALAjIBCAAIAAgcIhCAAgAh3AMIAAgRIBMAAIAAARgABPgsIAAAOIhFAAIAAgNQgMAVgaASIgNgMQAZgTALgPQgJgPgRgMIAMgLQANAHAKAOQAIgNAGgWIgzAAIAAgRIBIAAQgGAsgTAbIA+AAQgcgogFgmIARgFQACASAIAQQAPgMAHgOIANALQgJAQgUAPQAEAJAIAKQAPgNAJgNIAOALQgPATgOAJQAXAYAOAJIgMAMQgYgOgTgagAh3grIBMAAIAAASIhMABgAiFhRIBjAAIAAASIhjABgAhzh2IBHAAIAAASIhHABg");
	this.shape_63.setTransform(69.85,96.05);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#960000").s().p("AgFCEIAAhVIh/AAIAAgSIB/AAIAAgrIhOAAIAAgTIBNAAIAAhiIATAAIAABiIBLAAIAAASIhLAAIAAArIB4AAIAAATIh3AAIAABVgAAlhbIAQgOQA6AWAWAvIgRAOQgRgrg+gagAiEgkQA+gcARgpIASALQgUArg9Adg");
	this.shape_64.setTransform(69.825,66.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#960000").s().p("AAbCEIgHgTIAhAAQAJAAAAgIIAAhJIhnAAIAAgTIBmAAIAAgZIATAAIAAAZIAvAAIAAATIgvAAIAABJQAAAbgYAAgAgXA3IAOgMQAZAMARAeIgPANQgSgfgXgMgAhGBhIAAgUIglAAIAAAUIgTAAIAAjKIBLAAIAADKgAhrA7IAlAAIAAg/IglAAgAhrgWIAlAAIAAhAIglAAgAgogVIAAgTIBFAAIAAgoIg6AAIAAgTIA5AAIAAggIATAAIAAAgIA6AAIAAATIg6AAIAAAoIBGAAIAAATg");
	this.shape_65.setTransform(70.425,36.075);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#960000").s().p("AiFBlIAAgVIELAAIAAAVgAhWAGIAAgSICsAAIAAASgAhmhkIDNAAIAAAUIjNAAg");
	this.shape_66.setTransform(69.8,6.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#960000").s().p("AAoB+IgGgUQAlAGAKABQANAAAFgLQAFgLADg0QADg1AAg1IhMAAQgSAngUAUIgRgLQAUgRANgfQAOgfAEghIASAFQgEAYgFARIBZAAQgCCZgHAgQgGAggdAAQgRAAgbgGgAhNCEIAAhnIgqACIgEgRIAPgBQAcgjADgHQgNgOghgPIALgQIAKAGQAUgfAMggIASAJQgNAfgWAgQAJAFALAKQAPgXAMgYIASAJQgcA0glArIAwgBQgDgMgJgMIAQgGQARAVAHAgIgSAGQgBgHgDgHIgZACIAABngAh/BxQAPghAEgfIARADQgBAbgRApgAgtA0IARgEQALAXAFAnIgSAEQgDgfgMgfgAAMgIIAPgLQAhAXAQAjIgQAMQgQgkgggXg");
	this.shape_67.setTransform(44.475,509.75);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#960000").s().p("ABIBHQgYAmgnAXIgLgPQAmgXAagpQgRgigFgnQgIAQgGAKIgQgLQARgcAJgaQAIgZAEgwIASAEQgBAcgIAdIBKAAIAAASIgQAAQgHA8gZAvQATAlAjAbIgPAPQghgigRgcgABJAgQATgnAFguIgsAAQAFAwAPAlgAhEB7IgFgWQAfAIAGAAQAFABAEgDQAEgCAEgWQAEgVADgiQACggAAgXIhQAAQgMAbgUAVIgOgMQAegeAJgwIAOAGIAAgXIgtAAIAAgSIAsAAIAAgbIATAAIAAAbIAcAAIAAgbIATAAIAAAbIAlAAIAAASIglAAIAAAaIgTAAIAAgaIgbAAIAAAaIgQAAIgEAPIBbAAQAAAtgFAzQgDAzgIANQgJAMgSAAQgJABgXgFgAhnBQIAAhQIBBAAIAABQgAhVA/IAdAAIABgvIgeAAg");
	this.shape_68.setTransform(45.05,479.75);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#960000").s().p("AhTCEIAAhnIgrACIgEgRIAPgBQAcgjADgGQgNgPgggPIALgPIAJAFQAVggAMgfIASAJQgOAfgWAgQAJAFAMAKQAPgXAMgYIARAJQgbA0gmArIAzgCQgDgKgJgNIAQgHQAOAVAKAhIgTAGQgBgIgCgHIgbACIAABogAiGBxQAQghAEgfIAQADQgBAbgRApgAgSB0IAAgSIBAAAIAAjHIg5AAIAAgRICHAAIAAARIg7AAIAADHIBGAAIAAASgAg0AzIARgFQAKAPAJAfIgSAEQgFgXgNgWg");
	this.shape_69.setTransform(-2.625,437.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#960000").s().p("AgJCEIAAgcIh9AAIAAgPIB9AAIAAgPIhiAAIAAgNIBiAAIAAgRIhQAAIAAgNIBQAAIAAgOIh5AAIAAgOIB5AAIAAgNIhRAAIAAgOIBQAAIAAgOIASAAIAAAOIBXAAIAAAbIAgAAIAAAOIggAAIAAAbIhXAAIAAAQIBgAAIAAAOIhgAAIAAAPIB8AAIAAAPIh7gBIAAAdgAAIAfIBEAAIAAgOIhEAAgAAIADIBEAAIAAgOIhEAAgAiDgXQAVgLABgWIAAhAQAwAAA4gLIAHAOQgyAJgrADIAAAMIBXAAIAAAtIhYAAQgFAXgTAOgAhbg9IBEAAIAAgSIhEAAgABAgvQgSALgcAEIgLgQQAbgCARgIIgUgXQgIAOgJAIIgNgMQAbgWAJgmIARAHQgCAJgFAGIBGAAIAAAPIgPAAQgHAYgQANQAXAOAhAEIgLARQghgIgbgRgABBhDQAOgLAGgQIgrAAQAMASALAJg");
	this.shape_70.setTransform(-2.3,408.225);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#960000").s().p("AgCAzIgEAAQgYAyhbAZIgNgRQBTgTAXgnIhYAAIAAgSIBfAAQAEgRACgYIhMAAIAAhkIATAAIAABRICaAAIAAA8IAjAAIAAASIhiAAQAlAvBPALIgLARQhbgOgjg9gAgBAhIBAAAIAAgqIg7AAQgBASgEAYgAgtg0IAAhJIB9AAIAABJgAgbhHIBXAAIABgkIhYAAg");
	this.shape_71.setTransform(-2.425,379.775);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#960000").s().p("AhwB+IAAjoIgUAAIAAgTIEBAAIAAATIjaAAIAADGIDiAAIAAATIjiAAIAAAPgAAdBJIAAhMIBNAAIAABMgAAvA4IAoAAIAAgrIgoAAgAhFBJIAAhMIBNAAIAABMgAgyA4IAnAAIAAgrIgnAAgAgwgXIAAhBICDAAIAABBgAgegoIBfAAIAAgeIhfAAg");
	this.shape_72.setTransform(-2.5,350.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#960000").s().p("AAHB8QAjglgDhRIASACQAAAggEAfQAJAOAKAIIAAh0IgcAAIAAgTIBTAAQAAAegGAWIgRgDQAEgPAAgQIgSAAIAAAyIAgAAIAAASIggAAIAAA6QAEACAHAAIAjAAIgHATIgbAAQggAAgXgfQgGAUgRAUgAhTB5QAtgqAAg+IAAhOIgXAAIAAgSIAjAAIAAg0IASAAIAAA0IAhAAIAAASIgtAAIAAAoIAnAAIAAAcQAAAmgDAbQgCAbgDAHQgDAIgHAFQgGAFgLAAQgGAAgJgDIgFgUQAIADAIAAQAJAAAEgEQAEgEACgdQACgdgBgpIgUAAIAAARQAABJgwAtgAiHBEIAlgOIAAhAIgaAAIAAgTIAaAAIAAg5IgeAAIAAgTIBLAAIAAATIgbAAIAAA5IAaAAIAAATIgaAAIAAA4IAcgLIAAAUIhGAcgAANgmQAegkAGg5IASAFQgBARgFARIBGAAIAAASIhLAAQgLAdgQARg");
	this.shape_73.setTransform(29.525,410.225);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#960000").s().p("AhuCEIAAheIBnAAIAAgRIhTAAIAAhWIC3AAIAABWIhTAAIAAAQIBmAAIAABEQAAAagbAAIgdAAIgHgQIAjAAQAJAAAAgJIAAg0IhTAAIAAAaIAqgDQgHgJgFgDIAQgGQASAQALAWIgOAIQgFgJgDgFIiJAIIgHgPIBKgDIAAgbIhTAAIAABOgAAKAEIBAAAIAAgRIhAAAgAhHAEIBAAAIAAgRIhAAAgAAKgeIBAAAIAAgSIhAAAgAhHgeIBAAAIAAgSIhAAAgAArhIIAAgUIhVAAIAAAUIgTAAIAAgUIhIAAIAAgRIBIAAIAAgWIASAAIAAAWIBWAAIAAgWIATAAIAAAWIBIAAIAAARIhIAAIAAAUg");
	this.shape_74.setTransform(29.55,380.225);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#960000").s().p("AhwB+IAAjoIgUAAIAAgTIEAAAIAAATIjZAAIAADGIDiAAIAAATIjhAAIAAAPgAAcBJIAAhMIBOAAIAABMgAAvA4IAoAAIAAgrIgoAAgAhEBJIAAhMIBLAAIAABMgAgyA4IAoAAIAAgrIgoAAgAgwgXIAAhBICDAAIAABBgAgdgoIBdAAIAAgeIhdAAg");
	this.shape_75.setTransform(29.5,350.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#960000").s().p("AgcCEIAAj7IBHAAIAABbIg1AAIAACggAgKgsIAkAAIAAgWIgkAAgAgKhSIAkAAIAAgWIgkAAgAiAB3QAhgbARgfQgHgIgJgGIgEAHIgPgGQAPgtAFg1IgYAAIAAgSIAYAAQADgnAAgYIASABQAAAZgCAlIAnAAQABBGgWA3QAPAQAIANIgNANQgLgQgIgJQgUAhgdAZgAhZAeQAHAEAMAKQAQgkABg6IgWAAQgFAugJAigABXCAIgGgQIAVAAQAKAAAAgJIAAiDIg1AAIAAhbIBGAAIAADhQAAAWgZAAgABLgsIAlAAIAAgWIglAAgABLhSIAlAAIAAgWIglAAgAAqByIAAg/QgNAYgaASIgJgMQAjgcAJghIgmAAIAAgQIAqAAIAAgWIARAAIAAAWIApAAIAAAQIgpAAIAAAHQAbASAVAfIgPAKQgNgZgUgOIAABDg");
	this.shape_76.setTransform(60.9,440.25);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#960000").s().p("AgIB/IAAgyIh9AAIAAgRIB9AAIAAgNIARAAIAAANIB9AAIAAARIh9gBIAAAzgAAuAgQgOAMgOAGIgOgNQAhgHALgeIAPAIIgHALQAcAGAYARIgMAOQgXgSgbgGgAhsAnQAsgHALggIAPAHQgCAGgEAEQATAGASANIgKAOQgOgPgWgGQgRAQgcAKgAhrgCIAAgRIBiAAIAAgOIASAAIAAAOIBjAAIAAARgAh5gsQAwgIAggTIAHAQQgiATgvAIgABdggIAAhNIhYAAIAAgRIBqAAIAABegAAEg1QArgDAcgQIAHAQQgcAOgrAFgAgXgnIAAhGIhgAAIAAgRIByAAIAABXgAh5hPQAvgGAhgSIAHAQQgkATgtAFgAAEhUQApgDAegQIAHAQQgdAOgqAFg");
	this.shape_77.setTransform(61.6,410.725);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#960000").s().p("AgICEIAAhDIhnAAIAAgSIBnAAIAAgvIh9AAIAAgSIBcAAQgNgbgRgUIASgHQAUAYAMAeIApAAQAXghAGgYIAUAHQgIAYgSAaIBbAAIAAASIh9AAIAAAuIBnAAIAAATIhmAAIAABDgAh3hiIBuAAIAAghIASAAIAAAhIBtAAIAAASIjtABg");
	this.shape_78.setTransform(61.525,380.225);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#960000").s().p("AhCBzQAggJARgVQARgVAAgzIgpAAIAAhwQAggLAcgUIANANQgUAQgiAOIAAAcIAtAAIAAATIgtAAIAAAkIByAAIAAgkIguAAIAAgSIAuAAIAAgkIgyAAIAAgSIBFAAIAAB9IgrAAIAABUQAAAIAIAAIAVAAQAJAAADgIQAEgJAFgbIASAHQgFAkgIAKQgHAJgSAAIgZAAQgYAAAAgXIAAhXIgfAAQAAAwgNAaQgNAagtATgAhcCEIAAibQgKAQgSAPIgPgLQA1g4AShIIAQAIQgEASgKAbIgKAaIAAC4g");
	this.shape_79.setTransform(61.475,350.175);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#960000").s().p("AgtBwQA1glAAhHIAAiBIBrAAIAADbQAAAbgaAAIgaAAIgHgTIAgAAQAIAAAAgJIAAhAIhGAAQgHA9gyAkgAAbALIBFAAIAAgzIhFAAgAAbg7IBFAAIAAgwIhFAAgAhyBXIAAjIIBYAAIAADCIgTAAIAAgQIgyAAIAAAWgAhfAuIAyAAIAAg9IgyAAgAhfggIAyAAIAAg+IgyAAg");
	this.shape_80.setTransform(92.975,410.85);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#960000").s().p("AhWCEIAAiqIgvAAIAAgTIAvAAIAAg6IAUAAIAAA6IAuAAIAAhKIAUAAIAABKIA1AAIAAhKIATAAIAABKIA+AAIAAATIg9AAIAABZIhcAAIAAhZIgvAAIAACDIC3AAIAAATIi2AAIAAAUgAAAAgIA1AAIAAhGIg1AAg");
	this.shape_81.setTransform(93.55,380.225);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#960000").s().p("AhCBzQAggJARgVQARgVAAgzIgpAAIAAhwQAggLAcgUIANANQgUAQgiAOIAAAcIAtAAIAAATIgtAAIAAAkIByAAIAAgkIguAAIAAgSIAuAAIAAgkIgyAAIAAgSIBFAAIAAB9IgrAAIAABUQAAAIAIAAIAVAAQAJAAADgIQAEgJAFgbIASAHQgFAkgIAKQgHAJgSAAIgZAAQgYAAAAgXIAAhXIgfAAQAAAwgNAaQgNAagtATgAhcCEIAAibQgKAQgSAPIgPgLQA1g4AShIIAQAIQgEASgKAbIgKAaIAAC4g");
	this.shape_82.setTransform(93.475,350.175);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#960000").s().p("AEFFgIAAgzIhIAAIAAAzIgwAAIAAk8ICnAAIAAE8gAC8D/IBJAAIAAitIhJAAgAAuFgIAAgzIhEAAIAAAzIgwAAIAAk8ICjAAIAAE8gAgWD/IBEAAIAAitIhEAAgAlQFgIAAqfIEBAAIAAAxIhiAAIAACGIBQAAIAADbIhQAAIAAChIBYAAIAAAxIjGAAIAAA7gAkgD0IBAAAIABihIhBAAgAkgAkICPAAIABh8IiQAAgAkgiIIBAAAIABiGIhBAAgAgbgNIAAioIElAAIAACogAAVg8IDEAAIAAhLIjEAAgAh7i9QBhhDAahfIAxAPQgIAhgPAWIE3AAIAAAvIlRAAQgiAwgzAgg");
	this.shape_83.setTransform(163.675,106.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#960000").s().p("AlpEvQEPhMAAjpIjVAAIAAgzIEZAAIAAklIAyAAIAAEkIEZAAIAAAzIjNAAIAAEFQAAAKAIAHQAHAIAKAAICEAAQATAAANglQAOglADgmIA0ARQgRCRhAgBIicAAQgeAAgUgSQgUgTAAghIAAkJIhcAAQgDEKkfBdgABsiEQBahUAmhTIAsAaQgrBahZBSgAkhkKIAtgbQBFA7BEBlIgsAeQg/hlhLg+g");
	this.shape_84.setTransform(162.075,26.65);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#960000").s().p("ABHBeQgPgUgHgbQgSA3g+AfIgMgRQA4gYAQgtIg8AAIAAgSIA/AAQAEgVAAgRIgeAAQgKATgOAMIgRgKQAcgVAIgmIARAEIgFAQIBfAAIAAASIg1AAQAAAWgCAQIBIAAIAAASIg5AAQATA0AxARIgMARQgngTgOgUgAhmCFIAAiaQgGANgJANIgRgLQAigwAVhOIASAHQgEARgKAZIgIAXIAADBgAg+BQIAAihIASAAIAAChgAgfg3IAAgRIBuAAIAAgdIhdAAIAAgSIBvAAIAAAuIAcAAIAAASg");
	this.shape_85.setTransform(249.15,188.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#960000").s().p("AgpCEIgHgTIAXAAQAHAAAAgHIAAhxIASAAIAABwQAAARgFAFQgFAFgMAAgAAKAoIAUgFQAaAkAFAiIgTAGQgFgkgbgjgAhpBkQAhgXAUguIAQAIQgPArgmAdgAAwAjIATgGQAhAjALAoIgUAFQgMgpgfghgAiHAkQA4gWAXggIg/AAIAAgTIBGAAIAAgmIg0AAIAAgTIA0AAIAAglIATAAIAAAlIBBAAIAAglIATAAIAAAlIA5AAIAAATIg5AAIAAAmIBHAAIAAATIhCAAQAhArArALIgNASQg5gWgcgyIhGAAQgZAshAAcgAgeglIBBAAIAAgmIhBAAg");
	this.shape_86.setTransform(249.1,158.625);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#960000").s().p("AgJCEIAAgTIhUAAIAAATIgSAAIAAjJIAiAAIAAggIgxAAIAAgSICYAAIAAASIg3AAIAAAgIAmAAIAADJgAhdBfIBUAAIAAgYIhUAAgAhdA1IBUAAIAAgiQgDAFgFAAIgKAAQgTAAAAgUIAAg3IgOAAQABA8gUAaIgOgKgAhdAWQAQgTAAg2IgQAAgAgdABQAAAHAEAAIADAAQACAAACgGIACgJIAHAEIAAgwIgUAAgAg8hFIAOAAIAAggIgOAAgAA6CAIgDgVQAWAFAKAAQAHAAAEgGQADgGAEg0QADg0ABg9IgzAAQgLAmgUAbIgQgKQAkgxAFhIIARAEQgBAXgEAVIBAAAQgBA8gDA8QgFA9gCAMQgDALgIAFQgJAGgLAAQgIAAgUgEgAAsgDIASgIQAVAYAIAfIgRAIQgJgkgVgTg");
	this.shape_87.setTransform(315.75,366.075);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#960000").s().p("ABICEIAAgQIiPAAIAAAQIgTAAIAAhJIC1AAIAABJgAhHBjICPAAIAAgYIiPAAgAiFApIAAgRIBaAAQgKgPgGgFIgbAAIAAg1ICtAAIAAA0IgYAAQgHANgHAIIBVAAIAAARgAgWAYIAvAAQAKgKAGgKIhLgBQAHAJAFAMgAhDgMICGAAIAAgUIiGAAgAhhg/IAAgRIBZAAIAAgTIhxAAIAAgQIBxAAIAAgQIARAAIAAAPIBzAAIAAARIhzAAIAAATIBcAAIAAARg");
	this.shape_88.setTransform(316.3,336.075);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#960000").s().p("AgSCEIAAiZICJAAIAAB/QAAAZgYAAIgTAAIgGgSIAWAAQAIAAABgKIAAgXIgqAAIAAAoIgSAAIAAgoIgpAAIAAA0gAA7A/IAqAAIAAgaIgqAAgAAAA/IApAAIAAgaIgpAAgAA7AUIAqAAIAAgYIgqAAgAAAAUIApAAIAAgYIgpAAgAhhCEIAAilQgIARgPASIgOgNQArg1AOhDIATAHIgNAkIgIAWIAADGgAhKBqQAJgRAGggQAHgggBhVIAuAAIAAgfIgoAAIAAgRIAoAAIAAgXIAQAAIAAAXIA2AAIAAgXIASAAIAAAXIAoAAIAAARIgoAAIAAAfIA2AAIAAARIioAAQgBBtgVAwgAAJg8IA2AAIAAgfIg2AAg");
	this.shape_89.setTransform(316.25,306.075);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#960000").s().p("ABIBIQgYAlgmAWIgNgOQAmgYAbgoQgRgigFgoQgIARgGAKIgQgLQASgcAIgaQAJgaADgvIASADQgBAdgIAdIBKAAIAAASIgQAAQgHA8gZAvQATAkAjAdIgPANQghgggRgcgABJAgQATgnAFguIgsAAQAFAxAPAkgAhEB7IgFgWQAeAJAIAAQAEgBAEgCQAEgCAEgWQAEgVACghQACgiABgVIhQAAQgMAagUAVIgOgMQAegeAJgwIANAGIAAgXIgtAAIAAgSIAtAAIAAgbIATAAIAAAbIAcAAIAAgbIATAAIAAAbIAlAAIAAASIglAAIAAAaIgTAAIAAgaIgbAAIAAAaIgQAAIgEAQIBbAAQAAAsgFAyQgDA0gIANQgIANgSAAQgKgBgXgEgAhnBQIAAhQIBBAAIAABQgAhVA/IAdAAIABgvIgeAAg");
	this.shape_90.setTransform(316.2,276.05);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#960000").s().p("AiEB8IAAgSIBhAAIAAiXIhSAAIAAgTIDuAAIAAASIhRAAIAACYIBdAAIAAASgAgRBqIAmAAIAAiYIgmAAgAAwBDQAhgoALgxIARAJQgRA1gcAlgAhrgNIAPgKQAjArALAvIgRAKQgJgugjgsgAAShOQAggWANgXIAOAKQgJAVgiAZgAhRhwIANgLQAdAOAWAeIgQAMQgVgdgbgQg");
	this.shape_91.setTransform(316.3,245.325);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#960000").s().p("AA4BXQgegsgLhlIiNAAIAAgSICLAAIgDg2IAUgBQAAAVADAhIBcAAIAAASIhaAAQAGBRAYArQAYArAMAAQAFAAAEgKQADgLACgUIATAHQgEAZgGARQgGAQgNAAQgUAAgdgtgAiFBaIBFgPIAAhLIgyAAIAAgRIB1AAIAAARIgwAAIAABGIA9gOIABASIiPAigAAvhwIAOgMQAbAHAUAVIgNANQgSgUgegJg");
	this.shape_92.setTransform(316.425,216.05);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#960000").s().p("AhhCEIAAieQgIATgOAQIgPgKQAjgvAZhTIASAGQgFASgJAYIgJAWIAADBgAgtCEIgGgSIAZAAQAJAAAAgIIAAgWIgtAIIgIgPIA1gJIAAgaIgoAAIAAgPIAoAAIAAgQQgVADgOAAIgJgQQAtAAApgNIAJAPQgQAGgSACIAAATIAsAAIgCgkIATAAIABAkIBAAAIAAAPIg+AAQADAXAFALQAQgLARgQIANAMQgMAMgZASQARATAHAAQAIAAAEgeIASAGQgEAXgGAKQgGALgLAAQgUAAgYgdQgUAOgbAHIgJgPQAagIAVgNQgHgRgDgbIgtAAIAAAXIAlgGIAAAQIglAGIAAAaQAAAMgGAGQgGAHgNAAgABGAAIAJgLQARAFAVAOIgKAOQgOgNgXgJgAg8giIBVAAIAAgTIg+AAIAAgQIA+AAIAAgTIhMAAIAAgPIAxAAQgIgKgOgHIAPgLQANAKAPASIAdAAQAOgLAMgRIASAJQgIALgLAHIAwAAIAAAQIhOAAIAAATIBAAAIAAAPIhAAAIAAAUIBVAAIAAAPIi8ABg");
	this.shape_93.setTransform(316.3,186.075);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#960000").s().p("AhoB+IAAh+IgcAAIAAgTIAcAAIAAhqIDRAAIAABqIAcAAIAAASIgbAAIAABeQAAANgHAIQgHAHgMABIgXAAIgHgTIAWAAQAPAAAAgQIAAhYIgtAAIAABlIgTAAIAAhlIgsAAIAABlIgTAAIAAhlIgtAAIAAB/gAApgTIAtAAIABhYIguAAgAgVgTIAsAAIAAhYIgsAAgAhVgTIAtAAIAAhYIgtAAg");
	this.shape_94.setTransform(316.325,156.65);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#960000").s().p("Ag1CEIAAgUIguAAIAAAUIgTAAIAAhjIBUAAIAABjgAhkBeIAvAAIAAgrIgvAAgAgZB1IAAgSIBGAAIAAhOIg6AAIAAgSIA6AAIAAhEIg+AAIAAgSIA+AAIAAgwIATAAIAAAwIBCAAIAAARIhCAAIAABFIA4AAIAAASIg4AAIAABOIBGAAIAAASgAh2ANIAAgRIBTAAIAAARgAh2gYIAAgTIBTAAIAAATgAiFg+IAAgTIBsAAIAAATgAhzh2IBPAAIAAASIhPABg");
	this.shape_95.setTransform(316.3,126.025);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#960000").s().p("ABaCEIAAgTIhbAAIAAATIgTAAIAAhzICBAAIAABzgAgBBgIBbAAIAAgXIhbAAgAgBA3IBbAAIAAgVIhbAAgAiGB2QAkgZASgkQgNgLgKgEIgFALIgPgIQAWgyAHg0IgdAAIAAgSIAhAAQAGglADgTIASAEQgDAXgFAcIAmAAQgEBPgTAwQAQALAOAPIgMAPQgLgOgPgKQgXAogiAYgAhhAZQANAGANAJQAMgcAIhGIgXAAQgKAzgNAggABJgEQgTgSgIgfIgyAAIAAApIAzgNIAAASIhJATIgIgPIAMgEIAAhoQBRgBAtgTIANAPQgbAKghAGQAAAMADARIA8AAIAAASIg4AAQAIAXAOAMQANAMAIAAQAEAAABgDQACgEADgcIASAIQgEAggGAGQgIAIgJAAQgQAAgTgRgAgEheIAAAXIAtAAQgBgMAAgOQgUADgYAAg");
	this.shape_96.setTransform(316.3,96.075);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#960000").s().p("ABcCEIAAgUIhOAAIAAAUIgSAAIAAhtIBzAAIAABtgAAOBeIBOAAIAAg1IhOAAgAhVCEIAAhnIgpACIgEgRIAPgBQAUgXALgTQgRgQgcgNIALgQIAJAGQAVgfAMggIASAJQgNAfgXAgQALAGAKAJQAMgRAOgeIARAJQgcA3gkAoIAugBQgDgMgJgMIARgGQAOASAKAjIgSAGQgCgHgDgHIgYACIAABngAiFBxQAPggAEggIARADQgCAbgQApgAg1A0IAQgEQALAYAFAmIgSAEQgDgfgLgfgAgMgEIAAgSIA3AAIAAgxIhEAAIAAgSIBEAAIAAgqIAUAAIAAAqIBIAAIAAASIhIAAIAAAxIA4AAIAAASg");
	this.shape_97.setTransform(316.2,66.05);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#960000").s().p("AAQCEIgGgSIApAAQAIAAAAgKIAAh+IhNAAIAAgSICaAAIAAASIg6AAIAAB8QAAAegaAAgAhPCEIAAh2QgHAGgMAIIgWANIgPgQQAqgXAQgQQAQgRAVgfIAQALQgQAagUAWIAACHgAh9g4QAqgdAfguIAOAMQgbAtgsAfgAgLhlIAAgSICAAAIAAASg");
	this.shape_98.setTransform(316.175,36.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#960000").s().p("AgICKIAAgpIh7AAIAAgQIB7AAIAAgcIhPAAIAAgMQgQALgZALIgIgNQAtgUAbgdIhGAAIAAgNIAZAAIgEhrQArgIAVgIIAGAOQgeAJgXAEIAAARIAvAAIAAAPIguAAIABAWIAtAAIAAAPIgtAAIABAbIC7AAIABgbIguAAIAAgPIAvAAIAAgWIgvAAIAAgPIAwAAIAAgVIgwAAIAAgOIBAAAIgDByIAXAAIAAANIhHAAQAaAdAxAQIgIAOQgQgDgcgQIAAAMIhNAAIAAAcIB4AAIAAAQIh4AAIAAApgAAIAOIAAAZIBLAAQgbgSgOgUIhUAAQgSAVgYARIBMAAIAAgZgAgqgcQAMgUAIgYIANAHQgIAWgMAWgAgGgmIAJABQANgBADgEQADgEAAggIg0AAIAJg7IAPACIgBAJIAsAAIAAAOIguAAIgDAUIAyAAQgBA0gGAJQgGAIgaABg");
	this.shape_99.setTransform(319.825,5.55);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#960000").s().p("AiGB5QAPgZAJgcQAHgcAAgqIAAhjIBnAAIAAgeIATAAIAAAdIBmAAIAAASIjMAAIAABcQAABNgjAvgAhQB7IAAgSIBcAAIAAgsIhLAAIAAgSIBLAAIAAh2IATAAIAAB2IBPAAIAAASIhPAAIAAAsIBmAAIAAASgABPgOQgLAYgRASIgPgNQASgQAHgTQAHgTABgfIASADQgBAUgDANQAfAXAWAeIgPAMQgVgdgVgQgAhNARQAnghAAg0IAQADQABAXgFARQATAOAOAZIgNAOQgLgWgQgNQgJASgWATg");
	this.shape_100.setTransform(478.3,546.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#960000").s().p("ABMBZQgTAZggASIgOgPQAigTAUgYQgSghgGgmIgHAAIAAgRIBPAAQgDAygXAmQANAUAkAYIgPAOQgfgWgOgVgABMA4QAMgZAGgcIgjAAQADAUAOAhgAgxCEIAAj6IBLAAIAABYIg5AAIAAAgIA2AAIAAASIg2AAIAAAkIA6AAIAAASIg5AAIAAA6gAgfgwIAmAAIAAg0IgmAAgAheCEIAAieQgJAPgQASIgQgKQAvg1APhLIAQAHQgCAQgIAZIgIAXIAADAgAAlgjIAAgSIA5AAIAAgvIg2AAIAAgSIBIAAIAABTg");
	this.shape_101.setTransform(478.325,516.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#960000").s().p("AAbCEIgHgTIAhAAQAJAAAAgIIAAhJIhnAAIAAgTIBmAAIAAgZIATAAIAAAZIAvAAIAAATIgvAAIAABJQAAAbgYAAgAgXA3IAOgMQAZAMARAeIgPANQgSgfgXgMgAhGBhIAAgUIglAAIAAAUIgTAAIAAjKIBLAAIAADKgAhrA7IAlAAIAAg/IglAAgAhrgWIAlAAIAAhAIglAAgAgogVIAAgTIBFAAIAAgoIg6AAIAAgTIA5AAIAAggIATAAIAAAgIA6AAIAAATIg6AAIAAAoIBGAAIAAATg");
	this.shape_102.setTransform(478.925,486.125);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#960000").s().p("AiHBzQBHgxAahIIASAJQggBRhDAwgAAZAEIAQgMQA8AyAjBNIgSANQgjhRg6gvgAh/hBIB3AAIAAhCIATAAIAABCIB1AAIAAATIj/AAg");
	this.shape_103.setTransform(478.275,456.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#960000").s().p("Ag3B/QBFgmAPg6Ig6AAIAAhPIgNAKIgMgKQArgjAbg3IAPAGQgFALgHALIBJAAIAAAQQgLARgSAXIA5AAIAABVIg2AAIAABPQAAAEAEACQAEACAOAAQAMAAAGgBQAFgCADgRQACgRAAgJIAPAGQgBAbgGAOQgGAPgUAAQgbAAgHgCQgGgBgFgEQgDgFAAgNIAAhOIgEAAQgIAggYAeQgYAdgiARgAAxAQIA2AAIAAg1IgyAAQgBAigDATgAgNAQIAtAAQAEgZAAgcIgxAAgAgXg2IBCAAQARgUAMgUIg+AAQgQAXgRARgAiCB+IAAjwIBLAAIAADkIgQAAIAAgPIgsAAIAAAbgAhzBUIAsAAIAAhVIgsAAgAhzgRIAsAAIAAhSIgsAAg");
	this.shape_104.setTransform(482.175,425.725);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#960000").s().p("AiIBtQA5gWABg9IATAEQAAAIgDAQQAYAaAfAKIAAhQIhxAAIAAgRIDxAAIAAARIhuAAIAAAgIBZAAIAAASIhZAAIAAAkQAPADAMAAIBjAAIgKASIhZAAQhBAAgpgrQgQAggoATgAhRgZIAAhkIClAAIAABkgAg+grIB/AAIAAgYIh/AAgAg+hUIB/AAIAAgXIh/AAg");
	this.shape_105.setTransform(478.325,396.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#960000").s().p("ABICEIAAgQIiPAAIAAAQIgTAAIAAhJIC1AAIAABJgAhHBjICPAAIAAgYIiPAAgAiFApIAAgRIBaAAQgKgPgGgFIgbAAIAAg1ICtAAIAAA0IgYAAQgHANgHAIIBVAAIAAARgAgWAYIAvAAQAKgKAGgKIhLgBQAHAJAFAMgAhDgMICGAAIAAgUIiGAAgAhhg/IAAgRIBZAAIAAgTIhxAAIAAgQIBxAAIAAgQIARAAIAAAPIBzAAIAAARIhzAAIAAATIBcAAIAAARg");
	this.shape_106.setTransform(478.3,348.175);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#960000").s().p("AiGB2QAdgXAOg2IATAAQAHASAOAQQBig5AphQIjFAAIAAgSIBjAAIAAgzIASAAIAAAyIBnAAIAAASQgrBahpA8QAYASAcAAIB4AAIgJASIhxAAQgcAAgagPQgZgPgOgaQgLAlgaAcg");
	this.shape_107.setTransform(478.325,318.125);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#960000").s().p("ABaCEIAAgTIhbAAIAAATIgTAAIAAhzICBAAIAABzgAgBBgIBbAAIAAgXIhbAAgAgBA3IBbAAIAAgVIhbAAgAiGB2QAkgZASgkQgNgLgKgEIgFALIgPgIQAWgyAHg0IgdAAIAAgSIAhAAQAGglADgTIASAEQgDAXgFAcIAmAAQgEBPgTAwQAQALAOAPIgMAPQgLgOgPgKQgXAogiAYgAhhAZQANAGANAJQAMgcAIhGIgXAAQgKAzgNAggABJgEQgTgSgIgfIgyAAIAAApIAzgNIAAASIhJATIgIgPIAMgEIAAhoQBRgBAtgTIANAPQgbAKghAGQAAAMADARIA8AAIAAASIg4AAQAIAXAOAMQANAMAIAAQAEAAABgDQACgEADgcIASAIQgEAggGAGQgHAIgKAAQgQAAgTgRgAgEheIAAAXIAtAAQgBgMAAgOQgUADgYAAg");
	this.shape_108.setTransform(478.3,288.175);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#960000").s().p("ABcCEIAAgVIhOAAIAAAVIgSAAIAAhtIBzAAIAABtgAAOBdIBOAAIAAg0IhOAAgAhVCEIAAhnIgpACIgEgSIAPAAQAUgYALgRQgRgRgcgNIALgPIAJAFQAVggAMgfIASAIQgNAggXAgQALAGAKAJQAMgSAOgdIARAJQgcA3gkAoIAugCQgDgLgJgMIARgGQAOASAKAkIgSAFQgCgGgDgIIgYACIAABngAiFBwQAPgfAEghIARAFQgCAbgQAogAg1A1IAQgFQALAYAFAmIgSAFQgDgggLgegAgMgEIAAgSIA3AAIAAgxIhEAAIAAgRIBEAAIAAgrIAUAAIAAAqIBIAAIAAASIhIAAIAAAwIA4AAIAAATg");
	this.shape_109.setTransform(478.2,258.15);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#960000").s().p("ABDBjIANgNQAeAKAaAXIgPANQgTgVgjgMgAgYB3QAogLAXgWIAMANQgeAZgiAIgAhFCEIAAhEQgWAhgcASIgPgOQArgaARgnIgzAAIAAgTIA5AAIAAgVQgTACgfAAIgJgRQBKABAogPIAMAPQgMAFglAHIAAAXIAyAAIAAASIgyAAIAAAFQAgAPAWAZIgNANQgQgUgZgNIAABIgAAJBPIAAiWIAmAAQAHgPACgOIg+AAIAAgTICLAAIAAASIg5AAQgDAPgFAOIAvAAIAACXgAAcA9IBEAAIAAgbIhEAAgAAcAQIBDAAIABgZIhEAAgAAcgcIBEAAIAAgZIhEAAgAhWgkQgbAAAAgZIAAhGIAUAAIAAAlQAngHAagTIANAPQggAWguAGIAAAOQABAJAIAAIAqAAQAHAAADgGQAFgHADgOIARAIQgGAYgHAHQgGAGgPAAg");
	this.shape_110.setTransform(457.3,197.625);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#960000").s().p("ABcCDIAAgNIg2AAIAAANIgTAAIAAhKIBbAAIAABKgAAmBnIA2AAIAAgfIg2AAgAg3CAIgIgSQAYAGAGAAQAIAAACgFQABgFADgdIgjAAQgTAvgwAHIgMgSQAWgCANgHQAOgHAKgUIgmAAIAAgPIAqAAQADgMAAgIIg/AAIAAgQIBYAAQgJgPgKgHIgaAAIAAgwICwAAIAAAwIgbAAQgIARgEAFIBUAAIAAAQIi2AAIgCAUIAyAAQAAAqgGAOQgGANgSAAQgKAAgPgDgAgUAaIAvAAQAIgKAFgMIhLAAQAKALAFALgAhFgLICMAAIAAgTIiMAAgAhjg7IAAgRIBaAAIAAgRIhuAAIAAgQIBuAAIAAgWIATAAIAAAWIBuAAIAAAQIhuAAIAAARIBZAAIAAARg");
	this.shape_111.setTransform(457.225,167.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#960000").s().p("AiGByQBHgKA5gkQgegKgegHIgLAPIgVgHQAagjAbhBIhOAAIAAgTIBXAAQAOggANgnIARAIQgLAigMAcICLAAIAAATIguAAQgPBBghAmQA0AVA1AgIgMASQg9glgvgTQgzAohXAQgAg7AiQAzANASAGQAhggAOg/IhQAAQgMAggYAsg");
	this.shape_112.setTransform(457.25,137.65);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#960000").s().p("AgSAQIgtAAIAABTIBJgPIAAATIhyAXIgLgRIAhgHIAAhWIg0AAIAAgRIA0AAIAAh8ICyAAIAAATIifAAIAAAVICPAAIAAASIiPAAIAAAXICPAAIAAASIiPAAIAAAYIDDAAIAAASIiCAAQAOAhAUARQAYgOATgaIASAKQgVAZgbARQAkAWAyAIIgMASQhugUgfhag");
	this.shape_113.setTransform(457.425,108.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#960000").s().p("AhxCEIAAiRIBiAAIAAB0QAAAKgGAHQgHAHgKAAIgVAAIgGgSIAXAAQAJAAAAgIIAAgWIg9AAIAAA1gAheA+IA9AAIAAgWIg9AAgAheAXIA9AAIAAgUIg9AAgAAjB/QgNAAgHgHQgHgHAAgMIAAiLIBWAAIAAgUIhWAAIAAhJIATAAIAAAUIBiAAIAAARIhiAAIAAATIBWAAIAAA1IhWAAIAAATIBTAAIAAAQIhTAAIAAATIBTAAIAAAQIhTAAIAAAUIBSAAIAAAQIhSAAIAAARQAAAIAKAAIBAAAQAHAAADgHQAEgHABgSIASAHQgEAegKAHQgJAGgIAAgAiFggIAAgRIAqAAQgDgQgOgQIARgEQAOASAFASIATAAQAJgOAGgVIARAGQgGARgJAMIAlAAIAAARgAh6hpIAzAAIAAgaIATAAIAAAaIAuAAIAAAQIh0ABg");
	this.shape_114.setTransform(489.35,197.625);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#960000").s().p("AAEA4QgMAhgeASQgeARg6ACIgKgRQBigCAWgzIhSAAIAAgSIBYAAQAFgNABgOIh4AAIAAgRID6AAIAAARIhvAAQgBAPgFAMIBcAAIAAASIhMAAQAWApBaAMIgIARQhggLgdg7gAhah9IC1AAIAABjIi1ABgAhHgrICPAAIAAgYIiPAAgAhHhVICPAAIAAgWIiPAAg");
	this.shape_115.setTransform(489.3,168.225);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#960000").s().p("AAgB7IgHgXQAgAGAWAAQAFAAAFgEQAEgEAEgSQAEgSACgYIhbAAQghBOhdAKIgKgTQBVgGAfg/IhZAAIAAgTIBfAAQABgGABgYIhTAAIAAhyIC+AAIAAByIhYAAQAAASgCAMIBsAAQgCAfgGAfQgGAegKAIQgKAHgNAAQgUAAgagDgAAUgdIBEAAIAAgfIhEAAgAhAgdIBCAAIAAgfIhCAAgAAUhOIBDAAIABgdIhEAAgAhAhOIBBAAIABgdIhCAAg");
	this.shape_116.setTransform(488.2,138.225);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#960000").s().p("AgSAQIgtAAIAABTIBJgPIAAATIhyAXIgLgRIAhgHIAAhWIg0AAIAAgRIA0AAIAAh8ICyAAIAAATIifAAIAAAVICPAAIAAASIiPAAIAAAXICPAAIAAASIiPAAIAAAYIDDAAIAAASIiCAAQAOAhAUARQAYgOATgaIASAKQgVAZgbARQAkAWAyAIIgMASQhugUgfhag");
	this.shape_117.setTransform(489.425,108.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#960000").s().p("AAWCoIgJgZIAuAAQAPAAAAgPIAAkOIhbAAIAAgZIDDAAIAAAYIhPAAIAAEVQAAAOgIAKQgJAKgOAAgAhBCnIAAgbIhDAAIAAAbIgaAAIAAiEIB3AAIAACEgAiEB0IBDAAIAAg5IhDAAgAieAJIAAgYIB2AAIAAAYgAiegpIAAgZIB2AAIAAAZgAixhcIAAgYICgAAIAAAYgAiZiNIAAgZIBvAAIAAAZg");
	this.shape_118.setTransform(555.075,52.275);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#960000").s().p("AhRCwIAAgbIg0AAIAAAbIgZAAIAAiEIBmAAIAACEgAiFB9IA0AAIAAg5Ig0AAgAguClIAAgWIBhAAIAAgbIhJAAIAAgVIBJAAIAAgZIhRAAIAAgWIBRAAIAAgXIhOAAIAAhIIBOAAIAAgXIgtAAIAAgvIgwAAIAAgWIAwAAIAAgjIAXAAIAAAjIBCAAIAAgjIAXAAIAAAjIAyAAIAAAWIgyAAIAAAvIgsAAIAAAXIBPAAIAABIIhPAAIAAAXIBTAAIAAAWIhTAAIAAAZIBJAAIAAAVIhJAAIAAAbIBoAAIAAAWgABKADIA3AAIAAgdIg3AAgAgEADIA3AAIAAgdIg3AAgAAdhbIBCAAIAAgaIhCAAgAieARIAAgXIBmAAIAAAXgAieghIAAgYIBmAAIAAAYgAixhTIAAgZICQAAIAAAZgAiaidIBgAAIAAAYIhgAAg");
	this.shape_119.setTransform(555.025,11.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#960000").s().p("ABOCiQAKABAeAAQAKAAAIgFQAGgFAEgIQADgIADgbQAEgbABgnIkBAAQgdAjglAeIgMgUQBhhOAfhvIhwAAIAAgWIB1AAQAJgpADgWIAVAFQgDAXgHAjICZAAQgGAkgJAmIAqAAQgEAhgIAmIAhAAQAAAogEAnQgFAngEALQgFALgHAIQgJAHgOAEQgOAEgeAAgAhUAXIDPAAIAJgyIi6AAQgLAWgTAcgAgtgwICLAAIALg0IiFAAQgGAYgLAcgAiBCnQAagmATg5IAUAFQgSA6gbArgAglBMIAVgEQAJAsAEA4IgYAEQADgpgNg7gAASBLIAUgHQAOAkAKAuIgVAIQgHgrgQgogABLBIIATgJQAQAbANAlIgUAJQgJgdgTgjgAiBisIASgMQAVAVAPAWIgTAMQgOgVgVgWg");
	this.shape_120.setTransform(472.05,10.875);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#960000").s().p("AgJB/QgdAAAAgfIAAhYIhdASIgDgTIBggSIAAhzIAUAAIAABvICPgbIADATIiSAbIAABaQAAAOAOAAIBhAAQAKAAAEgGQAEgGAFgfIATAGQgDAWgFANQgFANgHAEQgHAEgNAAg");
	this.shape_121.setTransform(539.125,347.825);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#960000").s().p("AglB0QAigUAPggQARgfABgoQABgogBg1IgqAAIAAgTICLAAIABBJQAABDgEArQgFAsgGAJQgIAKgPgBQgPAAgYgEIgFgWQAiAHAGAAQAHAAAEgFQAEgGAEgvQADgwAAg1IAAgwIg6AAIAABhQgCAagGAaQgIAZgQAUQgPAUgaASgAhLCEIAAh2QgSAQgVANIgNgRQAigUAYgYQAZgZAIgSIhSAAIAAgSIArAAIAAg0IATAAIAAA0IApAAIAAASQgKAegfAcQAHACAIAFQAUgLAMgXIAPAMQgLAVgUALQAOAIAOASIgLAPQgXgZgZgOIAAB0g");
	this.shape_122.setTransform(538.25,318.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#960000").s().p("AhnBuQAcgTAQgaQARgaAAgcIAAiIICSAAIAADfQAAAXgaAAIggAAIgIgTIAjAAQAMAAAAgLIAAg9IhsAAQgMA8g1AkgAgWALIBrAAIAAgxIhrAAgAgWg5IBqAAIABgxIhrAAg");
	this.shape_123.setTransform(537.3,288.85);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#960000").s().p("AgJB/QgdAAAAgfIAAhYIhdASIgDgTIBggSIAAhzIAUAAIAABvICPgbIADATIiSAbIAABaQAAAOAOAAIBhAAQAKAAAEgGQAEgGAFgfIATAGQgDAWgFANQgFANgHAEQgHAEgNAAg");
	this.shape_124.setTransform(539.125,257.825);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#960000").s().p("AAACEIAAhXIiEAAIAAgSIAuAAIAAhFIBWAAIAAgsIhGAAQgVAlgaAZIgQgMQAqgmARg5IASAIIgHATIC0AAIAAASIhhAAIAAArIBSAAIAAASIhSAAIAAA0IByAAIAAASIhyAAIAABXgAhDAbIBDAAIAAg0IhDAAg");
	this.shape_125.setTransform(539.075,228.275);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#960000").s().p("AiGBxQASgWAJghQAKghAAghIAAh1IDYAAIAAASIjFAAIAABPIDGAAIAAASIhXAAQAFAaAMAYQAggNAQgZIAPANQgaAdgdAMQAfAqAuAMIgMAQQgmgLgfgjQgfgkgIg2IgpAAIAABsIBAgOIAAATIhmAXIgIgSIAcgFIAAhxIgiAAQAABRgpA3gAgzhNICVAAIAAASIiVABg");
	this.shape_126.setTransform(539.075,198.875);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#960000").s().p("AgJB+IAAhnIhgAAIAAiUIDTAAIAACUIhgAAIAABngAAKAFIBNAAIAAgvIhNAAgAhWAFIBNAAIAAgvIhNAAgAAKg9IBNAAIAAgtIhNAAgAhWg9IBNAAIAAgtIhNAAg");
	this.shape_127.setTransform(539.1,168.875);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#960000").s().p("ABMB+IAAgPIh0AAIAAAPIgTAAIAAhrICaAAIAABrgAgoBdIB0AAIAAgVIh0AAgAgoA4IB0AAIAAgUIh0AAgAiHBxQAZgeAAg1IAAibIDuAAIAAASIjbAAIAACDQAABFgcAggAA9AMIAAg5QgRAkgcARIgMgMQAXgNAQgcIgWAAIAAgQIAoAAIAAgPQgPACgSAAIgIgPQAtAAApgNIAKANQgNAFgYAFIAAASIAqAAIAAAQIgYAAQAKAWAdAVIgNANQgfgYgNggIAAA5gAgrAMIAAgjQgOAXgUAKIgKgNQAbgPARgbIgpAAIAAgQIApAAIAAgQQgRACgNABIgJgQQAqgBApgKIAJAOIgiAIIAAASIAlAAIAAAQIglAAIAAAHQAVAHAMAMIgJAMQgKgJgOgFIAAAhg");
	this.shape_128.setTransform(539.225,138.875);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#960000").s().p("AAAA8IglAAIAAAwIAygIIAAARIhcAPIgIgRIAfgEIAAgzIgiAAQgEAtgcAaIgOgKQAcgZAAguIAAhDIDnAAIAAAPIjVAAIAAAuIDXAAIAAAQIhnAAQAOARAQALQAbgLAOgLIAMALQgQALgWAJQAfAQAnAEIgNAPQhNgLgvg9gAhLAdIAAgQICvAAIAAAQgAhoggIAAhTIBAAAIAAgQIASAAIAAAQIAtAAIAAgQIASAAIAAAQIBAAAIAABTgAApgwIAuAAIAAgSIguAAgAgWgwIAtAAIAAgSIgtAAgAhWgwIAuAAIAAgSIguAAgAAphRIAuAAIAAgSIguAAgAgWhRIAtAAIAAgSIgtAAgAhWhRIAuAAIAAgSIguAAg");
	this.shape_129.setTransform(539.1,108.275);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#960000").s().p("ABBB8IAAgeIiBAAIAAAeIgUAAIAAj3ICpAAIAAD3gAhABLICBAAIAAhRIiBAAgAhAgZICBAAIAAhQIiBAAg");
	this.shape_130.setTransform(571.275,409.025);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#960000").s().p("AgJCEIAAiHIh8AAIAAgVIB8AAIAAhrIAUAAIAABqIB7AAIAAAWIh7AAIAACHg");
	this.shape_131.setTransform(571.1,378.25);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#960000").s().p("AhnBvQAcgUAQgaQAQgaAAgbIAAiJICTAAIAADfQAAAYgZgBIgiAAIgIgSIAkAAQALgBAAgLIAAg9IhrAAQgMA8g1AkgAgXAMIBrAAIAAgyIhrAAgAgXg5IBrAAIAAgxIhrAAg");
	this.shape_132.setTransform(569.3,348.85);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#960000").s().p("AA5AgQgWg2AAhQIhSAAIAAgXIBoAAQgCBSAUA2QATA3ArAqIgPASQgrgmgWg4gAiIBtQAggeASgmQARglAGheIAWAEQgGBMgIAeQgIAegQAZQgQAZgYAZg");
	this.shape_133.setTransform(571.125,318.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#960000").s().p("AAACEIAAhXIiEAAIAAgSIAuAAIAAhFIBWAAIAAgsIhGAAQgVAlgaAZIgQgMQAqgmARg5IASAIIgHATIC0AAIAAASIhhAAIAAArIBSAAIAAASIhSAAIAAA0IByAAIAAASIhyAAIAABXgAhDAbIBDAAIAAg0IhDAAg");
	this.shape_134.setTransform(571.075,288.275);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#960000").s().p("ABbB+IAAgkIi1AAIAAAkIgVAAIAAj7IDfAAIAAD7gAhaBIIC1AAIAAiyIg6AAIAABmQAAAIAJAAIAPAAQAFAAACgDQACgCAEgUIARALQgFAUgEAHQgHAGgLAAIgWAAQgXAAAAgZIAAhoIgiAAIAAA5QAAAkgOAPQgNAQghAKIgLgMgAhaAMQAcgGALgMQAMgNAAgbIgBg8IgyAAg");
	this.shape_135.setTransform(571.1,258.825);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#960000").s().p("AiFBRIAAgUIELAAIAAAUgAhjg9IAAgTIDHAAIAAATg");
	this.shape_136.setTransform(571.1,228.175);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#960000").s().p("AgZCBIAAg/IhFAAIAAgSIC0AAIAAAqQAAAYgZAAIgbAAIgEgRIAdAAQAIAAAAgJIAAgWIhJAAIAAA/gAA1AQIAAAMIhrAAIAAgMQgfAPgoAKIgKgSQAlgFAjgRQAkgQATgUIAAgsIhbAAIAAAjIgTAAIAAgzIBuAAIAAgQIheAAIAAgRIDNAAIAAAQIhdAAIAAAQIBuAAIAAA0IgTAAIAAgjIhbAAIAAAoIAFAFIgDAEQA3AuBFAHIgLASQgdgGgrgTgAgtALIBXAAQgZgNgRgPQgTAPgaANgAAegZIAAgOIA7AAIAAAOgAhYgZIAAgOIA5AAIAAAOgAAehDIA4AAIAAAOIg4ABgAhVhDIA1AAIAAAOIg1ABg");
	this.shape_137.setTransform(571.05,198.575);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#960000").s().p("AiFBRIAAgUIELAAIAAAUgAhjg9IAAgTIDHAAIAAATg");
	this.shape_138.setTransform(571.1,168.175);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#960000").s().p("ABMB+IAAgPIh0AAIAAAPIgTAAIAAhrICaAAIAABrgAgoBdIB0AAIAAgVIh0AAgAgoA4IB0AAIAAgUIh0AAgAiHBxQAZgeAAg1IAAibIDuAAIAAASIjbAAIAACDQAABFgcAggAA9AMIAAg5QgRAkgcARIgMgMQAXgNAQgcIgWAAIAAgQIAoAAIAAgPQgPACgSAAIgIgPQAtAAApgNIAKANQgNAFgYAFIAAASIAqAAIAAAQIgYAAQAKAWAdAVIgNANQgfgYgNggIAAA5gAgrAMIAAgjQgOAXgUAKIgKgNQAbgPARgbIgpAAIAAgQIApAAIAAgQQgRACgNABIgJgQQAqgBApgKIAJAOIgiAIIAAASIAlAAIAAAQIglAAIAAAHQAVAHAMAMIgJAMQgKgJgOgFIAAAhg");
	this.shape_139.setTransform(571.225,138.875);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#960000").s().p("ABIBeIioAOIgIgUIAegCQAjgxAWhUIASAGQgZBWgcAnIB0gIQgQgcgTgTIATgIQAiAjAYA9IgTAJQgFgOgKgSgAAihsIgwAAIAAgRIBDAAQANA+BFAzIgPAOQhCgzgUg7gAiHgMQBCguARg4IASAIQgOA3hHA1g");
	this.shape_140.setTransform(571.1,108.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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
	this.shape.setTransform(351.434,223.5472,0.0941,0.0941,59.9992);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_1.setTransform(351.4334,223.5744,0.1121,0.1121,60.0035);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_2.setTransform(351.65,224.05,0.1013,0.1013,-46.0798,0,0,-2.5,27.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_3.setTransform(351.8,223.8,0.1013,0.1013,-120.9712,0,0,-2.9,21.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_4.setTransform(351.7,224.05,0.1013,0.1013,23.9021,0,0,8,30.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_5.setTransform(351.65,223.95,0.1014,0.1014,174.0303,0,0,0.3,13.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_6.setTransform(351.75,223.85,0.1014,0.1014,98.9094,0,0,6.5,18.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_7.setTransform(351.7642,223.5435,0.1662,0.1662,59.9987);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_8.setTransform(399.7013,174.3628,0.0941,0.0941,59.9958);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_9.setTransform(399.8011,174.2238,0.1121,0.1121,59.9968);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_10.setTransform(400.2,174.9,0.1014,0.1014,-46.0793,0,0,-1.6,27.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_11.setTransform(400.15,174.9,0.1014,0.1014,-120.9771,0,0,-5.8,22.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_12.setTransform(400,174.95,0.1014,0.1014,23.9029,0,0,7.4,31.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_13.setTransform(400.1,174.95,0.1014,0.1014,174.0235,0,0,-2.7,10.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_14.setTransform(400.2,174.85,0.1014,0.1014,98.9153,0,0,7.3,17);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_15.setTransform(400.1754,174.5147,0.1662,0.1662,59.9968);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_16.setTransform(487.3675,159.3948,0.1355,0.1355,30.001);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_17.setTransform(487.3462,159.5203,0.1614,0.1614,29.9995);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_18.setTransform(487.85,159.75,0.1462,0.1462,-76.0943,0,0,-3,24.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_19.setTransform(487.7,159.65,0.1462,0.1462,-151.0215,0,0,-2.5,18.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_20.setTransform(487.75,159.8,0.1462,0.1462,-6.0165,0,0,3,29.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_21.setTransform(487.85,159.7,0.1461,0.1461,143.9559,0,0,1.8,16.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_22.setTransform(487.7,159.75,0.1461,0.1461,68.9818,0,0,4.1,19.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_23.setTransform(487.6605,159.2895,0.2394,0.2394,29.9981);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_24.setTransform(519.2839,120.094,0.1355,0.1355,29.9978);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_25.setTransform(519.2639,120.1197,0.1614,0.1614,29.9968);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_26.setTransform(519.95,120.35,0.1462,0.1462,-76.0972,0,0,-3.3,24.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_27.setTransform(519.75,120.3,0.1462,0.1462,-151.0221,0,0,-3.8,20.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_28.setTransform(519.9,120.4,0.1462,0.1462,-6.0212,0,0,2.8,29.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_29.setTransform(519.95,120.3,0.1461,0.1461,143.9533,0,0,-0.5,16.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_30.setTransform(520,120.25,0.1462,0.1462,68.9805,0,0,2.2,16.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_31.setTransform(519.8789,119.9065,0.2394,0.2394,29.9994);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_32.setTransform(535.9899,120.5068,0.1824,0.1824);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_33.setTransform(535.9514,120.5446,0.2172,0.2172);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_34.setTransform(536.05,120.55,0.1967,0.1967,-106.062,0,0,-2.2,21);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_35.setTransform(536,120.55,0.1967,0.1967,178.9912,0,0,-0.3,18.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_36.setTransform(536.1,120.55,0.1967,0.1967,-36.0476,0,0,0.7,25.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_37.setTransform(536,120.45,0.1967,0.1967,113.9589,0,0,-0.7,21.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_38.setTransform(536.05,120.55,0.1967,0.1967,38.9548,0,0,1.9,21.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_39.setTransform(536.1125,120.0155,0.3221,0.3221);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_40.setTransform(450.2421,250.9643,0.1822,0.1822);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_41.setTransform(450.1921,251.0004,0.2171,0.2171);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_42.setTransform(450.5,251.05,0.1966,0.1966,-106.0382,0,0,-3.8,21.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_43.setTransform(450.4,251.1,0.1967,0.1967,179.0263,0,0,-0.7,18.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_44.setTransform(450.6,251,0.1965,0.1965,-36.0212,0,0,1.2,26.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_45.setTransform(450.4,250.95,0.1966,0.1966,113.9476,0,0,-0.4,18.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_46.setTransform(450.45,250.95,0.1966,0.1966,38.9467,0,0,2.6,21.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_47.setTransform(450.3532,250.4715,0.3219,0.3219);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_48.setTransform(391.6924,273.3712,0.2075,0.2075,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_49.setTransform(391.7369,273.3185,0.2472,0.2472,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_50.setTransform(391.65,273.2,0.2239,0.2239,73.9559,0,0,0.1,20.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_51.setTransform(391.75,273.2,0.224,0.224,-0.9798,0,0,1.4,21.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_52.setTransform(391.45,273.25,0.2238,0.2238,143.9738,0,0,2.1,23.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_53.setTransform(391.45,273.35,0.2239,0.2239,-66.0657,0,0,-0.7,22.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_54.setTransform(391.5,273.3,0.2239,0.2239,-141.0535,0,0,2,21.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_55.setTransform(391.4388,273.9315,0.3666,0.3666,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_56.setTransform(602.9894,270.7849,0.2685,0.2685);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_57.setTransform(602.9155,270.8181,0.3199,0.3199);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_58.setTransform(603.3,270.85,0.2898,0.2898,-106.0531,0,0,-2.2,21.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_59.setTransform(603.15,270.9,0.2898,0.2898,179.0015,0,0,-1.2,19.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_60.setTransform(603.25,270.85,0.2897,0.2897,-36.0323,0,0,1,24.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_61.setTransform(603.2,270.8,0.2898,0.2898,113.9358,0,0,-2.1,21.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_62.setTransform(603.15,270.85,0.2898,0.2898,38.9487,0,0,1.8,21.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_63.setTransform(603.1058,270.0583,0.4743,0.4743);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_64.setTransform(536.8051,260.7315,0.2686,0.2686);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_65.setTransform(536.7363,260.7656,0.3199,0.3199);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_66.setTransform(537.15,260.7,0.2899,0.2899,-106.0622,0,0,-1.4,22.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_67.setTransform(537.2,260.95,0.2899,0.2899,178.9896,0,0,-2.2,19.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_68.setTransform(537.1,260.85,0.2898,0.2898,-36.0391,0,0,1.1,24.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_69.setTransform(537.15,260.75,0.2899,0.2899,113.9365,0,0,-2.4,20.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_70.setTransform(537.1,260.7,0.2898,0.2898,38.9477,0,0,2,20.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_71.setTransform(537.1266,260.0057,0.4744,0.4744);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_72.setTransform(379.5502,242.1425,0.2075,0.2075,75.0013);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_73.setTransform(379.5291,242.5494,0.2472,0.2472,75.0014);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_74.setTransform(379.8,242.6,0.2239,0.2239,-31.0468,0,0,-0.7,23.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_75.setTransform(379.9,242.7,0.224,0.224,-106.0012,0,0,-3,21.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_76.setTransform(379.9,242.6,0.2239,0.2239,38.9476,0,0,3.4,25.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_77.setTransform(380.05,242.75,0.224,0.224,-171.0728,0,0,-2.7,18.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_78.setTransform(379.95,242.65,0.224,0.224,113.9419,0,0,2.5,19.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_79.setTransform(380.4452,242.5513,0.3666,0.3666,75.0019);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_80.setTransform(486.67,183.3312,0.1822,0.1822,-30.0002);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_81.setTransform(486.4652,183.3809,0.2171,0.217,-29.9987);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_82.setTransform(487,183.2,0.1966,0.1966,-136.0693,0,0,-2,22.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_83.setTransform(486.95,183.35,0.1966,0.1966,148.9882,0,0,-1.1,18.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_84.setTransform(487,183.4,0.1966,0.1966,-66.0687,0,0,2,28.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_85.setTransform(486.9,183.25,0.1967,0.1967,83.9877,0,0,-3,18.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_86.setTransform(487.1,183.35,0.1967,0.1967,8.9229,0,0,4.3,22.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_87.setTransform(486.5086,182.8408,0.3219,0.3219,-30.0005);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_88.setTransform(413.4494,186.3722,0.1355,0.1355);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_89.setTransform(413.5954,186.3941,0.1615,0.1615);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_90.setTransform(413.85,186.4,0.1462,0.1462,-106.0177,0,0,-2.3,22);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_91.setTransform(413.65,186.6,0.1463,0.1463,179.0436,0,0,-0.5,17.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_92.setTransform(413.8,186.35,0.1462,0.1462,-36.0326,0,0,2.3,25.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_93.setTransform(413.7,186.35,0.1462,0.1462,113.9382,0,0,1.6,19);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_94.setTransform(413.85,186.35,0.1462,0.1462,38.9512,0,0,3.5,20.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_95.setTransform(413.6344,186.0281,0.2395,0.2395);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_96.setTransform(564.4387,210.7824,0.2686,0.2686);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_97.setTransform(564.3186,210.8162,0.3199,0.3199);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_98.setTransform(564.55,210.8,0.2899,0.2899,-106.0577,0,0,-1.7,21.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_99.setTransform(564.5,210.85,0.2899,0.2899,178.9927,0,0,-0.9,20.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_100.setTransform(564.6,210.85,0.2899,0.2899,-36.0356,0,0,0.2,24.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_101.setTransform(564.6,210.6,0.2899,0.2899,113.9365,0,0,-2.2,21.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_102.setTransform(564.6,210.7,0.2898,0.2898,38.9486,0,0,1.5,21.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_103.setTransform(564.4912,210.057,0.4743,0.4743);

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
	this.shape_6.graphics.f("#FFFFFF").s().p("Az3dSQiKhAAQhBQD7lvBZk4QBZk3gIkoQgTr7BMjNQBAAkBRArIALAIQAjA6BWAOQA/gQAQgmQAgg4g2AIQgrAKgbgCQgPgJBIgiIANAAQABgFgDgDQAagOgvgLQgvgNhpA1IiEiWQAhhyA6glIAIgBQhAivgwh2QhXjWgNg4QgFgQACgDQAxgKB5hNIAKAPIDjF8IDdl1IAIgPQBCA3BmAcIgGBDIhkErIg+C4QDeCqAjHVQAlFUADEjQADEjBKCsQCEGVE1FBIgDADQgMBDAmAuQADADAGADQhpBVhsATQmsBvmAAAQmBAAlUhvgATslIIgIgsQBMAEA5gIIALBCgAJlqsIgdgQIAAivIA5AAQgRBYARBXIAAAggAJI9qIAzhWIAWAeIBsCOIhGBJIBDA/IgzBWIgDCmgANG5VIguhDIBFggIhghcIB+icIALgQIA8BMIh1HNg");
	this.shape_6.setTransform(139.5922,217.2375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#05213C").s().p("AgINZIldgeIglgRIg8gdQIRBxGnh8IhXA2IlmAhgAHHHuQgRkaARjVQADDsAXD9IAGC+gAmoFcID1AjIAAghIAcARQAVA3gxAgQibAOgXAUQhIAdgkCMQAGh/Aji2gADJFGIAAgwIDVACIAAAmIhcAfgAmYB0QgCgyAAgxQAKBTDFBGgADyCNQgGgHAAgLQAAgLAGgIQAIgGALAAQAMAAAGAGQAIAIAAALQAAALgIAHQgGAHgMABQgLgBgIgHgAgcAZIArh7IggDzgAjgB+QgGgGAAgLQAAgLAGgIQAIgHALAAQALAAAHAHQAIAIAAALQAAALgIAGQgHAJgLAAQgLAAgIgJgADkhqQgGgHAAgLQAAgLAGgIQAIgGALAAQALAAAHAGQAIAIAAALQAAALgIAHQgHAHgLABQgLgBgIgHgAjghqQgGgHAAgLQAAgLAGgIQAIgGALAAQALAAAHAGQAIAIAAALQAAALgIAHQgHAHgLABQgLgBgIgHgAFeqFIgpglIApgnIiYiHICrByIgUApIArBcIl+HqgAl1o6IA5h0Ig5gfIBthgIg/BcIAhAuIgoA1IFYH3gAnxpVQArCFAUCuIgZBJg");
	this.shape_7.setTransform(216.025,112.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#17324B").s().p("Ah7aqQgVgFgOgFQgZgLgDgOQhotBgvtuIAkASIFdAdIgaIxQgMJhAvHuQgRAKgSAGQg3AVg4AAQgRAAgRgCgABpaXQAstPgntBIFlggIAKAgIg5NZQgdGjgzFhQgRAxgeACgAmOhEIgJgFIgCAAQgFg0AFhDQAliMBHgdQAYgUCagOQAxgggUg4IAcAQIAAggIA9AgIA7AzQBRgDA7gwQAmhLgmhKIhphjIibApIg5AAIAACvIAAAgIj1gjQjDggiHg5QgegQgNgYQgSgfAKgtQAGgjAMgmQBCkeC3noIEThuIhuBhIA5AfIg5B0IGAHDIF9nqIgrhcIAVgpIishzIE7BtQCtEPALKUIgpHmIgjAGQg5AIhMgEIAIAsIAHAtIgEADQjdBBj7AAQjkAAj9g2gAIAlkIAgC5IgHi+QgWj+gDjtQgSDXASEZgAECoLIB4AXIBcgfIAAgmIjUgDgAoSu+IAiBiIgKAVQgTAegRAYIBHATIB3AgIDNA2QjFhGgJhTIgCgOQgGiUgQiSQgVitgriGIAmF8IgpBoIgGAPIgNAcIgpg3QgFgDgEAAQgKAAgHAVgAErrpQgGAIAAALQAAALAGAGQAIAIALAAQALAAAGgIQAIgGAAgLQAAgLgIgIQgGgGgLAAQgLAAgIAGgAAbs5IALB5IAij1gAinr3QgHAIAAALQAAALAHAGQAIAIALAAQALAAAGgIQAIgGAAgLQAAgLgIgIQgGgHgLAAQgLAAgIAHgAEdvhQgHAIAAALQAAALAHAHQAIAHALAAQALAAAGgHQAIgHAAgLQAAgLgIgIQgGgGgLAAQgLAAgIAGgAinvhQgHAIAAALQAAALAHAHQAIAHALAAQALAAAGgHQAIgHAAgLQAAgLgIgIQgGgGgLAAQgLAAgIAGgAkV3BIAog0IgiguIBAhdIBUghIB7HaIBDD+gACJzeIB1nNICZCIIgpAnIApAlIlUIOg");
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
	this.shape.graphics.f("#F26951").s().p("Egl+ASSIgDgIQgBgJgCgKIAEgGQAIgQAOgKIAEAAIgFAEIAKgFIAgABQAGAAAHADIABABIgFAAIgDABQgMAEgCANIgHgGIACAQIgVANQgBAEAAADIAUAjIAQAbgEglDAS2IgIgSIAHgLQAEgDADgFQAEgFABgFIAMgkIACAIQACAMgBAMIgDAfQgEAOgLAHgEgjQAQvIgbgHIgEgVIgfgHIgIAGIgpgDIgngTIAAgDQAOgEAPgBQASgCARgHQAWgLAYAFIApAKQARAGAHAPIgQAGIAkARQARAKAQANQAEADAEAFQgNABgKAFQgJACgHAGQgJAKgFANIgGAAgEAkvgIgIgSgIIgEgFQgJgQgCgRIABgDIACAGIABgMIAPgbQAEgFAGgEIABgBIgCAEIAAADQgCANAKAJIgJADIAOAFIACAZIAGAFIAnAAIAfAAIhPAZIgHAAgEAlggJCIgGgMQAAgFgDgGQgDgFgEgEIgZgcIAIACQALAEAKAHQANAJANAKQALAJAAAOIgFAGgEAi+gKBQAEgOAGgNQAIgRABgRQACgaAQgTIAegeQAMgMASABIgEAQIAhgVQASgLAUgGQAFgDAGgBQgGAMgCALQgCAIACAKQAEANAIAMIgBAEIg5gBIgTATIgVgEIgUAWIAAAJIgXAjIgjAZgAeixAIgDgDIgGgLIAEgOIAFgKIABgBIgBACIAFgEIAJgDQAIgFAKABQgDAAgDAFQgCAFAAAGIgGgCIAFAIIgPARIAHAAIAhAdgAfExAIAEgPIABgGIAAgYIAGAMIACAGQADAKAAAKQAAAIgCAIIgFAAgAf0ygIgRABIgIgKIgTADIgEAEIgZAIIgagDIgBgDIAIgDIAMgIQAFgEADgFIAIgKQAEgFAGgCQAGgCAIgBIAPAAIAQACIALABIAGACIAGABIAHACIAGABIgeAHIAHABIASACIAHACIAGABIAHADIAGABIAGADIgNAIIgEADIgCAFIgEAJIgCAIIgCACg");
	this.shape.setTransform(213.525,145.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F49E8D").s().p("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");
	this.shape_1.setTransform(220.075,150.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCD7CD").s().p("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");
	this.shape_2.setTransform(219.175,151.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC5944").s().p("EgitAUEIAAgQIADgNIABgFIABgCIAAA8IgFgYgEgkVATQIgEABIAAAAIgbAEIAZgXIANgKIAPgIIgKASQALgNARgOIAOgLIAHAEQADgKABgKIAEgvIAGgvIALg3IgQgiIACgSIAeAyIACA6IAhAbIgJADIgNAXIgcAvQgOAZgZASIg1AngEgm7AROQgDgKAAgIQAAgFAEgDQAGgHgDgHIgCgPIAHAGIARAaQgBAFgEAEQgDAGgEADIgHAKgEAjdgKXQgDgDgBgEQgDgJgIAAIgOgFIAJgDIAegDQAEAEADAFQADAFAAAGIAGALIgJAEQgJgDgIgFgEAmggLjIgCgRIAAgQIAKARIgJgmQgCgIAAgJIAHgFIgQgOIgmgaIgmgdIgsglIglgDIgNgLIA6gBIgMgHIA+AgIApgNIgCAJIAOAXIAbAvQAOAaAEAfIAHBAIgMgKIAGgQIgMAgIgGAMgAfUxnIgRAIIAKgSIAGgKIAHgHIgDAMIAFgKIAGgMIAGgJIAFAAIgBgGIgCgNIgEgPIgFgVIgEgPIgDgSIgDgSIgFgFIAMgHIARApIAFggQAIAXAEAXQACAIgCAIIgDARIgDARIgFASIgEAIIgFAJIgFAJIgLAQIgGAIgAdVyRIgEgOIABgHIgCgEIgFgIIAGACIAPALIgBAGIgEAPgAe90bIAIABIAFANg");
	this.shape_3.setTransform(224.0464,153.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DFC594").s().p("AgZgDIAzAAIgFAFIgMACIgEAAQgQAAgOgHg");
	this.shape_4.setTransform(-16.975,291.6298);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4A553B").s().p("AgmglIAyAhQAUAOAHAWIAAAGQgdgPgwg8g");
	this.shape_5.setTransform(-21.325,278.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C7C987").s().p("AgbAwQgkgZgYgjIACgIQADgOgNgGIAAgFIAAgFQAIAEAIADQAdAKAhgBIAVAYIAEACIBXA4QhMABgNACIgIAAIgZgDg");
	this.shape_6.setTransform(-7.9,286.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F1F2E5").s().p("AgOgMIAEAAIAVAFQAAABAAAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIAAAPg");
	this.shape_7.setTransform(-4.5,274.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D7C192").s().p("AgcgDIA5AAIgBABQgOAGgNAAQgOAAgPgHg");
	this.shape_8.setTransform(-32.85,291.5564);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AAB079").s().p("AgIAxIAAgJIgHgGQABgIADgKQADgJgJg3QARAsADADQALAPgEAVIAIAFIgBAJg");
	this.shape_9.setTransform(-27.5,286.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#455237").s().p("AgNgDQAPgFAMAMIgFABIgGABQgKAAgGgJg");
	this.shape_10.setTransform(-38.925,273.9875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ACB773").s().p("AgKAXIgDgYQAVgiAAAQQAAASABACIADAFIACADIgRAQg");
	this.shape_11.setTransform(-27.55,277.8331);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4D5A3E").s().p("AgYAAIAFgOIAZAIIAQgBIADADIgDAEQgMAPgLAAQgMAAgLgPg");
	this.shape_12.setTransform(-29.575,272.3813);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D0D786").s().p("AgBAKQgHgMADgOQAVAOgPATIgCgHg");
	this.shape_13.setTransform(-29.882,262.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C7CA8D").s().p("AgLgFQALgDAJAIIADACIgJAFg");
	this.shape_14.setTransform(-39.725,248.5859);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B9C177").s().p("AgPgHIAagIIAsgkQgoAqgRAcQgSAcgiAFQAMghAbgag");
	this.shape_15.setTransform(-21.15,264.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3D4336").s().p("AgQADIAAAFIgCAAIACgPIAKAAIAZAPg");
	this.shape_16.setTransform(-2.3,271.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A6AD78").s().p("AgRAAIAEgPIAGAAQAAAIAHAHQAHAFALAAIgIALg");
	this.shape_17.setTransform(-8.325,266.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AAB278").s().p("AgUAKIgDgBIAvgUQgHAXgVAAQgHAAgJgCg");
	this.shape_18.setTransform(-5.825,262.7875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A9B07B").s().p("AgEALQgLgIgPAAQAEgIAJAAQAXAAAKgXIALAEIgCAJIAGADIgaApQAAgLgJgHg");
	this.shape_19.setTransform(-3.45,267.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4B593B").s().p("AAEgQIAAAeIgHADg");
	this.shape_20.setTransform(-18.4,265.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D4DA9B").s().p("AgcAnIgOgQIgcgHIACgEIgNgNIASgQIAIAMIANgGIgGgbQAigCAaAUQARAOAQAOIgFAAIAfAaIALAFg");
	this.shape_21.setTransform(-10.075,272.7364);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B1BA87").s().p("AAHAyQhCACgrg0QhHgxBxgCIAZAAIAGAbIgNAGIgIgMIgSAQIANAOIgCADIAcAHIAOAQIBuAAIAjAJIgfAIQgdAJghAAQgPAAgPgCg");
	this.shape_22.setTransform(-11.3817,274.034);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A9BBAC").s().p("AgKAJIACgOIAGgGIADAAIACAHIAIAEIgIAAIgKAMg");
	this.shape_23.setTransform(-14,255.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D4DED7").s().p("AgMgJIAJABIAGgDIAAgEIAKAAIgNAQIABAAIgDAJIgEAAIgGAGg");
	this.shape_24.setTransform(-13.625,253.75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7B9A8F").s().p("AAPgQQgBAWgVAJIgHACg");
	this.shape_25.setTransform(-0.325,246.125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B0BD82").s().p("AgbBQIgHgDIAJgaIgCgGQgCgFgEgDIgGgEIgLAIIgBgVIAkgkIADAhQAbgVAGgmIADgBIAbgoQACAUgBAEQgCADAAAHQAAAIgFAIIACAHIgaAaIACAGQAFAngYAfIgGgBIgCAHQgFACgEAAQgHAAgHgEg");
	this.shape_26.setTransform(-36.73,282.98);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C3C87E").s().p("AAeAYQgPgFgJgFIgIgKIgEABIgEAEIgXgIIAAgZQAWABAUANIAEACQAcAhgJAAIgCgBg");
	this.shape_27.setTransform(-38.5215,268.2037);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#737D55").s().p("AAMAdIgEgBQgUgNgWgCIAAgOIAFgfIAIAFIABAXIAdABIADAKIAKABIANAZg");
	this.shape_28.setTransform(-38.425,264.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#BCC4AA").s().p("AgCgZIAFAAIgFAzg");
	this.shape_29.setTransform(-41.675,240.75);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B6C2BD").s().p("AgKALQADgQAOgFIAEAFIAAAFQgFALgMAAIgEAAg");
	this.shape_30.setTransform(-18.6,237.2429);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#708144").s().p("AgDgLIAAgFIAHABIgFAgg");
	this.shape_31.setTransform(-17.05,238.325);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A9C0B9").s().p("AgLA5QgEgWgTgMIgDAAIgDACQgHgGAAgJIAAgGIAAgFIgEgEIAPgVIAGAAIAPgKIAYgjQgBA7gIAWIAxhRQgGA1ACADQAZBDhDANIgCAFIgKACIgCgPg");
	this.shape_32.setTransform(-6.5835,240.825);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#778749").s().p("AgJANQAFgXAPgUQAGAVgKAYQgFAOgOACIADgSg");
	this.shape_33.setTransform(-12.8089,235.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#ACAEA1").s().p("AgDgWIALACIABAHQAAAXgRANg");
	this.shape_34.setTransform(-7.7743,231.675);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CED297").s().p("AggAKIAQAXIACgHQAAgVAFgUIgKAFIgEAPIgMgBIgBgJQgCgIgMgdIAGABIADAIIAbAEIAjgcIADAKQAAgFACgEQAKgVgUgGIAAgGIALAAQAIgHAIADQAGACACAGQgaBPg5BlQgFg2AFgfg");
	this.shape_35.setTransform(-24.325,252.33);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DEE0A9").s().p("AgcAhIgDgIIgGgBIgEgPIAKgPQAHgPgDgQQAIAJgDAKQgGATABATIAjgkIAVAAQAUAGgKAUQgCAEAAAFIgDgKIgjAdg");
	this.shape_36.setTransform(-25.6193,245.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C6D1B5").s().p("AgOgCIAUgUIAFAAIAEAQIgIAEIgEAZg");
	this.shape_37.setTransform(-26.425,238.95);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#748447").s().p("AgPAVIACgDQAPgRgGgVIAJAAIAFAKIAGAaIgLAAIAAAFg");
	this.shape_38.setTransform(-23.225,241.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C5CDC7").s().p("AgLACIAOgOIAKAHIgUASg");
	this.shape_39.setTransform(-21.45,239.45);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#BAC0B0").s().p("AgPgGIAFgQIAaAfIgCANg");
	this.shape_40.setTransform(-20.1,232.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#77874A").s().p("AANAfIgZgfIgFgPIACgHIADACIAZgKIAFA9g");
	this.shape_41.setTransform(-19.825,230.375);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D2DCC5").s().p("AgHAOIgFAAIAFgdIAAgBIACAAQASAKAAAUIgEACIgHABQgEAAgFgDg");
	this.shape_42.setTransform(-21.375,222.7221);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#BEC6B0").s().p("AABAIIgBAAQgEgCgDgDIADgLIAIAKIAFAHIgIgBg");
	this.shape_43.setTransform(-28.5,215.15);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#91937F").s().p("AgUASIAZgjIALAAIAFAAIgkAjg");
	this.shape_44.setTransform(-25.8,217.65);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B2B6AA").s().p("AgHASIACgIIgEgHQgEgJAGgLIAMAIIAGgEIgNAfg");
	this.shape_45.setTransform(-20.8342,206.175);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BAC2AA").s().p("AgSASIgHACQABgDgBgDQgKgmAcgZIAjgJQgRBFgWAvIAEgOIgHAPQgOgUAKgVg");
	this.shape_46.setTransform(-25.547,207.325);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#929582").s().p("AgmAlIgFAAIABgCQAZgjAAgpIAFAAIgDAlIAOgFIADAAQgKAJAAAPIABAAIAAAGIABABQATAHAPgOIALAAIgLAQIAQAAIAAAKQgtgNglAJg");
	this.shape_47.setTransform(-19.825,212.15);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#9DA08E").s().p("AgWAQIAAgGIAogZIAGAAIAAAFQgPAVgaAFIgFAAg");
	this.shape_48.setTransform(-18.3,212.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#BABDB0").s().p("AgQAaIAAgKQANgCADgDQAEgCgDgDQgBgDgJgCQgIgBgFAAIALgMIgLgIIAAgEIAFgGIABgPIAGgBQADADABAJQAAAJAOAFIAKALIgKAPIAPAJIgdAJIAFAIQgFAAgCAEQgEAFAAAGg");
	this.shape_49.setTransform(-13.65,213.675);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B6B7AB").s().p("AgJAJIAFgXQABAUANgIIgTARg");
	this.shape_50.setTransform(-17,207.575);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#898C79").s().p("AgJANIAOgZIAFAAIAAAGIgPATg");
	this.shape_51.setTransform(-19.025,209.825);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#BDC4AC").s().p("AgFALIgRgBIgCAKIACgTIAfgUIANACIADAQIgBACIgZATg");
	this.shape_52.setTransform(-26.15,199.65);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#BFC6B1").s().p("AgEANIgCgHIABgDIAFgSIgBgEIAIABIgBAmg");
	this.shape_53.setTransform(-23.05,199.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B8BBB0").s().p("AAABXIgRgYIACgOIAKABQAEgHACgHQAEgJgDgMIgFgGQgfgtAVgzIALAFQAwBIguBPQgCADACAPIAAABg");
	this.shape_54.setTransform(-38.5397,205.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B7BAAC").s().p("AgLgEIAOgLQASAOgRAPIgBACg");
	this.shape_55.setTransform(-38.0371,179.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A0A393").s().p("AgEAFIAEgTIABADQAIAOgJAMg");
	this.shape_56.setTransform(-29.9921,183.05);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#BFC7AF").s().p("AhOFcIgFgYIgHAOIgDgnQAaARgCAcIgDAMgAApjkIAAgSIAJAIIAAgRIAMgMIgHgBIATg9IAIgFIgCgIIAGgCQAGgEACgHQgEBFgnA7g");
	this.shape_57.setTransform(-32.05,203.05);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B9C1A9").s().p("AgZgHIADgBIAEgPQAFgTANgRIAFABIANAcIADgOIAIACIgYBQIgDACIgIAHQgKAJgMAEg");
	this.shape_58.setTransform(-27.375,169.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#9BA78F").s().p("AAGAiIAFgLIgGgCIgGAKIgDgSIADgCQAIgTgHgZIAFAAIALBDgAgIgHQgHgMABgOIAKAfIgEgFg");
	this.shape_59.setTransform(-33.1017,173.925);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#9CA88F").s().p("AAHAsQgQgggIgiIAQgVQAWAVgTAnIAGgEIADADQAOAQgRAMIgBAAg");
	this.shape_60.setTransform(-35.9965,175.475);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#A9B39D").s().p("AAXCPIAAAFIgFgCIgBgPIgdgjQAQgNgNgPIgDgDIgGADQASgngWgVIgQAVQgChcAchZIACAzQADAtAUA7IgFAAQAHAYgKAUIgCACIACASIAIgKIAFACIgFALIAKAAQAIAcAAAfQAAABAAAAQAAAAABABQAAAAABABQAAAAABAAIAFALIgFAKgAAAAcIADAFIgKgeQAAANAHAMg");
	this.shape_61.setTransform(-33.8818,170.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#BBBDB1").s().p("AgDgPIAKAKIgGAAIgHAVg");
	this.shape_62.setTransform(-41.55,194.575);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#909B83").s().p("AiBIAQgVgKgXAHQgEgEgGgDQgFgDgGgBIgFAEIAAggIAXAIIAEgEIAEAAIAJAJQAJAGAPAFQAOAFgfgnIAXAEIgNgZIgKgBIgDgLIgegBIgBgXIgIgFIgFAfIAAjQIAFg0IAPAPIAHAAQAKADAFAIQAVAIAUgIIgQg0IgkgQIgfgkIACiRIAOgDQgGgDgRgqQgRgqALhIIACgOIAIgUIAIgWIAFAAIAVAkIgLgFQgVAzAfAvIAGAGQADALgEAJQgDAHgEAHIgKgBIgCAOIgEAHIAIATIANgCIAAABIAAgBQAFANAJALQAHAJAIAFIAEgCQABgmAGglQAYiAg7hsQgIgEgHgDQgPgFgIgNIAFAAIACgkIAIAHQgEAPALAKQAGAGAIAEQAAgKgDgIQgMgbgBgcQALAGALgGIgPALIAPAUQAIBBAXA/QADAJABAJQAXgwAEg0IAAgEIAAgGIAKAKQgQA5gFA1QAuiQB4haIAeggIAMgKQgCC/iuArQgZAugFA0QgIBXgUBRQAXAMAMAXIAihBIAHABIgFgHIALgVIAHgQIgEAOIgRA7IAFAFIAFAAQgVARgCARQAHgDAIgCIAXgFIgpAbQAaAlgBAtIABALQgQAXALAYIASAaIAEgaIAIgFIgEgQQAPAAALgOQAKgNAAgUIAdAeIACgOIAFAAIADACIAMgCQARgjgGgmIglgKIAGAVIgaAKIgDgCIgCAHIgFguQAJAFAHgEIAFgBQgBgWgSgIQAlgLAhgQQAAgGADgFQADgEAEAAQAeAuBBgeIAqgXQgQBDhIAVQgGACgGAEQgYAAgXAFQALAhgLAjQAbgDAXgSQAQAigOAnIgFAAIgPAVIAEAEIgBAFIAAAHQAAAJAHAGIADgDIADAAQAUAMADAWIACAPQgPgMgTABIgHABIAPAKIgKAbIgFAAIABAEIgHALIgKAAIAAAEIgHADIgJgBIAAgQIgMgGQgFgEgEgGIgPA/QgTAHgNAOIgEAFQgJAJgGAMIgVAFQgBAHgFADQgFAEgFACIgJACIAEADIACAJIAIgKIADAHIgIAJIAEARIgGgBQgGAMAAAVQgBAWgHgRQgHgQgCAAQgDABAJAQIgKgNQgOgFgFgKQgEgHgBgHQgFgbAQgUQgPgaAAgcQgjA7AXA/QABADAUASIgXgOIgIgBIALARQAVAggIAAQgFAAgPgLgAhRGkIAEAGQAOgTgWgOQgDANAHAOgAg4GVQA5hlAahPQgCgHgGgBQgIgDgIAHIgFgaIATgTIgJgHIgPAPIgKAAQAHAWgQARIgCADIgkAlQgBgTAGgTQADgLgIgIQADAPgHAPIgKAQIAEAPQAMAeACAHIABALIAMABIAEgRIAKgEQgFAUAAAWIgCAHIgQgXQgFAeAFA2gAi9ELIAPANIAJgFIgDgCQgHgHgIAAIgGABgAhfDoQASgMADgVQABgKAJgFIgIgfIgsgEgAAuC8IAHghIgIgCIgFgFQgOAGgEARQAQACAHgPgABRCcIgDASQAPgCAFgOQAKgagGgUQgQAUgFAYgAgjAIIgCgBIAjgHIgFAdIgcgVg");
	this.shape_63.setTransform(-21.9161,221.2957);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#A5B493").s().p("AghAaQgGgDANADIgJgKIgCAAQgigSgDgmQAnAQAaAOQAaAMA6AHQgiARgKACQgKADgFAFQgEADgmACIgHgPg");
	this.shape_64.setTransform(70.1,288.05);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#DBCEA9").s().p("AADACIgZgDIAKAAIAkAAIAAADg");
	this.shape_65.setTransform(52.45,278.475);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#B0BA9C").s().p("AhTAYIgCgDQgEgHgJABIgGADIgHgDIgDgFIAcgKIgEgGIALgGIAFAGIADgIIADgCQAXAMASgRQAXAVAdgIQgHACgIgEQgFgCgEgIIAMACIAGgKIAzAXIAtAFQhGAPglgHQgTgEgSAMIACACIgZAHIgfAEg");
	this.shape_66.setTransform(63.25,275.85);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#B4BBA5").s().p("AgUADIAAgFIAoAFg");
	this.shape_67.setTransform(53.75,271.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#83906C").s().p("AgIAFIgDgEIgHgCIAcgIIABgKQANAPgJAPQgFAIgJABQgCgJgHgGg");
	this.shape_68.setTransform(23.5134,288.05);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#828979").s().p("AgWAAIAAgJIAtATg");
	this.shape_69.setTransform(23.325,281.875);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#B6C4A0").s().p("AiMA8IAHgIIAAgGIgBAAIAHgHIgDALIANgVIADgDIAPgPIgQgLIAQgTQgHgDgKgfQBpgNAHANQBGANBLgNQhCArhqAQQgLADhDAlQgUAMgJACg");
	this.shape_70.setTransform(53.325,268.275);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#C9CCA6").s().p("AgmAKIAggIIATgWIAFAAIgKALIAOgJIACACIgBABIACgBIAAAAIAAAGIgGAJIACAAIAQABIACAFIgpAQg");
	this.shape_71.setTransform(37.35,274.55);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#A0AF8A").s().p("AgXAAIAHgEIgGgDQAAgEAEgDQADgDADAAIAGACIAAgIIAKALQARAOADAWQgfgCgQgWg");
	this.shape_72.setTransform(6.6,289.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#9CA883").s().p("AgzAaIAFgNQAfAXALgfIAEAAQAVgEgBgVIAKgIIAGAGIALgGIgGgMIAEACQARAWgVAVIgPAAIgGAVQgEAAgDADQgDADAAAEIgEABQgLAEgKAAQgUAAgQgPg");
	this.shape_73.setTransform(3.3353,284.992);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#7D8965").s().p("AgZADIAAAFIgGAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQACgBACgCQACgDgBgEQgBgDgDgBQgDgCgEABIAAgFIAkAFIAfAFIAKAGIgFAAIACAEIAIAFQgEAAgDADQgDADAAAEg");
	this.shape_74.setTransform(0.2,273.775);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#545C4A").s().p("AAFAHQgNgEgGgLIAGAAQAQACAHAPQgGAAgEgCg");
	this.shape_75.setTransform(6.8,276.525);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#717969").s().p("AADAIQgIgIgFgLIAKAAQAEAAAEACQADABAAADIAAAIIgBAJIgHgEg");
	this.shape_76.setTransform(19.925,281.45);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#D5DEC9").s().p("AgegMIAYASIAbgLIAHABIACAHIgSAGIAAABQgIADgGAAQgUAAgIgZg");
	this.shape_77.setTransform(14.15,283.6766);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#414738").s().p("AgPAAIAAAGIgFAAQAAgFgDgCQgDgDgEAAIgIgEIgDgGIAFAAIAQABIAFAEIApAPIAQAFIAAAEQgdgDgcgMg");
	this.shape_78.setTransform(7.475,275.025);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#7C856D").s().p("AgqAAQAsAHAhgWIAFAAQAGAMgJAHIgCABIgfAAIgEALg");
	this.shape_79.setTransform(10.1661,274.025);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#89966F").s().p("AgKAAIAGgJIAJAEIAGAFIgBALg");
	this.shape_80.setTransform(16.875,275.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#919D79").s().p("AgYAIIACgBQAKgIgGgLIAAgFIALAAIAgAXIgKABIgDAGIgKgFIgFAKg");
	this.shape_81.setTransform(16.15,273.775);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#6C7859").s().p("AgGAnIgagQIAAgKIAagpIAAgKIAGAAIAJgFIANABIADAGIgJAgIAOAHIADAKIgUAUIgBADIABADIAMAFg");
	this.shape_82.setTransform(0.325,268.575);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#889576").s().p("AgnA0IgBgDIABgDIATgUIgCgKIgPgIIAJgfIgCgGIgOgBIgKAFIAEgHQAQgXAbgBIADABIACAPIA1gMIADAMIgkAUIgMgJIgGAEQAJAIAGAJQALAOACAUIgNgFIgFANQgIgEgIADQgLADgDAKIgCAGIgGAAIAAAFg");
	this.shape_83.setTransform(5.65,267.275);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#8E9E75").s().p("AgRAJIAYgVIAMAAIgBAHIggARg");
	this.shape_84.setTransform(7.75,260.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#A8B075").s().p("AgQACIAEAAQAXACANgSIAEADIAAAGQgUAVgegDIgCAAIgCACg");
	this.shape_85.setTransform(-0.7,260);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#78845B").s().p("AhHGOIg1AAIg+AAIABgJIgIgEQAEgWgLgQQgDgDgSgsQAJA4gDAJQgDAKgBAIIAHAGIAAAJIgQAAIg5AAIgQAAIACgIIAIACQAYgfgGgnIgCgHIAbgaIgCgIQAFgHAAgIQAAgHABgEQACgDgCgUIgbAoIgEABQgFAmgdAWIgCgiIgkAlIAAiHIAFgEQAGABAFADQAFADAFAEQAXgIAVAKQAoAfghgzIgMgSIAJACIAXAOQgUgSgBgDQgXhAAjg6QAAAcAPAaQgQATAFAbQABAHAEAIQAFAKAOAEIAKAOQgJgQACgBQACAAAIAQQAGAQABgVQABgVAGgMIAGAAIgEgQIAIgJIgDgHIgIAKIgCgJIgFgDIAJgDQAGgBAFgEQAFgDABgHIAVgGQAFgLAKgJIAFgGQANgNATgHIAPg+QAEAGAFAEIAMAGIAAAOIAAAaIgCAQIADACIALgMIAIAAQARgCAMgHIADgCIAoAFQAiAQAgAOIAHACQgNATgYgCIgEAAIgKANIgvAVQgEAAgDAFQgDAFAAAGIgFAAIgEAPIAbARIAHgLQAPAAALAIQAKAHAAALIAAAKIgKAAIgCAPIACAAQAEAAADABQADACABADQABAEgCADQgCADgCAAIgWgFQgPgPgQgOQgcgUghACIgaAAQhxACBHAyQArA0BDgBQAyAFAqgMIAegJIgjgIIgLgGIAAgPIAGAAIAAgGIA5AQQATAMgBAWIAAAIIgFADIgGgQIgMgJIgBAEIgMAFQACARANANIAQgFIAHATQACAVgWAFIgFAAQgLAfgfgXIgFANIgVgaIgzgVIgFAAQghABgdgJQgIgDgIgFIAAAFQgGgWgUgQIgzggQAxA9AcAOQANAHgDANIgCAIQAYAkAkAZgAjaEGIAEAZIAGADIASgRIgCgDIgCgFQgCgDABgRQAAgGgCAAQgFAAgQAXgAlLDdQAIAOAPgFIAFgBQgJgJgLAAIgIABgAj4DRQAWAfAYgfIADgEIgDgDIgQAAIgagHgAiBBwIgbAIQgbAbgLAhQAhgGATgcQASgcAngqgAh0CiIAIgDIAAgggAEZEnQAAgDgDgCQgEgBgEAAQgHgHgJgDQgLgGgEgLIgEAAQgbAAgVgPIgPgFIAEgKIAgAAIAVAKIAVALQAeAUAmAAIAEAAIAaAkIgVAGgACCDiIgFgEIgQgBIgKgFIAAgGIAFAAIANgDQAfAEATgVIAZAAIAaAFIALAAIgFAGIAAAFIgLAAIAAAEIgFAAQgaASggAAIgUgCgAkIiXIAsAEIAIAfQgJAFgBAKQgDAVgTALgAjKitIgBgLQAAgugZglIApgaIgYAFQgHACgHADQABgRAWgTIAlgkQAlgIAuANIAFAUQghAQgmALIgCAAIAAABIgjAJIACABIAcAVIAFAAIAFAuIAFAPIgFAQQAAATgLAOQgKAOgPAAIgFAAIgVAVQgLgYAQgXgAhsiyIgFg+IgGgVIAlAKQAFAmgRAjIgLACgAhiloIALgQQAEgBAIACQAJABADAEQADACgFADQgDADgOACgAiFlxIgBgBIAFAAQAbgFAPgWIAKAHIgKAOIgLAAQgKAJgMAAQgGAAgHgCg");
	this.shape_86.setTransform(-7.1,251.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B6C5AD").s().p("AhFBQQgIgHAAgIQAAgHADgEQADgFAEAAIADABQAkALAJghIACgCIACgBQAeAEAUgWIAAgGIgEgDIgHgBQgfgOgigQQAUgHAIgRQAHgOgJgOQAYAKAMAVIAmgEIAIgQQANAdgMAbQgCADgDACIAPAMIgPAYIAAAFQgbACgRAXIgDAHIgGAAIAAAKIgGgDIADgJIgLgEQgJAXgYAAQgJAAgFAJQgLAAgHgGg");
	this.shape_87.setTransform(-1.4,258.725);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#91ADA3").s().p("AhdAmIgCgGIADgKIgBABIAOgRIAHgKIgCgEIAFAAIAAAFIAugKIAHgJIALADIADgCIABgDQAKgLANAGIgOAIQAXABAOgTIAJgCQARgBAKANIAPAVIAAAFIgIAQIgmAEQgNgUgYgKQAJANgHANQgIASgTAGIgpgFIgDACQgMAHgRACg");
	this.shape_88.setTransform(-4.275,251.5991);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#A7BFB7").s().p("AgOgEIAKgKIAPAAIAEAAQgFAAgFAJQgFAHAAANg");
	this.shape_89.setTransform(5.3375,249.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#A5B69F").s().p("AhiCYQADgLALgDQAJgCAIADIAFgMIANAFQgCgUgLgQQgGgIgJgIIAGgFIAMAKIAkgUIgDgMIg2AMIgCgPIgDgCIAAgEIALAAIADADIAhgSIABgHIALgEQAKgDAJgJQACgCgMgOQgEgOgCgiIgPAAQgMgBgIgKQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIAmAGQAggXA2hCQAGBWgDAPQgDAQAlAeQgKAQABADQABADAIAQQAAAOgIAMQgQAVgcAJIAIADIgIADIgKAQIgLAYQgUgCgHAEQgEAFgKAAIgYAAQgUAVgfgEIgMADIACgFg");
	this.shape_90.setTransform(13.45,256.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#ADB999").s().p("AirA3QAUgWgRgWIgDgCIAFAMIgLAGIgFgGIgLAIIgHgTIgQAFQgNgNgCgQIAMgFIABgEIAMAJIAGAPIAFgCIAAgIQABgWgTgMQAAgEADgDQADgDAEAAQAFAAACADQADADAAAEQAGANAOADQAEACAGABQgHgRgRgCIAAgGQAdAMAcADIAAgEQAVAPAbAAIAEAAQAEALALAGQAJADAHAGIgLAAQAGALAJAIIAHAEIAAgIIAtALIAVgGIgagjIgEAAQglAAgegUIABgMIgGgFIACgGIAKgBIghgXIAAgFIAEgGIALgPIAOACIAMgNIAFAAQAMAIAOgDIAGAAIAeAbIgLAFIgJgFIgcAIIgEAMIAOgCQAIAJAJAHQAIAHAKAEIADABIAAALQAxAkA+AbQA5AYAwAvIABABQhAAAhBgYIgSAbIgMgDIgMABQgPADgNgFIgIAKQhtgBhXg9gAAABGIgdAIIAGAEIAEADQAGAHADAJQAJgCAEgHQAJgQgMgQgAhcAvIAAgBIASgHIgDgIIgGAAIgdAMIgXgUQAKAkAhgMg");
	this.shape_91.setTransform(24.7,280);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#8C9A75").s().p("ABgBQIgCgEQgggwg3AFIAAgDIgLgCQgTgFgQgLIgaAAIgagOIhGAAIAAgKQAAgagNgVIgfgbIgGAAQgOADgMgIIBTgfIA4gDQAqgHAlgNQAKAeAHADIgQAVIAQAKIgQAQIgDADIgMAVIACgMIgJAGIgOAIIAKgLIgFAAIgUAYIggAIIAkAKIAqgQIAEgBQAvgZA0gJIApAAQBBgCAdARIgGAJIgMgBQADAHAGADQAIADAHgCQgeAJgXgWQgSARgXgMIgDACIgDAIIgFgGIgLAGIADAHIgbAKIACAFIAHACIAHgCQAJgBADAGIACADIglAAIAAgDQgwAEgigaQgdAPghABQCFAOB+A0QADAnAjASIACAAIAJAKQgNgCAFACIAIAPQhOgLhAg3gAgmguIABAAIgCACg");
	this.shape_92.setTransform(43.675,277.525);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#6F9487").s().p("AgYAHIgBAAIgFAAIAugPIAPAFIgBABQgTALgUAAIgPgCg");
	this.shape_93.setTransform(9.475,246.822);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#9DB6AE").s().p("AgUA4QgPAAgPgEIAAgqIAQgXIAWgVIANAtIAUhCQAOAeADACQAIAFADAJIACAJQAAAJgBAJIgCAJIgYAQQgUANgWAAIgCAAg");
	this.shape_94.setTransform(6.8313,239.2759);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#9CA68F").s().p("AAEAWQgPgWAHgXIAAAEQAOAQgEAVIAAAGIgCgCg");
	this.shape_95.setTransform(477.02,189.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#9FAA93").s().p("AAAAfIgFgCQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgHggAAgjIAQAhIAAAGQABAXAGAVIgEADg");
	this.shape_96.setTransform(472.1484,191);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#BAC2A9").s().p("AgLBTIgBgPIgDgDIgGAFIgKgIIACgQIAJAKQgBgoAOgkQAHADAGgDIAMgHIgDgJQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAgBQAOgVgMgaIAGABQAVBfg0BNg");
	this.shape_97.setTransform(466.7602,193.125);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#A8B099").s().p("AgECeQgDhRABggQACgngKgnIACgFIgEgBIACgCIAFgCQgGgWgBgXIAAgHIgRghIAAgxIAGAAIAoAYIAOgYIAHALIgKAPIADAXQAAAFgBADQgCAEgDAAIAAgEQgGAXAPAXIACACQAJBUgcBRQgEAKgJA3IgDAUIgBgUg");
	this.shape_98.setTransform(474.375,199.525);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#B3B5A6").s().p("AgjA/IgEgXIALgQIgHgLQAIgWgLgaQgGgNgDgQIAiAnIAPABIAGAFIAjALIAFAGIgDALQgKAGgJAHQgHAFgFAHQgDAAgDgBQgDgCgCgCQgCgCgBgDQgDgIADgJIgIAAQACgJgJgFIgEgBIAGAgIgEAHIAIAOQACALgKAGQgEADgFAAQgEAAgFgCg");
	this.shape_99.setTransform(480.725,180.394);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#BFC7B0").s().p("AgZA0IAHgnIABgHIAIgkQAPAKgBASIgBAHIgJgDIgEALIADAEIgIAdIABAHQACAMgHAJIAAABgAAGgvIgDgKIALgGIAEgLIAGABIACAJQACAMgKAIg");
	this.shape_100.setTransform(464.7417,191.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#AFB7A4").s().p("AgzgdIAFAAQAYALAIAYIABADIg9BCgAAJgcQAegRATgcIAKgBIAHAHIgyAsg");
	this.shape_101.setTransform(456.875,189.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#B5B9AC").s().p("AgLAPIAHgfIAFAAQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABIAEABIAGARQgMgKgCAVg");
	this.shape_102.setTransform(459.825,156.825);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#B6B8AC").s().p("AgJgKIAMABIACAAIAFADIgEAGIgIALQAGgKgNgLg");
	this.shape_103.setTransform(455.425,155.075);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#979A87").s().p("AgGAaQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAGgZABgRIAAAAIAAgBIAAAAIAKAAIgLAwIgEgBgAgIgaIAFAEIgEABg");
	this.shape_104.setTransform(460.75,152.925);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#919480").s().p("AgUAcIAEgGIgFgDIgCAAIAAgBIAKgHQASgMAJgaIAAgCIAEAEIAAAGIAAAGIAEgCIACACIAAAAIAAABIgsAqg");
	this.shape_105.setTransform(458.125,152.175);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#9CA091").s().p("AgUAJIABgHQADgJAJgFIAPAEIAGgEIAHALQgCADgEAEQgLALgOgLIgBAHg");
	this.shape_106.setTransform(484.475,164.725);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#BBC791").s().p("AgZAXQABgEAEgFQADgDABgEIgIgDIgCgOIAZgBIAEgFQAIgIAAgLIANABIAEAEIghAxIgKACQgHADgCAGIgDAGIACgNg");
	this.shape_107.setTransform(473.725,174.225);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#979F7D").s().p("AhZCLQgIgZgZgMQAOgjAVghQAshDBDgIIAUgyIAEgCQAdgOAFghIAFAAIAMAFQgFAVAQANIAFACQALAagFAbIgEgFIgNAAQAAALgIAHIgFAGIgZABIACAPIAIADQgBAEgDADQgEADgBAFIgCAMIAGAnIgGAAIgGgKIgOARIgBgHIAIgVQAFgLgHgKIgMgDQgJAYgSAQIgLALIgHgHIgJABQgTAcgeARIAPAFIgmAhIgBgCg");
	this.shape_108.setTransform(464.414,175.875);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#BEC5B0").s().p("AgCAAIgGgCIAIgIIAJAIIgJANg");
	this.shape_109.setTransform(468.875,158.45);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#5E6F36").s().p("AgFAIIAGgbQAAAAAAABQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIAAAFIgKAbg");
	this.shape_110.setTransform(475.4,158.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#748153").s().p("AgEANQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBgBAAAAIACgDQAHgKgEgOIAEAAQAAABAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAIgKAbQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAg");
	this.shape_111.setTransform(476.275,155.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#D9DCD0").s().p("AgLgYIAQgRIAFAFIACAJIgHAOIgFAAQAEANgHAKIgCAEIgGAcg");
	this.shape_112.setTransform(476.025,154.85);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#AAB88F").s().p("AgxAtIAGgGQAPg1AtgdIAAAAIAhARQgFAMgQAUQgQAVgpASg");
	this.shape_113.setTransform(431.15,150.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#AFBC96").s().p("AgrAGIAEgCQAXgDACgbIAAgBIAAABQAKARAPADIAEABIABALQANgIAPAIIgFAEIgQAKQgLAGgMABIgIABQgWAAgNgWg");
	this.shape_114.setTransform(428.4,134.6397);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#BBBEB1").s().p("AgGgDIAAgKIAFACQAPALgLAOg");
	this.shape_115.setTransform(480.033,148.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#61713B").s().p("AgJAtQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAHgOIgCgJIgFgEIgRAQIAHgQIAUgmIAGgWIAFAAIAGAmIAKARIgEAFIgEAAIgIgOIgPAvQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBgBg");
	this.shape_116.setTransform(477.6,149.325);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#929480").s().p("AgHgPIAFAAIAKAVIAAALg");
	this.shape_117.setTransform(476.775,142.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#ADB49B").s().p("AgFgCIAAgKIAFgLIAGAAIAAAaIgGAAIgFAVg");
	this.shape_118.setTransform(478.175,144.35);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#BCC3AC").s().p("AAKhVIAWgBIgEgNIAHAIQAHANgOAHIgKgEIgDAHIADAEQgPAfATAcIgCAmIgTALQgXgPgIAZIAJAMQAPgRAVAJIABgGIAFgCIAHAGQAAAFgBAEQgDAOgQABIgEAHQgIAJgMgDIgEgJIgOAIIgDAIQgBhjAwhWg");
	this.shape_119.setTransform(465.4036,156.225);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#8A8D78").s().p("AgFAFIgGgEIAPgbIAIAKIgMAoIgIACg");
	this.shape_120.setTransform(468.875,142.25);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#C5CD9C").s().p("AgXAWQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBIgBgBIgCAAIAAgFQABgFADgEQATgWgCgdIAQAAQAYAWgHAFQgIAGAEA7IAHAFg");
	this.shape_121.setTransform(471.175,136.325);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#AFB99C").s().p("AAAAZIAAgFQAGgTgMgOIAGgLIACAJQAHAUgEAUg");
	this.shape_122.setTransform(478.8012,134.95);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#5B6B34").s().p("AABBCQADgUgFgVIgDgJIgGALQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAIABgCQARgUgCgbIAFgmIAFAAIAAAmIAFAWQgOAKADARIABAFIAAAng");
	this.shape_123.setTransform(479.25,130.825);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#8D907C").s().p("AgUAVIAlgpIAEAAQgFAbgYAMQgEACgEAAIgEAAg");
	this.shape_124.setTransform(464.825,144.5143);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#9C9F8D").s().p("AgbAOIAwggIAHAGIgBAOIgEgCIAAABIgDgBIgvATg");
	this.shape_125.setTransform(457.225,149.325);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FBFBF9").s().p("AATgFQgKAFgKADQgJACgIABg");
	this.shape_126.setTransform(465.7,138.975);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#AEB0A2").s().p("AgMAIIAAgEIAFgGIAFgGIAPAEIgGAHIgGAGg");
	this.shape_127.setTransform(456.825,147.125);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#B7BAAE").s().p("AgEAPQAEgUgRAPIAAgTQAKgMgVgFIAdgIIABADIAQACIgSAPIAIABIAVgEIgTAYIAIACIAAAGIgSAUQAGgUgKAAg");
	this.shape_128.setTransform(452.625,149.775);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#8E917C").s().p("AAfAZIgCgBIgFgEIAAgGIACgPIgHgGIgSAAIAGgIIgPgDIgFAFIgQAAIgRgCIAAgDIgDAAQA4gQArAbIgIAgg");
	this.shape_129.setTransform(457.45,148.1773);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#8B8D79").s().p("AhPAbIgKADIAYgZQAHgLAKgLQAbggApgFQAegCA7AOIAAAFIACAAIABABQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAIgvAgIi0A4gABAgVQAJgBAIgDQALgDALgGg");
	this.shape_130.setTransform(457.375,141.8375);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#6C8039").s().p("AAFANIAAgXIAAgWIABAEQAIAQgKAfIgNAOg");
	this.shape_131.setTransform(448.9278,134.075);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#B0B3A3").s().p("AgTAcQANgbAEgcIAFAAIAFAAIgFAPIAKABIADAQIAEAGQgOAQgTABIgGAAg");
	this.shape_132.setTransform(446.4,129.15);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#819158").s().p("Ag9A/IgBgLIgEgBQgQgDgKgRIAAgBQALgdAWgEIA0gOQAggIA/gmIAGAAIAAAGQgOARgUAKIgGABIhXBcQgPgIgNAIg");
	this.shape_133.setTransform(436.2,128.85);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#899766").s().p("AgVBhIgCABIgCACQAKgggIgPIgCgEIAAAWIgKgcIgEgGIgDgRIgKgBIAFgPQAUhKAoAJIADgNIgOgqIAGAAIAVAyQAPAQACAWQAAADADAFQADAGABAIQAAAIgEAQIgIAfQgRAug3AWIAKgUg");
	this.shape_134.setTransform(451.9778,125.925);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#64724A").s().p("AgQALIAQgVIARAAIgbAVg");
	this.shape_135.setTransform(450.5,106.45);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#6A7651").s().p("AhbAuIgDgOIARgEQALgDAFgKIACgEIABgEIATgKIACgLIAIAEIAMgEIAAABQABgDAEgBQALgDAOAAQAWgHAYgCQAOgDAAgPIAOAMIgIAXIAKAJIAGAAIgfAYIgCADIgaAMIgEABQgMAHgNACIgYACIgHAAIhDgCgAgFARQgOAKAIACQADgBACgDIAFgEIgEgFg");
	this.shape_136.setTransform(439.9,107.9861);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#C0C7B1").s().p("AAOAvQADgogYgfQAAgCgDgCQgEgCgFAAIARgVIAFAEIAFABIAMA8IgGAmIAAgFg");
	this.shape_137.setTransform(477.9,122.775);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#687744").s().p("AADAfIgKg9IAGAAIAJA9g");
	this.shape_138.setTransform(479.55,121.125);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#E8EBE2").s().p("AgCgKIAFgFIAFAAIALAPIgLAAIgaAQg");
	this.shape_139.setTransform(481.75,114.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#868775").s().p("AgdArQgHgBATgYIAPgqQAigdAAAQIgCAEIACAAQgCAJgJAQIgZAeQgTAVgFABIgBgBg");
	this.shape_140.setTransform(463.8579,123.4087);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#A4B190").s().p("Ag1AnQgugDgpgQIACgJQAWgCASgJQBxgyB+AHIghAaIgXgJQghACgZASQgXAOgGAZIAPAGQAcADAcgDIgDAGIh3gGg");
	this.shape_141.setTransform(321.4,12.4273);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#A9B698").s().p("AABAAQgRAGgTgKIgTgLIBpAAQAKAQgPAOIgBABg");
	this.shape_142.setTransform(339.8291,4.15);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#94A280").s().p("AATAUQgugJgvgGIACgBQAOgNgKgSIBzAAIAcAgIAAARQgTgIgPAKIgFAEQgIgGgJgCg");
	this.shape_143.setTransform(351.775,5.275);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#BBC4A7").s().p("AgLAAIgEAIIgHAAIgDgDIABgEQAUgZAeASIgKAKIgQAKg");
	this.shape_144.setTransform(396.425,46.8689);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#7B8371").s().p("AgUAFIgFgKIAFABQANADAIgJIAZANIgZAIg");
	this.shape_145.setTransform(390.125,46.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#656D5E").s().p("AgQABQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIAAgFIAWAAIAVAFIglAGQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_146.setTransform(388,47.325);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#D0D8C7").s().p("AABAOQgLgOAKgQIAFAAQgKAQAKARIgEgDg");
	this.shape_147.setTransform(386.387,36.25);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#D1DAC5").s().p("AgSgDIgGAAIAAgFQAUgEASAJIALAFIgDAIg");
	this.shape_148.setTransform(397.15,29.401);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#C3CBB4").s().p("Ag8AWIgFAAIAbglIASgFQAKgDAFgJIAVAAIAGAAQALAaAZANQAFAEADAGIgFAIIg8ADIgGgQIgMgEIgKAZg");
	this.shape_149.setTransform(393.025,32.325);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#525B4A").s().p("AgCAGIgLgFIACgBQAIgJALAFQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAAAAAAABQAAAAABABQAAAAAAAAQAAAAAAABIgEAGg");
	this.shape_150.setTransform(385,47.7888);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#798765").s().p("AgGgMIALAAQAGAAAFADQAFAEAAAEIgBABIgBACIgDAAIgKgGIgOAGIAAALIgMAAg");
	this.shape_151.setTransform(380.4,48.05);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#636C57").s().p("AAUAOIgGgBIg2gPIAAgMIAFAAIALAGIBBAQQgHAHgIAAIgGgBg");
	this.shape_152.setTransform(386.1,44.3125);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#BDC7A4").s().p("AAAAJIgCAGIgMAAIAAggIAGADQAIACAJgFQALAQgLAPIgEAEg");
	this.shape_153.setTransform(374.5,47.425);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#C2CAB3").s().p("AgTBJIgDgBQgpgoAQgwIAJgGIgGgFQAjhJA+AkIgcgBIgCADIAEATIgCACQgWAmApAkQgIAFgKgCIgFgDIAAAhIAMAAQgPALgRAAQgJAAgLgEg");
	this.shape_154.setTransform(370.9274,42.3428);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#A3B18C").s().p("AjMAfIgBgBQAcgnApgSQAogSBrgRQA6gGA1ARQA1gEAyACIABAEIgLARIgMABQgQADgFAQQgjAFgdAUQgjAYgqAAQh4ACiKAVIgIAEg");
	this.shape_155.setTransform(361.5,23.7078);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#83926A").s().p("AjPApIgQgGQAHgZAXgOQAZgSAhgDIAXAJIAhgZQCOAACJAoQAJACAJABIAFAGIABAFQiYgiiPAuQgmANgqADIgcABIgcgBg");
	this.shape_156.setTransform(343.5,12.2625);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#849267").s().p("AgxgNIAAgRQAcALAWAVIAOANIACAFIARgEIAMACIAEACIgWAKg");
	this.shape_157.setTransform(364.25,8.85);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#BECBAA").s().p("AgNgWIAWAAIACACIADAIIgIAEIADAfg");
	this.shape_158.setTransform(363.975,4.85);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#7E8D65").s().p("AAhA8IgDgQIgOAQIgFgCQgsgUgxAFIgBgFIgFgGIAGAAQAKADABgJIAWgLIAVADIgKgHQgigagQgpIgCgIIgDgDIAhAAQAZALAZgFIAKgBIAhAVIgbAjQAJAOAOAGIAPAHIAyAvg");
	this.shape_159.setTransform(374.225,9.275);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#B4BBA2").s().p("AgdgEIA7AAIgBACQgMAHgOAAQgPAAgRgJg");
	this.shape_160.setTransform(398.275,20.6265);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#C4A05E").s().p("AgdgCIAAAFQgDAAgBgDQgCgDAAgEIgLgcQAiAIAYAZIACAAIAhAmg");
	this.shape_161.setTransform(402.675,12.175);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#CCBE9D").s().p("AgMgNIAAgFIAPALIALAag");
	this.shape_162.setTransform(397.7,9.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#98A776").s().p("AAIFoIADhIQgQAOgZACIgEhCIAqAGIAFAFIAFhfIAAgEIgHAAIgBAAQgEg9AIgFQAHgFgWgXQADgDADgFQAWgpgYgcIgNADIgOgJIgcgdIgBgBIABgEIAKgUIAIgCIAKggQgJgKAAgRQAAgNAJgKIgWg9IADgCIAAgDQAEgugSgrIAbgsQAIACABAJQADAJgDAKIAYAUQAFANALAJQARAOgHAXIAHAHIAABeQAPAVgEAXIgDAAQgpAOAQAvIgDAJIADAIQADA1AXAtQABAEAHACQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQgQAegBAkIAAAGIgFAAIgFAAIAABjIgGARIAABCIAAALIgGAWg");
	this.shape_163.setTransform(472.35,125.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#8A9C6E").s().p("AAAgNIALAHQgBAIgIAFIgMAHg");
	this.shape_164.setTransform(471.525,87.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#BDC594").s().p("AiJD/IgDgBQAHgWATgUQARgTAigWIgOATIAOgOIACgCIADgBIgLAUQA4gWAQguIAJgfQAEgQgBgJQgBgIgDgGQgDgFAAgDQgBgWgPgQQABAAABAAQAAgBABAAQAAAAAAAAQAAAAABgBQAggtg0g5IACgGQAKgVgGgYIAGAAIACAUQA4gsAUhIIADADQAOAAADgNIACgNIAGAaIADAAQAFAAACgCQAEgCAAgCQASAqgEAvIAAACIgDADIAWA9QgJAKAAANQAAAQAJALIgKAgIgIACIgKATQAAgPgjAcIgPArQgTAYAHABQAEACAWgXQBMAXghAQQgkARARAdIhBAWQgpAFgbAgQgJALgIAMIgYAZIgNABQgVAAgegLgABnAqQAIgQACgJIAcAeg");
	this.shape_165.setTransform(455.75,118.336);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#BDC085").s().p("AgLAHQgGgDABgEQgBgDAGgDQAFgDAGAAQAIAAAEADQAFADABADQgBAEgFADQgEADgIAAQgGAAgFgDg");
	this.shape_166.setTransform(446.95,90.825);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#6D7B4D").s().p("AiQE2QAZgkATgkIAigeIgBgJQAHgGAFgGQAsgzgGg7IAAgFIAJgJQBDhMgLhWIgDgIQAHgIgCgMQgCgKgBgIIAAgPIABgQIAEgBIANgbIAngLQgDgaAJgZIAOgfIANgcQAIAFgBAJQgFBohEBbIgGAAQAGAYgKAVIgCAGIgFA3IgGAAIgFAAIgxB4IgFAAQgEAdgNAbIhIBdIACAOQADAdgQAYg");
	this.shape_167.setTransform(447.3016,115.325);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#C5CE7E").s().p("AgKAqQgCgWAPgQIgCgHQgDgOABgOQABgKADgJIADAEIAAACQAPAugXAxg");
	this.shape_168.setTransform(465.2392,85.075);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#64734D").s().p("AgLAAIAXAAIgGAAIgBABg");
	this.shape_169.setTransform(459.45,70.625);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#65704E").s().p("AgIAAIAAgKIAEACQALADACAKIgBAGg");
	this.shape_170.setTransform(453.625,52.275);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#B7C076").s().p("AgdgaIACgHQgBgWALgQIAgAiQgKAfASAVIADgPQAQAzgrAVQgQgwgMgyg");
	this.shape_171.setTransform(466.7401,57.75);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#B8C078").s().p("AgoAjQgIgLAFgLQAJgRAPgQIAsgQIAVADIgVAjIgMAHQgDAHgFAFQgMAQgUAAQgGAAgHgCg");
	this.shape_172.setTransform(476.825,62.0625);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#77835D").s().p("AgNAuQgZgFgJgYIgDAAQANgnAcggIAKAAQAggEASAaQABA7giAMQghAMgFAFg");
	this.shape_173.setTransform(415.5032,68.2789);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#95A17E").s().p("Ag8gfQAEgCAsgtQArgsBgA6IACAEQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAIgIAhIgEAAQgSgagfAEIgLAAQgcAggOAnIAEAAQAJAYAZAFIgIAKQgUAHgcACQgbAChnAYIgDABg");
	this.shape_174.setTransform(408.45,67.659);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#C9CB88").s().p("Ag3AyIgIgOIgfgJQgQAPgbgDQAegcAegRQA1ggA+gLQAkA0BAAMIAAACQgQAAgLAJQgMAKgdALQgagEg8AHIgnAAg");
	this.shape_175.setTransform(431.2,69.425);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#4C5144").s().p("AgWANIgCgFIArgVQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAIgsAVQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAg");
	this.shape_176.setTransform(423.7,60.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#D3D5CD").s().p("AgNgFIAbAFQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgEACg");
	this.shape_177.setTransform(428.125,56.675);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#BFC8A7").s().p("AgHgTQAXAMgLAXIgCAEg");
	this.shape_178.setTransform(429.7729,53.65);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#BEC78F").s().p("AgHAOIAAgNIgPgBIgBgEQgCgJgIgEQgGgDgHACIAAAFIgGgWIARABIAFAEQAaARAWASQAHAHAFAIIANAEIADACIADADIAEAHg");
	this.shape_179.setTransform(433.65,53.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#C2CA91").s().p("AAsBBIAAgGQABgIgFgHQgJgNgQgEQgHACgHgGIADAWIAAACIg7gaIgEgKQgIgLgJgLIgLgLIAIgDQASAUAcAGIADgEIgNgFQAWgHALATQAcAAAYARIAKgUIgYgSQgtgCgogTIAIgBIADgLQAgARAdgCIAHgPIAFgBQASgEgGgSIALAGIARALQAHAtAKArQAAAFAEADIgRAJIgCAZg");
	this.shape_180.setTransform(447.75,59.05);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FAFAF7").s().p("AgGALIABgPIgJgFIAPAAIAHgBIAHADIgDASg");
	this.shape_181.setTransform(437.625,43.875);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#E5E8C0").s().p("AA/BOQgLgVgXAHIAOAFIgEAFQgcgHgRgUIgIADIgDgIIgEgCIgDgCIgMgFQgFgIgIgGQgXgTgZgQIgBgFQgDgjgYgaIANABIAKAHIA8gOIAJAFIgBAQIATABIADgTIgGgEIgHABIAAgFIALAAIAGAAQAAAcAJAaIAJARQA0AGAyAQQAGARgSAEIgFABIgGAPQgfADgfgSIgEALIgHABQAnATAuACIAZATIgKAUQgYgQgdAAg");
	this.shape_182.setTransform(440.4,51.725);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#DEE7DD").s().p("AAEACIgPgDIAAgGQASgEAFAQIgCAEg");
	this.shape_183.setTransform(432.95,25.4201);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#536336").s().p("AgpgEIBTAAIgEACQgTAHgTAAQgUAAgVgJg");
	this.shape_184.setTransform(434.225,33.9765);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#CCAE6D").s().p("AgmgVQAfADAbASIACABQABAAAAAAQABAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAIALARg");
	this.shape_185.setTransform(434.475,30.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#6C7958").s().p("AArA/IgcgGIgLgCQgcACgVgWIAWgeIghgTIA1gHIASgwIALAAQAYAaADAjIAAAFIgFgFIgQAAIAFAVIALAnIAJAKIgBAFIgEADg");
	this.shape_186.setTransform(425.225,50.425);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#718259").s().p("AAmA5IgOgBIgEgIIAAgDIAEgUIgBgCQgHgFgKAAIgHABIgFAHQgkgDgkAFQhBAHgTgrQBAghBPAaQAQgKARACIADAAIgOgTIAmAAIAGAAQAnATApgRIADgCIAAgFIgLgRIAsALIgbBiIgMAAIAAAGIgQAAIg8AOg");
	this.shape_187.setTransform(425.35,37.75);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#454C3C").s().p("ABLA1QgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBgBAAAAIAKgCIgHgHQhSg1hnANIAHgLQATADAWgFIAIgDIg8gSIAAgCQgRAAgGgOIAGAAIAhAFIAGgIIgLgHIAAgGIAFAAQAQAQAUALQAgATAkAOIAMACIAEAEQAVAVAdgCIAMACIAVALQAZANANAYIABACg");
	this.shape_188.setTransform(418.7,54.225);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#F0F2EB").s().p("AgRANIACgdIAhAIIgbAYg");
	this.shape_189.setTransform(406.175,41.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#9DAA87").s().p("AgRA2QAqAJADgVIALgMQAHAJALABIAIAAIgFgGIASgYQhHgKhCgdIABAKIAhAMIhBAHQgHgGgLAFIgHAEIgKgFQgCgPgOgKIgHgIIARAhIAAALIgLAAQgIAGAEALIAEAKIgLAAIgPAaIANAAIAAgLIAOgHIAKAHIAEAAIABgCIABgBIAKAAIALAFQgWAWgCAeIgDAOIg0AhQgVABgUgHIgMgFIhJgfIAtguIADABQAcALAZgSIACgGIAGAJIADgEQAMgQgMgQQgqgkAXgmIACgCIgEgTIACgDIAbABQg+gkgjBJIgFAAIgQgEIgOgFQgPgFgGgJIAIgIQANgLATgCIALgQIAWgGIALgRIAWgFIALgRQApgNAqgKQCRghCTAMQAigCAZAXIABABIgKAAIgnAyQBbAJBbAFIAAADIgmAAIAOATIgDAAQgSgDgQALQhPgbhAAhQATAsBBgHQAkgFAkADIAFgHIAIgBQAKAAAHAFIABACIgEAUIAAAEIAEAHIgKAAIgTAwIg1AHIAhAUIgXAeIgDgEIgMgCQgQgcgagSIgKgGIgCgNQgBgHgDgFIgDgFIgsAWIgGAAIAAAGIgsAAIAQAKIgFAAQAFAOARAAIAAACIgGAAIARAXIgGALQgpgEgfAaIg5AOIhqAsQA1iPArAJgABcgFIAIADIAcgZIghgIgAgqiAIgRAFIgcAmQgKARALAOIAFADQgMgRAMgRIAhALIAKgZIAMAEIAHAQIA7gDIAFgIQgEgGgFgEQgZgOgKgaIApAOIADgIIgLgGQgTgJgTAEIAAAFIgWAAQgFAJgLADg");
	this.shape_190.setTransform(395.15,43.1014);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#BDC5AE").s().p("AgmgEIBNAEIgLABQgNAEgNAAQgUAAgUgJg");
	this.shape_191.setTransform(420.65,27.3188);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#73825A").s().p("AFVCMQgcgSgggDIgDgCQgbgSgeAIIhNgFIgGAAIgBgBQgagXgiACQgQgOgTgJQgagNgagJIg9AAQgQgCgQgDQhQgXhSgUIAOgQIADAQIA9AIIgygvIgPgGQgOgHgJgOIAbgkIghgUIgLAAQgZAFgZgKIDdAAIA9A3IAbAhQAAAFACADQACADACAAIAWArQAJACAFAIQAPAVAZACIA4AtIBjgDQABAAAAABQABAAAAAAQABAAABABQAAAAABAAQAUAGAZABIAmAJIABgJIAQAEIAGAHIAcAsIgCgBg");
	this.shape_192.setTransform(402.425,16.625);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#84956A").s().p("AgbgHQAaAHAYgHIAEAFIgDACQgNAIgKAAQgPAAgNgPg");
	this.shape_193.setTransform(416.15,7.6561);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#82926A").s().p("AgTABIgHgGIABgDIAHgFIgEgPIAJgCQAZgDAPAVIAAAGQgQAXgbAOg");
	this.shape_194.setTransform(420.7,14.275);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#85966B").s().p("AgFAEIgFgLIAGAAIAPAPg");
	this.shape_195.setTransform(422.875,6.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#C9D9D5").s().p("AgXAdIgDgLQgGgbAOgWIAvApIgxAWg");
	this.shape_196.setTransform(435.2224,20.025);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#A2BAB2").s().p("AgDAZIAAgxQALAVgGAWIAAAGg");
	this.shape_197.setTransform(444.289,4.975);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#668B7F").s().p("AgKgaIAGAAIAEAAIALAwQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAABgBAAg");
	this.shape_198.setTransform(444.425,10.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#568173").s().p("AgCAZIAAgxIAFAAIAAAxg");
	this.shape_199.setTransform(443.6,4.975);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#A1B8B4").s().p("AgEgFIAEgLIADACQAHAQgLAPg");
	this.shape_200.setTransform(477.6289,26.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#DCE4D1").s().p("AgGAIIgGgFIAIgDIADgDIAAgEIAOADIgOAMg");
	this.shape_201.setTransform(447.4,26.525);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#9AB3A9").s().p("AgCATQgEgDgEgTIAPgRIAGAAIAAAIQAAALgCAIQgCAJgDADQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAIgCgCg");
	this.shape_202.setTransform(461.575,21.1692);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#A2B499").s().p("ADpDfQgUgJgSgMIgGgFIgUAFIADgLIACgBIABgBQABgEgBgEIgWAEIACgHIAJgEIgagCIgFAAIAbhjIgsgLQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQgBAAAAAAQgBAAAAAAIgcgtIADgDQgFgQgUADIAAAFIgBAKIgmgKQgrgZgygCQAAgDgDgCQglgfgvgVIgGABQgLAAgHgKIghgnIgCgOQgtgdgTgzIEVAAIgcATIAAAJIgGAAIAFAMIASAEQAOAEAFAPIAEAJIADAAIgBAKQgUAFgLASQgQgVgZADIgJACIADAPIgGAFIgBADIAHAHIADAeQAbgOARgYQgFAiAQAgIADACIADgBIATgVIgEgSIgDAAIAZgcQAZAAAMgRQgSgNgFgUIAZgLIAWgnIAVAFIAHALIAUgCIACADQAcAjATAtIACgDQABAAAAAAQABAAABAAQAAgBABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAjAhAXAqQAHALAGANIAAAAQgEAOADANIAHAcIgbgFIgDACQgQAIgOgLIAPgNIgPgEIAAAEIgEAEIgHAEIgGAAIANAPIAEABQAgBBASBGQABAEgCAFIAKADIAHATIghAZIgFABQgFAAgGgDgABFgfIADALIADACIAygWIgwgpQgOAWAGAcgAhGitIAEgDIgFgFQgZAHgZgHQAVAaAegSg");
	this.shape_203.setTransform(425.625,25.0583);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#698D81").s().p("AgEgZIAEAAIAFAmIgCANg");
	this.shape_204.setTransform(454.95,25.025);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#A9BFB6").s().p("AATBkQgUgggPgjIgJgWIgQgLQgPgcAIgfQAEgOAGgQIACgJIBCAAIAFAxQgTA+AfA7IAFAFIgGAAIgWAXg");
	this.shape_205.setTransform(452.5245,12.45);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#75844B").s().p("AgIAqQgBAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBIAAgrIACgEQAHgRgEgRIAFAAIACA+IAJgCQABALgGAIQgFAIgGAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_206.setTransform(464.35,13.575);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#A7BDB5").s().p("AgIABIgDgBIgNglQAGgMgHgNIgEgIIAKgBQAqAHAHAxIAAALIgGAAQAFARgIAQIgCAEIgFAAQgEAVgPAQIgDACg");
	this.shape_207.setTransform(461.325,9.625);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#C6D2BA").s().p("AgSgTIgLgCIAQgRQALAGALgFIAAgBQAZgBgGAZIgDAJIgFAKIgDgCIguAkQARgegGgcg");
	this.shape_208.setTransform(475.0571,25.1731);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#8C9667").s().p("ABPEUQgLgKgPgDQhQgUhAgwIgGgDQgMgKgLgMIgTgXIAggYIABABQAbADAQgPIAfAIIAIAOIAmAAQA9gGAaAEQAwACAMAQIAFAEQAZAGAWgJQALgVAXgBQAIgVAWgEIgGgNIADgEQg5gVgwAjIAAgBQhAgNgkg0IgWghIgBgCQgNgXgZgNIAFgCQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAKAIIADgEIABgEIgJgLIADgDQAKgZgYgLIAAgFQAIgCAGADQAHAFADAJIABAEIAOABIAAANIA9AWIALAMQAKAKAHANIAFAJIA7AZIABgBIgEgWQAHAGAIgCQAPAEAKANQAEAGAAAJIAAAGIAZAIIACgZIARgIQgEgEgBgEQgKgrgHgtIABgGQgCgLgMgDIgDgCIAAALIgMgGQgygRg0gGIgJgQQgKgbAAgcIAZACIgIAEIgDAHIAXgEQABAEgBAEIgBABIgDABIgDALIAUgFIAGAFQASAMAUAJQAJAEAHgCIAigZIgIgTIgJgDQABgFgBgEQgShGgghBIgEgBIgMgPIAFAAIAGAEIAFABQAOALAQgIIADgCIAbAFIAMAFIgFAAQAUBJgKBKQAPAIAEARIADALQAFABAEADQAEACADAEIADAFIgCAFIgFgCQgBANgIALIgFAEIgWgTIgHABIgFAFIAUAWIAWAFIgCALIALAMQgEBDAtA1IAYAeIgtAEIgXgBIARADIgCAEIgpAIIBnAQIhdBVIBOgkIgUBVIAZgzQAAAOADAOIACAIQgQAQACAWIAIAJQAYgxgPgvIAAgCIANgbQAHgBAHAEQAHADABAHIACAJIAEABQgEAkAJAjIgxBIIgEAAIgFgaIgDANQgCAOgOgBIgEgCQgUBHg4AsIgDgTQBEhbAGhpQAAgJgHgFIgOAdIgNAfQgKAZADAZIgmAMIgOAbIgDAAIgBARIAAAOQAAAJACAKQACALgGAIIADAJIgRAAIgRAWIgKgJIAIgXIgOgMQAAAPgOADQgYACgWAHQgPAAgLADQgEABgBADIAAgBIgMAEIgIgEIgCALIgTALIgBAEIgCAEQgFAKgLADIgRAEQgMh8BEhmgACxEkQgGADAAAEQAAAEAGACQAFADAGAAQAIAAAFgDQAFgCAAgEQAAgEgFgDQgFgDgIAAQgGAAgFADgABwHnIAAgBIAEAFIgFAEQgCADgDABQgIgCAOgKgAifhtQgUgKgQgRIAsgWIAEAFQACAGABAGIACANIAKAHQAbASAPAcQglgOgggUgAjIhRIgRgWIAGAAIA8ARIgIAEQgNADgMAAIgQgCgAjkh3IgQgLIAsAAIALAHIgGAIgAnHiCQAAgFgFgDQgFgDgGAAIgFgLQgEgKAJgHIALAAIA3ARIAGALIgXAAIAAAFQgMgFgIAKIgCABgAnMi0IgSghIAIAHQANAKACAQgAATkSIgFAAIAAgCQhagFhcgKIAogxIAKAAIAGAAQAgAPAigJIALgBQAegIAaASIAEABIBOAsIAAAGgAEZlJQAFgMgMgFIgGgnIAWgWIAGAAQALADAFAMIABADIgiBBIACgFgAgvlsQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBIhjADIg4gsQgZgDgOgUQgGgJgJgBIgWgsIAAgGIBMAnQAIAKAKAAIAHgBQAuAVAlAfQADACAAADQAyACAsAaQgZAAgUgHgAHImMIgFgEQg1gMgpgRQAGAAAFgIQAGgIAAgLQABgCADgBQAkgNAagdIAGAAQAMAPgEATIgEAWIAcAxIAAABQgFADgFAAQgGAAgGgEgAE+m4IAFAAIADgCQARgQADgVIAFAAIAAAsIgFAAIAAARIgGAAIgRARg");
	this.shape_209.setTransform(428.1,60.975);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#86945E").s().p("AgLAWIAVg2IABADQAGAggcAeg");
	this.shape_210.setTransform(465.5688,5.825);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#7E8E54").s().p("AgwAvQABgDADgCIALgMIACgGQANglAXghIAGAAIAKAIIABgNIAVALIgBAIIAIAHIgGAMIgVARIgBAEIgGAAQgZAdgjANQgDABgCABIABgFg");
	this.shape_211.setTransform(470.475,10);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#A5B48D").s().p("AAHASIgHgHIAAgHIgUgLIAAANIgLgHIAQgcIAvACIgIAaQAAAMgHAJQgGALgKAAg");
	this.shape_212.setTransform(474.725,5.55);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#8FA09F").s().p("AgVBZQgPgiAdgZQgHgIAEgJQAHgPABgQIgMgIIAJgOIgFglIgKgFIACgOIgIgDIAAgKQAKABAEAGQBUBthdBnQAEgLgEgKg");
	this.shape_213.setTransform(481.4738,13.55);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#8F9E6C").s().p("AgIAzQgDgEgFgBQAAgUgIgOQgIgOgLAAIAFgFQAKgPgQgLIgFgCIAAAKIgFgmIAFAAQAFAPANAMIAaAXQAKgLAPAAQATgCAQAHQABA4g2AYIgHACQAAgHgDgFg");
	this.shape_214.setTransform(484.2759,151);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#979B88").s().p("AAMAQQgLgBgJgDQgagHgLgYIAOgTIAFAAQAFAAADAFQADAFAAAHIAQARQARAMAWAHIAFABIAAAXg");
	this.shape_215.setTransform(485.25,159.55);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#B0B3A6").s().p("AANBpIAMgCIgDgMIgCgFQgGgMgNgIIgLAEIg2hVIABgGQAEgWgLgQIAAgGIAMgcIAQgwIAIAPIADAAQAMAAAIAPQAIAOAAAVIgGAAIgNATQAKAYAZAIQALADAKABIAiAWIAAgWIACgGIABBNIgfgbQABAUAEAUQAHAsgSAjgAgEAQIgCAHIAIADIACgGQAOALALgMQAEgDADgFIgHgKIgGADIgRgDQgIAEgCALg");
	this.shape_216.setTransform(483.025,163.375);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#BBC692").s().p("AggAhIAIgCQA1gYgBg4QALAugMAvIgBgBIgpAHg");
	this.shape_217.setTransform(486.988,154.025);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#ADBB80").s().p("AgFgPIAFgMIABAEQAJAZgFAag");
	this.shape_218.setTransform(489.8893,129.15);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#8C9A63").s().p("AgvgPIgFAUIgBgFQgDgQAOgLIAUATIApgZIAAgDIAQgSIAGAAIALAsQAGAcgJAcIgDAJIhdhGg");
	this.shape_219.setTransform(485.1773,133.025);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#B2BBA0").s().p("AgbBDQAMgWgQgVIgDADIADAeIgIACIAAgmIgLg8IgJgNIAJgJIAGAAIAbgQIALAAQAHAIAKAHQATAKAUAKIAKgCQgPAagkgDIgFAFQAXATAFAdIgRAAIgHARIgCgPIgOgFIgDgIIgLALIAKAQIgBAeg");
	this.shape_220.setTransform(484.375,122.05);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#6E7D41").s().p("AgOAoQgJgHgJgIIgKgRQAAgPALgNIAbglQAOgGAJAJQAnAqgYBGIgJACQgVgJgSgLg");
	this.shape_221.setTransform(486.9285,111.7207);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#90986D").s().p("AgXgGIApgDIAGAEIgPAPg");
	this.shape_222.setTransform(486.675,103.325);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#A2A579").s().p("AgKAOIgBAAIAFgCQATgHgIgSIAFAAQAIAbgXAAIgFAAg");
	this.shape_223.setTransform(489.3275,102.938);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#B9BD83").s().p("AAZAmQg8gRgHg5IAugQQgDAVASALIAYANIAAA7QgHgLgLgDg");
	this.shape_224.setTransform(486.05,88.45);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#6E7A55").s().p("AAwGRIADAAQAEgYgPgUIAAhfIgHgHQAHgXgRgOQgLgIgFgNIgYgUQADgLgDgJQgBgJgIgCIgbAsQAAADgEACQgCACgFAAIAyhIQgKgkAEgkIgDgBIgDgIQgBgIgGgDQgHgDgHAAIgNAbIgEgEQgDAJgBALIgZAyIAThVIhOAkIBehTIhogRIAqgIIABgEIABgCIAGAAIAtgEIgZgeQgtg1AFhEIgMgMIADgKIgXgGIgTgWIAEgFIAHgBIAXATIAEgEQAJgLAAgNIAGACIABgEIgCgGQgDgDgEgDQgEgDgFgBIgDgLQgEgRgPgIQAJhKgUhIIAGAAIAQAAIAbAbIgFALIAEAEQAOAPgCAUIABAEIALACIARgJIAHAFIgDAEQgNAOAIATIADAFIgDAGQAMALAAAPQABASgMASIAHAGQAMAVgUANIgGACQAHAMgBANQgDARABARIgOAJIAKA0IArAdIAiAGIgBgGIAhiOQgSB8AEAKQADAKgGANQgGALAPgDIAIAIQAXgBAPgDQAOgCgLAJIgMALIBZABQhaAUgFADQgPAKgRAAIAFAwQAhgCAaAUQAHAHAGAJQAggFAggBIAVABIADAFIgGAAIAAAEIgQAAIgvAQQAHA6A9ARQALADAHALIAABPIgGAAQAJATgUAHIgGACIgFAAIAPgRIgFgDIgrACIgngbQAYAqgEAxQgDAVgGAVIgQAbIgFAAIgJAJIAJANIgGAAIgGgBIgFgEIgRAVIgFAAIgMALQgQgvApgNgAgOCSIAMgHQAIgEABgJIgKgIg");
	this.shape_225.setTransform(471.95,74.65);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#BCC27C").s().p("AA2AhIgCgCQgGgCgGAAQgFgCgGAAIgFABIgDgQIgNAKQgEgEgEgDQghgMgYgZQgGgHgFgIQANgGAOAAQA4AAA1AVQAEAhgOAgIgBABg");
	this.shape_226.setTransform(483.511,78.3);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#586544").s().p("ACAFtIAFAAIARAhIAAAcIgWAngAhZHOIATgZIAOABIAGgGIASAAIgxAhgAhkG4IATgOIAQAAIgFAHIAAAEIgVAFIgJgCgAChGUIAAgbIgGAAIgFALIgLgXIAAgFQAAgkAQgfQANAPgGATIgBAFIAGAAIAFAAIgFBIgAggFBIBAgWQgRgdAkgRQAhgQhMgXIAagfIAnAFIANAJIAOgEQAZAegWAoQgDAFgFAEIgRAAQABAdgTAXQgDAEgBAFQg6gOgeACgACOEaQgXgtgCg2IgEgJIAEgIIALgLIAFAAQAFAAAEACQADABAAADQAZAggDAoIAAAFQACAbgSAVIgBACQgGgCgCgEgAifDdIAyh5IAFAAIAOAqIgDANQgpgJgTBLgAhiBkIAFg3QA1A5ghAuQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAgAiykWIgFgDQgMgQgwgDQAdgLALgKQALgJAQAAQAxgkA4AVIgCAFIAGAMQgXAFgIAUQgWABgLAVQgOAGgOAAQgJAAgKgDgADunQIAGAAIgGAXQgkA0gNAfIgaANQAYhEAzgzg");
	this.shape_227.setTransform(462.625,104.225);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#7E8F6C").s().p("ACfGMIgEgFIgUgBQghABggAFQgFgJgIgHQgagUggACIgFgxQAQAAAQgKQAEgDBagUIhZgBIANgLQALgJgPACQgOADgYABIgHgIQgQADAGgLQAGgNgDgKQgEgKASh8IghCOIACAGIgjgGIgqgdIgLg0IAOgJQgBgRADgRQABgNgGgMIAFgCQAVgNgNgVIgGgGQALgSgBgSQAAgOgLgLIACgGIgCgFQgJgTANgOIAEgEIgHgFIgSAJIgLgCIAAgEQABgUgOgPIgDgEIAEgLIgbgbIAhhCIgBgDQgEgMgLgDIgFgFQgfg7ATg/IARgRIALAAIANAmIADACIAABHIgFAAIAFAnQAFAUADAEQAEACADgDQAEgDACgJQACgJAAgLIAAgIIAAgRIAFAAQAAABAAABQAAAAAAABQAAAAABABQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQAqARA0AMIAFAFIgPAQIAJACQAHAdgQAeIAtgkIAEADIADAWQAMgOgHgRIgDgDIADgJQAGgZgaACIgcgyIAEgWQAEgTgMgOIABgEIAUgSQAKAAAGgLQAHgJAAgNIAKgSIAGAAIAJADIgDAOIAKAFIAGAlIgJAOIALAIQgBAQgGAQQgEAJAGAIQgcAZAPAiQAEAKgEALIgJAwIATgDIAJADIgOAXIAFANIgpCAQgDAKAAAKIAFABIADAGIAAAKIAEAAIgGA3IA9AAIASgOQAEgDAGgDIAFgBIAFgBIgFAcIAQgGIAFAIIgKATIgGAAQgzAzgYBEIAagNQANgfAkg0IAWAnIgBAEQgDAUAVADIAABeQg1gWg5AAQgOAAgNAHQAFAIAGAHQAYAaAhAMQAFACAEAEIANgKIADAQIAFAAQAGgBAFACQAGABAGACIACACIADALgAAUCpQgPAQgIARQgFAMAIAKQAbAHASgVQAFgFADgHIAMgHIAVgkIgVgCgAhYBwIgCAHQAMAzAQAwQAsgVgQgzIgDAPQgSgWAKgfIghgiQgLAQABAWg");
	this.shape_228.setTransform(472.839,43.15);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#A7AF70").s().p("AABAoIABgEIgVgmIAGgWIAKgTIgFgIIAAgEIAIgCIADgCIAAgEIARAFIgBB6QgUgDACgVg");
	this.shape_229.setTransform(488.425,60.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#BEC58C").s().p("Ag8CHIAGg3IgEAAIAAgKIgDgFIgFgBQAAgLADgKIApiAIgFgMIAOgYIgJgDIAAgFIAGgFIAGAAIAAADQAHAEAIgCQAMAAAIAEQAIAFAAAHIgFAEIgLgEQgcAcgKAmIgBAJIgNAZQgKARAHAVIAOgUIACAGIgTAxIADAJIAFACIARguQAHgDAGgHQADgDABgFQAEgKAAgNIAIADQAGAHACAKQADATgHASIgHACIAMADQAFgJAIgGQAFgEAFgCIAKgDIALANQACAdgLAcQgFAOgOAHIgFABIgFACQgGACgEADIgSAOg");
	this.shape_230.setTransform(482.6063,41.525);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#677A7D").s().p("AgDgHQAAgHgIgFQgIgEgMAAIARgRIAGAAQATgEARAPIADAEIgCBDg");
	this.shape_231.setTransform(486.3,30.9481);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#778788").s().p("AAKAsIAChDIgEgFQgQgPgUAFQANgJALADQA0APgdBLg");
	this.shape_232.setTransform(488.2742,30.7625);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#7E8D8E").s().p("AAngxIALAHIhXBXIgGAAIgGAFg");
	this.shape_233.setTransform(485.325,23.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer_3
	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#737346").s().p("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");
	this.shape_234.setTransform(224.4215,147.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_234).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-43.6,2.4,534.9,289.8), null);


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


(lib.Symbol55 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol56();
	this.instance.setTransform(54.1,65.9,1,1,0,0,0,54.1,65.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-18.9474},0).wait(1).to({rotation:-37.8947,x:54.15,y:65.8},0).wait(1).to({rotation:-56.8421,x:54.1,y:65.85},0).wait(1).to({rotation:-75.7895},0).wait(1).to({rotation:-94.7368,x:54.05},0).wait(1).to({rotation:-113.6842,x:54},0).wait(1).to({rotation:-132.6316,y:65.8},0).wait(1).to({rotation:-151.5789,x:53.95,y:65.85},0).wait(1).to({rotation:-170.5263,x:54},0).wait(1).to({rotation:-189.4737,y:65.9},0).wait(1).to({rotation:-208.4211},0).wait(1).to({rotation:-227.3684,x:53.95},0).wait(1).to({rotation:-246.3158,x:54,y:65.95},0).wait(1).to({rotation:-265.2632,x:54.05,y:65.9},0).wait(1).to({rotation:-284.2105,y:66},0).wait(1).to({rotation:-303.1579,x:54.1},0).wait(1).to({rotation:-322.1053,x:54.05,y:65.95},0).wait(1).to({rotation:-341.0526},0).wait(1).to({rotation:-360,x:54.1,y:65.9},0).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-0.2,132.3,132.2);


(lib.Symbol54 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol55();
	this.instance.setTransform(54.1,65.9,1,1,0,0,0,54.1,65.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF99FF").s().p("Ao1I2QjrjrAAlLQAAk1DOjhIAdgfQDqjrFLAAQFLAADrDrQDqDqAAFLQAAFLjqDrIgQAQQjmDalAAAQlLABjqjrg");
	this.shape.setTransform(49.65,67.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.4,-12.5,160.1,160.1);


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

	// Layer_5
	this.instance = new lib.Symbol65();
	this.instance.setTransform(1181.75,681.2,1.0566,1.0566,0,0,0,324.4,573.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape.setTransform(1051.7469,1077.2284,0.0594,0.0594,0,-50.3037,129.6963);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_1.setTransform(1051.7105,1077.2813,0.0708,0.0708,0,-50.3083,129.6917);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_2.setTransform(1051.55,1077.65,0.064,0.064,0,55.7644,-124.2356,-4.8,26.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_3.setTransform(1051.45,1077.5,0.064,0.064,0,130.6502,-49.3498,-3.4,19.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_4.setTransform(1051.6,1077.6,0.064,0.064,0,-14.1887,165.8113,6.6,33.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_5.setTransform(1051.6,1077.6,0.064,0.064,0,-164.3509,15.6491,2,12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_6.setTransform(1051.6,1077.5,0.064,0.064,0,-89.2627,90.7373,7.1,20.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_7.setTransform(1051.5212,1077.2358,0.105,0.105,0,-50.3064,129.6936);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_8.setTransform(1026.9461,1041.4948,0.0594,0.0594,0,-50.3131,129.6869);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_9.setTransform(1026.8605,1041.4313,0.0708,0.0708,0,-50.3083,129.6917);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_10.setTransform(1026.6,1041.8,0.064,0.064,0,55.7608,-124.2392,-2.6,24.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_11.setTransform(1026.65,1041.85,0.064,0.064,0,130.6709,-49.3291,-4.9,19.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_12.setTransform(1026.7,1041.9,0.064,0.064,0,-14.2051,165.7949,5.7,33.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_13.setTransform(1026.6,1041.85,0.0641,0.0641,0,-164.3415,15.6585,0.4,11.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_14.setTransform(1026.55,1041.75,0.064,0.064,0,-89.2765,90.7235,8.4,17.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_15.setTransform(1026.5568,1041.5062,0.105,0.105,0,-50.3053,129.6947);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_16.setTransform(973.9296,1022.7639,0.0856,0.0856,0,-20.3026,159.6974);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_17.setTransform(973.9368,1022.8466,0.102,0.102,0,-20.2981,159.7019);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_18.setTransform(973.6,1023.05,0.0923,0.0923,0,85.8206,-94.1794,-4.4,24.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_19.setTransform(973.7,1022.95,0.0923,0.0923,0,160.7176,-19.2824,-1.3,18.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_20.setTransform(973.6,1023.1,0.0923,0.0923,0,15.6878,-164.3122,2.2,29.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_21.setTransform(973.55,1023.05,0.0923,0.0923,0,-134.2632,45.7368,3.3,16.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_22.setTransform(973.6,1023.1,0.0923,0.0923,0,-59.2929,120.7071,4.9,20.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_23.setTransform(973.7474,1022.7347,0.1513,0.1513,0,-20.3051,159.6949);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_24.setTransform(958.1959,994.9286,0.0856,0.0856,0,-20.305,159.695);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_25.setTransform(958.1508,994.913,0.102,0.102,0,-20.3002,159.6998);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_26.setTransform(957.85,995.15,0.0924,0.0924,0,85.793,-94.207,-4.1,22.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_27.setTransform(958,995.05,0.0924,0.0924,0,160.7149,-19.2851,-2,18.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_28.setTransform(957.85,995.1,0.0923,0.0923,0,15.6944,-164.3056,1.8,28.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_29.setTransform(957.8,995,0.0923,0.0923,0,-134.2566,45.7434,1.7,17.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_30.setTransform(957.85,995,0.0923,0.0923,0,-59.2977,120.7023,2.6,17.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_31.setTransform(957.862,994.7833,0.1513,0.1513,0,-20.3011,159.6989);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_32.setTransform(947.8304,993.4179,0.1152,0.1152,0,9.6844,-170.3156);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_33.setTransform(947.853,993.4704,0.1372,0.1372,0,9.6876,-170.3124);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_34.setTransform(947.65,993.5,0.1242,0.1242,0,115.7532,-64.2468,-2.4,20.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_35.setTransform(947.7,993.55,0.1243,0.1243,0,-169.3069,10.6931,0.5,17.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_36.setTransform(947.7,993.55,0.1243,0.1243,0,45.7314,-134.2686,-0.1,26.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_37.setTransform(947.7,993.55,0.1243,0.1243,0,-104.2512,75.7488,0.8,21.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_38.setTransform(947.7,993.55,0.1243,0.1243,0,-29.2658,150.7342,2.3,22.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_39.setTransform(947.8126,993.1093,0.2035,0.2035,0,9.6869,-170.3131);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_40.setTransform(987.3125,1083.8721,0.1151,0.1151,0,9.6908,-170.3092);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_41.setTransform(987.3732,1083.8907,0.1371,0.1371,0,9.6856,-170.3144);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_42.setTransform(987.25,1083.95,0.1242,0.1242,0,115.7245,-64.2755,-3.5,20.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_43.setTransform(987.35,1083.9,0.1242,0.1242,0,-169.3471,10.6529,1.5,18.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_44.setTransform(987.15,1083.9,0.1242,0.1242,0,45.712,-134.288,0.7,26.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_45.setTransform(987.25,1083.85,0.1242,0.1242,0,-104.2445,75.7555,0.9,20);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_46.setTransform(987.25,1083.85,0.1242,0.1242,0,-29.255,150.745,2.3,22);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_47.setTransform(987.3004,1083.5304,0.2034,0.2034,0,9.6863,-170.3137);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_48.setTransform(1021.3577,1103.9659,0.1311,0.1311,0,-170.3184,9.6816);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_49.setTransform(1021.3121,1103.9672,0.1562,0.1562,0,-170.314,9.686);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_50.setTransform(1021.5,1104,0.1415,0.1415,0,-64.2752,115.7248,0.3,20.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_51.setTransform(1021.35,1104,0.1415,0.1415,0,10.658,-169.342,1.1,22.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_52.setTransform(1021.6,1104,0.1414,0.1414,0,-134.283,45.717,3.3,23.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_53.setTransform(1021.6,1104.15,0.1415,0.1415,0,75.7629,-104.2371,-1.5,21.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_54.setTransform(1021.65,1104.15,0.1414,0.1414,0,150.752,-29.248,2.9,20.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_55.setTransform(1021.3922,1104.3724,0.2316,0.2316,0,-170.3174,9.6826);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_56.setTransform(890.0349,1079.9543,0.1697,0.1697,0,9.6868,-170.3132);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_57.setTransform(890.1175,1080.0015,0.2021,0.2021,0,9.6892,-170.3108);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_58.setTransform(889.85,1079.9,0.1831,0.1831,0,115.745,-64.255,-1.7,21.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_59.setTransform(889.9,1080.05,0.1831,0.1831,0,-169.3146,10.6854,-0.5,19.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_60.setTransform(889.9,1079.95,0.183,0.183,0,45.7295,-134.2705,0.9,24.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_61.setTransform(889.9,1080,0.1831,0.1831,0,-104.2436,75.7564,-0.6,21.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_62.setTransform(889.95,1079.95,0.183,0.183,0,-29.2532,150.7468,2.1,21.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_63.setTransform(890.1002,1079.5339,0.2997,0.2997,0,9.6882,-170.3118);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_64.setTransform(932.3685,1080.7034,0.1697,0.1697,0,9.6859,-170.3141);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_65.setTransform(932.3821,1080.7503,0.2021,0.2021,0,9.6877,-170.3123);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_66.setTransform(932.15,1080.7,0.1831,0.1831,0,115.7515,-64.2485,-1.2,21.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_67.setTransform(932.25,1080.85,0.1831,0.1831,0,-169.3117,10.6883,-0.8,18.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_68.setTransform(932.15,1080.85,0.1831,0.1831,0,45.7259,-134.2741,0.8,24.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_69.setTransform(932.2,1080.7,0.1831,0.1831,0,-104.247,75.753,-1.4,21.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_70.setTransform(932.15,1080.7,0.1831,0.1831,0,-29.2587,150.7413,2.2,21.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_71.setTransform(932.2478,1080.2142,0.2997,0.2997,0,9.6896,-170.3104);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_72.setTransform(1032.2742,1085.8755,0.1311,0.1311,0,-65.311,114.689);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_73.setTransform(1032.2529,1086.1229,0.1562,0.1562,0,-65.3152,114.6848);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_74.setTransform(1032.05,1086.15,0.1415,0.1415,0,40.7394,-139.2606,-1.8,23.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_75.setTransform(1032.05,1086.2,0.1415,0.1415,0,115.6916,-64.3084,-2.8,20.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_76.setTransform(1032,1086.1,0.1415,0.1415,0,-29.2443,150.7557,3,26.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_77.setTransform(1031.95,1086.25,0.1415,0.1415,0,-179.2524,0.7476,-1.8,17.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_78.setTransform(1032,1086.2,0.1415,0.1415,0,-104.2431,75.7569,3.2,19.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_79.setTransform(1031.6783,1086.0063,0.2316,0.2316,0,-65.314,114.686);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_80.setTransform(971.7341,1037.8624,0.1151,0.1151,0,39.6918,-140.3082);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_81.setTransform(971.8641,1037.9242,0.1371,0.1371,0,39.6823,-140.3177);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_82.setTransform(971.6,1037.9,0.1242,0.1242,0,145.7612,-34.2388,-1.3,21.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_83.setTransform(971.7,1037.85,0.1242,0.1242,0,-139.2995,40.7005,0,19);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_84.setTransform(971.6,1037.8,0.1242,0.1242,0,75.7691,-104.2309,1.6,27.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_85.setTransform(971.65,1037.8,0.1242,0.1242,0,-74.306,105.694,-1.5,19.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_86.setTransform(971.6,1037.85,0.1242,0.1242,0,0.7459,-179.2541,3.8,22);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_87.setTransform(971.9633,1037.5748,0.2034,0.2034,0,39.6889,-140.3111);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_88.setTransform(1017.1287,1047.5695,0.0856,0.0856,0,9.6839,-170.3161);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_89.setTransform(1017.0013,1047.5681,0.102,0.102,0,9.6807,-170.3193);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_90.setTransform(1016.9,1047.65,0.0924,0.0924,0,115.7014,-64.2986,-2.9,20.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_91.setTransform(1016.85,1047.7,0.0924,0.0924,0,-169.3769,10.6231,0.1,16.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_92.setTransform(1016.85,1047.55,0.0924,0.0924,0,45.7162,-134.2838,1,25.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_93.setTransform(1016.95,1047.5,0.0924,0.0924,0,-104.2406,75.7594,1.8,20.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_94.setTransform(1016.85,1047.55,0.0924,0.0924,0,-29.2541,150.7459,2.9,22.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_95.setTransform(1017.0128,1047.3046,0.1513,0.1513,0,9.6846,-170.3154);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_96.setTransform(920.4685,1046.7034,0.1697,0.1697,0,9.6859,-170.3141);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_97.setTransform(920.5321,1046.7003,0.2021,0.2021,0,9.6877,-170.3123);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_98.setTransform(920.4,1046.75,0.1831,0.1831,0,115.7495,-64.2505,-1.8,20.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_99.setTransform(920.4,1046.8,0.1831,0.1831,0,-169.307,10.693,-0.1,19.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_100.setTransform(920.35,1046.85,0.1831,0.1831,0,45.7259,-134.2741,-0.2,24.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_101.setTransform(920.5,1046.55,0.1831,0.1831,0,-104.2435,75.7565,-1.2,22.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_102.setTransform(920.45,1046.6,0.1831,0.1831,0,-29.2587,150.7413,1,22);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_103.setTransform(920.4978,1046.2142,0.2997,0.2997,0,9.6896,-170.3104);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_104.setTransform(1200.716,1143.856,0.0999,0.0999,60.0012);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_105.setTransform(1200.709,1143.9355,0.1191,0.1191,59.9946);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_106.setTransform(1201,1144.55,0.1077,0.1077,-46.0794,0,0,-2.6,28.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_107.setTransform(1201.1,1144.3,0.1077,0.1077,-120.9665,0,0,-4,21.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_108.setTransform(1201,1144.45,0.1077,0.1077,23.8949,0,0,8.8,29.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_109.setTransform(1201.05,1144.5,0.1077,0.1077,174.0407,0,0,-1.4,12.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_110.setTransform(1201.1,1144.35,0.1077,0.1077,98.8912,0,0,6.5,18.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_111.setTransform(1201.027,1143.9271,0.1766,0.1766,60.004);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_112.setTransform(1251.9168,1091.6224,0.0999,0.0999,60.0055);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_113.setTransform(1252.1096,1091.5532,0.1191,0.1191,59.9983);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_114.setTransform(1252.55,1092.25,0.1077,0.1077,-46.0731,0,0,-0.9,28.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_115.setTransform(1252.5,1092.25,0.1077,0.1077,-120.9721,0,0,-6.1,22.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_116.setTransform(1252.45,1092.4,0.1077,0.1077,23.9031,0,0,8.9,31.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_117.setTransform(1252.5,1092.35,0.1078,0.1078,174.0424,0,0,-3,10.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_118.setTransform(1252.55,1092.2,0.1077,0.1077,98.9047,0,0,7.7,17);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_119.setTransform(1252.5055,1091.8979,0.1767,0.1767,59.9979);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_120.setTransform(1345.1494,1075.7922,0.144,0.144,29.9972);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_121.setTransform(1345.1002,1075.9426,0.1715,0.1715,29.9959);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_122.setTransform(1345.7,1076.2,0.1553,0.1553,-76.1058,0,0,-2.9,25.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_123.setTransform(1345.55,1076.05,0.1553,0.1553,-151.0225,0,0,-2.9,19.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_124.setTransform(1345.65,1076.25,0.1553,0.1553,-6.0064,0,0,3.7,29.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_125.setTransform(1345.75,1076.15,0.1552,0.1552,143.9569,0,0,1.2,15.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_126.setTransform(1345.6,1076.2,0.1553,0.1553,68.9892,0,0,5,18.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_127.setTransform(1345.4338,1075.6807,0.2544,0.2544,30.0019);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_128.setTransform(1379.083,1034.057,0.144,0.144,29.9964);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_129.setTransform(1379.0185,1034.0597,0.1715,0.1715,29.9978);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_130.setTransform(1379.85,1034.35,0.1553,0.1553,-76.0975,0,0,-2.8,24.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_131.setTransform(1379.65,1034.25,0.1553,0.1553,-151.0181,0,0,-4,20.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_132.setTransform(1379.85,1034.45,0.1553,0.1553,-6.022,0,0,3.4,29.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_133.setTransform(1379.85,1034.3,0.1553,0.1553,143.9577,0,0,-0.8,15.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_134.setTransform(1379.85,1034.25,0.1553,0.1553,68.99,0,0,2.9,16.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_135.setTransform(1379.7192,1033.8294,0.2544,0.2544,29.9985);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_136.setTransform(1396.7591,1034.4322,0.1938,0.1938);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_137.setTransform(1396.6685,1034.4235,0.2308,0.2308);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_138.setTransform(1397.1,1034.6,0.209,0.209,-106.0546,0,0,-2.7,21.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_139.setTransform(1396.9,1034.6,0.209,0.209,178.9962,0,0,-1.3,18.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_140.setTransform(1397.1,1034.65,0.209,0.209,-36.0449,0,0,1.4,26.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_141.setTransform(1396.95,1034.6,0.209,0.209,113.9548,0,0,-0.2,20.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_142.setTransform(1397,1034.65,0.209,0.209,38.9538,0,0,3,21.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_143.setTransform(1396.8942,1033.8841,0.3422,0.3422);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_144.setTransform(1305.7112,1173.1397,0.1936,0.1936);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_145.setTransform(1305.6269,1173.1287,0.2306,0.2306);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_146.setTransform(1306.05,1173.25,0.2089,0.2089,-106.0322,0,0,-3.9,21.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_147.setTransform(1305.95,1173.2,0.209,0.209,179.0335,0,0,-1,18.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_148.setTransform(1306.15,1173.2,0.2088,0.2088,-36.0234,0,0,1.7,26.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_149.setTransform(1305.95,1173.25,0.2089,0.2089,113.9442,0,0,0.2,18.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_150.setTransform(1306,1173.15,0.2088,0.2088,38.9442,0,0,3.2,21.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_151.setTransform(1305.8026,1172.5894,0.3421,0.3421);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_152.setTransform(1243.4987,1196.8837,0.2205,0.2205,180);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_153.setTransform(1243.572,1196.8213,0.2627,0.2627,180);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_154.setTransform(1243.5,1196.75,0.2379,0.2379,73.9617,0,0,0.3,19.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_155.setTransform(1243.65,1196.75,0.238,0.238,-0.9772,0,0,1.8,21.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_156.setTransform(1243.3,1196.8,0.2379,0.2379,143.9697,0,0,1.6,22.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_157.setTransform(1243.25,1196.95,0.2379,0.2379,-66.0651,0,0,-1.2,22.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_158.setTransform(1243.2,1196.9,0.2379,0.2379,-141.0566,0,0,2.1,20.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_159.setTransform(1243.2002,1197.4857,0.3896,0.3896,180);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_160.setTransform(1468.0229,1194.1642,0.2853,0.2853);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_161.setTransform(1467.9372,1194.1743,0.3399,0.3399);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_162.setTransform(1468.3,1194.3,0.3079,0.3079,-106.0487,0,0,-2.5,21.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_163.setTransform(1468.25,1194.4,0.308,0.308,179.0036,0,0,-1.5,19.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_164.setTransform(1468.35,1194.25,0.3079,0.3079,-36.0345,0,0,1.2,25);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_165.setTransform(1468.3,1194.2,0.3079,0.3079,113.9331,0,0,-1.7,21.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_166.setTransform(1468.25,1194.3,0.3079,0.3079,38.9467,0,0,2.2,21.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_167.setTransform(1468.1501,1193.4098,0.504,0.504);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_168.setTransform(1397.6886,1183.4609,0.2854,0.2854);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_169.setTransform(1397.558,1183.4717,0.3399,0.3399);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_170.setTransform(1398.1,1183.55,0.308,0.308,-106.0565,0,0,-1.8,22.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_171.setTransform(1398.1,1183.75,0.308,0.308,178.9981,0,0,-2.3,19.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_172.setTransform(1398.05,1183.7,0.308,0.308,-36.0347,0,0,1.5,25.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_173.setTransform(1398.15,1183.5,0.308,0.308,113.9386,0,0,-1.9,20.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_174.setTransform(1398.1,1183.55,0.3079,0.3079,38.9458,0,0,2.8,20.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_175.setTransform(1398.0032,1182.6578,0.5041,0.5041);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_176.setTransform(1230.5837,1163.694,0.2205,0.2205,75.005);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_177.setTransform(1230.529,1164.1269,0.2627,0.2627,75.0064);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_178.setTransform(1230.9,1164.2,0.2379,0.2379,-31.0463,0,0,-0.2,23.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_179.setTransform(1230.95,1164.35,0.238,0.238,-106.0024,0,0,-2.9,21.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_180.setTransform(1231.1,1164.25,0.2379,0.2379,38.9502,0,0,3.8,24.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_181.setTransform(1231.2,1164.55,0.238,0.238,-171.0751,0,0,-3.2,18.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_182.setTransform(1231.05,1164.45,0.238,0.238,113.9386,0,0,2.8,18.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_183.setTransform(1231.5147,1164.1612,0.3896,0.3896,75.0069);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_184.setTransform(1344.4348,1101.2638,0.1936,0.1936,-29.998);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_185.setTransform(1344.2429,1101.3258,0.2306,0.2306,-29.9964);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_186.setTransform(1344.85,1101.1,0.2089,0.2089,-136.0685,0,0,-2.2,22.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_187.setTransform(1344.75,1101.3,0.2089,0.2089,148.991,0,0,-1.1,18.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_188.setTransform(1344.9,1101.35,0.2089,0.2089,-66.0673,0,0,1.6,28.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_189.setTransform(1344.75,1101.15,0.209,0.209,83.9938,0,0,-2.3,18.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_190.setTransform(1344.9,1101.25,0.209,0.209,8.9182,0,0,4.6,22.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_191.setTransform(1344.217,1100.6954,0.3421,0.3421,-29.9994);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_192.setTransform(1266.5314,1104.4573,0.144,0.144);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_193.setTransform(1266.6947,1104.519,0.1716,0.1716);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_194.setTransform(1267.05,1104.7,0.1554,0.1554,-106.0157,0,0,-3.7,22.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_195.setTransform(1266.95,1104.75,0.1554,0.1554,179.0549,0,0,-1.5,17.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_196.setTransform(1267.1,1104.45,0.1553,0.1553,-36.0323,0,0,3.3,26);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_197.setTransform(1266.95,1104.5,0.1554,0.1554,113.9368,0,0,1.2,18.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_198.setTransform(1267.1,1104.45,0.1554,0.1554,38.9525,0,0,4,20.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_199.setTransform(1266.7836,1104.0722,0.2545,0.2545);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#F44C6C").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_200.setTransform(1427.0386,1130.3609,0.2854,0.2854);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#C58BB7").s().p("AhpBpQgrgsAAg9QAAg8ArgtQAtgrA8AAQA+AAArArQAsAtAAA8QAAA9gsAsQgrAsg+AAQg8AAgtgsg");
	this.shape_201.setTransform(1426.958,1130.4217,0.3399,0.3399);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_202.setTransform(1427.2,1130.55,0.308,0.308,-106.0592,0,0,-2,21.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_203.setTransform(1427.25,1130.55,0.3081,0.3081,178.9981,0,0,-1.2,20.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_204.setTransform(1427.3,1130.5,0.308,0.308,-36.033,0,0,0.6,24.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_205.setTransform(1427.2,1130.3,0.308,0.308,113.9351,0,0,-1.4,22);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#F8BECD").s().p("AAPDYQgGACgHAAQgHAAgHgEQggAPglguQglgwgWhUQgVhTAGhJQAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAGBJgVBTQgWBUglAwQgdAjgZAAQgGAAgHgCg");
	this.shape_206.setTransform(1427.25,1130.4,0.308,0.308,38.9467,0,0,1.9,21.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#F48596").s().p("AiNGlQgigEgFg4QgvAcgYgRQgYgRAJgzQgyANgQgeQgRggAkg/QAaguApgpQg6gGgwgSQhEgagIgiQgIghAygYQgpgiAHgdQAIgcAzgJQgegsAYgYQAYgbBHAMQA+ALBBAhQgPhHAFg+QAHhIAggRQAfgRAkArQAWgxAdAAQAdAAAVAvQAjgoAeAQQAgARAHBIQAFA/gPBHQBBghA+gLQBHgMAZAbQAYAZggAuQA1AIAIAdQAHAcgoAhQAwAXgIAhQgIAihDAaQgmAOgqAGQAfAeAWAgQApA8gNAhQgNAgg3gJQAPA0gXATQgWATgvgXQgBA1ghAHQgkAIgzgzQgtgsgihBQgbBDgpAwQgrAzgiAAIgGAAgAAAAQIAAgBIAAAAIAAAAIAAABg");
	this.shape_207.setTransform(1427.1209,1129.6572,0.5041,0.5041);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFC497").s().p("AgSA3IgMgHIgHgBQgGgCgFgFIgFgGIgBgIIABgQIAHgHQAKAAAGAFQADAIAMgiIAMgmQAAANgFANIgKAZIgGASQgDAJACAMQACAMAJAGQAIAGAbgLQgDgOAJgWIADgFQAkAEgPAjQgGANgLgGQgHgDgFAFQgRADgKAAQgIAAgFgCgAAdAOQgHASACAMIAAAFQAFgEAGACQAJAGAFgLQAMgegagBIgCAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAABgBABgAgsAIIgFAGIgBALIABAHIAEAEQADAEAEABQADABAIAFQgDgOABgJQABgJgDgCIgHgEIgEgCIgCABg");
	this.shape_208.setTransform(1168.2424,870.2901,1.8211,1.8211);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AB8BWQgrgCghgGQgggGgKg1QgEgTAAgNQgRgGgQAEIgIAgQgPAzghAEQggADgrgCQgrgCgRgYQgSgZACggQAAgJADgGIADg8IAQAoQAHgEAKgCQAkgIA7AKQA7AJAKAEQAAAAABAAQAAAAABABQAAAAAAABQABAAAAAAIAkACQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABgBQAKgDA8gEQA7gEAkALQAOAEAJAIIAsglIAAAOIghAsQABAEAAAGQgCAigTAWQgRAWgmAAIgHAAgABPgdQgzADgIADQgJACAIArQAJAsAbAFQAcAFAlABQAkACAQgTQARgTABgdQABgbgfgIQgWgHggAAIgbABgAi9gnQgfAGgCAcQgBAcAPAUQAOAVAlABQAlACAcgDQAbgCANgsQAMgqgJgCQgJgDgygIQgbgEgWAAQgSAAgOACg");
	this.shape_209.setTransform(1172.7884,853.3539,1.8211,1.8211);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#333333").s().p("ABYAeQgTgVhFgJQhGgIgXAFQgWAEANgQQAMgRAogEQAogFAcAHQAcAGAgAQQAfAOgBAYQAAANgGAAQgFAAgJgJg");
	this.shape_210.setTransform(1191.5929,844.6738,1.4239,1.4239,0,6.1962,-173.8038);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#333333").s().p("ABYAeQgTgVhFgJQhGgIgXAFQgWAEANgQQAMgRAogEQAogFAcAHQAcAGAgAQQAfAOgBAYQAAANgGAAQgFAAgJgJg");
	this.shape_211.setTransform(1150.7096,843.2926,1.424,1.424);

	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(1189.65,853.9,1.0747,1.0747,0,0,0,10.5,5);

	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(1153.85,855.2,1.0747,1.0747,0,0,0,10,4.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#A91616").s().p("AgKAfQghgGgOgIQgNgIgKgeIAIAAQAaAAAkgLQAKANAQgMQARAJAwANQgFAVgbANQgSAIgWAAQgJAAgKgCgAg8AAIAFACIAHACIAAAAIAEABIAPADIATABIALAGIAPgFQAOABAMgDIALgCIAEgBIAIgFIAOgHQgKAEgagCIgXgCIgTAHIgOgJIgSABIgbABQgIAAgGgFg");
	this.shape_212.setTransform(1168.3368,896.4942,1.8211,1.8211);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgKAAIgUAAIgOgDIgEgBIBiACIgIACQgMABgOAAIgQAEg");
	this.shape_213.setTransform(1168.4741,898.2056,1.8211,1.8211);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#491616").s().p("AgxAJIAAAAIgHgDIgFgCIAAgBQgQgIgCgFQAHAEAQACIAYABIASgBIAOAHIATgFIAXACQAeABAIgFQgKAHgNAGIgBAAIgEABIgDABg");
	this.shape_214.setTransform(1168.5196,895.6561,1.8211,1.8211);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],0,-0.2,0,0,-0.2,9.5).s().p("AADApQgSgBgMgRQgDgDAAgDQgCgJALgIQAPgLAIABQAKAAAGAFQAHAFgBAHIAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgCACgDgBQgEAAgCgCQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBAAAAgBQgDgCgDAAIgDABQgKADgCAHQgBAOASACQATACAIgJQAKgJgJgRQgHgQhJgJIAMgHIALgDIAAACQAxADARARQAHAIACAKQAEAVgNALQgHAFgLAEIgOACIgFgBg");
	this.shape_215.setTransform(1080.5795,818.7694,1.073,1.3928,-3.9489);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],1.2,-4.5,0,1.2,-4.5,11.7).s().p("AgGAwQgHAAgIgDQgfgMALgaQAFgNAVAAQAUAAAGAGQAHAEgBAHQgBAHgGAFIgBAAIgFABQgDAAgBgCQgBAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQABgDACgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAIgCgBQgLgEgJAEQgNAKAMALQAMALAOgBQAPgCAKgRQAIgNgZgtIAQgGQAMAXAEARQAGAVgKANIgDADIgKAIQgOAKgOAAIgEAAg");
	this.shape_216.setTransform(1063.3772,828.9034,1.073,1.3928,-3.9489);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-4.3,-3,0,-4.3,-3,9.8).s().p("AgQAkQAHgNgKgSQgJgPgZgVIAWgNQBJAIAHAQQAJASgKAIQgIAJgTgBQgTgCABgNQACgHAKgEIAEAAQADAAADACQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABABAAQAAAAAAABQACACAEAAQADAAACgCQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAIAAgBQABgHgHgFQgGgGgKAAQgJgBgOAMQgLAJACAHQAAAEADADQALAQATACQgaAAgRARIAGgJg");
	this.shape_217.setTransform(1078.7493,820.7804,1.073,1.3928,-3.9489);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-5.1,-4.1,0,-5.1,-4.1,11.4).s().p("AgdAPQgEgQgMgXQAagLAZgOIAKAIQAhAbgDAMQgEATgOAEQgGACgGgBQgIgBgIgFQgQgIAKgLQAGgFAMABIAEABQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABgBABQAAAAAAAAQAAAAgBABIAAAAIgBAEQABACADACQACABAEAAQACgBACgCQAGgGgCgGQgCgHgIgEIgIgCQgIAAgLACQgVAFgBAMQAAAHACAGQAGARAYADIAEABQgWgCgWARQAKgNgGgWg");
	this.shape_218.setTransform(1070.9643,825.1568,1.073,1.3928,-3.9489);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-0.7,-0.6,0,-0.7,-0.6,8.8).s().p("AgBAvIgFAAIgEgBQgZgDgGgRQgCgGAAgHQABgNAVgEQAMgCAIAAIAHACQAIAEACAGQACAHgGAGQgCACgCABQgEAAgCgBQgCgCgBgCIABgEIAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQgBgBAAAAIgEgBQgMgBgHAFQgKAMAQAIQAJAFAIABQAFABAGgCQAOgEAEgUQADgLgggbIgKgIIAPgJQAZAUAJARQAKAQgHAOIgGAJIgFAFQgNAMgRAAIgBAAg");
	this.shape_219.setTransform(1072.7565,823.3592,1.073,1.3928,-3.9489);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],0.7,-2,0,0.7,-2,8.1).s().p("AgOguIAdABIAABXIgBAFQgHg9gVggg");
	this.shape_220.setTransform(1047.9454,834.2841,1.073,1.3928,-3.9489);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-0.9,1.5,0,-0.9,1.5,13.3).s().p("AglBEQgPgCgLgSQgKgQAzhQQAigGAjgNQAZAugIAMQgKARgPABQgPACgMgLQgMgLANgJQAJgEALADIADABQABABAAAAQAAABAAABQABAAAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQgCABgBADQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQACACADAAIAFgBIABAAQAGgGABgGQABgIgHgFQgGgFgVAAQgUAAgFANQgLAaAeALQAIADAHABQgRAEgDAVIgCgIQgFgOgVAAQgVAAgGAFQgGAFAAAIQABAHAGAEIABABQACABADAAQAEAAACgCQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBIgBAAQgCgCAAgCIABgEIAEgBQALgEAIAEQANAJgMAMQgLAKgNAAIgCAAg");
	this.shape_221.setTransform(1059.7613,832.8114,1.073,1.3928,-3.9489);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-1.7,-12,0,-1.7,-12,26.9).s().p("AgPA9QgDgIgMgCIAAAAIgGgGQgYgYAzhRIAWgEQgzBQAKAQQALASAPACQAOABAMgLQAMgMgNgJQgJgEgLAEIgDABIgBAEQABACABACIAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgBACgDAAQgDAAgCgBIgBgBQgGgEgBgHQgBgIAHgFQAGgFAUAAQAVAAAGAOIABAIQACAGgCAFQgEAMgSAHQgKAEgJAAQgJAAgJgEg");
	this.shape_222.setTransform(1056.1229,835.3078,1.073,1.3928,-3.9489);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-1.8,1.4,0,-1.8,1.4,12.1).s().p("AgYA+IAAghQAHg9AWggIAUgCQgyBQAYAZIAFAFIgBAAQgVgEgFAcIgBgGg");
	this.shape_223.setTransform(1052.4243,836.4531,1.073,1.3928,-3.9489);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-2.9,2.1,0,-2.9,2.1,8.1).s().p("AgWAcIAAglIABAFQAFgbAVAEIABAAIAAAAQAMACADAIQADAFgCAIQgDAGgFAGIgNAKQgJAGgNAFg");
	this.shape_224.setTransform(1052.893,846.5143,1.073,1.3928,-3.9489);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],1.7,2.1,0,1.7,2.1,8).s().p("AAAASIgNgKQgGgGgDgGQgCgIADgFQAEgIAMgCIAAAAIABAAQAVgEAFAbIABgFIAAAlIgBABQgOgFgIgGg");
	this.shape_225.setTransform(1047.9099,846.8582,1.073,1.3928,-3.9489);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],0.3,-0.7,0,0.3,-0.7,9.4).s().p("AgDAsIAAAAIAEgFQAYgZgxhQIAUACQAVAgAHA9IABgFIAAAFIAAAhIgCAFQgEgbgWAEg");
	this.shape_226.setTransform(1047.0476,836.859,1.073,1.3928,-3.9489);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-0.8,-3.3,0,-0.8,-3.3,10).s().p("AgOAqIAAhXIAdgBQgWAggHA9g");
	this.shape_227.setTransform(1051.1544,834.0277,1.073,1.3928,-3.9489);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],0.5,-12.1,0,0.5,-12.1,26.9).s().p("AgVA8QgSgGgEgMQgCgGACgGIACgIQAFgNAVgBQAUAAAHAGQAGAFgBAHQgBAHgGAFIgBAAQgCACgDAAQgDgBgBgCQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIAAAAQACgCAAgDIgCgEIgCgBQgLgDgJADQgNAKAMALQAMALAOgBQAPgCALgRQAKgRgyhOIAWADQAyBQgYAZIgFAFIgBAAQgMACgDAIQgJAEgJAAQgJAAgKgEg");
	this.shape_228.setTransform(1043.1545,836.2725,1.073,1.3928,-3.9489);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],1.9,-0.7,0,1.9,-0.7,11.3).s().p("AAMA5QgMgLANgKQAIgDALADIAEABIABAEQAAADgCACIgBAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABAAABQABAAAAABQAAAAAAABQABAAAAAAQACACAEABQADAAACgCIABAAQAGgFABgHQAAgHgGgFQgGgGgVAAQgVABgFANIgCAIQgDgVgRgEQAHAAAIgDQAegMgLgZQgFgOgUAAQgVAAgGAGQgHAFABAHQABAHAGAFIABAAIAFABQAEAAABgCQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAgBQgBgDgCgBQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAIADgBQALgEAJAEQAMAKgLALQgMAKgPgBQgPgCgKgQQgIgNAZgtQAjANAiAHQAzBOgKARQgLARgPACIgCABQgNAAgLgLg");
	this.shape_229.setTransform(1039.2026,834.2999,1.073,1.3928,-3.9489);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],4.4,0,0,4.4,0,22.7).s().p("AAAAAIAAAAIAAAAg");
	this.shape_230.setTransform(1048.7701,822.0812,1.073,1.3928,-3.9489);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-5.6,0,0,-5.6,0,22.7).s().p("AAAAAIABAAIAAAAIgBAAg");
	this.shape_231.setTransform(1048.6363,822.0905,1.073,1.3928,-3.9489);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-2.3,-4.6,0,-2.3,-4.6,11.8).s().p("AgZAmIgKgJIgDgCQgKgNAGgWQAEgQAMgXIAQAHQgZAsAIAMQAKASAPABQAOACAMgLQAMgMgNgJQgJgEgLADIgDABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAABABQACABABADQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQgBACgDAAIgFgBIgBAAQgGgGgBgGQgBgIAHgEQAGgFAUAAQAVAAAFAMQALAbgfALQgIADgHABIgEAAQgOAAgOgKg");
	this.shape_232.setTransform(1035.0832,830.9257,1.073,1.3928,-3.9489);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-1.2,-0.2,0,-1.2,-0.2,9.5).s().p("AgUAoQgMgEgGgFQgNgLADgVQACgKAHgIQASgRAwgDIABgCIAJACIANAIQhIAJgHAQQgKARAKAJQAJAJATgCQASgCgBgOQgCgHgLgDIgDgBQgDAAgCACQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAQgCACgDAAQgDABgCgCQgBgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAAAQgBgHAGgFQAHgFAJAAQAJgBAPALQALAIgCAJQgBADgCADQgMARgSABIgGABIgNgCg");
	this.shape_233.setTransform(1016.62,823.1829,1.073,1.3928,-3.9489);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],3.1,-3,0,3.1,-3,9.9).s().p("AgUAcQATgCAMgQQACgDAAgEQADgHgMgJQgOgMgJABQgKAAgGAGQgHAFABAHIAAABQAAAAABABQAAAAAAABQABAAAAAAQABABAAAAQACACADAAQAEAAACgCQAAgBABAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAAAAAQABgBAAAAQADgCADAAIAEAAQAKAEACAHQABANgTACQgTABgIgJQgKgIAJgSQAHgPBIgJIAWAOQgYAUgJAPQgKASAHANIAGAJQgRgRgaAAg");
	this.shape_234.setTransform(1018.7092,824.9235,1.073,1.3928,-3.9489);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],4,-4.2,0,4,-4.2,11.4).s().p("AgJAjIADgBQAZgEAFgRQACgFAAgHQAAgNgVgEQgMgDgHABIgJACQgHAEgCAHQgCAGAFAGQACACADAAQADABADgCQADgBAAgDIAAgEIgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQgBgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAABgBIAEgBQAKgBAHAGQAKALgPAIQgIAFgIAAQgHABgFgCQgOgEgFgSQgDgNAhgaIALgIQAYAOAaALQgMAXgEAPQgFAXAJANQgWgSgVADg");
	this.shape_235.setTransform(1027.0265,828.2585,1.073,1.3928,-3.9489);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-0.4,-0.6,0,-0.4,-0.6,8.8).s().p("AgdAjIgFgGIgGgJQgHgNAKgRQAJgQAZgUIAPAJIgKAIQggAaADAMQAEATAOAEQAGACAFgBQAIAAAJgFQAQgIgKgMQgHgGgMABIgEABQAAABgBAAQAAABgBAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAIAAAAIABAEQgBADgCABQgCACgEgBQgCAAgCgCQgFgGABgHQACgGAIgEIAHgCQAIgBAMADQAVAEABANQAAAHgCAFQgGARgZAEIgEABIgFAAIgBAAQgRAAgNgMg");
	this.shape_236.setTransform(1025.0287,826.6875,1.073,1.3928,-3.9489);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#5E3608").s().p("AhrBzQhYgSAVhjQAGBqBNgDQBOgCBihSQBhhSgNg1QArBDiMBnQhLBDhIAAQgQAAgQgEg");
	this.shape_237.setTransform(1017.0106,848.78,1.454,1.454);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#2B0C02").s().p("AhnBoQgkgTAvgvQgGAmAtgFQAxgLBiiqIAaARQh0DMhPAAQgPAAgNgHg");
	this.shape_238.setTransform(1013.5129,838.1413,1.454,1.454);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#3F1203").s().p("AisAeQAohSAbAWQgHAPgCAMIAAACQgvAuAkATQBWAuCJj0IBKAxQhLAogXgYQAJAyiTBtQCahNBShiQANA1hiBSQhiBShNACIgEABQhKAAgGhpg");
	this.shape_239.setTransform(1016.6853,843.9674,1.454,1.454);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#5E1B04").s().p("AAVhHQAWAYBLgoQhRBiibBNQCUhtgJgyg");
	this.shape_240.setTransform(1024.4262,844.2904,1.454,1.454);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#5E3608").s().p("AhrBzQhYgSAVhjQAGBqBNgDQBOgCBihSQBhhSgNg1QArBDiMBnQhLBDhIAAQgQAAgQgEg");
	this.shape_241.setTransform(1084.7685,842.6383,1.454,1.454,0,-4.2805,175.7195);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#2B0C02").s().p("AhnBoQgkgTAvgvQgGAmAtgFQAxgLBiiqIAaARQh0DMhPAAQgPAAgNgHg");
	this.shape_242.setTransform(1087.4623,831.7685,1.454,1.454,0,-4.2805,175.7195);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#3F1203").s().p("AisAeQAohSAbAWQgHAPgCAMIAAACQgvAuAkATQBWAuCJj0IBKAxQhLAogXgYQAJAyiTBtQCahNBShiQANA1hiBSQhiBShNACIgEABQhKAAgGhpg");
	this.shape_243.setTransform(1084.7337,837.8149,1.454,1.454,0,-4.2805,175.7195);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#5E1B04").s().p("AAVhHQAWAYBLgoQhRBiibBNQCUhtgJgyg");
	this.shape_244.setTransform(1077.0387,838.7147,1.454,1.454,0,-4.2805,175.7195);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#333333").s().p("AgyAJQAUgLAfgNQAhgNAIAGIAkAWQgNgGgWgBQgdAAgpAQQgqARgDgBQgBAAgBAAQAAgBgBABQAAAAgBAAQAAAAgBAAQANgJAOgHg");
	this.shape_245.setTransform(1036.1311,869.3194,1.821,1.821,0,-8.2693,171.7307);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#3F1203").s().p("AiVFxIgPgbQhii+gUhfIgCgOQgEhRAHBhQAqmXA8gxQA0g4BFAKQBEAJBhA6QA/AmAuB4IiwifIh7gJIB5AfICyCJQAZBAAUBXQAnDNgXBdQgXBdABAnQABAmAfAiQhyhvgdijQA4hEAEgTQADgTAAgSQgBgSgKggQgJghgBgYQgBgZhlgbQhlgciLh2QAjBKgpA0QgqA0ABBCQAABBAQAqQAPArAfAeQA4Cig0CAQAIgngUgmgAhwk/QCEAeCLBvIA/CJQAaCpgMC8IAWiIIgklXQjJikhgAAQgVAAgQAIgAkFgPIA0DHQgoj0AyiDIAgi+QhBCbgdDTgAAPi1QBBATBLAVIhwg4IiTg1g");
	this.shape_246.setTransform(1053.3892,883.7278,1.821,1.821,8.469);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#5E1B04").s().p("ADzAAIg/iJQiLhviEgeQBagsD0DIIAkFXIgWCIQAMi7gaiqgADpheIAAAAIAAAAgAjwAZQAdjSBBibIggC+QgyCDAoD0gAkHBUIACAPQgehmAYirQA3i3A2ABQg8AxgqGXQgHhiAEBSgAAkiMIh3hEICTA0IBwA4QhLgUhBgUgADtixIiyiJIh5gfIB7AJICwCfIAEADg");
	this.shape_247.setTransform(1050.7182,875.7253,1.821,1.821,8.469);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFEDCC").s().p("AAAAAIAAAAIAAAAg");
	this.shape_248.setTransform(1095.2182,864.9072,1.821,1.821,8.469);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#333333").s().p("AgyAJQAUgLAfgNQAhgNAIAGIAkAWQgNgGgWgBQgdAAgpAQQgqARgDgBQgBAAgBAAQAAgBgBABQAAAAgBAAQAAAAgBAAQANgJAOgHg");
	this.shape_249.setTransform(1073.9947,869.607,1.821,1.821,6.0166);

	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(1072.85,877.8,1.821,1.821,8.469,0,0,7.1,2.9);

	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(1036.95,877.55,1.821,1.821,8.469,0,0,7,2.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFCCCC").s().p("AgIARIAJgnIAAAhIAIAMg");
	this.shape_250.setTransform(1053.7316,888.7783,1.821,1.821,8.469);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#990000").ss(1,1,1,3,true).p("Ag6gFQApgVAKAGQAIAGAJgIQAJgIAoANQgNAogmACQgiAFgggjQBDARAygd");
	this.shape_251.setTransform(1054.2501,908.4995,1.821,1.821,8.469);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#CC0000").s().p("Ag6gFIACABQAYAFAVAAIAAAAIABAAQAjAAAegQIABAAIAAgBIABAAIACgBQgNAognACIgHABQgeAAgcgfgAgLABQgVAAgYgFIgCgBQApgVAKAGQAIAGAJgIQAJgIAoANIgCABIgBAAIAAABIgBAAQgeAQgjAAIgBAAIAAAAg");
	this.shape_252.setTransform(1054.2501,908.4995,1.821,1.821,8.469);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],2,15,0,2,15,24.8).s().p("AA0CcQgugHgjgmQglgnhDipQgSgvAegMQgUAiAwBTIABACQApBbBOAlQAZgOAPgDQAOgDAJAEIAUAGQALACACgcIAEgtQABgQgGgzQgGgzgLgmQAkAMAACBQAACAgVATQgRAPgfAAIgUgBg");
	this.shape_253.setTransform(1058.1816,945.8455,0.9275,0.9275);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-2.7,6.6,0,-2.7,6.6,15.7).s().p("AhDAqIAvg0IAMgNIAJgNIALgNIAMgPQAdgTAPAnIhWBxQgJACgJAAQgaAAgFgdg");
	this.shape_254.setTransform(1041.9756,1040.2487,1.0565,1.0565);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-4.4,5.5,0,-4.4,5.5,15.7).s().p("AhMAVIA7gmIAPgKIAMgIIAOgLIAQgKQAggLAFApIhwBVQgtAAAEgmg");
	this.shape_255.setTransform(1038.3962,1034.2062,1.0565,1.0565);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-3.8,-2.6,0,-3.8,-2.6,11.9).s().p("AAeA1IhchEQgDgjAhgDQAAAEAHAFQAHAFAHAGIAMAIIAPAKIAuAdQAKAognAAIgDgBg");
	this.shape_256.setTransform(1080.2676,1033.9799,1.0565,1.0565);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-4.6,-2.6,0,-4.6,-2.6,12.8).s().p("AhBgFQgIgiAggIQABADAIAEIAPAJIAOAHIAQAHIAxAWQARAngqAEg");
	this.shape_257.setTransform(1082.552,1028.0868,1.0565,1.0565);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#581F06").s().p("AAUAJIACgEIADAFgAgTABQgLgGANgEIARAEQgBACAAADIAAAFg");
	this.shape_258.setTransform(1152.1983,1038.3281,1.4539,1.4539);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#6B2607").s().p("AgFAKQgCgBgCgDIgCgDIAAgFQAAgDADgCIACgDIAFgBIAEAEIAJAKIgCAEIgEACQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgEABIgEgCg");
	this.shape_259.setTransform(1153.5825,1038.6189,1.4539,1.4539);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFCC00").s().p("AANAPQgBAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgDgBgDgDIgCgFIgYgEIgEgDQgHgHAKgEIAEgBIAYAGIADgFIADgBIAEAEIgFABIgCADIgRgEQgNAEALAHIAQADIACACQACAEACABIAEABIAFAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAIADgDIAGACIABACIgCgBIgFADQgCADgDAAIgEABIgDgBg");
	this.shape_260.setTransform(1151.3973,1038.6553,1.4539,1.4539);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#581F06").s().p("AgegBIATgCIgBAFIACAFIgSACQgNgEALgGgAALAAIgCgFIAWgDIACACIABACIACACIgDAEIgWACQABgCgBgCg");
	this.shape_261.setTransform(1165.0643,1009.2867,1.4537,1.4537,2.4967);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#6B2607").s().p("AgCAMQgCAAgDgDIgDgCIgBgGIAAgEIACgEIAFgDIADgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAEACIADACIACAGQABACgBACIgDADIgDADIgFACIgDAAg");
	this.shape_262.setTransform(1164.9454,1009.3421,1.4537,1.4537,2.4967);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFCC00").s().p("AgEAQQgDAAgEgDIgDgEIgZADIgFgCQgJgEAJgGIADgCIAZgDIACgFIAHgEQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQADgBACACIAFACIAFAEIAegEIACACIACADIADAEIgFAFIgeADIgEAFQgBADgDABQgDACgDABIgFgBgAgJAJQADADADAAIADAAIAEgCIADgDIADgDIAWgDIADgDIgCgDIgBgCIgCgBIgWACIgDgCIgEgCQAAgBgBAAQAAAAAAAAQAAAAgBAAQgBAAAAAAIgEABIgFADIgBAEIgTACQgLAGANAEIASgCIACACg");
	this.shape_263.setTransform(1165.2175,1009.357,1.4537,1.4537,2.4967);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#581F06").s().p("AgegBIATgCIgBAFIACAFIgSACQgNgEALgGgAALAAIgCgFIAWgDIACACIABACIACACIgDAEIgWACQABgCgBgCg");
	this.shape_264.setTransform(1160.4221,986.5109,1.4538,1.4538,-8.0481);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#6B2607").s().p("AgCAMQgCAAgDgDIgCgCIgCgGIAAgEIACgEIAFgDIAEgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAEACIADACIACAGQABACgBACIgDADIgDADIgEACIgEAAg");
	this.shape_265.setTransform(1160.3152,986.5872,1.4538,1.4538,-8.0481);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFCC00").s().p("AgEAQQgDAAgEgDIgDgEIgZADIgFgCQgJgEAJgGIADgCIAZgDIACgFIAHgEQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQADgBACACIAFACIAFAEIAegEIACACIACADIADAEIgFAFIgeADIgEAFQgBADgDABQgDACgDABIgFgBgAgJAJQADADADAAIADAAIAEgCIADgDIADgDIAWgDIADgDIgCgDIgBgCIgCgBIgWACIgDgCIgEgCQAAgBgBAAQAAAAAAAAQAAAAgBAAQgBAAAAAAIgEABIgFADIgBAEIgTACQgLAGANAEIASgCIACACg");
	this.shape_266.setTransform(1160.5856,986.552,1.4538,1.4538,-8.0481);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#581F06").s().p("AgegBIATgCIgBAFIACAFIgSACQgNgEALgGgAALAAIgCgFIAWgDIACACIABACIACACIgDAEIgWACQABgCgBgCg");
	this.shape_267.setTransform(1156.0232,967.4558,1.4538,1.4538,-5.0152);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#6B2607").s().p("AgCAMQgCAAgDgDIgDgCIgBgGIAAgEIACgEIAFgDIADgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAEACIADACIACAGQABACgBACIgDADIgDADIgFACIgDAAg");
	this.shape_268.setTransform(1155.9125,967.5263,1.4538,1.4538,-5.0152);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFCC00").s().p("AgEAQQgDAAgEgDIgDgEIgZADIgFgCQgJgEAJgGIADgCIAZgDIACgFIAHgEQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQADgBACACIAFACIAFAEIAegEIACACIACADIADAEIgFAFIgeADIgEAFQgBADgDABQgDACgDABIgFgBgAgJAJQADADADAAIADAAIAEgCIADgDIADgDIAWgDIADgDIgCgDIgBgCIgCgBIgWACIgDgCIgEgCQAAgBgBAAQAAAAAAAAQAAAAgBAAQgBAAAAAAIgEABIgFADIgBAEIgTACQgLAGANAEIASgCIACACg");
	this.shape_269.setTransform(1156.1843,967.5055,1.4538,1.4538,-5.0152);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#581F06").s().p("AgegBIATgCIgBAFIACAFIgSACQgNgEALgGgAALAAIgCgFIAWgDIACACIABACIACACIgDAEIgWACQABgCgBgCg");
	this.shape_270.setTransform(1157.8984,949.211,1.4538,1.4538,39.6911);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#6B2607").s().p("AgCAMQgCAAgDgDIgDgCIgBgGIAAgEIACgEIAFgDIADgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAEACIADACIACAGQABACgBACIgDADIgDADIgFACIgDAAg");
	this.shape_271.setTransform(1157.7702,949.1833,1.4538,1.4538,39.6911);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFCC00").s().p("AgEAQQgDAAgEgDIgDgEIgZADIgFgCQgJgEAJgGIADgCIAZgDIACgFIAHgEQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQADgBACACIAFACIAFAEIAegEIACACIACADIADAEIgFAFIgeADIgEAFQgBADgDABQgDACgDABIgFgBgAgJAJQADADADAAIADAAIAEgCIADgDIADgDIAWgDIADgDIgCgDIgBgCIgCgBIgWACIgDgCIgEgCQAAgBgBAAQAAAAAAAAQAAAAgBAAQgBAAAAAAIgEABIgFADIgBAEIgTACQgLAGANAEIASgCIACACg");
	this.shape_272.setTransform(1157.978,949.3597,1.4538,1.4538,39.6911);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#581F06").s().p("AgegBIATgCIgBAFIACAFIgSACQgNgEALgGgAALAAIgCgFIAWgDIACACIABACIACACIgDAEIgWACQABgCgBgCg");
	this.shape_273.setTransform(1166.2484,937.411,1.4538,1.4538,39.6911);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#6B2607").s().p("AgCAMQgCAAgDgDIgDgCIgBgGIAAgEIACgEIAFgDIADgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAEACIADACIACAGQABACgBACIgDADIgDADIgFACIgDAAg");
	this.shape_274.setTransform(1166.1202,937.3833,1.4538,1.4538,39.6911);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFCC00").s().p("AgEAQQgDAAgEgDIgDgEIgZADIgFgCQgJgEAJgGIADgCIAZgDIACgFIAHgEQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQADgBACACIAFACIAFAEIAegEIACACIACADIADAEIgFAFIgeADIgEAFQgBADgDABQgDACgDABIgFgBgAgJAJQADADADAAIADAAIAEgCIADgDIADgDIAWgDIADgDIgCgDIgBgCIgCgBIgWACIgDgCIgEgCQAAgBgBAAQAAAAAAAAQAAAAgBAAQgBAAAAAAIgEABIgFADIgBAEIgTACQgLAGANAEIASgCIACACg");
	this.shape_275.setTransform(1166.328,937.5597,1.4538,1.4538,39.6911);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_276.setTransform(1013.1886,1055.3084,0.6863,1.1886,0,11.9608,-38.1608);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_277.setTransform(1010.0631,1063.7447,1.1886,0.6863,0,-128.1608,-78.0392);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_278.setTransform(1009.5507,1069.5342,0.4048,1.3116,0,-158.3836,-148.192);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_279.setTransform(1013.5232,1065.241,1.2524,0.5614,0,158.3493,116.3493);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_280.setTransform(1015.197,1058.0382,1.018,0.9204,0,39.4665,95.5326);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_281.setTransform(1012.0612,1058.5538,1.2068,0.6534,0,-13.0674,-61.573);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_282.setTransform(1009.2038,1068.8919,0.6534,1.2068,0,-151.573,-103.0674);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_283.setTransform(1010.7556,1069.0856,0.8291,1.0937,0,-171.6452,133.5818);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_284.setTransform(1015.3325,1060.3277,1.2381,0.5924,0,59.5774,104.0943);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_285.setTransform(1014.8555,1055.5812,0.4478,1.2974,0,23.4658,49.3803);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_286.setTransform(1004.7717,1080.6202,0.6663,1.1539,0,11.9557,-38.1541);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_287.setTransform(1001.6663,1089.3886,1.1539,0.6663,0,-128.1541,-78.0443);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_288.setTransform(1001.276,1095.1347,0.393,1.2732,0,-158.3786,-148.1911);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_289.setTransform(1004.895,1090.7165,1.2159,0.545,0,158.358,116.3522);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_290.setTransform(1006.8772,1083.3584,0.9883,0.8936,0,39.4698,95.5319);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_291.setTransform(1003.6832,1084.0307,1.1717,0.6344,0,-13.0672,-61.5747);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_292.setTransform(1000.7069,1094.1247,0.6344,1.1717,0,-151.5747,-103.0672);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_293.setTransform(1002.054,1094.6887,0.805,1.0619,0,-171.6466,133.5799);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_294.setTransform(1006.4811,1085.5263,1.202,0.5751,0,59.5929,104.0932);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_295.setTransform(1005.6536,1081.5996,0.4347,1.2595,0,23.4689,49.3904);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_296.setTransform(995.1273,1105.4366,0.6862,1.1884,0,11.9624,-38.1443);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_297.setTransform(991.6648,1114.8985,1.1884,0.6862,0,-128.1443,-78.0376);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_298.setTransform(991.3429,1120.7221,0.4049,1.3114,0,-158.3745,-148.1775);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_299.setTransform(994.8673,1115.99,1.2523,0.5614,0,158.3533,116.3549);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_300.setTransform(996.6274,1108.8654,1.0179,0.9204,0,39.4735,95.5319);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_301.setTransform(993.8504,1109.3837,1.2068,0.6534,0,-13.0632,-61.5694);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_302.setTransform(990.8697,1119.6245,0.6534,1.2068,0,-151.5694,-103.0632);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_303.setTransform(991.9932,1119.9889,0.8291,1.0938,0,-171.6462,133.5876);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_304.setTransform(996.9609,1110.4227,1.2379,0.5923,0,59.5828,104.0959);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_305.setTransform(995.8311,1106.6561,0.4477,1.2973,0,23.4693,49.3841);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_306.setTransform(1061.7582,1091.7195,1.1147,1.1147,20.7114);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_307.setTransform(1054.5674,1094.5721,1.1147,1.1147,-69.2886);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_308.setTransform(1054.9036,1102.3065,1.1146,1.1146,-129.2884);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_309.setTransform(1062.3569,1104.3401,1.1147,1.1147,155.7173);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_310.setTransform(1065.8627,1098.2724,1.1148,1.1148,95.704);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_311.setTransform(1058.5321,1092.2154,1.1146,1.1146,-18.2641);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_312.setTransform(1053.3654,1099.7679,1.1146,1.1146,-108.2641);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_313.setTransform(1057.4857,1105.3742,1.1147,1.1147,-168.2837);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_314.setTransform(1065.8288,1101.2918,1.1147,1.1147,116.7257);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_315.setTransform(1063.9602,1094.3486,1.1147,1.1147,56.7208);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_316.setTransform(1054.8321,1073.0092,1.1153,1.1153,-114.2778);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_317.setTransform(1060.9965,1077.9204,1.1154,1.1154,-174.2912);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_318.setTransform(1067.6235,1073.2439,1.1154,1.1154,110.7132);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_319.setTransform(1055.3825,1068.0392,1.1153,1.1153,-63.279);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_320.setTransform(1057.0398,1077.269,1.1153,1.1153,-153.279);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_321.setTransform(1065.3133,1077.0311,1.1153,1.1153,146.7304);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_322.setTransform(1068.073,1068.8522,1.1153,1.1153,71.7336);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_323.setTransform(1052.7496,1119.0548,1.1154,1.1154,-24.2785);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_324.setTransform(1048.9777,1127.3012,1.1154,1.1154,-114.2785);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_325.setTransform(1054.2965,1132.2204,1.1154,1.1154,-174.2912);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_326.setTransform(1061.8143,1128.0004,1.1154,1.1154,110.7132);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_327.setTransform(1060.1567,1120.5036,1.1153,1.1153,50.7191);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_328.setTransform(1049.9808,1122.6148,1.1153,1.1153,-63.279);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_329.setTransform(1051.3898,1131.569,1.1153,1.1153,-153.279);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_330.setTransform(1059.6065,1131.3199,1.1153,1.1153,146.7304);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_331.setTransform(1062.273,1123.0522,1.1153,1.1153,71.7336);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_332.setTransform(1056.8892,1118.81,1.1154,1.1154,11.719);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#581F06").s().p("AgegBIATgCIgBAFIACAFIgSACQgNgEALgGgAALAAIgCgFIAWgDIACACIABACIACACIgDAEIgWACQABgCgBgCg");
	this.shape_333.setTransform(1065.9452,959.4487,1.4538,1.4538,-5.9346);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#6B2607").s().p("AgCAMQgCAAgDgDIgCgCIgCgGIAAgEIACgEIAFgDIAEgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAEACIADACIACAGQABACgBACIgDADIgDADIgEACIgEAAg");
	this.shape_334.setTransform(1065.8356,959.521,1.4538,1.4538,-5.9346);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFCC00").s().p("AgEAQQgDAAgEgDIgDgEIgZADIgFgCQgJgEAJgGIADgCIAZgDIACgFIAHgEQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQADgBACACIAFACIAFAEIAegEIACACIACADIADAEIgFAFIgeADIgEAFQgBADgDABQgDACgDABIgFgBgAgJAJQADADADAAIADAAIAEgCIADgDIADgDIAWgDIADgDIgCgDIgBgCIgCgBIgWACIgDgCIgEgCQAAgBgBAAQAAAAAAAAQAAAAgBAAQgBAAAAAAIgEABIgFADIgBAEIgTACQgLAGANAEIASgCIACACg");
	this.shape_335.setTransform(1066.1071,959.4959,1.4538,1.4538,-5.9346);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#581F06").s().p("AgegBIATgCIgBAFIACAFIgSACQgNgEALgGgAALAAIgCgFIAWgDIACACIABACIACACIgDAEIgWACQABgCgBgCg");
	this.shape_336.setTransform(1063.8477,949.7047,1.4538,1.4538,-8.2229);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#6B2607").s().p("AgCAMQgCAAgDgDIgCgCIgCgGIAAgEIACgEIAFgDIAEgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAEACIADACIACAGQABACgBACIgDADIgDADIgEACIgEAAg");
	this.shape_337.setTransform(1063.7411,949.7813,1.4538,1.4538,-8.2229);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFCC00").s().p("AgEAQQgDAAgEgDIgDgEIgZADIgFgCQgJgEAJgGIADgCIAZgDIACgFIAHgEQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQADgBACACIAFACIAFAEIAegEIACACIACADIADAEIgFAFIgeADIgEAFQgBADgDABQgDACgDABIgFgBgAgJAJQADADADAAIADAAIAEgCIADgDIADgDIAWgDIADgDIgCgDIgBgCIgCgBIgWACIgDgCIgEgCQAAgBgBAAQAAAAAAAAQAAAAgBAAQgBAAAAAAIgEABIgFADIgBAEIgTACQgLAGANAEIASgCIACACg");
	this.shape_338.setTransform(1064.0114,949.7453,1.4538,1.4538,-8.2229);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#581F06").s().p("AgegBIATgCIgBAFIACAFIgSACQgNgEALgGgAALAAIgCgFIAWgDIACACIABACIACACIgDAEIgWACQABgCgBgCg");
	this.shape_339.setTransform(1062.534,940.0555,1.4539,1.4539);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#6B2607").s().p("AgCAMQgCAAgDgDIgDgCIgBgGIAAgEIACgEIAFgDIADgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAEACIADACIACAGQABACgBACIgDADIgDADIgFACIgDAAg");
	this.shape_340.setTransform(1062.4176,940.116,1.4539,1.4539);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFCC00").s().p("AgEAQQgDAAgEgDIgDgEIgZADIgFgCQgJgEAJgGIADgCIAZgDIACgFIAHgEQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQADgBACACIAFACIAFAEIAegEIACACIACADIADAEIgFAFIgeADIgEAFQgBADgDABQgDACgDABIgFgBgAgJAJQADADADAAIADAAIAEgCIADgDIADgDIAWgDIADgDIgCgDIgBgCIgCgBIgWACIgDgCIgEgCQAAgBgBAAQAAAAAAAAQAAAAgBAAQgBAAAAAAIgEABIgFADIgBAEIgTACQgLAGANAEIASgCIACACg");
	this.shape_341.setTransform(1062.6902,940.1191,1.4539,1.4539);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#DF0000").s().p("AgvIDIgqAAQB8goADwLQAHFGAZJHQAKDEAKAQQhNgug8AAg");
	this.shape_342.setTransform(1163.1974,1135.3042,1.0566,1.0566);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#373737").s().p("ACdCpQAShXBXhXIAAiGQBVAPBLgOQgzE3iaAsQgzgKgJgmgAmmBkQC+gfBFhtQATgsgTiEQA0AHA/AAQhEFoiDAWIgKACIgZABQhiAAgqhMg");
	this.shape_343.setTransform(1154.1901,1190.3255,1.0566,1.0566);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#DF3100").s().p("AhMHsIAxouQAUl1ADinIBiAAQgCBGAECdQgEQLh7AoQgeAAgvAVgAgEpuQgSgvAQgCIBjAAIABAxgAAWqPQgDAJAFAHIABAAQAHAEAGgGIADgCQABgKgLACIAAACQAEAJgIgEQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAgBAAAAIAAgHIAEgFIAHgCQAJADAGAJQADAFAFAEIAUgBIgQgBQgLgEgFgMIgCgDQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAAAAAIgLgCQgHACgDAHgAAjqEQABgCAAAAQABgBAAAAQAAAAgBABQAAABgBACIAAgBgAgIrMIAKAKQAJADBDAGQAKACARAAQAZAEiCAIQgHgagBgHg");
	this.shape_344.setTransform(1157.096,1116.1801,1.0566,1.0566);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#E9D1BF").s().p("AgyAEQBbAKgYgaIgqgiQAQAIAKADQAKAFAGAAIAdAbQAZAbhbgLQAQAXASALQgkgEgcgng");
	this.shape_345.setTransform(1163.6381,1025.9482,1.0566,1.0566);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],8.3,2.4,0,8.3,2.4,67.3).s().p("ABCnAIAAgBQBPgDCvhnIgUAPQgwAkg5AfQggAQgkARIgmAQQgMgIgJgOIlTOyQCFgeASgdQAbABEPtBQi6LXhIBxQgBAijuBJQCTmkDupIg");
	this.shape_346.setTransform(1008.7255,1081.1545,1.0566,1.0566);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#8D0000").s().p("AAZHbIgWgXQgdgmgHgtQBenigfmYIAjAvQAYFhhRHqQAGBrDgA5QCTAWAajxQAZjzgHl7IAcgUQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAAAIgRK7QgIBjhVA+IgcARQghATgrAOQiXgohFhBgAihpDIAAAAQjvJIiTGkQDuhJAAghQBIhyC7rXIAHgdIgCAPQgUBwgUBjQiCKRhkAlIhwApIhvAoIhFAZQCQmoEup2gAHamQQABgfgBgrQBKIZA0C4QABA5AHA/Qg5jNhNoyg");
	this.shape_347.setTransform(1032.8683,1094.9428,1.0566,1.0566);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#7C0000").s().p("AmBNlQCbq1BusgQAUhjAUhwIACgPIAbgUIgRCRQhVOSikKqIhEgCgAgfCYIAWAYQgNF2ASEwIhAAFQAqjrgFnYgAqfMpQB5kzBYmIQhhH3hMDTIgkgPgAD5MqQhXgOAIgFIABAAIABAAQAIgEAGAAQAZgHAxgIQAwgJATASQAniHhQmOIAcgSQAxFeAfDGQAegbAfgDQAfgDAVgWQA1A1g/AHQhAAHgngMQgEADg/AAQAGAhgvAAQgQAAgVgEgAGxqIQAEgTACggQBNIzA5DMIAAACQAVDhBMEuQAJApgpAlQh5oDhUsog");
	this.shape_348.setTransform(1036.565,1126.5874,1.0566,1.0566);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-11.9,-16.9,0,-11.9,-16.9,69.7).s().p("AATH3Qjfg5gGhrQBRnqgYlhIAcAkQACAoAHAeIAEAPQAcD+hUHUQgGBGDbBCQBFgDAihdQAjhcAJplIASgMQAHF7gZDzQgYDdh9AAQgMAAgMgCg");
	this.shape_349.setTransform(1056.0182,1098.1039,1.0566,1.0566);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],12.2,42,0,12.2,42,85.2).s().p("Ag8k/IgEhRIABgBQA8G+BBEAIABAMIACAVQgBAhABAjQg0i4hJoZg");
	this.shape_350.setTransform(1089.3425,1078.5923,1.0566,1.0566);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFEBDD").s().p("AhnDAQgbgNgHgZQgHgMgFgRIgEgPQgHgegCgoIgcgkIgjguIgpg1IBehJIAEAJIAGAMIAKAUIANAaIA+CAICBCOQAaAthKgeQgbATgfAAQgXAAgagLgABuCyQAThNgTgYQgKA2gIAEQggASANg8QAwhdAqiCIAJgdIAFgQIAIgbIBSAgIgRAiQgRAhgTAaIgBABIAFBQQABArgBAfQgCAggEATQgEANgFAGQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAABIgcAUIgSAMQgOAHgJAEQgJADgFAAQgNAAAFgSg");
	this.shape_351.setTransform(1059.9167,1044.3553,1.0566,1.0566);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-1.2,4.4,0,-1.2,4.4,10).s().p("AhDANIAGgmIAOACIANACIASADIAQABIAWACIAuABIABAAQgnAagrAOQgTgDgjgKg");
	this.shape_352.setTransform(1086.569,1013.956,1.0566,1.0566);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-4.4,4.2,0,-4.4,4.2,15.8).s().p("AhoAJIANgDIAZgGIBCgVIARgGIAPgFIARgHIASgGIAQgGIAWApIgLAEIABABIiPA5QgfgPgZgcg");
	this.shape_353.setTransform(1029.2495,1020.4804,1.0566,1.0566);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-9,14.4,0,-9,14.4,67.9).s().p("AhpBsQjiggi4iVQgxgpBVgLQg5AeCFBJIACACQBwBPDZAhIAEAEQAOADAQgCQApAGAuADIANACIAsACIASgCIAEgBQCDgVBnhBIAIgFIAFgEQA/grBghgQhwB/g6AlQhQA0hmAYQgZAGgbAEQglAFgmAAQhNAAhTgUg");
	this.shape_354.setTransform(1054.6224,957.8487,1.0566,1.0566);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#6B2607").s().p("AAFBpIgCgCQgDgDAAgGIAAgFQAAgEACgDIAFgEQACgDAEAAIAHAAQACABADADIADACQADAEABAFIABAEQgBAFgDAEIgDACQgDADgFABIgDABQgFgBgFgEgAgFASIgIgEIgCgDIgEgIQAAgDABgDIADgGIAFgEIAHgCQACgBACACQADAAAEACIABADQAEADAAAFIABAEQgBAEgDAEIgDAEIgHADIgCAAIgDAAgAgThMQgDAAgEgDIgEgDIgBgIQgBgEABgEIACgFIAHgEQACgBADAAQAEgBACACQADAAACACIAEAEQACADABAEIgBAHIgDAFQgBADgDABIgGADIgGgBg");
	this.shape_355.setTransform(1063.8842,949.9999,1.0566,1.0566);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FAE7CD").s().p("AhDANQgFgCgFAAQASgFgMguICRgRQgVBGAZAIQgTAKgKAOQgFAGgEAHQg1gjg2gKg");
	this.shape_356.setTransform(1056.9319,926.4184,1.0566,1.0566);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-9.5,7.4,0,-9.5,7.4,30.7).s().p("AinBhQAggFD2jxIA5BBIghAdIhaBOIgZAYIgTAQIgrAnIgxAZIgwAWg");
	this.shape_357.setTransform(1136.4659,1026.8727,1.0566,1.0566);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFE5D1").s().p("AgaBhIgKgLIgPgOIgNgOIgQgPIgTgWQgVgWgGgMQgUgYggAUIBahPQArgLAdAEIAKACQAHABAGAEIArAiQAYAbhbgLQAbAnAlAEQgTgLgRgWQBdALgZgcIgdgcQAxAAAagSIA2A/QgNgIgbA8IgDAFQAUAdhLAvIgLAEIgFABIgQADQhCgGgJgCg");
	this.shape_358.setTransform(1160.1597,1031.2804,1.0566,1.0566);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#EFC000").s().p("AksCjQAWAGCNhiIheBJIgGAEIgbATIgKABQgPAAgLgFgAh/BcQCbADC4gfIgFAQQiCAcjCAEgAmwAhIgDgTQAWgBAXARIAXgEQgjgdgjACIgDgVQAiAAAjAXIALAXQAZAbAgAPIhaAlIgWAJQgKgngHgogAEuBFIhSggQBuAnAlgDQgGAHgJAIgAF7AwQgggDgfgIQgrgLgtgVIgSgJQBfApBsgEQgFAKgIAHIgVgCgAERgVQAsgNAngbQATghAOgsQAUgQAjgJIAAAVQhJAIAGBJIAUgBQgHg5A2gIIAAASQgjAAAGArIAOgCQgEgbATAHIAAAQIAAAxIgSAEQgkAFgkAAQgoAAgpgHgAm6gpIgBgLQAZgBAgAOIAFAPQghgQgcgBgAEfhBQABhMg4AAIABgaQApAHAUAcQAFAIADAIQADAHABAJIACAPIABAOIAAAJIgWgDgAD9hEQADghgbACIACgUQAqgBgDA2IgRgCgADihIIACgOQAPACgEAOIgNgCg");
	this.shape_359.setTransform(1056.2187,1018.9747,1.0566,1.0566);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#BA0000").s().p("AmuEVIgDgRQAjgBAjAdIgXAFQgWgSgWACgAmzDvIgDgTQAdACAgAPIALAbQgjgZgiAAgAm3DRIAAgKQAJADANgBQANgEANgGIAJAfQgggNgZAAgAHBB3IAAAPQg3AIAHA5IgTABQgHhIBKgJgAm/gVQAMAAAMgFQAFBHAJA8QgLAIgEANQgFAUAPAHQAHAEAIAAIAHAeIgLADIgkAHQgMhnAEhzgAHBCYIAAAWQgUgHAEAaIgNADQgGgsAjAAgAmhCTIgEgEQgDgVAPgNIAEAVQgCABgBAEIABAEIAEACQABAGACAGIgEABQgGAAgHgHgAGTBVQAIAGAKAEIAKAAIAJAAQgDgGgGAGQgQgFgKgKIADgYIAMgBIAGgJQADgTgQgJQAEghABgoQAIADAKAAIAEAAQAGBIACBPQgjAIgUARQAGgTAEgUgAGYA3IACgPQACADgCAGIAAACQAFgEAAgIQgBgEgCgCQAAgGABgFQAKAJAAAOQgEAKgJAAIgCAAgAm/gjIAIAAIAAgIIgIAAQAEhmAOhxIADACIAAASIgCgDQAAAFACADIgBAOIgBAPIABAGIAAACIgCAAIgBAHIADAAIAAANIAAACIgBAAIAAALIABABIAAAKIgBACIgCAFIgBAYIACAFIAAgBIABACIABgBIABAQIgDgCIgEACIgCAAIgDACIAAACIgBACIAAAMIADgBIABgEIgDgDIAEgCIABgEIAHAEIAAAFIgNAMIgBgBIgBAHIABAAIAFgCIAKgJIAAANIgHACIgCAOIAJgHIABARQgHAEgGACIgKAEIAAgEgAGjhCIAAgVIADADIAKAJIgKgQIgDAAIgBgmIAJARIACACIgCgSIgFgKIAEgBIgBgGIgDABIgDAAIgBADIgBgIIAEgCIACgBIAAgCIAAgHIgGADIAAgIIAAgBIAFgCIgBgGIgEACIgFg6QASBTAKBgQgOgHgHgHgAmskIQACgOABgOIAAAcIgDAAg");
	this.shape_360.setTransform(1055.7265,991.2395,1.0566,1.0566);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#D60000").s().p("AhEOFQBTnVgbj+QAEARAIAMQAFAZAcANQA7AaAxgiQBJAegagsIiCiPIg9iAQDQgEBegZQgqCBgvBeQgOA8AggSQAJgEAJg1QAUAXgUBOQgGAaAdgMQAJgDANgIQgJJmgjBdQgiBchFADQjahCAGhGgAChP3QAEgBgFgDQgDgBgBgFQgDgMgLAAIgaAMIAEACIAXgHgADFPUIggAfIAmgbIgDgMIAKgMIACgkIAigiIgHgDIABAFIgHACIgcAbIAFAnIgKABIgLAKIAFAEQgVgCgNgTIAAgMIAAgCQAEgFAEgDQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAgBIAFAAIAEAFIACAFIAAABIgCAEIgEAGIgEACIgCgBIgBgEQgDgJAGAAIAFAEIAAgBIAAgCIAAgBQgDgCgFgBIAAAAIgDADIgBAFIADAKIABABIABAAIAFACIAEgDIAFgHIABgHIgBgEIgBgEIgCgDIgEgCIgHAAIgFACIgJAIIgBAEIgBAGIABAHIABADIAUARQAIAIALgCgAB0PtIgXgcIgSAKIgRgRIgEgLIgcAAIgKgVIgUAKIAOgDIALASIAlAHQgCAHAEAKQACAJAHAEQAHAEAHgEQAGgDADgMQAAAIAHAGQAHAFAKABgAgFOyIgGgOIgUgDIgBgRQAFAJANAAIANgGQAOgNgLgTIgFgEQgIgDgFAGIgCAFQgBACABADIADAIIALABQAEgGgBgGQgCgCgGACIAAACQAFAAgCAHIgBABQgKgEACgGIADgEIANAAQAFAHgEAMQgDAMgOAAQgMACgIgMIgBAAIABADIgEgEIABAZIAXAHIADAGIAHADgAgWL4IABATIgOAQIAGAIIgCAeIgNAUIAAAKIAHADIgKAbIALALIACgGIgGgJIAEgOIABgMIgCgFIAMgVIgEgiIACgIIAFgGIAGgFIgCgegADyMiIADAmQgbATATAaIgBgZIAQgSQgBgRgEgSIgCgFIgCgBIgBABgAD0K6IAGAKQgMAQAKANQgdAhAbAeIgJgeIANgcIgCgFIAJgbIgGgOIgCgJgAgOK+QgJAEAHALIAAAAIABAAIADAIIAGADIgCAJIgKAPQAUgFgFgVIgJgPQAQgBAOgKIAEgDQAJgIAHgLIACgGIACgBQgEgLgMgEQgNAAgFAOIAAAIQANACAFgOIgBgBQgIgCAAADIAAABIACABQAFADgKAEIgEAAQADgFADgHQABgEAFAAIAHABIAHAIQAEADgFAEQgGAKgKAIQgEAFgGACIgIAEIgMAFIAFgHIgCgJgADNKsQAAAJAEAKQABAFAEADIARASQAEAIAJAAIACgBQgUgPgOgTQgEgFgBgGIgBgHQABgNAKgJIAIgDIAKAFIAEAGIgDALIgNABQgCgDABgEQABAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIACABIAAAAQACgHgGABIgEABQgDAFACAGQAAABABAAQAAABAAAAQAAABABAAQAAAAABAAIAAABQAEAGAIgCQAHgCAAgJIAAgNIgNgIQgWADAAAYgAgGKSQgJAKgBAPQAAADAEAFIAEACIABgWQAPgSgRgUIgBgBgAD5KQQACAEAFAAIABAFIgKAQIABAEIAQgTIgCgJIgFgDIAAgXQgNAHAFASgAABJDIgCABIgDAEIgBAMIAGAMIgLAXIAGgEQARgGgIgVQgBgDgDgCIACgKIAFgJIgCgFgAD5IyIAIAjQgMAEACASQAAAJAKACIgDgUIAIgLIgIggIAEgJIgEgVQAZgRgKgdQgCAagTARIABAKIAJAOIgFAAgAAUG/IgOAWIAGARIABALQgRASAOAXIACADIgBADQgFABgCAHQgDAKAFAJIAFgSIAFgEIgDg0IAGgLIgBgCQAagOAMgWIAAABQAFgGAAgJQAAgMgJgKIgEgBIgMAEIgDALQgBAHAFAEIAEADQAHgDABgHIgCgKQgBgFgHAGIAAABQAAAFAGgFQAAADgCAFQgBADgEABIgCgIIABgEQABgGAFgCQACAAADABQAGAAAAAFIABACQABAJAAAIQgBAEgDADIgMARIgXAUIgEgNQALgNAAgRQAAgLgIgHgADcGzQgDAMAEAMQAEAMAJAKIAGAEIAWAMIAAgBQgHgJgMgFIgFgFIgJgIQgDgFgCgGQgHgSALgLIANABIAHAHIAAABIgHAJIgCACIgDgDQgEgHAJgGIgBgBIgBAAQgEgCgDADIAAANQAAACAGAEIADAAIADgCIAHgHIABgGIgBgEIgCgDQgCgFgHAAIgPAAQgEAEgBAGgAEAHRQgDASAOAEQgKgWAOgTIAAgEQgLABgEAWgAEAGWQgCAPAHAOQABAEAFABIgFggIAHgNgAATFTIgGAEIgCAcIAEAAIABAzQARgXgNgXQAAgEgEgBIABgUIADgEQANgMgKgTIgEgCgAEDEwQgEAVAOALIANAMQgIAPgHASQgDAGAEAGIAUgwIgTgJIAAg6QgHAMgDAOgAAUEaIgHAGQgHARANAJIABgWIABgDIAFABIAAgTIgEgEIgBgHIgCgEgADGEkQAbgWAPgpQgUgBgUAIIADAHQALgDAMgBQgMAcgUASQgOAKgKgCQAIgHAEgSIABgOIACAAIgJgDIAAABIgCABQgOALgGAJQgBgIgEgIQgBgDgCgCIADgKIgHgBIAAABIgDgBIgHADIAAABIAHAJQgGAXAFALIgDACQgLADgMgZIgEgMIgBgCIgHADIABABIAEAMQAOAkAUgGIAGgDIACABQAGACAGgCQAQANAXgTgAEIETIAHAAIAAgPIgHAAgABsBtIApAQQAEAAAEACQADAGgDAMIgBAHIgGAWQAKgIABgUIAVgRIASgCQAFAEAHACIACgBQADgDgIgBIAAAAIgFgDIARgQIgCgDIAEgVIACgHQAEAIAGACQgDgIgIgHIgBAAQgDAJgCAOIgCAGQAAgDgGgIQgDAEgCALQgBAHgFAHIgDgBIgEABQgDAFgIABIgUAQQAAgkAMgkIAAgCQgLADgFAIIABgCQgEgFADgLIAAgDQgJADgCAKIgCABQgMgEgNgSIgGgFIgBAAIAFAKQAHANgBAPQgFAFgMAAIgCgBQgCAIAMADQAGgBAFADIgFgBQgHAAgFAKgABNAlIAPABQAGgOgJgGIgHAAIgDACQABAPAGgIIgBAAQgGgEAFAAQAEgCADADQAEALgLACIAAgBQgPgKgJgSIABAAQAXgFASARQAOAFAIgMQAAgKgOgBQAMgKARABQgFgLgPgCQAJgJACgKQgPgGgMAJQgDgJgGgFQgHAOgCAQIgLgNQgEAHABAMQABAJgCAEIgBABQgIAJgIgEIgBAAIgGACIgRgGQAJANAQgFgAC/gIIgHAJIgBAKQAFAJAMAIIABAAIANgFIAAgFIAAgJQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAIgMgEIAAAAQgLAQAMgBIACgCQAAgBAAAAQABgBgBAAQAAgBAAAAQgBgBgBAAIgBgCIABgDQAKgBACAJIAAADIAAAAIgEAGIgGACQgMgHgEgMIABgDQAFgJAJ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");
	this.shape_361.setTransform(1045.4944,1038.7064,1.0566,1.0566);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#AB0000").s().p("AmMG3IBagkICPg6QAIAUAXAEQiuBohPACQgIgOgDgWgADPFMQAcgPgTgOQAkAKASACQBNANBMgLQgEAggJAUIgVABQhgAAhWgmgAnxluIAdgDQA+AfE4iIIAXAAIAsADQhgB3jGA+IgBgOIgDgHIgJgIQgdgGgIAaQgEANAHAKIgkAJQgJgMgOgJQgFgCgEgGQgIgHgHACIgMgFIAAgRIgEgGIgLgBIgEgHIgIgIIABgBIABABIACAAIACgBIAIgLIABgFIgSAPIAAALIALAKIAPAAIgCAYIAWAIQABgCABgBQAAgCABAAQAAAAAAAAQAAABgBABIAXAYIAIgCIAEAKIgLABQiFhIA5gegAmvk7IAHgBIAUAAIAEgHIAHgCIAAgeIgZgDIgKAKIgCABIgCAAIAEAOIASgBIgOgDIADgKIAXgEIACAWIgHAAIgGAGIgSAEIgLgOgAlqkXQgIgUAQgNIACgCIANACIAKAGIAFAIIABAIIgLAEIAAgDIgFgIIAAgIIgPAHIAJAAIAEAMIgCADIgRAEIgCAAgAFQkzIABgBIgFAAQgRgDgagLQg2gViDhFIgCgEIgDgDIgCgCQgTgYgTgdIAoAAIADAAQCfAyBgAMQApAEAtAJQAsAJAdAVIgWALQABgDACgDIABgEQgHgEgJAOIgDAGQgYALgZAJIgCgKIgNgBIAJAKIgFAGIgDABIgFgZQAFgHAHgFIgDgBIgHABIgIAJIADAfIgoAOIAAgDIALgPQgRADgCASIgDAAIgHACQgGAAgIgDgAG1lmIAAAEIAHAEQAPgCAJgRIABgDIgGgGIgHgBQgQAAgDAVgAHDl0QAMgDgMAHIAGAAIgNAMg");
	this.shape_362.setTransform(1056.5568,983.3944,1.0566,1.0566);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-2,7.4,0,-2,7.4,22.5).s().p("AhYCUIAGgaQAXgEAbgQQArgbAcg5QAbg5gYglQgUgcgZgVIgBgBIAGgJQACgGAEgGQApAVAbApQAcAqggBCQggBCgyAfQgqAcggAAIgEAAg");
	this.shape_363.setTransform(1123.6453,951.5981,1.0566,1.0566);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#581F06").s().p("AFhITIABgPIAQhBIAOAOQgGAWgBATIAAATQACAjAXAOQgvgDgCgogAGtEjQA8g/ghh/QgNhngPgyQhMkLAcg2QB0iEAshEQgFAmg2A8QgpAqgmA8QgbABARBpQASBpAlCWQAkCVAAgGIAGA8QAHBDg1AmQgHgEgHgBgAnMkKIADgBQAFAAAEgEQAKAjAEAqIgEABIgWhJgAnzkYIAYgGIAAAEQAAAGAEAEIgYAGQgSgCAOgMgAm6kdQgBgFgEgFIAfgJIAEACIADABQAAABAAAAQAAAAABABQAAAAAAABQAAABAAABQgBADgDADIgeAIIAAgDgAnglmIAFAAIAHgDQAGAhAHAcIgGAAQgFAAgCADQgHgcgFghgAoFl1IAYgGQgCADABAEIADAIIgWAFQgTgCAPgMgAnNl5QAAgFgEgEIAegJIAEACIADAAIABAFQAAADgDAEIgeAIIgBgEgAnunEIAGABIAGgDQADAiAFAdQgCgCgDABIgHADQgFgdgDgigAoUnYIAagCQgCAEABADIACAIIgZADQgSgGAQgKgAnanWQgBgEgCgEIAegDIACACIADADIACAEIgEAFIgfAEIABgHgAn2oMIAAgFIAEgBIAHgBIAEAvQgBgBgEAAQgDAAgCACIgFgpg");
	this.shape_364.setTransform(1114.1177,989.7603,1.0566,1.0566);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#272727").s().p("AB+DTQCbgsAzk2QgQCcAQApQAYBBg7BRQhLAQgyAAQgaAAgUgFgAiLjXIggDhQAugVAfAAQgJBRgTAYQh/A/hZAKQCDgVBElpg");
	this.shape_365.setTransform(1163.7862,1190.9215,1.0566,1.0566);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#630000").s().p("AmQA6IAAgBIAAgCIABgBIAAgBIABgCIAAgBIAKhJIAxgYIgHBLIgCAWQgfAUgNAAQgKAAACgMgAFeA6IgBgfIgCgpIAZgjIAQgUQATBfgIAiQgCADgEAAIgKAAQgVAAgMgFg");
	this.shape_366.setTransform(1167.8176,1042.769,1.0566,1.0566);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#E3B600").s().p("AkVCsIgXgnIAHhMIASBNQALAwBKgFIBWAAQgUgbAFgNIgSACIgCAAQg/AFgMgiIgjhcIAUgRQAOCVBegjIAPhLIAPAPIgQBBIgBAOQACApAvACIBiAAQC/gBBhgMQAgABALg6IAXgRIACAqQgmA1grgBQibANh4gEIhiAAIgqgCIgNgBQgfgBgxAEQgOACgMAAQgpAAgQgXgAhUCBIAAgTQABgTAGgWIAOAOIgLAcIATAFQCCgIgZgEQApAABPgLQBugOAJgDIAOAMQAOAOg/AIQhRAPiHADIhjAAQgQACASAvQgXgOgCgigAGJBaQgWg5jTjhICrCkIBXBTIgZAjIAAAAgAmhASQAsgfApghQBQhABBg+IASgWIAeAAQj2DxggAFg");
	this.shape_367.setTransform(1162.9333,1031.6498,1.0566,1.0566);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],0,-1.2,0,0,-1.2,24).s().p("ABDB7IgOgMIiIh0Ig2g+IgSgUIBQhGQDSDgAVA5IgXARIgYASg");
	this.shape_368.setTransform(1187.9214,1027.9821,1.0566,1.0566);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#AF0000").s().p("ACHM5QgZgFgagHQBYAKBAgRQAFACAFABQAEAAgJgDIAYgIQAUASAVgOQAHgFAFgHQAJgOAAgOIANgLQABAHAEAHIANAJQAHAEAMgEQATgJAHgOQABgPgLgJIgNANIAKgHIAHAPQgIAQgOAFQgIACgFgDIgNgJQgEgHAAgGQAMgOALgQQALgKAPgGIAEAAQAIAFAEAHQAHAMANADQAKACAJgEQgTABgLgPQgJgLgLgHQgNAEgKAEQAJgQAHgTQAKgMAEgSQABgHgBgIIAAgBQAGgdACggIAPAAQAPBpAQBVQhLA9haARQgjAHglAAQgrAAgtgJgAEWMdIgFgCQAZgLAVgPQgCAKgEAIQgDAFgEAEQgHAHgHAAQgHAAgHgGgAGfIoQACgRAAgTIAAAAIAEgHIgEABQAAgkgEgoQAHA+AIA4IgNAAgAEfo0QASABARgBIAHACIAGgEQBugQBeh5IiVDLIgQAUgAFToYQAFAMAMADIAIAAQAFASANAIIAHgJIgRgTIAMgQIgLgXIgHgGQgcADABAdgAGEoRQAAAMABgCQABgCAAgDIAIgFIAEAGIAGgHQgEgEgFgBgAoatBQAtCiAtA8QgKADgHAKIgKAOQgCARAOAMQAHAGADAAQAcgJAAgbIgJgKQAdAbAcgOQgpAhgsAgQgzh2gZjGgAFZobQgBgTAVgDIAIAJIACAQIgGgHIgOgDIANAKIgJAJgAnVpAQAHgTARgNQAEAGAGAFIgLACIgGANIAFADIgBgCIAAgFQAGgIAIAGIACACIABAIQgCAIgHAGQgHAGgJACg");
	this.shape_369.setTransform(1167.635,1088.2617,1.0566,1.0566);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#C70000").s().p("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gJADgKQAFgTAGANIAQgmIAAAOQAMgIgFgOIgDgKQgDgMAGAGIAGALIgBgfIAJAAIgQgYQAQgIAVADIANAJIACAGIgGANIgQAJIgHgSQAHgKAHAMQgIAHACgGIABgBQgBgGgCAJQgBADACACIAKgIIgHgLIgKACQgLANAPAOQAMgBAKgJIAGgSIgQgPIgUABQAOgKAIgPIAAAAIADgEIgMgKQgXgEgQAOIAEgOQATgMAVAIIAJAPQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIgCgEIgGgJQgOgHgNACQgHADgHAAIAAgCQAQgPAWAIIALASIABABIABgBQACgGgDgEIAFAGIgCAEQAHgIAHgDIASAHIATASQgJAKgNAGQgDACgEgBIgBgKIABAAQAEAHAJgGIgBgNQgRgBgBASIALAMIAagUQAQAcgMAcQgIATgUADQgPgDgCgOIAGgPQANgFAHALIgFAMIgJgDQAKgDgDgKQgJgCgCAKIACAIIAMACIAHgPIgMgLIgMACIgJATQADARASAEQARgBAKgPQgFANgEANQgIASgLASQgKAQgWACQgVgKAGgXQAFgRARACIAGABIAFANIgHACIgIgPQgNAJAJALQAGAGAMgEIAFgOQgJgTgRALQgSAHACARQACAUASAGQAVAAAOgSQgFAigeARQgSAJgWADQgkABABgkIAJgNQASgHAPAQQACAKgHAJIgOgDIALgEQAFgGgFgHIgLgEIgKALIAAAIIAHAKIAJAEIAPgEIAFgKQgEgignAJQgWAaAaAUQAMAHANAAQAygBAcglIAFAFIAEAQQgGAJgHgFIgBgCQgDgEAHgDQAGABgFADIgBAAQAGACAAgFIAAgDQgGgEgFAHQgCADgBAEIAJAIIAMgJQADgLgHgJIgGgFQADgGAAgFIADgbQADgLAIgNQATgbABgkQABghgYgZIASgJIAIALIgKABIgCgFIACgCIACgCIgCgBQgMACAJALQAPAEACgKIgGgLIgMgDIgLAIQgGgCgBgDQgCgDgFgCQgJgDgGgIQAdgmAJguQgDAGgBAHQgKAdgRAaIAdhXIAUgcQgBALgDAIQAIgLABgRIgBgCIgLAPIACgkIAHgMQABgcgCgaQgBgPgFgPIgHABIgCAGIgEgFIgHABIgCAKIgEgIIgDAAQAJARgIATQgIAVgIAWIADgdIAHgTIgCARIAGgkIgBgMIgDABIgBAXIgJgGIgIgCIAHAOIABABQgGAJgIAGIAPgKIgSAkIANgMIgCAJQgHADAAAHIAAASIAGAEQgKANAFAQIgJALIABAQIgJAJIgBAMIgSATIAAAIIgUAOIgBAHIgSAEIgEACIgFAQIgMgCIgMAFIgDAMIgPgDIASgMIALgSIgXAJQAPgJAJgLQAOgSAQgOIAGgBIAKALIgIAKQAAAAgBABQAAAAAAAAQgBAAgBAAQAAABgBAAQgGgIABgFQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAIAAgCAIQgCAFgCgHIgCABQAAADADACIAFAAIACgDQABgGgDgEIgJgCIgHAJQACAMALACIANgIIgDgPIgEgDQAIgGAJgPIAFgEIAKgOIACgDIgEgdQAKgKABgLQAEgQgLgNIgPgUQAAgdAZgDQAIAEgEAJQgEAJgIADIgHgJQAAgBABAAQAAgBAAgBQAAAAABAAQAAgBAAAAIgFAEIADAKIAMABIAMgVIgEgHIgJgDQgXAHgCAaQgQgLgSADQgIAKgJgDQgIAEgKADQgOADgIgLIgCgGIAFgKQAIgCABAHQAAAEgDADIgCgBQgDgCADgDIABACIABgCQADgGgHAAIgBABQAAABAAAAQgBAAAAABQAAAAAAABQAAAAAAABQgCAIAIADIAJgOIgKgHQAsACAhgHQBsgUAQgOIANgFIALACIAaAaQgDAFgFgIQgHgHgJgHIgBABIgPAAQAPACAOAOIAFAFIAJABIAEAHIgDAFIgEAJQgBgFACgEQABgHgCgDQgIAMgCARQgBAHgEAHIAAABQgGAFAFAEIAVgjIAGAHIAAABIgOARIADgNIgRAcIACAJIgIAhIAIgDIAFgQIABgEQABARADAPQAJgLgBgOIAMAfQADAIAHAKQADADACAAIgKgaIAOAKQAAABAAAAQABAAAAAAQAAABAAAAQABABAAAAQgBAAgBAAQAAABgBAAQAAAAAAAAQAAAAABABQAGACAJAAIACAAIASgCIAMAZIgBAEIgEAGQADgGgCgHIAAgBQgFAAAAAIIAAAJQgDALgIALIgCADIAAACIABAAQACAAAHgHIgFAHQAHgDABAFIAAACQAJgSAEgTIAAgDIACgGQACgKAEAJQAHgFgDgJQgFgJgGg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AAgBAAAAQgBAAAAABQAAAAgBAAIgJALIAEgIIgIAEIADgSQAcAMAeAKQC0AuBsADIgHACIgHANQACAKAIADQASAJAUgNIgJALQgEAWATAHQAMABAIgKIAEgEIAAgMIgQgHQgIAAgDAHIgBADIAHALIAHgEIAEgCIAAgBQAAgKgHADQgCADAAADQAAADAFABQgJACAAgLIABgCIAPAAIAEAMIgOAKQgGgCgFgDQgGgHgDgIQAFgMAPgHQALgFAKAHQAQAKAIAWQAHASgIAMIgbgQQgOAFgDAPIACALQAPAHALgHIAAgSQgHgHgHAIIgFAIIABACIADAFIgIgCQgDgNALgJQAQgDAJATQACAGABAHQACATgMANIgFgOIgNgGIgLAGIgBAQIAMAFIAIgOIgFgDQgDgCgDACIAIgGIAKASQgEADAAADQgBAMgJADQgDABgGAFQgTAOgIAEIACgDQgGgFAFgHQAFgGABgIIgCgIIgGAHQALgSgDgUIgHAHIAAgBQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgDABgCgGQgCgGAAgIQAAgIACgGQACgGADAAQADAAABAGQACAGAAAIQAAAIgCAGQAJgUgNgVIgJARQABgagNgVIgBAOIgagcIAAAKQgIgUgWgCIAFAKQgRgSgRgGIAFAQQgNgQgSgGIgCACQAFAKgKgFIgEgBQgKAFgMgEQgNgCgHABIAIAIIgbgFQgPgXgZgCQgJAEgHAFQgGACgCAHIAJAMQAQgDAEgRIAAgBIgLgBIgIAKIACABQAHACABgIIgBAAIgCAAQgCAAAJgEIABAAQADAHgIAGQgKAHgFgHQABgRASgBQAYABAMAUIgLADIAEAEQgDADgLgCIgaAHIAOAFIgiAWIAdgWIgCAAQgVgDgIAXIgBAGQADgBADgBQAJgCgNAJQgGADACAFQAJADADgGIADgDQAcgaAlAOQgUAAgLAOIAEAFQALAMAOgBIAGgFIACgGIgGgKIgPAAIgBAIQABAHAEgDQAGACgCgGQAAgBAAAAQgBgBAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIAAABQgIgEAMgBQAGAAgBAHQAAADgCAEIgYgJQAIgQAXADQAeAHAaARQASAMgDAXIgCAFQAFAYgBAdIAAACQAAAqgfAgIgIgPQgCgDgBgCIANAAIgKgDIAJgBIgLgHIAHACQADACACgFIgBgCIgEAAQgEgBABgFQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQgBgGgCgBQgDgGACAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAABABAAIACgBIAAgCIgDgDIADgSIgEgGQgBgJAGgMQAMgRgFgSIgIgHIAFAPQgCARgSAEIgQACIgFAAIACgDQgCAEAIgFQAIgFADgFIgPAHIAAABIAGgNIgSATIABgHQAIgKAJgIIAAABIAGAEIAEgCQAGgCgEgFQgDgEgFgCIgZAdIgBgBIgBgGIAMgMIgPALIgCAHQgEgIAJgIIAKgIQAGgFgDgFIgDgFQgDgDgDABIgCABIgEALIAGAEIgPAYIAGAMQgNgGAGgQQACgDACgCIgIAFIgBAGQgCgCgCgGIAEgQIABAAQADAAAEgCQACgDAAgFQAAgEgCgDQgEgEgDABQgDgBgDAEQgDADAAAEQAAAFADADQADACACAAIgHAQIALAXIgPgOIASAWQgJgDgIgFQgHgGgDgLIADgLIgEgCQgHgFgDAJIACAJIAHADIAFALIAIAHQAGAFAHABIAAAOIgKAOQgLATgBAaIgDAIIABABIALgWIAQgMIgGAAIAFgDIAJAAIAHgMQAJgDACAKIgiA3IALgHIgGAOIgEAUQAJgBgHAKQgGAJADALQAKgIABANQACAMAGAKIACgMIAOANQgPAEgLASQgCACAAADQAAAMAMABIgCgOQALgFgHAKIAEAPQAPAHAFgPIgBgDIgBAAIgBAAIgJACIACgNIAKgCIAEALIAKgKIAMAIIgCAUIgGAIQgSAGgHANQgBANAJADIAJgCIgIgIIAJgKIAJAVIAIAEIAIgCQAIgGgEgIIgBgBIgNADIgEgFIABgGIANAEIASgFIgEgRIgIAKQgKAGAAgJIAWgUIASgCIgLgBIANggIAEgBIAIAEIgKAFIALAFIgPABIARAFIgRADIAGAFIgFADIgBABIADAAIAIAAIAGgEIABAAIAAgCIAAgBIgBgBIgDAAIAKgGQgJAAAIgEIgBAAIgMgGIAJgCIgMgKQARAAAGAMIAEAJIABAGQgIAJgNABIANgBIgKAHIAOAAQAFgCgZAQIAAABIAYgMIgFAJIggANQAIADAJgBQAFgDA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AgBQABAAAAAAIABgCQACADgBAFIgEADIgKgHQADgIAHgFIAMAAQALgHAAgNQgBgLgKgDQgHgEgDAHQgHALAHALIAIABQAHgEgDgGIAAgGIgJgCQgFAIAIAEIgDABQgHgNALgGQAJACgBANgAIIxdQAHAIgCAJQgIAOgQADIgHAIQgGALAKAIIAMgCQADgCACgIQABgDgBgEQgMgGAAAQQAHADgDgFIgBgDQAEgJADAMQgEAGgGADIgFgFQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBIABgHIAGgGQARgCAIgPQACgMgHgKIgGgDQgHgGgIAIIgEANIAIANIAHABIAGgEQAFgMgHgGQgCgCgHAFQgFAIAJACIABgBQgDgEADgEIAEABIAAAIIgEAGIgKgHQgGgKAKgGQACgCADAAQAEAAAEAEgAIQzLQALAJADANQgOARgSAMQgHAEgEAJIgCAGQALAZAZgLIAHgKIAAgNIgIgIIgOACQgDAFgCAGQAAAAgBABQAAAAAAAAQAAABABAAQAAABAAABIACACIAJAAIAGgKQgEgBgBADQgDAKgGgIIABgBQAEgIAEgBIAKAFIABAFIgBALIgOAHQgPgBgFgNQABgPAOgGQAVgKAJgQQgDgPgMgKQgcgGgFAYIAGASQAHAFAMgCQAKgDgCgOIgLgFIgHACIgCAHIAMAFIABgBQgJgBADgGQACgCADAAIACAAIACAEIABACIgHAJIgOgDIgFgJQgDgOAOgHIAJgBIAGAAgAIO0uQADAOgIAKIgUAZQgIAKAGANQAEALAMAAQAPgBAHgLIADgGIADgEQAEgMgFgHQgHgHgHABQgMAFgEAJQgFAMAHAGQAGABAFgLQAEgGgBgEQgFgCABAHQABAIgIAEIgBgBIgBAAIgCgFQACgQAOgDQAIgBAEAIQABAQgMAJQgFAEgFgDQgHAEgJgBQgHgEACgKIADgMQAVgPAHgZQAFgPgLgHQgFgDgEgEIgEgCQgVAAgLAWIAAAHQAFAMAIAFQALAGAKgGIAFgJQABgKgMgIQgKgDgHAIIAEALIAMAFIgBgCQgJgEgCgIIAIgFIAEABQAJAFAAAKIgJAJIgNgCIgLgPIAAgGQAHgQARgFQAOAEAGAPgAPAteIADgQIAhALIgDALgAh5ttIgBAAIACgPIAFAaIgIAJQAHgMgFg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");
	this.shape_370.setTransform(1089.4481,1068.2378,1.0566,1.0566);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-3.8,-4.8,0,-3.8,-4.8,22.6).s().p("AgKCMQgwgRgQhIQgPhHAVg4QAVg4AggRIAMATQgVARgOAmQgTAwANA+QANA+AqAOQAgALAhgCIAFAbQgPADgQAAQgeAAgegKg");
	this.shape_371.setTransform(1219.6144,950.5057,1.0566,1.0566);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#A60000").s().p("AEAHaIirikIARgGQgBAJALAEQALAEAJgIIAEgMIgBgBIgBgDQAAgBgBAAQAAAAAAAAQAAAAgBAAQAAAAAAABQADgEgIAAIgBAAQAFgFAHgDIAPAUIgRAPIgEAKIAcAcIALgDQAHgKgBgMQgBgHgFgDIgPgBIgDAMIAJgIQADACABACQAHAKgHAKIgDAAQgUgJgDgQIAQgLIAEgMIgVgSQBQgxCYiJQgTgcgNhbQgHgrgFg5IgBgLIgBgOIAAADQgilABugIIAAAAQAXAWAVAjQggARgVA4QgVA4APBIQAQBIAwARQAvAQAtgJQAYB5APCfQgbBRgbBCIgTAZQheB5huAQQAMgLgHgRQgHgJgKAJQgFAFAEAFQAHADgBgFQgBgFAHgBQAGAOgJAHIgBAAIgMgEIAEgcIgSgZIgQACIgPASIADAQIAfgBQgBgMgOgEIAKAPIgSABIgDgPIARgOIARAUQACAJgGALQgDAGAFAIIAJAEIgXAAIgMAAgADcGCIgGAYQAEAPASAAQAOgJACgSIgFgLIgJAAIgIAPIABABQAFAEgDgHIAJgIQAHALgJAMQgFAFgDgCIgDAAIgIgJIAGgVQgFgXgVgMIgBAAQgWgBgKASIATAdIAPABIAQgMIgFgPgAnRG7IgBgCQgGgFgEgGIAEgDIAiAQQAPgDAIgOIAIgMQgBgUgTgLIgJABIgQAVIABANIARAAIABgNIgGAMIgFgDQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAIAQgVQANAEADAQIABADQgFASgTAFQgOgJgPgCQgGAAgGACQgtg8gtiiQgGgzgFg4QAYhyAVhaQAhACAtgdQAzgfAghDQAfhCgbgrQgbgpgpgVQARgXAbgTQAWgQAdgNQBAA9hAE1IAAABQgrAggEBDQAEArAiB5QAUBKAeAvIgCACQgHAEAAAKIAGANIAFACIAKASIAIACIAOgJIAGAGQhCA+hQBAQgJAFgKAAQgTAAgTgSgAmLFmQgFAHABAJQACALAIALIAEAEQAUAHAMgRIABgBIgCgWIgEgEQgGgHgKAFQgIAEAIAGIACgFIANAEIABAPIgRALIgGgBQgNgMACgOQAGgOAOgJQADgCAFABQAIALAJAHQAFACAHAAQAYgEAIgbIAAgCIgWgUQgMgBgKAKIgHAKQgFAHAGAFIAMAFIAGgKQgBgKgCANQgBAEgEAAIgHgHQAHgOAQgGIACgBIAPARQgHASgUAFQgCACgEAAIgBgBIgRgTIgCAAQgUAAgMATgACvF1QACgFAIgEQAKgGAFACQAMAHgKgEIgHgBQgOAIAIANQAGAEgFgJQgDgEAFgEIAIAAQANAIgGALIgQAGgAksE0IgEgPIAFgFIAEAGQgCAEAAAEQgCAIAFADQAFAEAGgEIACgCIAIAJIgJAGgABpEvIAQgIIAAAAQAKABgDAJIgBADIgMAFgAkgEwQADABABADIgFACg");
	this.shape_372.setTransform(1170.9104,978.5166,1.0566,1.0566);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#970000").s().p("AD5C1IACgVIAXAnQAUAdA/gIQhtDthbICQA0lmAomwgAr3BGQgOgGgHgKQAkgRAggQQA5gdAwglIABAAQAHAKAHACIgBABIACAAIAIAAIAAACIgMAJQiGBbgbAAIgDAAgApAATQDDgFCDgaIgKAcQheAYjRAEgAjug3IgMgFQALgEAGgIIAEgQQAtAWAqALQAgAHAfAEQgCAMgKANIgGAAQgoAAhlgkgApCgiIABgBIgBABgAp2iCIgHgPIgJgXIgIgYIgEgMIgEgRIgGgYIAAgCIgBABQgch4gPi+QAoElBBCugAjfoiQAECxgFBtIgCAZIgBAWIgBAVIgCAMIgCAPIgHAngAFmiXIAGgDIAAgKQgFgbgXAEIgFAGIgEgGIAOgOQgJACgIAGQgegvgUhKQgih5gEgsQAEhDArggIgZA0IADAVQAEAgAAgNQABAKgBAIIADAQQAUBnAOAsQAFATAHAPQAcBMAnAcIgRAWIgGgGgAFZikIABgEIgEABQgBgDgDgBIACgKQAGgDAFAHQADACADAFIABALIgFAEIgIgJgAMhjzIAAAAIAAgBICXiFQAJgegChMIgCgzQgCgGAAgKIAAgCIgCgRIAAgIIgBgLQgbgngFhzQADjFBKgfIAVAAQAJAGABARQhuAIAiE/IAAgCIABANIABAMQAFA5AHArQANBcATAcQiYCJhQAxIgGgHIAFAIQgHADgFAFIgFABIgQAJIgDgDIAAAEIgRAGgAmon7QhsgDi0guQgegKgcgMIAAgBIgBABQg/gdg2gpQjniXCagCQASAAAYACIgeADQhVAKAyApQC3CWDjAgQB7AeBxgPQAagEAagGQBmgYBPgzQA6gmBviAQArATilCPQgNANgWAOQgVAOgdAOIgCgDIgCAAIACAFIgMAFIgBgBIAAABIgfAQIgBAAIgKAEIgGAEIgNAFQgQAOhsAUQgbAFghAAIgRAAgAEbu1IAMgGQArApgFB5QgGB4gsBeQBAk1hAg9g");
	this.shape_373.setTransform(1104.6745,1028.8274,1.0566,1.0566);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#730000").s().p("Al9gIQApgLAEAKIgMAGQgcAMgWAQQABgTAQgOgAGDgYIAFAAQAMADgIAUQgBgRgIgGg");
	this.shape_374.setTransform(1171.3798,928.8485,1.0566,1.0566);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#F0BEA6").s().p("AgTBJQgrgMgkgbIgOgMQADh1AdAbIADgHICeAHQAdgMADBmIgMAIQggAXg4ATIgPAEIgRgDg");
	this.shape_375.setTransform(1171.5972,914.6903,1.0566,1.0566);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFCC00").s().p("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gAlfA5IAGgGIgCgEQgDAEgBAGgAmXAbQgIALAJANIADgXIgBgBIgBgCIgCACgAm9AhIANAIIABAAQADAAACACQAGAGAHgEIgGgIIgBgCIgNgEgAmfAXIAAABIgBAEIgBADIABABQAFgGADgGIACAAIgBgHgAmxASIACAJIALAEIgPgWIACAJgAuFBuIAIgIIABgVIASgfIADglIAJgIIAUguIACAFQgEASgHASQgEAKgJAGIABAHQAHAWgSAFIAFAIIgEAFIgMAWIgDATIgHAHQgBABAAABQgBAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAgBgAsqBmIAOgVIABgNIAGgHIAWgwIAHgJIAAAMIgYAqIgFADIAAAVIgNAPIgFAOgAF5AmIACAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAKgEAFgLQAGgGAHgBIACAAIAGABQAFACABAIQgCAPgSgCIgCgCQgFgKALACIABAAIgBAEQgCAAgBAAQgBAAgBAAQAAAAAAABQABAAABAAQABAHAFgCQAEgCACgEIABgDIABgIIgCgDQgHgBgEAEQgKAKgNALIgDABQgFAAABgHgAJQAYQADgLALgDQAOAAAKAJQALAMAPAAIgBACQgLABgIgHQgMgLgRgDQgKADgCAIQACAHAFAEQASAEAAgNQgMgEABAGQABAGgEgHQgBgEADgCQAPgCACAKQgBAIgHADIgFAAQgPAAgFgQgAFQAjIAAgIQgJAEgMAAQgEgEgBgHIACAAIADAGQAEABACgDQAKgDAIgHQAKgDAFAJQACANgLAHIgDAAQgEAAgCgFgAFYAUIgDADIAEABIgHAHQAAAFAEgCQAFgCAEgFIAAgDIgCgFIgDAAIgCABgAKjAmIgGgEQgGgHACgIQAGgNAOAAIANAKQgJgFgKgBQgJACgCALQADAPAOgEIAEgDQABABAAgBQABAAAAAAQABgBAAAAQAAgBABgBIgCgDQgDgCgFAEQgIABADgKIACAAQAOABACAMQgGAIgKAAIgFgBgAIJAlIgBgBQgFgHADgJQADgHAHgCIAKACQABAAAAABQABAAAAAAQAAAAABAAQAAABAAAAIACADQAFALALAFIAQABIgUAAQgFgEgDgFQgGgIgJgEIgHACIgEAGIAAAGQAAABAAABQAAAAABABQAAAAAAABQABAAAAAAQAIADgEgJIAAgCQALgBgBAKIgDABQgEAEgEAAIgFgBgAITAfIAAACIABgEIgBACgALKAdQgEgFgFgEQAJAGAJADQAAAFgDAAQgCAAgEgFgALvAcQgHgBgCgJQADgOAOgGIAJACIABAAQALAPAQAFIACACQgIACgIgGIgQgQIgGgCQgKAGgFALIAEAGIAHABIAGgEQgEgJgDAFQgEAFAFgKQAJAAABAMIgCABQgDAEgGAAIgEAAgAMwAXQgHgKACgLIAOgIQADAAADACQAMAEAHALIANAAQAFgJAHADIgLAJIgPAAIgFgGQgHgJgMgCQgLAGAAAIQAAAJAJAAIAFgDIAHgFIgDgDQgGgGgEAHIgCAAQgEgCAIgFQAHgBAGAGQACAMgMADgAErABQgCgBAAgCIAAgEQAFgNAIALIAAABIgBABQgFgJgDAJQAAABAAABQAAAAAAABQAAAAAAABQAAAAABAAQAEACAGACQACgCAEgDIABgIIgEgFQgEgFgGgCIgNABIgFgFQgIgHAFgGIAJAPIAPAAIAFACQAIAEABAJIgDAMIgFAEIgJAAQgEgCgCgDgArogwIAAABQgDAagSAVQACgaATgWgAnjgSIgWgcQgQAFgJgNIARAFIAGgCIABAAQAIAEAIgJIABgCQABgEAAgJQgCgMAFgHIAKANQACgQAIgOQAFAFADAKQANgKAOAGQgBALgKAIQAPADAFALQgRgBgLAKQANACAAAJQgHAMgOgFQgSgRgYAGIgBAAQAKARAOALIABABQAKgDgEgLQgDgDgDACQgFAAAFAEIABAAQgFAIgBgOIADgDIAHAAQAJAGgHAPgAnVguQAIAIAJAAQAIAAAEgFQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgSgGgOgJIgFACQgFAAgDAEQACACAFgBQAGACAGAFgAnWg/QACADADACQAEACAHABIADgCQAIgJAPgBIgEgCQgDgCgDACQgJgDgLAAgAnjhHIAAAGIADAEIAAgCIgDgJIAAABgAnjhQIAAAAQAGAHACAKIAKgJIgCgVIgGAUIgBABIgKgLIABADgAm1hcQgFACgFAFQgIAJAEAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAgBQAIgFAGgLIgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABgBAAgAnQhkIACAYIABAAQAMgHAEgLIgOAFIgFgLgAlngcQgMgIgGgJIABgKIAHgKQADgEAIgCIAGAAIgBgCQgBgEAAgEIABgGQAGgGAHgEQASgGALAPIgEAOIgJAEIgEgBIgIgEQAFgGgIgCIgBgCIAAgCIANgBIgCACIgHAAIAAABQABADAEADQABADADACIAJgDIABgBIAAAAQAGgKgIgFQgKgHgKAFIgMAOIAAADIAFAKQAEAGAIAEQATADAOgBIgXACQgFAAgFgCIgKgFIgCgBIgMgGQgKAFgFALIAAACQAEAMALAHIAHgCIADgFIAAgBIABgDQgCgJgKABIgCADIACACQABABAAAAQABABAAAAQAAABAAAAQAAAAgBABIgCADQgLAAAKgQIABAAIALAEQABABAAAAQABAAAAABQABAAAAABQAAAAABAAIAAAJIgBAFIgMAFgAEegrQgEgDACgJQACgDADAAQADgCAAgEQAHgBACAHIAAAGQgDAIgGgFIgBgBIACgBQAGACgBgIIgCgDQgFACgEAEQAAAIAGAFIAEgBQAJgGACgQQgEgFgGgEIgPgMQAWABAGAUQgCAQgKALQgHAAgGgGgAtEhDIAKgNIgNAjgAkqg4IAFgJIgBgPQADACACACQAFAKgFALIgHAHgAochRIgHgOIAOAOIgFAOgAPAhsIgJAAQgMgEgFgMQgBgcAdgDIAHAGIAKAXIgMAQIARATIgGAIQgNgIgFgRgAOsh+IAPAMIAJgKIgOgJIAPADIAGAGIgCgQIgIgIQgWADABATgAklhXQgJgRAOgLIgEAeIgBgCgAPXh0IALgGQAGABAEADIgGAHIgEgGIgIAFQAAAEgCABIAAABIgBgKgACDiOQgOgNADgQIAKgPQAHgKAJgDQAGgCAGABQAPACAOAJQATgGAGgRIgBgEQgEgQgMgEIgRAVQAAABABABQAAAAAAABQABAAAAAAQABABAAAAIAFACIAHgMIgCANIgRABIgBgOIAQgUIAKgBQATAKAAAVIgHAMQgJANgPAEIgigRIgEAEQgQANgIASIANAUQAKgBAHgGQAGgHADgHIgCgIIgBgCQgIgHgHAJIAAAEIABADIgEgDIAGgNIALgCIABACIAJAKQgBAagbAJIgBABQgDAAgHgGgAOWiYIgKgDQgEgIADgHQAFgLgBgIIgRgVIgSAPIAEAOIARgBIgKgPQAPAEABANIgfAAIgDgPIAOgTIAQgCIASAZIgEAdIANAEIABgBQAIgHgGgOQgHACABAFQACAFgHgDQgEgGAFgFQAJgIAIAIQAHASgMALIgGAEgAoYibIABgFIg5gCIAYgBIAGgOIgHAGIAGgYIgQAJIAAACIAAAAIgFAOIAPgKIgTAQIAEgQIABgCIAAgDIgJADIgBAAIABgBIBUg1IgUABIABgDQAfgHAIgOQgCADgGACQgJACgHgDIAggNIAFgJIgZAMIAAgBQAZgQgEABIgPABIALgHIgNABQANgCAIgIIgCgGIgEgJQgGgMgRAAIANAJIgJADIAMAFIAAAAQgHAFAIAAIgJAGIACAAIABABIAAABIAAACIgBAAIgGADIgHABIgEgBIABgBIAFgCIgGgFIARgDIgRgGIAPgBIgKgEIAKgGIgJgDIgDABIgOAgIALABIgRACIgXAUQABAIAKgFIAIgKIADAQIgRAGIgNgFIgBAHIADAFIAOgDIAAAAQAFAJgJAGIgHACIgJgEIgJgWIgIALIAIAIIgJABQgJgCAAgNQAHgNASgGIAHgIIABgUIgLgIIgLAKIgEgLIgKACIgBAMIAIgBIABAAIACAAIABACQgFAQgQgIIgEgOQAIgLgLAGIABAOQgMgBAAgMQAAgDACgDQALgRAPgEIgOgNIgCAMQgFgKgCgNQgCgMgJAIQgDgLAFgJQAHgKgIABIADgVIAHgNIgLAHIAig3QgCgKgJADIgHAMIgKgBIgFAEIAGAAIgQAMIgLAWIAAgBIADgJQAAgZAMgUIAKgNIAAgOQgHgBgHgFIgIgHIgFgLIgHgDIgCgJQADgJAIAFIADACIgDALQAEALAHAGQAHAEAJAEIgSgWIAQAOIgLgYIAHgPQgDAAgCgDQgDgDAAgEQAAgEADgDQACgEADAAQAEAAADAEQADADAAAEQAAAEgDADQgDADgEAAIAAAAIgEAPQABAHADACIAAgGIAJgFQgDACgBADQgHAPAOAHIgHgMIAQgYIgGgEIADgLIADgBQACgBAEADIADAEQADAGgHAEIgJAJQgKAIAEAIIACgHIAPgLIgLAMIAAAGIABABIAagdQAEABAEAEQADAFgFACIgEACIgGgDIgBgBQgJAIgIAKIAAAHIASgTIgHANIABgBIAPgHQgDAFgJAEQgIAGADgEIgDADIAFAAIARgDQASgDACgRIgGgPIAJAHQAFASgMARQgHALABAKIAEAGIgCASIACADIAAACIgCABQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgDAAAEAFQABACABAGQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAQgCAEAEACIAEAAIABABQgBAGgEgDIgHgCIALAIIgIABIAJADIgMgBQAAADADADIAIAPQAfggAAgqIAAgCQABgegFgXIABgFQAEgXgTgMQgZgSgegGQgXgEgIARIAXAJQADgEAAgDQAAgHgFgBQgMACAHAEIAAgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAABAAABQAAAAABABQABAFgFgCQgFAEgBgHIACgIIAOAAIAGAKIgCAGIgFAEQgPACgLgMIgDgGQAKgNAUAAQglgOgcAZIgCADQgEAHgIgDQgDgFAGgDQAOgJgKACQgCABgEAAIABgFQAIgXAWADIACAAIgdAWIAigWIgPgFIAbgHQALACADgDIgFgEIAMgEQgNgTgXgBQgTABAAARQAFAHAKgHQAIgGgEgIIgBABQgIAEACAAIACAAIABAAQgBAIgIgCIgBgBIAIgLIAKABIAAACQgEARgQADIgIgNQABgGAGgDQAIgEAJgEQAZACAOAWIAcAGIgJgIQAIgBANACQALAEALgFIAEABQAKAFgFgLIACgBQARAGANAQIgFgQQARAGARASIgEgLQAWADAIAUIAAgKIAZAcIABgOQANAVAAAaIAIgRQANAUgIAVQABgGAAgIQAAgJgBgFQgCgHgDAAQgDAAgBAHQgCAFAAAJQAAAIACAGQABAFADAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABgBIgBABIAIgHQADAUgMASIAHgIIABAJQAAAHgFAHQgFAHAFAFIgBACQAIgDATgOQAFgFAEgBQAJgDABgMQAAgEADgCIgKgSIgIAFQAEgBACACIAGADIgJAOIgLgGIAAgPIALgGIAOAGIAFAOQAMgNgCgTQgBgHgDgHQgJgSgQADQgLAJADANIAJABIgEgEIgBgCIAFgJQAHgIAIAIIAAARQgMAIgPgIIgCgLQADgOAPgFIAaAQQAJgNgHgRQgJgWgPgKQgLgHgLAFQgPAHgFAMQAEAIAGAGQAEAEAGACIAOgKIgEgMIgOAAIgCACQAAALAJgCQgFgBAAgDQAAgEACgCQAHgDAAAKIAAABIgEACIgGAEIgHgLIABgDQACgHAIAAIAQAHIABAMIgEAEQgJAJgMgBQgSgGAEgWIAIgLQgTANgSgJQgJgEgBgJIAHgNIAGgCIAKAHIgJAOQgHgDABgIQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBIABgBQAGAAgCAGIgCACIgBgCQgCACACADIACABQADgEAAgDQAAgHgIACIgGAKIACAGQAIAKAOgCQAKgDAJgEQAIACAIgJQASgDARALQABgaAXgIIAKAEIAEAGIgMAWIgNgCIgDgKIAGgDQgBAAAAABQAAAAgBAAQAAABAAABQAAAAAAABIAHAJQAHgEAEgIQAEgJgHgEQgZADgBAcIAPAVQAMANgEAQQgCALgKAKIAEAdIgBADIgLAOIgFAEQgJAPgHAGIAEADIACAPIgNAIQgKgCgDgNIAHgIIAJACQAEADgCAHIgCADIgEAAQgEgCABgEIABAAQACAGACgFQACgHgIAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQgCAFAHAHQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAIAHgKIgKgLIgGABQgQAOgNASQgJALgPAJIAWgJIgKASIgSAMIAOACIAEgLIAMgFIAMACIAFgQIADgCIASgEIACgHIAUgOIgBgIIASgTIABgMIAKgJIgBgQIAJgLQgFgQAJgOIgFgDIgBgSQAAgHAIgDIACgJIgOALIATgjIgQAJQAJgFAFgJIAAgCIgIgNIAJACIAIAGIABgYIAEAAIAAAMIgGAkIACgRIgHATIgCAdQAHgXAJgVQAHgSgJgRIAEgBIADAJIADgKIAHgBIAEAFIACgGIAGgBQAFAOABAQQADAagBAcIgIALIgBAkIALgOIAAACQgBAQgIAMQADgIACgLIgUAcQAIgQADgRQADgMgEgLIgFAVQgGAagKAaQgQAsgiAbQAkgjAPgvQgSAsgjAmIANgBIAAgCQAJgGAIgLQAGgJAEgKQAMgXAJgZIACgBIgdBXQARgaAJgeQACgGADgGQgKAugcAmQAGAIAIADQAGABABAEQAC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gNgApcovQgCAFADgDQAHgDgIgBIAAACgAm2pAIAHAEIAFAPIACgVQANAKgTgYIADAOIgWggIAGAjIgBAAIgGgNQgFgUgSgNIAJAeIAEAHIAIABIAOAYIgBgaIACACQAJAFAAAIIgBgBIgEgFQgEgFgBAAQgCAAACAFgApyo4IgDAJIADgBQAEgGgEgEIAAACgAlko4QAAADgDABIgBABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAIALAAIAAgMIgEgDQgBAAABAHgAnWpBIACAGQABAHAHgEIgBgNIgWgYIgBAAQAEAPAKANgAmlpNIAGASIgGgdgAoZpVIAJAHQAFAEACAFQAGAJADgJQgDgHgEgFQgIgGgFAAQgDAAgCACgAo/pYIAMAGQAGAEAHABQAEACAFAAIgPgNIgBgBIgUgCgAn0pPIAEABQADgDgDgDIgbgPIAIAOQAEAFAEAAIACAAIAFABgAotphIgBABIAGAGIANALIACAAIgDgJIAAgBIACgCQgEgHgIAAIgHABgAj5phIADAMIAAABQAFgMgCgSgAnWpxIAHACIgBAEQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQAIAIADALIgDgOIgHgGIAFgBIgTgPgAn7plIALAPIAAgCQANADgHgNIgJgGQgFgFgCAAQgDAAACAIgAnWpYIgFgXIgYgGQgGgBAFAJIAOAKIgNgSIASAVIALAIgAospnIAjAPIgGgKQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQgCgEgDgBQgFgDgGAAQgGAAgGAEgAozpdIAAgBQgGAAAGABgApPpfQAFACADgCIAEgBIAHABIgigIQADAFAJADIABAAIACAAgApFppIAFAFQANAHADgHIABgIIgVAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAABAAgAqHprIgLAIIAkgEIADgGgAoGpoIAGABIAAgBQgFgFgBgDQgKgNgPAEIAHAKIgKgFIgbABIATAGQASgEALAKIAHgBgAj/qAIgFAGIAAAQIAEgHIAGAAQACAAADgIIABAAQABgGgCgFIgDADQgDAFACAEQABAFgFAAQACgFgDgJIgCgGgApcpsQAIADAJgEQAGADgFgEIgcgCIAKAEgAoFpyQAGAKABgJIABgBIABAAIACACQABgEgCgEIgR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ADgQIADgKIABgBIABAAIAAAAIgEASIAIgDIgEAIIAKgLQAAAAAAAAQABgBAAAAQAAAAABABQAAAAABAAIgCAjIANgXQADgHAEAAIAEAiIAEgTQACgJAHABIgJAbIgGADQACAbgSAWIAEgqIABACIgBAcIAFgRQgDgNgBgLIgBABIAAACQgBAGgGAHIABAFIgHAMIgDAJQgCAHgFACIAAgTIgMAUIACADQACAKAIAGIAEACIgDgJIgDgKIABgBIAKAWIADABIACACIACABIACADIADAEIADACIAAAAIABgBIACAAIAUAVIAEgKQgJgFgFgEIgUgRQgDgDgEgBQgHgFABgFIACAAQAEADAFACIAFABQgGgGgCgEIgCgFIABgDIANASIAAAJQAIAIALAGIADABIAAgBIgEgGQgHgEAAgDIACgBQADADACAFQAEAGAHgBQAAgGgHgEIgDgDQgGgHgEgCIAAgGIgCgCQgEAAgDgBIgCgCIAQABIgCgCQgFgFAAgJIABgBIAOAbIACAJIAGAHIABAGIgBACIgCABIAEAJQgGAFgDAJQgFANgKABIAMgPIgNgCIgGANQgGAKgMALIgBABQAJgEAHgHIADgLIANgJIgKAMIgFANQgLAIgPAIQgHADgFAFQgGAIgGAEQgRANgUAAQgHAAgIgCgAtLnwIACAAQgBgCgGgCQgGABALADgAropAIADABIAFADIACAAIgNgPQgDAEAGAHgArypOIgDgHIgFgBIgBAAQgMgGgFgJIABANQAAABABgBQANAGALAEgAsfpvIAQAWIgCgUQgBgHgDAHIAAAAIgBAAIABgTgArepsIgCgBQAKAPgIgOgAsdqNIgBAXIAQgogAsQqHIgCAQIAOgWIAEgDIABAAIACgOgAsBp/IADgIIAAgCIAAgCIgDAMgAsDqrQgJALgBAOQgDAPAVghIABgkIgKARIgFADIAAABIgBABIgOAZIARgRQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAgAr3qjQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIgBACIgBAOIALgXQACgFAFgCIADAbQAEgSgEgNIgDgLgAsJrBIgBABQgSARAGgBIAKgHQACgFADgEIABgCIgDABgAGeoYQACgHAHAAQADAFgBAGQAAABAAAAQAAAAAAAAQAAAAAAgBQgBgBAAgBQgIgKAAAMIAAAFQgKgGAIgDgAuPoZIAKgEQAHgCAGgEQAPgKALgTQAQgbAAgxQAAgxgQgeQgMgVgPgKIgDgCIAAgGIADAAQAYAIAQAgQARAeAAA0QAAAzgQAdQgQAcgXAIQgMAFgMAAIAAgKgAuPodIgBAAIAAgIIACAAIAIAAIAAAIgAt/o7IAHgCIAMgGIgMAPIgJAHgAgbouQgJAAgIgDQgUgGgOgZQgOgZgBgqQgBgpANgXQANgWAOgHIACAKIgMARQgOAXACAqIAAACQABAoAOAZQAHAOAKAHQAHAHAOAHIgEAAgAuJo/IABgHIACABIANgMIAEgEIgEgBIgHgEIgCAEIgDACIACADIgBAEIgDABIABgMIABgCIAAgCIACgCIADAAIADgCIAEACIAIAFIABABIgBACIACAAIgCAEIgIAIIgKAJIgFACgAgppOIgCgDIgGgFIAGABIADAAIAJAQgAg7pmIgKgEIAEgLQgGgMALAIIAAAMIAFADIAEAFIgFANgAgkpqIgIgRIgDgEQAAgCABgEIABAAIAAgBIABgBIAAgDIADAAIADgBIABAGIgDABIAEAKIADASIgDgCgAEIp9QBHgXAniQQAmiRgDhRQgDhRgngeIAQgEQAoAeAHA9QAHA9gnCjQgnCihfAyQABgIgBgLgAt8pvIgBABIgBgFIAAgYIACgFIACgCIABAAIAIgBIABgVIgEAAIgBABIgCAAIAAAHIAEAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAEgBABIgBAAIgBAAIgCAAIgBABIgBAAIAAgCIgBgCIgCgBIAAgLIACAAIAAgCIABgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAAAAAIAIgBQAAAAAAABQAAAAAAAAQABAAAAAAQAAABAAAAIABACIABgBIABAEIAAAYQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIgLABIgBAXIAJgFIAAgIIgDAAIgCgDIACgDIAFgCIABABIABACIAAAKIABABIAAADIgBACIgCADIgLAFIgCABgAtjqMIAHgIIgBgJIADACQAGAFgEAIIgEACIgIAUgAlDqFQAAgGADgDIAAABIAAAEQgBACAAAAQAAABAAAAQAAABAAgBQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBQAAAAABgBIgCgEIgDAAIAHgFIACAJIgGAIIgBABQgEAAAAgEgAhMqSIAKgSIAAAAQAAgEgBgEQgEgKAIgGIABANIADAGIgBAIIgJARIAFALgAEEqQIAAgBIATgHQAHgDgCgIIgJgLQgHAAgDAFQgDAJAIAEIAGgDIgBgHIACgCIABAAQAFANgMADIgIgFQgIgPATgGQAOAHABANIgEAFQgJAFgJAEIgEACQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBgAgvqQIgCgBIgCAAIgDgDIgEgHIACgCIACgCQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIADgDIAFgCIAEgCIABAGIgEACIgBABIgBABIgCABIABAFIABACIACgBIAFgDIABAHIgBACIgCABIgDACIgCgBgAtlqmIAEgKIgGgOIABgHIgDgIIAIACIAAAKIABABQAMAOgMAMIgBACIgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBgBgAElqzIgGgHIADgQIAMgHIANAEIAQgHQAGgLgGgJIgIgCIgKALIgBACQACAKALgGIABAAQAEgGgEAEQgBAAgBAAQAAAAAAABQAAAAAAAAQAAABABAAIgBAAIgFgGIABgDQAJgDACAGQABAKgLACIgLgEQgCgWAVAAIAHAJQAHAOgQAJQgNAHgNgHIgJAJQgFAJAJAEQAKABACgIQAAgGgEABQgKACAJABIAAACQgCAFgDgEIgCgEQAEgMALAKIAAAMIgGAEIgFABIgHgBgAt6q3IgEAAIABgHIADAAIAAgCIgCgGIACgPIACACIAEAUIAAACIgBABIABACQgEADgBAAgAg2rXIADACQACAFgBADQgGAMgIACgAOZrkIgBAAIgGABIAAgBIABgBIAEgGIgDgEQgGgCAAAKQADgEACADIAAADQgCACgFgBQgHgLANgEQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAHAJgBgLQAAgFgHgGQgKAEgEAMQgDAKAHACIgGAAIgCgFIAAgBIABgMQAGgKALgDIAEADIAGAGIACAFIgBAaQABAOAMAEIAEgCQAGgGgCgKQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAABIgBADIABACIAAA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");
	this.shape_376.setTransform(1104.72,1044.6793,1.0566,1.0566);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#F10000").s().p("ABCmVIBRIrIAcFeIgyD6gAhOq8IgoQVIgGCbIgyD6gAgiiVIAKpYIAxAAIgCAuIglMag");
	this.shape_377.setTransform(1392.2542,288.3971,0.4963,0.4963);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#CC0000").s().p("AB9H0IgcleIhIuDIAyAAIBkXbgAhABbIAmsaIAaC4IAZQtIgxDIgAiuH0IAGibIBexGIgKJYIgMODg");
	this.shape_378.setTransform(1394.7359,288.3971,0.4963,0.4963);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#ED0000").s().p("AA9ImIgawtIgai4IACguIAyAAIBIODIhRorIA7SDgAg8LuIAMuDIAUDwIAnKTgAhcq8IAEgxIAyAAIheRGg");
	this.shape_379.setTransform(1392.949,288.3971,0.4963,0.4963);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#A00000").s().p("AAyApIgyAAIgxAAIgyAAIAAhSQBjAIBkgIIAABSg");
	this.shape_380.setTransform(1393.495,249.112,0.4963,0.4963);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.rf(["#FF2A2A","#AF0000","#8B0000"],[0,0.369,0.894],-9.7,-49.5,0,-9.7,-49.5,128).s().p("AEqLgQk3AAjcjVQjejVAAkuQAAkuDejVQDGjAERgTQAdgCAfAAICdgPQgcAEgcAHIgBAAIgdAHIgVAHQjbBIiIC7QiODEgGD1QgGDzCHDMQCEDNDmBTIglALg");
	this.shape_381.setTransform(1366.4694,198.684,0.4963,0.4963);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.rf(["#FFBFBF","#E30000","#E30000","#8F0000"],[0.004,0.161,0.173,0.718],-4.3,-36.1,0,-4.3,-36.1,114.7).s().p("ADCLcIgngJQjlhUiGjNQiGjMAGj0QAFj0CPjEQCIi8DbhHIAVgHIAdgHIAAAAQAdgHAcgFIA/gFQgQADgPAMQgKAHgIAKQgtA0gkCGQg7DcAAE2QAAE2A7DcQAkCIBBBLQg5gDg5gKg");
	this.shape_382.setTransform(1376.2047,198.8454,0.4963,0.4963);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.rf(["#FC3E3E","#E30000","#8F0000"],[0,0.38,0.718],-37.5,-23.7,0,-37.5,-23.7,105.1).s().p("AghLpQhAhMgkiIQg6jbAAk3QAAk1A6jcQAkiHAsg0QAJgKAJgHQAPgMAQgDIAHAAQAPADAPALQAKAHAKALQAsA0AkCHQA7DcAAE1QAAE3g7DbQgkCIhEBMIgeABIgggBg");
	this.shape_383.setTransform(1393.9045,198.8702,0.4963,0.4963);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.rf(["#FC3E3E","#E30000","#8F0000"],[0,0.38,0.718],-26.1,-14.8,0,-26.1,-14.8,88.6).s().p("AjJIeQA7jcAAk2QAAk2g7jcQgkiGgsg0QgQgSgQgIQgPgLgPgDIARAAIBMAIIAOACQAfAFAdAIQCaAqB7BzQCxCkAxDwQAxDwhdDkQhdDhjKCAQg9AnhIAXIgJgBQhIAShHAFQA+hLAiiAg");
	this.shape_384.setTransform(1411.1184,198.8205,0.4963,0.4963);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#990000").s().p("ACHIVQA7jbAAk3QAAk1g7jcQgkiGgsg1QgKgKgKgIQAQAIAQASQAsA0AkCGQA7DcAAE2QAAE2g7DcQgiCAg+BLIgUACQBEhNAkiIgAgtLpQhChMgkiIQg6jbAAk3QAAk1A6jcQAkiGAtg1QAJgJAJgHQAPgMARgDIAOAAQgQADgPAMQgJAHgJAJQgsA1gkCGQg6DcAAE1QAAE3A6DbQAkCIBABNIgOgBgADLLSQBIgXA9gnQDLiABdjhQBdjkgxjwQgxjwixikQh8hziagqQCiAoCCB4QCxCkAxDwQAxDxhdDjQhdDijLB/Qg9AnhIAYgAjNLSIgJAAQjlhTiGjNQiGjMAFj0QAGj0COjFQCJi7DbhIIAVgGIAdgHIABAAQAcgIAdgDIAPgCQgdAFgcAIIgBAAIgdAHIgVAGQjbBIiJC7QiODFgGD0QgFD0CGDMQCGDNDlBUIgGgBg");
	this.shape_385.setTransform(1393.8032,198.8578,0.4963,0.4963);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.rf(["#FC3E3E","#E30000","#8F0000"],[0,0.38,0.718],-29.6,-14.6,0,-29.6,-14.6,87).s().p("AlILZQBIgYA9gnQDKiABdjhQBdjjgxjxQgxjwiwikQiBh4ijgoQgdgIgegFIgPgCICOANIAAAAQE4AADcDWQDdDVAAEtQAAEujdDVQjcDVk4AAg");
	this.shape_386.setTransform(1420.8929,198.7213,0.4963,0.4963);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#C57600").s().p("Aj9MFIAIAAIAHABIAnAJQA5AKA5ADIAPABQAfABAggBIATgCQBHgFBHgRIAKAAIAOAEIAXAGQANAIALAKQAdAeAAAqIAAAgQmZgQhih0gAiQuGIBLgCIAyAAQBrABBsAJIAdAdQAPAPAHATQhOAJhAAAQi8AAg9hQg");
	this.shape_387.setTransform(1395.7658,196.3264,0.4963,0.4963);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#E18700").s().p("AkQLdIABAAIAlgLQBiB0GaAQQAAAqgeAdQgdAdACAAQoDgFAajYgADcrTQoVhBAuidQBHgGBHgCQBSBrE2gkQAHARAAAUIAAAhQAAApgeAdQgLAMgNAHIAAAAg");
	this.shape_388.setTransform(1394.7906,198.8454,0.4963,0.4963);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FF9900").s().p("AhIO9QhGgFhGgMIgfgeQgdgdAAgpIAAghQAAgpAdgeQALgLANgHQgaDYIEAGQhIAMhIAFQgyADgyAAQgxAAgygDgACDrvIhMgIIgRAAIgLgBIgLABIg+AFIgPABIieAPIgCgBQgLgHgLgKQgdgdAAgqIAAggQAAgqAdgdIAegdQgvCcIVBBg");
	this.shape_389.setTransform(1392.1549,199.565,0.4963,0.4963);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#580000").s().p("AgYG6IAAtzIAxAAIAANzIgxAAg");
	this.shape_390.setTransform(1393.5322,129.4697,0.4963,0.4963);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#F10000").s().p("ABCmVIBRIrIAcFeIgyD6gAhOq8IgoQVIgGCbIgyD6gAgiiVIAKpYIAxAAIgCAuIglMag");
	this.shape_391.setTransform(991.1042,288.3971,0.4963,0.4963);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#CC0000").s().p("AB9H0IgcleIhIuDIAyAAIBkXbgAhABbIAmsaIAaC4IAZQtIgxDIgAiuH0IAGibIBexGIgKJYIgMODg");
	this.shape_392.setTransform(993.5859,288.3971,0.4963,0.4963);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#A00000").s().p("AAyApIgyAAIgxAAIgyAAIAAhSQBjAIBkgIIAABSg");
	this.shape_393.setTransform(992.345,249.112,0.4963,0.4963);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#ED0000").s().p("AA9ImIgawtIgai4IACguIAyAAIBIODIhRorIA7SDgAg8LuIAMuDIAUDwIAnKTgAhcq8IAEgxIAyAAIheRGg");
	this.shape_394.setTransform(991.799,288.3971,0.4963,0.4963);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.rf(["#FF2A2A","#AF0000","#8B0000"],[0,0.369,0.894],-9.6,-49.4,0,-9.6,-49.4,128.1).s().p("AEqLgQk3AAjcjVQjejVAAkuQAAkuDejVQDGjAERgTQAdgCAfAAICdgPQgcAEgcAHIgBAAIgdAHIgVAHQjbBIiIC7QiODEgGD1QgGDzCHDMQCEDNDmBTIglALg");
	this.shape_395.setTransform(965.3194,198.684,0.4963,0.4963);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.rf(["#FFBFBF","#E30000","#E30000","#8F0000"],[0.004,0.161,0.173,0.718],-4.3,-36,0,-4.3,-36,114.8).s().p("ADCLcIgngJQjlhUiGjNQiGjMAGj0QAFj0CPjEQCIi8DbhHIAVgHIAdgHIAAAAQAdgHAcgFIA/gFQgQADgPAMQgKAHgIAKQgtA0gkCGQg7DcAAE2QAAE2A7DcQAkCIBBBLQg5gDg5gKg");
	this.shape_396.setTransform(975.0547,198.8454,0.4963,0.4963);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.rf(["#FC3E3E","#E30000","#8F0000"],[0,0.38,0.718],-37.5,-23.6,0,-37.5,-23.6,105.2).s().p("AghLpQhAhMgkiIQg6jbAAk3QAAk1A6jcQAkiHAsg0QAJgKAJgHQAPgMAQgDIAHAAQAPADAPALQAKAHAKALQAsA0AkCHQA7DcAAE1QAAE3g7DbQgkCIhEBMIgeABIgggBg");
	this.shape_397.setTransform(992.7545,198.8702,0.4963,0.4963);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.rf(["#FC3E3E","#E30000","#8F0000"],[0,0.38,0.718],-26,-14.8,0,-26,-14.8,88.6).s().p("AjJIeQA7jcAAk2QAAk2g7jcQgkiGgsg0QgQgSgQgIQgPgLgPgDIARAAIBMAIIAOACQAfAFAdAIQCaAqB7BzQCxCkAxDwQAxDwhdDkQhdDhjKCAQg9AnhIAXIgJgBQhIAShHAFQA+hLAiiAg");
	this.shape_398.setTransform(1009.9684,198.8205,0.4963,0.4963);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#990000").s().p("ACHIVQA7jbAAk3QAAk1g7jcQgkiGgsg1QgKgKgKgIQAQAIAQASQAsA0AkCGQA7DcAAE2QAAE2g7DcQgiCAg+BLIgUACQBEhNAkiIgAgtLpQhChMgkiIQg6jbAAk3QAAk1A6jcQAkiGAtg1QAJgJAJgHQAPgMARgDIAOAAQgQADgPAMQgJAHgJAJQgsA1gkCGQg6DcAAE1QAAE3A6DbQAkCIBABNIgOgBgADLLSQBIgXA9gnQDLiABdjhQBdjkgxjwQgxjwixikQh8hziagqQCiAoCCB4QCxCkAxDwQAxDxhdDjQhdDijLB/Qg9AnhIAYgAjNLSIgJAAQjlhTiGjNQiGjMAFj0QAGj0COjFQCJi7DbhIIAVgGIAdgHIABAAQAcgIAdgDIAPgCQgdAFgcAIIgBAAIgdAHIgVAGQjbBIiJC7QiODFgGD0QgFD0CGDMQCGDNDlBUIgGgBg");
	this.shape_399.setTransform(992.6532,198.8578,0.4963,0.4963);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.rf(["#FC3E3E","#E30000","#8F0000"],[0,0.38,0.718],-29.5,-14.6,0,-29.5,-14.6,87.1).s().p("AlILZQBIgYA9gnQDKiABdjhQBdjjgxjxQgxjwiwikQiBh4ijgoQgdgIgegFIgPgCICOANIAAAAQE4AADcDWQDdDVAAEtQAAEujdDVQjcDVk4AAg");
	this.shape_400.setTransform(1019.7429,198.7213,0.4963,0.4963);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#C57600").s().p("Aj9MFIAIAAIAHABIAnAJQA5AKA5ADIAPABQAfABAggBIATgCQBHgFBHgRIAKAAIAOAEIAXAGQANAIALAKQAdAeAAAqIAAAgQmZgQhih0gAiQuGIBLgCIAyAAQBrABBsAJIAdAdQAPAPAHATQhOAJhAAAQi8AAg9hQg");
	this.shape_401.setTransform(994.6158,196.3264,0.4963,0.4963);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#E18700").s().p("AkQLdIABAAIAlgLQBiB0GaAQQAAAqgeAdQgdAdACAAQoDgFAajYgADcrTQoVhBAuidQBHgGBHgCQBSBrE2gkQAHARAAAUIAAAhQAAApgeAdQgLAMgNAHIAAAAg");
	this.shape_402.setTransform(993.6406,198.8454,0.4963,0.4963);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FF9900").s().p("AhIO9QhGgFhGgMIgfgeQgdgdAAgpIAAghQAAgpAdgeQALgLANgHQgaDYIEAGQhIAMhIAFQgyADgyAAQgxAAgygDgACDrvIhMgIIgRAAIgLgBIgLABIg+AFIgPABIieAPIgCgBQgLgHgLgKQgdgdAAgqIAAggQAAgqAdgdIAegdQgvCcIVBBg");
	this.shape_403.setTransform(991.0049,199.565,0.4963,0.4963);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#580000").s().p("AgYG6IAAtzIAxAAIAANzIgxAAg");
	this.shape_404.setTransform(992.3822,129.4697,0.4963,0.4963);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#860000").s().p("ApHLuIGyAAQBlAAgBhIIAAjaQABhKhlABIjHAAIAAhJIK7AAIAABJIjJAAQhkgBAABKIAADaQAABIBkAAIGyAAQj6DIlOAAQlMAAj7jIgAEsJdQgUAAgPgLQgOgLAAgOQAAgPAOgLQAPgLAUAAIEsAAQAVAAAOALQAPALABAPQgBAOgPALQgOALgVAAgApWJdQgVAAgPgLQgOgLAAgOQAAgPAOgLQAPgLAVAAIEsAAQAVAAAOALQAPALAAAPQAAAOgPALQgOALgVAAgAu1AAQAAk8C1jzIAUACIDIAAIAABIIjIAAQgqAAgdAVQgdAWAAAeQAAAeAdAVQAdAVAqABIDIAAIAABIIjIAAQhkAAAABJIAADZQAABJBkAAIDIAAIAABIIjIAAQgqAAgdAWQgdAVAAAeQAAAfAdAUQAdAWAqAAIDIAAIAABJIjIAAQhTgBgOAzQhojEAAjxgALuGDIjHAAIAAhJIDHAAQAqAAAdgWQAdgUAAgfQAAgegdgVQgdgWgqAAIjHAAIAAhIIDHAAQBkAAAAhJIAAjZQAAhJhkAAIjHAAIAAhIIDHAAQAqgBAdgVQAdgVAAgeQAAgegdgWQgdgVgqAAIjHAAIAAhIIDHAAIATgCQC1DzAAE8QAADwhnDEQgPgxhSAAgAlcCoIAAhIIDHAAQBlAAgBhJIAAjZQABhJhlAAIjHAAIAAhIIDHAAQAqgBAdgVQAegVgBgeQABgegegWQgdgVgqAAIjHAAIAAhIIDHAAQAqgBAdgVQAegVgBgfQABgdgegWQgdgVgqAAIjHAAIAAhJQAAgegdgVQgYgRgfgEQDEhlDsAAQDtAADFBlQgfAEgXARQgdAVAAAeIAABJIjJAAQgpAAgdAVQgeAWAAAdQAAAfAeAVQAdAVApABIDJAAIAABIIjJAAQgpAAgdAVQgeAWAAAeQAAAeAeAVQAdAVApABIDJAAIAABIIjJAAQhkAAAABJIAADZQAABJBkAAIDJAAIAABIgAEsgxQgUABgPgLQgOgLAAgPQAAgPAOgLQAPgLAUAAIEsAAQAVAAAOALQAPALABAPQgBAPgPALQgOALgVgBgApWgxQgVABgPgLQgOgLAAgPQAAgPAOgLQAPgLAVAAIEsAAQAVAAAOALQAPALAAAPQAAAPgPALQgOALgVgBgAInq/IAAhIQAsAhArAngAp9q/QArgoAughIAABJg");
	this.shape_405.setTransform(1194.6092,256.4207,1.0026,1.0026);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#CC0000").s().p("ACWMfQhkAAAAhIIAAjaQAAhJBkAAIDIAAIAAhJIq7AAIAABJIDIAAQBkAAAABJIAADaQAABIhkAAImzAAQgtgkgqgqIgDgCIgDgEQhohqhBh6QAOgzBTAAIDIAAIAAhJIjIAAQgpAAgegVQgcgVAAgfQAAgeAcgVQAegVApAAIDIAAIAAhJIjIAAQhjAAAAhJIAAjZQAAhJBjAAIDIAAIAAhIIjIAAQgpAAgegWQgcgVAAgeQAAgeAcgWQAegVApAAIDIAAIAAhIIjIAAIgTgBQArg7A2g2IAhggIBZAAIAAhJQA5goA7gfQAfADAYARQAdAVAAAeIAABJIDIAAQApAAAdAVQAeAWAAAeQAAAegeAVQgdAWgpAAIjIAAIAABIIDIAAQApAAAdAVQAeAWAAAeQAAAegeAVQgdAWgpAAIjIAAIAABIIDIAAQBkAAAABJIAADZQAABJhkAAIjIAAIAABJIK7AAIAAhJIjIAAQhkAAAAhJIAAjZQAAhJBkAAIDIAAIAAhIIjIAAQgqAAgdgWQgdgVAAgeQAAgeAdgWQAdgVAqAAIDIAAIAAhIIjIAAQgqAAgdgWQgdgVAAgeQAAgeAdgWQAdgVAqAAIDIAAIAAhJQAAgeAdgVQAXgRAfgDQA8AfA5ApIAAABIAABHIBXAAIABAAIAIAIIAZAYQA2A2AsA7IgTABIjIAAIAABIIDIAAQApAAAdAVQAeAWAAAeQAAAegeAVQgdAWgpAAIjIAAIAABIIDIAAQBjAAABBJIAADZQgBBJhjAAIjIAAIAABJIDIAAQApAAAdAVQAeAVAAAeQAAAfgeAVQgdAVgpAAIjIAAIAABJIDIAAQBSAAAOAxQhCB/htBtQgrAqgtAkgAEJJQQgPALAAAPQAAAPAPAKQAPALAUAAIEsAAQAVAAAOgLQAPgKAAgPQAAgPgPgLQgOgLgVAAIksAAQgUAAgPALgAp6JQQgPALAAAPQAAAPAPAKQAPALAVAAIErAAQAVAAAPgLQAPgKAAgPQAAgPgPgLQgPgLgVAAIkrAAQgVAAgPALgAEJg+QgPALAAAPQAAAPAPALQAPAKAUAAIEsAAQAVAAAOgKQAPgLAAgPQAAgPgPgLQgOgKgVAAIksAAQgUAAgPAKgAp6g+QgPALAAAPQAAAPAPALQAPAKAVAAIErAAQAVAAAPgKQAPgLAAgPQAAgPgPgLQgPgKgVAAIkrAAQgVAAgPAKg");
	this.shape_406.setTransform(1194.6593,251.4827,1.0026,1.0026);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#A30000").s().p("AqEM8QgygogvguIgCgDIgEgEQhzh1hHiHQhzjaAAkJQAAldDIkMQAwhAA7g8QASgSATgRQAwgtAzgkQA+gtBCgiQDYhwEFAAQEGAADZBwQBDAjA+AtQAyAlAvArIAJAJIAbAaQA8A8AwBAQDIEMAAFdQAAEIhyDaQhJCLh5B5QguAugyAoQkVDdlwAAQlvAAkVjdgAmwtQQg8Afg4ApQguAggsApIghAfQg2A2grA7Qi1DyAAE9QAADwBoDFQBAB6BoBqIAEAEIACACQAqArAuAjQD6DJFNAAQFNAAD7jJQAtgjAqgrQBthtBDh+QBnjFAAjvQAAk8i1jzQgsg7g2g2IgZgXIgIgIIAAAAQgrgngtghIAAAAQg4gpg9ggQjEhljtAAQjtAAjDBlg");
	this.shape_407.setTransform(1194.6342,256.4708,1.0026,1.0026);

	this.instance_5 = new lib.Symbol28();
	this.instance_5.setTransform(1196.25,707.85,0.9275,0.9275,0,0,0,296.1,342.7);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#EB9495").s().p("Au1CzQmJhJAAhqQAAhoGJhJQGKhKIrAAQIsAAGJBKQGKBJAABoQAABqmKBJQmJBJosAAQorAAmKhJg");
	this.shape_408.setTransform(1086.5241,1203.2356,1.0566,1.0566);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FFEBDD").s().p("AghG2QjJhdgzg6QhOhHABhHQAChHAPhvQAQhwBUhPQBUhOgqiHQDPDtCvBIQCuBIgCAhQgDAfAIARQAGASABBDQAABDgVArQgVArh4BtQhyBKhUAAQgSAAgSgEgAjJB8QgIAVABAJIAIADQAQADAjgfIAAADIgFAEQgDACAAAGIgBAGIADACIAHACQAugcAAgGQgBgDABgDQAAgCgIgBQgGgBgEACIgJAEQAFgbgbATQgfAZgDABIABgBQAJgNACgIIAAgKQgBgEgGgBQgGAAgUALIgVAOQAIgJABgIQABgGgCgBIgGgEQgFADgPAVQgQAUgBAFIAAAKIALADQANACAPgPIAWgVgAC/B6QgJAWACAIIAIAEQAPACAjgfIABADIgFAFQgDACgBAFIAAAGIACACIAHADQAugdABgFQgCgEABgDQAAgBgJgBQgFgBgDACIgJADQAEgbgbATIghAbIAAgCQAKgNABgIIAAgKQgBgDgGgBQgGgBgUAMIgVANQAIgIABgJQABgGgBgBIgHgDQgFACgPAVQgQAVAAAEIgBAKIAKAEQAOACAQgPIAVgWg");
	this.shape_409.setTransform(1053.8743,877.8312,1.0566,1.0566);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FFCCCC").s().p("AsFB+IgIgDQgBgJAIgVIgBgCIgVAVQgQAPgMgCIgLgDIAAgLQAAgEARgVQAPgUAFgDIAGADQACABgBAGQgCAJgIAIIAWgNQATgMAHABQAFABACADIgBAKQgBAJgKAMIAAACQADgBAegaQAcgSgFAaIAJgDQAEgCAGABQAHABAAACQgBACACAEQAAAFgvAdIgGgDIgDgCIAAgGQABgFADgCIAFgFIAAgCQghAcgQAAIgCAAgAl9B8IgIgDQgBgJAIgVIAAgCIgVAVQgQAPgOgCIgLgDIABgKQABgFAQgVQAPgUAFgDIAGAEQACABgBAGQgBAIgIAJIAVgOQAUgMAGABQAGABABAEIgBAJQAAAJgKANIAAABIAhgaQAbgTgFAaIAJgDQAEgCAFABQAJABAAACQgBADABADQAAAFguAdIgHgDIgCgCIAAgGQAAgFADgCIAGgEIgBgDQghAcgQAAIgCAAgAKhgcIgBAAIgLgDIAAgMQgBgCAIgLIABgDIAIgMQAPgYAFgEQAHADACACQABABAAAGQgBAKgJAJIAWgPQAWgPAHAAQAGABACAEIAAALQAAAJgLAPIAAACIAkgfQAcgXgDAdIAJgDQAGgDAFAAQAJAAgBADQAAADADAEQAAAGgyAiIgIgCIgCgCQgCgBABgGQABgFACgDQAFgDACgDIgCgCQglAkgQgCIgKgCQgCgLAIgYIgBgCIgWAZQgOAQgPAAIgCAAgAD2g2IgMgDIAAgMQAAgFAQgYQAQgXAFgEIAIAFQABAAABAHQgBAJgKALIAWgRQAWgOAHAAQAHAAABAFIAAALQAAAJgLAPIAAACQAEgCAggeQAdgWgDAdIAJgEQAFgDAFABQAKABgBABIABAIIAAACQgCADgOALIghAZIgHgDQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQgDAAABgGQACgGACgDIAGgEIgCgDQgkAjgSgBIgJgCQgCgLAJgYIgBgCIgXAZQgOAQgPAAIgCAAg");
	this.shape_410.setTransform(1114.4442,881.1473,1.0566,1.0566);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FFD6B6").s().p("AGCgCIAAhKQAkgLALA2QALA2g9A6IADhRgAmxgoQADgpAMAFIADBEIAAAnQgVAAADhHg");
	this.shape_411.setTransform(1174.9246,854.3155,1.0566,1.0566);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#666666").s().p("AhFgqQA5gsAiiWQAhBZALCFQAMCDgjB4QhYhRgYjGg");
	this.shape_412.setTransform(1211.1741,811.1917,1.0566,1.0566);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FFE5D1").s().p("AjQHgQjLjVgJh8IAAgBQgBgNABgLIAAhzQg0gBAIh2QAHhpAfAnIAGhDQACg1AWg7QAmAECWg6QioBrAhAbIENh6QikBtAeANQEUhtDIiBQAYDGBYBSIAABKQBBgsAUBCQAGA7giBSQgKA3gvgZIgDAAIgSBKIgBAAIgzC6QgSA+jkCCQhhAohEAAQhDAAglgogABjBwIgIAMIgBADQgHALAAACIAAANIAMACIABAAQAPABAPgRIAWgZIABADQgIAXACALIAKADQARABAkgkIACACQgCADgEADQgDADgBAGQgBAFACABIADACIAHADQAygjAAgGQgCgEAAgDQABgDgKAAQgFAAgFADIgKADQAEgdgdAXIgkAgIAAgDQALgOAAgKIAAgKQgBgFgHgBQgHAAgWAPIgWAPQAJgJABgKQAAgGgBgBQgCgCgGgCQgFADgQAYgAlGBVQgRAZAAAEIAAAMIAMAEQAQABAPgSIAXgZIABADQgIAXACALIAJADQARABAkgkIACADIgGAEQgCADgBAHQgBAFACAAQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAIAHADIAigZQANgKADgEIAAgBIgCgIQABgCgJgBQgGgBgFAEIgJADQADgdgcAWQghAegDACIAAgCQAKgPABgJIAAgLQgCgEgHgBQgHABgVAOIgXAQQAKgKABgKQAAgHgCAAIgIgFQgFAEgPAXgAF8iSIAABLIgCBRQA9g6gMg3QgJgtgbAAQgFAAgGACgAm2huQgEBIAWAAIAAgoIgEhEIgCAAQgKAAgCAkg");
	this.shape_413.setTransform(1175.4787,861.6698,1.0566,1.0566);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#4D4D4D").s().p("Ah8BJIBSgOIj8B7gAB1AvIBugaIkjCKgAjbgIIBjgdIjVBpgAFNhpIAAAiIjXA/gAAphPIBpgIIj0BOgAjChpICYgeIATAegAAQi1ICZAIIBOAjg");
	this.shape_414.setTransform(1172.1335,798.4599,1.0566,1.0566);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#333333").s().p("AgPCtIkNB6QghgbCohrQiWA6gmgEQghgFAwgxQAFgSg0AMQg2ANA6gsQA5guhuAVQBlhZhlA1QBVhmBZhFIhdAAQCMhPBvgQIAMgEIhLgkQCagyBeAyIg1gzQDqAVCLCIQgkCVg4AsQjICCkUBtQgegNCkhtgAhhAzIiqBuID9h8gACQAZIi0BwIEjiJgAjAgeIhxBMIDUhogACRgeIDYg/IAAghgABEhkIiLBFID1hNgAinh+ICqAAIgRgegAESigIhNgiIiagJg");
	this.shape_415.setTransform(1169.2543,800.7316,1.0566,1.0566);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#2B0C02").s().p("AgRCDQgfhXgcgxQgcgyAAgzQAAgyAsgHQAtgHAzgCQAzgDAIAyQAIAyACA3QADA4gwBbQgZAugTAAQgSAAgPgqg");
	this.shape_416.setTransform(1089.1193,829.7666,1.0566,1.0566);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#3F1203").s().p("Ag7B/QgwhbADg4QACg3AHgyIABgCQAJgwAyADQAzADAsAGQAiAGAJAeQACAJAAANQAAAygcAyQgcAxgfBXQgPAqgSAAQgUAAgYgug");
	this.shape_417.setTransform(1010.8109,833.104,1.0566,1.0566);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#664327").s().p("EAt4AS8QjXkalMisQlli6mTgbQhogHhpAPQiLARiKAXQihAbiiAWQj1AghZDXQARjVDwgrIIShlQo1hjo6AxQDoh6ESBKQj2ikkcgIQgzAAg1ABICYgjIADgGQDwAmDfCJQAhATAfAYQKZBBKYBKQCfATCSBEQFLCcD8EIQlvpap8kUQgvgUgwgRIgIACQpTjLp4gnIAdgFQBRgCBRAJIBKAAQhsiJiUhIQgbgNgSghQDKBUB9CqQHRA7G9CQIABgRQgSgEgOgNQhFg+g9hDIgNACIgCgRQiSiTjTgfQDOAICRCCQgfjUhajBIAVgHQBtDPAUDpQEJD9FWCPQAoAQAlAaQg5pXkjoSQgTgigJgoQgGgcgDggQFHJlCZKpQASBQBEAzQCdB1CPCEICTCLIAnAkQBcBYgMBmIAAAbQg4AlgIACIgQAFIgVAFIgSgXgA6bjoQhcgdhcggQhPgbhQgXQg8gUg9gGQjvgZjkBJQi4A8iMBzQgdAYgaAZIgLgGIgKgEQgEgCgdgbIADgQQACg9BAgqIAogbIBWg5QBhhABog1QAtgWASgtQCemCD9lFQgEASgGAQQgKAWgPASQjfEZheFbQAZgLAZgGQDWgxC1h7QAjiHBVhuIALAGQhIBognB5QBig9B5APQh/gChkBIIgDAKIgHgDQgrAhguAfQgKAFgLAAIgBALQEUgpEWANQBahZB/gcQgOARgRAGQheAbhNBGIAsAHQAvADAwAJIAQAGQl2gplxA9IgFgCIg7AMQmHBfkPEwIgNAPIANgKQCoh6DKg4QBdgZBfAEQGMAXGNAcQAUgKAWgIQCQg5CRAAIAAAFIBWAkQgfgHgegEQingZihBJQCpgQB7BeQlJhWlVACIEsBwQCJAxgMB/QgeiHiNgsg");
	this.shape_418.setTransform(1184.7061,1121.2186,1.0566,1.0566);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFBBCC").s().p("Egt9BVfIAA4KQCNh0C4g7QDkhKDuAZQA+AHA8ATQBQAXBPAbQBbAhBdAdQCMArAfCHQALh+iIgyIkthwQFVgCFKBWQh8heioAQQChhICnAYQAeAEAfAHIhWgkIgBgEQiRgBiQA5QgVAJgVAKQmMgcmNgYQhfgEhcAZQjKA4ipB6IAAgFQEQkwGHhfIA7gMIAEACQFyg9F2ApIgQgGQgwgJgwgDIgrgHQBNhGBegbQAQgGAPgRQh/AdhaBYQkXgNkUApIACgKQALAAAKgGQAugfArghIAHADIADgKQBkhIB/ADQh6gQhiA+QAoh5BIhpIgLgGQhVBugkCHQi0B7jXAxQgZAGgYALQBdlaDgkZQAPgTAJgWQAGgQAFgSQj9FGieGBQgTAtgtAXQhnA1hhA/IhXA5MAAAiQqMBb7AAAMAAACjqIiUiKQiOiFieh1QhEgzgRhQQiZqqlHpkQACAfAGAcQAJAoATAjQEkIRA5JYQglgZgpgQQlViQkJj+QgVjphtjPIgUAHQBZDCAgDTQiRiCjOgIQDSAfCSCUIACARIANgDQA+BEBEA/QAPANARAEIAAARQm+iSnRg6Qh9irjJhTQASAgAbANQCTBJBtCJIhLgBQhQgIhSABIgcAGQJ4AmJTDNIAIgCQAwARAuAUQJ9ETFuJaQj8kIlKibQiThFiegTQqYhJqZhCQgggXghgUQjeiIjwgnIgDAHIiZAiQA1gBA0ABQEbAHD2CkQkShKjoB6QI6gxI2BkIoTBkQjwAsgRDUQBZjWD2ghQCigWChgbQCKgXCLgRQBpgOBoAGQGTAbFkC6QFNCtDXEZIAAC8gEgdRBI9QmIBKAABpQAABqGIBJQGKBJIsAAQIsAAGIhJQGKhJAAhqQAAhpmKhKQmIhKosAAQosAAmKBKgA3FYDQhUBOgQBxQgQBvgBBIQgCBGBPBHQAyA6DKBeQBfAVCMhcQB4htAVgqQAUgrAAhEQAAhDgHgRQgIgSADgfQACghiuhJQiuhHjQjtQAqCHhUBOgAoiXaQgIB3A0AAIAAB0QgBALABANIAAABQAKB7DLDWQBIBRDGhRQDiiCASg+IAzi6IABAAIAShLIAEAAQAvAaAJg4QAjhSgGg7QgVhChAAsIAAhLQAkh4gMiEQgMiFgghZQiMiIjogVIA0AzQhegyiaAyIBLAkIgMAEQhvAQiNBPIBdAAQhYBFhWBnQBmg1hmBZQBvgVg5AuQg6AsA1gNQA1gMgFASQgwAxAgAFQgVA7gDA1IgGBDQgIgKgHAAQgSAAgFBMgA7GTAIgBADQgHAxgCA4QgDA4AwBbQAvBbAfhWQAfhXAcgzQAcgyAAgyQAAgMgCgKQgJgegigFQgsgHg0gDIgFAAQguAAgIAtgAteR0Qg0ACgtAHQgsAHAAAyQAAAzAcAyQAcAyAfBXQAeBWAwhaQAwhbgDg5QgCg3gIgyQgHgvgvAAIgFAAg");
	this.shape_419.setTransform(1184.0992,691.0586,1.0566,1.0566);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.instance_5},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.instance_4},{t:this.instance_3},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.instance_2},{t:this.instance_1},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol49, new cjs.Rectangle(843.8,80.7,675.9000000000001,1200.3), null);


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
	this.instance.setTransform(48.55,37.95,1,1,0,0,0,0.4,5.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).wait(1).to({regX:111.4,regY:43.2,x:159.55,y:75.95,alpha:0.0474},0).wait(1).to({alpha:0.0947},0).wait(1).to({alpha:0.1421},0).wait(1).to({alpha:0.1895},0).wait(1).to({alpha:0.2368},0).wait(1).to({alpha:0.2842},0).wait(1).to({alpha:0.3316},0).wait(1).to({alpha:0.3789},0).wait(1).to({alpha:0.4263},0).wait(1).to({alpha:0.4737},0).wait(1).to({alpha:0.5211},0).wait(1).to({alpha:0.5684},0).wait(1).to({alpha:0.6158},0).wait(1).to({alpha:0.6632},0).wait(1).to({alpha:0.7105},0).wait(1).to({alpha:0.7579},0).wait(1).to({alpha:0.8053},0).wait(1).to({alpha:0.8526},0).wait(1).to({alpha:0.9},0).wait(1).to({regX:0.4,regY:5.2,x:48.55,y:37.95,alpha:1},0).wait(1).to({regX:111.4,regY:43.2,rotation:-4.829,x:158.6,y:63.85},0).wait(1).to({rotation:-9.6581,x:156.85,y:51.6},0).wait(1).to({rotation:-14.4871,x:154.3,y:39.3},0).wait(1).to({rotation:-9.6581,x:156.85,y:51.6},0).wait(1).to({rotation:-4.829,x:158.6,y:63.85},0).wait(1).to({rotation:0,x:159.55,y:75.95},0).wait(4).to({regX:0.4,regY:5.2,x:48.55,y:37.95},0).wait(1).to({regX:111.4,regY:43.2,rotation:-4.829,x:158.6,y:63.85},0).wait(1).to({rotation:-9.6581,x:156.85,y:51.6},0).wait(1).to({rotation:-14.4871,x:154.3,y:39.3},0).wait(1).to({rotation:-9.6581,x:156.85,y:51.6},0).wait(1).to({rotation:-4.829,x:158.6,y:63.85},0).wait(1).to({rotation:0,x:159.55,y:75.95},0).wait(1).to({alpha:0.9474},0).wait(1).to({alpha:0.8947},0).wait(1).to({alpha:0.8421},0).wait(1).to({alpha:0.7895},0).wait(1).to({alpha:0.7368},0).wait(1).to({alpha:0.6842},0).wait(1).to({alpha:0.6316},0).wait(1).to({alpha:0.5789},0).wait(1).to({alpha:0.5263},0).wait(1).to({alpha:0.4737},0).wait(1).to({alpha:0.4211},0).wait(1).to({alpha:0.3684},0).wait(1).to({alpha:0.3158},0).wait(1).to({alpha:0.2632},0).wait(1).to({alpha:0.2105},0).wait(1).to({alpha:0.1579},0).wait(1).to({alpha:0.1053},0).wait(1).to({alpha:0.0526},0).wait(1).to({alpha:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.9,290.7,134.70000000000002);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAjBXQgGgBgIAAIgNABIgIABQgEAAgBgBQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBQABAAAAAAIAHgCQAGgBACgCQACgCAAgHIAAgkQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQgNgFgZAAQgJAAgJADIgJAEIgDgBIgBgDQAAgCADgDIBQhlQADgFADAAIADABIABAEIgBAGIAAAGIAABRQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAAAIAHABQAHAAAGgCIAGgCIABABIABACQAAAFgJAFQgKAFgIAAIgCAAIAAACIAAAjQgBAHADACQADACAEAAQAKABAAAFQAAAFgJAAIgHgBgAAGgrIgoAyIgBADIADgBQAJgDANAAIANABIAFABQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBIAAgwQAAgBAAgBQAAgBAAgBQAAAAAAAAQAAgBgBAAIgDAEg");
	this.shape.setTransform(183.85,369.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghBXIgHgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAgIAJgOQAJgOAPgMQAHgGASgUQATgSAAgaQAAgOgKgNQgKgMgUAAQgIAAgLAEQgKAEgHAIQgGAHAAANQAAAKAFAGQAFAGAEAAIAEgBIAEgBQAEAAADADQACACAAAFQAAAFgEADQgEACgIAAQgLAAgJgKQgIgLAAgPQAAgXARgOQARgOAcAAQAKAAAPAEQAPAFAKANQAJAMAAATQAAAOgHAMQgHALgLAJQgKAJgTANQgRANgFAHQgDAGAAAGIAtAAIADgBIABgGIABgGIADgBQALAAAAAWIAAADIAAACQAAADgBACQgDACgEAAg");
	this.shape_1.setTransform(170.95,369.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbBPQgPgJgIgUQgIgUAAgeQAAglAQgZQARgaAaAAQAOAAANALQAOAKAIAVQAJAVAAAcQAAAngSAXQgRAYgYAAQgNAAgOgKgAgXg0QgKAYAAAhQAAAeAJAVQAJAVAPAAQAPAAAKgVQAIgVABgmQgBgigIgTQgJgUgPAAQgPAAgJAYg");
	this.shape_2.setTransform(158.25,369.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghBXIgGgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQgBgIAJgOQAJgOAOgMQAIgGASgUQATgSAAgaQAAgOgKgNQgKgMgTAAQgJAAgLAEQgLAEgFAIQgHAHAAANQAAAKAFAGQAFAGAEAAIAEgBIAEgBQAEAAACADQADACAAAFQABAFgFADQgFACgGAAQgMAAgJgKQgIgLAAgPQAAgXARgOQARgOAcAAQALAAAOAEQAPAFAKANQAJAMAAATQAAAOgHAMQgHALgLAJQgLAJgSANQgRANgEAHQgFAGAAAGIAuAAIADgBIABgGIABgGIADgBQAKAAAAAWIABADIAAACQAAADgCACQgCACgDAAg");
	this.shape_3.setTransform(145.6,369.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAaIAEgKQADgJAAgFQAAgDgEgDQgFgCgCgDIgBgGQAAgGADgDQADgDAGAAQAEAAAEAFQAFAFAAAJQAAAHgIAOQgHAPgDAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAg");
	this.shape_4.setTransform(133.65,378.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjAfQgNgOAAgSQAAgSAPgMQAPgMASAAQAZAAAMAMQAMAMAAASQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABIgHABIg0AAQgHAAAAgFQAAgEAHAAIAkAAIAEgBIAAgEQABgIgHgIQgHgIgPAAQgIAAgLAKQgKAIAAARQAAAMALAKQALAKANAAQAKAAAMgHIAGgCIADABIACADQAAAEgOAHQgMAFgNAAQgVAAgOgNg");
	this.shape_5.setTransform(126.7,374.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAGAoQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIABgDQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQADAAADgCQADgCAAgEIABgiIAAgIQAAgJgIAAQgEAAgHAGQgFAFgDAAIgCgBIgBgCQAAgFAKgIQAKgJAKAAQAGAAAFAEQAEADACAEQABAFAAAJIAAAHIAAAhQAAAFACACIAGACQAEABAAADQAAAEgEAAIgHgBIgKAAIgMABIgHABQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBgAgQAoIgJAAIgJAAIgIABQgGAAAAgFIABgDIAEgBQAEAAABgBIAEgFIAAgJIAAglQAAgEgBgDQgCgCgFgBQgGgBAAgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIAFAAIAFABIAGAAIAGgBQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABABIABAIIAAAUIAAAhIAAAEIADACIAFACQABAAABABQABAAAAAAQABAAAAABQABAAAAAAIABADQAAAEgGAAIgJgBg");
	this.shape_6.setTransform(115.775,374.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcAkQgHgFgBgHQgBgGAAgpQAAgFgMgDQgEgBAAgDQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAIAEgBIAHABIAKABIAFgBIADgBQAFAAAAAQIAAApQgBAGAFADQAFAEAFAAQAEAAAEgDQAFgDACAAQABAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAADgJAFQgIAFgLAAQgIAAgGgFgAApAmIgHgBIgGABIgEABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQgBgBAAgGIAAgVIAAgeQAAgJgJgBIgHgCQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBgEAIAAIAHABIALABIAEgBIADAAQADAAABAHIAAA5QABADAIACIAGACQAAAAABABQAAAAAAAAQAAABAAAAQABAAAAABQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAAAAAQgCACgEAAIgGgBg");
	this.shape_7.setTransform(104.25,374.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AglBQQgJgJAAgGQAAgJAIAAQAEAAADADQADADAAACQAAAEAEAEQAFAEAGAAQAHAAAHgGQAHgHAAgLIgCh0QgBgFgCgCQgCgDgGgBIgIgCQgCgBAAgEQAAgEAGAAIAJABIAPABIALgBIANgBQAIAAAAAGIgBACIgHACQgGABgDABQgFADABAIIACBxQAAAOgMALQgNAMgNAAQgRAAgKgHg");
	this.shape_8.setTransform(93.625,370.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAZA3IgGgBIgGABIgGAAQgFAAAAgEIABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEgBABgBQABgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIgBgMIAAgLQAAgEgCgCQgCgCgEAAQgDAAgEADIgFACIgBAAIgBgCQAAgEAIgFQAHgEAEAAQAFAAAEADQAFACABAFIABAMIAAALIAAAHIABAGQABABAEABIAEABIABACIgBADIgFAAIgGAAgAgLA2IgHgBIgGABIgGABQgGAAAAgDIABgCIAFgBQAEgBABgCIABgGIAAhRIgBgDIgFgDIgFgCIAAgBQAAgDAEAAIAEAAIAEABIAEgBIAEgBIACABQABABAAAEIAABaQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQABABAEABIAEABIABACQAAADgEAAIgHgBg");
	this.shape_9.setTransform(81.225,365.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIAaIAAgcIgBgCIgEAAIgEgBIgBgCIABgCIADgCIADgBIAEgEQACgDABgFIABgOQAAgFACAAQABAAAAAAQAAAAABABQAAAAAAAAQABAAAAABIAAAEIAAAZQAAABAAAAQABAAAAAAQAAABAAAAQABAAAAAAIALAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAABQAAADgFAAIgKAAIgBAAIAAACIAAAaIAAAIQAAABABAAQAAABAAAAQAAAAABAAQAAAAABAAQACAAAEgDIAEgCIACABIABACQAAACgGAFQgGAFgEAAQgLAAAAgSg");
	this.shape_10.setTransform(75.075,366.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbBPQgPgJgIgUQgIgUAAgeQAAglAQgZQARgaAaAAQANAAAOALQAOAKAJAVQAIAVAAAcQAAAngRAXQgSAYgYAAQgOAAgNgKgAgXg0QgKAYAAAhQABAeAIAVQAJAVAPAAQAPAAAKgVQAIgVABgmQgBgigIgTQgJgUgPAAQgPAAgJAYg");
	this.shape_11.setTransform(66.55,369.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAQBXIgNgCIgPACIgGABQgHgBAAgGIABgDIAHgDQAGAAACgDQACgDAAgFIAAhtQAAgEgBgCQgBAAAAgBQgBAAAAgBQgBAAAAAAQgBAAAAAAQgCAAgFADQgFAEgCAAQgFAAAAgGQAAgCADgDIAOgKIAOgKIALgIQADgCACAAQAEAAAAAFQAAADgCADQgFAHAAAIIABBeIgBAhQAAAEACADQACACAGABQAHABABACQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAIgJgBg");
	this.shape_12.setTransform(56.475,369.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDA9QgFgDAAgCIABgCIACgBIAEABQACACAEgBQAGABAHgFQAGgFACgHQABgIAAgPIAAg9QAAgFgJgCQgIgBAAgEQAAgFAGAAIAHABIAJAAIAFAAIAEgBQAEAAAAAGIABAhIAAAdQAAAZgGAMQgGALgHAFQgHAEgKAAQgJAAgEgCgAgSAQQgHgFgCgGQgCgFAAgRIAAgYQAAgJgIgCIgGgCQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIABgEQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAHABIAGABIAHgBIAGgBIACABIACABIAAARIABAcIAAAPQABACAEAEQADACAFAAQAFAAAFgCIAGgEQABAAABABQAAAAAAAAQABABAAAAQAAABAAABQAAADgJAGQgJAEgJAAQgGAAgHgDg");
	this.shape_13.setTransform(42.425,376.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMBQIgEgCIgCADIgBACIgEABIgGgBIgHgBIgHABIgGABIgFgBQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBIAIgCQAHgCADgEQACgEAAgFIAAh3QAAgKgEgEQgDgCgGgBQgFgBgBgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBIAEgBIAHABIAHABIAGgBIAFAAQAEAAACACQABACAAAFIAACIQAAAHAJAGQAIAGAIAAQAJAAAKgIQALgIAAgSQAAgOgIgKQgJgKgMAAQgFAAgFADIgGADIgDgBIgCgDQAAgFAJgEQAIgDAHAAQATAAANANQANANAAAUQAAASgNAMQgOAMgTAAQgJAAgOgIg");
	this.shape_14.setTransform(31.425,370.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPBTIgLgCIgKACIgKADQgKAAAAgHIABgCQABgCAHAAQAGAAADgFQACgDAAgGIAAh9QAAgKgNAAQgIAAAAgFQAAgFAIAAIAKABIAKABIALgBQAIgCAKABQAcAAAPAMQAPANAAASQAAANgHAIQgHAHgMAFQgMAHgUgBQgKAAAAgGQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAFgBIADAAIAFAAQANABAIgJQAJgIAAgNQAAgOgKgKQgLgKgQAAQgGAAgDACQgCABgBAEIgBAKIAAB8QAAAIAMABQAFAAACABQAAAAABABQAAAAAAABQAAAAABABQAAABAAAAQAAAGgJAAIgLgDg");
	this.shape_15.setTransform(158.925,341);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAABWQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAgBgBIgBgEIg1iLQgEgLgJAAQgGAAgCgDQgDgCAAgDQAAgFAHAAIANABIAKACIAMgCIAMgCQAMAAAAAHQAAADgCACQgCACgFAAQgLAAAAAGIABAGIAmBmIABACIACgCIAlhnIABgHQAAgFgJAAQgFgBgCgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQABgBAFAAIAJABIAMABIAJgBIAJgBQAEAAACABQACACABADQAAAEgDABIgIABQgGAAgEAEQgFAEgDAKIgwCGIgBADIgBAEIgDABIgBgBg");
	this.shape_16.setTransform(145.1,341.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgiBSQgPgGAAgGIABgGIAAgMIAAgFIgBgFQAAgEAFAAQAGAAABAIQABAPAIAIQAKAIAPAAQAOAAALgJQAJgJABgOQAAgIgIgKQgHgJgcgUIgSgOQgHgGgEgIQgFgIAAgKQAAgRAPgLQAPgLATAAQALAAANAFQANAGAAAHIAAAEIAAAGIAAAFQAAAIgFAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgLgHgHQgJgGgKAAQgMAAgKAHQgIAHgBAJQAAAGAFAGQADAGARALQAfAXALANQAKAOAAAQQAAAWgRAMQgRAMgTAAQgPAAgQgGg");
	this.shape_17.setTransform(131.65,340.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAvBUQgIgFgCgDQgFgFgagqIgMgXQgHgIgGgCIgCgBIAAgEQAAgEAGAAIADAAIAGABQAMAAAIgJQAIgIAAgPQAAgLgJgKQgKgLgQABQgHgBgCACQgBAAgBABQAAAAgBAAQAAABgBAAQAAABAAAAIgBAGIAACDQAAAEAEACQADACAFAAQAGAAACACQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgCACQgDABgFAAQgEAAgHgCQgHgDgEAAQgDAAgHADQgGACgEAAQgLAAABgGQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQACgBAHAAQAEAAADgCQADgCgBgCIAAiGQABgJgMAAQgJAAAAgGQAAgEAKAAIAJAAIAKABIAPgBIASgCQAXAAAOAMQAPAMABAVQAAAMgIAJQgIAIgSAHQAAAAgBAAQgBABAAAAQgBAAAAABQAAAAAAAAIACADQAGAJASAeIATAfQABACAFACIAGADIACAEQAAADgDACQgEABgDAAQgFAAgHgDg");
	this.shape_18.setTransform(119.35,341);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgjAfQgNgOAAgSQAAgSAPgMQAPgNASAAQAZAAAMANQAMAMAAASQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABIgHABIg0AAQgHgBAAgEQAAgEAHAAIAkAAIAEgBIAAgEQABgIgHgIQgHgIgPAAQgIAAgLAJQgKAKAAAPQAAANALAKQALAKANAAQAKAAAMgHIAGgCIADABIACADQAAAEgOAHQgMAFgNAAQgVABgOgOg");
	this.shape_19.setTransform(103.3,345.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgVApQgIgEAAgEIgBgIIAAgHQAAgGAFAAIADABIAEAJQADAHAEADQAEACAFAAQAFAAAEgEQAFgEAAgGQAAgEgDgEQgDgEgMgGQgNgFgEgGQgEgGAAgHQAAgJAJgGQAIgGAKAAQAKAAAJADQAIADAAAEIABAFIAAAGIgBAEQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQgBgEgCgCIgGgEQgDgBgEAAQgEAAgEADQgDACAAAEQAAACACADQADADAMAHQAOAHAEAGQAFAHAAAHQAAAMgKAHQgKAHgOAAQgJAAgJgDg");
	this.shape_20.setTransform(94.325,345.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgeAqQgKgEgFgIQgGgIAAgLQAAgLAMgKQAMgJASAAQAHAAAGADQAHAEAAADQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgDABIgGgCQgEgCgEAAQgKAAgGAGQgHAEABAKQgBALAIAGQAHAGAJAAQAIAAAHgGQAIgGAAgJIAAgfQgBgHgEgEQgFgFgHAAQgKAAgJAHIgFACQgDAAgCgCQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgGALgEQAKgEALAAQAQAAAKAIQAJAHAAALIAAAmQAAAJALADIAEACQAAAAABAAQAAABAAAAQAAABAAAAQABABAAABQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgFgBIgGgBIgIABIgFABIgDgCIgCgCQAAAAAAgBQAAAAAAAAQAAAAAAgBQgBAAAAAAIgCABQgNAIgPAAQgHAAgIgDg");
	this.shape_21.setTransform(85.2,345.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgiAfQgOgOAAgSQAAgSAPgMQAQgNARAAQAYAAANANQAMAMAAASQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAABIgHABIg1AAQgGgBAAgEQAAgEAHAAIAkAAIAEgBIABgEQgBgIgGgIQgHgIgOAAQgJAAgKAJQgLAKAAAPQAAANALAKQALAKAMAAQALAAAMgHIAGgCIAEABIAAADQABAEgNAHQgNAFgNAAQgUABgOgOg");
	this.shape_22.setTransform(74.45,345.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAKBTIgKgBIgJABIgJABQgFAAgBgBQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIABgDIAHgCQAGgBACgDQACgDAAgEIAAh9QAAgEgCgEQgCgDgGgBIgHgDIgBgDQAAgBAAAAQABAAAAgBQAAAAAAgBQABAAAAAAIAEgBIAGABIAFAAIAGAAIAFgBQAEAAACACQACACAAAFIAACMQAAADABACQACADAFAAQAGABABACQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAAEgGAAIgLgBg");
	this.shape_23.setTransform(65.725,341.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgPBTIgLgCIgKACIgKADQgKAAAAgHIABgCQABgCAHAAQAGAAADgFQACgDAAgGIAAh9QAAgKgNAAQgIAAAAgFQAAgFAIAAIAKABIAKABIALgBQAIgCAKABQAcAAAPAMQAPANAAASQAAANgHAIQgHAHgMAFQgMAHgUgBQgKAAAAgGQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAFgBIADAAIAFAAQANABAIgJQAJgIAAgNQAAgOgKgKQgLgKgQAAQgGAAgDACQgCABgBAEIgBAKIAAB8QAAAIAMABQAFAAACABQAAAAABABQAAAAAAABQAAAAABABQAAABAAAAQAAAGgJAAIgLgDg");
	this.shape_24.setTransform(56.875,341);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAGAqQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAEAAADgDQADgCAAgEIAAgkIABgIQAAgJgJAAQgDAAgIAGQgFAFgEAAIgBgBIgCgCQAAgFALgJQALgIAKAAQAGAAAFADQAFADABAFQACAFAAAJIAAAHIAAAjQAAAFACACIAGACQAEABABADQgBAEgEAAIgHAAIgLgBIgMABIgHABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAgRAqIgJgBIgKABIgIAAQgHAAAAgEQAAgBABAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAAAIAGgBIADgFQABgCAAgHIAAgnQAAgFgCgCQgCgCgFgBQgGgBAAgEIACgEQACgBADAAIAFABIAFAAIAHAAIAGgBQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAIABAIIAAAWIAAAiIAAAEIAEACIAFACQAEABABACIABADQAAAEgHAAIgJgBg");
	this.shape_25.setTransform(119.85,209.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgjAgQgPgOAAgTQAAgSAQgNQAPgNAUAAQAZAAANANQAMANAAASQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgHABIg3AAQgHAAAAgEQABgFAGAAIAmAAIAEgBIABgEQAAgJgHgIQgIgIgOAAQgJAAgLAKQgLAJAAARQAAANALAKQAMAKANAAQALAAAMgGIAHgDIADABIABADQAAAFgNAGQgOAGgNAAQgVAAgOgOg");
	this.shape_26.setTransform(108.55,209.825);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgsBNQgOgOAAgSQAAgUAOgOQAPgMATAAQAJAAAHADQAJAEAAAFIgBADIgDABIgJgDQgFgDgGAAQgMAAgIAKQgJALAAAOQAAAMAIAMQAHAMANAAQAIAAAIgEQAJgEADgHQACgHAAgOIAAhnQAAgLgDgDQgDgEgGgCIgIgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIAFgBIAFAAIAHABIAKgBIAGAAQAEAAABACQACADAAAEIAAANIAAAJIAABzQAAAGADAFQACAFAHACIAHAEIABACQgBAFgFAAIgFgBIgIgBIgIABIgGABQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIgCgCIgCABQgSAKgLAAQgTAAgOgNg");
	this.shape_27.setTransform(96.9,205.575);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AACAtIgNgBIgJABIgGABIgFgBQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgCIAGgDIAHgEQABgCAAgJIAAgkQAAgEgCgDQgCgCgEgCIgGgDIgBgCQAAgEAFAAIAGAAIAFABIAEAAIAHgBQAGAAAAAOIAAAGIAAADIAFgLQAGgMAFgFQAFgFAFAAQAFAAABACQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAAEgBABIgFAFQgPAMgIARQgFAQgBALQAAAFABACQABACAGABIAHADQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQABAEgFAAIgJgBg");
	this.shape_28.setTransform(86.85,209.675);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AggArQgJgDgGgJQgGgIAAgMQAAgLAMgKQANgKATAAQAGAAAHAEQAIADAAAEQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgEABIgGgCQgEgDgFAAQgKABgGAFQgHAGAAAKQAAALAIAGQAHAGAKAAQAIAAAIgGQAHgFAAgLIAAggQAAgHgFgFQgFgEgHAAQgKAAgKAGIgFADQgDAAgCgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgGALgFQALgEAMAAQAQAAAJAIQAKAIAAALIAAAoQAAAJAMADQAAABABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgEABIgHgBIgGgBIgHABIgGABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgCgCQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAIgCABQgOAIgPAAQgIAAgJgEg");
	this.shape_29.setTransform(76.975,209.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag1BCQgbgZgBgpQAAgZAMgVQALgVAUgLQAUgMAYAAQAYAAAUAJQAVAIAAALIAAAKIAAAEIABAGQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAIgFgCIgFgJQgGgOgIgGQgMgLgYAAQgbAAgSAVQgSAVAAAjQABAlASAWQAUAVAcAAQAQAAANgGQANgGAAgMIAAgRQAAgGgLAAIgHABIgFAAQgFAAgCgCQgDgCAAgDQAAgFAHAAIAuAAIAGABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAADgCADQgDADAAAFIAAAKQAAAEACADQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQABAFgLAHQgLAIgQAGQgQAFgQAAQgkAAgcgZg");
	this.shape_30.setTransform(62.7,205.225);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAGAqQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAEAAADgDQADgCAAgEIABgkIAAgIQAAgJgJAAQgEAAgGAGQgHAFgCAAIgDgBIgBgCQAAgFAMgJQAJgIALAAQAGAAAFADQAFADACAFQABAFAAAJIAAAHIAAAjQAAAFABACIAHACQAFABgBADQABAEgFAAIgIAAIgKgBIgMABIgHABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAgQAqIgKgBIgJABIgJAAQgGAAgBgEQABgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAABAAIAEgBIAEgFQABgCAAgHIAAgnQAAgFgBgCQgDgCgFgBQgGgBAAgEIACgEQACgBAEAAIAEABIAGAAIAGAAIAGgBQABAAAAAAQABAAAAAAQABABAAAAQAAABABAAIABAIIAAAWIgBAiIABAEIACACIAGACQAEABAAACIABADQAAAEgFAAIgJgBg");
	this.shape_31.setTransform(44.3,209.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgkAgQgOgOAAgTQAAgSAQgNQAQgNASAAQAaAAAMANQANANAAASQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABIgIABIg3AAQgGAAAAgEQgBgFAIAAIAlAAIAEgBIABgEQAAgJgHgIQgHgIgPAAQgJAAgLAKQgLAJAAARQAAANALAKQAMAKANAAQALAAAMgGIAGgDIAEABIABADQAAAFgNAGQgOAGgNAAQgVAAgPgOg");
	this.shape_32.setTransform(33,209.825);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAvBaIgEAAIhgAAQgGAAgBgBQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBgBAAAAIACgGIACgEIBJiMIABgDIABgEQAAgFgJAAIgsAAQgEAAgDACQgDACgCAGQgCAFgBACIgEABQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQgCgDgBgDQABgMADgFQADgEAFAAIBcAAQAGAAAAAFQAAACgEAIIhJCNIgBAGQAAABAAAAQAAABAAAAQABABAAAAQABAAAAAAIAHABIA7AAQADAAACgCQACgCAAgGQAAgHACgCQAAAAAAgBQABAAAAAAQABAAAAgBQABAAABAAQAFAAADAIQACAIAAAJQABAEgDADQgCACgHAAIgEAAg");
	this.shape_33.setTransform(20.95,205.225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAhAqQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgEAFAAQAGgBABgCQACgDAAgDIAAguQAAgDgCgCQgCgCgDAAQgFAAgHAGQgHAFgDAAIgCgBIgBgCQAAgFALgJQALgIAKAAQANAAAFALQACADAAAgIgBAVQABAEACACQACACAEAAQAEABABACIABACQAAAFgGAAIgHgBIgLgBIgKABIgJABIgEgBgAgVAqQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBgBAAAAQAAgDAFAAQAEAAAEgDQADgCAAgFIAAguQAAgDgCgCQgDgCgDAAQgGAAgIAHQgFAEgCAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBQgBgGAMgIQALgIAJAAQAIAAAGAFQAFAGAAAHIAAAxQAAAEADACQACADADAAQAHAAAAAFQAAAEgHAAIgHgBIgLgBIgLABIgHABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAgAguAqIgJgBIgJABIgIABQgGAAgBgEQAAgBABgBQAAAAAAgBQAAAAAAAAQABgBAAAAIAEgBIAGgCQAAgBABAAQAAAAABgBQAAgBAAAAQAAgBABAAIAAgKIAAgnQAAgEgCgDQgDgCgDAAQgHAAAAgFQAAgFAGAAIAFABIAGAAIAHAAIAEgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQABABAAAMIAAAaIAAAVQAAAGABACIADACQACACADAAIAFABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAABQAAAEgGAAIgKgBg");
	this.shape_34.setTransform(329.1,209.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgjAhQgPgNAAgUQAAgRANgOQAOgOAYAAQAUAAAPAOQAPAOAAARQAAAUgOANQgOANgYAAQgTAAgPgNgAgVgZQgIAKAAAPQAAAQAJAKQAJAJAMAAQAOAAAIgKQAJgKAAgPQAAgPgJgKQgJgJgOAAQgNAAgIAJg");
	this.shape_35.setTransform(314.925,209.775);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgjAhQgPgNAAgUQAAgRANgOQAOgOAYAAQAUAAAPAOQAPAOAAARQAAAUgOANQgOANgYAAQgTAAgPgNgAgVgZQgIAKAAAPQAAAQAJAKQAJAJAMAAQAOAAAIgKQAJgKAAgPQAAgPgJgKQgJgJgOAAQgNAAgIAJg");
	this.shape_36.setTransform(303.975,209.775);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AACAtIgNgBIgJABIgGABIgFgBQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgCIAGgDIAHgEQABgCAAgJIAAgkQAAgEgCgDQgCgCgEgCIgGgDIgBgCQAAgEAFAAIAGAAIAFABIAEAAIAHgBQAGAAAAAOIAAAGIAAADIAFgLQAGgMAFgFQAFgFAFAAQAFAAABACQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAAEgBABIgFAFQgPAMgIARQgFAQgBALQAAAFABACQABACAGABIAHADQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQABAEgFAAIgJgBg");
	this.shape_37.setTransform(294.75,209.675);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AALBXIgLgBIgJABIgKAAIgGAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgCAGAAQAGgBACgDQACgDAAgEIAAiDQAAgFgCgDQgCgDgGgBQgGgCgBgCQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQABAAAAAAIAFgBIAFAAIAGABIAGgBIAGAAQADAAACACQACACAAAFIAACSQAAADACACQACACAFACQAGABACABIABAEQAAAEgGgBIgLAAg");
	this.shape_38.setTransform(286.975,205.45);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AALBXIgLgBIgJABIgKAAIgGAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgCAGAAQAGgBACgDQACgDAAgEIAAiDQAAgFgCgDQgCgDgGgBQgGgCgBgCQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQABAAAAAAIAFgBIAFAAIAGABIAGgBIAGAAQADAAACACQACACAAAFIAACSQAAADACACQACACAFACQAGABACABIABAEQAAAEgGgBIgLAAg");
	this.shape_39.setTransform(280.225,205.45);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AggArQgJgDgGgJQgGgIAAgMQAAgLAMgKQANgKATAAQAGAAAHAEQAIADAAAEQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgEABIgGgCQgEgDgFAAQgKABgGAFQgHAGAAAKQAAALAIAGQAHAGAKAAQAIAAAIgGQAHgFAAgLIAAggQAAgHgFgFQgFgEgHAAQgKAAgKAGIgFADQgDAAgCgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgGALgFQALgEAMAAQAQAAAJAIQAKAIAAALIAAAoQAAAJAMADQAAABABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgEABIgHgBIgGgBIgHABIgGABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgCgCQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAIgCABQgOAIgPAAQgIAAgJgEg");
	this.shape_40.setTransform(271.375,209.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhBBZQgJgBAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgCAGAAQAGgBACgDQACgDAAgEIAAiFQAAgFgCgDQgBgDgGAAQgHAAgBgCQgBAAAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAABgBQACgBADAAIBCAAQAQAAAPALQAPALAAATQAAAJgHAIQgHAHgLAEIgCABIACABQAWAEAQAOQAQAQAAAVQAAAWgTAOQgUAPgkAAIhBAAgAgbgHQgHADAAAEIAABBQAAAHACADQABADAFABIARAAQAbAAAQgMQAQgMAAgVQAAgVgSgMQgRgLgYAAQgMAAgGADgAgehKQgFACAAAIIAAAeQAAAJAGACQAFADALAAQAPgBALgHQAKgJAAgNQAAgNgKgHQgLgHgPAAQgMAAgFADg");
	this.shape_41.setTransform(257.775,205.25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAhAqQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgEAFAAQAGgBABgCQACgDAAgDIAAguQAAgDgCgCQgCgCgDAAQgFAAgHAGQgHAFgDAAIgCgBIgBgCQAAgFAKgJQAMgIAKAAQAOAAAEALQACADAAAgIAAAVQAAAEACACQACACAEAAQAEABABACIABACQAAAFgGAAIgHgBIgLgBIgKABIgJABIgEgBgAgVAqQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQgBgDAFAAQAEAAAEgDQADgCAAgFIAAguQAAgDgDgCQgCgCgDAAQgGAAgIAHQgFAEgCAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAgGALgIQAMgIAIAAQAIAAAGAFQAFAGAAAHIAAAxQAAAEADACQACADADAAQAHAAAAAFQAAAEgHAAIgHgBIgLgBIgLABIgHABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAgAguAqIgJgBIgJABIgIABQgGAAgBgEQAAgBABgBQAAAAAAgBQAAAAAAAAQABgBAAAAIAEgBIAGgCQAAgBABAAQAAAAABgBQAAgBAAAAQAAgBAAAAIABgKIAAgnQAAgEgCgDQgDgCgDAAQgHAAAAgFQAAgFAFAAIAGABIAGAAIAGAAIAFgBQABAAAAAAQABAAABAAQAAABABAAQAAAAAAABQACABAAAMIAAAaIAAAVQAAAGABACIADACQACACADAAIAFABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAABQAAAEgHAAIgJgBg");
	this.shape_42.setTransform(237.4,209.825);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AggArQgJgDgGgJQgGgIAAgMQAAgLAMgKQANgKATAAQAGAAAHAEQAIADAAAEQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgEABIgGgCQgEgDgFAAQgKABgGAFQgHAGAAAKQAAALAIAGQAHAGAKAAQAIAAAIgGQAHgFAAgLIAAggQAAgHgFgFQgFgEgHAAQgKAAgKAGIgFADQgDAAgCgCQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgGALgFQALgEAMAAQAQAAAJAIQAKAIAAALIAAAoQAAAJAMADQAAABABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgEABIgHgBIgGgBIgHABIgGABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgCgCQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAIgCABQgOAIgPAAQgIAAgJgEg");
	this.shape_43.setTransform(222.925,209.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAoBXIgJAAIgKAAIgKABQgIAAAAgFIABgDQACgCAGAAQAGgBACgCQACgEAAgEIAAgSIgBgTQAAgHgDgCQgDgEgHAAQgGABgGAFQgFAEgDAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIgBgCQAAgHAMgHQAMgIAHAAQAIAAAHAFQAHAFACAGQABADAAARIAAARIAAANQAAAEABAEQADADAFABQAHAAABABIABAEQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIgHABIgKgBgAgTBXIgLgBIgKABIgJAAQgJAAAAgEIABgDQACgBAGgBQAGgBADgEQABgDAAgGIAAiCQAAgDgCgDQgCgCgGgCIgHgDQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAgBgBQABgEAHAAIAGABIAGAAIAHgBIAGgBQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQACABgBAHIAACSQAAADACADQADACAFABQAHABABABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAEgGgBIgMAAg");
	this.shape_44.setTransform(211.05,205.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAaBTQgHgGgPgRQgKgNgCAAIgDACIgGAGQAAAAgBABQgBAAAAABQAAAAgBABQAAAAAAAAIAAAJQAAADACADQABACAGABQAGABABACQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAgBAAIgLgBIgLgBIgKABIgKABQgHAAAAgEIABgEQABgCAGgBQAGAAACgDQACgDAAgFIAAiDQAAgDgCgDQgCgCgGgCQgGgBgBgCIgBgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBIAEgBIAGABIAHABIAHgBIAFgBQAAAAABABQAAAAABAAQABAAAAAAQAAABABAAQABACABAFQABAEAAAQIAABgQAAAAAAABQAAABAAAAQAAABABAAQAAAAABAAQABAAAJgJIAPgQIABgDIgDgCQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIABgEIAFgBIAIAAIAHABIAKgBIAKgBQAEABADABQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAAFgJAAQgNAAgFACQgFACgGAGIgIAIIAAACQAAADADADIAcAfQADADAEAAQACAAADgDQADgFACAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAHgHAFQgGAHgGAAQgGgBgIgFg");
	this.shape_45.setTransform(198.775,205.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AACAtIgNgBIgJABIgGABIgGgBQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgCIAHgDIAHgEQABgCAAgJIAAgkQAAgEgCgDQgBgCgFgCIgGgDIgBgCQAAgEAGAAIAFAAIAFABIAEAAIAHgBQAGAAAAAOIAAAGIAAADIAFgLQAGgMAFgFQAFgFAGAAQADAAACACQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAEgCABIgFAFQgPAMgIARQgFAQAAALQAAAFAAACQACACAFABIAHADQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQABAEgFAAIgJgBg");
	this.shape_46.setTransform(188.75,209.675);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AggArQgJgDgGgJQgGgIAAgMQAAgLAMgKQANgKATAAQAGAAAHAEQAIADAAAEQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgEABIgGgCQgEgDgFAAQgKABgGAFQgHAGAAAKQAAALAIAGQAHAGAKAAQAIAAAIgGQAHgFAAgLIAAggQAAgHgFgFQgFgEgHAAQgKAAgKAGIgFADQgDAAgCgCQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgGALgFQALgEAMAAQAQAAAJAIQAKAIAAALIAAAoQAAAJAMADQABABAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAQgBABAAAAIgEABIgHgBIgGgBIgHABIgGABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgCgCQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAIgCABQgOAIgPAAQgIAAgJgEg");
	this.shape_47.setTransform(178.875,209.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("Ag5BYIgKgBIgKABIgJABQgDAAgDgCQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAEgCADAAQAMAAAAgOIAAh+QAAgFgDgEQgDgDgGgCQgGAAgCgCQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAABgBIAFgBIAGABIAGABIAGgBIAGgBQACAAACACIAGAKIAbA4IAXAtIADADIABgCIA1hkQAEgJAEgCQADgCADgBIAGABIAGAAIAFAAIAEgBQAGAAAAAGQABAEgHAAQgGAAgDAEIgFAFQgBABAAAHIAAB8QAAAFACADQADAEAHACQAHABABACQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgBABgEABIgKgBIgNgBIgMABIgNABQgHgBgBgFQAAgBABAAQAAgBAAgBQAAAAABAAQAAgBABAAIAEgBQAKgBACgDQACgCAAgJIAAhoIAAgGQgCAAgDAGIgTAmIgVAnIgKAUIgBACIgDABQgDAAgCgFIguhZIgDgHQgBAAAAAHIAABmQAAAEADAEQAFADADAAQAKAAAAAFQABAGgKAAIgIgBg");
	this.shape_48.setTransform(163.55,205.25);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Ag4BYIgKgBIgKABIgJABQgEAAgDgCQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQADgCAFAAQALAAAAgOIAAh+QAAgFgDgEQgDgDgGgCQgGAAgBgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAABgBIAEgBIAHABIAGABIAGgBIAGgBQADAAACACIAEAKIAcA4IAYAtIABADIACgCIA0hkQAFgJADgCQADgCAEgBIAGABIAGAAIAFAAIADgBQAIAAAAAGQgBAEgGAAQgGAAgDAEIgFAFQgBABAAAHIAAB8QAAAFADAEQACADAHACQAHABABACQAAAAABABQAAAAAAABQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAQgCABgEABIgKgBIgNgBIgMABIgMABQgJgBABgFQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAIAGgBQAIgBADgDQACgCAAgJIAAhoIgBgGQgBAAgCAGIgTAmIgWAnIgKAUIgBACIgCABQgEAAgCgFIguhZIgEgHQgBAAAAAHIAABmQAAAEAFAEQAEADADAAQALAAAAAFQgBAGgIAAIgIgBg");
	this.shape_49.setTransform(331.45,168.35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgQBXIgLgDQgEAAgHADIgKACQgKAAAAgHIABgCQABgCAHAAQAGAAADgFQACgDAAgGIAAiDQAAgKgNAAQgIABAAgGQAAgFAIgBIALABIAJABIAMgBQAJgBAKAAQAdAAAQANQAPAOAAARQAAAPgHAIQgHAIgNAFQgNAHgUAAQgLAAAAgIQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABAAIAEgBIAEAAIAGAAQANAAAIgIQAJgJAAgOQAAgOgLgLQgKgKgRAAQgHAAgCABQgDADgBADIgBAKIAACBQAAAKANAAQAFAAACACQAAAAABAAQAAABAAAAQABABAAABQAAAAAAABQAAAFgJAAIgMgCg");
	this.shape_50.setTransform(315.875,168.35);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgcBSQgPgKgJgUQgJgVAAgfQABgmAQgaQASgbAcAAQAOAAAOALQAOAKAJAWQAJAWAAAdQgBApgRAYQgTAZgZgBQgOABgOgLgAgYg2QgKAZAAAiQABAgAIAVQAKAXAPAAQARAAAJgXQAJgVAAgnQAAgkgJgVQgJgUgQAAQgPAAgKAZg");
	this.shape_51.setTransform(299.3,168.25);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgcBSQgPgKgJgUQgJgVAAgfQABgmAQgaQASgbAcAAQAOAAAOALQAOAKAJAWQAJAWAAAdQgBApgRAYQgTAZgZgBQgOABgOgLgAgYg2QgKAZAAAiQABAgAIAVQAKAXAPAAQARAAAJgXQAJgVAAgnQAAgkgJgVQgJgUgQAAQgPAAgKAZg");
	this.shape_52.setTransform(286.25,168.25);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgIAnQgEgDAAgFQAAgGAEgDQAEgEAEABQAGgBADAEQAEAEAAAFQAAAFgEADQgDAEgGAAQgEAAgEgEgAgIgVQgEgEAAgGQAAgEAEgEQAEgDAEAAQAFAAAEAEQAEADgBAGQABAFgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_53.setTransform(278.05,172.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgsBEQgTgZAAgrQABgpASgZQATgZAaAAQAUAAAOAJQAPAJAAAGQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAgBAAIgDABQgDAAgIgFQgJgGgGgCIgMgBQgVAAgLAYQgJAZAAAiQAAAkAKATQAJATASAAQATAAAIgQQAIgQAAgjQAAgUgIgLQgIgLgMAAIgJABIgLAHQgHAEgDAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgCgDQABgGANgHQAMgHAJAAQALAAAOAHQAOAHAHAOQAJANgBARQAAAXgIASQgJASgPAIQgQAJgMAAQgdAAgSgYg");
	this.shape_54.setTransform(269.6,168.275);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgOAqIAAguIgBgDIgGAAQgFAAgCgBQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBIAFgCIAFgCIAGgGQADgFACgIQACgIAAgPQAAgHADAAQAEAAABACIABAHIAAApQAAAAAAABQABAAAAAAQAAABABAAQABAAAAAAIASAAQAFAAAAAFQAAAFgIAAIgPAAIgCAAIAAADIAAArQAAAKABADQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAQAEAAAGgFQAGgEACAAIADABIABAEQAAADgKAIQgJAIgIAAQgSAAAAgcg");
	this.shape_55.setTransform(339.025,140.425);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgjAgQgPgOAAgTQAAgSAQgNQAQgNASAAQAaAAAMANQANANAAASQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgIABIg3AAQgGAAAAgEQgBgFAIAAIAmAAIADgBIABgEQAAgJgHgIQgHgIgPAAQgJAAgLAKQgLAJAAARQAAANAMAKQALAKANAAQALAAAMgGIAGgDIAEABIABADQAAAFgNAGQgOAGgNAAQgVAAgOgOg");
	this.shape_56.setTransform(329.9,142.825);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgeAmQgGgGgBgHQgBgGAAgrQgBgGgMgCQgEgBAAgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBIAEgBIAHABIALABIAEgBIAEgBQAFAAAAARIAAAqQAAAGAEAEQAFAEAGAAQAEAAAEgDQAGgDACAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQgBAEgIAFQgJAFgLAAQgJAAgHgFgAArAnIgIAAIgGAAIgEABQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgCgHIAAgXIAAgfQAAgJgKgBIgHgCQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQABgEAGAAIAIABIAMABIAFAAIACgBQAEAAAAAIIABA7QABADAJACIAFADIABACQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAQgBABgDAAIgHgBg");
	this.shape_57.setTransform(318.3,143.075);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAEBDQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAABAAIAGgDIAGgIQACgFAAgEIAAgXQAAgGgBAAIgGADQgFAEgGACQgEACgJABQgUgBgNgOQgOgMAAgSQAAgVAPgNQAOgNAQAAQAKAAAHAEQAIADAAAFQAAACgEAAIgHgBQgEgCgGABQgNgBgIALQgJAMAAAOQAAAQAPANQAGAFAKAAQAIAAAGgFQAHgEAEgFQADgEAAgKIAAgrQgBgGAHAAIAFABIAGAAIAIgBIAHgBQAHABAAAEQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgIABQgIABgCAEQgDACABAIIAAA/QAAAJgBAIQgBAIgFAGQgFAHgFACQgFADgIAAIgEgBg");
	this.shape_58.setTransform(306.2,144.95);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAGAqQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAEAAADgDQADgCAAgEIAAgkIABgIQAAgJgJAAQgDAAgIAGQgFAFgEAAIgBgBIgCgCQAAgFAMgJQAKgIAKAAQAGAAAFADQAFADABAFQACAFAAAJIAAAHIAAAjQAAAFACACIAGACQAEABABADQgBAEgEAAIgHAAIgLgBIgNABIgGABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAgRAqIgJgBIgKABIgIAAQgHAAAAgEQAAgBABAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAAAIAGgBIADgFQABgCAAgHIAAgnQAAgFgCgCQgCgCgFgBQgGgBAAgEIACgEQACgBADAAIAFABIAFAAIAHAAIAGgBQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAIABAIIAAAWIAAAiIAAAEIAEACIAFACQAEABABACIABADQAAAEgHAAIgJgBg");
	this.shape_59.setTransform(294,142.825);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AggArQgJgEgGgHQgGgJAAgMQAAgMAMgJQANgKATAAQAGAAAHADQAIAEAAAEQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAIgEABIgGgCQgEgCgFgBQgKAAgGAHQgHAFAAAJQAAALAIAHQAHAGAKAAQAIAAAIgGQAHgGAAgJIAAghQAAgHgFgEQgFgGgHAAQgKAAgKAIIgFACQgDAAgCgCQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgHALgEQALgEAMAAQAQAAAJAIQAKAIAAALIAAAoQAAAJAMAEQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAABAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgEABIgHAAIgGgBIgHABIgGAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgCgCQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIgCAAQgOAJgPAAQgIAAgJgEg");
	this.shape_60.setTransform(282.425,142.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AhBBYQgJAAAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgCAGgBQAGAAACgDQACgDAAgEIAAiGQAAgEgCgDQgBgDgGAAQgHAAgBgBQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQACgCADAAIBCAAQAQAAAPALQAPAMAAARQAAAKgHAHQgHAIgLAEIgCABIACABQAWADAQAQQAQAPAAAVQAAAWgTAPQgUAOgkAAIhBgBgAgbgHQgHADAAAFIAABAQAAAHACADQABADAFAAIARABQAbAAAQgMQAQgMAAgWQAAgTgSgMQgRgMgYAAQgMAAgGADgAgehLQgFADAAAHIAAAfQAAAJAGACQAFACALAAQAPABALgJQAKgHAAgOQAAgNgKgHQgLgHgPAAQgMAAgFACg");
	this.shape_61.setTransform(268.825,138.25);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("Ag5BYIgKgBIgKABIgJABQgDAAgDgCQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAEgCADAAQAMAAAAgOIAAh+QAAgFgDgEQgDgDgGgCQgGAAgCgCQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAABgBIAFgBIAGABIAGABIAGgBIAGgBQACAAACACIAGAKIAbA4IAXAtIADADIABgCIA1hkQAEgJAEgCQADgCADgBIAGABIAGAAIAFAAIAEgBQAGAAAAAGQABAEgHAAQgGAAgDAEIgFAFQgBABAAAHIAAB8QAAAFACAEQADADAHACQAHABABACQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgBABgEABIgKgBIgNgBIgMABIgNABQgHgBgBgFQAAgBABAAQAAgBAAgBQAAAAABAAQAAgBABAAIAEgBQAKgBACgDQACgCAAgJIAAhoIAAgGQgCAAgDAGIgTAmIgVAnIgKAUIgBACIgCABQgEAAgCgFIguhZIgDgHQgBAAAAAHIAABmQAAAEADAEQAFADADAAQAKAAAAAFQABAGgKAAIgIgBg");
	this.shape_62.setTransform(218.45,168.35);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgQBXIgLgDQgEAAgHADIgKACQgKAAAAgHIABgCQABgCAHAAQAGAAADgFQACgDAAgGIAAiDQAAgKgNAAQgIABAAgGQAAgFAIgBIALABIAJABIAMgBQAJgBAKAAQAdAAAQANQAPAOAAARQAAAPgHAIQgHAIgNAFQgNAHgUAAQgLAAAAgIQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABAAIAEgBIAEAAIAGAAQANAAAIgIQAJgJAAgOQAAgOgLgLQgKgKgRAAQgHAAgCABQgDADgBADIgBAKIAACBQAAAKANAAQAFAAACACQAAAAABAAQAAABAAAAQAAABABABQAAAAAAABQAAAFgJAAIgMgCg");
	this.shape_63.setTransform(202.875,168.35);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgdBSQgOgKgJgUQgJgVABgfQgBgmASgaQARgbAcAAQANAAAPALQAOAKAJAWQAJAWgBAdQABApgTAYQgRAZgagBQgOABgPgLgAgYg2QgJAZAAAiQAAAgAJAVQAIAXAQAAQARAAAJgXQAJgVAAgnQAAgkgJgVQgKgUgPAAQgPAAgKAZg");
	this.shape_64.setTransform(186.3,168.25);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgmBYQgLgDgIgHQgJgIAAgGQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQADAAAFAGQAIAJAIADQAJADAJAAQAOAAANgJQAPgIAIgPQAJgPAAgVQAAgHgEgJQgEgKgIgGQgHgHgLAAQgGAAgHADIgIADQAAAAgBAAQgBAAAAgBQAAAAgBAAQAAgBAAgBQAAgDADgDIAVghIACgEQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBAAIgiAAQgDAAgDAEQgEAEgCAAQgFAAAAgKIABgHIABgFQAAgIAIAAIBHAAQAKAAAAAFIgBADQgBABgHADQgGADgDAEIgTAdIgBACQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIAIAAQAWAAAPARQAOARAAAWQAAATgOAUQgPATgTAJQgTAJgSAAQgJAAgLgEg");
	this.shape_65.setTransform(172.725,168.525);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgIAnQgEgDAAgFQAAgGAEgDQAEgEAEABQAFgBAEAEQAEAEAAAFQAAAFgEADQgEAEgFAAQgEAAgEgEgAgIgVQgEgEAAgGQAAgEAEgEQAEgDAEAAQAFAAAEAEQAEADAAAGQAAAFgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_66.setTransform(164.4,172.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAkBbQgFgCgJAAIgNACIgJABQgEAAgCgCQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBQABgBAGgBQAHgBACgCQABgDAAgGIAAgmQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgOgGgaAAQgKAAgIAEIgLAEIgDgBIgBgDQAAgCADgDIBThqQAEgFADAAIADACIABAEIAAAFIgBAHIAABVQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAIAHAAQAIAAAFgCIAGgBIACABIABACQAAAFgKAFQgLAFgHAAIgCABIgBACIAAAkQAAAHADACQACACAEABQALAAAAAGQAAAFgJAAIgIgBgAAGgtIgpA1IgBACIACAAQALgEAMAAIAOABIAFABQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIAAgyQAAgBAAgBQAAgBgBgBQAAAAAAAAQAAgBAAAAIgEAEg");
	this.shape_67.setTransform(156.175,168.125);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AALBWIgLgBIgJABIgKACQgFAAgBgCQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgCAGAAQAGgBACgDQACgDAAgFIAAiCQAAgEgCgDQgCgEgGgCQgGgBgBgBQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBIAFgBIAFABIAGAAIAGAAIAGgBQADAAACACQACACAAAGIAACRQAAAEACACQACACAFABQAGACACABIABADQAAAEgGABIgLgCg");
	this.shape_68.setTransform(226.125,138.45);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgVA+QgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBIACgDIAFgBQAFgBACgCQABgDAAgIIAAgoQAAgFgCgCIgGgCIgGgDIgBgDQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAQABAAAAAAIAGABIAGABIAGgBIAGAAQAEgBAAAIIAAADIAAADIAAAyQAAAGACACQACABAEABIAFABQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAAFgHAAIgKgBIgIAAIgIAAIgJABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAgIgpQgEgDAAgGQAAgEAEgFQAEgDAEAAQAFAAAFAEQAEAEAAAFQAAAGgEADQgEADgGABQgEAAgEgFg");
	this.shape_69.setTransform(219.875,140.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AggArQgJgEgGgHQgGgJAAgMQAAgMAMgJQANgKATAAQAGAAAHADQAIAEAAAEQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAIgEABIgGgCQgEgCgFgBQgKAAgGAHQgHAFAAAJQAAALAIAHQAHAGAKAAQAIAAAIgGQAHgGAAgJIAAghQAAgHgFgEQgFgGgHAAQgKAAgKAIIgFACQgDAAgCgCQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgHALgEQALgEAMAAQAQAAAJAIQAKAIAAALIAAAoQAAAJAMAEQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAABAAABQAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAIgEABIgHAAIgGgBIgHABIgGAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIgCgCQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIgCAAQgOAJgPAAQgIAAgJgEg");
	this.shape_70.setTransform(210.925,142.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgOAqIAAguIgBgDIgGAAQgFAAgCgBQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBIAFgCIAFgCIAGgGQADgFACgIQACgIAAgPQAAgHADAAQAEAAABACIABAHIAAApQAAAAAAABQABAAAAAAQAAABABAAQABAAAAAAIASAAQAFAAAAAFQAAAFgIAAIgPAAIgCAAIAAADIAAArQAAAKABADQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAQAEAAAGgFQAGgEACAAIADABIABAEQAAADgKAIQgJAIgIAAQgSAAAAgcg");
	this.shape_71.setTransform(201.375,140.425);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAaBTQgHgFgPgSQgKgNgCAAIgDADIgGAFQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAIAAAJQAAADACADQABACAGABQAGABABABQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAgBAAIgLgBIgLgBIgKABIgKABQgHAAAAgEIABgEQABgBAGgBQAGgBACgDQACgDAAgEIAAiEQAAgEgCgCQgCgDgGgBQgGgCgBgBIgBgEQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIAEgBIAGABIAHABIAHgBIAFgBQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQABABABAGQABAFAAAQIAABfQAAAAAAABQAAABAAAAQABABAAAAQAAAAABAAQABAAAJgJIAPgRIABgBIgDgCQAAgBgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIABgEIAFgBIAIABIAHAAIAKAAIAKgBQAEAAADABQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAAFgJAAQgNAAgFACQgFACgGAGIgIAIIAAACQAAAEADACIAcAfQADADAEAAQACAAADgEQADgDACAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAGgHAHQgGAFgGAAQgGABgIgGg");
	this.shape_72.setTransform(191.625,138.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgdAhQgQgNAAgUQAAgSAPgOQAPgOAUAAQALAAAOAFQAPAFAAAEIAAALIABAEQAAAGgFAAQgEAAgCgHQgCgIgHgEQgHgEgKAAQgLAAgLAJQgLAJAAAQQAAAQAMAKQAMAKAMAAIAKgBIAMgFQAGgEADAAQADAAAAAGQAAADgMAGQgNAGgNAAQgVAAgQgOg");
	this.shape_73.setTransform(180.225,142.775);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgjAhQgPgNAAgUQAAgRANgOQAOgOAYAAQAUAAAPAOQAPAOAAARQAAAUgOANQgOANgYAAQgTAAgPgNgAgVgZQgIAKAAAPQAAAQAJAKQAJAJAMAAQAOAAAIgKQAJgKAAgPQAAgPgJgKQgJgJgOAAQgNAAgIAJg");
	this.shape_74.setTransform(169.775,142.775);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgkBPQgWgNgLgWQgLgWAAgXQAAgYALgVQALgVAUgLQAUgMAaAAQARAAAPAEQAOAFAJAGQAIAGAAAEIAAAJIgBAFIABAEIABAGQAAAEgFAAIgDgBIgFgJQgGgOgIgGQgNgMgXAAQgdAAgRAWQgRAWAAAjQAAAkASAWQASAWAeAAQAIAAARgFQARgFARgQQAEgDACAAIADACQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAAEgKAKQgJAJgQAHQgQAGgSAAQgcAAgUgMg");
	this.shape_75.setTransform(156.025,138.175);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("Ag5BYIgKgBIgJABIgJABQgEAAgDgCQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQADgCAFAAQALAAAAgOIAAh+QAAgFgDgEQgDgDgGgCQgGAAgCgCQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAABgBIAFgBIAGABIAGABIAGgBIAGgBQADAAACACIAEAKIAcA4IAXAtIACADIACgCIA0hkQAFgJADgCQAEgCADgBIAGABIAGAAIAFAAIADgBQAIAAgBAGQAAAEgGAAQgGAAgDAEIgFAFQgBABAAAHIAAB8QAAAFACAEQADADAHACQAHABABACQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgCABgEABIgKgBIgNgBIgMABIgNABQgIgBAAgFQAAgBABAAQAAgBAAgBQAAAAABAAQAAgBAAAAIAGgBQAIgBADgDQACgCAAgJIAAhoIgBgGQgBAAgCAGIgTAmIgWAnIgKAUIgBACIgCABQgEAAgCgFIguhZIgDgHQgBAAAAAHIAABmQAAAEADAEQAEADAEAAQAKAAABAFQAAAGgKAAIgIgBg");
	this.shape_76.setTransform(98.55,168.35);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgQBXIgLgDQgEAAgHADIgKACQgKAAAAgHIABgCQABgCAHAAQAGAAADgFQACgDAAgGIAAiDQAAgKgNAAQgIABAAgGQAAgFAIgBIALABIAJABIAMgBQAJgBAKAAQAdAAAQANQAPAOAAARQAAAPgHAIQgHAIgNAFQgNAHgUAAQgLAAAAgIQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABAAIAEgBIAEAAIAGAAQANAAAIgIQAJgJAAgOQAAgOgLgLQgKgKgRAAQgHAAgCABQgDADgBADIgBAKIAACBQAAAKANAAQAFAAACACQAAAAABAAQAAABAAAAQAAABABABQAAAAAAABQAAAFgJAAIgMgCg");
	this.shape_77.setTransform(82.975,168.35);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgcBSQgPgKgJgUQgJgVAAgfQAAgmARgaQASgbAcAAQANAAAPALQAOAKAJAWQAIAWAAAdQAAApgSAYQgRAZgagBQgOABgOgLgAgYg2QgKAZAAAiQABAgAIAVQAKAXAPAAQAQAAAKgXQAJgVAAgnQAAgkgJgVQgKgUgPAAQgPAAgKAZg");
	this.shape_78.setTransform(66.4,168.25);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgmBYQgLgDgIgHQgJgIAAgGQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQADAAAFAGQAIAJAIADQAJADAJAAQAOAAANgJQAPgIAIgPQAJgPAAgVQAAgHgEgJQgEgKgIgGQgHgHgLAAQgGAAgHADIgIADQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAgBQAAgDADgDIAVghIACgEQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBAAIgiAAQgDAAgDAEQgEAEgCAAQgFAAAAgKIABgHIABgFQAAgIAIAAIBHAAQAKAAAAAFIgBADQgBABgHADQgGADgDAEIgTAdIgBACQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIAIAAQAWAAAPARQAOARAAAWQAAATgOAUQgPATgTAJQgTAJgSAAQgJAAgLgEg");
	this.shape_79.setTransform(52.825,168.525);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgIAnQgEgDAAgFQAAgGAEgDQAEgEAEABQAGgBADAEQAEAEAAAFQAAAFgEADQgDAEgGAAQgEAAgEgEgAgIgVQgEgEAAgGQAAgEAEgEQAEgDAEAAQAFAAAEAEQAEADgBAGQABAFgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_80.setTransform(44.5,172.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgmBYQgLgDgIgHQgJgIAAgGQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQADAAAFAGQAIAJAIADQAJADAJAAQAOAAANgJQAPgIAIgPQAJgPAAgVQAAgHgEgJQgEgKgIgGQgHgHgLAAQgGAAgHADIgIADQAAAAgBAAQgBAAAAgBQAAAAgBAAQAAgBAAgBQAAgDADgDIAVghIACgEQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBAAIgiAAQgDAAgDAEQgEAEgCAAQgFAAAAgKIABgHIABgFQAAgIAIAAIBHAAQAKAAAAAFIgBADQgBABgHADQgGADgDAEIgTAdIgBACQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIAIAAQAWAAAPARQAOARAAAWQAAATgOAUQgPATgTAJQgTAJgSAAQgJAAgLgEg");
	this.shape_81.setTransform(35.775,168.525);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgDA/QgFgCAAgCIABgDIACgBIAEABQACACAEAAQAHAAAGgFQAHgEACgJQACgIAAgPIgBg/QAAgHgJgBQgJgBAAgFQAAgFAHAAIAHABIAJABIAGgBIAEgBQAEAAAAAGIABAjIAAAeQAAAbgGAMQgHALgHAFQgHAFgLAAQgJAAgEgDgAgTAQQgHgEgCgHQgCgGAAgRIAAgYQAAgKgJgCIgGgCQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAgBIABgDQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHACIAHABIAHgBIAHgCIACABIABACIABARIAAAdIABAPQABAEADADQAEADAGAAQAEAAAFgDQAFgEACAAQABAAABAAQAAABABAAQAAABAAAAQAAABAAABQAAADgJAGQgKAGgJAAQgGAAgIgFg");
	this.shape_82.setTransform(110.975,145.225);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAGAqQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAEAAADgDQADgCAAgEIAAgkIABgIQAAgJgJAAQgEAAgGAGQgHAFgCAAIgCgBIgCgCQAAgFAMgJQAKgIAKAAQAHAAAEADQAFADABAFQACAFAAAJIAAAHIAAAjQAAAFABACIAHACQAFABAAADQAAAEgFAAIgIAAIgKgBIgMABIgHABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAgRAqIgJgBIgJABIgJAAQgGAAgBgEQAAgBABAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAABAAIAEgBIAEgFQABgCAAgHIAAgnQAAgFgBgCQgCgCgGgBQgGgBAAgEIACgEQACgBADAAIAFABIAFAAIAHAAIAGgBQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAIABAIIAAAWIAAAiIAAAEIADACIAGACQADABACACIABADQgBAEgFAAIgKgBg");
	this.shape_83.setTransform(99.85,142.825);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgjAhQgPgNAAgUQAAgRANgOQAOgOAYAAQAUAAAPAOQAPAOAAARQAAAUgOANQgOANgYAAQgTAAgPgNgAgVgZQgIAKAAAPQAAAQAJAKQAJAJAMAAQAOAAAIgKQAJgKAAgPQAAgPgJgKQgJgJgOAAQgNAAgIAJg");
	this.shape_84.setTransform(88.575,142.775);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAhAqQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgEAFAAQAGgBABgCQACgDAAgDIAAguQAAgDgCgCQgCgCgDAAQgFAAgHAGQgHAFgDAAIgCgBIgBgCQAAgFAKgJQAMgIAKAAQAOAAAEALQACADAAAgIAAAVQAAAEACACQACACAEAAQAEABABACIABACQAAAFgGAAIgHgBIgLgBIgKABIgJABIgEgBgAgVAqQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQgBgDAFAAQAEAAAEgDQADgCAAgFIAAguQAAgDgDgCQgCgCgDAAQgGAAgIAHQgFAEgCAAQgBAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAgGALgIQAMgIAIAAQAIAAAGAFQAFAGAAAHIAAAxQAAAEADACQACADADAAQAHAAAAAFQAAAEgHAAIgHgBIgLgBIgLABIgHABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAgAguAqIgJgBIgJABIgIABQgGAAgBgEQAAgBABgBQAAAAAAgBQAAAAAAAAQABgBAAAAIAEgBIAGgCQAAgBABAAQAAgBABAAQAAAAAAgBQAAgBAAAAIABgKIAAgnQAAgEgCgDQgDgCgDAAQgHAAAAgFQAAgFAFAAIAGABIAGAAIAGAAIAFgBQABAAAAAAQABAAABAAQAAAAABABQAAAAAAABQACABAAAMIAAAaIAAAVQAAAGABACIADACQACACADAAIAFABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAABQAAAEgHAAIgJgBg");
	this.shape_85.setTransform(74.5,142.825);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgkAgQgOgOAAgTQAAgSAQgNQAPgNAUAAQAZAAANANQAMANAAASQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgHABIg3AAQgGAAgBgEQAAgFAIAAIAlAAIAEgBIABgEQAAgJgHgIQgIgIgOAAQgJAAgLAKQgLAJAAARQAAANALAKQAMAKANAAQALAAAMgGIAGgDIAEABIABADQAAAFgNAGQgOAGgNAAQgVAAgPgOg");
	this.shape_86.setTransform(60.3,142.825);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AABAtIgLgBIgKABIgGABIgFgBQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBIACgCIAGgDIAHgEQABgCAAgJIAAgkQAAgEgCgDQgCgCgEgCIgGgDIgBgCQAAgEAFAAIAGAAIAFABIAEAAIAHgBQAGAAAAAOIAAAGIAAADIAGgLQAFgMAFgFQAFgFAFAAQAFAAACACQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQABAEgCABIgFAFQgQAMgGARQgHAQAAALQABAFAAACQABACAGABIAHADQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAEgEAAIgKgBg");
	this.shape_87.setTransform(51.1,142.675);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgjAgQgPgOAAgTQAAgSAQgNQAPgNAUAAQAZAAANANQAMANAAASQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgHABIg3AAQgHAAAAgEQABgFAGAAIAmAAIAEgBIABgEQAAgJgHgIQgIgIgOAAQgJAAgLAKQgLAJAAARQAAANALAKQAMAKANAAQALAAAMgGIAHgDIADABIABADQAAAFgNAGQgOAGgNAAQgVAAgOgOg");
	this.shape_88.setTransform(41.5,142.825);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgkBPQgWgNgLgWQgLgWAAgXQAAgYALgVQALgVAUgLQAUgMAaAAQARAAAPAEQAOAFAJAGQAIAGAAAEIAAAJIgBAFIABAEIABAGQAAAEgFAAIgDgBIgFgJQgGgOgIgGQgNgMgXAAQgdAAgRAWQgRAWAAAjQAAAkASAWQASAWAeAAQAIAAARgFQARgFARgQQAEgDACAAIADACQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAAEgKAKQgJAJgQAHQgQAGgSAAQgcAAgUgMg");
	this.shape_89.setTransform(27.775,138.175);

	this.instance = new lib.Symbol27();
	this.instance.setTransform(189.45,74.8,1,1,0,0,0,162.2,74.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,122.3,372.09999999999997,263.3);


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

	this.timeline.addTween(cjs.Tween.get(this.seal_button).wait(1).to({regX:83.7,regY:95.8,x:69.9,y:79.9,alpha:0.8889},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119.8,125.2);


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

	// seal
	this.seal_button = new lib.Symbol40();
	this.seal_button.name = "seal_button";
	this.seal_button.setTransform(272.85,183.15,0.8339,0.8339,0,0,0,78.3,71.9);

	this.timeline.addTween(cjs.Tween.get(this.seal_button).wait(1));

	// Layer_2
	this.instance = new lib.Symbol36();
	this.instance.setTransform(279.6,0,1,1,0,0,0,279.6,0);

	this.instance_1 = new lib.Symbol45();
	this.instance_1.setTransform(279.6,194.35,1,1,0,0,0,279.6,124.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,559.2,319.1), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgvBSQgUgOAAgZQAAgOAJgMQAKgMAPgGIABgBIgCgBQgHgEgEgIQgEgIAAgIQAAgPAMgJQAMgJATgCQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABgBQACgHAHgIQAHgIAGgCQAGgCAOAAQAJAAAAAJQAAAEgEAEQgFADgGAAIgEAAIgDgBQgHAAgFAEQgFAEAAACQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAABAAQARACALAKQAKAKAAAPQAAAQgOAKIgBABIAAABQAPAGAJANQAJANAAAOQAAAXgVAPQgUAOgbAAQgbAAgUgPgAggAQQgLALAAASQAAASANALQAOALAQAAQASgBANgKQANgMAAgRQAAgSgMgLQgNgKgTAAQgUAAgMAKgAgPgzQgEACgEAHQgDAFAAAIQAAAKAIAHQAJAIAKAAQALAAAIgIQAIgIAAgLQAAgGgEgGQgDgFgGgDQgGgEgDAAQAAAAAAABQAAAAAAAAQgBAAAAAAQAAABAAAAQgCAHgEAAQgFAAAAgGQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAgBgBAAIgHADg");
	this.shape.setTransform(470.325,148.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAHAyQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAQAFAAADgDQAEgDAAgFIAAgrIABgJQAAgMgLAAQgEAAgJAHQgHAHgDAAIgDgBQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgFAOgKQAMgLANAAQAIAAAFAEQAGAEACAGQACAGAAAKIgBAKIAAApQAAAGADACQACACAFACQAGABAAADQAAAFgGAAIgJgBIgNAAIgPABIgHABIgFgCgAgUAyIgLgBIgMABIgKABQgIAAAAgFQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAQABgCAEAAQAFAAABgCIAFgGQABgCAAgJIAAguQAAgGgCgCQgDgDgGgBQgHgBAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQADgCADAAIAGABIAHABIAHgBIAHgBQADAAACACIABAKIAAAaIgBApQAAAEABABIAEADIAGACQAFABABACQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAEgIAAIgKgBg");
	this.shape_1.setTransform(456.275,147.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaBKQgCgCAAgDQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQABgCAGgBQAFgBACgCQADgDAAgKIAAgwQAAgHgEgCQgCgCgFgBQgFgBgBgBIgBgEQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQABgCADAAIAHACIAIABIAHgBIAHgBQAFAAAAAJIAAAEIAAADIAAA8QAAAIADACQACACAEABIAHABQACACgBADQAAAFgIAAIgLgBIgKgBIgKACIgKABQgDAAgDgCgAgKgxQgEgEgBgHQABgGAEgEQAFgFAFAAQAHAAAEAFQAGAFAAAHQAAAGgGAEQgEAEgGAAQgGAAgFgFg");
	this.shape_2.setTransform(445.45,144.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1BcQgRgRAAgVQgBgYATgQQARgPAXAAQAKAAAJAEQAKAFAAAFIgBAEIgDABIgKgEQgHgDgHAAQgOAAgLAMQgKAMAAASQAAAOAJAPQAJANARAAQAJABAJgFQALgFAEgIQADgIAAgQIAAh9QAAgNgEgEQgFgFgHgDQgIgCgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQACgCAEABIAHAAIAJABIALAAIAGgBQAGAAABACQACAEAAAFIAAAQIAAAKIAACLQAAAHADAGQADAGAHADQAIACABABIABADQABAHgHgBIgGgBQgFgBgFAAIgKABIgHABQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgBgCIgCABQgXANgOAAQgVAAgSgRg");
	this.shape_3.setTransform(434.25,142.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag1BcQgRgRgBgVQAAgYASgQQASgPAXAAQAKAAAJAEQAKAFAAAFIgBAEIgDABIgKgEQgHgDgHAAQgPAAgKAMQgKAMAAASQAAAOAJAPQAJANARAAQAIABAKgFQAMgFADgIQADgIAAgQIAAh9QAAgNgEgEQgFgFgHgDQgIgCgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQACgCAEABIAHAAIAJABIALAAIAGgBQAGAAABACQACAEAAAFIAAAQIAAAKIAACLQAAAHADAGQADAGAHADQAIACABABIABADQABAHgHgBIgGgBQgEgBgGAAIgKABIgHABQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgBgCIgCABQgXANgOAAQgVAAgSgRg");
	this.shape_4.setTransform(419.3,142.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrAmQgRgRAAgXQgBgWAUgPQASgQAYAAQAeAAAPAQQAPAQABAVQAAAEgDABIgJABIhBAAQgJAAAAgFQAAgGAJAAIAtAAIAFgBQAAAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAgLgIgKQgJgKgSAAQgLAAgNAMQgNAMAAAUQAAAPANANQAPAMAPAAQANAAAPgIIAHgDQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAABAAAAQAAAFgQAIQgQAIgQAAQgZAAgSgSg");
	this.shape_5.setTransform(405.2,147.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjA0IgEgHIgjhGQgHgOgGAAQgGAAgCgCQgDgCAAgDQgBgFAIgBQAHAAAGACIAJABIAJgBIAIgCQAGAAACACQACABAAAEQAAAEgGABQgEACAAAEIACAHIAUAmQAAABABABQAAABABAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAABgBQAAgBABgBIAUgvIAFgLQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQADAAADAFIAfA4QAAABABABQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBABgBIARgmIADgIQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgHgBQgFgBgCgCQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgEACgBIAGgBIAIABIAKABIAHgBIAKgBQAHAAAAAGQAAAEgKACQgIAAgGAOIgcBGQgDAIgEAAQgDAAgCgDIgDgGIgdgzQgCgEgBAAQgBAAgCAEIgWA1IgBACQgDAGgEAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAg");
	this.shape_6.setTransform(389,147.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AACA2QgHgCgIAAIgLACIgIABQgEAAgCgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIABgDQACgCAGgBQAHgDABgCQACgCAAgLIAAgsQAAgEgCgDQgCgEgGgCQgGgBgBgCIgBgDQAAgFAHAAIAGABIAGAAIAFAAIAIgBQAIABAAARIAAAHIAAADQABABAFgOQAGgOAHgGQAFgGAHAAQAFAAACACQADACAAACQAAAEgCACQgBACgFAEQgSANgJAVQgHAUAAANQAAAGABACQACACAGACQAGABADACQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAFgFAAIgLgBg");
	this.shape_7.setTransform(370.1,147);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaBKQgCgCAAgDQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQABgCAGgBQAFgBACgCQADgDAAgKIAAgwQAAgHgEgCQgCgCgFgBQgFgBgBgBIgBgEQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQABgCADAAIAHACIAHABIAIgBIAHgBQAFAAAAAJIAAAEIAAADIAAA8QAAAIADACQACACAEABIAHABQACACgBADQAAAFgIAAIgLgBIgKgBIgKACIgKABQgDAAgDgCgAgKgxQgEgEgBgHQABgGAEgEQAFgFAFAAQAHAAAEAFQAGAFAAAHQAAAGgGAEQgEAEgGAAQgGAAgFgFg");
	this.shape_8.setTransform(361.3,144.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgrAmQgSgRAAgXQAAgWAUgPQASgQAXAAQAfAAAPAQQAQAQAAAVQgBAEgCABIgIABIhDAAQgIAAAAgFQAAgGAIAAIAuAAIAFgBQAAAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAgLgJgKQgJgKgRAAQgLAAgNAMQgNAMAAAUQAAAPANANQAOAMAQAAQANAAAPgIIAIgDQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAABAAAAQAAAFgQAIQgQAIgQAAQgaAAgRgSg");
	this.shape_9.setTransform(350.95,147.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AADBjQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQABgCAIgBQAHAAADgEQACgEAAgFIAAgWIgBgXQAAgHgEgEQgEgDgHAAQgHAAgJAHQgFAEgDAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBIgCgDQAAgHAPgJQAPgJAJAAQAJAAAIAFQAIAFADAIQABADAAAVIAAAVIAAAPQAAAFACAEQADAEAHABQAHABACABIABAEQAAABAAABQgBABAAAAQAAABAAAAQgBAAAAABIgJAAIgLAAIgMgBIgMABIgMABQgKAAAAgHgAgWBoIgNgBIgNABIgMABQgKAAAAgFQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQABgBAIgBQAHgBADgEQACgFAAgGIAAicQAAgEgCgDQgDgDgHgCQgHgDgCgBIgBgDQAAgFAJAAIAHAAIAIABIAHgBIAHgCQAEAAACACQACACAAAIIAACvQAAAEACADQACADAHABQAIABABACQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAFgIAAIgNgBg");
	this.shape_10.setTransform(337.025,141.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAyIAAg3IgBgDIgIAAQgGAAgCgCQgCgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAHgCIAHgDIAGgHQAFgFABgLQACgJAAgSQAAgJAFAAQAEAAACACQABADAAAFIAAAyQAAADAEAAIAUAAQAHAAAAAFQAAAGgJAAIgTAAIgCABIAAAEIAAAyQAAANABADQABAEADAAQAEAAAIgFQAGgGADAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAAEgLAKQgMAJgJAAQgWAAAAgig");
	this.shape_11.setTransform(325.05,144.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgqAoQgSgQAAgXQgBgWARgQQAQgRAdAAQAYAAATARQASAQAAAVQgBAZgRAPQgRAPgdAAQgWAAgSgPgAgZgeQgKAMAAASQAAATALAMQAKALAPAAQARAAAKgMQAKgMAAgSQAAgSgLgLQgLgMgQAAQgQAAgJALg");
	this.shape_12.setTransform(309.35,147.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRAyIAAg3IgBgDIgIAAQgGAAgCgCQgCgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAGgCIAIgDIAHgHQADgFACgLQACgJAAgSQAAgJAFAAQAFAAABACQABADAAAFIAAAyQAAADAEAAIAVAAQAGAAAAAFQAAAGgJAAIgTAAIgCABIAAAEIAAAyQAAANAAADQACAEADAAQAEAAAIgFQAGgGADAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAAEgMAKQgLAJgJAAQgWAAAAgig");
	this.shape_13.setTransform(298.15,144.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgkAtQgIgGgBgIQgBgIAAg0QAAgHgOgDQgHgBAAgEQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQACgCADAAIAJABIANACIAFgBIAFgCQAFAAAAAUIAAAzQAAAIAFAEQAGAFAHAAQAFAAAFgEQAHgDADAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAAEgKAHQgKAGgOAAQgLAAgIgHgAAzAvIgJgBIgGABIgGACQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgCgJIAAgaIAAgnQAAgKgLgCQgHgBgCgBQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgGAJAAIAJACQAGABAIAAIAFAAIAEgBQAEAAAAAJQAABDABAEQABAEALADIAHACIABADQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgDACgEAAIgIgCg");
	this.shape_14.setTransform(281.575,147.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgqAoQgTgQABgXQgBgWARgQQAQgRAdAAQAYAAASARQATAQgBAVQAAAZgRAPQgSAPgcAAQgWAAgSgPgAgZgeQgKAMAAASQAAATALAMQAKALAPAAQARAAAKgMQAKgMAAgSQAAgSgLgLQgLgMgQAAQgQAAgJALg");
	this.shape_15.setTransform(267.85,147.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgEBMQgGgDAAgDIABgCQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABAAIAFACQACABAFAAQAIAAAIgFQAIgGACgJQACgKAAgTIAAhMQgBgHgKgCQgLgCAAgFQAAgGAIAAIAJABIALABIAGgBIAFgBQAGAAAAAIIAAApIAAAkQAAAhgHAOQgIAOgJAFQgIAGgNAAQgLAAgFgDgAgXATQgJgFgCgIQgDgHAAgVIABgdQAAgMgLgCIgIgCQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgBIABgEQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAIAJACIAIABIAIgBIAJgCIACABIACADIAAAUIABAjIABASQAAAEAFAEQAEADAHAAQAGAAAGgDQAGgEACAAQABAAABAAQAAABABAAQAAABABAAQAAABAAABQAAAEgMAHQgMAHgKAAQgIAAgJgGg");
	this.shape_16.setTransform(252.975,150.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgrAmQgSgRAAgXQAAgWAUgPQASgQAXAAQAfAAAPAQQAQAQAAAVQgBAEgCABIgIABIhDAAQgIAAAAgFQAAgGAIAAIAuAAIAFgBQAAAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAgLgJgKQgJgKgRAAQgLAAgNAMQgNAMAAAUQAAAPANANQAOAMAQAAQANAAAPgIIAIgDQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAABAAAAQAAAFgQAIQgQAIgQAAQgaAAgRgSg");
	this.shape_17.setTransform(235.4,147.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRAyIAAg3IgBgDIgIAAQgGAAgCgCQgCgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAHgCIAHgDIAGgHQAFgFABgLQACgJAAgSQAAgJAFAAQAEAAACACQABADAAAFIAAAyQAAADAEAAIAUAAQAHAAAAAFQAAAGgJAAIgTAAIgCABIAAAEIAAAyQAAANABADQABAEADAAQAEAAAIgFQAGgGADAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAAEgLAKQgMAJgJAAQgWAAAAgig");
	this.shape_18.setTransform(224.25,144.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgaBKQgDgCABgDQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQACgCAFgBQAFgBADgCQACgDAAgKIAAgwQAAgHgEgCQgCgCgFgBQgFgBgBgBIgBgEQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQABgCAEAAIAGACIAHABIAIgBIAHgBQAFAAAAAJIAAAEIAAADIAAA8QAAAIADACQACACAEABIAHABQABACAAADQABAFgJAAIgLgBIgKgBIgKACIgKABQgDAAgDgCgAgKgxQgFgEAAgHQAAgGAFgEQAFgFAFAAQAGAAAFAFQAGAFAAAHQAAAGgGAEQgEAEgHAAQgFAAgFgFg");
	this.shape_19.setTransform(216.05,144.725);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgEAvIgkhIQgDgHgGgDQgFgFgFAAQgFAAgDgCQgDgBAAgDQABgGAHAAIAOABIALABIAMgBIAMgBQAFAAACABQADACAAAEIgCADIgGACIgGACIgCAEIADAHIATApQAAABABABQAAAAAAABQABAAAAAAQAAABAAAAQADAAACgFIASgoQACgDAAgEQABgFgGgBIgHgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAgDACgBIAGgBIAHABQAFABAGAAQAGAAAGgBIAIgBQAIAAAAAEQAAABgBABQAAABAAABQAAAAAAABQAAAAAAAAIgJACIgJADQgDACgDAEQgDADgEAIIgfBCIgBACQgCAHgEAAQgCAAgDgHg");
	this.shape_20.setTransform(205.5,147.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAHAyQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAQAFAAADgDQAEgDAAgFIAAgrIABgJQAAgMgLAAQgEAAgJAHQgHAHgDAAIgDgBQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgFAOgKQAMgLANAAQAIAAAFAEQAGAEACAGQACAGAAAKIgBAKIAAApQAAAGADACQACACAFACQAGABAAADQAAAFgGAAIgJgBIgNAAIgPABIgHABIgFgCgAgUAyIgLgBIgMABIgKABQgIAAAAgFQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAQABgCAEAAQAFAAABgCIAFgGQABgCAAgJIAAguQAAgGgCgCQgDgDgGgBQgHgBAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQADgCADAAIAGABIAHABIAHgBIAHgBQADAAACACIABAKIAAAaIgBApQAAAEABABIAEADIAGACQAFABABACQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAEgIAAIgKgBg");
	this.shape_21.setTransform(191.625,147.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AANBpIgNgCIgKABIgMABQgLABAAgIIACgDQAAgBAIgBQAGgCADgFQACgFABgGIAAiXQgBgIgDgDQgDgDgFgCIgHgDQgCgBAAgFQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIAOABIANABIANgBIAMgBQAIAAAAAGQAAADgCACQgCACgGAAQgGACgCAFQgDAEAAALIAACWQAAAEACADQACADAHADQAHABABACQAAABABAAQAAABAAAAQAAABAAABQAAAAABABQAAAGgKgBIgLgBg");
	this.shape_22.setTransform(180.7,141.75);

	this.instance = new lib.Symbol53();
	this.instance.setTransform(139.9,247.1,1,1,0,0,0,120.4,35.3);

	this.instance_1 = new lib.Symbol53();
	this.instance_1.setTransform(523.55,247.1,1,1,0,0,0,120.4,35.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhRDnQgpgbgZg7QgYg6AAhaQAAhpAxhLQAwhLBQAAQAlAAApAfQAoAfAYA8QAYA8AABVQAABygyBEQgyBEhIAAQgoAAgpgcgAhEiZQgcBGAABhQAABYAaA+QAZA9AtAAQAvAAAZg9QAbg9AAhwQAAhjgbg6QgZg5grAAQgsAAgcBGg");
	this.shape_23.setTransform(334.7,257.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAvD9QgUgDgSAAQgdAAgPADIgTACQgWAAAAgUQAAgFAEgDQADgEASgCQASgCAGgJQAGgJAAgNIABlBQAAgLgGgGQgGgHgEAAQgIAAgNAKQgOAKgGAAQgQAAAAgRQAAgGALgJQALgJAcgTIAogcQAbgTAJgFQAIgFAHAAQALAAAAAMQAAAIgHALQgNAUAAAZIACESIgBBgQAAALAFAIQAFAIATADQASAEAEAEQADAEAAAHQAAAFgFAEQgGAFgKAAIgagCg");
	this.shape_24.setTransform(305.325,257.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhnCeIgRgDQgGAAgMADIgQACQgIAAgEgDQgEgEgBgEQABgEAFgDQAFgDAHAAQAVAAAAgZIAAjlQAAgIgFgHQgGgHgKgBQgLgBgEgEQgDgCAAgGQAAgDAEgCQAFgDAEAAQAEAAAIACIALACIAKgCIAKgCQAFAAAEAEQADAEAFANIAzBkIApBTQADAGACAAQABgBABgEIBgi1QAHgPAGgFQAGgDAHAAIAKABIALABIAJgCIAHgBQAMAAgBAKQAAAIgLgBQgKAAgHAHIgIAJQgCAEABALIAADgQAAAJADAHQAFAHAMADQANACADACQACADAAAEQAAAEgDADQgEACgGAAIgTgBQgOgDgJAAIgVADIgYABQgNAAAAgKQAAgFADgCQADgCAGAAQAQgCAEgEQAFgEAAgQIAAi7QAAgMgBAAQgCAAgGALIgiBCIgnBKIgRAiIgDAFQgCABgDAAQgGAAgEgJIhSihQgFgLgCAAQgBAAAAALIAAC5QAAAIAHAFQAHAGAHAAQASAAAAAKQAAAKgQAAIgPgCg");
	this.shape_25.setTransform(567.5,252.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgeCcQgPgEgFAAQgGAAgNAEQgNAEgFAAQgSAAAAgLQAAgDABgCQACgCANgBQAMgBAEgHQAEgHAAgKIAAjtQAAgSgYAAQgPAAABgKQgBgJAPAAIAUACQAKACAIAAIAVgDQAPgCAUAAQA0AAAcAYQAbAXABAhQgBAagNAOQgMAOgXALQgXAKgkAAQgVAAAAgMQAAgDADgDQADgCAFAAIAIABIAKAAQAYAAAPgOQAQgPAAgaQgBgZgSgTQgUgTggAAQgLAAgFADQgFADgBAGIgBAUIAADoQAAARAWAAQAJAAAEADQAEADAAAFQAAAJgRAAQgFAAgRgEg");
	this.shape_26.setTransform(539.4,252.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag0CVQgagSgQgmQgQglAAg5QAAhEAfgwQAggwAzAAQAYAAAaATQAaAUAPAnQAQAnAAA2QAABJghAsQggArguAAQgaAAgagRgAgshiQgRAtAAA+QAAA4AQAoQARAoAcAAQAeAAARgoQARgnAAhIQAAg/gRglQgRglgcAAQgcAAgSAtg");
	this.shape_27.setTransform(509.575,252.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhECfQgUgGgQgOQgPgNAAgLQAAgDACgDQADgCADAAQAFAAAJAJQAPARAPAFQAQAFAQAAQAZAAAZgPQAagPAPgbQAPgcAAglQAAgLgHgSQgHgSgOgMQgNgLgTAAQgMAAgMAFQgMAGgCAAQgGAAAAgGQAAgFAFgHIAng6QADgDAAgFQAAgEgFAAIg+AAQgGAAgGAIQgGAHgEAAQgIAAAAgRQAAgIABgGIABgJQAAgNAPAAICBAAQARAAAAAHQAAAEgCACQgCADgLAFQgLAFgGAIIgiA0IgCAEQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAIAOgBQAoAAAaAfQAZAfAAAoQAAAkgaAiQgZAjgjAQQgiAQghAAQgQAAgTgGg");
	this.shape_28.setTransform(485.175,252.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgPBHQgHgGAAgKQAAgJAHgGQAHgHAIAAQAKAAAGAHQAHAHAAAJQAAAJgHAGQgFAGgLAAQgIAAgHgGgAgPgnQgHgHAAgKQAAgHAHgHQAIgGAHAAQAJAAAHAHQAGAGABAKQgBAJgGAGQgHAHgJAAQgIAAgHgIg");
	this.shape_29.setTransform(470.15,260.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhECfQgUgGgQgOQgPgNAAgLQAAgDACgDQADgCADAAQAFAAAJAJQAPARAPAFQAQAFAQAAQAZAAAZgPQAagPAPgbQAPgcAAglQAAgLgHgSQgHgSgOgMQgNgLgTAAQgMAAgMAFQgMAGgCAAQgGAAAAgGQAAgFAFgHIAng6QADgDAAgFQAAgEgFAAIg+AAQgGAAgGAIQgGAHgEAAQgIAAAAgRQAAgIABgGIABgJQAAgNAPAAICBAAQARAAAAAHQAAAEgCACQgCADgLAFQgLAFgGAIIgiA0IgCAEQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAIAOgBQAoAAAaAfQAZAfAAAoQAAAkgaAiQgZAjgjAQQgiAQghAAQgQAAgTgGg");
	this.shape_30.setTransform(454.475,252.575);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AArBsIgRgBIgQABIgKACQgFAAgDgCQgCgCAAgDQAAgBABAAQAAAAAAgBQAAAAAAgBQABAAAAgBQACgBAHgBQAIgBACgCQADgEAAgIIAAgtQAAgDgDgBQgQgIggABQgLgBgKAGIgNAEIgDgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBgCAEgEIBjh/QAFgGAEAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQABACAAAEIgBAGIgBAIIAABmQAAABAAAAQAAABABAAQAAABAAAAQABAAABAAIAIABQAKAAAGgCIAHgCIADABIABACQAAAHgNAFQgMAHgJgBIgDABIAAADIAAAsQAAAIADADQADADAFAAQAMABAAAGQAAAGgKAAIgKgCgAAHg3IgyBAIgBADIACgBQANgEAQAAQALABAFABIAHABQABAAAAAAQABAAAAgBQABAAAAAAQAAgBAAgBIAAg9QAAgEgBAAQgBAAgEADg");
	this.shape_31.setTransform(346.2,309.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgqBtQgFAAgDgBQgDgBAAgFQAAgKALgSQALgRATgOQAKgJAWgYQAYgXAAggQAAgTgNgPQgMgPgZAAQgLABgNAEQgOAFgHAKQgIAJAAAPQAAANAGAIQAHAHAEAAIAFgBIAFgBQAFAAAEAEQADADAAAGQAAAGgFADQgGADgIAAQgQAAgKgMQgKgPAAgSQAAgeAVgQQAVgSAjAAQANAAATAFQATAHAMAPQALAQAAAXQAAASgJAPQgJAOgNAMQgNALgXARQgWAPgFAJQgGAHAAAIIA6AAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgGQAAgFACgCQAAAAABgBQAAAAAAAAQABAAAAAAQABgBAAAAQAOAAAAAbIABAEIAAADQAAAEgDADQgDACgEAAg");
	this.shape_32.setTransform(330.025,309.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgiBjQgSgMgKgZQgLgZAAglQAAguAVggQAVggAiAAQAQAAARANQARANALAaQAKAaAAAkQAAAwgVAeQgWAdgfAAQgQAAgSgMgAgchBQgMAeAAApQAAAmALAaQALAbASAAQAUAAALgbQAMgaAAgwQAAgpgMgZQgLgZgSAAQgSAAgMAeg");
	this.shape_33.setTransform(314.125,309.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgqBtQgFAAgDgBQgDgBAAgFQAAgKALgSQALgRATgOQAKgJAWgYQAYgXAAggQAAgTgNgPQgMgPgZAAQgLABgNAEQgOAFgHAKQgIAJAAAPQAAANAGAIQAHAHAEAAIAFgBIAFgBQAFAAAEAEQADADAAAGQAAAGgFADQgGADgIAAQgQAAgKgMQgKgPAAgSQAAgeAVgQQAVgSAjAAQANAAATAFQATAHAMAPQALAQAAAXQAAASgJAPQgJAOgNAMQgNALgXARQgWAPgFAJQgGAHAAAIIA6AAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABgBAAgGQAAgFACgCQAAAAABgBQAAAAAAAAQABAAAAAAQABgBAAAAQAOAAAAAbIABAEIAAADQAAAEgDADQgDACgEAAg");
	this.shape_34.setTransform(298.325,309.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAXCgIgRgCIgPACIgPACQgHAAgFgDQgGgDAAgEQABgEACgCQABgEAJgBQAHgBADgDQADgEABgCIAAgRIAAhpQAAgFgDgDIhPhxQgLgOgHgHQgHgGgNAAQgPAAAAgLQAAgLAPABIAWACIAWABIATgBIATgCQAVgBABALQAAAFgDABQgDAEgJABQgKABgCABQgBABAAAAQgBABAAAAQAAABAAABQgBAAAAABQABAHAiAwIAXAfQARAZABAAQABAAACgDIAGgJQA5hagBgLQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQgDgDgJAAQgKgBgDgCQgDgDABgEQAAgEAEgDQAGgDAHAAIARACIASACIAQgCIAPgBQAGAAAEACQAGADAAAEQgBALgQAAQgLgBgIAGQgJAFgKARIgMATQg+BkABAIIAABeQgBAWAEAEQACAGAKACQAJACACACQABACABADQgBAFgDADQgDADgFAAIgQgCg");
	this.shape_35.setTransform(225.15,252.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AA5ChQgEgDAAgEQAAgEACgCQADgDALgBQAMgBAEgEQADgEAAgFQAAgHgMgbQgNgcgDgCQgDgBgJAAIhhAAQgGAAgEgEQgFgEAAgFQAAgDADgDQAFgDAEAAIBeAAQAHAAABgDIgEgJIgwhsQgEgKgCAAQgDAAgFAOIgvBqIgoBaIgCAIQAAADADADQACACAJADQAKADACACQADADAAADQAAAKgOAAIgOgBQgMgCgJAAIgQABIgNACQgFAAgEgDQgDgDAAgEQAAgFACgCQACgCAGgBQARgDAGgKQAHgKAbg9IA1h1IAag5QAFgOAAgHIgCgKIgCgKQAAgGAHAAQALAAAGAJQAGAKAMAaIA9CIIApBdQAKASAFAFQAGAFAHADQAIACAEADQACACAAAFQAAAIgOAAIgRgBQgLgCgMAAIgaACIgSABQgIAAgEgCg");
	this.shape_36.setTransform(194.2,251.975);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AiCCfQgFAAgEgCQgDgCAAgFQAAgEACgCQADgDALgBQALgBACgEQAEgDAAgFIAAj4QAAgKgEgFQgDgEgDgBIgPgBQgGAAgCgCQgDgCABgEQAAgKAOAAIBuAAQAgABAqATQApASAZAnQAaAmgBAxQAABEgqAsQgqAshCAAgAhIh6IAADtQAAAMALAHQAMAIAggBQAgABASgJQAdgQATggQASgiAAghQAAgcgFgaQgFgagNgVQgMgVgbgSQgagSgqAAQgpAAAAASg");
	this.shape_37.setTransform(162.85,252.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("ABXCcQgOgIgFgGQgIgLgwhOIgZgpQgLgQgMgFIgEgCIAAgGQAAgJALAAIAGAAIAKABQAXAAAQgPQAQgQAAgcQAAgUgSgUQgSgTgfAAQgMAAgGADQgGADgBAEQgBAEAAAHIAAD1QAAAHAGAEQAGAFAKAAQALAAAEADQAEADAAAFQAAAFgFAEQgFAEgJgBQgJAAgMgEQgMgGgHAAQgHAAgMAGQgMAEgHAAQgUAAAAgMQAAgFADgDQADgCANAAQAIAAAFgEQAFgDAAgFIAAj6QAAgRgXgBQgPAAAAgKQAAgKASAAQAIAAALACIARACIAbgEQAWgDAMAAQAsAAAcAYQAcAWAAAmQAAAYgOAPQgOAQgiANQgGADAAACQAAACADADQAMARAhA5IAkA8QACACAKAEQAJACACADQADAEAAADQAAAFgHAEQgGAEgEAAQgKAAgPgIg");
	this.shape_38.setTransform(135.175,252.25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhSCOQgfgXAAgoIAAjNQAAgGgDgFQgEgDgLgCQgLgBgDgDQgCgCAAgEQAAgFAEgDQAEgDAFAAIASACIASADIAUgDIAVgCQAHABAFACQAFACAAAGQAAAEgCADQgDACgJABQgKABgFAEQgFADAAANIAADHQAAAeAUARQAWARAgAAQAUABATgIQAUgGAOgOQAPgNABgXQACgFAAgVIAAiwQAAgUgZAAQgNAAAAgLQAAgJAQAAIAPABIAOACIATgCIASgBQAFAAAEACQAEADAAADQAAAGgDADQgEACgLABQgLACgDAGQgEAIAAAJIAACyQAAAhgHARQgIARgQANQgRAMgWAHQgWAFgZABQgvAAgegXg");
	this.shape_39.setTransform(107.075,252.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AATCfIgTgCIgQACIgQABQgHAAgFgDQgEgDAAgFQAAgDACgCQABgCAKgDQAKgDAEgGQADgGAAgIIAAjqQgBgWgcAAQgTAAgHAJQgGAFgCAKQgCAKgCACQgCACgDAAQgEAAgEgCQgDgCAAgDQAAgYAEgNQAFgOAIAAICpAAQAIAAAFAQQAEAPAAAOQAAANgJAAQgDAAgCgCQgDgCgFgMQgEgMgJgEQgJgEgKAAQgPAAgHAHQgGAHgBAPIAADoQABAFADAEQADAEAKADQAKADACACQADADAAACQAAAMgNAAIgTgCg");
	this.shape_40.setTransform(81.95,252.275);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AA5ChQgEgDAAgEQAAgEADgCQACgDALgBQANgBADgEQADgEAAgFQAAgHgNgbQgMgcgDgCQgDgBgJAAIhhAAQgFAAgFgEQgFgEAAgFQAAgDAEgDQAEgDAEAAIBdAAQAJAAgBgDIgDgJIgwhsQgEgKgCAAQgCAAgGAOIgvBqIgpBaIgBAIQAAADACADQADACAJADQAKADADACQACADAAADQAAAKgNAAIgPgBQgNgCgHAAIgRABIgNACQgFAAgEgDQgDgDAAgEQAAgFACgCQACgCAGgBQARgDAHgKQAGgKAbg9IA1h1IAZg5QAGgOAAgHIgCgKIgCgKQAAgGAGAAQAMAAAFAJQAIAKALAaIA9CIIAqBdQAIASAGAFQAFAFAJADQAHACAEADQACACAAAFQAAAIgNAAIgRgBQgMgCgNAAIgZACIgSABQgHAAgFgCg");
	this.shape_41.setTransform(55.45,251.975);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AhACaQgdgLAAgNIABgLIABgVIgBgLIgBgIQAAgIAKAAQAKAAABAQQADAbAQAPQAQAPAdAAQAcAAAUgRQATgQAAgbQAAgPgOgSQgNgSg0glQgXgQgMgLQgNgLgJgQQgJgPAAgTQAAgfAdgVQAcgVAkAAQAVAAAZALQAXAKAAAOIAAAHIAAAMIABAJQAAAOgKAAQgEAAgDgDQgEgEAAgEQAAgVgOgMQgPgLgVAAQgXAAgRANQgRANAAAQQAAALAHALQAIAMAgAWQA6AqAUAZQAUAaAAAeQAAApghAXQggAYglAAQgbAAgdgMg");
	this.shape_42.setTransform(28.95,252.225);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhyCeQg7g8AAhkQAAg6AYgzQAYgyAqgcQArgdA0AAQAzAAAsAWQAsAUAAAaIAAAYIABAKIABAOQAAAFgCAFQgDAEgEAAQgEAAgEgEQgEgEgIgSQgOghgQgPQgbgagxAAQg9AAglAyQglAzAABSQAABdAoAzQAoAzA/AAQAhAAAcgPQAcgPAAgcIAAgnQAAgPgYAAIgNABIgMAAQgKAAgFgEQgGgEAAgIQAAgMAPAAIBiAAQAJAAAEACQADABAAAHQAAAGgGAIQgHAHAAANIAAAYQAAAJAGAGQAFAFAAAFQAAAMgXASQgXATgjANQgiANghAAQhQAAg6g9g");
	this.shape_43.setTransform(360.475,195.575);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AhiC9QgkgeAAg1IAAkSQAAgIgEgGQgEgGgOgBQgNgCgDgEQgDgDAAgFQAAgGAFgEQAEgEAGAAQAIAAAOADQAOADAHAAQAIAAARgDQAPgDAJAAQAJAAAFADQAGAEAAAHQAAAFgCAEQgDAEgMABQgLABgGAFQgHAFAAAQIAAEKQAAAoAZAXQAZAXAnAAQAXAAAYgJQAXgJARgSQARgSACgeQACgIAAgbIAAjrQAAgbgeAAQgPAAAAgOQAAgNATAAQAGAAAMADIARACQAHAAAPgDQAOgCAIAAQAFAAAFADQAFAEAAAFQAAAIgEACQgEADgNACQgNACgEAKQgFAJAAAMIAADuQAAAsgIAXQgJAWgUARQgUARgaAJQgaAHgeAAQg3AAglgeg");
	this.shape_44.setTransform(324.475,196.275);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("ABEDWQgFgDAAgGQAAgFADgDQADgDAOgCQAOgBADgFQAFgGAAgHQAAgJgPgkQgPglgEgDQgDgCgLAAIhzAAQgHAAgGgFQgFgFAAgGQAAgFAEgEQAFgEAFAAIBvAAQAJAAAAgEIgDgLIg5iRQgFgOgDAAQgDAAgGATIg4COIgwB4QgCAGAAAEQAAAFADADQADAEALADQALAEADADQADAEAAAEQAAAOgQAAIgRgDQgPgCgJAAQgKAAgKACIgPACQgGAAgFgEQgEgDAAgGQAAgHADgDQADgCAHgBQAUgEAHgNQAIgOAghRIA/idIAehLQAHgTAAgKIgDgNIgCgNQAAgJAIAAQANAAAHANQAJAMANAjIBIC3QAoBkAKAYQALAXAGAHQAHAHAJADQAKAEADADQAEADAAAHQAAAKgRAAIgUgCQgOgCgPAAQgOAAgQADIgVACQgJAAgFgEg");
	this.shape_45.setTransform(287.425,195.325);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgaAzQgLgFAAgEIAAgKIgBgKQAAgHAHAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQACABAEAJQADAKAFADQAFADAGAAQAHAAAGgFQAFgFAAgIQAAgFgEgFQgEgEgPgJQgQgGgFgHQgFgIAAgIQAAgMALgHQALgJANABQALAAALADQALAFAAAEIABAHIAAAHQAAADgBACQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAIgCgGQgCgEgCgDQgCgDgFgBQgEgDgGAAQgEAAgFAEQgFADAAAFQAAADADADQADADARAKQARAIAFAIQAGAJAAAKQAAAOgMAJQgMAIgTAAQgLABgLgFg");
	this.shape_46.setTransform(480.6,2.75);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgrAmQgRgRgBgXQABgWATgPQATgQAWAAQAfAAAPAQQAPAQAAAVQAAAEgCABIgIABIhDAAQgIAAAAgFQAAgGAIAAIAvAAIAEgBQAAAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAgLgJgKQgIgKgSAAQgLAAgNAMQgNAMAAAUQAAAPAOANQANAMAQAAQANAAAPgIIAIgDQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAFgQAIQgQAIgRAAQgZAAgRgSg");
	this.shape_47.setTransform(469.6,2.875);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgaBKQgDgCAAgDQAAgBABAAQAAgBAAAAQAAAAAAgBQABAAAAAAQABgCAFgBQAGgBACgCQACgDAAgKIAAgwQAAgHgDgCQgCgCgFgBQgFgBgBgBIgCgEQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABgBQACgCACAAIAHACIAIABIAHgBIAHgBQAFAAAAAJIAAAEIAAADIAAA8QAAAIACACQADACAEABIAHABQABACAAADQAAAFgIAAIgLgBIgKgBIgKACIgKABQgDAAgDgCgAgKgxQgEgEgBgHQABgGAEgEQAFgFAFAAQAHAAAFAFQAEAFABAHQgBAGgEAEQgFAEgGAAQgGAAgFgFg");
	this.shape_48.setTransform(459.2,0.425);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AANBoIgNgBIgLABIgMABQgGAAgBgBQgBAAAAgBQgBAAAAAAQAAgBAAgBQgBAAAAgBQAAAAABgBQAAgBAAAAQAAgBAAAAQABAAAAgBQACgBAHgBQAHgCADgDQACgEAAgFIAAidQAAgFgCgEQgDgEgHgCQgHgBgCgCQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBIAFgBIAHABIAHABIAIgBIAGgBQAEAAADACQACADAAAGIAACvQAAAEACADQACADAHABQAHABACACQAAABABAAQAAABAAAAQAAABAAAAQABABAAABQgBAEgHAAIgNgBg");
	this.shape_49.setTransform(451.05,-2.425);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgaBKQgCgCgBgDQAAgBABAAQAAgBAAAAQAAAAAAgBQABAAAAAAQACgCAFgBQAFgBADgCQABgDABgKIAAgwQgBgHgCgCQgDgCgFgBQgFgBgCgBIgBgEQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQADgCADAAIAHACIAGABIAIgBIAHgBQAFAAAAAJIAAAEIAAADIAAA8QAAAIADACQACACAFABIAGABQACACAAADQAAAFgJAAIgLgBIgKgBIgKACIgKABQgEAAgCgCgAgKgxQgFgEABgHQgBgGAFgEQAFgFAFAAQAGAAAGAFQAEAFAAAHQAAAGgEAEQgFAEgHAAQgFAAgFgFg");
	this.shape_50.setTransform(443.5,0.425);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("ABQAzIgNgBIgMABIgKABQgBAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgDgBABgDQgBgFAIAAQAGgBADgDQACgDAAgEIAAg4QAAgDgDgCQgDgCgDAAQgGAAgJAGQgIAHgDAAIgDgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAgGAOgKQANgKANAAQAPAAAGANQACAEAAAmIgBAZQAAAFADACQACACAFABQAGABABACIABADQAAAGgHAAIgJgBgAANAzIgNgBIgOABIgIABQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgEAFAAQAFAAAEgDQAEgDAAgGIAAg4QAAgDgDgCQgDgCgEAAQgGAAgLAIQgGAFgCAAQgBAAgBAAQAAgBgBAAQAAAAAAgBQgBgBAAAAQAAgIAOgKQAOgKAKAAQAKAAAGAHQAHAHAAAJIAAA6QAAAFADADQADADAEAAQAHAAABAGQgBAFgHAAIgJgBgAg3AzIgLgCIgLACIgJABQgJAAABgFQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAIAGgBQADgBAEgCQACgCABgDIAAgMIAAguQAAgGgDgCQgDgDgDAAQgJAAAAgGQAAgGAHAAIAGABIAIABIAHgBIAGgBQADAAABACQACACAAAOIABAgIAAAZIABAJIAEADQACACAEAAIAFABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAABQABAFgIAAIgLgBg");
	this.shape_51.setTransform(429.4,2.825);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgnA0QgLgFgHgKQgGgJAAgPQAAgOAOgMQAPgMAXAAQAHAAAJAFQAJAEAAAFQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAQgCABgDAAIgHgCQgFgDgFAAQgMAAgIAIQgIAFAAANQAAANAJAHQAJAIAMAAQAJAAAJgIQAJgHAAgLIAAgmQAAgJgFgGQgGgGgJAAQgNAAgMAIIgGADQgDAAgDgCQgCgCAAgCQAAgIANgFQANgEAPAAQATAAAMAJQALAJAAAOIAAAwQAAAKAOAFIAGACQABACAAADQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABIgFABIgHgBIgIgCIgJACIgHABQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgDABQgQALgSgBQgJAAgMgEg");
	this.shape_52.setTransform(412.025,2.85);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AANBpQgHgBgHAAIgNABIgLACQgJAAAAgGQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAHgBQAGgBADgCQADgCAAgDIABgNIAAguQAAgKgNAAQgKAAAAgHQAAgGAKAAIAHAAIAEABQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIAAgqQAAgQAEgLQADgKAHgJQAIgJAKgGQALgHADAAQACAAAAAGIgDADQgNAKgFAOQgEAOgBARIAAAuQAAABABAAQAAABAAAAQAAAAABAAQAAAAAAAAIAGAAIAIgBQAIAAAAAGQAAADgDABQgDADgDAAQgOAAgBALIAAAzQAAAGABADIAEADQACACAIABQAGABACABQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAAGgJAAIgNgCg");
	this.shape_53.setTransform(400.9,-2.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AABA1QgGgBgIAAIgMABIgHACQgEAAgCgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIABgDQACgCAGgCQAHgCABgCQACgCAAgMIAAgrQAAgEgCgEQgCgDgGgCQgGgCgBgBIgBgDQAAgFAGAAIAHABIAGABIAFgBIAIAAQAIgBAAASIAAAGIAAAFQAAgBAHgOQAFgNAHgGQAFgGAHAAQAFAAACACQADABAAADQAAAEgCACQgBACgEADQgUAOgHAVQgIATAAAOQAAAGABADQABACAHABQAHACACACQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAFgFAAIgMgCg");
	this.shape_54.setTransform(387.75,2.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgaBKQgDgCABgDQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQACgCAFgBQAFgBADgCQACgDAAgKIAAgwQAAgHgEgCQgCgCgFgBQgFgBgBgBIgBgEQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQACgCAEAAIAGACIAHABIAIgBIAHgBQAFAAAAAJIAAAEIAAADIAAA8QAAAIADACQACACAEABIAHABQABACAAADQABAFgJAAIgLgBIgKgBIgKACIgKABQgDAAgDgCgAgKgxQgFgEAAgHQAAgGAFgEQAFgFAFAAQAGAAAFAFQAGAFAAAHQAAAGgGAEQgEAEgHAAQgFAAgFgFg");
	this.shape_55.setTransform(378.95,0.425);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgrAmQgSgRAAgXQAAgWAUgPQASgQAXAAQAfAAAPAQQAQAQAAAVQgBAEgCABIgIABIhDAAQgIAAAAgFQAAgGAIAAIAuAAIAFgBQAAAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAgLgJgKQgJgKgRAAQgLAAgNAMQgNAMAAAUQAAAPANANQAOAMAQAAQANAAAPgIIAIgDQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAFgQAIQgQAIgQAAQgaAAgRgSg");
	this.shape_56.setTransform(368.6,2.875);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AADBjQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQABgCAIgBQAHAAADgEQACgEAAgFIAAgWIgBgXQAAgHgEgEQgEgDgHAAQgHAAgJAHQgFAEgDAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIgCgDQAAgHAPgJQAPgJAJAAQAJAAAIAFQAIAFADAIQABADAAAVIAAAVIAAAPQAAAFACAEQADAEAHABQAHABACABIABAEQAAABAAABQgBABAAAAQAAABAAAAQgBABAAAAIgJAAIgLAAIgMgBIgMABIgMABQgKAAAAgHgAgWBoIgNgBIgNABIgMABQgKAAAAgFQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQABgBAIgBQAHgBADgEQACgFAAgGIAAicQAAgEgCgDQgDgDgHgCQgHgDgCgBIgBgDQAAgFAJAAIAHAAIAIABIAHgBIAHgCQAEAAACACQACACAAAIIAACvQAAAEACADQACADAHABQAIABABACQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAAFgIAAIgNgBg");
	this.shape_57.setTransform(354.675,-2.375);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgRAyIAAg3IgBgDIgIAAQgGAAgCgCQgCgCAAgDQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBAAAAIAHgDIAHgCIAHgHQADgGACgJQACgKAAgSQAAgJAFAAQAFAAABADQABACAAAGIAAAwQAAADAEABIAVAAQAGgBAAAGQAAAGgJABIgTAAIgCAAIAAADIAAAzQAAANABAEQABADADAAQAEAAAIgFQAGgGADAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAABAAABQAAADgMAKQgLAJgJAAQgWAAAAgig");
	this.shape_58.setTransform(342.7,-0.05);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AADBjQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQABgCAIgBQAHAAADgEQACgEAAgFIAAgWIgBgXQAAgHgEgEQgEgDgHAAQgHAAgJAHQgFAEgDAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIgCgDQAAgHAPgJQAPgJAJAAQAJAAAIAFQAIAFADAIQABADAAAVIAAAVIAAAPQAAAFACAEQADAEAHABQAHABACABIABAEQAAABAAABQAAABgBAAQAAABAAAAQgBABAAAAIgJAAIgLAAIgMgBIgMABIgMABQgKAAAAgHgAgWBoIgNgBIgNABIgMABQgKAAAAgFQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQABgBAIgBQAHgBADgEQACgFAAgGIAAicQAAgEgCgDQgDgDgHgCQgHgDgCgBIgBgDQAAgFAJAAIAHAAIAIABIAHgBIAHgCQAEAAACACQACACAAAIIAACvQAAAEACADQACADAHABQAIABABACQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAAFgIAAIgNgBg");
	this.shape_59.setTransform(326.175,-2.375);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgRAyIAAg3IAAgDIgJAAQgGAAgCgCQgCgCAAgDQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBABAAIAFgDIAHgCIAIgHQADgGADgJQABgKAAgSQAAgJAFAAQAEAAABADQACACAAAGIAAAwQAAADAEABIAVAAQAGgBAAAGQAAAGgJABIgSAAIgDAAIgBADIAAAzQAAANABAEQACADADAAQAFAAAGgFQAHgGADAAQABAAAAAAQAAAAABABQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAABAAABQAAADgMAKQgLAJgJAAQgWAAAAgig");
	this.shape_60.setTransform(314.2,-0.05);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgaBKQgCgCgBgDQAAgBABAAQAAgBAAAAQAAAAAAgBQABAAAAAAQACgCAEgBQAGgBACgCQACgDAAgKIAAgwQAAgHgCgCQgDgCgFgBQgFgBgCgBIgBgEQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQADgCACAAIAIACIAHABIAHgBIAHgBQAFAAAAAJIAAAEIAAADIAAA8QAAAIACACQADACAFABIAGABQABACABADQAAAFgJAAIgLgBIgKgBIgKACIgKABQgEAAgCgCgAgKgxQgFgEABgHQgBgGAFgEQAFgFAFAAQAGAAAGAFQAEAFAAAHQAAAGgEAEQgFAEgGAAQgGAAgFgFg");
	this.shape_61.setTransform(306,0.425);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgjA0IgDgGIgjhHQgIgOgHAAQgFAAgDgCQgDgBABgDQAAgHAHAAQAHABAGABIAJABIAJgBIAIgCQAFABADABQACACAAADQAAADgFACQgGACAAAEIADAIIAUAlQAAABABABQAAABAAAAQABABAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAABgBQAAgBAAgBIAWgvIADgLQACgDADAAQACAAACAGIAgA3QAAABAAABQABAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAgBIASglIADgJQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgGgCQgGAAgBgCQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDACgCIAHgBIAHABIALABIAGgBIAJgBQAIAAgBAGQAAAFgJABQgIABgFAOIgeBFQgDAIgDAAQgDAAgCgEIgCgEIgdg0QgDgEgCAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAABAAABIgYA1IgBACQgCAGgEAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAg");
	this.shape_62.setTransform(292.55,3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AABA1QgFgBgJAAIgMABIgHACQgEAAgCgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIACgDQABgCAGgCQAHgCABgCQACgCAAgMIAAgrQAAgEgCgEQgCgDgGgCQgGgCgBgBIgBgDQAAgFAGAAIAHABIAHABIAEgBIAIAAQAIgBAAASIAAAGIAAAFQAAgBAHgOQAGgNAFgGQAHgGAGAAQAFAAACACQAEABAAADQAAAEgDACQgBACgEADQgUAOgHAVQgIATAAAOQAAAGABADQACACAGABQAHACACACQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAFgFAAIgMgCg");
	this.shape_63.setTransform(273.65,2.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgrAmQgRgRgBgXQABgWATgPQATgQAWAAQAfAAAPAQQAPAQAAAVQABAEgDABIgIABIhDAAQgIAAAAgFQAAgGAIAAIAvAAIAEgBQAAAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAgLgJgKQgIgKgSAAQgLAAgNAMQgNAMAAAUQAAAPAOANQANAMAQAAQANAAAPgIIAHgDQABAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAFgQAIQgQAIgRAAQgZAAgRgSg");
	this.shape_64.setTransform(262.15,2.875);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AADBjQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQABgCAIgBQAHAAADgEQACgEAAgFIAAgWIgBgXQAAgHgEgEQgEgDgHAAQgHAAgJAHQgFAEgDAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIgCgDQAAgHAPgJQAPgJAJAAQAJAAAIAFQAIAFADAIQABADAAAVIAAAVIAAAPQAAAFACAEQADAEAHABQAHABACABIABAEQAAABAAABQAAABgBAAQAAABAAAAQgBABAAAAIgJAAIgLAAIgMgBIgMABIgMABQgKAAAAgHgAgWBoIgNgBIgNABIgMABQgKAAAAgFQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQABgBAIgBQAHgBADgEQACgFAAgGIAAicQAAgEgCgDQgDgDgHgCQgHgDgCgBIgBgDQAAgFAJAAIAHAAIAIABIAHgBIAHgCQAEAAACACQACACAAAIIAACvQAAAEACADQACADAHABQAIABABACQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAAFgIAAIgNgBg");
	this.shape_65.setTransform(248.225,-2.375);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgRAyIAAg3IgBgDIgIAAQgGAAgCgCQgCgCAAgDQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBABAAIAFgDIAHgCIAIgHQADgGACgJQACgKAAgSQAAgJAFAAQAEAAACADQABACAAAGIAAAwQAAADAEABIAVAAQAGgBAAAGQAAAGgJABIgTAAIgCAAIgBADIAAAzQAAANABAEQACADADAAQAFAAAHgFQAGgGADAAQABAAAAAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAABAAABQAAADgMAKQgLAJgJAAQgWAAAAgig");
	this.shape_66.setTransform(236.25,-0.05);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgrAmQgRgRAAgXQAAgWATgPQATgQAWAAQAfAAAPAQQAPAQAAAVQABAEgDABIgJABIhBAAQgJAAAAgFQAAgGAJAAIAuAAIAEgBQAAAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAgLgJgKQgIgKgSAAQgLAAgNAMQgNAMAAAUQAAAPAOANQANAMAQAAQANAAAPgIIAHgDQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAFgQAIQgQAIgRAAQgZAAgRgSg");
	this.shape_67.setTransform(225.35,2.875);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgvBSQgUgOAAgYQAAgPAJgMQAKgMAPgFIABgBIgCgCQgHgFgEgHQgEgIAAgJQAAgOAMgJQAMgJATgCQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABgBQACgHAHgIQAHgIAGgDQAGgBAOAAQAJAAAAAJQAAAEgEAEQgFADgGAAIgEgBIgDAAQgHAAgFAEQgFAEAAABQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAQARACALAKQAKAKAAAPQAAAQgOAKIgBACIAAAAQAPAGAJANQAJANAAAOQAAAXgVAOQgUAPgbAAQgbAAgUgPgAggARQgLAKAAASQAAASANALQAOALAQgBQASAAANgLQANgLAAgRQAAgSgMgKQgNgLgTAAQgUAAgMALgAgPgzQgEADgEAFQgDAHAAAHQAAAKAIAIQAJAGAKAAQALABAIgIQAIgIAAgLQAAgGgEgGQgDgGgGgDQgGgCgDAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgCAHgEAAQgFAAAAgGQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAgBgBIgHADg");
	this.shape_68.setTransform(211.325,4.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgqAoQgSgQgBgXQABgWAQgQQAPgRAeAAQAYAAATARQASAQAAAVQAAAZgSAPQgRAPgcAAQgXAAgSgPgAgZgeQgKAMAAASQAAATALAMQAKALAPAAQARAAAKgMQAKgMAAgSQAAgSgLgLQgKgMgRAAQgQAAgJALg");
	this.shape_69.setTransform(197.85,2.775);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAMBqIgLgBIgLABIgLABQgEAAgEgCQgDgCAAgEIABgDQABgBAHgCQAGgCADgEQACgFAAgFIAAibQAAgPgTAAQgMAAgGAGQgDADgBAHQgCAHgBABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgQADgJQACgJAGAAIBxAAQAFAAADAKQADALAAAIQAAAJgGAAIgEgBQgCgBgCgIQgDgIgGgDQgGgDgHAAQgKAAgEAFQgFAEAAALIAACaQAAAEACACQADADAGACQAHACABABQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABQgBAHgHAAIgOgBg");
	this.shape_70.setTransform(184.45,-2.625);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgiAyIgDgGIgihEQgHgOgHAAQgFABgCgCQgDgCAAgDQAAgFAHAAQAHAAAGABIAJABIAIgBIAIgBQAFAAACABQADABAAADQAAAEgGACQgFACAAADIADAHIATAmQAAAAAAABQABAAAAABQABAAAAAAQAAABABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAIAVgvIAEgLQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQACAAADAFIAeA3IADACQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAIARgmIADgIQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBgBgGAAQgFgBgBgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAgDACgCQACgBAFAAIAHABIAKABIAGgBIAKgBQAGAAAAAFQAAAFgJACQgHAAgGANIgcBEQgDAIgEAAQgDgBgBgDIgCgFIgdgyQgCgDgCAAQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAgBABIgWAzIAAACQgDAHgDgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_71.setTransform(416.125,474.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgpAmQgSgPAAgXQAAgUAQgQQAQgRAcAAQAXAAASARQARAQABAUQgBAXgQAPQgRAPgbABQgWgBgSgPgAgZgcQgJALAAARQAAATAKAKQAKAMAPAAQAQAAAKgMQAKgMAAgRQAAgRgKgLQgLgMgQAAQgPAAgKAMg");
	this.shape_72.setTransform(400.45,473.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AANBlIgNgBIgLABIgLABQgGAAgCgCQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIABgEQABgCAIgBQAHgBACgDQACgEAAgFIAAiXQAAgFgCgEQgCgEgHgCQgIgBgBgCIgBgEQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQACgCADAAIAHABIAGABIAIgBIAGgBQAEAAADADQACACAAAGIAACqQAAADACADQACADAGABQAHABACACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAAFgHAAIgMgBg");
	this.shape_73.setTransform(389.875,468.875);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AANBlIgNgBIgLABIgLABQgGAAgCgCQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIABgEQABgCAIgBQAHgBACgDQACgEAAgFIAAiXQAAgFgCgEQgCgEgHgCQgIgBgBgCIgBgEQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQACgCADAAIAHABIAGABIAIgBIAGgBQAEAAADADQACACAAAGIAACqQAAADACADQACADAGABQAHABACACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAAFgHAAIgMgBg");
	this.shape_74.setTransform(382.075,468.875);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgoAmQgSgPAAgXQgBgUARgQQAPgRAcAAQAXAAASARQARAQAAAUQAAAXgQAPQgRAPgbABQgWgBgRgPgAgYgcQgJALAAARQAAATAKAKQAKAMAOAAQAQAAALgMQAJgMAAgRQAAgRgLgLQgKgMgQAAQgQAAgIAMg");
	this.shape_75.setTransform(372.15,473.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AANBmQgHgBgHAAIgNABIgKABQgJAAAAgGIABgDIAIgCQAGgBADgCQACgCABgDIAAgMIAAgtQAAgKgMAAQgKAAAAgGQAAgGAKAAIAHABIAEAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIAAgoQAAgQAEgKQADgKAHgJQAHgJALgGQAKgGADAAQACAAAAAFIgDADQgNAKgEANQgFAOAAARIAAAtQAAAAAAAAQAAABAAAAQABAAAAAAQABAAAAAAIAFAAIAHgBQAJAAAAAGQAAADgDABQgDACgDAAQgOAAAAALIAAAxQAAAHABACIAEADQACACAGABQAHABACABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAFgIAAIgMgBg");
	this.shape_76.setTransform(361.675,468.775);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgpAmQgSgPAAgXQAAgUAQgQQAQgRAcAAQAXAAASARQARAQABAUQgBAXgQAPQgRAPgbABQgWgBgSgPgAgZgcQgJALAAARQAAATAKAKQAKAMAPAAQAQAAAKgMQAKgMAAgRQAAgRgKgLQgLgMgQAAQgPAAgKAMg");
	this.shape_77.setTransform(346.9,473.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgQAwIAAg1IgBgDIgIAAQgGAAgCgCQgBgBgBgEQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQABgCAFgBQAEgBADgCIAGgGQAEgGACgJQACgJgBgSQABgIAEAAQAEAAABACQACADAAAFIAAAvQAAABAAABQAAAAABAAQAAABABAAQABAAABAAIATAAQAHAAAAAFQAAAHgJAAIgRAAIgDAAIAAADIAAAyQAAAMABADQABADACAAQAFAAAHgFQAGgFADAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAABABIABAEQgBAEgKAJQgLAJgJAAQgWAAABghg");
	this.shape_78.setTransform(336.1,471.175);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAGAxQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIABgDQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAEAAAEgCQADgDAAgFIAAgpIABgJQAAgLgKAAQgFAAgHAGQgIAHgDAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAgFANgKQAMgKAMAAQAIAAAFAEQAFADACAGQACAGAAAKIAAAJIAAAoQAAAGACACQACACAGABQAEABAAAEQAAAEgEAAIgJAAIgNgBIgOABIgIABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAgAgUAxIgKgBIgLABIgKABQgIAAABgGIAAgEIAGgBIAGgCQADgDABgDQABgCAAgIIAAgtQAAgFgCgDQgCgDgGgBQgHgBAAgFQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQADgCADAAIAFABIAHABIAHAAIAIgBQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAQABACAAAHIABAZIgBAoIAAAFIAEADIAGACQAFABABACIABADQAAAFgIAAIgKgBg");
	this.shape_79.setTransform(320.4,473.925);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgpAmQgSgPAAgXQAAgUAQgQQAQgRAcAAQAXAAASARQARAQABAUQgBAXgQAPQgRAPgbABQgWgBgSgPgAgZgcQgJALAAARQAAATAKAKQAKAMAPAAQAQAAAKgMQAKgMAAgRQAAgRgKgLQgLgMgQAAQgPAAgKAMg");
	this.shape_80.setTransform(307.3,473.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgZBHQgCgBAAgEIABgDQABgBAFgBQAGgBACgCQACgDAAgKIAAguQAAgGgDgCQgCgCgFgBQgFgBgBgCIgCgEQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQACgCADAAIAHABIAHABIAHAAIAHgBQAFAAAAAJIAAADIAAAEIAAA6QAAAHACACQADACAEAAIAGACQAAABABAAQAAAAAAABQAAAAABABQAAABAAABQAAAFgJAAIgKgBIgKgBIgKABIgJABQgEAAgCgCgAgKgvQgEgFAAgGQAAgGAEgEQAFgEAFAAQAGAAAFAEQAFAFAAAHQAAAFgFAEQgEAEgHAAQgFAAgFgEg");
	this.shape_81.setTransform(297.225,471.625);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgQAwIAAg1IgBgDIgIAAQgFAAgDgCQgBgBAAgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgDQAEgBACgCIAHgGQAEgGACgJQABgJABgSQAAgIAEAAQAEAAABACQACADAAAFIAAAvQAAABAAABQAAAAABAAQAAABABAAQABAAABAAIAUAAQAFAAABAFQAAAHgJAAIgRAAIgDAAIgBADIAAAyQAAAMABADQACADADAAQAEAAAHgFQAGgFADAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAABABIABAEQAAAEgMAJQgKAJgJAAQgWAAABghg");
	this.shape_82.setTransform(289.1,471.175);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("Ag/BLQAAAAABgBQAAAAAAgBQABAAAAgBQABAAABgBQAJgEACgIQADgHAAgHQABgHAAglIgBgyQAAgEgCgDQgDgDgIgBIgIgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgGAJAAIAIACIAJACIAHgDIAHgBQAEAAABABIABAGIAAAyQAAAPAKAIQAJAJAMAAQAGAAAKgFQAJgGAGgJQAGgKgBgOQAAgPgJgMQgJgMgNAAQgHAAgHADIgHADIgEgCIgBgDQAAgDAKgFQAKgFAHABQAYAAAPAOQAPAPAAAZQABATgRAQQgQAPgWAAQgJAAgHgCQgHgCgNgIQgBAAAAAHQAAASgCAKQgDAJgFAHQgGAHgGADQgGADgFgBQgIAAAAgDg");
	this.shape_83.setTransform(277.55,476.45);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgpAlQgRgRAAgWQAAgVASgPQATgPAVAAQAeAAAPAPQAOAQAAAVQAAADgCABIgIABIhAAAQgIAAAAgFQAAgFAIAAIAsAAQABAAABAAQABAAAAgBQABAAAAAAQABAAAAAAIABgEQAAgLgIgKQgJgJgRAAQgLAAgMALQgNALAAAUQAAAPANAMQAOAMAPAAQAMAAAPgIIAHgDQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAAFgQAHQgQAIgPAAQgZAAgQgRg");
	this.shape_84.setTransform(264.175,473.975);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgiAmQgSgPAAgXQAAgVARgQQASgQAXAAQANAAARAFQAQAGAAAEIABANIABAFQAAAHgHAAQgDAAgDgJQgCgIgJgFQgIgFgLAAQgOAAgMALQgNAKAAATQAAASAOAMQAOALAOAAIAMgBQAGgBAHgFQAHgEADAAQAFAAAAAGQgBAFgOAGQgOAHgPAAQgZAAgTgQg");
	this.shape_85.setTransform(251.85,473.925);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgpAlQgRgRAAgWQAAgVASgPQATgPAVAAQAeAAAPAPQAOAQAAAVQAAADgCABIgIABIhAAAQgIAAAAgFQAAgFAIAAIAsAAQABAAABAAQABAAAAgBQABAAAAAAQABAAAAAAIABgEQAAgLgIgKQgJgJgRAAQgLAAgMALQgNALAAAUQAAAPANAMQAOAMAPAAQAMAAAPgIIAHgDQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAAFgQAHQgQAIgPAAQgZAAgQgRg");
	this.shape_86.setTransform(239.775,473.975);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AA4BlQgJgFgDgEQgFgHgfgyIgQgbQgHgKgIgDIgCgCQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgGAIAAIAEAAIAGABQAPgBAKgJQALgLAAgRQAAgNgMgNQgMgNgUAAQgIABgDACQgEABgBACIgBAIIAACeQAAAEAEADQAEADAHAAQAHAAADACQACACAAADQAAADgDACQgDADgGAAQgGAAgIgEQgIgCgEAAQgEAAgIACQgIADgFAAQgNAAAAgIQAAgCADgCQACgCAIABQAFgBADgCQAEgCAAgDIAAihQAAgKgPgBQgKgBAAgGQAAgGALgBIANABIALABIARgCIAWgBQAcAAASAPQASAOAAAZQAAAPgIAKQgKAKgVAJQgFABAAABIACAEIAdAvIAXAmIAIAEQAGACACACIABAFQAAADgEACIgHACQgGAAgKgEg");
	this.shape_87.setTransform(225.225,468.65);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgrBnQgNgHgIgIQgHgIAAgDIABgFQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQACAAAIAGQAMAKAJADQAJAEAIAAQAMAAANgIQAPgJAJgQQAKgQAAgdQAAgbgQgTQgQgSgOAAQgVAAgSAZQgEAEgCABIgEABQgEABAAgHIABgGQACgJAAgTIAAgkQAAgKAKAAIA6AAQAEAAADgCQAEgCADAAQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAFgNAIQgMAIgUAAQgIAAgIgCIgKgBQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABIAAAcQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAIACAAQAHgGAKgDQAKgEAKAAQALAAASAHQARAJAOARQANARAAAeQAAAcgNAUQgMAVgVALQgWALgQAAQgRAAgOgFg");
	this.shape_88.setTransform(386.875,426.05);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("ABYBoIgQgBIgQABIgMABQgFAAgCgBQgDgCAAgDQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQABgBAIgBQAHgBACgCQADgDAAgDQAAgEgIgSQgJgSgCgBIgHgBIg+AAQgEAAgDgDQgDgCAAgDQAAgBAAAAQAAgBABgBQAAAAAAAAQABgBAAAAQADgCADAAIA7AAQAGAAAAgCIgCgGIgfhFQgDgHgBAAQgCAAgDAJIgeBEIgaA7IgCAEQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAIAEQAGABABACIACAEQAAAGgJAAIgJgBIgNgBIgLABIgIABQgDAAgDgCQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAgBQAAgBABAAQAAgBAAAAQAAAAAAgBQACgBAEgBQALgBAEgHQAEgGARgoIAjhLIAQgkQADgJAAgFIgBgHIgBgGQAAgEAEAAQAHAAAEAGQAEAGAIARIAnBYIAbA7QAFAMAEADQAEAEAFABIAHADQACACAAADQAAAFgJAAIgLgBg");
	this.shape_89.setTransform(369.225,425.775);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAUBoIgQgBIgSABIgIABQgJAAAAgIQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAJgBQAIgBACgEQADgEAAgFIAAiFQAAgFgCgCQgCgDgCAAQgDAAgGAFQgFADgDAAQgHABAAgIQAAgCAFgDIAQgNIAQgLIAPgKQADgBADAAQAFAAgBAEQAAADgCAFQgGAJAAAJIABByIgBAnQAAAFADADQACADAIACQAHACACABQAAABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgDACgEAAIgKgBg");
	this.shape_90.setTransform(354.15,425.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("Ag9BMQghgdAAgvQAAgdANgYQAOgYAWgOQAXgOAcAAQAdAAAXAKQAYAKAAANIAAALIABAGIABAGQgBADgBACQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgDgCgDgJQgJgQgIgHQgOgNgbAAQghAAgUAZQgUAYAAAoQAAAsAWAZQAVAYAiAAQASAAAQgHQAOgHAAgNIAAgTQAAgHgNAAIgHAAIgGAAQgFAAgDgCQgEgCAAgEQABgGAHAAIA2AAQAFAAACABQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAADgDAEQgDADgBAHIAAALQAAAFAEADQACACAAACQAAAGgMAJQgNAJgTAGQgSAHgRAAQgsAAgfgeg");
	this.shape_91.setTransform(335.25,425.925);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgzBPQgWgdAAgyQAAgwAXgdQAWgdAeAAQAWAAARAKQAQALAAAHQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBABIgEABQgDAAgKgGQgKgHgIgCQgHgCgGAAQgZAAgMAdQgLAcAAAoQAAAqAMAWQALAWAVAAQAVAAAKgTQAJgTAAgoQAAgYgJgMQgJgNgPAAIgJABQgFACgJAGQgJAFgDAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgGAPgJQAPgIAKAAQAOAAAPAIQAQAJAJAPQAKAQAAATQAAAbgKAVQgLAVgRAKQgSAKgOAAQgiAAgVgcg");
	this.shape_92.setTransform(317.625,425.875);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("ABDBpIgPgBIhuAAQgMAAAAgHQAAgEACgBQADgCAEAAQAKAAACgEQACgFAAgFIAAiUQAAgFgCgEQgEgFgHgCQgKgDgBgCQgCgDAAgCQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQACgBADAAIAKACQAHADAJAAQAMAAAKgDIAOgDQACAAACACQACADABACQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAABQgBABgFABQgJACgDADQgFAEgBALIAACNQABALADAEQADAEAGAAIA0AAQAGAAADgCQAFgDABgIQACgJABgCQADgBADAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQADACAAAEIABAZQAAAHgGAAIgBAAg");
	this.shape_93.setTransform(302.05,425.9266);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgJAfIAFgLQAEgLAAgHQAAgEgFgDQgGgDgCgDQgCgEAAgDQAAgHAEgEQAEgEAHAAQAGAAAEAHQAGAFAAALQAAAJgJAQQgJATgFAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape_94.setTransform(288.05,436.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("ABGBnIgEgFIh1ibQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAAAAAQgCAAAAAFIAACCQAAAGAEADQAFAEAFAAQALAAAAAHIgBAEIgGABIgOgBIgLgBIgNABIgLABQgHAAAAgGQAAgGAIAAQAHAAAFgEQAEgEAAgHIAAiVQAAgHgDgEQgEgFgFAAQgIAAgCgBQgDgCAAgDQAAgGAHAAIAHABIAJABIAFgBIAGgBQAEAAAGAHQAGAGAkAvIA9BTQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAQADAAAAgIIAAhwQAAgFgEgEQgEgDgGAAQgFAAgDgCQgDgCAAgDQAAgDADgCQADgBADAAIAMABIAMACIAMgBIAKgCQAIAAAAAHQAAAGgIAAQgIAAgDACQgDACgBADIgBAIIAACNQAAAOADAIQADAHAAAFQAAAEgEAAIgEgBg");
	this.shape_95.setTransform(276.25,426.175);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AhMBMQgeggAAgvQAAgZAOgZQANgZAYgOQAZgOAeAAQAyAAAcAiQAdAiAAApQAAAfgQAaQgPAagZALQgZAKgaAAQguAAgegfgAg4hDQgUAbAAAlQAABhBMAAQAaAAASgMQASgMAHgRQAIgRAAgdQAAgwgVgaQgUgbgkAAQgjAAgVAbg");
	this.shape_96.setTransform(255.625,425.925);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgJAfIAFgMQAEgKABgHQgBgDgFgDQgGgEgCgDQgCgEAAgDQAAgHAEgEQAEgEAHAAQAFAAAGAGQAFAHAAAKQAAAIgKARQgIATgFAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape_97.setTransform(628.4,402.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("ABNAxIgNgBIgLABIgKABQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgEAHgBQAGAAADgDQACgDAAgEIAAg2QAAgDgDgCQgDgCgDgBQgGABgIAGQgIAHgDgBIgDgBIgBgCQAAgHAMgJQANgKANAAQAPAAAFANQACADAAAmIAAAYQAAAFACACQADACAFABQAEABACABIABAEQAAAFgHAAIgJgBgAAMAxIgMgBIgOABIgHABQgBAAAAAAQgBAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgEAEAAQAFAAAEgCQAEgEAAgFIAAg2QAAgDgDgCQgDgCgDgBQgHAAgJAJQgGAEgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBQAAgHANgKQANgJALAAQAJAAAGAHQAGAGAAAJIAAA4QAAAFADACQADADAEAAQAHAAAAAGQAAAFgHAAIgJgBgAg1AxIgLgCIgKACIgKABQgIAAAAgEQAAgBAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQABgBAEgBIAHgCQACgCABgDQABgCAAgKIAAgsQAAgFgDgEQgEgCgCAAQgJgBAAgFQAAgFAGgBIAHACIAHABIAHgBIAFgCQAEABABACQACACAAANIABAfIgBAYQAAAGABADIAEADIAGABIAFACQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAFgIAAIgKgBg");
	this.shape_98.setTransform(616.425,396.65);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AglAyQgLgFgGgJQgHgJAAgOQAAgOAOgLQAOgMAWAAQAIAAAIAEQAJAFAAAEQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgHgCQgEgDgGAAQgLAAgIAGQgIAHAAALQAAANAJAHQAJAIALgBQAKABAIgIQAJgGAAgMIAAglQAAgIgGgGQgFgFgJAAQgMAAgMAIIgFACQgEAAgCgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgHAMgFQANgFAOABQASAAAMAJQALAJAAANIAAAuQAAALAOAEIAFACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgFABIgHgBIgHgCIgJACIgGABIgEgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIgDABQgQAJgSABQgIgBgLgEg");
	this.shape_99.setTransform(599.575,396.65);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AAvBlIgLAAIgMABIgMAAQgJAAAAgGQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQACgCAHAAQAHgBACgEQADgEAAgFIAAgVIAAgWQAAgGgFgFQgEgDgHAAQgHAAgIAHQgFAEgDAAIgDgBIgBgDQgBgIAPgIQAOgKAJABQAIAAAJAEQAHAGADAIQACADgBATIAAAVIAAAOQAAAFACAEQADAEAGABQAIAAABACQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAIgIABIgLgBgAgWBlIgNgBIgLABIgMABQgKAAAAgGIABgDQACgCAHgBQAIgBADgEQACgFAAgFIAAiXQAAgEgCgDQgDgDgHgCQgIgCAAgCQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAgEAIgBIAIABIAHABIAIgCIAHgBQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQACADAAAHIAACpQAAAEADADQABADAIABQAHABACACQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAEgIABIgNgBg");
	this.shape_100.setTransform(585.85,391.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAeBhQgIgHgSgUQgLgPgDAAIgDADIgGAGIgEAEIAAAKQAAAEACADQABADAHABQAHAAABACQABABAAAAQAAABAAAAQABABAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBABQgBABgEAAIgNgBIgNgBIgLABIgMABQgJAAAAgFIABgEQACgCAHgBQAHgBACgDQACgEAAgFIAAiZQAAgEgCgCQgCgDgHgCQgHgCgBgBQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIAFgCIAIACIAHABIAIgBIAGgBIAFABQABACABAGQABAGAAASIAABvQAAABAAABQABAAAAABQAAAAABABQAAAAABAAQACAAAJgKIASgUIACgCIgEgCQgDgCAAgDIABgEQABgBAFAAIAIAAIAJABIAMgBIALgBQAFAAADACQADABAAAEQAAAFgLAAQgPAAgGADQgGACgHAHIgIAJIgBADQAAADADAEIAhAjQADAEAFAAQADAAADgEQAEgFACAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIACAFQAAAHgIAHQgIAHgHAAQgHAAgJgGg");
	this.shape_101.setTransform(571.625,391.725);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AACA0QgGgBgIAAIgLABIgHABQgEAAgDgBQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABgCAHgBQAGgDABgCQACgCAAgLIAAgqQAAgEgCgEQgCgCgGgCQgGgCgBgCIgBgCQAAgFAHAAIAGAAIAGACIAFgCIAHAAQAIAAAAAQIAAAHIAAAEIAGgNQAGgNAGgGQAGgGAGAAQAFAAACACQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgCACQgBADgFADQgSANgIAVQgHASAAANQAAAGABACQACACAGACIAIADQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAAEgFAAIgLgBg");
	this.shape_102.setTransform(560.025,396.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AglAyQgLgFgGgJQgHgJAAgOQAAgOAOgLQAOgMAWAAQAIAAAIAEQAJAFAAAEQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgHgCQgEgDgGAAQgLAAgIAGQgIAHAAALQAAANAJAHQAJAIALgBQAKABAIgIQAJgGAAgMIAAglQAAgIgGgGQgFgFgJAAQgMAAgMAIIgFACQgEAAgCgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgHAMgFQANgFAOABQASAAAMAJQALAJAAANIAAAuQAAALAOAEIAFACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgFABIgHgBIgHgCIgJACIgGABIgEgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIgDABQgQAJgSABQgIgBgLgEg");
	this.shape_103.setTransform(548.525,396.65);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AhrBlQgDgDAAgCQAAgDAEgCQADgCAFAAQANAAAAgQIAAiTQAAgFgDgFQgEgEgHgBQgHgBgCgCQgCgCAAgDQAAAAAAgBQABAAAAgBQAAAAABAAQABgBAAAAQADgCADAAIAHABIAHABIAHgBIAGgBQAEAAACADIAGAKIAgBBIAbA1IACADQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBABgBIA9hzQAFgKAEgDQAEgDAEAAIAHABIAHAAIAGAAIAEgBQAIAAAAAGQAAAFgIAAQgGAAgEAEQgFAFgBACQgBABAAAIIAACQQAAAGADAEQACAEAJACQAIACABABQABABAAAAQAAABAAAAQABABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgDACgEAAIgMgCIgPgBIgOABIgOACQgJAAAAgHQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAGgCQAKgBADgDQADgDAAgKIAAh4QAAgIgBAAQgBAAgEAIIgWArIgZAuIgLAXIgCACIgDABQgDAAgDgFIg1hoQgEgHgBAAIAAAHIAAB3QAAAFAEAEQAFADAEAAQAMAAAAAHQAAAGgKAAIgKgCIgLgBIgMACIgKABQgFAAgDgCg");
	this.shape_104.setTransform(530.775,391.375);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgKAfIAGgMQAFgKAAgHQAAgDgGgDQgGgEgCgDQgCgEAAgDQAAgHAEgEQAEgEAHAAQAFAAAGAGQAFAHAAAKQAAAIgKARQgIATgFAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBg");
	this.shape_105.setTransform(513.1,402.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgJAKQgFgEAAgGQAAgFAEgEQAFgFAFABQAGAAAEADQAFAEAAAGQAAAHgFADQgEAFgGAAQgEgBgFgEg");
	this.shape_106.setTransform(509.125,400.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgpAlQgRgRAAgWQAAgVASgPQATgPAVAAQAeAAAPAPQAOAQAAAVQAAADgCABIgIABIhAAAQgIAAAAgFQAAgFAIAAIAsAAQABAAABAAQABAAAAgBQABAAAAAAQAAAAABAAIABgEQAAgLgIgKQgJgJgRAAQgLAAgMALQgNALAAAUQAAAPANAMQAOAMAPAAQAMAAAPgIIAHgDQABAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAAFgQAHQgQAIgPAAQgZAAgQgRg");
	this.shape_107.setTransform(500.825,396.675);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgEAuIgihGQgDgGgFgEQgGgEgEAAQgFAAgDgCQgDgBAAgDQAAgGAHAAIAOACIAKABIAMgBIAMgCQAFAAACACQACABABADQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAAAIgGADIgHACQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAAAABIADAHIATAoQAAABAAABQABAAAAAAQAAABAAAAQABAAAAAAQABAAACgEIATgnQABgDAAgDQAAgFgEgBIgHgCQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgEACgBIAGgBIAHABIALABIALgBIAIgCQAHAAAAAFIAAAFIgIACIgKADIgGAFIgGALIgeBAIgBACQgCAGgEAAQgCAAgDgGg");
	this.shape_108.setTransform(487.95,396.825);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("ABYBoIgQgBIgQABIgMABQgFAAgCgBQgDgCAAgDQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAABgBQABgBAIgBQAHgBACgCQADgDAAgDQAAgEgIgSQgJgSgCgBIgHgBIg+AAQgEAAgDgDQgDgCAAgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQADgCADAAIA7AAQAGAAAAgCIgCgGIgfhFQgDgHgBAAQgCAAgDAJIgeBEIgaA7IgCAEQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAIAEQAGABABACIACAEQAAAGgJAAIgJgBIgNgBIgLABIgIABQgDAAgDgCQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAgBQAAgBABAAQAAgBAAAAQAAgBAAAAQACgBAEgBQALgBAEgHQAEgGARgoIAjhLIAQgkQADgJAAgFIgBgHIgBgGQAAgEAEAAQAHAAAEAGQAEAGAIARIAnBYIAbA7QAFAMAEADQAEAEAFABIAHADQACACAAADQAAAFgJAAIgLgBg");
	this.shape_109.setTransform(471.025,391.175);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAGAxQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIABgDQABAAAAgBQABAAAAAAQABAAAAgBQABAAABAAQAEAAADgCQAEgDAAgFIABgpIAAgJQAAgLgKAAQgEAAgJAGQgGAHgEAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAgFANgKQAMgKANAAQAGAAAGAEQAGADABAGQACAGAAAKIAAAJIAAAoQAAAGACACQACACAFABQAGABgBAEQABAEgGAAIgIAAIgNgBIgPABIgHABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAgAgUAxIgKgBIgLABIgKABQgIAAABgGIABgEIAFgBIAGgCQADgDABgDQABgCAAgIIAAgtQAAgFgCgDQgCgDgGgBQgHgBAAgFQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQADgCADAAIAFABIAHABIAHAAIAIgBQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAQACACgBAHIABAZIgBAoIAAAFIAEADIAGACQAFABABACIABADQAAAFgIAAIgKgBg");
	this.shape_110.setTransform(449,396.625);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgpAlQgRgRAAgWQAAgVASgPQATgPAVAAQAeAAAPAPQAOAQAAAVQAAADgCABIgIABIhAAAQgIAAAAgFQAAgFAIAAIAsAAQABAAABAAQABAAAAgBQABAAAAAAQAAAAABAAIABgEQAAgLgIgKQgJgJgRAAQgLAAgMALQgNALAAAUQAAAPANAMQAOAMAPAAQAMAAAPgIIAHgDQABAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAAFgQAHQgQAIgPAAQgZAAgQgRg");
	this.shape_111.setTransform(435.925,396.675);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgzBZQgRgQAAgVQAAgYARgPQARgOAWAAQAKAAAJAEQAKAFAAAFIgBADQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAIgKgDQgHgEgHAAQgOAAgKANQgJAMgBAQQABAOAIAOQAJAOAQAAQAIAAAKgFQALgFADgHQADgJAAgQIAAh4QAAgMgEgEQgEgFgIgCIgIgDQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABAAQAAgBAAAAQAAgBABAAQAAAAAAAAQACgCADAAIAIABIAIABIALgBIAGgBQAFAAABADQACADAAAFIABAPIAAAKIAACHQAAAGADAGQACAGAHADIAJADIABADQAAAGgHAAIgFgCIgKgBIgJABIgGACQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAgBAAAAIgBgDIgCACQgWAMgNAAQgWAAgQgQg");
	this.shape_112.setTransform(422.45,391.75);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AACA0QgGgBgIAAIgLABIgHABQgEAAgDgBQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABgCAHgBQAGgDABgCQACgCAAgLIAAgqQAAgEgCgEQgCgCgGgCQgGgCgBgCIgBgCQAAgFAHAAIAGAAIAGACIAFgCIAHAAQAIAAAAAQIAAAHIAAAEIAGgNQAGgNAGgGQAGgGAGAAQAFAAACACQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgCACQgBADgFADQgSANgIAVQgHASAAANQAAAGABACQACACAGACIAIADQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAAEgFAAIgLgBg");
	this.shape_113.setTransform(410.825,396.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AglAyQgLgFgGgJQgHgJAAgOQAAgOAOgLQAOgMAWAAQAIAAAIAEQAJAFAAAEQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgHgCQgEgDgGAAQgLAAgIAGQgIAHAAALQAAANAJAHQAJAIALgBQAKABAIgIQAJgGAAgMIAAglQAAgIgGgGQgFgFgJAAQgMAAgMAIIgFACQgEAAgCgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgHAMgFQANgFAOABQASAAAMAJQALAJAAANIAAAuQAAALAOAEIAFACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgFABIgHgBIgHgCIgJACIgGABIgEgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIgDABQgQAJgSABQgIgBgLgEg");
	this.shape_114.setTransform(399.325,396.65);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAxBqIgEgIIgtiIIgCgFQAAAAAAABQgBAAAAAAQAAABAAABQgBABAAABIgoCIQgCAGgCACQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBIgDgIIg6isQgCgIgEgEQgDgEgHgBQgGgBgCgBQgBgBAAgEQAAgIAKAAIAJACIAOABIANgCIAJgBQAFAAADACQAEACAAAEQAAAHgKAAQgIAAAAAFIACAJQALAcAeBdQAAABABAAQAAABAAAAQAAABABAAQAAAAAAAAIACgDIAqiOIADgGQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAQADAAACAGIAwCRIACADQAAAAAAAAQABAAAAgBQAAAAAAgBQABAAAAgBIAlh4IACgIQAAgIgJAAQgEAAgDgCQgDgCAAgDQAAgEADgCQADgCAFAAIAHABIAMABIAMgBIAMgBQAJAAAAAHQAAAEgDACIgGABQgGAAgGAFQgHAFgCAIIg1CsIgCAGQgBAFgEAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_115.setTransform(378.775,391.825);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AghBgQgRgLgKgZQgKgYAAgkQAAgtAUgeQAUgfAgAAQAQAAARAMQAQANAKAZQAKAZAAAiQAAAwgUAcQgVAcgeAAQgQAAgRgLgAgcg/QgLAdAAAoQAAAkALAZQAKAaASAAQATAAALgZQALgZAAgvQAAgogLgYQgLgYgRAAQgSAAgMAdg");
	this.shape_116.setTransform(352.575,391.25);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AghBgQgRgLgKgZQgKgYAAgkQAAgtAUgeQAUgfAgAAQAQAAARAMQAQANAKAZQAKAZAAAiQAAAwgUAcQgVAcgeAAQgQAAgRgLgAgcg/QgLAdAAAoQAAAkALAZQAKAaASAAQATAAALgZQALgZAAgvQAAgogLgYQgLgYgRAAQgSAAgMAdg");
	this.shape_117.setTransform(337.425,391.25);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgrBmQgNgFgIgJQgHgIAAgEIABgEQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQACAAAIAGQAMALAJADQAJADAIAAQAMAAANgJQAPgHAJgQQAKgQAAgdQAAgcgQgSQgQgTgOAAQgVAAgSAYQgEAGgCABIgEAAQgEAAAAgGIABgGQACgJAAgUIAAgjQAAgKAKAAIA6AAQAEAAADgCQAEgCADAAQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAAGgNAJQgMAIgUAAQgIAAgIgCIgKgCQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABIAAAcQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAIACgBQAHgFAKgEQAKgDAKAAQALAAASAIQARAHAOARQANASAAAeQAAAbgNAVQgMAVgVALQgWALgQAAQgRAAgOgGg");
	this.shape_118.setTransform(322.175,391.45);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgvBZQgUgSAAgcQAAgPAIgOQAJgNATgPIABgCIgBgCQgMgLgFgJQgFgKAAgLQAAgVAQgNQAPgNAWAAQAWAAANAMQANANAAAWQAAAJgEAHQgEAHgNALIgBACIACABQAWAPAJAOQAJAOAAAWQAAAdgTARQgUASgdAAQgaAAgVgSgAgqAUQgJALAAAOQAAAVAOANQAOANAUAAQANAAAPgNQAOgMAAgTQAAgVgQgOQgJgIgMgFIgNgFQgWANgJAMgAgShTQgIAHAAAMQAAAVAdAKQAZgKAAgUQAAgMgIgIQgIgIgLAAQgLAAgIAIg");
	this.shape_119.setTransform(307.675,391.175);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgKAfIAGgMQAFgKgBgHQABgDgGgDQgGgEgCgDQgCgEAAgDQAAgHAEgEQAEgEAHAAQAFAAAGAGQAFAHAAAKQAAAIgKARQgIATgFAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBg");
	this.shape_120.setTransform(293.75,402.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AglAyQgLgFgGgJQgHgJAAgOQAAgOAOgLQAOgMAWAAQAIAAAIAEQAJAFAAAEQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgHgCQgEgDgGAAQgLAAgIAGQgIAHAAALQAAANAJAHQAJAIALgBQAKABAIgIQAJgGAAgMIAAglQAAgIgGgGQgFgFgJAAQgMAAgMAIIgFACQgEAAgCgCQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgHAMgFQANgFAOABQASAAAMAJQALAJAAANIAAAuQAAALAOAEIAFACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgFABIgHgBIgHgCIgJACIgGABIgEgBQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAIgDABQgQAJgSABQgIgBgLgEg");
	this.shape_121.setTransform(284.975,396.65);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("Ag+BLQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAABgBQAJgEACgIQADgHABgGQABgIAAglIgBgyQAAgEgDgDQgDgDgIgBIgJgCQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgGAKAAIAIACIAJACIAHgCIAHgCQAEAAABACIABAFIAAAyQAAAPAJAIQAKAJAMAAQAHAAAJgFQAKgGAFgJQAGgLAAgNQgBgPgIgMQgKgMgNAAQgHAAgGADIgIADIgEgBIgBgEQAAgEAKgEQAKgFAHABQAYAAAPAOQAPAOAAAaQAAATgPAQQgRAQgWAAQgJgBgHgCQgHgCgNgIQgBAAAAAHQAAASgCAKQgDAJgFAHQgGAHgGADQgFADgGgBQgIABABgEg");
	this.shape_122.setTransform(271,399.15);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgpBkQgSgIgBgIIABgHIAAgOIAAgHIgBgFQABgFAGAAQAHAAABAKQABARAKAKQALAKASAAQATAAAMgLQAMgKAAgRQAAgKgJgMQgHgLgjgYQgOgKgIgIQgJgHgFgKQgGgJAAgNQAAgUATgNQASgOAWAAQAOAAAQAHQAPAHAAAJIAAAEIAAAIIAAAGQABAJgHAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQAAgOgJgHQgJgIgOAAQgOAAgLAJQgLAIAAALQAAAHAFAHQAEAHAVAOQAlAcANAPQANARAAATQgBAbgUAPQgVAPgYAAQgSAAgSgHg");
	this.shape_123.setTransform(257.35,391.325);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AhkBTQgYgWAAghQAAgaAVgTQAUgUAbgCQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAAAIgCgEIgmg1IgBgDQAAgDAFAAIATgBIBCAAIAHABQADABABAEQACADAAAIQAAANgCADQgCADgEAAQgDAAgDgGQgCgGgEAAIgnAAQgIAAAAAFQAAADACADIAVAeIADAEQADADAAACQAAAEgFAAIgFgBIgGAAQgOAAgRAOQgSAOAAAfQAAAYARATQARATAXAAQAXAAATgPQAVgQAAgWQAAgQgKgKQgJgJgKAAQgJAAgFAFQgGAFAAAJQAAAGAGAFQAAAAABABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAIgFACQgFAAgEgGQgEgGAAgIQAAgLAFgJQAFgJANgJQAMgKAQgFQAQgEAbAAQAYAAAPgFQAPgFAAgMIgCgDIgBgFQAAgFAGAAQADAAADAEQACAEAAAFQAAAJgHAJQgIAJgMAHQgNAHgPACQgQACgcAAQgPAAgEACQgFABAAABQAAABAAAAQABAAAAAAQAAAAABAAQAAAAABAAQANAAALANQALANAAAUQAAARgMAPQgLAOgSAJQgTAIgTAAQglAAgYgWg");
	this.shape_124.setTransform(233.125,391.425);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgpAlQgRgRAAgWQAAgVASgPQATgPAVAAQAeAAAPAPQAOAQAAAVQAAADgCABIgIABIhAAAQgIAAAAgFQAAgFAIAAIAsAAQABAAABAAQABAAAAgBQABAAAAAAQAAAAABAAIABgEQAAgLgIgKQgJgJgRAAQgLAAgMALQgNALAAAUQAAAPANAMQAOAMAPAAQAMAAAPgIIAHgDQABAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAAFgQAHQgQAIgPAAQgZAAgQgRg");
	this.shape_125.setTransform(209.125,396.675);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AACA0QgGgBgIAAIgLABIgHABQgEAAgDgBQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABgCAHgBQAGgDABgCQACgCAAgLIAAgqQAAgEgCgEQgCgCgGgCQgGgCgBgCIgBgCQAAgFAHAAIAGAAIAGACIAFgCIAHAAQAIAAAAAQIAAAHIAAAEIAGgNQAGgNAGgGQAGgGAGAAQAFAAACACQABAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAADgCACQgBADgFADQgSANgIAVQgHASAAANQAAAGABACQACACAGACIAIADQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAEgFAAIgLgBg");
	this.shape_126.setTransform(198.475,396.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgRAwIAAg1IAAgDIgIAAQgGAAgBgCQgDgBAAgEQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAFgDQAFgBADgCIAGgGQAEgGACgJQABgJAAgSQAAgIAFAAQAFAAABACQABADAAAFIAAAvQAAABAAABQAAAAABAAQAAABABAAQABAAAAAAIAUAAQAHAAgBAFQAAAHgIAAIgSAAIgCAAIAAADIAAAyQAAAMAAADQABADADAAQAFAAAHgFQAHgFACAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABIABAEQABAEgMAJQgLAJgIAAQgVAAgBghg");
	this.shape_127.setTransform(189.25,393.875);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AAGAxQAAgBAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBIACgDQABAAAAgBQABAAAAAAQABAAAAgBQABAAABAAQAEAAAEgCQADgDAAgFIAAgpIABgJQAAgLgKAAQgFAAgHAGQgIAHgDAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAgFANgKQAMgKAMAAQAIAAAFAEQAFADACAGQACAGAAAKIAAAJIAAAoQAAAGACACQACACAGABQAEABAAAEQAAAEgEAAIgJAAIgNgBIgOABIgIABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAgAgUAxIgKgBIgLABIgKABQgIAAABgGIAAgEIAGgBIAGgCQADgDABgDQABgCAAgIIAAgtQAAgFgCgDQgCgDgGgBQgHgBAAgFQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQADgCADAAIAFABIAHABIAHAAIAIgBQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAQABACAAAHIABAZIgBAoIAAAFIAEADIAGACQAFABABACIABADQAAAFgIAAIgKgBg");
	this.shape_128.setTransform(178.2,396.625);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgpAlQgRgRAAgWQAAgVASgPQATgPAVAAQAeAAAPAPQAOAQAAAVQAAADgCABIgIABIhAAAQgIAAAAgFQAAgFAIAAIAsAAQABAAABAAQABAAAAgBQABAAAAAAQAAAAABAAIABgEQAAgLgIgKQgJgJgRAAQgLAAgMALQgNALAAAUQAAAPANAMQAOAMAPAAQAMAAAPgIIAHgDQABAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAAFgQAHQgQAIgPAAQgZAAgQgRg");
	this.shape_129.setTransform(165.125,396.675);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgrBbQgYgOgNgaQgNgaAAgaQAAgcANgYQAMgZAYgNQAXgOAeAAQAUAAARAFQARAFAKAIQAJAHAAAEIAAALIAAAGIABAFIABAGQAAAFgGAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQgCgBgDgIQgIgRgIgHQgQgOgbAAQgiAAgTAaQgUAZAAApQAAAqAVAaQAVAZAjAAQAJAAAUgGQAUgGATgSQAEgEADAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABIABADQAAAFgLALQgMAKgSAIQgSAIgVAAQggAAgZgPg");
	this.shape_130.setTransform(149.175,391.275);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgpAlQgRgRAAgWQAAgVASgPQATgPAVAAQAeAAAPAPQAOAQAAAVQAAADgCABIgIABIhAAAQgIAAAAgFQAAgFAIAAIAsAAQABAAABAAQABAAAAgBQABAAAAAAQAAAAABAAIABgEQAAgLgIgKQgJgJgRAAQgLAAgMALQgNALAAAUQAAAPANAMQAOAMAPAAQAMAAAPgIIAHgDQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAAFgQAHQgQAIgPAAQgZAAgQgRg");
	this.shape_131.setTransform(128.425,396.675);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgiAmQgSgPAAgXQAAgVARgQQARgQAYAAQANAAAQAFQARAGAAAEIABANIAAAFQAAAHgFAAQgFAAgCgJQgDgIgHgFQgJgFgLAAQgOAAgMALQgNAKAAATQAAASAPAMQANALAOAAIAMgBQAGgBAHgFQAIgEACAAQAEAAAAAGQAAAFgNAGQgPAHgPAAQgaAAgSgQg");
	this.shape_132.setTransform(116.1,396.625);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AAGAxQAAgBAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBIACgDQABAAAAgBQABAAAAAAQABAAAAgBQABAAABAAQAEAAAEgCQADgDAAgFIABgpIAAgJQAAgLgKAAQgFAAgHAGQgIAHgDAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAgFANgKQAMgKAMAAQAIAAAFAEQAFADACAGQACAGAAAKIAAAJIAAAoQAAAGACACQACACAGABQAEABAAAEQAAAEgEAAIgJAAIgNgBIgOABIgIABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAgAgUAxIgLgBIgKABIgKABQgIAAABgGIABgEIAFgBIAGgCQADgDABgDQABgCAAgIIAAgtQAAgFgCgDQgCgDgGgBQgHgBAAgFQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQADgCADAAIAFABIAHABIAHAAIAIgBQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAQABACAAAHIABAZIgBAoIAAAFIAEADIAGACQAFABABACIABADQAAAFgIAAIgKgBg");
	this.shape_133.setTransform(103.5,396.625);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgpAlQgRgRAAgWQAAgVASgPQATgPAVAAQAeAAAPAPQAOAQAAAVQAAADgCABIgIABIhAAAQgIAAAAgFQAAgFAIAAIAsAAQABAAABAAQABAAAAgBQABAAAAAAQAAAAABAAIABgEQAAgLgIgKQgJgJgRAAQgLAAgMALQgNALAAAUQAAAPANAMQAOAMAPAAQAMAAAPgIIAHgDQABAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAAFgQAHQgQAIgPAAQgZAAgQgRg");
	this.shape_134.setTransform(90.425,396.675);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AACA0QgGgBgIAAIgLABIgHABQgEAAgDgBQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABgCAHgBQAGgDABgCQACgCAAgLIAAgqQAAgEgCgEQgCgCgGgCQgGgCgBgCIgBgCQAAgFAHAAIAGAAIAGACIAFgCIAHAAQAIAAAAAQIAAAHIAAAEIAGgNQAGgNAGgGQAGgGAGAAQAFAAACACQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgCACQgBADgFADQgSANgIAVQgHASAAANQAAAGABACQACACAGACIAIADQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAAEgFAAIgLgBg");
	this.shape_135.setTransform(79.775,396.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgpAlQgRgRAAgWQAAgVASgPQATgPAVAAQAeAAAPAPQAOAQAAAVQAAADgCABIgIABIhAAAQgIAAAAgFQAAgFAIAAIAsAAQABAAABAAQABAAAAgBQABAAAAAAQABAAAAAAIABgEQAAgLgIgKQgJgJgRAAQgLAAgMALQgNALAAAUQAAAPANAMQAOAMAPAAQAMAAAPgIIAHgDQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAAFgQAHQgQAIgPAAQgZAAgQgRg");
	this.shape_136.setTransform(68.675,396.675);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AANBmQgHgBgHAAIgNABIgKABQgJAAAAgGIABgDIAIgCQAGgBADgCQACgCABgDIAAgMIAAgtQAAgKgMAAQgKAAAAgGQAAgGAKAAIAHABIAEAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBIAAgoQAAgQAEgKQADgKAHgJQAHgJALgGQAKgGADAAQACAAAAAFIgDADQgNAKgEANQgFAOAAARIAAAtQAAAAAAAAQAAABAAAAQABAAAAAAQABAAAAAAIAFAAIAHgBQAJAAAAAGQAAADgDABQgDACgDAAQgOAAAAALIAAAxQAAAHABACIAEADQACACAGABQAHABACABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAFgIAAIgMgBg");
	this.shape_137.setTransform(58.225,391.475);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AAGAxQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIABgDQABAAAAgBQABAAAAAAQABAAAAgBQABAAABAAQAEAAADgCQAEgDAAgFIABgpIAAgJQAAgLgKAAQgEAAgJAGQgGAHgEAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAgFANgKQAMgKANAAQAGAAAGAEQAFADACAGQACAGAAAKIAAAJIAAAoQAAAGACACQACACAFABQAGABgBAEQABAEgGAAIgIAAIgNgBIgPABIgHABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAgAgUAxIgKgBIgLABIgKABQgIAAABgGIABgEIAFgBIAGgCQADgDABgDQABgCAAgIIAAgtQAAgFgCgDQgCgDgGgBQgHgBAAgFQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQADgCADAAIAFABIAHABIAHAAIAIgBQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAQACACgBAHIABAZIgBAoIAAAFIAEADIAGACQAFABABACIABADQAAAFgIAAIgKgBg");
	this.shape_138.setTransform(47.6,396.625);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgpAmQgRgPgBgXQABgUAPgQQAQgRAcAAQAYAAARARQARAQAAAUQAAAXgQAPQgRAQgbgBQgWABgSgQgAgYgcQgKAKAAASQAAATAKAKQALAMAOAAQARAAAKgMQAJgMAAgRQAAgRgKgLQgLgMgQAAQgPAAgJAMg");
	this.shape_139.setTransform(34.5,396.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgrBbQgYgOgNgaQgNgaAAgaQAAgcANgYQAMgZAYgNQAXgOAeAAQAUAAARAFQARAFAKAIQAJAHAAAEIAAALIAAAGIABAFIABAGQAAAFgGAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQgCgBgDgIQgIgRgIgHQgQgOgbAAQgiAAgTAaQgUAZAAApQAAAqAVAaQAVAZAjAAQAJAAAUgGQAUgGATgSQAEgEADAAQAAAAABAAQABAAAAABQABAAAAAAQAAAAABABIABADQAAAFgLALQgMAKgSAIQgSAIgVAAQggAAgZgPg");
	this.shape_140.setTransform(18.525,391.275);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgZAxQgLgEAAgFIAAgKIgBgJQAAgHAHAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIAFAKQAEAJAEADQAFAEAGAAQAHAAAFgFQAFgFAAgIQAAgFgDgFQgEgEgPgIQgPgGgFgHQgFgHAAgJQAAgLAKgHQALgIAMAAQAMAAAKAEQALAEAAAFIABAGIAAAHQAAADgBACQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgCgGQgBgEgDgDQgCgCgFgCQgEgCgFAAQgEAAgFADQgFADAAAEQAAAEADADQADADAQAJQAQAJAGAHQAGAIAAAJQAAAPgMAIQgMAJgSAAQgLAAgKgFg");
	this.shape_141.setTransform(489.975,361.975);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgpAlQgRgRAAgWQAAgVASgPQATgPAVAAQAeAAAPAPQAOAQAAAVQAAADgCABIgIABIhAAAQgIAAAAgFQAAgFAIAAIAsAAQABAAABAAQABAAAAAAQABgBAAAAQAAAAABAAIABgEQAAgLgIgKQgJgJgRAAQgLAAgMALQgNALAAAUQAAAPANAMQAOAMAPAAQAMAAAPgIIAHgDQABAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAFgQAHQgQAIgPAAQgZAAgQgRg");
	this.shape_142.setTransform(479.325,362.075);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgQAwIAAg1IgBgDIgIAAQgFAAgCgCQgCgBAAgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQABgCAEgBQAFgBACgCIAHgGQAEgGACgJQABgJABgSQgBgIAFAAQAEAAABACQACADAAAFIAAAvQAAABAAABQAAAAABABQAAAAABAAQABAAABAAIAUAAQAFAAAAAFQABAHgJAAIgRAAIgDAAIgBADIAAAyQAAAMABADQACADADAAQAEAAAHgFQAGgFADAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAAAABIACAEQAAAEgMAJQgKAJgJAAQgVAAAAghg");
	this.shape_143.setTransform(468.55,359.275);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgZBHQgCgBAAgEIABgDQABgBAFgBQAGgBACgCQACgDAAgKIAAguQAAgGgDgCQgCgCgFgBQgFgBgBgCIgCgEQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQACgCADAAIAHABIAHABIAHAAIAHgBQAFAAAAAJIAAADIAAAEIAAA6QAAAHACACQADACAEAAIAGACQAAAAABABQAAAAAAABQABAAAAABQAAABAAABQAAAFgJAAIgKgBIgKgBIgKABIgJABQgEAAgCgCgAgKgvQgEgFAAgGQAAgGAEgEQAFgEAFAAQAGAAAFAEQAFAFAAAHQAAAFgFAEQgEAEgHAAQgFAAgFgEg");
	this.shape_144.setTransform(460.625,359.725);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgjArQgHgGgCgHQgBgJAAgxQABgGgOgEQgHgBAAgDQAAgBABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAgBABAAIAJACIAMABIAGgBIAEgBQAFAAAAATIAAAxQgBAHAGAFQAFAEAIABQAEgBAFgDQAGgDADgBQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQABAFgLAGQgKAGgNAAQgKAAgIgHgAAyAuIgJgBIgHABIgFABQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgIIgBgaIAAglQAAgKgLgCQgGAAgCgCQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgFAIAAIAIABQAHACAIAAIAEgBIAEgBQAEABAAAIQAABBABAEQABAEALADIAGACIACACQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQgCABgEABIgHgBg");
	this.shape_145.setTransform(449.8,362.35);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgpBkQgSgIgBgIIABgHIAAgOIAAgHIgBgFQABgFAGAAQAGAAACAKQABARALAKQAKAKASAAQATAAAMgLQAMgKAAgRQAAgKgJgMQgIgLgigYQgOgKgIgIQgJgHgFgKQgGgJAAgNQAAgUATgNQASgOAWAAQAOAAAQAHQAPAHAAAJIAAAEIAAAIIAAAGQAAAJgGAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgOgKgHQgJgIgOAAQgOAAgLAJQgLAIAAALQAAAHAFAHQAFAHATAOQAmAcANAPQAMARAAATQAAAbgUAPQgVAPgYAAQgSAAgSgHg");
	this.shape_146.setTransform(436.25,356.725);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("ABNAxIgNgBIgLABIgKABQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAgEAHgBQAGgBADgDQACgCAAgFIAAg1QAAgDgDgCQgDgCgDAAQgGgBgIAHQgIAGgDAAIgDAAIgBgDQAAgGAMgKQANgJANAAQAPAAAFAMQACADAAAmIAAAYQAAAEACACQADADAFABQAEABACACIABACQAAAGgHAAIgJgBgAAMAxIgMgBIgOABIgHABQgBAAAAAAQgBAAgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgEAEAAQAFAAAEgDQAEgCAAgHIAAg1QAAgDgDgCQgDgCgDAAQgHAAgJAHQgGAGgDgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgIANgJQANgKALAAQAJAAAGAGQAGAHAAAIIAAA5QAAAFADACQADADAEAAQAHAAAAAGQAAAFgHAAIgJgBgAg1AxIgLgBIgKABIgKABQgIAAAAgFQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQABgCAEAAIAHgCQACgCABgCIABgMIAAguQAAgEgDgDQgEgEgCAAQgJAAAAgEQAAgHAGAAIAHABIAHABIAHgBIAFgBQAEABABABQACACAAAOIABAeIgBAZQAAAGABACIAEADIAGADIAFABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAFgIAAIgKgBg");
	this.shape_147.setTransform(415.025,362.05);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AglAyQgLgFgGgJQgHgJAAgOQAAgOAOgLQAOgMAWABQAIAAAIADQAJAFAAAEQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgHgDQgEgCgGAAQgLAAgIAHQgIAFAAAMQAAANAJAHQAJAIALAAQAKAAAIgIQAJgGAAgLIAAgmQAAgIgGgGQgFgFgJAAQgMAAgMAHIgFAEQgEAAgCgCQgBgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgHAMgFQANgEAOgBQASABAMAIQALAKAAANIAAAuQAAAKAOAFIAFACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgFACIgHgCIgHgBIgJABIgGACIgEgCQgBAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAAAIgDAAQgQAKgSAAQgIABgLgFg");
	this.shape_148.setTransform(398.175,362.05);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AAvBlIgLgBIgMABIgMABQgJAAAAgGQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQABgBAHgBQAIgBACgDQACgEAAgEIAAgWIAAgWQAAgGgFgEQgDgEgIAAQgGAAgJAHQgFAEgDAAIgDgCIgCgDQABgHAPgJQANgIAJgBQAJABAHAFQAJAFACAHQABAEAAAUIAAAUIAAAPQAAAEADAEQABAEAIABQAGAAACADQAAAAABAAQAAABAAAAQAAABAAAAQABAAAAABQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAIgIABIgLgBgAgWBkIgNgBIgLABIgMABQgKAAABgEIABgFQABgBAIgBQAHgBADgEQABgFAAgFIAAiXQAAgEgBgDQgDgDgHgDQgHgCgBgBQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgGAJAAIAHABIAHAAIAHgBIAIgBQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQACACAAAIIAACpQAAAEADADQABADAIABQAHABACABQAAABAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAFgIgBIgNgBg");
	this.shape_149.setTransform(384.45,357);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AAeBhQgIgHgSgUQgLgPgDAAIgDADIgGAGIgEAEIAAAKQAAAEACADQABADAHABQAHAAABACQABABAAAAQAAABAAAAQABABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQgBABgEAAIgNgBIgNgBIgLABIgMABQgJAAAAgFIABgEQACgCAHgBQAHgBACgDQACgEAAgFIAAiZQAAgEgCgCQgCgDgHgCQgHgCgBgBQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIAFgCIAIACIAHABIAIgBIAGgBIAFABQABACABAGQABAGAAASIAABvQAAABAAABQABAAAAABQAAAAABABQAAAAABAAQACAAAJgKIASgUIACgCIgEgCQgDgCAAgDIABgEQABgBAFAAIAIAAIAJABIAMgBIALgBQAFAAADACQADABAAAEQAAAFgLAAQgPAAgGADQgGACgHAHIgIAJIgBADQAAADADAEIAhAjQADAEAFAAQADAAADgEQAEgFACAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAIACAFQAAAHgIAHQgIAHgHAAQgHAAgJgGg");
	this.shape_150.setTransform(370.225,357.125);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AACA0QgGgBgIgBIgLACIgHABQgEAAgDgCQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABgCAHgCQAGgCABgCQACgCAAgLIAAgqQAAgEgCgDQgCgEgGgCQgGgBgBgBIgBgEQAAgEAHAAIAGABIAGAAIAFAAIAHgBQAIAAAAARIAAAHIAAADIAGgNQAGgOAGgFQAGgGAGAAQAFAAACACQABAAABABQAAAAAAABQABAAAAABQAAAAAAAAQAAAFgCACQgBACgFADQgSAOgIATQgHATAAANQAAAGABACQACADAGABIAIADQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAAEgFAAIgLgBg");
	this.shape_151.setTransform(358.625,361.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AglAyQgLgFgGgJQgHgJAAgOQAAgOAOgLQAOgMAWABQAIAAAIADQAJAFAAAEQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgHgDQgEgCgGAAQgLAAgIAHQgIAFAAAMQAAANAJAHQAJAIALAAQAKAAAIgIQAJgGAAgLIAAgmQAAgIgGgGQgFgFgJAAQgMAAgMAHIgFAEQgEAAgCgCQgBgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgHAMgFQANgEAOgBQASABAMAIQALAKAAANIAAAuQAAAKAOAFIAFACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgFACIgHgCIgHgBIgJABIgGACIgEgCQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAIgDAAQgQAKgSAAQgIABgLgFg");
	this.shape_152.setTransform(347.125,362.05);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AhrBlQgDgDAAgCQAAgDAEgCQADgCAFAAQANAAAAgQIAAiTQAAgFgDgFQgEgEgHgBQgHgBgCgCQgCgCAAgDQAAAAAAgBQABAAAAgBQAAAAABAAQABgBAAAAQADgCADAAIAHABIAHABIAHgBIAGgBQAEAAACADIAGAKIAgBBIAbA1IACADQABAAAAAAQAAAAAAAAQAAgBAAAAQAAgBABgBIA9hzQAFgKAEgDQAEgDAEAAIAHABIAHAAIAGAAIAEgBQAIAAAAAGQAAAFgIAAQgGAAgEAEQgFAFgBACQgBABAAAIIAACQQAAAGADAEQACAEAJACQAIACABABQABABAAAAQAAABAAAAQABABAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQgBAAAAABQgDACgEAAIgMgCIgPgBIgOABIgOACQgJAAAAgHQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIAGgCQAKgBADgDQADgDAAgKIAAh4QAAgIgBAAQgBAAgEAIIgWArIgZAuIgLAXIgCACIgDABQgDAAgDgFIg1hoQgEgHgBAAIAAAHIAAB3QAAAFAEAEQAFADAEAAQAMAAAAAHQAAAGgKAAIgKgCIgLgBIgMACIgKABQgFAAgDgCg");
	this.shape_153.setTransform(329.375,356.775);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AhUCAIABgEIAohBIBvi2IAEgEQACgBAFAAQAGAAAAACIgBACIgtBJIhpCtIgFAGIgHABQgGAAAAgBg");
	this.shape_154.setTransform(310.325,357.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgpAnQgRgQgBgWQABgVAPgQQAQgQAcAAQAYAAARAQQARAQAAAUQAAAYgQAPQgRAPgbAAQgWAAgSgPgAgZgdQgJAMAAARQAAATAKAKQALAMAOAAQARAAAKgMQAJgLAAgSQAAgRgKgMQgLgLgQAAQgPAAgKALg");
	this.shape_155.setTransform(295.5,362);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgQAwIAAg1IgBgDIgIAAQgGAAgCgCQgBgBAAgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQABgCAFgBQAEgBACgCIAHgGQAEgGACgJQABgJAAgSQABgIAEAAQAEAAABACQACADAAAFIAAAvQAAABAAABQAAAAABABQAAAAABAAQABAAABAAIATAAQAGAAABAFQAAAHgJAAIgRAAIgDAAIgBADIAAAyQAAAMACADQAAABAAABQABAAAAAAQABABAAAAQABAAABAAQAEAAAHgFQAHgFACAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAABABIABAEQgBAEgKAJQgLAJgJAAQgWAAABghg");
	this.shape_156.setTransform(284.7,359.275);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AAHAxQgBgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIABgDQAAAAABgBQABAAAAAAQABgBAAAAQABAAAAAAQAFAAADgCQAEgDAAgFIABgpIAAgJQAAgLgKAAQgEAAgJAGQgGAHgEAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAgFANgKQAMgKANAAQAGAAAGAEQAFADACAGQACAGAAAKIAAAJIAAAoQAAAGACACQACACAFABQAFABABAEQgBAEgFAAIgIAAIgNgBIgPABIgHABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAgUAxIgKgBIgMABIgKABQgGAAgBgGIACgEIAFgBIAGgCQAEgDAAgDQABgCAAgIIAAgtQAAgFgCgDQgCgDgHgBQgGgBAAgFQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQACgCAEAAIAGABIAGABIAHAAIAHgBQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAQABACABAHIAAAZIgBAoIABAFIADADIAGACQAFABABACIABADQAAAFgHAAIgLgBg");
	this.shape_157.setTransform(273.65,362.025);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgoAnQgSgQAAgWQgBgVARgQQAPgQAcAAQAXAAASAQQARAQAAAUQAAAYgQAPQgRAPgbAAQgWAAgRgPgAgYgdQgJAMAAARQAAATAKAKQAKAMAOAAQAQAAALgMQAJgLAAgSQAAgRgLgMQgKgLgQAAQgQAAgIALg");
	this.shape_158.setTransform(260.55,362);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AACA0QgGgBgIgBIgLACIgHABQgEAAgDgCQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABgCAHgCQAGgCABgCQACgCAAgLIAAgqQAAgEgCgDQgCgEgGgCQgGgBgBgBIgBgEQAAgEAHAAIAGABIAGAAIAFAAIAHgBQAIAAAAARIAAAHIAAADIAGgNQAGgOAGgFQAGgGAGAAQAFAAACACQABAAABABQAAAAAAABQABAAAAABQAAAAAAAAQAAAFgCACQgBACgFADQgSAOgIATQgHATAAANQAAAGABACQACADAGABIAIADQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAAEgFAAIgLgBg");
	this.shape_159.setTransform(249.875,361.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgoAnQgTgQABgWQAAgVAPgQQAQgQAcAAQAYAAARAQQASAQAAAUQAAAYgRAPQgRAPgbAAQgWAAgRgPgAgZgdQgIAMgBARQAAATALAKQAJAMAPAAQARAAAJgMQAKgLAAgSQAAgRgLgMQgKgLgQAAQgPAAgKALg");
	this.shape_160.setTransform(238.75,362);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AAMBnIgMgCIgKABIgKABQgFAAgDgCQgDgCAAgDIABgDQABgCAHgBQAGgCACgEQACgEAAgFIAAiXQAAgOgSAAQgMAAgFAGQgDADgCAGQgBAHgCABIgDABIgEgBQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQAAgPADgJQADgJAFAAIBtAAQAFAAADAKQADAKAAAJQAAAJgGAAIgEgCQgBgBgDgIQgDgHgGgDQgGgDgGAAQgKAAgEAFQgEAEAAAKIAACVQAAAEACACQACADAGACQAHACABABIACADQAAAIgIAAIgNgBg");
	this.shape_161.setTransform(225.825,356.775);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AAHAxQgBgBAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBIACgDQAAAAABgBQABAAAAAAQABgBAAAAQABAAABAAQAEAAAEgCQADgDAAgFIAAgpIABgJQAAgLgKAAQgFAAgHAGQgIAHgDAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAgFANgKQAMgKAMAAQAIAAAFAEQAGADABAGQACAGAAAKIAAAJIAAAoQAAAGACACQACACAGABQAEABAAAEQAAAEgEAAIgJAAIgNgBIgOABIgIABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAgUAxIgLgBIgLABIgKABQgHAAAAgGIABgEIAGgBIAGgCQAEgDAAgDQABgCAAgIIAAgtQAAgFgCgDQgCgDgHgBQgGgBAAgFQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQACgCAEAAIAGABIAGABIAHAAIAHgBQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAQACACAAAHIAAAZIgBAoIABAFIADADIAHACQAEABABACIABADQAAAFgHAAIgLgBg");
	this.shape_162.setTransform(207.75,362.025);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgoAnQgTgQABgWQAAgVAPgQQAQgQAcAAQAYAAARAQQASAQAAAUQAAAYgRAPQgRAPgbAAQgWAAgRgPgAgZgdQgIAMgBARQAAATALAKQAJAMAPAAQARAAAJgMQAKgLAAgSQAAgRgLgMQgKgLgQAAQgPAAgKALg");
	this.shape_163.setTransform(194.65,362);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgRAwIAAg1IAAgDIgIAAQgGAAgBgCQgDgBAAgEQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQACgCADgBQAFgBADgCIAGgGQAEgGACgJQABgJAAgSQAAgIAFAAQAFAAABACQABADAAAFIAAAvQAAABAAABQAAAAABABQAAAAABAAQABAAAAAAIAUAAQAHAAgBAFQAAAHgIAAIgSAAIgCAAIAAADIAAAyQAAAMAAADQABABAAABQAAAAABAAQAAABABAAQABAAAAAAQAFAAAHgFQAHgFACAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABIABAEQABAEgLAJQgMAJgIAAQgVAAgBghg");
	this.shape_164.setTransform(183.85,359.275);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AANBlIgNgBIgLABIgLABQgGAAgCgCQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIABgEQABgCAIgBQAHgBACgDQACgEAAgFIAAiXQAAgFgCgEQgCgEgHgCQgIgBgBgCIgBgEQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQACgCADAAIAHABIAGABIAIgBIAGgBQAEAAADADQACACAAAGIAACqQAAADACADQACADAGABQAHABACACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAAFgHAAIgMgBg");
	this.shape_165.setTransform(175.425,356.975);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgZBHQgCgBAAgEIABgDQABgBAFgBQAGgBACgCQACgDAAgKIAAguQAAgGgDgCQgCgCgFgBQgFgBgBgCIgCgEQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQACgCADAAIAHABIAHABIAHAAIAHgBQAFAAAAAJIAAADIAAAEIAAA6QAAAHACACQADACAEAAIAGACQAAAAABABQAAAAAAABQABAAAAABQAAABAAABQAAAFgJAAIgKgBIgKgBIgKABIgJABQgEAAgCgCgAgKgvQgEgFAAgGQAAgGAEgEQAFgEAFAAQAGAAAFAEQAFAFAAAHQAAAFgFAEQgEAEgHAAQgFAAgFgEg");
	this.shape_166.setTransform(168.125,359.725);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("ABIBmIgKgBIgNABIgKABQgKAAAAgHQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQACgCAFAAQAFgBADgDQADgDAAgJIAAhVQAAgEgCgDQgDgCgKAAIg+AAQgIAAgCgCQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAgBQAAgDADgBQADgCAIAAIBCAAQAFAAACgCQABgCABgEIgBgmQgBgHgLgDQgGgCgBgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAABgBQACgBADAAIAOABIALABIANgBIANgBQAGAAABAGQgBADgBABIgHACQgEACgEADQgDADAAAKIAACUQAAAEACAEQADAEAHACQAHACACACQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgDACgFAAIgMgBgAgwBmIgLgBIgLABIgLABQgKAAAAgHQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQABgCAFAAQAEgBADgDQADgDABgJIAAiVQgBgEgCgEQgBgEgIgCQgGgCgCgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAAAgBQADgBADAAIANABIANABIALgBIAOgBQAHAAgBAGQAAADgBABIgGADQgGABgCADQgEAEAAAJIAACUQAAAEADAEQACADAHACIAJAEIABAEQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQgCACgFAAIgMgBg");
	this.shape_167.setTransform(154.55,356.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.instance_1},{t:this.instance},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(-19.5,-21.4,658.7,508.4), null);


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
	this.instance.setTransform(348.7,252.15,1.1457,1.1457,0,0,0,641,326.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:488.7,regY:215.5,rotation:0.0012,x:174.2,y:125.35},0).wait(1).to({rotation:0.0046,x:174.25},0).wait(1).to({rotation:0.0105},0).wait(1).to({rotation:0.0187},0).wait(1).to({rotation:0.0293,x:174.3,y:125.3},0).wait(1).to({rotation:0.0422,y:125.25},0).wait(1).to({rotation:0.0574,x:174.35,y:125.2},0).wait(1).to({rotation:0.075,x:174.4,y:125.15},0).wait(1).to({rotation:0.095,x:174.45,y:125.05},0).wait(1).to({rotation:0.1173,x:174.5,y:125},0).wait(1).to({rotation:0.1419,x:174.55,y:124.95},0).wait(1).to({rotation:0.1688,y:124.85},0).wait(1).to({rotation:0.1982,x:174.65,y:124.8},0).wait(1).to({rotation:0.2298,x:174.7,y:124.7},0).wait(1).to({rotation:0.2638,x:174.8,y:124.55},0).wait(1).to({rotation:0.3002,x:174.9,y:124.5},0).wait(1).to({rotation:0.339,x:175,y:124.35},0).wait(1).to({rotation:0.38,x:175.05,y:124.2},0).wait(1).to({rotation:0.4234,x:175.2,y:124.1},0).wait(1).to({rotation:0.4691,x:175.3,y:123.95},0).wait(1).to({rotation:0.5172,y:123.8},0).wait(1).to({rotation:0.5676,x:175.45,y:123.65},0).wait(1).to({rotation:0.6205,x:175.6,y:123.5},0).wait(1).to({rotation:0.6756,x:175.7,y:123.35},0).wait(1).to({rotation:0.7331,x:175.85,y:123.1},0).wait(1).to({rotation:0.7929,x:176,y:122.95},0).wait(1).to({rotation:0.855,x:176.15,y:122.75},0).wait(1).to({rotation:0.9196,x:176.25,y:122.6},0).wait(1).to({rotation:0.9864,x:176.4,y:122.4},0).wait(1).to({rotation:1.0556,x:176.6,y:122.15},0).wait(1).to({rotation:1.1272,x:176.75,y:121.95},0).wait(1).to({rotation:1.2011,x:176.9,y:121.75},0).wait(1).to({rotation:1.2774,x:177.1,y:121.55},0).wait(1).to({rotation:1.3559,x:177.25,y:121.25},0).wait(1).to({rotation:1.4368,x:177.4,y:121},0).wait(1).to({rotation:1.5201,x:177.65,y:120.75},0).wait(1).to({rotation:1.6058,x:177.9,y:120.55},0).wait(1).to({rotation:1.6937,x:178.05,y:120.3},0).wait(1).to({rotation:1.784,x:178.2,y:120},0).wait(1).to({rotation:1.8767,x:178.45,y:119.7},0).wait(1).to({rotation:1.9717,x:178.65,y:119.45},0).wait(1).to({rotation:2.0691,x:178.95,y:119.15},0).wait(1).to({rotation:2.1688,x:179.15,y:118.85},0).wait(1).to({rotation:2.2708,x:179.35,y:118.55},0).wait(1).to({rotation:2.3752,x:179.6,y:118.25},0).wait(1).to({rotation:2.482,x:179.85,y:117.9},0).wait(1).to({rotation:2.5911,x:180.1,y:117.6},0).wait(1).to({rotation:2.7025,x:180.35,y:117.25},0).wait(1).to({rotation:2.8163,x:180.6,y:116.95},0).wait(1).to({rotation:2.9324,x:180.9,y:116.6},0).wait(1).to({rotation:3.0509,x:181.2,y:116.25},0).wait(1).to({rotation:3.1717,x:181.5,y:115.9},0).wait(1).to({rotation:3.2948,x:181.75,y:115.6},0).wait(1).to({rotation:3.4204,x:182.05,y:115.2},0).wait(1).to({rotation:3.5482,x:182.4,y:114.8},0).wait(1).to({rotation:3.6784,x:182.7,y:114.45},0).wait(1).to({rotation:3.811,x:183.05,y:114.05},0).wait(1).to({rotation:3.9458,x:183.35,y:113.6},0).wait(1).to({rotation:4.0831,x:183.65,y:113.25},0).wait(1).to({rotation:4.2227,x:184.05,y:112.85},0).wait(1).to({rotation:4.3646,x:184.35,y:112.45},0).wait(1).to({rotation:4.5089,x:184.7,y:112.05},0).wait(1).to({rotation:4.6555,x:185.1,y:111.65},0).wait(1).to({rotation:4.8045,x:185.45,y:111.25},0).wait(1).to({rotation:4.9558,x:185.8,y:110.75},0).wait(1).to({rotation:5.1095,x:186.15,y:110.3},0).wait(1).to({rotation:5.2655,x:186.6,y:109.9},0).wait(1).to({rotation:5.4239,x:187,y:109.45},0).wait(1).to({rotation:5.5845,x:187.45,y:109},0).wait(1).to({rotation:5.634,x:187.5,y:108.85},0).wait(1).to({rotation:5.4718,x:187.1,y:109.3},0).wait(1).to({rotation:5.3074,x:186.7,y:109.8},0).wait(1).to({rotation:5.1407,x:186.3,y:110.25},0).wait(1).to({rotation:4.9717,x:185.85,y:110.7},0).wait(1).to({rotation:4.8005,x:185.45,y:111.25},0).wait(1).to({rotation:4.6269,x:185,y:111.7},0).wait(1).to({rotation:4.4511,x:184.6,y:112.2},0).wait(1).to({rotation:4.2729,x:184.15,y:112.7},0).wait(1).to({rotation:4.0924,x:183.7,y:113.2},0).wait(1).to({rotation:3.9096,x:183.25,y:113.7},0).wait(1).to({rotation:3.7246,x:182.8,y:114.25},0).wait(1).to({rotation:3.5371,x:182.4,y:114.85},0).wait(1).to({rotation:3.3475,x:181.95,y:115.4},0).wait(1).to({rotation:3.1555,x:181.45,y:115.9},0).wait(1).to({rotation:2.9613,x:181,y:116.5},0).wait(1).to({rotation:2.7646,x:180.55,y:117.1},0).wait(1).to({rotation:2.5658,x:180.1,y:117.65},0).wait(1).to({rotation:2.3646,x:179.55,y:118.3},0).wait(1).to({rotation:2.1611,x:179.15,y:118.85},0).wait(1).to({rotation:1.9554,x:178.65,y:119.5},0).wait(1).to({rotation:1.7473,x:178.15,y:120.1},0).wait(1).to({rotation:1.537,x:177.7,y:120.7},0).wait(1).to({rotation:1.3243,x:177.2,y:121.4},0).wait(1).to({rotation:1.1094,x:176.7,y:122},0).wait(1).to({rotation:0.8921,x:176.15,y:122.65},0).wait(1).to({rotation:0.6726,x:175.7,y:123.35},0).wait(1).to({rotation:0.4507,x:175.25,y:124},0).wait(1).to({rotation:0.2265,x:174.75,y:124.65},0).wait(1).to({rotation:0,x:174.2,y:125.35},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.7,-10,348.5,260.7);


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
	this.shape.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],0,-0.2,0,0,-0.2,9.5).s().p("AADApQgSgBgMgRQgDgDAAgDQgCgJALgIQAPgLAIABQAKAAAGAFQAHAFgBAHIAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgCACgDgBQgEAAgCgCQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBAAAAgBQgDgCgDAAIgDABQgKADgCAHQgBAOASACQATACAIgJQAKgJgJgRQgHgQhJgJIAMgHIALgDIAAACQAxADARARQAHAIACAKQAEAVgNALQgHAFgLAEIgOACIgFgBg");
	this.shape.setTransform(184.505,97.2232,1.7789,2.309,-3.9497);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],1.2,-4.5,0,1.2,-4.5,11.7).s().p("AgGAwQgHAAgIgDQgfgMALgaQAFgNAVAAQAUAAAGAGQAHAEgBAHQgBAHgGAFIgBAAIgFABQgDAAgBgCQgBAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQABgDACgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAIgCgBQgLgEgJAEQgNAKAMALQAMALAOgBQAPgCAKgRQAIgNgZgtIAQgGQAMAXAEARQAGAVgKANIgDADIgKAIQgOAKgOAAIgEAAg");
	this.shape_1.setTransform(155.9867,114.024,1.7789,2.309,-3.9497);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-4.3,-3,0,-4.3,-3,9.8).s().p("AgQAkQAHgNgKgSQgJgPgZgVIAWgNQBJAIAHAQQAJASgKAIQgIAJgTgBQgTgCABgNQACgHAKgEIAEAAQADAAADACQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABABAAQAAAAAAABQACACAEAAQADAAACgCQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAIAAgBQABgHgHgFQgGgGgKAAQgJgBgOAMQgLAJACAHQAAAEADADQALAQATACQgaAAgRARIAGgJg");
	this.shape_2.setTransform(181.4709,100.5571,1.7789,2.309,-3.9497);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-5.1,-4.1,0,-5.1,-4.1,11.4).s().p("AgdAPQgEgQgMgXQAagLAZgOIAKAIQAhAbgDAMQgEATgOAEQgGACgGgBQgIgBgIgFQgQgIAKgLQAGgFAMABIAEABQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABgBABQAAAAAAAAQAAAAgBABIAAAAIgBAEQABACADACQACABAEAAQACgBACgCQAGgGgCgGQgCgHgIgEIgIgCQgIAAgLACQgVAFgBAMQAAAHACAGQAGARAYADIAEABQgWgCgWARQAKgNgGgWg");
	this.shape_3.setTransform(168.5647,107.8126,1.7789,2.309,-3.9497);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-0.7,-0.6,0,-0.7,-0.6,8.8).s().p("AgBAvIgFAAIgEgBQgZgDgGgRQgCgGAAgHQABgNAVgEQAMgCAIAAIAHACQAIAEACAGQACAHgGAGQgCACgCABQgEAAgCgBQgCgCgBgCIABgEIAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQgBgBAAAAIgEgBQgMgBgHAFQgKAMAQAIQAJAFAIABQAFABAGgCQAOgEAEgUQADgLgggbIgKgIIAPgJQAZAUAJARQAKAQgHAOIgGAJIgFAFQgNAMgRAAIgBAAg");
	this.shape_4.setTransform(171.5358,104.8324,1.7789,2.309,-3.9497);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-2.9,2.1,0,-2.9,2.1,8.1).s().p("AgWAcIAAglIABAFQAFgbAVAEIABAAIAAAAQAMACADAIQADAFgCAIQgDAGgFAGIgNAKQgJAGgNAFg");
	this.shape_5.setTransform(138.6058,143.2197,1.7789,2.309,-3.9497);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-1.8,1.4,0,-1.8,1.4,12.1).s().p("AgYA+IAAghQAHg9AWggIAUgCQgyBQAYAZIAFAFIgBAAQgVgEgFAcIgBgGg");
	this.shape_6.setTransform(137.8286,126.5401,1.7789,2.309,-3.9497);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-0.9,1.5,0,-0.9,1.5,13.3).s().p("AglBEQgPgCgLgSQgKgQAzhQQAigGAjgNQAZAugIAMQgKARgPABQgPACgMgLQgMgLANgJQAJgEALADIADABQABABAAAAQAAABAAABQABAAAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQgCABgBADQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQACACADAAIAFgBIABAAQAGgGABgGQABgIgHgFQgGgFgVAAQgUAAgFANQgLAaAeALQAIADAHABQgRAEgDAVIgCgIQgFgOgVAAQgVAAgGAFQgGAFAAAIQABAHAGAEIABABQACABADAAQAEAAACgCQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBIgBAAQgCgCAAgCIABgEIAEgBQALgEAIAEQANAJgMAMQgLAKgNAAIgCAAg");
	this.shape_7.setTransform(149.992,120.5027,1.7789,2.309,-3.9497);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-1.7,-12,0,-1.7,-12,26.9).s().p("AgPA9QgDgIgMgCIAAAAIgGgGQgYgYAzhRIAWgEQgzBQAKAQQALASAPACQAOABAMgLQAMgMgNgJQgJgEgLAEIgDABIgBAEQABACABACIAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgBACgDAAQgDAAgCgBIgBgBQgGgEgBgHQgBgIAHgFQAGgFAUAAQAVAAAGAOIABAIQACAGgCAFQgEAMgSAHQgKAEgJAAQgJAAgJgEg");
	this.shape_8.setTransform(143.9602,124.6414,1.7789,2.309,-3.9497);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],0.7,-2,0,0.7,-2,8.1).s().p("AgOguIAdABIAABXIgBAFQgHg9gVggg");
	this.shape_9.setTransform(130.4033,122.9444,1.7789,2.309,-3.9497);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],1.7,2.1,0,1.7,2.1,8).s().p("AAAASIgNgKQgGgGgDgGQgCgIADgFQAEgIAMgCIAAAAIABAAQAVgEAFAbIABgFIAAAlIgBABQgOgFgIgGg");
	this.shape_10.setTransform(130.3447,143.7898,1.7789,2.309,-3.9497);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],0.3,-0.7,0,0.3,-0.7,9.4).s().p("AgDAsIAAAAIAEgFQAYgZgxhQIAUACQAVAgAHA9IABgFIAAAFIAAAhIgCAFQgEgbgWAEg");
	this.shape_11.setTransform(128.9149,127.2131,1.7789,2.309,-3.9497);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-0.8,-3.3,0,-0.8,-3.3,10).s().p("AgOAqIAAhXIAdgBQgWAggHA9g");
	this.shape_12.setTransform(135.7233,122.5194,1.7789,2.309,-3.9497);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],0.5,-12.1,0,0.5,-12.1,26.9).s().p("AgVA8QgSgGgEgMQgCgGACgGIACgIQAFgNAVgBQAUAAAHAGQAGAFgBAHQgBAHgGAFIgBAAQgCACgDAAQgDgBgBgCQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIAAAAQACgCAAgDIgCgEIgCgBQgLgDgJADQgNAKAMALQAMALAOgBQAPgCALgRQAKgRgyhOIAWADQAyBQgYAZIgFAFIgBAAQgMACgDAIQgJAEgJAAQgJAAgKgEg");
	this.shape_13.setTransform(122.4607,126.241,1.7789,2.309,-3.9497);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],1.9,-0.7,0,1.9,-0.7,11.3).s().p("AAMA5QgMgLANgKQAIgDALADIAEABIABAEQAAADgCACIgBAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABAAABQABAAAAABQAAAAAAABQABAAAAAAQACACAEABQADAAACgCIABAAQAGgFABgHQAAgHgGgFQgGgGgVAAQgVABgFANIgCAIQgDgVgRgEQAHAAAIgDQAegMgLgZQgFgOgUAAQgVAAgGAGQgHAFABAHQABAHAGAFIABAAIAFABQAEAAABgCQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAgBQgBgDgCgBQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAIADgBQALgEAJAEQAMAKgLALQgMAKgPgBQgPgCgKgQQgIgNAZgtQAjANAiAHQAzBOgKARQgLARgPACIgCABQgNAAgLgLg");
	this.shape_14.setTransform(115.9091,122.9708,1.7789,2.309,-3.9497);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],4.4,0,0,4.4,0,22.7).s().p("AAAAAIAAAAIAAAAg");
	this.shape_15.setTransform(131.7703,102.7144,1.7789,2.309,-3.9497);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-5.6,0,0,-5.6,0,22.7).s().p("AAAAAIABAAIAAAAIgBAAg");
	this.shape_16.setTransform(131.5485,102.7297,1.7789,2.309,-3.9497);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-2.3,-4.6,0,-2.3,-4.6,11.8).s().p("AgZAmIgKgJIgDgCQgKgNAGgWQAEgQAMgXIAQAHQgZAsAIAMQAKASAPABQAOACAMgLQAMgMgNgJQgJgEgLADIgDABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAABABQACABABADQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQgBACgDAAIgFgBIgBAAQgGgGgBgGQgBgIAHgEQAGgFAUAAQAVAAAFAMQALAbgfALQgIADgHABIgEAAQgOAAgOgKg");
	this.shape_17.setTransform(109.0797,117.3771,1.7789,2.309,-3.9497);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-1.2,-0.2,0,-1.2,-0.2,9.5).s().p("AgUAoQgMgEgGgFQgNgLADgVQACgKAHgIQASgRAwgDIABgCIAJACIANAIQhIAJgHAQQgKARAKAJQAJAJATgCQASgCgBgOQgCgHgLgDIgDgBQgDAAgCACQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAQgCACgDAAQgDABgCgCQgBgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAAAQgBgHAGgFQAHgFAJAAQAJgBAPALQALAIgCAJQgBADgCADQgMARgSABIgGABIgNgCg");
	this.shape_18.setTransform(78.4706,104.5415,1.7789,2.309,-3.9497);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],3.1,-3,0,3.1,-3,9.9).s().p("AgUAcQATgCAMgQQACgDAAgEQADgHgMgJQgOgMgJABQgKAAgGAGQgHAFABAHIAAABQAAAAABABQAAAAAAABQABAAAAAAQABABAAAAQACACADAAQAEAAACgCQAAgBABAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAAAAAQABgBAAAAQADgCADAAIAEAAQAKAEACAHQABANgTACQgTABgIgJQgKgIAJgSQAHgPBIgJIAWAOQgYAUgJAPQgKASAHANIAGAJQgRgRgaAAg");
	this.shape_19.setTransform(81.9342,107.4269,1.7789,2.309,-3.9497);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],4,-4.2,0,4,-4.2,11.4).s().p("AgJAjIADgBQAZgEAFgRQACgFAAgHQAAgNgVgEQgMgDgHABIgJACQgHAEgCAHQgCAGAFAGQACACADAAQADABADgCQADgBAAgDIAAgEIgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQgBgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAABgBIAEgBQAKgBAHAGQAKALgPAIQgIAFgIAAQgHABgFgCQgOgEgFgSQgDgNAhgaIALgIQAYAOAaALQgMAXgEAPQgFAXAJANQgWgSgVADg");
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
	this.instance.setTransform(120.2,171.7,0.7605,0.7605,90,0,0,223.8,157.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:147.3,scaleX:0.7606,scaleY:0.7606,x:128.15,y:171.65},0).wait(1).to({scaleX:0.7607,scaleY:0.7607},0).wait(1).to({scaleX:0.7608,scaleY:0.7608,x:128.2},0).wait(1).to({scaleX:0.7609,scaleY:0.7609,x:128.15,y:171.7},0).wait(1).to({scaleX:0.761,scaleY:0.761,y:171.65},0).wait(1).to({scaleX:0.7611,scaleY:0.7611,x:128.2,y:171.7},0).wait(1).to({scaleX:0.7612,scaleY:0.7612,x:128.15,y:171.65},0).wait(1).to({scaleX:0.7613,scaleY:0.7613,y:171.7},0).wait(1).to({scaleX:0.7614,scaleY:0.7614,y:171.65},0).wait(1).to({scaleX:0.7615,scaleY:0.7615,x:128.2,y:171.7},0).wait(1).to({scaleX:0.7616,scaleY:0.7616,x:128.15,y:171.65},0).wait(1).to({scaleX:0.7617,scaleY:0.7617},0).wait(1).to({scaleX:0.7618,scaleY:0.7618,x:128.2,y:171.7},0).wait(1).to({scaleX:0.7619,scaleY:0.7619,x:128.15,y:171.65},0).wait(1).to({scaleX:0.762,scaleY:0.762,y:171.7},0).wait(1).to({scaleX:0.7621,scaleY:0.7621,x:128.2,y:171.65},0).wait(1).to({scaleX:0.7622,scaleY:0.7622,y:171.7},0).wait(1).to({scaleX:0.7623,scaleY:0.7623,x:128.15,y:171.65},0).wait(1).to({scaleX:0.7624,scaleY:0.7624,x:128.2},0).wait(1).to({scaleX:0.7625,scaleY:0.7625,y:171.7},0).wait(1).to({scaleX:0.7626,scaleY:0.7626,y:171.65},0).wait(1).to({scaleX:0.7627,scaleY:0.7627,x:128.15,y:171.7},0).wait(1).to({x:128.2,y:171.65},0).wait(1).to({scaleX:0.7628,scaleY:0.7628},0).wait(1).to({scaleX:0.7629,scaleY:0.7629,x:128.15,y:171.7},0).wait(1).to({scaleX:0.763,scaleY:0.763,y:171.65},0).wait(1).to({scaleX:0.7631,scaleY:0.7631,x:128.2,y:171.7},0).wait(1).to({scaleX:0.7632,scaleY:0.7632,y:171.65},0).wait(1).to({scaleX:0.7633,scaleY:0.7633,x:128.15},0).wait(1).to({x:128.2,y:171.7},0).wait(1).to({scaleX:0.7634,scaleY:0.7634,y:171.65},0).wait(1).to({scaleX:0.7635,scaleY:0.7635},0).wait(1).to({scaleX:0.7636,scaleY:0.7636,y:171.7},0).wait(1).to({scaleX:0.7637,scaleY:0.7637,y:171.65},0).wait(2).to({scaleX:0.7638,scaleY:0.7638,y:171.7},0).wait(1).to({scaleX:0.7637,scaleY:0.7637,y:171.65},0).wait(1).to({scaleX:0.7636,scaleY:0.7636,x:128.15,y:171.7},0).wait(1).to({scaleX:0.7635,scaleY:0.7635,x:128.2},0).wait(1).to({y:171.65},0).wait(1).to({scaleX:0.7634,scaleY:0.7634},0).wait(1).to({scaleX:0.7633,scaleY:0.7633,x:128.15,y:171.7},0).wait(1).to({y:171.65},0).wait(1).to({scaleX:0.7632,scaleY:0.7632,x:128.2},0).wait(1).to({scaleX:0.7631,scaleY:0.7631,y:171.7},0).wait(1).to({y:171.65},0).wait(1).to({scaleX:0.763,scaleY:0.763,x:128.15},0).wait(1).to({scaleX:0.7629,scaleY:0.7629,y:171.7},0).wait(1).to({x:128.2},0).wait(1).to({scaleX:0.7628,scaleY:0.7628,y:171.65},0).wait(1).to({scaleX:0.7627,scaleY:0.7627},0).wait(1).to({x:128.15,y:171.7},0).wait(1).to({scaleX:0.7626,scaleY:0.7626,y:171.65},0).wait(1).to({x:128.2},0).wait(1).to({scaleX:0.7625,scaleY:0.7625},0).wait(1).to({scaleX:0.7624,scaleY:0.7624,y:171.7},0).wait(1).to({x:128.15,y:171.65},0).wait(1).to({scaleX:0.7623,scaleY:0.7623},0).wait(2).to({scaleX:0.7622,scaleY:0.7622,x:128.2,y:171.7},0).wait(1).to({y:171.65},0).wait(1).to({scaleX:0.7621,scaleY:0.7621},0).wait(1).to({x:128.15},0).wait(1).to({scaleX:0.762,scaleY:0.762,y:171.7},0).wait(1).to({y:171.65},0).wait(1).to({scaleX:0.7619,scaleY:0.7619},0).wait(1).to({x:128.2},0).wait(1).to({scaleX:0.7618,scaleY:0.7618,y:171.7},0).wait(2).to({scaleX:0.7617,scaleY:0.7617,x:128.15,y:171.65},0).wait(2).to({scaleX:0.7616,scaleY:0.7616},0).wait(1).to({y:171.7},0).wait(1).to({scaleX:0.7615,scaleY:0.7615,x:128.2},0).wait(1).to({y:171.65},0).wait(2).to({scaleX:0.7614,scaleY:0.7614,x:128.15},0).wait(2).to({scaleX:0.7613,scaleY:0.7613,y:171.7},0).wait(2).to({y:171.65},0).wait(1).to({scaleX:0.7612,scaleY:0.7612},0).wait(1).to({x:128.2},0).wait(2).to({scaleX:0.7611,scaleY:0.7611,y:171.7},0).wait(1).to({x:128.15},0).wait(2).to({scaleX:0.761,scaleY:0.761,y:171.65},0).wait(4).to({scaleX:0.7609,scaleY:0.7609,y:171.7},0).wait(3).to({x:128.2},0).wait(1).to({scaleX:0.7608,scaleY:0.7608,y:171.65},0).wait(2).to({x:128.15},0).wait(2).to({scaleX:0.7607,scaleY:0.7607},0).wait(2).to({y:171.7},0).wait(3).to({scaleX:0.7606,scaleY:0.7606},0).wait(2).to({y:171.65},0).wait(6).to({scaleX:0.7605,scaleY:0.7605},0).wait(3).to({x:128.2},0).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.6,-32.5,221.3,408.5);


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
	this.shape_1.graphics.f("#3F1203").s().p("AiVFxIgPgbQhii+gUhfIgCgOQgEhRAHBhQAqmXA8gxQA0g4BFAKQBEAJBhA6QA/AmAuB4IiwifIh7gJIB5AfICyCJQAZBAAUBXQAnDNgXBdQgXBdABAnQABAmAfAiQhyhvgdijQA4hEAEgTQADgTAAgSQgBgSgKggQgJghgBgYQgBgZhlgbQhlgciLh2QAjBKgpA0QgqA0ABBCQAABBAQAqQAPArAfAeQA4Cig0CAQAIgngUgmgAhwk/QCEAeCLBvIA/CJQAaCpgMC8IAWiIIgklXQjJikhgAAQgVAAgQAIgAkFgPIA0DHQgoj0AyiDIAgi+QhBCbgdDTgAAPi1QBBATBLAVIhwg4IiTg1g");
	this.shape_1.setTransform(32.3273,59.6306);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E1B04").s().p("ADzAAIg/iJQiLhviEgeQBagsD0DIIAkFXIgWCIQAMi8gaipgADphdIAAgBIAAAAgAjwAZQAdjSBBibIggC+QgyCEAoDzgAkHBVIACANQgehmAYiqQA3i2A2AAQg8AygqGWQgHhiAEBTgAAkiMIh3hEICTA0IBwA4QhLgVhBgTgADtixIiyiJIh5geIB7AIICwCfIAEADg");
	this.shape_2.setTransform(30.2293,55.4999);

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
	this.instance.setTransform(105.6,238,2.9071,2.9071,-4.4877,0,0,29.8,80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:27.4,regY:40.4,scaleX:2.9072,scaleY:2.9072,rotation:-4.8306,x:88.85,y:122.45},0).wait(1).to({scaleX:2.9071,scaleY:2.9071,rotation:-5.1733,x:88.2,y:122.5},0).wait(1).to({rotation:-5.5159,x:87.55,y:122.65},0).wait(1).to({rotation:-5.8585,x:86.85,y:122.75},0).wait(1).to({rotation:-6.2012,x:86.15,y:122.85},0).wait(1).to({rotation:-6.5438,x:85.45,y:122.95},0).wait(1).to({rotation:-6.8864,x:84.8,y:123.1},0).wait(1).to({rotation:-7.2291,x:84.05,y:123.25},0).wait(1).to({scaleX:2.9072,scaleY:2.9072,rotation:-7.5717,x:83.4,y:123.3},0).wait(1).to({scaleX:2.9071,scaleY:2.9071,rotation:-7.9143,x:82.7,y:123.55},0).wait(1).to({rotation:-8.257,x:82,y:123.65},0).wait(1).to({rotation:-8.5996,x:81.3,y:123.8},0).wait(1).to({rotation:-8.9422,x:80.65,y:123.9},0).wait(1).to({rotation:-9.2849,x:79.95,y:124.05},0).wait(1).to({rotation:-9.6275,x:79.3,y:124.25},0).wait(1).to({rotation:-9.9701,x:78.6,y:124.35},0).wait(1).to({rotation:-10.3128,x:77.95,y:124.55},0).wait(1).to({rotation:-10.6554,x:77.25,y:124.65},0).wait(1).to({rotation:-10.998,x:76.6,y:124.9},0).wait(1).to({rotation:-11.3407,x:75.9,y:125.05},0).wait(1).to({rotation:-11.6833,x:75.25,y:125.2},0).wait(1).to({rotation:-11.3705,x:75.85,y:125.1},0).wait(1).to({rotation:-11.0576,x:76.5,y:124.85},0).wait(1).to({rotation:-10.7448,x:77.05,y:124.75},0).wait(1).to({rotation:-10.4319,x:77.7,y:124.6},0).wait(1).to({scaleX:2.9072,scaleY:2.9072,rotation:-10.1191,x:78.3,y:124.4},0).wait(1).to({scaleX:2.9071,scaleY:2.9071,rotation:-9.8063,x:78.95,y:124.35},0).wait(1).to({rotation:-9.4934,x:79.5,y:124.15},0).wait(1).to({scaleX:2.9072,scaleY:2.9072,rotation:-9.1806,x:80.2,y:124.05},0).wait(1).to({scaleX:2.9071,scaleY:2.9071,rotation:-8.8678,x:80.8,y:123.85},0).wait(1).to({scaleX:2.9072,scaleY:2.9072,rotation:-8.5549,x:81.4,y:123.75},0).wait(1).to({scaleX:2.9071,scaleY:2.9071,rotation:-8.2421,x:82.05,y:123.65},0).wait(1).to({rotation:-7.9292,x:82.65,y:123.45},0).wait(1).to({scaleX:2.9072,scaleY:2.9072,rotation:-7.6164,x:83.25,y:123.35},0).wait(1).to({scaleX:2.9071,scaleY:2.9071,rotation:-7.3036,x:83.95,y:123.25},0).wait(1).to({rotation:-6.9907,x:84.55,y:123.1},0).wait(1).to({rotation:-6.6779,x:85.15,y:123.05},0).wait(1).to({rotation:-6.365,x:85.75,y:122.85},0).wait(1).to({rotation:-6.0522,x:86.45,y:122.8},0).wait(1).to({scaleX:2.9072,scaleY:2.9072,rotation:-5.7394,x:87.05,y:122.7},0).wait(1).to({scaleX:2.9071,scaleY:2.9071,rotation:-5.4265,x:87.7,y:122.55},0).wait(1).to({rotation:-5.1137,x:88.3},0).wait(1).to({rotation:-4.8008,x:88.95,y:122.45},0).wait(1).to({rotation:-4.488,x:89.5,y:122.3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.2,-0.9,192.39999999999998,246.6);


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
p.nominalBounds = new cjs.Rectangle(-1,2.4,63.2,107.39999999999999);


(lib.Symbol63 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol49();
	this.instance.setTransform(459.6,362.4,0.4098,0.4098,-75.8566,0,0,900.3,1223.2);
	this.instance.cache(842,79,680,1204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1181.7,regY:680.8,rotation:-75.9974,x:271.8,y:196.75},0).wait(1).to({rotation:-76.1389,x:271.4,y:197.25},0).wait(1).to({rotation:-76.2803,x:271.05,y:197.65},0).wait(1).to({rotation:-76.4217,x:270.65,y:198.1},0).wait(1).to({rotation:-76.5632,x:270.2,y:198.6},0).wait(1).to({rotation:-76.7046,x:269.8,y:199.05},0).wait(1).to({rotation:-76.846,x:269.4,y:199.55},0).wait(1).to({rotation:-76.9875,x:269.05,y:199.95},0).wait(1).to({rotation:-77.1289,x:268.6,y:200.5},0).wait(1).to({rotation:-77.2703,x:268.2,y:200.95},0).wait(1).to({rotation:-77.4117,x:267.85,y:201.45},0).wait(1).to({rotation:-77.5532,x:267.4,y:201.95},0).wait(1).to({rotation:-77.6946,x:267.05,y:202.4},0).wait(1).to({rotation:-77.836,x:266.65,y:202.85},0).wait(1).to({rotation:-77.9775,x:266.2,y:203.3},0).wait(1).to({rotation:-78.1189,x:265.8,y:203.8},0).wait(1).to({rotation:-78.2603,x:265.4,y:204.25},0).wait(1).to({rotation:-78.4018,x:265.05,y:204.8},0).wait(1).to({rotation:-78.5432,x:264.7,y:205.25},0).wait(1).to({rotation:-78.4088,x:265.05,y:204.75},0).wait(1).to({rotation:-78.2745,x:265.35,y:204.35},0).wait(1).to({rotation:-78.1401,x:265.75,y:203.9},0).wait(1).to({rotation:-78.0058,x:266.15,y:203.45},0).wait(1).to({rotation:-77.8714,x:266.5,y:202.95},0).wait(1).to({rotation:-77.737,x:266.9,y:202.5},0).wait(1).to({rotation:-77.6027,x:267.25,y:202.1},0).wait(1).to({rotation:-77.4683,x:267.65,y:201.6},0).wait(1).to({rotation:-77.334,x:268,y:201.15},0).wait(1).to({rotation:-77.1996,x:268.4,y:200.75},0).wait(1).to({rotation:-77.0652,x:268.75,y:200.3},0).wait(1).to({rotation:-76.9309,x:269.15,y:199.85},0).wait(1).to({rotation:-76.7965,x:269.5,y:199.35},0).wait(1).to({rotation:-76.6622,x:269.9,y:198.9},0).wait(1).to({rotation:-76.5278,x:270.3,y:198.55},0).wait(1).to({rotation:-76.3934,x:270.65,y:198.1},0).wait(1).to({rotation:-76.2591,x:271.05,y:197.6},0).wait(1).to({rotation:-76.1247,x:271.45,y:197.15},0).wait(1).to({rotation:-75.9904,x:271.85,y:196.75},0).wait(1).to({rotation:-75.856,x:272.25,y:196.3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,1.9,546.9,388.8);


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

	// Layer_2
	this.instance = new lib.Symbol65();
	this.instance.setTransform(345.65,587.15,1.0936,1.0936,0,0,0,324.3,573.6);

	this.instance_1 = new lib.Symbol51();
	this.instance_1.setTransform(463.15,684.45,0.4742,0.4742,0,0,0,162.2,82.7);

	this.instance_2 = new lib.Symbol43();
	this.instance_2.setTransform(467.2,682.7,0.9524,0.9524,0,0,0,185,95.7);

	this.instance_3 = new lib.Symbol19();
	this.instance_3.setTransform(370.1,215.6,0.9524,0.9524,0,0,0,233.1,55);
	this.instance_3.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,8);

	this.instance_4 = new lib.Symbol26();
	this.instance_4.setTransform(351.95,386.45,0.9524,0.9524,0,0,0,319.6,247.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC497").s().p("AgSA3IgMgHIgHgBQgGgCgFgFIgFgGIgBgIIABgQIAHgHQAKAAAGAFQADAIAMgiIAMgmQAAANgFANIgKAZIgGASQgDAJACAMQACAMAJAGQAIAGAbgLQgDgOAJgWIADgFQAkAEgPAjQgGANgLgGQgHgDgFAFQgRADgKAAQgIAAgFgCgAAdAOQgHASACAMIAAAFQAFgEAGACQAJAGAFgLQAMgegagBIgCAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAABgBABgAgsAIIgFAGIgBALIABAHIAEAEQADAEAEABQADABAIAFQgDgOABgJQABgJgDgCIgHgEIgEgCIgCABg");
	this.shape.setTransform(241.062,730.4259,1.9305,1.9305,-4.4876);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AB8BWQgrgCghgGQgggGgKg1QgEgTAAgNQgRgGgQAEIgIAgQgPAzghAEQggADgrgCQgrgCgRgYQgSgZACggQAAgJADgGIADg8IAQAoQAHgEAKgCQAkgIA7AKQA7AJAKAEQAAAAABAAQAAAAABABQAAAAAAABQABAAAAAAIAkACQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABgBQAKgDA8gEQA7gEAkALQAOAEAJAIIAsglIAAAOIghAsQABAEAAAGQgCAigTAWQgRAWgmAAIgHAAgABPgdQgzADgIADQgJACAIArQAJAsAbAFQAcAFAlABQAkACAQgTQARgTABgdQABgbgfgIQgWgHggAAIgbABgAi9gnQgfAGgCAcQgBAcAPAUQAOAVAlABQAlACAcgDQAbgCANgsQAMgqgJgCQgJgDgygIQgbgEgWAAQgSAAgOACg");
	this.shape_1.setTransform(244.4237,712.1431,1.9305,1.9305,-4.4876);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("ABYAeQgTgVhFgJQhGgIgXAFQgWAEANgQQAMgRAogEQAogFAcAHQAcAGAgAQQAfAOgBAYQAAANgGAAQgFAAgJgJg");
	this.shape_2.setTransform(263.5682,701.3194,1.5095,1.5095,0,1.7083,-178.2917);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("ABYAeQgTgVhFgJQhGgIgXAFQgWAEANgQQAMgRAogEQAogFAcAHQAcAGAgAQQAfAOgBAYQAAANgGAAQgFAAgJgJg");
	this.shape_3.setTransform(220.364,703.293,1.5095,1.5095,-4.4873);

	this.instance_5 = new lib.Symbol5();
	this.instance_5.setTransform(262.35,711.3,1.1393,1.1393,-4.4869,0,0,10.5,5);

	this.instance_6 = new lib.Symbol4();
	this.instance_6.setTransform(224.6,715.65,1.1393,1.1393,-4.4869,0,0,10,4.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A91616").s().p("AgKAfQghgGgOgIQgNgIgKgeIAIAAQAaAAAkgLQAKANAQgMQARAJAwANQgFAVgbANQgSAIgWAAQgJAAgKgCgAg8AAIAFACIAHACIAAAAIAEABIAPADIATABIALAGIAPgFQAOABAMgDIALgCIAEgBIAIgFIAOgHQgKAEgagCIgXgCIgTAHIgOgJIgSABIgbABQgIAAgGgFg");
	this.shape_4.setTransform(243.3336,758.1094,1.9304,1.9304,-4.4873);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKAAIgUAAIgOgDIgEgBIBiACIgIACQgMABgOAAIgQAEg");
	this.shape_5.setTransform(243.6222,759.9083,1.9305,1.9305,-4.4876);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#491616").s().p("AgxAJIAAAAIgHgDIgFgCIAAgBQgQgIgCgFQAHAEAQACIAYABIASgBIAOAHIATgFIAXACQAeABAIgFQgKAHgNAGIgBAAIgEABIgDABg");
	this.shape_6.setTransform(243.4589,757.2101,1.9305,1.9305,-4.4876);

	this.instance_7 = new lib.Symbol8();
	this.instance_7.setTransform(324.2,588.95,2.2184,2.2184,90,0,0,223.8,157.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE5D1").s().p("AgdACIgEgCIgCgBIAAgWIAHAHIAMgFQAOARAGAAQAIABAOgEQARgCgKAQQgFANgUAEQgagEgLgSg");
	this.shape_7.setTransform(133.2123,897.2614,2.1106,2.1106);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AgFALIgBgBQgEgDgBgEIgBgDIAAAAIADgFIADgFIABAAIADgBQAEgCAFAEQAEADABAFIABABIgBADQgBAEgDACIADgCQgDAEgFABIgDABQgDAAgCgCg");
	this.shape_8.setTransform(149.6561,875.2747,1.3613,1.3613,2.5011);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCCFF").s().p("AgGAIQgGANgEgEQgMgGAQgNIABACQABAEAEACIABABQAEADAEgBQAFgCADgDQAGALgMAOQgIAAgDgVgAAMAAIABgDIgBgCQgBgEgEgEQgFgDgEACIgDABQgCgLALgEQAJAEgCAMQARADAAAIQAAAIgRgDIgDABQADgCABgDgAgbgPQANgHAIAJIgDAFIgDAEIgCABQgLAAgCgMg");
	this.shape_9.setTransform(149.6366,875.743,1.3613,1.3613,2.5011);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2E2E2").s().p("Ag4A4IBCiyIA2gMIh/EegAgpiYIAxAdIgEAJIAAAAIg3Bog");
	this.shape_10.setTransform(139.3619,900.7479,1.3613,1.3613,2.5011);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BFBFBF").s().p("AgbAXIA2hnIAAAAIAFgJIABAAIABABIhDCyg");
	this.shape_11.setTransform(136.368,895.9844,1.3613,1.3613,2.5011);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#254505").s().p("AgVAbQgMgIASgRQARgQAZgOQgDARgTAXQgOARgHAAQgDAAgCgCg");
	this.shape_12.setTransform(146.7296,879.4171,1.3613,1.3613,2.5011);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC00").s().p("AgIAJQgEgEAAgFIAAAAIADgEQACgEACgBIgCABQADgDAEAAQAFAAAEADIABABQACAEAAADIAAACIAAACIgDAFIgFADIgBAAIgDAAQgEAAgEgDg");
	this.shape_13.setTransform(136.6353,870.4081,1.361,1.361,131.3018);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCCFF").s().p("AgLAIQgQgGABgEQACgMARAHIADgBQgDACgCAEIgCACIAAABQAAAGADADQAEAEAEAAIAEAAQgBAKgOAHQgFgLAFgMgAAEAOIAFgEIADgEQAOABgBAOIgGABQgKAAgFgIgAANABQAAgDgDgDIgBgCQgEgDgFAAQgEAAgDADQABgUAJgDQAIADgCAUQAJgLAJAFQAFAIgTAJIAAgDg");
	this.shape_14.setTransform(136.7894,870.5419,1.361,1.361,131.3018);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#254505").s().p("AgWAVQAAghAOglQAVATAJAoQAGApgWgBIgGAAQgWAAAAgdg");
	this.shape_15.setTransform(148.3406,880.4612,0.6501,0.6501,72.6317);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#254505").s().p("AgWAiQAAgiAOhIQAVA3AJAoQAGApgYAJQgagGAAghg");
	this.shape_16.setTransform(134.528,875.764,0.65,0.65,-26.6926);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#254505").s().p("AgSAQQAAghALgcQARAPAHAjQAIAfgYAJIgEABQgPAAAAgeg");
	this.shape_17.setTransform(139.6162,878.7302,0.6501,0.6501,2.0432);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3399FF").s().p("AgKAEIAAgKIAHAIIgBgSIAHARIACgMIADALQAIAMgNAFQgLAAgCgNg");
	this.shape_18.setTransform(156.79,875.2674,2.8201,2.8201,64.7381);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3399FF").s().p("AgTAFIAHgaIAFAVIAIggIAFAgIAJgYIAFAZQAHAcgbAEQgZgGAGgWg");
	this.shape_19.setTransform(140.1897,850.6342,1.3613,1.3613,2.5011);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3366CC").s().p("AgTAAIADgOIALANIAFgZIAJAZIAIgUIADATQAEAbgWACQgSgEgDgXg");
	this.shape_20.setTransform(148.9881,858.2682,1.1567,1.3611,0,12.7203,-167.2837);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#66CCFF").s().p("AgMATIgRgWIAbAMIgRgcIAbATIgRgfIAYAXQAVASgIAVIgHABQgRAAgQgNg");
	this.shape_21.setTransform(155.3558,866.4308,1.3866,1.3866,74.6843);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFF00").s().p("AgJAIQgDgEAAgEIAAgBQABgFAEgDIACgCIABAAIAFAAIAFABIAAAAIADADQAEAEgBAEQAAAFgFADIgBABIgDABQgDABgDgBIACACQgFgBgDgEg");
	this.shape_22.setTransform(149.6621,849.498,1.3613,1.3613,2.5011);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCCFF").s().p("AAAAPIgCgCQACACAEgBIAEgBIABgBQAEgEABgFQAAgEgDgEIgDgCQAIgHAKAJQABAJgMADQAFAQgHAFIgDABQgGAAgEgOgAgYAWQgEgJARgLQgOAAABgFQAAgNAUAIIgCACQgDACgBAEIAAACQAAAEADAEQADAEAEABQgFAIgKAAIgJgBgAAAAPgAACgJIgEAAQgIgKAKgJQALAJgDALIgGgBg");
	this.shape_23.setTransform(149.5027,849.1185,1.3613,1.3613,2.5011);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3366CC").s().p("AgTAAIADgOIALANIAFgZIAJAZIAIgUIADATQAEAbgWACQgSgEgDgXg");
	this.shape_24.setTransform(154.5269,861.3587,1.361,1.361,42.7474);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFF00").s().p("AgIAJQgEgEABgFIAAAAIACgEQABgDADgCIgDABQAEgEAEABQAFgBADAEIABABQADADAAAEIAAACIAAACIgEAFIgEADIgBAAIgDAAQgEAAgEgDg");
	this.shape_25.setTransform(142.2346,858.7966,1.3613,1.3613,2.5011);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFCCFF").s().p("AgLAIQgQgGABgFQACgMARAJQABgVAJgDQAIADgCAVQAJgMAJAFQAFAIgTAJIAAgCQAAgEgDgDIgBgBQgEgEgFAAQgEAAgDAEIADgCQgDACgCADIgCADIAAACQAAAFADADQAEAEAEAAIAEAAQgBAKgOAHQgFgLAFgMgAAEAOIAFgEIADgFQAOABgBAPIgGABQgKAAgFgIg");
	this.shape_26.setTransform(142.2423,858.5926,1.3613,1.3613,2.5011);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCC00").s().p("AgBAMIgDAAIgBgBIgEgEIgDgFIABgBIAAgDQABgFAEgDQAFgCAEABIABAAIADACQADADABADIAAgDQACAEgBAEQgBAFgDADIgCABQgCACgEAAIgBgBg");
	this.shape_27.setTransform(145.6322,869.0513,1.3613,1.3613,2.5011);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFCCFF").s().p("AgIALIADABQAEABADgDIACgBQADgCABgFQABgEgCgFQANgBAIAQQgEAIgUgGQAJALgFACQgDADgDAAQgFAAgFgPgAgaAUQgBgOALgFIADAFIAEAFQgDAKgJAAIgFgBgAgZgOQAHgGALAHQAIgPAIAEQAIADgKAOIAAAEQgBgEgDgCIgDgCIAAgBQgFgBgFADQgEADgBAFIAAADQgKgCAAgNg");
	this.shape_28.setTransform(146.2209,869.1323,1.3613,1.3613,2.5011);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#66CCFF").s().p("AgMATIgRgWIAbAMIgRgcIAbATIgRgfIAYAXQAVASgIAVIgHABQgRAAgQgNg");
	this.shape_29.setTransform(133.7189,856.2521,1.3865,1.3865,30.7231);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3399FF").s().p("AgKAEIAAgKIAHAIIgBgSIAHARIACgMIADALQAIAMgNAFQgLAAgCgNg");
	this.shape_30.setTransform(133.5662,866.0549,2.8205,2.8205,2.5075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#336600").s().p("AgTCLIAAAAIAFgJIAUgyIgEAMIAGAFIABAAIADgGIAahaIAyg2IgfAtIg7CHIgFARIgFACgAAOB9IACAAIBHhIIg+BNIgTAJgAgiB/IgKjqIAQBpIADASIgCBkIgBAHIAAAEIgBAEgAgYB1IA2kGIgdCwIgBAFIgVBSgAg8BnIgbhuIAiBcIAAAAIAAACIADAag");
	this.shape_31.setTransform(145.077,866.2838,1.362,1.362,2.5016);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4C9106").s().p("AgPBiIBBhoIAcgWIhNB8IgHAOIgOAFgAggBtIgHgGIAFgOIAVhSIACgFIAXgsIgpCQIgDAHgAg/BUIgDgaIAAgCIgLicIAVCSIgCAqgAgmgMIgDgTIANhTIABBnIgNBigAgEBEIgGgFIAEgMIAVhTIAGgyIAEA3IgZBZIgDAGg");
	this.shape_32.setTransform(146.6735,870.3071,1.362,1.362,2.5016);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgyAJQAUgLAfgNQAhgNAIAGIAkAWQgNgGgWgBQgdAAgpAQQgqARgDgBQgBAAgBAAQAAgBgBABQAAAAgBAAQAAAAgBAAQANgJAOgHg");
	this.shape_33.setTransform(116.5416,753.5825,1.9297,1.9297,0,-10.2269,169.7731);

	this.instance_8 = new lib.Symbol3();
	this.instance_8.setTransform(128.15,680.95,0.5363,0.5363,-3.564,0,0,78.6,41.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFEDCC").s().p("AAAAAIAAAAIAAAAg");
	this.shape_34.setTransform(178.948,746.7058,1.9297,1.9297,6.5122);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3F1203").s().p("AiVFxIgPgbQhii+gUhfIgCgOQgEhRAHBhQAqmXA8gxQA0g4BFAKQBEAJBhA6QA/AmAuB4IiwifIh7gJIB5AfICyCJQAZBAAUBXQAnDNgXBdQgXBdABAnQABAmAfAiQhyhvgdijQA4hEAEgTQADgTAAgSQgBgSgKggQgJghgBgYQgBgZhlgbQhlgciLh2QAjBKgpA0QgqA0ABBCQAABBAQAqQAPArAfAeQA4Cig0CAQAIgngUgmgAhwk/QCEAeCLBvIA/CJQAaCpgMC8IAWiIIgklXQjJikhgAAQgVAAgQAIgAkFgPIA0DHQgoj0AyiDIAgi+QhBCbgdDTgAAPi1QBBATBLAVIhwg4IiTg1g");
	this.shape_35.setTransform(135.329,768.1519,1.9297,1.9297,6.5122);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#5E1B04").s().p("ADzAAIg/iJQiLhviEgeQBagsD0DIIAkFXIgWCIQAMi8gaipgADphdIAAgBIAAAAgAjwAZQAdjSBBibIggC+QgyCEAoDzgAkHBVIACANQgehmAYiqQA3i2A2AAQg8AygqGWQgHhiAEBTgAAkiMIh3hEICTA0IBwA4QhLgVhBgTgADtixIiyiJIh5geIB7AIICwCfIAEADg");
	this.shape_36.setTransform(132.2107,759.7732,1.9297,1.9297,6.5122);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AgyAJQAUgLAfgNQAhgNAIAGIAkAWQgNgGgWgBQgdAAgpAQQgqARgDgBQgBAAgBAAQAAgBgBABQAAAAgBAAQAAAAgBAAQANgJAOgHg");
	this.shape_37.setTransform(156.5684,752.438,1.9297,1.9297,4.0605);

	this.instance_9 = new lib.Symbol2();
	this.instance_9.setTransform(155.65,761.15,1.9297,1.9297,6.5122,0,0,7.1,2.9);

	this.instance_10 = new lib.Symbol1();
	this.instance_10.setTransform(117.55,762.35,1.9297,1.9297,6.5122,0,0,7,2.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFCCCC").s().p("AgIARIAJgnIAAAhIAIAMg");
	this.shape_38.setTransform(135.8275,773.5018,1.9297,1.9297,6.5122);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#990000").ss(1,1,1,3,true).p("Ag6gFQBDARAygdQgNAogmACQgiAFgggjQApgVAKAGQAIAGAJgIQAJgIAoAN");
	this.shape_39.setTransform(137.0981,794.349,1.9297,1.9297,6.5122);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CC0000").s().p("Ag6gFIACABQAYAFAVAAIAAAAIABAAQAjAAAegQIABAAIAAgBIABAAIACgBQgNAognACIgHABQgeAAgcgfgAgLABQgVAAgYgFIgCgBQApgVAKAGQAIAGAJgIQAJgIAoANIgCABIgBAAIAAABIgBAAQgeAQgjAAIgBAAIAAAAg");
	this.shape_40.setTransform(137.0981,794.349,1.9297,1.9297,6.5122);

	this.instance_11 = new lib.Symbol20();
	this.instance_11.setTransform(187.5,922.9,0.7786,0.7786,0,0,0,143.1,208.1);
	this.instance_11.cache(-2,-2,290,420);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFEBDD").s().p("AgZHnQjlhhg7g/QhahMgBhPQgChQAOh9QANh+BbhbQBbhagziWQDxEBDFBKQDGBKgCAkQgCAkAKATQAIATADBLQACBLgVAxQgWAxiCB/QiBBbhgAAQgRAAgRgEgAkSCIQgSAZAAAEIgBAMIANADQAPACAQgRIAXgZIABACQgIAYACAKIAJADQARACAmgkIABAEIgGAFQgDACgBAGQAAAGABABIACACIAIADQAygiABgGQgCgEABgDQAAgBgKgCQgGAAgDACIgLAEQAFgegeAWIgkAfIAAgCQAKgOABgKQABgJgBgCQgBgEgHgBQgHAAgWAOIgXAQQAJgKABgKQABgHgCgBIgHgDQgGADgPAXgACjB3QgRAZAAAEIgBAMIAMADQAQACAQgRIAXgZIABACQgIAYABAKIAKADQARACAmgjIABADIgGAFQgDACgBAGQAAAGABABIACACIAIADQAygiABgFQgCgFABgDQAAgCgKgBQgGAAgDACIgLAEQAEgegdAWQgiAdgDACIAAgCQALgOABgKQABgJgBgCQgBgDgHgBQgHgBgWAOIgXAQQAJgKABgKQABgGgCgCIgHgDQgGADgQAXg");
	this.shape_41.setTransform(136.0262,762.2569);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFD6B6").s().p("AnlASQgBgsAOAEQADAhAHApIADAtIgBAAQgXAAgChPgAGwgJQgCgrgEgpQAngPASA8QARA6g/BHIgFhag");
	this.shape_42.setTransform(246.5773,710.3433);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFCCCC").s().p("AtKEEIgNgEIABgLQAAgFASgYQAPgYAGgDIAHAEQACABgBAHQgBAJgJAKIAXgQQAWgOAHABQAHABABAEQABACgBAJQgBAJgKAPIAAABIAlgfQAdgWgFAeIALgEQADgCAHABQAJABAAACQgBADACAEQgBAFgyAjIgIgDIgCgDQgBgBAAgFQABgGADgCIAGgGIgBgDQgmAkgRgCIgJgDQgCgKAJgZIgCgCIgXAZQgPAQgOAAIgCAAgAmUDzIgMgEIABgLQAAgFARgYQAQgYAGgDIAHAEQACABgBAHQgBAKgJAJIAYgQQAVgOAHABQAHABACAEQAAACAAAIQgCAKgLAOIAAACQAEgBAhgdQAegWgFAeIALgEQADgDAGABQAKABAAACQgBADACAEQgBAGgyAiIgIgDIgCgCQgBgCAAgFQABgGADgDIAGgFIgBgDQgmAkgRgCIgJgDQgCgKAIgYIgBgCIgWAYQgPAQgOAAIgEAAgADHiiIgOgDIgBgMQAAgGAQgcQAPgcAGgEQAGACADACQABAAABAIQAAAKgKANIAYgVQAWgRAIgBQAIAAACAFIABAMQAAALgKARIAAACQAEgCAiglQAdgagBAgIALgFQAFgEAGAAQAKAAAAACQAAAEACAFIAAACQgCAEgPANQgNAMgWASIgIgCIgDgCQgCAAAAgHQABgHACgEIAHgFIgCgDQgmAqgTABIgLgCQgCgLAGgcIgCgDQAAACgWAcQgPAVgQAAIgCAAgAKYisIgBgOQgBgCAHgOIACgDIAHgOQAPgcAGgFQAHADACACQACABABAHQgBALgJALIAYgTQAWgSAIgBQAIAAACAFIABAMQAAAKgLASIAAACIAmgmQAegcgBAhIAKgFQAGgEAFABQALgBgBADIACAHQABAHg0ArIgJgCIgCgCQgCgBAAgHQABgGACgDQAFgEABgDIgCgDQglAsgTgBIgLgCQgDgLAHgcIgBgBIgYAdQgOAUgSAAIgBABg");
	this.shape_43.setTransform(192.2002,754.3311);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFE5D1").s().p("Ai0IxQj2jdgViJIAAgBQgCgOAAgNIgLiBQg5AEgCiEQgCh1AnAoIAAhLQgBg7AShFQArACCjhPQiyCHAnAbIEiigQiuCIAjAMQEqiSDViiQAsDbBpBUIAHBTQBEg2AdBHQAMBBggBgQgFA+g3gZIgEAAIgOBWIgBAAIgpDTQgOBHjzClQh4A9hPAAQg/AAgmglgAlbCDQgRAcABAGIABAMIAOADQARABAQgWQAWgcAAgCIACADQgHAcADALIALACQATgBAlgqIADADIgHAFQgCAEgBAHQAAAHACAAIADACIAIACQAWgSANgMQAPgNACgEIAAgCQgCgFAAgEQAAgCgKAAQgGAAgFAEIgLAFQABgggdAaQgiAlgEACIAAgCQAKgRAAgLIgBgMQgCgFgIAAQgIABgWARIgYAVQAKgNAAgKQgBgIgCAAQgCgCgHgCQgFAEgPAcgACCB7IgHAOIgCADQgHAOAAACIACAOIANACIABgBQARAAAPgUIAXgdIABABQgGAcADALIALACQATABAlgsIACADQgBADgFAEQgCADgBAGQAAAHACABIACACIAJACQA0grgBgHIgCgHQABgDgLABQgFgBgGAEIgKAFQABghgeAcIgmAmIAAgCQALgSAAgKIgBgMQgCgFgIAAQgIABgXASIgXATQAJgLABgLQgBgHgCgBQgCgCgHgDQgGAFgPAcgAnqhOQADBQAYgCIgEgsQgGgpgEgiIgCAAQgMAAABApgAGli+QAFApACArIAEBbQA/hHgRg7QgOgwgbAAQgIAAgIADg");
	this.shape_44.setTransform(247.0127,720.0125);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#666666").s().p("AhSgmQA7g2AaisQArBhAZCUQAaCRgeCLQhphUgsjbg");
	this.shape_45.setTransform(281.6858,664.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4D4D4D").s().p("AiEBSIBbgWIkPCfgACHAgIB5gmIk5CzgAj1AAIBrgpIjjCHgAAmhlIB2gSIkKBsgAFridIADAmIjrBagAg6idIAXAgIi/APgAACjWICtgEIBYAgg");
	this.shape_46.setTransform(239.175,655.15);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AiVC3QijBOgrgCQgkgCAxg8QAEgUg5ATQg7ASA8g2QA8g4h5AhQBphthsBFQBWh6BdhVIhoAJQCWhkB7gcIANgGIhXgiQCohFBsAvIg/g0QEHAECnCKQgbCsg6A1QjVCikqCSQgjgMCtiIIkhCgQgngaCyiHgAhkA4Ii0CJIEPiggACnAFIjACOIE5izgAjWgbIh4BfIDkiHgABGiAIiVBaIELhsgACjg4IDrhaIgDglgAjCiJIC+gPIgWgfgAAhjwIEGAcIhZghg");
	this.shape_47.setTransform(236.025,657.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#5A633E").s().p("AsHCiQlAhCAAhgQAAhfFAhDQFChCHFAAQHGAAFABCQFCBDAABfQAABglCBCQlABDnGAAQnFAAlChDg");
	this.shape_48.setTransform(191.025,1064.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#9EAB7B").s().p("Egx2Bb3MAAAi3tMBjtAAAMAAAC3tgEgkmBH8QlABDAABgQAABgFABCQFCBDHGAAQHGAAFAhDQFChCAAhgQAAhglChDQlAhCnGAAQnGAAlCBCgEgllAXUQhbBagNB/QgOB+ACBQQABBOBaBMQA7BADlBhQBrAUCZhsQCCh/AWgwQAVgxgChLQgDhLgIgUQgKgTACgkQACgljGhKQjGhKjxkAQAzCVhbBbgA2wXXQAAANACAOIAAABQAVCJD2DdQBYBUDVhsQDzilAOhHIApjTIABAAIAOhWIAEAAQA3AZAFg/QAghggMhBQgdhHhEA2IgHhTQAeiKgZiSQgZiUgshhQiniKkHgEIA/A0QhtgvioBFIBXAiIgNAGQh7AciWBkIBogJQhdBVhWB7QBshFhpBtQB5ghg8A4Qg8A2A7gSQA5gTgEAUQgxA8AkACQgSBFABA7IAABLQgngoACB1QACCFA5gEg");
	this.shape_49.setTransform(347.725,588.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.instance_11},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.instance_10},{t:this.instance_9},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_8},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_6},{t:this.instance_5},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol44, new cjs.Rectangle(-4.1,-34.3,699.7,1242.3), null);


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
p.nominalBounds = new cjs.Rectangle(-15.4,-29.6,590,378.3);


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

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC497").s().p("AgSA3IgMgHIgHgBQgGgCgFgFIgFgGIgBgIIABgQIAHgHQAKAAAGAFQADAIAMgiIAMgmQAAANgFANIgKAZIgGASQgDAJACAMQACAMAJAGQAIAGAbgLQgDgOAJgWIADgFQAkAEgPAjQgGANgLgGQgHgDgFAFQgRADgKAAQgIAAgFgCgAAdAOQgHASACAMIAAAFQAFgEAGACQAJAGAFgLQAMgegagBIgCAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAABgBABgAgsAIIgFAGIgBALIABAHIAEAEQADAEAEABQADABAIAFQgDgOABgJQABgJgDgCIgHgEIgEgCIgCABg");
	this.shape.setTransform(81.7865,166.9943,2.9071,2.9071,-4.4877);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AB8BWQgrgCghgGQgggGgKg1QgEgTAAgNQgRgGgQAEIgIAgQgPAzghAEQggADgrgCQgrgCgRgYQgSgZACggQAAgJADgGIADg8IAQAoQAHgEAKgCQAkgIA7AKQA7AJAKAEQAAAAABAAQAAAAABABQAAAAAAABQABAAAAAAIAkACQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABgBQAKgDA8gEQA7gEAkALQAOAEAJAIIAsglIAAAOIghAsQABAEAAAGQgCAigTAWQgRAWgmAAIgHAAgABPgdQgzADgIADQgJACAIArQAJAsAbAFQAcAFAlABQAkACAQgTQARgTABgdQABgbgfgIQgWgHggAAIgbABgAi9gnQgfAGgCAcQgBAcAPAUQAOAVAlABQAlACAcgDQAbgCANgsQAMgqgJgCQgJgDgygIQgbgEgWAAQgSAAgOACg");
	this.shape_1.setTransform(86.8995,137.3672,2.9071,2.9071,-4.4877);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("ABYAeQgTgVhFgJQhGgIgXAFQgWAEANgQQAMgRAogEQAogFAcAHQAcAGAgAQQAfAOgBAYQAAANgGAAQgFAAgJgJg");
	this.shape_2.setTransform(115.7231,116.3637,2.2731,2.2731,0,1.7083,-178.2917);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("ABYAeQgTgVhFgJQhGgIgXAFQgWAEANgQQAMgRAogEQAogFAcAHQAcAGAgAQQAfAOgBAYQAAANgGAAQgFAAgJgJg");
	this.shape_3.setTransform(50.6244,119.3329,2.2732,2.2732,-4.4875);

	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(114.45,138.1,1.756,2.0143,0,-3.9067,-5.1526,10.5,5);

	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(56.4,145.7,1.756,2.0143,0,-3.9067,-5.1526,10,4.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A91616").s().p("AgSCmQhQgSgiglQgMgOgMgfQgQgqgQhIIAAABIAMgfICShQQAdA9AhhGQAqAqBsA5QAJABgCANQgJA+gaAzQgNAagTAXQg0A8g/AAQgMAAgNgCgAiLgPQgTADAZAqIAAABIADADIAQAJIABAAIAKAEQAPAIAUABQAVABAZgDIAaAAIAlgGQAhgDAdgSIANgHIADgDIABAAIADgCQACgDACgBIABgBQADgFAFgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQAEgGADgDIgGgZIgmgKQgYACgegDIgxAOIgegLIghAJIAKgDIhUAUg");
	this.shape_4.setTransform(85.0635,208.5396);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhGATQgVgBgPgIIgJgDIDngZIABAAIgEACIgNAHQgcASgiACIgkAGIgbAAQgRACgQAAIgMAAg");
	this.shape_5.setTransform(85.35,212.1975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#491616").s().p("AhwAsIgQgJIgDgDIgBgBQgYgqATgDIBTgUIgKADIAhgJIAeALIAygOQAeADAYgCIAmAKIAGAZQgEADgDAGQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAABQgEABgDAFIgCABQgCABgCADIgDACIAAAAIgBABIjnAZg");
	this.shape_6.setTransform(84.9394,208.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCCCC").s().p("AnjBJIgUgEIgCgTQAAgJAYgqQAXgpAJgGQAJADAEADQADAAABALQgBAQgOASIAkgeQAigaALAAQAMgBAEAGIABATQAAAQgQAZIAAADQAGgDAzg2QAtgogCAwIAQgHQAHgGAKABQAPAAgBADQABAGADAGIABADQgEAHgWAUQgTARgjAbIgLgDQgEgBgBgDQgDAAAAgKQABgKAEgHIAJgHIgCgEQg5BAgcAAIgRgDQgEgRAJgqIgCgDIgiAsQgXAggaAAIgBAAgADtA8IgUgDIgCgUQAAgEAKgUIACgFIAMgUQAWgqAJgHIANAGQADABACAMQgBAQgPARIAkgdQAigbAMgBQAMAAADAHIACASQAAAQgQAZIAAAEIA4g5QAugqgDAyIAQgHQAIgGAKAAQAPgBgBAEQAAAGAEAGQABAKhQBAIgLgEIgFgDQgDgBAAgKQABgJAFgFQAGgFADgEIgEgFQg4BBgdgBIgQgDQgFgRALgpIgDgCIghAsQgYAdgaABg");
	this.shape_7.setTransform(86.5001,171.1541);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFD6B6").s().p("ArbAbQgBhDAVAFQAFA0AJA9IAGBFIgCAAQgiAAgEh4gAKLgPQgEhAgGg+QA8gWAaBaQAaBZhfBqQgEhCgDhHg");
	this.shape_8.setTransform(90.0771,136.7454);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("Ah8g5QBYhRAokDQBCCTAmDdQAlDcgsDPQieh+hDlJg");
	this.shape_9.setTransform(142.9325,67.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AjgESQj2B3hBgCQg4gFBMhZQAGgfhXAdQhYAbBbhRQBahVi3AxQCfiiikBnQCCi4CMiAIicANQDhiXC5gqIAUgJIiDgzQD9hoCjBHQACAAhghOQGLAFD9DRQgpEDhZBQQk/D0nBDcQg1gREEjOImzDxQg6gpEMjLgAiYBTIkPDPIGYjxgAD7AIIkiDUIHYkNgAlCgpIi1CPIFWjMgABpjCIjgCIIGRijgAD1hVIFiiHIgFg4gAkljOIEfgXIgjgwgAAxlrIGKAqIiFgwg");
	this.shape_10.setTransform(74.2,57.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4D4D4D").s().p("AjIB7ICKghImZDwgADLAwIC3g5InZEOgAlxgBIChg8IlXDLgAA5iaICygbImSCjgAIjjsIAEA5IlhCGgAhYjtIAjAxIkfAWgAAClDIEFgGICFAwg");
	this.shape_11.setTransform(78.95,53.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE5D1").s().p("AkPNNQlzlNggjOIAAgBQgDgWAAgTIgPjCQhXAGgDjIQgCixA5A+QABgbAAhYQgChYAchnQBBACD1h2QkMDLA7ApIG0jxQkFDNA0ASQHCjdE/j0QBDFLCfB9IAJB9QBnhRArBsQATBhgvCQQgJBfhTgmIgGABIgVCAIgBAAIg9E/QgWBrluD4Qi0Bch4AAQheAAg6g4gAjVJ+QAMAfANAOQAhAlBRASQBOAOA9hIQATgWAOgbQAagyAIhAQACgNgJgBQhrg5gpgqQgjBGgcg9IiSBQIgNAfIAAAAQAQBIAQAqgAoLDFQgZArABAIIABATIAVAEQAbABAXggIAigtIACAEQgKApAFASIAQADQAdgBA5hAIACAEIgJAIQgEAGgBAKQAAAKADAAQABADADABIAMAEQAjgcATgRQAWgVADgGIAAgDQgDgHgBgGQABgDgPAAQgKgBgIAHIgPAHQACgxgtApQgzA2gGAEIAAgDQAPgaABgQIgCgTQgDgHgMABQgLABgjAaIgjAeQAOgSABgQQgBgMgDABQgEgDgKgEQgIAHgXApgADFC6IgMAVIgCAEQgKAUAAAEIABAVIAVADIABAAQAagBAXgeIAigtIACADQgKApAFASIAQADQAdABA4hCIADAEQgCAEgHAGQgEAGgBAIQgBALAEABIAEADIAMADQBQhAgBgLQgEgFAAgGQABgEgQABQgJgBgIAGIgQAHQADgxguApIg4A7IAAgFQAPgaAAgQIgBgRQgDgHgMgBQgMABgiAbIgkAdQAPgRAAgPQgBgMgDgCIgOgGQgIAHgWArgArih2QAEB6AkgDIgFhEQgJg9gGg1IgDAAQgSAAABA/gAJ7kfQAGA+AEBAQACBIAEBCQBfhqgahaQgVhIgrAAQgKAAgLAEg");
	this.shape_12.setTransform(90.7343,151.3107);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_2},{t:this.instance_1},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.4,-0.4,177.2,246.6);


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


(lib.Symbol64 = function(mode,startPosition,loop,reversed) {
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
	this.EN_Card = new lib.Symbol44();
	this.EN_Card.name = "EN_Card";
	this.EN_Card.setTransform(479.6,287.6,0.4083,0.4083,-88.1324,0,0,21.4,1135);
	this.EN_Card.cache(-6,-36,704,1246);

	this.timeline.addTween(cjs.Tween.get(this.EN_Card).wait(1).to({regX:345.7,regY:586.8,rotation:-87.9608,x:260.6,y:147.3},0).wait(1).to({rotation:-87.7911,x:261,y:146.65},0).wait(1).to({rotation:-87.6213,x:261.4,y:146.05},0).wait(1).to({rotation:-87.4516,x:261.8,y:145.35},0).wait(1).to({rotation:-87.2818,x:262.25,y:144.7},0).wait(1).to({rotation:-87.1121,x:262.7,y:144.05},0).wait(1).to({rotation:-86.9423,x:263.15,y:143.45},0).wait(1).to({rotation:-86.7725,x:263.55,y:142.85},0).wait(1).to({rotation:-86.6028,x:263.95,y:142.15},0).wait(1).to({rotation:-86.433,x:264.4,y:141.55},0).wait(1).to({rotation:-86.2633,x:264.85,y:140.85},0).wait(1).to({rotation:-86.0935,x:265.25,y:140.25},0).wait(1).to({rotation:-85.9237,x:265.75,y:139.6},0).wait(1).to({rotation:-85.754,x:266.1,y:139},0).wait(1).to({rotation:-85.5842,x:266.55,y:138.35},0).wait(1).to({rotation:-85.4145,x:267.05,y:137.7},0).wait(1).to({rotation:-85.2447,x:267.45,y:137.1},0).wait(1).to({rotation:-85.075,x:267.9,y:136.4},0).wait(1).to({rotation:-84.9052,x:268.4,y:135.8},0).wait(1).to({rotation:-85.0665,x:267.95,y:136.45},0).wait(1).to({rotation:-85.2277,x:267.55,y:137.05},0).wait(1).to({rotation:-85.389,x:267.1,y:137.6},0).wait(1).to({rotation:-85.5503,x:266.65,y:138.25},0).wait(1).to({rotation:-85.7115,x:266.25,y:138.8},0).wait(1).to({rotation:-85.8728,x:265.8,y:139.4},0).wait(1).to({rotation:-86.0341,x:265.4,y:140},0).wait(1).to({rotation:-86.1954,x:265,y:140.6},0).wait(1).to({rotation:-86.3566,x:264.6,y:141.2},0).wait(1).to({rotation:-86.5179,x:264.15,y:141.8},0).wait(1).to({rotation:-86.6792,x:263.8,y:142.45},0).wait(1).to({rotation:-86.8404,x:263.35,y:143.05},0).wait(1).to({rotation:-87.0017,x:263,y:143.7},0).wait(1).to({rotation:-87.163,x:262.6,y:144.3},0).wait(1).to({rotation:-87.3243,x:262.15,y:144.9},0).wait(1).to({rotation:-87.4855,x:261.75,y:145.5},0).wait(1).to({rotation:-87.6468,x:261.4,y:146.1},0).wait(1).to({rotation:-87.8081,x:260.95,y:146.7},0).wait(1).to({rotation:-87.9693,x:260.6,y:147.35},0).wait(1).to({rotation:-88.1306,x:260.15,y:147.95},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.1,-28.2,530.9,328.2);


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

	// seal
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AAfBXIAAhEQAAgTgGgJQgFgLgQABQgKAAgIAFQgJAHgEAJQgDAJAAAXIAAA1QAAAMgGAGQgFAGgKAAQgTAAAAgYIAAitQAAgMAFgGQAFgGAJAAQAKAAAFAGQAGAGAAAMIAAA8QAHgJAHgFQAIgGAIgCQAIgCAKgBQAQABALAGQAMAHAHAMQAEAHACAJQABAJAAAKIAABNQAAAMgFAGQgGAGgJAAQgUAAAAgYg");
	this.shape.setTransform(324.625,208.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6699").s().p("AgmBLQgPgHgHgKQgIgKABgKQAAgGAEgFQAFgEAHAAQAGAAAEADQADADADAFQAGALAJAFQAIAFAOAAQAMAAAIgFQAIgFAAgHQgBgLgHgEQgIgFgSgFQgUgFgOgFQgNgFgHgJQgIgKAAgNQAAgMAHgLQAIgKANgHQAOgGAUAAQAPAAAMADQAMADAJAGQAIAFAFAHQADAGAAAHQABAGgFAFQgFAEgIAAQgGAAgFgDQgEgEgFgHQgFgGgGgDQgGgEgKAAQgKAAgIAFQgHAFAAAGQAAAHAGAEQAFAEAIACIAYAHQATAEALAHQAMAFAGAJQAHAIgBALQABARgJAMQgHALgQAGQgQAGgWAAQgWAAgPgGg");
	this.shape_1.setTransform(307.35,211.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6699").s().p("AgOBoQgFgGAAgMIAAhxQAAgNAFgFQAGgHAIAAQAIAAAHAHQAFAFAAAMIAAByQAAAMgFAGQgHAGgIAAQgIAAgGgGgAgNhLQgGgFAAgJQAAgJAGgGQAGgFAHAAQAIAAAGAFQAGAFAAAKQAAAJgFAFQgGAFgJAAQgHAAgGgFg");
	this.shape_2.setTransform(295.15,208.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6699").s().p("AgNBpQgGgGAAgMIAAitQAAgMAGgGQAFgGAIAAQAJAAAFAGQAGAGAAAMIAACtQAAAMgGAGQgFAGgJAAQgIAAgFgGg");
	this.shape_3.setTransform(287,208.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6699").s().p("AgmBqQgQgGgJgKQgJgJAAgJQABgIAEgEQAFgFAHAAQAJAAAHAIIAHAIIAHAHQAEACAGACIANABQAPAAAJgEQAIgFADgHQAEgIABgJIABgdQgKANgMAIQgMAGgQAAQgTAAgQgLQgPgJgHgTQgJgRAAgZQAAgRAFgPQAFgOAJgKQAJgKAMgGQAMgEAOAAQAQgBAMAHQANAGAKAPIAAgGQABgLAFgFQAFgGAIAAQALAAAFAHQADAIAAAPIAABzQAAATgEAPQgEAOgKAJQgJAKgPAFQgQAEgVAAQgVAAgQgFgAgahDQgLANAAAYQAAAZALALQAKAMARAAQAJAAAKgFQAIgGAFgJQAHgLAAgPQgBgZgKgOQgMgNgRAAQgQAAgKANg");
	this.shape_4.setTransform(273.15,214.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6699").s().p("AAlBLQgGgGAAgMIAAhCQAAgTgFgLQgGgKgQAAQgKAAgIAGQgJAGgEAMQgDAJAAAXIAAAyQAAAMgGAGQgGAGgIAAQgJAAgGgGQgFgGAAgMIAAhyQAAgMAFgFQAFgGAIAAQAGAAAEACQAEADADAFQACAFAAAHIAAAFQALgOAMgHQAMgGAQAAQAQAAAMAHQANAHAGAMQAEAIABAIIABAWIAABJQAAAMgFAGQgGAGgJAAQgIAAgGgGg");
	this.shape_5.setTransform(255.175,211.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6699").s().p("Ag3BrQgOAAgHgGQgGgGAAgOIAAihQAAgJADgGQADgGAGgDQAGgCAJAAIByAAQAKAAAFAEQAFAFAAAHQAAAIgFAFQgFAEgKAAIhhAAIAAA1IBZAAQAKAAAFAEQAFAFAAAHQAAAGgFAFQgFAFgKAAIhZAAIAAA9IBkAAQAKAAAGAFQAFAEAAAIQAAAIgFAFQgGAEgKAAg");
	this.shape_6.setTransform(236.725,208.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6699").s().p("AiABkQA+gRAxgqQgpgrgOg7Ig4AAIAAgWIBxAAIAAgtIAYAAQAMACgLAIIAAAjIByAAIAAAWIg3AAQgJA3goAvQApAkBEASIgLAcQg7gQg5gvQg5Ayg+ATgAABAWQAjgpAIgqIhaAAQAHAoAoArg");
	this.shape_7.setTransform(288.575,-109.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6699").s().p("AgMCDIAAhYIhMAAIAAAQIgXAAIAAiHIBjAAIAAg2IAVAAQAKABgJAGIAAAvIBnAAIAACAIgYAAIAAgJIhPAAIAABYgAAKAVIBPAAIAAhLIhPAAgAhYAVIBMAAIAAhLIhMAAg");
	this.shape_8.setTransform(258.45,-109.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},55).to({state:[]},1).to({state:[]},40).wait(41));

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
	this.EN_Card.cache(-6,-36,704,1246);

	this.timeline.addTween(cjs.Tween.get(this.EN_Card).wait(96).to({_off:false},0).wait(1).to({regX:345.7,regY:586.8,x:279.6,y:128.05,alpha:0.6667},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(37));

	// Carn_HK
	this.instance_1 = new lib.Symbol49();
	this.instance_1.setTransform(278.95,52.1,0.4098,0.4098,-83.5651,0,0,1172.4,690.6);
	this.instance_1._off = true;
	this.instance_1.cache(842,79,680,1204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(96).to({_off:false},0).wait(1).to({regX:1181.7,regY:680.8,rotation:-83.5646,x:275.4,y:21.75},0).wait(1).to({y:-3.65},0).wait(1).to({y:-28.4},0).wait(1).to({y:-52.45},0).wait(1).to({rotation:-64.4144,x:277.05,y:-58.7},0).wait(1).to({rotation:-40.3896,x:279.3,y:-59.05},0).wait(1).to({rotation:-17.0611,x:281.45,y:-58.35},0).wait(1).to({scaleX:0.4181,scaleY:0.4181,rotation:0,x:282.75,y:-53.45},0).wait(1).to({scaleX:0.4509,scaleY:0.4509,x:282.6,y:-37.6},0).wait(1).to({scaleX:0.4827,scaleY:0.4827,x:282.45,y:-22.2},0).wait(1).to({scaleX:0.5134,scaleY:0.5134,x:282.3,y:-7.4},0).wait(1).to({scaleX:0.5431,scaleY:0.5431,x:282.15,y:6.95},0).wait(1).to({scaleX:0.5718,scaleY:0.5718,x:282,y:20.8},0).wait(1).to({scaleX:0.5994,scaleY:0.5994,x:281.9,y:34.15},0).wait(1).to({scaleX:0.6259,scaleY:0.6259,x:281.75,y:47},0).wait(1).to({scaleX:0.6515,scaleY:0.6515,x:281.7,y:59.3},0).wait(1).to({scaleX:0.6759,scaleY:0.6759,x:281.55,y:71.15},0).wait(1).to({scaleX:0.6994,scaleY:0.6994,x:281.45,y:82.5},0).wait(1).to({scaleX:0.7218,scaleY:0.7218,x:281.3,y:93.25},0).wait(1).to({scaleX:0.7431,scaleY:0.7431,x:281.25,y:103.6},0).wait(1).to({scaleX:0.7634,scaleY:0.7634,x:281.15,y:113.45},0).wait(1).to({scaleX:0.7827,scaleY:0.7827,x:281,y:122.75},0).wait(1).to({scaleX:0.8009,scaleY:0.8009,x:280.95,y:131.55},0).wait(1).to({scaleX:0.8181,scaleY:0.8181,x:280.85,y:139.85},0).wait(1).to({scaleX:0.8343,scaleY:0.8343,x:280.8,y:147.65},0).wait(1).to({scaleX:0.8494,scaleY:0.8494,x:280.75,y:155},0).wait(1).to({scaleX:0.8634,scaleY:0.8634,x:280.65,y:161.75},0).wait(1).to({scaleX:0.8764,scaleY:0.8764,x:280.6,y:168.1},0).wait(1).to({scaleX:0.8884,scaleY:0.8884,x:280.55,y:173.85},0).wait(1).to({scaleX:0.8994,scaleY:0.8994,x:280.45,y:179.15},0).wait(1).to({scaleX:0.9092,scaleY:0.9092,x:280.4,y:183.9},0).wait(1).to({scaleX:0.9181,scaleY:0.9181,x:280.35,y:188.2},0).wait(1).to({scaleX:0.9259,scaleY:0.9259,y:191.95},0).wait(1).to({scaleX:0.9327,scaleY:0.9327,x:280.3,y:195.2},0).wait(1).to({scaleX:0.9384,scaleY:0.9384,x:280.25,y:198},0).wait(1).to({scaleX:0.9431,scaleY:0.9431,y:200.25},0).wait(1).to({scaleX:0.9467,scaleY:0.9467,y:202.05},0).wait(1).to({scaleX:0.9493,scaleY:0.9493,y:203.3},0).wait(1).to({scaleX:0.9509,scaleY:0.9509,y:204},0).wait(1).to({scaleX:0.9514,scaleY:0.9514,x:280.2,y:204.25},0).wait(1));

	// letter_top_flipped
	this.instance_2 = new lib.Symbol38();
	this.instance_2.setTransform(279.6,1,1,1,0,0,0,279.6,208.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(96).to({_off:false},0).wait(1).to({regY:107.7,y:-99.6},0).wait(40));

	// letter_inside
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F1E2DA").s().p("AtCOEI5/sgIABvnMBOCAAAIAAA3IAACGIAAMqI6CMgg");
	this.shape_9.setTransform(279.725,90);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EBA8DA").s().p("EAnEgE2IAAiGIAAg3IDfAAQBJACAABJIAAJwQhGC+jiBugEgrrADIIAApwQAAhJBHgCIDlAAIgBPnQjlhuhGi+g");
	this.shape_10.setTransform(279.575,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9}]},96).wait(41));

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
	this.instance_6.setTransform(277.6,164.65,0.4083,0.4083,-90,0,0,335.1,581.9);
	this.instance_6.cache(-6,-36,704,1246);

	this.EN_Card_1 = new lib.Symbol44();
	this.EN_Card_1.name = "EN_Card_1";
	this.EN_Card_1.setTransform(277.6,185.9,0.4083,0.4083,-90,0,0,278.4,581.8);
	this.EN_Card_1._off = true;
	this.EN_Card_1.cache(-6,-36,704,1246);

	this.instance_7 = new lib.Symbol64();
	this.instance_7.setTransform(278.6,155.95,1,1,0,0,0,258.2,151.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.EN_Card_1}]},52).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[{t:this.EN_Card_1}]},1).to({state:[]},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.EN_Card_1).wait(53).to({_off:false},0).wait(1).to({regX:345.7,regY:586.8,rotation:-88.1282,x:280.35,y:151.35},0).to({_off:true},1).wait(1).to({_off:false,regX:288.9,regY:577.7,rotation:-85.5611,x:276.75,y:171.1},0).wait(1).to({regX:345.7,regY:586.8,rotation:-85.4948,x:281.95,y:84},0).wait(1).to({rotation:-85.4324,x:281.7,y:21.45},0).wait(1).to({rotation:-85.3716,x:281.4,y:-39.5},0).wait(1).to({rotation:-85.3125,x:281.15,y:-98.8},0).wait(1).to({rotation:-86.2112,x:281.1,y:-112.2},0).wait(1).to({rotation:-87.3649,x:281,y:-112.3},0).wait(1).to({rotation:-88.4843,x:280.95,y:-112.35},0).wait(1).to({rotation:-89.5689,x:280.9,y:-112.45},0).wait(1).to({rotation:-78.1329,x:285.65,y:-111.2},0).wait(1).to({rotation:-58.6929,x:292.4,y:-107.15},0).wait(1).to({rotation:-39.8957,x:297.4,y:-101.3},0).wait(1).to({rotation:-21.7671,x:300.1,y:-94.4},0).wait(1).to({rotation:-4.2943,x:300.6,y:-87.3},0).wait(1).to({scaleX:0.4379,scaleY:0.4379,rotation:0,x:299.4,y:-68.5},0).wait(1).to({scaleX:0.4761,scaleY:0.4761,x:298.15,y:-46.65},0).wait(1).to({scaleX:0.5127,scaleY:0.5127,x:296.9,y:-25.65},0).wait(1).to({scaleX:0.5478,scaleY:0.5478,x:295.7,y:-5.5},0).wait(1).to({scaleX:0.5813,scaleY:0.5813,x:294.6,y:13.7},0).wait(1).to({scaleX:0.6133,scaleY:0.6133,x:293.55,y:32.05},0).wait(1).to({scaleX:0.6437,scaleY:0.6437,x:292.55,y:49.5},0).wait(1).to({scaleX:0.6725,scaleY:0.6725,x:291.6,y:66.05},0).wait(1).to({scaleX:0.6998,scaleY:0.6998,x:290.65,y:81.7},0).wait(1).to({scaleX:0.7255,scaleY:0.7255,x:289.8,y:96.45},0).wait(1).to({scaleX:0.7496,scaleY:0.7496,x:289,y:110.35},0).wait(1).to({scaleX:0.7722,scaleY:0.7722,x:288.25,y:123.3},0).wait(1).to({scaleX:0.7933,scaleY:0.7933,x:287.55,y:135.4},0).wait(1).to({scaleX:0.8128,scaleY:0.8128,x:286.9,y:146.6},0).wait(1).to({scaleX:0.8307,scaleY:0.8307,x:286.35,y:156.85},0).wait(1).to({scaleX:0.847,scaleY:0.847,x:285.8,y:166.25},0).wait(1).to({scaleX:0.8619,scaleY:0.8619,x:285.35,y:174.75},0).wait(1).to({scaleX:0.8751,scaleY:0.8751,x:284.85,y:182.3},0).wait(1).to({scaleX:0.8868,scaleY:0.8868,x:284.5,y:189},0).wait(1).to({scaleX:0.8969,scaleY:0.8969,x:284.15,y:194.85},0).wait(1).to({scaleX:0.9055,scaleY:0.9055,x:283.9,y:199.8},0).wait(1).to({scaleX:0.9125,scaleY:0.9125,x:283.65,y:203.8},0).wait(1).to({scaleX:0.918,scaleY:0.918,x:283.45,y:206.9},0).wait(1).to({scaleX:0.9219,scaleY:0.9219,x:283.35,y:209.15},0).wait(1).to({scaleX:0.9242,scaleY:0.9242,x:283.25,y:210.55},0).wait(1).to({scaleX:0.925,scaleY:0.925,x:283.2,y:211},0).to({_off:true},1).wait(41));

	// Carn_HK
	this.instance_8 = new lib.Symbol49();
	this.instance_8.setTransform(277.6,159.4,0.4098,0.4098,-90,0,0,1180.2,698);
	this.instance_8._off = true;
	this.instance_8.cache(842,79,680,1204);

	this.instance_9 = new lib.Symbol63();
	this.instance_9.setTransform(287.1,70.95,1,1,0,0,0,275.8,197.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},47).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).to({state:[]},31).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).wait(47).to({regX:1161.9,regY:677.2},0).wait(1).to({regX:1181.7,regY:680.8,rotation:-87.6425,x:279.6,y:137.7},0).wait(1).to({rotation:-85.2851,x:280.2,y:124.2},0).wait(1).to({rotation:-82.9276,x:280.75,y:110.7},0).wait(1).to({rotation:-80.5701,x:281.3,y:97.15},0).wait(1).to({rotation:-78.2127,x:281.8,y:83.75},0).wait(1).to({rotation:-75.8552,x:282.4,y:70.25},0).to({_off:true},1).wait(1).to({_off:false,regX:1148.5,regY:675.9,rotation:-75.8556,x:278.95,y:95.8},0).wait(1).to({regX:1181.7,regY:680.8,rotation:-77.7299,x:283.45,y:96.1,alpha:0.875},0).wait(1).to({rotation:-79.6047,x:282.6,y:109.1,alpha:0.75},0).wait(1).to({rotation:-81.4794,x:281.75,y:122.15,alpha:0.625},0).wait(1).to({rotation:-83.3542,x:281,y:135.25,alpha:0.5},0).wait(1).to({rotation:-85.2289,x:280.1,y:148.3,alpha:0.375},0).wait(1).to({rotation:-87.1037,x:279.3,y:161.4,alpha:0.25},0).wait(1).to({rotation:-88.9784,x:278.45,y:174.45,alpha:0.125},0).wait(1).to({rotation:-90.8532,x:277.55,y:187.55,alpha:0},0).to({_off:true},1).wait(72));

	// letter_front_2
	this.instance_10 = new lib.Symbol45();
	this.instance_10.setTransform(279.6,194.8,1,1,0,0,0,279.6,124.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(65).to({_off:false},0).to({_off:true},31).wait(41));

	// letter_top_flipped
	this.instance_11 = new lib.Symbol38();
	this.instance_11.setTransform(279.6,-0.1,1,0.0926,0,0,0,279.6,207.8);
	this.instance_11._off = true;
	var instance_11Filter_2 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_11.filters = [instance_11Filter_2];
	this.instance_11.cache(-2,-2,563,219);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(32).to({_off:false},0).wait(1).to({regY:107.7,scaleY:0.1826,y:-18.25},0).wait(1).to({scaleY:0.2712,y:-27},0).wait(1).to({scaleY:0.3584,y:-35.6},0).wait(1).to({scaleY:0.4441,y:-44.15},0).wait(1).to({scaleY:0.5283,y:-52.45},0).wait(1).to({scaleY:0.6111,y:-60.65},0).wait(1).to({scaleY:0.6925,y:-68.65},0).wait(1).to({scaleY:0.7724,y:-76.55},0).wait(1).to({scaleY:0.8509,y:-84.35},0).wait(1).to({scaleY:0.928,y:-91.95},0).wait(1).to({scaleY:1,y:-99.05},0).wait(52).to({_off:true},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(instance_11Filter_2).wait(32).to(new cjs.ColorFilter(0.68,0.68,0.68,1,0,0,0,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-73.50528,-73.50528,-73.50528,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-65.54112,-65.54112,-65.54112,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-57.70344,-57.70344,-57.70344,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-49.99632,-49.99632,-49.99632,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-42.41976,-42.41976,-42.41976,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-34.97376,-34.97376,-34.97376,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-27.65424,-27.65424,-27.65424,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-20.46528,-20.46528,-20.46528,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-13.40688,-13.40688,-13.40688,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,-6.47904,-6.47904,-6.47904,0), 0).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(41));

	// letter_inside
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F1E2DA").s().p("AtCOEI5/sgIABvnMBOCAAAIAAA3IAACGIAAMqI6CMgg");
	this.shape_11.setTransform(279.725,90);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EBA8DA").s().p("EAnEgE2IAAiGIAAg3IDfAAQBJACAABJIAAJwQhGC+jiBugEgrrADIIAApwQAAhJBHgCIDlAAIgBPnQjlhuhGi+g");
	this.shape_12.setTransform(279.575,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[]},95).wait(41));

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
	this.filterCacheList.push({instance: this.instance_11, startFrame:32, endFrame:32, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:0, endFrame:0, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:33, endFrame:33, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:34, endFrame:34, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:35, endFrame:35, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:36, endFrame:36, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:37, endFrame:37, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:38, endFrame:38, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:39, endFrame:39, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:40, endFrame:40, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:41, endFrame:41, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:42, endFrame:42, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:43, endFrame:43, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:44, endFrame:44, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:45, endFrame:45, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:46, endFrame:46, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:47, endFrame:47, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:48, endFrame:48, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:49, endFrame:49, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:50, endFrame:50, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:51, endFrame:51, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:52, endFrame:52, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:53, endFrame:53, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:54, endFrame:54, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:55, endFrame:55, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:56, endFrame:56, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:57, endFrame:57, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:58, endFrame:58, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:59, endFrame:59, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:60, endFrame:60, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:61, endFrame:61, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:62, endFrame:62, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:63, endFrame:63, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:64, endFrame:64, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:65, endFrame:65, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:66, endFrame:66, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:67, endFrame:67, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:68, endFrame:68, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:69, endFrame:69, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:70, endFrame:70, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:71, endFrame:71, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:72, endFrame:72, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:73, endFrame:73, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:74, endFrame:74, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:75, endFrame:75, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:76, endFrame:76, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:77, endFrame:77, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:78, endFrame:78, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:79, endFrame:79, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:80, endFrame:80, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:81, endFrame:81, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:82, endFrame:82, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:83, endFrame:83, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:84, endFrame:84, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:85, endFrame:85, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:86, endFrame:86, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:87, endFrame:87, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:88, endFrame:88, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:89, endFrame:89, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:90, endFrame:90, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:91, endFrame:91, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:92, endFrame:92, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:93, endFrame:93, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:94, endFrame:94, x:-2, y:-2, w:563, h:219});
	this.filterCacheList.push({instance: this.instance_11, startFrame:95, endFrame:95, x:-2, y:-2, w:563, h:219});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.3,-383.9,647.9,1169.4);


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

	this.actionFrames = [0,1,2];
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
		this.stop()
		
		this.back_but.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
			this.gotoAndStop(0)
			this.envelope.gotoAndStop(55)
		}
	}
	this.frame_2 = function() {
		this.stop()
		
		this.back_but.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
			this.gotoAndStop(0)
			this.envelope.gotoAndStop(55)
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Button
	this.button = new lib.Symbol41();
	this.button.name = "button";
	this.button.setTransform(299.9,524.95,1.1802,2.5553,0,0,0,313.7,244.6);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.Symbol41(), 3);

	this.back_but = new lib.Symbol54();
	this.back_but.name = "back_but";
	this.back_but.setTransform(571.4,71.05,0.4756,0.4756,0,0,0,50.1,67.9);
	this.back_but.alpha = 0.7188;
	new cjs.ButtonHelper(this.back_but, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button}]}).to({state:[{t:this.back_but,p:{regX:50.1,regY:67.9,scaleX:0.4756,scaleY:0.4756,x:571.4,y:71.05,alpha:0.7188}}]},1).to({state:[{t:this.back_but,p:{regX:50,regY:67.8,scaleX:0.3461,scaleY:0.3461,x:581.35,y:60.35,alpha:0.8711}}]},1).wait(1));

	// Frame
	this.instance = new lib.Symbol65();
	this.instance.setTransform(320.1,568.4,1,1,0,0,0,324.3,573.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2));

	// Finger
	this.fing = new lib.Symbol47();
	this.fing.name = "fing";
	this.fing.setTransform(370.75,597,1,1,0,0,0,54.8,44.4);

	this.timeline.addTween(cjs.Tween.get(this.fing).to({_off:true},1).wait(2));

	// words_CN
	this.envelope = new lib.Symbol35();
	this.envelope.name = "envelope";
	this.envelope.setTransform(319.4,525.6,1,1,0,0,0,279.6,159.8);

	this.timeline.addTween(cjs.Tween.get(this.envelope).to({_off:true},1).wait(2));
	this.envelope.addEventListener("tick", AdobeAn.handleFilterCache);

	// Hearts
	this.hearts = new lib.Symbol32();
	this.hearts.name = "hearts";
	this.hearts.setTransform(337.45,697.95,0.6039,0.6039,0,0,0,122.2,-688.4);
	this.hearts._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hearts).wait(1).to({_off:false},0).wait(1).to({regX:122.4,regY:-688.2,scaleX:0.6087,scaleY:0.6087,x:337.4,y:704.7},0).wait(1));

	// leaf
	this.movieClip_1 = new lib.Symbol15();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(799.85,6.35,2.768,2.768,0,0,0,-7.6,18.4);
	this.movieClip_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1).to({_off:false},0).wait(1).to({regX:-7.5,regY:18.3,scaleX:2.7902,scaleY:2.7902,x:804.25,y:4.5},0).wait(1));

	// Flower
	this.instance_1 = new lib.Symbol25();
	this.instance_1.setTransform(16.3,974.8,0.522,0.522,0,9.6911,-170.3089,348.4,252.3);

	this.instance_2 = new lib.Symbol25();
	this.instance_2.setTransform(476.3,999.15,0.8779,0.8779,0,0,0,174.3,126.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},2).wait(1));

	// emojis
	this.instance_3 = new lib.Symbol51();
	this.instance_3.setTransform(427.6,657.4,0.4336,0.4336,0,0,0,162.2,82.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_10
	this.instance_4 = new lib.Symbol43();
	this.instance_4.setTransform(431.25,655.8,0.8709,0.8709,0,0,0,185,95.7);

	this.instance_5 = new lib.Symbol19();
	this.instance_5.setTransform(342.5,228.65,0.8709,0.8709,0,0,0,233.1,55);
	this.instance_5.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,8);

	this.instance_6 = new lib.Symbol26();
	this.instance_6.setTransform(325.9,384.9,0.8709,0.8709,0,0,0,319.6,247.1);

	this.jenner = new lib.Symbol21();
	this.jenner.name = "jenner";
	this.jenner.setTransform(228.7,673.1,0.6073,0.6073,0,0,0,88.8,123.6);
	new cjs.ButtonHelper(this.jenner, 0, 1, 2);

	this.instance_7 = new lib.Symbol18();
	this.instance_7.setTransform(303.2,570.15,2.6674,2.6674,0,0,0,121.2,171.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE5D1").s().p("AgdACIgEgCIgCgBIAAgWIAHAHIAMgFQAOARAGAAQAIABAOgEQARgCgKAQQgFANgUAEQgagEgLgSg");
	this.shape.setTransform(125.838,852.017,1.93,1.93);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgFALIgBgBQgEgDgBgEIgBgDIAAAAIADgFIADgFIABAAIADgBQAEgCAFAEQAEADABAFIABABIgBADQgBAEgDACIADgCQgDAEgFABIgDABQgDAAgCgCg");
	this.shape_1.setTransform(140.9023,831.8916,1.2448,1.2448,2.5018);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCCFF").s().p("AgGAIQgGANgEgEQgMgGAQgNIABACQABAEAEACIABABQAEADAEgBQAFgCADgDQAGALgMAOQgIAAgDgVgAAMAAIABgDIgBgCQgBgEgEgEQgFgDgEACIgDABQgCgLALgEQAJAEgCAMQARADAAAIQAAAIgRgDIgDABQADgCABgDgAgbgPQANgHAIAJIgDAFIgDAEIgCABQgLAAgCgMg");
	this.shape_2.setTransform(140.8845,832.3199,1.2448,1.2448,2.5018);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2E2E2").s().p("Ag4A4IBCiyIA2gMIh/EegAgpiYIAxAdIgEAJIAAAAIg3Bog");
	this.shape_3.setTransform(131.5381,855.1575,1.2448,1.2448,2.5018);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BFBFBF").s().p("AgbAXIA2hnIAAAAIAFgJIABAAIABABIhDCyg");
	this.shape_4.setTransform(128.8003,850.8015,1.2448,1.2448,2.5018);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#254505").s().p("AgVAbQgMgIASgRQARgQAZgOQgDARgTAXQgOARgHAAQgDAAgCgCg");
	this.shape_5.setTransform(138.2262,835.6797,1.2448,1.2448,2.5018);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC00").s().p("AgIAJQgEgEAAgFIAAAAIADgEQACgEACgBIgCABQADgDAEAAQAFAAAEADIABABQACAEAAADIAAACIAAACIgDAFIgFADIgBAAIgDAAQgEAAgEgDg");
	this.shape_6.setTransform(129.0655,827.4292,1.2445,1.2445,131.3018);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCCFF").s().p("AgLAIQgQgGABgEQACgMARAHIADgBQgDACgCAEIgCACIAAABQAAAGADADQAEAEAEAAIAEAAQgBAKgOAHQgFgLAFgMgAAEAOIAFgEIADgEQAOABgBAOIgGABQgKAAgFgIgAANABQAAgDgDgDIgBgCQgEgDgFAAQgEAAgDADQABgUAJgDQAIADgCAUQAJgLAJAFQAFAIgTAJIAAgDg");
	this.shape_7.setTransform(129.2064,827.5516,1.2445,1.2445,131.3018);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#254505").s().p("AgWAVQAAghAOglQAVATAJAoQAGApgWgBIgGAAQgWAAAAgdg");
	this.shape_8.setTransform(139.7432,836.7061,0.5945,0.5945,72.6314);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#254505").s().p("AgWAiQAAgiAOhIQAVA3AJAoQAGApgYAJQgagGAAghg");
	this.shape_9.setTransform(127.1489,832.3291,0.5944,0.5944,-26.694);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#254505").s().p("AgSAQQAAghALgcQARAPAHAjQAIAfgYAJIgEABQgPAAAAgeg");
	this.shape_10.setTransform(131.7601,835.1209,0.5945,0.5945,2.0431);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3399FF").s().p("AgKAEIAAgKIAHAIIgBgSIAHARIACgMIADALQAIAMgNAFQgLAAgCgNg");
	this.shape_11.setTransform(147.5109,831.906,2.5788,2.5788,64.7379);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3399FF").s().p("AgTAFIAHgaIAFAVIAIggIAFAgIAJgYIAFAZQAHAcgbAEQgZgGAGgWg");
	this.shape_12.setTransform(132.246,809.3588,1.2448,1.2448,2.5018);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3366CC").s().p("AgTAAIADgOIALANIAFgZIAJAZIAIgUIADATQAEAbgWACQgSgEgDgXg");
	this.shape_13.setTransform(140.3963,816.3634,1.0578,1.2447,0,12.7211,-167.2825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#66CCFF").s().p("AgMATIgRgWIAbAMIgRgcIAbATIgRgfIAYAXQAVASgIAVIgHABQgRAAgQgNg");
	this.shape_14.setTransform(146.1915,823.7556,1.268,1.268,74.6835);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFF00").s().p("AgJAIQgDgEAAgEIAAgBQABgFAEgDIACgCIABAAIAFAAIAFABIAAAAIADADQAEAEgBAEQAAAFgFADIgBABIgDABQgDABgDgBIACACQgFgBgDgEg");
	this.shape_15.setTransform(140.9082,808.3199,1.2448,1.2448,2.5018);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFCCFF").s().p("AAAAPIgCgCQACACAEgBIAEgBIABgBQAEgEABgFQAAgEgDgEIgDgCQAIgHAKAJQABAJgMADQAFAQgHAFIgDABQgGAAgEgOgAgYAWQgEgJARgLQgOAAABgFQAAgNAUAIIgCACQgDACgBAEIAAACQAAAEADAEQADAEAEABQgFAIgKAAIgJgBgAAAAPgAACgJIgEAAQgIgKAKgJQALAJgDALIgGgBg");
	this.shape_16.setTransform(140.7624,807.9728,1.2448,1.2448,2.5018);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3366CC").s().p("AgTAAIADgOIALANIAFgZIAJAZIAIgUIADATQAEAbgWACQgSgEgDgXg");
	this.shape_17.setTransform(145.466,819.1019,1.2446,1.2446,42.7469);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFF00").s().p("AgIAJQgEgEABgFIAAAAIACgEQABgDADgCIgDABQAEgEAEABQAFgBADAEIABABQADADAAAEIAAACIAAACIgEAFIgEADIgBAAIgDAAQgEAAgEgDg");
	this.shape_18.setTransform(134.1159,816.823,1.2448,1.2448,2.5018);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCCFF").s().p("AgLAIQgQgGABgFQACgMARAJQABgVAJgDQAIADgCAVQAJgMAJAFQAFAIgTAJIAAgCQAAgEgDgDIgBgBQgEgEgFAAQgEAAgDAEIADgCQgDACgCADIgCADIAAACQAAAFADADQAEAEAEAAIAEAAQgBAKgOAHQgFgLAFgMgAAEAOIAFgEIADgFQAOABgBAPIgGABQgKAAgFgIg");
	this.shape_19.setTransform(134.123,816.6364,1.2448,1.2448,2.5018);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFCC00").s().p("AgBAMIgDAAIgBgBIgEgEIgDgFIABgBIAAgDQABgFAEgDQAFgCAEABIABAAIADACQADADABADIAAgDQACAEgBAEQgBAFgDADIgCABQgCACgEAAIgBgBg");
	this.shape_20.setTransform(137.2681,826.1713,1.2448,1.2448,2.5018);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCCFF").s().p("AgIALIADABQAEABADgDIACgBQADgCABgFQABgEgCgFQANgBAIAQQgEAIgUgGQAJALgFACQgDADgDAAQgFAAgFgPgAgaAUQgBgOALgFIADAFIAEAFQgDAKgJAAIgFgBgAgZgOQAHgGALAHQAIgPAIAEQAIADgKAOIAAAEQgBgEgDgCIgDgCIAAgBQgFgBgFADQgEADgBAFIAAADQgKgCAAgNg");
	this.shape_21.setTransform(137.8064,826.2453,1.2448,1.2448,2.5018);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#66CCFF").s().p("AgMATIgRgWIAbAMIgRgcIAbATIgRgfIAYAXQAVASgIAVIgHABQgRAAgQgNg");
	this.shape_22.setTransform(126.4063,814.481,1.2679,1.2679,30.7238);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3399FF").s().p("AgKAEIAAgKIAHAIIgBgSIAHARIACgMIADALQAIAMgNAFQgLAAgCgNg");
	this.shape_23.setTransform(126.1291,823.4521,2.5792,2.5792,2.5075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#336600").s().p("AgTCLIAAAAIAFgJIAUgyIgEAMIAGAFIABAAIADgGIAahaIAyg2IgfAtIg7CHIgFARIgFACgAAOB9IACAAIBHhIIg+BNIgTAJgAgiB/IgKjqIAQBpIADASIgCBkIgBAHIAAAEIgBAEgAgYB1IA2kGIgdCwIgBAFIgVBSgAg8BnIgbhuIAiBcIAAAAIAAACIADAag");
	this.shape_24.setTransform(136.7102,823.6641,1.2455,1.2455,2.5019);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4C9106").s().p("AgPBiIBBhoIAcgWIhNB8IgHAOIgOAFgAggBtIgHgGIAFgOIAVhSIACgFIAXgsIgpCQIgDAHgAg/BUIgDgaIAAgCIgLicIAVCSIgCAqgAgmgMIgDgTIANhTIABBnIgNBigAgEBEIgGgFIAEgMIAVhTIAGgyIAEA3IgZBZIgDAGg");
	this.shape_25.setTransform(138.17,827.3431,1.2455,1.2455,2.5019);

	this.instance_8 = new lib.Symbol6();
	this.instance_8.setTransform(126,768.35,1.7646,1.7646,6.5128,0,0,32.5,81.5);

	this.instance_9 = new lib.Symbol20();
	this.instance_9.setTransform(175.55,875.45,0.712,0.712,0,0,0,143.1,208.1);
	this.instance_9.cache(-2,-2,290,420);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D4D4D4").s().p("AgNgCQA3AFg3ABg");
	this.shape_26.setTransform(-707.0875,511.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#5A633E").s().p("ArECVQklg+AAhXQAAhXElg8QEmg+GeAAQGgAAEjA+QEnA8AABXQAABXknA+QkjA8mgABQmegBkmg8g");
	this.shape_27.setTransform(178.75,1005.1);

	this.instance_10 = new lib.Symbol7();
	this.instance_10.setTransform(309.5,784.7,1.7236,1.7236,0,0,0,25,77);

	this.instance_11 = new lib.Symbol15();
	this.instance_11.setTransform(804.25,4.5,2.7902,2.7902,0,0,0,-7.5,18.3);
	this.instance_11.compositeOperation = "darken";

	this.instance_12 = new lib.Symbol22();
	this.instance_12.setTransform(194.95,742.5,0.5709,0.5709,0,0,0,132.5,174);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],2.1,15,0,2.1,15,24.8).s().p("AA0CcQgugHgjgmQglgnhDipQgSgvAegMQgUAiAwBTIABACQApBbBOAlQAZgOAPgDQAOgDAJAEIAUAGQALACACgcIAEgtQABgQgGgzQgGgzgLgmQAkAMAACBQAACAgVATQgRAPgfAAIgUgBg");
	this.shape_28.setTransform(203.2695,818.8964,0.8779,0.8779);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-2.7,6.6,0,-2.7,6.6,15.7).s().p("AhDAqIAvg0IAMgNIAJgNIALgNIAMgPQAdgTAPAnIhWBxQgJACgJAAQgaAAgFgdg");
	this.shape_29.setTransform(187.9,908.286);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-4.4,5.5,0,-4.4,5.5,15.7).s().p("AhMAVIA7gmIAPgKIAMgIIAOgLIAQgKQAggLAFApIhwBVQgtAAAEgmg");
	this.shape_30.setTransform(184.5122,902.5669);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-3.7,-2.5,0,-3.7,-2.5,12).s().p("AAeA1IhchEQgDgjAhgDQAAAEAHAFQAHAFAHAGIAMAIIAPAKIAuAdQAKAognAAIgDgBg");
	this.shape_31.setTransform(224.1425,902.3527);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-4.5,-2.6,0,-4.5,-2.6,12.8).s().p("AhBgFQgIgiAggIQABADAIAEIAPAJIAOAHIAQAHIAxAWQARAngqAEg");
	this.shape_32.setTransform(226.3047,896.775);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#581F06").s().p("AAUAJIACgEIADAFgAgTABQgLgGANgEIARAEQgBACAAADIAAAFg");
	this.shape_33.setTransform(292.2311,906.5078,1.3761,1.3761);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6B2607").s().p("AgFAKQgCgBgCgDIgCgDIAAgFQAAgDADgCIACgDIAFgBIAEAEIAJAKIgCAEIgEACQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgEABIgEgCg");
	this.shape_34.setTransform(293.5413,906.783,1.3761,1.3761);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC00").s().p("AANAPQgBAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgDgBgDgDIgCgFIgYgEIgEgDQgHgHAKgEIAEgBIAYAGIADgFIADgBIAEAEIgFABIgCADIgRgEQgNAEALAHIAQADIACACQACAEACABIAEABIAFAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAIADgDIAGACIABACIgCgBIgFADQgCADgDAAIgEABIgDgBg");
	this.shape_35.setTransform(291.473,906.8174,1.3761,1.3761);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#581F06").s().p("AgegBIATgCIgBAFIACAFIgSACQgNgEALgGgAALAAIgCgFIAWgDIACACIABACIACACIgDAEIgWACQABgCgBgCg");
	this.shape_36.setTransform(304.3345,878.9538,1.3759,1.3759,2.4974);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6B2607").s().p("AgCAMQgCAAgDgDIgDgCIgBgGIAAgEIACgEIAFgDIADgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAEACIADACIACAGQABACgBACIgDADIgDADIgFACIgDAAg");
	this.shape_37.setTransform(304.2219,879.0063,1.3759,1.3759,2.4974);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFCC00").s().p("AgEAQQgDAAgEgDIgDgEIgZADIgFgCQgJgEAJgGIADgCIAZgDIACgFIAHgEQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQADgBACACIAFACIAFAEIAegEIACACIACADIADAEIgFAFIgeADIgEAFQgBADgDABQgDACgDABIgFgBgAgJAJQADADADAAIADAAIAEgCIADgDIADgDIAWgDIADgDIgCgDIgBgCIgCgBIgWACIgDgCIgEgCQAAgBgBAAQAAAAAAAAQAAAAgBAAQgBAAAAAAIgEABIgFADIgBAEIgTACQgLAGANAEIASgCIACACg");
	this.shape_38.setTransform(304.4795,879.0204,1.3759,1.3759,2.4974);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#581F06").s().p("AgegBIATgCIgBAFIACAFIgSACQgNgEALgGgAALAAIgCgFIAWgDIACACIABACIACACIgDAEIgWACQABgCgBgCg");
	this.shape_39.setTransform(300.0305,857.364,1.376,1.376,-8.0487);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6B2607").s().p("AgCAMQgCAAgDgDIgCgCIgCgGIAAgEIACgEIAFgDIAEgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAEACIADACIACAGQABACgBACIgDADIgDADIgEACIgEAAg");
	this.shape_40.setTransform(299.9294,857.4362,1.376,1.376,-8.0487);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCC00").s().p("AgEAQQgDAAgEgDIgDgEIgZADIgFgCQgJgEAJgGIADgCIAZgDIACgFIAHgEQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQADgBACACIAFACIAFAEIAegEIACACIACADIADAEIgFAFIgeADIgEAFQgBADgDABQgDACgDABIgFgBgAgJAJQADADADAAIADAAIAEgCIADgDIADgDIAWgDIADgDIgCgDIgBgCIgCgBIgWACIgDgCIgEgCQAAgBgBAAQAAAAAAAAQAAAAgBAAQgBAAAAAAIgEABIgFADIgBAEIgTACQgLAGANAEIASgCIACACg");
	this.shape_41.setTransform(300.1853,857.403,1.376,1.376,-8.0487);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#581F06").s().p("AgegBIATgCIgBAFIACAFIgSACQgNgEALgGgAALAAIgCgFIAWgDIACACIABACIACACIgDAEIgWACQABgCgBgCg");
	this.shape_42.setTransform(295.8024,839.4062,1.376,1.376,-5.0164);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6B2607").s().p("AgCAMQgCAAgDgDIgDgCIgBgGIAAgEIACgEIAFgDIADgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAEACIADACIACAGQABACgBACIgDADIgDADIgFACIgDAAg");
	this.shape_43.setTransform(295.6976,839.4729,1.376,1.376,-5.0164);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFCC00").s().p("AgEAQQgDAAgEgDIgDgEIgZADIgFgCQgJgEAJgGIADgCIAZgDIACgFIAHgEQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQADgBACACIAFACIAFAEIAegEIACACIACADIADAEIgFAFIgeADIgEAFQgBADgDABQgDACgDABIgFgBgAgJAJQADADADAAIADAAIAEgCIADgDIADgDIAWgDIADgDIgCgDIgBgCIgCgBIgWACIgDgCIgEgCQAAgBgBAAQAAAAAAAAQAAAAgBAAQgBAAAAAAIgEABIgFADIgBAEIgTACQgLAGANAEIASgCIACACg");
	this.shape_44.setTransform(295.9549,839.4532,1.376,1.376,-5.0164);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#581F06").s().p("AgegBIATgCIgBAFIACAFIgSACQgNgEALgGgAALAAIgCgFIAWgDIACACIABACIACACIgDAEIgWACQABgCgBgCg");
	this.shape_45.setTransform(297.5605,821.9622,1.376,1.376,39.6919);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#6B2607").s().p("AgCAMQgCAAgDgDIgDgCIgBgGIAAgEIACgEIAFgDIADgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAEACIADACIACAGQABACgBACIgDADIgDADIgFACIgDAAg");
	this.shape_46.setTransform(297.4391,821.9359,1.376,1.376,39.6919);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFCC00").s().p("AgEAQQgDAAgEgDIgDgEIgZADIgFgCQgJgEAJgGIADgCIAZgDIACgFIAHgEQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQADgBACACIAFACIAFAEIAegEIACACIACADIADAEIgFAFIgeADIgEAFQgBADgDABQgDACgDABIgFgBgAgJAJQADADADAAIADAAIAEgCIADgDIADgDIAWgDIADgDIgCgDIgBgCIgCgBIgWACIgDgCIgEgCQAAgBgBAAQAAAAAAAAQAAAAgBAAQgBAAAAAAIgEABIgFADIgBAEIgTACQgLAGANAEIASgCIACACg");
	this.shape_47.setTransform(297.6358,822.1029,1.376,1.376,39.6919);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#581F06").s().p("AgegBIATgCIgBAFIACAFIgSACQgNgEALgGgAALAAIgCgFIAWgDIACACIABACIACACIgDAEIgWACQABgCgBgCg");
	this.shape_48.setTransform(305.4605,810.8122,1.376,1.376,39.6919);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6B2607").s().p("AgCAMQgCAAgDgDIgDgCIgBgGIAAgEIACgEIAFgDIADgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAEACIADACIACAGQABACgBACIgDADIgDADIgFACIgDAAg");
	this.shape_49.setTransform(305.3391,810.7859,1.376,1.376,39.6919);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFCC00").s().p("AgEAQQgDAAgEgDIgDgEIgZADIgFgCQgJgEAJgGIADgCIAZgDIACgFIAHgEQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQADgBACACIAFACIAFAEIAegEIACACIACADIADAEIgFAFIgeADIgEAFQgBADgDABQgDACgDABIgFgBgAgJAJQADADADAAIADAAIAEgCIADgDIADgDIAWgDIADgDIgCgDIgBgCIgCgBIgWACIgDgCIgEgCQAAgBgBAAQAAAAAAAAQAAAAgBAAQgBAAAAAAIgEABIgFADIgBAEIgTACQgLAGANAEIASgCIACACg");
	this.shape_50.setTransform(305.5358,810.9529,1.376,1.376,39.6919);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_51.setTransform(160.6995,922.4959,0.6496,1.125,0,11.9621,-38.1608);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_52.setTransform(157.7537,930.5524,1.125,0.6496,0,-128.1608,-78.0379);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_53.setTransform(157.2455,936.0284,0.3831,1.2414,0,-158.3812,-148.1905);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_54.setTransform(160.9975,931.8696,1.1854,0.5314,0,158.3474,116.3507);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_55.setTransform(162.6204,925.0927,0.9635,0.8712,0,39.4651,95.5336);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_56.setTransform(159.6606,925.5576,1.1423,0.6184,0,-13.07,-61.5722);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_57.setTransform(156.9069,935.2946,0.6184,1.1423,0,-151.5722,-103.07);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_58.setTransform(158.437,935.6224,0.7848,1.0352,0,-171.6442,133.5812);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_59.setTransform(162.7303,927.2753,1.1718,0.5607,0,59.5753,104.0947);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_60.setTransform(162.2686,922.7272,0.4239,1.228,0,23.4659,49.381);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_61.setTransform(152.712,946.5288,0.6307,1.0922,0,11.9578,-38.1547);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_62.setTransform(149.7732,954.8059,1.0922,0.6307,0,-128.1547,-78.0422);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_63.setTransform(149.4058,960.1958,0.372,1.2052,0,-158.3779,-148.1857);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_64.setTransform(152.8016,956.0843,1.1509,0.5159,0,158.3572,116.3524);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_65.setTransform(154.7063,949.1492,0.9355,0.8459,0,39.4706,95.5337);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_66.setTransform(151.6053,949.829,1.1091,0.6005,0,-13.0694,-61.5754);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_67.setTransform(148.8084,959.2499,0.6005,1.1091,0,-151.5754,-103.0694);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_68.setTransform(150.1629,959.9089,0.7619,1.0051,0,-171.645,133.5792);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_69.setTransform(154.2806,951.1661,1.1377,0.5444,0,59.5915,104.0938);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_70.setTransform(153.5872,947.4832,0.4115,1.1922,0,23.4689,49.387);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_71.setTransform(143.5838,969.985,0.6495,1.1248,0,11.9633,-38.1473);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_72.setTransform(140.2973,978.869,1.1248,0.6495,0,-128.1473,-78.0367);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_73.setTransform(139.9723,984.4002,0.3833,1.2412,0,-158.374,-148.1728);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_74.setTransform(143.3504,979.9765,1.1853,0.5314,0,158.351,116.3553);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_75.setTransform(145.0384,973.1787,0.9635,0.8711,0,39.4733,95.5336);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_76.setTransform(142.3034,973.7368,1.1422,0.6184,0,-13.0666,-61.5698);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_77.setTransform(139.4316,983.4598,0.6184,1.1422,0,-151.5698,-103.0666);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_78.setTransform(140.6986,983.7221,0.7847,1.0353,0,-171.6429,133.5866);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_79.setTransform(145.2579,974.7423,1.1717,0.5606,0,59.5802,104.0969);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_80.setTransform(144.3059,971.1604,0.4238,1.2279,0,23.4698,49.3844);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_81.setTransform(206.5919,957.02,1.0551,1.0551,20.7121);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_82.setTransform(199.7706,959.6395,1.0551,1.0551,-69.2879);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_83.setTransform(200.0631,966.9969,1.055,1.055,-129.2874);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_84.setTransform(207.1108,968.8988,1.055,1.055,155.7169);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_85.setTransform(210.4791,963.2736,1.0552,1.0552,95.7052);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_86.setTransform(203.5997,957.4408,1.055,1.055,-18.2657);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_87.setTransform(198.6908,964.6003,1.055,1.055,-108.2657);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_88.setTransform(202.6196,969.8661,1.055,1.055,-168.2823);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_89.setTransform(210.4478,966.1117,1.0551,1.0551,116.7255);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_90.setTransform(208.7494,959.5296,1.0551,1.0551,56.7211);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_91.setTransform(199.9854,939.2082,1.0557,1.0557,-114.2785);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_92.setTransform(205.9012,943.9024,1.0557,1.0557,-174.2896);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_93.setTransform(212.1638,939.526,1.0557,1.0557,110.7136);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_94.setTransform(200.5325,934.5983,1.0556,1.0556,-63.2779);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_95.setTransform(202.1882,943.2403,1.0556,1.0556,-153.2779);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_96.setTransform(209.9578,943.0979,1.0556,1.0556,146.73);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_97.setTransform(212.6369,935.3275,1.0556,1.0556,71.7319);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_98.setTransform(198.0498,982.831,1.0557,1.0557,-24.2793);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_99.setTransform(194.481,990.6002,1.0557,1.0557,-114.2793);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_100.setTransform(199.6012,995.3024,1.0557,1.0557,-174.2896);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_101.setTransform(206.6578,991.2741,1.0557,1.0557,110.7136);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_102.setTransform(205.1205,984.2796,1.0556,1.0556,50.7197);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_103.setTransform(195.4568,986.2619,1.0556,1.0556,-63.2779);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_104.setTransform(196.7882,994.6903,1.0556,1.0556,-153.2779);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_105.setTransform(204.552,994.519,1.0556,1.0556,146.73);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_106.setTransform(207.1369,986.6275,1.0556,1.0556,71.7319);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFCC00").s().p("AgUALQAAgkAVgZQAVAkAAAgQAAAhgZAAQgSgDABglgAgNAMQgBAbAMACQAQAAAAgZQAAgXgOgbQgNATAAAbg");
	this.shape_107.setTransform(202.0621,982.6322,1.0557,1.0557,11.7202);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#581F06").s().p("AgegBIATgCIgBAFIACAFIgSACQgNgEALgGgAALAAIgCgFIAWgDIACACIABACIACACIgDAEIgWACQABgCgBgCg");
	this.shape_108.setTransform(210.611,831.7577,1.3761,1.3761,-5.9358);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#6B2607").s().p("AgCAMQgCAAgDgDIgCgCIgCgGIAAgEIACgEIAFgDIAEgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAEACIADACIACAGQABACgBACIgDADIgDADIgEACIgEAAg");
	this.shape_109.setTransform(210.5073,831.8262,1.3761,1.3761,-5.9358);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFCC00").s().p("AgEAQQgDAAgEgDIgDgEIgZADIgFgCQgJgEAJgGIADgCIAZgDIACgFIAHgEQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQADgBACACIAFACIAFAEIAegEIACACIACADIADAEIgFAFIgeADIgEAFQgBADgDABQgDACgDABIgFgBgAgJAJQADADADAAIADAAIAEgCIADgDIADgDIAWgDIADgDIgCgDIgBgCIgCgBIgWACIgDgCIgEgCQAAgBgBAAQAAAAAAAAQAAAAgBAAQgBAAAAAAIgEABIgFADIgBAEIgTACQgLAGANAEIASgCIACACg");
	this.shape_110.setTransform(210.7643,831.8023,1.3761,1.3761,-5.9358);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#581F06").s().p("AgegBIATgCIgBAFIACAFIgSACQgNgEALgGgAALAAIgCgFIAWgDIACACIABACIACACIgDAEIgWACQABgCgBgCg");
	this.shape_111.setTransform(208.4712,822.5272,1.376,1.376,-8.2237);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#6B2607").s().p("AgCAMQgCAAgDgDIgCgCIgCgGIAAgEIACgEIAFgDIAEgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAEACIADACIACAGQABACgBACIgDADIgDADIgEACIgEAAg");
	this.shape_112.setTransform(208.3703,822.5997,1.376,1.376,-8.2237);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFCC00").s().p("AgEAQQgDAAgEgDIgDgEIgZADIgFgCQgJgEAJgGIADgCIAZgDIACgFIAHgEQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQADgBACACIAFACIAFAEIAegEIACACIACADIADAEIgFAFIgeADIgEAFQgBADgDABQgDACgDABIgFgBgAgJAJQADADADAAIADAAIAEgCIADgDIADgDIAWgDIADgDIgCgDIgBgCIgCgBIgWACIgDgCIgEgCQAAgBgBAAQAAAAAAAAQAAAAgBAAQgBAAAAAAIgEABIgFADIgBAEIgTACQgLAGANAEIASgCIACACg");
	this.shape_113.setTransform(208.6261,822.5657,1.376,1.376,-8.2237);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#581F06").s().p("AgegBIATgCIgBAFIACAFIgSACQgNgEALgGgAALAAIgCgFIAWgDIACACIABACIACACIgDAEIgWACQABgCgBgCg");
	this.shape_114.setTransform(207.3348,813.4183,1.3761,1.3761);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#6B2607").s().p("AgCAMQgCAAgDgDIgDgCIgBgGIAAgEIACgEIAFgDIADgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAEACIADACIACAGQABACgBACIgDADIgDADIgFACIgDAAg");
	this.shape_115.setTransform(207.2246,813.4756,1.3761,1.3761);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFCC00").s().p("AgEAQQgDAAgEgDIgDgEIgZADIgFgCQgJgEAJgGIADgCIAZgDIACgFIAHgEQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQADgBACACIAFACIAFAEIAegEIACACIACADIADAEIgFAFIgeADIgEAFQgBADgDABQgDACgDABIgFgBgAgJAJQADADADAAIADAAIAEgCIADgDIADgDIAWgDIADgDIgCgDIgBgCIgCgBIgWACIgDgCIgEgCQAAgBgBAAQAAAAAAAAQAAAAgBAAQgBAAAAAAIgEABIgFADIgBAEIgTACQgLAGANAEIASgCIACACg");
	this.shape_116.setTransform(207.4826,813.4785,1.3761,1.3761);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#DF0000").s().p("AgvIDIgqAAQB8goADwLQAHFGAZJHQAKDEAKAQQhNgug8AAg");
	this.shape_117.setTransform(302.625,998.225);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#373737").s().p("ACdCpQAShXBXhXIAAiGQBVAPBLgOQgzE3iaAsQgzgKgJgmgAmmBkQC+gfBFhtQATgsgTiEQA0AHA/AAQhEFoiDAWIgKACIgZABQhiAAgqhMg");
	this.shape_118.setTransform(294.1,1050.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#DF3100").s().p("AhMHsIAxouQAUl1ADinIBiAAQgCBGAECdQgEQLh7AoQgeAAgvAVgAgEpuQgSgvAQgCIBjAAIABAxgAAWqPQgDAJAFAHIABAAQAHAEAGgGIADgCQABgKgLACIAAACQAEAJgIgEQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAgBAAAAIAAgHIAEgFIAHgCQAJADAGAJQADAFAFAEIAUgBIgQgBQgLgEgFgMIgCgDQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAAAAAIgLgCQgHACgDAHgAAjqEQABgCAAAAQABgBAAAAQAAAAgBABQAAABgBACIAAgBgAgIrMIAKAKQAJADBDAGQAKACARAAQAZAEiCAIQgHgagBgHg");
	this.shape_119.setTransform(296.8503,980.125);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#E9D1BF").s().p("AgyAEQBbAKgYgaIgqgiQAQAIAKADQAKAFAGAAIAdAbQAZAbhbgLQAQAXASALQgkgEgcgng");
	this.shape_120.setTransform(303.0421,894.725);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],8.3,2.5,0,8.3,2.5,67.3).s().p("ABCnAIAAgBQBPgDCvhnIgUAPQgwAkg5AfQggAQgkARIgmAQQgMgIgJgOIlTOyQCFgeASgdQAbABEPtBQi6LXhIBxQgBAijuBJQCTmkDupIg");
	this.shape_121.setTransform(156.425,946.975);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#8D0000").s().p("AAZHbIgWgXQgdgmgHgtQBenigfmYIAjAvQAYFhhRHqQAGBrDgA5QCTAWAajxQAZjzgHl7IAcgUQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAAAIgRK7QgIBjhVA+IgcARQghATgrAOQiXgohFhBgAihpDIAAAAQjvJIiTGkQDuhJAAghQBIhyC7rXIAHgdIgCAPQgUBwgUBjQiCKRhkAlIhwApIhvAoIhFAZQCQmoEup2gAHamQQABgfgBgrQBKIZA0C4QABA5AHA/Qg5jNhNoyg");
	this.shape_122.setTransform(179.275,960.025);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#7C0000").s().p("AmBNlQCbq1BusgQAUhjAUhwIACgPIAbgUIgRCRQhVOSikKqIhEgCgAgfCYIAWAYQgNF2ASEwIhAAFQAqjrgFnYgAqfMpQB5kzBYmIQhhH3hMDTIgkgPgAD5MqQhXgOAIgFIABAAIABAAQAIgEAGAAQAZgHAxgIQAwgJATASQAniHhQmOIAcgSQAxFeAfDGQAegbAfgDQAfgDAVgWQA1A1g/AHQhAAHgngMQgEADg/AAQAGAhgvAAQgQAAgVgEgAGxqIQAEgTACggQBNIzA5DMIAAACQAVDhBMEuQAJApgpAlQh5oDhUsog");
	this.shape_123.setTransform(182.7737,989.975);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-11.9,-16.9,0,-11.9,-16.9,69.7).s().p("AATH3Qjfg5gGhrQBRnqgYlhIAcAkQACAoAHAeIAEAPQAcD+hUHUQgGBGDbBCQBFgDAihdQAjhcAJplIASgMQAHF7gZDzQgYDdh9AAQgMAAgMgCg");
	this.shape_124.setTransform(201.1852,963.0168);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],12.3,42.1,0,12.3,42.1,85.2).s().p("Ag8k/IgEhRIABgBQA8G+BBEAIABAMIACAVQgBAhABAjQg0i4hJoZg");
	this.shape_125.setTransform(232.725,944.55);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFEBDD").s().p("AhnDAQgbgNgHgZQgHgMgFgRIgEgPQgHgegCgoIgcgkIgjguIgpg1IBehJIAEAJIAGAMIAKAUIANAaIA+CAICBCOQAaAthKgeQgbATgfAAQgXAAgagLgABuCyQAThNgTgYQgKA2gIAEQggASANg8QAwhdAqiCIAJgdIAFgQIAIgbIBSAgIgRAiQgRAhgTAaIgBABIAFBQQABArgBAfQgCAggEATQgEANgFAGQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAABIgcAUIgSAMQgOAHgJAEQgJADgFAAQgNAAAFgSg");
	this.shape_126.setTransform(204.875,912.1464);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-1.1,4.4,0,-1.1,4.4,10.1).s().p("AhDANIAGgmIAOACIANACIASADIAQABIAWACIAuABIABAAQgnAagrAOQgTgDgjgKg");
	this.shape_127.setTransform(230.1,883.375);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-4.4,4.2,0,-4.4,4.2,15.8).s().p("AhoAJIANgDIAZgGIBCgVIARgGIAPgFIARgHIASgGIAQgGIAWApIgLAEIABABIiPA5QgfgPgZgcg");
	this.shape_128.setTransform(175.85,889.55);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-8.9,14.4,0,-8.9,14.4,67.9).s().p("AhpBsQjiggi4iVQgxgpBVgLQg5AeCFBJIACACQBwBPDZAhIAEAEQAOADAQgCQApAGAuADIANACIAsACIASgCIAEgBQCDgVBnhBIAIgFIAFgEQA/grBghgQhwB/g6AlQhQA0hmAYQgZAGgbAEQglAFgmAAQhNAAhTgUg");
	this.shape_129.setTransform(199.8641,830.2723);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#6B2607").s().p("AAFBpIgCgCQgDgDAAgGIAAgFQAAgEACgDIAFgEQACgDAEAAIAHAAQACABADADIADACQADAEABAFIABAEQgBAFgDAEIgDACQgDADgFABIgDABQgFgBgFgEgAgFASIgIgEIgCgDIgEgIQAAgDABgDIADgGIAFgEIAHgCQACgBACACQADAAAEACIABADQAEADAAAFIABAEQgBAEgDAEIgDAEIgHADIgCAAIgDAAgAgThMQgDAAgEgDIgEgDIgBgIQgBgEABgEIACgFIAHgEQACgBADAAQAEgBACACQADAAACACIAEAEQACADABAEIgBAHIgDAFQgBADgDABIgGADIgGgBg");
	this.shape_130.setTransform(208.63,822.8438);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FAE7CD").s().p("AhDANQgFgCgFAAQASgFgMguICRgRQgVBGAZAIQgTAKgKAOQgFAGgEAHQg1gjg2gKg");
	this.shape_131.setTransform(202.05,800.525);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-9.5,7.4,0,-9.5,7.4,30.7).s().p("AinBhQAggFD2jxIA5BBIghAdIhaBOIgZAYIgTAQIgrAnIgxAZIgwAWg");
	this.shape_132.setTransform(277.325,895.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFE5D1").s().p("AgaBhIgKgLIgPgOIgNgOIgQgPIgTgWQgVgWgGgMQgUgYggAUIBahPQArgLAdAEIAKACQAHABAGAEIArAiQAYAbhbgLQAbAnAlAEQgTgLgRgWQBdALgZgcIgdgcQAxAAAagSIA2A/QgNgIgbA8IgDAFQAUAdhLAvIgLAEIgFABIgQADQhCgGgJgCg");
	this.shape_133.setTransform(299.75,899.7717);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#EFC000").s().p("AksCjQAWAGCNhiIheBJIgGAEIgbATIgKABQgPAAgLgFgAh/BcQCbADC4gfIgFAQQiCAcjCAEgAmwAhIgDgTQAWgBAXARIAXgEQgjgdgjACIgDgVQAiAAAjAXIALAXQAZAbAgAPIhaAlIgWAJQgKgngHgogAEuBFIhSggQBuAnAlgDQgGAHgJAIgAF7AwQgggDgfgIQgrgLgtgVIgSgJQBfApBsgEQgFAKgIAHIgVgCgAERgVQAsgNAngbQATghAOgsQAUgQAjgJIAAAVQhJAIAGBJIAUgBQgHg5A2gIIAAASQgjAAAGArIAOgCQgEgbATAHIAAAQIAAAxIgSAEQgkAFgkAAQgoAAgpgHgAm6gpIgBgLQAZgBAgAOIAFAPQghgQgcgBgAEfhBQABhMg4AAIABgaQApAHAUAcQAFAIADAIQADAHABAJIACAPIABAOIAAAJIgWgDgAD9hEQADghgbACIACgUQAqgBgDA2IgRgCgADihIIACgOQAPACgEAOIgNgCg");
	this.shape_134.setTransform(201.375,888.125);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#BA0000").s().p("AmuEVIgDgRQAjgBAjAdIgXAFQgWgSgWACgAmzDvIgDgTQAdACAgAPIALAbQgjgZgiAAgAm3DRIAAgKQAJADANgBQANgEANgGIAJAfQgggNgZAAgAHBB3IAAAPQg3AIAHA5IgTABQgHhIBKgJgAm/gVQAMAAAMgFQAFBHAJA8QgLAIgEANQgFAUAPAHQAHAEAIAAIAHAeIgLADIgkAHQgMhnAEhzgAHBCYIAAAWQgUgHAEAaIgNADQgGgsAjAAgAmhCTIgEgEQgDgVAPgNIAEAVQgCABgBAEIABAEIAEACQABAGACAGIgEABQgGAAgHgHgAGTBVQAIAGAKAEIAKAAIAJAAQgDgGgGAGQgQgFgKgKIADgYIAMgBIAGgJQADgTgQgJQAEghABgoQAIADAKAAIAEAAQAGBIACBPQgjAIgUARQAGgTAEgUgAGYA3IACgPQACADgCAGIAAACQAFgEAAgIQgBgEgCgCQAAgGABgFQAKAJAAAOQgEAKgJAAIgCAAgAm/gjIAIAAIAAgIIgIAAQAEhmAOhxIADACIAAASIgCgDQAAAFACADIgBAOIgBAPIABAGIAAACIgCAAIgBAHIADAAIAAANIAAACIgBAAIAAALIABABIAAAKIgBACIgCAFIgBAYIACAFIAAgBIABACIABgBIABAQIgDgCIgEACIgCAAIgDACIAAACIgBACIAAAMIADgBIABgEIgDgDIAEgCIABgEIAHAEIAAAFIgNAMIgBgBIgBAHIABAAIAFgCIAKgJIAAANIgHACIgCAOIAJgHIABARQgHAEgGACIgKAEIAAgEgAGjhCIAAgVIADADIAKAJIgKgQIgDAAIgBgmIAJARIACACIgCgSIgFgKIAEgBIgBgGIgDABIgDAAIgBADIgBgIIAEgCIACgBIAAgCIAAgHIgGADIAAgIIAAgBIAFgCIgBgGIgEACIgFg6QASBTAKBgQgOgHgHgHgAmskIQACgOABgOIAAAcIgDAAg");
	this.shape_135.setTransform(200.9092,861.875);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#D60000").s().p("AhEOFQBTnVgbj+QAEARAIAMQAFAZAcANQA7AaAxgiQBJAegagsIiCiPIg9iAQDQgEBegZQgqCBgvBeQgOA8AggSQAJgEAJg1QAUAXgUBOQgGAaAdgMQAJgDANgIQgJJmgjBdQgiBchFADQjahCAGhGgAChP3QAEgBgFgDQgDgBgBgFQgDgMgLAAIgaAMIAEACIAXgHgADFPUIggAfIAmgbIgDgMIAKgMIACgkIAigiIgHgDIABAFIgHACIgcAbIAFAnIgKABIgLAKIAFAEQgVgCgNgTIAAgMIAAgCQAEgFAEgDQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAgBIAFAAIAEAFIACAFIAAABIgCAEIgEAGIgEACIgCgBIgBgEQgDgJAGAAIAFAEIAAgBIAAgCIAAgBQgDgCgFgBIAAAAIgDADIgBAFIADAKIABABIABAAIAFACIAEgDIAFgHIABgHIgBgEIgBgEIgCgDIgEgCIgHAAIgFACIgJAIIgBAEIgBAGIABAHIABADIAUARQAIAIALgCgAB0PtIgXgcIgSAKIgRgRIgEgLIgcAAIgKgVIgUAKIAOgDIALASIAlAHQgCAHAEAKQACAJAHAEQAHAEAHgEQAGgDADgMQAAAIAHAGQAHAFAKABgAgFOyIgGgOIgUgDIgBgRQAFAJANAAIANgGQAOgNgLgTIgFgEQgIgDgFAGIgCAFQgBACABADIADAIIALABQAEgGgBgGQgCgCgGACIAAACQAFAAgCAHIgBABQgKgEACgGIADgEIANAAQAFAHgEAMQgDAMgOAAQgMACgIgMIgBAAIABADIgEgEIABAZIAXAHIADAGIAHADgAgWL4IABATIgOAQIAGAIIgCAeIgNAUIAAAKIAHADIgKAbIALALIACgGIgGgJIAEgOIABgMIgCgFIAMgVIgEgiIACgIIAFgGIAGgFIgCgegADyMiIADAmQgbATATAaIgBgZIAQgSQgBgRgEgSIgCgFIgCgBIgBABgAD0K6IAGAKQgMAQAKANQgdAhAbAeIgJgeIANgcIgCgFIAJgbIgGgOIgCgJgAgOK+QgJAEAHALIAAAAIABAAIADAIIAGADIgCAJIgKAPQAUgFgFgVIgJgPQAQgBAOgKIAEgDQAJgIAHgLIACgGIACgBQgEgLgMgEQgNAAgFAOIAAAIQANACAFgOIgBgBQgIgCAAADIAAABIACABQAFADgKAEIgEAAQADgFADgHQABgEAFAAIAHABIAHAIQAEADgFAEQgGAKgKAIQgEAFgGACIgIAEIgMAFIAFgHIgCgJgADNKsQAAAJAEAKQABAFAEADIARASQAEAIAJAAIACgBQgUgPgOgTQgEgFgBgGIgBgHQABgNAKgJIAIgDIAKAFIAEAGIgDALIgNABQgCgDABgEQABAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIACABIAAAAQACgHgGABIgEABQgDAFACAGQAAABABAAQAAABAAAAQAAABABAAQAAAAABAAIAAABQAEAGAIgCQAHgCAAgJIAAgNIgNgIQgWADAAAYgAgGKSQgJAKgBAPQAAADAEAFIAEACIABgWQAPgSgRgUIgBgBgAD5KQQACAEAFAAIABAFIgKAQIABAEIAQgTIgCgJIgFgDIAAgXQgNAHAFASgAABJDIgCABIgDAEIgBAMIAGAMIgLAXIAGgEQARgGgIgVQgBgDgDgCIACgKIAFgJIgCgFgAD5IyIAIAjQgMAEACASQAAAJAKACIgDgUIAIgLIgIggIAEgJIgEgVQAZgRgKgdQgCAagTARIABAKIAJAOIgFAAgAAUG/IgOAWIAGARIABALQgRASAOAXIACADIgBADQgFABgCAHQgDAKAFAJIAFgSIAFgEIgDg0IAGgLIgBgCQAagOAMgWIAAABQAFgGAAgJQAAgMgJgKIgEgBIgMAEIgDALQgBAHAFAEIAEADQAHgDABgHIgCgKQgBgFgHAGIAAABQAAAFAGgFQAAADgCAFQgBADgEABIgCgIIABgEQABgGAFgCQACAAADABQAGAAAAAFIABACQABAJAAAIQgBAEgDADIgMARIgXAUIgEgNQALgNAAgRQAAgLgIgHgADcGzQgDAMAEAMQAEAMAJAKIAGAEIAWAMIAAgBQgHgJgMgFIgFgFIgJgIQgDgFgCgGQgHgSALgLIANABIAHAHIAAABIgHAJIgCACIgDgDQgEgHAJgGIgBgBIgBAAQgEgCgDADIAAANQAAACAGAEIADAAIADgCIAHgHIABgGIgBgEIgCgDQgCgFgHAAIgPAAQgEAEgBAGgAEAHRQgDASAOAEQgKgWAOgTIAAgEQgLABgEAWgAEAGWQgCAPAHAOQABAEAFABIgFggIAHgNgAATFTIgGAEIgCAcIAEAAIABAzQARgXgNgXQAAgEgEgBIABgUIADgEQANgMgKgTIgEgCgAEDEwQgEAVAOALIANAMQgIAPgHASQgDAGAEAGIAUgwIgTgJIAAg6QgHAMgDAOgAAUEaIgHAGQgHARANAJIABgWIABgDIAFABIAAgTIgEgEIgBgHIgCgEgADGEkQAbgWAPgpQgUgBgUAIIADAHQALgDAMgBQgMAcgUASQgOAKgKgCQAIgHAEgSIABgOIACAAIgJgDIAAABIgCABQgOALgGAJQgBgIgEgIQgBgDgCgCIADgKIgHgBIAAABIgDgBIgHADIAAABIAHAJQgGAXAFALIgDACQgLADgMgZIgEgMIgBgCIgHADIABABIAEAMQAOAkAUgGIAGgDIACABQAGACAGgCQAQANAXgTgAEIETIAHAAIAAgPIgHAAgABsBtIApAQQAEAAAEACQADAGgDAMIgBAHIgGAWQAKgIABgUIAVgRIASgCQAFAEAHACIACgBQADgDgIgBIAAAAIgFgDIARgQIgCgDIAEgVIACgHQAEAIAGACQgDgIgIgHIgBAAQgDAJgCAOIgCAGQAAgDgGgIQgDAEgCALQgBAHgFAHIgDgBIgEABQgDAFgIABIgUAQQAAgkAMgkIAAgCQgLADgFAIIABgCQgEgFADgLIAAgDQgJADgCAKIgCABQgMgEgNgSIgGgFIgBAAIAFAKQAHANgBAPQgFAFgMAAIgCgBQgCAIAMADQAGgBAFADIgFgBQgHAAgFAKgABNAlIAPABQAGgOgJgGIgHAAIgDACQABAPAGgIIgBAAQgGgEAFAAQAEgCADADQAEALgLACIAAgBQgPgKgJgSIABAAQAXgFASARQAOAFAIgMQAAgKgOgBQAMgKARABQgFgLgPgCQAJgJACgKQgPgGgMAJQgDgJgGgFQgHAOgCAQIgLgNQgEAHABAMQABAJgCAEIgBABQgIAJgIgEIgBAAIgGACIgRgGQAJANAQgFgAC/gIIgHAJIgBAKQAFAJAMAIIABAAIANgFIAAgFIAAgJQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAIgMgEIAAAAQgLAQAMgBIACgCQAAgBAAAAQABgBgBAAQAAgBAAAAQgBgBgBAAIgBgCIABgDQAKgBACAJIAAADIAAAAIgEAGIgGACQgMgHgEgMIABgDQAFgJAJ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");
	this.shape_136.setTransform(191.225,906.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#AB0000").s().p("AmMG3IBagkICPg6QAIAUAXAEQiuBohPACQgIgOgDgWgADPFMQAcgPgTgOQAkAKASACQBNANBMgLQgEAggJAUIgVABQhgAAhWgmgAnxluIAdgDQA+AfE4iIIAXAAIAsADQhgB3jGA+IgBgOIgDgHIgJgIQgdgGgIAaQgEANAHAKIgkAJQgJgMgOgJQgFgCgEgGQgIgHgHACIgMgFIAAgRIgEgGIgLgBIgEgHIgIgIIABgBIABABIACAAIACgBIAIgLIABgFIgSAPIAAALIALAKIAPAAIgCAYIAWAIQABgCABgBQAAgCABAAQAAAAAAAAQAAABgBABIAXAYIAIgCIAEAKIgLABQiFhIA5gegAmvk7IAHgBIAUAAIAEgHIAHgCIAAgeIgZgDIgKAKIgCABIgCAAIAEAOIASgBIgOgDIADgKIAXgEIACAWIgHAAIgGAGIgSAEIgLgOgAlqkXQgIgUAQgNIACgCIANACIAKAGIAFAIIABAIIgLAEIAAgDIgFgIIAAgIIgPAHIAJAAIAEAMIgCADIgRAEIgCAAgAFQkzIABgBIgFAAQgRgDgagLQg2gViDhFIgCgEIgDgDIgCgCQgTgYgTgdIAoAAIADAAQCfAyBgAMQApAEAtAJQAsAJAdAVIgWALQABgDACgDIABgEQgHgEgJAOIgDAGQgYALgZAJIgCgKIgNgBIAJAKIgFAGIgDABIgFgZQAFgHAHgFIgDgBIgHABIgIAJIADAfIgoAOIAAgDIALgPQgRADgCASIgDAAIgHACQgGAAgIgDgAG1lmIAAAEIAHAEQAPgCAJgRIABgDIgGgGIgHgBQgQAAgDAVgAHDl0QAMgDgMAHIAGAAIgNAMg");
	this.shape_137.setTransform(201.695,854.45);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-2,7.4,0,-2,7.4,22.6).s().p("AhYCUIAGgaQAXgEAbgQQArgbAcg5QAbg5gYglQgUgcgZgVIgBgBIAGgJQACgGAEgGQApAVAbApQAcAqggBCQggBCgyAfQgqAcggAAIgEAAg");
	this.shape_138.setTransform(265.1909,824.3563);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#581F06").s().p("AFhITIABgPIAQhBIAOAOQgGAWgBATIAAATQACAjAXAOQgvgDgCgogAGtEjQA8g/ghh/QgNhngPgyQhMkLAcg2QB0iEAshEQgFAmg2A8QgpAqgmA8QgbABARBpQASBpAlCWQAkCVAAgGIAGA8QAHBDg1AmQgHgEgHgBgAnMkKIADgBQAFAAAEgEQAKAjAEAqIgEABIgWhJgAnzkYIAYgGIAAAEQAAAGAEAEIgYAGQgSgCAOgMgAm6kdQgBgFgEgFIAfgJIAEACIADABQAAABAAAAQAAAAABABQAAAAAAABQAAABAAABQgBADgDADIgeAIIAAgDgAnglmIAFAAIAHgDQAGAhAHAcIgGAAQgFAAgCADQgHgcgFghgAoFl1IAYgGQgCADABAEIADAIIgWAFQgTgCAPgMgAnNl5QAAgFgEgEIAegJIAEACIADAAIABAFQAAADgDAEIgeAIIgBgEgAnunEIAGABIAGgDQADAiAFAdQgCgCgDABIgHADQgFgdgDgigAoUnYIAagCQgCAEABADIACAIIgZADQgSgGAQgKgAnanWQgBgEgCgEIAegDIACACIADADIACAEIgEAFIgfAEIABgHgAn2oMIAAgFIAEgBIAHgBIAEAvQgBgBgEAAQgDAAgCACIgFgpg");
	this.shape_139.setTransform(256.1735,860.475);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#272727").s().p("AB+DTQCbgsAzk2QgQCcAQApQAYBBg7BRQhLAQgyAAQgaAAgUgFgAiLjXIggDhQAugVAfAAQgJBRgTAYQh/A/hZAKQCDgVBElpg");
	this.shape_140.setTransform(303.1823,1050.864);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#630000").s().p("AmQA6IAAgBIAAgCIABgBIAAgBIABgCIAAgBIAKhJIAxgYIgHBLIgCAWQgfAUgNAAQgKAAACgMgAFeA6IgBgfIgCgpIAZgjIAQgUQATBfgIAiQgCADgEAAIgKAAQgVAAgMgFg");
	this.shape_141.setTransform(306.9978,910.645);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#E3B600").s().p("AkVCsIgXgnIAHhMIASBNQALAwBKgFIBWAAQgUgbAFgNIgTACIgBAAQg/AFgMgiIgjhcIAUgRQAOCVBegjIAPhLIAPAPIgQBBIgBAOQACApAvACIBiAAQC/gBBhgMQAgABALg6IAXgRIACAqQgmA1grgBQibANh4gEIhiAAIgqgCIgNgBQgfgBgxAEQgOACgMAAQgpAAgQgXgAhUCBIAAgTQABgTAGgWIAOAOIgLAcIATAFQCCgIgZgEQApAABPgLQBugOAJgDIAOAMQAOAOg/AIQhRAPiHADIhjAAQgQACASAvQgXgOgCgigAGJBaQgWg5jTjhICrCkIBXBTIgZAjIAAAAgAmhASQAsgfApghQBQhABBg+IASgWIAeAAQj2DxggAFg");
	this.shape_142.setTransform(302.375,900.1213);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],0,-1.2,0,0,-1.2,24).s().p("ABDB7IgOgMIiIh0Ig2g+IgSgUIBQhGQDSDgAVA5IgXARIgYASg");
	this.shape_143.setTransform(326.025,896.65);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#AF0000").s().p("ACHM5QgZgFgagHQBYAKBAgRQAFACAFABQAEAAgJgDIAYgIQAUASAVgOQAHgFAFgHQAJgOAAgOIANgLQABAHAEAHIANAJQAHAEAMgEQATgJAHgOQABgPgLgJIgNANIAKgHIAHAPQgIAQgOAFQgIACgFgDIgNgJQgEgHAAgGQAMgOALgQQALgKAPgGIAEAAQAIAFAEAHQAHAMANADQAKACAJgEQgTABgLgPQgJgLgLgHQgNAEgKAEQAJgQAHgTQAKgMAEgSQABgHgBgIIAAgBQAGgdACggIAPAAQAPBpAQBVQhLA9haARQgjAHglAAQgrAAgtgJgAEWMdIgFgCQAZgLAVgPQgCAKgEAIQgDAFgEAEQgHAHgHAAQgHAAgHgGgAGfIoQACgRAAgTIAAAAIAEgHIgEABQAAgkgEgoQAHA+AIA4IgNAAgAEfo0QASABARgBIAHACIAGgEQBugQBeh5IiVDLIgQAUgAFToYQAFAMAMADIAIAAQAFASANAIIAHgJIgRgTIAMgQIgLgXIgHgGQgcADABAdgAGEoRQAAAMABgCQABgCAAgDIAIgFIAEAGIAGgHQgEgEgFgBgAoatBQAtCiAtA8QgKADgHAKIgKAOQgCARAOAMQAHAGADAAQAcgJAAgbIgJgKQAdAbAcgOQgpAhgsAgQgzh2gZjGgAFZobQgBgTAVgDIAIAJIACAQIgGgHIgOgDIANAKIgJAJgAnVpAQAHgTARgNQAEAGAGAFIgLACIgGANIAFADIgBgCIAAgFQAGgIAIAGIACACIABAIQgCAIgHAGQgHAGgJACg");
	this.shape_144.setTransform(306.825,953.7017);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.rf(["#FFF4D0","#FFD200","#FF8E00"],[0.004,0.376,1],-3.7,-4.8,0,-3.7,-4.8,22.6).s().p("AgKCMQgwgRgQhIQgPhHAVg4QAVg4AggRIAMATQgVARgOAmQgTAwANA+QANA+AqAOQAgALAhgCIAFAbQgPADgQAAQgeAAgegKg");
	this.shape_145.setTransform(356.0209,823.3224);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#C70000").s().p("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OQAFgJADgKQAFgTAGANIAQgmIAAAOQAMgIgFgOIgDgKQgDgMAGAGIAGALIgBgfIAJAAIgQgYQAQgIAVADIANAJIACAGIgGANIgQAJIgHgSQAHgKAHAMQgIAHACgGIABgBQgBgGgCAJQgBADACACIAKgIIgHgLIgKACQgLANAPAOQAMgBAKgJIAGgSIgQgPIgUABQAOgKAIgPIAAAAIADgEIgMgKQgXgEgQAOIAEgOQATgMAVAIIAJAPQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIgCgEIgGgJQgOgHgNACQgHADgHAAIAAgCQAQgPAWAIIALASIABABIABgBQACgGgDgEIAFAGIgCAEQAHgIAHgDIASAHIATASQgJAKgNAGQgDACgEgBIgBgKIABAAQAEAHAJgGIgBgNQgRgBgBASIALAMIAagUQAQAcgMAcQgIATgUADQgPgDgCgOIAGgPQANgFAHALIgFAMIgJgDQAKgDgDgKQgJgCgCAKIACAIIAMACIAHgPIgMgLIgMACIgJATQADARASAEQARgBAKgPQgFANgEANQgIASgLASQgKAQgWACQgVgKAGgXQAFgRARACIAGABIAFANIgHACIgIgPQgNAJAJALQAGAGAMgEIAFgOQgJgTgRALQgSAHACARQACAUASAGQAVAAAOgSQgFAigeARQgSAJgWADQgkABABgkIAJgNQASgHAPAQQACAKgHAJIgOgDIALgEQAFgGgFgHIgLgEIgKALIAAAIIAHAKIAJAEIAPgEIAFgKQgEgignAJQgWAaAaAUQAMAHANAAQAygBAcglIAFAFIAEAQQgGAJgHgFIgBgCQgDgEAHgDQAGABgFADIgBAAQAGACAAgFIAAgDQgGgEgFAHQgCADgBAEIAJAIIAMgJQADgLgHgJIgGgFQADgGAAgFIADgbQADgLAIgNQATgbABgkQABghgYgZIASgJIAIALIgKABIgCgFIACgCIACgCIgCgBQgMACAJALQAPAEACgKIgGgLIgMgDIgLAIQgGgCgBgDQgCgDgFgCQgJgDgGgIQAdgmAJguQgDAGgBAHQgKAdgRAaIAdhXIAUgcQgBALgDAIQAIgLABgRIgBgCIgLAPIACgkIAHgMQABgcgCgaQgBgPgFgPIgHABIgCAGIgEgFIgHABIgCAKIgEgIIgDAAQAJARgIATQgIAVgIAWIADgdIAHgTIgCARIAGgkIgBgMIgDABIgBAXIgJgGIgIgCIAHAOIABABQgGAJgIAGIAPgKIgSAkIANgMIgCAJQgHADAAAHIAAASIAGAEQgKANAFAQIgJALIABAQIgJAJIgBAMIgSATIAAAIIgUAOIgBAHIgSAEIgEACIgFAQIgMgCIgMAFIgDAMIgPgDIASgMIALgSIgXAJQAPgJAJgLQAOgSAQgOIAGgBIAKALIgIAKQAAAAgBABQAAAAAAAAQgBAAgBAAQAAABgBAAQgGgIABgFQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAIAAgCAIQgCAFgCgHIgCABQAAADADACIAFAAIACgDQABgGgDgEIgJgCIgHAJQACAMALACIANgIIgDgPIgEgDQAIgGAJgPIAFgEIAKgOIACgDIgEgdQAKgKABgLQAEgQgLgNIgPgUQAAgdAZgDQAIAEgEAJQgEAJgIADIgHgJQAAgBABAAQAAgBAAgBQAAAAABAAQAAgBAAAAIgFAEIADAKIAMABIAMgVIgEgHIgJgDQgXAHgCAaQgQgLgSADQgIAKgJgDQgIAEgKADQgOADgIgLIgCgGIAFgKQAIgCABAHQAAAEgDADIgCgBQgDgCADgDIABACIABgCQADgGgHAAIgBABQAAABAAAAQgBAAAAABQAAAAAAABQAAAAAAABQgCAIAIADIAJgOIgKgHQAsACAhgHQBsgUAQgOIANgFIALACIAaAaQgDAFgFgIQgHgHgJgHIgBABIgPAAQAPACAOAOIAFAFIAJABIAEAHIgDAFIgEAJQgBgFACgEQABgHgCgDQgIAMgCARQgBAHgEAHIAAABQgGAFAFAEIAVgjIAGAHIAAABIgOARIADgNIgRAcIACAJIgIAhIAIgDIAFgQIABgEQABARADAPQAJgLgBgOIAMAfQADAIAHAKQADADACAAIgKgaIAOAKQAAABAAAAQABAAAAAAQAAABAAAAQABABAAAAQgBAAgBAAQAAABgBAAQAAAAAAAAQAAAAABABQAGACAJAAIACAAIASgCIAMAZIgBAEIgEAGQADgGgCgHIAAgBQgFAAAAAIIAAAJQgDALgIALIgCADIAAACIABAAQACAAAHgHIgFAHQAHgDABAFIAAACQAJgSAEgTIAAgDIACgGQACgKAEAJQAHgFgDgJQgFg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BAAQAAgBAAAAQgBAAAAABQAAAAgBAAIgJALIAEgIIgIAEIADgSQAcAMAeAKQC0AuBsADIgHACIgHANQACAKAIADQASAJAUgNIgJALQgEAWATAHQAMABAIgKIAEgEIAAgMIgQgHQgIAAgDAHIgBADIAHALIAHgEIAEgCIAAgBQAAgKgHADQgCADAAADQAAADAFABQgJACAAgLIABgCIAPAAIAEAMIgOAKQgGgCgFgDQgGgHgDgIQAFgMAPgHQALgFAKAHQAQAKAIAWQAHASgIAMIgbgQQgOAFgDAPIACALQAPAHALgHIAAgSQgHgHgHAIIgFAIIABACIADAFIgIgCQgDgNALgJQAQgDAJATQACAGABAHQACATgMANIgFgOIgNgGIgLAGIgBAQIAMAFIAIgOIgFgDQgDgCgDACIAIgGIAKASQgEADAAADQgBAMgJADQgDABgGAFQgTAOgIAEIACgDQgGgFAFgHQAFgGABgIIgCgIIgGAHQALgSgDgUIgHAHIAAgBQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgDABgCgGQgCgGAAgIQAAgIACgGQACgGADAAQADAAABAGQACAGAAAIQAAAIgCAGQAJgUgNgVIgJARQABgagNgVIgBAOIgagcIAAAKQgIgUgWgCIAFAKQgRgSgRgGIAFAQQgNgQgSgGIgCACQAFAKgKgFIgEgBQgKAFgMgEQgNgCgHABIAIAIIgbgFQgPgXgZgCQgJAEgHAFQgGACgCAHIAJAMQAQgDAEgRIAAgBIgLgBIgIAKIACABQAHACABgIIgBAAIgCAAQgCAAAJgEIABAAQADAHgIAGQgKAHgFgHQABgRASgBQAYABAMAUIgLADIAEAEQgDADgLgCIgaAHIAOAFIgiAWIAdgWIgCAAQgVgDgIAXIgBAGQADgBADgBQAJgCgNAJQgGADACAFQAJADADgGIADgDQAcgaAlAOQgUAAgLAOIAEAFQALAMAOgBIAGgFIACgGIgGgKIgPAAIgBAIQABAHAEgDQAGACgCgGQAAgBAAAAQgBgBAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIAAABQgIgEAMgBQAGAAgBAHQAAADgCAEIgYgJQAIgQAXADQAeAHAaARQASAMgDAXIgCAFQAFAYgBAdIAAACQAAAqgfAgIgIgPQgCgDgBgCIANAAIgKgDIAJgBIgLgHIAHACQADACACgFIgBgCIgEAAQgEgBABgFQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQgBgGgCgBQgDgGACAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAABABAAIACgBIAAgCIgDgDIADgSIgEgGQgBgJAGgMQAMgRgFgSIgIgHIAFAPQgCARgSAEIgQACIgFAAIACgDQgCAEAIgFQAIgFADgFIgPAHIgBACIAHgOIgSATIABgHQAIgKAJgIIAAABIAGAEIAEgCQAGgCgEgFQgDgEgFgCIgZAdIgBgBIgBgGIAMgMIgPALIgCAHQgEgIAJgIIAKgIQAGgFgDgFIgDgFQgDgDgDABIgCABIgEALIAGAEIgPAYIAGAMQgNgGAGgQQACgDACgCIgIAFIgBAGQgCgCgCgGIAEgQIABAAQADAAAEgCQACgDAAgFQAAgEgCgDQgEgEgDABQgDgBgDAEQgDADAAAEQAAAFADADQADACACAAIgHAQIALAXIgPgOIASAWQgJgDgIgFQgHgGgDgLIADgLIgEgCQgHgFgDAJIACAJIAHADIAFALIAIAHQAGAFAHABIAAAOIgKAOQgLATgBAaIgDAIIABABIALgWIAQgMIgGAAIAFgDIAJAAIAHgMQAJgDACAKIgiA3IALgHIgGAOIgEAUQAJgBgHAKQgGAJADALQAKgIABANQACAMAGAKIACgMIAOANQgPAEgLASQgCACAAADQAAAMAMABIgCgOQALgFgHAKIAEAPQAPAHAFgPIgBgDIgBAAIgBAAIgJACIACgNIAKgCIAEALIAKgKIAMAIIgCAUIgGAIQgSAGgHANQgBANAJADIAJgCIgIgIIAJgKIAJAVIAIAEIAIgCQAIgGgEgIIgBgBIgNADIgEgFIABgGIANAEIASgFIgEgRIgIAKQgKAGAAgJIAWgUIASgCIgLgBIANggIAEgBIAIAEIgKAFIALAFIgPABIARAFIgRADIAGAFIgFADIgBABIADAAIAIAAIAGgEIABAAIAAgCIAAgBIgBgBIgDAAIAKgGQgJAAAIgEIgBAAIgMgGIAJgCIgMgKQARAAAGAMIAEAJIABAGQgIAJgNABIANgBIgKAHIAOAAQAFgCgZAQIAAABIAYgMIgFAJIggANQAIADAJgBQA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BAAAAgBQABAAAAAAIABgCQACADgBAFIgEADIgKgHQADgIAHgFIAMAAQALgHAAgNQgBgLgKgDQgHgEgDAHQgHALAHALIAIABQAHgEgDgGIAAgGIgJgCQgFAIAIAEIgDABQgHgNALgGQAJACgBANgAIIxdQAHAIgCAJQgIAOgQADIgHAIQgGALAKAIIAMgCQADgCACgIQABgDgBgEQgMgGAAAQQAHADgDgFIgBgDQAEgJADAMQgEAGgGADIgFgFQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBIABgHIAGgGQARgCAIgPQACgMgHgKIgGgDQgHgGgIAIIgEANIAIANIAHABIAGgEQAFgMgHgGQgCgCgHAFQgFAIAJACIABgBQgDgEADgEIAEABIAAAIIgEAGIgKgHQgGgKAKgGQACgCADAAQAEAAAEAEgAIQzLQALAJADANQgOARgSAMQgHAEgEAJIgCAGQALAZAZgLIAHgKIAAgNIgIgIIgOACQgDAFgCAGQAAAAgBABQAAAAAAAAQAAABABAAQAAABAAABIACACIAJAAIAGgKQgEgBgBADQgDAKgGgIIABgBQAEgIAEgBIAKAFIABAFIgBALIgOAHQgPgBgFgNQABgPAOgGQAVgKAJgQQgDgPgMgKQgcgGgFAYIAGASQAHAFAMgCQAKgDgCgOIgLgFIgHACIgCAHIAMAFIABgBQgJgBADgGQACgCADAAIACAAIACAEIABACIgHAJIgOgDIgFgJQgDgOAOgHIAJgBIAGAAgAIO0uQADAOgIAKIgUAZQgIAKAGANQAEALAMAAQAPgBAHgLIADgGIADgEQAEgMgFgHQgHgHgHABQgMAFgEAJQgFAMAHAGQAGABAFgLQAEgGgBgEQgFgCABAHQABAIgIAEIgBgBIgBAAIgCgFQACgQAOgDQAIgBAEAIQABAQgMAJQgFAEgFgDQgHAEgJgBQgHgEACgKIADgMQAVgPAHgZQAFgPgLgHQgFgDgEgEIgEgCQgVAAgLAWIAAAHQAFAMAIAFQALAGAKgGIAFgJQABgKgMgIQgKgDgHAIIAEALIAMAFIgBgCQgJgEgCgIIAIgFIAEABQAJAFAAAKIgJAJIgNgCIgLgPIAAgGQAHgQARgFQAOAEAGAPgAPAteIADgQIAhALIgDALgAh5ttIgBAAIACgPIAFAaIgIAJQAHg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");
	this.shape_146.setTransform(232.825,934.75);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#970000").s().p("AD5C1IACgVIAXAnQAUAdA/gIQhtDthbICQA0lmAomwgAr3BGQgOgGgHgKQAkgRAggQQA5gdAwglIABAAQAHAKAHACIgBABIACAAIAIAAIAAACIgMAJQiGBbgbAAIgDAAgApAATQDDgFCDgaIgKAcQheAYjRAEgAjug3IgMgFQALgEAGgIIAEgQQAtAWAqALQAgAHAfAEQgCAMgKANIgGAAQgoAAhlgkgApCgiIABgBIgBABgAp2iCIgHgPIgJgXIgIgYIgEgMIgEgRIgGgYIAAgCIgBABQgch4gPi+QAoElBBCugAjfoiQAECxgFBtIgCAZIgBAWIgBAVIgCAMIgCAPIgHAngAFmiXIAGgDIAAgKQgFgbgXAEIgFAGIgEgGIAOgOQgJACgIAGQgegvgUhKQgih5gEgsQAEhDArggIgZA0IADAVQAEAgAAgNQABAKgBAIIADAQQAUBnAOAsQAFATAHAPQAcBMAnAcIgRAWIgGgGgAFZikIABgEIgEABQgBgDgDgBIACgKQAGgDAFAHQADACADAFIABALIgFAEIgIgJgAMhjzIAAAAIAAgBICXiFQAJgegChMIgCgzQgCgGAAgKIAAgCIgCgRIAAgIIgBgLQgbgngFhzQADjFBKgfIAVAAQAJAGABARQhuAIAiE/IAAgCIABANIABAMQAFA5AHArQANBcATAcQiYCJhQAxIgGgHIAFAIQgHADgFAFIgFABIgQAJIgDgDIAAAEIgRAGgAmon7QhsgDi0guQgegKgcgMIAAgBIgBABQg/gdg2gpQjniXCagCQASAAAYACIgeADQhVAKAyApQC3CWDjAgQB7AeBxgPQAagEAagGQBmgYBPgzQA6gmBviAQArATilCPQgNANgWAOQgVAOgdAOIgCgDIgCAAIACAFIgMAFIgBgBIAAABIgfAQIgBAAIgKAEIgGAEIgNAFQgQAOhsAUQgbAFghAAIgRAAgAEbu1IAMgGQArApgFB5QgGB4gsBeQBAk1hAg9g");
	this.shape_147.setTransform(247.236,897.45);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#730000").s().p("Al9gIQApgLAEAKIgMAGQgcAMgWAQQABgTAQgOgAGDgYIAFAAQAMADgIAUQgBgRgIgGg");
	this.shape_148.setTransform(310.3692,802.825);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#A60000").s().p("AEAHaIirikIARgGQgBAJALAEQALAEAJgIIAEgMIgBgBIgBgDQAAgBgBAAQAAAAAAAAQAAAAgBAAQAAAAAAABQADgEgIAAIgBAAQAFgFAHgDIAPAUIgRAPIgEAKIAcAcIALgDQAHgKgBgMQgBgHgFgDIgPgBIgDAMIAJgIQADACABACQAHAKgHAKIgDAAQgUgJgDgQIAQgLIAEgMIgVgSQBQgxCYiJQgTgcgNhbQgHgrgFg5IgBgLIgBgOIAAADQgilABugIIAAAAQAXAWAVAjQggARgVA4QgVA4APBIQAQBIAwARQAvAQAtgJQAYB5APCfQgbBRgbBCIgTAZQheB5huAQQAMgLgHgRQgHgJgKAJQgFAFAEAFQAHADgBgFQgBgFAHgBQAGAOgJAHIgBAAIgMgEIAEgcIgSgZIgQACIgPASIADAQIAfgBQgBgMgOgEIAKAPIgSABIgDgPIARgOIARAUQACAJgGALQgDAGAFAIIAJAEIgXAAIgMAAgADcGCIgGAYQAEAPASAAQAOgJACgSIgFgLIgJAAIgIAPIABABQAFAEgDgHIAJgIQAHALgJAMQgFAFgDgCIgDAAIgIgJIAGgVQgFgXgVgMIgBAAQgWgBgKASIATAdIAPABIAQgMIgFgPgAnRG7IgBgCQgGgFgEgGIAEgDIAiAQQAPgDAIgOIAIgMQgBgUgTgLIgJABIgQAVIABANIARAAIABgNIgGAMIgFgDQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAIAQgVQANAEADAQIABADQgFASgTAFQgOgJgPgCQgGAAgGACQgtg8gtiiQgGgzgFg4QAYhyAVhaQAhACAtgdQAzgfAghDQAfhCgbgrQgbgpgpgVQARgXAbgTQAWgQAdgNQBAA9hAE1IAAABQgrAggEBDQAEArAiB5QAUBKAeAvIgCACQgHAEAAAKIAGANIAFACIAKASIAIACIAOgJIAGAGQhCA+hQBAQgJAFgKAAQgTAAgTgSgAmLFmQgFAHABAJQACALAIALIAEAEQAUAHAMgRIABgBIgCgWIgEgEQgGgHgKAFQgIAEAIAGIACgFIANAEIABAPIgRALIgGgBQgNgMACgOQAGgOAOgJQADgCAFABQAIALAJAHQAFACAHAAQAYgEAIgbIAAgCIgWgUQgMgBgKAKIgHAKQgFAHAGAFIAMAFIAGgKQgBgKgCANQgBAEgEAAIgHgHQAHgOAQgGIACgBIAPARQgHASgUAFQgCACgEAAIgBgBIgRgTIgCAAQgUAAgMATgACvF1QACgFAIgEQAKgGAFACQAMAHgKgEIgHgBQgOAIAIANQAGAEgFgJQgDgEAFgEIAIAAQANAIgGALIgQAGgAksE0IgEgPIAFgFIAEAGQgCAEAAAEQgCAIAFADQAFAEAGgEIACgCIAIAJIgJAGgABpEvIAQgIIAAAAQAKABgDAJIgBADIgMAFgAkgEwQADABABADIgFACg");
	this.shape_149.setTransform(309.925,849.8333);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#F0BEA6").s().p("AgTBJQgrgMgkgbIgOgMQADh1AdAbIADgHICeAHQAdgMADBmIgMAIQggAXg4ATIgPAEIgRgDg");
	this.shape_150.setTransform(310.575,789.425);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFCC00").s().p("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gAlfA5IAGgGIgCgEQgDAEgBAGgAmXAbQgIALAJANIADgXIgBgBIgBgCIgCACgAm9AhIANAIIABAAQADAAACACQAGAGAHgEIgGgIIgBgCIgNgEgAmfAXIAAABIgBAEIgBADIABABQAFgGADgGIACAAIgBgHgAmxASIACAJIALAEIgPgWIACAJgAuFBuIAIgIIABgVIASgfIADglIAJgIIAUguIACAFQgEASgHASQgEAKgJAGIABAHQAHAWgSAFIAFAIIgEAFIgMAWIgDATIgHAHQgBABAAABQgBAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAgBgAsqBmIAOgVIABgNIAGgHIAWgwIAHgJIAAAMIgYAqIgFADIAAAVIgNAPIgFAOgAF5AmIACAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAKgEAFgLQAGgHAHAAIABAAQADAAAEABQAFACABAIQgCAPgSgCIgCgCQgFgKALACIABAAIgBAEQgCAAgBAAQgBAAgBAAQAAAAAAABQABAAABAAQABAHAFgCQAEgCACgEIABgDIABgIIgCgDQgHgBgEAEQgKAKgNALIgDABQgFAAABgHgAJQAYQADgLALgDQAOAAAKAJQALAMAPAAIgBACQgLABgIgHQgMgLgRgDQgKADgCAIQACAHAFAEQASAEAAgNQgMgEABAGQABAGgEgHQgBgEADgCQAPgCACAKQgBAIgHADIgFAAQgPAAgFgQgAFQAjIAAgIQgJAEgMAAQgEgEgBgHIACAAIADAGQAEABACgDQAKgDAIgHQAKgDAFAJQACANgLAHIgDAAQgEAAgCgFgAFYAUIgDADIAEABIgHAHQAAAFAEgCQAFgCAEgFIAAgDIgCgFIgDAAIgCABgAKjAmIgGgEQgGgHACgIQAGgNAOAAIANAKQgJgFgKgBQgJACgCALQADAPAOgEIAEgDQABABAAgBQABAAAAAAQABgBAAAAQAAgBABgBIgCgDQgDgCgFAEQgIABADgKIACAAQAOABACAMQgGAIgKAAIgFgBgAIJAlIgBgBQgFgHADgJQADgHAHgCIAKACQABAAAAABQABAAAAAAQAAAAABAAQAAABAAAAIACADQAFALALAFIAQABIgUAAQgFgEgDgFQgGgIgJgEIgHACIgEAGIAAAGQAAABAAABQAAAAABABQAAAAAAABQABAAAAAAQAIADgEgJIAAgCQALgBgBAKIgDABQgEAEgEAAIgFgBgAITAfIAAACIABgEIgBACgALKAdQgEgFgFgEQAJAGAJADQAAAFgDAAQgCAAgEgFgALvAcQgHgBgCgJQADgOAOgGIAJACIABAAQALAPAQAFIACACQgIACgIgGIgQgQIgGgCQgKAGgFALIAEAGIAHABIAGgEQgEgJgDAFQgEAFAFgKQAJAAABAMIgCABQgDAEgGAAIgEAAgAMwAXQgHgKACgLIAOgIQADAAADACQAMAEAHALIANAAQAFgJAHADIgLAJIgPAAIgFgGQgHgJgMgCQgLAGAAAIQAAAJAJAAIAFgDIAHgFIgDgDQgGgGgEAHIgCAAQgEgCAIgFQAHgBAGAGQACAMgMADgAErABQgCgBAAgCIAAgEQAFgNAIALIAAABIgBABQgFgJgDAJQAAABAAABQAAAAAAABQAAAAAAABQAAAAABAAQAEACAGACQACgCAEgDIABgIIgEgFQgEgFgGgCIgNABIgFgFQgIgHAFgGIAJAPIAPAAIAFACQAIAEABAJIgDAMIgFAEIgJAAQgEgCgCgDgArogwIAAABQgDAagSAVQACgaATgWgAnjgSIgWgcQgQAFgJgNIARAFIAGgCIABAAQAIAEAIgJIABgCQABgEAAgJQgCgMAFgHIAKANQACgQAIgOQAFAFADAKQANgKAOAGQgBALgKAIQAPADAFALQgRgBgLAKQANACAAAJQgHAMgOgFQgSgRgYAGIgBAAQAKARAOALIABABQAKgDgEgLQgDgDgDACQgFAAAFAEIABAAQgFAIgBgOIADgDIAHAAQAJAGgHAPgAnVguQAIAIAJAAQAIAAAEgFQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgSgGgOgJIgFACQgFAAgDAEQACACAFgBQAGACAGAFgAnWg/QACADADACQAEACAHABIADgCQAIgJAPgBIgEgCQgDgCgDACQgJgDgLAAgAnjhHIAAAGIADAEIAAgCIgDgJIAAABgAnjhQIAAAAQAGAHACAKIAKgJIgCgVIgGAUIgBABIgKgLIABADgAm1hcQgFACgFAFQgIAJAEAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAgBQAIgFAGgLIgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABgBAAgAnQhkIACAYIABAAQAMgHAEgLIgOAFIgFgLgAlngcQgMgIgGgJIABgKIAHgKQADgEAIgCIAGAAIgBgCQgBgEAAgEIABgGQAGgGAHgEQASgGALAPIgEAOIgJAEIgEgBIgIgEQAFgGgIgCIgBgCIAAgCIANgBIgCACIgHAAIAAABQABADAEADQABADADACIAJgDIABgBIAAAAQAGgKgIgFQgKgHgKAFIgMAOIAAADIAFAKQAEAGAIAEQATADAOgBIgXACQgFAAgFgCIgKgFIgCgBIgMgGQgKAFgFALIAAACQAEAMALAHIAHgCIADgFIAAgBIABgDQgCgJgKABIgCADIACACQABABAAAAQABABAAAAQAAABAAAAQAAAAgBABIgCADQgLAAAKgQIABAAIALAEQABABAAAAQABAAAAABQABAAAAABQAAAAABAAIAAAJIgBAFIgMAFgAEegrQgEgDACgJQACgDADAAQADgCAAgEQAHgBACAHIAAAGQgDAIgGgFIgBgBIACgBQAGACgBgIIgCgDQgFACgEAEQAAAIAGAFIAEgBQAJgGACgQQgEgFgGgEIgPgMQAWABAGAUQgCAQgKALQgHAAgGgGgAtEhDIAKgNIgNAjgAkqg4IAFgJIgBgPQADACACACQAFAKgFALIgHAHgAochRIgHgOIAOAOIgFAOgAPAhsIgJAAQgMgEgFgMQgBgcAdgDIAHAGIAKAXIgMAQIARATIgGAIQgNgIgFgRgAOsh+IAPAMIAJgKIgOgJIAPADIAGAGIgCgQIgIgIQgWADABATgAklhXQgJgRAOgLIgEAeIgBgCgAPXh0IALgGQAGABAEADIgGAHIgEgGIgIAFQAAAEgCABIAAABIgBgKgACDiOQgOgNADgQIAKgPQAHgKAJgDQAGgCAGABQAPACAOAJQATgGAGgRIgBgEQgEgQgMgEIgRAVQAAABABABQAAAAAAABQABAAAAAAQABABAAAAIAFACIAHgMIgCANIgRABIgBgOIAQgUIAKgBQATAKAAAVIgHAMQgJANgPAEIgigRIgEAEQgQANgIASIANAUQAKgBAHgGQAGgHADgHIgCgIIgBgCQgIgHgHAJIAAAEIABADIgEgDIAGgNIALgCIABACIAJAKQgBAagbAJIgBABQgDAAgHgGgAOWiYIgKgDQgEgIADgHQAFgLgBgIIgRgVIgSAPIAEAOIARgBIgKgPQAPAEABANIgfAAIgDgPIAOgTIAQgCIASAZIgEAdIANAEIABgBQAIgHgGgOQgHACABAFQACAFgHgDQgEgGAFgFQAJgIAIAIQAHASgMALIgGAEgAoYibIABgFIg5gCIAYgBIAGgOIgHAGIAGgYIgQAJIAAACIAAAAIgFAOIAPgKIgTAQIAEgQIABgCIAAgDIgJADIgBAAIABgBIBUg1IgUABIABgDQAfgHAIgOQgCADgGACQgJACgHgDIAggNIAFgJIgZAMIAAgBQAZgQgEABIgPABIALgHIgNABQANgCAIgIIgCgGIgEgJQgGgMgRAAIANAJIgJADIAMAFIAAAAQgHAFAIAAIgJAGIACAAIABABIAAABIAAACIgBAAIgGADIgHABIgEgBIABgBIAFgCIgGgFIARgDIgRgGIAPgBIgKgEIAKgGIgJgDIgDABIgOAgIALABIgRACIgXAUQABAIAKgFIAIgKIADAQIgRAGIgNgFIgBAHIADAFIAOgDIAAAAQAFAJgJAGIgHACIgJgEIgJgWIgIALIAIAIIgJABQgJgCAAgNQAHgNASgGIAHgIIABgUIgLgIIgLAKIgEgLIgKACIgBAMIAIgBIABAAIACAAIABACQgFAQgQgIIgEgOQAIgLgLAGIABAOQgMgBAAgMQAAgDACgDQALgRAPgEIgOgNIgCAMQgFgKgCgNQgCgMgJAIQgDgLAFgJQAHgKgIABIADgVIAHgNIgLAHIAig3QgCgKgJADIgHAMIgKgBIgFAEIAGAAIgQAMIgLAWIAAgBIADgJQAAgZAMgUIAKgNIAAgOQgHgBgHgFIgIgHIgFgLIgHgDIgCgJQADgJAIAFIADACIgDALQAEALAHAGQAHAEAJAEIgSgWIAQAOIgLgYIAHgPQgDAAgCgDQgDgDAAgEQAAgEADgDQACgEADAAQAEAAADAEQADADAAAEQAAAEgDADQgDADgEAAIAAAAIgEAPQABAHADACIAAgGIAJgFQgDACgBADQgHAPAOAHIgHgMIAQgYIgGgEIADgLIADgBQACgBAEADIADAEQADAGgHAEIgJAJQgKAIAEAIIACgHIAPgLIgLAMIAAAGIABABIAagdQAEABAEAEQADAFgFACIgEACIgGgDIgBgBQgJAIgIAKIAAAHIASgTIgHANIABgBIAPgHQgDAFgJAEQgIAGACgEIgCADIAFAAIARgDQASgDACgRIgGgPIAJAHQAFASgMARQgHALABAKIAEAGIgCASIACADIAAACIgCABQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgDAAAEAFQABACABAGQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAQgCAEAEACIAEAAIABABQgBAGgEgDIgHgCIALAIIgIABIAJADIgMgBQAAADADADIAIAPQAfggAAgqIAAgCQABgegFgXIABgFQAEgXgTgMQgZgSgegGQgXgEgIARIAXAJQADgEAAgDQAAgHgFgBQgMACAHAEIAAgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAABAAABQAAAAABABQABAFgFgCQgFAEgBgHIACgIIAOAAIAGAKIgCAGIgFAEQgPACgLgMIgDgGQAKgNAUAAQglgOgcAZIgCADQgEAHgIgDQgDgFAGgDQAOgJgKACQgCABgEAAIABgFQAIgXAWADIACAAIgdAWIAigWIgPgFIAbgHQALACADgDIgFgEIAMgEQgNgTgXgBQgTABAAARQAFAHAKgHQAIgGgEgIIgBABQgIAEACAAIACAAIABAAQgBAIgIgCIgBgBIAIgLIAKABIAAACQgEARgQADIgIgNQABgGAGgDQAIgEAJgEQAZACAOAWIAcAGIgJgIQAIgBANACQALAEALgFIAEABQAKAFgFgLIACgBQARAGANAQIgFgQQARAGARASIgEgLQAWADAIAUIAAgKIAZAcIABgOQANAVAAAaIAIgRQANAUgIAVQABgGAAgIQAAgJgBgFQgCgHgDAAQgDAAgBAHQgCAFAAAJQAAAIACAGQABAFADAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABgBIgBABIAIgHQADAUgMASIAHgIIABAJQAAAHgFAHQgFAHAFAFIgBACQAIgDATgOQAFgFAEgBQAJgDABgMQAAgEADgCIgKgSIgIAFQAEgBACACIAGADIgJAOIgLgGIAAgPIALgGIAOAGIAFAOQAMgNgCgTQgBgHgDgHQgJgSgQADQgLAJADANIAJABIgEgEIgBgCIAFgJQAHgIAIAIIAAARQgMAIgPgIIgCgLQADgOAPgFIAaAQQAJgNgHgRQgJgWgPgKQgLgHgLAFQgPAHgFAMQAEAIAGAGQAEAEAGACIAOgKIgEgMIgOAAIgCACQAAALAJgCQgFgBAAgDQAAgEACgCQAHgDAAAKIAAABIgEACIgGAEIgHgLIABgDQACgHAIAAIAQAHIABAMIgEAEQgJAJgMgBQgSgGAEgWIAIgLQgTANgSgJQgJgEgBgJIAHgNIAGgCIAKAHIgJAOQgHgDABgIQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBIABgBQAGAAgCAGIgCACIgBgCQgCACACADIACABQADgEAAgDQAAgHgIACIgGAKIACAGQAIAKAOgCQAKgDAJgEQAIACAIgJQASgDARALQABgaAXgIIAKAEIAEAGIgMAWIgNgCIgDgKIAGgDQgBAAAAABQAAAAgBAAQAAABAAABQAAAAAAABIAHAJQAHgEAEgIQAEgJgHgEQgZADgBAcIAPAVQAMANgEAQQgCALgKAKIAEAdIgBADIgLAOIgFAEQgJAPgHAGIAEADIACAPIgNAIQgKgCgDgNIAHgIIAJACQAEADgCAHIgCADIgEAAQgEgCABgEIABAAQACAGACgFQACgHgIAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQgCAFAHAHQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAIAHgKIgKgLIgGABQgQAOgNASQgJALgPAJIAWgJIgKASIgSAMIAOACIAEgLIAMgFIAMACIAFgQIADgCIASgEIACgHIAUgOIgBgIIASgTIABgMIAKgJIgBgQIAJgLQgFgQAJgOIgFgDIgBgSQAAgHAIgDIACgJIgOALIATgjIgQAJQAJgFAFgJIAAgCIgIgNIAJACIAIAGIABgYIAEAAIAAAMIgGAkIACgRIgHATIgCAdQAHgXAJgVQAHgSgJgRIAEgBIADAJIADgKIAHgBIAEAFIACgGIAGgBQAFAOABAQQADAagBAcIgIALIgBAkIALgOIAAACQgBAQgIAMQADgIACgLIgUAcQAIgQADgRQADgMgEgLIgFAVQgGAagKAaQgQAsgiAbQAkgjAPgvQgSAsgjAmIANgBIAAgCQAJgGAIgLQAGgJAEgKQAMgXAJgZIACgBIgdBXQARgaAJgeQACgGADgGQgKAugcAmQAGAIAIADQAGABABA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gLgCgNgApcovQgCAFADgDQAHgDgIgBIAAACgAm2pAIAHAEIAFAPIACgVQANAKgTgYIADAOIgWggIAGAjIgBAAIgGgNQgFgUgSgNIAJAeIAEAHIAIABIAOAYIgBgaIACACQAJAFAAAIIgBgBIgEgFQgEgFgBAAQgCAAACAFgApyo4IgDAJIADgBQAEgGgEgEIAAACgAlko4QAAADgDABIgBABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAIALAAIAAgMIgEgDQgBAAABAHgAnWpBIACAGQABAHAHgEIgBgNIgWgYIgBAAQAEAPAKANgAmlpNIAGASIgGgdgAoZpVIAJAHQAFAEACAFQAGAJADgJQgDgHgEgFQgIgGgFAAQgDAAgCACgAo/pYIAMAGQAGAEAHABQAEACAFAAIgPgNIgBgBIgUgCgAn0pPIAEABQADgDgDgDIgbgPIAIAOQAEAFAEAAIACAAIAFABgAotphIgBABIAGAGIANALIACAAIgDgJIAAgBIACgCQgEgHgIAAIgHABgAj5phIADAMIAAABQAFgMgCgSgAnWpxIAHACIgBAEQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQAIAIADALIgDgOIgHgGIAFgBIgTgPgAn7plIALAPIAAgCQANADgHgNIgJgGQgFgFgCAAQgDAAACAIgAnWpYIgFgXIgYgGQgGgBAFAJIAOAKIgNgSIASAVIALAIgAospnIAjAPIgGgKQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQgCgEgDgBQgFgDgGAAQgGAAgGAEgAozpdIAAgBQgGAAAGABgApPpfQAFACADgCIAEgBIAHABIgigIQADAFAJADIABAAIACAAgApFppIAFAFQANAHADgHIABgIIgVAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAABAAgAqHprIgLAIIAkgEIADgGgAoGpoIAGABIAAgBQgFgFgBgDQgKgNgPAEIAHAKIgKgFIgbABIATAGQASgEALAKIAHgBgAj/qAIgFAGIAAAQIAEgHIAGAAQACAAADgIIABAAQABgGgCgFIgDADQgDAFACAEQABAFgFAAQACgFgDgJIgCgGgApcpsQAIADAJgEQAGADgFgEIgcgCIAKAEgAoFpyQAGAKABgJIABgBIABAAIACACQABgEgCg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ANgHADgQIADgKIABgBIABAAIAAAAIgEASIAIgDIgEAIIAKgLQAAAAAAAAQABgBAAAAQAAAAABABQAAAAABAAIgCAjIANgXQADgHAEAAIAEAiIAEgTQACgJAHABIgJAbIgGADQACAbgSAWIAEgqIABACIgBAcIAFgRQgDgNgBgLIgBABIAAACQgBAGgGAHIABAFIgHAMIgDAJQgCAHgFACIAAgTIgMAUIACADQACAKAIAGIAEACIgDgJIgDgKIABgBIAKAWIADABIACACIACABIACADIADAEIADACIAAAAIABgBIACAAIAUAVIAEgKQgJgFgFgEIgUgRQgDgDgEgBQgHgFABgFIACAAQAEADAFACIAFABQgGgGgCgEIgCgFIABgDIANASIAAAJQAIAIALAGIADABIAAgBIgEgGQgHgEAAgDIACgBQADADACAFQAEAGAHgBQAAgGgHgEIgDgDQgGgHgEgCIAAgGIgCgCQgEAAgDgBIgCgCIAQABIgCgCQgFgFAAgJIABgBIAOAbIACAJIAGAHIABAGIgBACIgCABIAEAJQgGAFgDAJQgFANgKABIAMgPIgNgCIgGANQgGAKgMALIgBABQAJgEAHgHIADgLIANgJIgKAMIgFANQgLAIgPAIQgHADgFAFQgGAIgGAEQgRANgUAAQgHAAgIgCgAtLnwIACAAQgBgCgGgCQgGABALADgAropAIADABIAFADIACAAIgNgPQgDAEAGAHgArypOIgDgHIgFgBIgBAAQgMgGgFgJIABANQAAABABgBQANAGALAEgAsfpvIAQAWIgCgUQgBgHgDAHIAAAAIgBAAIABgTgArepsIgCgBQAKAPgIgOgAsdqNIgBAXIAQgogAsQqHIgCAQIAOgWIAEgDIABAAIACgOgAsBp/IADgIIAAgCIAAgCIgDAMgAsDqrQgJALgBAOQgDAPAVghIABgkIgKARIgFADIAAABIgBABIgOAZIARgRQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAgAr3qjQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIgBACIgBAOIALgXQACgFAFgCIADAbQAEgSgEgNIgDgLgAsJrBIgBABQgSARAGgBIAKgHQACgFADgEIABgCIgDABgAGeoYQACgHAHAAQADAFgBAGQAAABAAAAQAAAAAAAAQAAAAAAgBQgBgBAAgBQgIgKAAAMIAAAFQgKgGAIgDgAuPoZIAKgEQAHgCAGgEQAPgKALgTQAQgbAAgxQAAgxgQgeQgMgVgPgKIgDgCIAAgGIADAAQAYAIAQAgQARAeAAA0QAAAzgQAdQgQAcgXAIQgMAFgMAAIAAgKgAuPodIgBAAIAAgIIACAAIAIAAIAAAIgAt/o7IAHgCIAMgGIgMAPIgJAHgAgbouQgJAAgIgDQgUgGgOgZQgOgZgBgqQgBgpANgXQANgWAOgHIACAKIgMARQgOAXACAqIAAACIAKgSIAAAAQAAgEgBgEQgEgKAIgGIABANIADAGIgBAIIgJARIAFALIgMgNQABApAOAYQAHAOAKAHQAHAHAOAHIgEAAgAuJo/IABgHIACABIANgMIAEgEIgEgBIgHgEIgCAEIgDACIACADIgBAEIgDABIABgMIABgCIAAgCIACgCIADAAIADgCIAEACIAIAFIABABIgBACIACAAIgCAEIgIAIIgKAJIgFACgAgppOIgCgDIgGgFIAGABIADAAIAJAQgAg7pmIgKgEIAEgLQgGgMALAIIAAAMIAFADIAEAFIgFANgAgkpqIgIgRIgDgEQAAgCABgEIABAAIAAgBIABgBIAAgDIADAAIADgBIABAGIgDABIAEAKIADASIgDgCgAEIp9QBHgXAniQQAmiRgDhRQgDhRgngeIAQgEQAoAeAHA9QAHA9gnCjQgnCihfAyQABgIgBgLgAt8pvIgBABIgBgFIAAgYIACgFIACgCIABAAIAIgBIABgVIgEAAIgBABIgCAAIAAAHIAEAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAEgBABIgBAAIgBAAIgCAAIgBABIgBAAIAAgCIgBgCIgCgBIAAgLIACAAIAAgCIABgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAAAAAIAIgBQAAAAAAABQAAAAAAAAQABAAAAAAQAAABAAAAIABACIABgBIABAEIAAAYQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIgLABIgBAXIAJgFIAAgIIgDAAIgCgDIACgDIAFgCIABABIABACIAAAKIABABIAAADIgBACIgCADIgLAFIgCABgAtjqMIAHgIIgBgJIADACQAGAFgEAIIgEACIgIAUgAlDqFQAAgGADgDIAAABIAAAEQgBACAAAAQAAABAAAAQAAABAAgBQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBQAAAAABgBIgCgEIgDAAIAHgFIACAJIgGAIIgBABQgEAAAAgEgAEEqQIAAgBIATgHQAHgDgCgIIgJgLQgHAAgDAFQgDAJAIAEIAGgDIgBgHIACgCIABAAQAFANgMADIgIgFQgIgPATgGQAOAHABANIgEAFQgJAFgJAEIgEACQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBgAgvqQIgCgBIgCAAIgDgDIgEgHIACgCIACgCQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIADgDIAFgCIAEgCIABAGIgEACIgBABIgBABIgCABIABAFIABACIACgBIAFgDIABAHIgBACIgCABIgDACIgCgBgAtlqmIAEgKIgGgOIABgHIgDgIIAIACIAAAKIABABQAMAOgMAMIgBACIgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBgBgAElqzIgGgHIADgQIAMgHIANAEIAQgHQAGgLgGgJIgIgCIgKALIgBACQACAKALgGIABAAQAEgGgEAEQgBAAgBAAQAAAAAAABQAAAAAAAAQAAABABAAIgBAAIgFgGIABgDQAJgDACAGQABAKgLACIgLgEQgCgWAVAAIAHAJQAHAOgQAJQgNAHgNgHIgJAJQgFAJAJAEQAKABACgIQAAgGgEABQgKACAJABIAAACQgCAFgDgEIgCgEQAEgMALAKIAAAMIgGAEIgFABIgHgBgAt6q3IgEAAIABgHIADAAIAAgCIgCgGIACgPIACACIAEAUIAAACIgBABIABACQgEADgBAAgAg2rXIADACQACAFgBADQgGAMgIACgAOZrkIgBAAIgGABIAAgBIABgBIAEgGIgDgEQgGgCAAAKQADgEACADIAAADQgCACgFgBQgHgLANgEQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAHAJgBgLQAAgFgHgGQgKAEgEAMQgDAKAHACIgGAAIgCgFIAAgBIABgMQAGgKALgDIAEADIAGAGIACAFIgBAaQABAOAMAEIAEgCQAGgGgCgKQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAABIgBADIABACI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");
	this.shape_151.setTransform(247.2791,912.4531);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#F10000").s().p("ABCmVIBRIrIAcFeIgyD6gAhOq8IgoQVIgGCbIgyD6gAgiiVIAKpYIAxAAIgCAuIglMag");
	this.shape_152.setTransform(519.3913,196.6441,0.4698,0.4698);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#CC0000").s().p("AB9H0IgcleIhIuDIAyAAIBkXbgAhABbIAmsaIAaC4IAZQtIgxDIgAiuH0IAGibIBexGIgKJYIgMODg");
	this.shape_153.setTransform(521.7402,196.6441,0.4698,0.4698);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#A00000").s().p("AAyApIgyAAIgxAAIgyAAIAAhSQBjAIBkgIIAABSg");
	this.shape_154.setTransform(520.5658,159.4617,0.4698,0.4698);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#ED0000").s().p("AA9ImIgawtIgai4IACguIAyAAIBIODIhRorIA7SDgAg8LuIAMuDIAUDwIAnKTgAhcq8IAEgxIAyAAIheRGg");
	this.shape_155.setTransform(520.049,196.6441,0.4698,0.4698);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.rf(["#FF2A2A","#AF0000","#8B0000"],[0,0.369,0.894],-9.6,-49.4,0,-9.6,-49.4,128.1).s().p("AEqLgQk3AAjcjVQjejVAAkuQAAkuDejVQDGjAERgTQAdgCAfAAICdgPQgcAEgcAHIgBAAIgdAHIgVAHQjbBIiIC7QiODEgGD1QgGDzCHDMQCEDNDmBTIglALg");
	this.shape_156.setTransform(494.9867,111.7328,0.4698,0.4698);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.rf(["#FFBFBF","#E30000","#E30000","#8F0000"],[0.004,0.161,0.173,0.718],-4.3,-36,0,-4.3,-36,114.8).s().p("ADCLcIgngJQjlhUiGjNQiGjMAGj0QAFj0CPjEQCIi8DbhHIAVgHIAdgHIAAAAQAdgHAcgFIA/gFQgQADgPAMQgKAHgIAKQgtA0gkCGQg7DcAAE2QAAE2A7DcQAkCIBBBLQg5gDg5gKg");
	this.shape_157.setTransform(504.2009,111.8855,0.4698,0.4698);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.rf(["#FC3E3E","#E30000","#8F0000"],[0,0.38,0.718],-37.5,-23.6,0,-37.5,-23.6,105.2).s().p("AghLpQhAhMgkiIQg6jbAAk3QAAk1A6jcQAkiHAsg0QAJgKAJgHQAPgMAQgDIAHAAQAPADAPALQAKAHAKALQAsA0AkCHQA7DcAAE1QAAE3g7DbQgkCIhEBMIgeABIgggBg");
	this.shape_158.setTransform(520.9533,111.909,0.4698,0.4698);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.rf(["#FC3E3E","#E30000","#8F0000"],[0,0.38,0.718],-26,-14.8,0,-26,-14.8,88.6).s().p("AjJIeQA7jcAAk2QAAk2g7jcQgkiGgsg0QgQgSgQgIQgPgLgPgDIARAAIBMAIIAOACQAfAFAdAIQCaAqB7BzQCxCkAxDwQAxDwhdDkQhdDhjKCAQg9AnhIAXIgJgBQhIAShHAFQA+hLAiiAg");
	this.shape_159.setTransform(537.2458,111.862,0.4698,0.4698);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#990000").s().p("ACHIVQA7jbAAk3QAAk1g7jcQgkiGgsg1QgKgKgKgIQAQAIAQASQAsA0AkCGQA7DcAAE2QAAE2g7DcQgiCAg+BLIgUACQBEhNAkiIgAgtLpQhChMgkiIQg6jbAAk3QAAk1A6jcQAkiGAtg1QAJgJAJgHQAPgMARgDIAOAAQgQADgPAMQgJAHgJAJQgsA1gkCGQg6DcAAE1QAAE3A6DbQAkCIBABNIgOgBgADLLSQBIgXA9gnQDLiABdjhQBdjkgxjwQgxjwixikQh8hziagqQCiAoCCB4QCxCkAxDwQAxDxhdDjQhdDijLB/Qg9AnhIAYgAjNLSIgJAAQjlhTiGjNQiGjMAFj0QAGj0COjFQCJi7DbhIIAVgGIAdgHIABAAQAcgIAdgDIAPgCQgdAFgcAIIgBAAIgdAHIgVAGQjbBIiJC7QiODFgGD0QgFD0CGDMQCGDNDlBUIgGgBg");
	this.shape_160.setTransform(520.8574,111.8972,0.4698,0.4698);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.rf(["#FC3E3E","#E30000","#8F0000"],[0,0.38,0.718],-29.5,-14.6,0,-29.5,-14.6,87.1).s().p("AlILZQBIgYA9gnQDKiABdjhQBdjjgxjxQgxjwiwikQiBh4ijgoQgdgIgegFIgPgCICOANIAAAAQE4AADcDWQDdDVAAEtQAAEujdDVQjcDVk4AAg");
	this.shape_161.setTransform(546.4972,111.768,0.4698,0.4698);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#C57600").s().p("Aj9MFIAIAAIAHABIAnAJQA5AKA5ADIAPABQAfABAggBIATgCQBHgFBHgRIAKAAIAOAEIAXAGQANAIALAKQAdAeAAAqIAAAgQmZgQhih0gAiQuGIBLgCIAyAAQBrABBsAJIAdAdQAPAPAHATQhOAJhAAAQi8AAg9hQg");
	this.shape_162.setTransform(522.715,109.5014,0.4698,0.4698);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#E18700").s().p("AkQLdIABAAIAlgLQBiB0GaAQQAAAqgeAdQgdAdACAAQoDgFAajYgADcrTQoVhBAuidQBHgGBHgCQBSBrE2gkQAHARAAAUIAAAhQAAApgeAdQgLAMgNAHIAAAAg");
	this.shape_163.setTransform(521.792,111.8855,0.4698,0.4698);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FF9900").s().p("AhIO9QhGgFhGgMIgfgeQgdgdAAgpIAAghQAAgpAdgeQALgLANgHQgaDYIEAGQhIAMhIAFQgyADgyAAQgxAAgygDgACDrvIhMgIIgRAAIgLgBIgLABIg+AFIgPABIieAPIgCgBQgLgHgLgKQgdgdAAgqIAAggQAAgqAdgdIAegdQgvCcIVBBg");
	this.shape_164.setTransform(519.2974,112.5666,0.4698,0.4698);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#580000").s().p("AgYG6IAAtzIAxAAIAANzIgxAAg");
	this.shape_165.setTransform(520.601,46.223,0.4698,0.4698);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#F10000").s().p("ABCmVIBRIrIAcFeIgyD6gAhOq8IgoQVIgGCbIgyD6gAgiiVIAKpYIAxAAIgCAuIglMag");
	this.shape_166.setTransform(139.7413,196.6441,0.4698,0.4698);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#CC0000").s().p("AB9H0IgcleIhIuDIAyAAIBkXbgAhABbIAmsaIAaC4IAZQtIgxDIgAiuH0IAGibIBexGIgKJYIgMODg");
	this.shape_167.setTransform(142.0902,196.6441,0.4698,0.4698);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#ED0000").s().p("AA9ImIgawtIgai4IACguIAyAAIBIODIhRorIA7SDgAg8LuIAMuDIAUDwIAnKTgAhcq8IAEgxIAyAAIheRGg");
	this.shape_168.setTransform(140.399,196.6441,0.4698,0.4698);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#A00000").s().p("AAyApIgyAAIgxAAIgyAAIAAhSQBjAIBkgIIAABSg");
	this.shape_169.setTransform(140.9158,159.4617,0.4698,0.4698);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.rf(["#FF2A2A","#AF0000","#8B0000"],[0,0.369,0.894],-9.6,-49.4,0,-9.6,-49.4,128.1).s().p("AEqLgQk3AAjcjVQjejVAAkuQAAkuDejVQDGjAERgTQAdgCAfAAICdgPQgcAEgcAHIgBAAIgdAHIgVAHQjbBIiIC7QiODEgGD1QgGDzCHDMQCEDNDmBTIglALg");
	this.shape_170.setTransform(115.3367,111.7328,0.4698,0.4698);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.rf(["#FFBFBF","#E30000","#E30000","#8F0000"],[0.004,0.161,0.173,0.718],-4.2,-36,0,-4.2,-36,114.8).s().p("ADCLcIgngJQjlhUiGjNQiGjMAGj0QAFj0CPjEQCIi8DbhHIAVgHIAdgHIAAAAQAdgHAcgFIA/gFQgQADgPAMQgKAHgIAKQgtA0gkCGQg7DcAAE2QAAE2A7DcQAkCIBBBLQg5gDg5gKg");
	this.shape_171.setTransform(124.5509,111.8855,0.4698,0.4698);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.rf(["#FC3E3E","#E30000","#8F0000"],[0,0.38,0.718],-37.4,-23.6,0,-37.4,-23.6,105.2).s().p("AghLpQhAhMgkiIQg6jbAAk3QAAk1A6jcQAkiHAsg0QAJgKAJgHQAPgMAQgDIAHAAQAPADAPALQAKAHAKALQAsA0AkCHQA7DcAAE1QAAE3g7DbQgkCIhEBMIgeABIgggBg");
	this.shape_172.setTransform(141.3033,111.909,0.4698,0.4698);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.rf(["#FC3E3E","#E30000","#8F0000"],[0,0.38,0.718],-26,-14.7,0,-26,-14.7,88.6).s().p("AjJIeQA7jcAAk2QAAk2g7jcQgkiGgsg0QgQgSgQgIQgPgLgPgDIARAAIBMAIIAOACQAfAFAdAIQCaAqB7BzQCxCkAxDwQAxDwhdDkQhdDhjKCAQg9AnhIAXIgJgBQhIAShHAFQA+hLAiiAg");
	this.shape_173.setTransform(157.5958,111.862,0.4698,0.4698);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#990000").s().p("ACHIVQA7jbAAk3QAAk1g7jcQgkiGgsg1QgKgKgKgIQAQAIAQASQAsA0AkCGQA7DcAAE2QAAE2g7DcQgiCAg+BLIgUACQBEhNAkiIgAgtLpQhChMgkiIQg6jbAAk3QAAk1A6jcQAkiGAtg1QAJgJAJgHQAPgMARgDIAOAAQgQADgPAMQgJAHgJAJQgsA1gkCGQg6DcAAE1QAAE3A6DbQAkCIBABNIgOgBgADLLSQBIgXA9gnQDLiABdjhQBdjkgxjwQgxjwixikQh8hziagqQCiAoCCB4QCxCkAxDwQAxDxhdDjQhdDijLB/Qg9AnhIAYgAjNLSIgJAAQjlhTiGjNQiGjMAFj0QAGj0COjFQCJi7DbhIIAVgGIAdgHIABAAQAcgIAdgDIAPgCQgdAFgcAIIgBAAIgdAHIgVAGQjbBIiJC7QiODFgGD0QgFD0CGDMQCGDNDlBUIgGgBg");
	this.shape_174.setTransform(141.2074,111.8972,0.4698,0.4698);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.rf(["#FC3E3E","#E30000","#8F0000"],[0,0.38,0.718],-29.5,-14.5,0,-29.5,-14.5,87.1).s().p("AlILZQBIgYA9gnQDKiABdjhQBdjjgxjxQgxjwiwikQiBh4ijgoQgdgIgegFIgPgCICOANIAAAAQE4AADcDWQDdDVAAEtQAAEujdDVQjcDVk4AAg");
	this.shape_175.setTransform(166.8472,111.768,0.4698,0.4698);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#C57600").s().p("Aj9MFIAIAAIAHABIAnAJQA5AKA5ADIAPABQAfABAggBIATgCQBHgFBHgRIAKAAIAOAEIAXAGQANAIALAKQAdAeAAAqIAAAgQmZgQhih0gAiQuGIBLgCIAyAAQBrABBsAJIAdAdQAPAPAHATQhOAJhAAAQi8AAg9hQg");
	this.shape_176.setTransform(143.065,109.5014,0.4698,0.4698);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#E18700").s().p("AkQLdIABAAIAlgLQBiB0GaAQQAAAqgeAdQgdAdACAAQoDgFAajYgADcrTQoVhBAuidQBHgGBHgCQBSBrE2gkQAHARAAAUIAAAhQAAApgeAdQgLAMgNAHIAAAAg");
	this.shape_177.setTransform(142.142,111.8855,0.4698,0.4698);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FF9900").s().p("AhIO9QhGgFhGgMIgfgeQgdgdAAgpIAAghQAAgpAdgeQALgLANgHQgaDYIEAGQhIAMhIAFQgyADgyAAQgxAAgygDgACDrvIhMgIIgRAAIgLgBIgLABIg+AFIgPABIieAPIgCgBQgLgHgLgKQgdgdAAgqIAAggQAAgqAdgdIAegdQgvCcIVBBg");
	this.shape_178.setTransform(139.6474,112.5666,0.4698,0.4698);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#580000").s().p("AgYG6IAAtzIAxAAIAANzIgxAAg");
	this.shape_179.setTransform(140.951,46.223,0.4698,0.4698);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#860000").s().p("ApHLuIGyAAQBlAAgBhIIAAjaQABhKhlABIjHAAIAAhJIK7AAIAABJIjJAAQhkgBAABKIAADaQAABIBkAAIGyAAQj6DIlOAAQlMAAj7jIgAEsJdQgUAAgPgLQgOgLAAgOQAAgPAOgLQAPgLAUAAIEsAAQAVAAAOALQAPALABAPQgBAOgPALQgOALgVAAgApWJdQgVAAgPgLQgOgLAAgOQAAgPAOgLQAPgLAVAAIEsAAQAVAAAOALQAPALAAAPQAAAOgPALQgOALgVAAgAu1AAQAAk8C1jzIAUACIDIAAIAABIIjIAAQgqAAgdAVQgdAWAAAeQAAAeAdAVQAdAVAqABIDIAAIAABIIjIAAQhkAAAABJIAADZQAABJBkAAIDIAAIAABIIjIAAQgqAAgdAWQgdAVAAAeQAAAfAdAUQAdAWAqAAIDIAAIAABJIjIAAQhTgBgOAzQhojEAAjxgALuGDIjHAAIAAhJIDHAAQAqAAAdgWQAdgUAAgfQAAgegdgVQgdgWgqAAIjHAAIAAhIIDHAAQBkAAAAhJIAAjZQAAhJhkAAIjHAAIAAhIIDHAAQAqgBAdgVQAdgVAAgeQAAgegdgWQgdgVgqAAIjHAAIAAhIIDHAAIATgCQC1DzAAE8QAADwhnDEQgPgxhSAAgAlcCoIAAhIIDHAAQBlAAgBhJIAAjZQABhJhlAAIjHAAIAAhIIDHAAQAqgBAdgVQAegVgBgeQABgegegWQgdgVgqAAIjHAAIAAhIIDHAAQAqgBAdgVQAegVgBgfQABgdgegWQgdgVgqAAIjHAAIAAhJQAAgegdgVQgYgRgfgEQDEhlDsAAQDtAADFBlQgfAEgXARQgdAVAAAeIAABJIjJAAQgpAAgdAVQgeAWAAAdQAAAfAeAVQAdAVApABIDJAAIAABIIjJAAQgpAAgdAVQgeAWAAAeQAAAeAeAVQAdAVApABIDJAAIAABIIjJAAQhkAAAABJIAADZQAABJBkAAIDJAAIAABIgAEsgxQgUABgPgLQgOgLAAgPQAAgPAOgLQAPgLAUAAIEsAAQAVAAAOALQAPALABAPQgBAPgPALQgOALgVgBgApWgxQgVABgPgLQgOgLAAgPQAAgPAOgLQAPgLAVAAIEsAAQAVAAAOALQAPALAAAPQAAAPgPALQgOALgVgBgAInq/IAAhIQAsAhArAngAp9q/QArgoAughIAABJg");
	this.shape_180.setTransform(332.3387,166.3308,0.949,0.949);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#CC0000").s().p("ACWMfQhkAAAAhIIAAjaQAAhJBkAAIDIAAIAAhJIq7AAIAABJIDIAAQBkAAAABJIAADaQAABIhkAAImzAAQgtgkgqgqIgDgCIgDgEQhohqhBh6QAOgzBTAAIDIAAIAAhJIjIAAQgpAAgegVQgcgVAAgfQAAgeAcgVQAegVApAAIDIAAIAAhJIjIAAQhjAAAAhJIAAjZQAAhJBjAAIDIAAIAAhIIjIAAQgpAAgegWQgcgVAAgeQAAgeAcgWQAegVApAAIDIAAIAAhIIjIAAIgTgBQArg7A2g2IAhggIBZAAIAAhJQA5goA7gfQAfADAYARQAdAVAAAeIAABJIDIAAQApAAAdAVQAeAWAAAeQAAAegeAVQgdAWgpAAIjIAAIAABIIDIAAQApAAAdAVQAeAWAAAeQAAAegeAVQgdAWgpAAIjIAAIAABIIDIAAQBkAAAABJIAADZQAABJhkAAIjIAAIAABJIK7AAIAAhJIjIAAQhkAAAAhJIAAjZQAAhJBkAAIDIAAIAAhIIjIAAQgqAAgdgWQgdgVAAgeQAAgeAdgWQAdgVAqAAIDIAAIAAhIIjIAAQgqAAgdgWQgdgVAAgeQAAgeAdgWQAdgVAqAAIDIAAIAAhJQAAgeAdgVQAXgRAfgDQA8AfA5ApIAAABIAABHIBXAAIABAAIAIAIIAZAYQA2A2AsA7IgTABIjIAAIAABIIDIAAQApAAAdAVQAeAWAAAeQAAAegeAVQgdAWgpAAIjIAAIAABIIDIAAQBjAAABBJIAADZQgBBJhjAAIjIAAIAABJIDIAAQApAAAdAVQAeAVAAAeQAAAfgeAVQgdAVgpAAIjIAAIAABJIDIAAQBSAAAOAxQhCB/htBtQgrAqgtAkgAEJJQQgPALAAAPQAAAPAPAKQAPALAUAAIEsAAQAVAAAOgLQAPgKAAgPQAAgPgPgLQgOgLgVAAIksAAQgUAAgPALgAp6JQQgPALAAAPQAAAPAPAKQAPALAVAAIErAAQAVAAAPgLQAPgKAAgPQAAgPgPgLQgPgLgVAAIkrAAQgVAAgPALgAEJg+QgPALAAAPQAAAPAPALQAPAKAUAAIEsAAQAVAAAOgKQAPgLAAgPQAAgPgPgLQgOgKgVAAIksAAQgUAAgPAKgAp6g+QgPALAAAPQAAAPAPALQAPAKAVAAIErAAQAVAAAPgKQAPgLAAgPQAAgPgPgLQgPgKgVAAIkrAAQgVAAgPAKg");
	this.shape_181.setTransform(332.3861,161.6572,0.949,0.949);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#A30000").s().p("AqEM8QgygogvguIgCgDIgEgEQhzh1hHiHQhzjaAAkJQAAldDIkMQAwhAA7g8QASgSATgRQAwgtAzgkQA+gtBCgiQDYhwEFAAQEGAADZBwQBDAjA+AtQAyAlAvArIAJAJIAbAaQA8A8AwBAQDIEMAAFdQAAEIhyDaQhJCLh5B5QguAugyAoQkVDdlwAAQlvAAkVjdgAmwtQQg8Afg4ApQguAggsApIghAfQg2A2grA7Qi1DyAAE9QAADwBoDFQBAB6BoBqIAEAEIACACQAqArAuAjQD6DJFNAAQFNAAD7jJQAtgjAqgrQBthtBDh+QBnjFAAjvQAAk8i1jzQgsg7g2g2IgZgXIgIgIIAAAAQgrgngtghIAAAAQg4gpg9ggQjEhljtAAQjtAAjDBlg");
	this.shape_182.setTransform(332.3624,166.3783,0.949,0.949);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#EB9495").s().p("Au1CzQmJhJAAhqQAAhoGJhJQGKhKIrAAQIsAAGJBKQGKBJAABoQAABqmKBJQmJBJosAAQorAAmKhJg");
	this.shape_183.setTransform(230.025,1062.475);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#D4D4D4").s().p("AgNgCQA3AFg3AAg");
	this.shape_184.setTransform(-714.9375,513.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.instance_9},{t:this.instance_8},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_7},{t:this.jenner},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},1).to({state:[{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]},1).wait(1));

	// words_CN
	this.instance_13 = new lib.Symbol28();
	this.instance_13.setTransform(333.9,593.65,0.8779,0.8779,0,0,0,296.1,342.7);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(2).to({_off:false},0).wait(1));

	// Card_BG
	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#9EAB7B").s().p("EgtlBUAMAAAin/MBbLAAAMAAACn/g");
	this.shape_185.setTransform(322.025,569.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFBBCC").s().p("Egt9BVfMAAAiq9MBb7AAAMAAACq9g");
	this.shape_186.setTransform(322.375,577.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-396.3,466.9,1267.1,815.6);
// library properties:
lib.properties = {
	id: 'E75A3BCDBF8673409C37A4C6A47D6458',
	width: 640,
	height: 1136,
	fps: 24,
	color: "#9EAB7B",
	opacity: 0.00,
	manifest: [],
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