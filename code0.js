gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.GDNewSpriteObjects1= [];
gdjs.menuCode.GDNewSpriteObjects2= [];
gdjs.menuCode.GDNewSprite2Objects1= [];
gdjs.menuCode.GDNewSprite2Objects2= [];
gdjs.menuCode.GDNewSprite3Objects1= [];
gdjs.menuCode.GDNewSprite3Objects2= [];
gdjs.menuCode.GDNewTextObjects1= [];
gdjs.menuCode.GDNewTextObjects2= [];
gdjs.menuCode.GDNewSprite4Objects1= [];
gdjs.menuCode.GDNewSprite4Objects2= [];
gdjs.menuCode.GDNewSprite5Objects1= [];
gdjs.menuCode.GDNewSprite5Objects2= [];
gdjs.menuCode.GDNewSprite6Objects1= [];
gdjs.menuCode.GDNewSprite6Objects2= [];
gdjs.menuCode.GDNewTiledSpriteObjects1= [];
gdjs.menuCode.GDNewTiledSpriteObjects2= [];
gdjs.menuCode.GDNewText2Objects1= [];
gdjs.menuCode.GDNewText2Objects2= [];
gdjs.menuCode.GDNewSprite7Objects1= [];
gdjs.menuCode.GDNewSprite7Objects2= [];


gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.menuCode.GDNewSprite3Objects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDNewSprite7Objects1Objects = Hashtable.newFrom({"NewSprite7": gdjs.menuCode.GDNewSprite7Objects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.menuCode.GDNewTextObjects1});
gdjs.menuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.menuCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "cutscene1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.menuCode.GDNewSprite7Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDNewSprite7Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "infinite", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.menuCode.GDNewTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDNewTextObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.menuCode.GDNewTextObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDNewTextObjects1[i].hide();
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "oyvey2_temp.mp3", true, 100, 1);
}{for(var i = 0, len = gdjs.menuCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDNewTextObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDNewSpriteObjects1.length = 0;
gdjs.menuCode.GDNewSpriteObjects2.length = 0;
gdjs.menuCode.GDNewSprite2Objects1.length = 0;
gdjs.menuCode.GDNewSprite2Objects2.length = 0;
gdjs.menuCode.GDNewSprite3Objects1.length = 0;
gdjs.menuCode.GDNewSprite3Objects2.length = 0;
gdjs.menuCode.GDNewTextObjects1.length = 0;
gdjs.menuCode.GDNewTextObjects2.length = 0;
gdjs.menuCode.GDNewSprite4Objects1.length = 0;
gdjs.menuCode.GDNewSprite4Objects2.length = 0;
gdjs.menuCode.GDNewSprite5Objects1.length = 0;
gdjs.menuCode.GDNewSprite5Objects2.length = 0;
gdjs.menuCode.GDNewSprite6Objects1.length = 0;
gdjs.menuCode.GDNewSprite6Objects2.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.menuCode.GDNewText2Objects1.length = 0;
gdjs.menuCode.GDNewText2Objects2.length = 0;
gdjs.menuCode.GDNewSprite7Objects1.length = 0;
gdjs.menuCode.GDNewSprite7Objects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);
gdjs.menuCode.GDNewSpriteObjects1.length = 0;
gdjs.menuCode.GDNewSpriteObjects2.length = 0;
gdjs.menuCode.GDNewSprite2Objects1.length = 0;
gdjs.menuCode.GDNewSprite2Objects2.length = 0;
gdjs.menuCode.GDNewSprite3Objects1.length = 0;
gdjs.menuCode.GDNewSprite3Objects2.length = 0;
gdjs.menuCode.GDNewTextObjects1.length = 0;
gdjs.menuCode.GDNewTextObjects2.length = 0;
gdjs.menuCode.GDNewSprite4Objects1.length = 0;
gdjs.menuCode.GDNewSprite4Objects2.length = 0;
gdjs.menuCode.GDNewSprite5Objects1.length = 0;
gdjs.menuCode.GDNewSprite5Objects2.length = 0;
gdjs.menuCode.GDNewSprite6Objects1.length = 0;
gdjs.menuCode.GDNewSprite6Objects2.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.menuCode.GDNewText2Objects1.length = 0;
gdjs.menuCode.GDNewText2Objects2.length = 0;
gdjs.menuCode.GDNewSprite7Objects1.length = 0;
gdjs.menuCode.GDNewSprite7Objects2.length = 0;


return;

}

gdjs['menuCode'] = gdjs.menuCode;
