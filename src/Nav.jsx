// Nav.jsx
const Nav = () => {
  const items = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'tools', label: 'Stack' },
    { id: 'contact', label: 'Contact' },
  ];
  return (
    <nav style={navStyles.wrap} className="nav-wrap">
      <a href="#top" style={navStyles.mark}>
        <svg width="42" height="20" viewBox="0 0 42 20" style={{flexShrink:0}}>
          <circle cx="8" cy="10" r="7.5" fill="none" stroke="#4338E8" strokeWidth="1.3"/>
          <circle cx="16" cy="10" r="7.5" fill="none" stroke="#141528" strokeWidth="1.3"/>
        </svg>
        <span style={navStyles.word}>Akh<em style={navStyles.i}>i</em>l Paladugu</span>
        <span style={navStyles.role} className="nav-role">SEARCH • GROWTH • AI MARKETING</span>
      </a>
      <div style={navStyles.items} className="nav-items">
        <div className="nav-links" style={navStyles.linksRow}>
          {items.map(it => (
            <a key={it.id} href={`#${it.id}`} style={navStyles.link}>{it.label}</a>
          ))}
        </div>
        <a href="#contact" style={navStyles.cta} className="nav-cta">Hire me →</a>
      </div>
    </nav>
  );
};

const navStyles = {
  wrap:{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'18px 48px',borderBottom:'1px solid rgba(20,21,40,0.08)',background:'rgba(246,241,232,0.88)',backdropFilter:'blur(12px)',WebkitBackdropFilter:'blur(12px)',position:'sticky',top:0,zIndex:50},
  mark:{display:'flex',alignItems:'center',gap:12,textDecoration:'none',color:'inherit'},
  word:{fontFamily:"'Instrument Serif', serif",fontSize:24,letterSpacing:'-0.01em',color:'#141528',lineHeight:1},
  i:{color:'#4338E8',fontStyle:'italic'},
  role:{fontFamily:"'Geist Mono', monospace",fontSize:10.5,letterSpacing:'0.14em',textTransform:'uppercase',color:'#6A6B7A',paddingLeft:14,marginLeft:6,borderLeft:'1px solid rgba(20,21,40,0.18)'},
  items:{display:'flex',alignItems:'center',gap:28},
  linksRow:{display:'flex',alignItems:'center',gap:28},
  link:{fontFamily:"'Radnika', sans-serif",fontSize:14,fontWeight:500,textDecoration:'none',color:'#141528',letterSpacing:'-0.005em',transition:'color 120ms'},
  cta:{fontFamily:"'Radnika', sans-serif",fontSize:13.5,fontWeight:500,padding:'10px 18px',borderRadius:8,background:'#141528',color:'#F6F1E8',textDecoration:'none',letterSpacing:'-0.005em'},
};

window.Nav = Nav;
