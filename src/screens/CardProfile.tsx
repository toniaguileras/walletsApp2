import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

function CardProfile(props:{name:string, surname:string, email:string, username:string}) {
    
    return (
        <Card style={{maxWidth: 345}} variant="outlined">
                <CardActionArea className ="d-flex justify-content-center">
                    <CardMedia style={{maxHeight:90, maxWidth:90}}
                    component="img"
                    alt="User Image"
                    width="60"
                    image="/images/user.png"
                    title="User Image"></CardMedia>
                </CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h4">
                        {props.name} {props.surname}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Email: {props.email}<br/> Username: {props.username}
                    </Typography> 
                </CardContent>
            </Card>
    )
}
export default CardProfile;
