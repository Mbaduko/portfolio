import SectionWrapper from '@/components/ui/SectionWrapper';

export default function HeroBioSection() {
  const expertise = [
    { 
      title: "Backend Development", 
      description: "Scalable APIs & Microservices", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      title: "Database Management", 
      description: "SQL & NoSQL Solutions", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      title: "DevOps & Automation", 
      description: "CI/CD & Infrastructure", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zm14 0a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      title: "System Administration", 
      description: "Linux & Cloud Platforms", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <SectionWrapper id="home" padding="lg" showBackground>
      {/* Hero Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground via-primary-button to-accent-text bg-clip-text text-transparent">
          Let's Digitize Our World!!
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-button to-accent-text mx-auto rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Professional Journey */}
        <div className="bg-gradient-to-br from-secondary-bg/30 to-secondary-bg/10 rounded-2xl p-6 border border-secondary-bg/20">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
            <svg className="w-6 h-6 mr-3 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            My Journey
          </h3>
          <p className="text-foreground leading-relaxed mb-4">
            From crafting my first <strong className="text-primary-button">"Hello World"</strong> to architecting 
            enterprise solutions, my journey has been driven by an insatiable curiosity for technology. 
            What started as simple scripts evolved into building robust APIs, managing complex databases, 
            and orchestrating cloud infrastructure.
          </p>
          <p className="text-accent-text leading-relaxed text-sm mb-6">
            Today, I blend creativity with technical precision to transform ideas into digital realities, 
            ensuring every line of code tells a story of innovation and excellence.
          </p>
          
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-primary-button text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-button/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span>View My Work</span>
              </div>
            </button>
            <button className="bg-primary-button/20 border border-primary-button/30 text-primary-button px-6 py-3 rounded-lg font-semibold hover:bg-primary-button/30 hover:border-primary-button/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>Get In Touch</span>
              </div>
            </button>
          </div>
        </div>

        {/* Core Expertise */}
        <div className="space-y-3">
          {expertise.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-secondary-bg/30 to-secondary-bg/10 rounded-xl p-4 border border-secondary-bg/20 hover:border-primary-button/30 transition-colors duration-300">
              <div className="flex items-start space-x-3">
                <div className="bg-primary-button/20 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">{item.icon}</span>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-accent-text text-xs">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Facts */}
      <div className="bg-gradient-to-r from-primary-button/10 to-accent-text/10 rounded-2xl p-6 border border-primary-button/20">
        <h3 className="text-lg font-bold text-foreground mb-4 text-center">Quick Facts</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <svg className="w-6 h-6 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-xl font-bold text-primary-button mb-1">3+</div>
            <div className="text-accent-text text-xs font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <svg className="w-6 h-6 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-xl font-bold text-primary-button mb-1">25+</div>
            <div className="text-accent-text text-xs font-medium">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <svg className="w-6 h-6 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-xl font-bold text-primary-button mb-1">15+</div>
            <div className="text-accent-text text-xs font-medium">Technologies Mastered</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <svg className="w-6 h-6 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div className="text-xl font-bold text-primary-button mb-1">100%</div>
            <div className="text-accent-text text-xs font-medium">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
