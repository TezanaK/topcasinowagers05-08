/*
  # Content Management System for SEO

  ## Overview
  This migration adds comprehensive content planning, tracking, and performance monitoring tables for the TopCasinoWagers SEO strategy.

  ## New Tables
  
  ### 1. content_calendar
  Tracks all planned and published content with SEO metadata
  - `id` (uuid, primary key)
  - `title` (text) - Content title
  - `slug` (text) - URL-friendly slug
  - `content_type` (text) - blog_post, casino_review, game_guide, etc.
  - `target_keyword` (text) - Primary SEO keyword
  - `secondary_keywords` (text[]) - Array of supporting keywords
  - `planned_publish_date` (date) - When to publish
  - `actual_publish_date` (date) - When actually published
  - `status` (text) - idea, outline, draft, review, published
  - `author` (text) - Content creator
  - `word_count` (integer) - Target/actual word count
  - `meta_title` (text) - SEO title tag
  - `meta_description` (text) - SEO meta description
  - `internal_links` (integer) - Number of internal links
  - `external_links` (integer) - Number of external links
  - `notes` (text) - Planning notes
  - `priority` (text) - low, medium, high
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 2. content_performance
  Tracks SEO performance metrics for published content
  - `id` (uuid, primary key)
  - `content_id` (uuid, foreign key to content_calendar)
  - `date` (date) - Metric date
  - `impressions` (integer) - Search impressions
  - `clicks` (integer) - Search clicks
  - `ctr` (decimal) - Click-through rate
  - `average_position` (decimal) - Average SERP position
  - `backlinks` (integer) - Number of backlinks
  - `organic_traffic` (integer) - Organic visits
  - `conversions` (integer) - Goal completions
  - `created_at` (timestamptz)

  ### 3. keyword_research
  Stores keyword opportunities and tracking
  - `id` (uuid, primary key)
  - `keyword` (text) - Target keyword phrase
  - `search_volume` (integer) - Monthly searches
  - `difficulty` (integer) - SEO difficulty (1-100)
  - `cpc` (decimal) - Cost per click
  - `current_position` (integer) - Current ranking position
  - `target_position` (integer) - Goal position
  - `assigned_content_id` (uuid, nullable) - Linked content
  - `category` (text) - casino_reviews, bonuses, games, etc.
  - `priority` (text) - low, medium, high
  - `status` (text) - researched, assigned, targeting, ranking
  - `notes` (text)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 4. outreach_templates
  Email templates for backlink outreach
  - `id` (uuid, primary key)
  - `name` (text) - Template name
  - `category` (text) - guest_post, broken_link, resource_link, etc.
  - `subject_line` (text) - Email subject
  - `body` (text) - Email body with variables
  - `follow_up_delay_days` (integer) - Days until follow-up
  - `success_rate` (decimal) - Response rate
  - `times_used` (integer) - Usage count
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ## Security
  - Enable RLS on all tables
  - Add policies for public read access (for demo purposes)
  - Add policies for authenticated insert/update/delete

  ## Notes
  - All timestamps use timestamptz for timezone support
  - Status fields use text for flexibility
  - Arrays used for multi-value fields (keywords)
  - Foreign keys maintain referential integrity
*/

-- Content Calendar Table
CREATE TABLE IF NOT EXISTS content_calendar (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text,
  content_type text DEFAULT 'blog_post',
  target_keyword text,
  secondary_keywords text[],
  planned_publish_date date,
  actual_publish_date date,
  status text DEFAULT 'idea',
  author text,
  word_count integer DEFAULT 0,
  meta_title text,
  meta_description text,
  internal_links integer DEFAULT 0,
  external_links integer DEFAULT 0,
  notes text,
  priority text DEFAULT 'medium',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE content_calendar ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view content calendar"
  ON content_calendar FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can insert content calendar"
  ON content_calendar FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can update content calendar"
  ON content_calendar FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anyone can delete content calendar"
  ON content_calendar FOR DELETE
  TO anon, authenticated
  USING (true);

-- Content Performance Table
CREATE TABLE IF NOT EXISTS content_performance (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content_id uuid REFERENCES content_calendar(id) ON DELETE CASCADE,
  date date DEFAULT CURRENT_DATE,
  impressions integer DEFAULT 0,
  clicks integer DEFAULT 0,
  ctr decimal(5,2) DEFAULT 0,
  average_position decimal(5,2) DEFAULT 0,
  backlinks integer DEFAULT 0,
  organic_traffic integer DEFAULT 0,
  conversions integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE content_performance ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view content performance"
  ON content_performance FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can insert content performance"
  ON content_performance FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can update content performance"
  ON content_performance FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anyone can delete content performance"
  ON content_performance FOR DELETE
  TO anon, authenticated
  USING (true);

-- Keyword Research Table
CREATE TABLE IF NOT EXISTS keyword_research (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  keyword text NOT NULL,
  search_volume integer DEFAULT 0,
  difficulty integer DEFAULT 0,
  cpc decimal(10,2) DEFAULT 0,
  current_position integer,
  target_position integer,
  assigned_content_id uuid REFERENCES content_calendar(id) ON DELETE SET NULL,
  category text,
  priority text DEFAULT 'medium',
  status text DEFAULT 'researched',
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE keyword_research ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view keyword research"
  ON keyword_research FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can insert keyword research"
  ON keyword_research FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can update keyword research"
  ON keyword_research FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anyone can delete keyword research"
  ON keyword_research FOR DELETE
  TO anon, authenticated
  USING (true);

-- Outreach Templates Table
CREATE TABLE IF NOT EXISTS outreach_templates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text DEFAULT 'guest_post',
  subject_line text NOT NULL,
  body text NOT NULL,
  follow_up_delay_days integer DEFAULT 7,
  success_rate decimal(5,2) DEFAULT 0,
  times_used integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE outreach_templates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view outreach templates"
  ON outreach_templates FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can insert outreach templates"
  ON outreach_templates FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can update outreach templates"
  ON outreach_templates FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anyone can delete outreach templates"
  ON outreach_templates FOR DELETE
  TO anon, authenticated
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_content_calendar_status ON content_calendar(status);
CREATE INDEX IF NOT EXISTS idx_content_calendar_publish_date ON content_calendar(planned_publish_date);
CREATE INDEX IF NOT EXISTS idx_content_performance_content_id ON content_performance(content_id);
CREATE INDEX IF NOT EXISTS idx_content_performance_date ON content_performance(date);
CREATE INDEX IF NOT EXISTS idx_keyword_research_status ON keyword_research(status);
CREATE INDEX IF NOT EXISTS idx_keyword_research_priority ON keyword_research(priority);