import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignUpButton, SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link2, BarChart3, Shield, Zap, Globe, Copy } from "lucide-react";

export const metadata = {
  title: "LinkShortener — Shorten, share and track your links",
  description:
    "Create short, memorable links in seconds. Track clicks, manage your links, and share anywhere.",
};

const features = [
  {
    icon: Zap,
    title: "Instant Shortening",
    description:
      "Paste any long URL and get a short link in under a second. No fuss, no setup required.",
  },
  {
    icon: BarChart3,
    title: "Click Analytics",
    description:
      "See how many times your links are clicked and when, so you always know what's working.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Your links are stored safely and served with high availability so they never go dead.",
  },
  {
    icon: Globe,
    title: "Share Anywhere",
    description:
      "Short links work in emails, social posts, SMS, or anywhere else character count matters.",
  },
  {
    icon: Copy,
    title: "Easy Management",
    description:
      "View, edit, and delete all your links from one clean dashboard — everything in one place.",
  },
  {
    icon: Link2,
    title: "Custom Slugs",
    description:
      "Choose a memorable slug for your link instead of a random string whenever you want.",
  },
];

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center gap-6 px-6 py-24 text-center">
        <Badge variant="secondary" className="text-xs">
          Free to get started
        </Badge>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          Shorten links. Track clicks.{" "}
          <span className="text-muted-foreground">Share smarter.</span>
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          LinkShortener turns long, unwieldy URLs into clean, shareable links in
          seconds — with built-in analytics to see exactly who's clicking.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <SignUpButton mode="modal">
            <Button size="lg" className="h-10 px-6 text-sm">
              Get started for free
            </Button>
          </SignUpButton>
          <SignInButton mode="modal">
            <Button variant="outline" size="lg" className="h-10 px-6 text-sm">
              Sign in
            </Button>
          </SignInButton>
        </div>
      </section>

      {/* Features */}
      <section className="flex flex-col items-center gap-10 px-6 py-16 bg-muted/40">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Everything you need to manage your links
          </h2>
          <p className="mt-2 text-muted-foreground">
            Simple, powerful features built for individuals and teams alike.
          </p>
        </div>
        <div className="grid w-full max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardHeader className="pb-2">
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>
                <CardTitle className="text-base">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center gap-4 px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Ready to get started?
        </h2>
        <p className="max-w-md text-muted-foreground">
          Create your free account and start shortening links in seconds.
        </p>
        <SignUpButton mode="modal">
          <Button size="lg" className="mt-2 h-10 px-6 text-sm">
            Create free account
          </Button>
        </SignUpButton>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t px-6 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} LinkShortener. All rights reserved.
      </footer>
    </div>
  );
}
