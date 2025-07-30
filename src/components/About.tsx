import { GraduationCap, Users, Code, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React.js', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'ASP.NET Core', 'RESTful APIs'] },
    { category: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'C#', 'Java', 'Kotlin', 'SQL'] },
    { category: 'Databases', items: ['MongoDB', 'MySQL', 'Microsoft SQL Server'] },
    { category: 'Mobile', items: ['Android Development', 'Kotlin', 'React Native'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Android Studio', 'Figma', 'Postman'] },
  ];

  const education = [
    {
      title: 'BSc (Hons) in Information Technology',
      subtitle: 'Specialization in Software Engineering',
      institution: 'Sri Lanka Institute of Information Technology',
      period: '2021 - 2025',
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      title: 'Diploma in DICT',
      institution: 'ICBT Kandy Campus',
      period: '2020 - 2021',
      icon: <Award className="h-6 w-6" />,
    },
  ];

  const experience = [
    {
      title: 'Leadership Experience',
      subtitle: 'AIESEC Member',
      description: 'Active involvement in AIESEC, developing leadership skills and organizing international exchange programs.',
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: 'University Activities',
      subtitle: 'Club Involvement',
      description: 'Participated in various university clubs, enhancing teamwork and collaborative skills.',
      icon: <Code className="h-6 w-6" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">HELLO</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">I'M KASUN SANJEEWA</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Passionate Full Stack Developer dedicated to crafting exceptional digital experiences. 
              With a keen eye for detail and a user-centric approach, I transform ideas into 
              intuitive and visually stunning applications using modern web technologies.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Currently pursuing my BSc (Hons) in Information Technology with specialization in Software Engineering,
              I combine academic knowledge with practical experience to deliver high-quality solutions.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            {education.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-primary">{item.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                    {item.subtitle && (
                      <p className="text-primary text-sm mb-2">{item.subtitle}</p>
                    )}
                    <p className="text-muted-foreground mb-1">{item.institution}</p>
                    <p className="text-muted-foreground text-sm">{item.period}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Experience & Leadership</h3>
            {experience.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-primary">{item.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-primary text-sm mb-2">{item.subtitle}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12">My Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-4 text-primary">{skillGroup.category}</h4>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom section with process */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-12">
            <span className="text-gradient">KETCH</span> — DESIGN — DEVELOPMENT
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From initial concept sketching to final deployment, I follow a comprehensive development process 
            that ensures every project meets the highest standards of quality and user experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;