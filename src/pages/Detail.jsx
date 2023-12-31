import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import classes from '../styles/Detail.module.scss'
import { API_BASE_URL } from '../constants'

export const Detail = () => {
  // react-routerのuseParamsを使うと、URLのパラメータを取得できます。
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(false)

  // APIでpostsを取得する処理をuseEffectで実行します。
  useEffect(() => {
    const fetcher = async () => {
      setLoading(true)
      const res = await fetch(`${API_BASE_URL}/posts/${id}`)
      const { post } = await res.json()
      setPost(post)
      setLoading(false)
    }

    fetcher()
  }, [id])

  // 記事取得中は、読み込み中であることを表示します。
  if (loading) {
    return <div>読み込み中...</div>
  }

  // 記事が見つからなかった場合は、記事が見つからないことを表示します。
  if (!loading && !post) {
    return <div>記事が見つかりません</div>
  }

  return (
    <div className={classes.container}>
      <div className={classes.post}>
        <div className={classes.postImage}>
          <img src={post.thumbnailUrl} alt="" />
        </div>
        <div className={classes.postContent}>
          <div className={classes.postInfo}>
            <div className={classes.postDate}>
              {new Date(post.createdAt).toLocaleDateString()}
            </div>
            <div className={classes.postCategories}>
              {post.categories.map((category) => {
                return (
                  <div key={category} className={classes.postCategory}>
                    {category}
                  </div>
                )
              })}
            </div>
          </div>
          <div className={classes.postTitle}>{post.title}</div>
          <div
            className={classes.postBody}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  )
}
