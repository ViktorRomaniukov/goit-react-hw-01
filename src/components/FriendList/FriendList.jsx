import React from 'react'
import FriendListItem from './FriendListItem'
import styles from './FriendList.module.css'

const FriendList = ({friends}) => {
  return (
    <div>
        <ul>
	        {/* Кількість li залежить від кількості об'єктів в масиві */}
            <li className={styles.friendList}>
                    {friends.map(({id, avatar, name, isOnline}) => (
                        <FriendListItem
                            key={id}
                            avatar={avatar}
                            name={name}
                            isOnline={isOnline}
                        />
                    ))}
 	        </li>
        </ul>
    </div>
  )
}

export default FriendList
