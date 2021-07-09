import styles from "./carousel.module.css";
import Image from "next/image";
import cover1 from "../../public/cover1.jpg";
import cover2 from "../../public/cover2.jpg";

function Carousel() {
  return (
    <div>
      <div
        id="myCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className={`carousel-item active ${styles.carouselItem}`}>
            <div className={styles.carouselImage}>
              <Image
                src={cover1}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div className={`container ${styles.container}`}>
              <h1>Example item 1</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <a href="#" className="btn btn-lg btn-primary">
                Signup Today!
              </a>
            </div>
          </div>
          <div className={`carousel-item ${styles.carouselItem}`}>
            <div className={styles.carouselImage}>
              <Image
                src={cover2}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div className={`container ${styles.container}`}>
              <h1>Example item 2</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <a href="#" className="btn btn-lg btn-primary">
                Signup Today!
              </a>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
