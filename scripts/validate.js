// Fails the build if content.json is broken, so the live site keeps its last good version.
const fs=require("fs");let C;
try{C=JSON.parse(fs.readFileSync("content.json","utf8"))}catch(e){console.error("content.json is not valid JSON: "+e.message);process.exit(1)}
const bad=[];
["links","stats","exploring","projects","chapters","tiles","stack","experience","about"].forEach(k=>{if(!C[k])bad.push("content.json is missing \""+k+"\"")});
(C.projects||[]).forEach((p,i)=>{if(!p.title)bad.push("projects["+i+"] needs a title");if(!p.line)bad.push("projects["+i+"] ("+(p.title||"?")+") needs a line")});
if(!fs.existsSync("resume.pdf"))bad.push("resume.pdf is missing");
if(bad.length){console.error(bad.join("\n"));process.exit(1)}
console.log("content.json OK: "+C.projects.length+" projects");
