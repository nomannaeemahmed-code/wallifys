import Products from "../Components/Products";
import Slider from "../Components/Slider";
import { motion } from "framer-motion";
const Home = () => {
    return (
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.8 }}
        >
           <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
           ><Slider /></motion.div>
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="text-center mt-10" style={{ color: '#FFA239' }}
           >
            <h1 className="text-3xl font-bold">Products</h1>
           </motion.div>
              <div><Products /></div>
        </motion.div>
        
    )
}

export default Home;