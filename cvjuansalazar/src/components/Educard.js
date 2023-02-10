import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Educards(props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt={props.alt}
                height="140"
                image={props.img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.sectext}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={props.more}>Más información</Button>
            </CardActions>
        </Card>
    );
}