import { Card, Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'





const Home = () => {
    var nav = useNavigate();
    var [user, setuser] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/get")
            .then((res) => {
                console.log("data retrieved");
                setuser(res.data);
            })
            .catch((err) => {
                console.log("Error fetching data:", err);
            });
    }, []); 

    var del = (id) => {
        if (window.confirm("Are you sure you want to delete this blog post?")) {
            axios.delete("http://localhost:3001/del/" + id)
        }else{
            alert("Deletion cancelled")
        }
    }
    var upd = (val) => {
        nav("/add", { state: { val } });
    }


    axios.get("http://localhost:3001/get")
        .then((res) => {
            console.log("data retrived");
            setuser(res.data);
        })
        .catch((err) => {
            console.log("Error fetching data:", err);
        });


    return (
        <div className='grid'>
            <Grid container spacing={2} >
                {user.map((val) => {
                    return (
                        <Grid size={"auto"} sx={{ mt: 10, padding: "10px" }}>
                            <Card sx={{ minWidth: 345 }} className='card'>
                                <CardMedia
                                    sx={{ height: 190, width:350 }}
                                    image={val.img_url}
                                    alt="image"
                                />
                                <CardContent>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {val.title}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {val.content}
                                    </Typography>

                                </CardContent>
                                <CardActions>
                                    <Button size="small" variant='contained' color='secondary' onClick={() => {
                                        upd(val)
                                    }}>Update</Button>
                                    <Button size="small" variant='contained' color='secondary' onClick={() => {
                                        del(val._id)
                                    }}>Delete</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default Home