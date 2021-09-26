import ImgMediaCard from "../ImgMediaCard";
import '../../App.css';


function Shoes() {
    return (
        <>
            <h1 style={{ margin: '2%' }}>Shoes</h1>
            <div className="main">
                <ImgMediaCard
                    title="Sneaker"
                    link="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/s6dp2gck3oukxj9csz5y/air-max-270-mens-shoes-KkLcGR.png"
                    price="Rs 1250/-"
                />,
                <ImgMediaCard
                    title="Nike Flex Run"
                    link="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/67d07726-8ad5-4985-b1f0-71d13b768d41/zoomx-invincible-run-flyknit-mens-road-running-shoes-sP2zk7.png"
                    price="Rs 1050/-"
                />,
                <ImgMediaCard
                    title="Serenity Run"
                    link="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b2de7487-c83e-4bb5-8355-90d39371985f/air-max-up-womens-shoes-bL7qtj.png"
                    price="Rs 1850/-"
                />,
                <ImgMediaCard
                    title="Air Force Crater"
                    link="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i4jPhKEFw1NE/v0/1000x-1.jpg"
                    price="Rs 1550/-"
                />,
                <ImgMediaCard
                    title="Air Force Crater"
                    link="https://images.nike.com/is/image/DotCom/CK2576_003?$NIKE_PWP_GRAY$&wid=420&hei=420"
                    price="Rs 2050/-"
                />,
                <ImgMediaCard
                    title="Infinity Run"
                    link="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/057ef908-35e5-4167-9486-d0299e3de301/air-max-plus-mens-shoes-x9G2xF.png"
                    price="Rs 2400/-"
                />,
            </div>
        </>
    );
}

export default Shoes;