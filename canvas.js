
var canvasMovie = {
	canvasDivName:"myCanvas",//canvas所在div的id
	ctxType:"2d",//画笔类型
	canvas:null,//获取canvas
	ctx:null,//获取画笔
	pageWidth:0,//画布宽
	pageHeight:0,//画布高
	defaultTime:1000,//动画速度，默认1000ms
	init : function (canvasName, ctxType, width, height, defaultTime){//canvas所在div的id，画笔类型，画布宽度，画布高度，动画速度
		this.pageWidth = width;
		this.pageHeight = height;
		if(defaultTime != undefined){//若未设置，默认速度为1000ms
			this.defaultTime = defaultTime;
		}
		//在指定的div内添加canvas，并添加动画控制开关
		$("#"+canvasName).before("<div><div id='userCtrl' class='sun-button-blue'>手动</div><div id='start' class='sun-button-blue'>开始</div><div id='pause' class='sun-button-blue'>停止</div><div id='speedUp' class='sun-button-blue'>加速</div><div id='speedDown' class='sun-button-blue'>减速</div></div>");
		$("#"+canvasName).css("width",this.pageWidth);
		$("#"+canvasName).css("height",this.pageHeight);
		$("#"+canvasName).html("<canvas id='myCanvasDiv$myCanvas' width='"+this.pageWidth+"' height='"+this.pageHeight+"' style='border:1px solid #d3d3d3;'> Your browser does not support the HTML5 canvas tag. </canvas>");
		//实际初始化canvas操作
		this.canvasDivName = canvasName;
		this.canvas = document.getElementById("myCanvasDiv$myCanvas");
		this.ctxType = ctxType;
		console.debug(this.canvas);
		console.debug(this.ctxType);
		this.ctx = this.canvas.getContext(this.ctxType);
		this.ctx.beginPath();
		this.ctx.moveTo(Math.round(Math.random()*this.pageWidth),Math.round(Math.random()*this.pageHeight));
		
		//画图事件
		var drawInterval;
		//当前动画状态位（是否已经开始执行动画）
		var isRun = false;
		//默认速度
		var defaultTime = this.defaultTime;
		//具体画图操作函数
		var dodrawFunc = this.dodraw;
		
		//开始绑定事件
		$("#start").unbind().click(function(){
			if(!isRun){
				drawInterval = setInterval(dodrawFunc,defaultTime); 
			}
			isRun = true;
		});
		//暂停
		$("#pause").unbind().click(function(){
			if(isRun){
				window.clearInterval(drawInterval); 
			}
			isRun = false;
		});
		//手动
		$("#userCtrl").unbind().click(function(){
			setTimeout("dodraw()",100); 
		});
		//加速
		$("#speedUp").unbind().click(function(){
		
		});
		//减速
		$("#speedDown").unbind().click(function(){
		
		});
	},
	dodraw : function(){
		alert("具体的画图效果，您未实现，请注册");
	},
	regDrawFunction : function(dodrawFunc){
		this.dodraw = dodrawFunc;
	}
};
