import React from 'react'
import styles from './FriendListItem.module.css'    

const FriendListItem = ({avatar, name, isOnline}) => {
return (
<div className={styles.friend}>
  <img className='av' src={avatar} alt="Avatar" width="100" height="100" />
  <p className={styles.name}>{name}</p>
        <p className={isOnline ? styles.online : styles.offline}>
            {isOnline ? 'Online' : 'Offline'}
        </p>
</div>
    )
}

export default FriendListItem
