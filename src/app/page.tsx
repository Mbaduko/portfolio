import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-foreground mb-6">
          Let's Digitize Our World!!
        </h1>
      </div>

      {/* Bio Section */}
      <div className="mb-12">
        <div className="flex items-center space-x-4 mb-6">
          <button className="bg-secondary-bg text-accent-text px-4 py-2 rounded-lg text-sm font-medium">
            Bio
          </button>
        </div>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-foreground leading-relaxed">
            I'm a <strong>Full Stack Developer</strong> with over 3 years of experience, 
            specializing in backend development, database management, system administration, 
            and DevOps. I build and maintain scalable APIs, manage relational and NoSQL 
            databases, and automate infrastructure using modern DevOps practices. My expertise 
            spans designing backend architectures, configuring servers, deploying containerized 
            applications, and maintaining CI/CD pipelines — ensuring high performance, security, 
            and reliability across every layer of the stack.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-12">
        <div className="flex items-center space-x-4 mb-6">
          <button className="bg-secondary-bg text-accent-text px-4 py-2 rounded-lg text-sm font-medium">
            Skills
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Web Development Card */}
          <div className="bg-secondary-bg/50 p-6 rounded-lg border border-secondary-bg/20">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-button/20 rounded-lg mb-4">
              <svg className="w-6 h-6 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Web Development</h3>
            <p className="text-accent-text text-sm">
              Experienced in building responsive, user-friendly web applications using modern technologies.
            </p>
          </div>

          {/* Database Management Card */}
          <div className="bg-secondary-bg/50 p-6 rounded-lg border border-secondary-bg/20">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-button/20 rounded-lg mb-4">
              <svg className="w-6 h-6 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Database Management</h3>
            <p className="text-accent-text text-sm">
              Designing and maintaining databases to ensure data integrity and accessibility.
            </p>
          </div>

          {/* System Administration Card */}
          <div className="bg-secondary-bg/50 p-6 rounded-lg border border-secondary-bg/20">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-button/20 rounded-lg mb-4">
              <svg className="w-6 h-6 text-primary-button" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">System Administration</h3>
            <p className="text-accent-text text-sm">
              Experienced in Linux server setup, automation, and system maintenance.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
