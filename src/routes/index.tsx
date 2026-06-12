import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Lightbulb, MessageCircle, Crown, Check, ArrowRight, Zap, Users, Shield } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Inner Circle — Join Our Exclusive Telegram Community" },
      { name: "description", content: "Join thousands of driven professionals in our free Telegram community. Daily insights, live Q&As, and exclusive strategies." },
      { property: "og:title", content: "The Inner Circle — Join Our Exclusive Telegram Community" },
      { property: "og:description", content: "Join thousands of driven professionals. Daily insights, live Q&As, and exclusive strategies — all free." },
    ],
  }),
  component: Index,
});

const TELEGRAM_LINK = "https://t.me/+xTDQZElzQspmZDg5";

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      {/* Ambient background effects */}
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />

      {/* Floating particles / subtle orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/5 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />

      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 pt-16 pb-20 text-center">
        {/* Small badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          10,000+ members already joined
        </div>

        <h1 className="max-w-4xl text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          The Insights That Give You an{" "}
          <span className="text-primary">Unfair Advantage</span>
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Join thousands of driven professionals getting curated daily insights, exclusive strategies,
          and direct access to industry leaders — all in one free Telegram group.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
            <Button variant="cta" size="xl" className="group text-lg">
              <Zap className="h-5 w-5 transition-transform group-hover:scale-110" />
              Join Our Telegram Group (Free)
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <p className="text-xs text-muted-foreground">Takes 10 seconds. No spam, ever. Unsubscribe anytime.</p>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2 text-sm">
            <Check className="h-4 w-4 text-primary" />
            <span>100% Free</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="h-4 w-4 text-primary" />
            <span>No Spam</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="h-4 w-4 text-primary" />
            <span>Instant Access</span>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What You Get Inside
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to stay ahead — delivered daily
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="group relative rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:border-glow hover:bg-surface-elevated">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-all group-hover:ring-primary/40">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Daily Insights & Updates
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Start every morning with hand-picked insights, market movements, and trending strategies
                distilled into bite-sized updates you can act on immediately.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:border-glow hover:bg-surface-elevated">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-all group-hover:ring-primary/40">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Community Discussions & Live Q&As
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Engage with a curated community of like-minded professionals. Participate in live Q&A
                sessions and get your toughest questions answered by experts.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:border-glow hover:bg-surface-elevated">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-all group-hover:ring-primary/40">
                <Crown className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Exclusive Tips & Strategies
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Access frameworks, playbooks, and tactics not shared anywhere else. Our inner circle gets
                the alpha before it becomes mainstream knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Why Join */}
      <section className="relative px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-border bg-surface p-8 sm:p-12 lg:p-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why 10,000+ People Joined
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Real members, real results. Here is what makes this community different.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Curated Community</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    No noise, no self-promotion. Every member is vetted. The signal-to-noise ratio
                    is unmatched.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Actionable, Not Theoretical</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Everything shared is battle-tested. No fluff, no vague advice — just tactics
                    you can apply today.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Zero Spam Guarantee</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Strict moderation keeps discussions high-quality. No ads, no bots, no
                    distractions — ever.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Free Forever</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    No hidden fees, no upsells. The entire experience is 100% free because we
                    believe value should flow both ways.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative px-4 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Join the Inner Circle?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Your next competitive edge is one click away. Join 10,000+ members who refuse to settle.
          </p>
          <div className="mt-10">
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="xl" className="group text-lg">
                <Zap className="h-5 w-5 transition-transform group-hover:scale-110" />
                Join Our Telegram Group (Free)
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-primary" />
              Free Forever
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-primary" />
              No Credit Card
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-primary" />
              Leave Anytime
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-8 text-center text-sm text-muted-foreground">
        <p> The Inner Circle. All rights reserved.</p>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/80 p-4 backdrop-blur-lg sm:hidden">
        <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="block w-full">
          <Button variant="cta" size="lg" className="w-full text-base">
            <Zap className="h-4 w-4" />
            Join Telegram (Free)
          </Button>
        </a>
      </div>
    </main>
  );
}
