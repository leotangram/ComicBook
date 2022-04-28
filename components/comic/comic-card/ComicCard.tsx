import { FC, useContext } from 'react'
import { Card, Grid, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'

import { IssueI } from '../../../interfaces'
import { UIContext } from '../../../context/ui/UIContext'

import styles from './ComicCard.module.scss'

interface ComicCardProps {
  comic: IssueI
}

export const ComicCard: FC<ComicCardProps> = ({
  comic: { api_detail_url, cover_date, image, name }
}) => {
  const router = useRouter()
  const { listMode } = useContext(UIContext)

  const isGrid = listMode === 'grid'

  const onClick = () => {
    const stringIndex = api_detail_url.indexOf('/issue')
    const path = api_detail_url.substring(stringIndex)
    router.push(path)
  }

  return (
    <Grid xs={isGrid ? 6 : 12} sm={isGrid ? 3 : 12} md={isGrid ? 2 : 12}>
      <Card hoverable clickable onClick={onClick}>
        <Card.Body css={{ p: 1 }} className={isGrid ? '' : styles.body}>
          <Card.Image src={image.original_url} width="100%" height={200} />
          <div className={styles.footer}>
            <Text
              className={styles.text}
              transform="capitalize"
              h4
              weight="bold"
            >
              {name}
            </Text>
            <Text className={styles.text}>{cover_date}</Text>
          </div>
        </Card.Body>
      </Card>
    </Grid>
  )
}
