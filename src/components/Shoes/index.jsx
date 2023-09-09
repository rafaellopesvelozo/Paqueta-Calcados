import React, { useContext, useEffect } from "react";
import * as styled from "./styles";

import Button from "../Button";
import AppContext from "../../context/AppContext";

import { Shoes_Api } from "../../services/api";
import { formatCurrency } from "../../utils/format";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Shoes = () => {
  const { shoes, setShoes, cartItem, setCartItem } = useContext(AppContext);

  useEffect(() => {
    try {
      Shoes_Api.get("api/paqueta/shoes").then(({ data }) => {
        setShoes(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  function handleAddCart() {
    setCartItem([...cartItem]);
    console.log(cartItem);
  }

  return (
    <styled.Shoes>
      <nav className="numbers-list">
        <ul>
          <li>33</li>
          <li>34</li>
          <li>35</li>
          <li>36</li>
          <li>37</li>
          <li>38</li>
          <li>39</li>
          <li>40</li>
          <li>41</li>
          <li>42</li>
          <li>43</li>
          <li>44</li>
        </ul>
      </nav>
      <div className="highlights">
        <div className="highlight_Check">
          <div>
            <p>DESTAQUES</p>
          </div>
          <div>
            <p>CONFERIR TUDO</p>
          </div>
        </div>

        <section>
     
         
          <Swiper
            modules={[Pagination, Scrollbar, A11y]}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            slidesPerView={3}
            spaceBetween={25}
          >
            {shoes.length === 0 && <p>Carregado...</p>}
            {shoes.map((shoesList) => (
              <SwiperSlide className="container_products" key={shoesList.name}>
                <div className="img_product">
                  {shoesList.soldout === true && (
                    <div className="sold_out_product">
                      <p>PRODUTO ESGOTADO</p>
                    </div>
                  )}
                  <img src={shoesList.image} alt="imagem do produto" />
                </div>

                <p>{shoesList.name}</p>
                <p>{formatCurrency(shoesList.price.value)}</p>

                <div>
                  {shoesList.name.includes("TÊNIS RS 3.0 FUTURE VINTAGE") ||
                  shoesList.name.includes(
                    "Mercedes Kart Cat-X Tech Unisex Sneakers"
                  ) ? (
                    <p>OU 9X {formatCurrency(shoesList.price.value / 9)}</p>
                  ) : (
                    <p>OU 10X {formatCurrency(shoesList.price.value / 10)}</p>
                  )}
                </div>
                <div>
                  <Button
                    onClick={handleAddCart}
                    theme="price"
                    type="button"
                    target="_blacnk"
                    rel="nopeener noreferer"
                  >
                    {shoesList.soldout == true ? (
                      <p>ME AVISE QUANDO CHEGAR</p>
                    ) : (
                      <p>comprar</p>
                    )}
                  </Button>
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        
        </section>
      </div>
    </styled.Shoes>
  );
};

export default Shoes;
