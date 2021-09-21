/** @jsxImportSource theme-ui */
import Image from 'next/image';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import img1 from '../assets/images/image-1-1@1x.png';
// import img2 from '../assets/kitai-jogia-zhvaeh-R9rA-unsplash.jpg';

const Slider = () => {
  const properties = {
    // indicators: true,
  };

  return (
    <div className="containerSlider">
      <Fade {...properties}>
        <div className="each-slide" sx={{ position: 'relative' }}>
          <Image src={img1} alt="slide1" height="500px" />
          <div className="test">
            {/* <h3 sx={{ fontSize: 35, width: 375 }}>
              Obtenez le nouvelle Iphone 12 Pro
            </h3>
            <h5 sx={{ width: 495, mt: 25, fontSize: 14 }}>
              Un système transformateur à trois caméras qui ajoute des tonnes de
              capacités sans complexité.
            </h5>
            <div sx={{ marginTop: 47 }}>
              <a href="/" sx={style.linkContactezNous}>
                Contactez-nous
              </a>
              <a href="/" sx={style.linkAchetez}>
                Achetez
              </a>
            </div> */}
          </div>
        </div>
        {/* seconde Slider */}
        <div className="each-slide">
          <Image src={img1} alt="slide2" height="500px" />
          {/* <div className="test">
            <h3 sx={{ fontSize: 35, width: 375 }}>
              Obtenez le nouvelle Iphone 12 Pro
            </h3>
            <h5 sx={{ width: 495, mt: 25, fontSize: 14 }}>
              Un système transformateur à trois caméras qui ajoute des tonnes de
              capacités sans complexité.
            </h5>
            <div sx={{ marginTop: 47 }}>
              <a href="/" sx={style.linkContactezNous}>
                Contactez-nous
              </a>
              <a href="/" sx={style.linkAchetez}>
                Achetez
              </a>
            </div>
          </div> */}
        </div>
      </Fade>
    </div>
  );
};

export default Slider;

const style = {
  linkContactezNous: {
    textDecoration: 'none',
    backgroundColor: 'blue',
    width: '150px',
    textAlign: 'center',
    marginTop: '10px',
    borderRadius: '5px',
    // boxShadow: '1px 1px 1px 1px white',
    color: 'white',
    transition: '0.5s ease',
    '&:hover': {
      color: 'orange',
    },
    padding: '15px',
  },
  linkAchetez: {
    textDecoration: 'none',
    backgroundColor: 'orange',
    width: '150px',
    textAlign: 'center',
    marginTop: '10px',
    borderRadius: '5px',
    color: 'white',
    transition: '0.5s ease',
    '&:hover': {
      color: 'blue',
    },
    py: '15px',
    px: 45,
    ml: 12,
  },
};
