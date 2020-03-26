import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next"
import {
  CardContent,
  CardMedia,
  Paper,
  CardActionArea,
  Button
} from "@material-ui/core"
import ChevronRightRounded from "@material-ui/icons/ChevronRightRounded"
import Moment from "moment"

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140
  },
  card: {
    maxWidth: 304,
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

const BlogCard = ({ url, coverImage, publishedDate, title, description, tag }) => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Paper elevation={3} variant="outlined" className={classes.card}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            className={classes.media}
            image={coverImage}
            alt="article blog"
          />
          <CardContent>
            <p className={classes.date}>
              {Moment(publishedDate).format("MMMM, Do, YYYY")}
            </p>
            <h2>{title}</h2>
            <p>{description}</p>
            {tag.map((tag, i) => (
              <div key={i} className={classes.tag}>
                <span>#{tag}</span>
              </div>
            ))}
          </CardContent>
        </CardActionArea>
      </a>
      <Button color="primary" fullWidth>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          {t("news.findOutMoreLink")}{" "}
          <ChevronRightRounded className={classes.icon} />
        </a>
      </Button>
    </Paper>
  )
}

export default BlogCard
