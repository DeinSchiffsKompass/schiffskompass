/* Kabinen-Finder: Empfehlung als PDF (ohne externe Bibliothek). Erzeugt ein A4-PDF mit Standardschrift Helvetica. */
(function(){
var WR=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 278, 278, 355, 556, 556, 889, 667, 191, 333, 333, 389, 584, 278, 333, 278, 278, 556, 556, 556, 556, 556, 556, 556, 556, 556, 556, 278, 278, 584, 584, 584, 556, 1015, 667, 667, 722, 722, 667, 611, 778, 722, 278, 500, 667, 556, 833, 722, 778, 667, 778, 722, 667, 611, 722, 667, 944, 667, 667, 611, 278, 278, 278, 469, 556, 333, 556, 556, 500, 556, 556, 278, 556, 556, 222, 222, 500, 222, 833, 556, 556, 556, 556, 333, 500, 278, 556, 500, 722, 500, 500, 500, 334, 260, 334, 584, 761, 556, 0, 222, 556, 333, 1000, 556, 556, 333, 1000, 667, 333, 1000, 0, 611, 0, 0, 222, 222, 333, 333, 350, 556, 1000, 333, 1000, 500, 333, 944, 0, 500, 667, 278, 333, 556, 556, 556, 556, 260, 556, 333, 737, 370, 556, 584, 333, 737, 333, 400, 584, 333, 333, 333, 556, 537, 278, 333, 333, 365, 556, 834, 834, 834, 611, 667, 667, 667, 667, 667, 667, 1000, 722, 667, 667, 667, 667, 278, 278, 278, 278, 722, 722, 778, 778, 778, 778, 778, 584, 778, 722, 722, 722, 722, 667, 667, 611, 556, 556, 556, 556, 556, 556, 889, 500, 556, 556, 556, 556, 278, 278, 278, 278, 556, 556, 556, 556, 556, 556, 556, 584, 611, 556, 556, 556, 556, 500, 556, 500],WB=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 278, 333, 474, 556, 556, 889, 722, 238, 333, 333, 389, 584, 278, 333, 278, 278, 556, 556, 556, 556, 556, 556, 556, 556, 556, 556, 333, 333, 584, 584, 584, 611, 975, 722, 722, 722, 722, 667, 611, 778, 722, 278, 556, 722, 611, 833, 722, 778, 667, 778, 722, 667, 611, 722, 667, 944, 667, 667, 611, 333, 278, 333, 584, 556, 333, 556, 611, 556, 611, 556, 333, 611, 611, 278, 278, 556, 278, 889, 611, 611, 611, 611, 389, 556, 333, 611, 556, 778, 556, 556, 500, 389, 280, 389, 584, 761, 556, 0, 278, 556, 500, 1000, 556, 556, 333, 1000, 667, 333, 1000, 0, 611, 0, 0, 278, 278, 500, 500, 350, 556, 1000, 333, 1000, 556, 333, 944, 0, 500, 667, 278, 333, 556, 556, 556, 556, 280, 556, 333, 737, 370, 556, 584, 333, 737, 333, 400, 584, 333, 333, 333, 611, 556, 278, 333, 333, 365, 556, 834, 834, 834, 611, 722, 722, 722, 722, 722, 722, 1000, 722, 667, 667, 667, 667, 278, 278, 278, 278, 722, 722, 778, 778, 778, 778, 778, 584, 778, 722, 722, 722, 722, 667, 667, 611, 556, 556, 556, 556, 556, 556, 889, 556, 556, 556, 556, 556, 278, 278, 278, 278, 611, 611, 611, 611, 611, 611, 611, 584, 611, 611, 611, 611, 611, 556, 611, 556];
var CP={8364:128,8218:130,402:131,8222:132,8230:133,8224:134,8225:135,710:136,8240:137,352:138,8249:139,338:140,381:142,8216:145,8217:146,8220:147,8221:148,8226:149,8211:150,8212:151,732:152,8482:153,353:154,8250:155,339:156,382:158,376:159};
var MAP={"→":"»","←":"«","≈":"ca. ","⋮":"","✓":"","✔":"","−":"-","‑":"-"," ":" "," ":" "," ":" "};
function clean(s){s=String(s||"");var o="";for(var ch of s){if(MAP[ch]!=null){o+=MAP[ch];continue}var c=ch.codePointAt(0);if(c<256||CP[c])o+=ch}return o.replace(/[ ]/g," ").replace(/ {2,}/g," ").replace(/^\s+|\s+$/g,"")}
function code(ch){var c=ch.charCodeAt(0);return c<256?c:(CP[c]||63)}
function tw(s,size,bold){var W=bold?WB:WR,t=0;for(var i=0;i<s.length;i++)t+=W[code(s[i])]||500;return t*size/1000}
function esc(s){var o="";for(var i=0;i<s.length;i++){var c=code(s[i]);if(c===40||c===41||c===92)o+="\\"+String.fromCharCode(c);else if(c<32||c>126)o+="\\"+("00"+c.toString(8)).slice(-3);else o+=String.fromCharCode(c)}return o}
function wrap(s,size,bold,maxw){var words=s.split(" "),lines=[],cur="";words.forEach(function(w){var t=cur?cur+" "+w:w;if(tw(t,size,bold)<=maxw||!cur)cur=t;else{lines.push(cur);cur=w}});if(cur)lines.push(cur);return lines}
function hex(c){return[parseInt(c.slice(1,3),16)/255,parseInt(c.slice(3,5),16)/255,parseInt(c.slice(5,7),16)/255].map(function(x){return x.toFixed(3)}).join(" ")}
var PW=595.28,PH=841.89,M=46,CW=PW-2*M;
function Doc(){this.pages=[];this.img=null;this.newPage()}
Doc.prototype.newPage=function(){this.cur=[];this.pages.push(this.cur);this.y=M+20};
Doc.prototype.op=function(s){this.cur.push(s)};
Doc.prototype.rect=function(x,y,w,h,fill,stroke,r){var s="";if(fill)s+=hex(fill)+" rg ";if(stroke)s+=hex(stroke)+" RG 0.8 w ";var Y=PH-y-h;
 if(r){var k=0.5523*r;s+=(x+r)+" "+Y+" m "+(x+w-r)+" "+Y+" l "+(x+w-r+k)+" "+Y+" "+(x+w)+" "+(Y+r-k)+" "+(x+w)+" "+(Y+r)+" c "+(x+w)+" "+(Y+h-r)+" l "+(x+w)+" "+(Y+h-r+k)+" "+(x+w-r+k)+" "+(Y+h)+" "+(x+w-r)+" "+(Y+h)+" c "+(x+r)+" "+(Y+h)+" l "+(x+r-k)+" "+(Y+h)+" "+x+" "+(Y+h-r+k)+" "+x+" "+(Y+h-r)+" c "+x+" "+(Y+r)+" l "+x+" "+(Y+r-k)+" "+(x+r-k)+" "+Y+" "+(x+r)+" "+Y+" c "}
 else s+=x+" "+Y+" "+w+" "+h+" re ";s+=(fill&&stroke?"B":fill?"f":"S");this.op(s)};
