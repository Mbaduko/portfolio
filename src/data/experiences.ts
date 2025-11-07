import { Experience } from '@/types/portfolio';
import { getTechnologiesByIds } from './technologies';

export const EXPERIENCES: Experience[] = [
  {
    id: 'techcorp-senior-fullstack',
    company: 'TechCorp Solutions',
    companyLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
    position: 'Senior Full Stack Developer',
    location: 'Kigali, Rwanda',
    duration: 'Jan 2023 - Present',
    startDate: '2023-01-01',
    isCurrentRole: true,
    shortDescription: 'Leading development of enterprise web applications using React, Node.js, and PostgreSQL.',
    fullDescription: 'Leading development of enterprise web applications using React, Node.js, and PostgreSQL. Mentoring junior developers and implementing CI/CD pipelines.',
    technologies: getTechnologiesByIds(['react', 'nodejs', 'postgresql', 'docker', 'aws']),
    achievements: [
      'Reduced application load time by 40% through optimization',
      'Led a team of 5 developers on a major client project',
      'Implemented automated testing increasing coverage to 85%'
    ]
  },
  {
    id: 'digital-innovations-backend',
    company: 'Digital Innovations Ltd',
    companyLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg',
    position: 'Backend Developer',
    location: 'Remote',
    duration: 'Mar 2022 - Dec 2022',
    startDate: '2022-03-01',
    endDate: '2022-12-31',
    isCurrentRole: false,
    shortDescription: 'Developed RESTful APIs and microservices using Python, Django, and MongoDB.',
    fullDescription: 'Developed RESTful APIs and microservices using Python, Django, and MongoDB. Collaborated with frontend team to ensure seamless integration.',
    technologies: getTechnologiesByIds(['python', 'django', 'mongodb', 'redis', 'docker']),
    achievements: [
      'Built 15+ REST APIs serving 10,000+ daily requests',
      'Implemented caching strategy reducing database queries by 60%',
      'Designed database schema for a new e-commerce platform'
    ]
  },
  {
    id: 'startuhub-junior',
    company: 'StartupHub',
    companyLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg',
    position: 'Junior Developer',
    location: 'Kigali, Rwanda',
    duration: 'Jun 2021 - Feb 2022',
    startDate: '2021-06-01',
    endDate: '2022-02-28',
    isCurrentRole: false,
    shortDescription: 'Contributed to various web development projects using modern JavaScript frameworks.',
    fullDescription: 'Contributed to various web development projects using modern JavaScript frameworks. Participated in code reviews and agile development processes.',
    technologies: getTechnologiesByIds(['javascript', 'vue', 'express', 'mysql', 'git']),
    achievements: [
      'Developed 3 client websites from concept to deployment',
      'Improved code quality through peer code reviews',
      'Learned modern development practices and tools'
    ]
  },
  {
    id: 'freelance-developer',
    company: 'Freelance Developer',
    companyLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazon/amazon-original.svg',
    position: 'Web Developer',
    location: 'Remote',
    duration: 'Jan 2021 - May 2021',
    startDate: '2021-01-01',
    endDate: '2021-05-31',
    isCurrentRole: false,
    shortDescription: 'Worked with various clients to build custom websites and web applications.',
    fullDescription: 'Worked with various clients to build custom websites and web applications. Managed project timelines and client communications.',
    technologies: getTechnologiesByIds(['html', 'css', 'javascript', 'php', 'wordpress']),
    achievements: [
      'Completed 8 client projects successfully',
      'Built responsive websites for small businesses',
      'Developed custom WordPress themes and plugins'
    ]
  }
];

export const getExperienceById = (id: string): Experience | undefined => {
  return EXPERIENCES.find(exp => exp.id === id);
};

export const getCurrentExperience = (): Experience | undefined => {
  return EXPERIENCES.find(exp => exp.isCurrentRole);
};

export const getExperiencesByCompany = (company: string): Experience[] => {
  return EXPERIENCES.filter(exp => exp.company.toLowerCase().includes(company.toLowerCase()));
};

export default EXPERIENCES;
