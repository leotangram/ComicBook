export interface IssuesResponse {
  error: string
  limit: number
  offset: number
  number_of_page_results: number
  number_of_total_results: number
  status_code: number
  results: IssueI[]
  version: string
}

export interface IssueI {
  aliases: null
  api_detail_url: string
  cover_date: null | string
  date_added: string
  date_last_updated: string
  deck: null
  description: null | string
  has_staff_review: boolean
  id: number
  image: { [key: string]: string }
  issue_number: string
  name: null | string
  site_detail_url: string
  store_date: null | string
  volume: Volume
}

export interface IssueResult {
  error: string
  limit: number
  offset: number
  number_of_page_results: number
  number_of_total_results: number
  status_code: number
  results: IssueFullResults
  version: string
}

export interface IssueFullResults {
  aliases: null
  api_detail_url: string
  character_credits: Volume[]
  character_died_in: any[]
  concept_credits: Volume[]
  cover_date: string
  date_added: string
  date_last_updated: string
  deck: null
  description: string
  first_appearance_characters: null
  first_appearance_concepts: null
  first_appearance_locations: null
  first_appearance_objects: null
  first_appearance_storyarcs: null
  first_appearance_teams: null
  has_staff_review: boolean
  id: number
  image: { [key: string]: string }
  issue_number: string
  location_credits: Volume[]
  name: null
  object_credits: any[]
  person_credits: Volume[]
  site_detail_url: string
  store_date: string
  story_arc_credits: any[]
  team_credits: Volume[]
  team_disbanded_in: any[]
  volume: Volume
}

export interface Volume {
  api_detail_url: string
  id: number
  name: string
  site_detail_url: string
  role?: string
}

export interface InfoIssueI {
  label: 'character' | 'team' | 'location' | 'concept'
  content: Volume[]
}
