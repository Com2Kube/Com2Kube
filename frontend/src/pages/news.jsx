import React, { useState, useEffect } from "react"
import { Grid, Card, CardContent } from "@material-ui/core"

const News = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch(`https://dev.to/api/articles?username=cbun097`)
      .then((response) => response.json())
      .then((resultData) => {
        setArticles(resultData)
      })
  }, [])

  return (
    <div>
      <h2>Latest post</h2>
      <Grid container>
        <Grid item xs={12}>
          {articles.map((data) => (
            <Grid key={data.id}>
              <Card>
                <CardHeader></CardHeader>
                <CardContent>
                  <h3>{data.title}</h3>
                  <div>
                    <img src={data.cover_image} alt="article dev" />
                  </div>

                  <p>{data.description}</p>
                  <p>{data.published_at}</p>
                  {data.tag_list.map((tag, i) => (
                    <Tag key={i}>#{tag}</Tag>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  )
}

export default News
