import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, MessageSquare, BookOpen, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Community & Support - TeXnicCenter',
  description: 'Get help with TeXnicCenter. Find community resources, report issues, and connect with other LaTeX users.',
}

export default function CommunityPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Community & Support</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Get help, connect with other users, and contribute to the TeXnicCenter project.
          </p>

          {/* Support Channels */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <Github className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>GitHub Issues</CardTitle>
                <CardDescription>Report bugs and request features</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Found a bug or have a feature request? Open an issue on our GitHub repository. This is the best place for bug reports and feature discussions.
                </p>
                <Button asChild variant="outline">
                  <a href="https://github.com/TeXnicCenter/TeXnicCenter" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MessageSquare className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Stack Overflow</CardTitle>
                <CardDescription>Ask questions and get answers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Have a question about using TeXnicCenter or LaTeX? Search for existing answers or ask a new question on Stack Overflow with the "texniccenter" tag.
                </p>
                <Button asChild variant="outline">
                  <a href="https://stackoverflow.com/questions/tagged/texniccenter" target="_blank" rel="noopener noreferrer">
                    Visit Stack Overflow
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>LaTeX Community</CardTitle>
                <CardDescription>General LaTeX help and resources</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For general LaTeX questions not specific to TeXnicCenter, the TeX - LaTeX Stack Exchange community is an excellent resource with thousands of questions and answers.
                </p>
                <Button asChild variant="outline">
                  <a href="https://tex.stackexchange.com/" target="_blank" rel="noopener noreferrer">
                    Visit TeX Stack Exchange
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>User Forums</CardTitle>
                <CardDescription>Community discussions and tips</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Connect with other TeXnicCenter users to share tips, discuss workflows, and help each other solve problems in community forums and discussion boards.
                </p>
                <Button asChild variant="outline" disabled>
                  <span>Forum Link (TBD)</span>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contributing Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Contributing to TeXnicCenter</CardTitle>
              <CardDescription>Help make TeXnicCenter better for everyone</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                TeXnicCenter is an open-source project that depends on contributions from users like you. There are many ways to contribute:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong>Report Bugs:</strong> Help us improve by reporting issues you encounter</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong>Submit Code:</strong> Fix bugs or implement new features and submit pull requests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong>Improve Documentation:</strong> Help others by writing guides and tutorials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong>Translate:</strong> Help make TeXnicCenter available in more languages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong>Help Others:</strong> Answer questions on Stack Overflow and forums</span>
                </li>
              </ul>
              <Button asChild className="mt-4">
                <a href="https://github.com/TeXnicCenter/TeXnicCenter" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Contribute on GitHub
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* External Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">External Resources</CardTitle>
              <CardDescription>Useful links for LaTeX users</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.latex-project.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    The LaTeX Project
                  </a>
                  <span className="text-muted-foreground"> - Official LaTeX documentation and resources</span>
                </li>
                <li>
                  <a href="https://www.ctan.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    CTAN
                  </a>
                  <span className="text-muted-foreground"> - Comprehensive TeX Archive Network with thousands of packages</span>
                </li>
                <li>
                  <a href="https://miktex.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    MiKTeX
                  </a>
                  <span className="text-muted-foreground"> - Popular LaTeX distribution for Windows</span>
                </li>
                <li>
                  <a href="https://www.tug.org/texlive/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    TeX Live
                  </a>
                  <span className="text-muted-foreground"> - Cross-platform LaTeX distribution</span>
                </li>
                <li>
                  <a href="https://www.overleaf.com/learn" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Overleaf Learn
                  </a>
                  <span className="text-muted-foreground"> - Tutorials and guides for learning LaTeX</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
