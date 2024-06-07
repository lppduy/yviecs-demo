import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, IconButton, Toolbar, AppBar } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeToggle } from '../ThemeContext';
import styles from '../styles/Layout.module.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { toggleTheme } = useThemeToggle();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Kiểm tra chế độ dark mode khi component được render phía client
    setIsDarkMode(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  return (
    <div className={styles.layout}>
      {/* <AppBar position="static">
        <Toolbar>
          <IconButton edge="end" color="inherit" aria-label="mode" onClick={toggleTheme}>
            {isDarkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar> */}
      <Container className={styles.mainContainer}>
        <Card className={styles.card}>
          <CardContent>
            <main>{children}</main>
          </CardContent>
        </Card>
      </Container>
      <footer className={styles.footer}>
        <Container>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Yviecs.com. All rights reserved.
          </Typography>
        </Container>
      </footer>
    </div>
  );
};

export default Layout;
