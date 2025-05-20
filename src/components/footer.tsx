import { ZapIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-sm">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-1 bg-primary/10 rounded">
                <ZapIcon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xl font-bold font-mono">
                code<span className="text-primary">flex</span>.ai
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} codeflex.ai - All rights reserved
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-2 text-sm">
            <p className="text-muted-foreground hover:text-primary transition-colors">
              About
            </p>
            <p className="text-muted-foreground hover:text-primary transition-colors">
              Terms
            </p>
            <p className="text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </p>
            <p className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </p>
            <p className="text-muted-foreground hover:text-primary transition-colors">
              Blog
            </p>
            <p className="text-muted-foreground hover:text-primary transition-colors">
              Help
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-md bg-background/50">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-xs font-mono">SYSTEM OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
