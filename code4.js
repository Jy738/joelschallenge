gdjs.gameoverCode = {};
gdjs.gameoverCode.localVariables = [];
gdjs.gameoverCode.GDNewSpriteObjects1= [];
gdjs.gameoverCode.GDNewSpriteObjects2= [];
gdjs.gameoverCode.GDNewSprite2Objects1= [];
gdjs.gameoverCode.GDNewSprite2Objects2= [];
gdjs.gameoverCode.GDNewSprite3Objects1= [];
gdjs.gameoverCode.GDNewSprite3Objects2= [];
gdjs.gameoverCode.GDNewSprite4Objects1= [];
gdjs.gameoverCode.GDNewSprite4Objects2= [];
gdjs.gameoverCode.GDNewSprite7Objects1= [];
gdjs.gameoverCode.GDNewSprite7Objects2= [];
gdjs.gameoverCode.GDNew3DBox13Objects1= [];
gdjs.gameoverCode.GDNew3DBox13Objects2= [];
gdjs.gameoverCode.GDNew3DBox12Objects1= [];
gdjs.gameoverCode.GDNew3DBox12Objects2= [];


gdjs.gameoverCode.mapOfGDgdjs_9546gameoverCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.gameoverCode.GDNewSprite3Objects1});
gdjs.gameoverCode.mapOfGDgdjs_9546gameoverCode_9546GDNewSprite7Objects1Objects = Hashtable.newFrom({"NewSprite7": gdjs.gameoverCode.GDNewSprite7Objects1});
gdjs.gameoverCode.eventsList0 = function(runtimeScene) {

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

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.gameoverCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_9546gameoverCode_9546GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "cutscene1");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.gameoverCode.GDNewSprite7Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_9546gameoverCode_9546GDNewSprite7Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "infinite", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.gameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameoverCode.GDNewSpriteObjects1.length = 0;
gdjs.gameoverCode.GDNewSpriteObjects2.length = 0;
gdjs.gameoverCode.GDNewSprite2Objects1.length = 0;
gdjs.gameoverCode.GDNewSprite2Objects2.length = 0;
gdjs.gameoverCode.GDNewSprite3Objects1.length = 0;
gdjs.gameoverCode.GDNewSprite3Objects2.length = 0;
gdjs.gameoverCode.GDNewSprite4Objects1.length = 0;
gdjs.gameoverCode.GDNewSprite4Objects2.length = 0;
gdjs.gameoverCode.GDNewSprite7Objects1.length = 0;
gdjs.gameoverCode.GDNewSprite7Objects2.length = 0;
gdjs.gameoverCode.GDNew3DBox13Objects1.length = 0;
gdjs.gameoverCode.GDNew3DBox13Objects2.length = 0;
gdjs.gameoverCode.GDNew3DBox12Objects1.length = 0;
gdjs.gameoverCode.GDNew3DBox12Objects2.length = 0;

gdjs.gameoverCode.eventsList0(runtimeScene);
gdjs.gameoverCode.GDNewSpriteObjects1.length = 0;
gdjs.gameoverCode.GDNewSpriteObjects2.length = 0;
gdjs.gameoverCode.GDNewSprite2Objects1.length = 0;
gdjs.gameoverCode.GDNewSprite2Objects2.length = 0;
gdjs.gameoverCode.GDNewSprite3Objects1.length = 0;
gdjs.gameoverCode.GDNewSprite3Objects2.length = 0;
gdjs.gameoverCode.GDNewSprite4Objects1.length = 0;
gdjs.gameoverCode.GDNewSprite4Objects2.length = 0;
gdjs.gameoverCode.GDNewSprite7Objects1.length = 0;
gdjs.gameoverCode.GDNewSprite7Objects2.length = 0;
gdjs.gameoverCode.GDNew3DBox13Objects1.length = 0;
gdjs.gameoverCode.GDNew3DBox13Objects2.length = 0;
gdjs.gameoverCode.GDNew3DBox12Objects1.length = 0;
gdjs.gameoverCode.GDNew3DBox12Objects2.length = 0;


return;

}

gdjs['gameoverCode'] = gdjs.gameoverCode;
