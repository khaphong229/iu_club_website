import pictures1 from "../../../public/images/pic1.jpg";
import pictures2 from "../../../public/images/pic2.jpg";
import pictures3 from "../../../public/images/pic7.jpg";
import pictures4 from "../../../public/images/pic3.jpg";
import pictures5 from "../../../public/images/pic5.png";
import pictures6 from "../../../public/images/pic6.jpg";
import pictures7 from "../../../public/images/pic11.jpg";
import pictures8 from "../../../public/images/pic9.jpg";
import pictures9 from "../../../public/images/pic10.jpg";
import pictures10 from "../../../public/images/pic12.jpg";
import pictures11 from "../../../public/images/pic13.jpg";
import pictures12 from "../../../public/images/pic14.jpg";
import pictures13 from "../../../public/images/pic15.jpg";
import pictures14 from "../../../public/images/pic16.jpg";
import pictures15 from "../../../public/images/pic17.jpg";
import "./Events.css";
const Events = () => {
  return <>
  {/* Events Pages */}
    <div className="events-Pages">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="events-images">
              <img src={pictures1} alt="events" />
            </div>
            <div className="events-contents wow backInLeft">
              <h3 className="events-contents-title">EVENTS</h3>
              <p className="events-contents-desc">CLB thường xuyên có các sự kiện lớn nhỏ, được tổ chức giúp gắn kết các thành viên trong CLB cũng như mở rộng các mối quan hệ bên ngoài CLB.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/* Events Pages */}
  {/* Events list */}
  {/* <div className="events-list">
    <div className="container">
      <div className="row">
      <div className=" col-lg-6 col-md-6 col-sm-12">
        <div className="social">
          <div className="images">
            <img src={pictures3} alt="events" />
          </div>
          <h3 className="title">Hoạt Động</h3>
        </div>
      </div>
      <div className=" col-lg-6 col-md-6 col-sm-12 ">
        <div className="social">
        <div className="images">
          <img src={pictures2} alt="events" />
        </div>
          <h3 className="title">Giải Thưởng</h3>
        </div>
      </div>
      </div>
    </div>
  </div> */}

  <div className="events-list">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="card">
          <img src={pictures3} className="card-img-top" alt="Hoạt Động" />
          <div className="card-body">
            <h3 className="card-title">Hoạt Động</h3>
            <p className="card-text">
              Một số hoạt động diễn ra trong sự kiện này.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="card">
          <img src={pictures2} className="card-img-top" alt="Giải Thưởng" />
          <div className="card-body">
            <h3 className="card-title">Giải Thưởng</h3>
            <p className="card-text">
              Các giải thưởng đã được trao trong sự kiện.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  {/* End Events list */}
  {/* Events activities  */}
  <div className="events-Activities">
    <div className="container">
      <div className="row ">
        <div className="col-12">
          <h3 className="sub-title">Hoạt động thường niên</h3>
        </div>
        </div>
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0 col-sm-12 col-12">
            <div className="images">
              <img src={pictures4} alt="events" className="img-fluid rounded" />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-12">
              <h3 className="title">Tuyển thành viên</h3>
              <p className="desc">Sự kiện tuyển thành viên của CLB chính là cơ hội tuyệt vời để các tân sinh viên đam mê công nghệ thông tin bước vào một cộng đồng năng động và đầy sáng tạo. Tham gia CLB không chỉ giúp các bạn mở rộng kiến thức chuyên môn mà còn là dịp để kết nối với những người cùng chung chí hướng, phát triển kỹ năng mềm và tích lũy kinh nghiệm thực tế.</p>
          </div>
            </div>
        <div className="row align-items-center mb-5 flex-row-reverse">
      <div className="col-lg-6 mb-4 mb-lg-0 col-sm-12 col-12">
        <div className="images">
          <img src={pictures5} alt="events" className="img-fluid rounded" />
        </div>
      </div>
      <div className="col-lg-6 col-sm-12 col-12">
          <h3 className="title">Game</h3>
          <p className="desc">Game là sự kiện đặc biệt giúp gắn kết các thành viên trong CLB thông qua chuỗi hoạt động vui chơi ngoài trời đầy hào hứng và sáng tạo. Với những thử thách độc đáo, các thành viên không chỉ được giải trí mà còn phải vận dụng tối đa trí tuệ, sự khéo léo và tinh thần đồng đội để vượt qua.</p>
          <p className="desc">Đây không chỉ là nơi thử thách bản thân mà còn là cơ hội tuyệt vời để mọi người gắn bó, cùng nhau chia sẻ những khoảnh khắc đáng nhớ, góp phần xây dựng một cộng đồng đoàn kết và vững mạnh trong đại gia đình CLB.</p>
      </div>
    </div>

    <div className="row align-items-center mb-5">
      <div className="col-lg-6 mb-4 mb-lg-0 col-sm-12 col-12">
        <div className="images">
          <img src={pictures6} alt="events" className="img-fluid rounded" />
        </div>
      </div>
      <div className="col-lg-6 col-sm-12 col-12">
          <h3 className="title">03/01</h3>
          <p className="desc">Sinh nhật, diễn ra vào ngày 3/1 hàng năm, là sự kiện đáng mong chờ nhất khi toàn thể thành viên cùng nhau tụ họp để kỷ niệm cột mốc tuổi mới của CLB. Đây không chỉ là dịp để nhìn lại hành trình phát triển, mà còn là khoảnh khắc đặc biệt, nơi mọi người gắn kết trong không khí ấm áp và đầy hứng khởi, cùng nhau chia sẻ niềm vui và hướng đến những thành tựu mới trong tương lai.</p>
      </div>
    </div>
        <div className="row align-items-center mb-5">
            <div className="col-xl-6 mb-4 mb-lg-0 col-sm-12 col-12">
                <h3 className="title">Tổ chức học tập</h3>
                <p className="desc">Mỗi kỳ, CLB tổ chức các buổi học tập nhằm nâng cao kiến thức và kỹ năng cho các thành viên. Đây là cơ hội để mọi người cùng nhau trau dồi chuyên môn, trao đổi kinh nghiệm, và hỗ trợ lẫn nhau trong việc học. Với sự dẫn dắt của những thành viên có kinh nghiệm và các diễn giả khách mời, các buổi học không chỉ giúp nâng cao hiểu biết mà còn khơi dậy niềm đam mê học hỏi, giúp mỗi người phát huy tối đa tiềm năng của mình trong môi trường học tập thân thiện và cởi mở.</p>
            </div>
          <div className="col-xl-6 col-sm-12 col-12">
            <div className="images">
              <img src={pictures7} alt="events" className="img-fluid rounded" />
            </div>
          </div>
          </div>
          <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0 mb-4 mb-lg-0">
            <div className="images">
              <img src={pictures8} alt="events" className="img-fluid rounded" />
            </div>
          </div>
          <div className="col-lg-6 mb-4 mb-lg-0">
              <h3 className="title">Đánh giá mỗi kì</h3>
              <p className="desc">Mỗi kỳ, CLB tổ chức buổi đánh giá tổng kết nhằm xem xét và ghi nhận quá trình hoạt động cũng như sự tiến bộ của từng thành viên. Đây là dịp để mọi người nhìn lại những gì đã đạt được, rút ra kinh nghiệm từ những khó khăn, và đặt ra mục tiêu mới cho kỳ tiếp theo. Thông qua quá trình đánh giá này, các thành viên không chỉ nhận được những phản hồi chân thành mà còn được khuyến khích phát huy điểm mạnh, khắc phục hạn chế, và tiếp tục nỗ lực phát triển bản thân trong môi trường CLB.</p>
          </div>
            </div>
        <div className="row align-items-center mb-5">
            <div className="col-xl-6 align-items-center mb-5 mb-4 mb-lg-0">
                <h3 className="title">Họp mặt</h3>
                <p className="desc">Các buổi họp mặt của CLB là dịp để các thành viên gặp gỡ, giao lưu và thảo luận về các hoạt động sắp tới. Đây không chỉ là cơ hội để mọi người cùng nhau chia sẻ ý tưởng, đóng góp ý kiến mà còn giúp củng cố tình đoàn kết giữa các thành viên. Qua những buổi họp mặt, CLB không chỉ định hướng cho các kế hoạch và mục tiêu chung mà còn tạo ra một môi trường thân thiện, nơi mọi người cùng đồng hành và phát triển vì lợi ích chung của tập thể.</p>
              </div>
          <div className="col-xl-6">
            <div className="images">
              <img src={pictures9} alt="events" className="img-fluid rounded" />
            </div>
          </div>
          </div>
          </div>
        </div>


  {/* Events activities  */}

  {/* Events prize */}
  <div className="events-Prizes">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h3 className="sub-title">Các hoạt động khác</h3>
      </div>
      {[
        { img: pictures10, title: "Du lịch" },
        { img: pictures11, title: "CODING FEST 2024 THE UNIVERSITY OF SYDNEY" },
        { img: pictures12, title: "UDU x NEWS" },
        { img: pictures13, title: "COMPANY TOUR 2024" },
        { img: pictures14, title: "GIẢI BÓNG ĐÁ UDU CUP 2024" },
        { img: pictures15, title: "cuộc thi AI Challenge 2024" }
      ].map((event, index) => (
        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
          <div className="card" style={{ width: '18rem' }}>
            <img src={event.img} className="card-img-top" alt={event.title} />
            <div className="card-body">
              <h5 className="card-title">{event.title}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


  {/* End Events prize */}

  </>;
};
export default Events;
