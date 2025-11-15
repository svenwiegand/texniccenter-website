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
                The project was born in 1999 by Sven Wiegand, out of the need for a user-friendly LaTeX editor on Windows that makes it easy to navigate in multi file projects and insert references with just a click. TeXnicCenter has been downloaded millions of times all around the globe, from undergraduate students writing their first lab reports to professors preparing research papers and books.
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
                Sven Wiegand started the development of TeXnicCenter in 1999 to write his diploma thesis. His goal was to create a powerful yet accessible LaTeX editor for Windows users. The goal was to provide an IDE that could handle everything from simple documents to complex multi-file projects with bibliography management, index generation, and more.
                In the early 2000s the software became more traction and became the default for LaTeX editing on Windows with millions of downloads. Developers created several clones for other platforms reusing the groundbreaking document navigation.
              </p>
              <p>
                After several beta version the first stable version was released in 2008. At the same time Tino Weinkauf – who contributed several enhancements over the years before – took over the management of the project.
                The latest version is 2.02 from 2013.
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
                TeXnicCenter has been developed and maintained by a team of volunteers who are passionate about LaTeX and open-source software:
              </p>
              <h3><strong>Creator:</strong> Sven Wiegand</h3>
              <h3><strong>Maintainer:</strong> Tino Weinkauf</h3>
              <h3><strong>Main Code</strong></h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Sergiu Dotenco</li>
                <li>Alexander Müller</li>
                <li>Tino Weinkauf</li>
                <li>Sven Wiegand</li>
                <li>Oliver Wieland</li>
              </ul>
              <h3><strong>Scintilla Source Code Editing Component:</strong> Neil Hodgson, et al.</h3>
              <h3><strong>Hunspell Spell Checker:</strong> László Németh</h3>
              <h3><strong>Additional Codes:</strong></h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Loïc d'Anterroches</li>
                <li>Stefan Ascher</li>
                <li>Adam Clauss</li>
                <li>Michael Dunn</li>
                <li>Raffi Enficiaud</li>
                <li>Mark Findlay</li>
                <li>Chris Norris</li>
                <li>Stephan Schrader</li>
                <li>Paul Selormey</li>
                <li>Martin Stanek</li>
                <li>Alexander Täschner</li>
                <li>Pavel Vacha</li>
                <li>Christian Welzel</li>
              </ul>
              <h3><strong>Online-Help & Tips:</strong></h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Gerald Binder</li>
                <li>Sergiu Dotenco</li>
                <li>Marckus Kraft</li>
                <li>Rüdiger Stuible</li>
                <li>Tino Weinkauf</li>
                <li>Sven Wiegand</li>
              </ul>
              <h3><strong>TeXnicCenter Templates:</strong></h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Christoph Börensen</li>
                <li>Mark Müller</li>
                <li>Gyorgy Szeidl</li>
                <li>Tino Weinkauf</li>
              </ul>
              <h3><strong>Logo and Icons:</strong></h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Felix Kaiser</li>
                <li>Lukas Schneider</li>
              </ul>
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
                No further development is currently taking place. If you want to contribute, reach out to the Github project linked at the bottom of the page.
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
