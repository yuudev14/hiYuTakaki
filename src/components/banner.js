import React, { useRef, useEffect } from "react";
import city from "../assets/city.png";

const Banner = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    let width;
    let height;
    canvas.width = width = document
      .querySelector(".banner")
      .getBoundingClientRect().width;
    canvas.height = height = document
      .querySelector(".banner")
      .getBoundingClientRect().height;
    const ctx = canvas.getContext("2d");
    function resize() {
      canvas.width = width = document
        .querySelector(".banner")
        .getBoundingClientRect().width;
      canvas.height = height = document
        .querySelector(".banner")
        .getBoundingClientRect().height;
      ctx.clearRect(0, 0, width, height);
      circles = [];
      create();
    }

    window.addEventListener("resize", resize);

    class Circle {
      constructor(x, y, radius, dx, dy, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      update() {
        if (this.x > width || this.x < 0) {
          this.dx = -this.dx;
        }
        if (this.y > height || this.y < 0) {
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      }
    }
    let circles = [];
    let colors = [
      "rgba(44, 44, 44, 0.5)",
      "rgba(15, 15, 15, 0.5)",
      "rgba(75, 75, 75, 0.5)",
      "rgba(95, 95, 95, 0.5)",
    ];

    const create = () => {
      for (let i = 0; i < 10; i++) {
        var radius = width * 0.2;
        var x = Math.random() * width;
        var y = Math.random() * height;

        var dx = Math.random() * 0.5 + 1;
        var dy = Math.random() * 0.5 + 1;
        var color = colors[Math.floor(Math.random() * colors.length)];

        circles.push(new Circle(x, y, radius, dx, dy, color));
      }
    };

    const animation = () => {
      ctx.clearRect(0, 0, width, height);

      requestAnimationFrame(animation);
      circles.map((c) => c.update());
    };

    animation();
    create();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="banner" id="home">
      <div className="banner-content">
        <div className="my-info">
          <h1 className="first">Yu</h1>
          <h1 className="second">Takaki</h1>
          <h1 className="third">Software Engineer</h1>
        </div>
        <div className="my-slogan">
          <h1 className="fourth">Lets Work Together As A Team</h1>
          <ul>
            <a href="https://www.facebook.com/yuyu.takaks/" target="_blank">
              <li className="fa fa-facebook"></li>
            </a>
            <a href="https://twitter.com/takakiyuuu" target="_blank">
              <li className="fa fa-twitter"></li>
            </a>
            <a href="https://github.com/YuTakaki" target="_blank">
              <li className="fa fa-github"></li>
            </a>
            <a href="https://www.linkedin.com/in/takakiiiyuuu/" target="_blank">
              <li className="fa fa-linkedin"></li>
            </a>
          </ul>
        </div>
      </div>
      <img src={city} alt="banner" />
      <canvas ref={canvasRef}></canvas>
    </section>
  );
};

export default Banner;
