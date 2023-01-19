import React from 'react';

const NewsPage = () => {
  const obj1 = {
    headline: 'Ighalo believes!',
    content:
      'Ighalo hadn’t even departed Krestovsky Stadium by the time he was obsessing over Qatar 2022. The Nigeria striker knew he’d be 33 at the time. He was desperate to be there',
    writer: 'FIFA',
  };

  const obj2 = {
    headline: 'Electric Pickup Trucks, Flying Cars, and More',
    content:
      "CES is so much more than just a trade show for the latest televisions, phones and wacky tech. It's also one of the largest and most popular automotive shows in the US. If you want to know where the travel industry is headed, then there's no better place to be than Las Vegas in January. ",
    writer: 'Nelson Aguilar',
  };
  const news = [obj1, obj2];

  return (
    <div>
      <h1>NewsPage.... note that this is template...</h1>

      {news.map((a, index) => (
        <div>
          <br />
          <h1>{a.headline}</h1>
          <p>{a.content}</p>
          <p>{a.writer}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default NewsPage;
