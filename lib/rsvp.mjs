const reply=(value,status=200)=>new Response(JSON.stringify(value),{status,headers:{'Content-Type':'application/json','Cache-Control':'no-store'}});
export default {async fetch(request,env){
const url=new URL(request.url);
if(url.pathname==='/api/rsvp'){
 if(request.method!=='POST')return reply({ok:false},405);
 if(request.headers.get('Origin') && request.headers.get('Origin')!==url.origin)return reply({ok:false},403);
 if(Number(request.headers.get('Content-Length'))>10000)return reply({ok:false},413);
 try{
 const raw=await request.text();if(raw.length>10000)return reply({ok:false},413);const d=JSON.parse(raw);
 const match=String(d.path).match(/^\/([^/]+)\/admision\/(\d+)\/?$/i);
 let capacity=1,name=String(d.name||'').trim(),id=String(d.id||'');
 if(match){capacity=Number(match[2]);name=decodeURIComponent(match[1]).replace(/[+_-]+/g,' ').trim().replace(/(^|\s)\S/g,c=>c.toLocaleUpperCase('es'));const hash=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(match[1].toLowerCase()));id=Array.from(new Uint8Array(hash)).map(n=>n.toString(16).padStart(2,'0')).join('');}
 if(!name||name.length>120||!Number.isInteger(capacity)||capacity<1||capacity>100||!Number.isInteger(d.count)||d.count<0||d.count>capacity||!['Sí','No'].includes(d.attending)||d.attending==='Sí'&&d.count<1||d.attending==='No'&&d.count!==0||typeof d.message!=='string'||d.message.length>1000||!/^[a-zA-Z0-9_-]{8,100}$/.test(id))return reply({ok:false},400);
 const upstream=await fetch(env.RSVP_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({key:env.RSVP_KEY,id,name,capacity,count:d.count,attending:d.attending,message:d.message}),signal:AbortSignal.timeout(25000)});
 const result=await upstream.json();return reply({ok:result.ok===true},result.ok?200:502);
 }catch{return reply({ok:false},502)}
}
return new Response('No encontrado',{status:404});
}};
