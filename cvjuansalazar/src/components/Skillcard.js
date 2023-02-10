import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Icon from '@mui/material/Icon';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

function SkillCard(props) {
    return (
        <div><Card sx={{ minWidth: 290, maxWidth: 300, maxHeight: 300, minHeight: 300 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                   
                </Typography>
                <Typography variant="h5" component="div">
                    <Icon fontSize='large' align='center'>
                        <img src={require(`../media/personal-kit/icons/${props.icon}.svg`)} height='100%' width='100%' alt='icon'></img>
                    </Icon>
                    {props.name}
                </Typography>
                <Box sx={{ width: '100%' }}>
                    <LinearProgressWithLabel value={props.percent} />
                </Box>
                <Typography >
                    {props.descp}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">{props.call}</Button>
            </CardActions>
        </Card></div>
    )
}

export default SkillCard