Doc.prototype.text=function(s,x,y,size,bold,color){this.op("BT /"+(bold?"F2":"F1")+" "+size+" Tf "+hex(color||"#17233F")+" rg "+x.toFixed(2)+" "+(PH-y).toFixed(2)+" Td ("+esc(s)+") Tj ET")};
Doc.prototype.need=function(h){if(this.y+h>PH-M-40){this.newPage();return true}return false};
Doc.prototype.para=function(s,o){o=o||{};s=clean(s);if(!s)return;var size=o.size||10,lh=size*1.42,x=M+(o.ind||0),mw=(o.w||CW)-(o.ind||0),L=wrap(s,size,o.bold,mw),me=this;
 L.forEach(function(l){me.need(lh);me.text(l,x,me.y+size,size,o.bold,o.color);me.y+=lh});this.y+=(o.after!=null?o.after:4)};
Doc.prototype.bullet=function(s,col){s=clean(s);if(!s)return;var size=10,lh=14.2,mw=CW-16,L=wrap(s,size,false,mw),me=this;me.need(lh+2);
 me.rect(M+3,me.y+5.2,3.6,3.6,col||"#0A6FD8");L.forEach(function(l){me.need(lh);me.text(l,M+16,me.y+size,size,false);me.y+=lh});me.y+=3};
