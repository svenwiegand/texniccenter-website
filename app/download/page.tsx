import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Download, AlertCircle, CheckCircle2 } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export const metadata: Metadata = {
  title: 'Download TeXnicCenter - Free LaTeX Editor for Windows',
  description: 'Download the latest stable version of TeXnicCenter, the free and open-source LaTeX editor for Windows. Includes installation instructions and system requirements.',
}

export default function DownloadPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Download TeXnicCenter</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Get the latest version of TeXnicCenter for Windows and start creating LaTeX documents.
          </p>

          {/* Latest Stable Version */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Latest Stable Version</CardTitle>
              <CardDescription>TeXnicCenter 2.02 Stable (Recommended)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                This is the recommended version for all users. It includes all the features you need to create professional LaTeX documents.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="https://web.archive.org/web/20250915082606/http://sourceforge.net/projects/texniccenter/files/TeXnicCenter/2.02%20Stable/TXCSetup_2.02Stable_Win32.exe/download">
                    <Download className="mr-2 h-5 w-5" />
                    Download Installer (32-bit)
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://web.archive.org/web/20250915082606/http://sourceforge.net/projects/texniccenter/files/TeXnicCenter/2.02%20Stable/TXCSetup_2.02Stable_x64.exe/download">
                    <Download className="mr-2 h-5 w-5" />
                    Download Installer (64-bit)
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* System Requirements */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>System Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Windows 7, 8, 10, or 11 (32-bit or 64-bit)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>At least 50 MB of free disk space</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>A LaTeX distribution (MiKTeX or TeX Live recommended)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>A PDF viewer (Adobe Acrobat Reader, Sumatra PDF, or similar)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Installation Instructions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Installation Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4 list-decimal list-inside">
                <li className="text-foreground">
                  <span className="font-semibold">Install a LaTeX Distribution</span>
                  <p className="text-muted-foreground ml-6 mt-1">
                    Before installing TeXnicCenter, you need to install a LaTeX distribution. We recommend <a href="https://miktex.org/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">MiKTeX</a> or <a href="https://www.tug.org/texlive/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">TeX Live</a>.
                  </p>
                </li>
                <li className="text-foreground">
                  <span className="font-semibold">Download TeXnicCenter</span>
                  <p className="text-muted-foreground ml-6 mt-1">
                    Download the installer for your system (32-bit or 64-bit) using the download button above.
                  </p>
                </li>
                <li className="text-foreground">
                  <span className="font-semibold">Run the Installer</span>
                  <p className="text-muted-foreground ml-6 mt-1">
                    Double-click the downloaded installer and follow the on-screen instructions. Accept the license agreement and choose your installation directory.
                  </p>
                </li>
                <li className="text-foreground">
                  <span className="font-semibold">Configure LaTeX</span>
                  <p className="text-muted-foreground ml-6 mt-1">
                    When you first launch TeXnicCenter, it will ask you to configure your LaTeX distribution. Point it to your MiKTeX or TeX Live installation directory.
                  </p>
                </li>
                <li className="text-foreground">
                  <span className="font-semibold">Start Creating</span>
                  <p className="text-muted-foreground ml-6 mt-1">
                    You're ready to start creating LaTeX documents! Check out our <Link href="/docs" className="text-primary hover:underline">Getting Started guide</Link> for help with your first project.
                  </p>
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Need Help?</AlertTitle>
            <AlertDescription>
              If you encounter any issues during installation, check our <Link href="/faq" className="text-primary hover:underline">FAQ page</Link> or visit our <Link href="/community" className="text-primary hover:underline">Community & Support page</Link> for assistance.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  )
}
