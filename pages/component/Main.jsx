/** @jsxImportSource theme-ui */
import Image from 'next/image';
import car from '../assets/svg/shipping-fast-solid.svg';
import paiement from '../assets/svg/carte-de-credit.svg';
import retour from '../assets/svg/sync-solid.svg';
import support from '../assets/svg/comment-regular.svg';
import Categories from '../categories/DeliveryCategory';
import FirstBaner from '../banners/FirsBanner';
import DeliveryMachine from '../categories/DeliveryMachine';
import SecondeBanner from '../banners/SecondeBanner';
import Tendance from '../categories/Tendance';
import ThirdBanner from '../banners/ThirdBanner';
import Footer from '../component/Footer';

const Main = () => {
  return (
    <div>
      <div sx={{ width: 1080, margin: 'auto' }} className="icones">
        <div sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <div
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderRight: '1px solid  #0000008C',
              paddingRight: 22,
            }}
          >
            <Image src={car} alt="livraison" width="40px" height="40px" />
            <div sx={{ mt: 25, ml: 12 }}>
              <h5 sx={{ mb: 0, fontSize: 18 }}>Livraison rapide</h5>
              <p sx={{ fontSize: 12 }}>Pour toutes vos commandes</p>
            </div>
          </div>
          {/* retour Rapide */}
          <div
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderRight: '1px solid  #0000008C',
              paddingRight: 22,
            }}
          >
            <Image src={retour} alt="livraison" width="30px" height="40px" />
            <div sx={{ ml: 12 }}>
              <h5 sx={{ mb: 0, fontSize: 18 }}>Retour rapide</h5>
            </div>
          </div>
          {/* Paiement securise */}
          <div
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderRight: '1px solid  #0000008C',
              paddingRight: 22,
            }}
          >
            <Image src={paiement} alt="livraison" width="30px" height="40px" />
            <div sx={{ mt: 25, ml: 12 }}>
              <h5 sx={{ mb: 0, fontSize: 18 }}>Paiement sécurisé</h5>
              <p sx={{ fontSize: 12 }}>Sécurisé à 100%</p>
            </div>
          </div>
          {/* Support */}
          <div
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Image src={support} alt="livraison" width="40px" height="40px" />
            <div sx={{ ml: 12 }}>
              <h5 sx={{ mb: 0, fontSize: 18 }}>24/7 Support</h5>
            </div>
          </div>
        </div>
        <Categories />
      </div>
      <FirstBaner />
      <DeliveryMachine />
      <SecondeBanner />
      <Tendance />
      <ThirdBanner />
      <Footer />
    </div>
  );
};

export default Main;
