import React, { useRef, useEffect } from "react";
import Typewriter from "typewriter-effect";
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoPython,
} from "react-icons/io";
import { SiTypescript } from "react-icons/si";
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
      "rgba(73, 88, 105, 0.3)",
      // "rgba(73, 83, 105, 0.5)",
      // "rgba(73, 83, 98, 0.5)",
      // "rgba(73, 88, 98, 0.5)",
    ];

    const create = () => {
      for (let i = 0; i < 10; i++) {
        var radius = 500 * 0.2;
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
      <div className="fontSize flex flex-col gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <code className="text-lime-700 w-max" id="md5_name">
          {"// MD5=834b62e8be515ca3d904e6b4e313fe49"}
        </code>
        <code>
          <span className="text-sky-700">const</span>{" "}
          <span className="text-yellow-500">Introduction</span> ={" "}
          <span className="text-yellow-300">{"()"}</span>
          <span className="text-sky-700">{" ="}</span>
          <span className="text-yellow-300">{" {"}</span>
        </code>
        <code className="flex flex-col gap-3 ml-[1em]">
          <code>
            <span className="text-sky-700">const </span>
            <span className="text-yellow-500">fullName</span> ={" "}
            <span className="text-amber-700">"Yu Takaki"</span>;
          </code>
          <code className="flex">
            <span className="text-sky-700">let </span>{" "}
            <span className="text-yellow-500 ml-[.5em] mr-[.5em]">
              whatAmI{" "}
            </span>{" "}
            {" = "}
            <span className="text-amber-700 ml-[.5em]">
              <Typewriter
                options={{
                  strings: [
                    '"Developer"',
                    '"Programmer"',
                    '"Software Engineer"',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </code>
        </code>
        <code>
          <span className="text-yellow-300">{"};"}</span>
        </code>
        <div className="flex gap-7 text-3xl items-center">
          <IoLogoJavascript />
          <IoLogoHtml5 />
          <IoLogoCss3 />
          <IoLogoPython />
          <SiTypescript />
        </div>
      </div>
      <canvas ref={canvasRef}></canvas>
    </section>
  );
};

export default Banner;
