import Slider from "react-slick";
import Skeleton from "../ItemsBlock/ItemsBlockSkeleton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addItem, fetchItem } from "../../features/basketCount/addItembasket";
import styles from "./Slider.module.css";
import Like from "../Like/Like";

function ProductSlider() {
  const products = useSelector((state) => state.item.products);
  const sort = useSelector((state) => state.item.sortBy);
  const Value = useSelector((state) => state.search.value);
  const order = useSelector((state) => state.item.sortOrder);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("actualSort:", sort);
    console.log("Value:", Value);
    const setord = order === "asc" ? "asc" : "desc";
    dispatch(
      fetchItem({
        sort: sort.replace("-", ""),
        search: Value,
        setord: setord,
      })
    ).then(() => setIsLoading(false));
  }, [dispatch, sort, Value, order]);

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!products.length === 0) {
    return <p className={styles.noProductsMessage}>Товары не найдены.</p>;
  }
  console.log(products);
  return (
    <Slider {...settings}>
      {isLoading
        ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
        : products.map((item) => (
            <div className={styles.box_slider} key={item.id}>
              <p className={styles.name}>{item.name}</p>

              <div className={styles.images}>
                <img src={item.image} className={styles.slide} alt="awd" />
              </div>

              <p className={styles.price}>{item.price}$</p>

              <div className={styles.add_box}>
                <button
                  onClick={() => dispatch(addItem(item))}
                  className={styles.product_button1}
                >
                  Add to Cart
                </button>
              </div>
              <div className={styles.like_position}>
                {<Like  item={item}  />}
              </div>
            </div>
          ))}
    </Slider>
  );
}

export default ProductSlider;
