import React, { useState } from "react";
import AppContext from "../../context/AppContext";
import * as Styled from "./styles";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/format";
import Button from "../../components/Button";
import sizeImg from "../../assets/sizes/Union.png";

const Product = () => {
  const { products } = useContext(AppContext);
  console.log(products);

  const [modalActive, setModalActive] = useState(false);

  const a = () => {
    setModalActive(!modalActive);
    console.log(modalActive);
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
                  <p onClick={a} className="size-guide">
                    Guia de tamanhos
                  </p>
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
      <div className={`${modalActive ? "" : ""}`}>
        <div className="container-size">
          <p
            onClick={a}
            className={`${!modalActive ? "" : ""}`}
          >
            X
          </p>
          <div className="guia-de-tamanhos">
            <div className="título-tamanhos">
              <p>GUIA DE TAMANHOS</p>{" "}
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
    </Styled.ContainerProducts>
  );
};
export default Product;
