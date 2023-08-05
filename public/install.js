'use strict';

let deferredInstallPrompt=null;
const installButton=document.getElementById("butinstall");
installButton.addEventListener("click",installPWA);

window.addEventListener('beforeinstallprompt',saveBeforeInstallPrompt);
function saveBeforeInstallPrompt(evt){
    deferredInstallPrompt=evt;
    installButton.removeAttribute("hidden");
}
function installPWA(evt){
deferredInstallPrompt.prompt();
evt.srcElement.setAttribute('hidden',true);
deferredInstallPrompt.userChoice.then((choice)=>{
    if(choice.outcome==="accepted"){
        console.log("aceptado")
    }else{
        console.log("no aceptado")
    }
    deferredInstallPrompt=null;
})
}

window.addEventListener('appinstalled',logAppInstalled);

function logAppInstalled(evt){
    console.log("app instalada")

}