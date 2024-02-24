import ImageSlider from './ImageSlider';


const Slider=()=>{
    const slides=[
        {url: 'image-1.jpg', title: '1'},
        {url: 'image-2.jpg', title: '2'},
        {url: 'image-3.jpg', title: '3'},
        {url: 'image-4.jpg', title: '4'},
        {url: 'image-5.jpg', title: '5'}
    ];

    const containerStyles={
        width: '100%',
        height: '350px',
        margin: '0 auto'
    }
    return(
        <div style={containerStyles}>
            <ImageSlider slides={slides}/>
        </div>
    )
}

export default Slider;