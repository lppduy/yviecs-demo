import { Grid, Typography, Box, Button } from '@mui/material';
import Link from 'next/link';
import JobCard from './JobCard';
import styles from '../styles/JobList.module.scss';

const jobs = [
  { id: 1, title: 'Doctor', description: 'Looking for an experienced doctor.' },
  { id: 2, title: 'Nurse', description: 'Seeking a dedicated nurse.' },
  // Add more job listings here
];

export default function JobList() {
  return (
    <Box className={styles.jobListContainer}>
      <Grid container spacing={2}>
        {jobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
      <Box className={styles.comingSoon}>
        <Link href="/" passHref>
          <Button variant="contained" color="primary" className={styles.backButton}>
            Back to Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
