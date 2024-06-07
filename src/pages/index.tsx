import { Container, Typography, Box, Button } from '@mui/material';
import Link from 'next/link';
import SEO from '../components/SEO'; // Import SEO component
import { Work as WorkIcon, AccessTime as AccessTimeIcon, Home as HomeIcon } from '@mui/icons-material';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <Container className={styles.container}>
      <SEO
        title="Yviecs.com - Your trusted platform for medical job recruitment"
        description="Find the best medical jobs at Yviecs.com. Your trusted platform for medical job recruitment."
        url="https://www.yviecs.com/"
      />
      <Box className={styles.home}>
        <Typography variant="h4" component="h1" className={styles.title}>
          Welcome to Yviecs.com
        </Typography>
        <Typography variant="h6" component="h2" className={styles.subtitle}>
          Your trusted platform for medical job recruitment.
        </Typography>
        <Link href="/jobs" passHref>
          <Button variant="contained" color="primary" className={styles.button} startIcon={<WorkIcon />}>
            View Job Listings
          </Button>
        </Link>
        <div className={styles.textBelow}>
          <Typography variant="body1" className={styles.comingSoon}>
            <AccessTimeIcon className={styles.icon} /> Coming Soon
          </Typography>
          <Typography variant="body2" className={styles.productBy}>
            A product by lppduy
          </Typography>
        </div>
      </Box>
    </Container>
  );
}
