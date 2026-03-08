const apiKey = "AIzaSyCeU8Po2tCLITjT320Ey6i1IBmEE6f-mSk";
fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`)
  .then(res => res.json())
  .then(data => console.log(data.models.map(m => m.name).filter(n => n.includes("flash"))))
  .catch(console.error);
