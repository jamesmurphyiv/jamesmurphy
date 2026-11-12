import a from '../../resume-data-0.js';
import b from '../../resume-data-1.js';
import c from '../../resume-data-2.js';
export function onRequestGet(context) {
 const name = context.params.path;
 const path = Array.isArray(name) ? name.join('/') : name;
 const data = a+b+c;
 const files = {
   'James-Murphy-Resume.pdf': [data.slice(0, 88700), 'application/pdf'],
   'james-murphy-resume.png': [data.slice(88700), 'image/png']
 };
 if (!files[path]) return context.next();
 const [encoded,type] = files[path];
 const bytes = Uint8Array.from(atob(encoded), x => x.charCodeAt(0));
 return new Response(bytes,{headers:{'Content-Type':type,'Cache-Control':'public, max-age=3600'}});
}
