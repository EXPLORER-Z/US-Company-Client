import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import Image from "../Images/Imgge1.jpg" ;
{/* <link rel="stylesheet" href="https://unpkg.com/bootstrap@5.3.3/dist/css/bootstrap.min.css" /> */ }
{/* <link rel="stylesheet" href="https://unpkg.com/bs-brain@2.0.4/components/abouts/about-1/assets/css/about-1.css" */ }
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>

const Home = () => {
  return (
    <>
      <div>
        <Navbar />



        <img src={Image} className="d-block w-100" alt="img 1" />

        <>
          {/* About 1 - Bootstrap Brain Component */}
          <section className="py-3 py-md-5 py-xl-8">
            <div className="container">
              <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                <div className="col-12 col-lg-6 col-xl-5">
                  <img
                    className="img-fluid rounded"
                    loading="lazy"
                    src={Image}  alt="ABOUT US" />"
                    
                  
                </div>
                <div className="col-12 col-lg-6 col-xl-7">
                  <div className="row justify-content-xl-center">
                    <div className="col-12 col-xl-11">
                      <h2 className="h1 mb-3">Who Are We?</h2>
                      <p className="lead fs-4 text-secondary mb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis non eveniet suscipit autem doloremque aspernatur odio aut, nam illo. Assumenda sunt voluptate iste aliquam quisquam.
                      </p>
                      <p className="mb-5">
                        Nullam gravida orci ac luctus molestie. Fusce finibus congue
                        erat, non aliquam magna tincidunt at. Aenean lacinia arcu ex,
                        sed pharetra nibh porta a. Curabitur vel consequat nibh, ac
                        interdum nisl. Nunc pulvinar nec massa vitae sollicitudin.
                      </p>
                      <div className="row gy-4 gy-md-0 gx-xxl-5X">
                        <div className="col-12 col-md-6">
                          <div className="d-flex">
                            <div className="me-4 text-primary">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
                                fill="currentColor"
                                className="bi bi-gear-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="mb-3">Versatile Building</h4>
                              <p className="text-secondary mb-0">
                                We are crafting a digital method that subsists life
                                across all mediums.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="d-flex">
                            <div className="me-4 text-primary">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
                                fill="currentColor"
                                className="bi bi-fire"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="mb-3">Dream Spaces</h4>
                              <p className="text-secondary mb-0">
                                We believe in innovation by merging primary with
                                elaborate ideas.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>


        <h1>Our Projects</h1>





        <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./Images/Imgge1.webp" className="d-block w-100" alt="img 1" />
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>











      </div>
    </>
  )
}

export default Home;