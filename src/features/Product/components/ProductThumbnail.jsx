import { Box } from '@mui/material';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants';
import PropTypes from 'prop-types';
import React from 'react';

ProductThumbnail.propTypes = {
  product: PropTypes.object,
};

function ProductThumbnail({ product }) {
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;

  return (
    <Box>
      <Box padding={1} minHeight={215}>
        <img src={thumbnailUrl} alt={product.name} width="100%" />
      </Box>
    </Box>
  );
}

export default ProductThumbnail;
