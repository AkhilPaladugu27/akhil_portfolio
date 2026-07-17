// Hero.jsx — name, headline, lead, CTAs, portrait
const Hero = () => (
  <section id="top" style={heroStyles.wrap} className="hero-wrap">
    <div style={heroStyles.left} className="hero-left">
      <div style={heroStyles.eyeRow}>
        <span style={heroStyles.statusDot}/>
        <span style={heroStyles.eye}>Available for new work</span>
        <span style={heroStyles.eyeMid}>·</span>
        <span style={heroStyles.eye}>India · Remote · Worldwide</span>
      </div>

      <h1 style={heroStyles.headline}>
        Be the answer<br/>
        buyers <em style={heroStyles.em}>search</em> for.
      </h1>

      <p style={heroStyles.lead}>
        I'm Akhil, a Search &amp; Growth Marketing professional with 7+ years of experience helping businesses acquire customers through SEO, content marketing, paid media, analytics, AI-powered search, and marketing automation. I build scalable marketing systems that improve visibility, generate qualified demand, and drive measurable business growth across multiple digital channels. <span style={heroStyles.leadMark}>Search. Content. Paid. AI. One connected growth system.</span>
      </p>

      <div style={heroStyles.ctas}>
        <a href="#contact" style={heroStyles.primary} className="btn-primary">Hire me</a>
        <a href="#projects" style={heroStyles.secondary} className="btn-secondary">View projects</a>
      </div>

      <div style={heroStyles.metaCard}>
        <div style={heroStyles.metaCardHead}>
          <span style={heroStyles.metaCardEye}>Track record · at a glance</span>
          <span style={heroStyles.metaCardGlyph}>◯ ◯</span>
        </div>
        <div style={heroStyles.metaRow} className="hero-metarow">
          <div style={heroStyles.metaCell}>
            <div style={heroStyles.metaNumLine}>
              <span style={heroStyles.metaNum}>7</span>
              <span style={heroStyles.metaPlus}>+</span>
              <span style={heroStyles.metaUnit}>yrs</span>
            </div>
            <span style={heroStyles.metaLab}>Digital marketing</span>
          </div>
          <div style={heroStyles.metaDivider}/>
          <div style={heroStyles.metaCell}>
            <div style={heroStyles.metaNumLine}>
              <span style={heroStyles.metaNum}>38</span>
              <span style={heroStyles.metaPlus}>+</span>
            </div>
            <span style={heroStyles.metaLab}>Brands &amp; businesses scaled</span>
          </div>
          <div style={heroStyles.metaDivider}/>
          <div style={heroStyles.metaCell}>
            <div style={heroStyles.metaNumLine}>
              <span style={heroStyles.metaNum}>4</span>
              <span style={heroStyles.metaPlus}>countries</span>
            </div>
            <span style={heroStyles.metaLab}>India, USA, Canada, UK</span>
          </div>
          <div style={heroStyles.metaDivider}/>
          <div style={heroStyles.metaCell}>
            <div style={heroStyles.metaNumLine}>
              <span style={heroStyles.metaNum}>12</span>
              <span style={heroStyles.metaPlus}>+</span>
            </div>
            <span style={heroStyles.metaLab}>Industries served</span>
          </div>
        </div>
      </div>
    </div>

    <div style={heroStyles.right} className="hero-right">
      <div style={heroStyles.portraitWrap}>
        <div style={heroStyles.portraitTag}>
          <span style={heroStyles.tagEye}>Akhil Paladugu</span>
          <span style={heroStyles.tagRole}>Search, Growth &amp; AI Marketing</span>
        </div>
        <img src="assets/akhil-portrait.png" alt="Akhil Paladugu" style={heroStyles.portrait}/>
        <svg width="80" height="32" viewBox="0 0 80 32" style={heroStyles.portraitGlyph}>
          <circle cx="14" cy="16" r="12" fill="none" stroke="#F6F1E8" strokeWidth="1.5"/>
          <circle cx="26" cy="16" r="12" fill="none" stroke="#4338E8" strokeWidth="1.5"/>
        </svg>
      </div>
      <div style={heroStyles.portraitNote}>
        <span style={heroStyles.noteEye}>Currently</span>
        <span style={heroStyles.noteText}>Helping businesses build sustainable customer acquisition through search, content, paid media, analytics, and AI-powered marketing.</span>
      </div>
    </div>
  </section>
);

