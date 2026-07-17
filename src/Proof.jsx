// Proof.jsx — live placement screenshots, two case studies
const A = (id, path) => (typeof window !== 'undefined' && window.__resources && window.__resources[id]) || path;

const Shot = ({ id, path, surface, caption }) => (
  <figure style={pfStyles.shot} className="lift">
    <div style={pfStyles.chrome}>
      <span style={{...pfStyles.dot, background:'#E5604D'}}/>
      <span style={{...pfStyles.dot, background:'#E6B23C'}}/>
      <span style={{...pfStyles.dot, background:'#6B7F5C'}}/>
      <span style={pfStyles.chromeLabel}>{surface}</span>
    </div>
    <div style={pfStyles.imgWrap}>
      <img src={A(id, path)} alt={caption} style={pfStyles.img} loading="lazy"/>
    </div>
    <figcaption style={pfStyles.caption}>{caption}</figcaption>
  </figure>
);

const Proof = () => {
  const cases = [
    {
      tag:'Case 01',
      brand:'Anne Sexton Pilates',
      market:'Wicklow, Ireland · Boutique fitness',
      queries:'pilates classes wicklow · reformer pilates wicklow',
      surfaces:['Organic','Local 3-pack','ChatGPT','Gemini','Perplexity'],
      industry:'Boutique Fitness',
      objective:'Increase local search visibility and AI search presence.',
      services:'Local SEO · Technical SEO · Google Business Profile · AI Search Optimisation',
      outcome:'Google Map 3-Pack · 5.0 Rating · Featured in ChatGPT, Gemini & Perplexity',
      shots:[
        {id:'proofGooglePilates', path:'assets/proof/proof-google-pilates.png', surface:'Google · Local pack', caption:'Google map 3-pack, 5.0 from 72 reviews, ahead of the local field.'},
        {id:'proofChatgptPilates', path:'assets/proof/proof-chatgpt-pilates.png', surface:'ChatGPT', caption:'ChatGPT names the studio when asked to recommend reformer Pilates.'},
        {id:'proofGeminiPilates', path:'assets/proof/proof-gemini-pilates.png', surface:'Gemini', caption:'Gemini describes the studio and its timetable for the category query.'},
        {id:'proofPerplexityPilates', path:'assets/proof/proof-perplexity-pilates.png', surface:'Perplexity', caption:'Perplexity surfaces the studio in both its Places panel and its Sources.'},
      ],
    },
    {
      tag:'Case 02',
      brand:'Boxly',
      market:'United Kingdom · B2B dental CRM',
      queries:'crm for dental clinics · dental crm software',
      surfaces:['Organic UK','Seomator-verified'],
      industry:'B2B SaaS · Dental CRM',
      objective:'Improve organic rankings for core buyer search terms in the UK.',
      services:'Technical SEO · Content Strategy · Keyword Research · SEO Audits',
      outcome:'Rank #2 in the UK · Verified position across the wider keyword set',
      shots:[
        {id:'proofBoxlyGoogle', path:'assets/proof/proof-boxly-google.png', surface:'Google UK', caption:'Rank #2 in the UK for the core buyer term, below only the incumbent.'},
        {id:'proofBoxlySeomator', path:'assets/proof/proof-boxly-seomator.png', surface:'Seomator tracker', caption:'Position verified across the wider dental CRM keyword set.'},
      ],
    },
  ];

  return (
    <section id="proof" style={pfStyles.wrap}>
      <div style={pfStyles.head}>
        <span style={pfStyles.eye}>Proof · 05 · Live placements</span>
        <h2 style={pfStyles.h2}>The <em style={pfStyles.em}>receipts</em>.</h2>
        <p style={pfStyles.sub}>Every screenshot below comes from real client work and demonstrates measurable improvements across search visibility, AI search, local search, and paid marketing campaigns.</p>
      </div>

      {cases.map(c => (
        <div key={c.brand} style={pfStyles.case}>
          <div style={pfStyles.caseHead}>
            <div style={pfStyles.caseTitleRow}>
              <span style={pfStyles.caseTag}>{c.tag}</span>
              <h3 style={pfStyles.caseBrand}>{c.brand}</h3>
            </div>
            <span style={pfStyles.caseMarket}>{c.market}</span>
            <span style={pfStyles.caseQueries}>{c.queries}</span>
            <div style={pfStyles.surfaces} className="proof-surfaces">
              {c.surfaces.map(s => <span key={s} style={pfStyles.surfaceChip}>{s}</span>)}
            </div>
            <div style={pfStyles.details} className="proof-details">
              <div style={pfStyles.detailCell}><span style={pfStyles.detailKey}>Industry</span><span style={pfStyles.detailVal}>{c.industry}</span></div>
              <div style={pfStyles.detailCell}><span style={pfStyles.detailKey}>Objective</span><span style={pfStyles.detailVal}>{c.objective}</span></div>
              <div style={pfStyles.detailCell}><span style={pfStyles.detailKey}>Services Delivered</span><span style={pfStyles.detailVal}>{c.services}</span></div>
              <div style={pfStyles.detailCell}><span style={pfStyles.detailKey}>Business Outcome</span><span style={pfStyles.detailVal}>{c.outcome}</span></div>
            </div>
          </div>
          <div style={pfStyles.grid} className="proof-grid">
            {c.shots.map(s => <Shot key={s.id} {...s}/>)}
          </div>
        </div>
      ))}
    </section>
  );
};

