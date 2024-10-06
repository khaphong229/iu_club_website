import { useEffect } from 'react';
import './styles.css';
import data from '../../../../../public/images/education/data.jpg';
import game from '../../../../../public/images/education/game.jpg';
import web from '../../../../../public/images/education/web.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TrainingProgram = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const programs = [
    {
      title: 'Data',
      image: data,
      description: [
        'Tập trung vào xử lý, phân tích và trực quan hóa dữ liệu lớn.',
        'Sử dụng Python, SQL, và các thư viện như Pandas, NumPy để thao tác dữ liệu.',
        'Kỹ năng xây dựng mô hình Machine Learning, xử lý dữ liệu lớn với Spark và Hadoop.'
      ]
    },
    {
      title: 'Game Development',
      image: game,
      description: [
        'Lập trình game sử dụng C++, C#, và các engine như Unity, Unreal Engine.',
        'Thiết kế đồ họa 2D/3D, tạo chuyển động và âm thanh cho game.',
        'Xây dựng game đa người chơi, tối ưu hóa hiệu suất và trải nghiệm người dùng.'
      ]
    },
    {
      title: 'Web Development',
      image: web,
      description: [
        'Phát triển giao diện người dùng với HTML, CSS, JavaScript (React, Vue.js).',
        'Xây dựng server với Node.js, Django, kết nối cơ sở dữ liệu (SQL, MongoDB).',
        'Tập trung vào bảo mật web, quản lý hệ thống với Docker, Kubernetes, và CI/CD.'
      ]
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold title__training" data-aos="fade-up">Chương trình đào tạo</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {programs.map((program, index) => (
          <div 
            key={index} 
            className="col" 
            data-aos="fade-up" 
            data-aos-delay={index * 200}
          >
            <div className="card h-100 shadow-sm">
              <img src={program.image} className="card-img-top" alt={program.title} />
              <div className="card-body">
                <h3 className="card-title text-center mb-3">{program.title}</h3>
                {program.description.map((item, i) => (
                  <p key={i} className="card-text mb-2">{item}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingProgram;
