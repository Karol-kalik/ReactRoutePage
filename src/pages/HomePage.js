import React from 'react';
import "../styles/HomePage.css"
const articles = [
  {
    id: 1,
    title: "Tytuł pierwszy",
    author:"Jan Nowak",
    text: "Bacon ipsum dolor amet short loin leberkas drumstick, venison pork chop turkey ham pork loin capicola t-bone ball tip shank frankfurter. Bresaola short loin strip steak picanha pig. Tongue ball tip prosciutto pork chop pork belly. Pancetta turkey bresaola meatloaf tail picanha. Tri-tip turducken porchetta, ham pork venison shankle ham hock tail. Bacon ipsum dolor amet short loin leberkas drumstick, venison pork chop turkey ham pork loin capicola t-bone ball tip shank frankfurter. Bresaola short loin strip steak picanha pig. Tongue ball tip prosciutto pork chop pork belly. Pancetta turkey bresaola meatloaf tail picanha. Tri-tip turducken porchetta, ham pork venison shankle ham hock tail. Bacon ipsum dolor amet short loin leberkas drumstick, venison pork chop turkey ham pork loin capicola t-bone ball tip shank frankfurter. Bresaola short loin strip steak picanha pig. Tongue ball tip prosciutto pork chop pork belly. Pancetta turkey bresaola meatloaf tail picanha. Tri-tip turducken porchetta, ham pork venison shankle ham hock tail. "
  },
  {
    id: 2,
    title: "Tytuł drugi",
    author: "Kasia Nowak",
    text: "Bacon ipsum dolor amet short loin leberkas drumstick, venison pork chop turkey ham pork loin capicola t-bone ball tip shank frankfurter. Bresaola short loin strip steak picanha pig. Tongue ball tip prosciutto pork chop pork belly. Pancetta turkey bresaola meatloaf tail picanha. Tri-tip turducken porchetta, ham pork venison shankle ham hock tail. Bacon ipsum dolor amet short loin leberkas drumstick, venison pork chop turkey ham pork loin capicola t-bone ball tip shank frankfurter. Bresaola short loin strip steak picanha pig. Tongue ball tip prosciutto pork chop pork belly. Pancetta turkey bresaola meatloaf tail picanha. Tri-tip turducken porchetta, ham pork venison shankle ham hock tail. Bacon ipsum dolor amet short loin leberkas drumstick, venison pork chop turkey ham pork loin capicola t-bone ball tip shank frankfurter. Bresaola short loin strip steak picanha pig. Tongue ball tip prosciutto pork chop pork belly. Pancetta turkey bresaola meatloaf tail picanha. Tri-tip turducken porchetta, ham pork venison shankle ham hock tail. "
  },
  {
    id: 3,
    title: "Tytuł trzeci",
    author: "Zbysio Nowak",
    text: "Bacon ipsum dolor amet short loin leberkas drumstick, venison pork chop turkey ham pork loin capicola t-bone ball tip shank frankfurter. Bresaola short loin strip steak picanha pig. Tongue ball tip prosciutto pork chop pork belly. Pancetta turkey bresaola meatloaf tail picanha. Tri-tip turducken porchetta, ham pork venison shankle ham hock tail"
  },
]

const HomePage = () => {
  const artList = articles.map(article => {
    return (
      <article key={article.id}>
        <h1 className="title">{article.title}</h1>
        <span className="author">{article.author}</span>
        <p className="article">{article.text}</p>
        <hr/>
      </article>
    )
  })
  return (
    <>
      <h1>Nowości na dzisiaj</h1><br/>
      <div className="home"> {artList} </div>
    </>
  )
}

export default HomePage;