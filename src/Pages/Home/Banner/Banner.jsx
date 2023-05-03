import LazyLoad from 'react-lazy-load';
import './Banner.css'


const Banner = () => {
    return (
        <div className="d-flex align-items-center">
            <div className="md-w-50">
                <h2 className='text-warning mb-3'>Executive Chef</h2>
                <h1 className="fw-bold">Fun and Easy to become <span className="text-warning">Master Cook</span></h1>
                <p className="text-secondary">Cooking is all about people. Food is maybe the only universal thing that really has the power to bring everyone together. No matter what culture, everywhere around the world, people get together to eat.</p>
            </div>
            <div className=" md-w-50 ">
                <LazyLoad>
                <img className="width" src="https://static5.depositphotos.com/1003434/514/i/600/depositphotos_5147838-stock-photo-attractive-smiling-cook.jpg" alt="" />
                </LazyLoad>
            </div>
        </div>
    );
};

export default Banner;