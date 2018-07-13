
var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
    container: 'portfolio_graph',
    width: width,
    height: height
});

var layer = new Konva.Layer();
var groupEth = new Konva.Group({
    x: stage.getWidth() / 2,
    y: stage.getHeight() / 2,
});

var eth = new Konva.Arc({
    id: "eth",
    innerRadius: 100,
    outerRadius: 200,
    angle: 150,
    fill: 'yellow',
    stroke: 'black',
    strokeWidth: 1
});
var groupBtc = new Konva.Group({
    x: stage.getWidth() / 2,
    y: stage.getHeight() / 2,
});
var btc = new Konva.Arc({
    id: "btc",
    rotation: -100,
    innerRadius: 100,
    outerRadius: 200,
    angle: 100,
    fill: 'green',
    stroke: 'black',
    strokeWidth: 1
});
var ltc = new Konva.Arc({
    id: "ltc",
    x: stage.getWidth() / 2,
    y: stage.getHeight() / 2,
    rotation: -200,
    innerRadius: 100,
    outerRadius: 200,
    angle: 100,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 1
});
var EthTxt = new Konva.Text({
    x: 50,
    y: 130,
    rotation: 165,
    text: 'Ethereum',
    fontSize: 10,
    fontFamily: 'Calibri',
    fill: 'green'
});
var angle = 100;
var radian = angle * 0.0174532925;
var x = radian *  Math.sin(radian);
var y = radian *  Math.cos(radian); 
var BtcTxt = new Konva.Text({
     x: 100,
     y: 100,
    //rotation: -150,
    text: 'Bitcoin',
    fontSize: 10,
    fontFamily: 'Calibri',
    fill: 'red'
});
groupEth.add(eth);
groupEth.add(EthTxt);
groupBtc.add(btc);
groupBtc.add(BtcTxt);

eth.on('click', function () {
    let ley = layer.findOne('#eth');
    console.log(eth.x())
});
btc.on('click', function () {
    let ley = layer.findOne('#btc');
    btc.x(510);
    console.log(btc.x())
});
ltc.on('click', function () {
    let ley = layer.findOne('#ltc');
    console.log(ltc.x())
});

// add the shape to the layer
layer.add(groupEth);
layer.add(groupBtc);
layer.add(ltc);



// add the layer to the stage
stage.add(layer);
