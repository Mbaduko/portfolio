export default function BioSection() {
  return (
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
  );
}
