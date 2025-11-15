import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Code2, Zap, Settings, BookOpen, Download } from 'lucide-react'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            The Open-Source LaTeX Editor for Windows
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
            TeXnicCenter is a feature-rich, easy-to-use integrated environment for creating LaTeX documents on Windows. Completely free and open source.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/download">
                <Download className="mr-2 h-5 w-5" />
                Download Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/docs">
                <BookOpen className="mr-2 h-5 w-5" />
                Get Started
              </Link>
            </Button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-16">
          <div className="relative rounded-lg overflow-hidden shadow-2xl border border-border">
            <Image
              src="/images/texniccenter-hero.png"
              alt="TeXnicCenter interface showing the navigator panel, LaTeX editor, and document structure"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Full-featured LaTeX editor with project navigation, syntax highlighting, and integrated document structure
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <FileText className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Project Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Organize your LaTeX documents into projects with multiple files, includes, and references all managed seamlessly.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Code2 className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Syntax Highlighting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced syntax highlighting for LaTeX commands, environments, and packages makes your code readable and reduces errors.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>One-Click Build</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Compile your documents with a single click. Integrated output profiles for PDF, DVI, PS, and more.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Settings className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Customizable</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Configure output profiles, editor behavior, keyboard shortcuts, and toolbars to match your workflow.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>LaTeX Help</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Integrated LaTeX command reference and documentation to help you find the right command when you need it.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Output Viewer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  View your compiled documents directly within TeXnicCenter with forward and inverse search capabilities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why TeXnicCenter */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why TeXnicCenter?</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Free and Open Source</h3>
              <p className="text-muted-foreground leading-relaxed">
                TeXnicCenter is completely free to use, modify, and distribute under the GPL license. No subscriptions, no hidden costs, just a powerful LaTeX editor that belongs to the community.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Built for Windows</h3>
              <p className="text-muted-foreground leading-relaxed">
                Designed specifically for Windows, TeXnicCenter integrates seamlessly with your system and provides a familiar interface that Windows users expect.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Mature and Stable</h3>
              <p className="text-muted-foreground leading-relaxed">
                With years of development and a dedicated community, TeXnicCenter is a reliable tool trusted by researchers, students, and professionals worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">
            Download TeXnicCenter today and start creating beautiful LaTeX documents.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/download">
              Download TeXnicCenter
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
