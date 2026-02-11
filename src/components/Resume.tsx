import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, ExternalLink, Download } from "lucide-react";

const RESUME_URL = `${import.meta.env.BASE_URL}Swagat-Tripathy-Resume.pdf`;

const Resume = () => {
  return (
    <section id="resume" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Resume
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            View or download my resume for a concise overview of my experience, skills, and certifications.
          </p>

          <Card className="p-8 bg-gradient-to-br from-card to-muted/20">
            <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <FileText className="text-accent" size={32} />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" asChild>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink size={18} />
                  View Resume
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href={RESUME_URL}
                  download="Swagat-Tripathy-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download size={18} />
                  Download PDF
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;
