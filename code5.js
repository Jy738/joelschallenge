gdjs.winCode = {};
gdjs.winCode.localVariables = [];
gdjs.winCode.GDNewSpriteObjects1= [];
gdjs.winCode.GDNewSpriteObjects2= [];
gdjs.winCode.GDNewSprite2Objects1= [];
gdjs.winCode.GDNewSprite2Objects2= [];
gdjs.winCode.GDNewSprite3Objects1= [];
gdjs.winCode.GDNewSprite3Objects2= [];
gdjs.winCode.GDNewSprite4Objects1= [];
gdjs.winCode.GDNewSprite4Objects2= [];
gdjs.winCode.GDNewSprite7Objects1= [];
gdjs.winCode.GDNewSprite7Objects2= [];


gdjs.winCode.mapOfGDgdjs_9546winCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.winCode.GDNewSprite3Objects1});
gdjs.winCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "oyvey2_temp.mp3", true, 100, 1);
}{gdjs.evtsExt__MousePointerLock__ExitPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.winCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.winCode.mapOfGDgdjs_9546winCode_9546GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "cutscene1");
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.winCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.winCode.GDNewSpriteObjects1.length = 0;
gdjs.winCode.GDNewSpriteObjects2.length = 0;
gdjs.winCode.GDNewSprite2Objects1.length = 0;
gdjs.winCode.GDNewSprite2Objects2.length = 0;
gdjs.winCode.GDNewSprite3Objects1.length = 0;
gdjs.winCode.GDNewSprite3Objects2.length = 0;
gdjs.winCode.GDNewSprite4Objects1.length = 0;
gdjs.winCode.GDNewSprite4Objects2.length = 0;
gdjs.winCode.GDNewSprite7Objects1.length = 0;
gdjs.winCode.GDNewSprite7Objects2.length = 0;

gdjs.winCode.eventsList0(runtimeScene);
gdjs.winCode.GDNewSpriteObjects1.length = 0;
gdjs.winCode.GDNewSpriteObjects2.length = 0;
gdjs.winCode.GDNewSprite2Objects1.length = 0;
gdjs.winCode.GDNewSprite2Objects2.length = 0;
gdjs.winCode.GDNewSprite3Objects1.length = 0;
gdjs.winCode.GDNewSprite3Objects2.length = 0;
gdjs.winCode.GDNewSprite4Objects1.length = 0;
gdjs.winCode.GDNewSprite4Objects2.length = 0;
gdjs.winCode.GDNewSprite7Objects1.length = 0;
gdjs.winCode.GDNewSprite7Objects2.length = 0;


return;

}

gdjs['winCode'] = gdjs.winCode;
