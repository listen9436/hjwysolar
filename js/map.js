/**
 * Created by Administrator on 2017/3/16.
 */
//创建和初始化地图函数：
function initMap(){
    createMap();//创建地图
    setMapEvent();//设置地图事件
      addMapControl();//向地图添加控件
    addMapOverlay();//向地图添加覆盖物
}
function createMap(){
    map = new BMap.Map("map");
    map.centerAndZoom(new BMap.Point(116.494633,40.014676),16);
}
function setMapEvent(){
    map.enableKeyboard();
    map.enableDragging();
    map.enableDoubleClickZoom()
}
function addClickHandler(target,window){
    target.addEventListener("click",function(){
        target.openInfoWindow(window);
    });
}
function addMapOverlay(){
    var markers = [
        {content:"恒基伟业",imageOffset: {width:0,height:0},position:{lat:40.014676,lng:116.494633}}
    ];
    for(var index = 0; index < markers.length; index++ ){
        var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
        var marker = new BMap.Marker(point,{icon:new BMap.Icon("img/map_icon.png",new BMap.Size(100,70),{
            imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
        })});
        var opts = {
            width: 200,
            enableMessage: false
        };
        var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
        addClickHandler(marker,infoWindow);
        map.addOverlay(marker);
        marker.setAnimation(BMAP_ANIMATION_BOUNCE);//跳动动画
    };
}
//向地图添加控件
function addMapControl(){
    var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
    map.addControl(navControl);
}
var map;
initMap();