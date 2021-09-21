/** @jsxImportSource theme-ui */
import Image from 'next/image';

const ThirdBanner = () => {
  return (
    <div sx={{ mt: 35 }} className="bannerBlueOrange">
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          mx: 'auto',
          width: 990,
        }}
      >
        <div
          sx={{
            bg: '#81C4FF',
            width: 640,
            padding: 12,
            display: 'flex',
            justifyContent: 'space-around',
            ml: [0, 32],
          }}
        >
          <div>image</div>
          <div>
            <p sx={{ width: 155, color: 'white', fontSize: 20 }}>
              Nouveau article Disponible !
            </p>
            <a
              href="/"
              sx={{
                fontSize: 12,
                textDecoration: 'none',
                borderRadius: 12,
                bg: 'white',
                py: '7px',
                px: 17,
                color: 'black',
                fontSize: 12,
                ml: '5px',
              }}
            >
              VOIR
            </a>
          </div>
        </div>
        <div
          sx={{
            bg: 'orange',
            width: 640,
            display: 'flex',
            justifyContent: 'space-around',
            padding: 12,
          }}
        >
          <div>image</div>
          <div>
            <p sx={{ width: 125, color: 'white', fontSize: 20 }}>
              Decorez votre maison !
            </p>
            <a
              href="/"
              sx={{
                fontSize: 12,
                textDecoration: 'none',
                borderRadius: 12,
                bg: 'white',
                py: '7px',
                px: 17,
                color: 'black',
                fontSize: 12,
                ml: '5px',
              }}
            >
              VOIR
            </a>
          </div>
        </div>
      </div>
      <div
        sx={{
          bg: 'black',
          mt: 25,
          p: 45,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div sx={{ color: 'white', fontSize: 25 }}>DEMARQUEZ VOUS !</div>
        <div sx={{ color: 'white' }}>
          <a
            href="/"
            sx={{
              textDecoration: 'none',
              borderRadius: 8,
              border: '1px solid white',
              padding: '17px',
              color: 'white',
              fontSize: 12,
              ml: '5px',
            }}
          >
            Commencer les achats
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThirdBanner;
