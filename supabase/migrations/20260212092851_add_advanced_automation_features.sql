/*
  # Advanced Automation Features for Backlink Building

  1. New Tables
    - `competitor_backlinks` - Track competitor backlink profiles for opportunity discovery
    - `backlink_health_checks` - Monitor status and health of acquired backlinks
    - `follow_up_schedule` - Automate follow-up scheduling for outreach campaigns
    - `link_prospects` - Manage discovered link building opportunities
    - `outreach_templates_analytics` - Track performance metrics for email templates

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated access
*/

-- Competitor Backlinks Analysis
CREATE TABLE IF NOT EXISTS competitor_backlinks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  competitor_domain text NOT NULL,
  backlink_source text NOT NULL,
  source_domain_authority integer DEFAULT 0,
  link_type text DEFAULT 'dofollow',
  anchor_text text,
  target_url text,
  discovered_date timestamptz DEFAULT now(),
  relevance_score integer DEFAULT 0,
  opportunity_status text DEFAULT 'new',
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE competitor_backlinks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage competitor backlinks"
  ON competitor_backlinks FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Backlink Health Monitoring
CREATE TABLE IF NOT EXISTS backlink_health_checks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  backlink_id uuid REFERENCES backlinks(id) ON DELETE CASCADE,
  check_date timestamptz DEFAULT now(),
  status text DEFAULT 'active',
  http_status_code integer,
  is_dofollow boolean DEFAULT true,
  is_indexed boolean DEFAULT false,
  anchor_text_verified boolean DEFAULT true,
  response_time_ms integer,
  issues_found text[],
  notes text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE backlink_health_checks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage health checks"
  ON backlink_health_checks FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Automated Follow-up Scheduling
CREATE TABLE IF NOT EXISTS follow_up_schedule (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  outreach_id uuid REFERENCES backlink_outreach(id) ON DELETE CASCADE,
  follow_up_number integer DEFAULT 1,
  scheduled_date date NOT NULL,
  status text DEFAULT 'pending',
  sent_date timestamptz,
  email_subject text,
  email_body text,
  response_received boolean DEFAULT false,
  response_date timestamptz,
  next_action text,
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE follow_up_schedule ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage follow-up schedule"
  ON follow_up_schedule FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Link Building Prospects
CREATE TABLE IF NOT EXISTS link_prospects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  domain text NOT NULL,
  url text NOT NULL,
  domain_authority integer DEFAULT 0,
  page_authority integer DEFAULT 0,
  spam_score integer DEFAULT 0,
  prospect_type text DEFAULT 'guest-post',
  relevance_score integer DEFAULT 0,
  contact_email text,
  contact_name text,
  social_profiles jsonb DEFAULT '{}',
  last_updated date DEFAULT CURRENT_DATE,
  accept_guest_posts boolean DEFAULT false,
  avg_response_time_days integer,
  estimated_difficulty integer DEFAULT 50,
  priority text DEFAULT 'medium',
  status text DEFAULT 'new',
  notes text,
  discovered_via text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE link_prospects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage link prospects"
  ON link_prospects FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Template Performance Analytics
CREATE TABLE IF NOT EXISTS outreach_templates_analytics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  template_name text NOT NULL UNIQUE,
  times_used integer DEFAULT 0,
  responses_received integer DEFAULT 0,
  positive_responses integer DEFAULT 0,
  links_acquired integer DEFAULT 0,
  avg_response_time_hours numeric(8,2),
  response_rate numeric(5,2) DEFAULT 0,
  success_rate numeric(5,2) DEFAULT 0,
  last_used_date timestamptz,
  performance_score integer DEFAULT 0,
  a_b_test_variant text,
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE outreach_templates_analytics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage template analytics"
  ON outreach_templates_analytics FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Performance Indexes
CREATE INDEX IF NOT EXISTS idx_competitor_backlinks_competitor ON competitor_backlinks(competitor_domain);
CREATE INDEX IF NOT EXISTS idx_competitor_backlinks_status ON competitor_backlinks(opportunity_status);
CREATE INDEX IF NOT EXISTS idx_health_checks_backlink ON backlink_health_checks(backlink_id);
CREATE INDEX IF NOT EXISTS idx_health_checks_status ON backlink_health_checks(status);
CREATE INDEX IF NOT EXISTS idx_follow_up_schedule_outreach ON follow_up_schedule(outreach_id);
CREATE INDEX IF NOT EXISTS idx_follow_up_schedule_date ON follow_up_schedule(scheduled_date);
CREATE INDEX IF NOT EXISTS idx_follow_up_schedule_status ON follow_up_schedule(status);
CREATE INDEX IF NOT EXISTS idx_link_prospects_priority ON link_prospects(priority);
CREATE INDEX IF NOT EXISTS idx_link_prospects_status ON link_prospects(status);
CREATE INDEX IF NOT EXISTS idx_templates_analytics_name ON outreach_templates_analytics(template_name);
