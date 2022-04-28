import { GetStaticProps, NextPage } from 'next'
import { Grid } from '@nextui-org/react'
import { Layout } from '../components/layouts'
import { comicVine } from '../api'
import { IssuesResponse, IssueI } from '../interfaces'
import { ComicCard } from '../components/comic'

interface HomePageProps {
  issues: IssueI[]
}

const HomePage: NextPage<HomePageProps> = ({ issues }) => {
  return (
    <Layout title="ComicBook">
      <Grid.Container gap={2} justify="flex-start">
        {issues.map(issue => (
          <ComicCard key={issue.id} comic={issue} />
        ))}
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  try {
    const { data } = await comicVine.get<IssuesResponse>('/issues')

    const issues: IssueI[] = data.results.map(issue => ({
      ...issue,
      name: `${issue.name || issue.volume.name} #${issue.issue_number}`
    }))

    return {
      props: {
        issues
      }
    }
  } catch (error) {
    return {
      props: {
        issues: []
      }
    }
  }
}

export default HomePage
