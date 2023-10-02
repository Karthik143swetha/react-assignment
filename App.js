import React from 'react'

function App() {
  const videos = [
    {
      id: 1,
      title: 'LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander',
      thumbnailUrl: 'https://i.ytimg.com/vi/IqwIOlhfCak/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLC4Yag9nJdE1MmM54JLyCkHAuCTCA',
      likes: "1.3M",
      views: "13M",
      channelName: 'Sony Music South',
      channelLogoUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s176-c-k-c0x00ffffff-no-rj-mo',
    },
    {
      id: 2,
      title: 'Kadhal 2 Kailasa Episode -1 | Love Series | Mic set',
      thumbnailUrl: 'https://th.bing.com/th/id/OIP.z1T8r4uGsx5ZXsQIJsPFiQHaEK?w=311&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      likes: "74K",
      views: "1.9M",
      channelName: 'Mic set',
      channelLogoUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKbubOe2HHYK_R2cBMwwU18WFe--zWUDtgWXWIQ4-w=s176-c-k-c0x00ffffff-no-rj-mo',
    },
    {
      id: 3,
      title: 'Would You Swim With Sharks For $100,000?',
      thumbnailUrl: 'https://th.bing.com/th/id/OIP.cerJdI0QffQUFkwMU31tDgHaEK?w=311&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      likes: "3.9m",
      views: "163M",
      channelName: 'Mr Beast',
      channelLogoUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKY455xp16s2AIHalRjK60zas-DitxAHmRjQsXPE2A=s176-c-k-c0x00ffffff-no-rj-mo',
    },
    {
      id: 4,
      title: '  Heeriye (Official Video) Jasleen Royal ft Arijit Singh| Dulquer Salmaan| Aditya Sharma',
      thumbnailUrl: 'https://i.ytimg.com/vi/RLzC55ai0eo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuSM6jOWhh7iG070yLQRiOM8Q4Mw',
      likes: "2M",
      views: "139M",
      channelName: 'Jasleen Royal',
      channelLogoUrl: 'https://yt3.ggpht.com/eDLpYMh0tmeKXQ-Nb0bWqy2xc9ohGRF9yiqOdN5XuqpVvoJraIUGFFwlzh_tsFIEaSox5MvxAg=s88-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 5,
      title: 'Vellake Music Video - Alekhya Harika | Vinay Shanmukh, Bharatt-Saurabh, Anirudh',
      thumbnailUrl: 'https://i.ytimg.com/vi/rFPl2XY0uv4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAkKe0Y52Nn3zAfDEg-pjabqnAW7Q',
      likes: "374K",
      views: "19M",
      channelName: 'Sony Music South',
      channelLogoUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s176-c-k-c0x00ffffff-no-rj-mo',
    },
    {
      id: 6,
      title: 'JAILER - Hukum Lyric Video | Superstar Rajinikanth | Sun Pictures | Anirudh | Nelson',
      thumbnailUrl: 'https://i.ytimg.com/vi/1F3hm6MfR1k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3Xlpcg2hQMTdn7nOf3IykCxfC9w',
      likes: "1.1M",
      views: "82M",
      channelName: 'Sun TV',
      channelLogoUrl: 'https://yt3.ggpht.com/ytc/APkrFKbonI2fEFXVxJYtWEqHjyY2k_i0N9a8CXyYo3lDiA=s48-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 7,
      title: 'Don - Bae Video | Sivakarthikeyan, Priyanka Mohan | Anirudh Ravichander',
      thumbnailUrl: 'https://i.ytimg.com/vi/-7n_krPLRgs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAkUaR3266wkaCurP2CPM_Imhkjg',
      likes: "306K",
      views: "32M",
      channelName: 'SonyMusicSouthVEVO',
      channelLogoUrl: 'https://yt3.ggpht.com/ytc/APkrFKaDzDvV0E5-8ZL9HKs7Z7NCGLWZUkG0zRK1EtKYAg=s68-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 8,
      title: 'Baby - O Rendu Prema Meghaalila Video | Anand Deverakonda, Vijai Bulganin',
      thumbnailUrl: 'https://i.ytimg.com/vi/wz5BIbhqhTI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJKilCJtPSE7hMKw60HRGQ-Au4YQ',
      likes: "29K",
      views: "4.3M",
      channelName: 'SonyMusicSouthVEVO',
      channelLogoUrl: 'https://yt3.ggpht.com/ytc/APkrFKaDzDvV0E5-8ZL9HKs7Z7NCGLWZUkG0zRK1EtKYAg=s68-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 9,
      title: 'Baby - Vaishnavi Celebration Dance Video | Anand Deverakonda, Vaishnavi Chaitanya',
      thumbnailUrl: 'https://i.ytimg.com/vi/mFp7UM3bkpM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgeWopW53G9Uso_d4bkGSnRYLB_w',
      likes: "26K",
      views: "2.3M",
      channelName: 'Sony Music South',
      channelLogoUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s176-c-k-c0x00ffffff-no-rj-mo',
    },
    {
      id: 10,
      title: 'Baby - Vaishnavi Celebration Dance Video | Anand Deverakonda, Vaishnavi Chaitanya',
      thumbnailUrl: 'https://i.ytimg.com/vi/mFp7UM3bkpM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgeWopW53G9Uso_d4bkGSnRYLB_w',
      likes: "26K",
      views: "2.3M",
      channelName: 'Sony Music South',
      channelLogoUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s176-c-k-c0x00ffffff-no-rj-mo',
    },
    {
      id: 10,
      title: 'Baby - Vaishnavi Celebration Dance Video | Anand Deverakonda, Vaishnavi Chaitanya',
      thumbnailUrl: 'https://i.ytimg.com/vi/mFp7UM3bkpM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgeWopW53G9Uso_d4bkGSnRYLB_w',
      likes: "26K",
      views: "2.3M",
      channelName: 'Sony Music South',
      channelLogoUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s176-c-k-c0x00ffffff-no-rj-mo',
    },
    {
      id: 10,
      title: 'Baby - Vaishnavi Celebration Dance Video | Anand Deverakonda, Vaishnavi Chaitanya',
      thumbnailUrl: 'https://i.ytimg.com/vi/mFp7UM3bkpM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgeWopW53G9Uso_d4bkGSnRYLB_w',
      likes: "26K",
      views: "2.3M",
      channelName: 'Sony Music South',
      channelLogoUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s176-c-k-c0x00ffffff-no-rj-mo',
    },
    {
      id: 10,
      title: 'Baby - Vaishnavi Celebration Dance Video | Anand Deverakonda, Vaishnavi Chaitanya',
      thumbnailUrl: 'https://i.ytimg.com/vi/mFp7UM3bkpM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgeWopW53G9Uso_d4bkGSnRYLB_w',
      likes: "26K",
      views: "2.3M",
      channelName: 'Sony Music South',
      channelLogoUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s176-c-k-c0x00ffffff-no-rj-mo',
    },
    {
      id: 10,
      title: 'Baby - Vaishnavi Celebration Dance Video | Anand Deverakonda, Vaishnavi Chaitanya',
      thumbnailUrl: 'https://i.ytimg.com/vi/mFp7UM3bkpM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgeWopW53G9Uso_d4bkGSnRYLB_w',
      likes: "26K",
      views: "2.3M",
      channelName: 'Sony Music South',
      channelLogoUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s176-c-k-c0x00ffffff-no-rj-mo',
    },
    {
      id: 10,
      title: 'Baby - Vaishnavi Celebration Dance Video | Anand Deverakonda, Vaishnavi Chaitanya',
      thumbnailUrl: 'https://i.ytimg.com/vi/mFp7UM3bkpM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgeWopW53G9Uso_d4bkGSnRYLB_w',
      likes: "26K",
      views: "2.3M",
      channelName: 'Sony Music South',
      channelLogoUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s176-c-k-c0x00ffffff-no-rj-mo',
    },
    {
      id: 10,
      title: 'Baby - Vaishnavi Celebration Dance Video | Anand Deverakonda, Vaishnavi Chaitanya',
      thumbnailUrl: 'https://i.ytimg.com/vi/mFp7UM3bkpM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgeWopW53G9Uso_d4bkGSnRYLB_w',
      likes: "26K",
      views: "2.3M",
      channelName: 'Sony Music South',
      channelLogoUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s176-c-k-c0x00ffffff-no-rj-mo',
    },
    {
      id: 10,
      title: 'Baby - Vaishnavi Celebration Dance Video | Anand Deverakonda, Vaishnavi Chaitanya',
      thumbnailUrl: 'https://i.ytimg.com/vi/mFp7UM3bkpM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgeWopW53G9Uso_d4bkGSnRYLB_w',
      likes: "26K",
      views: "2.3M",
      channelName: 'Sony Music South',
      channelLogoUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s176-c-k-c0x00ffffff-no-rj-mo',
    },
    {
      id: 10,
      title: 'Baby - Vaishnavi Celebration Dance Video | Anand Deverakonda, Vaishnavi Chaitanya',
      thumbnailUrl: 'https://i.ytimg.com/vi/mFp7UM3bkpM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgeWopW53G9Uso_d4bkGSnRYLB_w',
      likes: "26K",
      views: "2.3M",
      channelName: 'Sony Music South',
      channelLogoUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s176-c-k-c0x00ffffff-no-rj-mo',
    },
  
  ];

  return (
    <div id='right-wrapper'>
      {videos.map((video) => (
        <div key={video.id} className="video-card">
          <img src={video.thumbnailUrl} alt={video.title} />
          <div className="video-info">
            <h3>{video.title}</h3>
            <div className="stats">
              <span>{`${video.views} Views`}</span>
              <span>{`${video.likes} Likes`}</span>
            </div>
            <div className="channel-info">
              <img src={video.channelLogoUrl} alt={video.channelName} />
              <p>{video.channelName}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App