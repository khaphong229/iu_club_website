
import './Education.css'
function Education() {
  return (
    <div className="container">
    <header className="hero-section">
        <div className="overlay">
          <h1>Đào Tạo</h1>
          <p>
            CLB sẽ đào tạo các bạn từ những thứ cơ bản nhất của lập trình đến những thứ nâng cao hơn. 
            Các bạn sẽ có được nền tảng vững chắc và từ đó có thể tạo ra những sản phẩm của riêng mình như web, game, app,... 
            Những kiến thức này sẽ giúp các bạn rất nhiều trong quá trình học tập tại Học Viện cũng như trong công việc sau này.
          </p>
        </div>
      </header>     
      <div className="education-container">
        <h2>Chương trình đào tạo</h2>
        <div className="education-section">
          <div className="education-card">
            <div className="image-section">
              <img src="./data.jpg"/>
              <h3>Data</h3>
            </div>
            <div className="content-section">
              <p>Tập trung vào xử lý, phân tích và trực quan hóa dữ liệu lớn.</p>
              <p>Sử dụng Python, SQL, và các thư viện như Pandas, NumPy để thao tác dữ liệu.</p>
              <p>Kỹ năng xây dựng mô hình Machine Learning, xử lý dữ liệu lớn với Spark và Hadoop.</p>
            </div>
          </div>
          <div className="education-card">
            <div className="image-section">
              <img src="./gamme.jpg" />
              <h3>Game Development</h3>
            </div>
            <div className="content-section">
              <p>Lập trình game sử dụng C++, C#, và các engine như Unity, Unreal Engine.</p>
              <p>Thiết kế đồ họa 2D/3D, tạo chuyển động và âm thanh cho game.</p>
              <p>Xây dựng game đa người chơi, tối ưu hóa hiệu suất và trải nghiệm người dùng.</p>
            </div>
          </div>
          <div className="education-card">
            <div className="image-section">
              <img src="./web-app.jpg"/>
              <h3>Web Development</h3>
            </div>
            <div className="content-section">
              <p>Phát triển giao diện người dùng với HTML, CSS, JavaScript (React, Vue.js).</p>
              <p>Xây dựng server với Node.js, Django, kết nối cơ sở dữ liệu (SQL, MongoDB).</p>
              <p>Tập trung vào bảo mật web, quản lý hệ thống với Docker, Kubernetes, và CI/CD.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
