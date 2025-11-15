import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Settings, Play, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Documentation - TeXnicCenter Getting Started Guide',
  description: 'Learn how to use TeXnicCenter with our comprehensive getting started guide. Create projects, configure LaTeX, and compile your first document.',
}

export default function DocsPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Getting Started</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Learn the basics of using TeXnicCenter to create professional LaTeX documents.
          </p>

          {/* Quick Start Steps */}
          <div className="space-y-8 mb-12">
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <CardTitle className="text-xl">Create a New Project</CardTitle>
                    <CardDescription>Set up your first LaTeX project</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="ml-14">
                <p className="text-muted-foreground mb-4">
                  When you launch TeXnicCenter, go to <span className="font-mono text-sm bg-muted px-2 py-1 rounded">File → New Project</span> or press <kbd className="px-2 py-1 text-xs bg-muted rounded border">Ctrl+Shift+N</kbd>.
                </p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Choose a location for your project files</li>
                  <li>Enter a name for your main .tex file</li>
                  <li>Select a document template (Article, Report, Book, etc.)</li>
                  <li>Click OK to create your project</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <CardTitle className="text-xl">Configure Your LaTeX Distribution</CardTitle>
                    <CardDescription>Set up the compiler settings</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="ml-14">
                <p className="text-muted-foreground mb-4">
                  If this is your first time using TeXnicCenter, you'll need to configure it to work with your LaTeX installation.
                </p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Go to <span className="font-mono text-sm bg-muted px-2 py-1 rounded">Build → Define Output Profiles</span></li>
                  <li>The wizard will search for your LaTeX installation automatically</li>
                  <li>Verify the paths are correct (usually C:\Program Files\MiKTeX or similar)</li>
                  <li>Select your preferred output format (LaTeX → PDF is recommended)</li>
                  <li>Configure your PDF viewer if needed</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <CardTitle className="text-xl">Write Your Document</CardTitle>
                    <CardDescription>Add content to your LaTeX file</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="ml-14">
                <p className="text-muted-foreground mb-4">
                  Start writing your document using LaTeX commands. Here's a simple example:
                </p>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`\\documentclass{article}
\\usepackage[utf8]{inputenc}

\\title{My First Document}
\\author{Your Name}
\\date{\\today}

\\begin{document}

\\maketitle

\\section{Introduction}
This is my first LaTeX document created 
with TeXnicCenter.

\\section{Main Content}
LaTeX is great for creating professional 
documents with mathematical formulas like 
$E = mc^2$.

\\end{document}`}
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <CardTitle className="text-xl">Build Your Document</CardTitle>
                    <CardDescription>Compile your LaTeX to PDF</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="ml-14">
                <p className="text-muted-foreground mb-4">
                  Once you've written your content, compile it to create a PDF:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Select the output profile from the dropdown (LaTeX → PDF)</li>
                  <li>Click the Build button in the toolbar or press <kbd className="px-2 py-1 text-xs bg-muted rounded border">Ctrl+F7</kbd></li>
                  <li>Check the Output tab for any errors or warnings</li>
                  <li>Click View Output or press <kbd className="px-2 py-1 text-xs bg-muted rounded border">F5</kbd> to see your PDF</li>
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Help Section */}
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle>Need More Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you're stuck or have questions, check out <a href="https://texniccenter.sourceforge.net/" className="text-primary hover:underline">the full documentation</a>, our <Link href="/faq" className="text-primary hover:underline">FAQ page</Link> or visit the <Link href="/community" className="text-primary hover:underline">Community & Support</Link> section to connect with other TeXnicCenter users.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
