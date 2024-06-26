import React, { useEffect, useState } from "react";

export const Navigation = () => {

    return (
        <div className="navigation">
          <div className="navigation-right" >
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-tiktok"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-discord"></i>
          </div>
          <div className="navigation-left">
            <div className="buy">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="order-now" >
              <h1 className="order-now-text" >ORDER NOW</h1>
            </div>
          </div>
        </div>
    )
}