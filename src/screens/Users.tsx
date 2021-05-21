import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';

class Users extends React.Component{
   render(){
        return (
            <div>
            <h3 className="d-flex justify-content-center mt-4">Users Page</h3>      
            
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
                        Angel Ramos Santos
                    </Typography>
                </CardContent>
            </Card>
            </div>
            )
   }
}
export default Users;
