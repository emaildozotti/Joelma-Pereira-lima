import { motion, useScroll, useTransform } from "motion/react";
import {
  ChevronDown,
  CheckCircle2,
  XCircle,
  Play,
  User,
  Brain,
  Heart,
  Sparkles,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { useState, useRef } from "react";

/* ─── ANIMATION VARIANTS ─── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
};

const stagger = (i: number) => ({
  ...fadeUp,
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
});

/* ─── ACCORDION ─── */
const AccordionItem = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(212,183,163,0.4)", paddingTop: "1.75rem", paddingBottom: "1.75rem" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between", textAlign: "left", background: "none", border: "none", cursor: "pointer", padding: 0 }}
      >
        <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.2rem", fontWeight: 600, color: "#6E1F3A", transition: "color 0.3s ease" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#4B1026")}
          onMouseLeave={e => (e.currentTarget.style.color = "#6E1F3A")}
        >
          {title}
        </span>
        <ChevronDown
          size={18}
          style={{
            color: "rgba(58,42,37,0.45)",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
            flexShrink: 0,
            marginLeft: "1rem",
          }}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <p style={{ paddingTop: "1rem", color: "rgba(58,42,37,0.72)", lineHeight: 1.8, fontWeight: 300, fontSize: "0.95rem" }}>
          {content}
        </p>
      </motion.div>
    </div>
  );
};