const pfStyles = {
  wrap:{padding:'96px 48px',maxWidth:1320,margin:'0 auto',display:'flex',flexDirection:'column',gap:48,borderTop:'1px solid rgba(20,21,40,0.12)'},
  head:{display:'flex',flexDirection:'column',gap:14,maxWidth:760},
  eye:{fontFamily:"'Geist Mono', monospace",fontSize:12,letterSpacing:'0.14em',textTransform:'uppercase',color:'#4338E8',fontWeight:500},
  h2:{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(40px,5.5vw,72px)',lineHeight:1.02,letterSpacing:'-0.015em',color:'#141528',margin:0,fontWeight:400,textWrap:'balance'},
  em:{fontStyle:'italic',color:'#4338E8'},
  sub:{fontFamily:"'Radnika', sans-serif",fontSize:18,lineHeight:1.5,color:'#3A3B4E',margin:0,textWrap:'pretty',maxWidth:'62ch'},

  case:{display:'flex',flexDirection:'column',gap:24,paddingTop:32,borderTop:'1px solid rgba(20,21,40,0.1)'},
  caseHead:{display:'flex',flexDirection:'column',gap:10,maxWidth:760},
  caseTitleRow:{display:'flex',alignItems:'baseline',gap:14},
  caseTag:{fontFamily:"'Geist Mono', monospace",fontSize:11.5,letterSpacing:'0.14em',textTransform:'uppercase',color:'#4338E8',fontWeight:500},
  caseBrand:{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(30px,3.5vw,44px)',lineHeight:1,letterSpacing:'-0.015em',color:'#141528',margin:0,fontWeight:400},
  caseMarket:{fontFamily:"'Radnika', sans-serif",fontSize:15,fontWeight:500,color:'#3A3B4E'},
  caseQueries:{fontFamily:"'Geist Mono', monospace",fontSize:12.5,letterSpacing:'0.02em',color:'#4338E8',background:'#EBE9FC',padding:'6px 12px',borderRadius:6,alignSelf:'flex-start'},
  surfaces:{display:'flex',flexWrap:'wrap',gap:6,marginTop:2},
  surfaceChip:{fontFamily:"'Geist Mono', monospace",fontSize:10.5,letterSpacing:'0.1em',textTransform:'uppercase',color:'#141528',background:'#F6F1E8',padding:'5px 11px',borderRadius:999,border:'1px solid rgba(20,21,40,0.1)'},

  details:{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:0,border:'1px solid rgba(20,21,40,0.1)',borderRadius:12,overflow:'hidden',marginTop:8},
  detailCell:{padding:'16px 18px',display:'flex',flexDirection:'column',gap:6,borderRight:'1px solid rgba(20,21,40,0.08)',background:'#FBF8F2'},
  detailKey:{fontFamily:"'Geist Mono', monospace",fontSize:10,letterSpacing:'0.1em',textTransform:'uppercase',color:'#6A6B7A'},
  detailVal:{fontFamily:"'Radnika', sans-serif",fontSize:13.5,fontWeight:500,color:'#141528',lineHeight:1.4},

  grid:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20},
  shot:{margin:0,background:'#FFFFFF',border:'1px solid rgba(20,21,40,0.12)',borderRadius:14,overflow:'hidden',display:'flex',flexDirection:'column'},
  chrome:{display:'flex',alignItems:'center',gap:7,padding:'12px 16px',borderBottom:'1px solid rgba(20,21,40,0.08)',background:'#FBF8F2'},
  dot:{width:10,height:10,borderRadius:'50%',flexShrink:0},
  chromeLabel:{fontFamily:"'Geist Mono', monospace",fontSize:10.5,letterSpacing:'0.1em',textTransform:'uppercase',color:'#6A6B7A',marginLeft:8},
  imgWrap:{background:'#FFFFFF',display:'flex',alignItems:'flex-start',justifyContent:'center'},
  img:{width:'100%',height:'auto',display:'block'},
  caption:{fontFamily:"'Radnika', sans-serif",fontSize:13.5,lineHeight:1.5,color:'#3A3B4E',padding:'16px 18px',borderTop:'1px solid rgba(20,21,40,0.08)'},
};

window.Proof = Proof;
