export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Service {
  id: string;
  name: string;
  description?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: string;
  emoji: string;
  services: Service[];
  color: string;
}

export interface TestimonialProps {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface CTAButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
} 