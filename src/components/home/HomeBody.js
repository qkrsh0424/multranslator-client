import React,{lazy} from 'react';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import "normalize.css/normalize.css";
import '../../styles/slider-animations.css';
import '../../styles/styles.css';
// const Slider = lazy(()=>import('react-animated-slider'))


//Component
const TranslateComponent = lazy(()=>import('../translate'));
const content = [
    {
        title: "Multranslator",
        description:
            "Multranslator는 다양한 기업들이 제공해주는 번역기능을 이용하여 만들어 졌습니다.",
        button: "READ MORE",
        image: "/translator1.jpg",
        user: "Luan Gjokaj",
        userProfile: "https://i.imgur.com/JSW6mEk.png"
    },
    {
        title: "Focus on user's choice",
        description:
            "유저들의 사용성을 중점으로 자신에게 맞는 번역을 선택하여 활용 할 수 있습니다.",
        button: "READ MORE",
        // image: "https://i.imgur.com/DCdBXcq.jpg",
        image: "/translator2.jpg",
        user: "Erich Behrens",
        userProfile: "https://i.imgur.com/0Clfnu7.png"
    },
    {
        title: "Developing",
        description:
            "Multranslator는 계속해서 개발해 나가고 있습니다.",
        button: "READ MORE",
        // image: "https://i.imgur.com/DvmN8Hx.jpg",
        image: "/translator3.jpg",
        user: "Bruno Vizovskyy",
        userProfile: "https://i.imgur.com/4KeKvtH.png"
    }
];
const HomeBody = () => {
    return (
        <div>
            <Slider 
                className="slider-wrapper"
                autoplay='2000'
            >
                {content.map((item, index) => 
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <button>{item.button}</button>
                        </div>
                        {/* <section>
                            <img src={item.userProfile} alt={item.user} />
                            <span>
                                Posted by <strong>{item.user}</strong>
                            </span>
                        </section> */}
                    </div>
                )}
                
            </Slider>
            <TranslateComponent/>
        </div>
    );
}

export default HomeBody;