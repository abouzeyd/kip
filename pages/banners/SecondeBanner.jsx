/** @jsxImportSource theme-ui */
import Image from 'next/image';
import phone from '../assets/images/daco-4236367-1@1x.png';

const SecondeBanner = () => {
  return (
    <div className="bannerBlue">
      <div sx={{ textAlign: 'center', mt: 25 }}>
        <a
          href="/"
          sx={{
            textDecoration: 'none',
            borderRadius: 5,
            py: 12,
            px: 15,
            border: '1px solid #707070',
            color: 'orange',
          }}
        >
          Explorer D'autres Produits
        </a>
      </div>
      {/* first banner */}
      <div
        sx={{
          bg: '#0B67C2',
          display: 'flex',
          justifyContent: 'space-around',
          padding: 25,
          mt: 25,
        }}
      >
        <div sx={{ color: 'white', fontSize: 25, mt: 55 }}>
          Obtenez 50 % de réduction
        </div>
        <div>
          <Image src={phone} width="250px" height="150px" />
        </div>
        <div sx={{ mt: 55 }}>
          <a
            href="/"
            sx={{
              textDecoration: 'none',
              borderRadius: 5,
              py: 12,
              px: 15,
              border: '1px solid white',
              color: 'white',
            }}
          >
            Commencer les achats
          </a>
        </div>
      </div>
    </div>
  );
};

export default SecondeBanner;
