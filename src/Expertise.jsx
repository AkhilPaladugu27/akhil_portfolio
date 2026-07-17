// Expertise.jsx — typographic grid of skills, grouped
const Expertise = () => {
  const groups = [
    {
      tag:'01',
      name:'Search Strategy',
      desc:'Standard Google rankings for the terms buyers actually type.',
      items:['Technical SEO','Keyword Research','Content Strategy','Information Architecture','Topical Authority','SEO Audits'],
    },
    {
      tag:'02',
      name:'Content & Conversion',
      desc:'The map 3-pack and business profile that win the call.',
      items:['Content Marketing','Landing Page Strategy','Website Copy','Conversion Optimization','Content Planning','User Journey Mapping'],
    },
    {
      tag:'03',
      name:'AI & Automation',
      desc:'Being named and cited inside the answer AI engines write.',
      items:['AI Search Optimisation','Prompt Engineering','Marketing Automation','Reporting Automation','AI Content Workflows','Research Systems'],
    },
    {
      tag:'04',
      name:'Performance Marketing',
      desc:'Paid demand capture once the organic foundation is set.',
      items:['Google Ads','Meta Ads','Campaign Strategy','Lead Generation','Marketing Analytics','Performance Reporting'],
    },
  ];
  return (
    <section style={exStyles.wrap}>
      <div style={exStyles.head}>
        <span style={exStyles.eye}>Expertise · 02</span>
        <h2 style={exStyles.h2}>One strategy. Multiple growth <em style={exStyles.em}>channels</em>.</h2>
        <p style={exStyles.sub}>Sustainable growth doesn't come from one channel. I build integrated marketing systems that connect search, content, paid media, analytics, automation, and AI to attract, convert, and retain customers.</p>
      </div>
      <div style={exStyles.grid} className="exp-cards-grid">
        {groups.map(g => (
          <div key={g.tag} style={exStyles.card} className="exp-card">
            <div style={exStyles.cardHead}>
              <span style={exStyles.cardTag}>{g.tag}</span>
              <h3 style={exStyles.cardName}>{g.name}</h3>
            </div>
            <p style={exStyles.cardDesc}>{g.desc}</p>
            <ul style={exStyles.list}>
              {g.items.map(i => (
                <li key={i} style={exStyles.li}>
                  <span style={exStyles.tick}>·</span>
                  <span style={exStyles.liText}>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const exStyles = {
  wrap:{padding:'96px 48px',maxWidth:1320,margin:'0 auto',display:'flex',flexDirection:'column',gap:48,borderTop:'1px solid rgba(20,21,40,0.12)'},
  head:{display:'flex',flexDirection:'column',gap:14,maxWidth:680},
  eye:{fontFamily:"'Geist Mono', monospace",fontSize:12,letterSpacing:'0.14em',textTransform:'uppercase',color:'#4338E8',fontWeight:500},
  h2:{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(40px,5.5vw,72px)',lineHeight:1.02,letterSpacing:'-0.015em',color:'#141528',margin:0,fontWeight:400,textWrap:'balance'},
  em:{fontStyle:'italic',color:'#4338E8'},
  sub:{fontFamily:"'Radnika', sans-serif",fontSize:18,lineHeight:1.5,color:'#3A3B4E',margin:0,textWrap:'pretty',maxWidth:'58ch'},
  grid:{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:0,border:'1px solid rgba(20,21,40,0.12)',borderRadius:14,overflow:'hidden',background:'#FFFFFF'},
  card:{padding:'32px 28px 28px',display:'flex',flexDirection:'column',gap:18,borderRight:'1px solid rgba(20,21,40,0.08)',minHeight:340},
  cardHead:{display:'flex',flexDirection:'column',gap:4},
  cardTag:{fontFamily:"'Geist Mono', monospace",fontSize:11.5,letterSpacing:'0.14em',color:'#4338E8',fontWeight:500},
  cardName:{fontFamily:"'Instrument Serif', serif",fontSize:32,lineHeight:1,letterSpacing:'-0.015em',color:'#141528',margin:0,fontWeight:400,fontStyle:'italic'},
  cardDesc:{fontFamily:"'Radnika', sans-serif",fontSize:14,lineHeight:1.5,color:'#3A3B4E',margin:0,paddingBottom:14,borderBottom:'1px solid rgba(20,21,40,0.08)'},
  list:{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:8},
  li:{display:'flex',alignItems:'flex-start',gap:8},
  tick:{color:'#4338E8',fontFamily:"'Geist Mono', monospace",fontSize:14,lineHeight:1.5,flexShrink:0},
  liText:{fontFamily:"'Radnika', sans-serif",fontSize:14,color:'#141528',lineHeight:1.5},
};

window.Expertise = Expertise;
