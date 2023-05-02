import './Banner.css'


const Banner = () => {
    return (
        <div className="d-flex align-items-center">
            <div className="md-w-50">
                <h2 className="fw-bold">Fun and Easy to become <span className="text-warning">Master Cook</span></h2>
                <p className="text-secondary">Becoming a cook is my dream since I was little, and here I Have found a way to make it happen.</p>
            </div>
            <div className=" md-w-50 ">
                <img className="width" src="https://static5.depositphotos.com/1003434/514/i/600/depositphotos_5147838-stock-photo-attractive-smiling-cook.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;