import React from 'react';
import './styles.css';

const activities = [
  {
    title: "Tuyển thành viên",
    description: "Sự kiện tuyển thành viên của CLB chính là cơ hội tuyệt vời để các tân sinh viên đam mê công nghệ thông tin bước vào một cộng đồng năng động và đầy sáng tạo. Tham gia CLB không chỉ giúp các bạn mở rộng kiến thức chuyên môn mà còn là dịp để kết nối với những người cùng chung chí hướng, phát triển kỹ năng mềm và tích lũy kinh nghiệm thực tế.",
    image: "/images/activities/pic3.jpg"
  },
  {
    title: "Game",
    description: "Game là sự kiện đặc biệt giúp gắn kết các thành viên trong CLB thông qua chuỗi hoạt động vui chơi ngoài trời đầy hào hứng và sáng tạo. Với những thử thách độc đáo, các thành viên không chỉ được giải trí mà còn phải vận dụng tối đa trí tuệ, sự khéo léo và tinh thần đồng đội để vượt qua. Đây không chỉ là nơi thử thách bản thân mà còn là cơ hội tuyệt vời để mọi người gắn bó, cùng nhau chia sẻ những khoảnh khắc đáng nhớ, góp phần xây dựng một cộng đồng đoàn kết và vững mạnh trong đại gia đình CLB.",
    image: "/images/activities/pic5.png"
  },
  {
    title: "03/01",
    description: "Sinh nhật, diễn ra vào ngày 3/1 hàng năm, là sự kiện đáng mong chờ nhất khi toàn thể thành viên cùng nhau tụ họp để kỷ niệm cột mốc tuổi mới của CLB. Đây không chỉ là dịp để nhìn lại hành trình phát triển, mà còn là khoảnh khắc đặc biệt, nơi mọi người gắn kết trong không khí ấm áp và đầy hứng khởi, cùng nhau chia sẻ niềm vui và hướng đến những thành tựu mới trong tương lai.",
    image: "/images/activities/pic6.jpg"
  },
  {
    title: "Tổ chức học tập",
    description: "Mỗi kỳ, CLB tổ chức các buổi học tập nhằm nâng cao kiến thức và kỹ năng cho các thành viên. Đây là cơ hội để mọi người cùng nhau trau dồi chuyên môn, trao đổi kinh nghiệm, và hỗ trợ lẫn nhau trong việc học. Với sự dẫn dắt của những thành viên có kinh nghiệm và các diễn giả khách mời, các buổi học không chỉ giúp nâng cao hiểu biết mà còn khơi dậy niềm đam mê học hỏi, giúp mỗi người phát huy tối đa tiềm năng của mình trong môi trường học tập thân thiện và cởi mở.",
    image: "/images/activities/pic11.jpg"
  },
  {
    title: "Đánh giá mỗi kì",
    description: "Mỗi kỳ, CLB tổ chức buổi đánh giá tổng kết nhằm xem xét và ghi nhận quá trình hoạt động cũng như sự tiến bộ của từng thành viên. Đây là dịp để mọi người nhìn lại những gì đã đạt được, rút ra kinh nghiệm từ những khó khăn, và đặt ra mục tiêu mới cho kỳ tiếp theo. Thông qua quá trình đánh giá này, các thành viên không chỉ nhận được những phản hồi chân thành mà còn được khuyến khích phát huy điểm mạnh, khắc phục hạn chế, và tiếp tục nỗ lực phát triển bản thân trong môi trường CLB.",
    image: "/images/activities/pic9.jpg"
  },
  {
    title: "Họp mặt",
    description: "Các buổi họp mặt của CLB là dịp để các thành viên gặp gỡ, giao lưu và thảo luận về các hoạt động sắp tới. Đây không chỉ là cơ hội để mọi người cùng nhau chia sẻ ý tưởng, đóng góp ý kiến mà còn giúp củng cố tình đoàn kết giữa các thành viên. Qua những buổi họp mặt, CLB không chỉ định hướng cho các kế hoạch và mục tiêu chung mà còn tạo ra một môi trường thân thiện, nơi mọi người cùng đồng hành và phát triển vì lợi ích chung của tập thể.",
    image: "/images/activities/pic10.jpg"
  }
];

const ActivityItem = ({ activity, index }) => (
  <div className={`row align-items-center mb-5 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
    <div className="col-lg-6 mb-4 mb-lg-0 col-sm-12 col-12">
      <div className="images">
        <img src={activity.image} alt={activity.title} className="img-fluid rounded" />
      </div>
    </div>
    <div className="col-lg-6 col-sm-12 col-12">
      <h3 className="title">{activity.title}</h3>
      <p className="desc">{activity.description}</p>
    </div>
  </div>
);

function GalleryActivity() {
  return (
    <div className="events-Activities my-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="sub-title mb-5 fw-bold">Hoạt động thường niên</h3>
          </div>
        </div>
        {activities.map((activity, index) => (
          <ActivityItem key={index} activity={activity} index={index} />
        ))}
      </div>
    </div>
  );
}

export default GalleryActivity;