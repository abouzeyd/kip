/** @jsxImportSource theme-ui */
import logo from '../assets/images/logo-kip@1x.png';
import Image from 'next/image';
import service from '../data/serviceClient.json';
import compagnie from '../data/compagnies.json';
import business from '../data/business.json';
import fb from '../assets/svg/facebook-f-brands.svg';
import twt from '../assets/svg/twitter-brands.svg';
import istg from '../assets/svg/instagram-brands.svg';
import ytb from '../assets/svg/youtube-brands.svg';
import payment from '../assets/images/payment-card@1x (1).png';

const Footer = () => {
  return (
    <div sx={{ mx: 'auto', width: 920, pt: 45 }}>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <div>
          <Image src={logo} width="110px" height="50px" />
          <p sx={{ width: 260, fontSize: 14 }}>
            Notre plateforme de MarketPlace est la première plateforme de
            e-commerce 100% digitale en Côte d’Ivoire. Kip Platform met en
            relation consommateurs et vendeurs, créée une connexion fluide et
            rapide qui facilite vos transactions de la validation de la commande
            jusqu’à la livraison. Nous œuvrons pour un impact durable dans toute
            les couches sociales de la société. posuere et egestas.{' '}
          </p>
        </div>
        <div sx={{ pt: 55 }}>
          <h5 sx={{ fontSize: 15, mb: 10 }}>Service client</h5>
          {service.map((item, index) => {
            return (
              <div key={index} sx={{ display: 'flex' }}>
                <a
                  href={item.link}
                  sx={{ fontSize: 14, textDecoration: 'none', color: 'black' }}
                >
                  {item.title}
                </a>
              </div>
            );
          })}
        </div>
        <div sx={{ pt: 55 }}>
          <h5 sx={{ fontSize: 15, mb: 10 }}>Compagnie</h5>
          {compagnie.map((item, index) => {
            return (
              <div key={index} sx={{ display: 'flex' }}>
                <a
                  href={item.link}
                  sx={{ fontSize: 14, textDecoration: 'none', color: 'black' }}
                >
                  {item.title}
                </a>
              </div>
            );
          })}
        </div>
        <div sx={{ pt: 55 }}>
          <h5 sx={{ fontSize: 15, mb: 10 }}>Service client</h5>
          {business.map((item, index) => {
            return (
              <div key={index} sx={{ display: 'flex' }}>
                <a
                  href={item.link}
                  sx={{ fontSize: 14, textDecoration: 'none', color: 'black' }}
                >
                  {item.title}
                </a>
              </div>
            );
          })}
        </div>
        <div sx={{ pt: 55 }}>
          <h5 sx={{ fontSize: 15, textAlign: 'center' }}>Newsletter</h5>
          <div sx={{ mt: 20 }}>
            <a
              href="/"
              sx={{
                fontSize: 14,
                textDecoration: 'none',
                borderRadius: 8,
                bg: 'black',
                py: '12px',
                color: 'green',
                fontSize: 12,
                px: 12,
              }}
            >
              Abonnez-vous
            </a>
          </div>
          <div sx={{ display: 'flex', justifyContent: 'space-around', pt: 55 }}>
            <div>
              <Image src={fb} width="15px" height="15px" />
            </div>
            <div>
              <Image src={twt} width="15px" height="15px" />
            </div>
            <div>
              <Image src={istg} width="15px" height="15px" />
            </div>
            <div>
              <Image src={ytb} width="15px" height="15px" />
            </div>
          </div>
        </div>
      </div>
      <div sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p sx={{ fontSize: 12, color: 'orange' }}>
          Nous utilisons le paiement sécurisé pour :
        </p>

        <div sx={{ ml: 12 }}>
          <Image src={payment} width="150px" height="20px" />
        </div>
        {/* <div sx={{ ml: 12 }}>s</div>
        <div sx={{ ml: 12 }}>s</div> */}
      </div>
      <div>
        <p sx={{ fontSize: 12, textAlign: 'left', color: 'orange' }}>
          © 2020 Kip center. Tous droits reservés
        </p>
      </div>
    </div>
  );
};

export default Footer;
