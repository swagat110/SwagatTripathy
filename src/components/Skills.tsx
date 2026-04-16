import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Generative AI",
      skills: ["RAG", "LLM APIs", "LangChain", "MCP Servers", "AWS Bedrock", "SageMaker"],
    },
    {
      title: "Languages",
      skills: ["Java", "Python", "TypeScript", "Spring", "Shell", "Linux"],
    },
    {
      title: "Infrastructure & DevOps",
      skills: ["AWS CDK", "CloudFormation", "CI/CD Automation", "Docker", "Git"],
    },
    {
      title: "AWS Services",
      skills: ["Lambda", "S3", "EC2", "VPC", "RDS", "CloudWatch", "AWS Config", "Security Hub", "SSM", "Athena", "Glacier"],
    },
    {
      title: "Observability",
      skills: ["CloudWatch Custom Metrics", "Dashboards", "Alarms", "RTLA"],
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Analytical Thinking", "Automation Mindset", "Cross-Functional Collaboration", "Incident Management", "Process Optimization"],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications and systems.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-medium transition-smooth hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="hover:bg-accent/20 transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
