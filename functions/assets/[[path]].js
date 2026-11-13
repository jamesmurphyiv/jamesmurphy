import { pdf, png } from '../../resume-data-v9.js';
export function onRequestGet(context) {
 const name = context.params.path;
 const path = Array.isArray(name) ? name.join('/') : name;
 const files = {
   'James-Murphy-Resume.pdf': [pdf, 'application/pdf'],
   'james-murphy-resume.png': [png, 'image/png']
 };
 if (!files[path]) return context.next();
 const [encoded,type] = files[path];
 const bytes = Uint8Array.from(atob(encoded), x => x.charCodeAt(0));
 return new Response(bytes,{headers:{'Content-Type':type,'Cache-Control':'no-cache, max-age=0, must-revalidate'}});
}
