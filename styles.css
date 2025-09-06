:root{
  --bg:#0b1220;--card:#121a2b;--muted:#96a0b5;--text:#e8eefc;--accent:#7aa2ff;--accent2:#64e6b9;--danger:#ff7a98;--win:#9ef29a;
  --grid:#1f2a44;--cell:#162038;--cell-hover:#1b2948;--shadow:0 10px 30px rgba(0,0,0,.35);
}
*{box-sizing:border-box}
html,body{height:100%}
body{margin:0;background:linear-gradient(135deg,#0a0f1e,#0f1a30);font:15px/1.45 system-ui,-apple-system,Segoe UI,Roboto,Ubuntu;color:var(--text)}
.container{max-width:980px;margin:16px auto;padding:0 12px}
.app{background:var(--card);border:1px solid rgba(255,255,255,.06);border-radius:16px;box-shadow:var(--shadow);overflow:hidden}
header{display:flex;gap:12px;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.06);background:linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,0))}
h1{font-size:19px;margin:0;letter-spacing:.25px}
.badge{font-size:11px;color:var(--bg);background:var(--accent2);padding:3px 8px;border-radius:999px}

.panel{display:grid;grid-template-columns:1.2fr .8fr;gap:12px;padding:16px}
@media (max-width:860px){.panel{grid-template-columns:1fr}}

.left,.right{background:var(--bg);border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:14px}

.controls{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
.controls .field{display:flex;flex-direction:column;gap:6px}
label{font-size:12.5px;color:var(--muted)}
input[type="text"],select{background:var(--cell);border:1px solid var(--grid);border-radius:10px;color:var(--text);padding:8px 10px;outline:none;min-height:36px}
input[type="text"]:focus,select:focus{border-color:var(--accent)}

.radio-row{display:flex;gap:8px;flex-wrap:wrap}
.radio{display:inline-flex;align-items:center;gap:6px;background:var(--cell);border:1px solid var(--grid);border-radius:999px;padding:6px 10px;cursor:pointer}
.radio input{accent-color:var(--accent)}

.button-row{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px}
button{background:var(--accent);border:none;color:#0a1020;padding:8px 12px;border-radius:10px;font-weight:600;cursor:pointer;font-size:14px}
button.secondary{background:#263453;color:var(--text);border:1px solid var(--grid)}
button.ghost{background:transparent;border:1px dashed var(--grid);color:var(--muted)}
button:disabled{opacity:.6;cursor:not-allowed}

.board{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;background:var(--bg);border:1px solid var(--grid);border-radius:12px;padding:10px;margin-top:8px}
.cell{aspect-ratio:1;border-radius:10px;background:var(--cell);display:flex;align-items:center;justify-content:center;font-size:36px;font-weight:800;letter-spacing:1px;cursor:pointer;user-select:none;border:1px solid var(--grid);transition:.15s}
.cell:hover{background:var(--cell-hover);transform:translateY(-1px)}
.cell.disabled{pointer-events:none;opacity:.6}
.cell.win{background:linear-gradient(180deg,rgba(220,255,220,.08),rgba(0,0,0,0));box-shadow:inset 0 0 0 1px rgba(152,255,170,.25)}

.status{margin-top:8px;padding:8px 10px;border-radius:10px;background:#0e1730;border:1px solid var(--grid);color:var(--text);min-height:40px}
.status .muted{color:var(--muted)}
.thinking{opacity:.9}

.score{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.card{background:var(--cell);border:1px solid var(--grid);border-radius:10px;padding:12px}
.card h3{margin:0 0 4px 0;font-size:13px;color:var(--muted)}
.num{font-size:26px;font-weight:800}

.log{margin-top:10px;background:#0e1730;border:1px solid var(--grid);border-radius:10px;max-height:170px;overflow:auto;padding:8px;font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;font-size:12px}
.sep{opacity:.5}
footer{padding:12px 16px;border-top:1px solid rgba(255,255,255,.06);font-size:12.5px;color:var(--muted)}

/* Extra compact mode for short screens */
@media (max-height:740px){
  body{font-size:14px}
  h1{font-size:18px}
  .container{margin:12px auto}
  .panel{padding:12px;gap:10px}
  .left,.right{padding:12px}
  .board{gap:8px;padding:8px}
  .cell{font-size:32px}
  .log{max-height:140px}
}
@media (max-height:640px){
  .log{display:none}
  .panel{padding-bottom:8px}
}
