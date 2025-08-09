import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { AnimatedElement } from '../components/ui/AnimatedElement';
import { ContactForm } from '../types';

interface ContactProps {
  onNavigate: (page: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ }) => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactForm>>({});

  const validateForm = () => {
    const newErrors: Partial<ContactForm> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'tarainterior111@gmail.com',
      description: 'Send us an email anytime.'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 99446 89222',
      description: 'Mon-Fri from 8am to 5pm.'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'No 1/2, Near Camford International School, Manikaranpalayam, Sangaralinganar Road, Ganapathy-641006',
      description: 'Come and Make your Idea Real '
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 h-96 bg-[url('/cv1.jpg')]  bg-cover bg-center ">
        <Container className="grid grid-cols-2 gap-8">
          <div/>
          
          <div className="text-left max-w-4xl mx-auto">
            <AnimatedElement animation="fadeIn">
              <h1 className="  text-4xl md:text-5xl lg:text-6xl font-playfair">
                <span className="box-decoration-slice bg-desert-vanilla text-yellow-600 ">Get In Touch</span>
              </h1>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={200}>
              <p className="text-left text-xl md:text-xl text-black-600 leading-relaxed font-playfair bg-desert-vanilla rounded lg px-4 py-2">
                - Ready to transform your business? Let's discuss your project and create something amazing together.
              </p>
            </AnimatedElement>
          </div>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="relative py-20 bg-[url('/65.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-treanparent "></div>
        <div className="relative z-10">
          <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimatedElement animation="slideInLeft">
              <div className="bg-black rounded-2xl p-8 shadow-lg border border-gray-100">
                  {!isSubmitted && (
      <h2 className="text-2xl font-serif text-gray-300 mb-6">
        Send us a message
      </h2>
    )}

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-300 mx-auto mb-4" />
                    <h3 className="text-xl font-serif text-gray-300 mb-2">Message Sent!</h3>
                    <p className="text-gray-300 font-playfair">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-black space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-playfair text-white mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 font-serif  bg-gray-800 rounded-lg border ${
                            errors.name ? 'border-red-500' : 'border-gray-800'
                          } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                          style={{ color: 'white' }} 
                          placeholder="Your full name "
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-playfair text-gray-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={` w-full px-4 py-3 font-serif bg-gray-800 rounded-lg border-0 ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                          style={{ color: 'white' }} 
                          placeholder="your@email.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-playfair text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 font-serif text-white rounded-lg border-0 bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        style={{ color: 'white' }} 
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-playfair text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 font-serif bg-gray-800 rounded-lg border-0 ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none`}
                        style={{ color: 'white' }} 
                        placeholder="Tell us about your project..."

                      />
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>
                    
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon={Send}
                      loading={isSubmitting}
                      className="w-full bg-yellow-600 hover:bg-yellow-800"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </div>
            </AnimatedElement>

            {/* Contact Info */}
            <AnimatedElement animation="slideInRight">
              <div className="space-y-8">
                <div>
                  <h2 className=" text-shadow-lg text-2xl font-playfair text-gray-100 mb-7">Contact Information</h2>
                  <p className="text-gray-200 drop-shadow-md font-playfair leading-relaxed mb-8">
                    Have questions about our services or want to discuss your project? 
                    We're here to help and would love to hear from you.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-3 rounded-xl">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-playfair text-gray-100 mb-1">{info.title}</h3>
                        <p className="text-gray-300 font-playfair mb-1">{info.content}</p>
                        <p className="text-gray-300 font-playfair text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Office Hours */}
                <div className="bg-gray-200 rounded-2xl p-6">
                  <h3 className="font-serif text-gray-900 mb-4">Office Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-900 font-serif">Monday - Friday</span>
                      <span className="text-gray-900 font-serif">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-900 font-serif">Saturday</span>
                      <span className="text-gray-900 font-serif">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-900 font-serif">Sunday</span>
                      <span className="text-gray-900 font-serif">Closed</span>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="font-serif text-black-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {[
                      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tara-interiors-49b5a42b4/' },
                      { name: 'Instagram', url: 'https://www.instagram.com/tarainteriors_homes/' },
                      { name: 'IndiaMart', url: 'https://www.indiamart.com/tara-interiors/' },
                    ].map((platform) => (
                      <a
                        key={platform.name}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                        aria-label={platform.name}
                      >
                        <span className="text-sm font-medium">{platform.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </Container>
        </div>
        
      </section>
    </div>
  );
};