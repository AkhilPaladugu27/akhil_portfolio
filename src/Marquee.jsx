// Marquee.jsx — brands worked with, names only
const Marquee = () => {
  const brands = ['Nike', 'Adidas', 'LG', 'Lenovo', 'Canon', 'boAt', 'Park Avenue'];
  return (
    <section style={mqStyles.wrap}>
      <div style={mqStyles.inner} className="mq-inner">
        <div style={mqStyles.headCol}>
          <span style={mqStyles.eye}>Brands &amp; campaigns</span>
          <span style={mqStyles.eyeSub}>Worked on</span>
        </div>
        <div style={mqStyles.row} className="mq-row">
          {brands.map((b) => (
            <div key={b} style={mqStyles.cell} title={b} className="mq-cell">
              <span style={mqStyles.brandName}>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const mqStyles = {
  wrap:{borderTop:'1px solid rgba(20,21,40,0.12)',borderBottom:'1px solid rgba(20,21,40,0.12)',background:'#FBF8F2'},
  inner:{maxWidth:1320,margin:'0 auto',padding:'28px 48px',display:'grid',gridTemplateColumns:'180px 1fr',gap:32,alignItems:'center'},
  headCol:{display:'flex',flexDirection:'column',gap:2,paddingRight:24,borderRight:'1px solid rgba(20,21,40,0.12)'},
  eye:{fontFamily:"'Geist Mono', monospace",fontSize:11,letterSpacing:'0.14em',textTransform:'uppercase',color:'#141528',fontWeight:500},
  eyeSub:{fontFamily:"'Instrument Serif', serif",fontStyle:'italic',fontSize:18,color:'#4338E8',lineHeight:1},
  row:{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:0},
  cell:{display:'flex',alignItems:'center',justifyContent:'center',padding:'18px 12px',borderRight:'1px dashed rgba(20,21,40,0.12)',minHeight:64},
  brandName:{fontFamily:"'Instrument Serif', serif",fontSize:24,color:'#141528',letterSpacing:'-0.01em',whiteSpace:'nowrap'},
};

window.Marquee = Marquee;
