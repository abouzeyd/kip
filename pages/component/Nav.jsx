/** @jsxImportSource theme-ui */
import menu from '../data/menu.json';
import Image from 'next/image';
import heat from '../assets/svg/heart-regular.svg';
import user from '../assets/svg/user-regular.svg';
import shopping from '../assets/svg/shopping-cart-solid (1).svg';
import hamburger from '../assets/svg/hamburger.svg';
import logo from '../assets/images/logo-kip@1x.png';

const Nav = () => {
  return (
    <div sx={{}}>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          pb: 53,
          pt: 35,
          mx: 'auto',
          width: [990, 1000],
        }}
      >
        <a href="/">
          <Image src={logo} width="110px" height="50px" />
        </a>
        <div
          className="categories"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <a
            href="/"
            sx={{
              ml: 12,
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'black',
            }}
            className="dropdown"
          >
            <Image src={hamburger} width="30px" height="30px" />
            <div className="dropdown">
              <span className="dropbtn">Toutes les Categories</span>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </a>
        </div>
        <div>
          <input
            type="text"
            sx={{ width: 525, height: 35, textAlign: 'center' }}
            placeholder="Recherche vos produits, votre marque, et votre categorie"
          />
          <button
            sx={{
              color: 'white',
              backgroundColor: 'orange',
              border: '0px solid white',
              py: '6px',
              px: '12px',
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div
        className="menu"
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          pt: 32,
          pb: 12,
          bg: 'blue',
        }}
      >
        <div>
          {menu.map((item, index) => {
            return (
              <a
                key={index}
                href={item.link}
                sx={{ ml: 22, textDecoration: 'none', color: 'white' }}
              >
                {item.title}
              </a>
            );
          })}
        </div>
        <div className="connexion" sx={{ display: 'flex' }}>
          <div>
            <Image src={heat} width="20px" height="20px" />
          </div>
          <div sx={{ marginLeft: 4 }}>
            <Image src={user} width="20px" height="20px" />
          </div>
          <div sx={{ marginLeft: 4 }}>
            <Image src={shopping} width="30px" height="20px" />
          </div>
        </div>
      </div>
      <div sx={{ textAlign: 'right', mr: 22, p: 25 }}>
        {/* <span sx={{ mr: '5px' }}>Vendeur:</span>
        <a
          href="/"
          sx={{
            mr: 12,
            textDecoration: 'none',
            color: 'black',
            borderRight: '1px solid black',
            pr: 12,
          }}
        >
          connexion
        </a>
        <a href="/" sx={{ textDecoration: 'none', color: 'black' }}>
          Devenir Vendeur
        </a> */}
      </div>
    </div>
  );
};

export default Nav;
