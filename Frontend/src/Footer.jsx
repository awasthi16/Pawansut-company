import React from 'react';
import "./Footer.css";

export const Footer = () => {
  return (
 
  <footer class="footer">
    <div class="footer-top">
      <div class="footer-col about">
        <img src="logo.png" alt="pawansut" class="logo" />
        <p>
          We are a part of the financial conglomerate Muthoot Pappachan 
          Group (MPG), remain inspired and guided by the Trust story of our 
          group - MPG, built over decades.
        </p>

        <p><i class="fas fa-map-marker-alt"></i> <b>Registered Office:</b><br/>
        Muthoot Pappachan Chits Private Limited, Muthoot Centre, Punnen Road, 
        Thiruvananthapuram, Kerala, 695034</p>

        <p><i class="fas fa-building"></i> <b>Head Office:</b><br/>
        Trivandrum Host Lions Diamond Jubilee Building, Jawaharnagar, Trivandrum - 695003</p>
      </div>

      <div class="footer-col">
        <h3>Chits</h3>
        <ul>
          <li><a href="#">Chit process-how works?</a></li>
          <li><a href="#">Security norms of chits</a></li>
          <li><a href="#">Benefits of chits</a></li>
          <li><a href="#">Documents required for chits?</a></li>
          <li><a href="#">Eligibility criteria</a></li>
          <li><a href="#">Need Based Solution</a></li>
          <li><a href="#">Profile based solution</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Other links</h3>
        <ul>
          <li><a href="#">Brochure</a></li>
          <li><a href="#">Branch locator</a></li>
          <li><a href="#">Pay online</a></li>
          <li><a href="#">Sitemap</a></li>
          <li><a href="#">Privacy policies</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Cancellation/Refund Policy</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Blogs</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>About us</h3>
        <ul>
          <li><a href="#">About Chits</a></li>
          <li><a href="#">Founders</a></li>
          <li><a href="#">Board Of Directors</a></li>
          <li><a href="#">About MPG</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="social">
        <a href="#"><i class="fas fa-envelope"></i></a> chits@pawansut.com <br/>
        <a href="#"><i class="fas fa-phone"></i></a> 0 8067 8067 00
        <div class="social-icons">
          <a href="#"><i class="fab fa-linkedin"></i></a>
          <a href="#"><i class="fab fa-facebook"></i></a>
        </div>
      </div>

      <div class="footer-buttons">
        <button><i class="fas fa-calculator"></i> Select Calculator <i class="fas fa-chevron-down"></i></button>
        <button><i class="fas fa-user-tie"></i> Become Our Agent</button>
        <button><i class="fas fa-globe"></i> Group Co Website <i class="fas fa-chevron-down"></i></button>
      </div>
    </div>

    <div class="copyright">
    © All Rights Reserved. Pawansut Chits
    </div>
  </footer>
  )
}
