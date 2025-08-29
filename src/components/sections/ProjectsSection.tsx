export default function ProjectsSection() {
  return (
    <div id="projects" className="mb-12">
      <div className="flex items-center space-x-4 mb-6">
        <button className="bg-secondary-bg text-accent-text px-4 py-2 rounded-lg text-sm font-medium">
          Projects
        </button>
      </div>
      
      <div className="pl-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Card 1 */}
          <div className="bg-secondary-bg/50 p-6 rounded-lg border border-secondary-bg/20">
            <h3 className="text-lg font-semibold text-foreground mb-2">E-Commerce Platform</h3>
            <p className="text-accent-text text-sm mb-4">
              A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary-button/20 text-primary-button px-2 py-1 rounded text-xs">Next.js</span>
              <span className="bg-primary-button/20 text-primary-button px-2 py-1 rounded text-xs">Node.js</span>
              <span className="bg-primary-button/20 text-primary-button px-2 py-1 rounded text-xs">MongoDB</span>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-secondary-bg/50 p-6 rounded-lg border border-secondary-bg/20">
            <h3 className="text-lg font-semibold text-foreground mb-2">Task Management App</h3>
            <p className="text-accent-text text-sm mb-4">
              A collaborative task management application with real-time updates.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary-button/20 text-primary-button px-2 py-1 rounded text-xs">React</span>
              <span className="bg-primary-button/20 text-primary-button px-2 py-1 rounded text-xs">Express</span>
              <span className="bg-primary-button/20 text-primary-button px-2 py-1 rounded text-xs">Socket.io</span>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-secondary-bg/50 p-6 rounded-lg border border-secondary-bg/20">
            <h3 className="text-lg font-semibold text-foreground mb-2">API Gateway</h3>
            <p className="text-accent-text text-sm mb-4">
              A microservices API gateway with authentication and rate limiting.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary-button/20 text-primary-button px-2 py-1 rounded text-xs">Docker</span>
              <span className="bg-primary-button/20 text-primary-button px-2 py-1 rounded text-xs">Kubernetes</span>
              <span className="bg-primary-button/20 text-primary-button px-2 py-1 rounded text-xs">Redis</span>
            </div>
          </div>

          {/* Project Card 4 */}
          <div className="bg-secondary-bg/50 p-6 rounded-lg border border-secondary-bg/20">
            <h3 className="text-lg font-semibold text-foreground mb-2">DevOps Pipeline</h3>
            <p className="text-accent-text text-sm mb-4">
              Automated CI/CD pipeline for continuous deployment and monitoring.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary-button/20 text-primary-button px-2 py-1 rounded text-xs">Jenkins</span>
              <span className="bg-primary-button/20 text-primary-button px-2 py-1 rounded text-xs">AWS</span>
              <span className="bg-primary-button/20 text-primary-button px-2 py-1 rounded text-xs">Terraform</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
