export default function TechnologiesSection() {
  return (
    <div id="technologies" className="mb-12">
      <div className="flex items-center space-x-4 mb-6">
        <button className="bg-secondary-bg text-accent-text px-4 py-2 rounded-lg text-sm font-medium">
          Technologies
        </button>
      </div>
      
      <div className="pl-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Frontend Technologies */}
          <div className="bg-secondary-bg/50 p-6 rounded-lg border border-secondary-bg/20">
            <h3 className="text-lg font-semibold text-foreground mb-4">Frontend</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-accent-text">React</span>
                <div className="w-24 bg-secondary-bg rounded-full h-2">
                  <div className="bg-primary-button h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-accent-text">Next.js</span>
                <div className="w-24 bg-secondary-bg rounded-full h-2">
                  <div className="bg-primary-button h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-accent-text">TypeScript</span>
                <div className="w-24 bg-secondary-bg rounded-full h-2">
                  <div className="bg-primary-button h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-accent-text">Tailwind CSS</span>
                <div className="w-24 bg-secondary-bg rounded-full h-2">
                  <div className="bg-primary-button h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Backend Technologies */}
          <div className="bg-secondary-bg/50 p-6 rounded-lg border border-secondary-bg/20">
            <h3 className="text-lg font-semibold text-foreground mb-4">Backend</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-accent-text">Node.js</span>
                <div className="w-24 bg-secondary-bg rounded-full h-2">
                  <div className="bg-primary-button h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-accent-text">Express.js</span>
                <div className="w-24 bg-secondary-bg rounded-full h-2">
                  <div className="bg-primary-button h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-accent-text">Python</span>
                <div className="w-24 bg-secondary-bg rounded-full h-2">
                  <div className="bg-primary-button h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-accent-text">Django</span>
                <div className="w-24 bg-secondary-bg rounded-full h-2">
                  <div className="bg-primary-button h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* DevOps & Tools */}
          <div className="bg-secondary-bg/50 p-6 rounded-lg border border-secondary-bg/20">
            <h3 className="text-lg font-semibold text-foreground mb-4">DevOps & Tools</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-accent-text">Docker</span>
                <div className="w-24 bg-secondary-bg rounded-full h-2">
                  <div className="bg-primary-button h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-accent-text">AWS</span>
                <div className="w-24 bg-secondary-bg rounded-full h-2">
                  <div className="bg-primary-button h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-accent-text">Git</span>
                <div className="w-24 bg-secondary-bg rounded-full h-2">
                  <div className="bg-primary-button h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-accent-text">Linux</span>
                <div className="w-24 bg-secondary-bg rounded-full h-2">
                  <div className="bg-primary-button h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
