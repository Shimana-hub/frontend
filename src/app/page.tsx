import { Search, Star, Shield, Clock, ArrowRight } from "lucide-react"
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";

export default function HomePage() {
  const services = [
    { name: "Plumbing", icon: "🔧", providers: 150 },
    { name: "Electrical", icon: "⚡", providers: 120 },
    { name: "Cleaning", icon: "🧹", providers: 200 },
    { name: "Gardening", icon: "🌱", providers: 80 },
    { name: "Painting", icon: "🎨", providers: 95 },
    { name: "Carpentry", icon: "🔨", providers: 110 },
  ]

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Verified Professionals",
      description: "All service providers are background-checked and verified",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Quality Guaranteed",
      description: "Read reviews and ratings from real customers",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Booking",
      description: "Get matched with available providers in minutes",
    },
  ]

  return (
    <div className="min-vh-100 position-relative overflow-hidden" style={{ backgroundColor: "var(--background)" }}>
      {/* Sophisticated Background Designs */}
      <div className="position-fixed w-100 h-100 overflow-hidden" style={{ pointerEvents: "none", zIndex: 0 }}>
        {/* Primary gradient orbs */}
        <div className="sophisticated-bg-orb-1"></div>
        <div className="sophisticated-bg-orb-2"></div>
        <div className="sophisticated-bg-orb-3"></div>

        {/* Additional sophisticated elements */}
        <div className="sophisticated-bg-orb-4"></div>
        <div className="sophisticated-bg-orb-5"></div>

        {/* Geometric patterns */}
        <div className="sophisticated-bg-pattern-1"></div>
        <div className="sophisticated-bg-pattern-2"></div>

        {/* Subtle mesh gradient overlay */}
        <div className="sophisticated-mesh-1"></div>
        <div className="sophisticated-mesh-2"></div>

        {/* Floating geometric shapes */}
        <div className="sophisticated-float-1"></div>
        <div className="sophisticated-float-2"></div>
        <div className="sophisticated-float-3"></div>

        {/* Radial gradient overlays for depth */}
        <div className="sophisticated-radial-overlay"></div>
      </div>

      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <section className="position-relative py-5" style={{ zIndex: 10, paddingTop: "5rem", paddingBottom: "8rem" }}>
        <div className="sophisticated-hero-bg"></div>
        <div className="container position-relative">
          <div className="text-center">
            <h1 className="display-1 fw-bold mb-4" style={{ color: "var(--foreground)" }}>
              Connect with Trusted
              <span className="sophisticated-gradient-text d-block">Service Providers</span>
            </h1>
            <p className="lead mb-5 mx-auto" style={{ maxWidth: "48rem", color: "var(--muted-foreground)" }}>
              Find skilled professionals for all your home and business needs. From plumbing to painting, we connect you
              with verified experts in your area.
            </p>

            {/* Search Bar */}
            <div className="mx-auto mb-5" style={{ maxWidth: "32rem" }}>
              <div className="position-relative">
                <Search
                  className="position-absolute top-50 translate-middle-y ms-3"
                  style={{ left: "0.5rem", width: "1.25rem", height: "1.25rem", color: "var(--muted-foreground)" }}
                />
                <input
                  type="text"
                  placeholder="What service do you need?"
                  className="form-control sophisticated-search-input"
                  style={{ paddingLeft: "3rem", paddingRight: "8rem", height: "4rem", fontSize: "1.125rem" }}
                />
                <button
                  className="btn btn-primary position-absolute top-50 translate-middle-y me-2 rounded-pill px-4"
                  style={{ right: "0" }}
                >
                  Search
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="row g-4 justify-content-center">
              <div className="col-md-4 text-center">
                <div className="h2 fw-bold" style={{ color: "var(--foreground)" }}>
                  10,000+
                </div>
                <div style={{ color: "var(--muted-foreground)" }}>Verified Providers</div>
              </div>
              <div className="col-md-4 text-center">
                <div className="h2 fw-bold" style={{ color: "var(--foreground)" }}>
                  50,000+
                </div>
                <div style={{ color: "var(--muted-foreground)" }}>Jobs Completed</div>
              </div>
              <div className="col-md-4 text-center">
                <div className="h2 fw-bold" style={{ color: "var(--foreground)" }}>
                  4.9/5
                </div>
                <div style={{ color: "var(--muted-foreground)" }}>Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="position-relative py-5 sophisticated-services-bg" style={{ zIndex: 10 }}>
        <div className="sophisticated-services-overlay"></div>
        <div className="container position-relative">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3" style={{ color: "var(--foreground)" }}>
              Popular Services
            </h2>
            <p className="lead" style={{ color: "var(--muted-foreground)" }}>
              Browse our most requested service categories
            </p>
          </div>

          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2">
                <div className="card sophisticated-service-card h-100">
                  <div className="card-body text-center p-4">
                    <div className="fs-1 mb-3 sophisticated-service-icon">{service.icon}</div>
                    <h5 className="card-title fw-semibold mb-2" style={{ color: "var(--foreground)" }}>
                      {service.name}
                    </h5>
                    <p className="card-text small" style={{ color: "var(--muted-foreground)" }}>
                      {service.providers} providers
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="position-relative py-5" style={{ zIndex: 10 }}>
        <div className="sophisticated-features-bg"></div>
        <div className="container position-relative">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3" style={{ color: "var(--foreground)" }}>
              Why Choose ServiceHub?
            </h2>
            <p className="lead" style={{ color: "var(--muted-foreground)" }}>
              We make finding reliable service providers simple and secure
            </p>
          </div>

          <div className="row g-5">
            {features.map((feature, index) => (
              <div key={index} className="col-md-4 text-center">
                <div className="sophisticated-feature-icon-wrapper d-inline-flex align-items-center justify-content-center mb-4">
                  <div style={{ color: "var(--primary)" }}>{feature.icon}</div>
                </div>
                <h3 className="h4 fw-semibold mb-3" style={{ color: "var(--foreground)" }}>
                  {feature.title}
                </h3>
                <p style={{ color: "var(--muted-foreground)" }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="position-relative py-5 sophisticated-works-bg" style={{ zIndex: 10 }}>
        <div className="sophisticated-works-overlay"></div>
        <div className="container position-relative">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3" style={{ color: "var(--foreground)" }}>
              How It Works
            </h2>
            <p className="lead" style={{ color: "var(--muted-foreground)" }}>
              Get connected with the right professional in 3 simple steps
            </p>
          </div>

          <div className="row g-5">
            <div className="col-md-4 text-center position-relative">
              <div className="sophisticated-step-number d-inline-flex align-items-center justify-content-center mb-4">
                1
              </div>
              <h3 className="h4 fw-semibold mb-3" style={{ color: "var(--foreground)" }}>
                Describe Your Need
              </h3>
              <p style={{ color: "var(--muted-foreground)" }}>Tell us what service you need and your location</p>
              <div className="d-none d-md-block sophisticated-connecting-line"></div>
            </div>

            <div className="col-md-4 text-center position-relative">
              <div className="sophisticated-step-number d-inline-flex align-items-center justify-content-center mb-4">
                2
              </div>
              <h3 className="h4 fw-semibold mb-3" style={{ color: "var(--foreground)" }}>
                Get Matched
              </h3>
              <p style={{ color: "var(--muted-foreground)" }}>
                We'll connect you with qualified providers in your area
              </p>
              <div className="d-none d-md-block sophisticated-connecting-line"></div>
            </div>

            <div className="col-md-4 text-center">
              <div className="sophisticated-step-number d-inline-flex align-items-center justify-content-center mb-4">
                3
              </div>
              <h3 className="h4 fw-semibold mb-3" style={{ color: "var(--foreground)" }}>
                Book & Pay
              </h3>
              <p style={{ color: "var(--muted-foreground)" }}>
                Choose your provider, schedule the service, and pay securely
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="position-relative py-5" style={{ zIndex: 10 }}>
        <div className="sophisticated-cta-bg"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="sophisticated-cta-card text-center p-5 position-relative overflow-hidden">
                <div className="sophisticated-cta-overlay-1"></div>
                <div className="sophisticated-cta-overlay-2"></div>
                <div className="sophisticated-cta-overlay-3"></div>

                <div className="position-relative" style={{ zIndex: 10 }}>
                  <h2 className="display-4 fw-bold mb-4" style={{ color: "var(--foreground)" }}>
                    Ready to Get Started?
                  </h2>
                  <p className="lead mb-4" style={{ color: "var(--muted-foreground)" }}>
                    Join thousands of satisfied customers who found their perfect service provider
                  </p>
                  <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                    <button className="btn btn-primary btn-lg px-4 py-3">
                      Find a Service Provider
                      <ArrowRight className="ms-2" style={{ width: "1.25rem", height: "1.25rem" }} />
                    </button>
                    <button className="btn btn-outline-primary btn-lg px-4 py-3 sophisticated-outline-btn">
                      Become a Provider
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
