import { useContext } from "react";
import SearchBar from "../../components/searchbar/SearchBar";
import "./HomePage.scss";
import { AuthContext } from "../../context/AuthContext";

const HomePage = () => {
  const {currentUser} = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div className="homepage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Find a home away from home with HomeHunter.
          </h1>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            explicabo ea id similique, voluptatem esse veritatis doloremque, est
            tempore aliquam recusandae ut. Illum ad debitis sed, suscipit
            temporibus excepturi quia?
          </p>
          <SearchBar/>
          <div className="boxes">
            <div className="box">
                <h1>5+</h1>
                <h2>Years of Experience</h2>
            </div>
            <div className="box">
                <h1>10</h1>
                <h2>Awards Gained</h2>
            </div>
            <div className="box">
                <h1>500+</h1>
                <h2>Properties Listed</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
