import { useState } from "react";

interface ContactProps {
  id?: string;
}

export function Contact({ id }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      id={id || "contact"} 
      className="section theme-transition scroll-mt-20"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="mb-4 font-['Fraunces']" style={{ color: 'var(--text-primary)' }}>
              Get In Touch
            </h2>
            <p 
              className="text-xl max-w-2xl mx-auto font-['Roboto_Flex']"
              style={{ color: 'var(--text-secondary)' }}
            >
              Interested in collaboration, speaking engagements, or design education? 
              I'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 
                className="text-2xl font-semibold mb-6 font-['Fraunces']"
                style={{ color: 'var(--text-primary)' }}
              >
                Let's Connect
              </h3>
              
              <div className="space-y-6 mb-8">
                {[
                  {
                    icon: "fa-envelope",
                    label: "Email",
                    value: "eolivera@sva.edu",
                    link: "mailto:eolivera@sva.edu"
                  },
                  {
                    icon: "fa-phone",
                    label: "Phone",
                    value: "+1 (314) 467-0699",
                    link: "tel:+13144670699"
                  },
                  {
                    icon: "fa-map-marker-alt",
                    label: "Location",
                    value: "New York, NY | LPB, Bolivia",
                    link: null
                  },
                  {
                    icon: "fa-calendar",
                    label: "Office Hours",
                    value: "Mon-Fri 9:00 AM - 5:00 PM EST",
                    link: null
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'var(--accent-primary)' }}
                    >
                      <i className={`fas ${contact.icon} text-white`}></i>
                    </div>
                    
                    <div>
                      <div 
                        className="text-sm font-medium mb-1"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {contact.label}
                      </div>
                      {contact.link ? (
                        <a 
                          href={contact.link}
                          className="hover:opacity-80 transition-opacity"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <div style={{ color: 'var(--text-primary)' }}>
                          {contact.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              
            </div>

            {/* Contact Form */}
            <div>
              <form 
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label 
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300"
                      style={{ 
                        backgroundColor: 'var(--bg-secondary)',
                        borderColor: 'var(--border)',
                        color: 'var(--text-primary)',
                        '--tw-ring-color': 'var(--accent-primary)'
                      }}
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300"
                      style={{ 
                        backgroundColor: 'var(--bg-secondary)',
                        borderColor: 'var(--border)',
                        color: 'var(--text-primary)',
                        '--tw-ring-color': 'var(--accent-primary)'
                      }}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{ 
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border)',
                      color: 'var(--text-primary)',
                      '--tw-ring-color': 'var(--accent-primary)'
                    }}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300 resize-vertical"
                    style={{ 
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border)',
                      color: 'var(--text-primary)',
                      '--tw-ring-color': 'var(--accent-primary)'
                    }}
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary btn-ripple w-full py-4 text-lg font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
