// Achievements.jsx — results, split into Search/SEO and Performance Marketing
const Achievements = () => {
  const seo = [
    {num:'Top 3', lab:'Google organic rankings', note:'Both core local terms, held'},
    {num:'#2', lab:'UK ranking · dental CRM', note:'Boxly, ahead of the field'},
    {num:'5.0★', lab:'Google map 3-pack', note:'72 reviews, deepest in the set'},
    {num:'4 / 4', lab:'Search surfaces won', note:'Organic · Local · GEO · AEO'},
  ];
  const paid = [
    {num:'322', lab:'Calls generated', note:'USA tax firm · $0.52 per call'},
    {num:'131', lab:'Luxury real estate leads', note:'Luxian USA · $0.15 per click'},
    {num:'754K', lab:'Ad impressions', note:'14.6K clicks · 80 ecommerce sales'},
    {num:'90+', lab:'B2B leads generated', note:'Tax and bookkeeping combined'},
  ];

  const Group = ({ tag, title, sub, stats }) => (
    <div style={acStyles.group}>
      <div style={acStyles.groupHead}>
        <span style={acStyles.groupTag}>{tag}</span>
        <div style={acStyles.groupTitleCol}>
          <h3 style={acStyles.groupTitle}>{title}</h3>
          <span style={acStyles.groupSub}>{sub}</span>
        </div>
      </div>
      <div style={acStyles.grid} className="ach-grid">
        {stats.map((s, i) => (
          <div key={i} style={acStyles.cell}>
            <span style={acStyles.num}>{s.num}</span>
            <span style={acStyles.lab}>{s.lab}</span>
            <span style={acStyles.note}>{s.note}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section style={acStyles.wrap}>
      <div style={acStyles.inner}>
        <div style={acStyles.head}>
          <span style={acStyles.eye}>Achievements · 04</span>
          <h2 style={acStyles.h2}>The work, in <em style={acStyles.em}>numbers</em>.</h2>
          <p style={acStyles.sub}>Real business outcomes from SEO, paid media, content, and growth campaigns. Every metric shown below is supported by reports, dashboards, or live campaign data included throughout this portfolio.</p>
        </div>
        <Group tag="A" title="Organic Growth" sub="SEO • Local Search • AI Search • Content Visibility" stats={seo}/>
        <Group tag="B" title="Performance Marketing" sub="Google Ads • Meta Ads • Amazon Ads • Lead Generation" stats={paid}/>
      </div>
    </section>
  );
};

const acStyles = {
  wrap:{background:'#141528',color:'#F6F1E8',padding:'96px 48px'},
  inner:{maxWidth:1320,margin:'0 auto',display:'flex',flexDirection:'column',gap:56},
  head:{display:'flex',flexDirection:'column',gap:14,maxWidth:680},
  eye:{fontFamily:"'Geist Mono', monospace",fontSize:12,letterSpacing:'0.14em',textTransform:'uppercase',color:'#C6C1F4',fontWeight:500},
  h2:{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(40px,5.5vw,72px)',lineHeight:1.02,letterSpacing:'-0.015em',color:'#F6F1E8',margin:0,fontWeight:400,textWrap:'balance'},
  em:{fontStyle:'italic',color:'#C6C1F4'},
  sub:{fontFamily:"'Radnika', sans-serif",fontSize:18,lineHeight:1.5,color:'#C6C1F4',margin:0,textWrap:'pretty',maxWidth:'60ch'},

  group:{display:'flex',flexDirection:'column',gap:24},
  groupHead:{display:'flex',alignItems:'center',gap:16},
  groupTag:{fontFamily:"'Geist Mono', monospace",fontSize:13,fontWeight:500,color:'#141528',background:'#C6C1F4',width:30,height:30,borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0},
  groupTitleCol:{display:'flex',flexDirection:'column',gap:2},
  groupTitle:{fontFamily:"'Instrument Serif', serif",fontSize:26,lineHeight:1,letterSpacing:'-0.01em',color:'#F6F1E8',margin:0,fontWeight:400},
  groupSub:{fontFamily:"'Geist Mono', monospace",fontSize:11,letterSpacing:'0.08em',textTransform:'uppercase',color:'#6A6B7A'},
  grid:{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:0,border:'1px solid rgba(246,241,232,0.12)',borderRadius:14,overflow:'hidden'},
  cell:{padding:'28px 26px',display:'flex',flexDirection:'column',gap:7,borderRight:'1px solid rgba(246,241,232,0.08)',minHeight:170},
  num:{fontFamily:"'Instrument Serif', serif",fontSize:56,lineHeight:0.95,letterSpacing:'-0.025em',color:'#F6F1E8'},
  lab:{fontFamily:"'Radnika', sans-serif",fontSize:15,fontWeight:500,color:'#F6F1E8',marginTop:6},
  note:{fontFamily:"'Geist Mono', monospace",fontSize:11,letterSpacing:'0.04em',color:'#6A6B7A',lineHeight:1.4},
};

window.Achievements = Achievements;
