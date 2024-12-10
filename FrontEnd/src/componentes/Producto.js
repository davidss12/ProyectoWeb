import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Producto = () => {
  const product = {
    image: 'https://via.placeholder.com/150',
    name: 'Producto Ejemplo',
    description: 'Este es un producto de ejemplo.',
    price: 19.99,
  };

  return (
    <Card sx={{ maxWidth: 345, margin: '10px' }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" color="primary">
          ${product.price}
        </Typography>
        <Button variant="contained" color="primary" fullWidth>
          Añadir al carrito
        </Button>
      </CardContent>
    </Card>
  );
};


export default Producto;
