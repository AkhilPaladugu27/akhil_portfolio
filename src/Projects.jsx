// Projects.jsx — 4 categories with drive links
const Projects = () => {
  const projects = [
    {
      tag:'01',
      title:'Content Writing',
      kicker:'Blogs and website content',
      desc:'Long form SEO blogs, website copy, service pages and funnel stage content. Written to rank and to convert.',
      items:['SEO blog articles','Website copy','Service pages','Funnel stage content'],
      href:'https://drive.google.com/drive/folders/1a0FLqIGjo94D-hU7zNf89k5xWh4b6I_l',
    },
    {
      tag:'02',
      title:'Content Calendars and Reel Scripts',
      kicker:'The monthly social engine',
      desc:'Monthly social calendars across LinkedIn, Instagram and Facebook, plus reel and carousel scripts with captions, hashtags and CTAs.',
      items:['Monthly content calendars','LinkedIn, Instagram, Facebook','Reel and carousel scripts','Captions, hashtags, CTAs'],
      href:'https://drive.google.com/drive/folders/1ofICSJL7fwWkIoljJL5UFBj_bloLB6XN',
    },
    {
      tag:'03',
      title:'AI Graphic Design',
      kicker:'Static posts and carousels',
      desc:'Static posts and carousels produced using AI image tools and Canva, with on image copy and clear calls to action.',
      items:['AI image tools','Canva production','Static posts and carousels','On image copy and CTAs'],
      href:'https://drive.google.com/drive/folders/1iav1nvZfuieE-idLTrnuQNI1YMeWezNx',
    },
    {
      tag:'04',
      title:'SEO Organic and AI Ranking Reports',
      kicker:'Found by Google and AI',
      desc:'Organic ranking growth plus AI search (AEO) visibility tracking. Proof of content getting found by both Google and AI engines.',
      items:['Organic ranking growth','AEO visibility tracking','Google and AI engines','Reporting dashboards'],
      href:'https://drive.google.com/drive/folders/1hhCAkyKz9K4aQZGm04JExTY0eM2WutKN',
    },
    {
      tag:'05',
      title:'SEO Keyword Research and Mapping',
      kicker:'The brief every sprint runs from',
      desc:'Search intent analysis, competitor gaps, topic clusters and keyword roadmaps. The brief every content sprint runs from.',
      items:['Search intent analysis','Competitor gaps','Topic clusters','Keyword roadmaps'],
      href:'https://drive.google.com/drive/folders/1XXubHwZ3bDzhe-g93PH114bBmg0oPsHR',
    },
    {
      tag:'06',
      title:'SEO Audit Reports',
      kicker:'How the work is measured',
      desc:'Technical and on page SEO audits showing how the work is measured and improved.',
      items:['Technical SEO audits','On page audits','Issue prioritisation','Measurement and improvement'],
      href:'https://drive.google.com/drive/folders/1vrqyU8Hd_pMj54_aXraCjndB61VBANht',
    },
    {
      tag:'07',
      title:'Web Page UI and UX Design',
      kicker:'Landing pages that ship',
      desc:'Landing pages built in WordPress and with AI tools, designed for clarity and conversion.',
      items:['WordPress builds','AI assisted design','Landing page UI','UX and content direction'],
      href:'https://drive.google.com/drive/folders/1_8iADJ-1-oKUCASNcmxt6BrwYEzxiZmk',
    },
    {
      tag:'08',
      title:'Marketing Plans and Strategy',
      kicker:'The plan before the spend',
      desc:'Marketing planning reports across channels, with budget allocations and the strategy behind each one.',
      items:['Multi-channel marketing plans','Budget allocation','Audience and platform strategy','Reach and lead forecasting'],
      href:'https://drive.google.com/drive/folders/1uLGOGTfHpuyGZgnxGgTo4HZ2j-mWFFeo?usp=sharing',
    },
  ];

  return (
    <section id="projects" style={prStyles.wrap}>
      <div style={prStyles.head}>
        <span style={prStyles.eye}>Projects · 07 · Proof of work</span>
        <h2 style={prStyles.h2}>Projects: <em style={prStyles.em}>proof</em> of work.</h2>
        <p style={prStyles.sub}>Real deliverables, not screenshots. Each card opens a Google Drive folder you can browse end to end: SEO reports, keyword maps, audits, content, creative and marketing plans.</p>
      </div>

      <div style={prStyles.grid} className="proj-grid">
        {projects.map(p => (
          <article key={p.tag} style={prStyles.card} className="lift proj-card">
            <div style={prStyles.cardLeft}>
              <span style={prStyles.cardTag}>{p.tag} · Category</span>
              <h3 style={prStyles.cardTitle}>{p.title}</h3>
              <span style={prStyles.cardKicker}>{p.kicker}</span>
              <p style={prStyles.cardDesc}>{p.desc}</p>
              <a href={p.href} target="_blank" rel="noopener noreferrer" style={prStyles.cta}>
                Open Drive folder <span style={prStyles.ctaArr}>→</span>
              </a>
            </div>
            <div style={prStyles.cardRight} className="proj-cardright">
              <span style={prStyles.includesEye}>Includes</span>
              <ul style={prStyles.list}>
                {p.items.map(i => (
                  <li key={i} style={prStyles.li}>
                    <span style={prStyles.tick}>◯</span>
                    <span style={prStyles.liText}>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const prStyles = {
  wrap:{padding:'96px 48px',maxWidth:1320,margin:'0 auto',display:'flex',flexDirection:'column',gap:48},
  head:{display:'flex',flexDirection:'column',gap:14,maxWidth:680},
  eye:{fontFamily:"'Geist Mono', monospace",fontSize:12,letterSpacing:'0.14em',textTransform:'uppercase',color:'#4338E8',fontWeight:500},
  h2:{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(40px,5.5vw,72px)',lineHeight:1.02,letterSpacing:'-0.015em',color:'#141528',margin:0,fontWeight:400,textWrap:'balance'},
  em:{fontStyle:'italic',color:'#4338E8'},
  sub:{fontFamily:"'Radnika', sans-serif",fontSize:18,lineHeight:1.5,color:'#3A3B4E',margin:0,textWrap:'pretty',maxWidth:'58ch'},

  grid:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20},
  card:{background:'#FFFFFF',border:'1px solid rgba(20,21,40,0.12)',borderRadius:14,padding:'32px',display:'grid',gridTemplateColumns:'1.3fr 1fr',gap:32},
  cardLeft:{display:'flex',flexDirection:'column',gap:12},
  cardTag:{fontFamily:"'Geist Mono', monospace",fontSize:11.5,letterSpacing:'0.14em',textTransform:'uppercase',color:'#6A6B7A',fontWeight:500},
  cardTitle:{fontFamily:"'Instrument Serif', serif",fontSize:30,lineHeight:1.05,letterSpacing:'-0.015em',color:'#141528',margin:0,fontWeight:400,textWrap:'balance'},
  cardKicker:{fontFamily:"'Instrument Serif', serif",fontStyle:'italic',fontSize:18,color:'#4338E8',lineHeight:1.3},
  cardDesc:{fontFamily:"'Radnika', sans-serif",fontSize:14.5,lineHeight:1.55,color:'#3A3B4E',margin:0,flex:1},
  cta:{fontFamily:"'Radnika', sans-serif",fontSize:14,fontWeight:500,padding:'12px 18px',borderRadius:8,background:'#4338E8',color:'#F6F1E8',textDecoration:'none',alignSelf:'flex-start',marginTop:8,display:'inline-flex',alignItems:'center',gap:8},
  ctaArr:{fontSize:14},

  cardRight:{borderLeft:'1px solid rgba(20,21,40,0.08)',paddingLeft:24,display:'flex',flexDirection:'column',gap:10},
  includesEye:{fontFamily:"'Geist Mono', monospace",fontSize:11,letterSpacing:'0.14em',textTransform:'uppercase',color:'#6A6B7A',marginBottom:4},
  list:{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:8},
  li:{display:'flex',alignItems:'center',gap:10},
  tick:{color:'#4338E8',fontFamily:"'Geist Mono', monospace",fontSize:10,flexShrink:0},
  liText:{fontFamily:"'Radnika', sans-serif",fontSize:13.5,color:'#141528'},
};

window.Projects = Projects;
