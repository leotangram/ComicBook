import { FC } from 'react'
import { Divider, Grid, Text } from '@nextui-org/react'
import Image from 'next/image'
import { InfoIssueI } from '../../../interfaces'
import comicImage from '../../../public/images/comic.png'

import styles from './ComicInfo.module.scss'

interface ComicInfoProps extends InfoIssueI {}

export const ComicInfo: FC<ComicInfoProps> = ({ label, content }) => {
  return (
    <div className={styles.root}>
      <Text h2 transform="capitalize">
        {`${label}s`}
      </Text>
      <Divider />
      <Grid.Container gap={2} justify="flex-start">
        {content.map(({ name }) => (
          <Grid key={name} xs={12} sm={6} className={styles.grid}>
            <Image
              src={comicImage}
              width={80}
              height={80}
              className={styles.image}
            />
            <Text color="rgb(123, 185, 114)" margin="0 0 0 16px">
              {name}
            </Text>
          </Grid>
        ))}
      </Grid.Container>
    </div>
  )
}
