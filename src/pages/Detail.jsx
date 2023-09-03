import React from 'react'
import { useParams } from 'react-router-dom'
import classes from '../styles/Detail.module.scss'
import { posts } from '../data/posts'

export const Detail = () => {
  // react-routerのuseParamsを使うと、URLのパラメータを取得できます。
  const { id } = useParams()

  // postsの中からidが一致するものを探します。
  const post = posts.find((post) => post.id === parseInt(id))

  // 記事が見つからなかった場合は、記事が見つからないことを表示します。
  if (!post) {
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
          <div className={classes.postBody}>{post.content}</div>
        </div>
      </div>
    </div>
  )
}
