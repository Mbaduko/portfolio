import { Certificate, CertificateCategory } from '@/types/portfolio';

export const CERTIFICATES: Certificate[] = [
  // Professional Certifications
  {
    id: 'aws-saa',
    title: 'AWS Solutions Architect Associate',
    issuer: 'Amazon Web Services',
    date: '2024',
    category: 'professional',
    type: 'certification',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    description: 'Comprehensive knowledge of AWS services, architecture best practices, and cloud solutions design.',
    skills: ['AWS', 'Cloud Architecture', 'Solutions Design', 'DevOps'],
    credentialId: 'AWS-SAA-2024-001',
    status: 'Active',
    validUntil: '2027',
    priority: 'high'
  },
  {
    id: 'kubernetes',
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    date: '2024',
    category: 'professional',
    type: 'certification',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    description: 'Expert-level knowledge of Kubernetes cluster administration, troubleshooting, and best practices.',
    skills: ['Kubernetes', 'Container Orchestration', 'DevOps', 'Cluster Management'],
    credentialId: 'CKA-2024-002',
    status: 'Active',
    validUntil: '2027',
    priority: 'high'
  },
  {
    id: 'docker',
    title: 'Docker Certified Associate',
    issuer: 'Docker Inc.',
    date: '2023',
    category: 'professional',
    type: 'certification',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    description: 'Proficiency in containerization, Docker ecosystem, and container orchestration fundamentals.',
    skills: ['Docker', 'Containerization', 'DevOps', 'CI/CD'],
    credentialId: 'DCA-2023-003',
    status: 'Active',
    validUntil: '2026',
    priority: 'high'
  },
  {
    id: 'react',
    title: 'React Developer Certification',
    issuer: 'Meta',
    date: '2023',
    category: 'professional',
    type: 'certification',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    description: 'Advanced React development skills including hooks, context, and modern React patterns.',
    skills: ['React', 'JavaScript', 'Frontend Development', 'UI/UX'],
    credentialId: 'META-REACT-2023-004',
    status: 'Active',
    validUntil: '2026',
    priority: 'medium'
  },
  {
    id: 'nodejs',
    title: 'Node.js Developer Certification',
    issuer: 'OpenJS Foundation',
    date: '2023',
    category: 'professional',
    type: 'certification',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    description: 'Server-side JavaScript development, API design, and backend architecture expertise.',
    skills: ['Node.js', 'JavaScript', 'Backend Development', 'API Design'],
    credentialId: 'NODEJS-2023-005',
    status: 'Active',
    validUntil: '2026',
    priority: 'medium'
  },
  {
    id: 'typescript',
    title: 'TypeScript Developer Certification',
    issuer: 'Microsoft',
    date: '2023',
    category: 'professional',
    type: 'certification',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    description: 'Advanced TypeScript development with type safety, interfaces, and modern JavaScript features.',
    skills: ['TypeScript', 'JavaScript', 'Type Safety', 'Frontend Development'],
    credentialId: 'MS-TS-2023-006',
    status: 'Active',
    validUntil: '2026',
    priority: 'medium'
  },

  // Hackathons & Competitions
  {
    id: 'hackathon-2024',
    title: '1st Place - AI Innovation Hackathon',
    issuer: 'TechCrunch Disrupt',
    date: '2024',
    category: 'competition',
    type: 'hackathon',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    description: 'Won first place for developing an AI-powered healthcare solution using machine learning and cloud technologies.',
    skills: ['AI/ML', 'Python', 'Healthcare Tech', 'Innovation'],
    credentialId: 'TC-HACK-2024-001',
    status: 'Achievement',
    validUntil: 'N/A',
    priority: 'high'
  },
  {
    id: 'coding-competition',
    title: 'Top 10 - Global Coding Competition',
    issuer: 'Google Code Jam',
    date: '2023',
    category: 'competition',
    type: 'coding',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
    description: 'Reached the top 10 in Google Code Jam, demonstrating exceptional problem-solving and algorithmic skills.',
    skills: ['Algorithms', 'Problem Solving', 'Competitive Programming', 'Data Structures'],
    credentialId: 'GCJ-2023-TOP10',
    status: 'Achievement',
    validUntil: 'N/A',
    priority: 'high'
  },

  // Academic Achievements
  {
    id: 'academic-excellence',
    title: 'Dean\'s List - Academic Excellence',
    issuer: 'University of Rwanda',
    date: '2023',
    category: 'academic',
    type: 'achievement',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graduation-cap/graduation-cap-original.svg',
    description: 'Consistently maintained a GPA of 3.8+ and recognized for outstanding academic performance.',
    skills: ['Academic Excellence', 'Leadership', 'Research', 'Innovation'],
    credentialId: 'UR-DEANS-2023',
    status: 'Achievement',
    validUntil: 'N/A',
    priority: 'medium'
  },
  {
    id: 'research-paper',
    title: 'Published Research Paper',
    issuer: 'IEEE International Conference',
    date: '2023',
    category: 'academic',
    type: 'publication',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/research/research-original.svg',
    description: 'Published research on "Machine Learning Applications in Software Development" at IEEE conference.',
    skills: ['Research', 'Machine Learning', 'Academic Writing', 'Innovation'],
    credentialId: 'IEEE-2023-PUB',
    status: 'Published',
    validUntil: 'N/A',
    priority: 'high'
  },

  // Skills & Specializations
  {
    id: 'fullstack-specialist',
    title: 'Full-Stack Development Specialist',
    issuer: 'Udemy',
    date: '2023',
    category: 'skills',
    type: 'specialization',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    description: 'Comprehensive full-stack development skills covering frontend, backend, and database technologies.',
    skills: ['Full-Stack', 'JavaScript', 'Database Design', 'API Development'],
    credentialId: 'UDEMY-FULLSTACK-2023',
    status: 'Completed',
    validUntil: 'N/A',
    priority: 'medium'
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineering Certification',
    issuer: 'Linux Foundation',
    date: '2023',
    category: 'skills',
    type: 'specialization',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    description: 'Advanced DevOps practices including CI/CD, infrastructure as code, and cloud-native development.',
    skills: ['DevOps', 'CI/CD', 'Infrastructure', 'Automation'],
    credentialId: 'LF-DEVOPS-2023',
    status: 'Active',
    validUntil: '2026',
    priority: 'high'
  },

  // Appreciations & Recognition
  {
    id: 'employee-of-year',
    title: 'Employee of the Year',
    issuer: 'TechCorp Solutions',
    date: '2023',
    category: 'recognition',
    type: 'appreciation',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trophy/trophy-original.svg',
    description: 'Recognized for exceptional performance, innovation, and contribution to company success.',
    skills: ['Leadership', 'Innovation', 'Team Collaboration', 'Problem Solving'],
    credentialId: 'TCS-EOTY-2023',
    status: 'Recognition',
    validUntil: 'N/A',
    priority: 'high'
  },
  {
    id: 'mentorship-award',
    title: 'Outstanding Mentor Award',
    issuer: 'Developer Community',
    date: '2023',
    category: 'recognition',
    type: 'appreciation',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/community/community-original.svg',
    description: 'Recognized for mentoring junior developers and contributing to the growth of the tech community.',
    skills: ['Mentorship', 'Leadership', 'Community Building', 'Knowledge Sharing'],
    credentialId: 'DC-MENTOR-2023',
    status: 'Recognition',
    validUntil: 'N/A',
    priority: 'medium'
  }
];

