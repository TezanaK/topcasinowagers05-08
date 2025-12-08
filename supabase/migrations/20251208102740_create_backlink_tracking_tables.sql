/*
  # Backlink Tracking System

  1. New Tables
    - `backlink_opportunities`
      - `id` (uuid, primary key)
      - `domain` (text) - Target website domain
      - `url` (text) - Specific page URL
      - `domain_authority` (integer) - DA score (1-100)
      - `niche_relevance` (text) - How relevant to casino niche
      - `contact_name` (text) - Site owner/editor name
      - `contact_email` (text) - Contact email
      - `opportunity_type` (text) - guest post, resource page, broken link, etc.
      - `notes` (text) - Additional notes
      - `priority` (text) - high, medium, low
      - `status` (text) - new, researching, ready, contacted, acquired, rejected
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `backlink_outreach`
      - `id` (uuid, primary key)
      - `opportunity_id` (uuid, foreign key)
      - `outreach_date` (date)
      - `outreach_method` (text) - email, social, form
      - `subject_line` (text)
      - `message` (text)
      - `response_received` (boolean)
      - `response_date` (date)
      - `response_text` (text)
      - `follow_up_date` (date)
      - `outcome` (text) - pending, accepted, rejected, no_response
      - `created_at` (timestamptz)

    - `backlinks`
      - `id` (uuid, primary key)
      - `opportunity_id` (uuid, foreign key, nullable)
      - `source_domain` (text) - Domain linking to us
      - `source_url` (text) - Full URL of linking page
      - `target_url` (text) - Our page being linked to
      - `anchor_text` (text) - Link anchor text
      - `link_type` (text) - dofollow, nofollow
      - `acquired_date` (date)
      - `last_checked` (date)
      - `is_active` (boolean) - Is link still live
      - `domain_authority` (integer)
      - `notes` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated admin users
*/

-- Create backlink_opportunities table
CREATE TABLE IF NOT EXISTS backlink_opportunities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  domain text NOT NULL,
  url text,
  domain_authority integer DEFAULT 0,
  niche_relevance text,
  contact_name text,
  contact_email text,
  opportunity_type text DEFAULT 'guest_post',
  notes text,
  priority text DEFAULT 'medium',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create backlink_outreach table
CREATE TABLE IF NOT EXISTS backlink_outreach (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  opportunity_id uuid REFERENCES backlink_opportunities(id) ON DELETE CASCADE,
  outreach_date date DEFAULT CURRENT_DATE,
  outreach_method text DEFAULT 'email',
  subject_line text,
  message text,
  response_received boolean DEFAULT false,
  response_date date,
  response_text text,
  follow_up_date date,
  outcome text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Create backlinks table
CREATE TABLE IF NOT EXISTS backlinks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  opportunity_id uuid REFERENCES backlink_opportunities(id) ON DELETE SET NULL,
  source_domain text NOT NULL,
  source_url text NOT NULL,
  target_url text NOT NULL,
  anchor_text text,
  link_type text DEFAULT 'dofollow',
  acquired_date date DEFAULT CURRENT_DATE,
  last_checked date DEFAULT CURRENT_DATE,
  is_active boolean DEFAULT true,
  domain_authority integer DEFAULT 0,
  notes text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE backlink_opportunities ENABLE ROW LEVEL SECURITY;
ALTER TABLE backlink_outreach ENABLE ROW LEVEL SECURITY;
ALTER TABLE backlinks ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (for dashboard)
CREATE POLICY "Anyone can view backlink opportunities"
  ON backlink_opportunities FOR SELECT
  USING (true);

CREATE POLICY "Anyone can view outreach"
  ON backlink_outreach FOR SELECT
  USING (true);

CREATE POLICY "Anyone can view backlinks"
  ON backlinks FOR SELECT
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_backlink_opportunities_status ON backlink_opportunities(status);
CREATE INDEX IF NOT EXISTS idx_backlink_opportunities_priority ON backlink_opportunities(priority);
CREATE INDEX IF NOT EXISTS idx_backlink_outreach_opportunity ON backlink_outreach(opportunity_id);
CREATE INDEX IF NOT EXISTS idx_backlinks_source_domain ON backlinks(source_domain);
CREATE INDEX IF NOT EXISTS idx_backlinks_is_active ON backlinks(is_active);

-- Insert sample backlink opportunities for casino niche
INSERT INTO backlink_opportunities (domain, url, domain_authority, niche_relevance, opportunity_type, priority, status, notes) VALUES
  ('casinoreviews.com', 'https://casinoreviews.com/resources', 65, 'high', 'resource_page', 'high', 'ready', 'Resource page for casino review sites'),
  ('gamblingnews.com', 'https://gamblingnews.com/guest-posts', 58, 'high', 'guest_post', 'high', 'ready', 'Accepts casino industry guest posts'),
  ('affiliate-programs.net', 'https://affiliate-programs.net/casino', 72, 'medium', 'directory', 'medium', 'ready', 'Casino affiliate directory listing'),
  ('reddit.com/r/onlinegambling', 'https://reddit.com/r/onlinegambling', 91, 'high', 'community', 'medium', 'ready', 'Active gambling community'),
  ('bestcasinosites.ca', 'https://bestcasinosites.ca/partners', 48, 'high', 'link_exchange', 'medium', 'new', 'Canadian casino site for partnership'),
  ('casinoforum.com', 'https://casinoforum.com', 55, 'high', 'forum_profile', 'low', 'ready', 'Casino discussion forum'),
  ('gambling.com', 'https://gambling.com/broken-link-page', 82, 'high', 'broken_link', 'high', 'researching', 'High DA site with broken links'),
  ('slots.com', 'https://slots.com/blog', 61, 'medium', 'guest_post', 'medium', 'ready', 'Slots-focused blog accepting contributions'),
  ('bettingexpert.com', 'https://bettingexpert.com', 76, 'medium', 'guest_post', 'high', 'new', 'Betting tips and casino content site'),
  ('casinoinsider.com', 'https://casinoinsider.com/write-for-us', 52, 'high', 'guest_post', 'high', 'ready', 'Actively seeking casino writers');

-- Insert sample acquired backlinks
INSERT INTO backlinks (source_domain, source_url, target_url, anchor_text, link_type, domain_authority, is_active) VALUES
  ('casinoblog.com', 'https://casinoblog.com/top-sites-2025', 'https://topcasinowagers.ca', 'TopCasinoWagers', 'dofollow', 45, true),
  ('gamblersguide.net', 'https://gamblersguide.net/canadian-casinos', 'https://topcasinowagers.ca/reviews', 'Canadian casino reviews', 'dofollow', 38, true),
  ('forumgambling.com', 'https://forumgambling.com/thread/12345', 'https://topcasinowagers.ca/bonuses', 'check this bonus guide', 'nofollow', 42, true);