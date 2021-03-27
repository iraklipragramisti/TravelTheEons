import RegionCard from "../region/RegionCard"
import "./Home.css"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import Caucasus from "./caucasus/Caucasus"

const Home = () => {
  return (

    <ul className="regions">
      <li className="region">
        <Link to="caucasus">
          <RegionCard regionName="Caucasus" backgroundImage="url(https://avatars.mds.yandex.net/get-zen_doc/1594643/pub_5e6c528e1025642bc85a0fd3_5e6d39c26fa17f240b3950a7/scale_1200)" />
        </Link>
      </li >
      <li className="region" >
        <Link to="iberia">
          <RegionCard regionName="Iberia" backgroundImage="url(https://upload.wikimedia.org/wikipedia/commons/4/45/La_rendici%C3%B3n_de_Granada.jpg)" />
        </Link>
      </li>
      <li className="region">
        <Link to="italy">
        <RegionCard regionName="Italy" backgroundImage="url(https://article-imgs.scribdassets.com/236r8lhtts7a4b8k/images/fileWTXA4WNO.jpg)"/>
        </Link>
      </li>
    </ul>

  )
}

export default Home