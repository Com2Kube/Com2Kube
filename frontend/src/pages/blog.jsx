import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import axios from "axios"
import { Grid } from "@material-ui/core"
import BlogCard from "../components/blog-card"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexGrow: 1
  },
  media: {
    height: 140
  },
  body: {
    flexGrow: 1,
    margin: theme.spacing(6, 5),
    minWidth: "10%",
    padding: theme.spacing(5, 2)
  }
}))

const Blog = () => {
  const [articles, setArticles] = useState([])

  async function getDataDevTo() {
    const url = `https://dev.to/api/articles?username=com2kube`
    try {
      const response = await axios.get(url)
      setArticles(response.data)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  useEffect(() => {
    getDataDevTo()
  }, [])

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          {articles.map((data) => (
            <Grid key={data.id} item xs container justify="center">
              <BlogCard
                url={data.url}
                coverImage={data.cover_image}
                publishedDate={data.published_at}
                title={data.title}
                description={data.description}
                tag={data.tag_list}
                author={data.user.name}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default Blog
