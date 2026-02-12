import { useState } from 'react';
import { FileText, Target, Search, Link2, CheckCircle, XCircle, AlertCircle, TrendingUp, Award, Sparkles, ArrowRight } from 'lucide-react';

interface OptimizationScore {
  overall: number;
  readability: number;
  seo: number;
  engagement: number;
  technical: number;
}

interface OptimizationIssue {
  type: 'error' | 'warning' | 'success';
  category: string;
  message: string;
  impact: 'high' | 'medium' | 'low';
  fix?: string;
}

const ContentOptimizer = () => {
  const [content, setContent] = useState('');
  const [targetKeyword, setTargetKeyword] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [analyzed, setAnalyzed] = useState(false);
  const [score, setScore] = useState<OptimizationScore>({
    overall: 0,
    readability: 0,
    seo: 0,
    engagement: 0,
    technical: 0,
  });
  const [issues, setIssues] = useState<OptimizationIssue[]>([]);

  const analyzeContent = () => {
    const analysisIssues: OptimizationIssue[] = [];
    let scores = {
      readability: 100,
      seo: 100,
      engagement: 100,
      technical: 100,
    };

    const wordCount = content.trim().split(/\s+/).length;
    const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const paragraphs = content.split(/\n\n+/).filter(p => p.trim().length > 0).length;
    const headings = (content.match(/^#{1,6}\s+.+$/gm) || []).length;
    const links = (content.match(/\[.+?\]\(.+?\)/g) || []).length;
    const internalLinks = (content.match(/\[.+?\]\(\/.*?\)/g) || []).length;
    const images = (content.match(/!\[.*?\]\(.+?\)/g) || []).length;
    const avgWordsPerSentence = sentences > 0 ? wordCount / sentences : 0;
    const avgSentencesPerParagraph = paragraphs > 0 ? sentences / paragraphs : 0;

    const keywordLower = targetKeyword.toLowerCase();
    const contentLower = content.toLowerCase();
    const keywordDensity = targetKeyword ? (contentLower.split(keywordLower).length - 1) / wordCount * 100 : 0;
    const keywordInTitle = metaTitle.toLowerCase().includes(keywordLower);
    const keywordInDescription = metaDescription.toLowerCase().includes(keywordLower);
    const keywordInFirstParagraph = content.split('\n\n')[0]?.toLowerCase().includes(keywordLower);

    if (wordCount < 300) {
      analysisIssues.push({
        type: 'error',
        category: 'SEO',
        message: `Content too short: ${wordCount} words. Aim for 1,500-2,500 words for better rankings.`,
        impact: 'high',
        fix: 'Expand content with more detailed information, examples, and explanations.',
      });
      scores.seo -= 30;
    } else if (wordCount < 1000) {
      analysisIssues.push({
        type: 'warning',
        category: 'SEO',
        message: `Content could be longer: ${wordCount} words. Target 1,500-2,500 for competitive keywords.`,
        impact: 'medium',
        fix: 'Add more sections, examples, or detailed explanations.',
      });
      scores.seo -= 15;
    } else if (wordCount >= 1500) {
      analysisIssues.push({
        type: 'success',
        category: 'SEO',
        message: `Excellent word count: ${wordCount} words. Great for SEO!`,
        impact: 'low',
      });
    }

    if (headings < 3) {
      analysisIssues.push({
        type: 'error',
        category: 'Readability',
        message: `Not enough headings: ${headings}. Use 5-10 headings to structure content.`,
        impact: 'high',
        fix: 'Add H2 and H3 headings to break up content and improve scannability.',
      });
      scores.readability -= 25;
    } else if (headings >= 5) {
      analysisIssues.push({
        type: 'success',
        category: 'Readability',
        message: `Good heading structure: ${headings} headings found.`,
        impact: 'low',
      });
    }

    if (avgWordsPerSentence > 25) {
      analysisIssues.push({
        type: 'warning',
        category: 'Readability',
        message: `Sentences too long: avg ${avgWordsPerSentence.toFixed(1)} words. Aim for 15-20 words.`,
        impact: 'medium',
        fix: 'Break long sentences into shorter ones for better readability.',
      });
      scores.readability -= 15;
    } else if (avgWordsPerSentence <= 20) {
      analysisIssues.push({
        type: 'success',
        category: 'Readability',
        message: `Perfect sentence length: avg ${avgWordsPerSentence.toFixed(1)} words per sentence.`,
        impact: 'low',
      });
    }

    if (avgSentencesPerParagraph > 5) {
      analysisIssues.push({
        type: 'warning',
        category: 'Readability',
        message: `Paragraphs too long: avg ${avgSentencesPerParagraph.toFixed(1)} sentences. Keep to 3-4 sentences.`,
        impact: 'medium',
        fix: 'Break up long paragraphs for easier reading on screens.',
      });
      scores.readability -= 10;
    }

    if (targetKeyword) {
      if (!keywordInTitle) {
        analysisIssues.push({
          type: 'error',
          category: 'SEO',
          message: 'Target keyword not in meta title.',
          impact: 'high',
          fix: `Add "${targetKeyword}" near the beginning of your meta title.`,
        });
        scores.seo -= 25;
      } else {
        analysisIssues.push({
          type: 'success',
          category: 'SEO',
          message: 'Target keyword found in meta title!',
          impact: 'low',
        });
      }

      if (!keywordInDescription) {
        analysisIssues.push({
          type: 'warning',
          category: 'SEO',
          message: 'Target keyword not in meta description.',
          impact: 'medium',
          fix: `Include "${targetKeyword}" naturally in your meta description.`,
        });
        scores.seo -= 15;
      }

      if (!keywordInFirstParagraph) {
        analysisIssues.push({
          type: 'warning',
          category: 'SEO',
          message: 'Target keyword not in first paragraph.',
          impact: 'medium',
          fix: 'Mention your target keyword within the first 100 words.',
        });
        scores.seo -= 15;
      } else {
        analysisIssues.push({
          type: 'success',
          category: 'SEO',
          message: 'Target keyword appears in first paragraph.',
          impact: 'low',
        });
      }

      if (keywordDensity < 0.5) {
        analysisIssues.push({
          type: 'warning',
          category: 'SEO',
          message: `Keyword density too low: ${keywordDensity.toFixed(2)}%. Aim for 1-2%.`,
          impact: 'medium',
          fix: 'Naturally incorporate your target keyword 5-10 more times.',
        });
        scores.seo -= 10;
      } else if (keywordDensity > 3) {
        analysisIssues.push({
          type: 'warning',
          category: 'SEO',
          message: `Keyword density too high: ${keywordDensity.toFixed(2)}%. Risk of keyword stuffing.`,
          impact: 'medium',
          fix: 'Reduce keyword usage to avoid penalties. Use synonyms instead.',
        });
        scores.seo -= 15;
      } else {
        analysisIssues.push({
          type: 'success',
          category: 'SEO',
          message: `Perfect keyword density: ${keywordDensity.toFixed(2)}%`,
          impact: 'low',
        });
      }
    }

    if (metaTitle.length === 0) {
      analysisIssues.push({
        type: 'error',
        category: 'Technical',
        message: 'Missing meta title.',
        impact: 'high',
        fix: 'Add a compelling meta title (50-60 characters).',
      });
      scores.technical -= 25;
    } else if (metaTitle.length < 30 || metaTitle.length > 60) {
      analysisIssues.push({
        type: 'warning',
        category: 'Technical',
        message: `Meta title length: ${metaTitle.length} chars. Optimal is 50-60.`,
        impact: 'medium',
        fix: metaTitle.length < 30 ? 'Make title more descriptive.' : 'Shorten title to avoid truncation.',
      });
      scores.technical -= 15;
    } else {
      analysisIssues.push({
        type: 'success',
        category: 'Technical',
        message: `Perfect meta title length: ${metaTitle.length} characters.`,
        impact: 'low',
      });
    }

    if (metaDescription.length === 0) {
      analysisIssues.push({
        type: 'error',
        category: 'Technical',
        message: 'Missing meta description.',
        impact: 'high',
        fix: 'Add a compelling meta description (150-160 characters).',
      });
      scores.technical -= 25;
    } else if (metaDescription.length < 120 || metaDescription.length > 160) {
      analysisIssues.push({
        type: 'warning',
        category: 'Technical',
        message: `Meta description length: ${metaDescription.length} chars. Optimal is 150-160.`,
        impact: 'medium',
        fix: metaDescription.length < 120 ? 'Add more detail.' : 'Shorten to avoid truncation.',
      });
      scores.technical -= 15;
    } else {
      analysisIssues.push({
        type: 'success',
        category: 'Technical',
        message: `Perfect meta description length: ${metaDescription.length} characters.`,
        impact: 'low',
      });
    }

    if (internalLinks < 3) {
      analysisIssues.push({
        type: 'warning',
        category: 'SEO',
        message: `Not enough internal links: ${internalLinks}. Add 5-10 internal links.`,
        impact: 'medium',
        fix: 'Link to related articles, guides, and key pages on your site.',
      });
      scores.seo -= 15;
    } else if (internalLinks >= 5) {
      analysisIssues.push({
        type: 'success',
        category: 'SEO',
        message: `Excellent internal linking: ${internalLinks} internal links found.`,
        impact: 'low',
      });
    }

    if (links - internalLinks < 2) {
      analysisIssues.push({
        type: 'warning',
        category: 'SEO',
        message: `Not enough external links: ${links - internalLinks}. Add 2-3 authoritative sources.`,
        impact: 'low',
        fix: 'Link to high-quality external sources to support your points.',
      });
      scores.seo -= 5;
    }

    if (images === 0) {
      analysisIssues.push({
        type: 'warning',
        category: 'Engagement',
        message: 'No images found. Add 3-5 relevant images.',
        impact: 'medium',
        fix: 'Include screenshots, infographics, or stock photos to break up text.',
      });
      scores.engagement -= 15;
    } else if (images >= 3) {
      analysisIssues.push({
        type: 'success',
        category: 'Engagement',
        message: `Good visual content: ${images} images found.`,
        impact: 'low',
      });
    }

    const passivePhrases = (content.match(/\b(is|are|was|were|be|been|being)\s+\w+ed\b/gi) || []).length;
    const passiveRatio = sentences > 0 ? passivePhrases / sentences * 100 : 0;
    if (passiveRatio > 20) {
      analysisIssues.push({
        type: 'warning',
        category: 'Readability',
        message: `Too much passive voice: ${passiveRatio.toFixed(0)}%. Aim for under 10%.`,
        impact: 'low',
        fix: 'Use active voice for more engaging writing (e.g., "We tested" vs "It was tested").',
      });
      scores.readability -= 10;
    }

    const overall = Math.round((scores.readability + scores.seo + scores.engagement + scores.technical) / 4);

    setScore({
      overall,
      readability: Math.max(0, scores.readability),
      seo: Math.max(0, scores.seo),
      engagement: Math.max(0, scores.engagement),
      technical: Math.max(0, scores.technical),
    });
    setIssues(analysisIssues);
    setAnalyzed(true);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-600';
    if (score >= 60) return 'bg-yellow-600';
    return 'bg-red-600';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 80) return 'Good';
    if (score >= 60) return 'Fair';
    return 'Needs Work';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2 flex items-center">
            <Sparkles className="w-10 h-10 mr-3 text-green-600" />
            Content Optimizer & SEO Analyzer
          </h1>
          <p className="text-slate-600 text-lg">
            Analyze your content and get actionable recommendations to improve SEO and readability
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Content Analysis</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Target Keyword</label>
                  <input
                    type="text"
                    value={targetKeyword}
                    onChange={(e) => setTargetKeyword(e.target.value)}
                    placeholder="e.g., best online casinos canada"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Meta Title</label>
                  <input
                    type="text"
                    value={metaTitle}
                    onChange={(e) => setMetaTitle(e.target.value)}
                    placeholder="SEO title (50-60 characters)"
                    maxLength={70}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <div className="text-xs text-slate-500 mt-1">{metaTitle.length}/60 characters (optimal)</div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Meta Description</label>
                  <textarea
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
                    placeholder="SEO meta description (150-160 characters)"
                    maxLength={170}
                    rows={2}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <div className="text-xs text-slate-500 mt-1">{metaDescription.length}/160 characters (optimal)</div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Content (Markdown supported)</label>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Paste your content here... Use ## for headings, [text](url) for links, ![alt](url) for images"
                    rows={15}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent font-mono text-sm"
                  />
                  <div className="text-xs text-slate-500 mt-1">
                    {content.trim().split(/\s+/).filter(w => w.length > 0).length} words
                  </div>
                </div>

                <button
                  onClick={analyzeContent}
                  disabled={!content || !targetKeyword}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <Target className="w-5 h-5 mr-2" />
                  Analyze Content
                </button>
              </div>
            </div>

            {analyzed && (
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <AlertCircle className="w-6 h-6 mr-2 text-blue-600" />
                  Optimization Recommendations
                </h2>

                <div className="space-y-3">
                  {issues
                    .sort((a, b) => {
                      const impactOrder = { high: 0, medium: 1, low: 2 };
                      return impactOrder[a.impact] - impactOrder[b.impact];
                    })
                    .map((issue, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-xl border-2 ${
                          issue.type === 'error' ? 'bg-red-50 border-red-200' :
                          issue.type === 'warning' ? 'bg-yellow-50 border-yellow-200' :
                          'bg-green-50 border-green-200'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1">
                            {issue.type === 'error' && <XCircle className="w-5 h-5 text-red-600" />}
                            {issue.type === 'warning' && <AlertCircle className="w-5 h-5 text-yellow-600" />}
                            {issue.type === 'success' && <CheckCircle className="w-5 h-5 text-green-600" />}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                                issue.impact === 'high' ? 'bg-red-100 text-red-700' :
                                issue.impact === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-blue-100 text-blue-700'
                              }`}>
                                {issue.category}
                              </span>
                              <span className="text-xs text-slate-500">{issue.impact} impact</span>
                            </div>
                            <div className="font-semibold text-slate-900 mb-1">{issue.message}</div>
                            {issue.fix && (
                              <div className="text-sm text-slate-600 flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                                <span>{issue.fix}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {analyzed && (
              <>
                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Content Score</h2>

                  <div className="text-center mb-6">
                    <div className={`text-6xl font-bold ${getScoreColor(score.overall)} mb-2`}>
                      {score.overall}
                    </div>
                    <div className="text-lg font-semibold text-slate-600">{getScoreLabel(score.overall)}</div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-slate-700">SEO</span>
                        <span className={`text-sm font-bold ${getScoreColor(score.seo)}`}>{score.seo}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${getScoreBgColor(score.seo)}`}
                          style={{ width: `${score.seo}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-slate-700">Readability</span>
                        <span className={`text-sm font-bold ${getScoreColor(score.readability)}`}>{score.readability}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${getScoreBgColor(score.readability)}`}
                          style={{ width: `${score.readability}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-slate-700">Engagement</span>
                        <span className={`text-sm font-bold ${getScoreColor(score.engagement)}`}>{score.engagement}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${getScoreBgColor(score.engagement)}`}
                          style={{ width: `${score.engagement}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-slate-700">Technical</span>
                        <span className={`text-sm font-bold ${getScoreColor(score.technical)}`}>{score.technical}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${getScoreBgColor(score.technical)}`}
                          style={{ width: `${score.technical}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl shadow-lg p-6 text-white">
                  <Award className="w-12 h-12 mb-4 opacity-80" />
                  <h3 className="text-xl font-bold mb-2">Score Guide</h3>
                  <div className="space-y-2 text-sm text-green-100">
                    <div><strong>90-100:</strong> Excellent - Ready to publish!</div>
                    <div><strong>80-89:</strong> Good - Minor improvements needed</div>
                    <div><strong>60-79:</strong> Fair - Needs optimization</div>
                    <div><strong>&lt;60:</strong> Poor - Significant work required</div>
                  </div>
                </div>
              </>
            )}

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-blue-600" />
                Quick Tips
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-green-600" />
                  <span>Aim for 1,500-2,500 words for blog posts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-green-600" />
                  <span>Use 5-10 headings (H2, H3) to structure content</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-green-600" />
                  <span>Include target keyword in title and first paragraph</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-green-600" />
                  <span>Add 5-10 internal links to related pages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-green-600" />
                  <span>Use 3-5 images to break up text</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-green-600" />
                  <span>Keep sentences under 20 words average</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-green-600" />
                  <span>Maintain 1-2% keyword density</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentOptimizer;
