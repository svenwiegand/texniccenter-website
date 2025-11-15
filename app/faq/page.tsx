import { Metadata } from 'next'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ & Troubleshooting - TeXnicCenter Help',
  description: 'Find answers to frequently asked questions about TeXnicCenter. Troubleshoot common issues and learn how to resolve compilation errors.',
}

export default function FAQPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">FAQ & Troubleshooting</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Find answers to common questions and solutions to frequent issues.
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {/* General Questions */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">General Questions</h2>
              
              <AccordionItem value="what-is-texniccenter" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  What is TeXnicCenter?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  TeXnicCenter is a free, open-source integrated development environment (IDE) for creating LaTeX documents on Windows. It provides a user-friendly interface with features like syntax highlighting, project management, and one-click compilation to help you write LaTeX documents more efficiently.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="is-free" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  Is TeXnicCenter really free?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, TeXnicCenter is completely free and open source, licensed under the GPL. You can use it for personal, academic, or commercial purposes without any cost or restrictions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="latex-distribution" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  Do I need to install anything else besides TeXnicCenter?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, you need to install a LaTeX distribution like MiKTeX or TeX Live before using TeXnicCenter. TeXnicCenter is an editor/IDE, while the LaTeX distribution provides the actual LaTeX compiler and packages. You'll also want a PDF viewer like Adobe Acrobat Reader or Sumatra PDF.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mac-linux" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  Can I use TeXnicCenter on Mac or Linux?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No, TeXnicCenter is designed specifically for Windows. For Mac, you can use TeXShop or TeXworks. For Linux, consider using TeXmaker, Kile, or TeXstudio, which offer similar functionality.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="dev-status" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  What's the current status of the TeXnicCenter development?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  TeXnicCenter currently isn't actively developed. But it's open source, so that everyone can contribute. You will find the Github link at the bottom of this page.
                </AccordionContent>
              </AccordionItem>
            </div>

            {/* Installation & Setup */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Installation & Setup</h2>
              
              <AccordionItem value="install-order" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  Should I install MiKTeX before or after TeXnicCenter?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Install MiKTeX (or another LaTeX distribution) <strong>before</strong> installing TeXnicCenter. This allows TeXnicCenter to automatically detect your LaTeX installation during the first-run configuration wizard.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="configure-output" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  How do I configure the output profiles?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Go to <span className="font-mono text-sm bg-muted px-1 py-0.5 rounded">Build → Define Output Profiles</span> and follow the configuration wizard. Make sure to point to the correct paths for your LaTeX distribution (usually something like <span className="font-mono text-sm">C:\Program Files\MiKTeX\miktex\bin\x64</span>).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pdf-viewer" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  Which PDF viewer should I use?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We recommend Sumatra PDF for use with TeXnicCenter because it supports forward and inverse search, and it doesn't lock the PDF file (allowing you to recompile without closing the viewer). Adobe Acrobat Reader works too but lacks these advanced features.
                </AccordionContent>
              </AccordionItem>
            </div>

            {/* Common Issues */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Common Issues</h2>
              
              <AccordionItem value="build-errors" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  My document won't compile. What should I check?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Check the Output tab for error messages</li>
                    <li>Verify your LaTeX distribution is properly installed</li>
                    <li>Make sure all packages used in your document are installed</li>
                    <li>Look for syntax errors (missing braces, unescaped special characters)</li>
                    <li>Try compiling a simple "Hello World" document to test your setup</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="missing-packages" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  I get errors about missing packages. How do I install them?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  If you're using MiKTeX, it can install packages automatically. Go to MiKTeX Console → Settings and set "Install missing packages" to "Yes" or "Ask me first". Alternatively, you can manually install packages using the MiKTeX Package Manager.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="viewer-not-opening" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  The PDF viewer doesn't open after compilation
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Go to <span className="font-mono text-sm bg-muted px-1 py-0.5 rounded">Build → Define Output Profiles</span>, select your active profile, and check the Viewer tab. Make sure the path to your PDF viewer is correct and that the "Do not close viewer on compilation" option is checked if using Adobe Reader.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="encoding-issues" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  I have problems with special characters (ä, ö, ü, é, etc.)
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Make sure your document uses UTF-8 encoding. Add <span className="font-mono text-sm bg-muted px-1 py-0.5 rounded">\usepackage[utf8]{'{inputenc}'}</span> to your preamble. In TeXnicCenter, go to <span className="font-mono text-sm bg-muted px-1 py-0.5 rounded">Format → Encoding</span> and select UTF-8.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="forward-search" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  Forward/Inverse search isn't working
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Forward and inverse search require proper configuration of your PDF viewer (Sumatra PDF recommended). Make sure you've compiled with the <span className="font-mono text-sm bg-muted px-1 py-0.5 rounded">-synctex=1</span> option enabled in your output profile settings.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="slow-compilation" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  Compilation is very slow
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Large documents with many images can take time to compile. Consider: (1) using draft mode during editing (<span className="font-mono text-sm bg-muted px-1 py-0.5 rounded">\documentclass[draft]{'{article}'}</span>), (2) compiling only specific chapters, or (3) optimizing your images. Also, disable "on-the-fly" package installation in MiKTeX if enabled.
                </AccordionContent>
              </AccordionItem>
            </div>

            {/* Advanced Topics */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Advanced Topics</h2>
              
              <AccordionItem value="bibliography" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  How do I use BibTeX for bibliographies?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Create a .bib file with your references, add <span className="font-mono text-sm bg-muted px-1 py-0.5 rounded">\bibliography{'{filename}'}</span> to your document, and compile in this order: LaTeX → BibTeX → LaTeX → LaTeX. You may need to configure a BibTeX output profile or use the "LaTeX → PDF (with BibTeX)" profile.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="custom-commands" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  Can I create custom keyboard shortcuts?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! Go to <span className="font-mono text-sm bg-muted px-1 py-0.5 rounded">Tools → Customize → Keyboard</span> to create or modify keyboard shortcuts for any command or menu item in TeXnicCenter.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="version-control" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  Can I use version control (Git, SVN) with TeXnicCenter?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, LaTeX source files are plain text, making them ideal for version control. While TeXnicCenter doesn't have built-in version control support, you can use external tools like Git, Subversion, or Mercurial to manage your LaTeX projects.
                </AccordionContent>
              </AccordionItem>
            </div>
          </Accordion>

          {/* Still need help section */}
          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Still Need Help?</h3>
            <p className="text-muted-foreground mb-4">
              If you couldn't find the answer to your question, visit our <Link href="/community" className="text-primary hover:underline">Community & Support page</Link> to connect with other TeXnicCenter users or report an issue on GitHub.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
