
import './profile.css'
import React, { useState } from 'react';
const ProfilePage = () => {

  const [name, setName] = useState('Uzakbaev Rauan');
  const [nik,setNik]= useState('Rauan12345')

  const handleEditClick = () => {
    const newName = prompt('Enter new name:'); // Всплывающее окно для ввода нового имени
    const newNik = prompt('Enter new nik:');
    if (newName) {
      setName(newName);
    }
    if (newNik) {
        setNik(newNik);
      }
  };
  return (
    <div>
    <div className='top_container'>
        <img className='img' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAq1BMVEXvbAD////vagD73MLxgD7wdB/yhjL86NruYwD//PnuZgD2so/+8ubvaAD6zKXwfTX2tZj/+fP0n2X+8+v0pHH5xp7849D60bbxfyPyhC7wcgD96t785df628361cT5zrf5xqj3uZDxfhjzlEr4u4jweCr2r37yjUn0nln60a/717jxdwDyijv4vpnweB/zk1f1p3/2rXT4v4/zkl72tJL3vqLzllr0oGnwdSVPPxINAAAC4UlEQVR4nO3bf1ObMByA8RDFhghVSkvV+nu2tZ2tm5269//KZnfeLTA8G7xZvuz5/A13eS4JcJQqBQAAAAAAAAAAAAAAAAAAAAAAAAAAAKD9dPIOrfW2x/gxR3vvOD46MS+slRmqw+6o847T07Pzi8ur52tjEnmVOtwJNhJFaXY2+GKNtMaNC191bsJE1r70LQyCdDBWkhL9C4NgNBkn2x735uoUBtFwKmcaaxUGQd4Tk1izMIifpSzUuoVBdmu3PfbNFAtn3SqzeR5HfyWm1zJmsVh4YN6ib2dZqfL0RMRWLBbuvjlmbc3Xq1Gx8VLE1WbTwvWh5u4iLWzFnoSt6FGolA0XhcTzpYBJ9CpUSTEx6wuYRL/Cl8ShO4lDAZPoWaiSvdg5fnTf/DuGb6EyN+4kfmv+MvUu1Ik7ibPmL1PvQmUenBPy3cYvU//C5Ni9mjZ/I/oXKuss02jVxsJk7pzRb+E+VMnAOeOh8c+mdQq/O2cMWlnYc87ohhRuG6u0QuLe8tt5pZm1/W5hc+eMNt7xtXXe1qRtfGqz7oWm08Inb11YpMNx+/ahvXVfKe5/whA/yLdQL90pjJ8av0h9C7VeuFM4P2r8IvUtNP3MOTydNH8K/Qq16bkvaYL8uPlT6PVWP1neFF55pxPzaeOsb8PC9YdT41Xpp8Zh459J18q/rtlqy+lqspMWAzt3AnZhufBxv8qPw8dhHgcl6VPz3wavFQujauU4OZtQ1f8dP52I2ISqdmHWlxJYszCfyvmAr05htriWcZH5zb8wu3iSM4HKuzDNH5+NoAlUXoVRvLPoT5WsvnJhXK3Tyefdyer+4MTK+wy6WLg6qDYeh6FKhH0c/Kr05L3+68Ebtj3Sumq8LxWGQvkolI9C+SiUj0L5KJSPQvkolI9C+SiUj0L5KJSPQvkolI9C+f6Hwv7hHz9bWKi0+wliGwMBAAAAAAAAAAAAAAAAAAAAAAAAAACAf+8XfG4yWKYI7mAAAAAASUVORK5CYII='></img>

    </div>
    <div className='bottom_container'>
      <h1>{name}</h1>
      <h4>@{nik}</h4>
      <h4>Joined July 2023</h4>
      <button onClick={handleEditClick}>edit profile</button>
    </div>
    </div>
  );
}

export default ProfilePage;