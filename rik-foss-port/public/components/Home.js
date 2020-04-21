import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

function FooterText() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {}
      <Link color="inherit" href="https://material-ui.com/">
        Erik Foss, Architect
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "100%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" style={{ backgroundColor: "#000" }}>
        <Toolbar>
          <HomeWorkIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Erik Foss
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container className={classes.cardGrid} maxWidth="lg">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>

          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Title
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              <br />
              Abstraction. Geometry. Pure Form.
              <br />
              <br />
              What are the limits of these concepts in architecture?
              <br /> <br />
              To what extent can they be realized through constructive means?
              <br /> <br />
              To the architect, these concepts are often the originating forces
              driving their work, but their nature is intangible, and can be
              best understood through reason.
              <br /> <br />
              There exists then, a dichotomy that the architect is left to
              resolve: that which is solely of an intelligible nature and that
              which can exist within the physical limitations of our reality.
              <br /> <br />
              While architectonic limitations are that of the physical,
              Architecture itself exists within both of these realms, the
              duality of the mind and of the body, and it is the charge of the
              architect to reconcile their inherent contradictions.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Get In Touch
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Resume
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>

      {/* Footer */}
      <footer className={classes.footer}>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          <InstagramIcon className={classes.icon} />
          <TwitterIcon className={classes.icon} />
          <FacebookIcon className={classes.icon} />
        </Typography>
        <FooterText />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
export default Album;
