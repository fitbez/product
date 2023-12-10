import "./hero.css";
import Button from "../button/button";

function Hero({ buttonText, productData }) {
  const isLoggedIn = true;

  return (
    <header className="hero-container">
      <section className="hero-content">
        <h1 className="header">Sell Your Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi placeat
          optio sint ducimus. Sed quaerat earum ea quia assumenda necessitatibus
          veniam, eveniet voluptas libero id similique. Commodi laboriosam vitae
          animi placeat porro omnis fugiat harum dignissimos, quasi repellat
          quidem veniam. Excepturi maiores deleniti consequuntur fugit quaerat,
          incidunt minima, necessitatibus ab iure deserunt laborum quos repellat
          amet eum veritatis rem iusto natus. Minima aliquid rerum vitae iusto
          ad nihil? Quibusdam pariatur id consequatur at accusamus! Inventore
          vel omnis beatae tempore dolorum, quod laudantium expedita quaerat
          voluptatum fugit. Porro, ea praesentium dignissimos modi vero libero
          cupiditate, dolor asperiores exercitationem nisi soluta. Nisi tempora
          minima ipsam.
        </p>
        <p>total product = {productData.length}</p>
        {/** false */}
        {/* {isLoggedIn ? <button>Add Products</button> : null} */}
        {isLoggedIn && <Button>{buttonText}</Button>}
      </section>
      <img
        style={{
          width: "200px",
          height: "200px",
        }}
        src="https://plus.unsplash.com/premium_photo-1663100794006-58b06e8de412"
        alt=""
      />
    </header>
  );
}

export default Hero;

//Flex Box
