import React from "react";
import sizeImg from "../../../assets/sizes/Union.png";

const Modal = ({ setModalActive }) => {
  return (
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
  );
};
export default Modal;
