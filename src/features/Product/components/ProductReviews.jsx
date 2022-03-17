import { AccountCircle, Star, StarHalf } from '@mui/icons-material';
import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

function ProductReviews(props) {
  return (
    <Box>
      <Paper sx={{ padding: '16px' }}>
        <Typography component="h1" variant="h4">
          Top reviews from the United States
        </Typography>
        <Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              paddingTop: '20px',
            }}
          >
            <AccountCircle
              sx={{ height: '36px', width: '36px', marginRight: '8px' }}
            />
            <Typography variant="body2">Michelle</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              paddingBottom: '4px',
            }}
          >
            <Box sx={{ paddingRight: '8px' }}>
              <Star />
              <Star />
              <Star />
              <Star />
              <StarHalf />
            </Box>
            <Typography variant="span" sx={{ fontWeight: 'bold' }}>
              Great quality! Buy it now!
            </Typography>
          </Box>

          <Box>
            <Typography variant="span">
              Love this shirt! It’s a heavier material than I expected, but not
              as heavy as a sweatshirt. Very good quality. I like that I don’t
              need to wear a shirt underneath it. Fit was true to size. I
              normally wear a large and that is what I ordered.
            </Typography>
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              paddingTop: '20px',
            }}
          >
            <AccountCircle
              sx={{ height: '36px', width: '36px', marginRight: '8px' }}
            />
            <Typography variant="body2">Jennifer D.</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              paddingBottom: '4px',
            }}
          >
            <Box sx={{ paddingRight: '8px' }}>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </Box>
            <Typography variant="span" sx={{ fontWeight: 'bold' }}>
              LOVE IT!
            </Typography>
          </Box>

          <Box>
            <Typography variant="span">
              I am just a little too obsessed with these tunics from amazon! I
              am 5’ 2” about 160 pounds and ordered a large. It’s perfect! I
              will be back for more in the different colors! 😍
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default ProductReviews;
