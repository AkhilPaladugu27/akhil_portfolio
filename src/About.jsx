// About.jsx — editorial prose left, snapshot right
const About = () => (
  <section id="about" style={abStyles.wrap}>
    <div style={abStyles.head}>
      <span style={abStyles.eye}>About · 01</span>
      <h2 style={abStyles.h2}>About: how modern <em style={abStyles.em}>marketing</em> drives growth.</h2>
    </div>

    <div style={abStyles.grid} className="about-grid">
      <div style={abStyles.prose}>
        <p style={abStyles.lead}>
          I help businesses grow by combining search, content, paid media, analytics, and automation into one measurable growth system. Instead of treating marketing channels independently, I focus on building connected strategies that attract qualified audiences, improve customer acquisition, and create long-term business growth.
        </p>
        <p style={abStyles.body}>
          Today's buyers rarely discover a business through a single channel. They search on Google, watch YouTube, explore LinkedIn, ask AI assistants, compare reviews, and interact with content before making a decision. My role is to make businesses visible across every important touchpoint while ensuring every marketing effort contributes to measurable business outcomes.
        </p>
        <p style={abStyles.body}>
          Every recommendation I make is backed by research, execution, and data. From SEO audits and keyword research to landing pages, paid campaigns, analytics dashboards, content strategies, and AI-powered workflows, I focus on building repeatable systems that improve marketing performance rather than isolated campaigns.
        </p>
        <p style={abStyles.body}>
          Over the last seven years, I have worked with startups, agencies, SaaS companies, healthcare organizations, ecommerce brands, educational institutions, and professional service businesses across India, the USA, Canada, and the UK. My objective has remained the same: build marketing systems that generate sustainable growth and measurable business impact.
        </p>
      </div>

      <aside style={abStyles.snap}>
        <div style={abStyles.snapHead}>
          <span style={abStyles.snapEye}>Snapshot</span>
          <span style={abStyles.snapDot}>◯ ◯</span>
        </div>
        <div style={abStyles.snapRow}>
          <span style={abStyles.snapKey}>Based</span>
          <span style={abStyles.snapVal}>India · Remote</span>
        </div>
        <div style={abStyles.snapRow}>
          <span style={abStyles.snapKey}>Markets</span>
          <span style={abStyles.snapVal}>India · USA · Canada · UK</span>
        </div>
        <div style={abStyles.snapRow}>
          <span style={abStyles.snapKey}>Models</span>
          <span style={abStyles.snapVal}>eCommerce, SaaS &amp; CRM, B2B,<br/>Healthcare, Real estate,<br/>Local services, Consumer brands</span>
        </div>
        <div style={abStyles.snapRow}>
          <span style={abStyles.snapKey}>Practice</span>
          <span style={abStyles.snapVal}>Search Strategy, Content<br/>Marketing, Growth Marketing,<br/>Paid Acquisition, Marketing<br/>Analytics, Marketing Automation</span>
        </div>
        <div style={abStyles.snapRow}>
          <span style={abStyles.snapKey}>Open to</span>
          <span style={abStyles.snapVal}>Full-time · Freelance ·<br/>Project consulting</span>
        </div>
        <div style={abStyles.snapFooter}>
          <span style={abStyles.snapFootEye}>The four surfaces I win</span>
          <div style={abStyles.chain}>
            <span style={abStyles.chainStep}>Organic</span>
            <span style={abStyles.chainArr}>·</span>
            <span style={abStyles.chainStep}>Local</span>
            <span style={abStyles.chainArr}>·</span>
            <span style={abStyles.chainStepHi}>GEO</span>
            <span style={abStyles.chainArr}>·</span>
            <span style={abStyles.chainStepHi}>AEO</span>
            <span style={abStyles.chainArr}>→</span>
            <span style={abStyles.chainStep}>Paid conversion</span>
          </div>
        </div>
      </aside>
    </div>
  </section>
);

const abStyles = {
  wrap:{padding:'96px 48px',maxWidth:1320,margin:'0 auto',display:'flex',flexDirection:'column',gap:48},
  head:{display:'flex',flexDirection:'column',gap:14,maxWidth:780},
  eye:{fontFamily:"'Geist Mono', monospace",fontSize:12,letterSpacing:'0.14em',textTransform:'uppercase',color:'#4338E8',fontWeight:500},
  h2:{fontFamily:"'Instrument Serif', serif",fontSize:'clamp(40px,5.5vw,72px)',lineHeight:1.02,letterSpacing:'-0.015em',color:'#141528',margin:0,fontWeight:400,textWrap:'balance'},
  em:{fontStyle:'italic',color:'#4338E8'},

  grid:{display:'grid',gridTemplateColumns:'1.4fr 1fr',gap:64,alignItems:'start'},
  prose:{display:'flex',flexDirection:'column',gap:18,maxWidth:'58ch'},
  lead:{fontFamily:"'Radnika', sans-serif",fontWeight:500,fontSize:22,lineHeight:1.45,color:'#141528',margin:0,textWrap:'pretty'},
  body:{fontFamily:"'Radnika', sans-serif",fontSize:17,lineHeight:1.6,color:'#3A3B4E',margin:0,textWrap:'pretty'},
  bodyEm:{fontStyle:'italic',color:'#141528'},

  snap:{background:'#FFFFFF',border:'1px solid rgba(20,21,40,0.12)',borderRadius:14,padding:'28px 28px 24px',display:'flex',flexDirection:'column'},
  snapHead:{display:'flex',justifyContent:'space-between',alignItems:'center',paddingBottom:16,marginBottom:8,borderBottom:'1px solid rgba(20,21,40,0.08)'},
  snapEye:{fontFamily:"'Geist Mono', monospace",fontSize:11,letterSpacing:'0.14em',textTransform:'uppercase',color:'#6A6B7A',fontWeight:500},
  snapDot:{fontFamily:"'Geist Mono', monospace",fontSize:11,color:'#4338E8',letterSpacing:'0.05em'},
  snapRow:{display:'grid',gridTemplateColumns:'90px 1fr',gap:12,padding:'12px 0',borderBottom:'1px dashed rgba(20,21,40,0.08)'},
  snapKey:{fontFamily:"'Geist Mono', monospace",fontSize:11,letterSpacing:'0.1em',textTransform:'uppercase',color:'#6A6B7A',paddingTop:2},
  snapVal:{fontFamily:"'Radnika', sans-serif",fontSize:14,color:'#141528',lineHeight:1.45},
  snapFooter:{paddingTop:18,marginTop:6,display:'flex',flexDirection:'column',gap:10},
  snapFootEye:{fontFamily:"'Geist Mono', monospace",fontSize:10.5,letterSpacing:'0.12em',textTransform:'uppercase',color:'#6A6B7A'},
  chain:{display:'flex',flexWrap:'wrap',alignItems:'center',gap:6},
  chainStep:{fontFamily:"'Geist Mono', monospace",fontSize:11.5,color:'#141528',background:'#F6F1E8',padding:'4px 8px',borderRadius:4,border:'1px solid rgba(20,21,40,0.08)',whiteSpace:'nowrap'},
  chainStepHi:{fontFamily:"'Geist Mono', monospace",fontSize:11.5,color:'#F6F1E8',background:'#4338E8',padding:'4px 8px',borderRadius:4,whiteSpace:'nowrap'},
  chainArr:{color:'#6A6B7A',fontFamily:"'Geist Mono', monospace",fontSize:12},
};

window.About = About;
