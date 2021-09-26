import React from 'react';
import './App.css';
import DenseAppBar from './components/DenseAppBar';
import BasicTabs from './components/BasicTabs';
import Footer from './components/Footer'
function App() {
  return (
    <>
      <DenseAppBar />,
      <BasicTabs />,
      <Footer />




      {/* <div className="main">
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

        

        Trousers

        <ImgMediaCard
          title="Tapered Training Trousers"
          link="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a10699af-0b24-4787-bf5e-d0315ffd8ecc/dri-fit-tapered-training-trousers-Vz377J.png"
          price="Rs 2250/-"
        />,
        <ImgMediaCard
          title="Sportswear Club Fleece"
          link="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/65580368-8756-4baf-b846-6648400cf137/sportswear-club-fleece-older-trousers-sfKXMD.png"
          price="Rs 3200/-"
        />,
        <ImgMediaCard
          title="Sportswear Tech Fleece"
          link="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9e6d966b-d9fa-4e8c-ba71-d681463a125b/sportswear-tech-fleece-older-trousers-jx67ms.png"
          price="Rs 3550/-"
        />,
        <ImgMediaCard
          title="Air Max Men's Woven Cargo Trousers"
          link="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2ed5c803-fdd5-4750-87ad-14072dd38284/air-max-woven-cargo-trousers-RGGqX4.png"
          price="Rs 4250/-"
        />,
        <ImgMediaCard
          title="Grey Track Pants With Black Stripped Sides"
          link="https://cdn.shopify.com/s/files/1/0403/9858/6011/products/DSC_8924copy_1024x1024.jpg?v=1601581815"
          price="Rs 1550/-"
        />,
        <ImgMediaCard
          title="Sportswear Club Men's French Terry Trouser"
          link="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9e311b4c-a59f-4190-a50a-1ee6745ae0b9/sportswear-club-french-terry-trousers-zc96jq.png"
          price="Rs 2300/-"
        />,



        Hoodie

        <ImgMediaCard
          title="Men's Pullover Training Hoodie"
          link="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/aa5a3544-f593-4526-890a-748502b660c4/dri-fit-mens-pullover-training-hoodie-JP9xB5.png"
          price="Rs 1700/-"
        />,
        <ImgMediaCard
          title="Sportswear Club Fleece Men's Pullover Hoodie"
          link="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0cb0f4f6-fe01-4f8c-8086-8d0831134c2a/sportswear-club-fleece-pullover-hoodie-MSXJMm.png"
          price="Rs 1900/-"
        />,
        <ImgMediaCard
          title="Sportswear Women's Fleece Hoodie"
          link="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2eca4c1d-f155-4b6b-94a6-764ba5619d85/sportswear-fleece-hoodie-pqMXxl.png"
          price="Rs 2350/-"
        />,
        <ImgMediaCard
          title="Sportswear Club Fleece Men's Full-Zip Hoodie"
          link="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/62642813-03d6-4c82-a902-a4660df26dc3/sportswear-club-fleece-hoodie-nf6nn9.png"
          price="Rs 2100/-"
        />,
        <ImgMediaCard
          title="Sportswear Tech Fleece Men's Full-Zip Hoodie"
          link="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/35974679-3a6b-4ab6-93e1-2e20fc0695bb/sportswear-tech-fleece-hoodie-Rhmk1c.jpg"
          price="Rs 2550/-"
        />,
        <ImgMediaCard
          title="Sportswear Club Older Kids' Pullover Hoodie"
          link="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/kzrfjedxnbsju4wia0ba/sportswear-club-older-pullover-hoodie-db99vS.png"
          price="Rs 2000/-"
        />,

      </div> */}
    </>
  );
}

export default App;