/* ─── APP ─── */
export default function App() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F4EFEA" }}>

      {/* ── HEADER ── */}
      <header style={{
        position: "fixed", top: 0, width: "100%", zIndex: 50,
        backgroundColor: "rgba(244,239,234,0.88)", backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(212,183,163,0.3)",
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", height: "76px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, color: "#6E1F3A" }}>
            Joelma Pereira Lima
          </div>
          <nav style={{ display: "flex", gap: "2.5rem" }} className="hidden-mobile">
            {["#sobre", "#metodologia", "#faq"].map((href, i) => (
              <a key={i} href={href} style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.22em", fontWeight: 600, color: "#3A2A25", textDecoration: "none", transition: "color 0.3s ease" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#6E1F3A")}
                onMouseLeave={e => (e.currentTarget.style.color = "#3A2A25")}
              >
                {["Sobre", "Metodologia", "Dúvidas"][i]}
              </a>
            ))}
          </nav>
          <button
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              backgroundColor: "#6E1F3A", color: "#F4EFEA",
              padding: "0.55rem 1.3rem", borderRadius: "8px",
              fontSize: "0.6rem", fontWeight: 700, textTransform: "uppercase",
              letterSpacing: "0.15em", border: "none", cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#4B1026")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#6E1F3A")}
            onClick={() => window.open('https://api.whatsapp.com/send?phone=556384383553&text=Olá%20Joelma,%20vi%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20conversa%20sobre%20o%20Autogoverno%20Emocional.', '_blank')}
          >
            Agendar Conversa
          </button>
        </div>
      </header>

      <main style={{ paddingTop: "76px" }}>

        {/* ── HERO ── */}
        <section
          ref={heroRef}
          style={{ position: "relative", minHeight: "96vh", backgroundColor: "#B58E75", overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "stretch" }}
          className="hero-grid"
        >
          {/* Left: Copy */}
          <motion.div
            style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "6rem 4rem 6rem 6rem", position: "relative", zIndex: 2 }}
            className="hero-copy"
          >

            <motion.h1
              {...stagger(1)}
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.4rem, 4vw, 3.6rem)", color: "#F4EFEA", lineHeight: 1.1, letterSpacing: "-0.015em", marginBottom: "1.75rem" }}
            >
              A liberdade emocional não é a ausência de dor.
              <em style={{ display: "block", fontStyle: "italic", color: "#6E1F3A", marginTop: "0.4rem", fontSize: "1.05em" }}>
                É a <span style={{ color: "rgba(110,31,58,0.7)" }}>presença consciente</span> diante da sua própria vida.
              </em>
            </motion.h1>
            <motion.p
              {...stagger(2)}
              style={{ fontSize: "1rem", color: "rgba(244,239,234,0.85)", lineHeight: 1.85, maxWidth: "440px", marginBottom: "2.5rem", fontWeight: 300 }}
            >
              Um convite para mulheres que <strong>já compreenderam tudo intelectualmente</strong> — mas continuam presas a <strong>padrões emocionais</strong>, à autocobrança e ao autoengano.
            </motion.p>
            <motion.div {...stagger(3)} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.75rem",
                  backgroundColor: "#F4EFEA", color: "#6E1F3A",
                  padding: "1.1rem 2.2rem", borderRadius: "8px",
                  fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase",
                  letterSpacing: "0.15em", border: "none", cursor: "pointer",
                  transition: "background-color 0.3s ease, transform 0.3s ease",
                  boxShadow: "0 4px 20px rgba(58,42,37,0.15)",
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#D8B7A3"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#F4EFEA"; e.currentTarget.style.transform = "translateY(0)"; }}
                onClick={() => window.open('https://api.whatsapp.com/send?phone=556384383553&text=Olá%20Joelma,%20vi%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20conversa%20sobre%20o%20Autogoverno%20Emocional.', '_blank')}
              >
                Quero agendar minha sessão <ArrowRight size={16} />
              </button>
            </motion.div>

          </motion.div>

          {/* Right: Photo */}
          <div style={{ position: "relative", overflow: "hidden" }} className="hero-photo">
            <motion.img
              src="https://i.imgur.com/crsl0W6.jpeg"
              alt="Joelma Pereira Lima"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%", y: heroImgY }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #B58E75 0%, rgba(181,142,117,0.1) 30%, transparent 100%)" }} className="hero-photo-fade" />
          </div>

          {/* Bottom gradient */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "180px", background: "linear-gradient(to top, rgba(181,142,117,0.6), transparent)", zIndex: 1 }} />
        </section>

        {/* ── PAIN POINTS ── */}
        <section style={{ backgroundColor: "#F4EFEA", padding: "7rem 1.5rem" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: "4.5rem" }}>
              <span className="eyebrow" style={{ justifyContent: "center" }}>Você se reconhece aqui?</span>
              <h2 style={{ fontSize: "clamp(1.9rem,3.5vw,3rem)", color: "#6E1F3A", maxWidth: "640px", margin: "0 auto" }}>
                Você aprendeu a sustentar o <span className="text-highlight">mundo</span>, mas esqueceu de sustentar <span style={{ fontStyle: "italic" }}>a si mesma.</span>
              </h2>
              <p style={{ color: "rgba(58,42,37,0.65)", maxWidth: "500px", margin: "1.5rem auto 0", lineHeight: 1.8, fontWeight: 300 }}>
                Sabe aquele aperto que surge quando você percebe que está vivendo no automático?
              </p>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.75rem" }}>
              {[
                { title: "A exaustão da \"boa menina\"", desc: <>Você diz sim para não perder ninguém, mas acaba <strong>perdendo a si mesma</strong> no processo.</>, icon: <Heart size={22} />, },
                { title: "O cansaço da teoria", desc: <>Você já leu todos os livros, mas o <strong>sentir continua travado</strong> no mesmo lugar.</>, icon: <Brain size={22} />, },
                { title: "A fuga espiritual", desc: <>Você busca no místico um alívio para dores que <strong>só a responsabilidade emocional</strong> pode resolver.</>, icon: <Sparkles size={22} />, },
                { title: "O peso da salvadora", desc: <>Você adoeceu tentando salvar quem ama e agora <strong>não tem forças para levantar a própria vida</strong>.</>, icon: <User size={22} />, },
              ].map((item, i) => (
                <motion.div
                  key={i} {...stagger(i)}
                  style={{
                    padding: "2.25rem 2rem",
                    backgroundColor: "#fff",
                    border: "1px solid rgba(212,183,163,0.45)",
                    borderRadius: "12px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "default",
                  }}
                  whileHover={{ y: -5, boxShadow: "0 12px 40px rgba(58,42,37,0.08)" }}
                >
                  <div style={{ width: "46px", height: "46px", background: "rgba(212,183,163,0.25)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "#6E1F3A", marginBottom: "1.5rem" }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 600, color: "#6E1F3A", marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "rgba(58,42,37,0.68)", lineHeight: 1.8, fontWeight: 300 }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VIDEO BLOCK ── */}
        <section style={{ backgroundColor: "rgba(181,142,117,0.15)", padding: "7rem 1.5rem" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            {/* Headline only — no subheadline */}
            <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: "4rem" }}>
              <span className="eyebrow">Em suas próprias palavras</span>
              <h2 style={{ fontSize: "clamp(1.9rem,3.5vw,3rem)", color: "#6E1F3A", maxWidth: "620px", margin: "0 auto" }}>
                O que é o Autogoverno Emocional?
              </h2>
            </motion.div>

            {/* YouTube Short – vertical 9:16, centered */}
            <motion.div {...fadeUp} style={{ maxWidth: "380px", margin: "0 auto" }}>
              <div style={{
                position: "relative",
                aspectRatio: "9/16",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 32px 80px rgba(58,42,37,0.18)",
              }}>
                <iframe
                  src="https://www.youtube.com/embed/Gunt0yB4KVE?rel=0&showinfo=0&modestbranding=1&playsinline=1"
                  title="Joelma Pereira Lima – Autogoverno Emocional"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </section>


        {/* ── BIO / AUTORIDADE ── */}
        <section id="sobre" style={{ backgroundColor: "#F4EFEA", padding: "7rem 1.5rem", overflow: "hidden" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }} className="bio-grid">

            {/* Photo col */}
            <motion.div {...stagger(0)} style={{ position: "relative" }}>
              {/* Decorative element */}
              <div style={{ position: "absolute", top: "-2rem", left: "-2rem", width: "180px", height: "180px", borderRadius: "50%", backgroundColor: "rgba(181,142,117,0.2)", filter: "blur(40px)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: "3rem", right: "-1.5rem", width: "120px", height: "280px", borderRadius: "8px", backgroundColor: "rgba(110,31,58,0.08)", pointerEvents: "none" }} />

              <div style={{ borderRadius: "12px", overflow: "hidden", aspectRatio: "4/5", position: "relative", boxShadow: "0 32px 80px rgba(58,42,37,0.12)" }}>
                {/* Burgundy color wash overlay */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom right, rgba(110,31,58,0.12), transparent)", mixBlendMode: "overlay", zIndex: 1, pointerEvents: "none" }} />
                <img
                  src="https://i.imgur.com/NqHR2TJ.jpeg"
                  alt="Joelma Pereira Lima"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 8%", filter: "contrast(1.04) saturate(0.92)" }}
                />
              </div>


            </motion.div>

            {/* Text col */}
            <motion.div {...stagger(1)}>

              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem, 3vw, 2.8rem)", color: "#6E1F3A", marginBottom: "2rem" }}>
                Minha <span style={{ fontStyle: "italic" }}>autoridade</span> não vem de títulos, mas de <span className="text-highlight">travessias reais.</span>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", color: "rgba(58,42,37,0.75)", lineHeight: 1.85, fontWeight: 300, fontSize: "0.95rem" }}>
                <p>
                  Olá, eu sou a Joelma Pereira Lima. Durante muito tempo, eu vivi o <strong>custo psíquico da negação emocional</strong>. Fui a mulher que agradava para não perder, que suportava mais do que deveria e que adiava a própria verdade.
                </p>
                <p>
                  Minha virada não foi um milagre abrupto, mas um processo contínuo de escolhas difíceis e <strong>reconstrução de eixo</strong>. Hoje, não te prometo atalhos ou curas mágicas. Ofereço uma <strong>presença firme, enraizada e sóbria</strong> para acompanhar o seu retorno à consciência.
                </p>
              </div>

            </motion.div>
          </div>
        </section>

        {/* ── METHODOLOGY ── */}
        <section id="metodologia" style={{ backgroundColor: "#FBF9F7", padding: "8rem 1.5rem", borderTop: "1px solid rgba(110,31,58,0.06)", borderBottom: "1px solid rgba(110,31,58,0.06)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: "6rem" }}>
              <span className="eyebrow" style={{ color: "rgba(110,31,58,0.5)", justifyContent: "center" }}>A Metodologia</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#6E1F3A", fontSize: "clamp(2rem, 4.5vw, 3.4rem)", maxWidth: "800px", margin: "0 auto", lineHeight: 1.2 }}>
                Um espaço seguro onde a <span className="text-highlight">consciência</span> precede a mudança.
              </h2>
              <p style={{ color: "rgba(58,42,37,0.65)", maxWidth: "520px", margin: "1.75rem auto 0", lineHeight: 1.9, fontWeight: 300, fontSize: "1.05rem" }}>
                Minha metodologia integra o sentir, o compreender e o ressignificar — sem dissociar corpo, mente e consciência.
              </p>
            </motion.div>

            {/* Premium numbered list — light editorial style */}
            <div style={{ display: "flex", flexDirection: "column", maxWidth: "1000px", margin: "0 auto" }}>
              {[
                { num: "01", title: "Escuta Emocional Profunda", desc: <>Para nomear o que o seu silêncio esconde. Antes de qualquer técnica, vem a <strong>escuta real</strong>.</> },
                { num: "02", title: "Base Psicanalítica", desc: <>Para descer da mente intelectual para a <strong>verdade do inconsciente</strong>.</> },
                { num: "03", title: "Reprocessamento Consciente", desc: <>Para <strong>quebrar a repetição de padrões</strong> e reconstruir a tua narrativa interna.</> },
                { num: "04", title: "Espiritualidade Sensitiva", desc: <>Sem dogmas ou performances — focada na <strong>reconexão com o seu centro</strong>.</> },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  className="methodology-item"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(80px, 120px) 1fr",
                    gap: "0 4rem",
                    padding: "4rem 0",
                    borderBottom: i < 3 ? "1px solid rgba(110,31,58,0.12)" : "none",
                    alignItems: "start",
                  }}
                >
                  {/* Giant elegant number */}
                  <div>
                    <span style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "5.5rem",
                      color: "rgba(110,31,58,0.08)",
                      fontWeight: 300,
                      lineHeight: 0.8,
                      display: "block",
                      marginTop: "0.5rem"
                    }}>{item.num}</span>
                  </div>
                  {/* Content */}
                  <div>
                    <div style={{ width: "2.5rem", height: "1.5px", backgroundColor: "#6E1F3A", marginBottom: "1.5rem", opacity: 0.7 }} />
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)",
                      fontWeight: 600,
                      color: "#6E1F3A",
                      marginBottom: "1rem",
                      letterSpacing: "-0.01em",
                    }}>{item.title}</h3>
                    <p style={{
                      fontSize: "1rem",
                      color: "rgba(58,42,37,0.7)",
                      lineHeight: 1.9,
                      fontWeight: 300,
                      maxWidth: "640px",
                    }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ETHICAL FILTER ── */}
        <section style={{ backgroundColor: "#F4EFEA", padding: "8rem 1.5rem" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: "5rem" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#6E1F3A", fontSize: "clamp(1.9rem,3.5vw,3rem)", maxWidth: "680px", margin: "0 auto" }}>
                Este não é um espaço de alívio imediato. É um espaço de maturidade.
              </h2>
            </motion.div>

            <motion.div
              {...fadeUp}
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}
              className="filter-grid"
            >
              {/* Left – NOT for */}
              <div style={{
                padding: "3.5rem",
                backgroundColor: "rgba(58,42,37,0.04)",
                borderRadius: "16px",
                border: "1px solid rgba(58,42,37,0.1)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2.5rem" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", border: "1.5px solid rgba(58,42,37,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <XCircle size={16} strokeWidth={1.5} style={{ color: "rgba(58,42,37,0.45)" }} />
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 600, color: "rgba(58,42,37,0.6)", fontStyle: "italic" }}>
                    Este caminho não é para você se:
                  </h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {[
                    <>Busca <strong>soluções mágicas</strong> ou "curas" rápidas.</>,
                    <>Deseja <strong>terceirizar a responsabilidade</strong> pela sua vida.</>,
                    <>Busca <strong>apenas um ombro</strong> para lamentar sem agir.</>
                  ].map((t, i) => (
                    <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                      <div style={{ width: "1px", minHeight: "100%", backgroundColor: "rgba(58,42,37,0.12)", flexShrink: 0, marginTop: "0.35rem", alignSelf: "stretch" }} />
                      <p style={{ fontSize: "0.9rem", color: "rgba(58,42,37,0.6)", lineHeight: 1.85, fontWeight: 300, margin: 0 }}>{t}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right – IS for */}
              <div style={{
                padding: "3.5rem",
                background: "linear-gradient(135deg, rgba(110,31,58,0.08) 0%, rgba(181,142,117,0.18) 100%)",
                borderRadius: "16px",
                border: "1px solid rgba(110,31,58,0.15)",
                boxShadow: "0 16px 64px rgba(110,31,58,0.06)",
                position: "relative",
                overflow: "hidden",
              }}>
                {/* Subtle decorative circle */}
                <div style={{ position: "absolute", top: "-3rem", right: "-3rem", width: "160px", height: "160px", borderRadius: "50%", background: "radial-gradient(circle, rgba(110,31,58,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2.5rem" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "rgba(110,31,58,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <CheckCircle2 size={16} strokeWidth={1.5} style={{ color: "#6E1F3A" }} />
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 600, color: "#6E1F3A", fontStyle: "italic" }}>
                    Este lugar é seu se:
                  </h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {[
                    <>Entende que a <strong>cura é um processo</strong>, não um evento.</>,
                    <>Está disposta a olhar para si com <strong>honestidade e presença</strong>.</>,
                    <>Deseja transformar o autoconhecimento em <strong>autogoverno real</strong>.</>
                  ].map((t, i) => (
                    <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                      <div style={{ width: "4px", minHeight: "100%", backgroundColor: "#6E1F3A", opacity: 0.4, flexShrink: 0, borderRadius: "99px", marginTop: "0.3rem", alignSelf: "stretch" }} />
                      <p style={{ fontSize: "0.9rem", color: "rgba(58,42,37,0.82)", lineHeight: 1.85, fontWeight: 400, margin: 0 }}>{t}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" style={{ backgroundColor: "rgba(181,142,117,0.12)", padding: "7rem 1.5rem" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: "4rem" }}>
              <span className="eyebrow">Dúvidas frequentes</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#6E1F3A", fontSize: "clamp(1.9rem,3.5vw,3rem)" }}>
                Perguntas que a sua mente faz antes do coração aceitar.
              </h2>
            </motion.div>

            <motion.div {...fadeUp}>
              <AccordionItem title="Será que eu dou conta de olhar para isso?" content="Sim, porque você não estará sozinha. Meu papel é sustentar o espaço para que você suporte o desconforto da sua verdade." />
              <AccordionItem title="Tenho medo de mudar e perder quem eu sou." content="Na verdade, o processo é para você parar de ser quem os outros esperam e finalmente descobrir quem você é sob as máscaras." />
              <AccordionItem title="Já tentei de tudo e nada funcionou." content="Talvez você tenha tentado apenas entender intelectualmente. Aqui, trabalhamos a integração entre o sentir e o agir." />
            </motion.div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section style={{ position: "relative", backgroundColor: "#6E1F3A", padding: "10rem 1.5rem", overflow: "hidden" }}>
          {/* Radial gradient overlay — enhanced depth */}
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, #802444 0%, #6E1F3A 70%, #4B1026 100%)", opacity: 0.9, pointerEvents: "none" }} />

          {/* Decorative large initial — more subtle and elegant */}
          <div style={{ position: "absolute", right: "-2%", top: "50%", transform: "translateY(-50%)", fontFamily: "'Playfair Display', serif", fontSize: "clamp(20rem, 35vw, 45rem)", lineHeight: 1, color: "rgba(212,183,163,0.03)", fontWeight: 700, userSelect: "none", pointerEvents: "none" }}>J</div>

          <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
            <motion.div {...fadeUp}>
              <span className="eyebrow" style={{ color: "rgba(212,183,163,0.6)", marginBottom: "1.5rem" }}>O Próximo Passo</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#F4EFEA", fontSize: "clamp(2.4rem, 5vw, 4.2rem)", marginBottom: "2rem", letterSpacing: "-0.02em" }}>
                Saia da <span style={{ color: "#D8B7A3" }}>sobrevivência.</span><br />Inicie o seu <span style={{ fontStyle: "italic" }}>autogoverno.</span>
              </h2>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontStyle: "italic", color: "rgba(244,239,234,0.75)", lineHeight: 1.8, maxWidth: "680px", margin: "0 auto 4rem", fontWeight: 300 }}>
                As vagas para acompanhamento individual são limitadas para garantir a profundidade que o seu processo exige. Se você sente que chegou o seu momento de <strong style={{ color: "#D8B7A3" }}>honestidade radical</strong>, escolha um horário.
              </p>

              <button
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.85rem",
                  backgroundColor: "#F4EFEA", color: "#6E1F3A",
                  padding: "1.25rem 2.8rem", borderRadius: "8px",
                  fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase",
                  letterSpacing: "0.18em", border: "none", cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#D8B7A3"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 18px 50px rgba(0,0,0,0.35)"; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#F4EFEA"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.25)"; }}
                onClick={() => window.open('https://api.whatsapp.com/send?phone=556384383553&text=Olá%20Joelma,%20vi%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20conversa%20sobre%20o%20Autogoverno%20Emocional.', '_blank')}
              >
                Agendar minha orientação emocional <MessageCircle size={18} strokeWidth={1.5} />
              </button>

              <p style={{ marginTop: "3rem", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.25em", color: "rgba(244,239,234,0.4)", fontWeight: 600 }}>
                Sessões individuais e exclusivas — 100% online
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: "#3A2A25", padding: "2.5rem 1.5rem", borderTop: "1px solid rgba(212,183,163,0.05)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", opacity: 0.8 }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.85rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600, color: "#D8B7A3" }}>
            Joelma Pereira Lima
          </div>
          <p style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(212,183,163,0.4)", fontWeight: 600, margin: 0 }}>
            © {new Date().getFullYear()} — Todos os direitos reservados
          </p>
        </div>
      </footer>

      {/* ── RESPONSIVE STYLES ── */}
      <style>{`
        /* ── MOBILE: hide header ── */
        @media (max-width: 900px) {
          header { display: none !important; }
          main { padding-top: 0 !important; }

          /* Hero: flex column so align-self works */
          .hero-grid {
            display: flex !important;
            flex-direction: column !important;
            min-height: 100svh !important;
            position: relative !important;
          }

          /* Photo: full-bleed absolute background */
          .hero-photo {
            position: absolute !important;
            inset: 0 !important;
            height: 100% !important;
            width: 100% !important;
            z-index: 0 !important;
          }
          .hero-photo img {
            object-position: center 8% !important;
          }

          /* Gradient: strong at bottom half so text is readable */
          .hero-photo-fade {
            background: linear-gradient(
              to top,
              #B58E75 38%,
              rgba(181,142,117,0.92) 52%,
              rgba(181,142,117,0.3) 65%,
              transparent 100%
            ) !important;
          }

          /* Text: anchored to bottom of the flex container */
          .hero-copy {
            position: relative !important;
            z-index: 2 !important;
            margin-top: auto !important;
            padding: 0 1.5rem 3rem !important;
            align-self: stretch !important;
            justify-content: flex-end !important;
          }

          /* Bold headline on mobile */
          .hero-copy h1 {
            font-size: clamp(1.85rem, 6.5vw, 2.6rem) !important;
            color: #F4EFEA !important;
            text-shadow: 0 1px 12px rgba(58,42,37,0.3) !important;
            margin-bottom: 0.85rem !important;
            line-height: 1.15 !important;
          }
          .hero-copy h1 em { color: #6E1F3A !important; }
          .hero-copy p {
            font-size: 0.82rem !important;
            margin-bottom: 1.5rem !important;
            color: rgba(244,239,234,0.8) !important;
          }

          /* Hide credential strip on mobile */
          .credential-strip { display: none !important; }

          .bio-grid { grid-template-columns: 1fr !important; gap: 3.5rem !important; }
          .filter-grid { grid-template-columns: 1fr !important; }
          .hidden-mobile { display: none !important; }

          .methodology-item {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            padding: 3.5rem 0 !important;
            border-bottom: 1px solid rgba(110,31,58,0.08) !important;
          }
          .methodology-item:last-of-type { border-bottom: none !important; }
          .methodology-item > div:first-of-type {
            margin-bottom: -1rem !important;
          }
          .methodology-item span {
            font-size: 4.5rem !important;
            margin-top: 0 !important;
          }
          .methodology-item h3 {
            font-size: 1.6rem !important;
            margin-bottom: 0.75rem !important;
          }
        }

        @media (max-width: 640px) {
          .hero-copy h1 { font-size: 1.8rem !important; }
        }
      `}</style>
    </div>
  );
}
