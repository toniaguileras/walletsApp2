import React from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';

function CardProfile(props:{ id: number, name:string, surname:string, email:string, username:string}) {
    
    const style = {
        card:{
            maxWidth:345
        },
        cardMedia:{
            maxHeight:90,
            maxWidth:90
        }
    }

    return (
        <Card style={style.card} variant="outlined">
                <CardActionArea className ="d-flex justify-content-center">
                    <CardMedia style={style.cardMedia}
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
                <CardActions>
                    <Button href={"/wallets/user/" + props.id}  size="small" color="primary">
                      Wallets
                    </Button>         
                </CardActions>
            </Card>
    )
}
export default CardProfile;


