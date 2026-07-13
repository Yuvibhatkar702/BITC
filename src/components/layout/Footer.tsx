import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-dark text-slate-100 py-12 mt-auto bg-[#191E27]">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">BITC</h3>
          <p className="text-sm text-gray-400">
            Empowering Future Professionals with Industry-Ready Skills.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/courses" className="hover:text-white transition-colors">Courses</Link></li>
            <li><Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Programs</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/courses/it" className="hover:text-white transition-colors">Information Technology</Link></li>
            <li><Link href="/courses/engineering" className="hover:text-white transition-colors">Engineering</Link></li>
            <li><Link href="/courses/management" className="hover:text-white transition-colors">Management</Link></li>
            <li><Link href="/courses/design" className="hover:text-white transition-colors">Designing</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Contact Us</h4>
          <p className="text-sm text-gray-400">Email: info@bitc.edu.in</p>
          <p className="text-sm text-gray-400">Phone: +91 98765 43210</p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-sm text-gray-400 text-center">
        © {new Date().getFullYear()} BIZONANCE Industrial Training Centre. All rights reserved.
      </div>
    </footer>
  );
}
