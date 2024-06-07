// src/pages/jobs.tsx
import { Container, Typography, Box } from '@mui/material';
import JobList from '../components/JobList';
import styles from '../styles/Jobs.module.scss';

export default function Jobs() {
  return (
    <Container>
      <Box className={styles.jobs}>
        <Typography variant="h4" component="h1">
          Job Listings
        </Typography>
        <JobList />
      </Box>
    </Container>
  );
}
