
import { useState } from "react";
import "./App.css";

function App() {
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

  function enviarMensaje(e) {
    e.preventDefault();

    if (!mensaje.trim()) return;

    const nuevoMensaje = {
      id: Date.now(),
      texto: mensaje.trim(),
    };

    setMensajes((anteriores) => [...anteriores, nuevoMensaje]);
    setMensaje("");
  }

  return (
    <div className="orion-app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">✦</div>
          <div>
            <h1>ORION<span>AI</span></h1>
            <p>YOUR AI COMPANION</p>
          </div>
        </div>

        <button
          className="new-chat"
          onClick={() => setMensajes([])}
        >
          <span>＋</span> Nuevo chat
        </button>

        <div className="sidebar-section">
          <p className="section-title">ESPACIO DE TRABAJO</p>
          <button className="nav-item active">◈ <span>Asistente</span></button>
          <button className="nav-item">◷ <span>Historial</span></button>
          <button className="nav-item">⌘ <span>Explorar IA</span></button>
        </div>

        <div className="sidebar-bottom">
          <div className="status-dot" />
          <div>
            <strong>ORION está listo</strong>
            <p>Interfaz de demostración</p>
          </div>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="breadcrumb">ESPACIO PERSONAL / <span>ASISTENTE</span></p>
            <h2>Tu espacio inteligente</h2>
          </div>

          <div className="user-avatar">U</div>
        </header>

        <section className="chat-area">
          {mensajes.length === 0 ? (
            <div className="welcome">
              <div className="orb">
                <div className="orb-core">✦</div>
              </div>

              <p className="eyebrow">INTELIGENCIA A TU ALCANCE</p>
              <h2>Hola, ¿qué vamos a<br /><span>crear hoy?</span></h2>
              <p className="welcome-description">
                Soy ORION, tu espacio para explorar ideas,
                resolver problemas y construir cosas increíbles.
              </p>

              <div className="suggestions">
                <button onClick={() => setMensaje("Ayúdame a aprender programación")}>
                  <span>⌘</span>
                  <strong>Aprender</strong>
                  <small>Explora nuevas habilidades</small>
                </button>
                <button onClick={() => setMensaje("Dame ideas para un proyecto")}>
                  <span>✧</span>
                  <strong>Crear ideas</strong>
                  <small>Convierte ideas en proyectos</small>
                </button>
                <button onClick={() => setMensaje("Ayúdame a resolver un problema")}>
                  <span>◎</span>
                  <strong>Resolver</strong>
                  <small>Encuentra nuevas soluciones</small>
                </button>
              </div>
            </div>
          ) : (
            <div className="messages">
              <div className="demo-notice">
                Modo demostración: los mensajes todavía no usan una IA real.
              </div>

              {mensajes.map((item) => (
                <div className="message-row" key={item.id}>
                  <div className="message-avatar">U</div>
                  <div className="message-content">
                    <strong>Tú</strong>
                    <p>{item.texto}</p>
                  </div>
                </div>
              ))}

              <div className="message-row">
                <div className="orion-avatar">✦</div>
                <div className="message-content">
                  <strong>ORION AI</strong>
                  <p>
                    Tu mensaje está registrado en esta demostración.
                    Todavía no tengo conectada una inteligencia artificial,
                    pero pronto podremos conversar de verdad.
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>

        <footer className="composer-area">
          <form className="composer" onSubmit={enviarMensaje}>
            <input
              type="text"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Pregúntale algo a ORION..."
              aria-label="Escribe tu mensaje"
            />
            <button type="submit" disabled={!mensaje.trim()} aria-label="Enviar mensaje">
              ↑
            </button>
          </form>
          <p className="disclaimer">
            ORION AI · PROYECTO EN DESARROLLO · TUS IDEAS, SIN LÍMITES
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
