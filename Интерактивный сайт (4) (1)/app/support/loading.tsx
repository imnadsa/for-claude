import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SupportLoading() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header Skeleton */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-40" />
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8 md:py-16">
        {/* Hero section skeleton */}
        <section className="max-w-4xl mx-auto mb-12 text-center">
          <Skeleton className="h-8 w-24 mx-auto mb-6" />
          <Skeleton className="h-12 w-3/4 mx-auto mb-6" />
          <Skeleton className="h-6 w-2/3 mx-auto mb-8" />

          {/* Search bar skeleton */}
          <div className="relative max-w-xl mx-auto">
            <Skeleton className="h-14 w-full" />
          </div>
        </section>

        {/* Tabs skeleton */}
        <section className="max-w-4xl mx-auto mb-8">
          <Tabs defaultValue="help-center" className="w-full">
            <TabsList className="grid grid-cols-2 w-full md:w-auto mx-auto bg-slate-900/60">
              <TabsTrigger value="help-center" disabled>
                <Skeleton className="h-4 w-4 mr-2" />
                <Skeleton className="h-4 w-24" />
              </TabsTrigger>
              <TabsTrigger value="contact" disabled>
                <Skeleton className="h-4 w-4 mr-2" />
                <Skeleton className="h-4 w-24" />
              </TabsTrigger>
            </TabsList>

            {/* Help center skeleton */}
            <TabsContent value="help-center" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="bg-slate-900/50 border-slate-800">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Skeleton className="w-10 h-10 rounded-full" />
                        <div>
                          <Skeleton className="h-5 w-32 mb-1" />
                          <Skeleton className="h-4 w-40" />
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {[1, 2, 3, 4].map((j) => (
                          <li key={j}>
                            <Skeleton className="h-10 w-full" />
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 pt-4 border-t border-slate-800">
                        <Skeleton className="h-5 w-32" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      {/* Footer skeleton */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <Skeleton className="h-8 w-24 mx-auto mb-4" />
          <div className="flex justify-center gap-4 mb-4">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-8 w-20" />
            ))}
          </div>
          <Skeleton className="h-4 w-48 mx-auto" />
        </div>
      </footer>
    </div>
  )
}

