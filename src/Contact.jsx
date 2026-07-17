// Contact.jsx — final CTA on dark + footer
const Contact = () => (
  <section id="contact" style={ctStyles.wrap}>
    <div style={ctStyles.inner}>
      <div style={ctStyles.head}>
        <span style={ctStyles.eye}>Contact · 10 · Final word</span>
        <h2 style={ctStyles.h2}>Contact: the <em style={ctStyles.em}>final</em> word.</h2>
        <p style={ctStyles.sub}>Available for full-time Growth Marketing, Digital Marketing, SEO, AI Search, and Demand Generation roles, along with consulting and freelance opportunities.</p>
      </div>

      <div style={ctStyles.openTo}>
        {['Full-Time','Remote','Consulting','Contract'].map(t => (
          <span key={t} style={ctStyles.openChip}>{t}</span>
        ))}
      </div>

      <div style={ctStyles.cardRow} className="contact-cardrow">
        <a href="mailto:akhilsaisaranpaladugu@gmail.com" style={ctStyles.card} className="contact-card">
          <span style={ctStyles.cardEye}>Email</span>
          <span style={ctStyles.cardVal}>akhilsaisaran<wbr/>paladugu@gmail.com</span>
          <span style={ctStyles.cardArr}>→</span>
        </a>
        <a href="tel:+919533322337" style={ctStyles.card} className="contact-card">
          <span style={ctStyles.cardEye}>Phone · WhatsApp</span>
          <span style={ctStyles.cardVal}>+91 95333 22337</span>
          <span style={ctStyles.cardArr}>→</span>
        </a>
        <a href="https://www.linkedin.com/in/akhil-paladugu/" target="_blank" rel="noopener noreferrer" style={ctStyles.card} className="contact-card">
          <span style={ctStyles.cardEye}>LinkedIn</span>
          <span style={ctStyles.cardVal}>/in/akhil-paladugu</span>
          <span style={ctStyles.cardArr}>→</span>
        </a>
        <a href="https://www.instagram.com/im_akhilpaladugu/" target="_blank" rel="noopener noreferrer" style={ctStyles.cardHi} className="contact-cardhi">
          <span style={ctStyles.cardEyeHi}>Instagram</span>
          <span style={ctStyles.cardValHi}>@im_akhilpaladugu</span>
          <span style={ctStyles.cardArrHi}>→</span>
        </a>
      </div>

      <div style={ctStyles.footer} className="contact-footer">
        <div style={ctStyles.footLeft}>
          <svg width="42" height="20" viewBox="0 0 42 20">
            <circle cx="8" cy="10" r="7.5" fill="none" stroke="#F6F1E8" strokeWidth="1.3"/>
            <circle cx="16" cy="10" r="7.5" fill="none" stroke="#4338E8" strokeWidth="1.3"/>
          </svg>
          <span style={ctStyles.footName}>Akh<em style={{color:'#4338E8',fontStyle:'italic'}}>i</em>l Paladugu</span>
          <span style={ctStyles.footRole}>SEARCH • GROWTH • AI MARKETING</span>
        </div>
        <div style={ctStyles.footRight}>
          <span style={ctStyles.legal}>© 2026 · Strategy. Execution. Results. · Vijayawada, India</span>
          <a href="#top" style={ctStyles.backTop}>Back to top ↑</a>
        </div>
      </div>
    </div>
  </section>
);

const ctStyles = {
  wrap:{background:'#141528',color:'#F6F1E8',padding:'112px 48px 40px',marginTop:0},
  inner:{maxWidth:1320,margin:'0 auto',display:'flex',flexDirection:'column',gap:48},
  head:{display:'flex',flexDirection:'column',gap:18,maxWidth:780},
  eye:{fontFamily:"'Geist Mono', monospace",fontSize:12,letterSpacing:'0.14em',textTransform:'uppercase',color:'#C6C1F4',fontWeight:500},
  h2:{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(48px,7vw,96px)',lineHeight:0.98,letterSpacing:'-0.02em',color:'#F6F1E8',margin:0,fontWeight:400,textWrap:'balance'},
  em:{fontStyle:'italic',color:'#C6C1F4'},
  sub:{fontFamily:"'Radnika', sans-serif",fontSize:18,lineHeight:1.5,color:'#C6C1F4',margin:0,textWrap:'pretty',maxWidth:'58ch'},

  openTo:{display:'flex',flexWrap:'wrap',gap:8},
  openChip:{fontFamily:"'Geist Mono', monospace",fontSize:11.5,letterSpacing:'0.08em',textTransform:'uppercase',color:'#F6F1E8',background:'rgba(246,241,232,0.06)',padding:'8px 14px',borderRadius:999,border:'1px solid rgba(246,241,232,0.18)',whiteSpace:'nowrap'},

  cardRow:{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:0,border:'1px solid rgba(246,241,232,0.18)',borderRadius:14,overflow:'hidden'},
  card:{padding:'26px 24px',display:'flex',flexDirection:'column',gap:8,borderRight:'1px solid rgba(246,241,232,0.12)',textDecoration:'none',color:'#F6F1E8',position:'relative',transition:'background 120ms',cursor:'pointer'},
  cardHi:{padding:'26px 24px',display:'flex',flexDirection:'column',gap:8,background:'#4338E8',textDecoration:'none',color:'#F6F1E8',position:'relative'},
  cardEye:{fontFamily:"'Geist Mono', monospace",fontSize:11,letterSpacing:'0.14em',textTransform:'uppercase',color:'#C6C1F4'},
  cardEyeHi:{fontFamily:"'Geist Mono', monospace",fontSize:11,letterSpacing:'0.14em',textTransform:'uppercase',color:'#F6F1E8'},
  cardVal:{fontFamily:"'Instrument Serif', serif",fontSize:20,lineHeight:1.15,color:'#F6F1E8',letterSpacing:'-0.01em',wordBreak:'break-word'},
  cardValHi:{fontFamily:"'Instrument Serif', serif",fontStyle:'italic',fontSize:24,lineHeight:1.15,color:'#F6F1E8',letterSpacing:'-0.01em'},
  cardArr:{position:'absolute',top:24,right:24,fontFamily:"'Geist Mono', monospace",color:'#C6C1F4',fontSize:14},
  cardArrHi:{position:'absolute',top:24,right:24,fontFamily:"'Geist Mono', monospace",color:'#F6F1E8',fontSize:16},

  footer:{marginTop:48,paddingTop:32,borderTop:'1px solid rgba(246,241,232,0.12)',display:'flex',justifyContent:'space-between',alignItems:'center',gap:24,flexWrap:'wrap'},
  footLeft:{display:'flex',alignItems:'center',gap:14},
  footName:{fontFamily:"'Instrument Serif', serif",fontSize:22,letterSpacing:'-0.01em',color:'#F6F1E8'},
  footRole:{fontFamily:"'Geist Mono', monospace",fontSize:11,letterSpacing:'0.12em',textTransform:'uppercase',color:'#6A6B7A',paddingLeft:14,marginLeft:6,borderLeft:'1px solid rgba(246,241,232,0.18)'},
  footRight:{display:'flex',alignItems:'center',gap:24},
  legal:{fontFamily:"'Geist Mono', monospace",fontSize:11,letterSpacing:'0.1em',textTransform:'uppercase',color:'#6A6B7A'},
  backTop:{fontFamily:"'Geist Mono', monospace",fontSize:11,letterSpacing:'0.1em',textTransform:'uppercase',color:'#F6F1E8',textDecoration:'none'},
};

window.Contact = Contact;
