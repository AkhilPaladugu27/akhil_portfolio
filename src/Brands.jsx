// Brands.jsx — brands & businesses, segregated by category (per portfolio)
const Brands = () => {
  const cats = [
    {
      tag:'01', name:'Global Brands', meta:'Amazon Ads @ Cognizant · B2C / D2C', wide:true,
      items:['boAt','Cadbury Dairy Milk','Adidas','Nike','Sugar Cosmetics','Paper Boat','LG','Usha Fans','TCL','Lenovo','Asus','Canon','Aashirvaad','Yoga Bar','Lux','American Tourister','Skybags','Lakme','Garnier'],
    },
    {
      tag:'02', name:'SaaS', meta:'B2B SaaS · United Kingdom',
      items:['Boxly · Dental CRM','Beami · Cosmetic CRM','Ask Holly · Hospitality CRM'],
    },
    {
      tag:'03', name:'E-commerce', meta:'B2C · USA',
      items:['Fommy','Amzer · Mobile accessories'],
    },
    {
      tag:'04', name:'Healthcare', meta:'B2C / B2B · USA',
      items:['The Town Dentist','Town Physical Therapy','Triventsys · Medical records'],
    },
    {
      tag:'05', name:'Real Estate', meta:'B2C · USA & Canada',
      items:['The Luxian · Luxury (USA)','Team Nav · (Canada)'],
    },
    {
      tag:'06', name:'Consumer / D2C', meta:'D2C / B2C · India & USA',
      items:['Darzee · Mattress','N Cold Pressed','YNG Fresh','Transcendent Active · (USA)'],
    },
    {
      tag:'07', name:'Digital Marketing & Advertising', meta:'B2B / B2C · India & Global',
      items:['Shertech Info','Aathri Marketing','Naavigo Agency','Million Dollar Ads'],
    },
    {
      tag:'08', name:'EdTech', meta:'B2C · India',
      items:['Sapthora','Global Exim Institute'],
    },
    {
      tag:'09', name:'Advertising & Media', meta:'B2B · India',
      items:['Billboards India · DOOH'],
    },
    {
      tag:'10', name:'Finance & Professional Services', meta:'B2B / B2C · USA',
      items:['UTG · Tax & accounting'],
    },
  ];

  return (
    <section id="brands" style={brStyles.wrap}>
      <div style={brStyles.head}>
        <span style={brStyles.eye}>Brands &amp; businesses · 06</span>
        <h2 style={brStyles.h2}>38+ brands. 4 countries. <em style={brStyles.em}>12+</em> industries.</h2>
        <p style={brStyles.sub}>Experience across startups, agencies, SaaS companies, healthcare organizations, ecommerce brands, educational institutions, consumer brands, and professional service businesses in India, the USA, Canada, and the UK.</p>
      </div>

      <div style={brStyles.summary} className="brands-summary">
        <div style={brStyles.sumCell}><span style={brStyles.sumNum}>38<span style={brStyles.sumPlus}>+</span></span><span style={brStyles.sumLab}>Brands &amp; businesses</span></div>
        <div style={brStyles.sumDiv}/>
        <div style={brStyles.sumCell}><span style={brStyles.sumNum}>4</span><span style={brStyles.sumLab}>Markets · India, USA, UK, Canada</span></div>
        <div style={brStyles.sumDiv}/>
        <div style={brStyles.sumCell}><span style={brStyles.sumNumSm}>B2B · B2C · D2C · SaaS</span><span style={brStyles.sumLab}>Business models run</span></div>
        <div style={brStyles.sumDiv}/>
        <div style={brStyles.sumCell}><span style={brStyles.sumNumSm}>Google · Meta · Amazon<br/>LinkedIn · AI Search</span><span style={brStyles.sumLab}>Platforms</span></div>
      </div>

      <div style={brStyles.grid} className="brands-grid">
        {cats.map(c => (
          <div key={c.tag} style={{...brStyles.card, ...(c.wide ? brStyles.cardWide : {})}} className="lift">
            <div style={brStyles.cardHead}>
              <span style={brStyles.cardTag}>{c.tag}</span>
              <div style={brStyles.cardTitleCol}>
                <h3 style={brStyles.cardName}>{c.name}</h3>
                <span style={brStyles.cardMeta}>{c.meta}</span>
              </div>
              <span style={brStyles.cardCount}>{String(c.items.length).padStart(2,'0')}</span>
            </div>
            <div style={brStyles.chips}>
              {c.items.map(it => <span key={it} style={brStyles.chip}>{it}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const brStyles = {
  wrap:{padding:'96px 48px',maxWidth:1320,margin:'0 auto',display:'flex',flexDirection:'column',gap:48,borderTop:'1px solid rgba(20,21,40,0.12)'},
  head:{display:'flex',flexDirection:'column',gap:14,maxWidth:760},
  eye:{fontFamily:"'Geist Mono', monospace",fontSize:12,letterSpacing:'0.14em',textTransform:'uppercase',color:'#4338E8',fontWeight:500},
  h2:{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(40px,5.5vw,72px)',lineHeight:1.02,letterSpacing:'-0.015em',color:'#141528',margin:0,fontWeight:400,textWrap:'balance'},
  em:{fontStyle:'italic',color:'#4338E8'},
  sub:{fontFamily:"'Radnika', sans-serif",fontSize:18,lineHeight:1.5,color:'#3A3B4E',margin:0,textWrap:'pretty',maxWidth:'62ch'},

  summary:{display:'grid',gridTemplateColumns:'1fr 1px 1.2fr 1px 1.3fr 1px 1.2fr',gap:0,alignItems:'center',background:'#141528',borderRadius:14,padding:'28px 32px'},
  sumCell:{display:'flex',flexDirection:'column',gap:6,padding:'0 22px'},
  sumDiv:{width:1,height:54,background:'rgba(246,241,232,0.14)'},
  sumNum:{fontFamily:"'Instrument Serif', serif",fontSize:52,lineHeight:0.9,letterSpacing:'-0.025em',color:'#F6F1E8'},
  sumNumSm:{fontFamily:"'Instrument Serif', serif",fontStyle:'italic',fontSize:24,lineHeight:1.05,letterSpacing:'-0.01em',color:'#C6C1F4'},
  sumPlus:{color:'#C6C1F4',fontStyle:'italic'},
  sumLab:{fontFamily:"'Geist Mono', monospace",fontSize:11,letterSpacing:'0.08em',textTransform:'uppercase',color:'#6A6B7A',lineHeight:1.4},

  grid:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:18},
  card:{background:'#FFFFFF',border:'1px solid rgba(20,21,40,0.12)',borderRadius:14,padding:'26px 26px 24px',display:'flex',flexDirection:'column',gap:18},
  cardWide:{gridColumn:'1 / -1'},
  cardHead:{display:'flex',alignItems:'flex-start',gap:14},
  cardTag:{fontFamily:"'Geist Mono', monospace",fontSize:11.5,letterSpacing:'0.14em',color:'#4338E8',fontWeight:500,paddingTop:6},
  cardTitleCol:{display:'flex',flexDirection:'column',gap:3,flex:1},
  cardName:{fontFamily:"'Instrument Serif', serif",fontSize:26,lineHeight:1,letterSpacing:'-0.015em',color:'#141528',margin:0,fontWeight:400},
  cardMeta:{fontFamily:"'Geist Mono', monospace",fontSize:10.5,letterSpacing:'0.08em',textTransform:'uppercase',color:'#6A6B7A'},
  cardCount:{fontFamily:"'Geist Mono', monospace",fontSize:11,letterSpacing:'0.1em',color:'#6A6B7A',paddingTop:6},
  chips:{display:'flex',flexWrap:'wrap',gap:7},
  chip:{fontFamily:"'Radnika', sans-serif",fontSize:13,color:'#141528',background:'#F6F1E8',padding:'5px 12px',borderRadius:999,border:'1px solid rgba(20,21,40,0.1)',whiteSpace:'nowrap',fontWeight:500},
};

window.Brands = Brands;
