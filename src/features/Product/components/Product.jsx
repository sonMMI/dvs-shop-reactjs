import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { formatPrice } from 'utils';

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const history = useHistory();
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;

  const handleClick = () => {
    // navigate to detail page: /product/:productId
    history.push(`/products/${product.id}`);
  };

  return (
    <Card sx={{ margin: 1 }} onClick={handleClick}>
      <CardActionArea>
        <CardMedia component="img" image={thumbnailUrl} alt={product.name} />
        <CardContent>
          <Typography
            gutterBottom
            variant="body2"
            minHeight="42px"
            component="div"
          >
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
              {formatPrice(product.salePrice)}
            </Box>
            {product.promotionPercent > 0
              ? ` - ${product.promotionPercent}%`
              : ''}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Product;
