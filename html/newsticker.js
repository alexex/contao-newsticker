﻿var Ticker=new Class({timer:null,initialize:function(d,b){this.setOptions(b);this.el=$(d);this.items=this.el.getElements("li");var a=0;var c=0;if(this.options.direction.toLowerCase()=="horizontal"){c=this.el.getSize().y;this.items.each(function(e,f){a+=e.getSize().x})}else{a=this.el.getSize().x;this.items.each(function(e,f){c+=e.getSize().y})}this.el.setStyles({position:"absolute",top:0,left:0,width:a,height:c});if(Fx.Morph){this.fx=new Fx.Morph(this.el,{duration:this.options.speed,onComplete:function(){var e=(this.current==0)?this.items.length:this.current;this.items[e-1].injectInside(this.el);this.el.setStyles({left:0,top:0})}.bind(this)})}else{this.fx=new Fx.Styles(this.el,{duration:this.options.speed,onComplete:function(){var e=(this.current==0)?this.items.length:this.current;this.items[e-1].injectInside(this.el);this.el.setStyles({left:0,top:0})}.bind(this)})}this.current=0;this.timer=this.next.bind(this).delay(this.options.delay+this.options.speed)},pause:function(){$clear(this.timer);this.timer=null},resume:function(){if(this.timer==null){this.next()}},next:function(){this.current++;if(this.current>=this.items.length){this.current=0}var a=this.items[this.current];this.fx.start({top:-a.offsetTop,left:-a.offsetLeft}).chain(function(){this.element.getElements("li").each(function(e,d,c){var b=e.className;b=b.replace(/odd|even|first|last/g,"").clean();if(d==0){b+=" first"}if(d>=(c.length-1)){b+=" last"}b+=(d%2==0)?" even":" odd";e.className=b.trim()})});this.timer=this.next.bind(this).delay(this.options.delay+this.options.speed)}});Ticker.implement(new Options);