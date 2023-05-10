import React  from 'react';
// import lock from '../../assets/lock.svg';
import './landing.scss';
import { Button, Grid,  Paper } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Landing() {
  const history = useHistory();
  
  return (
    <>
      <Grid container alignItems="center" justify="center" >
          {/* <Modal
            className="modal"
            open={open}
            onClose={handleClose}
          >
            <Grid container direction="column" style={{outline: "0"}} alignContent="center">
                <div className="closediv" onClick={handleClose} >
                  <img src={close} className="close" alt="iconclose" ></img>
                </div>
              <iframe title="Video Landing" style={{margin:"auto" }} width="90%" height="450" src="https://www.youtube.com/embed/2yr5m4QEcOg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </Grid>
          </Modal> */}
        <Grid container className="landing__img" direction="column" justify="flex-start" alignItems="center">
          <p className="landing__title"> ¡Bienvenido a la comunidad que cuida el medio ambiente! </p>
          <p className="landing__title--sub"> Recolectamos tu basura tecnológica</p>
          <p className="landing__title--green">en tu domicilio sin costo. </p>
          <p className="landing__title--sub">Ayudanos a cuidar vidas, liberar espacio en tu casa y apoyemos a los recolectores Colombianos. </p>
        </Grid>
        <Grid container direction="row" className="landing__cards" justify="center" alignItems="flex-end">
          <Grid container direction="column" alignItems="flex-start" className="landing__comunity">
            <p className="landing__unetep">Únete a nuestra comunidad</p>
            <Grid container direction="row" justify="center">
              <Grid item className="landing__comunity--first">
                <Paper elevation={5} style={{borderRadius:"20px"}}>
                  <Grid container className="landing__card" direction="column" alignItems="center" justify="center">
                    <p>¿Eres un usuario?</p>
                    <Paper elevation={1} style={{borderRadius:"20px"}}>
                      <Button className="landing__button" variant="contained" onClick={()=>{
                        history.push({ 
                          pathname: '/register',
                          state: {isCompany:false}
                        })
                      }}>
                        Regístrate
                      </Button>
                    </Paper>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item>
                <Paper elevation={5} style={{borderRadius:"20px"}}>
                  <Grid container className="landing__card" direction="column" alignItems="center" justify="center">
                    <p>¿Eres una empresa?</p>
                    <Paper elevation={1} style={{borderRadius:"20px"}}>
                      <Button className="landing__button" variant="contained" onClick={()=>{
                        history.push({ 
                          pathname: '/register',
                          state: {isCompany:true}
                        })
                      }}>
                        Regístrate
                      </Button>
                    </Paper>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid container className="landing__card--white landing__comunity" direction="column" alignItems="center" justify="center">
              <p style={{maxWidth:"250px", marginTop:"-4px"}}>¿Ya eres parte de la comunidad?</p>
              <Paper elevation={1} style={{borderRadius:"20px"}}>
                <Button className="landing__button" variant="contained" onClick={()=>history.push("/login")} >
                  Ingresa
                </Button>
              </Paper>
            </Grid>
        </Grid>
        
      </Grid>
    </>
  );
}

export default Landing;