import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, MessageSquare, BookOpen, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Imprint - TeXnicCenter',
  description: 'Imprint for the TeXnicCenter website.',
}

export default function ImprintPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Imprint</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Sven Wiegand<br/>
            Im Grund 22<br/>
            13591 Berlin<br/>
            <a href="mailto:sven@texniccenter.org">sven@texniccenter.org</a>
          </p>
        </div>
      </div>
    </div>
  )
}