Doc.prototype.h=function(s,col){s=clean(s);if(!s)return;this.need(90);this.y+=10;this.text(s,M,this.y+13,13,true,col||"#0B2470");this.y+=18;this.rect(M,this.y,34,2.2,"#0A6FD8");this.y+=10};
Doc.prototype.h2=function(s){s=clean(s);if(!s)return;this.need(60);this.y+=4;this.text(s,M,this.y+10.5,10.5,true,"#0A6FD8");this.y+=17};
function b64bin(b){var s=atob(b),u=new Uint8Array(s.length);for(var i=0;i<s.length;i++)u[i]=s.charCodeAt(i);return u}
function jpgSize(u){for(var i=2;i<u.length;){if(u[i]!==255)return null;var m=u[i+1],len=(u[i+2]<<8)+u[i+3];if(m>=192&&m<=195)return{h:(u[i+5]<<8)+u[i+6],w:(u[i+7]<<8)+u[i+8]};i+=2+len}return null}
Doc.prototype.build=function(){var objs=[],me=this;function add(s){objs.push(s);return objs.length}
 var f1=add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>"),f2=add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>");
 var im=null;if(this.img){im=add({img:this.img})}
 var pagesId=add(null),kids=[];
 this.pages.forEach(function(p){var c=p.join("\n");var cs=add({stream:c});var pg=add("<< /Type /Page /Parent "+pagesId+" 0 R /MediaBox [0 0 "+PW+" "+PH+"] /Resources << /Font << /F1 "+f1+" 0 R /F2 "+f2+" 0 R >>"+(im?" /XObject << /Im1 "+im+" 0 R >>":"")+" >> /Contents "+cs+" 0 R >>");kids.push(pg)});
 objs[pagesId-1]="<< /Type /Pages /Kids ["+kids.map(function(k){return k+" 0 R"}).join(" ")+"] /Count "+kids.length+" >>";
 var cat=add("<< /Type /Catalog /Pages "+pagesId+" 0 R >>"),info=add("<< /Title (Deine Kabinenempfehlung - DEIN SchiffsKompass) /Author (DEIN SchiffsKompass) /Creator (www.deinschiffskompass.de) >>");
 var parts=[],len=0,offs=[];function push(x){if(typeof x==="string"){var u=new Uint8Array(x.length);for(var i=0;i<x.length;i++)u[i]=x.charCodeAt(i)&255;x=u}parts.push(x);len+=x.length}
 push("%PDF-1.4\n%\xe2\xe3\xcf\xd3\n");
 objs.forEach(function(o,i){offs.push(len);push((i+1)+" 0 obj\n");if(o&&o.stream!=null){push("<< /Length "+o.stream.length+" >>\nstream\n");push(o.stream);push("\nendstream")}
  else if(o&&o.img){push("<< /Type /XObject /Subtype /Image /Width "+o.img.w+" /Height "+o.img.h+" /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length "+o.img.data.length+" >>\nstream\n");push(o.img.data);push("\nendstream")}
  else push(o);push("\nendobj\n")});
 var xr=len;push("xref\n0 "+(objs.length+1)+"\n0000000000 65535 f \n");offs.forEach(function(o){push(("0000000000"+o).slice(-10)+" 00000 n \n")});
 push("trailer\n<< /Size "+(objs.length+1)+" /Root "+cat+" 0 R /Info "+info+" 0 R >>\nstartxref\n"+xr+"\n%%EOF");
 return new Blob(parts,{type:"application/pdf"})};
