/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// import userFemale from "../../img/userFemale.jpg"
export default function LeftSide() {
  return (
        <div class="left-side">
          <h2>Chats</h2>
          <div class="tab-control">
            <i class="fa fa-comment active"></i>
            <i class="fa fa-comments"></i>
          </div>
          <div class="list-user-search">
            <input type="text" class="txt-input" placeholder="Search..." />
          </div>
          <div class="list-user">
            <ul>
              <li>
                <div class="user-contain">
                  <div class="user-img">
                    <img src="/img/userFemale.jpg"  />
                    <div class="user-img-dot"></div>
                  </div>
                  <div class="user-info">
                    <span class="user-name">Tên Người chat</span>
                    <span class="user-last-message">Hello!</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="user-contain">
                  <div class="user-img">
                  <img src="/img/userFemale.jpg"  />
                    <div class="user-img-dot"></div>
                  </div>
                  <div class="user-info">
                    <span class="user-name">Tên Người chat</span>
                    <span class="user-last-message">Hello!</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="user-contain">
                  <div class="user-img">
                  <img src="/img/userFemale.jpg"  />
                    <div class="user-img-dot online"></div>
                  </div>
                  <div class="user-info">
                    <span class="user-name">Tên Người chat</span>
                    <span class="user-last-message">Hello!</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="user-contain">
                  <div class="user-img">
                  <img src="/img/userFemale.jpg"  />
                    <div class="user-img-dot"></div>
                  </div>
                  <div class="user-info">
                    <span class="user-name">Tên Người chat</span>
                    <span class="user-last-message">Hello!</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="user-contain">
                  <div class="user-img">
                  <img src="/img/userFemale.jpg"  />
                    <div class="user-img-dot online"></div>
                  </div>
                  <div class="user-info">
                    <span class="user-name">Tên Người chat</span>
                    <span class="user-last-message">Hello!</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="user-contain">
                  <div class="user-img">
                  <img src="/img/userFemale.jpg"  />
                    <div class="user-img-dot"></div>
                  </div>
                  <div class="user-info">
                    <span class="user-name">Tên Người chat</span>
                    <span class="user-last-message">Hello!</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
  );
}
