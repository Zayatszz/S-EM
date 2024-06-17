"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

const specialists = [
  { name: "Болор", title: "Хуулийн зөвлөх", imageUrl: "/images/specialist1.png" },
  { name: "Заяа", title: "Хуулийн зөвлөх", imageUrl: "/images/specialist2.png" },
  { name: "Санчир", title: "Хуулийн зөвлөх", imageUrl: "/images/specialist3.png" },
  { name: "Сарнай", title: "Хуулийн зөвлөх", imageUrl: "/images/specialist4.png" },
];

const Specialists = () => {
  return (
    <div className="container mt-4">
   
      <div className="text-center mb-4">
        <h2>Мэргэжилтэн</h2>
      </div>
      <div className="row">
        {specialists.map((specialist, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">{specialist.name}</h5>
                <p className="card-text">{specialist.title}</p>
                <div className="rounded" style={{ backgroundColor: '#D6DFF2', height: '150px' }}>
                  <Image
                    src={specialist.imageUrl}
                    alt={specialist.name}
                    width={150}
                    height={150}
                  />
                </div>
                <button className=" btn-next">Цаг товлох</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialists;
