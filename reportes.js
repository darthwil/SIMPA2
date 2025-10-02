import { refreshPredios } from "./predios.js";

export function initReportesPanel(map){
  const panel=document.getElementById("panel-reportes");
  const btn=document.getElementById("btn-reportes");
  const close=document.getElementById("close-reportes");
  const chkVer=document.getElementById("chk-reportes-ver");
  const chkTabla=document.getElementById("chk-reportes-tabla");

  btn.addEventListener("click",()=>panel.style.display="block");
  close.addEventListener("click",()=>{
    panel.style.display="none";
    chkVer.checked=false;
    chkTabla.checked=false;
    map.setLayoutProperty("l_predios-fill","visibility","none");
    document.getElementById("panel-atributos").style.display="none";
  });

  chkVer.addEventListener("change",async e=>{
    const vis=e.target.checked?"visible":"none";
    map.setLayoutProperty("l_predios-fill","visibility",vis);
    if(e.target.checked) await refreshPredios(map);
  });

  chkTabla.addEventListener("change",async e=>{
    const panelAtrib=document.getElementById("panel-atributos");
    panelAtrib.style.display=e.target.checked?"block":"none";
    if(e.target.checked) await refreshPredios(map);
  });
}
