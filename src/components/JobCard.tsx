// src/components/JobCard.tsx
import { Card, CardContent, Typography } from '@mui/material';
import styles from '../styles/JobCard.module.scss';

interface JobCardProps {
  job: {
    id: number;
    title: string;
    description: string;
  };
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Card className={styles.card}>
      <CardContent className={styles.cardContent}>
        <Typography variant="h5" component="div">
          {job.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {job.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
