import React from 'react';

const Slider = () => {
  return (
    <div className="carousel mt-3">
        <div id="slide1" className="carousel-item relative w-full">
            <img
            src="https://i.ibb.co.com/XZxvnd3j/photo-1468495244123-6c6c332eeece-q-80-w-1442-auto-format-fit-crop-ixlib-rb-4-0.jpg"
            className="w-full h-[450px] object-cover" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <img
            src="https://i.ibb.co.com/wNGmfbjQ/Smart-Homes-Featured-scaled.webp"
            className="w-full h-[450px] object-cover" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
            <img
            src="https://i.ibb.co.com/F4xgxKtb/photo-1586433877630-a92748c4f7e2-q-80-w-1479-auto-format-fit-crop-ixlib-rb-4-0.jpg"
            className="w-full h-[450px] object-cover" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>`
    </div>
  );
};

export default Slider;
