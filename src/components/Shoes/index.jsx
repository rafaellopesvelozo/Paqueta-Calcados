import React, { useContext, useEffect } from "react";
import * as styled from "./styles";

import Button from "../Button";
import AppContext from "../../context/AppContext";

import { Shoes_Api } from "../../services/api";
import { formatCurrency } from "../../utils/format";

const Shoes = () => {
  const { shoes, setShoes, cartItem, setCartItem } = useContext(AppContext);

  useEffect(() => {
    try {
      Shoes_Api.get("api/paqueta/shoes").then(({ data }) => {
        setShoes(data);
        console.log(data)
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  function handleAddCart(shoesItem) {
    setCartItem([...cartItem, shoesItem]);
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
          {shoes.length === 0 && <p>Carregado...</p>}
          {shoes.map((shoesItem) => (
            <div className="container_products" key={shoesItem.name}>
              <div className="img_product">
                {shoesItem.soldout === true && (
                  <div className="sold_out_product">
                    <p>PRODUTO ESGOTADO</p>
                  </div>
                )}
                <img src={shoesItem.image} alt="imagem do produto" />
              </div>

              <p>{shoesItem.name}</p>
              <p>{formatCurrency(shoesItem.price.value)}</p>

              <div>
                {shoesItem.name.includes("TÊNIS RS 3.0 FUTURE VINTAGE") ||
                shoesItem.name.includes(
                  "Mercedes Kart Cat-X Tech Unisex Sneakers"
                ) ? (
                  <p>OU 9X {formatCurrency(shoesItem.price.value / 9)}</p>
                ) : (
                  <p>OU 10X {formatCurrency(shoesItem.price.value / 10)}</p>
                )}
              </div>
              <div>
                <Button
                  onClick={() => handleAddCart(shoesItem)}
                  theme="price"
                  type="button"
                  rel="nopeener noreferer"
                >
                  {shoesItem.soldout == true ? (
                    <p>ME AVISE QUANDO CHEGAR</p>
                  ) : (
                    <p>comprar</p>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </styled.Shoes>
  );
};

export default Shoes;
