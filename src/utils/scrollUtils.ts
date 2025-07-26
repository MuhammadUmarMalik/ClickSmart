export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 80; // Account for fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const handleNavClick = (href: string, callback?: () => void) => {
  if (href.startsWith('#')) {
    const sectionId = href.substring(1);
    scrollToSection(sectionId);
    if (callback) callback();
  } else {
    window.open(href, '_blank', 'noopener,noreferrer');
  }
}; 