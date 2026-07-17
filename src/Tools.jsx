// Tools.jsx — Stack as an editorial spec-sheet (category → tools as text)
const Tools = () => {
  const cats = [
    {name:'Search & Research', items:['Semrush','Ahrefs','Google Search Console','Screaming Frog','Seomator']},
    {name:'Paid Media', items:['Google Ads','Meta Ads','Amazon Ads','LinkedIn Ads']},
    {name:'Analytics & Reporting', items:['GA4','Looker Studio','Google Tag Manager']},
    {name:'AI & Automation', items:['ChatGPT','Claude','Gemini','Perplexity','NotebookLM','Cursor','Claude Code','Make','n8n']},
    {name:'Content & CMS', items:['WordPress','Webflow','Canva']},
    {name:'Collaboration & Workflow', items:['Notion','Slack','Zapier','HubSpot','GoHighLevel']},
  ];

  return (
    <section id="tools" style={tlStyles.wrap}>
      <div style={tlStyles.head}>
        <span style={tlStyles.eye}>Stack · 08</span>
        <h2 style={tlStyles.h2}>The <em style={tlStyles.em}>stack</em> behind the work.</h2>
        <p style={tlStyles.sub}>A practical marketing stack used across research, strategy, execution, reporting, automation, and AI-assisted workflows.</p>
      </div>
      <div style={tlStyles.sheet}>
        {cats.map((c, i) => (
          <div key={c.name} style={{...tlStyles.row, borderTop: i===0 ? 'none' : '1px solid rgba(20,21,40,0.1)'}} className="tools-row">
            <div style={tlStyles.rowLeft} className="tools-rowleft">
              <span style={tlStyles.rowIndex}>{String(i+1).padStart(2,'0')}</span>
              <span style={tlStyles.rowName}>{c.name}</span>
            </div>
            <div style={tlStyles.rowItems}>
              {c.items.map((it, j) => (
                <React.Fragment key={it}>
                  <span style={tlStyles.tool}>{it}</span>
                  {j < c.items.length - 1 && <span style={tlStyles.sep}>·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const tlStyles = {
  wrap:{padding:'96px 48px',maxWidth:1320,margin:'0 auto',display:'flex',flexDirection:'column',gap:48,borderTop:'1px solid rgba(20,21,40,0.12)'},
  head:{display:'flex',flexDirection:'column',gap:14,maxWidth:680},
  eye:{fontFamily:"'Geist Mono', monospace",fontSize:12,letterSpacing:'0.14em',textTransform:'uppercase',color:'#4338E8',fontWeight:500},
  h2:{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(40px,5.5vw,72px)',lineHeight:1.02,letterSpacing:'-0.015em',color:'#141528',margin:0,fontWeight:400},
  em:{fontStyle:'italic',color:'#4338E8'},
  sub:{fontFamily:"'Radnika', sans-serif",fontSize:18,lineHeight:1.5,color:'#3A3B4E',margin:0,textWrap:'pretty',maxWidth:'58ch'},

  sheet:{background:'#FFFFFF',border:'1px solid rgba(20,21,40,0.12)',borderRadius:14,overflow:'hidden'},
  row:{display:'grid',gridTemplateColumns:'260px 1fr',gap:32,padding:'26px 32px',alignItems:'baseline'},
  rowLeft:{display:'flex',alignItems:'baseline',gap:14},
  rowIndex:{fontFamily:"'Geist Mono', monospace",fontSize:12,letterSpacing:'0.1em',color:'#4338E8',fontWeight:500},
  rowName:{fontFamily:"'Instrument Serif', serif",fontStyle:'italic',fontSize:24,color:'#141528',letterSpacing:'-0.005em',lineHeight:1},
  rowItems:{display:'flex',flexWrap:'wrap',alignItems:'center',gap:10},
  tool:{fontFamily:"'Radnika', sans-serif",fontSize:16,fontWeight:500,color:'#141528',letterSpacing:'-0.005em'},
  sep:{fontFamily:"'Geist Mono', monospace",fontSize:13,color:'#C6C1F4'},
};

window.Tools = Tools;
