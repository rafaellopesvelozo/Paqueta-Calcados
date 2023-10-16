import React, { useRef, useState } from "react";
import * as Styled from "./styles";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/format";
import { ButtonPrice } from "../../components/Button/Button.style";
import { ChoiceNumber } from "../../utils/numberShoes";
import AppContext from "../../context/AppContext";
import img1 from "../../assets/product/image1.jpg";
import img2 from "../../assets/product/image2.jpg";
import img3 from "../../assets/product/image3.jpg";
import img4 from "../../assets/product/image4.jpg";
import Modal from "./Modal/Modal";

const Product = () => {
  const { products, modalActive, setModalActive } = useContext(AppContext);
  const [indexN, setIndexN] = useState(0);

  function price(item) {
    let preço = item.price.value;
    let discount = item.price.discount * 100;
    let total = preço - preço * (discount / 100);
    return total;
  }

  const a = (index) => {
    console.log("a - " + index);
  };

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
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-twitter"></i>
                    <i className="bi bi-youtube"></i>
                    <i className="bi bi-pinterest"></i>
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
                    <p className="with-discount">
                      {formatCurrency(item.price.value)}
                    </p>{" "}
                    <p className="discount">
                      {item.price.discount > 0 ? (
                        <p>{item.price.discount * 100} % de desconto</p>
                      ) : (
                        <p> produto sem desconto</p>
                      )}
                    </p>
                  </div>
                  <div className="price">
                    <p className="no-discount">{formatCurrency(price(item))}</p>
                    <p className="price-divided">
                      ou 9x {formatCurrency(price(item) / 9)}
                    </p>
                  </div>
                </div>
                <div className="products-number">
                  <p className="choie-number">Escolha a numeração: </p>
                  <ul>
                    {ChoiceNumber.map((n, index) => (
                      <li onClick={() => a(index == true ? "a": "a")}>{n}</li>
                    ))}
                  </ul>

                  <p
                    onClick={() => setModalActive(true)}
                    className="size-guide"
                  >
                    Guia de tamanhos
                  </p>
                </div>
                <div className="products-btn">
                  <ButtonPrice>COMPRAR</ButtonPrice>
                </div>
              </div>
            </div>

            <div className="products-description">
              <h5>DESCRIÇÃO DO PRODUTO</h5>
              <p>{item.description}</p>
            </div>
            <div className="row"></div>
            <section className="container-de-interesses">
              <p>TALVES POSSA LHE INTERESSAR</p>
              <div className="container-items">
                <div className="item-carousel">
                  <div className="img-carousel">
                    <img src={img1} alt="" />
                  </div>
                  <div className="name-item">
                    <p>CHINELO RASTEIRA BRANCA STRASS DUMOND</p>
                  </div>
                  <div className="price-item">
                    <p>R$ 279,99</p>
                    <p>ou 10X R$ 27,99</p>
                  </div>
                  <div className="btn">
                    <ButtonPrice>Comprar</ButtonPrice>
                  </div>
                </div>
                <div className="item-carousel">
                  <div className="img-carousel">
                    {" "}
                    <img src={img2} alt="" />
                  </div>
                  <div className="name-item">
                    <p>SANDÁLIA METALIZADA COBRE TWIN SET</p>
                  </div>
                  <div className="price-item">
                    <p>R$ 179,99</p>
                    <p>ou 10X R$ 17,99</p>
                  </div>

                  <div className="btn">
                    <ButtonPrice>Comprar</ButtonPrice>
                  </div>
                </div>
                <div className="item-carousel">
                  <div className="img-carousel">
                    {" "}
                    <img src={img3} alt="" />
                  </div>
                  <div className="name-item">
                    <p>SANDÁLIA PRETA VERNIZ SALTO GEOMÉTRICO VIA MARTE</p>
                  </div>
                  <div className="price-item">
                    <p>R$ 189,99</p>
                    <p>ou 10X R$ 18,99</p>
                  </div>
                  <div className="btn">
                    <ButtonPrice>Comprar</ButtonPrice>
                  </div>
                </div>
                <div className="item-carousel">
                  <div className="img-carousel">
                    {" "}
                    <img src={img4} alt="" />
                  </div>
                  <div className="name-item">
                    <p>SANDÁLIA RASTEIRA VIA MARTE STRASS OFF WHITE</p>
                  </div>
                  <div className="price-item">
                    <p>R$ 199,99</p>
                    <p>ou 10X R$ 19,99</p>
                  </div>
                  <div className="btn">
                    <ButtonPrice>Comprar</ButtonPrice>
                  </div>
                </div>
              </div>
            </section>
          </>
        ))}
      </section>

      {modalActive == true && (
        <Modal />
        /*
        <div className={`sizes-fixed`}>
          <div className="container-size">
            <p onClick={() => setModalActive(false)} className="closeModal">
              X
            </p>
            <div className="guia-de-tamanhos">
              <div className="título-tamanhos">
                <p>GUIA DE TAMANHOS</p>
              </div>
              <div className="instruções">
                <p>1</p>
                <p>
                  Fique de pé em cima de uma folha
                  <br /> de papel.
                </p>
              </div>
              <div className="instruções">
                <p>2</p>
                <p>
                  Faça um risco no seu calcanhar e<br /> outro na frente do de
                  dedão.
                </p>
              </div>
              <div className="instruções">
                <p>3</p>
                <p>
                  Agora é so medir o comprimento
                  <br /> entre essas duas linhas e pronto.
                </p>
              </div>
              <div className="tamanho-img">
                <img src={sizeImg} alt="" />
              </div>
            </div>
            <div className="numeros">
              <div className="título-numeros">
                <p>
                  NÚMERO DO <br />
                  CALÇADO
                </p>
                <p>
                  COMPRIMENTO <br />
                  DO PÉ
                </p>
              </div>
              <div className="numeros-e-comprimentos">
                <div className="lista">
                  <p>33</p>
                  <p>21,6 - 22,2 cm</p>
                </div>
                <div className="lista">
                  <p>34</p>
                  <p>22,6 - 22,9 cm</p>
                </div>
                <div className="lista">
                  <p>35</p>
                  <p>23,0 - 23,6 cm</p>
                </div>
                <div className="lista">
                  <p>36</p>
                  <p>21,6 - 22,2 cm</p>
                </div>
                <div className="lista">
                  <p>37</p>
                  <p>23,7 - 24,2 cm</p>
                </div>
                <div className="lista">
                  <p>38</p>
                  <p>24,9 - 25,5 cm</p>
                </div>
                <div className="lista">
                  <p>39</p>
                  <p>25,6 - 26,2 cm</p>
                </div>
                <div className="lista">
                  <p>40</p>
                  <p>26,3 - 26,8 cm</p>
                </div>
                <div className="lista">
                  <p>41</p>
                  <p>26,9 - 27,5 cm</p>
                </div>
                <div className="lista">
                  <p>42</p>
                  <p>27,6 - 28,2 cm</p>
                </div>
                <div className="lista">
                  <p>43</p>
                  <p>28,3 - 28,7 cm</p>
                </div>
                <div className="lista">
                  <p>44</p>
                  <p>28,8 - 29,4 cm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
         */
      )}
    </Styled.ContainerProducts>
  );
};
export default Product;
