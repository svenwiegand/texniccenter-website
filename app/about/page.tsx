import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About TeXnicCenter - Open Source LaTeX Editor',
  description: 'Learn about the TeXnicCenter project, its history, open source license, and how to contribute to the development of this free LaTeX editor.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">About TeXnicCenter</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Learn about the history, mission, and future of TeXnicCenter.
          </p>

          {/* Project Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Project Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                TeXnicCenter is a free, open-source integrated development environment (IDE) for creating LaTeX documents on the Windows platform. Since its first release, TeXnicCenter has been helping students, researchers, and professionals create high-quality documents with LaTeX.
              </p>
              <p>
                The project was born out of the need for a user-friendly LaTeX editor on Windows that could compete with commercial alternatives while remaining completely free. Today, TeXnicCenter is used by thousands of people worldwide, from undergraduate students writing their first lab reports to professors preparing research papers and books.
              </p>
            </CardContent>
          </Card>

          {/* History */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">History</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                TeXnicCenter's development began in the early 2000s as a project to create a powerful yet accessible LaTeX editor for Windows users. The goal was to provide an IDE that could handle everything from simple documents to complex multi-file projects with bibliography management, index generation, and more.
              </p>
              <p>
                Over the years, TeXnicCenter has evolved through multiple major versions, each adding new features and improving the user experience. Key milestones include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Launch of version 1.0 with basic project management and compilation features</li>
                <li>Introduction of syntax highlighting and auto-completion in version 1.0 Beta</li>
                <li>Major redesign in version 2.0 with improved UI and Unicode support</li>
                <li>Enhanced PDF viewer integration and forward/inverse search capabilities</li>
              </ul>
              <p>
                Throughout its history, TeXnicCenter has remained true to its core mission: providing a free, powerful, and user-friendly LaTeX editor for Windows.
              </p>
            </CardContent>
          </Card>

          {/* License & Open Source */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">License & Open Source</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                TeXnicCenter is released under the <strong>GNU General Public License (GPL)</strong>, which guarantees your freedom to use, study, modify, and distribute the software. This means:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You can use TeXnicCenter for any purpose, personal or commercial, at no cost</li>
                <li>You have the right to study how the program works and adapt it to your needs</li>
                <li>You can distribute copies to help others</li>
                <li>You can improve the program and release your improvements to the public</li>
              </ul>
              <p>
                The source code is publicly available on GitHub, allowing anyone to contribute improvements, fix bugs, or create derivative works. We encourage users to get involved in the development process, whether by submitting bug reports, contributing code, or helping with documentation.
              </p>
            </CardContent>
          </Card>

          {/* Development Team */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Development & Contributors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                TeXnicCenter is developed and maintained by a team of volunteers who are passionate about LaTeX and open-source software. The project has benefited from contributions from developers around the world who have donated their time and expertise to improve the software.
              </p>
              <p>
                We're always looking for new contributors! Whether you're a developer, designer, technical writer, or translator, there are many ways to help improve TeXnicCenter. Visit our <Link href="/community" className="text-primary hover:underline">Community & Support page</Link> to learn how you can get involved.
              </p>
            </CardContent>
          </Card>

          {/* Future Direction */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Future Direction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                While TeXnicCenter is a mature and stable application, development continues to add new features and improve existing functionality. Future development priorities include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Enhanced support for modern LaTeX workflows and packages</li>
                <li>Improved performance and stability on newer Windows versions</li>
                <li>Better integration with modern PDF viewers and tools</li>
                <li>Continued refinement of the user interface and user experience</li>
                <li>Enhanced support for collaborative workflows and version control</li>
              </ul>
              <p>
                The direction of TeXnicCenter is guided by user feedback and the needs of the LaTeX community. If you have suggestions for future features or improvements, please share them on our GitHub repository.
              </p>
            </CardContent>
          </Card>

          {/* Acknowledgments */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Acknowledgments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                TeXnicCenter would not be possible without the contributions of many individuals and the broader open-source community. We'd like to thank:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All the developers who have contributed code to the project</li>
                <li>Users who have reported bugs, suggested features, and provided feedback</li>
                <li>The LaTeX Project and the teams behind TeX distributions like MiKTeX and TeX Live</li>
                <li>The open-source community that provides the tools and libraries TeXnicCenter is built on</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <div className="p-6 bg-muted rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Get in Touch</h3>
            <p className="text-muted-foreground">
              Want to learn more about TeXnicCenter or get involved in the project? Visit our <Link href="/community" className="text-primary hover:underline">Community & Support page</Link> for ways to connect with the team and other users.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
