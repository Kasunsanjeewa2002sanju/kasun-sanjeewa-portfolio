import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import kasunProfile from '@/assets/kasun-profile-new.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="geometric-shape geometric-orange w-32 h-32 top-20 right-20 transform rotate-45 animate-float" />
        <div className="geometric-shape geometric-orange w-20 h-20 bottom-32 left-16 transform rotate-12" />
        <div className="geometric-shape geometric-orange w-16 h-16 top-1/2 left-8 transform -rotate-45 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg font-medium">HELLO</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                I'M A{" "}
                <span className="text-gradient block">
                  FULL STACK
                </span>{" "}
                DEVELOPER
              </h1>
            </div>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
              Passionate Full Stack Developer dedicated to crafting exceptional digital experiences. 
              With a keen eye for detail and a user-centric approach, I transform ideas into 
              intuitive and visually stunning applications.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3+</div>
                <div className="text-muted-foreground uppercase text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground uppercase text-sm">Completed Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground uppercase text-sm">Happy Clients</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:kasunsanjeewa2002@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>kasunsanjeewa2002@gmail.com</span>
              </a>
              <a
                href="tel:+94778063196"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+94 778063196</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
            <Button 
                variant="hero"
                size="lg" 
                onClick={scrollToAbout}
              >
                Get Started
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#portfolio">View Portfolio</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/kasun" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com/in/kasun" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src={kasunProfile}
                  alt="Kasun Sanjeewa Senavirathna"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-full px-6 py-3 shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-glow"></div>
                  <span className="text-sm font-medium">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;