const heroStyles = {
  wrap:{padding:'80px 48px 64px',maxWidth:1320,margin:'0 auto',display:'grid',gridTemplateColumns:'1.55fr 1fr',gap:64,alignItems:'center'},
  left:{display:'flex',flexDirection:'column',gap:28},
  eyeRow:{display:'flex',alignItems:'center',gap:10},
  eye:{fontFamily:"'Geist Mono', monospace",fontSize:11.5,letterSpacing:'0.14em',textTransform:'uppercase',color:'#6A6B7A',fontWeight:500},
  eyeMid:{color:'#6A6B7A',fontFamily:"'Geist Mono', monospace",fontSize:11.5},
  statusDot:{width:8,height:8,borderRadius:'50%',background:'#6B7F5C',boxShadow:'0 0 0 4px rgba(107,127,92,0.18)',marginRight:4},
  headline:{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(56px, 7.5vw, 104px)',lineHeight:0.96,letterSpacing:'-0.02em',color:'#141528',margin:0,textWrap:'balance',fontWeight:400},
  em:{fontStyle:'italic',color:'#4338E8'},
  lead:{fontFamily:"'Radnika', sans-serif",fontWeight:500,fontSize:19,lineHeight:1.5,color:'#3A3B4E',margin:0,maxWidth:'56ch',textWrap:'pretty'},
  leadMark:{fontFamily:"'Geist Mono', monospace",fontSize:14.5,color:'#141528',background:'#EBE9FC',padding:'2px 8px',borderRadius:4,letterSpacing:'-0.005em',whiteSpace:'nowrap',display:'inline-block',marginTop:4},
  ctas:{display:'flex',gap:14,marginTop:8,alignItems:'center',flexWrap:'wrap'},
  primary:{fontFamily:"'Radnika', sans-serif",fontSize:15,fontWeight:500,padding:'14px 26px',borderRadius:8,background:'#4338E8',color:'#F6F1E8',cursor:'pointer',textDecoration:'none',letterSpacing:'-0.005em',whiteSpace:'nowrap'},
  secondary:{fontFamily:"'Radnika', sans-serif",fontSize:15,fontWeight:500,padding:'14px 26px',borderRadius:8,border:'1px solid rgba(20,21,40,0.24)',background:'transparent',color:'#141528',cursor:'pointer',textDecoration:'none',letterSpacing:'-0.005em',whiteSpace:'nowrap'},
  tertiary:{fontFamily:"'Radnika', sans-serif",fontSize:14.5,fontWeight:500,color:'#141528',textDecoration:'none',padding:'14px 4px',display:'inline-flex',alignItems:'center',gap:6,whiteSpace:'nowrap'},
  arr:{color:'#4338E8'},

  metaCard:{marginTop:24,background:'#FFFFFF',border:'1px solid rgba(20,21,40,0.12)',borderRadius:14,padding:'18px 24px 22px',display:'flex',flexDirection:'column',gap:14,boxShadow:'0 1px 2px rgba(20,21,40,0.04)'},
  metaCardHead:{display:'flex',justifyContent:'space-between',alignItems:'center'},
  metaCardEye:{fontFamily:"'Geist Mono', monospace",fontSize:11,letterSpacing:'0.14em',textTransform:'uppercase',color:'#6A6B7A',fontWeight:500},
  metaCardGlyph:{fontFamily:"'Geist Mono', monospace",fontSize:11,color:'#4338E8',letterSpacing:'0.05em'},
  metaRow:{display:'grid',gridTemplateColumns:'1fr 1px 1fr 1px 1fr 1px 1fr',gap:0,alignItems:'center'},
  metaCell:{display:'flex',flexDirection:'column',gap:4,padding:'4px 16px'},
  metaDivider:{width:1,height:48,background:'rgba(20,21,40,0.08)'},
  metaNumLine:{display:'flex',alignItems:'baseline',gap:4},
  metaNum:{fontFamily:"'Instrument Serif', serif",fontSize:44,lineHeight:1,color:'#141528',letterSpacing:'-0.02em'},
  metaPlus:{fontFamily:"'Instrument Serif', serif",fontSize:22,color:'#4338E8',letterSpacing:'-0.01em',fontStyle:'italic'},
  metaUnit:{fontFamily:"'Geist Mono', monospace",fontSize:13,letterSpacing:'0.04em',color:'#6A6B7A',marginLeft:2},
  metaLab:{fontFamily:"'Radnika', sans-serif",fontSize:12.5,color:'#3A3B4E',lineHeight:1.3},

  right:{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-end',gap:18,position:'relative'},
  portraitWrap:{position:'relative',width:'min(100%, 460px)',aspectRatio:'1/1',borderRadius:22,overflow:'hidden',background:'#EBE9FC',boxShadow:'0 18px 40px -12px rgba(20,21,40,0.18)'},
  portrait:{width:'100%',height:'100%',objectFit:'cover',display:'block'},
  portraitTag:{position:'absolute',top:20,left:20,zIndex:2,display:'flex',flexDirection:'column',gap:3,background:'rgba(246,241,232,0.92)',backdropFilter:'blur(8px)',padding:'10px 14px',borderRadius:10,border:'1px solid rgba(20,21,40,0.08)'},
  tagEye:{fontFamily:"'Geist Mono', monospace",fontSize:10.5,letterSpacing:'0.14em',textTransform:'uppercase',color:'#4338E8',fontWeight:500},
  tagRole:{fontFamily:"'Radnika', sans-serif",fontSize:13,color:'#141528',fontWeight:500},
  portraitGlyph:{position:'absolute',bottom:18,right:18,zIndex:2},
  portraitNote:{display:'flex',flexDirection:'column',gap:6,maxWidth:460,padding:'14px 18px',background:'rgba(67,56,232,0.04)',borderLeft:'2px solid #4338E8',borderRadius:'0 8px 8px 0'},
  noteEye:{fontFamily:"'Geist Mono', monospace",fontSize:10.5,letterSpacing:'0.14em',textTransform:'uppercase',color:'#4338E8',fontWeight:500},
  noteText:{fontFamily:"'Instrument Serif', serif",fontStyle:'italic',fontSize:17,lineHeight:1.35,color:'#141528'},
};

window.Hero = Hero;
