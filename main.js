import "./style.css";

const app = document.querySelector("#app");
app.innerHTML = `
  <aside class="sidebar">
    <div class="logo">AZA<span>.</span></div><small class="sublogo">AI GRAPHICS</small>
    <nav>
      <a class="active" href="#home">⌂ &nbsp; Início</a>
      <a href="#fps">◫ &nbsp; FPS Manager</a>
      <a href="#graphics">▧ &nbsp; Graphics Manager</a>
      <a href="#scanner">⌕ &nbsp; Smart Scanner</a>
    </nav>
    <div class="side-foot">BUILD 0.1.0<br><b>INTERFACE PROTOTYPE</b></div>
  </aside>
  <main id="home">
    <header><div><small>PAINEL DE CONTROLE</small><h1>AZA AI <em>GRAPHICS</em></h1></div><span class="pill">● PS4 CONCEPT</span></header>
    <section class="hero">
      <div><small class="red">CENTRAL DE FERRAMENTAS</small><h2>Seu painel.<br><em>Seu controle.</em></h2>
      <p>Uma interface experimental para organizar futuras ferramentas de análise e configuração gráfica.</p></div>
      <div class="orb"><b>AZA</b></div>
    </section>
    <div class="section-title"><div><small>MÓDULOS</small><h2>Ferramentas principais</h2></div><span class="tag">MODO DEMONSTRAÇÃO</span></div>
    <section class="cards">
      <article id="fps"><div class="ico">◫</div><small>MÓDULO 01</small><h3>FPS Manager</h3><p>Área planejada para informações de desempenho e perfis de jogos compatíveis.</p><button data-module="FPS Manager">Abrir módulo <b>↗</b></button></article>
      <article id="graphics"><div class="ico">▧</div><small>MÓDULO 02</small><h3>Graphics Manager</h3><p>Central conceitual para organizar opções visuais e configurações gráficas.</p><button data-module="Graphics Manager">Abrir módulo <b>↗</b></button></article>
      <article id="scanner"><div class="ico">⌕</div><small>MÓDULO 03</small><h3>Smart Scanner</h3><p>Espaço reservado para diagnóstico informativo, quando houver suporte técnico real.</p><button data-module="Smart Scanner">Abrir módulo <b>↗</b></button></article>
    </section>
    <section class="status"><div class="section-title"><div><small>SITUAÇÃO DO PROJETO</small><h2>Base inicial pronta</h2></div><span class="red">● EM DESENVOLVIMENTO</span></div>
      <div class="status-grid"><div><small>Interface</small><b class="green">Carregada</b></div><div><small>Conexão com console</small><b>Ainda não implementada</b></div><div><small>Build nativo PS4</small><b>Pendente</b></div></div>
    </section>
    <footer>AZA AI GRAPHICS <i>•</i> PROJETO EXPERIMENTAL — NÃO ALTERA O CONSOLE</footer>
  </main>
  <div class="toast" role="status" aria-live="polite"></div>
`;

const toast = document.querySelector(".toast");
let timer;
document.querySelectorAll("[data-module]").forEach((button) => {
  button.addEventListener("click", () => {
    toast.textContent = button.dataset.module + ": módulo visual em construção. Nenhuma função do console foi executada.";
    toast.classList.add("show");
    clearTimeout(timer);
    timer = setTimeout(() => toast.classList.remove("show"), 3000);
  });
});
document.querySelectorAll("nav a").forEach((link) => link.addEventListener("click", () => {
  document.querySelectorAll("nav a").forEach((item) => item.classList.remove("active"));
  link.classList.add("active");
}));