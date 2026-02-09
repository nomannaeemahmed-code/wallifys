import Products from "../Components/Products";
import Slider from "../Components/Slider";


const Home = () => {
    return (
        <div>
           <div><Slider /></div>
           <div className="text-center mt-10" style={{ color: '#FFA239' }}>
            <h1 className="text-3xl font-bold">Products</h1>
           </div>
              <div><Products /></div>
        </div>
        
    )
}

export default Home;