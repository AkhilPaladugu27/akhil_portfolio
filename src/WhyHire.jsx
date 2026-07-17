// WhyHire.jsx — reasons + pull-quote on cream
const WhyHire = () => {
  const reasons = [
    {n:'01', t:'7+ Years of Hands-on Marketing Experience', d:'Real campaigns and rankings, not theory.'},
    {n:'02', t:'Real Campaign Results & Verified Outcomes', d:'Top three rankings and live AI citations, shown query by query.'},
    {n:'03', t:'Multi-Channel Customer Acquisition', d:'Organic, local, GEO and AEO, not just classic blue links.'},
    {n:'04', t:'Full-Funnel Marketing Execution', d:'I rank you, then convert the demand with Meta, Google and Amazon ads.'},
    {n:'05', t:'38+ brands, 4 countries', d:'eCommerce, SaaS, healthcare, real estate and consumer brands.'},
    {n:'06', t:'Strategy, Execution & Continuous Optimisation', d:'I write the plan and ship the work. Two people\'s job, one person.'},
  ];
  return (
    <section style={whStyles.wrap}>
      <div style={whStyles.head}>
        <span style={whStyles.eye}>Why hire me · 09</span>
        <h2 style={whStyles.h2}>What I bring to the <em style={whStyles.em}>table</em>.</h2>
      </div>
      <div style={whStyles.grid} className="wh-grid">
        {reasons.map(r => (
          <div key={r.n} style={whStyles.row}>
            <span style={whStyles.n}>{r.n}</span>
            <div style={whStyles.col}>
              <h3 style={whStyles.t}>{r.t}</h3>
              <p style={whStyles.d}>{r.d}</p>
            </div>
          </div>
        ))}
      </div>
      <blockquote style={whStyles.quote}>
        "Rank for what buyers <em style={whStyles.qEm}>search</em>. Convert what you rank for."
      </blockquote>
    </section>
  );
};

const whStyles = {
  wrap:{padding:'96px 48px',maxWidth:1320,margin:'0 auto',display:'flex',flexDirection:'column',gap:48,borderTop:'1px solid rgba(20,21,40,0.12)'},
  head:{display:'flex',flexDirection:'column',gap:14,maxWidth:680},
  eye:{fontFamily:"'Geist Mono', monospace",fontSize:12,letterSpacing:'0.14em',textTransform:'uppercase',color:'#4338E8',fontWeight:500},
  h2:{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(40px,5.5vw,72px)',lineHeight:1.02,letterSpacing:'-0.015em',color:'#141528',margin:0,fontWeight:400},
  em:{fontStyle:'italic',color:'#4338E8'},
  grid:{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:32,rowGap:40},
  row:{display:'grid',gridTemplateColumns:'48px 1fr',gap:16,paddingTop:18,borderTop:'1px solid rgba(20,21,40,0.12)'},
  n:{fontFamily:"'Geist Mono', monospace",fontSize:13,letterSpacing:'0.1em',color:'#4338E8',fontWeight:500,paddingTop:4},
  col:{display:'flex',flexDirection:'column',gap:6},
  t:{fontFamily:"'Instrument Serif', serif",fontSize:24,lineHeight:1.1,letterSpacing:'-0.01em',color:'#141528',margin:0,fontWeight:400},
  d:{fontFamily:"'Radnika', sans-serif",fontSize:15,lineHeight:1.55,color:'#3A3B4E',margin:0,textWrap:'pretty'},
  quote:{fontFamily:"'Instrument Serif', serif",fontStyle:'italic',fontSize:'clamp(36px, 5vw, 64px)',lineHeight:1.15,color:'#141528',margin:'24px 0 0',padding:'32px 0 0 32px',borderLeft:'2px solid #4338E8',textWrap:'balance',maxWidth:'18ch'},
  qEm:{color:'#4338E8'},
};

window.WhyHire = WhyHire;
