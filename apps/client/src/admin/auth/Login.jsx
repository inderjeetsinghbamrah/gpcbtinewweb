import { SignIn } from "@clerk/clerk-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/admin/admin-components/theme-toggle.jsx";

export default function Login() {
    return (
        <div className="min-h-screen w-full bg-background relative">

            {/* TOP BAR */}
            <header className="absolute top-0 left-0 w-full z-10">
                <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight">
            EDUOBAL
          </span>
                    <ThemeToggle />
                </div>
            </header>

            {/* MAIN */}
            <div className="min-h-screen flex">

                {/* LEFT — BRAND / VALUE */}
                <div className="hidden lg:flex w-1/2 items-center justify-center px-20
                        bg-gradient-to-br from-primary/15 via-background to-background">
                    <div className="max-w-lg">

                        <h1 className="text-5xl font-bold tracking-tight leading-tight">
                            Manage Education,
                            <br />
                            <span className="text-primary">the Smart Way</span>
                        </h1>

                        <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                            EDUOBAL is a unified digital platform that helps institutes
                            manage learning delivery, assessments, outcomes, and academic
                            operations — securely and at scale.
                        </p>

                        <Separator className="my-8" />

                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li className="flex gap-2">
                                <span className="text-primary">✔</span>
                                Outcome-based education framework
                            </li>
                            <li className="flex gap-2">
                                <span className="text-primary">✔</span>
                                Institute-level access control
                            </li>
                            <li className="flex gap-2">
                                <span className="text-primary">✔</span>
                                Secure, role-based dashboards
                            </li>
                            <li className="flex gap-2">
                                <span className="text-primary">✔</span>
                                Built for performance & scalability
                            </li>
                        </ul>

                    </div>
                </div>

                {/* RIGHT — AUTH */}
                <div className="flex flex-1 items-center justify-center px-6">
                    <Card className="w-full max-w-md border bg-card/80 backdrop-blur shadow-lg">
                        <CardContent className="pt-10 pb-8 px-8">

                            {/* MOBILE BRANDING */}
                            <div className="mb-8 text-center lg:hidden">
                                <h2 className="text-3xl font-bold tracking-tight">
                                    EDUOBAL
                                </h2>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Sign in to your institute dashboard
                                </p>
                            </div>

                            {/* DESKTOP HEADING */}
                            <div className="mb-8 hidden lg:block">
                                <h2 className="text-2xl font-semibold">
                                    Welcome back
                                </h2>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Sign in to continue to EDUOBAL
                                </p>
                            </div>

                            {/* CLERK SIGN IN */}
                            <SignIn
                                routing="path"
                                path="/login"
                                signUpUrl="/signup"
                                redirectUrl="/admin"
                                appearance={{
                                    variables: {
                                        borderRadius: "0.5rem",
                                        colorPrimary: "hsl(var(--primary))",
                                        colorText: "hsl(var(--foreground))",
                                        colorTextSecondary: "hsl(var(--muted-foreground))",
                                        colorBackground: "transparent",
                                        colorInputBackground: "transparent",
                                    },
                                    elements: {
                                        /* Remove Clerk card completely */
                                        card: "shadow-none border-none bg-transparent p-0",

                                        /* Headings */
                                        headerTitle: "hidden",
                                        headerSubtitle: "hidden",

                                        /* Form */
                                        form: "space-y-5",
                                        formFieldLabel:
                                            "text-sm font-medium text-foreground mb-1",
                                        formFieldInput:
                                            "h-10 rounded-md border border-input bg-background px-3 text-sm focus:ring-2 focus:ring-primary focus:ring-offset-2",

                                        /* Primary button */
                                        formButtonPrimary:
                                            "h-10 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition",

                                        /* Footer */
                                        footer: "hidden",

                                        /* Divider */
                                        dividerLine: "bg-border",
                                        dividerText: "text-xs text-muted-foreground",

                                        /* Social buttons */
                                        socialButtonsBlockButton:
                                            "h-10 rounded-md border border-input bg-background text-sm hover:bg-muted transition",
                                    },
                                }}
                            />


                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    );
}
