/*----------------------------------------*\
  256^3 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2020-02-06 23:31:08
  @Last Modified time: 2020-02-06 23:42:04
\*----------------------------------------*/

AppManager.ready(function(){
	InteractionHelper.onHide( eventHandler);
});

function eventHandler(event){
    document.querySelector("#img1").classList.add("hide");
    document.querySelector("#img2").classList.remove("hide");
	console.log(event);
	
     InteractionHelper.onBeforePrint( eventHandler2);
}

function eventHandler2(event){
    document.querySelector("#img1").classList.add("hide");
    document.querySelector("#img2").classList.add("hide");
    document.querySelector("#img3").classList.remove("hide");
	console.log(event);
	AppManager.levelComplete();
}