export const CERTIFICATE_CATEGORIES: CertificateCategory[] = [
  { id: 'all', name: 'All', count: CERTIFICATES.length },
  { id: 'professional', name: 'Professional', count: CERTIFICATES.filter(c => c.category === 'professional').length },
  { id: 'competition', name: 'Competitions', count: CERTIFICATES.filter(c => c.category === 'competition').length },
  { id: 'academic', name: 'Academic', count: CERTIFICATES.filter(c => c.category === 'academic').length },
  { id: 'skills', name: 'Skills', count: CERTIFICATES.filter(c => c.category === 'skills').length },
  { id: 'recognition', name: 'Recognition', count: CERTIFICATES.filter(c => c.category === 'recognition').length }
];

// Helper functions
export const getCertificateById = (id: string): Certificate | undefined => {
  return CERTIFICATES.find(certificate => certificate.id === id);
};

export const getCertificatesByCategory = (category: string): Certificate[] => {
  if (category === 'all') return CERTIFICATES;
  return CERTIFICATES.filter(certificate => certificate.category === category);
};

export const getCertificatesByPriority = (priority: 'high' | 'medium' | 'low'): Certificate[] => {
  return CERTIFICATES.filter(certificate => certificate.priority === priority);
};

export const getActiveCertificates = (): Certificate[] => {
  return CERTIFICATES.filter(certificate => certificate.status === 'Active');
};

export default CERTIFICATES;