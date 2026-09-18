import { useState } from 'react'
import { Send, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react'
import { siteConfig, socialLinks } from '../../data/config.js'
import { SectionHeading } from '../ui/SectionHeading.jsx'
import { RevealOnScroll } from '../ui/RevealOnScroll.jsx'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) errors.email = 'Please enter your email.'
  else if (!EMAIL_PATTERN.test(values.email)) errors.email = 'That email address looks incomplete.'
  if (!values.message.trim()) errors.message = "Don't forget a message."
  return errors
}

export function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(field) {
    return (e) => {
      setValues((v) => ({ ...v, [field]: e.target.value }))
      setErrors((err) => ({ ...err, [field]: undefined }))
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      // No backend is wired up yet — swap in your own request here
      // (Formspree, EmailJS, a serverless function, etc.) before going live.
      setSubmitted(true)
    }
  }

  const fieldClass = (hasError) =>
    `w-full rounded-lg bg-background border px-4 py-3 text-sm outline-none transition-colors ${
      hasError ? 'border-red-400/60' : 'border-border focus:border-accent/60'
    }`

  return (
    <section id="contact" className="scroll-mt-20 py-24 sm:py-32">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          <RevealOnScroll className="flex flex-col gap-6">
            <SectionHeading
              title="Have an idea? Let's build it."
              description="Whether you want to collaborate, have a project in mind, or just want to say hello, feel free to reach out."
            />
            <a href={`mailto:${siteConfig.email}`} className="text-lg font-medium hover:text-accent transition-colors w-fit">
              {siteConfig.email}
            </a>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, url, icon: Icon }) => (
                <a
                  key={label}
                  href={url}
                  target={url.startsWith('http') ? '_blank' : undefined}
                  rel={url.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={label}
                  className="grid place-items-center w-11 h-11 rounded-full border border-border text-muted hover:text-accent hover:border-accent/50 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="rounded-2xl border border-border bg-surface/60 p-6 sm:p-8">
              <p className="inline-flex items-center gap-1.5 text-sm font-medium text-accent mb-6">
                Send me a message <ArrowRight size={14} />
              </p>

              {submitted ? (
                <div className="flex flex-col items-start gap-4">
                  <div className="flex items-center gap-2 text-accent">
                    <CheckCircle2 size={20} />
                    <p className="font-medium">Thanks, {values.name.split(' ')[0]}.</p>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    Heads up — this form isn't connected to a backend yet, so nothing was actually sent. Email{' '}
                    <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                      {siteConfig.email}
                    </a>
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-medium text-accent hover:underline"
                  >
                    Write another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={values.name}
                      onChange={handleChange('name')}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={fieldClass(errors.name)}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p id="name-error" className="flex items-center gap-1 text-xs text-red-400 mt-1.5">
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange('email')}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={fieldClass(errors.email)}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p id="email-error" className="flex items-center gap-1 text-xs text-red-400 mt-1.5">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={values.message}
                      onChange={handleChange('message')}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`${fieldClass(errors.message)} resize-none`}
                      placeholder="What are you thinking of building?"
                    />
                    {errors.message && (
                      <p id="message-error" className="flex items-center gap-1 text-xs text-red-400 mt-1.5">
                        <AlertCircle size={12} /> {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground font-medium px-6 py-3 hover:opacity-90 transition-opacity"
                  >
                    Send message
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
