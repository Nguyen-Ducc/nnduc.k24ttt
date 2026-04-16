import banner from './img/banner.png'
import hero1 from './img/anh-cafe-1.png'
import hero2 from './img/anh-cafe-2.png'
import hero3 from './img/anh-cafe-3.png'
import roast from './img/ca-phe-che-bien.jpg'
import popular from './img/cafe-hien-nay.jpg'
import logo from './img/logo.png'

const menuItems = [
  ['Cà phê sữa', '25k'],
  ['Cà phê muối', '25k'],
  ['Cà phê sữa dừa', '25k'],
  ['Cà phê sữa Sài Gòn', '25k'],
  ['Cà phê đen', '20k'],
  ['Espresso', '35k'],
  ['Mocha', '35k'],
  ['Capuchino', '35k'],
  ['Latte', '35k'],
  ['IceCream Latte', '40k'],
]

function App() {
  return (
    <div id="app">
      {/* HEADER */}
      <header className="topbar">
        <div className="brand">
          <img src={logo} alt="Coffee Duc Logo" />  
          <div className="brand-text">
            <strong>DUC Coffee</strong>
            <span>Đậm vị – đúng gu.</span>
          </div>
        </div>

        <nav className="main-nav">
          <a href="#home">Trang chủ</a>
          <a href="#about">Giới thiệu</a>
          <a href="#menu">Thực đơn</a>
          <a href="#news">Tin tức</a>
          <a href="#contact">Liên hệ</a>
        </nav>
      </header>

      {/* HERO */}
      <section
        className="hero"
        id="home"
        style={{
  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url(${banner})`
}}
      >
        <div className="hero-copy">
          <p>
            Không gian cà phê hiện đại, nơi bạn có thể thư giãn, học tập và tận hưởng
            những ly cà phê thơm ngon mỗi ngày.
          </p>
          <div className="hero-actions">
            <a href="#menu" className="primary">Xem thực đơn</a>
            <a href="#contact" className="secondary">Liên hệ</a>
          </div>
        </div>
      </section>

      {/* IMAGE */}
      <section className="image-grid">
        <div className="large-card">
          <img src={hero1} alt="Cafe" />
        </div>
        <div className="stacked">
          <img src={hero2} alt="Cafe" />
          <img src={hero3} alt="Cafe" />
        </div>
      </section>

      {/* MENU */}
      <section className="menu-panel" id="menu">
        <div className="menu-header">
          <div>
            <h2>Thực đơn</h2>
            <p>Danh sách các món cà phê phổ biến được yêu thích.</p>
          </div>
        </div>

        <div className="menu-grid">
          {menuItems.map(([name, price]) => (
            <div className="menu-item" key={name}>
              <span>{name}</span>
              <span>{price}</span>
            </div>
          ))}
        </div>

        <div className="menu-action">
          <button>Xem thêm</button>
        </div>
      </section>

      {/* ABOUT */}
      <section className="gallery" id="about">
        <div className="gallery-card">
          <img src={roast} alt="Chế biến" />
          <div className="gallery-copy">
            <h3>Chế biến cà phê</h3>
            <p>Cà phê sạch là cà phê nguyên chất không pha trộn thêm bất kỳ loại bột, phụ gia nào.</p>
          </div>
        </div>

        <div className="gallery-card">
          <img src={popular} alt="Phổ biến" />
          <div className="gallery-copy">
            <h3>Cà phê phổ biến</h3>
            <p>Điểm danh 20 loại cà phê phổ biến được ưa chuộng tại Việt Nam.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer" id="contact">
        <div className="footer-grid">
          <div className="footer-block brand-footer">
  <div className="footer-brand">
    <img src={logo} alt="Duc Coffee Logo" />
    <div>
      <strong>DUC Coffee</strong>
      <span>Đậm vị – đúng gu.</span>
    </div>
  </div>

  <p>
    Chúng tôi mong muốn tạo nên hương vị thức uống tuyệt vời nhất. 
    Là điểm đến đầu tiên dành cho bạn khi muốn thưởng thức trọn vẹn của tách Coffee.
  </p>

  <p>Duc Coffee – Uống là mê.</p>
</div>

          <div className="footer-block">
            <h3>Liên hệ</h3>
            <ul>
              <li>Địa chỉ: Kon Tum-Việt Nam</li>
              <li>Hotline: 0999999999</li>
              <li>Email: duccafe@gmail.com</li>
            </ul>
          </div>

          <div className="footer-block">
            <h3>Chính sách</h3>
            <ul>
              <li><a href="#home">Trang chủ</a></li>
              <li><a href="#about">Giới thiệu</a></li>
              <li><a href="#menu">Thực đơn</a></li>
              <li><a href="#news">Tin tức</a></li>
              <li><a href="#contact">Liên hệ</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© Nguyen Nguyen Duc</span>
        </div>
      </footer>
    </div>
  )
}

export default App