window.KFpdfBuild=function(D){var d=new Doc();
 var src=(document.querySelector("header.nav img")||{}).src||"";if(/^data:image\/jpe?g;base64,/.test(src)){var u=b64bin(src.split(",")[1]),sz=jpgSize(u);if(sz)d.img={data:u,w:sz.w,h:sz.h}}
 /* Kopf */
 d.y=0;d.rect(0,0,PW,118,"#071A4F");d.rect(0,118,PW,4,"#0A6FD8");
 if(d.img){d.rect(M-6,18,82,82,"#FFFFFF",null,14);d.op("q 74 0 0 74 "+(M-2)+" "+(PH-96)+" cm /Im1 Do Q")}
 d.text("DEIN SchiffsKompass",M+92,46,11,true,"#7DD6FF");d.text("Deine Kabinenempfehlung",M+92,72,22,true,"#FFFFFF");
 d.text(clean((D.ship?D.ship+" · ":"")+"erstellt am "+D.date),M+92,94,10,false,"#CFE0FF");d.y=146;
 /* Empfehlung */
 var cat=clean(D.cat),box=[];var hBox=0;d.y+=2;var y0=d.y;
 var lines=[];if(D.pick)lines.push(["b","Lage: "+D.pick]);if(D.alt)lines.push(["r",D.alt]);if(D.occ)lines.push(["r","Belegung: "+D.occ]);
 var inner=CW-36,hh=64;lines.forEach(function(l){hh+=wrap(clean(l[1]),10,l[0]==="b",inner).length*14+3});var whyL=wrap(clean(D.why||""),9.5,false,inner);hh+=6+whyL.length*13.4+16;
 d.rect(M,y0,CW,hh,"#EAF4FE","#BFDCF7",12);d.text("Unsere Empfehlung"+(D.ship?" für die "+D.ship:""),M+18,y0+22,9.5,true,"#0A6FD8");d.text(cat,M+18,y0+46,20,true,"#0B2470");
 var yy=y0+64;lines.forEach(function(l){wrap(clean(l[1]),10,l[0]==="b",inner).forEach(function(t){d.text(t,M+18,yy+10,10,l[0]==="b",l[0]==="b"?"#0B2470":"#2B3A5C");yy+=14});yy+=3});
 yy+=6;whyL.forEach(function(t){d.text(t,M+18,yy+9.5,9.5,false,"#2B3A5C");yy+=13.4});d.y=y0+hh+10;
 /* Angaben */
 if(D.ans&&D.ans.length){d.h("Deine Angaben");var colW=150;D.ans.forEach(function(a,i){var v=wrap(clean(a[1]),9.5,false,CW-colW-16),h=Math.max(1,v.length)*13.2+8;d.need(h);if(i%2===0)d.rect(M,d.y,CW,h,"#F3F7F9");d.text(clean(a[0]),M+8,d.y+13,9.5,true,"#0B2470");v.forEach(function(t,j){d.text(t,M+colW,d.y+13+j*13.2,9.5,false)});d.y+=h});d.y+=4}
 /* Abschnitte */
 (D.sec||[]).forEach(function(s){if(s.t==="h")d.h(s.v);else if(s.t==="h2")d.h2(s.v);else if(s.t==="b")d.bullet(s.v,s.c);else if(s.t==="n")d.para(s.v,{size:8.8,color:"#56658A"});else d.para(s.v,{size:10})});
 /* Kontakt */
 d.need(120);d.y+=12;var cy=d.y;d.rect(M,cy,CW,92,"#071A4F",null,12);d.text("Du möchtest diese Kabine buchen oder hast Fragen?",M+18,cy+26,12,true,"#FFFFFF");
 d.text("Wir schauen gern, ob deine Wunschkabine in deiner Wunschlage noch frei ist.",M+18,cy+44,9.5,false,"#CFE0FF");
 d.text("WhatsApp: +49 151 26978714   ·   E-Mail: mail@deinschiffskompass.de",M+18,cy+64,9.5,true,"#7DD6FF");d.text("www.deinschiffskompass.de",M+18,cy+80,9.5,false,"#CFE0FF");d.y=cy+104;
 /* Hinweis */
 d.para("Wichtiger Hinweis: Diese Kabinenempfehlung ist eine unverbindliche Orientierung von DEIN SchiffsKompass auf Grundlage deiner Angaben, der Deckpläne und Kabinenbeschreibungen von TUI Cruises, eigener Erfahrungen an Bord und der Erfahrungen von Reisenden aus unserer Community. Sie erfolgt ohne Gewähr und ersetzt keine verbindliche Auskunft der Reederei. Deckpläne, Kategorien, Ausstattung und Regeln können sich ändern; welche Kabinen auf deiner Reise frei sind und was sie kosten, siehst du erst bei der Buchung. DEIN SchiffsKompass ist eine Fan-Seite und nicht mit TUI Cruises verbunden.",{size:8.3,color:"#56658A"});
 /* Fußzeile */
 var n=d.pages.length;d.pages.forEach(function(p,i){d.cur=p;d.rect(M,PH-36,CW,0.6,"#D9E3EC");d.text("DEIN SchiffsKompass · Kabinenempfehlung · Orientierung ohne Gewähr",M,PH-22,7.8,false,"#56658A");var t="Seite "+(i+1)+" von "+n;d.text(t,PW-M-tw(t,7.8,false),PH-22,7.8,false,"#56658A")});
 return d.build()};
})();
