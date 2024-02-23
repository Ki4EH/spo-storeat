import "../styles/app.css";
import Slider from "../components/slider2.js";

// export default function App(){
//     return(
//         <Slider>
//             <div className="item item-1">Item 1</div>
//             <div className="item item-2">Item 2</div>
//             <div className="item item-3">Item 3</div>
//         </Slider>
//     )
// } 

const App = () =>{
    return(
        <Slider >
        <div className="container">
            <div className="slide">
                <div className="item" style={{backgroundColor: 'red'}}>
                    <div className="content">
                        <div className="name">SS</div>
                        <div className="des">Lorem...</div>
                        <button>See More</button>
                    </div>
                </div>
                <div className="item" style={{backgroundColor: 'green'}}>
                    <div className="content">
                        <div className="name">SS</div>
                        <div className="des">Lorem...</div>
                        <button>See More</button>
                    </div>
                </div>
                <div className="item" style={{backgroundColor: 'blue'}}>
                    <div className="content">
                        <div className="name">SS</div>
                        <div className="des">Lorem...</div>
                        <button>See More</button>
                    </div>
                </div>
                <div className="item" style={{backgroundColor: 'pink'}}>
                    <div className="content">
                        <div className="name">SS</div>
                        <div className="des">Lorem...</div>
                        <button>See More</button>
                    </div>
                </div>
                <div className="item" style={{backgroundColor: 'orange'}}>
                    <div className="content">
                        <div className="name">SS</div>
                        <div className="des">Lorem...</div>
                        <button>See More</button>
                    </div>
                </div>
            </div>
        
            </div>
            <div className="button">
                <button className="prev">
                    <i className="fa-solid fa-arrow-left">-</i>
                </button>
                <button className="next">
                    <i className="fa-solid fa-arrow-right">+</i>
                </button>
            </div>
  
        </Slider>
    )
}

export default App;