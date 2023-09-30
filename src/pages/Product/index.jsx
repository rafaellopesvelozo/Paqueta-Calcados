import React from "react";
import AppContext from "../../context/AppContext";
import * as Styled from "./styles";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/format";
import Button from "../../components/Button";

const Product = () => {
  const { products } = useContext(AppContext);
  console.log(products);

  return (
    <Styled.ContainerProducts>
      <section>
        {products.map((item) => (
          <>
            <p>
              <Link to="/">Paguetá</Link> &gt; <span>{item.name}</span>
            </p>
            <div className="container-products-item" key={item.name}>
              <div className="products-img">
                <img src={item.image} alt="imagem do produto" />
                <div className="share">
                  <p>Compartilhe</p>
                  <div className="share-icons">
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-youtube"></i>
                    <i class="bi bi-pinterest"></i>
                  </div>
                </div>
              </div>
              <div className="products-info">
                <div className="products-name">
                  <p className="name">{item.name}</p>
                  <p className="id">Código do produto: {item.id}</p>
                </div>
                <div className="products-price">
                  <div className="price-discount">
                    <p className="with-discount">R$ 189,90</p>{" "}
                    <p className="discount">21% e desconto</p>
                  </div>
                  <div className="price">
                    <p className="no-discount">R$ 149,90</p>
                    <p className="price-divided">ou 9x R$ 16,66</p>
                  </div>
                </div>
                <div className="products-number">
                  <p className="choie-number">Escolha a numeração: </p>
                  <ul>
                    <li>34</li>
                    <li>35</li>
                    <li>36</li>
                    <li>37</li>
                    <li>38</li>
                    <li>39</li>
                    <li>40</li>
                  </ul>
                  <p className="size-guide">Guia de tamanho</p>
                </div>
                <div className="products-btn">
                  <Button theme="price" type="button">
                    COMPRAR
                  </Button>
                </div>
              </div>
            </div>
            <div className="row"></div>
            <div className="products-description">
              <h5>DESCRIÇÃO DO PRODUTO</h5>
              <p>{item.description}</p>
            </div>

            <section>
              <p>TALVES POSSA LHE INTERESSAR</p>
              <div>
                <p>carousel...</p>
              </div>
            </section>
          </>
        ))}
      </section>
    </Styled.ContainerProducts>
  );
};
export default Product;
