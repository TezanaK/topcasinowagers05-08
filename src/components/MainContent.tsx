@@ .. @@
           <div className="text-center mb-16">
             <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-modern">
               <span className="text-yellow-300 animate-neon-pulse">
                Canada's #1
               </span>
               <br />
               <span className="text-white">Casino Guide</span>
             </h1>
             
             <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto text-modern">
              🍁 Discover Canada's top-rated online casinos with exclusive bonuses up to CA$9,000, 
              expert reviews, and trusted recommendations. Licensed casinos accepting Canadian players with CAD support and Interac e-Transfer.
             </p>

             {/* Trust Indicators */}
@@ -89,7 +89,7 @@ const MainContent: React.FC<MainContentProps> = ({ 
               </div>
               <div className="glass-dark rounded-2xl px-6 py-4 border border-white/20">
                 <div className="text-2xl font-bold text-green-400">CA$50K+</div>
                <div className="text-sm opacity-80">Exclusive Bonuses</div>
               </div>
               <div className="glass-dark rounded-2xl px-6 py-4 border border-white/20">
                 <div className="text-2xl font-bold text-purple-400">24/7</div>
}
)
@@ -104,7 +104,7 @@ const MainContent: React.FC<MainContentProps> = ({ 
                 Play at Top Casinos
               </button>
               <button className="glass-dark border-2 border-white/20 text-white font-bold py-4 px-8 rounded-2xl hover:bg-white hover:text-slate-900 transition-all duration-300">
                <FileText className="w-5 h-5 mr-2 inline" />
                 Read Reviews
               </button>
             </div>
}
)
@@ -115,7 +115,7 @@ const MainContent: React.FC<MainContentProps> = ({ 
       {/* Featured Casinos Section */}
       <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-modern">
               🏆 Top Canadian Online Casinos
             </h2>
@@ -123,6 +123,13 @@ const MainContent: React.FC<MainContentProps> = ({ 
               Expert-reviewed casinos with the best bonuses, games, and payouts for Canadian players
             </p>
           </div>
          
          {/* SEO-optimized intro text */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-slate-600 leading-relaxed">
              Our team of Canadian casino experts has tested and reviewed hundreds of online casinos to bring you the most comprehensive guide to <strong>online gambling in Canada</strong>. All recommended casinos accept <strong>Canadian dollars (CAD)</strong>, offer <strong>Interac e-Transfer</strong>, provide <strong>fast payouts in 1-3 days</strong>, and are licensed by reputable gaming authorities including <strong>Malta Gaming Authority</strong> and <strong>UK Gambling Commission</strong>.
            </p>
          </div>

           <div className="space-y-8">
             {casinos.map((casino, index) => (
               <div key={index} className="modern-card shadow-modern-hover group">
                 <div className="p-8">
                   <div className="flex items-center mb-6">
                     <img 
                       src={casino.logo} 
                       alt={`${casino.name} casino logo - Licensed Canadian online casino`}
                       loading={index === 0 ? "eager" : "lazy"}
                       decoding="async"
                       className="w-16 h-16 rounded-2xl object-cover shadow-modern border-2 border-white/20 mr-6"
                     />
                     <div className="flex-1">
                       <h3 className="text-2xl font-bold text-slate-900 mb-2">{casino.name}</h3>
                       <div className="flex items-center space-x-4">
                         <div className="flex items-center">
                           {[...Array(5)].map((_, i) => (
                             <Star key={i} className={`w-5 h-5 ${i < casino.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                           ))}
                           <span className="ml-2 text-slate-600 font-semibold">{casino.rating}/5</span>
                         </div>
                         <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                           {casino.license}
                         </span>
                       </div>
                     </div>
                     <div className="text-right">
                       <div className="text-3xl font-bold text-green-600 mb-1">{casino.bonus}</div>
                       <div className="text-sm text-slate-600">Welcome Bonus</div>
                     </div>
                   </div>

                   <div className="grid md:grid-cols-3 gap-6 mb-8">
                     <div className="text-center">
                       <div className="text-2xl font-bold text-slate-900">{casino.games}</div>
                       <div className="text-sm text-slate-600">Premium Games</div>
                     </div>
                     <div className="text-center">
                       <div className="text-2xl font-bold text-green-600">{casino.payoutTime}</div>
                       <div className="text-sm text-slate-600">Fast Payouts</div>
                     </div>
                     <div className="text-center">
                       <div className="text-2xl font-bold text-blue-600">{casino.minDeposit}</div>
                       <div className="text-sm text-slate-600">Min Deposit</div>
                     </div>
                   </div>

                   <div className="mb-6">
                     <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                     <div className="grid md:grid-cols-2 gap-2">
                       {casino.features.map((feature, featureIndex) => (
                         <div key={featureIndex} className="flex items-center text-slate-600">
                           <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                           <span className="text-sm">{feature}</span>
                         </div>
                       ))}
                     </div>
                   </div>

                   <div className="flex flex-wrap gap-4">
                     <button className="btn-gold rounded-xl py-3 px-6 font-bold shadow-modern-hover transform hover:scale-105 transition-all duration-300 flex-1 min-w-[200px]">
                       <ExternalLink className="w-4 h-4 mr-2 inline" />
                       Claim Bonus
                     </button>
                     <button className="border-2 border-slate-300 text-slate-700 font-semibold py-3 px-6 rounded-xl hover:bg-slate-50 transition-all duration-300">
                       <FileText className="w-4 h-4 mr-2 inline" />
                       Read Review
                     </button>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </section>

       {/* Quick Stats */}
       <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-4 gap-8 text-center">
             <div>
               <div className="text-4xl font-bold mb-2">150+</div>
               <div className="text-blue-100">Casinos Reviewed</div>
             </div>
             <div>
               <div className="text-4xl font-bold mb-2">CA$2M+</div>
               <div className="text-blue-100">Bonuses Claimed</div>
             </div>
             <div>
               <div className="text-4xl font-bold mb-2">50K+</div>
               <div className="text-blue-100">Happy Players</div>
             </div>
             <div>
               <div className="text-4xl font-bold mb-2">24/7</div>
               <div className="text-blue-100">Expert Support</div>
             </div>
           </div>
         </div>
       </section>

       {/* Payment Methods */}
       <section className="py-20 bg-slate-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-modern">
               💳 Canadian Payment Methods
             </h2>
             <p className="text-xl text-slate-600">
               Safe, secure, and convenient banking options for Canadian players
             </p>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {paymentMethods.map((method, index) => (
               <div key={index} className="modern-card shadow-modern-hover text-center group">
                 <div className="p-6">
                   <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                     <CreditCard className="w-8 h-8 text-white" />
                   </div>
                   <h3 className="text-xl font-semibold text-slate-900 mb-2">{method.name}</h3>
                   <p className="text-slate-600 text-sm mb-4">{method.description}</p>
                   <div className="text-sm text-slate-500">
                     <div>Processing: {method.processingTime}</div>
                     <div>Fees: {method.fees}</div>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </section>

       {/* Why Choose Us Section */}
       <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-modern">
               Why Choose TopCasinoWagers?
             </h2>
             <p className="text-xl text-slate-600">
               Canada's most trusted source for online casino reviews and recommendations
             </p>
           </div>
          
          {/* Additional SEO content */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-slate-600 leading-relaxed">
              Since 2019, we've been helping Canadian players find the <strong>best online casinos</strong> with <strong>fast payouts in 1-3 days</strong>, <strong>generous welcome bonuses up to CA$9,000</strong>, and <strong>24/7 customer support</strong>. Our comprehensive reviews cover everything from <strong>1000+ casino games</strong> and <strong>live dealers</strong> to <strong>mobile compatibility</strong> and <strong>responsible gambling</strong> tools. All casinos support <strong>Canadian banking methods</strong> including Interac e-Transfer.
            </p>
          </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             <div className="modern-card shadow-modern-hover text-center group">
               <div className="p-8">
                 <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                   <Shield className="w-10 h-10 text-white" />
                 </div>
                 <h3 className="text-xl font-semibold text-slate-900 mb-4">Licensed & Safe</h3>
                <p className="text-slate-600">Only MGA, UKGC, and Curacao licensed casinos with SSL encryption and fair play certification</p>
               </div>
             </div>

             <div className="modern-card shadow-modern-hover text-center group">
               <div className="p-8">
                 <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                   <Award className="w-10 h-10 text-white" />
                 </div>
                 <h3 className="text-xl font-semibold text-slate-900 mb-4">Expert Reviews</h3>
                <p className="text-slate-600">Comprehensive reviews by Canadian gambling experts with 10+ years experience</p>
               </div>
             </div>

             <div className="modern-card shadow-modern-hover text-center group">
               <div className="p-8">
                 <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                   <MapPin className="w-10 h-10 text-white" />
                 </div>
                 <h3 className="text-xl font-semibold text-slate-900 mb-4">Canadian Focus</h3>
                <p className="text-slate-600">Expert knowledge of Canadian gambling laws, provincial regulations, and CAD banking options</p>
               </div>
             </div>

             <div className="modern-card shadow-modern-hover text-center group">
               <div className="p-8">
                 <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                   <Users className="w-10 h-10 text-white" />
                 </div>
                 <h3 className="text-xl font-semibold text-slate-900 mb-4">Player Support</h3>
                <p className="text-slate-600">24/7 support for Canadian players with responsible gambling resources and dispute resolution</p>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Exclusive Bonuses Section */}
       <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-modern">
               🎁 Exclusive Casino Bonuses
             </h2>
             <p className="text-xl text-slate-600">
               Claim exclusive bonuses worth up to CA$9,000 + 500 free spins
             </p>
           </div>

          {/* SEO-rich bonus description */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-slate-600 leading-relaxed">
              Claim <strong>exclusive casino bonuses</strong> worth up to <strong>CA$9,000</strong> plus hundreds of <strong>free spins</strong>. Our partnerships with top Canadian casinos ensure you get the <strong>best welcome bonuses</strong>, <strong>no deposit offers</strong>, and <strong>cashback deals</strong> available to Canadian players. All bonuses come with <strong>fair wagering requirements</strong> and <strong>transparent terms</strong>.
            </p>
          </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {bonuses.map((bonus, index) => (
               <div key={index} className="modern-card shadow-modern-hover group">
                 <div className="p-6">
                   <div className="flex items-center mb-4">
                     <img 
                       src={bonus.logo} 
                       alt={`${bonus.casino} logo`}
                       className="w-12 h-12 rounded-xl object-cover mr-4"
                     />
                     <div>
                       <h3 className="text-xl font-bold text-slate-900">{bonus.casino}</h3>
                       <div className="flex items-center">
                         {[...Array(5)].map((_, i) => (
                           <Star key={i} className={`w-4 h-4 ${i < bonus.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                         ))}
                         <span className="ml-2 text-sm text-slate-600">{bonus.rating}/5</span>
                       </div>
                     </div>
                   </div>
                   
                   <div className="text-center mb-6">
                     <div className="text-3xl font-bold text-green-600 mb-2">{bonus.amount}</div>
                     <div className="text-lg font-semibold text-slate-900 mb-1">{bonus.type}</div>
                     <div className="text-sm text-slate-600">{bonus.description}</div>
                   </div>

                   <div className="space-y-2 mb-6 text-sm text-slate-600">
                     <div className="flex justify-between">
                       <span>Wagering:</span>
                       <span className="font-semibold">{bonus.wagering}</span>
                     </div>
                     <div className="flex justify-between">
                       <span>Min Deposit:</span>
                       <span className="font-semibold">{bonus.minDeposit}</span>
                     </div>
                     <div className="flex justify-between">
                       <span>Valid:</span>
                       <span className="font-semibold">{bonus.validity}</span>
                     </div>
                   </div>

                   <button className="w-full btn-gold rounded-xl py-3 font-bold shadow-modern-hover transform hover:scale-105 transition-all duration-300">
                     <Gift className="w-4 h-4 mr-2 inline" />
                     Claim Bonus
                   </button>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </section>

       {/* Game Guides Section */}
       <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-modern">
               🎯 Expert Game Guides
             </h2>
             <p className="text-xl text-slate-600">
               Master casino games with our comprehensive strategy guides
             </p>
           </div>

          {/* Additional SEO content for game guides */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-slate-600 leading-relaxed">
              Master <strong>online casino games</strong> with our expert guides covering <strong>slot strategies with high RTP</strong>, <strong>blackjack basic strategy charts</strong>, <strong>roulette betting systems</strong>, and <strong>live dealer games</strong>. Learn from Canadian gambling professionals with <strong>proven strategies</strong> and improve your winning potential at licensed Canadian casinos.
            </p>
          </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {gameGuides.map((guide, index) => (
               <div key={index} className="modern-card shadow-modern-hover text-center group">
                 <div className="p-6">
                   <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                     <Zap className="w-10 h-10 text-white" />
                   </div>
                   <h3 className="text-xl font-semibold text-slate-900 mb-4">{guide.title}</h3>
                   <p className="text-slate-600 mb-6">{guide.description}</p>
                   <button className="w-full border-2 border-orange-500 text-orange-600 font-semibold py-2 px-4 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300">
                     <BookOpen className="w-4 h-4 mr-2 inline" />
                     Read Guide
                   </button>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </section>

       {/* Latest Updates Section */}
       <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-modern">
               📰 Latest Casino News
             </h2>
             <p className="text-xl text-slate-600">
               Stay updated with the latest Canadian casino industry news
             </p>
           </div>

          {/* SEO content for latest updates */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-slate-600 leading-relaxed">
              Stay informed with the latest <strong>Canadian casino news</strong>, <strong>new casino launches</strong>, <strong>exclusive bonus updates</strong>, and <strong>industry regulations</strong>. Our casino blog covers everything from <strong>Ontario iGaming market</strong> updates to <strong>responsible gambling</strong> practices and <strong>payment method changes</strong>.
            </p>
          </div>

           <div className="grid md:grid-cols-3 gap-8">
             {latestUpdates.map((update, index) => (
               <div key={index} className="modern-card shadow-modern-hover group">
                 <div className="p-6">
                   <div className="flex items-center mb-4">
                     <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                       <Calendar className="w-6 h-6 text-white" />
                     </div>
                     <div>
                       <div className="text-sm text-slate-500">{update.date}</div>
                       <div className="text-sm font-semibold text-blue-600">{update.category}</div>
                     </div>
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                     {update.title}
                   </h3>
                   <p className="text-slate-600 mb-4">{update.excerpt}</p>
                   <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300">
                     <ArrowRight className="w-4 h-4 mr-1 inline" />
                     Read More
                   </button>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </section>

      {/* SEO Footer Content */}
      <section className="py-16 bg-gradient-to-br from-slate-100 to-blue-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Canada's Most Trusted Online Casino Guide Since 2019</h2>
            <div className="prose prose-lg max-w-4xl mx-auto text-slate-600">
              <p className="mb-4">
                <strong>TopCasinoWagers</strong> is Canada's leading authority on <strong>online casino reviews</strong> and <strong>gambling guides</strong>. We provide comprehensive analysis of <strong>Canadian-friendly casinos</strong>, covering everything from <strong>welcome bonuses up to CA$9,000</strong> and <strong>1000+ game selection</strong> to <strong>1-3 day payout speeds</strong> and <strong>24/7 customer support</strong>. Our expert team has over 50 years of combined experience in the Canadian gambling industry, ensuring you get <strong>trusted recommendations</strong> for <strong>licensed casinos</strong> with <strong>CAD support</strong> and <strong>Interac e-Transfer</strong>.
              </p>
              <p className="mb-4">
                All our recommended casinos are <strong>licensed by reputable authorities</strong> including Malta Gaming Authority, UK Gambling Commission, and Curacao Gaming Authority. We prioritize <strong>player safety</strong>, <strong>fair gaming</strong>, and <strong>responsible gambling</strong> practices. Whether you're looking for <strong>high RTP slots</strong>, <strong>live dealer games</strong>, or <strong>progressive jackpots</strong>, our reviews help you find the perfect casino for your gaming preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* Trust & Security Section */}
       <section className="py-20 bg-gradient-to-br from-green-900 to-emerald-900 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <div className="text-center mb-12">
             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-modern">
               🛡️ Trust & Security
             </h2>
             <p className="text-xl text-slate-300 mb-8">
               Your safety is our top priority. We only recommend licensed, regulated casinos with proven track records.
             </p>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             <div className="text-center">
               <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center">
                 <Shield className="w-10 h-10 text-white" />
               </div>
               <h3 className="text-xl font-semibold mb-4">Licensed Operators</h3>
               <p className="text-slate-300">Malta Gaming Authority, UK Gambling Commission, and Curacao licensed casinos with regular audits</p>
             </div>

             <div className="text-center">
               <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center">
                 <Lock className="w-10 h-10 text-white" />
               </div>
               <h3 className="text-xl font-semibold mb-4">SSL Encryption</h3>
               <p className="text-slate-300">256-bit SSL encryption protects all personal and financial data with bank-level security</p>
             </div>

             <div className="text-center">
               <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center">
                 <Award className="w-10 h-10 text-white" />
               </div>
               <h3 className="text-xl font-semibold mb-4">Fair Play Certified</h3>
               <p className="text-slate-300">Regular audits by eCOGRA, iTech Labs, and other independent testing agencies ensure fair gaming</p>
             </div>

             <div className="text-center">
               <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center">
                 <Users className="w-10 h-10 text-white" />
               </div>
               <h3 className="text-xl font-semibold mb-4">Responsible Gaming</h3>
               <p className="text-slate-300">Comprehensive responsible gambling tools, self-exclusion options, and 24/7 support resources</p>
             </div>
           </div>
         </div>
       </section>

       {/* Final CTA Section */}
       <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <div className="text-center">
             <h2 className="text-4xl md:text-5xl font-bold mb-8 text-modern">
               Ready to Play?
             </h2>
             <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
               Join over 50,000 Canadian players who trust our expert recommendations and exclusive bonuses
             </p>
             <div className="flex flex-wrap justify-center gap-4">
               <button className="btn-gold rounded-2xl py-4 px-8 font-bold shadow-modern-hover transform hover:scale-105 transition-all duration-300">
                 <Play className="w-5 h-5 mr-2 inline" />
                 Claim CA$9,000 Bonus
               </button>
               <button className="glass-dark border-2 border-white/20 text-white font-bold py-4 px-8 rounded-2xl hover:bg-white hover:text-slate-900 transition-all duration-300">
                 <Trophy className="w-5 h-5 mr-2 inline" />
                 View Top 10 Casinos
               </button>
             </div>
           </div>
         </div>
       </section>
     </div>
   );
 };

 export default MainContent;