import { ExternalLink, Github, Smartphone, Globe, Database, Code } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const projects = [
    {
      title: 'Trackly Mobile App',
      description: 'A comprehensive income and expense management application with intelligent budget categorization, financial analytics, and spending insights.',
      tech: ['Kotlin', 'Android', 'SQLite', 'Material Design'],
      category: 'Mobile App',
      icon: <Smartphone className="h-6 w-6" />,
      image: '/placeholder.svg',
      features: ['Budget Tracking', 'Expense Categories', 'Financial Reports', 'Goal Setting'],
      status: 'Completed',
    },
    {
      title: 'Agro-Farming Platform',
      description: 'A digital marketplace connecting farmers directly with buyers, featuring product listings, communication tools, and secure transactions.',
      tech: ['Kotlin', 'Android', 'Firebase', 'Google Maps API'],
      category: 'Mobile App',
      icon: <Smartphone className="h-6 w-6" />,
      image: '/placeholder.svg',
      features: ['Farmer-Buyer Connect', 'Product Catalog', 'Location Services', 'Real-time Chat'],
      status: 'In Progress',
    },
    {
      title: 'Aisle Navigation System',
      description: 'Full-stack web application for supermarket product location and personalized recommendations with advanced search capabilities.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      category: 'Web App',
      icon: <Globe className="h-6 w-6" />,
      image: '/placeholder.svg',
      features: ['Product Search', 'Store Navigation', 'Recommendations', 'Admin Dashboard'],
      status: 'Completed',
    },
    {
      title: 'Hotel Booking Website',
      description: 'Responsive hotel booking platform with beautiful UI, booking forms, image galleries, and room management system.',
      tech: ['React.js', 'Tailwind CSS', 'Node.js', 'MySQL'],
      category: 'Web App',
      icon: <Globe className="h-6 w-6" />,
      image: '/placeholder.svg',
      features: ['Room Booking', 'Gallery Showcase', 'Responsive Design', 'Payment Integration'],
      status: 'Completed',
    },
    {
      title: 'Event & Ticket Management',
      description: 'Comprehensive online event management system with role-based access control, real-time ticketing, and analytics dashboard.',
      tech: ['C#', 'ASP.NET MVC', 'SQL Server', 'Bootstrap'],
      category: 'Web App',
      icon: <Database className="h-6 w-6" />,
      image: '/placeholder.svg',
      features: ['Event Management', 'Ticket Sales', 'Role-based Access', 'Analytics'],
      status: 'In Progress',
    },
    {
      title: 'Personal Portfolio',
      description: 'Custom-built responsive portfolio website showcasing projects and skills, developed from scratch with modern web technologies.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      category: 'Web App',
      icon: <Code className="h-6 w-6" />,
      image: '/placeholder.svg',
      features: ['Responsive Design', 'Modern UI', 'Performance Optimized', 'SEO Friendly'],
      status: 'Completed',
    },
  ];

  const getStatusColor = (status: string) => {
    return status === 'Completed' ? 'bg-green-500/10 text-green-500' : 'bg-blue-500/10 text-blue-500';
  };

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">PORTFOLIO</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development, 
            mobile applications, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary-glow/10 flex items-center justify-center">
                <div className="text-primary/60">
                  {project.icon}
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-primary">{project.icon}</div>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {project.features.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.features.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-card to-card/50 rounded-2xl p-8 border">
            <Github className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">More Projects on GitHub</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Explore my complete portfolio of projects, contributions, and open-source work.
            </p>
            <Button variant="outline" asChild>
              <a href="https://github.com/kasun" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Visit GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;