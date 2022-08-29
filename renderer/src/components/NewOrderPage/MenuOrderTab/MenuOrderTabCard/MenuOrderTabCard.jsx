import React from 'react'
import styles from './MenuOrderTabCard.module.scss'
import Image from "next/image";

const MenuOrderTabCard = ({title, price, quantity}) => {
  return (
        <div className={styles['MenuOrderTabCard']}>
          {/* <MenuCard/> */}
          <div className={styles['Txt-Section']}>

            <div className={styles['Title-Section']}>
              <h2> {title}</h2>
                <div className={styles['Counter-Section']}>
                <Image
                  src="/images/counter.svg"
                  alt="delete icon"
                  width="25"
                  height="25"
                  objectFit="cover"
                />  
                <h2> {quantity} </h2>
                <Image
                  src="/images/counter-add.svg"
                  alt="delete icon"
                  width="25"
                  height="25"
                  objectFit="cover"
                />              
              </div>
            </div>

            <div className={styles['Price-Section']}>
              <p> {price}</p>
                <div className={styles['Remove-Section']}>
                  <Image
                    src="/images/remove.svg"
                    alt="delete icon"
                    width="15"
                    height="15"
                    objectFit="cover"
                  />             
                </div>
            </div>

          </div>
        </div>

  )
}

export default MenuOrderTabCard

