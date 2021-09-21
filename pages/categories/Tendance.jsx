/** @jsxImportSource theme-ui */
import img1 from '../assets/images/ruler-2099742-1920-4@1x.png';
import img2 from '../assets/images/ruler-2099742-1920-5@1x.png';
import img3 from '../assets/images/electric-iron-6046-1920-4@1x.png';
import img4 from '../assets/images/ruler-2099742-1920-3@1x.png';
import img5 from '../assets/images/ruler-2099742-1920-4@1x.png';
import img6 from '../assets/images/ruler-2099742-1920-5@1x.png';
import img7 from '../assets/images/ruler-2099742-1920-3@1x.png';
import img8 from '../assets/images/electric-iron-6046-1920-4@1x.png';
// import img2 from '../assets/kitai-jogia-zhvaeh-R9rA-unsplash.jpg';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Tendance = () => {
  return (
    <div>
      <h4 sx={{ textAlign: 'center', color: '#302F2F ' }} className="product">
        TOP PRODUITS
      </h4>
      <h3 sx={{ textAlign: 'center', fontWeight: 'bold' }} className="tendance">
        LES TENDANCES DE LA SEMAINE
      </h3>
      <div
        sx={{
          mx: 'auto',
          width: [200, 920],
          display: 'grid',
          gridTemplateColumns: '1fr 3fr 5fr 2fr',
          gap: '25px',
          pt: 12,
        }}
      >
        <Card sx={{ width: 220, border: '1px solid black' }}>
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
        {/* seconde card */}
        <Card sx={{ width: 220, border: '1px solid black' }}>
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
        {/* third card */}
        <Card sx={{ width: 220, border: '1px solid black' }}>
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
        {/*  */}
        <Card sx={{ width: 220, border: '1px solid black' }}>
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
        {/*  */}
        <Card sx={{ width: 220, border: '1px solid black' }}>
          <div sx={{ ml: '35px', pt: 12 }}>
            <Image src={img5} alt="fourniture" width="150px" height="120" />
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
        {/*  */}
        <Card sx={{ width: 220, border: '1px solid black' }}>
          <div sx={{ ml: '35px', pt: 12 }}>
            <Image src={img6} alt="fourniture" width="150px" height="120" />
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
        {/*  */}
        <Card sx={{ width: 220, border: '1px solid black' }}>
          <div sx={{ ml: '35px', pt: 12 }}>
            <Image src={img7} alt="fourniture" width="150px" height="120" />
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
        {/*  */}
        <Card sx={{ width: 220, border: '1px solid black' }}>
          <div sx={{ ml: '35px', pt: 12 }}>
            <Image src={img8} alt="fourniture" width="150px" height="120" />
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
    </div>
  );
};

export default Tendance;
