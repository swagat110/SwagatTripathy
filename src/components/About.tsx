import { Briefcase, GraduationCap, Award, Zap, Bot, Shield, Server, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const About = () => {
  const highlights = [
    { value: "~15", label: "Years Experience" },
    { value: "65%", label: "Faster Deployments" },
    { value: "Millions", label: "Customers Served" },
    { value: "$200K+", label: "Annual Savings" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-6 max-w-3xl mx-auto">
            Generative AI–focused Software Engineer with ~15 years of industry experience,
            building production-grade AI systems and scalable AWS infrastructure.
            Passionate about automation and eliminating operational toil.
          </p>

          {/* Stats ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {highlights.map((stat, i) => (
              <div key={i} className="text-center p-4">
                <span className="block text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground mt-1">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Cards row */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 hover:shadow-medium transition-smooth group">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Briefcase className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-muted-foreground text-sm mb-3">
                System Development Engineer II at Amazon, currently owning the platform that publishes
                Security Rules and Controls for AWS Security Hub CSPM.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="outline" className="text-xs">Amazon</Badge>
                <Badge variant="outline" className="text-xs">Birlasoft / DTCC</Badge>
                <Badge variant="outline" className="text-xs">Infosys / Amex</Badge>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-medium transition-smooth group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Impact</h3>
              <ul className="text-muted-foreground text-sm space-y-1.5">
                <li className="flex items-start gap-2"><Zap size={14} className="text-accent mt-0.5 flex-shrink-0" /> Deployment time reduced by <strong className="text-foreground">65%</strong></li>
                <li className="flex items-start gap-2"><Zap size={14} className="text-accent mt-0.5 flex-shrink-0" /> Incident detection cut by <strong className="text-foreground">50%</strong></li>
                <li className="flex items-start gap-2"><Zap size={14} className="text-accent mt-0.5 flex-shrink-0" /> Production velocity up <strong className="text-foreground">30%</strong></li>
                <li className="flex items-start gap-2"><Zap size={14} className="text-accent mt-0.5 flex-shrink-0" /> <strong className="text-foreground">$200K+</strong> annual cost savings</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-medium transition-smooth group">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expertise</h3>
              <div className="flex flex-wrap gap-1.5">
                {["GenAI & RAG", "MCP Servers", "AWS Bedrock", "SageMaker", "CDK", "Java", "Python", "CloudWatch", "Incident Response"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Detailed narrative */}
          <Card className="p-8 md:p-10 bg-gradient-to-br from-card to-muted/20 border-l-4 border-l-accent">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Shield className="text-accent" size={20} />
              What I Do at Amazon
            </h3>
            <p className="text-muted-foreground mb-5 leading-relaxed">
              I own the platform that publishes Security Rules and Controls for{" "}
              <strong className="text-foreground">AWS Security Hub CSPM</strong>, making them available
              across millions of customer accounts. My current focus areas span increasing time-to-prod
              velocity, building a Control Testing platform, automating periodic rule audits, and
              providing LLM/agentic AI tooling to Security Engineers.
            </p>

            <Separator className="my-5" />

            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Key Contributions</h4>
            <ul className="space-y-3 mb-6">
              {[
                {
                  icon: Bot,
                  text: "Designed and deployed a GenAI-powered RAG system using AWS Bedrock — automated pipeline crawls SDKs, codebases, and CloudFormation schemas for LLM-driven security control generation.",
                },
                {
                  icon: Server,
                  text: "Built MCP servers enabling seamless AI agent ↔ RAG integration, plus a GenAI Audit system that reads new AWS service launch tickets and alerts on impact to existing controls.",
                },
                {
                  icon: Zap,
                  text: "Optimized the controls deployment pipeline — 65% faster deployments, 30% higher production velocity, and an automated testing framework for consistent compliance verification.",
                },
                {
                  icon: Server,
                  text: "Built fully automated RDS content delivery across 50+ environments, saving 400+ engineering hours annually. Led zero-downtime Postgres 10→12→14.8 upgrade across 300+ instances.",
                },
                {
                  icon: Shield,
                  text: "Scaled fleet infrastructure for Prime Day, Black Friday, and Cyber Monday. Led incident response for tier-1 Sev-1 disruptions using root cause analysis and targeted resolution.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <item.icon size={14} className="text-accent" />
                  </div>
                  <span className="text-foreground/90 text-sm leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>

            <Separator className="my-5" />

            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Previous Roles</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase size={14} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Senior Software Developer &middot; Birlasoft Inc (DTCC) &middot; 2014–2021</p>
                  <p className="text-sm text-muted-foreground">Migrated 7 years of compliance data to AWS Glacier ($200K/yr savings), built an Elastic Beanstalk + Athena interface reducing report retrieval from 2 weeks to 2 hours.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase size={14} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Senior Systems Engineer &middot; Infosys (American Express) &middot; 2009–2014</p>
                  <p className="text-sm text-muted-foreground">Production support for a Tier-1 application handling paper and electronic mail distribution to card members, using Java and Python for troubleshooting.</p>
                </div>
              </div>
            </div>

            <Separator className="my-5" />

            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                <GraduationCap size={14} className="text-accent" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">B.Tech in Computer Science & Engineering</p>
                <p className="text-sm text-muted-foreground">Biju Patnaik University of Technology &middot; 8.88/10 &middot; 2005–2009</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
