import React from 'react'
import classes from '../styles/Home.module.scss'

const posts = [
  {
    id: 1,
    title: '記事タイトル１',
    thumbnailUrl: '',
    createdAt: '2023-09-11T09:00:00.000Z',
    categories: ['React', 'TypeScript'],
    content: `
    本文です。本文です。本文です。本文です。本文です。本文です。
    本文です。本文です。本文です。本文です。本文です。

    本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。


    本文です。本文です。本文です。本文です。本文です。本文です。
    `,
  },
  {
    id: 2,
    title: '記事タイトル２',
    thumbnailUrl: '',
    createdAt: '2023-09-10T09:00:00.000Z',
    categories: ['HTML', 'CSS'],
    content: `
    本文です。本文です。本文です。本文です。本文です。本文です。
    本文です。本文です。本文です。本文です。本文です。

    本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。


    本文です。本文です。本文です。本文です。本文です。本文です。
    `,
  },
  {
    id: 3,
    title: '記事タイトル３',
    thumbnailUrl: '',
    createdAt: '2023-09-09T09:00:00.000Z',
    categories: ['JavaScript'],
    content: `
    本文です。本文です。本文です。本文です。本文です。本文です。
    本文です。本文です。本文です。本文です。本文です。

    本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。


    本文です。本文です。本文です。本文です。本文です。本文です。
    `,
  },
]

export const Home = () => {
  return (
    <div className="">
      <div className={classes.container}>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id} className={classes.list}>
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
                            <div
                              key={category}
                              className={classes.postCategory}
                            >
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
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
