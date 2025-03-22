import styles from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {

  return (
    <div className={styles.section}>
      
    <div className={styles.profile}>
      <div>
        <img className={styles.imgAvatar}
          src={image}
          alt="User avatar" width={300} height={300}
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

    <ul className={styles.stats}>
      <li className={styles.item}>
        <span className={styles.statsItem}>Followers</span>
        <span className={styles.statistics}>{stats.followers}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.statsItem}>Views</span>
        <span className={styles.statistics}>{ stats.views}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.statsItem}>Likes</span>
        <span className={styles.statistics}>{stats.likes}</span>
      </li>
    </ul>
    </div>
  </div>
  )
}

export default Profile
