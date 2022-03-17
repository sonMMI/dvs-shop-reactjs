import {
  Apple,
  Facebook,
  Instagram,
  LinkedIn,
  ShopTwo,
} from '@mui/icons-material';
import { Box, IconButton, Paper, Typography } from '@mui/material';
import React from 'react';

Footer.propTypes = {};

function Footer(props) {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        bottom: '0',
      }}
    >
      <Paper elevation={0}>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Box
            sx={{ display: 'flex', flexDirection: 'column', padding: '16px' }}
          >
            <Typography variant="subtitle2">CHĂM SÓC KHÁCH HÀNG</Typography>
            <Typography variant="body2">DVS-Shop Mall</Typography>
            <Typography variant="body2">Hướng dẫn mua hàng</Typography>
            <Typography variant="body2">Hướng dẫn trả góp</Typography>
            <Typography variant="body2">Chính sách đổi trả</Typography>
            <Typography variant="body2">Phương thức nhập khẩu</Typography>
          </Box>

          <Box
            sx={{ display: 'flex', flexDirection: 'column', padding: '16px' }}
          >
            <Typography variant="subtitle2">VỀ DVS-SHOP</Typography>
            <Typography variant="body2">
              Giới thiệu về DVS-Shop Việt Nam
            </Typography>
            <Typography variant="body2">Tuyển dụng</Typography>
            <Typography variant="body2">Điều khoản sử dụng</Typography>
            <Typography variant="body2">Bán hàng doanh nghiệp</Typography>
          </Box>

          <Box
            sx={{ display: 'flex', flexDirection: 'column', padding: '16px' }}
          >
            <Typography variant="subtitle2">THEO DÕI</Typography>
            <Box>
              <IconButton sx={{ borderRadius: 0 }}>
                <Facebook sx={{ marginLeft: '-10px', marginRight: '8px' }} />
                <Typography variant="body2">Facebook</Typography>
              </IconButton>
            </Box>
            <Box>
              <IconButton sx={{ borderRadius: 0 }}>
                <Instagram sx={{ marginLeft: '-10px', marginRight: '8px' }} />
                <Typography variant="body2">Instagram</Typography>
              </IconButton>
            </Box>
            <Box>
              <IconButton sx={{ borderRadius: 0 }}>
                <LinkedIn sx={{ marginLeft: '-10px', marginRight: '8px' }} />
                <Typography variant="body2">Linkedin</Typography>
              </IconButton>
            </Box>
          </Box>

          <Box
            sx={{ display: 'flex', flexDirection: 'column', padding: '16px' }}
          >
            <Typography variant="subtitle2">
              TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI
            </Typography>
            <Box
              sx={{ display: 'flex', flexDirection: 'row', padding: '16px' }}
            >
              <img
                height="80px"
                src={`https://frontend.tikicdn.com/_desktop-next/static/img/footer/qrcode.png`}
                alt="qrCode"
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingLeft: '16px',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                }}
              >
                <IconButton sx={{ borderRadius: 0 }}>
                  <Apple sx={{ marginLeft: '-10px', marginRight: '8px' }} />
                  <Typography variant="body2">App Store</Typography>
                </IconButton>

                <IconButton sx={{ borderRadius: 0 }}>
                  <ShopTwo sx={{ marginLeft: '-10px', marginRight: '8px' }} />
                  <Typography variant="body2">Google Play</Typography>
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>

      <Typography
        variant="body2"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#737373',
          padding: '8px',
        }}
      >
        © 2021 - Bản quyền thuộc về Công ty TNHH SonMMI
      </Typography>
    </Box>
  );
}

export default Footer;
