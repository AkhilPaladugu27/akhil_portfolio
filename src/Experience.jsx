// Experience.jsx — vertical timeline with scroll-progress indicator
const Experience = () => {
  const [progress, setProgress] = React.useState(0);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Progress = how far through the section we've scrolled
      const total = rect.height - vh * 0.5;
      const scrolled = -rect.top + vh * 0.3;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const roles = [
    {
      year:'Dec 2025 / Now',
      role:'Growth and Content Consultant',
      org:'Independent',
      location:'Remote',
      desc:'Build AI driven content systems for founders and brands: content calendars, social creative, custom GPTs and Claude Skills, and editorial workflows. Advise on content led growth and SEO.',
      tags:['AI content','Custom GPTs','Content systems','SEO'],
      hi:true,
    },
    {
      year:'May / Oct 2025',
      role:'SEO Specialist',
      org:'Boxly',
      location:'UK SaaS',
      desc:'Owned SEO and content strategy for a UK dental SaaS. Grew organic traffic by around 180 percent through technical SEO and a 250+ keyword content expansion. Ran AEO and GEO work that got the brand surfaced in Gemini answers for relevant search queries. Built landing pages and content led nurture flows.',
      tags:['SEO','AEO and GEO','SaaS','Organic growth'],
    },
    {
      year:'Aug 2023 / Apr 2025',
      role:'Digital Marketing Manager',
      org:'Aathri Marketing',
      location:'Agency · India',
      desc:'Planned and ran Meta and Google ad campaigns plus SEO and content for 20+ clients across eCommerce, healthcare and local services. Ranked client sites on Google. Began integrating AI tools into content and research, the foundation of my current AI practice.',
      tags:['Paid and organic','Multi client','Creative direction','AI tools'],
    },
    {
      year:'Aug 2022 / Aug 2023',
      role:'Senior Process Executive',
      org:'Cognizant',
      location:'Enterprise · India',
      desc:'Executed and optimized enterprise paid media campaigns for global brands including Nike, Adidas, LG, Lenovo, Canon, boAt and Park Avenue. Multi channel execution at enterprise budgets.',
      tags:['Enterprise','Global brands','Multi channel'],
    },
    {
      year:'Jan 2019 / Jul 2022',
      role:'Digital Marketing Executive',
      org:'Lakshya IT Consulting',
      location:'Agency · India',
      desc:'Search, display and social campaigns for SMB clients. Where the fundamentals were built: keywords, copy, landing pages.',
      tags:['Search','Social','Fundamentals'],
    },
  ];

  return (
    <section id="experience" ref={sectionRef} style={expStyles.wrap}>
      <div style={expStyles.head}>
        <span style={expStyles.eye}>Experience · 03</span>
        <h2 style={expStyles.h2}>Experience: seven years, <em style={expStyles.em}>five</em> chapters.</h2>
      </div>
      <div style={expStyles.timeline} className="timeline-wrap">
        <div style={expStyles.line} className="timeline-line"/>
        <div style={{...expStyles.lineFill, height:`${progress * 100}%`}} className="timeline-linefill"/>
        {roles.map((r, i) => {
          const itemPos = (i + 0.5) / roles.length;
          const active = progress >= itemPos - 0.05;
          return (
            <div key={i} style={expStyles.row} className="timeline-row">
              <div style={expStyles.year} className="timeline-year">
                <span style={{...expStyles.yearText, color: active ? '#4338E8' : '#141528', transition:'color 220ms'}}>{r.year}</span>
                <span style={r.hi ? expStyles.dotHi : (active ? expStyles.dotActive : expStyles.dot)}/>
              </div>
              <div style={r.hi ? expStyles.cardHi : (active ? expStyles.cardActive : expStyles.card)} className="timeline-card">
                <div style={expStyles.cardTop}>
                  <h3 style={expStyles.role}>{r.role}</h3>
                  <span style={expStyles.loc}>{r.location}</span>
                </div>
                <div style={expStyles.org}>{r.org}</div>
                <p style={expStyles.desc}>{r.desc}</p>
                <div style={expStyles.tags}>
                  {r.tags.map(t => <span key={t} style={expStyles.tag}>{t}</span>)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div style={expStyles.progressLab} className="timeline-progresslab">
        <span style={expStyles.progressEye}>Reading progress</span>
        <div style={expStyles.progressBar}>
          <div style={{...expStyles.progressFill, width:`${progress*100}%`}}/>
        </div>
        <span style={expStyles.progressNum}>{Math.round(progress*100).toString().padStart(2,'0')}%</span>
      </div>
    </section>
  );
};

const expStyles = {
  wrap:{padding:'96px 48px',maxWidth:1320,margin:'0 auto',display:'flex',flexDirection:'column',gap:48,borderTop:'1px solid rgba(20,21,40,0.12)'},
  head:{display:'flex',flexDirection:'column',gap:14,maxWidth:680},
  eye:{fontFamily:"'Geist Mono', monospace",fontSize:12,letterSpacing:'0.14em',textTransform:'uppercase',color:'#4338E8',fontWeight:500},
  h2:{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(40px,5.5vw,72px)',lineHeight:1.02,letterSpacing:'-0.015em',color:'#141528',margin:0,fontWeight:400},
  em:{fontStyle:'italic',color:'#4338E8'},
  timeline:{position:'relative',display:'flex',flexDirection:'column',gap:24,paddingLeft:0},
  line:{position:'absolute',left:172,top:8,bottom:8,width:1,background:'rgba(20,21,40,0.12)'},
  lineFill:{position:'absolute',left:171,top:8,width:3,background:'#4338E8',borderRadius:2,transition:'height 220ms cubic-bezier(0.2,0.8,0.2,1)',pointerEvents:'none'},
  row:{display:'grid',gridTemplateColumns:'160px 1fr',gap:32,alignItems:'flex-start'},
  year:{display:'flex',alignItems:'center',justifyContent:'space-between',paddingTop:24,position:'relative'},
  yearText:{fontFamily:"'Geist Mono', monospace",fontSize:12,letterSpacing:'0.1em',textTransform:'uppercase',color:'#141528',fontWeight:500},
  dot:{width:10,height:10,borderRadius:'50%',background:'#F6F1E8',border:'1.5px solid rgba(20,21,40,0.4)',position:'relative',zIndex:1,marginRight:-5,transition:'all 220ms'},
  dotActive:{width:12,height:12,borderRadius:'50%',background:'#4338E8',position:'relative',zIndex:1,marginRight:-6,boxShadow:'0 0 0 3px rgba(67,56,232,0.18)',transition:'all 220ms'},
  dotHi:{width:12,height:12,borderRadius:'50%',background:'#4338E8',position:'relative',zIndex:1,marginRight:-6,boxShadow:'0 0 0 4px rgba(67,56,232,0.15)'},
  card:{background:'#FFFFFF',border:'1px solid rgba(20,21,40,0.12)',borderRadius:14,padding:'22px 26px',display:'flex',flexDirection:'column',gap:8,marginLeft:24,transition:'all 220ms'},
  cardActive:{background:'#FFFFFF',border:'1px solid rgba(67,56,232,0.4)',borderRadius:14,padding:'22px 26px',display:'flex',flexDirection:'column',gap:8,marginLeft:24,boxShadow:'0 4px 14px -4px rgba(67,56,232,0.10)',transition:'all 220ms'},
  cardHi:{background:'#FFFFFF',border:'1px solid #4338E8',borderRadius:14,padding:'22px 26px',display:'flex',flexDirection:'column',gap:8,marginLeft:24,boxShadow:'0 4px 14px -4px rgba(67,56,232,0.18)'},
  cardTop:{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:16,flexWrap:'wrap'},
  role:{fontFamily:"'Instrument Serif', serif",fontSize:28,lineHeight:1.05,letterSpacing:'-0.012em',color:'#141528',margin:0,fontWeight:400},
  loc:{fontFamily:"'Geist Mono', monospace",fontSize:11,letterSpacing:'0.1em',textTransform:'uppercase',color:'#6A6B7A'},
  org:{fontFamily:"'Radnika', sans-serif",fontSize:15,fontWeight:500,color:'#4338E8',letterSpacing:'-0.005em'},
  desc:{fontFamily:"'Radnika', sans-serif",fontSize:15,lineHeight:1.6,color:'#3A3B4E',margin:'4px 0 0',textWrap:'pretty'},
  tags:{display:'flex',flexWrap:'wrap',gap:6,marginTop:8},
  tag:{fontFamily:"'Geist Mono', monospace",fontSize:11,letterSpacing:'0.05em',color:'#141528',background:'#F6F1E8',padding:'4px 10px',borderRadius:999,border:'1px solid rgba(20,21,40,0.08)',whiteSpace:'nowrap'},

  progressLab:{display:'flex',alignItems:'center',gap:14,padding:'16px 22px',background:'#FFFFFF',border:'1px solid rgba(20,21,40,0.12)',borderRadius:14,maxWidth:480,alignSelf:'flex-start',marginLeft:192},
  progressEye:{fontFamily:"'Geist Mono', monospace",fontSize:11,letterSpacing:'0.12em',textTransform:'uppercase',color:'#6A6B7A',whiteSpace:'nowrap'},
  progressBar:{flex:'1 1 auto',width:280,height:4,background:'#EBE9FC',borderRadius:2,overflow:'hidden',minWidth:160},
  progressFill:{height:'100%',background:'#4338E8',borderRadius:2,transition:'width 220ms'},
  progressNum:{fontFamily:"'Geist Mono', monospace",fontSize:12,color:'#141528',fontWeight:500,minWidth:36,textAlign:'right'},
};

window.Experience = Experience;
