import React from "react";
import "./styles.css";

const Questions = () => {
  const faqData = [
    {
      question: "Câu lạc bộ CNTT này thành lập từ khi nào?",
      answer: "Câu lạc bộ thành lập ngày 03/01/2024. Câu lạc bộ được thành lập để kết nối các bạn có cùng đam mê công nghệ, tạo cơ hội học hỏi và phát triển kỹ năng.",
    },
    {
      question: "Mục tiêu và tầm nhìn của câu lạc bộ là gì?",
      answer: "Tầm nhìn của câu lạc bộ là tạo ra một môi trường phát triển cho sinh viên đam mê CNTT, giúp họ có cơ hội học hỏi và nâng cao kỹ năng chuyên môn lẫn kỹ năng mềm, từ đó chuẩn bị tốt hơn cho sự nghiệp tương lai.",
    },
    {
      question: "Ngôn ngữ lập trình nào được học đầu tiên?",
      answer: "Python thường được khuyến nghị do cú pháp đơn giản và dễ hiểu. Nó phù hợp cho cả những người mới bắt đầu và chuyên gia. Ngoài ra, JavaScript cũng là một ngôn ngữ rất phổ biến nếu bạn quan tâm đến phát triển web.",
    },
    {
      question: "Kỹ năng mềm nào quan trọng nhất trong lĩnh vực CNTT?",
      answer: "Trong lĩnh vực CNTT, kỹ năng giao tiếp, làm việc nhóm, và quản lý thời gian là rất quan trọng. Bạn cần biết cách trình bày ý tưởng một cách rõ ràng, làm việc hiệu quả với đồng nghiệp và hoàn thành công việc đúng hạn.",
    },
    {
      question: "Hình thức tuyển thành viên của CLB?",
      answer: "Quá trình tuyển thành viên của CLB sẽ gồm 3 vòng: đầu tiên là vòng CV, sau đó sẽ đến vòng Phỏng vấn và cuối cùng là vào vòng Training của CLB.",
    },
    {
      question: "Chưa có kiến thức có thể tham gia câu lạc bộ không?",
      answer: "Bạn hoàn toàn có thể tham gia CLB ngay cả khi chưa có kiến thức, các anh chị có kinh nghiệm sẵn sàng giúp bạn giải đáp các thắc mắc, cung cấp tài liệu học tập, và đưa ra lời khuyên khi bạn gặp khó khăn.",
    },
    {
      question: "Những sự kiện nào được tổ chức thường niên?",
      answer: "Câu lạc bộ thường tổ chức các sự kiện như hội thảo về công nghệ, hackathon, các buổi học nhóm và gặp gỡ các chuyên gia trong ngành IT để chia sẻ kinh nghiệm.",
    },
    {
      question: "Các hoạt động học thuật của CLB bao gồm những gì?",
      answer: "CLB tổ chức các buổi học tập về lập trình, thiết kế web, bảo mật mạng và nhiều chủ đề liên quan khác để nâng cao kiến thức cho các thành viên.",
    },
    {
      question: "Tôi cần chuẩn bị những gì để tham gia CLB?",
      answer: "Bạn cần chuẩn bị đam mê học hỏi và thái độ tích cực. Nếu có sẵn laptop và kiến thức cơ bản về CNTT sẽ là một lợi thế, nhưng không phải là điều kiện bắt buộc.",
    },
    {
      question: "CLB có hỗ trợ tìm kiếm thực tập không?",
      answer: "CLB có mạng lưới quan hệ với các công ty trong ngành CNTT và thường xuyên cung cấp thông tin về các cơ hội thực tập và việc làm cho các thành viên.",
    },
  ];

  return (
    <section id="faq" className="faq-section py-5">
      <div className="container">
        <div className="faq-head">
          <h1 className="faq-head__title text-center mb-4 fw-bold">
            Các câu hỏi thường gặp
          </h1>
          <p className="text-center mb-5">
            Dưới đây là những câu hỏi phổ biến thường được các bạn dành cho CLB.
          </p>
        </div>

        <div className="accordion" id="faqAccordion">
          {faqData.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {index + 1}. {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
