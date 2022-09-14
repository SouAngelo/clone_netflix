import React, {useState, useEffect} from 'react'
import './style.sass'

function NavBar() {

  const [background, setBackground] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setBackground(window.scrollY > 100);
    });
  }, []);

  return (
    <div className={`navbar ${background && "navbar-black"}`}>
        <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix"
      ></img>
      <img
        className="avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU"
        alt="Pasquadev"
      ></img>
    </div>
  )
}

export default NavBar