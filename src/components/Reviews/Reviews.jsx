import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Modal from 'react-modal';
import './Reviews.scss'; 

const reviews = [
  {
    name: 'Сайкал',
    date: '17 мая 2023, 20:46',
    rating: 4,
    review: 'Отлично шьет, покупкой довольна.'
  },
  {
    name: 'Сайкал',
    date: '17 мая 2023, 20:46',
    rating: 4,
    review: 'Машинка пришла целая в заводской упаковке.'
  },
  {
    name: 'Сайкал',
    date: '17 мая 2023, 20:46',
    rating: 4,
    review: 'Отлично шьет, покупкой довольна.'
  }
];

Modal.setAppElement('#root');

const Reviews = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', review: '' });

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Review:', newReview);
    closeModal();
  };

  return (
    <div className='container'>
      <h2>Отзывы</h2>
      <div className="reviews-header">
        <div className="rating">4.9 ★★★★★ 60 отзывов</div>
        <button onClick={openModal}>Написать отзыв</button>
      </div>
      <Swiper spaceBetween={30} slidesPerView={3} breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}>
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="review-card">
              <div className="review-header">
                <div className="review-author">{review.name}</div>
                <div className="review-date">{review.date}</div>
              </div>
              <div className="review-rating">{Array(review.rating).fill('★').join('')}</div>
              <div className="review-content">{review.review}</div>
              <button className="report-button">Пожаловаться на отзыв</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal-content" overlayClassName="modal-overlay">
        <h2>Оставить отзыв</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Имя:
              <input type="text" name="name" value={newReview.name} onChange={handleInputChange} />
            </label>
          </div>
          <div>
            <label>
              Отзыв:
              <textarea name="review" value={newReview.review} onChange={handleInputChange} />
            </label>
          </div>
          <div className="modal-buttons">
            <button type="submit">Отправить</button>
            <button type="button" onClick={closeModal}>Отмена</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Reviews;
