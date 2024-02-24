import React, { Component } from 'react';
import Products from '../components/products'
import Sidebar from '../components/sidebar'
import { Montserrat } from "next/font/google";
import style from '../styles/myProducts.module.css';
import ShowFullInfo from '../components/showFullInfo';
import Categories from '../components/categories';

export const montserrat = Montserrat({subsets: ['latin']})

const YourComponent=()=>{
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('api/json/data');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

return(
    data
)
}

export class MyProducts extends Component {      
    constructor(props){
        super(props)
        this.state={
            currentProducts: [],
            products: [
                {
                    id: 1,
                    img: 'image-4.jpg',
                    name: 'Яблоко',
                    desc: 'Lorem....',
                    calories: null,
                    proteins: null,
                    fats: null,
                    carbohydrates: null,
                    weight: '200 г.',
                    openingDate: '',
                    expiresBy: '20.01.24',
                    shelfLife: '',
                    category: 'fruits'
                },
                {
                    id: 2,
                    name: 'Огурец',
                    img: 'image-5.jpg',
                    desc: 'Lorem....',
                    calories: null,
                    proteins: null,
                    fats: null,
                    carbohydrates: null,
                    weight: '200 г.',
                    dateOfManufacture: '',
                    openingDate: '',
                    expiresBy: '20.02.24',
                    shelfLife: '',
                    category: 'vegetables'
                }
            ],

            showFullInfo: false,
            fullInfo: {},
        }
    //    this.state.products=this.componentDidMount
        this.state.currentProducts = this.state.products
        this.onShowInfo = this.onShowInfo.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this) 
    }
    // componentDidMount(){
    //     this.fetchData();
    // }
    // fetchData = async () => {
    //     try {
    //       const response = await fetch('localhost:8000/product');
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       const jsonData = await response.json();
    //       setData(jsonData);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };
  

  render() {
    return (
        <main>
        <div className={montserrat.className}>
        <div className={style.menu}>
        <div className={style.header}></div>
            <div className={style.wrapper_menu}>
                <div className={style.menu_sidebar}>
                <Sidebar />
                </div>
                <div>   
                    <div className={style.title}>Продукты, которые скоро испортятся:</div>
                    <div className={style.product_slider} style={{height: '168px', maxWidth: '956px'}}></div>
                    <Categories chooseCategory={this.chooseCategory} />
                    <div className={style.all_product}>
                        <Products onShowInfo={this.onShowInfo} products={this.state.currentProducts} />
                    </div>
                    </div>
                   
                
                {this.state.showFullInfo && <ShowFullInfo onShowInfo={this.onShowInfo} product={this.state.fullInfo}/>}
            </div>
        </div>
        </div>
    </main>
    )
  }


  chooseCategory(category){
    if(category==='all'){
        this.setState({currentProducts: this.state.products})
        return
    }

    this.setState({
        currentProducts: this.state.products.filter(el=>el.category===category)
    })
  }
  onShowInfo(product){
    this.setState({fullInfo: product})
    this.setState({showFullInfo: !this.state.showFullInfo})
}

}

export default MyProducts