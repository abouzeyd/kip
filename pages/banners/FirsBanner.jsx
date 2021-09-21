/** @jsxImportSource theme-ui */
import Image from 'next/image';
import ordinateur from '../assets/images/mask-group-10@1x.png';

const Exploration = () => {
  return (
    <div className="buttonExplorer">
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
          bg: 'orange',
          display: 'flex',
          justifyContent: 'space-around',
          padding: 45,
          mt: 25,
        }}
        className="bannerOrange"
      >
        <div sx={{ color: 'white', fontSize: [12, 25] }}>Jusqu'a 80%</div>
        <div>
          <Image src={ordinateur} width="800px" height="90px" />
        </div>
        <div sx={{ mt: 10 }}>
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

export default Exploration;
