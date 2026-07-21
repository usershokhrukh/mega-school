'use client';

import React, { useState } from 'react';
import "./order.modules.scss";

const Order = () => {
  const [currentMap, setCurrentMap] = useState("https://yandex.ru/map-widget/v1/?um=constructor%3Ae912bb48dead259ac783d236146d96574a0c75ca8949fd8e5d6ac3104b82d529&source=constructor");

  return (
    <div className="order">
      <div className="order__box">
        <h2 className="order__h2">LOCATIONS</h2>
        
        <div className="order__main-content">
          
          <div className='order__global-map'>
            <iframe 
              src={currentMap} 
              width="100%" 
              height="100%" 
              frameBorder="0"
              title="Yandex Map"
            ></iframe>
          </div>

          <div className="order__cards">
            
            <div 
              className="order__card-1" 
              onClick={() => setCurrentMap("https://yandex.ru/map-widget/v1/?ll=69.349697%2C41.353342&mode=search&oid=3168361620&ol=biz&z=16")}
            >
              <h4 className="order__h4">Mega School Feruza</h4>
              <p className="order__pp">Учебный центр;<br/>ул. Тимура Малика, 27, Ташкент </p>
            </div>

            <div 
              className="order__card-1"
              onClick={() => setCurrentMap("https://yandex.ru/map-widget/v1/?ll=69.289133%2C41.364491&mode=search&oid=172901634264&ol=biz&z=16")}
            >
              <h4 className="order__h4">Mega School Yunusabad</h4>
              <p className="order__pp">Центр развития ребёнка;<br/>Ташкент, Мирзо-Улугбекский район, массив Карасу, 3-й квартал, 8А</p>
            </div>

            <div 
              className="order__card-1"
              onClick={() => setCurrentMap("https://yandex.ru/map-widget/v1/?ll=69.344405%2C41.328325&mode=search&oid=239088321524&ol=biz&z=16")}
            >
              <h4 className="order__h4">Mega School Korasu</h4>
              <p className="order__pp">Ташкент, улица Афросиаб, 16</p>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Order;