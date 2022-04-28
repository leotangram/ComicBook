import { useContext } from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Link, Spacer, Text, useTheme } from '@nextui-org/react'
import ViewComfyIcon from '@mui/icons-material/ViewComfy'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'

import comicImage from '../../../public/images/comic.png'
import { UIContext } from '../../../context/ui/UIContext'

import styles from './Navbar.module.scss'

export const Navbar = () => {
  const { theme } = useTheme()
  const { listMode, onChangeListMode } = useContext(UIContext)
  const router = useRouter()
  const isRoutePath = router.pathname === '/'

  return (
    <div
      style={{
        alignItems: 'center',
        backgroundColor: theme?.colors.gray900.value,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        padding: '0 20px',
        width: '100%'
      }}
    >
      {isRoutePath && (
        <>
          <Image src={comicImage} alt="Icon app" width={70} height={70} />
          <Text color="white" h2>
            Latest Issues
          </Text>
        </>
      )}
      <Spacer css={{ flex: 1 }} />
      <NextLink href="/" passHref>
        <Link>
          <Text h1>ComicBook</Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      {isRoutePath && (
        <>
          <div
            className={styles['list-mode-action']}
            onClick={() => onChangeListMode('list')}
          >
            <FormatListBulletedIcon
              className={
                listMode === 'list' ? styles.image : styles['image-desactive']
              }
            />
            <Text color={listMode === 'list' ? 'white' : 'rgb(123, 185, 114)'}>
              List
            </Text>
          </div>
          <div
            className={styles['list-mode-action']}
            onClick={() => onChangeListMode('grid')}
          >
            <ViewComfyIcon
              className={
                listMode === 'grid' ? styles.image : styles['image-desactive']
              }
            />
            <Text color={listMode === 'grid' ? 'white' : 'rgb(123, 185, 114)'}>
              Grid
            </Text>
          </div>
          {/* <NextLink href="/favorites" passHref>
        <Link>
          <Text color="white">Favoritos</Text>
        </Link>
      </NextLink> */}
        </>
      )}
    </div>
  )
}
