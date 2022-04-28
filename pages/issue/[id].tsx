import { FC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Grid, Image } from '@nextui-org/react'

import { comicVine } from '../../api'
import { IssueResult, IssueFullResults } from '../../interfaces/'
import { Layout } from '../../components/layouts'
import { ComicInfo } from '../../components/comic'

import styles from './Id.module.scss'
import { InfoIssueI } from '../../interfaces/comicVineInterface'

interface IssuePageProps {
  issue: IssueFullResults
}

const IssuePage: FC<IssuePageProps> = ({ issue }) => {
  const {
    character_credits,
    concept_credits,
    image,
    location_credits,
    name,
    team_credits,
    volume
  } = issue

  const infoIssues: InfoIssueI[] = [
    {
      label: 'character',
      content: character_credits
    },
    {
      label: 'team',
      content: team_credits
    },
    {
      label: 'location',
      content: location_credits
    },
    {
      label: 'concept',
      content: concept_credits
    }
  ]

  return (
    <Layout title={name || volume.name}>
      <Grid.Container gap={2} justify="flex-start" className={styles.container}>
        <Grid xs={12} sm={6} className={styles.grid}>
          {infoIssues.map(infoIssue => {
            if (!infoIssue.content.length) return null
            return <ComicInfo key={infoIssue.label} {...infoIssue} />
          })}
        </Grid>
        <Grid xs={12} sm={6}>
          <Image
            src={image.original_url}
            width="100%"
            className={styles.image}
            objectFit="fill"
          />
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async ctx => {
  const issues = [...Array(0)]

  return {
    paths: issues.map(id => ({
      params: { id }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }

  try {
    const { data } = await comicVine.get<IssueResult>(`/issue/${id}`)

    return {
      props: {
        issue: data.results
      }
    }
  } catch (error) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
}

export default IssuePage
