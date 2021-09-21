/** @jsxImportSource theme-ui */
import img1 from '../assets/images/image@1x.png';
import img2 from '../assets/images/ruler-2099742-1920@1x.png';
import img3 from '../assets/images/ruler-2099742-1920-1@1x.png';
import img4 from '../assets/images/ruler-2099742-1920-2@1x.png';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Categories = () => {
  return (
    <div
      sx={{
        // margin: 'auto',
        // width: 1130,
        bg: '#81C4FF',
        mt: 25,
        display: 'flex',
        justifyContent: 'space-around',
        pb: 25,
      }}
      // className="container"
    >
      <div sx={{ width: '1px', pt: 39, mr: 150 }}>FOURNITURE SCOLAIRE</div>
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 12,
          pt: 12,
        }}
      >
        <Card sx={{ width: 220 }}>
          <div sx={{ ml: '35px', pt: 12 }}>
            <Image src={img1} alt="fourniture" width="150px" height="120" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Livre romanesques
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p sx={{ textAlign: 'center', mr: 17 }}>54000FCF</p>
              </Typography>
              <Typography>
                <a
                  href="/"
                  sx={{
                    textDecoration: 'none',
                    borderRadius: 8,
                    bg: 'orange',
                    padding: '7px',
                    color: 'white',
                    fontSize: 12,
                    mb: 12,
                    mr: 20,
                  }}
                >
                  Ajouter au panier
                </a>
              </Typography>
              <Typography>
                <a
                  href="/"
                  sx={{
                    textDecoration: 'none',
                    borderRadius: 8,
                    bg: 'blue',
                    padding: '7px',
                    color: 'white',
                    fontSize: 12,
                    ml: '5px',
                  }}
                >
                  Ajouter au envie
                </a>
              </Typography>
            </CardContent>
          </div>
        </Card>
        {/* deuxieme */}
        <Card sx={{ width: 220 }}>
          <div sx={{ ml: '35px', pt: 12 }}>
            <Image src={img2} alt="fourniture" width="150px" height="120" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Livre romanesques
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p sx={{ textAlign: 'center', mr: 17 }}>54000FCF</p>
              </Typography>
              <Typography>
                <a
                  href="/"
                  sx={{
                    textDecoration: 'none',
                    borderRadius: 8,
                    bg: 'orange',
                    padding: '7px',
                    color: 'white',
                    fontSize: 12,
                    mb: 12,
                    mr: 20,
                  }}
                >
                  Ajouter au panier
                </a>
              </Typography>
              <Typography>
                <a
                  href="/"
                  sx={{
                    textDecoration: 'none',
                    borderRadius: 8,
                    bg: 'blue',
                    padding: '7px',
                    color: 'white',
                    fontSize: 12,
                    ml: '5px',
                  }}
                >
                  Ajouter au envie
                </a>
              </Typography>
            </CardContent>
          </div>
        </Card>
        {/* troixiem */}
        <Card sx={{ width: 220 }}>
          <div sx={{ ml: '35px', pt: 12 }}>
            <Image src={img3} alt="fourniture" width="150px" height="120" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Livre romanesques
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p sx={{ textAlign: 'center', mr: 17 }}>54000FCF</p>
              </Typography>
              <Typography>
                <a
                  href="/"
                  sx={{
                    textDecoration: 'none',
                    borderRadius: 8,
                    bg: 'orange',
                    padding: '7px',
                    color: 'white',
                    fontSize: 12,
                    mb: 12,
                    mr: 20,
                  }}
                >
                  Ajouter au panier
                </a>
              </Typography>
              <Typography>
                <a
                  href="/"
                  sx={{
                    textDecoration: 'none',
                    borderRadius: 8,
                    bg: 'blue',
                    padding: '7px',
                    color: 'white',
                    fontSize: 12,
                    ml: '5px',
                  }}
                >
                  Ajouter au envie
                </a>
              </Typography>
            </CardContent>
          </div>
        </Card>
        {/* quatrieme */}
        <Card sx={{ width: 220 }}>
          <div sx={{ ml: '35px', pt: 12 }}>
            <Image src={img4} alt="fourniture" width="150px" height="120" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Livre romanesques
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p sx={{ textAlign: 'center', mr: 17 }}>54000FCF</p>
              </Typography>
              <Typography>
                <a
                  href="/"
                  sx={{
                    textDecoration: 'none',
                    borderRadius: 8,
                    bg: 'orange',
                    padding: '7px',
                    color: 'white',
                    fontSize: 12,
                    mb: 12,
                    mr: 20,
                  }}
                >
                  Ajouter au panier
                </a>
              </Typography>
              <Typography>
                <a
                  href="/"
                  sx={{
                    textDecoration: 'none',
                    borderRadius: 8,
                    bg: 'blue',
                    padding: '7px',
                    color: 'white',
                    fontSize: 12,
                    ml: '5px',
                  }}
                >
                  Ajouter au envie
                </a>
              </Typography>
            </CardContent>
          </div>
        </Card>
      </div>
      <div sx={{ pt: 12 }}>
        <Card sx={{ width: 450, height: 650, pt: 12 }}>
          <span
            sx={{
              fontSize: '12px',
              ml: 12,
              borderRadius: '5px',
              bg: 'blue',
              py: '3px',
              px: '7px',
              color: 'white',
            }}
          >
            Soldes -50%
          </span>
          <div sx={{ pt: 12 }}>
            <Image src={img1} alt="fourniture" />
          </div>
          <div sx={{ ml: 17, fontSize: 14, fontWeight: 'bold' }}>
            Livre encyclopedie
          </div>
          <div sx={{ ml: 17, fontSize: 12, mb: 12 }}>3459 Pages</div>
          <a
            href="/"
            sx={{
              textDecoration: 'none',
              borderRadius: 8,
              bg: 'orange',
              padding: '7px',
              color: 'white',
              fontSize: 12,
              ml: '5px',
            }}
          >
            Ajouter au envie
          </a>
        </Card>
      </div>
    </div>
  );
};

export default Categories;
