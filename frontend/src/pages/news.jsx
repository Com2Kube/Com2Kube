import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next"
import {
  Grid,
  CardContent,
  CardMedia,
  Paper,
  CardActionArea,
  Button
} from "@material-ui/core"
import ChevronRightRounded from "@material-ui/icons/ChevronRightRounded"
import Moment from "moment"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  media: {
    height: 140
  },
  body: {
    body: {
      margin: theme.spacing(6, 5),
      minWidth: "10%",
      padding: theme.spacing(5, 2)
    }
  },
  card: {
    maxWidth: 304,
    marginTop: "5em",
    margin: "auto",
    boxShadow: "none"
  },
  tag: {
    color: "#fff",
    background: "#0074d9",
    borderRadius: "40px/24px",
    border: "1px #0074d9",
    margin: "5px",
    padding: "8px 10px",
    display: "inline-block"
  },
  date: {
    color: "#9E9E9E"
  },
  icon: {
    verticalAlign: "middle"
  },
  link: {
    textDecoration: "none"
  }
}))

const News = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch(`https://dev.to/api/articles?username=cbun097`)
      .then((response) => response.json())
      .then((resultData) => {
        setArticles(resultData)
      })
  }, [])

  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.body}>
        {/* <h2>Latest post</h2> */}
        <Grid container>
          <Grid item xs={12}>
            {articles.map((data) => (
              <Grid key={data.id}>
                <Paper elevation={3} variant="outlined" className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      className={classes.media}
                      image={data.cover_image}
                      alt="article blog"
                    />
                    <CardContent>
                      <p className={classes.date}>
                        {Moment(data.published_at).format("MMMM, Do, YYYY")}
                      </p>
                      <h2>{data.title}</h2>
                      <p>{data.description}</p>
                      {data.tag_list.map((tag, i) => (
                        <div key={i} className={classes.tag}>
                          <span>#{tag}</span>
                        </div>
                      ))}
                    </CardContent>
                  </CardActionArea>
                  <Button color="primary" fullWidth>
                    <a
                      href={data.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.link}
                    >
                      {t("news.findOutMoreLink")}{" "}
                      <ChevronRightRounded className={classes.icon} />
                    </a>
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default News
